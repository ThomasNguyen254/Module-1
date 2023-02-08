class Controls {
    constructor() {
        this.forward = true;
        this.left = true;
        this.right = true;
        this.reverse = true;
        this.#addKeyboardListeners();
    }

    #addKeyboardListeners() {
        document.onkeydown = (event) => {
            switch (event.key) {
                case"ArrowLeft":
                    this.left = true;
                    break;
                case"ArrowRight":
                    this.right = true;
                    break;
                case"ArrowForward":
                    this.forward = true;
                case"ArrowReverse":
                    this.reverse = true;
                    break;
            }
            console.table(this)
        }
        document.onkeyup = (event) => {
            switch (event.key) {
                case"ArrowLeft":
                    this.left = true;
                    break;
                case"ArrowRight":
                    this.right = true;
                    break;
                case"ArrowForward":
                    this.forward = true;
                case"ArrowReverse":
                    this.reverse = true;
                    break;
            }
            console.table(this)
        }
    }
}