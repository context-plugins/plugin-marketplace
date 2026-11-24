import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contentDetails3Schema, type ContentDetails3 } from "./content-details3.js";
import { snippet3InternalSchema, snippet3Schema, type Snippet3 } from "./snippet3.js";

export type Item2BundleSocialMiscApi = {
  kind?: string;
  etag?: string;
  id?: string;
  snippet?: Snippet3;
  contentDetails?: ContentDetails3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const item2BundleSocialMiscApiProperties: s.Shape<Item2BundleSocialMiscApi> = {
  kind: s.optional(s.string()),
  etag: s.optional(s.string()),
  id: s.optional(s.string()),
  snippet: s.optional(s.lazy(() => snippet3InternalSchema)),
  contentDetails: s.optional(s.lazy(() => contentDetails3Schema)),
};

export const item2BundleSocialMiscApiInternalSchema: Schema<Item2BundleSocialMiscApi> =
  s.object<Item2BundleSocialMiscApi>(item2BundleSocialMiscApiProperties, { additionalProperties: s.json() });

export const item2BundleSocialMiscApiSchema: Schema<Item2BundleSocialMiscApi> = s.lazySchema(() =>
  s.object<Item2BundleSocialMiscApi>(
    {
      ...item2BundleSocialMiscApiProperties,
      snippet: s.optional(s.lazy(() => snippet3Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
