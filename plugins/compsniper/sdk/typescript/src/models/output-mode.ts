import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * compact also returns compact sold-listing rows, including bestOfferAccepted, and is limited to 25
 * cards with count <= 60.
 */
export const OutputMode = {
  Summary: "summary",
  Compact: "compact",
} as const;
export type OutputMode = (typeof OutputMode)[keyof typeof OutputMode] | (string & {});

export const outputModeSchema: EnumSchema<OutputMode> = s.enumOf<OutputMode>(OutputMode);
