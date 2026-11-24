import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { localizedSchema, type Localized } from "./localized.js";
import { thumbnailsInternalSchema, thumbnailsSchema, type Thumbnails } from "./thumbnails.js";

export type Snippet = {
  publishedAt?: string;
  channelId?: string;
  title?: string;
  description?: string;
  channelTitle?: string;
  thumbnails?: Thumbnails;
  localized?: Localized;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const snippetProperties: s.Shape<Snippet> = {
  publishedAt: s.optional(s.string()),
  channelId: s.optional(s.string()),
  title: s.optional(s.string()),
  description: s.optional(s.string()),
  channelTitle: s.optional(s.string()),
  thumbnails: s.optional(s.lazy(() => thumbnailsInternalSchema)),
  localized: s.optional(s.lazy(() => localizedSchema)),
};

export const snippetInternalSchema: Schema<Snippet> = s.object<Snippet>(snippetProperties, {
  additionalProperties: s.json(),
});

export const snippetSchema: Schema<Snippet> = s.lazySchema(() =>
  s.object<Snippet>(
    {
      ...snippetProperties,
      thumbnails: s.optional(s.lazy(() => thumbnailsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
