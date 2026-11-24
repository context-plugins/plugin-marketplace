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
import { channelConnectionSchema, type ChannelConnection } from "./models/channel-connection.js";
import { channelSchema, type Channel } from "./models/channel.js";
import { enrollmentSchema, type Enrollment } from "./models/enrollment.js";
import { googleApiSourceSchema, type GoogleApiSource } from "./models/google-api-source.js";
import { googleChannelConfigSchema, type GoogleChannelConfig } from "./models/google-channel-config.js";
import {
  googleLongrunningListOperationsResponseSchema,
  type GoogleLongrunningListOperationsResponse,
} from "./models/google-longrunning-list-operations-response.js";
import {
  googleLongrunningOperationSchema,
  type GoogleLongrunningOperation,
} from "./models/google-longrunning-operation.js";
import { googleRpcErrorSchema, type GoogleRpcError } from "./models/google-rpc-error.js";
import {
  listChannelConnectionsResponseSchema,
  type ListChannelConnectionsResponse,
} from "./models/list-channel-connections-response.js";
import { listChannelsResponseSchema, type ListChannelsResponse } from "./models/list-channels-response.js";
import {
  listEnrollmentsResponseSchema,
  type ListEnrollmentsResponse,
} from "./models/list-enrollments-response.js";
import {
  listGoogleApiSourcesResponseSchema,
  type ListGoogleApiSourcesResponse,
} from "./models/list-google-api-sources-response.js";
import { listLocationsResponseSchema, type ListLocationsResponse } from "./models/list-locations-response.js";
import {
  listMessageBusEnrollmentsResponseSchema,
  type ListMessageBusEnrollmentsResponse,
} from "./models/list-message-bus-enrollments-response.js";
import {
  listMessageBusesResponseSchema,
  type ListMessageBusesResponse,
} from "./models/list-message-buses-response.js";
import { listPipelinesResponseSchema, type ListPipelinesResponse } from "./models/list-pipelines-response.js";
import { listProvidersResponseSchema, type ListProvidersResponse } from "./models/list-providers-response.js";
import { listTriggersResponseSchema, type ListTriggersResponse } from "./models/list-triggers-response.js";
import { locationSchema, type Location } from "./models/location.js";
import { messageBusSchema, type MessageBus } from "./models/message-bus.js";
import { pipelineSchema, type Pipeline } from "./models/pipeline.js";
import { policySchema, type Policy } from "./models/policy.js";
import { providerSchema, type Provider } from "./models/provider.js";
import { setIamPolicyRequestSchema, type SetIamPolicyRequest } from "./models/set-iam-policy-request.js";
import {
  testIamPermissionsRequestSchema,
  type TestIamPermissionsRequest,
} from "./models/test-iam-permissions-request.js";
import {
  testIamPermissionsResponseSchema,
  type TestIamPermissionsResponse,
} from "./models/test-iam-permissions-response.js";
import { triggerSchema, type Trigger } from "./models/trigger.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Generated from Google's published Discovery document for Eventarc API (eventarc v1, revision
 * 20261030). 66 operation(s).
 */
