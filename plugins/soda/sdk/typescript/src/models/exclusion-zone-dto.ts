import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ExclusionZoneDto = {
  lowerLimit: number;
  singleValue?: boolean;
  upperLimit: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const exclusionZoneDtoSchema: Schema<ExclusionZoneDto> = s.object<ExclusionZoneDto>(
  {
    lowerLimit: s.float64(),
    singleValue: s.optional(s.boolean()),
    upperLimit: s.float64(),
  },
  { additionalProperties: s.json() },
);
