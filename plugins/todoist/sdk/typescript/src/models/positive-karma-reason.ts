import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Reasons why karma can increase. */
export const PositiveKarmaReason = {
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
  _5: 5,
  _6: 6,
  _7: 7,
  _8: 8,
  _9: 9,
  _10: 10,
} as const;
export type PositiveKarmaReason =
  | (typeof PositiveKarmaReason)[keyof typeof PositiveKarmaReason]
  | (number & {});

export const positiveKarmaReasonSchema: EnumSchema<PositiveKarmaReason> =
  s.enumOf<PositiveKarmaReason>(PositiveKarmaReason);
