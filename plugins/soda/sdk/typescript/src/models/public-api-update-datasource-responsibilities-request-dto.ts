import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datasourceResponsibilityContentRequestDtoSchema,
  type DatasourceResponsibilityContentRequestDto,
} from "./datasource-responsibility-content-request-dto.js";

export type PublicApiUpdateDatasourceResponsibilitiesRequestDto = {
  responsibilities: DatasourceResponsibilityContentRequestDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiUpdateDatasourceResponsibilitiesRequestDtoSchema: Schema<PublicApiUpdateDatasourceResponsibilitiesRequestDto> =
  s.object<PublicApiUpdateDatasourceResponsibilitiesRequestDto>(
    {
      responsibilities: s.array(s.lazy(() => datasourceResponsibilityContentRequestDtoSchema)),
    },
    { additionalProperties: s.json() },
  );
