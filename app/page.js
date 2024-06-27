'use client'

import { useRef } from 'react';
import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";
import FAQ from "./components/FAQ";
import Intro from "./components/Intro";
import Testimonials from "./components/Testimonials";

export default function Home() {
  const contactFormRef = useRef(null);

  return (
    <>
      <Intro contactFormRef={contactFormRef} />
      <AboutUs />
      <Testimonials />
      <FAQ />
      <ContactForm ref={contactFormRef} />
    </>
  );
}
