import "./App.css";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data";

function App() {
    const cards = data.map((instance) => {
        return (
            <Card 
                key={instance.id}
                /*img={instance.coverImg}
                rating={instance.stats.rating}
                reviewCount={instance.stats.reviewCount}
                location={instance.location}
                title={instance.title}
                price={instance.price}
                openSpots={instance.openSpots}
                instance={instance}*/
                {...instance}
            />
        )
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    );
}

export default App;
