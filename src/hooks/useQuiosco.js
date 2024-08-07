import { useContext } from "react";
import QuioscoContext from "../content/QuioscoProvider";

const useQuiosco = () => {
    return useContext(QuioscoContext)
}

export default useQuiosco