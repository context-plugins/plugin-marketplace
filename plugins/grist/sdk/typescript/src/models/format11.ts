import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** There are no format keyword options for `duration`: only `default` is allowed. */
export const Format11 = {
  Default: "default",
} as const;
export type Format11 = (typeof Format11)[keyof typeof Format11] | (string & {});

export const format11Schema: EnumSchema<Format11> = s.enumOf<Format11>(Format11);
