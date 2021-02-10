sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite.setPosition(8, 104)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    myEnemy.setPosition(132, 14)
    info.changeLifeBy(-1)
})
let projectile: Sprite = null
let myEnemy: Sprite = null
let mySprite: Sprite = null
game.showLongText("Thou are gonna need a lot of imagination in this game, if you desire to continue, smash the \"A\" button and start with the game", DialogLayout.Full)
scene.setBackgroundImage(assets.image`Stage1`)
info.setLife(3)
info.setScore(0)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    . . . . . 8 8 8 8 8 . . . . . . 
    . . . . . 8 8 8 8 8 . . . . . . 
    . . . . . 8 8 8 8 8 . . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(18, 26)
mySprite.setVelocity(21, 21)
mySprite.setBounceOnWall(true)
forever(function () {
    controller.moveSprite(mySprite)
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 2 . . . . . . . . . . . 
        . . 2 2 5 2 . . . . . . . . . . 
        . 4 2 5 4 4 2 . . . . . . . . . 
        . 2 5 2 2 5 f f . . . . . . . . 
        . . 5 4 4 f f f f . . . . . . . 
        . . 5 2 f f f f f . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . . . f f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(1, 1000), 50)
    if (info.life() <= 0) {
        game.over(false)
    }
    if (info.life() >= 1) {
        info.changeScoreBy(1)
    }
    if (info.score() == 1000) {
        info.changeLifeBy(1)
    }
    if (info.score() == 1500) {
        info.changeLifeBy(1)
    }
    if (info.score() == 2000) {
        info.changeLifeBy(1)
    }
    if (info.score() == 3000) {
        info.changeLifeBy(1)
    }
    if (info.score() == 4000) {
        info.changeLifeBy(1)
    }
    if (info.score() == 5000) {
        myEnemy = sprites.create(img`
            ..cccc.........
            .c7776c........
            c67776ccccccc..
            c67776c677777c.
            c67776c7777766c
            c67776c6666666c
            c67776cccccc66c
            c67776c77776ccc
            c67776c777776c.
            c67776c777776c.
            c67776c777776c.
            c67776c777776c.
            c67776c777776c.
            c67776c777776c.
            c67776c777776c.
            c67766c777776c.
            c66666cccccccc.
            c66666c677777c.
            c66666c7777766c
            c66666c6666666c
            c66666c6666666c
            c66666c6666666c
            .cccccccccccccc
            .cbbc.....cbbc.
            `, SpriteKind.Player)
        myEnemy.follow(mySprite)
    }
    if (info.score() == 5010) {
        myEnemy.destroy()
        myEnemy.setFlag(SpriteFlag.AutoDestroy, true)
    }
    if (info.score() == 6000) {
        info.changeLifeBy(1)
    }
    if (info.score() == 8000) {
        info.changeLifeBy(1)
    }
    if (info.score() == 8000) {
        game.showLongText("You have to be broundonb to get here", DialogLayout.Full)
        pause(2000)
        game.over(true)
    }
})
