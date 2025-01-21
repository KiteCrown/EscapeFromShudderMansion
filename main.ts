namespace SpriteKind {
    export const round = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.round, SpriteKind.Enemy, function (sprite, otherSprite) {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
	
})
info.onLifeZero(function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    controller.moveSprite(mySprite, 0, 0)
    extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Explosion), 5000, 100)
    scene.cameraShake(8, 5000)
    sprites.destroy(mySprite)
    timer.after(6000, function () {
        game.gameOver(false)
    })
})
function tilemaps (level: Sprite) {
	
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
    extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Spark), 2000, 100)
    pause(2000)
})
let monster: Sprite = null
let mySprite: Sprite = null
tiles.loadMap(tiles.createSmallMap(tilemap`level24`))
let monsterImageList = [
img`
    . 1 . . . . 1 . 
    . 1 1 1 1 1 1 . 
    . 1 f 1 1 f 1 . 
    . 1 2 1 1 2 1 . 
    . 1 2 1 1 2 1 . 
    . 1 f 1 1 f 1 . 
    . . 1 f f 1 . . 
    . . . 1 1 . . . 
    `,
img`
    . . 2 2 6 6 . . 
    . . 2 1 6 1 . . 
    . . 2 6 6 6 . . 
    . . c 7 2 f 6 2 
    . . f f f . . . 
    . . e e 2 . . . 
    . . 2 . 2 . . . 
    . . 2 . 2 . . . 
    `,
img`
    . . f f f f . . 
    . . f 1 f 1 . . 
    . . f f f f . 2 
    . . . . f . . 2 
    . f f f f 2 2 . 
    . . . . f . . . 
    . . . f . f . . 
    . . . f . f . . 
    `,
img`
    . . . . . . . . 
    . . 2 1 1 1 . . 
    . 1 2 f f 2 1 . 
    . 1 f 2 1 f 1 . 
    . 1 2 2 2 2 1 . 
    . 2 1 f 2 1 2 . 
    . . 1 1 2 1 . . 
    . . . . . . . . 
    `
]
profilelife.setMaxLife(15)
info.setLife(15)
mySprite = sprites.create(img`
    . . f f f f . . 
    . f f f f f f . 
    . . d f d f . . 
    . . d d d d . . 
    . . c c b c . . 
    . . c c b c . . 
    . . c c b c . . 
    . . e . . e . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile5`)
let round2 = sprites.create(img`
    ...........bbbbbbbbbbb...........
    ........bbbbbbbbbbbbbbbbb........
    .......bbbbbbbbbbbbbbbbbbb.......
    ......bbbbbbbbbbbbbbbbbbbbb......
    ....bbbbbbbbbbbbbbbbbbbbbbbbb....
    ....bbbbbbbbbbbbbbbbbbbbbbbbb....
    ...bbbbbbbbbbbbbbbbbbbbbbbbbbb...
    ..bbbbbbbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
    .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
    .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
    .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
    .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
    ..bbbbbbbbbbbbbbbbbbbbbbbbbbbbb..
    ...bbbbbbbbbbbbbbbbbbbbbbbbbbb...
    ....bbbbbbbbbbbbbbbbbbbbbbbbb....
    ....bbbbbbbbbbbbbbbbbbbbbbbbb....
    ......bbbbbbbbbbbbbbbbbbbbb......
    .......bbbbbbbbbbbbbbbbbbb.......
    ........bbbbbbbbbbbbbbbbb........
    ...........bbbbbbbbbbb...........
    `, SpriteKind.round)
round2.setFlag(SpriteFlag.Invisible, true)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
	
}
game.onUpdate(function () {
    if (round2 != null) {
        round2.setPosition(mySprite.x, mySprite.y)
    }
})
game.onUpdateInterval(1000, function () {
    monster = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    monster.follow(mySprite, 70)
    tiles.placeOnRandomTile(monster, assets.tile`myTile7`)
    monster.setImage(monsterImageList._pickRandom())
})
