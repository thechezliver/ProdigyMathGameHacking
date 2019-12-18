//Sets the amount of all your currencies to 9 million.
x = PIXI.game.prodigy.player.backpack.data.currency
for (i in x) {
    x[i] = {"ID": x[i].ID, "N": 9000000}
}
