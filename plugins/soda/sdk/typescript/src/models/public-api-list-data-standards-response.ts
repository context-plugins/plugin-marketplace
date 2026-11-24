import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataStandardContentDtoSchema, type DataStandardContentDto } from "./data-standard-content-dto.js";

export type PublicApiListDataStandardsResponse = {
  content: DataStandardContentDto[];
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiListDataStandardsResponseSchema: Schema<PublicApiListDataStandardsResponse> =
  s.object<PublicApiListDataStandardsResponse>(
    {
      content: s.array(s.lazy(() => dataStandardContentDtoSchema)),
      first: s.boolean(),
      last: s.boolean(),
      number: s.int(),
      size: s.int(),
      totalElements: s.int(),
      totalPages: s.int(),
    },
    { additionalProperties: s.json() },
  );
