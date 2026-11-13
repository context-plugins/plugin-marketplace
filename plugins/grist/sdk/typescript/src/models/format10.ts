import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** There are no format keyword options for `array`: only `default` is allowed. */
export const Format10 = {
  Default: "default",
} as const;
export type Format10 = (typeof Format10)[keyof typeof Format10] | (string & {});

export const format10Schema: EnumSchema<Format10> = s.enumOf<Format10>(Format10);
