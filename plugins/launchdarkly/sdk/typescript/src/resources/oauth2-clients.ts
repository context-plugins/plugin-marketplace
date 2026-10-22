import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { clientCollectionSchema, type ClientCollection } from "../models/client-collection.js";
import { clientSchema, type Client } from "../models/client.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import {
  invalidRequestErrorRepSchema,
  type InvalidRequestErrorRep,
} from "../models/invalid-request-error-rep.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import { oauthClientPostSchema, type OauthClientPost } from "../models/oauth-client-post.js";
import { patchOperationSchema, type PatchOperation } from "../models/patch-operation.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import type { Servers } from "../servers.js";

/**
 * The OAuth2 client API allows you to register a LaunchDarkly OAuth client for use in your own
 * custom integrations. Registering a LaunchDarkly OAuth client allows you to use LaunchDarkly as an
 * identity provider so that account members can log into your application with their LaunchDarkly
 * account.
 *
 * You can create and manage LaunchDarkly OAuth clients using the LaunchDarkly OAuth client API.
 * This API acknowledges creation of your client with a response containing a one-time, unique
 * `_clientSecret`. If you lose your client secret, you will have to register a new client.
 * LaunchDarkly does not store client secrets in plain text.
 *
 * Several of the endpoints in the OAuth2 client API require an OAuth client ID. The OAuth client ID
 * is returned as part of the [Create a LaunchDarkly OAuth 2.0
 * client](https://launchdarkly.com/docs/api/o-auth-2-clients/create-o-auth-2-client) and [Get
 * clients](https://launchdarkly.com/docs/api/o-auth-2-clients/get-o-auth-clients) responses. It is
 * the `_clientId` field, or the `_clientId` field of each element in the `items` array.
 *
 * You must have _Admin_ privileges or an access token created by a member with _Admin_ privileges
 * in order to be able to use this feature.
 *
 * Please note that `redirectUri`s must be absolute URIs that conform to the https URI scheme. If
 * you wish to register a client with a different URI scheme, please contact LaunchDarkly Support.
 */
export class OAuth2Clients {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a LaunchDarkly OAuth 2.0 client
   *
   * @remarks
   * Create (register) a LaunchDarkly OAuth2 client. OAuth2 clients allow you to build custom
   * integrations using LaunchDarkly as your identity provider.
   *
   * @returns OAuth 2.0 client response
   *
   * @throws {@link OAuth2Clients.CreateOAuth2ClientError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createOAuth2Client(
    request: OAuth2Clients.CreateOAuth2ClientRequest,
    options?: RequestOptions,
  ): ApiPromise<Client, OAuth2Clients.CreateOAuth2ClientError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/oauth/clients"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: oauthClientPostSchema },
      },
      {
        success: { kind: "json", schema: clientSchema },
        errorFactory: OAuth2Clients.CreateOAuth2ClientError,
      },
      options,
    );
  }

  /**
   * Delete OAuth 2.0 client
   *
   * @remarks
   * Delete an existing OAuth 2.0 client by unique client ID.
   *
   * @returns Action succeeded
   *
   * @throws {@link OAuth2Clients.DeleteOAuthClientError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteOAuthClient(
    request: OAuth2Clients.DeleteOAuthClientRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, OAuth2Clients.DeleteOAuthClientError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v2/oauth/clients/{clientId}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "clientId", value: request.clientId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: OAuth2Clients.DeleteOAuthClientError,
      },
      options,
    );
  }

  /**
   * Get client by ID
   *
   * @remarks
   * Get a registered OAuth 2.0 client by unique client ID.
   *
   * @returns OAuth 2.0 client response
   *
   * @throws {@link OAuth2Clients.GetOAuthClientByIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getOAuthClientById(
    request: OAuth2Clients.GetOAuthClientByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Client, OAuth2Clients.GetOAuthClientByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/oauth/clients/{clientId}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "clientId", value: request.clientId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: clientSchema },
        errorFactory: OAuth2Clients.GetOAuthClientByIdError,
      },
      options,
    );
  }

  /**
   * Get clients
   *
   * @remarks
   * Get all OAuth 2.0 clients registered by your account.
   *
   * @returns OAuth 2.0 client collection response
   *
   * @throws {@link OAuth2Clients.GetOAuthClientsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getOAuthClients(
    options?: RequestOptions,
  ): ApiPromise<ClientCollection, OAuth2Clients.GetOAuthClientsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/oauth/clients"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: clientCollectionSchema },
        errorFactory: OAuth2Clients.GetOAuthClientsError,
      },
      options,
    );
  }

  /**
   * Patch client by ID
   *
   * @remarks
   * Patch an existing OAuth 2.0 client by client ID. Updating an OAuth2 client uses a [JSON
   * patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To
   * learn more, read [Updates](https://launchdarkly.com/docs/api#updates). Only `name`,
   * `description`, and `redirectUri` may be patched.
   *
   * @returns OAuth 2.0 client response
   *
   * @throws {@link OAuth2Clients.PatchOAuthClientError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchOAuthClient(
    request: OAuth2Clients.PatchOAuthClientRequest,
    options?: RequestOptions,
  ): ApiPromise<Client, OAuth2Clients.PatchOAuthClientError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/oauth/clients/{clientId}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "clientId", value: request.clientId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.array(s.lazy(() => patchOperationSchema)) },
      },
      {
        success: { kind: "json", schema: clientSchema },
        errorFactory: OAuth2Clients.PatchOAuthClientError,
      },
      options,
    );
  }
}

export namespace OAuth2Clients {
  export type CreateOAuth2ClientRequest = {
    body: OauthClientPost;
  };

  export class CreateOAuth2ClientError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateOAuth2ClientError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
    ];
  }

  export type DeleteOAuthClientRequest = {
    /** The client ID */
    clientId: string;
  };

  export class DeleteOAuthClientError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteOAuthClientError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
    ];
  }

  export type GetOAuthClientByIdRequest = {
    /** The client ID */
    clientId: string;
  };

  export class GetOAuthClientByIdError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetOAuthClientByIdError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
    ];
  }

  export class GetOAuthClientsError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetOAuthClientsError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
    ];
  }

  export type PatchOAuthClientRequest = {
    /** The client ID */
    clientId: string;
    body: PatchOperation[];
  };

  export class PatchOAuthClientError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchOAuthClientError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
    ];
  }
}
