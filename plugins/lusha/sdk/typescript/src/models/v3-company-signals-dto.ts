import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeLushaApiDocumentationSearchApiSchema,
  type TypeLushaApiDocumentationSearchApi,
} from "./type-lusha-api-documentation-search-api.js";

export type V3CompanySignalsDto = {
  types: TypeLushaApiDocumentationSearchApi[];
  startDate?: string;
  maxResultsPerSignal?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3CompanySignalsDtoProperties: s.Shape<V3CompanySignalsDto> = {
  types: s.array(s.lazy(() => typeLushaApiDocumentationSearchApiSchema)),
  startDate: s.optional(s.dateOnly()),
  maxResultsPerSignal: s.optional(s.int()),
};

export const v3CompanySignalsDtoInternalSchema: Schema<V3CompanySignalsDto> = s.object<V3CompanySignalsDto>(
  v3CompanySignalsDtoProperties,
  { additionalProperties: s.json() },
);

export const v3CompanySignalsDtoSchema: Schema<V3CompanySignalsDto> = s.lazySchema(() =>
  s.object<V3CompanySignalsDto>(
    {
      ...v3CompanySignalsDtoProperties,
      maxResultsPerSignal: s.optional(s.int().check(s.gte(1), s.lte(100))),
    },
    { additionalProperties: s.json() },
  ),
);
