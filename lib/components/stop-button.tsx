import {ButtonHTMLAttributes, forwardRef, useContext} from "react";
import {QrScannerContext} from "./qr-scanner-context";

export const StopButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  function StopButton(props, ref) {
    const context = useContext(QrScannerContext);
    if (!context) {
      throw new Error("useQrScanner must be used within a QrScannerProvider");
    }

    return (
      <button
        ref={ref}
        {...props}
        onClick={(e) => {
          context.stop();
          props.onClick?.(e);
        }}
      />
    );
  },
);
