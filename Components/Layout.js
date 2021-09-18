
import Navbar from "./Navbar";

import Header from "./Header";
const Layout = ({children}) => {

    



    return (
        <div>
    
         
            <Header/>
            <Navbar/>
          {children}

       
        </div>
    );
}
 
export default Layout;