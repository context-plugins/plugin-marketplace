import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  v3ContactFilterCriteriaInternalSchema,
  v3ContactFilterCriteriaSchema,
  type V3ContactFilterCriteria,
} from "./v3-contact-filter-criteria.js";

export type Contacts = {
  include?: V3ContactFilterCriteria;
  exclude?: V3ContactFilterCriteria;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const contactsProperties: s.Shape<Contacts> = {
  include: s.optional(s.lazy(() => v3ContactFilterCriteriaInternalSchema)),
  exclude: s.optional(s.lazy(() => v3ContactFilterCriteriaInternalSchema)),
};

export const contactsInternalSchema: Schema<Contacts> = s.object<Contacts>(contactsProperties, {
  additionalProperties: s.json(),
});

export const contactsSchema: Schema<Contacts> = s.lazySchema(() =>
  s.object<Contacts>(
    {
      ...contactsProperties,
      include: s.optional(s.lazy(() => v3ContactFilterCriteriaSchema)),
      exclude: s.optional(s.lazy(() => v3ContactFilterCriteriaSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
