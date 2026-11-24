import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Determines the slot resolution strategy that Amazon Lex uses to return slot type values. The
 * field can be set to one of the following values: ORIGINAL_VALUE - Returns the value entered by
 * the user, if the user value is similar to the slot value. TOP_RESOLUTION - If there is a
 * resolution list for the slot, return the first value in the resolution list as the slot type
 * value. If there is no resolution list, null is returned. If you don't specify the
 * valueSelectionStrategy, the default is ORIGINAL_VALUE.
 */
export const ResolutionStrategy = {
  OriginalValue: "OriginalValue",
  TopResolution: "TopResolution",
  Concatenation: "Concatenation",
} as const;
export type ResolutionStrategy = (typeof ResolutionStrategy)[keyof typeof ResolutionStrategy] | (string & {});

export const resolutionStrategySchema: EnumSchema<ResolutionStrategy> =
  s.enumOf<ResolutionStrategy>(ResolutionStrategy);
