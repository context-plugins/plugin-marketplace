import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The mode of the session. The possible values are as follows: Speech – The session was spoken.
 * Text – The session was written. DTMF – The session used a touch-tone keypad (Dual Tone
 * Multi-Frequency). MultiMode – The session used multiple modes.
 */
export const Mode = {
  Speech: "Speech",
  Text: "Text",
  Dtmf: "DTMF",
  MultiMode: "MultiMode",
} as const;
export type Mode = (typeof Mode)[keyof typeof Mode] | (string & {});

export const modeSchema: EnumSchema<Mode> = s.enumOf<Mode>(Mode);
