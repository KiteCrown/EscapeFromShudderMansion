namespace SpriteKind {
    export const round = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.round, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.follow(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    level += 1
    if (level == 0) {
        tiles.loadMap(tiles.createSmallMap(tilemap`level4`))
    } else if (level == 1) {
        tiles.loadMap(tiles.createSmallMap(tilemap`level11`))
    } else if (level == 2) {
    	
    } else if (level == 3) {
    	
    } else if (level == 4) {
    	
    } else if (level == 5) {
    	
    } else if (level == 6) {
    	
    } else if (level == 7) {
    	
    } else if (level == 8) {
    	
    } else if (level == 9) {
    	
    }
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile5`)
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
})
function tilemaps (level: Sprite) {
	
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    lantern.stopLanternEffect()
    controller.moveSprite(mySprite, 0, 0)
    extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Explosion), 5000, 100)
    scene.cameraShake(8, 5000)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    mySprite.setFlag(SpriteFlag.Invisible, true)
    timer.after(6000, function () {
        game.gameOver(false)
    })
})
let level = 0
let monster: Sprite = null
let mySprite: Sprite = null
let monsterImageList: Image[] = []
tiles.loadMap(tiles.createSmallMap(tilemap`level4`))
monsterImageList = [
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
lantern.startLanternEffect(mySprite)
lantern.setLightBandWidth(7)
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
