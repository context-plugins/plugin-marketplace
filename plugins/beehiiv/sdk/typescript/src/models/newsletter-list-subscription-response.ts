import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  newsletterListSubscriptionInfoSchema,
  type NewsletterListSubscriptionInfo,
} from "./newsletter-list-subscription-info.js";

export type NewsletterListSubscriptionResponse = {
  data: NewsletterListSubscriptionInfo;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const newsletterListSubscriptionResponseSchema: Schema<NewsletterListSubscriptionResponse> =
  s.object<NewsletterListSubscriptionResponse>(
    {
      data: newsletterListSubscriptionInfoSchema,
    },
    { additionalProperties: s.json() },
  );
