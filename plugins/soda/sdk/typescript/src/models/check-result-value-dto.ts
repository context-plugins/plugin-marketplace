import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  checkResultAnomalyDetectionDetailsDtoSchema,
  type CheckResultAnomalyDetectionDetailsDto,
} from "./check-result-anomaly-detection-details-dto.js";
import {
  checkResultDiagnosticsV4Schema,
  type CheckResultDiagnosticsV4,
} from "./check-result-diagnostics-v4.js";
import {
  checkResultValueSeriesDtoSchema,
  type CheckResultValueSeriesDto,
} from "./check-result-value-series-dto.js";
import { measureDtoSchema, type MeasureDto } from "./measure-dto.js";

export type CheckResultValueDto = {
  anomalyDetectionDetails?: CheckResultAnomalyDetectionDetailsDto;
  dataTimestamp?: Date;
  diagnostics?: CheckResultDiagnosticsV4;
  id: string;
  measure?: MeasureDto;
  value?: number;
  valueLabel?: string;
  valueSeries?: CheckResultValueSeriesDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const checkResultValueDtoSchema: Schema<CheckResultValueDto> = s.object<CheckResultValueDto>(
  {
    anomalyDetectionDetails: s.optional(s.lazy(() => checkResultAnomalyDetectionDetailsDtoSchema)),
    dataTimestamp: s.optional(s.dateTime()),
    diagnostics: s.optional(s.lazy(() => checkResultDiagnosticsV4Schema)),
    id: s.string(),
    measure: s.optional(s.lazy(() => measureDtoSchema)),
    value: s.optional(s.float64()),
    valueLabel: s.optional(s.string()),
    valueSeries: s.optional(s.lazy(() => checkResultValueSeriesDtoSchema)),
  },
  { additionalProperties: s.json() },
);
