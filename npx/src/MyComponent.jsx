import React, { useState } from 'react';

function MyComponent() {
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMade, setCarMade] = useState('')
    const [carModel, setCarModel] = useState('')

    function handleAddCar() {
        const newCar = { year: carYear, made: carMade, model: carModel }
        setCars(cars => [...cars, newCar])
        setCarYear(new Date().getFullYear())
        setCarMade('')
        setCarModel('')
    };
    function handleRemoveCar(index) {
        setCars(c => c.filter((_, i) => i !== index));
    };
    function handleYearchange(event) {
        setCarYear(event.target.value);
    };
    function handleMadeChange(event) {
        setCarMade(event.target.value);
    };
    function handleModelChange(event) {
        setCarModel(event.target.value);
    };
    return (
        <div>
            <h2>List of Car objects</h2>
            <ul>
                {cars.map((car, index) =>
                    <li key={index} onDoubleClick={() => handleRemoveCar(index)}>
                        {car.year} {car.made} {car.model}
                    </li>
                )}
            </ul>
            <input type="number" value={carYear} onChange={handleYearchange} /><br />
            <input type="text" value={carMade} onChange={handleMadeChange} placeholder='Enter car made' /><br />
            <input type="text" value={carModel} onChange={handleModelChange} placeholder='Enter car model' /><br />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    )
}
export default MyComponent