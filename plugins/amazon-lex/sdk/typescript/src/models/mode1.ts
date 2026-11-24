import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The mode of the session. The possible values are as follows: Speech – The session consisted of
 * spoken dialogue. Text – The session consisted of written dialogue. DTMF – The session consisted
 * of touch-tone keypad (Dual Tone Multi-Frequency) key presses. MultiMode – The session consisted
 * of multiple modes.
 */
export const Mode1 = {
  Speech: "Speech",
  Text: "Text",
  Dtmf: "DTMF",
  MultiMode: "MultiMode",
} as const;
export type Mode1 = (typeof Mode1)[keyof typeof Mode1] | (string & {});

export const mode1Schema: EnumSchema<Mode1> = s.enumOf<Mode1>(Mode1);