export class GoogleCloudEventarcClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "GOOGLE_CLOUD_EVENTARC_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "GoogleCloudEventarcClient/1.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "1.0.0", schema: s.string() },
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
   * Create channelConnections
   *
   * @remarks
   * Create a new ChannelConnection in a particular project and location.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsCreateError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsChannelConnectionsCreate(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleLongrunningOperation,
    GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/channelConnections",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "channelConnectionId", value: request.channelConnectionId, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: channelConnectionSchema },
      },
      {
        success: { kind: "json", schema: googleLongrunningOperationSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsCreateError,
      },
      options,
    );
  }

  /**
   * Delete channelConnections
   *
   * @remarks
   * Delete a single ChannelConnection.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsDeleteError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsChannelConnectionsDelete(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleLongrunningOperation,
    GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsDeleteError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/channelConnections/{channelConnectionsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "channelConnectionsId", value: request.channelConnectionsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleLongrunningOperationSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsDeleteError,
      },
      options,
    );
  }

  /**
   * Get channelConnections
   *
   * @remarks
   * Get a single ChannelConnection.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsGetError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsChannelConnectionsGet(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ChannelConnection,
    GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/channelConnections/{channelConnectionsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "channelConnectionsId", value: request.channelConnectionsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: channelConnectionSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsGetError,
      },
      options,
    );
  }

  /**
   * Get iam policy channelConnections
   *
   * @remarks
   * Gets the access control policy for a resource. Returns an empty policy if the resource exists
   * and does not have a policy set.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsGetIamPolicyError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsChannelConnectionsGetIamPolicy(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsGetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Policy,
    GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsGetIamPolicyError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/channelConnections/{channelConnectionsId}:getIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "channelConnectionsId", value: request.channelConnectionsId, schema: s.string() },
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
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsGetIamPolicyError,
      },
      options,
    );
  }

  /**
   * List channelConnections
   *
   * @remarks
   * List channel connections.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsListError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsChannelConnectionsList(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListChannelConnectionsResponse,
    GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/channelConnections",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listChannelConnectionsResponseSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsListError,
      },
      options,
    );
  }

  /**
   * Set iam policy channelConnections
   *
   * @remarks
   * Sets the access control policy on the specified resource. Replaces any existing policy. Can
   * return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsSetIamPolicyError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsChannelConnectionsSetIamPolicy(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsSetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Policy,
    GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsSetIamPolicyError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/channelConnections/{channelConnectionsId}:setIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "channelConnectionsId", value: request.channelConnectionsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: setIamPolicyRequestSchema },
      },
      {
        success: { kind: "json", schema: policySchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsSetIamPolicyError,
      },
      options,
    );
  }

  /**
   * Test iam permissions channelConnections
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
   * GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsTestIamPermissionsError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsChannelConnectionsTestIamPermissions(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsTestIamPermissionsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TestIamPermissionsResponse,
    GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsTestIamPermissionsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/channelConnections/{channelConnectionsId}:testIamPermissions",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "channelConnectionsId", value: request.channelConnectionsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: testIamPermissionsRequestSchema },
      },
      {
        success: { kind: "json", schema: testIamPermissionsResponseSchema },
        errorFactory:
          GoogleCloudEventarcClient.EventarcProjectsLocationsChannelConnectionsTestIamPermissionsError,
      },
      options,
    );
  }

  /**
   * Create channels
   *
   * @remarks
   * Create a new channel in a particular project and location.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsCreateError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsChannelsCreate(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleLongrunningOperation,
    GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/channels"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "channelId", value: request.channelId, schema: s.optional(s.string()) },
          { name: "validateOnly", value: request.validateOnly, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: channelSchema },
      },
      {
        success: { kind: "json", schema: googleLongrunningOperationSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsCreateError,
      },
      options,
    );
  }

  /**
   * Delete channels
   *
   * @remarks
   * Delete a single channel.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsDeleteError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsChannelsDelete(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleLongrunningOperation,
    GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsDeleteError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/channels/{channelsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "channelsId", value: request.channelsId, schema: s.string() },
        ],
        query: [{ name: "validateOnly", value: request.validateOnly, schema: s.optional(s.boolean()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleLongrunningOperationSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsDeleteError,
      },
      options,
    );
  }

  /**
   * Get channels
   *
   * @remarks
   * Get a single Channel.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsGetError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsChannelsGet(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Channel, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/channels/{channelsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "channelsId", value: request.channelsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: channelSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsGetError,
      },
      options,
    );
  }

  /**
   * Get iam policy channels
   *
   * @remarks
   * Gets the access control policy for a resource. Returns an empty policy if the resource exists
   * and does not have a policy set.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsGetIamPolicyError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsChannelsGetIamPolicy(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsGetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsGetIamPolicyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/channels/{channelsId}:getIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "channelsId", value: request.channelsId, schema: s.string() },
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
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsGetIamPolicyError,
      },
      options,
    );
  }

  /**
   * List channels
   *
   * @remarks
   * List channels.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsListError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsChannelsList(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListChannelsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/channels"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "orderBy", value: request.orderBy, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listChannelsResponseSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsListError,
      },
      options,
    );
  }

  /**
   * Patch channels
   *
   * @remarks
   * Update a single channel.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsPatchError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsChannelsPatch(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleLongrunningOperation,
    GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsPatchError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/channels/{channelsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "channelsId", value: request.channelsId, schema: s.string() },
        ],
        query: [
          { name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) },
          { name: "validateOnly", value: request.validateOnly, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: channelSchema },
      },
      {
        success: { kind: "json", schema: googleLongrunningOperationSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsPatchError,
      },
      options,
    );
  }

  /**
   * Set iam policy channels
   *
   * @remarks
   * Sets the access control policy on the specified resource. Replaces any existing policy. Can
   * return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsSetIamPolicyError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsChannelsSetIamPolicy(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsSetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsSetIamPolicyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/channels/{channelsId}:setIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "channelsId", value: request.channelsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: setIamPolicyRequestSchema },
      },
      {
        success: { kind: "json", schema: policySchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsSetIamPolicyError,
      },
      options,
    );
  }

  /**
   * Test iam permissions channels
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
   * GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsTestIamPermissionsError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsChannelsTestIamPermissions(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsTestIamPermissionsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TestIamPermissionsResponse,
    GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsTestIamPermissionsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/channels/{channelsId}:testIamPermissions",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "channelsId", value: request.channelsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: testIamPermissionsRequestSchema },
      },
      {
        success: { kind: "json", schema: testIamPermissionsResponseSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsChannelsTestIamPermissionsError,
      },
      options,
    );
  }

  /**
   * Create enrollments
   *
   * @remarks
   * Create a new Enrollment in a particular project and location.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsCreateError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsEnrollmentsCreate(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleLongrunningOperation,
    GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/enrollments"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "enrollmentId", value: request.enrollmentId, schema: s.optional(s.string()) },
          { name: "validateOnly", value: request.validateOnly, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: enrollmentSchema },
      },
      {
        success: { kind: "json", schema: googleLongrunningOperationSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsCreateError,
      },
      options,
    );
  }

  /**
   * Delete enrollments
   *
   * @remarks
   * Delete a single Enrollment.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsDeleteError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsEnrollmentsDelete(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleLongrunningOperation,
    GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsDeleteError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/enrollments/{enrollmentsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "enrollmentsId", value: request.enrollmentsId, schema: s.string() },
        ],
        query: [
          { name: "allowMissing", value: request.allowMissing, schema: s.optional(s.boolean()) },
          { name: "etag", value: request.etag, schema: s.optional(s.string()) },
          { name: "validateOnly", value: request.validateOnly, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleLongrunningOperationSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsDeleteError,
      },
      options,
    );
  }

  /**
   * Get enrollments
   *
   * @remarks
   * Get a single Enrollment.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsGetError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsEnrollmentsGet(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Enrollment, GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/enrollments/{enrollmentsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "enrollmentsId", value: request.enrollmentsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: enrollmentSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsGetError,
      },
      options,
    );
  }

  /**
   * Get iam policy enrollments
   *
   * @remarks
   * Gets the access control policy for a resource. Returns an empty policy if the resource exists
   * and does not have a policy set.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsGetIamPolicyError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsEnrollmentsGetIamPolicy(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsGetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsGetIamPolicyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/enrollments/{enrollmentsId}:getIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "enrollmentsId", value: request.enrollmentsId, schema: s.string() },
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
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsGetIamPolicyError,
      },
      options,
    );
  }

  /**
   * List enrollments
   *
   * @remarks
   * List Enrollments.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsListError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsEnrollmentsList(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListEnrollmentsResponse,
    GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/enrollments"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "orderBy", value: request.orderBy, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listEnrollmentsResponseSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsListError,
      },
      options,
    );
  }

  /**
   * Patch enrollments
   *
   * @remarks
   * Update a single Enrollment.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsPatchError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsEnrollmentsPatch(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleLongrunningOperation,
    GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsPatchError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/enrollments/{enrollmentsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "enrollmentsId", value: request.enrollmentsId, schema: s.string() },
        ],
        query: [
          { name: "allowMissing", value: request.allowMissing, schema: s.optional(s.boolean()) },
          { name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) },
          { name: "validateOnly", value: request.validateOnly, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: enrollmentSchema },
      },
      {
        success: { kind: "json", schema: googleLongrunningOperationSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsPatchError,
      },
      options,
    );
  }

  /**
   * Set iam policy enrollments
   *
   * @remarks
   * Sets the access control policy on the specified resource. Replaces any existing policy. Can
   * return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsSetIamPolicyError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsEnrollmentsSetIamPolicy(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsSetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsSetIamPolicyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/enrollments/{enrollmentsId}:setIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "enrollmentsId", value: request.enrollmentsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: setIamPolicyRequestSchema },
      },
      {
        success: { kind: "json", schema: policySchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsSetIamPolicyError,
      },
      options,
    );
  }

  /**
   * Test iam permissions enrollments
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
   * GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsTestIamPermissionsError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsEnrollmentsTestIamPermissions(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsTestIamPermissionsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TestIamPermissionsResponse,
    GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsTestIamPermissionsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/enrollments/{enrollmentsId}:testIamPermissions",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "enrollmentsId", value: request.enrollmentsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: testIamPermissionsRequestSchema },
      },
      {
        success: { kind: "json", schema: testIamPermissionsResponseSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsEnrollmentsTestIamPermissionsError,
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
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsGet(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Location, GoogleCloudEventarcClient.EventarcProjectsLocationsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}"),
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
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsGetError,
      },
      options,
    );
  }

  /**
   * Get google channel config locations
   *
   * @remarks
   * Get a GoogleChannelConfig. The name of the GoogleChannelConfig in the response is ALWAYS coded
   * with projectID.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsGetGoogleChannelConfigError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsGetGoogleChannelConfig(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsGetGoogleChannelConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleChannelConfig,
    GoogleCloudEventarcClient.EventarcProjectsLocationsGetGoogleChannelConfigError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/googleChannelConfig",
        ),
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
        success: { kind: "json", schema: googleChannelConfigSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsGetGoogleChannelConfigError,
      },
      options,
    );
  }

  /**
   * Create googleApiSources
   *
   * @remarks
   * Create a new GoogleApiSource in a particular project and location.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesCreateError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsGoogleApiSourcesCreate(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleLongrunningOperation,
    GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/googleApiSources",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "googleApiSourceId", value: request.googleApiSourceId, schema: s.optional(s.string()) },
          { name: "validateOnly", value: request.validateOnly, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleApiSourceSchema },
      },
      {
        success: { kind: "json", schema: googleLongrunningOperationSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesCreateError,
      },
      options,
    );
  }

  /**
   * Delete googleApiSources
   *
   * @remarks
   * Delete a single GoogleApiSource.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesDeleteError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsGoogleApiSourcesDelete(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleLongrunningOperation,
    GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesDeleteError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/googleApiSources/{googleApiSourcesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "googleApiSourcesId", value: request.googleApiSourcesId, schema: s.string() },
        ],
        query: [
          { name: "allowMissing", value: request.allowMissing, schema: s.optional(s.boolean()) },
          { name: "etag", value: request.etag, schema: s.optional(s.string()) },
          { name: "validateOnly", value: request.validateOnly, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleLongrunningOperationSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesDeleteError,
      },
      options,
    );
  }

  /**
   * Get googleApiSources
   *
   * @remarks
   * Get a single GoogleApiSource.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesGetError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsGoogleApiSourcesGet(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleApiSource,
    GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/googleApiSources/{googleApiSourcesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "googleApiSourcesId", value: request.googleApiSourcesId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleApiSourceSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesGetError,
      },
      options,
    );
  }

  /**
   * Get iam policy googleApiSources
   *
   * @remarks
   * Gets the access control policy for a resource. Returns an empty policy if the resource exists
   * and does not have a policy set.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsGoogleApiSourcesGetIamPolicy(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Policy,
    GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/googleApiSources/{googleApiSourcesId}:getIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "googleApiSourcesId", value: request.googleApiSourcesId, schema: s.string() },
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
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyError,
      },
      options,
    );
  }

  /**
   * List googleApiSources
   *
   * @remarks
   * List GoogleApiSources.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesListError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsGoogleApiSourcesList(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListGoogleApiSourcesResponse,
    GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/googleApiSources",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "orderBy", value: request.orderBy, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listGoogleApiSourcesResponseSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesListError,
      },
      options,
    );
  }

  /**
   * Patch googleApiSources
   *
   * @remarks
   * Update a single GoogleApiSource.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesPatchError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsGoogleApiSourcesPatch(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleLongrunningOperation,
    GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesPatchError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/googleApiSources/{googleApiSourcesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "googleApiSourcesId", value: request.googleApiSourcesId, schema: s.string() },
        ],
        query: [
          { name: "allowMissing", value: request.allowMissing, schema: s.optional(s.boolean()) },
          { name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) },
          { name: "validateOnly", value: request.validateOnly, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleApiSourceSchema },
      },
      {
        success: { kind: "json", schema: googleLongrunningOperationSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesPatchError,
      },
      options,
    );
  }

  /**
   * Set iam policy googleApiSources
   *
   * @remarks
   * Sets the access control policy on the specified resource. Replaces any existing policy. Can
   * return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsGoogleApiSourcesSetIamPolicy(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Policy,
    GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/googleApiSources/{googleApiSourcesId}:setIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "googleApiSourcesId", value: request.googleApiSourcesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: setIamPolicyRequestSchema },
      },
      {
        success: { kind: "json", schema: policySchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyError,
      },
      options,
    );
  }

  /**
   * Test iam permissions googleApiSources
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
   * GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsGoogleApiSourcesTestIamPermissions(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TestIamPermissionsResponse,
    GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/googleApiSources/{googleApiSourcesId}:testIamPermissions",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "googleApiSourcesId", value: request.googleApiSourcesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: testIamPermissionsRequestSchema },
      },
      {
        success: { kind: "json", schema: testIamPermissionsResponseSchema },
        errorFactory:
          GoogleCloudEventarcClient.EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsError,
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
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsListError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsList(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListLocationsResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations"),
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
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsListError,
      },
      options,
    );
  }

  /**
   * Create messageBuses
   *
   * @remarks
   * Create a new MessageBus in a particular project and location.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesCreateError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsMessageBusesCreate(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleLongrunningOperation,
    GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/messageBuses"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "messageBusId", value: request.messageBusId, schema: s.optional(s.string()) },
          { name: "validateOnly", value: request.validateOnly, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: messageBusSchema },
      },
      {
        success: { kind: "json", schema: googleLongrunningOperationSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesCreateError,
      },
      options,
    );
  }

  /**
   * Delete messageBuses
   *
   * @remarks
   * Delete a single message bus.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesDeleteError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsMessageBusesDelete(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleLongrunningOperation,
    GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesDeleteError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/messageBuses/{messageBusesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "messageBusesId", value: request.messageBusesId, schema: s.string() },
        ],
        query: [
          { name: "allowMissing", value: request.allowMissing, schema: s.optional(s.boolean()) },
          { name: "etag", value: request.etag, schema: s.optional(s.string()) },
          { name: "validateOnly", value: request.validateOnly, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleLongrunningOperationSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesDeleteError,
      },
      options,
    );
  }

  /**
   * Get messageBuses
   *
   * @remarks
   * Get a single MessageBus.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesGetError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsMessageBusesGet(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<MessageBus, GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/messageBuses/{messageBusesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "messageBusesId", value: request.messageBusesId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messageBusSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesGetError,
      },
      options,
    );
  }

  /**
   * Get iam policy messageBuses
   *
   * @remarks
   * Gets the access control policy for a resource. Returns an empty policy if the resource exists
   * and does not have a policy set.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesGetIamPolicyError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsMessageBusesGetIamPolicy(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesGetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesGetIamPolicyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/messageBuses/{messageBusesId}:getIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "messageBusesId", value: request.messageBusesId, schema: s.string() },
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
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesGetIamPolicyError,
      },
      options,
    );
  }

  /**
   * List messageBuses
   *
   * @remarks
   * List message buses.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesListError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsMessageBusesList(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListMessageBusesResponse,
    GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/messageBuses"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "orderBy", value: request.orderBy, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listMessageBusesResponseSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesListError,
      },
      options,
    );
  }

  /**
   * List enrollments messageBuses
   *
   * @remarks
   * List message bus enrollments.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesListEnrollmentsError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsMessageBusesListEnrollments(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesListEnrollmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListMessageBusEnrollmentsResponse,
    GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesListEnrollmentsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/messageBuses/{messageBusesId}:listEnrollments",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "messageBusesId", value: request.messageBusesId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listMessageBusEnrollmentsResponseSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesListEnrollmentsError,
      },
      options,
    );
  }

  /**
   * Patch messageBuses
   *
   * @remarks
   * Update a single message bus.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesPatchError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsMessageBusesPatch(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleLongrunningOperation,
    GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesPatchError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/messageBuses/{messageBusesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "messageBusesId", value: request.messageBusesId, schema: s.string() },
        ],
        query: [
          { name: "allowMissing", value: request.allowMissing, schema: s.optional(s.boolean()) },
          { name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) },
          { name: "validateOnly", value: request.validateOnly, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: messageBusSchema },
      },
      {
        success: { kind: "json", schema: googleLongrunningOperationSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesPatchError,
      },
      options,
    );
  }

  /**
   * Set iam policy messageBuses
   *
   * @remarks
   * Sets the access control policy on the specified resource. Replaces any existing policy. Can
   * return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesSetIamPolicyError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsMessageBusesSetIamPolicy(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesSetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesSetIamPolicyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/messageBuses/{messageBusesId}:setIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "messageBusesId", value: request.messageBusesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: setIamPolicyRequestSchema },
      },
      {
        success: { kind: "json", schema: policySchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesSetIamPolicyError,
      },
      options,
    );
  }

  /**
   * Test iam permissions messageBuses
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
   * GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesTestIamPermissionsError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsMessageBusesTestIamPermissions(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesTestIamPermissionsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TestIamPermissionsResponse,
    GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesTestIamPermissionsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/messageBuses/{messageBusesId}:testIamPermissions",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "messageBusesId", value: request.messageBusesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: testIamPermissionsRequestSchema },
      },
      {
        success: { kind: "json", schema: testIamPermissionsResponseSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsMessageBusesTestIamPermissionsError,
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
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsCancelError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsOperationsCancel(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsCancelRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, unknown>,
    GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsCancelError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel",
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
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsCancelError,
      },
      options,
    );
  }

  /**
   * Delete operations
   *
   * @remarks
   * Deletes a long-running operation. This method indicates that the client is no longer interested
   * in the operation result. It does not cancel the operation. If the server doesn't support this
   * method, it returns `google.rpc.Code.UNIMPLEMENTED`.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsDeleteError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsOperationsDelete(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, unknown>,
    GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsDeleteError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "operationsId", value: request.operationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsDeleteError,
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
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsGetError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsOperationsGet(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleLongrunningOperation,
    GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}",
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
        success: { kind: "json", schema: googleLongrunningOperationSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsGetError,
      },
      options,
    );
  }

  /**
   * List operations
   *
   * @remarks
   * Lists operations that match the specified filter in the request. If the server doesn't support
   * this method, it returns `UNIMPLEMENTED`.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsListError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsOperationsList(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleLongrunningListOperationsResponse,
    GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/operations"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
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
        success: { kind: "json", schema: googleLongrunningListOperationsResponseSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsOperationsListError,
      },
      options,
    );
  }

  /**
   * Create pipelines
   *
   * @remarks
   * Create a new Pipeline in a particular project and location.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesCreateError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsPipelinesCreate(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleLongrunningOperation,
    GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/pipelines"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "pipelineId", value: request.pipelineId, schema: s.optional(s.string()) },
          { name: "validateOnly", value: request.validateOnly, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: pipelineSchema },
      },
      {
        success: { kind: "json", schema: googleLongrunningOperationSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesCreateError,
      },
      options,
    );
  }

  /**
   * Delete pipelines
   *
   * @remarks
   * Delete a single pipeline.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesDeleteError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsPipelinesDelete(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleLongrunningOperation,
    GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesDeleteError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/pipelines/{pipelinesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "pipelinesId", value: request.pipelinesId, schema: s.string() },
        ],
        query: [
          { name: "allowMissing", value: request.allowMissing, schema: s.optional(s.boolean()) },
          { name: "etag", value: request.etag, schema: s.optional(s.string()) },
          { name: "validateOnly", value: request.validateOnly, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleLongrunningOperationSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesDeleteError,
      },
      options,
    );
  }

  /**
   * Get pipelines
   *
   * @remarks
   * Get a single Pipeline.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesGetError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsPipelinesGet(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Pipeline, GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/pipelines/{pipelinesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "pipelinesId", value: request.pipelinesId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pipelineSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesGetError,
      },
      options,
    );
  }

  /**
   * Get iam policy pipelines
   *
   * @remarks
   * Gets the access control policy for a resource. Returns an empty policy if the resource exists
   * and does not have a policy set.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesGetIamPolicyError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsPipelinesGetIamPolicy(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesGetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesGetIamPolicyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/pipelines/{pipelinesId}:getIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "pipelinesId", value: request.pipelinesId, schema: s.string() },
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
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesGetIamPolicyError,
      },
      options,
    );
  }

  /**
   * List pipelines
   *
   * @remarks
   * List pipelines.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesListError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsPipelinesList(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListPipelinesResponse,
    GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/pipelines"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "orderBy", value: request.orderBy, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listPipelinesResponseSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesListError,
      },
      options,
    );
  }

  /**
   * Patch pipelines
   *
   * @remarks
   * Update a single pipeline.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesPatchError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsPipelinesPatch(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleLongrunningOperation,
    GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesPatchError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/pipelines/{pipelinesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "pipelinesId", value: request.pipelinesId, schema: s.string() },
        ],
        query: [
          { name: "allowMissing", value: request.allowMissing, schema: s.optional(s.boolean()) },
          { name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) },
          { name: "validateOnly", value: request.validateOnly, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: pipelineSchema },
      },
      {
        success: { kind: "json", schema: googleLongrunningOperationSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesPatchError,
      },
      options,
    );
  }

  /**
   * Set iam policy pipelines
   *
   * @remarks
   * Sets the access control policy on the specified resource. Replaces any existing policy. Can
   * return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesSetIamPolicyError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsPipelinesSetIamPolicy(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesSetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesSetIamPolicyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/pipelines/{pipelinesId}:setIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "pipelinesId", value: request.pipelinesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: setIamPolicyRequestSchema },
      },
      {
        success: { kind: "json", schema: policySchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesSetIamPolicyError,
      },
      options,
    );
  }

  /**
   * Test iam permissions pipelines
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
   * GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesTestIamPermissionsError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsPipelinesTestIamPermissions(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesTestIamPermissionsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TestIamPermissionsResponse,
    GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesTestIamPermissionsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/pipelines/{pipelinesId}:testIamPermissions",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "pipelinesId", value: request.pipelinesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: testIamPermissionsRequestSchema },
      },
      {
        success: { kind: "json", schema: testIamPermissionsResponseSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsPipelinesTestIamPermissionsError,
      },
      options,
    );
  }

  /**
   * Get providers
   *
   * @remarks
   * Get a single Provider.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsProvidersGetError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsProvidersGet(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsProvidersGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Provider, GoogleCloudEventarcClient.EventarcProjectsLocationsProvidersGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/providers/{providersId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "providersId", value: request.providersId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: providerSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsProvidersGetError,
      },
      options,
    );
  }

  /**
   * List providers
   *
   * @remarks
   * List providers.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsProvidersListError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsProvidersList(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsProvidersListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListProvidersResponse,
    GoogleCloudEventarcClient.EventarcProjectsLocationsProvidersListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/providers"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "orderBy", value: request.orderBy, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listProvidersResponseSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsProvidersListError,
      },
      options,
    );
  }

  /**
   * Create triggers
   *
   * @remarks
   * Create a new trigger in a particular project and location.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersCreateError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsTriggersCreate(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleLongrunningOperation,
    GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/triggers"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "triggerId", value: request.triggerId, schema: s.optional(s.string()) },
          { name: "validateOnly", value: request.validateOnly, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: triggerSchema },
      },
      {
        success: { kind: "json", schema: googleLongrunningOperationSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersCreateError,
      },
      options,
    );
  }

  /**
   * Delete triggers
   *
   * @remarks
   * Delete a single trigger.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersDeleteError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsTriggersDelete(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleLongrunningOperation,
    GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersDeleteError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/triggers/{triggersId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "triggersId", value: request.triggersId, schema: s.string() },
        ],
        query: [
          { name: "allowMissing", value: request.allowMissing, schema: s.optional(s.boolean()) },
          { name: "etag", value: request.etag, schema: s.optional(s.string()) },
          { name: "validateOnly", value: request.validateOnly, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleLongrunningOperationSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersDeleteError,
      },
      options,
    );
  }

  /**
   * Get triggers
   *
   * @remarks
   * Get a single trigger.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersGetError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsTriggersGet(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Trigger, GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/triggers/{triggersId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "triggersId", value: request.triggersId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: triggerSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersGetError,
      },
      options,
    );
  }

  /**
   * Get iam policy triggers
   *
   * @remarks
   * Gets the access control policy for a resource. Returns an empty policy if the resource exists
   * and does not have a policy set.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersGetIamPolicyError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsTriggersGetIamPolicy(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersGetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersGetIamPolicyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/triggers/{triggersId}:getIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "triggersId", value: request.triggersId, schema: s.string() },
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
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersGetIamPolicyError,
      },
      options,
    );
  }

  /**
   * List triggers
   *
   * @remarks
   * List triggers.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersListError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsTriggersList(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListTriggersResponse, GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/triggers"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "orderBy", value: request.orderBy, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTriggersResponseSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersListError,
      },
      options,
    );
  }

  /**
   * Patch triggers
   *
   * @remarks
   * Update a single trigger.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersPatchError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsTriggersPatch(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleLongrunningOperation,
    GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersPatchError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/triggers/{triggersId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "triggersId", value: request.triggersId, schema: s.string() },
        ],
        query: [
          { name: "allowMissing", value: request.allowMissing, schema: s.optional(s.boolean()) },
          { name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) },
          { name: "validateOnly", value: request.validateOnly, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: triggerSchema },
      },
      {
        success: { kind: "json", schema: googleLongrunningOperationSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersPatchError,
      },
      options,
    );
  }

  /**
   * Set iam policy triggers
   *
   * @remarks
   * Sets the access control policy on the specified resource. Replaces any existing policy. Can
   * return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersSetIamPolicyError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsTriggersSetIamPolicy(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersSetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<Policy, GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersSetIamPolicyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/triggers/{triggersId}:setIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "triggersId", value: request.triggersId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: setIamPolicyRequestSchema },
      },
      {
        success: { kind: "json", schema: policySchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersSetIamPolicyError,
      },
      options,
    );
  }

  /**
   * Test iam permissions triggers
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
   * GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersTestIamPermissionsError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsTriggersTestIamPermissions(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersTestIamPermissionsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TestIamPermissionsResponse,
    GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersTestIamPermissionsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/triggers/{triggersId}:testIamPermissions",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "triggersId", value: request.triggersId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: testIamPermissionsRequestSchema },
      },
      {
        success: { kind: "json", schema: testIamPermissionsResponseSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsTriggersTestIamPermissionsError,
      },
      options,
    );
  }

  /**
   * Update google channel config locations
   *
   * @remarks
   * Update a single GoogleChannelConfig
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudEventarcClient.EventarcProjectsLocationsUpdateGoogleChannelConfigError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudEventarcError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eventarcProjectsLocationsUpdateGoogleChannelConfig(
    request: GoogleCloudEventarcClient.EventarcProjectsLocationsUpdateGoogleChannelConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleChannelConfig,
    GoogleCloudEventarcClient.EventarcProjectsLocationsUpdateGoogleChannelConfigError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/googleChannelConfig",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [{ name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleChannelConfigSchema },
      },
      {
        success: { kind: "json", schema: googleChannelConfigSchema },
        errorFactory: GoogleCloudEventarcClient.EventarcProjectsLocationsUpdateGoogleChannelConfigError,
      },
      options,
    );
  }
}

export namespace GoogleCloudEventarcClient {
  export type EventarcProjectsLocationsChannelConnectionsCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Required. The user-provided ID to be assigned to the channel connection. */
    channelConnectionId?: string;
    body: ChannelConnection;
  };

  export class EventarcProjectsLocationsChannelConnectionsCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsChannelConnectionsCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsChannelConnectionsDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (channelConnectionsId). */
    channelConnectionsId: string;
  };

  export class EventarcProjectsLocationsChannelConnectionsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsChannelConnectionsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsChannelConnectionsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (channelConnectionsId). */
    channelConnectionsId: string;
  };

  export class EventarcProjectsLocationsChannelConnectionsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsChannelConnectionsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsChannelConnectionsGetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (channelConnectionsId). */
    channelConnectionsId: string;
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

  export class EventarcProjectsLocationsChannelConnectionsGetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsChannelConnectionsGetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsChannelConnectionsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * The maximum number of channel connections to return on each page. Note: The service may send
     * fewer responses.
     */
    pageSize?: number;
    /**
     * The page token; provide the value from the `next_page_token` field in a previous
     * `ListChannelConnections` call to retrieve the subsequent page. When paginating, all other
     * parameters provided to `ListChannelConnetions` match the call that provided the page token.
     */
    pageToken?: string;
  };

  export class EventarcProjectsLocationsChannelConnectionsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsChannelConnectionsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsChannelConnectionsSetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (channelConnectionsId). */
    channelConnectionsId: string;
    body: SetIamPolicyRequest;
  };

  export class EventarcProjectsLocationsChannelConnectionsSetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsChannelConnectionsSetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsChannelConnectionsTestIamPermissionsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (channelConnectionsId). */
    channelConnectionsId: string;
    body: TestIamPermissionsRequest;
  };

  export class EventarcProjectsLocationsChannelConnectionsTestIamPermissionsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsChannelConnectionsTestIamPermissionsError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type EventarcProjectsLocationsChannelsCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Required. The user-provided ID to be assigned to the channel. */
    channelId?: string;
    /** Optional. If set, validate the request and preview the review, but do not post it. */
    validateOnly?: boolean;
    body: Channel;
  };

  export class EventarcProjectsLocationsChannelsCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsChannelsCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsChannelsDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (channelsId). */
    channelsId: string;
    /** Optional. If set, validate the request and preview the review, but do not post it. */
    validateOnly?: boolean;
  };

  export class EventarcProjectsLocationsChannelsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsChannelsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsChannelsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (channelsId). */
    channelsId: string;
  };

  export class EventarcProjectsLocationsChannelsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsChannelsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsChannelsGetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (channelsId). */
    channelsId: string;
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

  export class EventarcProjectsLocationsChannelsGetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsChannelsGetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsChannelsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * The sorting order of the resources returned. Value should be a comma-separated list of
     * fields. The default sorting order is ascending. To specify descending order for a field,
     * append a `desc` suffix; for example: `name desc, channel_id`.
     */
    orderBy?: string;
    /** The maximum number of channels to return on each page. Note: The service may send fewer. */
    pageSize?: number;
    /**
     * The page token; provide the value from the `next_page_token` field in a previous
     * `ListChannels` call to retrieve the subsequent page. When paginating, all other parameters
     * provided to `ListChannels` must match the call that provided the page token.
     */
    pageToken?: string;
  };

  export class EventarcProjectsLocationsChannelsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsChannelsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsChannelsPatchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (channelsId). */
    channelsId: string;
    /**
     * The fields to be updated; only fields explicitly provided are updated. If no field mask is
     * provided, all provided fields in the request are updated. To update all fields, provide a
     * field mask of "*".
     */
    updateMask?: string;
    /** Optional. If set, validate the request and preview the review, but do not post it. */
    validateOnly?: boolean;
    body: Channel;
  };

  export class EventarcProjectsLocationsChannelsPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsChannelsPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsChannelsSetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (channelsId). */
    channelsId: string;
    body: SetIamPolicyRequest;
  };

  export class EventarcProjectsLocationsChannelsSetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsChannelsSetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsChannelsTestIamPermissionsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (channelsId). */
    channelsId: string;
    body: TestIamPermissionsRequest;
  };

  export class EventarcProjectsLocationsChannelsTestIamPermissionsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsChannelsTestIamPermissionsError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsEnrollmentsCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Required. The user-provided ID to be assigned to the Enrollment. It should match the format
     * `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`.
     */
    enrollmentId?: string;
    /** Optional. If set, validate the request and preview the review, but do not post it. */
    validateOnly?: boolean;
    body: Enrollment;
  };

  export class EventarcProjectsLocationsEnrollmentsCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsEnrollmentsCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsEnrollmentsDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (enrollmentsId). */
    enrollmentsId: string;
    /**
     * Optional. If set to true, and the Enrollment is not found, the request will succeed but no
     * action will be taken on the server.
     */
    allowMissing?: boolean;
    /**
     * Optional. If provided, the Enrollment will only be deleted if the etag matches the current
     * etag on the resource.
     */
    etag?: string;
    /** Optional. If set, validate the request and preview the review, but do not post it. */
    validateOnly?: boolean;
  };

  export class EventarcProjectsLocationsEnrollmentsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsEnrollmentsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsEnrollmentsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (enrollmentsId). */
    enrollmentsId: string;
  };

  export class EventarcProjectsLocationsEnrollmentsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsEnrollmentsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsEnrollmentsGetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (enrollmentsId). */
    enrollmentsId: string;
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

  export class EventarcProjectsLocationsEnrollmentsGetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsEnrollmentsGetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsEnrollmentsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Optional. The filter field that the list request will filter on. Possible filtersare
     * described in https://google.aip.dev/160.
     */
    filter?: string;
    /**
     * Optional. The sorting order of the resources returned. Value should be a comma-separated list
     * of fields. The default sorting order is ascending. To specify descending order for a field,
     * append a `desc` suffix; for example: `name desc, update_time`.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of results to return on each page. Note: The service may send
     * fewer.
     */
    pageSize?: number;
    /**
     * Optional. The page token; provide the value from the `next_page_token` field in a previous
     * call to retrieve the subsequent page. When paginating, all other parameters provided must
     * match the previous call that provided the page token.
     */
    pageToken?: string;
  };

  export class EventarcProjectsLocationsEnrollmentsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsEnrollmentsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsEnrollmentsPatchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (enrollmentsId). */
    enrollmentsId: string;
    /**
     * Optional. If set to true, and the Enrollment is not found, a new Enrollment will be created.
     * In this situation, `update_mask` is ignored.
     */
    allowMissing?: boolean;
    /**
     * Optional. The fields to be updated; only fields explicitly provided are updated. If no field
     * mask is provided, all provided fields in the request are updated. To update all fields,
     * provide a field mask of "*".
     */
    updateMask?: string;
    /** Optional. If set, validate the request and preview the review, but do not post it. */
    validateOnly?: boolean;
    body: Enrollment;
  };

  export class EventarcProjectsLocationsEnrollmentsPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsEnrollmentsPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsEnrollmentsSetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (enrollmentsId). */
    enrollmentsId: string;
    body: SetIamPolicyRequest;
  };

  export class EventarcProjectsLocationsEnrollmentsSetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsEnrollmentsSetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsEnrollmentsTestIamPermissionsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (enrollmentsId). */
    enrollmentsId: string;
    body: TestIamPermissionsRequest;
  };

  export class EventarcProjectsLocationsEnrollmentsTestIamPermissionsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsEnrollmentsTestIamPermissionsError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
  };

  export class EventarcProjectsLocationsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsGetGoogleChannelConfigRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
  };

  export class EventarcProjectsLocationsGetGoogleChannelConfigError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsGetGoogleChannelConfigError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsGoogleApiSourcesCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Required. The user-provided ID to be assigned to the GoogleApiSource. It should match the
     * format `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`.
     */
    googleApiSourceId?: string;
    /** Optional. If set, validate the request and preview the review, but do not post it. */
    validateOnly?: boolean;
    body: GoogleApiSource;
  };

  export class EventarcProjectsLocationsGoogleApiSourcesCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsGoogleApiSourcesCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsGoogleApiSourcesDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (googleApiSourcesId). */
    googleApiSourcesId: string;
    /**
     * Optional. If set to true, and the GoogleApiSource is not found, the request will succeed but
     * no action will be taken on the server.
     */
    allowMissing?: boolean;
    /**
     * Optional. If provided, the GoogleApiSource will only be deleted if the etag matches the
     * current etag on the resource.
     */
    etag?: string;
    /** Optional. If set, validate the request and preview the review, but do not post it. */
    validateOnly?: boolean;
  };

  export class EventarcProjectsLocationsGoogleApiSourcesDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsGoogleApiSourcesDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsGoogleApiSourcesGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (googleApiSourcesId). */
    googleApiSourcesId: string;
  };

  export class EventarcProjectsLocationsGoogleApiSourcesGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsGoogleApiSourcesGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (googleApiSourcesId). */
    googleApiSourcesId: string;
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

  export class EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsGoogleApiSourcesListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Optional. The filter field that the list request will filter on. Possible filtersare
     * described in https://google.aip.dev/160.
     */
    filter?: string;
    /**
     * Optional. The sorting order of the resources returned. Value should be a comma-separated list
     * of fields. The default sorting order is ascending. To specify descending order for a field,
     * append a `desc` suffix; for example: `name desc, update_time`.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of results to return on each page. Note: The service may send
     * fewer.
     */
    pageSize?: number;
    /**
     * Optional. The page token; provide the value from the `next_page_token` field in a previous
     * call to retrieve the subsequent page. When paginating, all other parameters provided must
     * match the previous call that provided the page token.
     */
    pageToken?: string;
  };

  export class EventarcProjectsLocationsGoogleApiSourcesListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsGoogleApiSourcesListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsGoogleApiSourcesPatchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (googleApiSourcesId). */
    googleApiSourcesId: string;
    /**
     * Optional. If set to true, and the GoogleApiSource is not found, a new GoogleApiSource will be
     * created. In this situation, `update_mask` is ignored.
     */
    allowMissing?: boolean;
    /**
     * Optional. The fields to be updated; only fields explicitly provided are updated. If no field
     * mask is provided, all provided fields in the request are updated. To update all fields,
     * provide a field mask of "*".
     */
    updateMask?: string;
    /** Optional. If set, validate the request and preview the review, but do not post it. */
    validateOnly?: boolean;
    body: GoogleApiSource;
  };

  export class EventarcProjectsLocationsGoogleApiSourcesPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsGoogleApiSourcesPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (googleApiSourcesId). */
    googleApiSourcesId: string;
    body: SetIamPolicyRequest;
  };

  export class EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (googleApiSourcesId). */
    googleApiSourcesId: string;
    body: TestIamPermissionsRequest;
  };

  export class EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type EventarcProjectsLocationsListRequest = {
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

  export class EventarcProjectsLocationsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsMessageBusesCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Required. The user-provided ID to be assigned to the MessageBus. It should match the format
     * `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`.
     */
    messageBusId?: string;
    /** Optional. If set, validate the request and preview the review, but do not post it. */
    validateOnly?: boolean;
    body: MessageBus;
  };

  export class EventarcProjectsLocationsMessageBusesCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsMessageBusesCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsMessageBusesDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (messageBusesId). */
    messageBusesId: string;
    /**
     * Optional. If set to true, and the MessageBus is not found, the request will succeed but no
     * action will be taken on the server.
     */
    allowMissing?: boolean;
    /**
     * Optional. If provided, the MessageBus will only be deleted if the etag matches the current
     * etag on the resource.
     */
    etag?: string;
    /** Optional. If set, validate the request and preview the review, but do not post it. */
    validateOnly?: boolean;
  };

  export class EventarcProjectsLocationsMessageBusesDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsMessageBusesDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsMessageBusesGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (messageBusesId). */
    messageBusesId: string;
  };

  export class EventarcProjectsLocationsMessageBusesGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsMessageBusesGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsMessageBusesGetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (messageBusesId). */
    messageBusesId: string;
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

  export class EventarcProjectsLocationsMessageBusesGetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsMessageBusesGetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsMessageBusesListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Optional. The filter field that the list request will filter on. Possible filtersare
     * described in https://google.aip.dev/160.
     */
    filter?: string;
    /**
     * Optional. The sorting order of the resources returned. Value should be a comma-separated list
     * of fields. The default sorting order is ascending. To specify descending order for a field,
     * append a `desc` suffix; for example: `name desc, update_time`.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of results to return on each page. Note: The service may send
     * fewer.
     */
    pageSize?: number;
    /**
     * Optional. The page token; provide the value from the `next_page_token` field in a previous
     * call to retrieve the subsequent page. When paginating, all other parameters provided must
     * match the previous call that provided the page token.
     */
    pageToken?: string;
  };

  export class EventarcProjectsLocationsMessageBusesListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsMessageBusesListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsMessageBusesListEnrollmentsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (messageBusesId). */
    messageBusesId: string;
    /**
     * Optional. The maximum number of results to return on each page. Note: The service may send
     * fewer.
     */
    pageSize?: number;
    /**
     * Optional. The page token; provide the value from the `next_page_token` field in a previous
     * call to retrieve the subsequent page. When paginating, all other parameters provided must
     * match the previous call that provided the page token.
     */
    pageToken?: string;
  };

  export class EventarcProjectsLocationsMessageBusesListEnrollmentsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsMessageBusesListEnrollmentsError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsMessageBusesPatchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (messageBusesId). */
    messageBusesId: string;
    /**
     * Optional. If set to true, and the MessageBus is not found, a new MessageBus will be created.
     * In this situation, `update_mask` is ignored.
     */
    allowMissing?: boolean;
    /**
     * Optional. The fields to be updated; only fields explicitly provided are updated. If no field
     * mask is provided, all provided fields in the request are updated. To update all fields,
     * provide a field mask of "*".
     */
    updateMask?: string;
    /** Optional. If set, validate the request and preview the review, but do not post it. */
    validateOnly?: boolean;
    body: MessageBus;
  };

  export class EventarcProjectsLocationsMessageBusesPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsMessageBusesPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsMessageBusesSetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (messageBusesId). */
    messageBusesId: string;
    body: SetIamPolicyRequest;
  };

  export class EventarcProjectsLocationsMessageBusesSetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsMessageBusesSetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsMessageBusesTestIamPermissionsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (messageBusesId). */
    messageBusesId: string;
    body: TestIamPermissionsRequest;
  };

  export class EventarcProjectsLocationsMessageBusesTestIamPermissionsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsMessageBusesTestIamPermissionsError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsOperationsCancelRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (operationsId). */
    operationsId: string;
    body: Record<string, unknown>;
  };

  export class EventarcProjectsLocationsOperationsCancelError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsOperationsCancelError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsOperationsDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (operationsId). */
    operationsId: string;
  };

  export class EventarcProjectsLocationsOperationsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsOperationsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsOperationsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (operationsId). */
    operationsId: string;
  };

  export class EventarcProjectsLocationsOperationsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsOperationsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsOperationsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** The standard list filter. */
    filter?: string;
    /** The standard list page size. */
    pageSize?: number;
    /** The standard list page token. */
    pageToken?: string;
    /**
     * When set to `true`, operations that are reachable are returned as normal, and those that are
     * unreachable are returned in the ListOperationsResponse.unreachable field. This can only be
     * `true` when reading across collections. For example, when `parent` is set to
     * `"projects/example/locations/-"`. This field is not supported by default and will result in
     * an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product
     * specific documentation.
     */
    returnPartialSuccess?: boolean;
  };

  export class EventarcProjectsLocationsOperationsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsOperationsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsPipelinesCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Required. The user-provided ID to be assigned to the Pipeline. It should match the format
     * `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`.
     */
    pipelineId?: string;
    /** Optional. If set, validate the request and preview the review, but do not post it. */
    validateOnly?: boolean;
    body: Pipeline;
  };

  export class EventarcProjectsLocationsPipelinesCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsPipelinesCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsPipelinesDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (pipelinesId). */
    pipelinesId: string;
    /**
     * Optional. If set to true, and the Pipeline is not found, the request will succeed but no
     * action will be taken on the server.
     */
    allowMissing?: boolean;
    /**
     * Optional. If provided, the Pipeline will only be deleted if the etag matches the current etag
     * on the resource.
     */
    etag?: string;
    /** Optional. If set, validate the request and preview the review, but do not post it. */
    validateOnly?: boolean;
  };

  export class EventarcProjectsLocationsPipelinesDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsPipelinesDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsPipelinesGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (pipelinesId). */
    pipelinesId: string;
  };

  export class EventarcProjectsLocationsPipelinesGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsPipelinesGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsPipelinesGetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (pipelinesId). */
    pipelinesId: string;
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

  export class EventarcProjectsLocationsPipelinesGetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsPipelinesGetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsPipelinesListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Optional. The filter field that the list request will filter on. Possible filters are
     * described in https://google.aip.dev/160.
     */
    filter?: string;
    /**
     * Optional. The sorting order of the resources returned. Value should be a comma-separated list
     * of fields. The default sorting order is ascending. To specify descending order for a field,
     * append a `desc` suffix; for example: `name desc, update_time`.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of results to return on each page. Note: The service may send
     * fewer.
     */
    pageSize?: number;
    /**
     * Optional. The page token; provide the value from the `next_page_token` field in a previous
     * call to retrieve the subsequent page. When paginating, all other parameters provided must
     * match the previous call that provided the page token.
     */
    pageToken?: string;
  };

  export class EventarcProjectsLocationsPipelinesListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsPipelinesListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsPipelinesPatchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (pipelinesId). */
    pipelinesId: string;
    /**
     * Optional. If set to true, and the Pipeline is not found, a new Pipeline will be created. In
     * this situation, `update_mask` is ignored.
     */
    allowMissing?: boolean;
    /**
     * Optional. The fields to be updated; only fields explicitly provided are updated. If no field
     * mask is provided, all provided fields in the request are updated. To update all fields,
     * provide a field mask of "*".
     */
    updateMask?: string;
    /** Optional. If set, validate the request and preview the review, but do not post it. */
    validateOnly?: boolean;
    body: Pipeline;
  };

  export class EventarcProjectsLocationsPipelinesPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsPipelinesPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsPipelinesSetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (pipelinesId). */
    pipelinesId: string;
    body: SetIamPolicyRequest;
  };

  export class EventarcProjectsLocationsPipelinesSetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsPipelinesSetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsPipelinesTestIamPermissionsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (pipelinesId). */
    pipelinesId: string;
    body: TestIamPermissionsRequest;
  };

  export class EventarcProjectsLocationsPipelinesTestIamPermissionsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsPipelinesTestIamPermissionsError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsProvidersGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (providersId). */
    providersId: string;
  };

  export class EventarcProjectsLocationsProvidersGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsProvidersGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsProvidersListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** The filter field that the list request will filter on. */
    filter?: string;
    /**
     * The sorting order of the resources returned. Value should be a comma-separated list of
     * fields. The default sorting oder is ascending. To specify descending order for a field,
     * append a `desc` suffix; for example: `name desc, _id`.
     */
    orderBy?: string;
    /** The maximum number of providers to return on each page. */
    pageSize?: number;
    /**
     * The page token; provide the value from the `next_page_token` field in a previous
     * `ListProviders` call to retrieve the subsequent page. When paginating, all other parameters
     * provided to `ListProviders` must match the call that provided the page token.
     */
    pageToken?: string;
  };

  export class EventarcProjectsLocationsProvidersListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsProvidersListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsTriggersCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Required. The user-provided ID to be assigned to the trigger. */
    triggerId?: string;
    /** Optional. If set, validate the request and preview the review, but do not post it. */
    validateOnly?: boolean;
    body: Trigger;
  };

  export class EventarcProjectsLocationsTriggersCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsTriggersCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsTriggersDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (triggersId). */
    triggersId: string;
    /**
     * If set to true, and the trigger is not found, the request will succeed but no action will be
     * taken on the server.
     */
    allowMissing?: boolean;
    /**
     * If provided, the trigger will only be deleted if the etag matches the current etag on the
     * resource.
     */
    etag?: string;
    /** Optional. If set, validate the request and preview the review, but do not post it. */
    validateOnly?: boolean;
  };

  export class EventarcProjectsLocationsTriggersDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsTriggersDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsTriggersGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (triggersId). */
    triggersId: string;
  };

  export class EventarcProjectsLocationsTriggersGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsTriggersGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsTriggersGetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (triggersId). */
    triggersId: string;
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

  export class EventarcProjectsLocationsTriggersGetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsTriggersGetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsTriggersListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Filter field. Used to filter the Triggers to be listed. Possible filters are described in
     * https://google.aip.dev/160. For example, using "?filter=destination:gke" would list only
     * Triggers with a gke destination.
     */
    filter?: string;
    /**
     * The sorting order of the resources returned. Value should be a comma-separated list of
     * fields. The default sorting order is ascending. To specify descending order for a field,
     * append a `desc` suffix; for example: `name desc, trigger_id`.
     */
    orderBy?: string;
    /** The maximum number of triggers to return on each page. Note: The service may send fewer. */
    pageSize?: number;
    /**
     * The page token; provide the value from the `next_page_token` field in a previous
     * `ListTriggers` call to retrieve the subsequent page. When paginating, all other parameters
     * provided to `ListTriggers` must match the call that provided the page token.
     */
    pageToken?: string;
  };

  export class EventarcProjectsLocationsTriggersListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsTriggersListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsTriggersPatchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (triggersId). */
    triggersId: string;
    /**
     * If set to true, and the trigger is not found, a new trigger will be created. In this
     * situation, `update_mask` is ignored.
     */
    allowMissing?: boolean;
    /**
     * The fields to be updated; only fields explicitly provided are updated. If no field mask is
     * provided, all provided fields in the request are updated. To update all fields, provide a
     * field mask of "*".
     */
    updateMask?: string;
    /** Optional. If set, validate the request and preview the review, but do not post it. */
    validateOnly?: boolean;
    body: Trigger;
  };

  export class EventarcProjectsLocationsTriggersPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsTriggersPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsTriggersSetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (triggersId). */
    triggersId: string;
    body: SetIamPolicyRequest;
  };

  export class EventarcProjectsLocationsTriggersSetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsTriggersSetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsTriggersTestIamPermissionsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (triggersId). */
    triggersId: string;
    body: TestIamPermissionsRequest;
  };

  export class EventarcProjectsLocationsTriggersTestIamPermissionsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsTriggersTestIamPermissionsError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type EventarcProjectsLocationsUpdateGoogleChannelConfigRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * The fields to be updated; only fields explicitly provided are updated. If no field mask is
     * provided, all provided fields in the request are updated. To update all fields, provide a
     * field mask of "*".
     */
    updateMask?: string;
    body: GoogleChannelConfig;
  };

  export class EventarcProjectsLocationsUpdateGoogleChannelConfigError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<EventarcProjectsLocationsUpdateGoogleChannelConfigError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }
}
