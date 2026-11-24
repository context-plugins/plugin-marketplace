import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { extremeValuesContentDtoSchema, type ExtremeValuesContentDto } from "./extreme-values-content-dto.js";
import { histogramBinContentDtoSchema, type HistogramBinContentDto } from "./histogram-bin-content-dto.js";
import { valueCountContentDtoSchema, type ValueCountContentDto } from "./value-count-content-dto.js";

export type ColumnMetricContentDto = {
  average?: number;
  averageLength?: number;
  distinctCount?: number;
  extremeValues?: ExtremeValuesContentDto;
  frequentValues?: ValueCountContentDto[];
  histogram?: HistogramBinContentDto[];
  maximum?: Record<string, unknown>;
  maximumLength?: number;
  maximumTimestamp?: Date;
  median?: number;
  minimum?: Record<string, unknown>;
  minimumLength?: number;
  minimumTimestamp?: Date;
  missingCount?: number;
  standardDeviation?: number;
  sum?: number;
  variance?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const columnMetricContentDtoSchema: Schema<ColumnMetricContentDto> = s.object<ColumnMetricContentDto>(
  {
    average: s.optional(s.float64()),
    averageLength: s.optional(s.float64()),
    distinctCount: s.optional(s.int()),
    extremeValues: s.optional(s.lazy(() => extremeValuesContentDtoSchema)),
    frequentValues: s.optional(s.array(s.lazy(() => valueCountContentDtoSchema))),
    histogram: s.optional(s.array(s.lazy(() => histogramBinContentDtoSchema))),
    maximum: s.optional(s.record(s.string(), s.unknown())),
    maximumLength: s.optional(s.int()),
    maximumTimestamp: s.optional(s.dateTime()),
    median: s.optional(s.float64()),
    minimum: s.optional(s.record(s.string(), s.unknown())),
    minimumLength: s.optional(s.int()),
    minimumTimestamp: s.optional(s.dateTime()),
    missingCount: s.optional(s.int()),
    standardDeviation: s.optional(s.float64()),
    sum: s.optional(s.float64()),
    variance: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
