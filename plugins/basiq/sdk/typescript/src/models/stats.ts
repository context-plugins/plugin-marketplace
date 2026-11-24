import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { averageDurationMsSchema, type AverageDurationMs } from "./average-duration-ms.js";

/** InstitutionPerformanceStats response type for institution performance stats */
export type Stats = {
  /**
   * AverageDurationMs average connector duration in milliseconds per segments. When durations are
   * not known for institution this field will be `null`.
   */
  averageDurationMs?: AverageDurationMs;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const statsSchema: Schema<Stats> = s.object<Stats>(
  {
    averageDurationMs: s.optional(s.lazy(() => averageDurationMsSchema)),
  },
  { additionalProperties: s.json() },
);
