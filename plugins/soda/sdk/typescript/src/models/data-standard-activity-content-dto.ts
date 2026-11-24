import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataStandardCheckResultsDtoSchema,
  type DataStandardCheckResultsDto,
} from "./data-standard-check-results-dto.js";

export type DataStandardActivityContentDto = {
  activeCount: number;
  checkResults: DataStandardCheckResultsDto;
  datasetCount: number;
  totalCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataStandardActivityContentDtoSchema: Schema<DataStandardActivityContentDto> =
  s.object<DataStandardActivityContentDto>(
    {
      activeCount: s.int(),
      checkResults: dataStandardCheckResultsDtoSchema,
      datasetCount: s.int(),
      totalCount: s.int(),
    },
    { additionalProperties: s.json() },
  );
