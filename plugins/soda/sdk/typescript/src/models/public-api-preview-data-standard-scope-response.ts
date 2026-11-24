import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataStandardScopeMatchingDatasetContentDtoSchema,
  type DataStandardScopeMatchingDatasetContentDto,
} from "./data-standard-scope-matching-dataset-content-dto.js";

export type PublicApiPreviewDataStandardScopeResponse = {
  content: DataStandardScopeMatchingDatasetContentDto[];
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiPreviewDataStandardScopeResponseSchema: Schema<PublicApiPreviewDataStandardScopeResponse> =
  s.object<PublicApiPreviewDataStandardScopeResponse>(
    {
      content: s.array(s.lazy(() => dataStandardScopeMatchingDatasetContentDtoSchema)),
      first: s.boolean(),
      last: s.boolean(),
      number: s.int(),
      size: s.int(),
      totalElements: s.int(),
      totalPages: s.int(),
    },
    { additionalProperties: s.json() },
  );
