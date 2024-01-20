const subjectInput = document.querySelector("#subject") as HTMLInputElement;
const bodyInput = document.querySelector("#body") as HTMLInputElement;
const contactForm = document.querySelector("#contactForm") as HTMLFormElement;

let subjectValue = "";
let bodyValue = "";

subjectInput.addEventListener("change", (ev) => {
  const target = ev.target as HTMLInputElement;
  subjectValue = target.value;

  updateFormAction();
});

bodyInput.addEventListener("change", (ev) => {
  const target = ev.target as HTMLInputElement;
  bodyValue = target.value;

  updateFormAction();
});

function updateFormAction() {
  const baseAction = contactForm.getAttribute("action")?.split("?")[0];
  contactForm.action = `${baseAction}?subject=${encodeURIComponent(
    subjectValue
  )}&body=${encodeURIComponent(bodyValue)}`;
}

contactForm.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const subject = encodeURIComponent(subjectValue);
  const body = encodeURIComponent(bodyValue);

  window.open(
    `mailto:adrian@adrianluca.dev?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
  );
});
