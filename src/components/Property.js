import { useSelector, useDispatch } from 'react-redux';
import { addressActions } from '../store';
import { useHistory } from "react-router-dom";


function PropertyAddress() {

    const dispatch = useDispatch();
    let history = useHistory();

    const propertyAddresses = useSelector((state) => state.propertyAddress);

    const handleSubmit = (event) => {
        event.preventDefault();

        //const {streetNumber, streetName, city , province, code} = event.target.elements;
        const streetName = event.target.streetName;
        const streetNumber = event.target.streetNumber;
        const city = event.target.city;
        const province = event.target.province;
        const code = event.target.code;

        const data = {
            streetNumber: streetNumber.value,
            streetName: streetName.value,
            city: city.value,
            province: province.value,
            code: code.value
        }

        dispatch(addressActions.updateProperty(data));
        history.push("/employment");

    }


    const showLogs = () => {
        console.log(propertyAddresses)
    }

    
    const previousHandler = () => {
      history.push("/resedential");
  }

    return (
        <div>
            <h1>Property Address</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Street Number:
                    <input type="number" id="streetNumber" name="streetNumber" />
                </label>

                <br />

                <label>
                    Street Name:
                    <input type="text" id="streetName" name="streetName" />
                </label>

                <br />


                <label>
                    City:
                    <input type="text" id="city" name="city" />
                </label>

                <br />

                <label>
                    Province:
                    <input type="text" id="province" name="province" />
                </label>

                <br />

                <label>
                    Code:
                    <input type="text" id="code" name="code" />
                </label>

                <br />


                <input type="submit" id="submit" />
            </form>

            <button onClick={previousHandler}>Back</button>
            <button onClick={showLogs}>Log data</button>
        </div>
    );
}

export default PropertyAddress;
