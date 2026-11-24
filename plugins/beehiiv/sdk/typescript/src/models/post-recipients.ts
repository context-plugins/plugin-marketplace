import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { postEmailRecipients1Schema, type PostEmailRecipients1 } from "./post-email-recipients1.js";
import { postWebRecipients2Schema, type PostWebRecipients2 } from "./post-web-recipients2.js";

/**
 * Controls who receives the post. If omitted entirely, defaults to free tier only on both web and
 * email. If a channel key (web or email) is provided but empty, no targets are created for that
 * channel — omit the key to skip a channel.
 */
export type PostRecipients = {
  /** Web audience targeting. Omit this key to create no web targets. */
  web: PostWebRecipients2;
  /** Email audience targeting. Omit this key to create no email targets. */
  email: PostEmailRecipients1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postRecipientsSchema: Schema<PostRecipients> = s.object<PostRecipients>(
  {
    web: postWebRecipients2Schema,
    email: postEmailRecipients1Schema,
  },
  { additionalProperties: s.json() },
);
