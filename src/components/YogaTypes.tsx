import { urlFor } from '@/sanity/lib/image';
import { getYogaTypes } from '@/sanity/queries';
import { PortableText } from 'next-sanity';
import Link from 'next/link';
import React from 'react'

const YogaTypes = async () => {
  const yogaTypes = await getYogaTypes();
  
  if (yogaTypes?.length === 0) {
    return;
  }

  return (
    <div className="py-14 dark:bg-black bg-slate-100 duration-300">
        <div className="container" data-aos="fade-down">
            <div className="pb-12">
                <h1
                data-aos="fade-up"
                className="text-3xl font-bold text-center sm:text-4xl"
                >
                Different <span className="text-primary">Types of</span> Yoga
                </h1>
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {yogaTypes?.map((yogaType : any) => (
                    <Link key={yogaType?.slug} href="#" className="group border dark:border-gray-800 rounded-lg">
                        <img src={urlFor(yogaType?.photo).url()} alt={yogaType.name} className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]" />
                        <div className='px-5 pb-4'>
                            <h3 className="mt-4 text-lg font-medium ">{yogaType?.name}</h3>
                            {yogaType?.description && (
                                <PortableText 
                                    value={yogaType?.description}
                                    components={{
                                        block: {
                                            normal: ({ children }) => (
                                                <p className="mt-1 text-sm ">
                                                    {children}
                                                </p>
                                            ),
                                        }
                                    }} 
                                />
                            )}
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    </div>
  )
}

export default YogaTypes