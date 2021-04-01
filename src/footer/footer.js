import './footer.css'

export default function Footer() {

    const year = (new Date().getFullYear())

    return (
        <div className="App-footer">
            <p>Copyright: {year}</p>
        </div>
    )
}