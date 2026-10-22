import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ClientExtension = {
  /**
   * The set of scopes that the client application is allowed to request. This paramter will be one
   * of the following.
   */
  requestableScopes?: string[];
  /**
   * The flag to indicate whether "Requestable Scopes per Client" is enabled or not. If `true`, you
   * can define the set of scopes which this client application can request. If `false`, this client
   * application can request any scope which is supported by the authorization server.
   */
  requestableScopesEnabled?: boolean;
  /**
   * The value of the duration of access tokens per client in seconds. In normal cases, the value of
   * the service's `accessTokenDuration` property is used as the duration of access tokens issued by
   * the service. However, if this `accessTokenDuration` property holds a non-zero positive number
   * and its value is less than the duration configured by the service, the value is used as the
   * duration of access tokens issued to the client application.
   *
   * Note that the duration of access tokens can be controlled by the scope attribute
   * `access_token.duration`, too. Authlete chooses the minimum value among the candidates.
   */
  accessTokenDuration?: number;
  /**
   * The value of the duration of refresh tokens per client in seconds. In normal cases, the value
   * of the service's `refreshTokenDuration` property is used as the duration of refresh tokens
   * issued by the service. However, if this `refreshTokenDuration` property holds a non-zero
   * positive number and its value is less than the duration configured by the service, the value is
   * used as the duration of refresh tokens issued to the client application.
   *
   * Note that the duration of refresh tokens can be controlled by the scope attribute
   * `refresh_token.duration`, too. Authlete chooses the minimum value among the candidates.
   */
  refreshTokenDuration?: number;
  /**
   * The value of the duration of ID tokens per client in seconds. In normal cases, the value of the
   * service's `idTokenDuration` property is used as the duration of ID tokens issued by the
   * service. However, if this `idTokenDuration` property holds a non-zero positive number and its
   * value is less than the duration configured by the service, the value is used as the duration of
   * ID tokens issued to the client application.
   *
   * Note that the duration of refresh tokens can be controlled by the scope attribute
   * `id_token.duration`, too. Authlete chooses the minimum value among the candidates.
   */
  idTokenDuration?: number;
  /**
   * Get the flag indicating whether the client is explicitly given a permission to make token
   * exchange requests ([RFC 8693][https://www.rfc-editor.org/rfc/rfc8693.html])
   */
  tokenExchangePermitted?: boolean;
};

export const clientExtensionSchema: Schema<ClientExtension> = s.object<ClientExtension>({
  requestableScopes: s.optional(s.array(s.string())),
  requestableScopesEnabled: s.optional(s.boolean()),
  accessTokenDuration: s.optional(s.int()),
  refreshTokenDuration: s.optional(s.int()),
  idTokenDuration: s.optional(s.int()),
  tokenExchangePermitted: s.optional(s.boolean()),
});
