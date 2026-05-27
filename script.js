const campaign = [
  { chapter: 1, name: "Solace Beyond Sight", steps: ["Go to Ked Bardu and talk to Lorath.", "Learn Neyrell's Fate.", "Investigate the Yshari Archive."] },
  { chapter: 1, name: "Last of the Horadrim", steps: ["Meet Lorath in Backwater.", "Board the ship and head to Skovos."] },
  { chapter: 1, name: "Hatred's Wake", steps: ["Defeat the enemies sent by the Hand of Akarat.", "Defeat the abyssal warriors in the top deck.", "Make your way toward the middle deck, and continue defeating all the enemies that you encounter.", "Destroy the Briny Debris covering the armaments, while slaying the merfolk that bar your way.", "Defeat the Calamitous Crab.", "Defeat the Hateborn Abomination."] },
  { chapter: 1, name: "Crown of the Twin Seas", steps: ["Find the entrance to Temis with Lorath.", "Enter Temis to unlock the Temis Waypoint."] },
  { chapter: 1, name: "Between Heaven and Hell", steps: ["Follow the Hand of Akarat.", "Look for the Hand of Akarat located in the streets of Temis.", "Upon locating the Hand of Akarat, keep following him."] },
  { chapter: 1, name: "Subterranean Secrets", steps: ["Investigate the Hall of Solitutde.", "Fight your way through the Sunken Catacombs and continue on to the Hall of Solitude.", "Once you reach the Hall of Solitude, speak to the Hand of Akarat and defeat the Galvanized Mauler they summon.", "Return to Temis Plaza."] },
  { chapter: 1, name: "The Queen and the Saint", steps: ["Look for Lorath in Plaza of Queens.", "Head to the Plaza of Queens and observe the crowd.", "Follow Lorath and head outside Temeris."] },
  { chapter: 2, name: "What's Yet Unseen", steps: ["Seek New Allies on Phillios.", "Defeat the pirate ambushers and destroy the salt-iron anchors.", "Speak with Oracle Cyra in Vision's End"] },
  { chapter: 2, name: "In the Shadow of Another", steps: ["Head to the Mind's Eye.", "Speak to Lorath, then Speak to Cyra.", "Head to the Sanctum of the Eye.", "Place the sightless eye on the cradle and enter the Mind's Eye."] },
  { chapter: 2, name: "She Sleeps Within You", steps: ["Seek Lilith's Aid.", "Follow the petals of blood and make your way to Lilith.", "Use the Fragments of Memory to show Lilith what Mephisto is up to."] },
  { chapter: 2, name: "Tipped Scales", steps: ["Light the signal.", "Speak with Cyra, then slay the Morlu that appears.", "Reach the signal brazier to alert the Queen of Skovos. Slay the Morlu that bar the way forward.", "Light the signal brazier, and then defeat the remaining Morlu."] },
  { chapter: 2, name: "Quelling Hatred", steps: ["Defeat the Morlu Invaders.", "Speak with Cyra, then travel to eastern Philios.", "Defeat the Morlu Invaders and destroy the Hellgates."] },
  { chapter: 2, name: "The Hellborne Grove", steps: ["Rally with the Amazons.", "Find the source of the Amazon signal horn.", "Talk to the Amazon Captain and seek out the source of the Morlu Invasion.", "Defeat the Molten Conjurer at the Dais of Flagellation."] },
  { chapter: 2, name: "Along the Crimson Trail", steps: ["Use the SIghtless Eye again to converse with Lilith.", "Speak with Lorath in Eastlook Bluff", "Follow the blood petals.", "Place the Sightless Eye on its cradle."] },
  { chapter: 2, name: "What Was Given", steps: ["Acquire knowledge of the weapon capable of stopping Mephisto.", "Look into the Sightless Eye to find Lilith, and speak to her.", "Follow Lilith's trail.", "Interact with the fragments of memory to learn more about Lilith's memories of Rathma."] },
  { chapter: 2, name: "Mother's Guidance", steps: ["Tell Lorath about the weapon capable of stopping Mephisto."] },
  { chapter: 2, name: "A Devil in the Garden", steps: ["Disrupt the Ritual and Defeat the Beast of Thorns.", "Head to the Golden Boughs, then speak with Lorath.", "Fight your way through to reach the Noxious Wilds.", "Head to the Temple of Life.", "Slay the Twisted Undergrowths andefeat the Beast of Thorns."] },
  { chapter: 2, name: "Hands Stained Red", steps: ["Cleanse the Temple of Life.", "Make your way to the temple of life, slaying enemies that bar your way.", "Recover Tharra's Spear.", "Defeat all of the Twisted Undergrowths, and then defeat the Crone of Vines.", "Keep defeating the twisted northwestern area, destroy all Twisted Undergrowths, then defeat the Thorned Brutes.", "Clear the Wall of Thorns.", "Speak with Lorath."] },
  { chapter: 2, name: "Seed of Hatred", steps: ["Defeat the Writhing Hatred.", "Enter the chamber north of the Temple of Life courtyard.", "Defeat the Writhing Hatred."] },
  { chapter: 2, name: "Those Who Remain", steps: ["Head to the Archive of Makers.", "Investigate the summoning circle.", "Search for survivors.", "Speak with Archivist Linos.", "Grab the Archive Keys and use them to access the Archive of Makers."] },
  { chapter: 2, name: "A Blade's Weight", steps: ["Recover the piece of Lilith's weapon.", "Explore the Archive of the Makers.", "Restore Rathma's Memories.", "Defeat Rathma's Golem.", "Investigate Rathma's Presence.", "Solve Rathma's Puzzle.", "Light Rathma's Essence Braziers."] },
  { chapter: 2, name: "In Rathma's Footsteps", steps: ["Follow Rathma’s Trail.", "Return to the Temple of Life and speak with Tharra.", "Travel through the Austral Ambers to the Fragrant Clearing.", "Inspect the Rathma Statue and confront the Hands of Akarat.", "Defeat the Infernal Corpse Tamer and speak with Lorath."] },
  { chapter: 2, name: "The Path of Riddles", steps: ["Reach the Ruins of a Broken Reason.", "Find Lorath and Tharra.", "Follow Lilith’s Blood Petals.", "Place the Sightless Eye on the pedestal."] },
  { chapter: 2, name: "A Door Was Opened", steps: ["Explore the Ruins further.", "Find Lilith.", "Survive Mephisto’s ambush.", "Speak with Lilith and inspect the memories."] },
  { chapter: 2, name: "The Soil, The Seed, The Fruit", steps: ["Defeat Inarius in the Mind’s Eye.", "Follow Lilith through memories.", "Survive enemy encounters.", "Defeat and chain Inarius."] },
  { chapter: 2, name: "The Rising Tide", steps: ["Assist the Amazons.", "Travel to Athulua and aid their forces.", "Speak with Captain Aegel.", "Defeat enemies in the Temple of Courage."] },
  { chapter: 2, name: "Threadbare Legacy", steps: ["Escort Lorath.", "Defend Lorath in the Queen’s camp.", "Escort him to Athulua Garrison."] },
  { chapter: 2, name: "Wounded Souls", steps: ["Destroy the Siege Towers.", "Speak with the Amazon Captains, and assist them in defending the Northeastern Wall.", "Destroy the Siege Towers in The Sisterlands.", "Defeat the Seaborn Goddess. Slay the Drowned that remains."] },
  { chapter: 2, name: "Scattered to the Winds", steps: ["Assist the Amazons from the Drowned.", "Speak with the Amazon Captains.", "Speak to Tyrael then travel to the Eastern Flank.", "Speak to the Amazon Bowmaiden in Portemos.", "Defeat the Tideraiser."] },
  { chapter: 2, name: "The Queen's Castaways", steps: ["End the Drowned threat.", "Speak with Tharra in in Portemos.", "Defeat the Water Shaper in Zerae Amphitheater."] },
  { chapter: 2, name: "The Hateborn Sea", steps: ["Clear the Drowned stragglers.", "Speak to Lorath in Athalua Garrison.", "Slay the remaining Drowned."] },
  { chapter: 2, name: "Breaking the Storm", steps: ["Recover part of Lilith's Weapon.", "Follow Thara in Mysenna.", "Find the Hands of Akarat in the Foundering Caverns and defeat them. Grab the Edge of Lilith's Blade."] },
  { chapter: 2, name: "Glint of Light", steps: ["Head back to Athalua Garrison in speak to Tyrael. Then, speak to Lorath."] },
  { chapter: 3, name: "Faith and Failings", steps: ["Disrupt Mephisto's Machinations.", "Meet Tharra in Atanos. Then travel with her to Celestia. Slay the Pirates you come across.", "Speak with the Amazon Sentry on the Odorous Mists.", "Attend Akarat's sermon in Light's Bastion.", "Escape the crowd and listen to Lilith's instructions on where to go next."] },
  { chapter: 4, name: "Fate Laughs at Us All", steps: ["Travel to the Observatory and confront Queen Adreona.", "Enter the Observatory and speak with Tharra.", "Speak with Queen Adreona and choose any dialogue option.", "Regardless of your choice, Oracle Cyra steps in to defend you."] },
  { chapter: 4, name: "On the Hunt", steps: ["Mount the Basilisk.", "Travel to Tyrael's Encampment and speak with Tyrael.", "Head to the market square and defeat Mephisto's Huntsman.", "Track and mount the Basilisk, then regroup with Lorath."] },
  { chapter: 4, name: "A Withering Curse", steps: ["Investigate the Old City.", "Travel to the Bowels of the Old City and speak with Lorath outside the entrance."] },
  { chapter: 4, name: "The Void", steps: ["Recover the Tip of Lilith's Blade.", "Explore the Old City and defend Lorath while he opens the way.", "Slay the Tormented Servant in the depths.", "Obtain the Tip of Lilith's Blade and escape."] },
  { chapter: 4, name: "Embers at Twilight", steps: ["Return to camp and prepare to depart.", "Escort Lorath back to Tyrael's Encampment.", "Speak with Tyrael to depart Celestia."] },
  { chapter: 4, name: "The Land of Fire", steps: ["Travel to Fool's Quarry in Skartara.", "Head to Fool's Quarry from Tyrael's Encampment.", "Speak with Tyrael near the waypoint upon arrival. Choose any dialogue option to proceed."] },
  { chapter: 4, name: "Some Fall, Some Jump", steps: ["Push through the volcanic path.", "Continue toward the First Vault, defeating enemies.", "Survive repeated eruptions behind Tyrael's barrier.", "Find the tunnel entrance to proceed."] },
  { chapter: 4, name: "A Still-Beating Heart", steps: ["Navigate the Roiling Maze.", "Enter the Tunnels of Hefaetrus.", "Destroy Volatile Mindbreakers blocking the path.", "Defeat the Beast of the Deep and escape."] },
  { chapter: 4, name: "The Needle's Path", steps: ["Reach the First Vault.", "Reach and open the vault entrance fighting enemies along the way."] },
  { chapter: 4, name: "Doorways to the Distant Past", steps: ["Unseal and explore the Horadric Vault.", "Help unseal the vault by defeating enemies.", "Enter the Horadric Vault and proceed forward.", "Defeat constructs and speak with Tyrael."] },
  { chapter: 4, name: "The Scribe", steps: ["Obtain the Sigil of Jered Cain.", "Speak with Tyrael to open the gateway.", "Enter the Silent Scriptorium and examine the Signing Stones.", "Solve the elemental riddles with Lorath and Tyrael to claim the Sigil of Jered Cain.", "Return to the Chamber of Gates and use the Vessel of Cain."] },
  { chapter: 4, name: "The Watchman", steps: ["Obtain the Sigil of Iben Fahd.", "Enter the Hall of Echoes and examine the Three-Faced Statue.", "Complete encounters across multiple locations.", "Interact with the Three-Faced Statue after each encounter to proceed to the next.", "Claim the Sigil of Iben Fahd and use the Vessel of Fahd."] },
  { chapter: 4, name: "The Luminary", steps: ["Obtain the Sigil of Zoltun Kulle.", "Enter the Anvil and proceed through traps and enemies.", "Survive the encounter while defeating the Prototype Guardian.", "Obtain the Sigil of Zoltun Kulle and return to use the Vessel of Kulle."] },
  { chapter: 4, name: "The Initiate", steps: ["Obtain the Sigil of Tal Rasha.", "Speak with Tyrael and defeat enemies from the gateway.", "Enter the Sealing Wing and destroy the Sacred Seal.", "Obtain the Sigil of Tal Rasha and return to use the Vessel of Tal Rasha."] },
  { chapter: 4, name: "Horadrim", steps: ["Defeat the Horadric Guardian.", "Defeat the Horadric Guardian. Use the correct Sigils to remove its ward.", "Obtain the Horadric Cube and speak with Tyrael."] },
  { chapter: 4, name: "Death", steps: ["Traverse the Mind's Eye.", "Cross the Mind's Eye and search for Lilith. Defend her from Mephisto's demons.", "Follow Lilith and interact with Fragments of Memory.", "Defeat enemies encountered along the way, then escape back to Sanctuary."] },
  { chapter: 4, name: "One Eye Closes, One Eye Opens", steps: ["Seal the vault entrance.", "Travel with Tyrael to the vault entrance.", "Defeat Lava Golems along the way.", "Assist Tyrael in restoring the seal."] },
  { chapter: 4, name: "The Fools", steps: ["Find Lorath.", "Search for Lorath and investigate his polearm.", "Defeat Adreona in a two-phase boss encounter, surviving her second phase with Tyrael’s barrier.", "Inspect Lorath's corpse and speak with Tyrael."] },
  { chapter: 4, name: "Smothered Flame", steps: ["Defend Oracle Cyra and secure the Observatory.", "Defend Oracle Cyra in the Observatory and hold off enemy waves.", "Destroy siege engines across the battlefield.", "Defeat the amazon captains and secure the area."] },
  { chapter: 5, name: "The Age of Hatred", steps: ["Travel to Atanos and fight your way through to the Pools of Creation."] },
  { chapter: 5, name: "Delivering a Promise", steps: ["Slay the entrenched shield wall blocking your path in the Temple of Union."] },
  { chapter: 5, name: "Lord of Hatred", steps: ["Defeat Mephisto, the Lord of Hatred."] },
  { chapter: 5, name: "A New Beginning", steps: ["Meet Tyrael back at Light's Bastion."] },
  { chapter: 6, name: "No Gods, No Masters", steps: ["Meet Tyrael at the Tree of Whispers in Hawezar. Take the torch from him and burn down the tree."] }
].map((q, idx) => ({ ...q, overallQuestIndex: idx + 1 }));

