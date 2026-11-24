import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  publicApiUpdateDatasetOwnerRequestDtoSchema,
  type PublicApiUpdateDatasetOwnerRequestDto,
} from "./public-api-update-dataset-owner-request-dto.js";
import {
  updateDatasetComputeWarehouseOverrideConfigurationRequestDtoSchema,
  type UpdateDatasetComputeWarehouseOverrideConfigurationRequestDto,
} from "./update-dataset-compute-warehouse-override-configuration-request-dto.js";
import {
  updateDatasetDiagnosticsWarehouseConfigurationRequestDtoSchema,
  type UpdateDatasetDiagnosticsWarehouseConfigurationRequestDto,
} from "./update-dataset-diagnostics-warehouse-configuration-request-dto.js";
import {
  updateDatasetMetricMonitoringConfigurationRequestDtoSchema,
  type UpdateDatasetMetricMonitoringConfigurationRequestDto,
} from "./update-dataset-metric-monitoring-configuration-request-dto.js";
import {
  updateDatasetProfilingConfigurationRequestDtoSchema,
  type UpdateDatasetProfilingConfigurationRequestDto,
} from "./update-dataset-profiling-configuration-request-dto.js";
import {
  updateDatasetTimePartitionRequestDtoSchema,
  type UpdateDatasetTimePartitionRequestDto,
} from "./update-dataset-time-partition-request-dto.js";

export type PublicApiUpdateDatasetDto = {
  attributes?: Record<string, unknown>;
  computeWarehouseOverride?: UpdateDatasetComputeWarehouseOverrideConfigurationRequestDto;
  diagnosticsWarehouse?: UpdateDatasetDiagnosticsWarehouseConfigurationRequestDto;
  label?: string;
  metricMonitoring?: UpdateDatasetMetricMonitoringConfigurationRequestDto;
  owners?: PublicApiUpdateDatasetOwnerRequestDto[];
  /**
   * @deprecated
   */
  partitionColumn?: string;
  profiling?: UpdateDatasetProfilingConfigurationRequestDto;
  tags?: string[];
  timePartition?: UpdateDatasetTimePartitionRequestDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiUpdateDatasetDtoSchema: Schema<PublicApiUpdateDatasetDto> =
  s.object<PublicApiUpdateDatasetDto>(
    {
      attributes: s.optional(s.record(s.string(), s.unknown())),
      computeWarehouseOverride: s.optional(
        s.lazy(() => updateDatasetComputeWarehouseOverrideConfigurationRequestDtoSchema),
      ),
      diagnosticsWarehouse: s.optional(
        s.lazy(() => updateDatasetDiagnosticsWarehouseConfigurationRequestDtoSchema),
      ),
      label: s.optional(s.string()),
      metricMonitoring: s.optional(s.lazy(() => updateDatasetMetricMonitoringConfigurationRequestDtoSchema)),
      owners: s.optional(s.array(s.lazy(() => publicApiUpdateDatasetOwnerRequestDtoSchema))),
      partitionColumn: s.optional(s.string()),
      profiling: s.optional(s.lazy(() => updateDatasetProfilingConfigurationRequestDtoSchema)),
      tags: s.optional(s.array(s.string())),
      timePartition: s.optional(s.lazy(() => updateDatasetTimePartitionRequestDtoSchema)),
    },
    { additionalProperties: s.json() },
  );
