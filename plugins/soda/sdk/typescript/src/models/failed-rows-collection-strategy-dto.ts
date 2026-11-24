import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  failedRowsCollectionStrategyTypeDtoSchema,
  type FailedRowsCollectionStrategyTypeDto,
} from "./failed-rows-collection-strategy-type-dto.js";
import { thresholdConditionDtoSchema, type ThresholdConditionDto } from "./threshold-condition-dto.js";

export type FailedRowsCollectionStrategyDto = {
  maxRowCountOverride?: number;
  threshold: number;
  thresholdCondition: ThresholdConditionDto;
  type?: FailedRowsCollectionStrategyTypeDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const failedRowsCollectionStrategyDtoSchema: Schema<FailedRowsCollectionStrategyDto> =
  s.object<FailedRowsCollectionStrategyDto>(
    {
      maxRowCountOverride: s.optional(s.int()),
      threshold: s.float64(),
      thresholdCondition: thresholdConditionDtoSchema,
      type: s.optional(s.lazy(() => failedRowsCollectionStrategyTypeDtoSchema)),
    },
    { additionalProperties: s.json() },
  );
