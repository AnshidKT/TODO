window.addEventListener("load", () => {
  const form = document.querySelector("#form");
  const input = document.querySelector("#input");
  const list = document.querySelector("#head-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = input.value;
    if (!task) {
      alert("please type");
      return;
    }

    const form_el = document.createElement("div");
    form_el.classList.add("hiden-form");

    const input_el = document.createElement("input");
    input_el.classList.add("hiden-input");
    input_el.type = "text";
    input_el.value = task;
    input_el.setAttribute("readonly", "readonly");

    form_el.appendChild(input_el);

    const edit_el = document.createElement("button");
    edit_el.classList.add("edit-bt");
    edit_el.innerText = "edit";

    form_el.appendChild(edit_el);

    const delete_el = document.createElement("button");
    delete_el.classList.add("delete-bt");
    delete_el.innerText = "delete";

    form_el.appendChild(delete_el);

    input.value = "";

    edit_el.addEventListener("click", (e) => {
      if (edit_el.innerText.toLowerCase() == "edit") {
        edit_el.innerText = "save";
        input_el.removeAttribute("readonly");
        input_el.focus();
      } else {
        edit_el.innerText = "edit";
        input_el.setAttribute("readonly", "readonly");
      }
    });

    delete_el.addEventListener("click", (e) => {
      list.removeChild(form_el);
    });

    list.appendChild(form_el);
  });
});
