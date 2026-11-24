import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SubscriptionInput = {
  /** Email address whose owner consented to subscribe. */
  email: string;
  /**
   * A fresh reCAPTCHA token obtained through the website newsletter form. Automated clients must
   * not bypass this requirement.
   */
  token: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const subscriptionInputProperties: s.Shape<SubscriptionInput> = {
  email: s.string(),
  token: s.string(),
};

export const subscriptionInputInternalSchema: Schema<SubscriptionInput> = s.object<SubscriptionInput>(
  subscriptionInputProperties,
  { additionalProperties: s.json() },
);

export const subscriptionInputSchema: Schema<SubscriptionInput> = s.lazySchema(() =>
  s.object<SubscriptionInput>(
    {
      ...subscriptionInputProperties,
      email: s.string().check(s.minLength(3), s.maxLength(320), s.email()),
      token: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
