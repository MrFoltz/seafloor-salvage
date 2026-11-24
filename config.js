// Settings for the Earthquake Triangulation Lab and the Seafloor Salvage game (one file serves both).
// If you already have a config.js with your submitUrl and classCode, you can keep yours and just add (or update) the "game" section.
window.LAB_CONFIG = {
  submitUrl: "https://script.google.com/macros/s/AKfycbxUNCATksb_BwVp6RiTLt4_oyRQY30XZfykqracb5SVuva3PM5XEvf45HT_GcvUsLaThg/exec",     // paste your Google Apps Script "Web app" address here (it ends in /exec)
  classCode: "fall26",     // a code you make up; it must match CLASS_CODE in the Google script exactly
  feedback: 2,       // (lab) after students submit, show them: 2 = marks and score, 1 = score only, 0 = nothing
  times: true,       // (lab) label exact arrival times on the seismograms
  dist: true,        // (lab) label the distance on the graph guide
  quick: false,      // (lab) allow quick-plot from the start
  unlock: false,     // (lab) unlock the geology reveal from the start
  autosum: false,    // (lab) show the hazard summary automatically
  game: {            // Seafloor Salvage settings (all optional; these are the defaults)
    rocksToEnd: 15,  // the game ends after this many nodules have erupted as lava
    mode: "classic", // which mode is preselected: "classic" (points) or "advanced" (dollars and upgrades)
    maxHead: 30,     // the most seconds of head start the faster quiz player can earn (two players)
    capClassic: 4,   // (classic) how many nodules a boat's cargo hold can carry before it must sail home to unload
    // --- student settings menu: your values below are the defaults students start from ---
    // settingsMenu: true,                      // false hides the gear/settings menu completely
    // lockedSettings: ["rocksToEnd"],           // settings students may NOT change (use the names in this file: rocksToEnd, rampSeconds, flips, gold, boatCollide, maxHead, capClassic, upgrades, prices, sound)
    // flips: "normal",                         // off, rare, normal, often
    // gold: "normal",                          // off, rare, normal, common
    // prices: "normal",                        // cheap, normal, pricey
    // upgrades: ["cap", "crane", "eng"],       // (advanced) which upgrades exist: cap = cargo hold, crane = crane speed, eng = engine speed
    // sound: true,                             // start with sound on or off
    // bucket: "normal",                        // small, normal, large: how big the bucket's catch zone is (bigger = easier to aim)
    // quizCountdown: 3, quizPause: 1.5,                 // seconds: countdown before the quiz; explanation time after a correct answer
    // rampSeconds: 240,                                 // seconds to ramp from the slow start to full difficulty
    // speed0: 14, speedMax: 62, speedMax2: 95,          // seafloor spreading speed: start, after the ramp, after the extra phase
    // spawn0: 7, spawnMin: 1.2, spawnMin2: 0.5,         // seconds between new nodules (same three moments)
    // flip0Min: 40, flip0Max: 60, flipMin: 5, flipMax: 11,   // seconds between magnetic flips: at the start, then at full speed
    // subEvery: 7,                                      // seconds between subduction events in each trench
    // valNodule: 10, valGold: 30,                       // (advanced) dollars per nodule / gold nugget
    // capVals: [2, 4, 7, 12], craneMul: [1, 1.25, 1.55, 1.9], engMul: [1, 1.3, 1.65, 2],   // (advanced) upgrade effects
    // costCap: [60, 140, 280], costCrane: [60, 140, 280], costEng: [60, 140, 280]           // (advanced) upgrade prices,
    // boatCollide: true,                                // two players: boats bump and push each other (false = they pass through)
    // boatGap: 88, idleW: 0.4, dragMin: 0.35            // bump tuning: spacing, how hard an idle boat resists, leverage with the crane lowered
  },
  // The leaderboard page (leaderboard.html) reads this too. All optional; these are its defaults.
  leaderboard: {
    // names: "short",      // "short" shows first name + last initial; "full" shows full names
    // ranked: "standard",  // "standard" ranks only games played with normal settings; "all" ranks every game
    // win: "today",        // today, 2h (last 2 hours), week, all
    // top: 8,              // rows per board (5, 8, 10, 15); the screen shows as many as fit
    // refresh: 15,         // seconds between updates
    // rotate: false,       // true cycles through the class periods automatically
    // rotateEvery: 20,     // seconds each class stays on screen when rotating
    // title: "Seafloor Salvage Leaderboard"
  }
};
