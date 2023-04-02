import MakeABig from "./Components/Animations/MakeABig";
import FadeIn from "./Components/Animations/FadeIn";
import FadeOut from "./Components/Animations/FadeOut";
import Rotate from "./Components/Animations/Rotate";
import Pulse from "./Components/Animations/Pulse";
import Bounce from "./Components/Animations/Bounce";
import ScaleUp from "./Components/Animations/ScaleUp";
import SlideIn from "./Components/Animations/ScaleIn";
import Flip from "./Components/Animations/Flip";
import Shake from "./Components/Animations/Shake";
import Wobble from "./Components/Animations/Wobble";
import AnimatedComponents from "./Components/Animations/AnimatedComponents";
import Ping from "./Components/Animations/Ping";
import ErrorBoundary from "./Components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <div>
        <MakeABig /> <Rotate />
        <FadeIn /> <FadeOut />
        <Pulse /> <Bounce />
        <ScaleUp /> <SlideIn />
        <Flip /> <Shake /> <Ping />
        <Wobble /> <AnimatedComponents />
      </div>
    </ErrorBoundary>
  );
}

export default App;
