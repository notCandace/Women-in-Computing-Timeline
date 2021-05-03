/**

PROJECT NAME:
FILE:               script.js
DESCRIPTION:


1951 Judy Clapp
    Whirlwind Computer - tap to replace the burnt out vacuum tubes
1952 Grace Hopper
    Harvard Mark I - clear the moths from the program
    - dress/ 333
    - hair front/ fffff5
    - hair back/ f0efe1
1962 Katherine Johnson
    Man in Space - circle the spaceship around the moon
1965 Sister Mary Keller
    First Women CS PHD - cross the stage
1973 Gladys West
    GPS System - program the gps system to make the car follow the route
1974 Elizabeth Feinler
    Domain Name System - pick the most populat domain name
1977 Annie Easley
    Research Electric Battery Storage - drive the hybrid car through the course
1981 Adele Goldberg
    GUIs - close the pop ups
1987 - Anita Borg
    Systers Email List - assemble the email and send
1993 Shafi Goldwasser
    Turing Award/Gobel Prize - descramble the letters / crack the code crypt
1999 Marissa Mayer
    First Women @ Google - tap to break the glass ceiling
2004 Lucy Sanders
    co-founded NCWIT - collect the awards


**/

let canvasWidth, canvasHeight;
let manager, scenes;
let player, currentLevel, layouts;
let lastClicked;

let NUM_TILES_PER_ROW, NUM_TILES_PER_COL;
const TILE_SIZE = 60;

const EMPTY = 0, PLATFORM = 1, LADDER = 2, GOAL = 3;

function setup() {

    canvasWidth = canvasHeight = 700;
    NUM_TILES_PER_ROW = (canvasWidth-100)/TILE_SIZE;
    NUM_TILES_PER_COL = (canvasHeight-100)/TILE_SIZE;
    console.log(NUM_TILES_PER_ROW, NUM_TILES_PER_COL);
    lastClicked = [];

    createCanvas( canvasWidth, canvasHeight );

    manager = new SceneManager();
    scenes = [
        StartScreen,
        FiftiesScreen, SixtiesScreen,
        SeventiesScreen, EightiesScreen,
        NinetiesScreen, ThousandsScreen,
        Wiki
    ];

    currentLevel = 0;
    layouts = [];
    // player = new Player( getPlayerStartPosition( currentLevel ) );

    for ( let s of scenes ) {
        manager.addScene(s);
    }
    //manager.showScene(ThousandsScreen);
    manager.showNextScene();

}

function draw() {

    background("#777777");
    manager.draw();
    //player.draw();

    //constrain(player.row, 50, 150);


}

function keyPressed() {

    // player.move(currentLevel);
    let curr = layouts[0];
    // console.log("pX: " + player.row + " pY: " + player.col);


}

function StartScreen() {

    this.enter = function() {
        bkgd = loadImage("assets/backgrounds/minimal_background.jpg");


        backBtn = new Clickable();
        nextBtn = new Clickable();


    }

    this.setup = function() {

    }

    this.draw = function() {
        background( bkgd );

        /*
        for( let i = 0; i < NUM_TILES_PER_ROW; i++ ) {
            for( let j = 0; j < NUM_TILES_PER_COL; j++ ) {
                //console.log("hey");
                fill("#000");
                stroke("#fff");
                strokeWeight(2);
                rect((i*TILE_SIZE)+xOffset, (j*TILE_SIZE)+yOffset, TILE_SIZE, TILE_SIZE);
            }
        }
        */



        // alpha square
        sqColor = color(210, 210, 210);
        sqColor.setAlpha(150);
        strokeWeight(3);
        stroke("#ffffff");
        fill(sqColor);
        rect(50, 50, 600, 600);

        fill(0);
        textFont("Arvo");
        strokeWeight(0.5);
        textSize(50);
        textAlign(CENTER);
        text("Women in Computing:\nA Timeline",
            350, 300
        );

        this.initButtons();




    }

    this.initButtons = function() {
        nextBtn.locate( 240, 425 );
        nextBtn.resize( 225, 100 );
        nextBtn.text = "explore";
        nextBtn.textSize = 40;
        nextBtn.textFont = "sans-serif";
        nextBtn.strokeWeight = 2;
        nextBtn.cornerRadius = 30;
        nextBtn.onHover = function() {
            nextBtn.color = "#eee";
        }
        nextBtn.onPress = function() {
            console.log("go next");
            manager.showScene(FiftiesScreen);
        }
        nextBtn.onOutside = function() {
            nextBtn.color = "#fff";
        }
        nextBtn.draw();

    }

}

