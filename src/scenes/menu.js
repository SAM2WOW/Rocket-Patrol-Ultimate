class Menu extends Phaser.Scene {
    constructor() {
        super("menu");
    }
    preload() {
        this.load.image('bg', 'assets/bg.png');
    }
    create() {
        let bg = this.add.image(320, 240, 'bg');
        bg.setOrigin(0.5, 0.5);
        
        this.title = this.add.text(320, 240, "Menu Scene");

        this.title.setFontFamily('Arial');
        this.title.setFontSize(40);
        this.title.setColor('#ffffff');
        this.title.setStroke('#000000', 5);
        this.title.setShadow(2, 2, "#333333", 2, false, true);
        this.title.setOrigin(0.5, 0.5);
        this.title.setDepth(1);

        this.scene.start("play");
    }
    update() {
        this.input.keyboard.on("keydown", function (event){
            
        });
    }
}