import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companiesInternalSchema, companiesSchema, type Companies } from "./companies.js";
import { contactsInternalSchema, contactsSchema, type Contacts } from "./contacts.js";

export type V3ProspectingContactFilters = {
  contacts?: Contacts;
  companies?: Companies;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3ProspectingContactFiltersProperties: s.Shape<V3ProspectingContactFilters> = {
  contacts: s.optional(s.lazy(() => contactsInternalSchema)),
  companies: s.optional(s.lazy(() => companiesInternalSchema)),
};

export const v3ProspectingContactFiltersInternalSchema: Schema<V3ProspectingContactFilters> =
  s.object<V3ProspectingContactFilters>(v3ProspectingContactFiltersProperties, {
    additionalProperties: s.json(),
  });

export const v3ProspectingContactFiltersSchema: Schema<V3ProspectingContactFilters> = s.lazySchema(() =>
  s.object<V3ProspectingContactFilters>(
    {
      ...v3ProspectingContactFiltersProperties,
      contacts: s.optional(s.lazy(() => contactsSchema)),
      companies: s.optional(s.lazy(() => companiesSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
