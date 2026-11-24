import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { publicApiDatasourceDtoSchema, type PublicApiDatasourceDto } from "./public-api-datasource-dto.js";

export type PublicApiListDatasourcesResponse = {
  content: PublicApiDatasourceDto[];
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiListDatasourcesResponseSchema: Schema<PublicApiListDatasourcesResponse> =
  s.object<PublicApiListDatasourcesResponse>(
    {
      content: s.array(s.lazy(() => publicApiDatasourceDtoSchema)),
      first: s.boolean(),
      last: s.boolean(),
      number: s.int(),
      size: s.int(),
      totalElements: s.int(),
      totalPages: s.int(),
    },
    { additionalProperties: s.json() },
  );
