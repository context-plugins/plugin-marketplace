import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { revealSchema, type Reveal } from "./reveal.js";
import {
  v3ContactSearchItemInternalSchema,
  v3ContactSearchItemSchema,
  type V3ContactSearchItem,
} from "./v3-contact-search-item.js";
import { v3SearchOptionsSchema, type V3SearchOptions } from "./v3-search-options.js";

export type V3ContactsSearchAndEnrichRequest = {
  contacts: V3ContactSearchItem[];
  reveal?: Reveal[];
  /** Additional options for search requests */
  options?: V3SearchOptions;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3ContactsSearchAndEnrichRequestProperties: s.Shape<V3ContactsSearchAndEnrichRequest> = {
  contacts: s.array(s.lazy(() => v3ContactSearchItemInternalSchema)),
  reveal: s.optional(s.array(s.lazy(() => revealSchema))),
  options: s.optional(s.lazy(() => v3SearchOptionsSchema)),
};

export const v3ContactsSearchAndEnrichRequestInternalSchema: Schema<V3ContactsSearchAndEnrichRequest> =
  s.object<V3ContactsSearchAndEnrichRequest>(v3ContactsSearchAndEnrichRequestProperties, {
    additionalProperties: s.json(),
  });

export const v3ContactsSearchAndEnrichRequestSchema: Schema<V3ContactsSearchAndEnrichRequest> = s.lazySchema(
  () =>
    s.object<V3ContactsSearchAndEnrichRequest>(
      {
        ...v3ContactsSearchAndEnrichRequestProperties,
        contacts: s.array(s.lazy(() => v3ContactSearchItemSchema)).check(s.minLength(1), s.maxLength(100)),
      },
      { additionalProperties: s.json() },
    ),
);
