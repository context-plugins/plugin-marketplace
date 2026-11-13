import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** There are no format keyword options for `object`: only `default` is allowed. */
export const Format7 = {
  Default: "default",
} as const;
export type Format7 = (typeof Format7)[keyof typeof Format7] | (string & {});

export const format7Schema: EnumSchema<Format7> = s.enumOf<Format7>(Format7);
