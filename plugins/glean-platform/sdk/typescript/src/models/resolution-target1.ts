import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Group or department approval breadth. */
export const ResolutionTarget1 = {
  Group: "GROUP",
  Department: "DEPARTMENT",
} as const;
export type ResolutionTarget1 = (typeof ResolutionTarget1)[keyof typeof ResolutionTarget1] | (string & {});

export const resolutionTarget1Schema: EnumSchema<ResolutionTarget1> =
  s.enumOf<ResolutionTarget1>(ResolutionTarget1);
