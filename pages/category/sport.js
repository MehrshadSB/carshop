import CarList from "@/components/cars/CarList";
import { carsData } from "@/data/carsData";

function sedan() {
  const sport = carsData.filter(
    (car) => car.category === "sport"
  );
  return (
    <>
      <CarList data={sport} />
    </>
  );
}

export default sedan;
