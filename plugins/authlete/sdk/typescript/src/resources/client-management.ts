import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { applicationTypeSchema, type ApplicationType } from "../models/application-type.js";
import { clientAuthMethodSchema, type ClientAuthMethod } from "../models/client-auth-method.js";
import {
  clientAuthorizationDeleteResponseSchema,
  type ClientAuthorizationDeleteResponse,
} from "../models/client-authorization-delete-response.js";
import {
  clientAuthorizationGetListResponseSchema,
  type ClientAuthorizationGetListResponse,
} from "../models/client-authorization-get-list-response.js";
import {
  clientCursorListResponseSchema,
  type ClientCursorListResponse,
} from "../models/client-cursor-list-response.js";
import {
  clientExtensionRequestableScopesGetResponseSchema,
  type ClientExtensionRequestableScopesGetResponse,
} from "../models/client-extension-requestable-scopes-get-response.js";
import {
  clientExtensionRequestableScopesUpdateRequestSchema,
  type ClientExtensionRequestableScopesUpdateRequest,
} from "../models/client-extension-requestable-scopes-update-request.js";
import {
  clientExtensionRequestableScopesUpdateResponseSchema,
  type ClientExtensionRequestableScopesUpdateResponse,
} from "../models/client-extension-requestable-scopes-update-response.js";
import { clientExtensionSchema, type ClientExtension } from "../models/client-extension.js";
import {
  clientFlagUpdateResponseSchema,
  type ClientFlagUpdateResponse,
} from "../models/client-flag-update-response.js";
import {
  clientGetListResponseSchema,
  type ClientGetListResponse,
} from "../models/client-get-list-response.js";
import {
  clientRegistrationTypeSchema,
  type ClientRegistrationType,
} from "../models/client-registration-type.js";
import { clientSearchResponseSchema, type ClientSearchResponse } from "../models/client-search-response.js";
import {
  clientSecretRefreshResponseSchema,
  type ClientSecretRefreshResponse,
} from "../models/client-secret-refresh-response.js";
import { clientSourceSchema, type ClientSource } from "../models/client-source.js";
import { clientTypeSchema, type ClientType } from "../models/client-type.js";
import { clientSchema, type Client } from "../models/client.js";
import { fapiModeSchema, type FapiMode } from "../models/fapi-mode.js";
import { grantTypeSchema, type GrantType } from "../models/grant-type.js";
import { jweAlgSchema, type JweAlg } from "../models/jwe-alg.js";
import { jweEncSchema, type JweEnc } from "../models/jwe-enc.js";
import { jwsAlgSchema, type JwsAlg } from "../models/jws-alg.js";
import { pairSchema, type Pair } from "../models/pair.js";
import { responseModeSchema, type ResponseMode } from "../models/response-mode.js";
import { responseTypeSchema, type ResponseType } from "../models/response-type.js";
import { resultSchema, type Result } from "../models/result.js";
import { subjectTypeSchema, type SubjectType } from "../models/subject-type.js";
import { taggedValueSchema, type TaggedValue } from "../models/tagged-value.js";
import type { Servers } from "../servers.js";

/**
 * API endpoints for managing OAuth clients, including creation, update, and deletion of clients.
 */