const milestones = [
  { key: "chapter", title: "End of Current Chapter", target: (s) => ({ quest: lastQuestInChapter(s.chapter), step: lastStepInQuest(lastQuestInChapter(s.chapter)) }) },
  { key: "cube", title: "Obtain Horadric Cube", target: () => ({ quest: campaign.findIndex((q) => q.name === "Horadrim"), step: 2 }) },
  { key: "expansion", title: "End of Expansion", target: () => ({ quest: campaign.length - 1, step: lastStepInQuest(campaign.length - 1) }) }
];

const chapterSelect = document.getElementById("chapterSelect");
const questSelect = document.getElementById("questSelect");
const stepSelect = document.getElementById("stepSelect");
const startSessionBtn = document.getElementById("startSessionBtn");
const updateProgressBtn = document.getElementById("updateProgressBtn");
const cards = document.getElementById("cards");
const sessionStartText = document.getElementById("sessionStartText");

let sessionStart = null;

function uniqueChapters() { return [...new Set(campaign.map((q) => q.chapter))]; }
function questsInChapter(chapter) { return campaign.filter((q) => q.chapter === chapter); }
function lastQuestInChapter(chapter) { return campaign.map((q, i) => ({...q, i})).filter((q) => q.chapter === chapter).slice(-1)[0].i; }
function lastStepInQuest(questIndex) { return campaign[questIndex].steps.length - 1; }
function absStepIndex(questIndex, stepIndex) { return campaign.slice(0, questIndex).reduce((n, q) => n + q.steps.length, 0) + stepIndex; }
function clamp(n) { return Math.max(0, Math.min(100, n)); }

