import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Approval scope; omission selects PERIOD. ONGOING returns 503 on this API. */
export const PlatformRequestScope2 = {
  Period: "PERIOD",
  Ongoing: "ONGOING",
} as const;
export type PlatformRequestScope2 =
  | (typeof PlatformRequestScope2)[keyof typeof PlatformRequestScope2]
  | (string & {});

export const platformRequestScope2Schema: EnumSchema<PlatformRequestScope2> =
  s.enumOf<PlatformRequestScope2>(PlatformRequestScope2);
