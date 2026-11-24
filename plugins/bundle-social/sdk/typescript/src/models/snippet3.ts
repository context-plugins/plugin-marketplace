import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resourceIdSchema, type ResourceId } from "./resource-id.js";
import { thumbnailsInternalSchema, thumbnailsSchema, type Thumbnails } from "./thumbnails.js";

export type Snippet3 = {
  publishedAt?: string;
  channelId?: string;
  title?: string;
  description?: string;
  channelTitle?: string;
  thumbnails?: Thumbnails;
  playlistId?: string;
  position?: number;
  resourceId?: ResourceId;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const snippet3Properties: s.Shape<Snippet3> = {
  publishedAt: s.optional(s.string()),
  channelId: s.optional(s.string()),
  title: s.optional(s.string()),
  description: s.optional(s.string()),
  channelTitle: s.optional(s.string()),
  thumbnails: s.optional(s.lazy(() => thumbnailsInternalSchema)),
  playlistId: s.optional(s.string()),
  position: s.optional(s.int()),
  resourceId: s.optional(s.lazy(() => resourceIdSchema)),
};

export const snippet3InternalSchema: Schema<Snippet3> = s.object<Snippet3>(snippet3Properties, {
  additionalProperties: s.json(),
});

export const snippet3Schema: Schema<Snippet3> = s.lazySchema(() =>
  s.object<Snippet3>(
    {
      ...snippet3Properties,
      thumbnails: s.optional(s.lazy(() => thumbnailsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
