import { describe, expect, it } from "vitest";
import { eventConfig, fictionalModes } from "@/features/gameverse/event-config";

describe("Gameverse event facts", () => {
  it("uses the official external registration destination", () => {
    expect(eventConfig.registrationUrl).toBe("https://forms.gle/qoKKkdprx7mh9sQh6");
  });

  it("keeps the unannounced schedule and online platform as placeholders", () => {
    expect(eventConfig.date).toBe("To be announced");
    expect(eventConfig.time).toBe("To be announced");
    expect(eventConfig.platform).toBe("To be announced");
    expect(eventConfig.meetingLink).toBe("To be announced");
  });

  it("preserves individual participation and the stated attendance ranges", () => {
    expect(eventConfig.participation).toBe("Individual");
    expect(eventConfig.expectedAttendance).toBe("30–50");
    expect(eventConfig.minimumCapacity).toBe(10);
    expect(eventConfig.maximumCapacity).toBe(100);
  });

  it("keeps the game-mode selector fictional and limited to the four briefed modes", () => {
    expect(fictionalModes.map(({ id }) => id)).toEqual(["SOLO", "DUO", "SQUAD", "5V5"]);
  });
});