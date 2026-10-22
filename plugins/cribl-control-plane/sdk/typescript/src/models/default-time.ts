import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How to set the time field if no timestamp is found */
export const DefaultTime = {
  Now: "now",
  Last: "last",
  None: "none",
} as const;
export type DefaultTime = (typeof DefaultTime)[keyof typeof DefaultTime] | (string & {});

export const defaultTimeSchema: EnumSchema<DefaultTime> = s.enumOf<DefaultTime>(DefaultTime);
