import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** There are no format keyword options for `year`: only `default` is allowed. */
export const Format4 = {
  Default: "default",
} as const;
export type Format4 = (typeof Format4)[keyof typeof Format4] | (string & {});

export const format4Schema: EnumSchema<Format4> = s.enumOf<Format4>(Format4);
