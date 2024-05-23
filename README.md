# headless-react-qr-scanner

A headless React QR code scanner component. Uses [qr-scanner](https://github.com/nimiq/qr-scanner) under the hood.

## Installation

```bash
npm i headless-react-qr-scanner
```

## Usage

```tsx
import {QrScanner, Video, StartButton, StopButton} from "headless-react-qr-scanner";

function Demo() {
  return (
    <QrScanner onDecode={(res) => console.log(res.data)}>
      <Video style={{height: 600, width: 600}} />
      <StartButton>Start</StartButton>
      <StopButton>Stop</StopButton>
    </QrScanner>
  );
}
```

You can omit the buttons and pass `autoStart` prop to `QrScanner` to start the scanner automatically.

```tsx
import {QrScanner, Video} from "headless-react-qr-scanner";

function Demo() {
  return (
    <QrScanner onDecode={(res) => console.log(res.data)} autoStart>
      <Video style={{height: 600, width: 600}} />
    </QrScanner>
  );
}
```

## Styling

The components `Video`, `StartButton` and `StopButton` are unstyled by default. You can style them by passing a `className` o `style` prop to the components.

## TODO

- [ ] Add tests
- [ ] Document props and components in README
