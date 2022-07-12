import Header from "./components/Header";
import SalesCard from "./components/SalesCard";

function App() {
  return (
    <> {/* Como ele executa apenas UMA TAG, se coloca o "<>" e os demais codigos dentro dele */}
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />

          </div>
        </section>
      </main>
    </> /* Fechando o "</>" do código. */
  )
}

export default App;
