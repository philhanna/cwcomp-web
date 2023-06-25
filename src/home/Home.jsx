import React from "react"

// The home component is the full HTML page with the logo, the heading, and the menus

const Home = () => {
    return (
        <div className="w3-container">
            <h1>
                <img alt="Mozart looking at crossword puzzle"
                    src="https://github.com/philhanna/cwcomp/assets/3708685/ae96d3ed-36c0-47e1-b948-f3614058385e"
                    width="80px" />
                <span className="w3-padding">Crossword Composer</span>
            </h1>
        </div>
    )
}

export default Home