function FiftiesScreen() {

    let bkgd, sqColor, innerBkgd;
    let xOffset, yOffset;
    let tiles;
    let backBtn, nextBtn;

    let judy_clapp, judy_clapp_btn;
    let grace_hopper, grace_hopper_btn;

    this.enter = function() {
        bkgd = loadImage("assets/backgrounds/minimal_background.jpg");
        innerBkgd = loadImage("assets/backgrounds/50s_city.jpg");

        backBtn = new Clickable();
        nextBtn = new Clickable();

        // 1951 & 1952
        judy_clapp = new Image_T( 120, 110, 15*14, 17*14, "judy" ); // 15:17
        judy_clapp_btn = new Clickable();

        grace_hopper = new Image_T( 400, 360, 4*50, 5*50, "grace" ); // 4:5
        grace_hopper_btn = new Clickable();
    }

    this.setup = function() {
        xOffset = 50;
        yOffset = 50;
        tiles = [];

        initLayoutData()
        this.loadLayout();

        console.log(tiles);

    }

    this.draw = function() {
        background( bkgd );

        /*
        for( let i = 0; i < NUM_TILES_PER_ROW; i++ ) {
            for( let j = 0; j < NUM_TILES_PER_COL; j++ ) {
                //console.log("hey");
                fill("#000");
                stroke("#fff");
                strokeWeight(2);
                rect((i*TILE_SIZE)+xOffset, (j*TILE_SIZE)+yOffset, TILE_SIZE, TILE_SIZE);
            }
        }
        */

        image(innerBkgd, 50, 50, 600, 600);

        for( let t of tiles ) {
            t.draw();
        }

        // alpha square
        sqColor = color(210, 210, 210);
        sqColor.setAlpha(150);
        strokeWeight(3);
        stroke("#ffffff");
        fill(sqColor);
        rect(50, 50, 600, 600);

        //this.initButtons( );
        this.drawDecade( );
        this.initButtons( );




    }

    this.drawDecade = function( decade ) {

        judy_clapp.draw();
        judy_clapp_btn.draw();
        grace_hopper.draw();
        grace_hopper_btn.draw();
        backBtn.draw();
        nextBtn.draw();

    }

    this.initButtons = function( decade ) {

        backBtn.locate( 15, 325 );
        backBtn.resize( 35, 50 );
        backBtn.text = "⟵";
        backBtn.textSize = 25;
        backBtn.strokeWeight = 0;
        backBtn.cornerRadius = 0;
        backBtn.onHover = function() {

        }
        backBtn.onPress = function() {
            console.log("go back");
            manager.showScene(ThousandsScreen);
        }
        backBtn.onOutside = function() {

        }

        nextBtn.locate( 650, 325 );
        nextBtn.resize( 35, 50 );
        nextBtn.text = "⟶";
        nextBtn.textSize = 25;
        nextBtn.strokeWeight = 0;
        nextBtn.cornerRadius = 0;
        nextBtn.onHover = function() {

        }
        nextBtn.onPress = function() {
            console.log("go next");
            manager.showScene(SixtiesScreen);
        }
        nextBtn.onOutside = function() {

        }

        /*----------JUDY CLAPP-------------- */
        judy_clapp_btn.locate( 120, 320 );
        judy_clapp_btn.resize( 210, 30 );
        judy_clapp_btn.color = "#CFCDD2";
        judy_clapp_btn.cornerRadius = 0;
        judy_clapp_btn.strokeWeight = 0;
        judy_clapp_btn.text = "Judy Clapp (1951)";
        judy_clapp_btn.textColor = "#000";
        judy_clapp_btn.textSize = 25;
        judy_clapp_btn.textFont = "serif";
        judy_clapp_btn.onHover = function() {
            judy_clapp_btn.color = "#eee";
        }
        judy_clapp_btn.onPress = function() {
            console.log("Judy Clapp Pressed");
            lastClicked.push( "judy" );
            manager.showScene( Wiki );
        }
        judy_clapp_btn.onOutside = function() {
            judy_clapp_btn.color = "#cfcdd2";
        }

        /*--------GRACE HOPPER--------*/
        grace_hopper_btn.locate( 400, 580 );
        grace_hopper_btn.resize( 200, 30 );
        grace_hopper_btn.color = "#CFCDD2";
        grace_hopper_btn.cornerRadius = 0;
        grace_hopper_btn.strokeWeight = 0;
        grace_hopper_btn.text = "Grace Hopper (1952)";
        grace_hopper_btn.textColor = "#000";
        grace_hopper_btn.textSize = 23;
        grace_hopper_btn.textFont = "serif";
        grace_hopper_btn.onHover = function() {
            grace_hopper_btn.color = "#eee";
        }
        grace_hopper_btn.onPress = function() {
            console.log("Grace Hopper Pressed");
            lastClicked.push( "grace" );
            manager.showScene( Wiki );
        }
        grace_hopper_btn.onOutside = function() {
            grace_hopper_btn.color = "#cfcdd2";
        }

    }

    this.loadLayout = function() {
        for (let i = 0; i < layouts[0].length; i++) {
            for (let j = 0; j < layouts[0].length; j++) {

                let current = layouts[0];
                let tile = current[j][i];

                switch( tile ) {

                    case EMPTY:
                        break;

                    case PLATFORM:
                        // console.log("platforms:", (i*TILE_SIZE)+xOffset, (j*TILE_SIZE)+yOffset);
                        // console.log("       og:", i, j);
                        let p = new Platform( (i*TILE_SIZE)+xOffset, (j*TILE_SIZE)+yOffset, PLATFORM );
                        tiles.push(p);
                        break;

                    case LADDER:
                        let l = new Platform( (i*TILE_SIZE)+xOffset, (j*TILE_SIZE)+yOffset, LADDER );
                        tiles.push(l);
                        break;

                    case GOAL:
                        let d = new Platform( (i*TILE_SIZE)+xOffset, (j*TILE_SIZE)+yOffset, GOAL );
                        tiles.push(d);
                        break;
                } // end switch(tile)

            } // end j loop
        } // end i loop
    }


}

