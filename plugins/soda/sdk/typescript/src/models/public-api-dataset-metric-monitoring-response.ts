import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { columnMetricMonitorDtoSchema, type ColumnMetricMonitorDto } from "./column-metric-monitor-dto.js";
import { customMetricMonitorDtoSchema, type CustomMetricMonitorDto } from "./custom-metric-monitor-dto.js";
import {
  datasetMetricMonitorConfigurationDtoSchema,
  type DatasetMetricMonitorConfigurationDto,
} from "./dataset-metric-monitor-configuration-dto.js";
import { datasetTimePartitionDtoSchema, type DatasetTimePartitionDto } from "./dataset-time-partition-dto.js";
import { zonedCronDtoSchema, type ZonedCronDto } from "./zoned-cron-dto.js";

export type PublicApiDatasetMetricMonitoringResponse = {
  columnMetricMonitors?: ColumnMetricMonitorDto[];
  customSqlMetricMonitors?: CustomMetricMonitorDto[];
  datasetId?: string;
  datasetMetricMonitorsConfiguration?: DatasetMetricMonitorConfigurationDto[];
  enabled?: boolean;
  historicalMetricCollectionScanStartDate?: Date;
  /**
   * @deprecated
   */
  partitionColumn?: string;
  scanSchedule?: ZonedCronDto;
  timePartition?: DatasetTimePartitionDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiDatasetMetricMonitoringResponseSchema: Schema<PublicApiDatasetMetricMonitoringResponse> =
  s.object<PublicApiDatasetMetricMonitoringResponse>(
    {
      columnMetricMonitors: s.optional(s.array(s.lazy(() => columnMetricMonitorDtoSchema))),
      customSqlMetricMonitors: s.optional(s.array(s.lazy(() => customMetricMonitorDtoSchema))),
      datasetId: s.optional(s.string()),
      datasetMetricMonitorsConfiguration: s.optional(
        s.array(s.lazy(() => datasetMetricMonitorConfigurationDtoSchema)),
      ),
      enabled: s.optional(s.boolean()),
      historicalMetricCollectionScanStartDate: s.optional(s.dateTime()),
      partitionColumn: s.optional(s.string()),
      scanSchedule: s.optional(s.lazy(() => zonedCronDtoSchema)),
      timePartition: s.optional(s.lazy(() => datasetTimePartitionDtoSchema)),
    },
    { additionalProperties: s.json() },
  );
