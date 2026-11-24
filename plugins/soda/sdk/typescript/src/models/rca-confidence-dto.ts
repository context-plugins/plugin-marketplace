import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RcaConfidenceDto = {
  High: "high",
  Medium: "medium",
  Low: "low",
} as const;
export type RcaConfidenceDto = (typeof RcaConfidenceDto)[keyof typeof RcaConfidenceDto] | (string & {});

export const rcaConfidenceDtoSchema: EnumSchema<RcaConfidenceDto> =
  s.enumOf<RcaConfidenceDto>(RcaConfidenceDto);
