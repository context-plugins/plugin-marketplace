import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies whether assisted slot resolution is turned on for the slot or not. If the value is
 * EnhancedFallback, assisted slot resolution is activated when Amazon Lex V2 defaults to the
 * AMAZON.FallbackIntent. If the value is Default, assisted slot resolution is turned off.
 */
export const SlotResolutionStrategy = {
  EnhancedFallback: "EnhancedFallback",
  Default: "Default",
} as const;
export type SlotResolutionStrategy =
  | (typeof SlotResolutionStrategy)[keyof typeof SlotResolutionStrategy]
  | (string & {});

export const slotResolutionStrategySchema: EnumSchema<SlotResolutionStrategy> =
  s.enumOf<SlotResolutionStrategy>(SlotResolutionStrategy);
