window.onload = function(){
    empty.addEventListener("dragover",dragOver);
    empty.addEventListener("dragenter",dragEnter);
    empty.addEventListener("dragleave",dragLeave);
    empty.addEventListener("dragdrop",dragDrop);
        
    }    
    var resimurl = "https://source.unsplash.com/random/300x300"
    Fill.style.backgroundImage = "url('" + resimurl + "')";

    function dragStart() {
        this.className += "hold";
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
        e.preventDefault();
        this.className += "hovered";
    }

    function dragEnd() {
        this.className += "fill";
    }

    function dragLeave() {
        this.className += "empty";
    }

    function dragDrop() {
        this.className += "empty";
        this.append(fill);
    }
