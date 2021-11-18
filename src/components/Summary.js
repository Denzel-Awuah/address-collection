import { useSelector, useDispatch } from 'react-redux';
import { addressActions } from '../store';
import { useHistory } from "react-router-dom";


function Summary() {

    const dispatch = useDispatch();
    let history = useHistory();

    const resedentialAddresses = useSelector((state) => state.resedentialAddress);
    const propertyAddress = useSelector((state) => state.propertyAddress);
    const employmentAddress = useSelector((state) => state.employmentAddress);

  

    const showLogs = () => {
        console.log(resedentialAddresses)
        console.log(propertyAddress)
        console.log(employmentAddress)


        document.getElementById("textArea").value = "Resedential Address"
        document.getElementById("textArea").value += JSON.stringify(resedentialAddresses)
        document.getElementById("textArea").value += "\nProperty Address"
        document.getElementById("textArea").value += JSON.stringify(propertyAddress)
        document.getElementById("textArea").value += "\nEmployment Address"
        document.getElementById("textArea").value += JSON.stringify(employmentAddress)

    }



    const previousHandler = () => {
        history.push("/employment");
    }

    return (
        <div>
            <h1>Summary</h1>

        <textarea  id="textArea" />

     

       
            <button onClick={previousHandler}>Back</button>
            <button onClick={showLogs}>Show Results</button>

        </div>
    );
}

export default Summary;
