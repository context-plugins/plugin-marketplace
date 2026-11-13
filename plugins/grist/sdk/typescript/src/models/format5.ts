import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** There are no format keyword options for `yearmonth`: only `default` is allowed. */
export const Format5 = {
  Default: "default",
} as const;
export type Format5 = (typeof Format5)[keyof typeof Format5] | (string & {});

export const format5Schema: EnumSchema<Format5> = s.enumOf<Format5>(Format5);
