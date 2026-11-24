import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { ApiError, type Declared, type Undeclared } from "./core/api-error.js";
import type { ApiPromise } from "./core/api-promise.js";
import type { RequestOptions } from "./core/api-request.js";
import { anyAuth } from "./core/auth/schemes.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import type { ErrorDecoders } from "./core/response-decoder.js";
import * as host from "./core/runtime-environment.js";
import { uuid } from "./core/uuid.js";
import * as s from "./core/validation/index.js";
import {
  batchCreateRepositoriesRequestSchema,
  type BatchCreateRepositoriesRequest,
} from "./models/batch-create-repositories-request.js";
import { connectionSchema, type Connection } from "./models/connection.js";
import { fetchGitRefsResponseSchema, type FetchGitRefsResponse } from "./models/fetch-git-refs-response.js";
import {
  fetchLinkableRepositoriesResponseSchema,
  type FetchLinkableRepositoriesResponse,
} from "./models/fetch-linkable-repositories-response.js";
import {
  fetchReadTokenResponseSchema,
  type FetchReadTokenResponse,
} from "./models/fetch-read-token-response.js";
import {
  fetchReadWriteTokenResponseSchema,
  type FetchReadWriteTokenResponse,
} from "./models/fetch-read-write-token-response.js";
import { googleRpcErrorSchema, type GoogleRpcError } from "./models/google-rpc-error.js";
import { httpBodySchema, type HttpBody } from "./models/http-body.js";
import {
  listConnectionsResponseSchema,
  type ListConnectionsResponse,
} from "./models/list-connections-response.js";
import { listLocationsResponseSchema, type ListLocationsResponse } from "./models/list-locations-response.js";
import {
  listRepositoriesResponseSchema,
  type ListRepositoriesResponse,
} from "./models/list-repositories-response.js";
import { locationSchema, type Location } from "./models/location.js";
import { operationSchema, type Operation } from "./models/operation.js";
import { policySchema, type Policy } from "./models/policy.js";
import { refTypeSchema, type RefType } from "./models/ref-type.js";
import { repositorySchema, type Repository } from "./models/repository.js";
import { setIamPolicyRequestSchema, type SetIamPolicyRequest } from "./models/set-iam-policy-request.js";
import {
  testIamPermissionsRequestSchema,
  type TestIamPermissionsRequest,
} from "./models/test-iam-permissions-request.js";
import {
  testIamPermissionsResponseSchema,
  type TestIamPermissionsResponse,
} from "./models/test-iam-permissions-response.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Generated from Google's published Discovery document for Cloud Build API (cloudbuild v2, revision
 * 20261106). 22 operation(s).
 */
