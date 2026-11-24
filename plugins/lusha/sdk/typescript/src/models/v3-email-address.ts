import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeLushaApiDocumentationEnrichApiSchema,
  type TypeLushaApiDocumentationEnrichApi,
} from "./type-lusha-api-documentation-enrich-api.js";

export type V3EmailAddress = {
  email?: string;
  type?: TypeLushaApiDocumentationEnrichApi;
  confidence?: string | null;
  updateDate?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3EmailAddressProperties: s.Shape<V3EmailAddress> = {
  email: s.optional(s.string()),
  type: s.optional(s.lazy(() => typeLushaApiDocumentationEnrichApiSchema)),
  confidence: s.optionalNullable(s.string()),
  updateDate: s.optional(s.dateOnly()),
};

export const v3EmailAddressInternalSchema: Schema<V3EmailAddress> = s.object<V3EmailAddress>(
  v3EmailAddressProperties,
  { additionalProperties: s.json() },
);

export const v3EmailAddressSchema: Schema<V3EmailAddress> = s.lazySchema(() =>
  s.object<V3EmailAddress>(
    {
      ...v3EmailAddressProperties,
      email: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
