import * as React from 'react';

// import logo from '@/assets/logo.svg';
// import { Link } from '@/components/Elements';
// import { Head } from '@/components/Head';

type LayoutProps = {
    children: React.ReactNode;
    title: string;
};

export const Layout = ({ children, title }: LayoutProps) => {
    return (
        <>
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="col-span-1 sm:mx-auto sm:w-full sm:max-w-md">
                        <div className="flex justify-center">
                            {/* <Link className="flex items-center text-white" to="/">
              <img className="h-24 w-auto" src={logo} alt="Workflow" />
            </Link> */}
                        </div>


                    </div>

                    <div className="col-span-2 mt-8 px-5 sm:mx-auto sm:w-full sm:max-w-md md:max-w-2xl lg:px-0">
                        <h2 className="my-3 text-center text-3xl font-extrabold text-gray-900">{title}</h2>
                        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">{children}</div>
                    </div>
                </div>
            </div>
        </>
    );
};  