export class GoogleCloudBuildClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "GOOGLE_CLOUD_BUILD_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "GoogleCloudBuildClient/2.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "2.0.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options, this.#servers, this.#rawClient);
  }

  /**
   * Create connections
   *
   * @remarks
   * Creates a Connection.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsCreateError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudBuildError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudbuildProjectsLocationsConnectionsCreate(
    request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/projects/{projectsId}/locations/{locationsId}/connections"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [{ name: "connectionId", value: request.connectionId, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: connectionSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsCreateError,
      },
      options,
    );
  }

  /**
   * Delete connections
   *
   * @remarks
   * Deletes a single connection.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsDeleteError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudBuildError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudbuildProjectsLocationsConnectionsDelete(
    request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "connectionsId", value: request.connectionsId, schema: s.string() },
        ],
        query: [
          { name: "etag", value: request.etag, schema: s.optional(s.string()) },
          { name: "validateOnly", value: request.validateOnly, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsDeleteError,
      },
      options,
    );
  }

  /**
   * Fetch linkable repositories connections
   *
   * @remarks
   * FetchLinkableRepositories get repositories from SCM that are accessible and could be added to
   * the connection.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudBuildError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudbuildProjectsLocationsConnectionsFetchLinkableRepositories(
    request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    FetchLinkableRepositoriesResponse,
    GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}:fetchLinkableRepositories",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "connectionsId", value: request.connectionsId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fetchLinkableRepositoriesResponseSchema },
        errorFactory:
          GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesError,
      },
      options,
    );
  }

  /**
   * Get connections
   *
   * @remarks
   * Gets details of a single connection.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsGetError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudBuildError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudbuildProjectsLocationsConnectionsGet(
    request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Connection, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "connectionsId", value: request.connectionsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: connectionSchema },
        errorFactory: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsGetError,
      },
      options,
    );
  }

  /**
   * Get iam policy connections
   *
   * @remarks
   * Gets the access control policy for a resource. Returns an empty policy if the resource exists
   * and does not have a policy set.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsGetIamPolicyError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudBuildError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudbuildProjectsLocationsConnectionsGetIamPolicy(
    request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsGetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<Policy, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsGetIamPolicyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}:getIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "connectionsId", value: request.connectionsId, schema: s.string() },
        ],
        query: [
          {
            name: "options.requestedPolicyVersion",
            value: request.optionsRequestedPolicyVersion,
            schema: s.optional(s.int()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: policySchema },
        errorFactory: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsGetIamPolicyError,
      },
      options,
    );
  }

  /**
   * List connections
   *
   * @remarks
   * Lists Connections in a given project and location.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsListError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudBuildError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudbuildProjectsLocationsConnectionsList(
    request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListConnectionsResponse,
    GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/projects/{projectsId}/locations/{locationsId}/connections"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          {
            name: "returnPartialSuccess",
            value: request.returnPartialSuccess,
            schema: s.optional(s.boolean()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listConnectionsResponseSchema },
        errorFactory: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsListError,
      },
      options,
    );
  }

  /**
   * Patch connections
   *
   * @remarks
   * Updates a single connection.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsPatchError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudBuildError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudbuildProjectsLocationsConnectionsPatch(
    request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "connectionsId", value: request.connectionsId, schema: s.string() },
        ],
        query: [
          { name: "allowMissing", value: request.allowMissing, schema: s.optional(s.boolean()) },
          { name: "etag", value: request.etag, schema: s.optional(s.string()) },
          { name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: connectionSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsPatchError,
      },
      options,
    );
  }

  /**
   * Process webhook connections
   *
   * @remarks
   * ProcessWebhook is called by the external SCM for notifying of events.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsProcessWebhookError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudBuildError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudbuildProjectsLocationsConnectionsProcessWebhook(
    request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsProcessWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, unknown>,
    GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsProcessWebhookError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v2/projects/{projectsId}/locations/{locationsId}/connections:processWebhook",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [{ name: "webhookKey", value: request.webhookKey, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: httpBodySchema },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsProcessWebhookError,
      },
      options,
    );
  }

  /**
   * Access read token repositories
   *
   * @remarks
   * Fetches read token of a given repository.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudBuildError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudbuildProjectsLocationsConnectionsRepositoriesAccessReadToken(
    request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<
    FetchReadTokenResponse,
    GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories/{repositoriesId}:accessReadToken",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "connectionsId", value: request.connectionsId, schema: s.string() },
          { name: "repositoriesId", value: request.repositoriesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: fetchReadTokenResponseSchema },
        errorFactory:
          GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenError,
      },
      options,
    );
  }

  /**
   * Access read write token repositories
   *
   * @remarks
   * Fetches read/write token of a given repository.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudBuildError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteToken(
    request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<
    FetchReadWriteTokenResponse,
    GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories/{repositoriesId}:accessReadWriteToken",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "connectionsId", value: request.connectionsId, schema: s.string() },
          { name: "repositoriesId", value: request.repositoriesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: fetchReadWriteTokenResponseSchema },
        errorFactory:
          GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenError,
      },
      options,
    );
  }

  /**
   * Batch create repositories
   *
   * @remarks
   * Creates multiple repositories inside a connection.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudBuildError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudbuildProjectsLocationsConnectionsRepositoriesBatchCreate(
    request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Operation,
    GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories:batchCreate",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "connectionsId", value: request.connectionsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: batchCreateRepositoriesRequestSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory:
          GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateError,
      },
      options,
    );
  }

  /**
   * Create repositories
   *
   * @remarks
   * Creates a Repository.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesCreateError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudBuildError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudbuildProjectsLocationsConnectionsRepositoriesCreate(
    request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Operation,
    GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "connectionsId", value: request.connectionsId, schema: s.string() },
        ],
        query: [{ name: "repositoryId", value: request.repositoryId, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: repositorySchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesCreateError,
      },
      options,
    );
  }

  /**
   * Delete repositories
   *
   * @remarks
   * Deletes a single repository.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesDeleteError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudBuildError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudbuildProjectsLocationsConnectionsRepositoriesDelete(
    request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Operation,
    GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesDeleteError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories/{repositoriesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "connectionsId", value: request.connectionsId, schema: s.string() },
          { name: "repositoriesId", value: request.repositoriesId, schema: s.string() },
        ],
        query: [
          { name: "etag", value: request.etag, schema: s.optional(s.string()) },
          { name: "validateOnly", value: request.validateOnly, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesDeleteError,
      },
      options,
    );
  }

  /**
   * Fetch git refs repositories
   *
   * @remarks
   * Fetch the list of branches or tags for a given repository.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudBuildError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefs(
    request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    FetchGitRefsResponse,
    GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories/{repositoriesId}:fetchGitRefs",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "connectionsId", value: request.connectionsId, schema: s.string() },
          { name: "repositoriesId", value: request.repositoriesId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "refType", value: request.refType, schema: s.optional(s.lazy(() => refTypeSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fetchGitRefsResponseSchema },
        errorFactory:
          GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsError,
      },
      options,
    );
  }

  /**
   * Get repositories
   *
   * @remarks
   * Gets details of a single repository.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudBuildError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudbuildProjectsLocationsConnectionsRepositoriesGet(
    request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Repository,
    GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories/{repositoriesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "connectionsId", value: request.connectionsId, schema: s.string() },
          { name: "repositoriesId", value: request.repositoriesId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: repositorySchema },
        errorFactory: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesGetError,
      },
      options,
    );
  }

  /**
   * List repositories
   *
   * @remarks
   * Lists Repositories in a given connection.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesListError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudBuildError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudbuildProjectsLocationsConnectionsRepositoriesList(
    request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListRepositoriesResponse,
    GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "connectionsId", value: request.connectionsId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          {
            name: "returnPartialSuccess",
            value: request.returnPartialSuccess,
            schema: s.optional(s.boolean()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listRepositoriesResponseSchema },
        errorFactory: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesListError,
      },
      options,
    );
  }

  /**
   * Set iam policy connections
   *
   * @remarks
   * Sets the access control policy on the specified resource. Replaces any existing policy. Can
   * return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsSetIamPolicyError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudBuildError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudbuildProjectsLocationsConnectionsSetIamPolicy(
    request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsSetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<Policy, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsSetIamPolicyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}:setIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "connectionsId", value: request.connectionsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: setIamPolicyRequestSchema },
      },
      {
        success: { kind: "json", schema: policySchema },
        errorFactory: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsSetIamPolicyError,
      },
      options,
    );
  }

  /**
   * Test iam permissions connections
   *
   * @remarks
   * Returns permissions that a caller has on the specified resource. If the resource does not
   * exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This
   * operation is designed to be used for building permission-aware UIs and command-line tools, not
   * for authorization checking. This operation may "fail open" without warning.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsTestIamPermissionsError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudBuildError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudbuildProjectsLocationsConnectionsTestIamPermissions(
    request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsTestIamPermissionsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TestIamPermissionsResponse,
    GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsTestIamPermissionsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}:testIamPermissions",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "connectionsId", value: request.connectionsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: testIamPermissionsRequestSchema },
      },
      {
        success: { kind: "json", schema: testIamPermissionsResponseSchema },
        errorFactory: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsTestIamPermissionsError,
      },
      options,
    );
  }

  /**
   * Get locations
   *
   * @remarks
   * Gets information about a location.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudBuildClient.CloudbuildProjectsLocationsGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudBuildError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudbuildProjectsLocationsGet(
    request: GoogleCloudBuildClient.CloudbuildProjectsLocationsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Location, GoogleCloudBuildClient.CloudbuildProjectsLocationsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/projects/{projectsId}/locations/{locationsId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: locationSchema },
        errorFactory: GoogleCloudBuildClient.CloudbuildProjectsLocationsGetError,
      },
      options,
    );
  }

  /**
   * List locations
   *
   * @remarks
   * Lists information about the supported locations for this service. This method lists locations
   * based on the resource scope provided in the ListLocationsRequest.name field: * **Global
   * locations**: If `name` is empty, the method lists the public locations available to all
   * projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`,
   * the method lists locations visible to that specific project. This includes public, private, or
   * other project-specific locations enabled for the project. For gRPC and client library
   * implementations, the resource name is passed as the `name` field. For direct service calls, the
   * resource name is incorporated into the request path based on the specific service
   * implementation and version.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudBuildClient.CloudbuildProjectsLocationsListError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudBuildError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudbuildProjectsLocationsList(
    request: GoogleCloudBuildClient.CloudbuildProjectsLocationsListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListLocationsResponse, GoogleCloudBuildClient.CloudbuildProjectsLocationsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/projects/{projectsId}/locations"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "projectsId", value: request.projectsId, schema: s.string() }],
        query: [
          {
            name: "extraLocationTypes",
            value: request.extraLocationTypes,
            schema: s.optional(s.array(s.string())),
          },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listLocationsResponseSchema },
        errorFactory: GoogleCloudBuildClient.CloudbuildProjectsLocationsListError,
      },
      options,
    );
  }

  /**
   * Cancel operations
   *
   * @remarks
   * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to
   * cancel the operation, but success is not guaranteed. If the server doesn't support this method,
   * it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other
   * methods to check whether the cancellation succeeded or whether the operation completed despite
   * cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an
   * operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to
   * `Code.CANCELLED`.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudBuildClient.CloudbuildProjectsLocationsOperationsCancelError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudBuildError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudbuildProjectsLocationsOperationsCancel(
    request: GoogleCloudBuildClient.CloudbuildProjectsLocationsOperationsCancelRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, unknown>,
    GoogleCloudBuildClient.CloudbuildProjectsLocationsOperationsCancelError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v2/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "operationsId", value: request.operationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GoogleCloudBuildClient.CloudbuildProjectsLocationsOperationsCancelError,
      },
      options,
    );
  }

  /**
   * Get operations
   *
   * @remarks
   * Gets the latest state of a long-running operation. Clients can use this method to poll the
   * operation result at intervals as recommended by the API service.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudBuildClient.CloudbuildProjectsLocationsOperationsGetError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudBuildError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudbuildProjectsLocationsOperationsGet(
    request: GoogleCloudBuildClient.CloudbuildProjectsLocationsOperationsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudBuildClient.CloudbuildProjectsLocationsOperationsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v2/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "operationsId", value: request.operationsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudBuildClient.CloudbuildProjectsLocationsOperationsGetError,
      },
      options,
    );
  }
}

export namespace GoogleCloudBuildClient {
  export type CloudbuildProjectsLocationsConnectionsCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Required. The ID to use for the Connection, which will become the final component of the
     * Connection's resource name. Names must be unique per-project per-location. Allows
     * alphanumeric characters and any of -._~%!$&'()*+,;=@.
     */
    connectionId?: string;
    body: Connection;
  };

  export class CloudbuildProjectsLocationsConnectionsCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudbuildProjectsLocationsConnectionsCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudbuildProjectsLocationsConnectionsDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (connectionsId). */
    connectionsId: string;
    /**
     * The current etag of the connection. If an etag is provided and does not match the current
     * etag of the connection, deletion will be blocked and an ABORTED error will be returned.
     */
    etag?: string;
    /** If set, validate the request, but do not actually post it. */
    validateOnly?: boolean;
  };

  export class CloudbuildProjectsLocationsConnectionsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudbuildProjectsLocationsConnectionsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (connectionsId). */
    connectionsId: string;
    /** Number of results to return in the list. Default to 20. */
    pageSize?: number;
    /** Page start. */
    pageToken?: string;
  };

  export class CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type CloudbuildProjectsLocationsConnectionsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (connectionsId). */
    connectionsId: string;
  };

  export class CloudbuildProjectsLocationsConnectionsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudbuildProjectsLocationsConnectionsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudbuildProjectsLocationsConnectionsGetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (connectionsId). */
    connectionsId: string;
    /**
     * Optional. The maximum policy version that will be used to format the policy. Valid values are
     * 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies
     * with any conditional role bindings must specify version 3. Policies with no conditional role
     * bindings may specify any valid value or leave the field unset. The policy in the response
     * might use the policy version that you specified, or it might use a lower policy version. For
     * example, if you specify version 3, but the policy has no conditional role bindings, the
     * response uses version 1. To learn which resources support conditions in their IAM policies,
     * see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    optionsRequestedPolicyVersion?: number;
  };

  export class CloudbuildProjectsLocationsConnectionsGetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudbuildProjectsLocationsConnectionsGetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudbuildProjectsLocationsConnectionsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Number of results to return in the list. */
    pageSize?: number;
    /** Page start. */
    pageToken?: string;
    /**
     * Optional. If set to true, the response will return partial results when some regions are
     * unreachable. If set to false, the response will fail if any region is unreachable.
     */
    returnPartialSuccess?: boolean;
  };

  export class CloudbuildProjectsLocationsConnectionsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudbuildProjectsLocationsConnectionsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudbuildProjectsLocationsConnectionsPatchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (connectionsId). */
    connectionsId: string;
    /**
     * If set to true, and the connection is not found a new connection will be created. In this
     * situation `update_mask` is ignored. The creation will succeed only if the input connection
     * has all the necessary information (e.g a github_config with both user_oauth_token and
     * installation_id properties).
     */
    allowMissing?: boolean;
    /**
     * The current etag of the connection. If an etag is provided and does not match the current
     * etag of the connection, update will be blocked and an ABORTED error will be returned.
     */
    etag?: string;
    /** The list of fields to be updated. */
    updateMask?: string;
    body: Connection;
  };

  export class CloudbuildProjectsLocationsConnectionsPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudbuildProjectsLocationsConnectionsPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudbuildProjectsLocationsConnectionsProcessWebhookRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Arbitrary additional key to find the matching repository for a webhook event if needed. */
    webhookKey?: string;
    body: HttpBody;
  };

  export class CloudbuildProjectsLocationsConnectionsProcessWebhookError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudbuildProjectsLocationsConnectionsProcessWebhookError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (connectionsId). */
    connectionsId: string;
    /** Resource name segment (repositoriesId). */
    repositoriesId: string;
    body: Record<string, unknown>;
  };

  export class CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (connectionsId). */
    connectionsId: string;
    /** Resource name segment (repositoriesId). */
    repositoriesId: string;
    body: Record<string, unknown>;
  };

  export class CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (connectionsId). */
    connectionsId: string;
    body: BatchCreateRepositoriesRequest;
  };

  export class CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type CloudbuildProjectsLocationsConnectionsRepositoriesCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (connectionsId). */
    connectionsId: string;
    /**
     * Required. The ID to use for the repository, which will become the final component of the
     * repository's resource name. This ID should be unique in the connection. Allows alphanumeric
     * characters and any of -._~%!$&'()*+,;=@.
     */
    repositoryId?: string;
    body: Repository;
  };

  export class CloudbuildProjectsLocationsConnectionsRepositoriesCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudbuildProjectsLocationsConnectionsRepositoriesCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudbuildProjectsLocationsConnectionsRepositoriesDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (connectionsId). */
    connectionsId: string;
    /** Resource name segment (repositoriesId). */
    repositoriesId: string;
    /**
     * The current etag of the repository. If an etag is provided and does not match the current
     * etag of the repository, deletion will be blocked and an ABORTED error will be returned.
     */
    etag?: string;
    /** If set, validate the request, but do not actually post it. */
    validateOnly?: boolean;
  };

  export class CloudbuildProjectsLocationsConnectionsRepositoriesDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudbuildProjectsLocationsConnectionsRepositoriesDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (connectionsId). */
    connectionsId: string;
    /** Resource name segment (repositoriesId). */
    repositoriesId: string;
    /** Optional. Number of results to return in the list. Default to 20. */
    pageSize?: number;
    /** Optional. Page start. */
    pageToken?: string;
    /** Type of refs to fetch */
    refType?: RefType;
  };

  export class CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type CloudbuildProjectsLocationsConnectionsRepositoriesGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (connectionsId). */
    connectionsId: string;
    /** Resource name segment (repositoriesId). */
    repositoriesId: string;
  };

  export class CloudbuildProjectsLocationsConnectionsRepositoriesGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudbuildProjectsLocationsConnectionsRepositoriesGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudbuildProjectsLocationsConnectionsRepositoriesListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (connectionsId). */
    connectionsId: string;
    /**
     * A filter expression that filters resources listed in the response. Expressions must follow
     * API improvement proposal [AIP-160](https://google.aip.dev/160). e.g.
     * `remote_uri:"https://github.com*"`.
     */
    filter?: string;
    /** Number of results to return in the list. */
    pageSize?: number;
    /** Page start. */
    pageToken?: string;
    /**
     * Optional. If set to true, the response will return partial results when some regions are
     * unreachable. If set to false, the response will fail if any region is unreachable.
     */
    returnPartialSuccess?: boolean;
  };

  export class CloudbuildProjectsLocationsConnectionsRepositoriesListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudbuildProjectsLocationsConnectionsRepositoriesListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudbuildProjectsLocationsConnectionsSetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (connectionsId). */
    connectionsId: string;
    body: SetIamPolicyRequest;
  };

  export class CloudbuildProjectsLocationsConnectionsSetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudbuildProjectsLocationsConnectionsSetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudbuildProjectsLocationsConnectionsTestIamPermissionsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (connectionsId). */
    connectionsId: string;
    body: TestIamPermissionsRequest;
  };

  export class CloudbuildProjectsLocationsConnectionsTestIamPermissionsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudbuildProjectsLocationsConnectionsTestIamPermissionsError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudbuildProjectsLocationsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
  };

  export class CloudbuildProjectsLocationsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudbuildProjectsLocationsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudbuildProjectsLocationsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /**
     * Optional. Do not use this field unless explicitly documented otherwise. This is primarily for
     * internal usage.
     */
    extraLocationTypes?: string[];
    /**
     * A filter to narrow down results to a preferred subset. The filtering language accepts strings
     * like `"displayName=tokyo"`, and is documented in more detail in
     * [AIP-160](https://google.aip.dev/160).
     */
    filter?: string;
    /** The maximum number of results to return. If not set, the service selects a default. */
    pageSize?: number;
    /**
     * A page token received from the `next_page_token` field in the response. Send that page token
     * to receive the subsequent page.
     */
    pageToken?: string;
  };

  export class CloudbuildProjectsLocationsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudbuildProjectsLocationsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudbuildProjectsLocationsOperationsCancelRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (operationsId). */
    operationsId: string;
    body: Record<string, unknown>;
  };

  export class CloudbuildProjectsLocationsOperationsCancelError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudbuildProjectsLocationsOperationsCancelError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudbuildProjectsLocationsOperationsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (operationsId). */
    operationsId: string;
  };

  export class CloudbuildProjectsLocationsOperationsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudbuildProjectsLocationsOperationsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }
}
