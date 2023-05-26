class SketchPad{
    constructor(container, size=400){
        this.canvas = document.createElement("canvas");
        this.canvas.width = size;
        this.canvas.height = size;
        this.canvas.style = `
        background-color: white;
        box-shadow: 0px 0px 10px 2px black;
        `;
        container.appendChild(this.canvas);

        const lineBreak = document.createElement("br");
        container.appendChild(lineBreak);

        this.undoBtn = document.createElement("button");
        this.undoBtn.innerHTML = "UNDO";
        container.appendChild(this.undoBtn);

        this.ctx = this.canvas.getContext("2d");
        this.path = [];
        this.isDrawing = false;

        this.reset();
        this.#addEventListener();
   }

   reset(){
    this.path = [];

   }

   #addEventListener(){
    this.canvas.onmousedown = (evt) => {

       const mouse = this.#getMouse(evt);
        this.path = [mouse];
        this.isDrawing = true;


   }
   this.canvas.onmousemove = (evt) => {

    if(this.isDrawing){
    
    const mouse = this.#getMouse(evt);
    this.path.push(mouse);
    this.#redraw();
    }

}
this.canvas.onmouseup = evt => {
    this.isDrawing = false;

}

  

}

#getMouse = evt => {
    const rect = this.canvas.getBoundingClientRect();
    
    return [
       Math.round( evt.clientX - rect.left),
        Math.round(evt.clientY - rect.top)
    ]

}

#redraw(){
    this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
    draw.path(this.ctx, this.path);
}
}