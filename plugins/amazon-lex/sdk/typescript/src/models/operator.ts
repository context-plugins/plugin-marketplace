import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The operator to use for the filter. Specify EQ when the ListAggregatedUtterances operation should
 * return only utterances that equal the specified value. Specify CO when the
 * ListAggregatedUtterances operation should return utterances that contain the specified value.
 */
export const Operator = {
  Co: "CO",
  Eq: "EQ",
} as const;
export type Operator = (typeof Operator)[keyof typeof Operator] | (string & {});

export const operatorSchema: EnumSchema<Operator> = s.enumOf<Operator>(Operator);
