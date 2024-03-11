import React from "react";
import { SocialIcon } from "react-social-icons";

function FooterSection() {
  return (
    <section className="flex justify-center items-center m-10">
      <SocialIcon
        className="ml-5"
        network="github"
        url="https://github.com/AlfariziDwiPrasetyo/AsmaulHusnaWeb"
        bgColor="black"
      />

      <SocialIcon
        className="ml-5"
        network="instagram"
        url="https://www.instagram.com/alfariziiprasetyo/"
        bgColor="black"
      />

      <SocialIcon
        className="ml-5"
        network="facebook"
        url="https://www.facebook.com/shirookam/"
        bgColor="black"
      />
    </section>
  );
}

export default FooterSection;
