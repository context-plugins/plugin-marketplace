import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  insertMetricByMetricDefinitionRequestDtoSchema,
  type InsertMetricByMetricDefinitionRequestDto,
} from "../insert-metric-by-metric-definition-request-dto.js";
import {
  insertMetricByMetricSourceRequestDtoSchema,
  type InsertMetricByMetricSourceRequestDto,
} from "../insert-metric-by-metric-source-request-dto.js";

export type CompassV1MetricsRequest =
  | InsertMetricByMetricDefinitionRequestDto
  | InsertMetricByMetricSourceRequestDto;

export const compassV1MetricsRequestSchema: Schema<CompassV1MetricsRequest> = s.of<CompassV1MetricsRequest>(
  s.union([
    s.lazy(() => insertMetricByMetricDefinitionRequestDtoSchema),
    s.lazy(() => insertMetricByMetricSourceRequestDtoSchema),
  ]),
);
