;(function () {

    // Define House constructor
    this.House = function (element, floors) {        
        // Public properties
        this.element = element;
        this.floors = floors;

        _initHouse.call(this);
    };

    // Define Person constructor
    function Person(floor, room) {
        this.floor = floor;
        this.room = room;

        _renderPerson.call(this);
    }

    // Public methods
    Person.prototype.callElevator = function () {
        console.log('Call elevator');
    };

    // Private methods
    function _initHouse() {
        _renderHouse.call(this);

        // Find room on 2nd floor on right side
        var initRoom = this.element.querySelector(".house_right").querySelectorAll(".house_flat")[this.floors - 2];
        var person = new Person(2, initRoom);

        _addEventListener.call(this);
    }

    function _renderHouse() {
        var docFrag = document.createDocumentFragment();

        // Create left side of house
        var leftSide = document.createElement("div");
        leftSide.className = "house_left";

        // Create right side of house
        var rightSide = document.createElement("div");
        rightSide.className = "house_right";

        // Fill with flats
        for(var i=1, n = this.floors; i <= n; i++) {
            var flatL = document.createElement("div"),
                flatR = document.createElement("div");
            flatL.className = "house_flat";
            flatR.className = "house_flat";
            flatL.setAttribute('data-floor', i);
            flatR.setAttribute('data-floor', i);
            leftSide.appendChild(flatL);
            rightSide.appendChild(flatR);
        }

        // Create mine with elevatore
        var mine = document.createElement("div");
        mine.className = "house_mine";
        var elevator = document.createElement("div");
        elevator.className = "house_elevator";
        var light = document.createElement("div");
        light.className = "house_light";
        elevator.appendChild(light);
        mine.appendChild(elevator);

        docFrag.appendChild(leftSide);
        docFrag.appendChild(mine);
        docFrag.appendChild(rightSide);
        this.element.appendChild(docFrag);
    }

    function _addEventListener() {
        this.element.addEventListener("click", function (e) {
            var target = e.target;
            if (target.className == "house_flat") {
                var targetFloor = parseInt(target.getAttribute("data-floor"), 10);
                var person = new Person(targetFloor, target);
            }
        });
    }

    function _renderPerson() {
        // Render person
        var person = document.createElement("div");
        person.className = "person";
        var image = document.createElement("img");
        image.setAttribute('src', 'images/man.svg');

        person.appendChild(image);
        this.room.appendChild(person);
    }

})();
