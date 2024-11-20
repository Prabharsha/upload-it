import React from "react";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="hidden w-1/2 items-center justify-center bg-brand p-10 lg:flex xl:w-1/2">
        <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
          <Image
            src="/assets/images/logo-white.png"
            alt="logo"
            width={150}
            height={100}
            className="h-auto"
          />

          <div className="space-y-5 text-white">
            <h1 className="h1"> Manage your files best way</h1>
            <p className="body-1">
              This is a place where you can store all your documents
            </p>
          </div>

          <Image
            src="/assets/images/files.png"
            alt="files"
            height={280}
            width={280}
            className="transition-all hover:rotate-2 hover:scale-105"
          />
        </div>
      </section>
      <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        <div className="mb-16 lg:hidden">
          <Image
            src="/assets/icons/logo-brand.png"
            alt="logo"
            width={223}
            height={82}
            className="h-auto width-[200px] lg:width-[250px]"
          />
        </div>
        {children}
      </section>
    </div>
  );
};

export default Layout;