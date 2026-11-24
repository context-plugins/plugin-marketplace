import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Dialing mode of the group this destination belongs to: `sequence` tries it alone, `ring_all`
 * dials the whole group at once, `random` picks group members in a random order. Mirrors `callhunt`
 * (`ring_all` maps to true). Takes precedence over `callhunt`.
 */
export const DialingType1 = {
  Sequence: "sequence",
  RingAll: "ring_all",
  Random: "random",
} as const;
export type DialingType1 = (typeof DialingType1)[keyof typeof DialingType1] | (string & {});

export const dialingType1Schema: EnumSchema<DialingType1> = s.enumOf<DialingType1>(DialingType1);
