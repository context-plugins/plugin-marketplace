import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether the opt-in status was explicitly set by the user or implicitly defaulted */
export const Resolution = {
  Explicit: "explicit",
  Implicit: "implicit",
} as const;
export type Resolution = (typeof Resolution)[keyof typeof Resolution] | (string & {});

export const resolutionSchema: EnumSchema<Resolution> = s.enumOf<Resolution>(Resolution);
