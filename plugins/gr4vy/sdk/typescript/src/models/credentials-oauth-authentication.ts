import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Kind2, kind2Schema } from "./kind2.js";
import { Type7, type7Schema } from "./type7.js";
import { scopeSchema, type Scope } from "./unions/scope.js";

export type CredentialsOAuthAuthentication = {
  /** Type of resource for webhook authentication. @default Type7.WebhookAuthentication */
  type?: Type7;
  /** Type of authentication for webhook request. @default Kind2.OauthClientCredentials */
  kind?: Kind2;
  /** The OAuth client identifier. */
  clientId: string;
  /** The masked OAuth client secret. @default "********" */
  clientSecret?: string;
  /** The OAuth access token URL. */
  tokenUrl: string;
  /** The OAuth scope. */
  scope?: Scope;
};

export const credentialsOAuthAuthenticationSchema: Schema<CredentialsOAuthAuthentication> =
  s.object<CredentialsOAuthAuthentication>({
    type: s.defaulted(type7Schema, Type7.WebhookAuthentication),
    kind: s.defaulted(kind2Schema, Kind2.OauthClientCredentials),
    clientId: s.string(),
    clientSecret: s.defaulted(s.string(), "********"),
    tokenUrl: s.string(),
    scope: s.optional(s.lazy(() => scopeSchema)),
    _keysMap: {
      clientId: "client_id",
      clientSecret: "client_secret",
      tokenUrl: "token_url",
    },
  });
