class StateModel {
    constructor() {
        this.number = 0;
        this.color = 'red';
        this.observers = []; // consists of other class instances which have an update property (function expression)
    }

    /**
     * incrememnt method invoked in the HTML when button is clicked
     */
    increment() {

        const colors = ['orange', 'red', 'green', 'blue'];

        this.number++;
        this.color = colors[Math.floor(Math.random() * colors.length)];

        // update observers
        this.notifyObservers();
    }

    addObserver(observer) {
        this.observers.push(observer)
    }

    /**
     * the notifyObservers method triggers subscribed observers to update
     * the update method is defined on the objects defined outside of this class
     */
    notifyObservers() {
        for(let o of this.observers) {

            // update method defined on observer class instances
            o.update(this); 
        }
    }
}