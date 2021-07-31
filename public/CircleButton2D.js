import { WIDTH, HEIGHT, R_MODE } from './config.js';
import { showVideoPlayer } from './videoplayer.js';

export class CircleButton2D {

    constructor () {

        this.x = 0;
        this.y = 0;
        this.sz = 125;

        this.spritesheet = new Image();
        this.spritesheet.src = './images/videoicon-anim.png';

        this.cssFont = 'bold 11pt Verdana, Geneva, Tahoma, sans-serif';
        this.textVal = 'default';

        this.s_x = 0;
        this.s_y = 0;
        this.s_w = 130;
        this.s_h = 130;
        
        this.isHovered = false;
    }
    
    static anim_speed = 77; // ms
    static frame = 0;

// --- inits ---

    initHowBuilt() {

        this.textVal = 'HOW IT WAS BUILT';

        if (R_MODE === 'desktop' || R_MODE === 'tablet' || R_MODE === 'mobile') {
            this.x = WIDTH / 2 - this.sz / 2;
            this.y = HEIGHT / 2 - this.sz / 2;
        }   
    }

    initWhatDo() {

        this.textVal = 'WHAT WE DO HERE';

        if (R_MODE === 'desktop' || R_MODE === 'tablet'     || R_MODE === 'mobile') {
            this.x = WIDTH * 0.71 - this.sz / 2;
            this.y = HEIGHT * 0.25 - this.sz / 2;
        }
    }

// -----

    static advanceFrame () {
        CircleButton2D.frame = (CircleButton2D.frame + 1) % 49;
    }

    animate() {

        if (this.isHovered === false) {

            let row = Math.floor (CircleButton2D.frame / 7);
            let col = CircleButton2D.frame % 7

            this.s_x = col * 130;
            this.s_y = row * 130;
        }
        
        // console.log (this);
    }

    draw (context) {

        context.drawImage (
            this.spritesheet, 
            this.s_x,
            this.s_y, 
            this.s_w, 
            this.s_h, 
            this.x, 
            this.y, 
            this.sz,
            this.sz
        );

        context.font = this.cssFont;
        context.fillStyle = 'white';
        let text_dimens = context.measureText (this.textVal)
        let text_x = this.x + this.sz * 0.05;
        let text_y = this.y + this.sz / 2;
        context.fillText(this.textVal, text_x, text_y);
    }
}