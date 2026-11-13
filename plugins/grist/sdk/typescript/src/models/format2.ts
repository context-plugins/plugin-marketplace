import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** There are no format keyword options for `number`: only `default` is allowed. */
export const Format2 = {
  Default: "default",
} as const;
export type Format2 = (typeof Format2)[keyof typeof Format2] | (string & {});

export const format2Schema: EnumSchema<Format2> = s.enumOf<Format2>(Format2);
