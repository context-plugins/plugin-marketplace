import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Actual processing mode used. */
export const SpeedProcessed = {
  Instant: "instant",
  Normal: "normal",
} as const;
export type SpeedProcessed = (typeof SpeedProcessed)[keyof typeof SpeedProcessed] | (string & {});

export const speedProcessedSchema: EnumSchema<SpeedProcessed> = s.enumOf<SpeedProcessed>(SpeedProcessed);
