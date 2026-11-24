import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  v3ContactSearchItemInternalSchema,
  v3ContactSearchItemSchema,
  type V3ContactSearchItem,
} from "./v3-contact-search-item.js";
import {
  v3ContactSignalsDtoInternalSchema,
  v3ContactSignalsDtoSchema,
  type V3ContactSignalsDto,
} from "./v3-contact-signals-dto.js";
import { v3SearchOptionsSchema, type V3SearchOptions } from "./v3-search-options.js";

export type V3ContactsSearchRequest = {
  contacts: V3ContactSearchItem[];
  /** Additional options for search requests */
  options?: V3SearchOptions;
  signals?: V3ContactSignalsDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3ContactsSearchRequestProperties: s.Shape<V3ContactsSearchRequest> = {
  contacts: s.array(s.lazy(() => v3ContactSearchItemInternalSchema)),
  options: s.optional(s.lazy(() => v3SearchOptionsSchema)),
  signals: s.optional(s.lazy(() => v3ContactSignalsDtoInternalSchema)),
};

export const v3ContactsSearchRequestInternalSchema: Schema<V3ContactsSearchRequest> =
  s.object<V3ContactsSearchRequest>(v3ContactsSearchRequestProperties, { additionalProperties: s.json() });

export const v3ContactsSearchRequestSchema: Schema<V3ContactsSearchRequest> = s.lazySchema(() =>
  s.object<V3ContactsSearchRequest>(
    {
      ...v3ContactsSearchRequestProperties,
      contacts: s.array(s.lazy(() => v3ContactSearchItemSchema)).check(s.minLength(1), s.maxLength(100)),
      signals: s.optional(s.lazy(() => v3ContactSignalsDtoSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
