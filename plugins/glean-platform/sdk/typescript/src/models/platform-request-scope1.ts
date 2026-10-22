import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Approval scope derived from the stored ongoing flag, when available. */
export const PlatformRequestScope1 = {
  Period: "PERIOD",
  Ongoing: "ONGOING",
} as const;
export type PlatformRequestScope1 =
  | (typeof PlatformRequestScope1)[keyof typeof PlatformRequestScope1]
  | (string & {});

export const platformRequestScope1Schema: EnumSchema<PlatformRequestScope1> =
  s.enumOf<PlatformRequestScope1>(PlatformRequestScope1);