function SixtiesScreen() {

    let bkgd, sqColor, innerBkgd;
    let xOffset, yOffset;
    let tiles;
    let backBtn, nextBtn;

    let katherine_johnson, katherine_johnson_btn;
    let sister_mary, sister_mary_btn;

    this.enter = function() {
        bkgd = loadImage("assets/backgrounds/minimal_background.jpg");
        innerBkgd = loadImage("assets/backgrounds/60s_city.jpg");

        backBtn = new Clickable();
        nextBtn = new Clickable();

        // 1951 & 1952
        katherine_johnson = new Image_T( 110, 360, 4*48, 5*48, "katherine" ); // 4:5
        katherine_johnson_btn = new Clickable();

        sister_mary = new Image_T( 370, 90, 5*43, 6*43, "mary" ); // 5:6
        sister_mary_btn = new Clickable();
    }

    this.setup = function() {

        xOffset = 50;
        yOffset = 50;
        tiles = [];

        initLayoutData()
        this.loadLayout();

        console.log(tiles);

    }

    this.draw = function() {
        background( bkgd );

        /*
        for( let i = 0; i < NUM_TILES_PER_ROW; i++ ) {
            for( let j = 0; j < NUM_TILES_PER_COL; j++ ) {
                //console.log("hey");
                fill("#000");
                stroke("#fff");
                strokeWeight(2);
                rect((i*TILE_SIZE)+xOffset, (j*TILE_SIZE)+yOffset, TILE_SIZE, TILE_SIZE);
            }
        }
        */

        image(innerBkgd, 50, 50, 600, 600);

        for( let t of tiles ) {
            t.draw();
        }

        // alpha square
        sqColor = color(210, 210, 210);
        sqColor.setAlpha(150);
        strokeWeight(3);
        stroke("#ffffff");
        fill(sqColor);
        rect(50, 50, 600, 600);


        this.drawDecade( );
        this.initButtons( );

    }

    this.drawDecade = function( decade ) {

        katherine_johnson.draw();
        katherine_johnson_btn.draw();
        sister_mary.draw();
        sister_mary_btn.draw();
        backBtn.draw();
        nextBtn.draw();


    }

    this.initButtons = function( decade ) {

        backBtn.locate( 15, 325 );
        backBtn.resize( 35, 50 );
        backBtn.text = "⟵";
        backBtn.textSize = 25;
        backBtn.strokeWeight = 0;
        backBtn.cornerRadius = 0;
        backBtn.onHover = function() {

        }
        backBtn.onPress = function() {
            console.log("go back");
            manager.showScene(FiftiesScreen);
        }
        backBtn.onOutside = function() {

        }

        nextBtn.locate( 650, 325 );
        nextBtn.resize( 35, 50 );
        nextBtn.text = "⟶";
        nextBtn.textSize = 25;
        nextBtn.strokeWeight = 0;
        nextBtn.cornerRadius = 0;
        nextBtn.onHover = function() {

        }
        nextBtn.onPress = function() {
            console.log("go next");
            manager.showScene(SeventiesScreen);
        }
        nextBtn.onOutside = function() {

        }



        /*----------KATHERINE JOHNSON-------------- */
        katherine_johnson_btn.locate( 110, 570 );
        katherine_johnson_btn.resize( 192, 30 );
        katherine_johnson_btn.color = "#CFCDD2";
        katherine_johnson_btn.cornerRadius = 0;
        katherine_johnson_btn.strokeWeight = 0;
        katherine_johnson_btn.text = "Katherine Johnson (1962)";
        katherine_johnson_btn.textColor = "#000";
        katherine_johnson_btn.textSize = 19;
        katherine_johnson_btn.textFont = "serif";
        katherine_johnson_btn.onHover = function() {
            katherine_johnson_btn.color = "#eee";
        }
        katherine_johnson_btn.onPress = function() {
            console.log("katherine johnson Pressed");
            lastClicked.push( "katherine" );
            manager.showScene( Wiki );
        }
        katherine_johnson_btn.onOutside = function() {
            katherine_johnson_btn.color = "#cfcdd2";
        }

        /*--------SISTER MARY--------*/
        sister_mary_btn.locate( 370, 320 );
        sister_mary_btn.resize( 215, 30 );
        sister_mary_btn.color = "#CFCDD2";
        sister_mary_btn.cornerRadius = 0;
        sister_mary_btn.strokeWeight = 0;
        sister_mary_btn.text = "Sister Mary Keller (1965)";
        sister_mary_btn.textColor = "#000";
        sister_mary_btn.textSize = 21;
        sister_mary_btn.textFont = "serif";
        sister_mary_btn.onHover = function() {
            sister_mary_btn.color = "#eee";
        }
        sister_mary_btn.onPress = function() {
            console.log("sister mary Pressed");
            lastClicked.push( "mary" );
            manager.showScene( Wiki );
        }
        sister_mary_btn.onOutside = function() {
            sister_mary_btn.color = "#cfcdd2";
        }

    }

    this.loadLayout = function() {
        for (let i = 0; i < layouts[0].length; i++) {
            for (let j = 0; j < layouts[0].length; j++) {

                let current = layouts[0];
                let tile = current[j][i];

                switch( tile ) {

                    case EMPTY:
                        break;

                    case PLATFORM:
                        // console.log("platforms:", (i*TILE_SIZE)+xOffset, (j*TILE_SIZE)+yOffset);
                        // console.log("       og:", i, j);
                        let p = new Platform( (i*TILE_SIZE)+xOffset, (j*TILE_SIZE)+yOffset, PLATFORM );
                        tiles.push(p);
                        break;

                    case LADDER:
                        let l = new Platform( (i*TILE_SIZE)+xOffset, (j*TILE_SIZE)+yOffset, LADDER );
                        tiles.push(l);
                        break;

                    case GOAL:
                        let d = new Platform( (i*TILE_SIZE)+xOffset, (j*TILE_SIZE)+yOffset, GOAL );
                        tiles.push(d);
                        break;
                } // end switch(tile)

            } // end j loop
        } // end i loop
    }

}

