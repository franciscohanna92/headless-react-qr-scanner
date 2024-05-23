import {useEffect, useRef, ReactNode, useCallback} from "react";
import QrScannerLib from "qr-scanner";
import {QrScannerContext} from "./qr-scanner-context";

interface QrScannerProviderProps {
  onDecode(result: QrScannerLib.ScanResult): void;
  autoStart?: boolean;
  children: ReactNode;
  onDecodeError?(error: Error | string): void;
  maxScansPerSecond?: number;
}

export function QrScanner({onDecode, autoStart = false, children, ...options}: QrScannerProviderProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const scanner = useRef<QrScannerLib | null>(null);

  const start = useCallback(() => {
    if (scanner.current) {
      scanner.current?.start();
    }
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      const qrScanner = new QrScannerLib(videoRef.current, onDecode, {
        ...options,
      });
      scanner.current = qrScanner;
    }
    return () => {
      scanner.current?.destroy();
    };
  }, [onDecode, options]);

  useEffect(() => {
    if (autoStart) {
      start();
    }
  }, [autoStart, start]);

  const stop = () => {
    if (scanner) {
      scanner.current?.stop();
    }
  };

  return <QrScannerContext.Provider value={{start, stop, videoRef}}>{children}</QrScannerContext.Provider>;
}
