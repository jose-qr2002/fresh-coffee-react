import { useContext } from "react";
import QuioscoContext from "../content/QuioscoProvider";

const useQuiosco = () => {
    console.log();
    
    return useContext(QuioscoContext)
}

export default useQuiosco