import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datasetMonitorConfigurationDtoSchema,
  type DatasetMonitorConfigurationDto,
} from "./dataset-monitor-configuration-dto.js";
import {
  datasetMonitorMetricTypeDtoSchema,
  type DatasetMonitorMetricTypeDto,
} from "./dataset-monitor-metric-type-dto.js";

export type DatasetMetricMonitorConfigurationDto = {
  configuration: DatasetMonitorConfigurationDto;
  metricType: DatasetMonitorMetricTypeDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetMetricMonitorConfigurationDtoSchema: Schema<DatasetMetricMonitorConfigurationDto> =
  s.object<DatasetMetricMonitorConfigurationDto>(
    {
      configuration: datasetMonitorConfigurationDtoSchema,
      metricType: datasetMonitorMetricTypeDtoSchema,
    },
    { additionalProperties: s.json() },
  );
