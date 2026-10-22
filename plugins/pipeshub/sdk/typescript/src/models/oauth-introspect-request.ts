import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { tokenTypeHint1Schema, type TokenTypeHint1 } from "./token-type-hint1.js";

/**
 * OAuth 2.0 Token Introspection Request (RFC 7662). Check if a token is active and get its
 * metadata.
 */
export type OAuthIntrospectRequest = {
  /** The token to introspect */
  token: string;
  /** Hint about token type */
  tokenTypeHint?: TokenTypeHint1;
  /** Client ID */
  clientId: string;
  /** Client secret */
  clientSecret?: string;
};

export const oAuthIntrospectRequestSchema: Schema<OAuthIntrospectRequest> = s.object<OAuthIntrospectRequest>({
  token: s.string(),
  tokenTypeHint: s.optional(s.lazy(() => tokenTypeHint1Schema)),
  clientId: s.string(),
  clientSecret: s.optional(s.string()),
  _keysMap: {
    tokenTypeHint: "token_type_hint",
    clientId: "client_id",
    clientSecret: "client_secret",
  },
});
