import star from "../images/star.png"

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--image" alt="card-image" src={require(`../../public/images/${props.coverImg}`)}></img>
            <div className="card--stats">
                <img className="card--star" alt="card--rating" src={ star }></img>
                <span className="card--rating">&nbsp;{props.stats.rating}&nbsp;</span>
                <span className="card--greyed"> ({props.stats.reviewCount}) •&nbsp;</span>
                <span className="card--greyed">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><b>From ${props.price}</b> / person</p>
        </div>
    )
}