import {ButtonHTMLAttributes, forwardRef, useContext} from "react";
import {QrScannerContext} from "./qr-scanner-context";

export const StartButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  function StartButton(props, ref) {
    const context = useContext(QrScannerContext);
    if (!context) {
      throw new Error("useQrScanner must be used within a QrScannerProvider");
    }

    return (
      <button
        ref={ref}
        {...props}
        onClick={(e) => {
          context.start();
          props.onClick?.(e);
        }}
      />
    );
  },
);