function SeventiesScreen() {

    let bkgd, sqColor, innerBkgd;
    let xOffset, yOffset;
    let tiles;
    let backBtn, nextBtn;

    let gladys_west, gladys_west_btn;
    let elizabeth_feinler, elizabeth_feinler_btn;
    let annie_easley, annie_easley_btn;

    this.enter = function() {
        bkgd = loadImage("assets/backgrounds/minimal_background.jpg");
        innerBkgd = loadImage("assets/backgrounds/70s_city.jpg");

        backBtn = new Clickable();
        nextBtn = new Clickable();

        // 1951 & 1952
        gladys_west = new Image_T( 110, 121, 4*45, 5*45, "gladys" ); // 4:5
        gladys_west_btn = new Clickable();

        elizabeth_feinler = new Image_T( 240, 360, 227*1, 244*1, "elizabeth" ); // 227:244
        elizabeth_feinler_btn = new Clickable();

        annie_easley = new Image_T( 420, 121, 4*45, 5*45, "annie" ); // 4:5
        annie_easley_btn = new Clickable();
    }

    this.setup = function() {

        xOffset = 50;
        yOffset = 50;
        tiles = [];

        initLayoutData()
        this.loadLayout();

        console.log(tiles);

    }

    this.draw = function() {
        background( bkgd );

        for( let i = 0; i < NUM_TILES_PER_ROW; i++ ) {
            for( let j = 0; j < NUM_TILES_PER_COL; j++ ) {
                //console.log("hey");
                fill("#000");
                stroke("#fff");
                strokeWeight(2);
                rect((i*TILE_SIZE)+xOffset, (j*TILE_SIZE)+yOffset, TILE_SIZE, TILE_SIZE);
            }
        }

        image(innerBkgd, 50, 50, 600, 600);

        for( let t of tiles ) {
            t.draw();
        }

        // alpha square
        sqColor = color(210, 210, 210);
        sqColor.setAlpha(150);
        strokeWeight(3);
        stroke("#ffffff");
        fill(sqColor);
        rect(50, 50, 600, 600);


        this.drawDecade( 60 );
        this.initButtons( 60 );

    }

    this.drawDecade = function( decade ) {

        gladys_west.draw();
        gladys_west_btn.draw();
        elizabeth_feinler.draw();
        elizabeth_feinler_btn.draw();
        annie_easley.draw();
        annie_easley_btn.draw();
        backBtn.draw();
        nextBtn.draw();


    }

    this.initButtons = function( decade ) {

        backBtn.locate( 15, 325 );
        backBtn.resize( 35, 50 );
        backBtn.text = "⟵";
        backBtn.textSize = 25;
        backBtn.strokeWeight = 0;
        backBtn.cornerRadius = 0;
        backBtn.onHover = function() {

        }
        backBtn.onPress = function() {
            console.log("go back");
            manager.showScene(SixtiesScreen);
        }
        backBtn.onOutside = function() {

        }

        nextBtn.locate( 650, 325 );
        nextBtn.resize( 35, 50 );
        nextBtn.text = "⟶";
        nextBtn.textSize = 25;
        nextBtn.strokeWeight = 0;
        nextBtn.cornerRadius = 0;
        nextBtn.onHover = function() {

        }
        nextBtn.onPress = function() {
            console.log("go next");
            manager.showScene(EightiesScreen);
        }
        nextBtn.onOutside = function() {

        }



        /*----------KATHERINE JOHNSON-------------- */
        gladys_west_btn.locate( 110, 320 );
        gladys_west_btn.resize( 180, 30 );
        gladys_west_btn.color = "#CFCDD2";
        gladys_west_btn.cornerRadius = 0;
        gladys_west_btn.strokeWeight = 0;
        gladys_west_btn.text = "Gladys West (1973)";
        gladys_west_btn.textColor = "#000";
        gladys_west_btn.textSize = 23;
        gladys_west_btn.textFont = "serif";
        gladys_west_btn.onHover = function() {
            gladys_west_btn.color = "#eee";
        }
        gladys_west_btn.onPress = function() {
            console.log("gladys west Pressed");
            lastClicked.push( "gladys" );
            manager.showScene( Wiki );
        }
        gladys_west_btn.onOutside = function() {
            gladys_west_btn.color = "#cfcdd2";
        }

        /*--------SISTER MARY--------*/
        elizabeth_feinler_btn.locate( 240, 574 );
        elizabeth_feinler_btn.resize( 227, 30 );
        elizabeth_feinler_btn.color = "#CFCDD2";
        elizabeth_feinler_btn.cornerRadius = 0;
        elizabeth_feinler_btn.strokeWeight = 0;
        elizabeth_feinler_btn.text = "Elizabeth Feinler (1974)";
        elizabeth_feinler_btn.textColor = "#000";
        elizabeth_feinler_btn.textSize = 23;
        elizabeth_feinler_btn.textFont = "serif";
        elizabeth_feinler_btn.onHover = function() {
            elizabeth_feinler_btn.color = "#eee";
        }
        elizabeth_feinler_btn.onPress = function() {
            console.log("elizabeth feinler Pressed");
            lastClicked.push( "elizabeth" );
            manager.showScene( Wiki );
        }
        elizabeth_feinler_btn.onOutside = function() {
            elizabeth_feinler_btn.color = "#cfcdd2";
        }

        /* */
        annie_easley_btn.locate( 420, 320 );
        annie_easley_btn.resize( 180, 30 );
        annie_easley_btn.color = "#CFCDD2";
        annie_easley_btn.cornerRadius = 0;
        annie_easley_btn.strokeWeight = 0;
        annie_easley_btn.text = "Annie Easley (1977)";
        annie_easley_btn.textColor = "#000";
        annie_easley_btn.textSize = 21;
        annie_easley_btn.textFont = "serif";
        annie_easley_btn.onHover = function() {
            annie_easley_btn.color = "#eee";
        }
        annie_easley_btn.onPress = function() {
            console.log("annie easley Pressed");
            lastClicked.push( "annie" );
            manager.showScene( Wiki );
        }
        annie_easley_btn.onOutside = function() {
            annie_easley_btn.color = "#cfcdd2";
        }

    }

    this.loadLayout = function() {
        for (let i = 0; i < layouts[0].length; i++) {
            for (let j = 0; j < layouts[0].length; j++) {

                let current = layouts[0];
                let tile = current[j][i];

                switch( tile ) {

                    case EMPTY:
                        break;

                    case PLATFORM:
                        // console.log("platforms:", (i*TILE_SIZE)+xOffset, (j*TILE_SIZE)+yOffset);
                        // console.log("       og:", i, j);
                        let p = new Platform( (i*TILE_SIZE)+xOffset, (j*TILE_SIZE)+yOffset, PLATFORM );
                        tiles.push(p);
                        break;

                    case LADDER:
                        let l = new Platform( (i*TILE_SIZE)+xOffset, (j*TILE_SIZE)+yOffset, LADDER );
                        tiles.push(l);
                        break;

                    case GOAL:
                        let d = new Platform( (i*TILE_SIZE)+xOffset, (j*TILE_SIZE)+yOffset, GOAL );
                        tiles.push(d);
                        break;
                } // end switch(tile)

            } // end j loop
        } // end i loop
    }

}

