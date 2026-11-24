import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ValidRangeDto = {
  max?: number;
  min?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const validRangeDtoSchema: Schema<ValidRangeDto> = s.object<ValidRangeDto>(
  {
    max: s.optional(s.float64()),
    min: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
