


// document level 

const cardStyle = {

    backgroundColor: 'yellow',
    width: '200px',
    margin: '10px',
    padding: '10px',
    borderRadius:'5px',




}
const headingStyle = {
    color:'red',
    fontSize: '20px'
}

function AwesomeCard() {
    return (

        <div style={cardStyle}>
            <h1 style={headingStyle}>AwesomeCard</h1>
            <p>Awesome card description</p>
        </div>
    )

}
export default AwesomeCard