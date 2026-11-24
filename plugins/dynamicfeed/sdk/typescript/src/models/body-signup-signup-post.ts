import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { emailSchema, type Email } from "./unions/email.js";

export type BodySignupSignupPost = {
  /** optional, for receipts */
  email?: Email;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bodySignupSignupPostSchema: Schema<BodySignupSignupPost> = s.object<BodySignupSignupPost>(
  {
    email: s.optional(s.lazy(() => emailSchema)),
  },
  { additionalProperties: s.json() },
);
