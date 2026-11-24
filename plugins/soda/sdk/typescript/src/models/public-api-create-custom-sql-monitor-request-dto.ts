import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  customSqlMonitorConfigurationDtoSchema,
  type CustomSqlMonitorConfigurationDto,
} from "./custom-sql-monitor-configuration-dto.js";

export type PublicApiCreateCustomSqlMonitorRequestDto = {
  columnName?: string;
  configuration: CustomSqlMonitorConfigurationDto;
  monitorName: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiCreateCustomSqlMonitorRequestDtoSchema: Schema<PublicApiCreateCustomSqlMonitorRequestDto> =
  s.object<PublicApiCreateCustomSqlMonitorRequestDto>(
    {
      columnName: s.optional(s.string()),
      configuration: customSqlMonitorConfigurationDtoSchema,
      monitorName: s.string(),
    },
    { additionalProperties: s.json() },
  );
