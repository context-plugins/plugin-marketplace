import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * **Only relevant for recurring payments.**
 *
 * Indicate if this Checkout Session is used for a one-off or a first of a recurring payment.
 *
 * With a `first` payment, the customer agrees to automatic recurring charges taking place on their
 * account in the future.
 *
 * Defaults to `oneoff`, which is a regular non-recurring payment.
 */
export const SessionSequenceType1 = {
  Oneoff: "oneoff",
  First: "first",
} as const;
export type SessionSequenceType1 =
  | (typeof SessionSequenceType1)[keyof typeof SessionSequenceType1]
  | (string & {});

export const sessionSequenceType1Schema: EnumSchema<SessionSequenceType1> =
  s.enumOf<SessionSequenceType1>(SessionSequenceType1);
