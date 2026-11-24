import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Required when `reviewStatus` is `RESOLVED`; forbidden otherwise. Qualifies whether the anomaly
 * was confirmed as real.
 */
export const Resolution = {
  AnomalyConfirmed: "ANOMALY_CONFIRMED",
  NotAnomaly: "NOT_ANOMALY",
} as const;
export type Resolution = (typeof Resolution)[keyof typeof Resolution] | (string & {});

export const resolutionSchema: EnumSchema<Resolution> = s.enumOf<Resolution>(Resolution);
