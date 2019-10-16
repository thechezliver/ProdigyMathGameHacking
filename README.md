# Prodigy Math Game Hacking

Note that I don't own prodigy, I'm not with them in any way, and they probably don't know who I am.
Let's go exploring!

After a bit of exploring, I found a game object `PIXI.game.prodigy`. It seems to contain a large amount of data. :|>

There are lots of things to explore! Let's go look at some of the things.

```
> Object.keys(PIXI.game.prodigy.player).map(i => `    ${typeof PIXI.game.prodigy.player[i]}, ${i}`).join("\n")
    boolean, immortal
    boolean, justLeveled
    number, starsEarned
    object, data
    object, modifiers
    string, type
    object, team
    object, source
    object, game
    boolean, inPVP
    number, catchAttempt
    number, starsToProcess
    number, starsRewardBase
    number, starsReward
    number, pvpHP
    boolean, isOpponent
    object, onHPChange
    object, appearance
    object, equipment
    object, tutorial
    object, kennel
    object, quests
    object, house
    object, backpack
    object, achievements
    object, state
    boolean, isMember
    number, userID
    boolean, appearanceChanged
    object, chatID
    object, emoteID
    object, danceID
    number, grade
    object, world
    object, coOpTeam
    boolean, earlyBirdLastChance
    object, transformID
    object, currentVideoSkillId
    boolean, saveEnabled
    number, curriculumTreeID
    string, parentEmail
    object, registerDate
    object, owners
    object, classIDs
    object, playerParents
    object, playerTeachers
    string, memberStartDate
    object, memberEndDate
    boolean, memberPrompt
    string, locationSelectionType
    string, username
    object, password
    number, spellStreak
    boolean, parentalLink
    boolean, isClassCodeAttached
    boolean, overrideClassSelect
    boolean, updated
    string, lastVisited
    object, memberShareDate
    boolean, tutorialCompletedThisSession
    boolean, hasUsedTicket
    object, dailyQuestions
    object, daily
    object, name
    number, broadcastId
```

Of all of these, a few stand out in particular.
```
    boolean, immortal
    object, data
    object, modifiers
    number, starsToProcess
    object, kennel
    object, backpack
    boolean, isMember
    string, username
    object, password
```

We can get member benefits for ONE session! As soon as the window is closed, you'll need to run this Javascript again.
```
javascript:PIXI.game.prodigy.player.isMember=true
```
