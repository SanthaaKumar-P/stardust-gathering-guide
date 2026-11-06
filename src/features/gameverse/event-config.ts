export const eventConfig = {
  name: "GEMINI GAMEVERSE",
  edition: "Game On Night — Imagine the Impossible",
  organizer: "Gemini Ambassador Team",
  registrationUrl: "https://forms.gle/qoKKkdprx7mh9sQh6",
  mode: "Online",
  platform: "To be announced",
  date: "To be announced",
  time: "To be announced",
  participation: "Individual",
  expectedAttendance: "30–50",
  minimumCapacity: 10,
  maximumCapacity: 100,
  duration: "Approximately 135 minutes, subject to confirmation",
  meetingLink: "To be announced",
} as const;

export const creationJourney = [
  { number: "01", title: "IMAGINE", detail: "Build your game concept with Gemini Chat.", symbol: "✳" },
  { number: "02", title: "REFINE", detail: "Shape the mission, characters, enemy, and gameplay.", symbol: "⌘" },
  { number: "03", title: "VISUALIZE", detail: "Create a text-free world poster with Nano Banana.", symbol: "◈" },
  { number: "04", title: "PITCH", detail: "Bring your original game to the arena in 60 seconds.", symbol: "↗" },
] as const;

export const eventSteps = [
  "Register and complete the pre-survey",
  "Explore Google Play Arena",
  "Build your game using Gemini",
  "Document your concept in Google Docs",
  "Generate your poster with Nano Banana",
  "Deliver your 60-second pitch",
  "Vote: Would Play / Wouldn’t Play",
  "Complete the feedback form",
] as const;

export const challengeRules = [
  "One unforgettable goal",
  "One original, non-violent enemy or obstacle",
  "One deadline that makes every second matter",
] as const;

export const officialRules = [
  "Individual participation; the event is online.",
  "Official capacity is 10–100 participants; expected attendance is 30–50.",
  "Include a game name, tagline, mission, enemy, characters, and game mode.",
  "Use Gemini Chat, Google Docs, and Nano Banana to build and document the concept.",
  "The poster must show characters, setting, enemies, and action scenes—with absolutely no text, game name, or tagline.",
  "Keep it positive and campus-friendly: no guns, weapons, or violence.",
  "Present your idea in a 60-second pitch.",
  "Submit proof: Gemini Chat link, Google Docs link, and Nano Banana poster.",
  "Google Play Arena registration, the pre-survey, and final feedback are required.",
  "Audience voting is ‘Would Play’ or ‘Wouldn’t Play.’",
] as const;

export const faqs = [
  { question: "Do I need coding experience?", answer: "No. This is a creative game-concept challenge, not a coding contest." },
  { question: "Do I need to develop a playable game?", answer: "No. Imagine an original game, shape its world, create a poster, and pitch the concept." },
  { question: "Is participation individual?", answer: "Yes. Every participant creates and presents their own game concept." },
  { question: "What tools will I use?", answer: "Gemini Chat, Google Docs, Nano Banana, and Google Play Arena." },
  { question: "What must I submit?", answer: "Your Gemini conversation link, Google Docs concept link, and Nano Banana poster." },
  { question: "Can I use violent gameplay?", answer: "No. Keep every idea positive and campus-friendly, without guns, weapons, or violence." },
  { question: "How do I register?", answer: "Use any registration button to open the official Google Form in a new tab." },
] as const;

export const fictionalModes = [
  { id: "SOLO", title: "SOLO", detail: "One explorer, one impossible objective. A world that rewards clever choices.", motif: "✦", color: "violet" },
  { id: "DUO", title: "DUO", detail: "Two distinct abilities, one shared mission. Every puzzle is a conversation.", motif: "◉", color: "cyan" },
  { id: "SQUAD", title: "SQUAD", detail: "A crew of specialists unites to rebuild a drifting constellation.", motif: "✧", color: "pink" },
  { id: "5V5", title: "5V5", detail: "Two five-person crews race to restore balance to a living game-world.", motif: "⌘", color: "lime" },
] as const;