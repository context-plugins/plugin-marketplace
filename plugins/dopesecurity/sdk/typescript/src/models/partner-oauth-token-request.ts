import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PartnerOauthTokenRequest = {
  /**
   * The type of grant requested. You must set this to `client_credentials`
   *
   * @default "client_credentials"
   */
  grantType?: "client_credentials";
  /** Your application's Client ID. */
  clientId: string;
  /** Your application's Client Secret. */
  clientSecret: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const partnerOauthTokenRequestSchema: Schema<PartnerOauthTokenRequest> =
  s.object<PartnerOauthTokenRequest>(
    {
      grantType: s.defaulted(s.literal("client_credentials"), "client_credentials"),
      clientId: s.string(),
      clientSecret: s.string(),
      _keysMap: {
        grantType: "grant_type",
        clientId: "client_id",
        clientSecret: "client_secret",
      },
    },
    { additionalProperties: s.json() },
  );
