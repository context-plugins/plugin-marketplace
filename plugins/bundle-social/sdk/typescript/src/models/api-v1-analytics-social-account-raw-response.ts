import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { item2Schema, type Item2 } from "./item2.js";
import { socialAccountSchema, type SocialAccount } from "./social-account.js";

export type ApiV1AnalyticsSocialAccountRawResponse = {
  socialAccount: SocialAccount;
  items: Item2[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1AnalyticsSocialAccountRawResponseSchema: Schema<ApiV1AnalyticsSocialAccountRawResponse> =
  s.object<ApiV1AnalyticsSocialAccountRawResponse>(
    {
      socialAccount: socialAccountSchema,
      items: s.array(s.lazy(() => item2Schema)),
    },
    { additionalProperties: s.json() },
  );