function EightiesScreen() {

    let bkgd, sqColor, innerBkgd;
    let xOffset, yOffset;
    let tiles;
    let backBtn, nextBtn;

    let adele_goldberg, adele_goldberg_btn;
    let anita_borg, anita_borg_btn;

    this.enter = function() {
        bkgd = loadImage("assets/backgrounds/minimal_background.jpg");
        innerBkgd = loadImage("assets/backgrounds/80s_city.jpg");

        backBtn = new Clickable();
        nextBtn = new Clickable();

        // 1951 & 1952
        adele_goldberg = new Image_T( 130, 115, 191*1, 231*1, "adele" ); // 191:231
        adele_goldberg_btn = new Clickable();

        anita_borg = new Image_T( 370, 360, 1*230, 1*230, "anita" ); // 1:1
        anita_borg_btn = new Clickable();
    }

    this.setup = function() {

        xOffset = 50;
        yOffset = 50;
        tiles = [];

        initLayoutData()
        this.loadLayout();

        console.log(tiles);

    }

    this.draw = function() {
        background( bkgd );

        for( let i = 0; i < NUM_TILES_PER_ROW; i++ ) {
            for( let j = 0; j < NUM_TILES_PER_COL; j++ ) {
                //console.log("hey");
                fill("#000");
                stroke("#fff");
                strokeWeight(2);
                rect((i*TILE_SIZE)+xOffset, (j*TILE_SIZE)+yOffset, TILE_SIZE, TILE_SIZE);
            }
        }

        image(innerBkgd, 50, 50, 600, 600);

        for( let t of tiles ) {
            t.draw();
        }

        // alpha square
        sqColor = color(210, 210, 210);
        sqColor.setAlpha(150);
        strokeWeight(3);
        stroke("#ffffff");
        fill(sqColor);
        rect(50, 50, 600, 600);


        this.drawDecade( 60 );
        this.initButtons( 60 );

    }

    this.drawDecade = function( decade ) {

        adele_goldberg.draw();
        adele_goldberg_btn.draw();
        anita_borg.draw();
        anita_borg_btn.draw();
        backBtn.draw();
        nextBtn.draw();


    }

    this.initButtons = function( decade ) {

        backBtn.locate( 15, 325 );
        backBtn.resize( 35, 50 );
        backBtn.text = "⟵";
        backBtn.textSize = 25;
        backBtn.strokeWeight = 0;
        backBtn.cornerRadius = 0;
        backBtn.onHover = function() {

        }
        backBtn.onPress = function() {
            console.log("go back");
            manager.showScene(SeventiesScreen);
        }
        backBtn.onOutside = function() {

        }

        nextBtn.locate( 650, 325 );
        nextBtn.resize( 35, 50 );
        nextBtn.text = "⟶";
        nextBtn.textSize = 25;
        nextBtn.strokeWeight = 0;
        nextBtn.cornerRadius = 0;
        nextBtn.onHover = function() {

        }
        nextBtn.onPress = function() {
            console.log("go next");
            manager.showScene(NinetiesScreen);
        }
        nextBtn.onOutside = function() {

        }



        /*----------KATHERINE JOHNSON-------------- */
        adele_goldberg_btn.locate( 130, 320 );
        adele_goldberg_btn.resize( 191, 30 );
        adele_goldberg_btn.color = "#CFCDD2";
        adele_goldberg_btn.cornerRadius = 0;
        adele_goldberg_btn.strokeWeight = 0;
        adele_goldberg_btn.text = "Adele Goldberg (1981)";
        adele_goldberg_btn.textColor = "#000";
        adele_goldberg_btn.textSize = 21;
        adele_goldberg_btn.textFont = "serif";
        adele_goldberg_btn.onHover = function() {
            adele_goldberg_btn.color = "#eee";
        }
        adele_goldberg_btn.onPress = function() {
            console.log("adele goldberg Pressed");
            lastClicked.push( "adele" );
            manager.showScene( Wiki );
        }
        adele_goldberg_btn.onOutside = function() {
            adele_goldberg_btn.color = "#cfcdd2";
        }

        /*--------SISTER MARY--------*/
        anita_borg_btn.locate( 370, 560 );
        anita_borg_btn.resize( 230, 30 );
        anita_borg_btn.color = "#CFCDD2";
        anita_borg_btn.cornerRadius = 0;
        anita_borg_btn.strokeWeight = 0;
        anita_borg_btn.text = "Anita Borg (1987)";
        anita_borg_btn.textColor = "#000";
        anita_borg_btn.textSize = 25;
        anita_borg_btn.textFont = "serif";
        anita_borg_btn.onHover = function() {
            anita_borg_btn.color = "#eee";
        }
        anita_borg_btn.onPress = function() {
            console.log("anita borg Pressed");
            lastClicked.push( "anita" );
            manager.showScene( Wiki );
        }
        anita_borg_btn.onOutside = function() {
            anita_borg_btn.color = "#cfcdd2";
        }

    }

    this.loadLayout = function() {
        for (let i = 0; i < layouts[0].length; i++) {
            for (let j = 0; j < layouts[0].length; j++) {

                let current = layouts[0];
                let tile = current[j][i];

                switch( tile ) {

                    case EMPTY:
                        break;

                    case PLATFORM:
                        // console.log("platforms:", (i*TILE_SIZE)+xOffset, (j*TILE_SIZE)+yOffset);
                        // console.log("       og:", i, j);
                        let p = new Platform( (i*TILE_SIZE)+xOffset, (j*TILE_SIZE)+yOffset, PLATFORM );
                        tiles.push(p);
                        break;

                    case LADDER:
                        let l = new Platform( (i*TILE_SIZE)+xOffset, (j*TILE_SIZE)+yOffset, LADDER );
                        tiles.push(l);
                        break;

                    case GOAL:
                        let d = new Platform( (i*TILE_SIZE)+xOffset, (j*TILE_SIZE)+yOffset, GOAL );
                        tiles.push(d);
                        break;
                } // end switch(tile)

            } // end j loop
        } // end i loop
    }

}

