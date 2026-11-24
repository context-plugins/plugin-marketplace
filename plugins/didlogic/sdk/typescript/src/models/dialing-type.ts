import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Dialing mode of the group this destination belongs to: `sequence` tries it alone, `ring_all`
 * dials the whole group at once, `random` picks group members in a random order. Mirrors `callhunt`
 * (`ring_all` maps to true).
 */
export const DialingType = {
  Sequence: "sequence",
  RingAll: "ring_all",
  Random: "random",
} as const;
export type DialingType = (typeof DialingType)[keyof typeof DialingType] | (string & {});

export const dialingTypeSchema: EnumSchema<DialingType> = s.enumOf<DialingType>(DialingType);
