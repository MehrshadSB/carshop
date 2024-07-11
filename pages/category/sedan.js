import CarList from "@/components/cars/CarList";
import { carsData } from "@/data/carsData";

function sedan() {
  const sedan = carsData.filter(
    (car) => car.category === "sedan"
  );
  return (
    <>
      <CarList data={sedan} />
      
    </>
  );
}

export default sedan;
