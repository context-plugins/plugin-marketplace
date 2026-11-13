import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** There are no format keyword options for `boolean`: only `default` is allowed. */
export const Format6 = {
  Default: "default",
} as const;
export type Format6 = (typeof Format6)[keyof typeof Format6] | (string & {});

export const format6Schema: EnumSchema<Format6> = s.enumOf<Format6>(Format6);
