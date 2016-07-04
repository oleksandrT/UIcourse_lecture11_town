;(function () {

    // Define House constructor
    this.House = function (element, floors) {        
        // Public properties
        this.element = element;
        this.floors = floors;
        this.elevator = null;

        _initHouse.call(this);
    };

    // Define Person constructor
    function Person(floor, room, houseObj) {
        this.floor = floor;
        this.room = room;
        this.houseObj = houseObj;

        _renderPerson.call(this);
    }

    // Define Elevator constructor
    function Elevator(parent) {
        this.light = false;
        this.currentFloor = 0;

        this.moveToFloor = function (currentFloor, newFloor, parentElement) {
            console.log('Moving from floor ', currentFloor, ' to floor ', newFloor);

            var mineElement = parentElement.querySelector('.house_mine');
            var elevatorElement = mineElement.querySelector('.house_elevator');
            var totalMineHeigth = mineElement.offsetHeight;
            var elevatorHeigth = elevatorElement.offsetHeight;

            elevatorElement.style.bottom = elevatorHeigth*(newFloor - 1) + 'px';
        };

        _renderElevator.call(this, parent);
    }

    // Public methods


    // Private methods
    function _initHouse() {
        _renderHouse.call(this);

        // Find room on 2nd floor on right side
        var initRoom = this.element.querySelector(".house_right").querySelectorAll(".house_flat")[this.floors - 2];
        var person = new Person(2, initRoom, this);

        _addEventListener.call(this, this);
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
        for(var i=this.floors; i > 0; i--) {
            var flatL = document.createElement("div"),
                flatR = document.createElement("div");
            flatL.className = "house_flat";
            flatR.className = "house_flat";
            flatL.setAttribute('data-floor', i);
            flatR.setAttribute('data-floor', i);
            leftSide.appendChild(flatL);
            rightSide.appendChild(flatR);
        }

        docFrag.appendChild(leftSide);
        docFrag.appendChild(rightSide);
        this.element.appendChild(docFrag);

        // Create mine with elevator
        this.elevator = new Elevator(this.element);
    }

    function _renderElevator(parent) {
        // Create mine with elevatore
        var mine = document.createElement("div");
        mine.className = "house_mine";
        var elevator = document.createElement("div");
        elevator.className = "house_elevator";
        var light = document.createElement("div");
        light.className = "house_light";
        elevator.appendChild(light);
        mine.appendChild(elevator);

        // Add to DOM
        var rightSide = parent.querySelector(".house_right");
        var newEl = parent.insertBefore(mine, rightSide);
    }

    function _addEventListener(houseObj) {
        this.element.addEventListener("click", function (e) {
            var target = e.target;
            if (target.className == "house_flat") {
                var targetFloor = parseInt(target.getAttribute("data-floor"), 10);
                var person = new Person(targetFloor, target, houseObj);
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

        var houseObj = this.houseObj;
        var targetFloor = this.floor;

        person.onclick = function () {
            var callElevator = confirm('Do you wanna call an elevator?');
            if(callElevator) {
                houseObj.elevator.moveToFloor(houseObj.elevator.currentFloor, targetFloor, houseObj.element);
            }
        }
    }

})();
