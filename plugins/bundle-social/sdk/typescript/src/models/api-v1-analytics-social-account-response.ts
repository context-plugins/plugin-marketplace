import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { itemSchema, type Item } from "./item.js";
import { socialAccountSchema, type SocialAccount } from "./social-account.js";

export type ApiV1AnalyticsSocialAccountResponse = {
  socialAccount: SocialAccount;
  items: Item[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1AnalyticsSocialAccountResponseSchema: Schema<ApiV1AnalyticsSocialAccountResponse> =
  s.object<ApiV1AnalyticsSocialAccountResponse>(
    {
      socialAccount: socialAccountSchema,
      items: s.array(s.lazy(() => itemSchema)),
    },
    { additionalProperties: s.json() },
  );
