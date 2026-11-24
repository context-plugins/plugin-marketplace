import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customMetricMonitorDtoSchema, type CustomMetricMonitorDto } from "./custom-metric-monitor-dto.js";

export type PublicApiCreateCustomSqlMonitorResponse = {
  customSqlMonitor: CustomMetricMonitorDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiCreateCustomSqlMonitorResponseSchema: Schema<PublicApiCreateCustomSqlMonitorResponse> =
  s.object<PublicApiCreateCustomSqlMonitorResponse>(
    {
      customSqlMonitor: customMetricMonitorDtoSchema,
    },
    { additionalProperties: s.json() },
  );
