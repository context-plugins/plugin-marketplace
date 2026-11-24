import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV2WebhooksTokenResponse = {
  token?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2WebhooksTokenResponseSchema: Schema<ApiV2WebhooksTokenResponse> =
  s.object<ApiV2WebhooksTokenResponse>(
    {
      token: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