function NinetiesScreen() {

    let bkgd, sqColor, innerBkgd;
    let xOffset, yOffset;
    let tiles;
    let backBtn, nextBtn;

    let shafi_goldwasser, shafi_goldwasser_btn;
    let marissa_mayer, marissa_mayer_btn;

    this.enter = function() {
        bkgd = loadImage("assets/backgrounds/minimal_background.jpg");
        innerBkgd = loadImage("assets/backgrounds/90s_city.jpg");

        backBtn = new Clickable();
        nextBtn = new Clickable();

        // 1951 & 1952
        shafi_goldwasser = new Image_T( 100, 360, 1*210, 1*210, "shafi" ); // 1:1
        shafi_goldwasser_btn = new Clickable();

        marissa_mayer = new Image_T( 330, 163, 512*0.55, 341*0.55, "marissa" ); // 512:341
        marissa_mayer_btn = new Clickable();
    }

    this.setup = function() {

        xOffset = 50;
        yOffset = 50;
        tiles = [];

        initLayoutData()
        this.loadLayout();

        console.log(tiles);

    }

    this.draw = function() {
        background( bkgd );

        for( let i = 0; i < NUM_TILES_PER_ROW; i++ ) {
            for( let j = 0; j < NUM_TILES_PER_COL; j++ ) {
                //console.log("hey");
                fill("#000");
                stroke("#fff");
                strokeWeight(2);
                rect((i*TILE_SIZE)+xOffset, (j*TILE_SIZE)+yOffset, TILE_SIZE, TILE_SIZE);
            }
        }

        image(innerBkgd, 50, 50, 600, 600);

        for( let t of tiles ) {
            t.draw();
        }

        // alpha square
        sqColor = color(210, 210, 210);
        sqColor.setAlpha(150);
        strokeWeight(3);
        stroke("#ffffff");
        fill(sqColor);
        rect(50, 50, 600, 600);


        this.drawDecade( 60 );
        this.initButtons( 60 );

    }

    this.drawDecade = function( decade ) {

        shafi_goldwasser.draw();
        shafi_goldwasser_btn.draw();
        marissa_mayer.draw();
        marissa_mayer_btn.draw();
        backBtn.draw();
        nextBtn.draw();


    }

    this.initButtons = function( decade ) {

        backBtn.locate( 15, 325 );
        backBtn.resize( 35, 50 );
        backBtn.text = "⟵";
        backBtn.textSize = 25;
        backBtn.strokeWeight = 0;
        backBtn.cornerRadius = 0;
        backBtn.onHover = function() {

        }
        backBtn.onPress = function() {
            console.log("go back");
            manager.showScene(EightiesScreen);
        }
        backBtn.onOutside = function() {

        }

        nextBtn.locate( 650, 325 );
        nextBtn.resize( 35, 50 );
        nextBtn.text = "⟶";
        nextBtn.textSize = 25;
        nextBtn.strokeWeight = 0;
        nextBtn.cornerRadius = 0;
        nextBtn.onHover = function() {

        }
        nextBtn.onPress = function() {
            console.log("go next");
            manager.showScene(ThousandsScreen);
        }
        nextBtn.onOutside = function() {

        }



        /*----------KATHERINE JOHNSON-------------- */
        shafi_goldwasser_btn.locate( 100, 540 );
        shafi_goldwasser_btn.resize( 210, 30 );
        shafi_goldwasser_btn.color = "#CFCDD2";
        shafi_goldwasser_btn.cornerRadius = 0;
        shafi_goldwasser_btn.strokeWeight = 0;
        shafi_goldwasser_btn.text = "Shafi Goldwasser (1993)";
        shafi_goldwasser_btn.textColor = "#000";
        shafi_goldwasser_btn.textSize = 21.5;
        shafi_goldwasser_btn.textFont = "serif";
        shafi_goldwasser_btn.onHover = function() {
            shafi_goldwasser_btn.color = "#eee";
        }
        shafi_goldwasser_btn.onPress = function() {
            console.log("shafi goldwasser Pressed");
            lastClicked.push( "shafi" );
            manager.showScene( Wiki );
        }
        shafi_goldwasser_btn.onOutside = function() {
            shafi_goldwasser_btn.color = "#cfcdd2";
        }

        /*--------SISTER MARY--------*/
        marissa_mayer_btn.locate( 330, 321 );
        marissa_mayer_btn.resize( 281.5, 30 );
        marissa_mayer_btn.color = "#CFCDD2";
        marissa_mayer_btn.cornerRadius = 0;
        marissa_mayer_btn.strokeWeight = 0;
        marissa_mayer_btn.text = "Marissa Mayer (1999)";
        marissa_mayer_btn.textColor = "#000";
        marissa_mayer_btn.textSize = 25;
        marissa_mayer_btn.textFont = "serif";
        marissa_mayer_btn.onHover = function() {
            marissa_mayer_btn.color = "#eee";
        }
        marissa_mayer_btn.onPress = function() {
            console.log("marissa mayer Pressed");
            lastClicked.push( "marissa" );
            manager.showScene( Wiki );
        }
        marissa_mayer_btn.onOutside = function() {
            marissa_mayer_btn.color = "#cfcdd2";
        }

    }

    this.loadLayout = function() {
        for (let i = 0; i < layouts[0].length; i++) {
            for (let j = 0; j < layouts[0].length; j++) {

                let current = layouts[0];
                let tile = current[j][i];

                switch( tile ) {

                    case EMPTY:
                        break;

                    case PLATFORM:
                        // console.log("platforms:", (i*TILE_SIZE)+xOffset, (j*TILE_SIZE)+yOffset);
                        // console.log("       og:", i, j);
                        let p = new Platform( (i*TILE_SIZE)+xOffset, (j*TILE_SIZE)+yOffset, PLATFORM );
                        tiles.push(p);
                        break;

                    case LADDER:
                        let l = new Platform( (i*TILE_SIZE)+xOffset, (j*TILE_SIZE)+yOffset, LADDER );
                        tiles.push(l);
                        break;

                    case GOAL:
                        let d = new Platform( (i*TILE_SIZE)+xOffset, (j*TILE_SIZE)+yOffset, GOAL );
                        tiles.push(d);
                        break;
                } // end switch(tile)

            } // end j loop
        } // end i loop
    }

}

