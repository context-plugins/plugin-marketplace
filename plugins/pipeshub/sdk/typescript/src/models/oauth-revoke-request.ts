import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { tokenTypeHintSchema, type TokenTypeHint } from "./token-type-hint.js";

/** OAuth 2.0 Token Revocation Request (RFC 7009). Revokes an access or refresh token. */
export type OAuthRevokeRequest = {
  /** The token to revoke */
  token: string;
  /** Hint about token type (optional, improves performance) */
  tokenTypeHint?: TokenTypeHint;
  /** Client ID */
  clientId: string;
  /** Client secret */
  clientSecret?: string;
};

export const oAuthRevokeRequestSchema: Schema<OAuthRevokeRequest> = s.object<OAuthRevokeRequest>({
  token: s.string(),
  tokenTypeHint: s.optional(s.lazy(() => tokenTypeHintSchema)),
  clientId: s.string(),
  clientSecret: s.optional(s.string()),
  _keysMap: {
    tokenTypeHint: "token_type_hint",
    clientId: "client_id",
    clientSecret: "client_secret",
  },
});
