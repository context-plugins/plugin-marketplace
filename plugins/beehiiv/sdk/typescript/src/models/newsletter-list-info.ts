import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { newsletterListStatusSchema, type NewsletterListStatus } from "./newsletter-list-status.js";

export type NewsletterListInfo = {
  /** The prefixed ID of the newsletter list. */
  id: string;
  /** The name of the newsletter list. */
  name: string;
  /** The URL-friendly slug of the newsletter list. */
  slug: string;
  /** A description of the newsletter list. */
  description?: string;
  /** The status of the newsletter list. */
  status: NewsletterListStatus;
  /** Whether new subscribers are automatically subscribed to this list. */
  autoSubscribe: boolean;
  /** The number of active subscribers on this list. */
  subscriberCount: number;
  /** The time the newsletter list was created. Measured in seconds since the Unix epoch. */
  createdAt: number;
  /** The time the newsletter list was last updated. Measured in seconds since the Unix epoch. */
  updatedAt: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const newsletterListInfoSchema: Schema<NewsletterListInfo> = s.object<NewsletterListInfo>(
  {
    id: s.string(),
    name: s.string(),
    slug: s.string(),
    description: s.optional(s.string()),
    status: newsletterListStatusSchema,
    autoSubscribe: s.boolean(),
    subscriberCount: s.int(),
    createdAt: s.int(),
    updatedAt: s.int(),
    _keysMap: {
      autoSubscribe: "auto_subscribe",
      subscriberCount: "subscriber_count",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
