import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ThresholdStrategyDto = {
  isLowerBoundEnabled: boolean;
  isUpperBoundEnabled: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const thresholdStrategyDtoSchema: Schema<ThresholdStrategyDto> = s.object<ThresholdStrategyDto>(
  {
    isLowerBoundEnabled: s.boolean(),
    isUpperBoundEnabled: s.boolean(),
  },
  { additionalProperties: s.json() },
);
