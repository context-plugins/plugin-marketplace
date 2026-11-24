import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datasetMetricMonitorConfigurationDtoSchema,
  type DatasetMetricMonitorConfigurationDto,
} from "./dataset-metric-monitor-configuration-dto.js";
import { zonedCronDtoSchema, type ZonedCronDto } from "./zoned-cron-dto.js";

export type UpdateDatasetMetricMonitoringConfigurationRequestDto = {
  datasetMetricMonitorsConfiguration?: DatasetMetricMonitorConfigurationDto[];
  enabled?: boolean;
  historicalMetricCollectionScanStartDate?: Date;
  scanSchedule?: ZonedCronDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateDatasetMetricMonitoringConfigurationRequestDtoSchema: Schema<UpdateDatasetMetricMonitoringConfigurationRequestDto> =
  s.object<UpdateDatasetMetricMonitoringConfigurationRequestDto>(
    {
      datasetMetricMonitorsConfiguration: s.optional(
        s.array(s.lazy(() => datasetMetricMonitorConfigurationDtoSchema)),
      ),
      enabled: s.optional(s.boolean()),
      historicalMetricCollectionScanStartDate: s.optional(s.dateTime()),
      scanSchedule: s.optional(s.lazy(() => zonedCronDtoSchema)),
    },
    { additionalProperties: s.json() },
  );
