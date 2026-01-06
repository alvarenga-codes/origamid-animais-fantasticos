import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(dropdownmenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownmenus);
    //define touchstart e click como arg padrão de events
    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;
    this.activeClass = "active";
    //Ajusta o this da função
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }
//Ativa o dropdownmenu e adiciona a função que
//observa o clique fora dele
  activeDropdownMenu(e) {
    e.preventDefault();
    const element = e.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }
  //Adiciona os evetnso ao dropdownmenu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
