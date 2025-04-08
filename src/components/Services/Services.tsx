import { getOnlineServices, getOnsiteServices } from "@/sanity/queries";
import { PortableText } from "next-sanity";
import React from "react";

const Services = async () => {
  const onlineServices = await getOnlineServices();
    
  if (onlineServices?.length === 0) {
    return;
  }

  const onsiteServices = await getOnsiteServices();

  if (onsiteServices?.length === 0) {
    return;
  }

  return (
    <>
      <span id="services-section"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-8">
            <h1
              data-aos="fade-up"
              className="text-3xl font-bold text-center sm:text-4xl"
            >
              What <span className="text-primary">We</span> Offer
            </h1>

            <h1
              data-aos="fade-up"
              className="text-2xl text-center sm:text-2xl mt-3"
            >
              Online Yoga Sessions
            </h1>

            <p className="text-center">Available to the entire. Includes both groups and individual sessions. Join us online from anywhere!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {onlineServices.map((service: any) => (
              <div key={service.name}
                data-aos="fade-up"
                data-aos-delay={service.price}
                className="card text-center space-y-3 sm:space-y-6 p-4 sm:py-16 bg-gray-200 dark:bg-dark  hover:bg-primary/20 dark:hover:bg-primary/50 duration-300 text-black dark:text-white rounded-lg group "
              >
                {/* <div className="grid place-items-center">{service.icon}</div> */}
                <h1 className="text-3xl font-bold">{service.name}</h1>
                <h1 className="text-center text-4xl font-semibold text-primary">
                  {`${service.price}`} AED
                </h1>

                {service?.description && (
                    <PortableText 
                        value={service.description}
                        components={{
                            block: {
                                normal: ({ children }) => (
                                    <p>
                                        {children}
                                    </p>
                                ),
                            }
                        }} 
                    />
                )}

                <p className="font-semibold text-2xl">
                  {" "}
                  Duration : {service.duration}
                </p>
              </div>
            ))}
          </div>

          <div className="pb-6 mt-14">
            <h1
              data-aos="fade-up"
              className="text-2xl text-center sm:text-2xl mt-3"
            >
              Onsite Yoga Sessions (Dubai Only)
            </h1>
            <p className="text-center">Yoga events tailored for large groups like corporate or any other public session (Available only in Dubai).</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {onsiteServices.map((service : any) => (
              <div key={service.name}
                data-aos="fade-up"
                data-aos-delay={service.price}
                className="card text-center space-y-3 sm:space-y-6 p-4 sm:py-16 bg-gray-200 dark:bg-dark  hover:bg-primary/20 dark:hover:bg-primary/50 duration-300 text-black dark:text-white rounded-lg group "
              >
                {/* <div className="grid place-items-center">{service.icon}</div> */}
                <h1 className="text-3xl font-bold">{service.name}</h1>
                <h1 className="text-center text-4xl font-semibold text-primary">
                  {`${service.price}`} AED
                </h1>

                {service?.description && (
                    <PortableText 
                        value={service.description}
                        components={{
                            block: {
                                normal: ({ children }) => (
                                    <p>
                                        {children}
                                    </p>
                                ),
                            }
                        }} 
                    />
                )}

                <p className="font-semibold text-2xl">
                  {" "}
                  Duration : {service.duration}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Services;
