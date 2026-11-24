import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  columnMonitorConfigurationDtoSchema,
  type ColumnMonitorConfigurationDto,
} from "./column-monitor-configuration-dto.js";

export type PublicApiUpdateColumnMetricMonitorRequestDto = {
  configuration: ColumnMonitorConfigurationDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiUpdateColumnMetricMonitorRequestDtoSchema: Schema<PublicApiUpdateColumnMetricMonitorRequestDto> =
  s.object<PublicApiUpdateColumnMetricMonitorRequestDto>(
    {
      configuration: columnMonitorConfigurationDtoSchema,
    },
    { additionalProperties: s.json() },
  );
