import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { columnMetricMonitorDtoSchema, type ColumnMetricMonitorDto } from "./column-metric-monitor-dto.js";

export type PublicApiCreateColumnMetricMonitorResponse = {
  columnMetricMonitor: ColumnMetricMonitorDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiCreateColumnMetricMonitorResponseSchema: Schema<PublicApiCreateColumnMetricMonitorResponse> =
  s.object<PublicApiCreateColumnMetricMonitorResponse>(
    {
      columnMetricMonitor: columnMetricMonitorDtoSchema,
    },
    { additionalProperties: s.json() },
  );
