import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  type1LushaApiDocumentationSearchApiSchema,
  type Type1LushaApiDocumentationSearchApi,
} from "./type1-lusha-api-documentation-search-api.js";

export type V3ContactSignalsDto = {
  types: Type1LushaApiDocumentationSearchApi[];
  startDate?: string;
  maxResultsPerSignal?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3ContactSignalsDtoProperties: s.Shape<V3ContactSignalsDto> = {
  types: s.array(s.lazy(() => type1LushaApiDocumentationSearchApiSchema)),
  startDate: s.optional(s.dateOnly()),
  maxResultsPerSignal: s.optional(s.int()),
};

export const v3ContactSignalsDtoInternalSchema: Schema<V3ContactSignalsDto> = s.object<V3ContactSignalsDto>(
  v3ContactSignalsDtoProperties,
  { additionalProperties: s.json() },
);

export const v3ContactSignalsDtoSchema: Schema<V3ContactSignalsDto> = s.lazySchema(() =>
  s.object<V3ContactSignalsDto>(
    {
      ...v3ContactSignalsDtoProperties,
      maxResultsPerSignal: s.optional(s.int().check(s.gte(1), s.lte(100))),
    },
    { additionalProperties: s.json() },
  ),
);