function ThousandsScreen() {

    let bkgd, sqColor, innerBkgd;
    let xOffset, yOffset;
    let tiles;
    let backBtn, nextBtn, homeBtn, home_icon;

    let lucy_sanders, lucy_sanders_btn;

    this.enter = function() {
        bkgd = loadImage("assets/backgrounds/minimal_background.jpg");
        innerBkgd = loadImage("assets/backgrounds/00s_city.jpg");
        home_icon = loadImage("assets/icons/home_icon.png");

        backBtn = new Clickable();
        nextBtn = new Clickable();
        homeBtn = new Clickable();

        // 1951 & 1952
        lucy_sanders = new Image_T( 250, 140, 1*210, 1*210, "lucy" ); // 1:1
        lucy_sanders_btn = new Clickable();

    }

    this.setup = function() {

        xOffset = 50;
        yOffset = 50;
        tiles = [];

        initLayoutData()
        this.loadLayout();

        console.log(tiles);

    }

    this.draw = function() {
        background( bkgd );

        for( let i = 0; i < NUM_TILES_PER_ROW; i++ ) {
            for( let j = 0; j < NUM_TILES_PER_COL; j++ ) {
                //console.log("hey");
                fill("#000");
                stroke("#fff");
                strokeWeight(2);
                rect((i*TILE_SIZE)+xOffset, (j*TILE_SIZE)+yOffset, TILE_SIZE, TILE_SIZE);
            }
        }

        image(innerBkgd, 50, 50, 600, 600);


        for( let t of tiles ) {
            t.draw();
        }

        // alpha square
        sqColor = color(210, 210, 210);
        sqColor.setAlpha(150);
        strokeWeight(3);
        stroke("#ffffff");
        fill(sqColor);
        rect(50, 50, 600, 600);


        this.drawDecade( 60 );
        this.initButtons( 60 );
        image(home_icon, 650, 10, 40, 40);

    }

    this.drawDecade = function( decade ) {

        lucy_sanders.draw();
        lucy_sanders_btn.draw();
        backBtn.draw();
        nextBtn.draw();
        homeBtn.draw();


    }

    this.initButtons = function( decade ) {

        backBtn.locate( 15, 325 );
        backBtn.resize( 35, 50 );
        backBtn.text = "⟵";
        backBtn.textSize = 25;
        backBtn.strokeWeight = 0;
        backBtn.cornerRadius = 0;
        backBtn.onHover = function() {

        }
        backBtn.onPress = function() {
            console.log("go back");
            manager.showScene(NinetiesScreen);
        }
        backBtn.onOutside = function() {

        }

        nextBtn.locate( 650, 325 );
        nextBtn.resize( 35, 50 );
        nextBtn.text = "⟶";
        nextBtn.textSize = 25;
        nextBtn.strokeWeight = 0;
        nextBtn.cornerRadius = 0;
        nextBtn.onHover = function() {

        }
        nextBtn.onPress = function() {
            console.log("go next");
            manager.showScene(FiftiesScreen);
        }
        nextBtn.onOutside = function() {

        }

        homeBtn.locate( 650, 10 );
        homeBtn.resize( 40, 40 );
        homeBtn.text = "";
        homeBtn.textSize = 25;
        homeBtn.strokeWeight = 0;
        homeBtn.cornerRadius = 0;
        homeBtn.onHover = function() {

        }
        homeBtn.onPress = function() {
            console.log("go next");
            manager.showScene(StartScreen);
        }
        homeBtn.onOutside = function() {

        }



        /*----------KATHERINE JOHNSON-------------- */
        lucy_sanders_btn.locate( 250, 320 );
        lucy_sanders_btn.resize( 210, 30 );
        lucy_sanders_btn.color = "#CFCDD2";
        lucy_sanders_btn.cornerRadius = 0;
        lucy_sanders_btn.strokeWeight = 0;
        lucy_sanders_btn.text = "Lucy Sanders (2004)";
        lucy_sanders_btn.textColor = "#000";
        lucy_sanders_btn.textSize = 25;
        lucy_sanders_btn.textFont = "serif";
        lucy_sanders_btn.onHover = function() {
            lucy_sanders_btn.color = "#eee";
        }
        lucy_sanders_btn.onPress = function() {
            console.log("lucy sanders Pressed");
            lastClicked.push( "lucy" );
            manager.showScene( Wiki );
        }
        lucy_sanders_btn.onOutside = function() {
            lucy_sanders_btn.color = "#cfcdd2";
        }

    }

    this.loadLayout = function() {
        for (let i = 0; i < layouts[0].length; i++) {
            for (let j = 0; j < layouts[0].length; j++) {

                let current = layouts[0];
                let tile = current[j][i];

                switch( tile ) {

                    case EMPTY:
                        break;

                    case PLATFORM:
                        // console.log("platforms:", (i*TILE_SIZE)+xOffset, (j*TILE_SIZE)+yOffset);
                        // console.log("       og:", i, j);
                        let p = new Platform( (i*TILE_SIZE)+xOffset, (j*TILE_SIZE)+yOffset, PLATFORM );
                        tiles.push(p);
                        break;

                    case LADDER:
                        let l = new Platform( (i*TILE_SIZE)+xOffset, (j*TILE_SIZE)+yOffset, LADDER );
                        tiles.push(l);
                        break;

                    case GOAL:
                        let d = new Platform( (i*TILE_SIZE)+xOffset, (j*TILE_SIZE)+yOffset, GOAL );
                        tiles.push(d);
                        break;
                } // end switch(tile)

            } // end j loop
        } // end i loop
    }

}

