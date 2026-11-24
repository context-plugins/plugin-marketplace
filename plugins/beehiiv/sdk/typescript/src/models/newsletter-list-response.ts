import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { newsletterListInfoSchema, type NewsletterListInfo } from "./newsletter-list-info.js";

export type NewsletterListResponse = {
  data: NewsletterListInfo;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const newsletterListResponseSchema: Schema<NewsletterListResponse> = s.object<NewsletterListResponse>(
  {
    data: newsletterListInfoSchema,
  },
  { additionalProperties: s.json() },
);
