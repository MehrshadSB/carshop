import CarList from "@/components/cars/CarList";
import { carsData } from "@/data/carsData";

function sedan() {
  const suv = carsData.filter(
    (car) => car.category === "suv"
  );
  return (
    <>
      <CarList data={suv} />
    </>
  );
}

export default sedan;