function Wiki() {

    let bkgd, sqColor;
    let backBtn;
    let judy_clapp, grace_hopper;
    let katherine_johnson, sister_mary;
    let gladys_west, elizabeth_feinler, annie_easley;
    let adele_goldberg, anita_borg;
    let shafi_goldwasser, marissa_meyer;
    let lucy_sanders;

    this.enter = function() {
        bkgd = loadImage("assets/backgrounds/minimal_background.jpg");
        backBtn = new Clickable();
    }

    this.setup = function() {
        this.initWikis();
    }

    this.draw = function() {
        background( bkgd );

        // alpha square
        sqColor = color(210, 210, 210);
        sqColor.setAlpha(150);
        strokeWeight(3);
        stroke("#ffffff");
        fill(sqColor);
        rect(50, 50, 600, 600);

        this.initButtons();



        this.showWiki( lastClicked.pop() );


    }

    this.initButtons = function () {
        backBtn.locate( 50, 50 );
        backBtn.resize( 35, 30 );
        backBtn.color = "#fff";
        backBtn.text = "⟵";
        backBtn.textSize = 25;
        backBtn.strokeWeight = 0;
        backBtn.cornerRadius = 0;
        backBtn.onHover = function() {

        }
        backBtn.onPress = function() {
            console.log("go back");
            switch ( lastClicked.pop() ) {
                //----------FIFTIES----------
                case "judy": // 1951
                    manager.showScene(FiftiesScreen);
                    break;

                case "grace": // 1952
                    manager.showScene(FiftiesScreen);
                    break;

                case "katherine": // 1962
                    manager.showScene(SixtiesScreen);
                    break;

                case "mary": // 1965
                    manager.showScene(SixtiesScreen);
                    break;

                case "gladys": // 1973
                    manager.showScene(SeventiesScreen);
                    break;

                case "elizabeth": // 1974
                    manager.showScene(SeventiesScreen);
                    break;

                case "annie": // 1977
                    manager.showScene(SeventiesScreen);
                    break;

                case "adele": // 1981
                    manager.showScene(EightiesScreen);
                    break;

                case "anita": // 1987
                    manager.showScene(EightiesScreen);
                    break;

                case "shafi": // 1993
                    manager.showScene(NinetiesScreen);
                    break;

                case "marissa": // 1999
                    manager.showScene(NinetiesScreen);
                    break;

                case "lucy": // 2004
                    manager.showScene(ThousandsScreen);
                    break;

            } // end switch

        } // end backbtn on press
        backBtn.onOutside = function() {

        }
        backBtn.draw();
    }

    this.initWikis = function( ) {

        judy_clapp = new Wiki_T( "judy" );
        grace_hopper = new Wiki_T( "grace" );

        katherine_johnson = new Wiki_T( "katherine" );
        sister_mary = new Wiki_T( "mary" );

        gladys_west = new Wiki_T( "gladys" );
        elizabeth_feinler = new Wiki_T( "elizabeth" );
        annie_easley = new Wiki_T( "annie" );

        adele_goldberg = new Wiki_T( "adele" );
        anita_borg = new Wiki_T( "anita" );

        shafi_goldwasser = new Wiki_T( "shafi" );
        marissa_meyer = new Wiki_T( "marissa" );

        lucy_sanders = new Wiki_T( "lucy" );

    }

    this.showWiki = function ( name ) {

        switch ( name ) {

            case "judy":
                lastClicked.push( "judy" );
                judy_clapp.show();
                break;

            case "grace":
                lastClicked.push("grace");
                grace_hopper.show();
                break;

            case "katherine":
                lastClicked.push("katherine");
                katherine_johnson.show();
                break;

            case "mary":
                lastClicked.push("mary");
                sister_mary.show();
                break;

            case "gladys":
                lastClicked.push("gladys");
                gladys_west.show();
                break;

            case "elizabeth":
                lastClicked.push("elizabeth");
                elizabeth_feinler.show();
                break;

            case "annie":
                lastClicked.push("annie");
                annie_easley.show();
                break;

            case "adele":
                lastClicked.push("adele");
                adele_goldberg.show();
                break;

            case "anita":
                lastClicked.push("anita");
                anita_borg.show();
                break;

            case "shafi":
                lastClicked.push("shafi");
                shafi_goldwasser.show();
                break;

            case "marissa":
                lastClicked.push("marissa");
                marissa_meyer.show();
                break;

            case "lucy":
                lastClicked.push("lucy");
                lucy_sanders.show();
                break;

        }

    }

}

function initLayoutData() {

    // JUDY CLAPP (1951) & GRACE HOPPER (1952)
    let scene = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    layouts = [scene];

}