function initSelectors() {
  uniqueChapters().forEach((chapter) => {
    const option = new Option(`Chapter ${chapter}`, String(chapter));
    chapterSelect.add(option);
  });
  chapterSelect.addEventListener("change", populateQuests);
  questSelect.addEventListener("change", populateSteps);
  [chapterSelect, questSelect, stepSelect].forEach((el) => el.addEventListener("change", maybeEnableUpdate));
  startSessionBtn.addEventListener("click", startSession);
  updateProgressBtn.addEventListener("click", renderMilestones);
  populateQuests();
}

function populateQuests() {
  questSelect.innerHTML = "";
  stepSelect.innerHTML = "";
  const chapter = Number(chapterSelect.value || uniqueChapters()[0]);
  const quests = questsInChapter(chapter);
  quests.forEach((q) => questSelect.add(new Option(q.name, String(campaign.findIndex((c) => c.name === q.name)))));
  questSelect.disabled = false;
  populateSteps();
}

function populateSteps() {
  stepSelect.innerHTML = "";
  const questIndex = Number(questSelect.value);
  campaign[questIndex].steps.forEach((_, idx) => stepSelect.add(new Option(`Step ${idx + 1}`, String(idx))));
  stepSelect.disabled = false;
  maybeEnableUpdate();
}

