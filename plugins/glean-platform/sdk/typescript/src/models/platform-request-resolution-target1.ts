import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Stored approval breadth, when available. */
export const PlatformRequestResolutionTarget1 = {
  User: "USER",
  All: "ALL",
  Department: "DEPARTMENT",
  Group: "GROUP",
} as const;
export type PlatformRequestResolutionTarget1 =
  | (typeof PlatformRequestResolutionTarget1)[keyof typeof PlatformRequestResolutionTarget1]
  | (string & {});

export const platformRequestResolutionTarget1Schema: EnumSchema<PlatformRequestResolutionTarget1> =
  s.enumOf<PlatformRequestResolutionTarget1>(PlatformRequestResolutionTarget1);
