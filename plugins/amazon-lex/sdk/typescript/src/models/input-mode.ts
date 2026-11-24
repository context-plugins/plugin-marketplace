import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates whether the input to the operation was text, speech, or from a touch-tone keypad. */
export const InputMode = {
  Text: "Text",
  Speech: "Speech",
  Dtmf: "DTMF",
} as const;
export type InputMode = (typeof InputMode)[keyof typeof InputMode] | (string & {});

export const inputModeSchema: EnumSchema<InputMode> = s.enumOf<InputMode>(InputMode);
