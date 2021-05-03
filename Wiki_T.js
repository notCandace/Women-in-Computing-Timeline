
class Wiki_T {

    constructor( name ) {
        this.name = name;
        this.initImages();

    }

    initImages() {
        switch( this.name ) {

            case "judy":
                this.image_1 = loadImage("assets/wikis/judy_clapp_MIT.jpg");
                this.image_2 = loadImage("assets/wikis/judy_clapp_SAGE.jpg");
                break;

            case "grace":
                this.image_1 = loadImage("assets/wikis/grace_hopper_Mark.jpg");
                this.image_2 = loadImage("assets/wikis/grace_hopper_pioneer.jpg");
                break;

            case "katherine":
                this.image_1 = loadImage("assets/wikis/katherine_johnson_medal.jpg");
                this.image_2 = loadImage("assets/wikis/katherine_johnson_nasa.jpg");
                break;

            case "mary":
                this.image_1 = loadImage("assets/wikis/sister_mary_computer.jpg");
                break;

            case "gladys":
                this.image_1 = loadImage("assets/wikis/gladys_west_t.jpg");
                this.image_2 = loadImage("assets/wikis/gladys_west_simpsons.jpg");
                this.image_3 = loadImage("assets/wikis/gladys_west_globe.jpg");
                break;

            case "elizabeth":
                this.image_1 = loadImage("assets/wikis/elizabeth_feinler_wave.png");
                break;

            case "annie":
                this.image_1 = loadImage("assets/wikis/annie_easley_nasa.jpg");
                this.image_2 = loadImage("assets/wikis/annie_easley_tech.png");
                break;

            case "adele":
                this.image_1 = loadImage("assets/wikis/adele_goldberg_book.jpg");
                this.image_2 = loadImage("assets/wikis/adele_goldberg_lec.jpg");
                break;

            case "anita":
                this.image_1 = loadImage("assets/wikis/anita_borg_desk.jpg");
                break;

            case "shafi":
                this.image_1 = loadImage("assets/wikis/shafi_goldwasser_school.jpg");
                break;

            case "marissa":
                this.image_1 = loadImage("assets/wikis/marissa_mayer_yahoo.jpg");
                break;

            case "lucy":
                this.image_1 = loadImage("assets/wikis/lucy_sanders_desk.jpg");
                break;

        }


    }

