import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmznTranscribePartialResultsStability = {
  High: "high",
  Medium: "medium",
  Low: "low",
} as const;
export type XAmznTranscribePartialResultsStability =
  | (typeof XAmznTranscribePartialResultsStability)[keyof typeof XAmznTranscribePartialResultsStability]
  | (string & {});

export const xAmznTranscribePartialResultsStabilitySchema: EnumSchema<XAmznTranscribePartialResultsStability> =
  s.enumOf<XAmznTranscribePartialResultsStability>(XAmznTranscribePartialResultsStability);
