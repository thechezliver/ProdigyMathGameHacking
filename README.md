# Prodigy Math Game Hacking

Note that I don't own prodigy, I'm not with them in any way, and they probably don't know who I am.
Let's go exploring!

After a bit of exploring, I found a game object `PIXI.game.prodigy`. It seems to contain a large amount of data. :|>

There are lots of things to explore! Let's go look at some of the things.

```
> Object.keys(PIXI.game.prodigy).map(i => `    ${typeof PIXI.game.prodigy[i]}, ${i}`).join("\n")
    string, version
    object, gameContainer
    object, game
    object, player
    object, _user
    object, breadcrumbManager
    number, updateCount
    object, assets
    object, load
    object, graphics
    object, audio
    object, giftBoxController
    object, battle
    object, pvp
    object, achievements
    object, colorReplaceController
    object, automation
    object, notifications
    object, open
    object, effects
    object, event
    object, eventBroadcaster
    object, dialogue
    object, education
    object, skin
    object, create
    object, icon
    object, animation
    object, giftBoxNetworkHandler
    object, mailNetworkHandler
    object, friendsListNetworkHandler
    object, titansNetworkHandler
    object, pvpNetworkHandler
    object, messageListener
    object, world
    object, dialogues
    object, hints
    object, debugMisc
    object, debugBattle
    object, debugQuests
    number, totalElapsedTime
    object, elapsedTimeBuffer
    number, frameBufferMaxSize
    number, elapsedTimeIndex
    boolean, isPendingResumeRecordFPS
    number, averageSumFPS
    number, averageCountFPS
    boolean, recordFPS
    number, previousNow
    object, textureBelow
    object, textureAbove
    object, textureMenu
    object, spinner
    object, _inputBlocker
    object, timeManager
    object, urlProvider
    object, metricsManager
    object, classModeController
    object, chat
    object, network
    object, bounty
    object, attacks
    object, statusEffects
```
