function onClick({ target: { className, id } }) {
  removeNode(id); // ! remove any element with a className="hovered" before setting one again on a different element

  const button = document.querySelector(`button.${className}#${id}`); // ! specifically selecting the element that is a "button" tag and has "className" together with "id"

  const div = document.createElement("div");
  const slash = document.createElement("span");
  const link = document.createElement("a");

  button?.classList.add("is-hovered"); // ! '?' checks if button element exists, then add a new className

  div.className = "hovered";
  slash.className = "slash";

  link.innerHTML = "Explore";
  link.className = "link";
  link.href = `/${String(id).toLowerCase()}.html`; // ! wraps "id" around "Sring" since "id" is expected to be a string

  const container = button?.appendChild(div);

  container.appendChild(slash);
  container.appendChild(link);
}
function removeNode(id) {
  const buttons = document.querySelectorAll("nav.projects button.project");

  for (let i = 0; i < buttons.length; i += 1) {
    const button = buttons[i]

    // ! if the button that is clicked already has className="is-hovered", then ingore
    if (button.id !== id) {
      button.classList.remove("is-hovered");
      button.querySelector("div.hovered")?.remove();
    }
  }
}
function onSubmit(event) {
  event.preventDefault(); // ! prevent page from reload after button is clicked
  const elements = [event.target[0], event.target[1]];

  console.log("Submitted!");

  for (let i = 0; i < elements.length; i += 1) {
    console.log(`${elements[i].name}:`, elements[i].value);
  }
}
