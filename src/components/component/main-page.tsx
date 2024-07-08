/* eslint-disable @next/next/no-img-element */

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ContactPage from "../contact/contact"
import {
  SheetTrigger,
  SheetContent,
  Sheet,
  SheetClose,
} from "@/components/ui/sheet";

export function MainPage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-primary/80 text-primary-foreground py-4 px-6 sticky top-0 z-50  backdrop-blur flex items-center justify-between">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          <span className=" text-xl font-bold px-3">L5M SERVICES</span>
        </Link>
        <nav className="ml-auto gap-4 sm:gap-6 hidden md:flex">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Accueil
          </Link>
          <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Services
          </Link>
          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            À propos
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Témoignages
          </Link>
          
          <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="default" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            className="w-full max-w-xs  p-6 backgroundCustom"
            side="right"
          >
            <div className="flex flex-col gap-6">
              <SheetClose asChild>
                <Link
                  className="font-medium hover:text-gray-900 dark:hover:text-gray-50"
                  href="#services"
                >
                  Services
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  className="font-medium hover:text-gray-900 dark:hover:text-gray-50"
                  href="#about"
                >
                  À propos
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  className="font-medium hover:text-gray-900 dark:hover:text-gray-50"
                  href="#testimonials"
                >
                  Témoignages
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  className="font-medium hover:text-gray-900 dark:hover:text-gray-50"
                  href="#contact"
                >
                  Contact
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y  bg-gradient-to-l from-secondary to-muted">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Domiciliation d&apos;entreprise avec L5M SERVICES
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Profitez d&apos;une adresse de domiciliation fiable et sécurisée pour votre entreprise.
                </p>
                <div className="space-x-4 mt-6">
                  <Link
                    href="#contact"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Nous contacter
                  </Link>
               
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <img
                  src="/intro.jpeg"
                  width="550"
                  height="310"
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="flex justify-center w-full py-12 md:py-24 lg:py-32  bg-muted">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted-foreground px-3 py-1 text-sm">Nos services</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-accent-foreground ">
                  Nos solutions de domiciliation d&apos;entreprise
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Découvrez nos différentes offres de domiciliation d&apos;entreprise adaptées à vos besoins.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-accent-foreground ">Domiciliation de siège social</h3>
                <p className="text-sm text-muted-foreground">
                  Bénéficiez d&apos;une adresse de domiciliation de siège social prestigieuse et sécurisée.
                </p>
            
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-accent-foreground ">Domiciliation de succursale</h3>
                <p className="text-sm text-muted-foreground">
                  Ouvrez une succursale dans une nouvelle région avec une adresse de domiciliation.
                </p>
                
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-accent-foreground ">Domiciliation de bureau virtuel</h3>
                <p className="text-sm text-muted-foreground">
                  Bénéficiez d&apos;une adresse de domiciliation pour votre entreprise en télétravail.
                </p>
             
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32  flex justify-center bg-background">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">À propos</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-muted-foreground">Qui sommes-nous ?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  L5M SERVICES est une entreprise spécialisée dans la domiciliation d&apos;entreprise. Depuis plus de 10
                  ans, nous accompagnons les entrepreneurs et les entreprises dans la gestion de leur adresse
                  professionnelle.
                </p>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Notre équipe d&apos;experts vous propose des solutions sur-mesure pour répondre à vos besoins spécifiques.
                  Que vous soyez une start-up, une PME ou une grande entreprise, nous saurons vous trouver la meilleure
                  adresse de domiciliation.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Témoignages de nos clients satisfaits
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Découvrez ce que nos clients pensent de nos services de domiciliation d&apos;entreprise.
              </p>
            </div>
            <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <Card className="p-6 space-y-4">
                <blockquote className="text-lg font-semibold leading-snug">
                &quot;L&apos;équipe de L5M SERVICES a été très réactive et professionnelle. Leur service de domiciliation m&apos;a
                  permis de me concentrer sur le développement de mon entreprise.&quot;
                </blockquote>
                <div>
                  <div className="font-semibold">Julien Dupont</div>
                  <div className="text-sm text-muted-foreground">Responsable magasin</div>
                </div>
              </Card>
              <Card className="p-6 space-y-4">
                <blockquote className="text-lg font-semibold leading-snug">
                &quot;Grâce à la domiciliation de mon entreprise chez L5M SERVICES, j&apos;ai pu bénéficier d&apos;une adresse
                  prestigieuse et sécurisée.Cela a vraiment renforcé l&apos;image de ma société.&quot;
                </blockquote>
                <div>
                  <div className="font-semibold">Sophie Mercier</div>
                  <div className="text-sm text-muted-foreground">Gérante, Boutique de mode</div>
                </div>
              </Card>
              <Card className="p-6 space-y-4">
                <blockquote className="text-lg font-semibold leading-snug">
                &quot;Le service de domiciliation de bureau virtuel de L5M SERVICES m&apos;a permis de garder une adresse
                  professionnelle tout en travaillant à distance. C&apos;est une solution très pratique!&quot;
                </blockquote>
                <div>
                  <div className="font-semibold">Léa Moreau</div>
                  <div className="text-sm text-muted-foreground">Consultante, Société de conseil</div>
                </div>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-accent-foreground ">
                Contactez-nous pour une domiciliation d&apos;entreprise
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Notre équipe se fera un plaisir de vous renseigner sur nos différentes offres de domiciliation.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <ContactPage />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary py-8 text-primary-foreground ">
        <div className=" mx-auto px-4 md:px-6 flex flex-col md:flex-column items-center justify-between">
          <p className="  mt-4 ">© 2024 L5M SERVICES.</p>
          <p className="  "> Tous droits réservés.</p>
        </div>
        <div className=" mx-auto px-4 md:px-6 flex flex-col md:flex-column items-center justify-between">
          <p className="  mt-4 ">96 RUE PARADIS</p>
          <p className="   ">13006 MARSEILLE</p>
          <p className="  mt-4 ">contact@l5m-services.fr</p>

          <p className="  mt-4 ">TEL: 05 35 54 19 41</p>
        </div>
      </footer>
    </div>
  )
}

function BuildingIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  )
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
