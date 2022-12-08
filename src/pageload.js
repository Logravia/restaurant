const content = document.querySelector(".content");

const clearPage = () => {
  content.replaceChildren()
}


const title = (text, size=2) => {
  let title = document.createElement("h"+size);
  title.textContent = text;
  content.appendChild(title);
}

const addUnorderedList = (list) => {
  let ul = document.createElement("ul");
  list.forEach((item)=> {
    let li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  }) 
  content.appendChild(ul);
}

const navBar = (links) => {
  let nav = document.createElement("nav");
  let ul = document.createElement("ul");
  links.forEach(link=>{
    let a = document.createElement("a")
    a.id = link;
    a.href="#"
    a.className = "tab"
    let li = document.createElement("li");
    li.textContent= link;
    a.appendChild(li)
    ul.appendChild(a);
  })
  content.appendChild(nav.appendChild(ul));
}

const header = () => {
  title("Restaurant", 1);
  navBar(["menu", "locations", "contacts"]);

}

const resetPage = () => {
  clearPage();
  header()
  setUpListeners()
}

const menu = () => {
  resetPage()
  title("Menu");
  addUnorderedList(["Fish", "Beer", "Potato"]);
}

const locations = () => {
  resetPage()
  title("Location");
  addUnorderedList(["Bled", "Pecs", "Krakow"]);
}

const contacts = () => {
  resetPage()
  title("Contacts");
  addUnorderedList(["Vyacheslav"]);
}

const setUpListeners = () => {
  document.querySelectorAll(".tab").forEach((el => {
    el.addEventListener('click', (e) => {
      let linksTo = e.currentTarget.id;
      pageFormers[linksTo]();
    })
  }))
}

const pageFormers = {contacts, menu, locations}

export {pageFormers}
