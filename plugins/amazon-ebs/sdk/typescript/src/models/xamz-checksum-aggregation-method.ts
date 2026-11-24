import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzChecksumAggregationMethod = {
  Linear: "LINEAR",
} as const;
export type XAmzChecksumAggregationMethod =
  | (typeof XAmzChecksumAggregationMethod)[keyof typeof XAmzChecksumAggregationMethod]
  | (string & {});

export const xAmzChecksumAggregationMethodSchema: EnumSchema<XAmzChecksumAggregationMethod> =
  s.enumOf<XAmzChecksumAggregationMethod>(XAmzChecksumAggregationMethod);
