import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The strategy that Amazon Lex uses to determine the value of the slot. For more information, see
 * PutSlotType.
 */
export const ValueSelectionStrategy = {
  OriginalValue: "ORIGINAL_VALUE",
  TopResolution: "TOP_RESOLUTION",
} as const;
export type ValueSelectionStrategy =
  | (typeof ValueSelectionStrategy)[keyof typeof ValueSelectionStrategy]
  | (string & {});

export const valueSelectionStrategySchema: EnumSchema<ValueSelectionStrategy> =
  s.enumOf<ValueSelectionStrategy>(ValueSelectionStrategy);
