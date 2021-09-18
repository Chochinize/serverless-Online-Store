
import Navbar from "./Navbar";

import Header from "./Header";
const Layout = ({children}) => {

    



    return (
        <div>
    
         
            <Navbar/>s
            <Header/>
          {children}

       
        </div>
    );
}
 
export default Layout;