    show() {

        switch( this.name ) {

            case "judy":

                strokeWeight(8);
                stroke("#fff");
                rect(100, 120, 600/2, 326/2);
                image( this.image_1, 100, 120, 600/2, 326/2);
                rect(390, 360, 211, 239);
                image( this.image_2, 390, 360, 211, 239);

                noStroke();
                textAlign(LEFT);
                textSize( 28 );
                text("Judy Clapp began\nworking at MIT\nduring the early\nstages" +
                     " of the\nWhirlwind\nComputer.",
                    415, 200
                );

                text("She was the only woman on the\nprogramming team \nand" +
                     " as it expanded,\nClapp's work led her to\nthe SAGE Project" +
                     " at\nMIT's Lincoln\nLab and she was later\nrelocated to MITRE.",
                    95, 450
                );
                /*
                text("Clapp's work at MIT's\nLincoln Lab and MITRE\nchanged the field\n" +
                     "of computer science.",
                    95, 550
                );
                */

                break;

            case "grace":

                strokeWeight(8);
                stroke("#fff");
                rect(285, 430, 766/2.3, 402/2.3);
                image( this.image_1, 285, 430, 766/2.3, 402/2.3);
                rect(400, 100, 782/4, 1200/4);
                image( this.image_2, 400, 100, 782/4, 1200/4);

                noStroke();
                textAlign(LEFT);
                textSize( 28 );

                text("Hopper's career in the\nU.S. Naval Reserve led\nher to contribute to the\ngrowing" +
                     " field of computer\nscience.",
                    80, 190
                );

                text("She worked on Harvard\nMark computers I, II, and\nIII, the " +
                     " UNIVAC,\ndeveloped the first\ncompiler, and\nwas able to\npopularize" +
                     "\nthe COBOL\nprogramming\nlanguage.",
                    80, 460
                );

                break;

            case "katherine":

                strokeWeight(8);
                stroke("#fff");
                rect(180, 380, 2148/6.2, 1445/6.2);
                image( this.image_1, 180, 380, 2148/6.2, 1445/6.2);
                rect(100, 100, 230, 230);
                image( this.image_2, 100, 100, 1*230, 1*230);

                noStroke();
                textAlign(LEFT);
                textSize( 27 );

                text("Katherine Johnson was a\nmathematician who held\na key role" +
                     " in calculating\nthe 1961 mission to send\nthe first man into" +
                     " space\nand the 1962 mission to\nsend a man into earth's\norbit. ",
                    340, 230
                );
                break;

            case "mary":

                strokeWeight(8);
                stroke("#fff");
                rect(130, 110, 2160/5, 1350/5);
                image( this.image_1, 130, 110, 2160/5, 1350/5);
                // rect(400, 100, 782/4, 1200/4);
                // image( this.image_2, 400, 100, 782/4, 1200/4);

                noStroke();
                textAlign(LEFT);
                textSize( 30 );

                text("Sister Mary Keller was the first person in\nthe US to earn a" +
                     " earn a PhD in computer\nscience. She has worked to expand" +
                     " the\nuse of technology in education after she\nrealized the" +
                     " computer's potential as an\ninstructive tool.",
                    90, 510
                );
                break;

            case "gladys":
                strokeWeight(8);
                stroke("#fff");
                rect(105, 390, 780/2.5, 520/2.5);
                image( this.image_1, 105, 390, 780/2.5, 520/2.5);
                rect(340, 100, 1200/4.5, 814/4.5);
                image( this.image_3, 340, 100, 1200/4.5, 814/4.5);

                noStroke();
                textAlign(LEFT);
                textSize( 26.5 );

                text("Gladys West was\noffered a job at a\nnaval base that\nsubmersed" +
                     " her into a\nworld of\nprogramming.",
                    80, 190
                );

                text("In the early 1970s, West" +
                     " progammed an IBM\n7030 Stretch computer to provide calculations",
                    80, 340
                );
                text("for an accurate\nmodel of\nthe Earth. This\nbecame the\nbuilding block" +
                     "\nthat helped\ncreate the GPS\nsystem today.",
                    440, 510
                );
                break;

            case "elizabeth":
                strokeWeight(8);
                stroke("#fff");
                rect(145, 320, 774/1.9, 520/1.9);
                image( this.image_1, 145, 320, 774/1.9, 520/1.9);
                // rect(400, 100, 782/4, 1200/4);
                // image( this.image_2, 400, 100, 782/4, 1200/4);

                noStroke();
                textAlign(LEFT);
                textSize( 30 );

                text("Elizabeth Feinler pioneered and managed\nthe first early" +
                     " networks that make up\ntoday's Internet. The work of her" +
                     " and her\nteam developed the .com, .edu, .gov, .org,\nand .net" +
                     " domain schemes.",
                    75, 200
                );
                break;

            case "annie":
                strokeWeight(8);
                stroke("#fff");
                rect(115, 320, 640/2.7, 813/2.7);
                image( this.image_1, 115, 320, 640/2.7, 813/2.7);
                rect(115, 100, 912/3.5, 680/3.5);
                image( this.image_2, 115, 100, 912/3.5, 680/3.5);

                noStroke();
                textAlign(LEFT);
                textSize( 26 );

                text("Easley worked in the\nOhio unit of the\nNational Advisory\nCommittee" +
                     " for\nAeronautics (NACA),\nfuture NASA, where\nshe was a\nmulti-talented" +
                     "\nmathematician. Her\nmost famous work\nwas on the Centaur\nrocket which had" +
                     " a\nunique fuel system\nand was the\nbackbone of\nmany space missions.",
                    390, 360
                );
                break;

            case "adele":
                strokeWeight(8);
                stroke("#fff");
                rect(110, 270, 260, 321);
                image( this.image_1, 110, 270, 260, 321);
                //rect(400, 100, 1024, 802);
                //image( this.image_2, 400, 100, 1024, 802);

                noStroke();
                textAlign(LEFT);
                textSize( 29 );

                text("Adele Goldberg was one of the\nprogrammers who developed" +
                     " and wrote a\nmajority of the documentation for the\nSmalltalk" +
                     " language.",
                    100, 180
                );
                text("It was one of the\nfirst object-oriented\nprogramming" +
                     "\nlanguages to be\nbased on current\ngraphical user\ninterface.",
                    390, 430
                );
                break;

            case "anita":
                strokeWeight(8);
                stroke("#fff");
                rect(200, 320, 512/1.75, 507/1.75);
                image( this.image_1, 200, 320, 512/1.75, 507/1.75);
                // rect(400, 100, 782/4, 1200/4);
                // image( this.image_2, 400, 100, 782/4, 1200/4);

                noStroke();
                textAlign(LEFT);
                textSize( 28 );

                text("Anita Borg was a computer scientist who\nstarted Systers:" +
                     " the first email network for\nwomen in technology. She also" +
                     "\nco-founded the Grace Hopper Celebration\nof Women in Computing.",
                    90, 200
                );
                break;

            case "shafi":
                strokeWeight(8);
                stroke("#fff");
                rect(160, 115, 589/1.5, 442/1.5);
                image( this.image_1, 160, 115, 589/1.5, 442/1.5);
                // rect(400, 100, 782/4, 1200/4);
                // image( this.image_2, 400, 100, 782/4, 1200/4);

                noStroke();
                textAlign(LEFT);
                textSize( 30 );

                text("Shafi Goldwasser is a theoretical computer\nscientist who" +
                     " is a two-time reciptent of\nthe Godel Prize for her research" +
                     " in\ncryptography and complexity theory.",
                    70, 510
                );
                break;

            case "marissa":
                strokeWeight(8);
                stroke("#fff");
                rect(165, 310, 2330/6.25, 1747/6.25);
                image( this.image_1, 165, 310, 2330/6.25, 1747/6.25);
                // rect(400, 100, 782/4, 1200/4);
                // image( this.image_2, 400, 100, 782/4, 1200/4);

                noStroke();
                textAlign(LEFT);
                textSize( 29 );

                text("Marissa Mayer was the first female\nengineer to be hired at" +
                     " Google in 1999\nwhen the company was just starting. She\nis" +
                     " credited with the success of many\nGoogle products including" +
                     " Gmail, Google\nMaps, and iGoogle.",
                    100, 190
                );
                break;

            case "lucy":
                strokeWeight(8);
                stroke("#fff");
                rect(145, 110, 1200/2.9, 675/2.9);
                image( this.image_1, 145, 110, 1200/2.9, 675/2.9);
                // rect(400, 100, 782/4, 1200/4);
                // image( this.image_2, 400, 100, 782/4, 1200/4);

                noStroke();
                textAlign(LEFT);
                textSize( 30 );

                text("Lucy Sanders is the CEO and Co-founder\nof the National Center" +
                     " for Women\n& Information Technology (NCWIT). The\norganization" +
                     " aims to increase the\ninfluential and meaningful participation of" +
                     "\ngirls and women in the field of\ncomputing.",
                    85, 500
                );
                break;

        }

    }





}
