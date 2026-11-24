import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1SocialAccountConnectResponse = {
  /** OAuth URL - Redirect user to this URL to connect social account */
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1SocialAccountConnectResponseSchema: Schema<ApiV1SocialAccountConnectResponse> =
  s.object<ApiV1SocialAccountConnectResponse>(
    {
      url: s.string(),
    },
    { additionalProperties: s.json() },
  );
