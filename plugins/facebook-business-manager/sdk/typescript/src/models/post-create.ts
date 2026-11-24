import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PostCreate = {
  /** The text content for the post */
  message?: string;
  /** URL to share in the post */
  link?: string;
  /** Whether to publish the post immediately @default true */
  published?: boolean;
  /**
   * Unix timestamp for when to publish the post. Must be between 10 minutes and 6 months from now.
   */
  scheduledPublishTime?: number;
  /** Targeting specification for the post audience */
  targeting?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const postCreateProperties: s.Shape<PostCreate> = {
  message: s.optional(s.string()),
  link: s.optional(s.string()),
  published: s.defaulted(s.boolean(), true),
  scheduledPublishTime: s.optional(s.int()),
  targeting: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    scheduledPublishTime: "scheduled_publish_time",
  },
};

export const postCreateInternalSchema: Schema<PostCreate> = s.object<PostCreate>(postCreateProperties, {
  additionalProperties: s.json(),
});

export const postCreateSchema: Schema<PostCreate> = s.lazySchema(() =>
  s.object<PostCreate>(
    {
      ...postCreateProperties,
      link: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
