import {QrScanner, StartButton, StopButton, Video} from "../lib/main";

function App() {
  return (
    <QrScanner onDecode={(res) => console.log(res.data)}>
      <Video style={{height: 600, width: 600}} />
      <StartButton />
      <StopButton />
    </QrScanner>
  );
}

export default App;
