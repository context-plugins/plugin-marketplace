import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datasourceResponsibilityContentDtoSchema,
  type DatasourceResponsibilityContentDto,
} from "./datasource-responsibility-content-dto.js";

export type PublicApiDatasourceResponsibilitiesResponse = {
  content: DatasourceResponsibilityContentDto[];
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiDatasourceResponsibilitiesResponseSchema: Schema<PublicApiDatasourceResponsibilitiesResponse> =
  s.object<PublicApiDatasourceResponsibilitiesResponse>(
    {
      content: s.array(s.lazy(() => datasourceResponsibilityContentDtoSchema)),
      first: s.boolean(),
      last: s.boolean(),
      number: s.int(),
      size: s.int(),
      totalElements: s.int(),
      totalPages: s.int(),
    },
    { additionalProperties: s.json() },
  );
