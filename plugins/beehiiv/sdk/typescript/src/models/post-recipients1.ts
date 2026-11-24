import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { postEmailRecipients1Schema, type PostEmailRecipients1 } from "./post-email-recipients1.js";
import { postWebRecipients2Schema, type PostWebRecipients2 } from "./post-web-recipients2.js";

/** The recipients to use for this post. If not provided, the default value will be used. */
export type PostRecipients1 = {
  /** Web audience targeting. Omit this key to create no web targets. */
  web: PostWebRecipients2;
  /** Email audience targeting. Omit this key to create no email targets. */
  email: PostEmailRecipients1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postRecipients1Schema: Schema<PostRecipients1> = s.object<PostRecipients1>(
  {
    web: postWebRecipients2Schema,
    email: postEmailRecipients1Schema,
  },
  { additionalProperties: s.json() },
);
