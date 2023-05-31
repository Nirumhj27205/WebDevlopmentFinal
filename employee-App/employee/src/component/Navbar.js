
import { AppBar, Toolbar, styled, Button } from '@mui/material';

 import { NavLink } from 'react-router-dom';

 import "../style.css"

const Header = styled(AppBar)`
    background: #111111;
`;

const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
`;

const Navbar = () => {
    return (
        <div className="top-bar">
            <div className="header-title">
                <h1 className="top-header"> Employee
                    <span className="header-style"> Data </span>
                    Collection</h1>
            </div>

            <div className="btn">
                <Button href="/" className="btn-1" variant="contained">All Employers</Button>
                <Button href="/add" className="btn-2" variant="contained">Add Employee</Button>
           </div>
        </div>
         
        // <Header position="static">
        //     <Button to="/">All Employe</Button>
        //     <Button to="/">Add Employe</Button>
        //     {/* <Toolbar>
        //         <Button>All Employe</Button>

        //         <Tabs to="/" >All Employers</Tabs>
        //         <Tabs to="/add" >Add Employee</Tabs>
        //     </Toolbar> */}
        // </Header>
    )
}

export default Navbar;