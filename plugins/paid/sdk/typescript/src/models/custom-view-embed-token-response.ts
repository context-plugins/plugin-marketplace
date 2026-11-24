import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CustomViewEmbedTokenResponse = {
  /** Short-lived signed token to pass to the embed SDK. */
  token: string;
  /** When the token expires (ISO 8601). */
  expiresAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customViewEmbedTokenResponseSchema: Schema<CustomViewEmbedTokenResponse> =
  s.object<CustomViewEmbedTokenResponse>(
    {
      token: s.string(),
      expiresAt: s.dateTime(),
    },
    { additionalProperties: s.json() },
  );
