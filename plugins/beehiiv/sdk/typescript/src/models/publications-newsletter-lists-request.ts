import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicationsNewsletterListsRequest = {
  /** The name of the newsletter list. */
  name: string;
  /** A description of the newsletter list. */
  description?: string;
  /** A unique slug for the newsletter list. Auto-generated from the name if not provided. */
  slug?: string;
  /** Whether new subscribers are automatically subscribed to this list. */
  autoSubscribe?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicationsNewsletterListsRequestSchema: Schema<PublicationsNewsletterListsRequest> =
  s.object<PublicationsNewsletterListsRequest>(
    {
      name: s.string(),
      description: s.optional(s.string()),
      slug: s.optional(s.string()),
      autoSubscribe: s.optional(s.boolean()),
      _keysMap: {
        autoSubscribe: "auto_subscribe",
      },
    },
    { additionalProperties: s.json() },
  );
