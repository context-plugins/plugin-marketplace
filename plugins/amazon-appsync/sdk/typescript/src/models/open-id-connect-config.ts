import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type OpenIdConnectConfig = {
  /**
   * The issuer for the OIDC configuration. The issuer returned by discovery must exactly match the
   * value of iss in the ID token.
   */
  issuer: string;
  /**
   * The client identifier of the relying party at the OpenID identity provider. This identifier is
   * typically obtained when the relying party is registered with the OpenID identity provider. You
   * can specify a regular expression so that AppSync can validate against multiple client
   * identifiers at a time.
   */
  clientId?: string;
  /** The number of milliseconds that a token is valid after it's issued to a user. */
  iatTtl?: number;
  /** The number of milliseconds that a token is valid after being authenticated. */
  authTtl?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const openIdConnectConfigSchema: Schema<OpenIdConnectConfig> = s.object<OpenIdConnectConfig>(
  {
    issuer: s.string(),
    clientId: s.optional(s.string()),
    iatTtl: s.optional(s.int()),
    authTtl: s.optional(s.int()),
    _keysMap: {
      iatTtl: "iatTTL",
      authTtl: "authTTL",
    },
  },
  { additionalProperties: s.json() },
);
