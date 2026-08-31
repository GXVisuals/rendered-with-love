export const CONTACT_PROMPT_EVENT = "open-mobile-contact-prompt";

export const isMobileViewport = () =>
  typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;

export const openMobileContactPrompt = () => {
  window.dispatchEvent(new Event(CONTACT_PROMPT_EVENT));
};

export const scrollToContactForm = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
};

export const openContactFromCta = () => {
  if (isMobileViewport()) {
    openMobileContactPrompt();
    return;
  }

  scrollToContactForm();
};
