import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companyFiltersSchema, type CompanyFilters } from "./company-filters.js";
import { contactFiltersSchema, type ContactFilters } from "./contact-filters.js";

export type FiltersLushaApiDocumentationProspectingSearchEnrichApi = {
  contacts?: ContactFilters;
  companies?: CompanyFilters;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filtersLushaApiDocumentationProspectingSearchEnrichApiSchema: Schema<FiltersLushaApiDocumentationProspectingSearchEnrichApi> =
  s.object<FiltersLushaApiDocumentationProspectingSearchEnrichApi>(
    {
      contacts: s.optional(s.lazy(() => contactFiltersSchema)),
      companies: s.optional(s.lazy(() => companyFiltersSchema)),
    },
    { additionalProperties: s.json() },
  );
