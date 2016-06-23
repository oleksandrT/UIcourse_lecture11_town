window.onload = function () {

    // Init objects
    var mainHouse = new House( document.querySelector(".house-withelevator") );
    var elevator = new Elevator( document.querySelector(".house_elevator") );

};

// Define object constructors
function Person(floor) {
    this.atFloor = floor;
    this.callElevator = function () {
        
    };
}

function House(el) {
    this.flats = el.querySelectorAll(".house_flat");

    var floor;

    el.addEventListener("click", function (e) {
        var target = e.target;
        floor = target.getAttribute("data-floor");
        addPerson(target);
    });

    function addPerson(target) {
        addPersonElement(target);
        var man = new Person();
    }

    function addPersonElement(target) {
        if (target.className == "house_flat") {
            var imgEl = document.createElement("img");
            imgEl.setAttribute("src", "images/man.svg");
            var divEl = document.createElement("div");
            divEl.className = "person";
            divEl.appendChild(imgEl);
            target.appendChild(divEl);
        }
    }
}

function Elevator(el) {
    var atFloor, light;
    var elem = el,
        lightElem = elem.querySelector(".house_light");

    this.getFloor = function() {
        return atFloor;
    };

    this.setFloor = function (value) {
        atFloor = value;
    };

    this.turnOnLight = function () {
        light = "on";
        lightElem.className = "house_light on";
    };

    this.turnOffLight = function () {
        light = "off";
        lightElem.className = "house_light on";
    };

    this.uploadPerson = function () {

    };

    this.offloadPerson = function () {

    };

    function init() {
        atFloor = 1;
        light = "off";
    }
    init();
}