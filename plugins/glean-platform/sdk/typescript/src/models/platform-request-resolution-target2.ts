import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Shared stored resolution target vocabulary. */
export const PlatformRequestResolutionTarget2 = {
  User: "USER",
  All: "ALL",
  Department: "DEPARTMENT",
  Group: "GROUP",
} as const;
export type PlatformRequestResolutionTarget2 =
  | (typeof PlatformRequestResolutionTarget2)[keyof typeof PlatformRequestResolutionTarget2]
  | (string & {});

export const platformRequestResolutionTarget2Schema: EnumSchema<PlatformRequestResolutionTarget2> =
  s.enumOf<PlatformRequestResolutionTarget2>(PlatformRequestResolutionTarget2);
