import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Capture quality signal */
export const Quality = {
  Full: "full",
  Degraded: "degraded",
  BestAttempt: "best_attempt",
} as const;
export type Quality = (typeof Quality)[keyof typeof Quality] | (string & {});

export const qualitySchema: EnumSchema<Quality> = s.enumOf<Quality>(Quality);
