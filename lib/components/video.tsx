import {VideoHTMLAttributes, useContext} from "react";
import {QrScannerContext} from "./qr-scanner-context";

export function Video(props: VideoHTMLAttributes<HTMLVideoElement>) {
  const context = useContext(QrScannerContext);
  if (!context) {
    throw new Error("useQrScanner must be used within a QrScannerProvider");
  }

  return <video ref={context.videoRef} {...props} />;
}
