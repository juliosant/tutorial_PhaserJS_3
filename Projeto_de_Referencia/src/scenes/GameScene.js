import Phaser from 'phaser'

export default class GameScene extends Phaser.Scene{
    constructor(){
        super('game-scene')
    }

    preload(){
        this.load.image('cachorro', 'assets/fiaDaPu.png')
        this.load.image('gato', 'assets/gato.png')
    }
    create(){
        this.add.image(600, 300, 'cachorro').setScale(0.5)
        this.add.image(200, 300, 'gato').setScale(0.5)

        this.add.text(400, 100, 'Gatinho e cachorro lindos',{font: '50px arial', fill: '#ff55ff'}).setOrigin(0.5)
    }
}
