import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Kind2, kind2Schema } from "./kind2.js";
import { scopeSchema, type Scope } from "./unions/scope.js";

export type CredentialsOAuthAuthenticationCreate = {
  /** Type of authentication for webhook request. @default Kind2.OauthClientCredentials */
  kind?: Kind2;
  /** The OAuth client identifier. */
  clientId: string;
  /** The OAuth client secret. */
  clientSecret: string;
  /** The OAuth access token URL. */
  tokenUrl: string;
  /** The OAuth scope. */
  scope?: Scope;
};

export const credentialsOAuthAuthenticationCreateSchema: Schema<CredentialsOAuthAuthenticationCreate> =
  s.object<CredentialsOAuthAuthenticationCreate>({
    kind: s.defaulted(kind2Schema, Kind2.OauthClientCredentials),
    clientId: s.string(),
    clientSecret: s.string(),
    tokenUrl: s.string(),
    scope: s.optional(s.lazy(() => scopeSchema)),
    _keysMap: {
      clientId: "client_id",
      clientSecret: "client_secret",
      tokenUrl: "token_url",
    },
  });
