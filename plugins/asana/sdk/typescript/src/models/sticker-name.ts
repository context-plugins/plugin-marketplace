import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The name of the sticker in this story. `null` if there is no sticker. */
export const StickerName = {
  GreenCheckmark: "green_checkmark",
  PeopleDancing: "people_dancing",
  DancingUnicorn: "dancing_unicorn",
  Heart: "heart",
  PartyPopper: "party_popper",
  PeopleWavingFlags: "people_waving_flags",
  SplashingNarwhal: "splashing_narwhal",
  Trophy: "trophy",
  YetiRidingUnicorn: "yeti_riding_unicorn",
  CelebratingPeople: "celebrating_people",
  DeterminedClimbers: "determined_climbers",
  PhoenixSpreadingLove: "phoenix_spreading_love",
} as const;
export type StickerName = (typeof StickerName)[keyof typeof StickerName] | (string & {});

export const stickerNameSchema: EnumSchema<StickerName> = s.enumOf<StickerName>(StickerName);
