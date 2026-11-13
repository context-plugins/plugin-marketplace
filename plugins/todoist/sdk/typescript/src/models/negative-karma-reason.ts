import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Reasons why karma can decrease. */
export const NegativeKarmaReason = {
  _50: 50,
  _51: 51,
  _52: 52,
} as const;
export type NegativeKarmaReason =
  | (typeof NegativeKarmaReason)[keyof typeof NegativeKarmaReason]
  | (number & {});

export const negativeKarmaReasonSchema: EnumSchema<NegativeKarmaReason> =
  s.enumOf<NegativeKarmaReason>(NegativeKarmaReason);
