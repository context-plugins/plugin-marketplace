import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataStandardDatasetContentDtoSchema,
  type DataStandardDatasetContentDto,
} from "./data-standard-dataset-content-dto.js";

export type PublicApiListDataStandardDatasetsResponse = {
  content: DataStandardDatasetContentDto[];
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiListDataStandardDatasetsResponseSchema: Schema<PublicApiListDataStandardDatasetsResponse> =
  s.object<PublicApiListDataStandardDatasetsResponse>(
    {
      content: s.array(s.lazy(() => dataStandardDatasetContentDtoSchema)),
      first: s.boolean(),
      last: s.boolean(),
      number: s.int(),
      size: s.int(),
      totalElements: s.int(),
      totalPages: s.int(),
    },
    { additionalProperties: s.json() },
  );
