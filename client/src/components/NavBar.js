import React from "react";


const NavBar = () => {

    return (

        <header className="d-flex justify-content-between align-items-center">

            <div className="ms-3" id="">
                <h2>Pasithea</h2>
            </div>

            <div className="me-3" id="">
                <a className="mx-3" href="/">Home</a>
                <a className="mx-3" href="/topics">Link 2</a>
                <a className="mx-3" href="/">Link 3</a>
            </div>

        </header>

    );
};

export default NavBar;