function currentSelection() {
  return { chapter: Number(chapterSelect.value), quest: Number(questSelect.value), step: Number(stepSelect.value) };
}

function percent(startAbs, currentAbs, targetAbs) {
  if (targetAbs <= startAbs) return currentAbs >= targetAbs ? 100 : 0;
  return clamp(((currentAbs - startAbs) / (targetAbs - startAbs)) * 100);
}

function describeStepsRemaining(currentAbs, targetAbs) {
  if (currentAbs >= targetAbs) return "Reached";
  return `${targetAbs - currentAbs} steps remaining`;
}

function renderMilestones() {
  const current = currentSelection();
  const currentAbs = absStepIndex(current.quest, current.step);
  cards.innerHTML = "";

  milestones.forEach((m) => {
    const target = m.target(current);
    const targetAbs = absStepIndex(target.quest, target.step);
    const totalStart = 0;
    const sessionStartAbs = sessionStart ? absStepIndex(sessionStart.quest, sessionStart.step) : currentAbs;

    const sessionPct = percent(sessionStartAbs, currentAbs, targetAbs);
    const totalPct = percent(totalStart, currentAbs, targetAbs);

    const node = document.getElementById("cardTemplate").content.cloneNode(true);
    node.querySelector(".milestone-title").textContent = m.title;
    node.querySelector(".session-fill").style.width = `${sessionPct}%`;
    node.querySelector(".total-fill").style.width = `${totalPct}%`;
    node.querySelector(".session-text").textContent = `${sessionPct.toFixed(1)}% • ${describeStepsRemaining(currentAbs, targetAbs)}`;
    node.querySelector(".total-text").textContent = `${totalPct.toFixed(1)}% • ${describeStepsRemaining(currentAbs, targetAbs)}`;
    cards.appendChild(node);
  });
}

function startSession() {
  sessionStart = currentSelection();
  sessionStartText.textContent = `Session started at Chapter ${sessionStart.chapter} • ${campaign[sessionStart.quest].name} • Step ${sessionStart.step + 1}`;
  updateProgressBtn.disabled = false;
  renderMilestones();
}

function maybeEnableUpdate() {
  if (sessionStart) updateProgressBtn.disabled = false;
}

initSelectors();
renderMilestones();
