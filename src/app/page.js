import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <div className="hero">
          <h1>Dedicados a la investigaci&oacute;n y el desarrollo</h1>
          <Link href='' className="btn-yellow absolute bottom-40">Saber m&aacute;s</Link>
        </div>
      </main>
      <div className="bg-white text-black">
        <div className="container mx-auto py-16 lg:pb-60">
          <h5>NOSOTROS</h5>
          <h1>Laboratorios</h1>
          <div className="grid xl:grid-cols-2 gap-y-20 pt-12">
            <div className="flex flex-col xl:flex-row gap-12 xl:pr-48 items-center">
              <Image
                src={"/landing/laboratorios/lab-1.JPG"}
                width={216}
                height={216}
                className="aspect-square rounded-full object-cover object-left"
              />
              <div>
                <h5 className="font-bold pb-4">
                  Medicina Celular
                </h5>
                <p>Gen&eacute;tica, Gen&oacute;mica, Bioinform&aacute;tica, y la Biolog&iacute;a Molecular Aplicada</p>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row gap-12 xl:pr-48 items-center">
              <Image
                src={"/landing/laboratorios/lab-2.JPG"}
                width={216}
                height={216}
                className="aspect-square rounded-full object-cover object-left"
              />
              <div>
                <h5 className="font-bold pb-4">
                  C&eacute;lulas Madre
                </h5>
                <p>Mantenimiento de la viabilidad y funcionabilidad celular</p>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row gap-12 xl:pr-48 items-center">
              <Image
                src={"/landing/laboratorios/lab-3.JPG"}
                width={216}
                height={216}
                className="aspect-square rounded-full object-cover object-left"
              />
              <div>
                <h5 className="font-bold pb-4">
                  Biolog&iacute;a Celular
                </h5>
                <p>Aislamiento, cultivo y preservaci&oacute;n de cultivos celulares</p>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row gap-12 xl:pr-48 items-center">
              <Image
                src={"/landing/laboratorios/lab-4.JPG"}
                width={216}
                height={216}
                className="aspect-square rounded-full object-cover object-right"
              />
              <div>

                <h5 className="font-bold pb-4">
                  Nanotecnolog&iacute;a y Microelectr&oacute;nica
                </h5>
                <p>Cuartos limpios clase 1, 100, y 1000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
