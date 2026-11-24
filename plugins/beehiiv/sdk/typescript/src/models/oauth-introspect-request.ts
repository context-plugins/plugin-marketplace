import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tokenTypeHint1Schema, type TokenTypeHint1 } from "./token-type-hint1.js";

export type OauthIntrospectRequest = {
  /** The access or refresh token to introspect. */
  token: string;
  /** Optional hint to help the server process the token faster. */
  tokenTypeHint?: TokenTypeHint1;
  /** OAuth application client ID (`uid`). */
  clientId?: string;
  /** Required for confidential clients. */
  clientSecret?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oauthIntrospectRequestSchema: Schema<OauthIntrospectRequest> = s.object<OauthIntrospectRequest>(
  {
    token: s.string(),
    tokenTypeHint: s.optional(s.lazy(() => tokenTypeHint1Schema)),
    clientId: s.optional(s.string()),
    clientSecret: s.optional(s.string()),
    _keysMap: {
      tokenTypeHint: "token_type_hint",
      clientId: "client_id",
      clientSecret: "client_secret",
    },
  },
  { additionalProperties: s.json() },
);
