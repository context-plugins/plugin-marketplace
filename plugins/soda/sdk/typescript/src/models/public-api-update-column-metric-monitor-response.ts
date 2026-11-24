import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { columnMetricMonitorDtoSchema, type ColumnMetricMonitorDto } from "./column-metric-monitor-dto.js";

export type PublicApiUpdateColumnMetricMonitorResponse = {
  columnMetricMonitor: ColumnMetricMonitorDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiUpdateColumnMetricMonitorResponseSchema: Schema<PublicApiUpdateColumnMetricMonitorResponse> =
  s.object<PublicApiUpdateColumnMetricMonitorResponse>(
    {
      columnMetricMonitor: columnMetricMonitorDtoSchema,
    },
    { additionalProperties: s.json() },
  );
