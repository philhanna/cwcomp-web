import React from "react"

// MenuBar is a single row near the top of the screen that contains
// the menu
const MenuBar = () => {
    return (
        <div className="w3-bar w3-blue-gray mb">
            <Menu label="Grid">
                <MenuItem label="New grid..." enabled="true" />
                <MenuItem label="New grid from puzzle..." enabled="true" />
                <MenuItem label="Open grid..." enabled="true" />
                <MenuItem label="Save grid" />
                <MenuItem label="Save grid as..." />
                <MenuItem label="Close grid" />
                <MenuItem label="Delete grid" />
            </Menu>
            <Menu label="Puzzle">
                <MenuItem label="New puzzle..." enabled="true" />
                <MenuItem label="Open puzzle..." enabled="true" />
                <MenuItem label="Save puzzle" />
                <MenuItem label="Save puzzle as..." />
                <MenuItem label="Close puzzle" />
                <MenuItem label="Delete puzzle" />
            </Menu>
            <Menu label="Publish">
                <MenuItem label="Across Lite format" enabled="true" />
                <MenuItem label="Crossword Compiler format" enabled="true" />
                <MenuItem label="New York Times format" enabled="true" />
            </Menu>
            <MenuHelp />
        </div>
    );
}

// Menu renders a top level menu and its menu items
const Menu = (props) => {
    return (
        <div className="w3-dropdown-hover w3-blue-gray">
            <button className="w3-button">{props.label}</button>
            <div className="w3-dropdown-content w3-bar-block w3-card-4">
                {props.children}
            </div>
        </div>
    )
}

// MenuItem allows the user to select a function in a menu
const MenuItem = (props) => {
    var classNames = "w3-bar-item w3-button";
    const enabled = props.enabled;
    if (enabled != "true") {
        classNames += " w3-disabled";
    }
    return (
        <a className={classNames}>
            {props.label}
        </a>
    )
}

// MenuHelp is a menu item in the menu bar that appears on the far right.
const MenuHelp = () => {
    return (
        <a
            className="w3-bar-item w3-button w3-right"
            href="https://github.com/philhanna/crossword/wiki"
        >
            Help
        </a>
    )
}

export default MenuBar;