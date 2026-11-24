import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { v3CompanySearchItemSchema, type V3CompanySearchItem } from "./v3-company-search-item.js";
import {
  v3CompanySignalsDtoInternalSchema,
  v3CompanySignalsDtoSchema,
  type V3CompanySignalsDto,
} from "./v3-company-signals-dto.js";
import { v3SearchOptionsSchema, type V3SearchOptions } from "./v3-search-options.js";

export type V3CompaniesSearchRequest = {
  companies: V3CompanySearchItem[];
  /** Additional options for search requests */
  options?: V3SearchOptions;
  signals?: V3CompanySignalsDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3CompaniesSearchRequestProperties: s.Shape<V3CompaniesSearchRequest> = {
  companies: s.array(s.lazy(() => v3CompanySearchItemSchema)),
  options: s.optional(s.lazy(() => v3SearchOptionsSchema)),
  signals: s.optional(s.lazy(() => v3CompanySignalsDtoInternalSchema)),
};

export const v3CompaniesSearchRequestInternalSchema: Schema<V3CompaniesSearchRequest> =
  s.object<V3CompaniesSearchRequest>(v3CompaniesSearchRequestProperties, { additionalProperties: s.json() });

export const v3CompaniesSearchRequestSchema: Schema<V3CompaniesSearchRequest> = s.lazySchema(() =>
  s.object<V3CompaniesSearchRequest>(
    {
      ...v3CompaniesSearchRequestProperties,
      companies: s.array(s.lazy(() => v3CompanySearchItemSchema)).check(s.minLength(1), s.maxLength(100)),
      signals: s.optional(s.lazy(() => v3CompanySignalsDtoSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
