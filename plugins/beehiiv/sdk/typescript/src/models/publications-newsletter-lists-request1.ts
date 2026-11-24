import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  newsletterListWritableStatus1Schema,
  type NewsletterListWritableStatus1,
} from "./newsletter-list-writable-status1.js";

export type PublicationsNewsletterListsRequest1 = {
  /** The name of the newsletter list. */
  name?: string;
  /** A description of the newsletter list. */
  description?: string;
  /** A unique slug for the newsletter list. */
  slug?: string;
  /** Whether new subscribers are automatically subscribed to this list. */
  autoSubscribe?: boolean;
  /**
   * The status of the newsletter list. Valid values are `active` and `archived`. Setting `draft` is
   * not permitted.
   */
  status?: NewsletterListWritableStatus1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicationsNewsletterListsRequest1Schema: Schema<PublicationsNewsletterListsRequest1> =
  s.object<PublicationsNewsletterListsRequest1>(
    {
      name: s.optional(s.string()),
      description: s.optional(s.string()),
      slug: s.optional(s.string()),
      autoSubscribe: s.optional(s.boolean()),
      status: s.optional(s.lazy(() => newsletterListWritableStatus1Schema)),
      _keysMap: {
        autoSubscribe: "auto_subscribe",
      },
    },
    { additionalProperties: s.json() },
  );
