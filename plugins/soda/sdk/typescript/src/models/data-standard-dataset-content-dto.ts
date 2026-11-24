import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataStandardCheckResultsDtoSchema,
  type DataStandardCheckResultsDto,
} from "./data-standard-check-results-dto.js";
import { datasetOwnerDtoSchema, type DatasetOwnerDto } from "./dataset-owner-dto.js";

export type DataStandardDatasetContentDto = {
  checkResults?: DataStandardCheckResultsDto;
  cloudUrl?: string;
  id: string;
  label?: string;
  lastScanId?: string;
  lastScanTime?: Date;
  name: string;
  owners?: DatasetOwnerDto[];
  qualifiedName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataStandardDatasetContentDtoSchema: Schema<DataStandardDatasetContentDto> =
  s.object<DataStandardDatasetContentDto>(
    {
      checkResults: s.optional(s.lazy(() => dataStandardCheckResultsDtoSchema)),
      cloudUrl: s.optional(s.string()),
      id: s.string(),
      label: s.optional(s.string()),
      lastScanId: s.optional(s.string()),
      lastScanTime: s.optional(s.dateTime()),
      name: s.string(),
      owners: s.optional(s.array(s.lazy(() => datasetOwnerDtoSchema))),
      qualifiedName: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
