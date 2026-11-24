import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1SocialAccountCreatePortalLink403Error1 = {
  statusCode?: number | null;
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1SocialAccountCreatePortalLink403Error1Schema: Schema<ApiV1SocialAccountCreatePortalLink403Error1> =
  s.object<ApiV1SocialAccountCreatePortalLink403Error1>(
    {
      statusCode: s.optionalNullable(s.float64()),
      message: s.string(),
    },
    { additionalProperties: s.json() },
  );
