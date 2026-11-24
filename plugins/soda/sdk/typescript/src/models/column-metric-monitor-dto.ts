import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  columnMonitorConfigurationDtoSchema,
  type ColumnMonitorConfigurationDto,
} from "./column-monitor-configuration-dto.js";
import {
  columnMonitorMetricTypeDtoSchema,
  type ColumnMonitorMetricTypeDto,
} from "./column-monitor-metric-type-dto.js";

export type ColumnMetricMonitorDto = {
  checkId: string;
  columnName: string;
  configuration: ColumnMonitorConfigurationDto;
  metricType: ColumnMonitorMetricTypeDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const columnMetricMonitorDtoSchema: Schema<ColumnMetricMonitorDto> = s.object<ColumnMetricMonitorDto>(
  {
    checkId: s.string(),
    columnName: s.string(),
    configuration: columnMonitorConfigurationDtoSchema,
    metricType: columnMonitorMetricTypeDtoSchema,
  },
  { additionalProperties: s.json() },
);
