import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  columnMetricMonitorConfigurationDtoSchema,
  type ColumnMetricMonitorConfigurationDto,
} from "./column-metric-monitor-configuration-dto.js";

export type PublicApiCreateColumnMetricMonitorRequestDto = {
  columnMetricMonitorConfiguration: ColumnMetricMonitorConfigurationDto;
  columnName: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiCreateColumnMetricMonitorRequestDtoSchema: Schema<PublicApiCreateColumnMetricMonitorRequestDto> =
  s.object<PublicApiCreateColumnMetricMonitorRequestDto>(
    {
      columnMetricMonitorConfiguration: columnMetricMonitorConfigurationDtoSchema,
      columnName: s.string(),
    },
    { additionalProperties: s.json() },
  );
