import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Recommendation = {
  FastTrack: "fast_track",
  Standard: "standard",
  VerifyFirst: "verify_first",
  LowPriority: "low_priority",
} as const;
export type Recommendation = (typeof Recommendation)[keyof typeof Recommendation] | (string & {});

export const recommendationSchema: EnumSchema<Recommendation> = s.enumOf<Recommendation>(Recommendation);
