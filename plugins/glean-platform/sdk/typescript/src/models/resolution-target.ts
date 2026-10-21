import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** User or organization approval breadth. */
export const ResolutionTarget = {
  User: "USER",
  All: "ALL",
} as const;
export type ResolutionTarget = (typeof ResolutionTarget)[keyof typeof ResolutionTarget] | (string & {});

export const resolutionTargetSchema: EnumSchema<ResolutionTarget> =
  s.enumOf<ResolutionTarget>(ResolutionTarget);
