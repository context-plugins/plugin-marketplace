import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Breadth of the approved increase; GROUP identifies an IdP group. */
export const PlatformRequestResolutionTarget = {
  User: "USER",
  All: "ALL",
  Department: "DEPARTMENT",
  Group: "GROUP",
} as const;
export type PlatformRequestResolutionTarget =
  | (typeof PlatformRequestResolutionTarget)[keyof typeof PlatformRequestResolutionTarget]
  | (string & {});

export const platformRequestResolutionTargetSchema: EnumSchema<PlatformRequestResolutionTarget> =
  s.enumOf<PlatformRequestResolutionTarget>(PlatformRequestResolutionTarget);
