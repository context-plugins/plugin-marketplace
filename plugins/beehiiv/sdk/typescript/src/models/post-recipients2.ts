import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { postEmailRecipients1Schema, type PostEmailRecipients1 } from "./post-email-recipients1.js";
import { postWebRecipients2Schema, type PostWebRecipients2 } from "./post-web-recipients2.js";

/**
 * The recipients for this post. When provided, replaces all existing web and email audience targets
 * with the specified values. If omitted, existing targets are unchanged.
 */
export type PostRecipients2 = {
  /** Web audience targeting. Omit this key to create no web targets. */
  web: PostWebRecipients2;
  /** Email audience targeting. Omit this key to create no email targets. */
  email: PostEmailRecipients1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postRecipients2Schema: Schema<PostRecipients2> = s.object<PostRecipients2>(
  {
    web: postWebRecipients2Schema,
    email: postEmailRecipients1Schema,
  },
  { additionalProperties: s.json() },
);
