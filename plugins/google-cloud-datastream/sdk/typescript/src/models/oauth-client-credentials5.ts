import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { secret1Schema, type Secret1 } from "./secret1.js";

/** Credentials for authenticating with the ServiceNow API. */
export type OauthClientCredentials5 = {
  /** Required. Client secret for OAuth Client Credentials. */
  clientSecret?: Secret1;
  /** Required. Client ID for OAuth Client Credentials. */
  clientId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oauthClientCredentials5Schema: Schema<OauthClientCredentials5> =
  s.object<OauthClientCredentials5>(
    {
      clientSecret: s.optional(s.lazy(() => secret1Schema)),
      clientId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
