import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Placeholder size-based estimate, pending calibration from run actuals. */
export type ImportEstimateResponse = {
  seconds: number;
  credits: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const importEstimateResponseSchema: Schema<ImportEstimateResponse> = s.object<ImportEstimateResponse>(
  {
    seconds: s.int(),
    credits: s.float64(),
  },
  { additionalProperties: s.json() },
);
