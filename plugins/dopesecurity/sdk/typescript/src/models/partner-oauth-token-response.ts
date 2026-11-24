import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PartnerOauthTokenResponse = {
  /** The new access token. */
  accessToken: string;
  /** The type of token returned. @default "bearer" */
  tokenType?: "bearer";
  /** The expiration time of the new access token in seconds. */
  expiresIn: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const partnerOauthTokenResponseSchema: Schema<PartnerOauthTokenResponse> =
  s.object<PartnerOauthTokenResponse>(
    {
      accessToken: s.string(),
      tokenType: s.defaulted(s.literal("bearer"), "bearer"),
      expiresIn: s.float64(),
      _keysMap: {
        accessToken: "access_token",
        tokenType: "token_type",
        expiresIn: "expires_in",
      },
    },
    { additionalProperties: s.json() },
  );
