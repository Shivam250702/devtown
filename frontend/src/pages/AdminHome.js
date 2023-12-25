import AdminProductList from "../features/product-list copy/components/AdminProductList";
import NavBar from "../features/navbar/Navbar";

function AdminHome() {
    return ( 
        <div>
            <NavBar>
                <AdminProductList></AdminProductList>
            </NavBar>
            
        </div>
     );
}

export default AdminHome;