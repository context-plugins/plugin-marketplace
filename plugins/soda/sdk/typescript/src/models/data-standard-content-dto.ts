import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataStandardCheckResultsDtoSchema,
  type DataStandardCheckResultsDto,
} from "./data-standard-check-results-dto.js";
import { dataStandardScheduleDtoSchema, type DataStandardScheduleDto } from "./data-standard-schedule-dto.js";
import { dataStandardScopeDtoSchema, type DataStandardScopeDto } from "./data-standard-scope-dto.js";
import { dataStandardStatusDtoSchema, type DataStandardStatusDto } from "./data-standard-status-dto.js";
import { datasetOwnerDtoSchema, type DatasetOwnerDto } from "./dataset-owner-dto.js";

export type DataStandardContentDto = {
  attributes?: Record<string, unknown>;
  checkResults?: DataStandardCheckResultsDto;
  cloudUrl?: string;
  compliance?: number;
  contents?: string;
  created?: Date;
  datasetCount?: number;
  description?: string;
  id: string;
  label?: string;
  lastScanTime?: Date;
  lastUpdated?: Date;
  name?: string;
  owners?: DatasetOwnerDto[];
  schedule?: DataStandardScheduleDto;
  scope?: DataStandardScopeDto;
  status?: DataStandardStatusDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataStandardContentDtoSchema: Schema<DataStandardContentDto> = s.object<DataStandardContentDto>(
  {
    attributes: s.optional(s.record(s.string(), s.unknown())),
    checkResults: s.optional(s.lazy(() => dataStandardCheckResultsDtoSchema)),
    cloudUrl: s.optional(s.string()),
    compliance: s.optional(s.int()),
    contents: s.optional(s.string()),
    created: s.optional(s.dateTime()),
    datasetCount: s.optional(s.int()),
    description: s.optional(s.string()),
    id: s.string(),
    label: s.optional(s.string()),
    lastScanTime: s.optional(s.dateTime()),
    lastUpdated: s.optional(s.dateTime()),
    name: s.optional(s.string()),
    owners: s.optional(s.array(s.lazy(() => datasetOwnerDtoSchema))),
    schedule: s.optional(s.lazy(() => dataStandardScheduleDtoSchema)),
    scope: s.optional(s.lazy(() => dataStandardScopeDtoSchema)),
    status: s.optional(s.lazy(() => dataStandardStatusDtoSchema)),
  },
  { additionalProperties: s.json() },
);
