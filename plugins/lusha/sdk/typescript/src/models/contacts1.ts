import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  v3ContactsOnCompanySearchFiltersSchema,
  type V3ContactsOnCompanySearchFilters,
} from "./v3-contacts-on-company-search-filters.js";

export type Contacts1 = {
  /** Restricted contact-attribute filters usable within a company prospecting request. */
  include?: V3ContactsOnCompanySearchFilters;
  /** Restricted contact-attribute filters usable within a company prospecting request. */
  exclude?: V3ContactsOnCompanySearchFilters;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contacts1Schema: Schema<Contacts1> = s.object<Contacts1>(
  {
    include: s.optional(s.lazy(() => v3ContactsOnCompanySearchFiltersSchema)),
    exclude: s.optional(s.lazy(() => v3ContactsOnCompanySearchFiltersSchema)),
  },
  { additionalProperties: s.json() },
);
