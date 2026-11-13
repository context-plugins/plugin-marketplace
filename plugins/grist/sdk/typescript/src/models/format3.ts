import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** There are no format keyword options for `integer`: only `default` is allowed. */
export const Format3 = {
  Default: "default",
} as const;
export type Format3 = (typeof Format3)[keyof typeof Format3] | (string & {});

export const format3Schema: EnumSchema<Format3> = s.enumOf<Format3>(Format3);
