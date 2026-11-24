import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The identifier of the audio filler to play while Amazon Lex processes the user's input. This
 * field is required when enabled is true.
 */
export const AudioType = {
  MelodyChipperChime: "MELODY_CHIPPER_CHIME",
  MelodyCuriousCrawl: "MELODY_CURIOUS_CRAWL",
  MelodyRisingRipple: "MELODY_RISING_RIPPLE",
  MelodyPatientPing: "MELODY_PATIENT_PING",
  MelodyPonderingPong: "MELODY_PONDERING_PONG",
  TypingKineticKeys: "TYPING_KINETIC_KEYS",
  TypingQuietQwerty: "TYPING_QUIET_QWERTY",
} as const;
export type AudioType = (typeof AudioType)[keyof typeof AudioType] | (string & {});

export const audioTypeSchema: EnumSchema<AudioType> = s.enumOf<AudioType>(AudioType);
