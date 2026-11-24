import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TokenRequest = {
  /** The OAuth 2.0 grant type. Must be client_credentials. @default "client_credentials" */
  grantType?: "client_credentials";
  /** The client ID provided by Instacart. */
  clientId: string;
  /** The client secret provided by Instacart. */
  clientSecret: string;
  /** The API scope to request access for, such as connect:fulfillment. */
  scope: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tokenRequestSchema: Schema<TokenRequest> = s.object<TokenRequest>(
  {
    grantType: s.defaulted(s.literal("client_credentials"), "client_credentials"),
    clientId: s.string(),
    clientSecret: s.string(),
    scope: s.string(),
    _keysMap: {
      grantType: "grant_type",
      clientId: "client_id",
      clientSecret: "client_secret",
    },
  },
  { additionalProperties: s.json() },
);
