import grid from "../images/grid.png"

export default function Hero() {
    return (
        <div className="hero">
            <img className="hero--grid" alt="image-grid" src={ grid }></img>
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--description">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}