import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  postEmailRecipientsResponse2Schema,
  type PostEmailRecipientsResponse2,
} from "./post-email-recipients-response2.js";
import {
  postWebRecipientsResponse2Schema,
  type PostWebRecipientsResponse2,
} from "./post-web-recipients-response2.js";

/** The targeting configuration for this post. */
export type PostRecipientsResponse1 = {
  /** Web targeting configuration. Absent if the post has no web targets. */
  web?: PostWebRecipientsResponse2;
  /** Email targeting configuration. Absent if the post has no email targets. */
  email?: PostEmailRecipientsResponse2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postRecipientsResponse1Schema: Schema<PostRecipientsResponse1> =
  s.object<PostRecipientsResponse1>(
    {
      web: s.optional(s.lazy(() => postWebRecipientsResponse2Schema)),
      email: s.optional(s.lazy(() => postEmailRecipientsResponse2Schema)),
    },
    { additionalProperties: s.json() },
  );
