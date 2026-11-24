import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datasetsContentDtoSchema, type DatasetsContentDto } from "./datasets-content-dto.js";

export type PublicApiDatasetsResponse = {
  content: DatasetsContentDto[];
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiDatasetsResponseSchema: Schema<PublicApiDatasetsResponse> =
  s.object<PublicApiDatasetsResponse>(
    {
      content: s.array(s.lazy(() => datasetsContentDtoSchema)),
      first: s.boolean(),
      last: s.boolean(),
      number: s.int(),
      size: s.int(),
      totalElements: s.int(),
      totalPages: s.int(),
    },
    { additionalProperties: s.json() },
  );
