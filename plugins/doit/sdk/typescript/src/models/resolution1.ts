import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether the anomaly was confirmed as real. Present only when `reviewStatus` is `RESOLVED`. */
export const Resolution1 = {
  AnomalyConfirmed: "ANOMALY_CONFIRMED",
  NotAnomaly: "NOT_ANOMALY",
} as const;
export type Resolution1 = (typeof Resolution1)[keyof typeof Resolution1] | (string & {});

export const resolution1Schema: EnumSchema<Resolution1> = s.enumOf<Resolution1>(Resolution1);
