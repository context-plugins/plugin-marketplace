import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Kind4, kind4Schema } from "./kind4.js";
import { Password1, password1Schema } from "./password1.js";
import { Type7, type7Schema } from "./type7.js";
import { scopeSchema, type Scope } from "./unions/scope.js";

export type PasswordOAuthAuthentication = {
  /** Type of resource for webhook authentication. @default Type7.WebhookAuthentication */
  type?: Type7;
  /** Type of authentication for webhook request. @default Kind4.OauthPassword */
  kind?: Kind4;
  /** The OAuth client identifier. */
  clientId: string;
  /** The masked OAuth client secret. @default "********" */
  clientSecret?: string;
  /** The OAuth access token URL. */
  tokenUrl: string;
  /** The OAuth scope. */
  scope?: Scope;
  /** The username value. */
  username: string;
  /** The masked password value. @default Password1.U002AU002AU002AU002AU002AU002AU002AU002A */
  password?: Password1;
};

export const passwordOAuthAuthenticationSchema: Schema<PasswordOAuthAuthentication> =
  s.object<PasswordOAuthAuthentication>({
    type: s.defaulted(type7Schema, Type7.WebhookAuthentication),
    kind: s.defaulted(kind4Schema, Kind4.OauthPassword),
    clientId: s.string(),
    clientSecret: s.defaulted(s.string(), "********"),
    tokenUrl: s.string(),
    scope: s.optional(s.lazy(() => scopeSchema)),
    username: s.string(),
    password: s.defaulted(password1Schema, Password1.U002AU002AU002AU002AU002AU002AU002AU002A),
    _keysMap: {
      clientId: "client_id",
      clientSecret: "client_secret",
      tokenUrl: "token_url",
    },
  });
