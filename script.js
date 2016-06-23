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

    el.addEventListener("click", function (e) {
        addPerson(e);
    });

    function addPerson(e) {
        var target = e.target;
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
    this.atFloor;
    this.light;

    var elem = el;

    function init() {
        this.atFloor = 1;
        this.light = false;
    }
    init();
}