import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  customSqlMonitorConfigurationUpdateDtoSchema,
  type CustomSqlMonitorConfigurationUpdateDto,
} from "./custom-sql-monitor-configuration-update-dto.js";

export type PublicApiUpdateCustomSqlMonitorRequestDto = {
  columnName?: string;
  configuration?: CustomSqlMonitorConfigurationUpdateDto;
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiUpdateCustomSqlMonitorRequestDtoSchema: Schema<PublicApiUpdateCustomSqlMonitorRequestDto> =
  s.object<PublicApiUpdateCustomSqlMonitorRequestDto>(
    {
      columnName: s.optional(s.string()),
      configuration: s.optional(s.lazy(() => customSqlMonitorConfigurationUpdateDtoSchema)),
      name: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
