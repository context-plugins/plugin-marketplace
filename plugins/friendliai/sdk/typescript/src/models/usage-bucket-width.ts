import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Usage bucket width. */
export const UsageBucketWidth = {
  _5M: "5m",
  _15M: "15m",
  _30M: "30m",
  _45M: "45m",
  _1H: "1h",
  _6H: "6h",
  _12H: "12h",
  _1D: "1d",
} as const;
export type UsageBucketWidth = (typeof UsageBucketWidth)[keyof typeof UsageBucketWidth] | (string & {});

export const usageBucketWidthSchema: EnumSchema<UsageBucketWidth> =
  s.enumOf<UsageBucketWidth>(UsageBucketWidth);
