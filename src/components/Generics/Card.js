import './Card.css'

/* props.children renders all children components inside the component
    eg. <Card><p>This is a child component</p></Card>
*/
const Card = (props) => {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card
