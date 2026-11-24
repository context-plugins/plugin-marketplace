import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataStandardScopeDtoSchema, type DataStandardScopeDto } from "./data-standard-scope-dto.js";

export type PublicApiPreviewDataStandardScopeRequestDto = {
  page?: number;
  scope?: DataStandardScopeDto;
  size?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiPreviewDataStandardScopeRequestDtoSchema: Schema<PublicApiPreviewDataStandardScopeRequestDto> =
  s.object<PublicApiPreviewDataStandardScopeRequestDto>(
    {
      page: s.optional(s.int()),
      scope: s.optional(s.lazy(() => dataStandardScopeDtoSchema)),
      size: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
