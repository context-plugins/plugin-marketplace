import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataStandardOwnerRequestDtoSchema,
  type DataStandardOwnerRequestDto,
} from "./data-standard-owner-request-dto.js";
import { dataStandardScheduleDtoSchema, type DataStandardScheduleDto } from "./data-standard-schedule-dto.js";
import { dataStandardScopeDtoSchema, type DataStandardScopeDto } from "./data-standard-scope-dto.js";
import { dataStandardStatusDtoSchema, type DataStandardStatusDto } from "./data-standard-status-dto.js";

export type PublicApiDataStandardRequestDto = {
  attributes?: Record<string, unknown>;
  contents: string;
  description?: string;
  label?: string;
  name: string;
  owners: DataStandardOwnerRequestDto[];
  schedule?: DataStandardScheduleDto;
  scope?: DataStandardScopeDto;
  status: DataStandardStatusDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiDataStandardRequestDtoSchema: Schema<PublicApiDataStandardRequestDto> =
  s.object<PublicApiDataStandardRequestDto>(
    {
      attributes: s.optional(s.record(s.string(), s.unknown())),
      contents: s.string(),
      description: s.optional(s.string()),
      label: s.optional(s.string()),
      name: s.string(),
      owners: s.array(s.lazy(() => dataStandardOwnerRequestDtoSchema)),
      schedule: s.optional(s.lazy(() => dataStandardScheduleDtoSchema)),
      scope: s.optional(s.lazy(() => dataStandardScopeDtoSchema)),
      status: dataStandardStatusDtoSchema,
    },
    { additionalProperties: s.json() },
  );
