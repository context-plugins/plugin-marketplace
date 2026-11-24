import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataStandardCheckContentDtoSchema,
  type DataStandardCheckContentDto,
} from "./data-standard-check-content-dto.js";

export type PublicApiListDataStandardChecksResponse = {
  content: DataStandardCheckContentDto[];
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiListDataStandardChecksResponseSchema: Schema<PublicApiListDataStandardChecksResponse> =
  s.object<PublicApiListDataStandardChecksResponse>(
    {
      content: s.array(s.lazy(() => dataStandardCheckContentDtoSchema)),
      first: s.boolean(),
      last: s.boolean(),
      number: s.int(),
      size: s.int(),
      totalElements: s.int(),
      totalPages: s.int(),
    },
    { additionalProperties: s.json() },
  );
