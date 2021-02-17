import React, {useState, useEffect} from "react";
// import arrivalInfoData from "./data/arrivalInfoData.json";
// import servicesData from "./data/services.json";
// import accessibilityData from "./data/accessibility.json";
import { loadData } from './data/api';

const Info = () => {

  const [arrivalInfoData, setArrivalInfoData] = useState([]);
  const [servicesData, setServicesData] = useState([]);
  const [accessibilityData, setAccessibilityData] = useState([]);

  useEffect(() => {
    //step 2 load data
    loadData('arrival_info', setArrivalInfoData);
    loadData('services', setServicesData);
    loadData('accessibility', setAccessibilityData);
    //step 2 load data

  }, []);

 
  return (
    <div className="scene" id="hotelinfo">
      <article className="heading">
        <h1>Essential Info</h1>
      </article>
      <article id="usefulinfo">
        <section id="arrivalinfo">
          <h2>Arrival Information</h2>
          <ul>
            {arrivalInfoData.map((info) => (
              <li>
                <strong>{info.title}</strong> {info.text}
              </li>
            ))}
          </ul>
        </section>
        <section className="checklist" id="services">
          <h2>Services and Amenities</h2>
          <p>
            Our services and amenities are designed to make your travel easy,
            your stay comfortable, and your experience one-of-a-kind.
          </p>
          <ul>
            {servicesData.map((service) => (
              <li>{service.name}</li>
            ))}
          </ul>
        </section>
        <section className="checklist" id="accessibility">
          <h2>Accessibility</h2>
          <p>
            We're committed to maintaining the same quality of service for every
            individual. We offer the following facilities for those with special
            needs:
          </p>
          <ul>
            {accessibilityData.map((item) => (
              <li>{item.name}</li>
            ))}
          </ul>
        </section>
      </article>
      <article id="greenprogram">
        <h2>Landon Green Program</h2>
        <p>
          <strong>The Landon Hotel - London</strong> was recently renovated, and
          we considered the impact on the earth the entire way. From green
          building materials, to solar power, to energy-friendly lighting and
          appliances throughout the hotel - we’re saving energy in every socket,
          outlet, and switch. We’ve also initiated a recycling and composting
          program that reduces the load to local landfills, while providing
          valuable raw material for use in new products, or in the case of
          compost, for use in local gardens and landscapes.
        </p>
      </article>
    </div>
  );
};

export default Info;