export class ClientManagement {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete Client Tokens
   *
   * @remarks
   * Delete all existing access tokens issued to a client application by an end-user.
   *
   * The subject parameter is required and must be provided as a query parameter.
   *
   * @throws {@link ClientManagement.ClientAuthorizationDeleteApiError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clientAuthorizationDeleteApi(
    request: ClientManagement.ClientAuthorizationDeleteApiRequest,
    options?: RequestOptions,
  ): ApiPromise<ClientAuthorizationDeleteResponse, ClientManagement.ClientAuthorizationDeleteApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/{serviceId}/client/authorization/delete/{clientId}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "serviceId", value: request.serviceId, schema: s.string() },
          { name: "clientId", value: request.clientId, schema: s.string() },
        ],
        query: [{ name: "subject", value: request.subject, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: clientAuthorizationDeleteResponseSchema },
        errorFactory: ClientManagement.ClientAuthorizationDeleteApiError,
      },
      options,
    );
  }

  /**
   * Delete Client Tokens
   *
   * @remarks
   * Delete all existing access tokens issued to a client application by an end-user.
   *
   * The subject parameter is required.
   *
   * @throws {@link ClientManagement.ClientAuthorizationDeleteApiPostError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clientAuthorizationDeleteApiPost(
    request: ClientManagement.ClientAuthorizationDeleteApiPostRequest,
    options?: RequestOptions,
  ): ApiPromise<ClientAuthorizationDeleteResponse, ClientManagement.ClientAuthorizationDeleteApiPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/client/authorization/delete/{clientId}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "serviceId", value: request.serviceId, schema: s.string() },
          { name: "clientId", value: request.clientId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "subject", value: request.subject, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: clientAuthorizationDeleteResponseSchema },
        errorFactory: ClientManagement.ClientAuthorizationDeleteApiPostError,
      },
      options,
    );
  }

  /**
   * Delete Client Tokens (by Subject)
   *
   * @remarks
   * Delete all existing access tokens issued to a client application by an end-user. In this
   * variant, the subject is provided in the path.
   *
   * @throws {@link ClientManagement.ClientAuthorizationDeleteBySubjectApiError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clientAuthorizationDeleteBySubjectApi(
    request: ClientManagement.ClientAuthorizationDeleteBySubjectApiRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClientAuthorizationDeleteResponse,
    ClientManagement.ClientAuthorizationDeleteBySubjectApiError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/api/{serviceId}/client/authorization/delete/{clientId}/{subject}",
        ),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "serviceId", value: request.serviceId, schema: s.string() },
          { name: "clientId", value: request.clientId, schema: s.string() },
          { name: "subject", value: request.subject, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: clientAuthorizationDeleteResponseSchema },
        errorFactory: ClientManagement.ClientAuthorizationDeleteBySubjectApiError,
      },
      options,
    );
  }

  /**
   * Get Authorized Applications
   *
   * @remarks
   * Get a list of client applications that an end-user has authorized.
   *
   * The subject parameter is required and can be provided as a query parameter.
   *
   * @throws {@link ClientManagement.ClientAuthorizationGetListApiError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clientAuthorizationGetListApi(
    request: ClientManagement.ClientAuthorizationGetListApiRequest,
    options?: RequestOptions,
  ): ApiPromise<ClientAuthorizationGetListResponse, ClientManagement.ClientAuthorizationGetListApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/{serviceId}/client/authorization/get/list"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [
          { name: "subject", value: request.subject, schema: s.string() },
          { name: "developer", value: request.developer, schema: s.optional(s.string()) },
          { name: "start", value: request.start, schema: s.optional(s.int()) },
          { name: "end", value: request.end, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: clientAuthorizationGetListResponseSchema },
        errorFactory: ClientManagement.ClientAuthorizationGetListApiError,
      },
      options,
    );
  }

  /**
   * Get Authorized Applications
   *
   * @remarks
   * Get a list of client applications that an end-user has authorized.
   *
   * The subject parameter is required.
   *
   * @throws {@link ClientManagement.ClientAuthorizationGetListApiPostError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clientAuthorizationGetListApiPost(
    request: ClientManagement.ClientAuthorizationGetListApiPostRequest,
    options?: RequestOptions,
  ): ApiPromise<ClientAuthorizationGetListResponse, ClientManagement.ClientAuthorizationGetListApiPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/client/authorization/get/list"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "subject", value: request.subject, schema: s.string() },
            { name: "developer", value: request.developer, schema: s.optional(s.string()) },
            { name: "start", value: request.start, schema: s.optional(s.int()) },
            { name: "end", value: request.end, schema: s.optional(s.int()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: clientAuthorizationGetListResponseSchema },
        errorFactory: ClientManagement.ClientAuthorizationGetListApiPostError,
      },
      options,
    );
  }

  /**
   * Get Authorized Applications (by Subject)
   *
   * @remarks
   * Get a list of client applications that an end-user has authorized. In this variant, the subject
   * is provided in the path.
   *
   * @throws {@link ClientManagement.ClientAuthorizationGetListBySubjectApiError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clientAuthorizationGetListBySubjectApi(
    request: ClientManagement.ClientAuthorizationGetListBySubjectApiRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClientAuthorizationGetListResponse,
    ClientManagement.ClientAuthorizationGetListBySubjectApiError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/{serviceId}/client/authorization/get/list/{subject}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "serviceId", value: request.serviceId, schema: s.string() },
          { name: "subject", value: request.subject, schema: s.string() },
        ],
        query: [
          { name: "developer", value: request.developer, schema: s.optional(s.string()) },
          { name: "start", value: request.start, schema: s.optional(s.int()) },
          { name: "end", value: request.end, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: clientAuthorizationGetListResponseSchema },
        errorFactory: ClientManagement.ClientAuthorizationGetListBySubjectApiError,
      },
      options,
    );
  }

  /**
   * Update Client Tokens
   *
   * @remarks
   * Update attributes of all existing access tokens given to a client application.
   *
   * @throws {@link ClientManagement.ClientAuthorizationUpdateApiError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clientAuthorizationUpdateApi(
    request: ClientManagement.ClientAuthorizationUpdateApiRequest,
    options?: RequestOptions,
  ): ApiPromise<Result, ClientManagement.ClientAuthorizationUpdateApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/client/authorization/update/{clientId}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "serviceId", value: request.serviceId, schema: s.string() },
          { name: "clientId", value: request.clientId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "subject", value: request.subject, schema: s.string() },
            { name: "scopes", value: request.scopes, schema: s.optional(s.array(s.string())) },
          ],
        },
      },
      {
        success: { kind: "json", schema: resultSchema },
        errorFactory: ClientManagement.ClientAuthorizationUpdateApiError,
      },
      options,
    );
  }

  /**
   * Create Client
   *
   * @remarks
   * Create a new client.
   *
   * @returns Client created successfully (legacy compatibility)
   *
   * @throws {@link ClientManagement.ClientCreateApiError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clientCreateApi(
    request: ClientManagement.ClientCreateApiRequest,
    options?: RequestOptions,
  ): ApiPromise<Client, ClientManagement.ClientCreateApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/client/create"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => clientSchema)) },
      },
      {
        success: { kind: "json", schema: clientSchema },
        errorFactory: ClientManagement.ClientCreateApiError,
      },
      options,
    );
  }

  /**
   * List Clients (Cursor Pagination)
   *
   * @remarks
   * Retrieve the clients in the requested service via cursor based iteration.
   *
   * @throws {@link ClientManagement.ClientCursorListApiError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clientCursorListApi(
    request: ClientManagement.ClientCursorListApiRequest,
    options?: RequestOptions,
  ): ApiPromise<ClientCursorListResponse, ClientManagement.ClientCursorListApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/{serviceId}/client"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.int() }],
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "includeTotalCount", value: request.includeTotalCount, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: clientCursorListResponseSchema },
        errorFactory: ClientManagement.ClientCursorListApiError,
      },
      options,
    );
  }

  /**
   * Delete Client ⚡
   *
   * @remarks
   * Delete a client.
   *
   * @returns The client was successfully deleted.
   *
   * @throws {@link ClientManagement.ClientDeleteApiError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clientDeleteApi(
    request: ClientManagement.ClientDeleteApiRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ClientManagement.ClientDeleteApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/{serviceId}/client/delete/{clientId}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "serviceId", value: request.serviceId, schema: s.string() },
          { name: "clientId", value: request.clientId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ClientManagement.ClientDeleteApiError,
      },
      options,
    );
  }

  /**
   * Delete Requestable Scopes
   *
   * @remarks
   * Delete requestable scopes of a client
   *
   * @returns Requestable scopes was successfully deleted.
   *
   * @throws {@link ClientManagement.ClientExtensionRequestablesScopesDeleteApiError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clientExtensionRequestablesScopesDeleteApi(
    request: ClientManagement.ClientExtensionRequestablesScopesDeleteApiRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ClientManagement.ClientExtensionRequestablesScopesDeleteApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/api/{serviceId}/client/extension/requestable_scopes/delete/{clientId}",
        ),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "serviceId", value: request.serviceId, schema: s.string() },
          { name: "clientId", value: request.clientId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ClientManagement.ClientExtensionRequestablesScopesDeleteApiError,
      },
      options,
    );
  }

  /**
   * Get Requestable Scopes
   *
   * @remarks
   * Get the requestable scopes per client
   *
   * @throws {@link ClientManagement.ClientExtensionRequestablesScopesGetApiError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clientExtensionRequestablesScopesGetApi(
    request: ClientManagement.ClientExtensionRequestablesScopesGetApiRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClientExtensionRequestableScopesGetResponse,
    ClientManagement.ClientExtensionRequestablesScopesGetApiError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/{serviceId}/client/extension/requestable_scopes/get/{clientId}",
        ),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "serviceId", value: request.serviceId, schema: s.string() },
          { name: "clientId", value: request.clientId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: clientExtensionRequestableScopesGetResponseSchema },
        errorFactory: ClientManagement.ClientExtensionRequestablesScopesGetApiError,
      },
      options,
    );
  }

  /**
   * Update Requestable Scopes
   *
   * @remarks
   * Update requestable scopes of a client
   *
   * @returns Requestable scopes updated successfully
   *
   * @throws {@link ClientManagement.ClientExtensionRequestablesScopesUpdateApiError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clientExtensionRequestablesScopesUpdateApi(
    request: ClientManagement.ClientExtensionRequestablesScopesUpdateApiRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClientExtensionRequestableScopesUpdateResponse,
    ClientManagement.ClientExtensionRequestablesScopesUpdateApiError
  > {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default(
          "/api/{serviceId}/client/extension/requestable_scopes/update/{clientId}",
        ),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "serviceId", value: request.serviceId, schema: s.string() },
          { name: "clientId", value: request.clientId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: clientExtensionRequestableScopesUpdateRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: clientExtensionRequestableScopesUpdateResponseSchema },
        errorFactory: ClientManagement.ClientExtensionRequestablesScopesUpdateApiError,
      },
      options,
    );
  }

  /**
   * Update Requestable Scopes
   *
   * @remarks
   * Update requestable scopes of a client
   *
   * @returns Requestable scopes updated successfully
   *
   * @throws {@link ClientManagement.ClientExtensionRequestablesScopesUpdateApiPostError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clientExtensionRequestablesScopesUpdateApiPost(
    request: ClientManagement.ClientExtensionRequestablesScopesUpdateApiPostRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClientExtensionRequestableScopesUpdateResponse,
    ClientManagement.ClientExtensionRequestablesScopesUpdateApiPostError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/api/{serviceId}/client/extension/requestable_scopes/update/{clientId}",
        ),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "serviceId", value: request.serviceId, schema: s.string() },
          { name: "clientId", value: request.clientId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: clientExtensionRequestableScopesUpdateRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: clientExtensionRequestableScopesUpdateResponseSchema },
        errorFactory: ClientManagement.ClientExtensionRequestablesScopesUpdateApiPostError,
      },
      options,
    );
  }

  /**
   * Update Client Lock
   *
   * @remarks
   * Lock and unlock a client
   *
   * @throws {@link ClientManagement.ClientFlagUpdateApiError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clientFlagUpdateApi(
    request: ClientManagement.ClientFlagUpdateApiRequest,
    options?: RequestOptions,
  ): ApiPromise<ClientFlagUpdateResponse, ClientManagement.ClientFlagUpdateApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/client/lock_flag/update/{clientIdentifier}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "serviceId", value: request.serviceId, schema: s.string() },
          { name: "clientIdentifier", value: request.clientIdentifier, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "clientLocked", value: request.clientLocked, schema: s.boolean() }],
        },
      },
      {
        success: { kind: "json", schema: clientFlagUpdateResponseSchema },
        errorFactory: ClientManagement.ClientFlagUpdateApiError,
      },
      options,
    );
  }

  /**
   * Get Client
   *
   * @remarks
   * Get a client.
   *
   * @throws {@link ClientManagement.ClientGetApiError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clientGetApi(
    request: ClientManagement.ClientGetApiRequest,
    options?: RequestOptions,
  ): ApiPromise<Client, ClientManagement.ClientGetApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/{serviceId}/client/get/{clientId}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "serviceId", value: request.serviceId, schema: s.string() },
          { name: "clientId", value: request.clientId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: clientSchema },
        errorFactory: ClientManagement.ClientGetApiError,
      },
      options,
    );
  }

  /**
   * List Clients
   *
   * @remarks
   * Get a list of clients on a service.
   *
   * If the access token can view a full service (including an admin), all clients within the
   * service are returned. Otherwise, only clients that the access token can view within the service
   * are returned.
   * - ViewClient: []
   *
   * @throws {@link ClientManagement.ClientGetListApiError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clientGetListApi(
    request: ClientManagement.ClientGetListApiRequest,
    options?: RequestOptions,
  ): ApiPromise<ClientGetListResponse, ClientManagement.ClientGetListApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/{serviceId}/client/get/list"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [
          { name: "developer", value: request.developer, schema: s.optional(s.string()) },
          { name: "start", value: request.start, schema: s.optional(s.int()) },
          { name: "end", value: request.end, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: clientGetListResponseSchema },
        errorFactory: ClientManagement.ClientGetListApiError,
      },
      options,
    );
  }

  /**
   * Delete Granted Scopes
   *
   * @remarks
   * Delete the set of scopes that an end-user has granted to a client application.
   *
   * Even if records about granted scopes are deleted by calling this API, existing access tokens
   * are not deleted and scopes of existing access tokens are not changed. The subject parameter is
   * required and must be provided as a query parameter.
   *
   * @throws {@link ClientManagement.ClientGrantedScopesDeleteApiError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clientGrantedScopesDeleteApi(
    request: ClientManagement.ClientGrantedScopesDeleteApiRequest,
    options?: RequestOptions,
  ): ApiPromise<Result, ClientManagement.ClientGrantedScopesDeleteApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/{serviceId}/client/granted_scopes/delete/{clientId}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "serviceId", value: request.serviceId, schema: s.string() },
          { name: "clientId", value: request.clientId, schema: s.string() },
        ],
        query: [{ name: "subject", value: request.subject, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: resultSchema },
        errorFactory: ClientManagement.ClientGrantedScopesDeleteApiError,
      },
      options,
    );
  }

  /**
   * Delete Granted Scopes (by Subject)
   *
   * @remarks
   * Delete the set of scopes that an end-user has granted to a client application. In this variant,
   * the subject is provided in the path.
   *
   * @throws {@link ClientManagement.ClientGrantedScopesDeleteBySubjectApiError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clientGrantedScopesDeleteBySubjectApi(
    request: ClientManagement.ClientGrantedScopesDeleteBySubjectApiRequest,
    options?: RequestOptions,
  ): ApiPromise<Result, ClientManagement.ClientGrantedScopesDeleteBySubjectApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/api/{serviceId}/client/granted_scopes/delete/{clientId}/{subject}",
        ),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "serviceId", value: request.serviceId, schema: s.string() },
          { name: "clientId", value: request.clientId, schema: s.string() },
          { name: "subject", value: request.subject, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: resultSchema },
        errorFactory: ClientManagement.ClientGrantedScopesDeleteBySubjectApiError,
      },
      options,
    );
  }

  /**
   * Get Granted Scopes
   *
   * @remarks
   * Get the set of scopes that a user has granted to a client application.
   *
   * @returns Successfully retrieved granted scopes
   *
   * @throws {@link ClientManagement.ClientGrantedScopesGetApiError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clientGrantedScopesGetApi(
    request: ClientManagement.ClientGrantedScopesGetApiRequest,
    options?: RequestOptions,
  ): ApiPromise<ClientAuthorizationDeleteResponse, ClientManagement.ClientGrantedScopesGetApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/{serviceId}/client/granted_scopes/get/{clientId}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "serviceId", value: request.serviceId, schema: s.string() },
          { name: "clientId", value: request.clientId, schema: s.string() },
        ],
        query: [{ name: "subject", value: request.subject, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: clientAuthorizationDeleteResponseSchema },
        errorFactory: ClientManagement.ClientGrantedScopesGetApiError,
      },
      options,
    );
  }

  /**
   * Get Granted Scopes
   *
   * @remarks
   * Get the set of scopes that a user has granted to a client application.
   *
   * The subject parameter is required.
   *
   * @throws {@link ClientManagement.ClientGrantedScopesGetApiPostError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clientGrantedScopesGetApiPost(
    request: ClientManagement.ClientGrantedScopesGetApiPostRequest,
    options?: RequestOptions,
  ): ApiPromise<ClientAuthorizationDeleteResponse, ClientManagement.ClientGrantedScopesGetApiPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/client/granted_scopes/get/{clientId}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "serviceId", value: request.serviceId, schema: s.string() },
          { name: "clientId", value: request.clientId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "subject", value: request.subject, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: clientAuthorizationDeleteResponseSchema },
        errorFactory: ClientManagement.ClientGrantedScopesGetApiPostError,
      },
      options,
    );
  }

  /**
   * Get Granted Scopes (by Subject)
   *
   * @remarks
   * Get the set of scopes that a user has granted to a client application. In this variant, the
   * subject is provided in the path.
   *
   * @returns Successfully retrieved granted scopes
   *
   * @throws {@link ClientManagement.ClientGrantedScopesGetBySubjectApiError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clientGrantedScopesGetBySubjectApi(
    request: ClientManagement.ClientGrantedScopesGetBySubjectApiRequest,
    options?: RequestOptions,
  ): ApiPromise<ClientAuthorizationDeleteResponse, ClientManagement.ClientGrantedScopesGetBySubjectApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/{serviceId}/client/granted_scopes/get/{clientId}/{subject}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "serviceId", value: request.serviceId, schema: s.string() },
          { name: "clientId", value: request.clientId, schema: s.string() },
          { name: "subject", value: request.subject, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: clientAuthorizationDeleteResponseSchema },
        errorFactory: ClientManagement.ClientGrantedScopesGetBySubjectApiError,
      },
      options,
    );
  }

  /**
   * Search Clients
   *
   * @remarks
   * Search the clients in the requested service that match the condition provided in the `q` query
   * parameter. Results are returned via cursor based iteration. To iterate through all clients
   * without a search condition, use the `/api/&#123;serviceId&#125;/client` API instead.
   *
   * @throws {@link ClientManagement.ClientSearchApiError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clientSearchApi(
    request: ClientManagement.ClientSearchApiRequest,
    options?: RequestOptions,
  ): ApiPromise<ClientSearchResponse, ClientManagement.ClientSearchApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/{serviceId}/client/search"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.int() }],
        query: [
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "includeTotalCount", value: request.includeTotalCount, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: clientSearchResponseSchema },
        errorFactory: ClientManagement.ClientSearchApiError,
      },
      options,
    );
  }

  /**
   * Rotate Client Secret
   *
   * @remarks
   * Refresh the client secret of a client. A new value of the client secret will be generated by
   * the Authlete server.
   *
   * If you want to specify a new value, use `/api/client/secret/update` API.
   *
   * @throws {@link ClientManagement.ClientSecretRefreshApiError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clientSecretRefreshApi(
    request: ClientManagement.ClientSecretRefreshApiRequest,
    options?: RequestOptions,
  ): ApiPromise<ClientSecretRefreshResponse, ClientManagement.ClientSecretRefreshApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/{serviceId}/client/secret/refresh/{clientIdentifier}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "serviceId", value: request.serviceId, schema: s.string() },
          { name: "clientIdentifier", value: request.clientIdentifier, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: clientSecretRefreshResponseSchema },
        errorFactory: ClientManagement.ClientSecretRefreshApiError,
      },
      options,
    );
  }

  /**
   * Update Client Secret
   *
   * @remarks
   * Update the client secret of a client.
   *
   * If you want to have the Authlete server generate a new value of the client secret, use
   * `/api/client/secret/refresh` API.
   *
   * @throws {@link ClientManagement.ClientSecretUpdateApiError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clientSecretUpdateApi(
    request: ClientManagement.ClientSecretUpdateApiRequest,
    options?: RequestOptions,
  ): ApiPromise<ClientSecretRefreshResponse, ClientManagement.ClientSecretUpdateApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/client/secret/update/{clientIdentifier}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "serviceId", value: request.serviceId, schema: s.string() },
          { name: "clientIdentifier", value: request.clientIdentifier, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "clientSecret", value: request.clientSecret, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: clientSecretRefreshResponseSchema },
        errorFactory: ClientManagement.ClientSecretUpdateApiError,
      },
      options,
    );
  }

  /**
   * Update Client
   *
   * @remarks
   * Update a client.
   *
   * @throws {@link ClientManagement.ClientUpdateApiError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clientUpdateApi(
    request: ClientManagement.ClientUpdateApiRequest,
    options?: RequestOptions,
  ): ApiPromise<Client, ClientManagement.ClientUpdateApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/client/update/{clientId}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "serviceId", value: request.serviceId, schema: s.string() },
          { name: "clientId", value: request.clientIdTemplate, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "number", value: request.number, schema: s.optional(s.int()) },
            { name: "serviceNumber", value: request.serviceNumber, schema: s.optional(s.int()) },
            { name: "clientName", value: request.clientName, schema: s.optional(s.string()) },
            {
              name: "clientNames",
              value: request.clientNames,
              schema: s.optional(s.array(s.lazy(() => taggedValueSchema))),
            },
            { name: "description", value: request.description, schema: s.optional(s.string()) },
            {
              name: "descriptions",
              value: request.descriptions,
              schema: s.optional(s.array(s.lazy(() => taggedValueSchema))),
            },
            { name: "clientId", value: request.clientId, schema: s.optional(s.int()) },
            { name: "clientSecret", value: request.clientSecret, schema: s.optional(s.string()) },
            { name: "clientIdAlias", value: request.clientIdAlias, schema: s.optional(s.string()) },
            {
              name: "clientIdAliasEnabled",
              value: request.clientIdAliasEnabled,
              schema: s.optional(s.boolean()),
            },
            {
              name: "clientType",
              value: request.clientType,
              schema: s.optional(s.lazy(() => clientTypeSchema)),
            },
            {
              name: "applicationType",
              value: request.applicationType,
              schema: s.optional(s.lazy(() => applicationTypeSchema)),
            },
            { name: "logoUri", value: request.logoUri, schema: s.optional(s.string()) },
            {
              name: "logoUris",
              value: request.logoUris,
              schema: s.optional(s.array(s.lazy(() => taggedValueSchema))),
            },
            { name: "contacts", value: request.contacts, schema: s.optional(s.array(s.string())) },
            {
              name: "tlsClientCertificateBoundAccessTokens",
              value: request.tlsClientCertificateBoundAccessTokens,
              schema: s.optional(s.boolean()),
            },
            {
              name: "dynamicallyRegistered",
              value: request.dynamicallyRegistered,
              schema: s.optional(s.boolean()),
            },
            { name: "softwareId", value: request.softwareId, schema: s.optional(s.string()) },
            { name: "developer", value: request.developer, schema: s.optional(s.string()) },
            { name: "softwareVersion", value: request.softwareVersion, schema: s.optional(s.string()) },
            {
              name: "registrationAccessTokenHash",
              value: request.registrationAccessTokenHash,
              schema: s.optional(s.string()),
            },
            { name: "createdAt", value: request.createdAt, schema: s.optional(s.int()) },
            { name: "modifiedAt", value: request.modifiedAt, schema: s.optional(s.int()) },
            {
              name: "grantTypes",
              value: request.grantTypes,
              schema: s.optional(s.array(s.lazy(() => grantTypeSchema))),
            },
            {
              name: "responseTypes",
              value: request.responseTypes,
              schema: s.optional(s.array(s.lazy(() => responseTypeSchema))),
            },
            { name: "redirectUris", value: request.redirectUris, schema: s.optional(s.array(s.string())) },
            {
              name: "authorizationSignAlg",
              value: request.authorizationSignAlg,
              schema: s.optionalNullable(s.lazy(() => jwsAlgSchema)),
            },
            {
              name: "authorizationEncryptionAlg",
              value: request.authorizationEncryptionAlg,
              schema: s.optionalNullable(s.lazy(() => jweAlgSchema)),
            },
            {
              name: "authorizationEncryptionEnc",
              value: request.authorizationEncryptionEnc,
              schema: s.optionalNullable(s.lazy(() => jweEncSchema)),
            },
            {
              name: "tokenAuthMethod",
              value: request.tokenAuthMethod,
              schema: s.optional(s.lazy(() => clientAuthMethodSchema)),
            },
            {
              name: "tokenAuthSignAlg",
              value: request.tokenAuthSignAlg,
              schema: s.optionalNullable(s.lazy(() => jwsAlgSchema)),
            },
            {
              name: "selfSignedCertificateKeyId",
              value: request.selfSignedCertificateKeyId,
              schema: s.optional(s.string()),
            },
            {
              name: "tlsClientAuthSubjectDn",
              value: request.tlsClientAuthSubjectDn,
              schema: s.optional(s.string()),
            },
            {
              name: "tlsClientAuthSanDns",
              value: request.tlsClientAuthSanDns,
              schema: s.optional(s.string()),
            },
            {
              name: "tlsClientAuthSanUri",
              value: request.tlsClientAuthSanUri,
              schema: s.optional(s.string()),
            },
            { name: "tlsClientAuthSanIp", value: request.tlsClientAuthSanIp, schema: s.optional(s.string()) },
            {
              name: "tlsClientAuthSanEmail",
              value: request.tlsClientAuthSanEmail,
              schema: s.optional(s.string()),
            },
            { name: "parRequired", value: request.parRequired, schema: s.optional(s.boolean()) },
            {
              name: "requestObjectRequired",
              value: request.requestObjectRequired,
              schema: s.optional(s.boolean()),
            },
            {
              name: "requestSignAlg",
              value: request.requestSignAlg,
              schema: s.optionalNullable(s.lazy(() => jwsAlgSchema)),
            },
            {
              name: "requestEncryptionAlg",
              value: request.requestEncryptionAlg,
              schema: s.optionalNullable(s.lazy(() => jweAlgSchema)),
            },
            {
              name: "requestEncryptionEnc",
              value: request.requestEncryptionEnc,
              schema: s.optionalNullable(s.lazy(() => jweEncSchema)),
            },
            { name: "requestUris", value: request.requestUris, schema: s.optional(s.array(s.string())) },
            { name: "defaultMaxAge", value: request.defaultMaxAge, schema: s.optional(s.int()) },
            { name: "defaultAcrs", value: request.defaultAcrs, schema: s.optional(s.array(s.string())) },
            {
              name: "idTokenSignAlg",
              value: request.idTokenSignAlg,
              schema: s.optionalNullable(s.lazy(() => jwsAlgSchema)),
            },
            {
              name: "idTokenEncryptionAlg",
              value: request.idTokenEncryptionAlg,
              schema: s.optionalNullable(s.lazy(() => jweAlgSchema)),
            },
            {
              name: "idTokenEncryptionEnc",
              value: request.idTokenEncryptionEnc,
              schema: s.optionalNullable(s.lazy(() => jweEncSchema)),
            },
            { name: "authTimeRequired", value: request.authTimeRequired, schema: s.optional(s.boolean()) },
            {
              name: "subjectType",
              value: request.subjectType,
              schema: s.optional(s.lazy(() => subjectTypeSchema)),
            },
            {
              name: "sectorIdentifierUri",
              value: request.sectorIdentifierUri,
              schema: s.optional(s.string()),
            },
            {
              name: "derivedSectorIdentifier",
              value: request.derivedSectorIdentifier,
              schema: s.optional(s.string()),
            },
            { name: "jwksUri", value: request.jwksUri, schema: s.optional(s.string()) },
            { name: "jwks", value: request.jwks, schema: s.optional(s.string()) },
            {
              name: "userInfoSignAlg",
              value: request.userInfoSignAlg,
              schema: s.optionalNullable(s.lazy(() => jwsAlgSchema)),
            },
            {
              name: "userInfoEncryptionAlg",
              value: request.userInfoEncryptionAlg,
              schema: s.optionalNullable(s.lazy(() => jweAlgSchema)),
            },
            {
              name: "userInfoEncryptionEnc",
              value: request.userInfoEncryptionEnc,
              schema: s.optionalNullable(s.lazy(() => jweEncSchema)),
            },
            { name: "loginUri", value: request.loginUri, schema: s.optional(s.string()) },
            { name: "tosUri", value: request.tosUri, schema: s.optional(s.string()) },
            {
              name: "tosUris",
              value: request.tosUris,
              schema: s.optional(s.array(s.lazy(() => taggedValueSchema))),
            },
            { name: "policyUri", value: request.policyUri, schema: s.optional(s.string()) },
            {
              name: "policyUris",
              value: request.policyUris,
              schema: s.optional(s.array(s.lazy(() => taggedValueSchema))),
            },
            { name: "clientUri", value: request.clientUri, schema: s.optional(s.string()) },
            {
              name: "clientUris",
              value: request.clientUris,
              schema: s.optional(s.array(s.lazy(() => taggedValueSchema))),
            },
            { name: "bcDeliveryMode", value: request.bcDeliveryMode, schema: s.optional(s.string()) },
            {
              name: "bcNotificationEndpoint",
              value: request.bcNotificationEndpoint,
              schema: s.optional(s.string()),
            },
            {
              name: "bcRequestSignAlg",
              value: request.bcRequestSignAlg,
              schema: s.optionalNullable(s.lazy(() => jwsAlgSchema)),
            },
            {
              name: "bcUserCodeRequired",
              value: request.bcUserCodeRequired,
              schema: s.optional(s.boolean()),
            },
            {
              name: "backchannelLogoutUri",
              value: request.backchannelLogoutUri,
              schema: s.optional(s.string()),
            },
            {
              name: "backchannelLogoutSessionRequired",
              value: request.backchannelLogoutSessionRequired,
              schema: s.optional(s.boolean()),
            },
            {
              name: "attributes",
              value: request.attributes,
              schema: s.optional(s.array(s.lazy(() => pairSchema))),
            },
            {
              name: "extension",
              value: request.extension,
              schema: s.optional(s.lazy(() => clientExtensionSchema)),
            },
            {
              name: "authorizationDetailsTypes",
              value: request.authorizationDetailsTypes,
              schema: s.optional(s.array(s.string())),
            },
            { name: "customMetadata", value: request.customMetadata, schema: s.optional(s.string()) },
            {
              name: "frontChannelRequestObjectEncryptionRequired",
              value: request.frontChannelRequestObjectEncryptionRequired,
              schema: s.optional(s.boolean()),
            },
            {
              name: "requestObjectEncryptionAlgMatchRequired",
              value: request.requestObjectEncryptionAlgMatchRequired,
              schema: s.optional(s.boolean()),
            },
            {
              name: "requestObjectEncryptionEncMatchRequired",
              value: request.requestObjectEncryptionEncMatchRequired,
              schema: s.optional(s.boolean()),
            },
            { name: "digestAlgorithm", value: request.digestAlgorithm, schema: s.optional(s.string()) },
            {
              name: "singleAccessTokenPerSubject",
              value: request.singleAccessTokenPerSubject,
              schema: s.optional(s.boolean()),
            },
            { name: "pkceRequired", value: request.pkceRequired, schema: s.optional(s.boolean()) },
            { name: "pkceS256Required", value: request.pkceS256Required, schema: s.optional(s.boolean()) },
            { name: "dpopRequired", value: request.dpopRequired, schema: s.optional(s.boolean()) },
            {
              name: "automaticallyRegistered",
              value: request.automaticallyRegistered,
              schema: s.optional(s.boolean()),
            },
            {
              name: "explicitlyRegistered",
              value: request.explicitlyRegistered,
              schema: s.optional(s.boolean()),
            },
            { name: "rsRequestSigned", value: request.rsRequestSigned, schema: s.optional(s.boolean()) },
            {
              name: "rsSignedRequestKeyId",
              value: request.rsSignedRequestKeyId,
              schema: s.optional(s.string()),
            },
            {
              name: "clientRegistrationTypes",
              value: request.clientRegistrationTypes,
              schema: s.optional(s.array(s.lazy(() => clientRegistrationTypeSchema))),
            },
            { name: "organizationName", value: request.organizationName, schema: s.optional(s.string()) },
            { name: "signedJwksUri", value: request.signedJwksUri, schema: s.optional(s.string()) },
            { name: "entityId", value: request.entityId, schema: s.optional(s.string()) },
            { name: "trustAnchorId", value: request.trustAnchorId, schema: s.optional(s.string()) },
            { name: "trustChain", value: request.trustChain, schema: s.optional(s.array(s.string())) },
            { name: "trustChainExpiresAt", value: request.trustChainExpiresAt, schema: s.optional(s.int()) },
            { name: "trustChainUpdatedAt", value: request.trustChainUpdatedAt, schema: s.optional(s.int()) },
            { name: "locked", value: request.locked, schema: s.optional(s.boolean()) },
            {
              name: "credentialOfferEndpoint",
              value: request.credentialOfferEndpoint,
              schema: s.optional(s.string()),
            },
            {
              name: "fapiModes",
              value: request.fapiModes,
              schema: s.optional(s.array(s.lazy(() => fapiModeSchema))),
            },
            {
              name: "responseModes",
              value: request.responseModes,
              schema: s.optional(s.array(s.lazy(() => responseModeSchema))),
            },
            {
              name: "credentialResponseEncryptionRequired",
              value: request.credentialResponseEncryptionRequired,
              schema: s.optional(s.boolean()),
            },
            {
              name: "mtlsEndpointAliasesUsed",
              value: request.mtlsEndpointAliasesUsed,
              schema: s.optional(s.boolean()),
            },
            {
              name: "inScopeForTokenMigration",
              value: request.inScopeForTokenMigration,
              schema: s.optional(s.boolean()),
            },
            {
              name: "metadataDocumentLocation",
              value: request.metadataDocumentLocation,
              schema: s.optional(s.string()),
            },
            {
              name: "metadataDocumentExpiresAt",
              value: request.metadataDocumentExpiresAt,
              schema: s.optional(s.int()),
            },
            {
              name: "metadataDocumentUpdatedAt",
              value: request.metadataDocumentUpdatedAt,
              schema: s.optional(s.int()),
            },
            {
              name: "discoveredByMetadataDocument",
              value: request.discoveredByMetadataDocument,
              schema: s.optional(s.boolean()),
            },
            {
              name: "clientSource",
              value: request.clientSource,
              schema: s.optional(s.lazy(() => clientSourceSchema)),
            },
            { name: "spiffeId", value: request.spiffeId, schema: s.optional(s.string()) },
            {
              name: "spiffeBundleEndpoint",
              value: request.spiffeBundleEndpoint,
              schema: s.optional(s.string()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: clientSchema },
        errorFactory: ClientManagement.ClientUpdateApiError,
      },
      options,
    );
  }
}

export namespace ClientManagement {
  export type ClientAuthorizationDeleteApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** A client ID. */
    clientId: string;
    /** Unique user ID of an end-user. */
    subject: string;
  };

  export class ClientAuthorizationDeleteApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<ClientAuthorizationDeleteApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type ClientAuthorizationDeleteApiPostRequest = {
    /** A service ID. */
    serviceId: string;
    /** A client ID. */
    clientId: string;
    /** Unique user ID of an end-user. */
    subject: string;
  };

  export class ClientAuthorizationDeleteApiPostError extends ApiError {
    declare readonly payload: Declared<"result", Result> | Undeclared;

    static readonly errors: ErrorDecoders<ClientAuthorizationDeleteApiPostError> = [
      { on: 429, kind: "result", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type ClientAuthorizationDeleteBySubjectApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** A client ID. */
    clientId: string;
    /** Unique user ID of an end-user. */
    subject: string;
  };

  export class ClientAuthorizationDeleteBySubjectApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<ClientAuthorizationDeleteBySubjectApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type ClientAuthorizationGetListApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** Unique user ID of an end-user. */
    subject: string;
    /** Unique ID of a client developer. */
    developer?: string;
    /** Start index of search results (inclusive). The default value is 0. */
    start?: number;
    /** End index of search results (exclusive). The default value is 5. */
    end?: number;
  };

  export class ClientAuthorizationGetListApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<ClientAuthorizationGetListApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type ClientAuthorizationGetListApiPostRequest = {
    /** A service ID. */
    serviceId: string;
    /** Unique user ID of an end-user. */
    subject: string;
    /** Unique ID of a client developer. */
    developer?: string;
    /** Start index of search results (inclusive). */
    start?: number;
    /** End index of search results (exclusive). */
    end?: number;
  };

  export class ClientAuthorizationGetListApiPostError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<ClientAuthorizationGetListApiPostError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type ClientAuthorizationGetListBySubjectApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** Unique user ID of an end-user. */
    subject: string;
    /** Unique ID of a client developer. */
    developer?: string;
    /** Start index of search results (inclusive). The default value is 0. */
    start?: number;
    /** End index of search results (exclusive). The default value is 5. */
    end?: number;
  };

  export class ClientAuthorizationGetListBySubjectApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<ClientAuthorizationGetListBySubjectApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type ClientAuthorizationUpdateApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** A client ID. */
    clientId: string;
    /**
     * The subject (= unique identifier) of the end-user who has granted authorization to the client
     * application.
     */
    subject: string;
    /**
     * An array of new scopes. Optional. If a non-null value is given, the new scopes are set to all
     * existing access tokens. If an API call is made using `"Content-Type:
     * application/x-www-form-urlencoded"`, scope names listed in this request parameter should be
     * delimited by spaces (after form encoding, spaces are converted to `+`).
     */
    scopes?: string[];
  };

  export class ClientAuthorizationUpdateApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"error404", undefined>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<ClientAuthorizationUpdateApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type ClientCreateApiRequest = {
    /** A service ID. */
    serviceId: string;
    body?: Client;
  };

  export class ClientCreateApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<ClientCreateApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type ClientCursorListApiRequest = {
    /** The ID of the service to retrieve a list of clients from. */
    serviceId: number;
    /**
     * This should be set to the value of `nextCursor` from a previous call to this endpoint. Which
     * will retrieve the next set of clients available and receive the next available set. If this
     * is not provided the list operation will start from the beginning.
     */
    cursor?: string;
    /**
     * The maximum amount of results to return from this request. This value will be clamped between
     * 1 and the allowed maximum. The default will be used if no value is provided.
     */
    limit?: number;
    /**
     * Indicates whether the `totalCount` property should be calculated and included in the
     * response, otherwise it will be unset. For some large datasets this can be expensive and is
     * not always required to calculate.
     */
    includeTotalCount?: boolean;
  };

  export class ClientCursorListApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<ClientCursorListApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result4", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type ClientDeleteApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** The client ID. */
    clientId: string;
  };

  export class ClientDeleteApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"error404", undefined>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<ClientDeleteApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type ClientExtensionRequestablesScopesDeleteApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** A client ID. */
    clientId: string;
  };

  export class ClientExtensionRequestablesScopesDeleteApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<ClientExtensionRequestablesScopesDeleteApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type ClientExtensionRequestablesScopesGetApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** A client ID. */
    clientId: string;
  };

  export class ClientExtensionRequestablesScopesGetApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<ClientExtensionRequestablesScopesGetApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type ClientExtensionRequestablesScopesUpdateApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** A client ID. */
    clientId: string;
    body: ClientExtensionRequestableScopesUpdateRequest;
  };

  export class ClientExtensionRequestablesScopesUpdateApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<ClientExtensionRequestablesScopesUpdateApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type ClientExtensionRequestablesScopesUpdateApiPostRequest = {
    /** A service ID. */
    serviceId: string;
    /** A client ID. */
    clientId: string;
    body: ClientExtensionRequestableScopesUpdateRequest;
  };

  export class ClientExtensionRequestablesScopesUpdateApiPostError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<ClientExtensionRequestablesScopesUpdateApiPostError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type ClientFlagUpdateApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** A client ID. */
    clientIdentifier: string;
    /** The flag value to be set */
    clientLocked: boolean;
  };

  export class ClientFlagUpdateApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<ClientFlagUpdateApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type ClientGetApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** A client ID. */
    clientId: string;
  };

  export class ClientGetApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Declared<"result6", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<ClientGetApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 404, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result5", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result6", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type ClientGetListApiRequest = {
    /** A service ID. */
    serviceId: string;
    /**
     * The developer of client applications. The default value is null. If this parameter is not set
     * to `null`, client application of the specified developer are returned. Otherwise, all client
     * applications that belong to the service are returned.
     */
    developer?: string;
    /**
     * Start index (inclusive) of the result set. The default value is 0. Must not be a negative
     * number.
     */
    start?: number;
    /**
     * End index (exclusive) of the result set. The default value is 5. Must not be a negative
     * number.
     */
    end?: number;
  };

  export class ClientGetListApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<ClientGetListApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type ClientGrantedScopesDeleteApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** A client ID. */
    clientId: string;
    /** Unique user ID of an end-user. */
    subject: string;
  };

  export class ClientGrantedScopesDeleteApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<ClientGrantedScopesDeleteApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type ClientGrantedScopesDeleteBySubjectApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** A client ID. */
    clientId: string;
    /** Unique user ID of an end-user. */
    subject: string;
  };

  export class ClientGrantedScopesDeleteBySubjectApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<ClientGrantedScopesDeleteBySubjectApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type ClientGrantedScopesGetApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** A client ID. */
    clientId: string;
    /** Unique user ID of an end-user. */
    subject: string;
  };

  export class ClientGrantedScopesGetApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<ClientGrantedScopesGetApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type ClientGrantedScopesGetApiPostRequest = {
    /** A service ID. */
    serviceId: string;
    /** A client ID. */
    clientId: string;
    /** Unique user ID of an end-user. */
    subject: string;
  };

  export class ClientGrantedScopesGetApiPostError extends ApiError {
    declare readonly payload: Declared<"result", Result> | Undeclared;

    static readonly errors: ErrorDecoders<ClientGrantedScopesGetApiPostError> = [
      { on: 429, kind: "result", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type ClientGrantedScopesGetBySubjectApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** A client ID. */
    clientId: string;
    /** Unique user ID of an end-user. */
    subject: string;
  };

  export class ClientGrantedScopesGetBySubjectApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<ClientGrantedScopesGetBySubjectApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type ClientSearchApiRequest = {
    /** The ID of the service to retrieve a list of clients from. */
    serviceId: number;
    /**
     * The search query. See the description of this API for the supported syntax and fields.
     *
     * This parameter is required unless `cursor` is provided. When `cursor` is provided, this
     * parameter is ignored and the search query stored in the cursor is used instead.
     */
    q?: string;
    /**
     * This should be set to the value of `nextCursor` from a previous call to this endpoint, which
     * will retrieve the next set of clients matching the original search query. If this is not
     * provided the search will start from the beginning.
     */
    cursor?: string;
    /**
     * The maximum amount of results to return from this request. This value will be clamped between
     * 1 and the allowed maximum. The default will be used if no value is provided.
     */
    limit?: number;
    /**
     * Indicates whether the `totalCount` property should be calculated and included in the
     * response, otherwise it will be unset.
     *
     * **Warning:** Calculating the total count requires an additional query and reduces the
     * performance and throughput of this API. Only set this to `true` when the total count is
     * actually required, rather than on every request.
     */
    includeTotalCount?: boolean;
  };

  export class ClientSearchApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<ClientSearchApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type ClientSecretRefreshApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** The client ID or the client ID alias of a client. */
    clientIdentifier: string;
  };

  export class ClientSecretRefreshApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<ClientSecretRefreshApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type ClientSecretUpdateApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** The client ID or the client ID alias of a client. */
    clientIdentifier: string;
    /**
     * The new value of the client secret. Valid characters for a client secret are `A-Z`, `a-z`,
     * `0-9`, `-`, and `_`. The maximum length of a client secret is 86.
     */
    clientSecret: string;
  };

  export class ClientSecretUpdateApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<ClientSecretUpdateApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type ClientUpdateApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** A client ID. */
    clientIdTemplate: string;
    /** The sequential number of the client. The value of this property is assigned by Authlete. */
    number?: number;
    /**
     * The sequential number of the service of the client application. The value of this property is
     * assigned by Authlete.
     */
    serviceNumber?: number;
    /**
     * The name of the client application. This property corresponds to `client_name` in [OpenID
     * Connect Dynamic Client Registration 1.0, 2. Client
     * Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata).
     */
    clientName?: string;
    /**
     * Client names with language tags. If the client application has different names for different
     * languages, this property can be used to register the names.
     */
    clientNames?: TaggedValue[];
    /** The description about the client application. */
    description?: string;
    /**
     * Descriptions about the client application with language tags. If the client application has
     * different descriptions for different languages, this property can be used to register the
     * descriptions.
     */
    descriptions?: TaggedValue[];
    /**
     * The client identifier used in Authlete API calls. The value of this property is assigned by
     * Authlete.
     */
    clientId?: number;
    /**
     * The client secret. A random 512-bit value encoded by base64url (86 letters). The value of
     * this property is assigned by Authlete.
     */
    clientSecret?: string;
    /**
     * The value of the client's `client_id` property used in OAuth and OpenID Connect calls. By
     * default, this is a string version of the `clientId` property.
     */
    clientIdAlias?: string;
    /** Deprecated. Always set to `true`. */
    clientIdAliasEnabled?: boolean;
    /**
     * The client type, either `CONFIDENTIAL` or `PUBLIC`. See [RFC 6749, 2.1. Client
     * Types](https://datatracker.ietf.org/doc/html/rfc6749#section-2.1) for details.
     */
    clientType?: ClientType;
    /**
     * The application type. The value of this property affects the validation steps for a redirect
     * URI. See the description about `redirectUris` property for more details.
     */
    applicationType?: ApplicationType;
    /**
     * The URL pointing to the logo image of the client application.
     *
     * This property corresponds to `logo_uri` in [OpenID Connect Dynamic Client Registration 1.0,
     * 2. Client
     * Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata).
     */
    logoUri?: string;
    /**
     * Logo image URLs with language tags. If the client application has different logo images for
     * different languages, this property can be used to register URLs of the images.
     */
    logoUris?: TaggedValue[];
    /**
     * An array of email addresses of people responsible for the client application.
     *
     * This property corresponds to contacts in [OpenID Connect Dynamic Client Registration 1.0, 2.
     * Client
     * Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata).
     */
    contacts?: string[];
    /** The flag to indicate whether this client use TLS client certificate bound access tokens. */
    tlsClientCertificateBoundAccessTokens?: boolean;
    /**
     * The flag to indicate whether this client has been registered dynamically. For more details,
     * see [RFC 7591](https://datatracker.ietf.org/doc/html/rfc7591).
     */
    dynamicallyRegistered?: boolean;
    /**
     * The unique identifier string assigned by the client developer or software publisher used by
     * registration endpoints to identify the client software to be dynamically registered.
     *
     * This property corresponds to the `software_id metadata` defined in [2. Client
     * Metadata](https://datatracker.ietf.org/doc/html/rfc7591#section-2) of [RFC
     * 7591](https://datatracker.ietf.org/doc/html/rfc7591).
     */
    softwareId?: string;
    /** The unique identifier of the developer who created this client application. */
    developer?: string;
    /**
     * The version identifier string for the client software identified by the software ID.
     *
     * This property corresponds to the software_version metadata defined in [2. Client
     * Metadata](https://datatracker.ietf.org/doc/html/rfc7591#section-2) of [RFC
     * 7591](https://datatracker.ietf.org/doc/html/rfc7591).
     */
    softwareVersion?: string;
    /** The hash of the registration access token for this client. */
    registrationAccessTokenHash?: string;
    /**
     * The time at which this client was created. The value is represented as milliseconds since the
     * UNIX epoch (1970-01-01).
     */
    createdAt?: number;
    /**
     * The time at which this client was last modified. The value is represented as milliseconds
     * since the UNIX epoch (1970-01-01).
     */
    modifiedAt?: number;
    /**
     * A string array of grant types which the client application declares that it will restrict
     * itself to using. This property corresponds to `grant_types` in [OpenID Connect Dynamic Client
     * Registration 1.0, 2. Client
     * Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata).
     */
    grantTypes?: GrantType[];
    /**
     * A string array of response types which the client application declares that it will restrict
     * itself to using. This property corresponds to `response_types` in [OpenID Connect Dynamic
     * Client Registration 1.0, 2. Client
     * Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata).
     */
    responseTypes?: ResponseType[];
    /**
     * Redirect URIs that the client application uses to receive a response from the authorization
     * endpoint. Requirements for a redirect URI are as follows.
     */
    redirectUris?: string[];
    /**
     * The signature algorithm for JWT. This value is represented on 'alg' attribute of the header
     * of JWT.
     *
     * it's semantics depends upon where is this defined, for instance:
     *   - as service accessTokenSignAlg value, it defines that access token are JWT and the
     *     algorithm used to sign it. Check your [KB
     *     article](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/jwt-based-access-token).
     *   - as client authorizationSignAlg value, it represents the signature algorithm used when
     *     [creating a JARM
     *     response](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/enabling-jarm).
     *   - or as client requestSignAlg value, it specifies which is the expected signature used by
     *     [client on a Request
     *     Object](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/request-objects).
     */
    authorizationSignAlg?: JwsAlg | null;
    /**
     * this is the 'alg' header value for encrypted JWT tokens. Depending upon the context, this
     * refers to key transport scheme to be used by the client and by the server. For instance:
     * - as `authorizationEncryptionAlg` value, it refers to the encoding algorithm used by server
     *   for transporting they keys on JARM objects
     * - as `requestEncryptionAlg` value, it refers to the expected key transport encoding algorithm
     *   that server expect from client when encrypting a Request Object
     * - as `idTokenEncryptionAlg` value, it refers to the algorithm used by the server to key
     *   transport of id_tokens
     *
     * **Please note that some of the algorithms are more secure than others, some are not supported
     * very well cross platforms and some (like RSA1_5) is known to be weak**.
     */
    authorizationEncryptionAlg?: JweAlg | null;
    /**
     * This is the encryption algorithm to be used when encrypting a JWT on client or server side.
     * Depending upon the context, this refers to encryption done by the client or by the server.
     * For instance:
     *   - as `authorizationEncryptionEnc` value, it refers to the encryption algorithm used by
     *     server when creating a JARM response
     *   - as `requestEncryptionEnc` value, it refers to the expected encryption algorithm used by
     *     the client when encrypting a Request Object
     *   - as `idTokenEncryptionEnc` value, it refers to the algorithm used by the server to encrypt
     *     id_tokens
     */
    authorizationEncryptionEnc?: JweEnc | null;
    /**
     * The client authentication method that the client application declares that it uses at the
     * token endpoint. This property corresponds to `token_endpoint_auth_method` in [OpenID Connect
     * Dynamic Client Registration 1.0, 2. Client
     * Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata).
     */
    tokenAuthMethod?: ClientAuthMethod;
    /**
     * The signature algorithm for JWT. This value is represented on 'alg' attribute of the header
     * of JWT.
     *
     * it's semantics depends upon where is this defined, for instance:
     *   - as service accessTokenSignAlg value, it defines that access token are JWT and the
     *     algorithm used to sign it. Check your [KB
     *     article](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/jwt-based-access-token).
     *   - as client authorizationSignAlg value, it represents the signature algorithm used when
     *     [creating a JARM
     *     response](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/enabling-jarm).
     *   - or as client requestSignAlg value, it specifies which is the expected signature used by
     *     [client on a Request
     *     Object](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/request-objects).
     */
    tokenAuthSignAlg?: JwsAlg | null;
    /** The key ID of a JWK containing a self-signed certificate of this client. */
    selfSignedCertificateKeyId?: string;
    /**
     * The string representation of the expected subject distinguished name of the certificate this
     * client will use in mutual TLS authentication.
     *
     * See `tls_client_auth_subject_dn` in "Mutual TLS Profiles for OAuth Clients, 2.3. Dynamic
     * Client Registration" for details.
     */
    tlsClientAuthSubjectDn?: string;
    /**
     * The string representation of the expected DNS subject alternative name of the certificate
     * this client will use in mutual TLS authentication.
     *
     * See `tls_client_auth_san_dns` in "Mutual TLS Profiles for OAuth Clients, 2.3. Dynamic Client
     * Registration" for details.
     */
    tlsClientAuthSanDns?: string;
    /**
     * The string representation of the expected URI subject alternative name of the certificate
     * this client will use in mutual TLS authentication.
     *
     * See `tls_client_auth_san_uri` in "Mutual TLS Profiles for OAuth Clients, 2.3. Dynamic Client
     * Registration" for details.
     */
    tlsClientAuthSanUri?: string;
    /**
     * The string representation of the expected IP address subject alternative name of the
     * certificate this client will use in mutual TLS authentication.
     *
     * See `tls_client_auth_san_ip` in "Mutual TLS Profiles for OAuth Clients, 2.3. Dynamic Client
     * Registration" for details.
     */
    tlsClientAuthSanIp?: string;
    /**
     * The string representation of the expected email address subject alternative name of the
     * certificate this client will use in mutual TLS authentication.
     *
     * See `tls_client_auth_san_email` in "Mutual TLS Profiles for OAuth Clients, 2.3. Dynamic
     * Client Registration" for details.
     */
    tlsClientAuthSanEmail?: string;
    /**
     * The flag to indicate whether this client is required to use the pushed authorization request
     * endpoint. This property corresponds to the `require_pushed_authorization_requests` client
     * metadata defined in "OAuth 2.0 Pushed Authorization Requests".
     */
    parRequired?: boolean;
    /**
     * The flag to indicate whether authorization requests from this client are always required to
     * utilize a request object by using either `request` or `request_uri` request parameter.
     *
     * If this flag is set to `true` and the service's `traditionalRequestObjectProcessingApplied`
     * is set to `false`, authorization requests from this client are processed as if
     * `require_signed_request_object` client metadata of this client is `true`. The metadata is
     * defined in "JAR (JWT Secured Authorization Request)".
     */
    requestObjectRequired?: boolean;
    /**
     * The signature algorithm for JWT. This value is represented on 'alg' attribute of the header
     * of JWT.
     *
     * it's semantics depends upon where is this defined, for instance:
     *   - as service accessTokenSignAlg value, it defines that access token are JWT and the
     *     algorithm used to sign it. Check your [KB
     *     article](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/jwt-based-access-token).
     *   - as client authorizationSignAlg value, it represents the signature algorithm used when
     *     [creating a JARM
     *     response](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/enabling-jarm).
     *   - or as client requestSignAlg value, it specifies which is the expected signature used by
     *     [client on a Request
     *     Object](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/request-objects).
     */
    requestSignAlg?: JwsAlg | null;
    /**
     * this is the 'alg' header value for encrypted JWT tokens. Depending upon the context, this
     * refers to key transport scheme to be used by the client and by the server. For instance:
     * - as `authorizationEncryptionAlg` value, it refers to the encoding algorithm used by server
     *   for transporting they keys on JARM objects
     * - as `requestEncryptionAlg` value, it refers to the expected key transport encoding algorithm
     *   that server expect from client when encrypting a Request Object
     * - as `idTokenEncryptionAlg` value, it refers to the algorithm used by the server to key
     *   transport of id_tokens
     *
     * **Please note that some of the algorithms are more secure than others, some are not supported
     * very well cross platforms and some (like RSA1_5) is known to be weak**.
     */
    requestEncryptionAlg?: JweAlg | null;
    /**
     * This is the encryption algorithm to be used when encrypting a JWT on client or server side.
     * Depending upon the context, this refers to encryption done by the client or by the server.
     * For instance:
     *   - as `authorizationEncryptionEnc` value, it refers to the encryption algorithm used by
     *     server when creating a JARM response
     *   - as `requestEncryptionEnc` value, it refers to the expected encryption algorithm used by
     *     the client when encrypting a Request Object
     *   - as `idTokenEncryptionEnc` value, it refers to the algorithm used by the server to encrypt
     *     id_tokens
     */
    requestEncryptionEnc?: JweEnc | null;
    /**
     * An array of URLs each of which points to a request object.
     *
     * Authlete requires that URLs used as values for `request_uri` request parameter be
     * pre-registered. This property is used for the pre-registration. See [OpenID Connect Core 1.0,
     * 6.2. Passing a Request Object by
     * Reference](https://openid.net/specs/openid-connect-core-1_0.html#RequestUriParameter) for
     * details.
     */
    requestUris?: string[];
    /**
     * The default maximum authentication age in seconds. This value is used when an authorization
     * request from the client application does not have `max_age` request parameter.
     *
     * This property corresponds to `default_max_age` in [OpenID Connect Dynamic Client Registration
     * 1.0, 2. Client
     * Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata).
     */
    defaultMaxAge?: number;
    /**
     * The default ACRs (Authentication Context Class References). This value is used when an
     * authorization request from the client application has neither `acr_values` request parameter
     * nor `acr` claim in claims request parameter.
     */
    defaultAcrs?: string[];
    /**
     * The signature algorithm for JWT. This value is represented on 'alg' attribute of the header
     * of JWT.
     *
     * it's semantics depends upon where is this defined, for instance:
     *   - as service accessTokenSignAlg value, it defines that access token are JWT and the
     *     algorithm used to sign it. Check your [KB
     *     article](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/jwt-based-access-token).
     *   - as client authorizationSignAlg value, it represents the signature algorithm used when
     *     [creating a JARM
     *     response](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/enabling-jarm).
     *   - or as client requestSignAlg value, it specifies which is the expected signature used by
     *     [client on a Request
     *     Object](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/request-objects).
     */
    idTokenSignAlg?: JwsAlg | null;
    /**
     * this is the 'alg' header value for encrypted JWT tokens. Depending upon the context, this
     * refers to key transport scheme to be used by the client and by the server. For instance:
     * - as `authorizationEncryptionAlg` value, it refers to the encoding algorithm used by server
     *   for transporting they keys on JARM objects
     * - as `requestEncryptionAlg` value, it refers to the expected key transport encoding algorithm
     *   that server expect from client when encrypting a Request Object
     * - as `idTokenEncryptionAlg` value, it refers to the algorithm used by the server to key
     *   transport of id_tokens
     *
     * **Please note that some of the algorithms are more secure than others, some are not supported
     * very well cross platforms and some (like RSA1_5) is known to be weak**.
     */
    idTokenEncryptionAlg?: JweAlg | null;
    /**
     * This is the encryption algorithm to be used when encrypting a JWT on client or server side.
     * Depending upon the context, this refers to encryption done by the client or by the server.
     * For instance:
     *   - as `authorizationEncryptionEnc` value, it refers to the encryption algorithm used by
     *     server when creating a JARM response
     *   - as `requestEncryptionEnc` value, it refers to the expected encryption algorithm used by
     *     the client when encrypting a Request Object
     *   - as `idTokenEncryptionEnc` value, it refers to the algorithm used by the server to encrypt
     *     id_tokens
     */
    idTokenEncryptionEnc?: JweEnc | null;
    /**
     * The flag to indicate whether this client requires `auth_time` claim to be embedded in the ID
     * token.
     *
     * This property corresponds to `require_auth_time` in [OpenID Connect Dynamic Client
     * Registration 1.0, 2. Client
     * Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata).
     */
    authTimeRequired?: boolean;
    /**
     * The subject type that the client application requests. Details about the subject type are
     * described in [OpenID Connect Core 1.0, 8. Subjct Identifier
     * Types](https://openid.net/specs/openid-connect-core-1_0.html#SubjectIDTypes).
     *
     * This property corresponds to `subject_type` in [OpenID Connect Dynamic Client Registration
     * 1.0, 2. Client
     * Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata).
     */
    subjectType?: SubjectType;
    /**
     * The value of the sector identifier URI. This represents the `sector_identifier_uri` client
     * metadata which is defined in [OpenID Connect Dynamic Client Registration 1.0, 2. Client
     * Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata)
     */
    sectorIdentifierUri?: string;
    /**
     * The sector identifier host component as derived from either the `sector_identifier_uri` or
     * the registered redirect URI. If no `sector_identifier_uri` is registered and multiple
     * redirect URIs are also registered, the value of this property is `null`.
     */
    derivedSectorIdentifier?: string;
    /**
     * The URL pointing to the JWK Set of the client application. The content pointed to by the URL
     * is JSON which complies with the format described in [JSON Web Key (JWK), 5. JWK Set
     * Format](https://datatracker.ietf.org/doc/html/rfc7517#section-5). The JWK Set must not
     * include private keys of the client application.
     */
    jwksUri?: string;
    /**
     * The content of the JWK Set of the client application. The format is described in [JSON Web
     * Key (JWK), 5. JWK Set Format](https://datatracker.ietf.org/doc/html/rfc7517#section-5). The
     * JWK Set must not include private keys of the client application.
     */
    jwks?: string;
    /**
     * The signature algorithm for JWT. This value is represented on 'alg' attribute of the header
     * of JWT.
     *
     * it's semantics depends upon where is this defined, for instance:
     *   - as service accessTokenSignAlg value, it defines that access token are JWT and the
     *     algorithm used to sign it. Check your [KB
     *     article](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/jwt-based-access-token).
     *   - as client authorizationSignAlg value, it represents the signature algorithm used when
     *     [creating a JARM
     *     response](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/enabling-jarm).
     *   - or as client requestSignAlg value, it specifies which is the expected signature used by
     *     [client on a Request
     *     Object](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/request-objects).
     */
    userInfoSignAlg?: JwsAlg | null;
    /**
     * this is the 'alg' header value for encrypted JWT tokens. Depending upon the context, this
     * refers to key transport scheme to be used by the client and by the server. For instance:
     * - as `authorizationEncryptionAlg` value, it refers to the encoding algorithm used by server
     *   for transporting they keys on JARM objects
     * - as `requestEncryptionAlg` value, it refers to the expected key transport encoding algorithm
     *   that server expect from client when encrypting a Request Object
     * - as `idTokenEncryptionAlg` value, it refers to the algorithm used by the server to key
     *   transport of id_tokens
     *
     * **Please note that some of the algorithms are more secure than others, some are not supported
     * very well cross platforms and some (like RSA1_5) is known to be weak**.
     */
    userInfoEncryptionAlg?: JweAlg | null;
    /**
     * This is the encryption algorithm to be used when encrypting a JWT on client or server side.
     * Depending upon the context, this refers to encryption done by the client or by the server.
     * For instance:
     *   - as `authorizationEncryptionEnc` value, it refers to the encryption algorithm used by
     *     server when creating a JARM response
     *   - as `requestEncryptionEnc` value, it refers to the expected encryption algorithm used by
     *     the client when encrypting a Request Object
     *   - as `idTokenEncryptionEnc` value, it refers to the algorithm used by the server to encrypt
     *     id_tokens
     */
    userInfoEncryptionEnc?: JweEnc | null;
    /**
     * The URL which a third party can use to initiate a login by the client application.
     *
     * This property corresponds to `initiate_login_uri` in [OpenID Connect Dynamic Client
     * Registration 1.0, 2. Client
     * Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata).
     */
    loginUri?: string;
    /**
     * The URL pointing to the "Terms Of Service" page.
     *
     * This property corresponds to `tos_uri` in [OpenID Connect Dynamic Client Registration 1.0, 2.
     * Client
     * Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata).
     */
    tosUri?: string;
    /**
     * URLs of "Terms Of Service" pages with language tags.
     *
     * If the client application has different "Terms Of Service" pages for different languages,
     * this property can be used to register the URLs.
     */
    tosUris?: TaggedValue[];
    /**
     * The URL pointing to the page which describes the policy as to how end-user's profile data is
     * used.
     *
     * This property corresponds to `policy_uri` in [OpenID Connect Dynamic Client Registration 1.0,
     * 2. Client
     * Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata).
     */
    policyUri?: string;
    /**
     * URLs of policy pages with language tags. If the client application has different policy pages
     * for different languages, this property can be used to register the URLs.
     */
    policyUris?: TaggedValue[];
    /**
     * The URL pointing to the home page of the client application.
     *
     * This property corresponds to `client_uri` in [OpenID Connect Dynamic Client Registration 1.0,
     * 2. Client
     * Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata).
     */
    clientUri?: string;
    /**
     * Home page URLs with language tags. If the client application has different home pages for
     * different languages, this property can be used to register the URLs.
     */
    clientUris?: TaggedValue[];
    /**
     * The backchannel token delivery mode.
     *
     * This property corresponds to the `backchannel_token_delivery_mode` metadata. The backchannel
     * token delivery mode is defined in the specification of "CIBA (Client Initiated Backchannel
     * Authentication)".
     */
    bcDeliveryMode?: string;
    /**
     * The backchannel client notification endpoint.
     *
     * This property corresponds to the `backchannel_client_notification_endpoint` metadata. The
     * backchannel token delivery mode is defined in the specification of "CIBA (Client Initiated
     * Backchannel Authentication)".
     */
    bcNotificationEndpoint?: string;
    /**
     * The signature algorithm for JWT. This value is represented on 'alg' attribute of the header
     * of JWT.
     *
     * it's semantics depends upon where is this defined, for instance:
     *   - as service accessTokenSignAlg value, it defines that access token are JWT and the
     *     algorithm used to sign it. Check your [KB
     *     article](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/jwt-based-access-token).
     *   - as client authorizationSignAlg value, it represents the signature algorithm used when
     *     [creating a JARM
     *     response](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/enabling-jarm).
     *   - or as client requestSignAlg value, it specifies which is the expected signature used by
     *     [client on a Request
     *     Object](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/request-objects).
     */
    bcRequestSignAlg?: JwsAlg | null;
    /**
     * The boolean flag to indicate whether a user code is required when this client makes a
     * backchannel authentication request.
     *
     * This property corresponds to the `backchannel_user_code_parameter` metadata.
     */
    bcUserCodeRequired?: boolean;
    /**
     * The backchannel logout URI for this client. Used by the service to deliver logout tokens when
     * OpenID Connect Back-Channel Logout 1.0 is triggered.
     */
    backchannelLogoutUri?: string;
    /**
     * The flag indicating whether the client requires that a `sid` (session ID) claim be included
     * in the logout token sent to `backchannelLogoutUri`.
     */
    backchannelLogoutSessionRequired?: boolean;
    /** The attributes of this client. */
    attributes?: Pair[];
    extension?: ClientExtension;
    /**
     * The authorization details types that this client may use as values of the `type` field in
     * `authorization_details`.
     *
     * This property corresponds to the `authorization_details_types` metadata. See [OAuth 2.0 Rich
     * Authorization Requests (RAR)](https://datatracker.ietf.org/doc/draft-ietf-oauth-rar/) for
     * details.
     *
     * Note that the property name was renamed from authorizationDataTypes to
     * authorizationDetailsTypes to align with the change made by the 5th draft of the RAR
     * specification.
     */
    authorizationDetailsTypes?: string[];
    /** The custom client metadata in JSON format. */
    customMetadata?: string;
    /**
     * The flag indicating whether encryption of request object is required when the request object
     * is passed through the front channel.
     */
    frontChannelRequestObjectEncryptionRequired?: boolean;
    /**
     * The flag indicating whether the JWE alg of encrypted request object must match the
     * `request_object_encryption_alg` client metadata.
     */
    requestObjectEncryptionAlgMatchRequired?: boolean;
    /**
     * The flag indicating whether the JWE enc of encrypted request object must match the
     * `request_object_encryption_enc` client metadata.
     */
    requestObjectEncryptionEncMatchRequired?: boolean;
    /**
     * The digest algorithm that this client requests the server to use when it computes digest
     * values of [external
     * attachments](https://openid.net/specs/openid-connect-4-identity-assurance-1_0.html#name-external-attachments),
     * which may be referenced from within ID tokens or userinfo responses (or any place that can
     * have the `verified_claims` claim). Possible values are listed in the [Hash Algorithm
     * Registry](https://www.iana.org/assignments/named-information/named-information.xhtml#hash-alg)
     * of IANA (Internet Assigned Numbers Authority), but the server does not necessarily support
     * all the values there. When this property is omitted, `sha-256` is used as the default
     * algorithm. This property corresponds to the `digest_algorithm` client metadata which was
     * defined by the third implementer's draft of [OpenID Connect for Identity Assurance
     * 1.0](https://openid.net/specs/openid-connect-4-identity-assurance-1_0.html).
     */
    digestAlgorithm?: string;
    /**
     * If `Enabled` is selected, an attempt to issue a new access token invalidates existing access
     * tokens that are associated with the same combination of subject and client.
     *
     * Note that, however, attempts by Client Credentials Flow do not invalidate existing access
     * tokens because access tokens issued by Client Credentials Flow are not associated with any
     * end-user's subject.
     *
     * Even if `Disabled` is selected here, single access token per subject is effective if
     * `singleAccessTokenPerSubject` of the `Service` this client belongs to is Enabled.
     */
    singleAccessTokenPerSubject?: boolean;
    /**
     * The flag to indicate whether the use of Proof Key for Code Exchange (PKCE) is always required
     * for authorization requests by Authorization Code Flow.
     *
     * If `true`, `code_challenge` request parameter is always required for authorization requests
     * using Authorization Code Flow.
     *
     * See [RFC 7636](https://tools.ietf.org/html/rfc7636) (Proof Key for Code Exchange by OAuth
     * Public Clients) for details about `code_challenge` request parameter.
     */
    pkceRequired?: boolean;
    /**
     * The flag to indicate whether `S256` is always required as the code challenge method whenever
     * [PKCE (RFC 7636)](https://tools.ietf.org/html/rfc7636) is used.
     *
     * If this flag is set to `true`, `code_challenge_method=S256` must be included in the
     * authorization request whenever it includes the `code_challenge` request parameter. Neither
     * omission of the `code_challenge_method` request parameter nor use of plain
     * (`code_challenge_method=plain`) is allowed.
     */
    pkceS256Required?: boolean;
    /** If the DPoP is required for this client */
    dpopRequired?: boolean;
    /**
     * The flag indicating whether this client was registered by the "automatic" client registration
     * of OIDC Federation.
     */
    automaticallyRegistered?: boolean;
    /**
     * The flag indicating whether this client was registered by the "explicit" client registration
     * of OIDC Federation.
     */
    explicitlyRegistered?: boolean;
    /** The flag indicating whether this service signs responses from the resource server. */
    rsRequestSigned?: boolean;
    /**
     * The key ID of a JWK containing the public key used by this client to sign requests to the
     * resource server.
     */
    rsSignedRequestKeyId?: string;
    /** The client registration types that the client has declared it may use. */
    clientRegistrationTypes?: ClientRegistrationType[];
    /**
     * The human-readable name representing the organization that manages this client. This property
     * corresponds to the organization_name client metadata that is defined in OpenID Connect
     * Federation 1.0.
     */
    organizationName?: string;
    /**
     * The URI of the endpoint that returns this client's JWK Set document in the JWT format. This
     * property corresponds to the `signed_jwks_uri` client metadata defined in OpenID Connect
     * Federation 1.0.
     */
    signedJwksUri?: string;
    /** the entity ID of this client. */
    entityId?: string;
    /**
     * The entity ID of the trust anchor of the trust chain that was used when this client was
     * registered or updated by the mechanism defined in OpenID Connect Federation 1.0
     */
    trustAnchorId?: string;
    /**
     * The trust chain that was used when this client was registered or updated by the mechanism
     * defined in OpenID Connect Federation 1.0
     */
    trustChain?: string[];
    /**
     * the expiration time of the trust chain that was used when this client was registered or
     * updated by the mechanism defined in OpenID Connect Federation 1.0. The value is represented
     * as milliseconds elapsed since the Unix epoch (1970-01-01).
     */
    trustChainExpiresAt?: number;
    /**
     * the time at which the trust chain was updated by the mechanism defined in OpenID Connect
     * Federation 1.0
     */
    trustChainUpdatedAt?: number;
    /** The flag which indicates whether this client is locked. */
    locked?: boolean;
    /**
     * The URL of the credential offer endpoint at which this client (wallet) receives a credential
     * offer from the credential issuer.
     */
    credentialOfferEndpoint?: string;
    /** The FAPI modes for this client. */
    fapiModes?: FapiMode[];
    /** The response modes that this client may use. */
    responseModes?: ResponseMode[];
    /** True if credential responses to this client must be always encrypted. */
    credentialResponseEncryptionRequired?: boolean;
    /**
     * The flag indicating whether the client intends to prefer mutual TLS endpoints over non-MTLS
     * endpoints.
     *
     * This property corresponds to the `use_mtls_endpoint_aliases` client metadata that is defined
     * in [FAPI 2.0 Security Profile, 8.1.1.
     * use_mtls_endpoint_aliases](https://openid.bitbucket.io/fapi/fapi-2_0-security-profile.html#section-8.1.1).
     */
    mtlsEndpointAliasesUsed?: boolean;
    /** The flag indicating whether this client is in scope for token migration operations. */
    inScopeForTokenMigration?: boolean;
    /** Location of the Client ID Metadata Document that was used for this client. */
    metadataDocumentLocation?: string;
    /** Expiration time of the metadata document (UNIX time in milliseconds). */
    metadataDocumentExpiresAt?: number;
    /** Last-updated time of the metadata document (UNIX time in milliseconds). */
    metadataDocumentUpdatedAt?: number;
    /** Indicates whether this client was discovered via a Client ID Metadata Document. */
    discoveredByMetadataDocument?: boolean;
    /** Source of this client record. */
    clientSource?: ClientSource;
    /**
     * The SPIFFE ID of the client. Used for SPIFFE-based client authentication (`SPIFFE_JWT`).
     * Corresponds to the `spiffe_id` client metadata parameter.
     */
    spiffeId?: string;
    /**
     * The endpoint URL of the SPIFFE bundle for this client. Used to fetch the SPIFFE trust bundle
     * for validating JWT-SVIDs. Corresponds to the `spiffe_bundle_endpoint` client metadata
     * parameter.
     */
    spiffeBundleEndpoint?: string;
  };

  export class ClientUpdateApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"error404", undefined>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<ClientUpdateApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }
}
