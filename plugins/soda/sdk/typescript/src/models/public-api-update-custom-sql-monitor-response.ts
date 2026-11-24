import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customMetricMonitorDtoSchema, type CustomMetricMonitorDto } from "./custom-metric-monitor-dto.js";

export type PublicApiUpdateCustomSqlMonitorResponse = {
  customSqlMetricMonitor: CustomMetricMonitorDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiUpdateCustomSqlMonitorResponseSchema: Schema<PublicApiUpdateCustomSqlMonitorResponse> =
  s.object<PublicApiUpdateCustomSqlMonitorResponse>(
    {
      customSqlMetricMonitor: customMetricMonitorDtoSchema,
    },
    { additionalProperties: s.json() },
  );
