import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contentDetailsSchema, type ContentDetails } from "./content-details.js";
import { snippetInternalSchema, snippetSchema, type Snippet } from "./snippet.js";
import {
  statusBundleSocialMiscApiSchema,
  type StatusBundleSocialMiscApi,
} from "./status-bundle-social-misc-api.js";

export type Item1BundleSocialMiscApi = {
  kind?: string;
  etag?: string;
  id?: string;
  snippet?: Snippet;
  status?: StatusBundleSocialMiscApi;
  contentDetails?: ContentDetails;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const item1BundleSocialMiscApiProperties: s.Shape<Item1BundleSocialMiscApi> = {
  kind: s.optional(s.string()),
  etag: s.optional(s.string()),
  id: s.optional(s.string()),
  snippet: s.optional(s.lazy(() => snippetInternalSchema)),
  status: s.optional(s.lazy(() => statusBundleSocialMiscApiSchema)),
  contentDetails: s.optional(s.lazy(() => contentDetailsSchema)),
};

export const item1BundleSocialMiscApiInternalSchema: Schema<Item1BundleSocialMiscApi> =
  s.object<Item1BundleSocialMiscApi>(item1BundleSocialMiscApiProperties, { additionalProperties: s.json() });

export const item1BundleSocialMiscApiSchema: Schema<Item1BundleSocialMiscApi> = s.lazySchema(() =>
  s.object<Item1BundleSocialMiscApi>(
    {
      ...item1BundleSocialMiscApiProperties,
      snippet: s.optional(s.lazy(() => snippetSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
