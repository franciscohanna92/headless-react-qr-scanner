import React, {createContext} from "react";

interface QrScannerContextProps {
  start: () => void;
  stop: () => void;
  videoRef: React.RefObject<HTMLVideoElement>;
}

export const QrScannerContext = createContext<QrScannerContextProps | undefined>(undefined);
