import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Kind4, kind4Schema } from "./kind4.js";
import { scopeSchema, type Scope } from "./unions/scope.js";

export type PasswordOAuthAuthenticationCreate = {
  /** Type of authentication for webhook request. @default Kind4.OauthPassword */
  kind?: Kind4;
  /** The OAuth client identifier. */
  clientId: string;
  /** The OAuth client secret. */
  clientSecret: string;
  /** The OAuth access token URL. */
  tokenUrl: string;
  /** The OAuth scope. */
  scope?: Scope;
  /** The username value. */
  username: string;
  /** The password value. */
  password: string;
};

export const passwordOAuthAuthenticationCreateSchema: Schema<PasswordOAuthAuthenticationCreate> =
  s.object<PasswordOAuthAuthenticationCreate>({
    kind: s.defaulted(kind4Schema, Kind4.OauthPassword),
    clientId: s.string(),
    clientSecret: s.string(),
    tokenUrl: s.string(),
    scope: s.optional(s.lazy(() => scopeSchema)),
    username: s.string(),
    password: s.string(),
    _keysMap: {
      clientId: "client_id",
      clientSecret: "client_secret",
      tokenUrl: "token_url",
    },
  });
