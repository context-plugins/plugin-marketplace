import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { v3CompanySearchItemSchema, type V3CompanySearchItem } from "./v3-company-search-item.js";
import { v3SearchOptionsSchema, type V3SearchOptions } from "./v3-search-options.js";

export type V3CompaniesSearchAndEnrichRequest = {
  companies: V3CompanySearchItem[];
  /** Additional options for search requests */
  options?: V3SearchOptions;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3CompaniesSearchAndEnrichRequestProperties: s.Shape<V3CompaniesSearchAndEnrichRequest> = {
  companies: s.array(s.lazy(() => v3CompanySearchItemSchema)),
  options: s.optional(s.lazy(() => v3SearchOptionsSchema)),
};

export const v3CompaniesSearchAndEnrichRequestInternalSchema: Schema<V3CompaniesSearchAndEnrichRequest> =
  s.object<V3CompaniesSearchAndEnrichRequest>(v3CompaniesSearchAndEnrichRequestProperties, {
    additionalProperties: s.json(),
  });

export const v3CompaniesSearchAndEnrichRequestSchema: Schema<V3CompaniesSearchAndEnrichRequest> =
  s.lazySchema(() =>
    s.object<V3CompaniesSearchAndEnrichRequest>(
      {
        ...v3CompaniesSearchAndEnrichRequestProperties,
        companies: s.array(s.lazy(() => v3CompanySearchItemSchema)).check(s.minLength(1), s.maxLength(100)),
      },
      { additionalProperties: s.json() },
    ),
  );
