import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  publicApiDatasetColumnContentDtoSchema,
  type PublicApiDatasetColumnContentDto,
} from "./public-api-dataset-column-content-dto.js";

export type PublicApiListDatasetColumnsResponse = {
  content: PublicApiDatasetColumnContentDto[];
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiListDatasetColumnsResponseSchema: Schema<PublicApiListDatasetColumnsResponse> =
  s.object<PublicApiListDatasetColumnsResponse>(
    {
      content: s.array(s.lazy(() => publicApiDatasetColumnContentDtoSchema)),
      first: s.boolean(),
      last: s.boolean(),
      number: s.int(),
      size: s.int(),
      totalElements: s.int(),
      totalPages: s.int(),
    },
    { additionalProperties: s.json() },
  );
