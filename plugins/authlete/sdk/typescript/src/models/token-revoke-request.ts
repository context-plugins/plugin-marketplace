import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TokenRevokeRequest = {
  /**
   * The identifier of an access token to revoke
   *
   * The hash of an access token is recognized as an identifier as well as the access token itself.
   */
  accessTokenIdentifier?: string;
  /**
   * The identifier of a refresh token to revoke.
   *
   * The hash of a refresh token is recognized as an identifier as well as the refresh token itself.
   */
  refreshTokenIdentifier?: string;
  /**
   * The client ID of the access token to be revoked.
   *
   * Both the numeric client ID and the alias are recognized as an identifier of a client.
   *
   * Bulk revocation with `clientIdentifier` only or `clientIdentifier` + `subject` deletes at most
   * **20 tokens per request** (the default of `token.revoke.count.max` in
   * `ServerConfiguration.java`). If the target has more than 20 tokens, the response `count` will
   * be 20 and the remainder is left untouched. To fully wipe them, call the endpoint repeatedly
   * until `count` returns 0.
   */
  clientIdentifier?: string;
  /**
   * The subject of a resource owner.
   *
   * Bulk revocation with `clientIdentifier` + `subject` or `subject` only deletes at most **20
   * tokens per request** (the default of `token.revoke.count.max` in `ServerConfiguration.java`).
   * If the target has more than 20 tokens, the response `count` will be 20 and the remainder is
   * left untouched. To fully wipe them, call the endpoint repeatedly until `count` returns 0.
   */
  subject?: string;
};

export const tokenRevokeRequestSchema: Schema<TokenRevokeRequest> = s.object<TokenRevokeRequest>({
  accessTokenIdentifier: s.optional(s.string()),
  refreshTokenIdentifier: s.optional(s.string()),
  clientIdentifier: s.optional(s.string()),
  subject: s.optional(s.string()),
});
