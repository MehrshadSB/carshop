import Layout from "@/components/layouts/layout";
import Cards from "@/components/Modules/Cards";
import { carsData } from "@/data/carsData";
import { useRouter } from "next/router";

function filters() {
  const router = useRouter();
  const lowPrice = router.asPath.split("/")[2];
  const highPrice = router.asPath.split("/")[3];

  const filteredCars = carsData.filter(
    (car) => car.price >= lowPrice && car.price <= highPrice
  );
  console.log(filteredCars);

  return (
    <Layout>
      <div>
        {filteredCars.map((car) => (
          <Cards key={car.id} car={car} />
        ))}
      </div>
      <style jsx>
        {`
          div {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            max-width: 1200px;
            margin: auto;
            margin-top: 40px;
          }
        `}
      </style>
    </Layout>
  );
}

export default filters;
