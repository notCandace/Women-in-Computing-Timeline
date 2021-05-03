
class Image_T {

    constructor (x, y, width, height, name) {

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.name = name;
        this.initImages();

    }

    initImages() {

        switch ( this.name ) {

            //----------FIFTIES----------
            case "judy": // 1951
                this.image = loadImage("assets/people/judy_clapp.png");
                break;

            case "grace": // 1952
                this.image = loadImage("assets/people/grace_hopper.jpg");
                break;

            case "katherine": // 1962
                this.image = loadImage("assets/people/katherine_johnson.jpg");
                break;

            case "mary": // 1965
                this.image = loadImage("assets/people/sister_mary_keller.jpg");
                break;

            case "gladys": // 1973
                this.image = loadImage("assets/people/gladys_west.jpg");
                break;

            case "elizabeth": // 1974
                this.image = loadImage("assets/people/elizabeth_feinler.jpg");
                break;

            case "annie": // 1977
                this.image = loadImage("assets/people/annie_easley.jpg");
                break;

            case "adele": // 1981
                this.image = loadImage("assets/people/adele_goldberg.jpg");
                break;

            case "anita": // 1987
                this.image = loadImage("assets/people/anita_borg.jpg");
                break;

            case "shafi": // 1993
                this.image = loadImage("assets/people/shafi_goldwasser.jpg");
                break;

            case "marissa": // 1999
                this.image = loadImage("assets/people/marissa_meyer.jpg");
                break;

            case "lucy": // 2004
                this.image = loadImage("assets/people/lucy_sanders.jpg");
                break;

        }

    }

    draw() {
        fill("#CFCDD2");
        strokeWeight(9);
        stroke("#CFCDD2");
        rect(this.x, this.y, this.width, this.height);
        image(this.image, this.x, this.y, this.width, this.height);
    }




}
