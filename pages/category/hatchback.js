import CarList from "@/components/cars/CarList";
import { carsData } from "@/data/carsData";

function sedan() {
  const hatchback = carsData.filter(
    (car) => car.category === "hatchback"
  );
  return (
    <>
      <CarList data={hatchback} />
    </>
  );
}

export default sedan;
