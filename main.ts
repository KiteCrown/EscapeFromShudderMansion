namespace SpriteKind {
    export const round = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.round, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.follow(mySprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    lantern.stopLanternEffect()
    controller.moveSprite(mySprite, 0, 0)
    extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Explosion), 5000, 100)
    scene.cameraShake(8, 5000)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroy(mySprite)
    timer.after(6000, function () {
        game.gameOver(false)
    })
})
let monster: Sprite = null
let mySprite: Sprite = null
tiles.loadMap(tiles.createSmallMap(tilemap`level4`))
let monsterImageList = [
img`
    . 1 . . . . 1 . 
    . 1 1 1 1 1 1 . 
    . 1 2 1 1 2 2 . 
    . 1 2 1 1 2 1 . 
    . 1 1 1 1 1 1 . 
    . 1 2 1 1 2 1 . 
    . . 1 2 2 1 . . 
    . . . 1 2 . . . 
    `,
img`
    . . . . . . . . 
    . . 2 2 2 2 e . 
    . e 2 1 2 1 . . 
    . . 2 2 2 2 . . 
    . 2 e 2 e e 2 . 
    . . e 2 2 2 . . 
    . . 2 e 2 e . . 
    . . 2 . . 2 . . 
    `,
img`
    . . f f . . . . 
    . . 1 f f f . . 
    f . f f 1 f . . 
    . f f f f . . . 
    . f f f f f . . 
    . f f . . f f . 
    f f f . f . . f 
    . f . . . f . . 
    `,
img`
    . . 2 2 2 2 . . 
    . 2 2 2 2 2 . . 
    . 2 6 6 6 6 . . 
    2 2 6 1 6 2 . . 
    2 . 6 6 6 1 . . 
    . . 1 1 6 1 . . 
    . . 1 6 6 6 . . 
    . . 6 . . 6 . . 
    `
]
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
lantern.startLanternEffect(mySprite)
lantern.setLightBandWidth(7)
scene.cameraFollowSprite(mySprite)
for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
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
    tiles.placeOnTile(monster, value)
    tiles.setTileAt(value, assets.tile`myTile`)
    monster.setImage(monsterImageList._pickRandom())
}
game.onUpdate(function () {
    if (round2 != null) {
        round2.setPosition(mySprite.x, mySprite.y)
    }
})
