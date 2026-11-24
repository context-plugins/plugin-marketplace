import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Configures the slot to use spell-by-letter or spell-by-word style. When you use a style on a
 * slot, users can spell out their input to make it clear to your bot. Spell by letter - "b" "o" "b"
 * Spell by word - "b as in boy" "o as in oscar" "b as in boy" For more information, see Using
 * spelling to enter slot values .
 */
export const SlotElicitationStyle = {
  Default: "Default",
  SpellByLetter: "SpellByLetter",
  SpellByWord: "SpellByWord",
} as const;
export type SlotElicitationStyle =
  | (typeof SlotElicitationStyle)[keyof typeof SlotElicitationStyle]
  | (string & {});

export const slotElicitationStyleSchema: EnumSchema<SlotElicitationStyle> =
  s.enumOf<SlotElicitationStyle>(SlotElicitationStyle);
