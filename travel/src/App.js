import "./App.css"
import { Data } from "./Data"
import Card from "./Card"
import Navbar from "./Navbar"

function App() {
  const cards = Data.map((card) => {
    return (
      <div>
        <section className="card-list">
          <Card prop={card} />
        </section>
      </div>
    )
  })
  return (
    <div className="App">
      <div>
        <Navbar />
        {cards}
      </div>
    </div>
  )
}

export default App
