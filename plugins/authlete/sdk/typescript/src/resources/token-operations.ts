import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { authzDetailsSchema, type AuthzDetails } from "../models/authz-details.js";
import { grantTypeSchema, type GrantType } from "../models/grant-type.js";
import { propertySchema, type Property } from "../models/property.js";
import { resultSchema, type Result } from "../models/result.js";
import { tokenCreateResponseSchema, type TokenCreateResponse } from "../models/token-create-response.js";
import { tokenGetListResponseSchema, type TokenGetListResponse } from "../models/token-get-list-response.js";
import { tokenRevokeResponseSchema, type TokenRevokeResponse } from "../models/token-revoke-response.js";
import { tokenUpdateResponseSchema, type TokenUpdateResponse } from "../models/token-update-response.js";
import type { Servers } from "../servers.js";

/**
 * API endpoints for various token related operations, including creating, revoking and deleting
 * access_tokens with specified scopes.
 */
export class TokenOperations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Access Token
   *
   * @remarks
   * Create an access token.
   *
   * @returns Token created successfully
   *
   * @throws {@link TokenOperations.AuthTokenCreateApiError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  authTokenCreateApi(
    request: TokenOperations.AuthTokenCreateApiRequest,
    options?: RequestOptions,
  ): ApiPromise<TokenCreateResponse, TokenOperations.AuthTokenCreateApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/auth/token/create"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "grantType", value: request.grantType, schema: grantTypeSchema },
            { name: "clientId", value: request.clientId, schema: s.optional(s.int()) },
            { name: "subject", value: request.subject, schema: s.optional(s.string()) },
            { name: "scopes", value: request.scopes, schema: s.optional(s.array(s.string())) },
            { name: "accessTokenDuration", value: request.accessTokenDuration, schema: s.optional(s.int()) },
            {
              name: "refreshTokenDuration",
              value: request.refreshTokenDuration,
              schema: s.optional(s.int()),
            },
            {
              name: "properties",
              value: request.properties,
              schema: s.optional(s.array(s.lazy(() => propertySchema))),
            },
            { name: "clientIdAliasUsed", value: request.clientIdAliasUsed, schema: s.optional(s.boolean()) },
            { name: "accessToken", value: request.accessToken, schema: s.optional(s.string()) },
            { name: "refreshToken", value: request.refreshToken, schema: s.optional(s.string()) },
            {
              name: "accessTokenPersistent",
              value: request.accessTokenPersistent,
              schema: s.optional(s.boolean()),
            },
            {
              name: "certificateThumbprint",
              value: request.certificateThumbprint,
              schema: s.optional(s.string()),
            },
            { name: "dpopKeyThumbprint", value: request.dpopKeyThumbprint, schema: s.optional(s.string()) },
            {
              name: "authorizationDetails",
              value: request.authorizationDetails,
              schema: s.optional(s.lazy(() => authzDetailsSchema)),
            },
            { name: "resources", value: request.resources, schema: s.optional(s.array(s.string())) },
            {
              name: "forExternalAttachment",
              value: request.forExternalAttachment,
              schema: s.optional(s.boolean()),
            },
            { name: "jwtAtClaims", value: request.jwtAtClaims, schema: s.optional(s.string()) },
            { name: "acr", value: request.acr, schema: s.optional(s.string()) },
            { name: "authTime", value: request.authTime, schema: s.optional(s.int()) },
            {
              name: "clientEntityIdUsed",
              value: request.clientEntityIdUsed,
              schema: s.optional(s.boolean()),
            },
            { name: "clientIdentifier", value: request.clientIdentifier, schema: s.optional(s.string()) },
            { name: "sessionId", value: request.sessionId, schema: s.optional(s.string()) },
            {
              name: "metadataDocumentUsed",
              value: request.metadataDocumentUsed,
              schema: s.optional(s.boolean()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: tokenCreateResponseSchema },
        errorFactory: TokenOperations.AuthTokenCreateApiError,
      },
      options,
    );
  }

  /**
   * Delete Access Token
   *
   * @remarks
   * Delete an access token.
   *
   * @returns The access token was successfully deleted.
   *
   * @throws {@link TokenOperations.AuthTokenDeleteApiError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  authTokenDeleteApi(
    request: TokenOperations.AuthTokenDeleteApiRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, TokenOperations.AuthTokenDeleteApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/{serviceId}/auth/token/delete/{accessTokenIdentifier}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "serviceId", value: request.serviceId, schema: s.string() },
          { name: "accessTokenIdentifier", value: request.accessTokenIdentifier, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: TokenOperations.AuthTokenDeleteApiError,
      },
      options,
    );
  }

  /**
   * List Issued Tokens
   *
   * @remarks
   * Get the list of access tokens that are associated with the service.
   *
   * @throws {@link TokenOperations.AuthTokenGetListApiError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  authTokenGetListApi(
    request: TokenOperations.AuthTokenGetListApiRequest,
    options?: RequestOptions,
  ): ApiPromise<TokenGetListResponse, TokenOperations.AuthTokenGetListApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/{serviceId}/auth/token/get/list"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [
          { name: "clientIdentifier", value: request.clientIdentifier, schema: s.optional(s.string()) },
          { name: "subject", value: request.subject, schema: s.optional(s.string()) },
          { name: "start", value: request.start, schema: s.optional(s.int()) },
          { name: "end", value: request.end, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tokenGetListResponseSchema },
        errorFactory: TokenOperations.AuthTokenGetListApiError,
      },
      options,
    );
  }

  /**
   * Revoke Access Token
   *
   * @remarks
   * Revoke an access token.
   *
   * @returns Token revoked successfully
   *
   * @throws {@link TokenOperations.AuthTokenRevokeApiError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  authTokenRevokeApi(
    request: TokenOperations.AuthTokenRevokeApiRequest,
    options?: RequestOptions,
  ): ApiPromise<TokenRevokeResponse, TokenOperations.AuthTokenRevokeApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/auth/token/revoke"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            {
              name: "accessTokenIdentifier",
              value: request.accessTokenIdentifier,
              schema: s.optional(s.string()),
            },
            {
              name: "refreshTokenIdentifier",
              value: request.refreshTokenIdentifier,
              schema: s.optional(s.string()),
            },
            { name: "clientIdentifier", value: request.clientIdentifier, schema: s.optional(s.string()) },
            { name: "subject", value: request.subject, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: tokenRevokeResponseSchema },
        errorFactory: TokenOperations.AuthTokenRevokeApiError,
      },
      options,
    );
  }

  /**
   * Update Access Token
   *
   * @remarks
   * Update an access token.
   *
   * @returns Token updated successfully
   *
   * @throws {@link TokenOperations.AuthTokenUpdateApiError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  authTokenUpdateApi(
    request: TokenOperations.AuthTokenUpdateApiRequest,
    options?: RequestOptions,
  ): ApiPromise<TokenUpdateResponse, TokenOperations.AuthTokenUpdateApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/auth/token/update"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "accessToken", value: request.accessToken, schema: s.optional(s.string()) },
            {
              name: "accessTokenExpiresAt",
              value: request.accessTokenExpiresAt,
              schema: s.optional(s.int()),
            },
            { name: "scopes", value: request.scopes, schema: s.optional(s.array(s.string())) },
            {
              name: "properties",
              value: request.properties,
              schema: s.optional(s.array(s.lazy(() => propertySchema))),
            },
            {
              name: "accessTokenExpiresAtUpdatedOnScopeUpdate",
              value: request.accessTokenExpiresAtUpdatedOnScopeUpdate,
              schema: s.optional(s.boolean()),
            },
            { name: "accessTokenHash", value: request.accessTokenHash, schema: s.optional(s.string()) },
            {
              name: "accessTokenValueUpdated",
              value: request.accessTokenValueUpdated,
              schema: s.optional(s.boolean()),
            },
            {
              name: "accessTokenPersistent",
              value: request.accessTokenPersistent,
              schema: s.optional(s.boolean()),
            },
            {
              name: "certificateThumbprint",
              value: request.certificateThumbprint,
              schema: s.optional(s.string()),
            },
            { name: "dpopKeyThumbprint", value: request.dpopKeyThumbprint, schema: s.optional(s.string()) },
            {
              name: "authorizationDetails",
              value: request.authorizationDetails,
              schema: s.optional(s.lazy(() => authzDetailsSchema)),
            },
            {
              name: "forExternalAttachment",
              value: request.forExternalAttachment,
              schema: s.optional(s.boolean()),
            },
            {
              name: "refreshTokenExpiresAt",
              value: request.refreshTokenExpiresAt,
              schema: s.optional(s.int()),
            },
            {
              name: "refreshTokenExpiresAtUpdatedOnScopeUpdate",
              value: request.refreshTokenExpiresAtUpdatedOnScopeUpdate,
              schema: s.optional(s.boolean()),
            },
            { name: "tokenId", value: request.tokenId, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: tokenUpdateResponseSchema },
        errorFactory: TokenOperations.AuthTokenUpdateApiError,
      },
      options,
    );
  }
}

export namespace TokenOperations {
  export type AuthTokenCreateApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** The grant type of the access token when the access token was created. */
    grantType: GrantType;
    /**
     * The ID of the client application which will be associated with a newly created access token.
     */
    clientId?: number;
    /**
     * The subject (= unique identifier) of the user who will be associated with a newly created
     * access token. This parameter is required unless the grant type is `CLIENT_CREDENTIALS`. The
     * value must consist of only ASCII characters and its length must not exceed 100.
     */
    subject?: string;
    /**
     * The scopes which will be associated with a newly created access token. Scopes that are not
     * supported by the service cannot be specified and requesting them will cause an error.
     */
    scopes?: string[];
    /**
     * The duration of a newly created access token in seconds. If the value is 0, the duration is
     * determined according to the settings of the service.
     */
    accessTokenDuration?: number;
    /**
     * The duration of a newly created refresh token in seconds. If the value is 0, the duration is
     * determined according to the settings of the service.
     *
     * A refresh token is not created (1) if the service does not support `REFRESH_TOKEN`, or (2) if
     * the specified grant type is either `IMPLICIT`or `CLIENT_CREDENTIALS`.
     */
    refreshTokenDuration?: number;
    /**
     * Extra properties to associate with a newly created access token. Note that properties
     * parameter is accepted only when the HTTP method of the request is POST and Content-Type of
     * the request is `application/json`, so don't use `GET` method or
     * `application/x-www-form-urlencoded` if you want to specify properties.
     */
    properties?: Property[];
    /**
     * A boolean request parameter which indicates whether to emulate that the client ID alias is
     * used instead of the original numeric client ID when a new access token is created.
     */
    clientIdAliasUsed?: boolean;
    /** The value of the new access token. */
    accessToken?: string;
    /** The value of the new refresh token. */
    refreshToken?: string;
    /**
     * Get whether the access token expires or not. By default, all access tokens expire after a
     * period of time determined by their service.
     *
     * If this request parameter is `true`, then the access token will not automatically expire and
     * must be revoked or deleted manually at the service. If this request parameter is true, the
     * `accessTokenDuration` request parameter is ignored.
     */
    accessTokenPersistent?: boolean;
    /**
     * The thumbprint of the MTLS certificate bound to this token. If this property is set, a
     * certificate with the corresponding value MUST be presented with the access token when it is
     * used by a client. The value of this property must be a SHA256 certificate thumbprint,
     * base64url encoded.
     */
    certificateThumbprint?: string;
    /**
     * The thumbprint of the public key used for DPoP presentation of this token. If this property
     * is set, a DPoP proof signed with the corresponding private key MUST be presented with the
     * access token when it is used by a client. Additionally, the token's `token_type` will be set
     * to 'DPoP'.
     */
    dpopKeyThumbprint?: string;
    /**
     * The authorization details. This represents the value of the `authorization_details` request
     * parameter in the preceding device authorization request which is defined in "OAuth 2.0 Rich
     * Authorization Requests".
     */
    authorizationDetails?: AuthzDetails;
    /**
     * The value of the resources to associate with the token. This property represents the value of
     * one or more `resource` request parameters which is defined in "RFC8707 Resource Indicators
     * for OAuth 2.0".
     */
    resources?: string[];
    /** the flag which indicates whether the access token is for an external attachment. */
    forExternalAttachment?: boolean;
    /** Additional claims that are added to the payload part of the JWT access token. */
    jwtAtClaims?: string;
    /**
     * The Authentication Context Class Reference of the user authentication that the authorization
     * server performed during the course of issuing the access token.
     */
    acr?: string;
    /**
     * The time when the user authentication was performed during the course of issuing the access
     * token.
     */
    authTime?: number;
    /**
     * Flag which indicates whether the entity ID of the client was used when the request for the
     * access token was made.
     */
    clientEntityIdUsed?: boolean;
    /** The client Identifier associated with the newly issued access token. */
    clientIdentifier?: string;
    /**
     * The session ID, which is the ID of the user's authentication session, associated with a newly
     * created access token.
     */
    sessionId?: string;
    /**
     * Flag indicating whether a metadata document was used to resolve client metadata for this
     * request.
     *
     * When `true`, the client metadata was retrieved via the [OAuth Client ID Metadata
     * Document](https://datatracker.ietf.org/doc/draft-ietf-oauth-client-id-metadata-document/)
     * (CIMD) mechanism rather than from the Authlete database.
     */
    metadataDocumentUsed?: boolean;
  };

  export class AuthTokenCreateApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<AuthTokenCreateApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type AuthTokenDeleteApiRequest = {
    /** A service ID. */
    serviceId: string;
    /**
     * The identifier of an existing access token. The identifier is the value of the access token
     * or the value of the hash of the access token.
     */
    accessTokenIdentifier: string;
  };

  export class AuthTokenDeleteApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<AuthTokenDeleteApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type AuthTokenGetListApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** Client Identifier (client ID or client ID alias). */
    clientIdentifier?: string;
    /** Unique user ID. */
    subject?: string;
    /** Start index of search results (inclusive). The default value is 0. */
    start?: number;
    /** End index of search results (exclusive). The default value is 5. */
    end?: number;
  };

  export class AuthTokenGetListApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<AuthTokenGetListApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type AuthTokenRevokeApiRequest = {
    /** A service ID. */
    serviceId: string;
    /**
     * The identifier of an access token to revoke
     *
     * The hash of an access token is recognized as an identifier as well as the access token
     * itself.
     */
    accessTokenIdentifier?: string;
    /**
     * The identifier of a refresh token to revoke.
     *
     * The hash of a refresh token is recognized as an identifier as well as the refresh token
     * itself.
     */
    refreshTokenIdentifier?: string;
    /**
     * The client ID of the access token to be revoked.
     *
     * Both the numeric client ID and the alias are recognized as an identifier of a client.
     *
     * Bulk revocation with `clientIdentifier` only or `clientIdentifier` + `subject` deletes at
     * most **20 tokens per request** (the default of `token.revoke.count.max` in
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

  export class AuthTokenRevokeApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Declared<"result6", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<AuthTokenRevokeApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 404, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result5", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result6", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type AuthTokenUpdateApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** An access token. */
    accessToken?: string;
    /**
     * A new date at which the access token will expire in milliseconds since the Unix epoch
     * (1970-01-01). If the `accessTokenExpiresAt` request parameter is not included in a request or
     * its value is 0 (or negative), the expiration date of the access token is not changed.
     */
    accessTokenExpiresAt?: number;
    /**
     * A new set of scopes assigned to the access token. Scopes that are not supported by the
     * service and those that the client application associated with the access token is not allowed
     * to request are ignored on the server side. If the `scopes` request parameter is not included
     * in a request or its value is `null`, the scopes of the access token are not changed. Note
     * that `properties` parameter is accepted only when `Content-Type` of the request is
     * `application/json`, so don't use `application/x-www-form-urlencoded` if you want to specify
     * `properties`.
     */
    scopes?: string[];
    /**
     * A new set of properties assigned to the access token. If the `properties` request parameter
     * is not included in a request or its value is null, the properties of the access token are not
     * changed.
     */
    properties?: Property[];
    /**
     * A boolean request parameter which indicates whether the API attempts to update the expiration
     * date of the access token when the scopes linked to the access token are changed by this
     * request.
     */
    accessTokenExpiresAtUpdatedOnScopeUpdate?: boolean;
    /**
     * The hash of the access token value. Used when the hash of the token is known (perhaps from
     * lookup) but the value of the token itself is not. The value of the `accessToken` parameter
     * takes precedence.
     */
    accessTokenHash?: string;
    /**
     * A boolean request parameter which indicates whether to update the value of the access token
     * in the data store. If this parameter is set to `true` then a new access token value is
     * generated by the server and returned in the response.
     */
    accessTokenValueUpdated?: boolean;
    /**
     * The flag which indicates whether the access token expires or not. By default, all access
     * tokens expire after a period of time determined by their service. If this request parameter
     * is `true` then the access token will not automatically expire and must be revoked or deleted
     * manually at the service.
     *
     * If this request parameter is `true`, the `accessTokenExpiresAt` request parameter is ignored.
     * If this request parameter is `false`, the `accessTokenExpiresAt` request parameter is
     * processed normally.
     */
    accessTokenPersistent?: boolean;
    /**
     * The thumbprint of the MTLS certificate bound to this token. If this property is set, a
     * certificate with the corresponding value MUST be presented with the access token when it is
     * used by a client. The value of this property must be a SHA256 certificate thumbprint,
     * base64url encoded.
     */
    certificateThumbprint?: string;
    /**
     * The thumbprint of the public key used for DPoP presentation of this token. If this property
     * is set, a DPoP proof signed with the corresponding private key MUST be presented with the
     * access token when it is used by a client. Additionally, the token's `token_type` will be set
     * to 'DPoP'.
     */
    dpopKeyThumbprint?: string;
    /**
     * The authorization details. This represents the value of the `authorization_details` request
     * parameter in the preceding device authorization request which is defined in "OAuth 2.0 Rich
     * Authorization Requests".
     */
    authorizationDetails?: AuthzDetails;
    /** the flag which indicates whether the access token is for an external attachment. */
    forExternalAttachment?: boolean;
    /**
     * A new date at which the access token will expire in milliseconds since the Unix epoch
     * (1970-01-01). If the `refreshTokenExpiresAt` request parameter is not included in a request
     * or its value is 0 (or negative), the expiration date of the refresh token is not changed.
     */
    refreshTokenExpiresAt?: number;
    /**
     * A boolean request parameter which indicates whether the API attempts to update the expiration
     * date of the refresh token when the scopes linked to the refresh token are changed by this
     * request.
     */
    refreshTokenExpiresAtUpdatedOnScopeUpdate?: boolean;
    /** The token identifier. */
    tokenId?: string;
  };

  export class AuthTokenUpdateApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<AuthTokenUpdateApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }
}
