import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Relationship summary:
 * - same: documents have the same most recent state
 * - left: the left document has actions not yet in the right
 * - right: the right document has actions not yet in the left
 * - both: both documents have changes (possible divergence)
 * - unrelated: no common history found
 */
export const Summary = {
  Same: "same",
  Left: "left",
  Right: "right",
  Both: "both",
  Unrelated: "unrelated",
} as const;
export type Summary = (typeof Summary)[keyof typeof Summary] | (string & {});

export const summarySchema: EnumSchema<Summary> = s.enumOf<Summary>(Summary);
