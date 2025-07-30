import Header from "./components/header";
import Section_Banner from "./components/section-banner";
import Training from "./components/training";
import Statistics from "./components/statistics";

function App() {
  return (
    <>
      <Header />
      <main>
        <Section_Banner />
        <Training/>
        <Statistics/>
       
      </main>
    </>
  );
}

export default App;
