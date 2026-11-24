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
import { connectionProfileSchema, type ConnectionProfile } from "./models/connection-profile.js";
import {
  discoverConnectionProfileRequestSchema,
  type DiscoverConnectionProfileRequest,
} from "./models/discover-connection-profile-request.js";
import {
  discoverConnectionProfileResponseSchema,
  type DiscoverConnectionProfileResponse,
} from "./models/discover-connection-profile-response.js";
import {
  fetchStaticIpsResponseSchema,
  type FetchStaticIpsResponse,
} from "./models/fetch-static-ips-response.js";
import { googleRpcErrorSchema, type GoogleRpcError } from "./models/google-rpc-error.js";
import {
  listConnectionProfilesResponseSchema,
  type ListConnectionProfilesResponse,
} from "./models/list-connection-profiles-response.js";
import { listLocationsResponseSchema, type ListLocationsResponse } from "./models/list-locations-response.js";
import {
  listOperationsResponseSchema,
  type ListOperationsResponse,
} from "./models/list-operations-response.js";
import {
  listPrivateConnectionsResponseSchema,
  type ListPrivateConnectionsResponse,
} from "./models/list-private-connections-response.js";
import { listRoutesResponseSchema, type ListRoutesResponse } from "./models/list-routes-response.js";
import {
  listStreamObjectsResponseSchema,
  type ListStreamObjectsResponse,
} from "./models/list-stream-objects-response.js";
import { listStreamsResponseSchema, type ListStreamsResponse } from "./models/list-streams-response.js";
import { locationSchema, type Location } from "./models/location.js";
import {
  lookupStreamObjectRequestSchema,
  type LookupStreamObjectRequest,
} from "./models/lookup-stream-object-request.js";
import { operationSchema, type Operation } from "./models/operation.js";
import { privateConnectionSchema, type PrivateConnection } from "./models/private-connection.js";
import { routeSchema, type Route } from "./models/route.js";
import { runStreamRequestSchema, type RunStreamRequest } from "./models/run-stream-request.js";
import {
  startBackfillJobRequestSchema,
  type StartBackfillJobRequest,
} from "./models/start-backfill-job-request.js";
import {
  startBackfillJobResponseSchema,
  type StartBackfillJobResponse,
} from "./models/start-backfill-job-response.js";
import {
  stopBackfillJobResponseSchema,
  type StopBackfillJobResponse,
} from "./models/stop-backfill-job-response.js";
import { streamObjectSchema, type StreamObject } from "./models/stream-object.js";
import { streamSchema, type Stream } from "./models/stream.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Generated from Google's published Discovery document for Datastream API (datastream v1, revision
 * 20261028). 32 operation(s).
 */
export class GoogleCloudDatastreamClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "GOOGLE_CLOUD_DATASTREAM_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "GoogleCloudDatastreamClient/1.0.0 TypeScript", schema: s.string() },
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
   * Create connectionProfiles
   *
   * @remarks
   * Use this method to create a connection profile in a project and location.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesCreateError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDatastreamError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  datastreamProjectsLocationsConnectionProfilesCreate(
    request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Operation,
    GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/connectionProfiles",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "connectionProfileId", value: request.connectionProfileId, schema: s.optional(s.string()) },
          { name: "force", value: request.force, schema: s.optional(s.boolean()) },
          { name: "requestId", value: request.requestId, schema: s.optional(s.string()) },
          { name: "validateOnly", value: request.validateOnly, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: connectionProfileSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesCreateError,
      },
      options,
    );
  }

  /**
   * Delete connectionProfiles
   *
   * @remarks
   * Use this method to delete a connection profile.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesDeleteError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDatastreamError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  datastreamProjectsLocationsConnectionProfilesDelete(
    request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Operation,
    GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesDeleteError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/connectionProfiles/{connectionProfilesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "connectionProfilesId", value: request.connectionProfilesId, schema: s.string() },
        ],
        query: [{ name: "requestId", value: request.requestId, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesDeleteError,
      },
      options,
    );
  }

  /**
   * Discover connectionProfiles
   *
   * @remarks
   * Use this method to discover a connection profile. The discover API call exposes the data
   * objects and metadata belonging to the profile. Typically, a request returns children data
   * objects of a parent data object that's optionally supplied in the request.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesDiscoverError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDatastreamError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  datastreamProjectsLocationsConnectionProfilesDiscover(
    request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesDiscoverRequest,
    options?: RequestOptions,
  ): ApiPromise<
    DiscoverConnectionProfileResponse,
    GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesDiscoverError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/connectionProfiles:discover",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: discoverConnectionProfileRequestSchema },
      },
      {
        success: { kind: "json", schema: discoverConnectionProfileResponseSchema },
        errorFactory: GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesDiscoverError,
      },
      options,
    );
  }

  /**
   * Get connectionProfiles
   *
   * @remarks
   * Use this method to get details about a connection profile.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDatastreamError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  datastreamProjectsLocationsConnectionProfilesGet(
    request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ConnectionProfile,
    GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/connectionProfiles/{connectionProfilesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "connectionProfilesId", value: request.connectionProfilesId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: connectionProfileSchema },
        errorFactory: GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesGetError,
      },
      options,
    );
  }

  /**
   * List connectionProfiles
   *
   * @remarks
   * Use this method to list connection profiles created in a project and location.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesListError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDatastreamError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  datastreamProjectsLocationsConnectionProfilesList(
    request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListConnectionProfilesResponse,
    GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/connectionProfiles",
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
        success: { kind: "json", schema: listConnectionProfilesResponseSchema },
        errorFactory: GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesListError,
      },
      options,
    );
  }

  /**
   * Patch connectionProfiles
   *
   * @remarks
   * Use this method to update the parameters of a connection profile.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesPatchError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDatastreamError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  datastreamProjectsLocationsConnectionProfilesPatch(
    request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Operation,
    GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesPatchError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/connectionProfiles/{connectionProfilesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "connectionProfilesId", value: request.connectionProfilesId, schema: s.string() },
        ],
        query: [
          { name: "force", value: request.force, schema: s.optional(s.boolean()) },
          { name: "requestId", value: request.requestId, schema: s.optional(s.string()) },
          { name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) },
          { name: "validateOnly", value: request.validateOnly, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: connectionProfileSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDatastreamClient.DatastreamProjectsLocationsConnectionProfilesPatchError,
      },
      options,
    );
  }

  /**
   * Fetch static ips locations
   *
   * @remarks
   * The FetchStaticIps API call exposes the static IP addresses used by Datastream.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDatastreamClient.DatastreamProjectsLocationsFetchStaticIpsError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDatastreamError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  datastreamProjectsLocationsFetchStaticIps(
    request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsFetchStaticIpsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    FetchStaticIpsResponse,
    GoogleCloudDatastreamClient.DatastreamProjectsLocationsFetchStaticIpsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}:fetchStaticIps",
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
        success: { kind: "json", schema: fetchStaticIpsResponseSchema },
        errorFactory: GoogleCloudDatastreamClient.DatastreamProjectsLocationsFetchStaticIpsError,
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
   * @throws {@link GoogleCloudDatastreamClient.DatastreamProjectsLocationsGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDatastreamError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  datastreamProjectsLocationsGet(
    request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Location, GoogleCloudDatastreamClient.DatastreamProjectsLocationsGetError> {
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
        errorFactory: GoogleCloudDatastreamClient.DatastreamProjectsLocationsGetError,
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
   * @throws {@link GoogleCloudDatastreamClient.DatastreamProjectsLocationsListError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDatastreamError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  datastreamProjectsLocationsList(
    request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListLocationsResponse, GoogleCloudDatastreamClient.DatastreamProjectsLocationsListError> {
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
        errorFactory: GoogleCloudDatastreamClient.DatastreamProjectsLocationsListError,
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
   * @throws {@link GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsCancelError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDatastreamError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  datastreamProjectsLocationsOperationsCancel(
    request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsCancelRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, unknown>,
    GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsCancelError
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
        errorFactory: GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsCancelError,
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
   * @throws {@link GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsDeleteError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDatastreamError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  datastreamProjectsLocationsOperationsDelete(
    request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, unknown>,
    GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsDeleteError
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
        errorFactory: GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsDeleteError,
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
   * @throws {@link GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsGetError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDatastreamError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  datastreamProjectsLocationsOperationsGet(
    request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsGetError> {
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
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsGetError,
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
   * @throws {@link GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsListError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDatastreamError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  datastreamProjectsLocationsOperationsList(
    request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListOperationsResponse,
    GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsListError
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
        success: { kind: "json", schema: listOperationsResponseSchema },
        errorFactory: GoogleCloudDatastreamClient.DatastreamProjectsLocationsOperationsListError,
      },
      options,
    );
  }

  /**
   * Create privateConnections
   *
   * @remarks
   * Use this method to create a private connectivity configuration.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsCreateError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDatastreamError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  datastreamProjectsLocationsPrivateConnectionsCreate(
    request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Operation,
    GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/privateConnections",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "force", value: request.force, schema: s.optional(s.boolean()) },
          { name: "privateConnectionId", value: request.privateConnectionId, schema: s.optional(s.string()) },
          { name: "requestId", value: request.requestId, schema: s.optional(s.string()) },
          { name: "validateOnly", value: request.validateOnly, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: privateConnectionSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsCreateError,
      },
      options,
    );
  }

  /**
   * Delete privateConnections
   *
   * @remarks
   * Use this method to delete a private connectivity configuration.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsDeleteError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDatastreamError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  datastreamProjectsLocationsPrivateConnectionsDelete(
    request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Operation,
    GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsDeleteError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/privateConnections/{privateConnectionsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "privateConnectionsId", value: request.privateConnectionsId, schema: s.string() },
        ],
        query: [
          { name: "force", value: request.force, schema: s.optional(s.boolean()) },
          { name: "requestId", value: request.requestId, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsDeleteError,
      },
      options,
    );
  }

  /**
   * Get privateConnections
   *
   * @remarks
   * Use this method to get details about a private connectivity configuration.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDatastreamError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  datastreamProjectsLocationsPrivateConnectionsGet(
    request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PrivateConnection,
    GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/privateConnections/{privateConnectionsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "privateConnectionsId", value: request.privateConnectionsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: privateConnectionSchema },
        errorFactory: GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsGetError,
      },
      options,
    );
  }

  /**
   * List privateConnections
   *
   * @remarks
   * Use this method to list private connectivity configurations in a project and location.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsListError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDatastreamError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  datastreamProjectsLocationsPrivateConnectionsList(
    request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListPrivateConnectionsResponse,
    GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/privateConnections",
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
        success: { kind: "json", schema: listPrivateConnectionsResponseSchema },
        errorFactory: GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsListError,
      },
      options,
    );
  }

  /**
   * Create routes
   *
   * @remarks
   * Use this method to create a route for a private connectivity configuration in a project and
   * location.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesCreateError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDatastreamError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  datastreamProjectsLocationsPrivateConnectionsRoutesCreate(
    request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Operation,
    GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/privateConnections/{privateConnectionsId}/routes",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "privateConnectionsId", value: request.privateConnectionsId, schema: s.string() },
        ],
        query: [
          { name: "requestId", value: request.requestId, schema: s.optional(s.string()) },
          { name: "routeId", value: request.routeId, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: routeSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory:
          GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesCreateError,
      },
      options,
    );
  }

  /**
   * Delete routes
   *
   * @remarks
   * Use this method to delete a route.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDatastreamError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  datastreamProjectsLocationsPrivateConnectionsRoutesDelete(
    request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Operation,
    GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/privateConnections/{privateConnectionsId}/routes/{routesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "privateConnectionsId", value: request.privateConnectionsId, schema: s.string() },
          { name: "routesId", value: request.routesId, schema: s.string() },
        ],
        query: [{ name: "requestId", value: request.requestId, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory:
          GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteError,
      },
      options,
    );
  }

  /**
   * Get routes
   *
   * @remarks
   * Use this method to get details about a route.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesGetError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDatastreamError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  datastreamProjectsLocationsPrivateConnectionsRoutesGet(
    request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Route,
    GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/privateConnections/{privateConnectionsId}/routes/{routesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "privateConnectionsId", value: request.privateConnectionsId, schema: s.string() },
          { name: "routesId", value: request.routesId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: routeSchema },
        errorFactory: GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesGetError,
      },
      options,
    );
  }

  /**
   * List routes
   *
   * @remarks
   * Use this method to list routes created for a private connectivity configuration in a project
   * and location.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesListError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDatastreamError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  datastreamProjectsLocationsPrivateConnectionsRoutesList(
    request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListRoutesResponse,
    GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/privateConnections/{privateConnectionsId}/routes",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "privateConnectionsId", value: request.privateConnectionsId, schema: s.string() },
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
        success: { kind: "json", schema: listRoutesResponseSchema },
        errorFactory:
          GoogleCloudDatastreamClient.DatastreamProjectsLocationsPrivateConnectionsRoutesListError,
      },
      options,
    );
  }

  /**
   * Create streams
   *
   * @remarks
   * Use this method to create a stream.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsCreateError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDatastreamError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  datastreamProjectsLocationsStreamsCreate(
    request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/streams"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "force", value: request.force, schema: s.optional(s.boolean()) },
          { name: "requestId", value: request.requestId, schema: s.optional(s.string()) },
          { name: "streamId", value: request.streamId, schema: s.optional(s.string()) },
          { name: "validateOnly", value: request.validateOnly, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: streamSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsCreateError,
      },
      options,
    );
  }

  /**
   * Delete streams
   *
   * @remarks
   * Use this method to delete a stream.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsDeleteError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDatastreamError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  datastreamProjectsLocationsStreamsDelete(
    request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "streamsId", value: request.streamsId, schema: s.string() },
        ],
        query: [{ name: "requestId", value: request.requestId, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsDeleteError,
      },
      options,
    );
  }

  /**
   * Get streams
   *
   * @remarks
   * Use this method to get details about a stream.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsGetError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDatastreamError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  datastreamProjectsLocationsStreamsGet(
    request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Stream, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "streamsId", value: request.streamsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: streamSchema },
        errorFactory: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsGetError,
      },
      options,
    );
  }

  /**
   * List streams
   *
   * @remarks
   * Use this method to list streams in a project and location.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsListError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDatastreamError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  datastreamProjectsLocationsStreamsList(
    request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListStreamsResponse,
    GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/streams"),
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
        success: { kind: "json", schema: listStreamsResponseSchema },
        errorFactory: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsListError,
      },
      options,
    );
  }

  /**
   * Get objects
   *
   * @remarks
   * Use this method to get details about a stream object.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsGetError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDatastreamError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  datastreamProjectsLocationsStreamsObjectsGet(
    request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<StreamObject, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}/objects/{objectsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "streamsId", value: request.streamsId, schema: s.string() },
          { name: "objectsId", value: request.objectsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: streamObjectSchema },
        errorFactory: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsGetError,
      },
      options,
    );
  }

  /**
   * List objects
   *
   * @remarks
   * Use this method to list the objects of a specific stream.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsListError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDatastreamError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  datastreamProjectsLocationsStreamsObjectsList(
    request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListStreamObjectsResponse,
    GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}/objects",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "streamsId", value: request.streamsId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listStreamObjectsResponseSchema },
        errorFactory: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsListError,
      },
      options,
    );
  }

  /**
   * Lookup objects
   *
   * @remarks
   * Use this method to look up a stream object by its source object identifier.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsLookupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDatastreamError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  datastreamProjectsLocationsStreamsObjectsLookup(
    request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsLookupRequest,
    options?: RequestOptions,
  ): ApiPromise<
    StreamObject,
    GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsLookupError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}/objects:lookup",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "streamsId", value: request.streamsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: lookupStreamObjectRequestSchema },
      },
      {
        success: { kind: "json", schema: streamObjectSchema },
        errorFactory: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsLookupError,
      },
      options,
    );
  }

  /**
   * Start backfill job objects
   *
   * @remarks
   * Use this method to start a backfill job for the specified stream object.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsStartBackfillJobError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDatastreamError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  datastreamProjectsLocationsStreamsObjectsStartBackfillJob(
    request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsStartBackfillJobRequest,
    options?: RequestOptions,
  ): ApiPromise<
    StartBackfillJobResponse,
    GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsStartBackfillJobError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}/objects/{objectsId}:startBackfillJob",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "streamsId", value: request.streamsId, schema: s.string() },
          { name: "objectsId", value: request.objectsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: startBackfillJobRequestSchema },
      },
      {
        success: { kind: "json", schema: startBackfillJobResponseSchema },
        errorFactory:
          GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsStartBackfillJobError,
      },
      options,
    );
  }

  /**
   * Stop backfill job objects
   *
   * @remarks
   * Use this method to stop a backfill job for the specified stream object.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsStopBackfillJobError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDatastreamError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  datastreamProjectsLocationsStreamsObjectsStopBackfillJob(
    request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest,
    options?: RequestOptions,
  ): ApiPromise<
    StopBackfillJobResponse,
    GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsStopBackfillJobError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}/objects/{objectsId}:stopBackfillJob",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "streamsId", value: request.streamsId, schema: s.string() },
          { name: "objectsId", value: request.objectsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: stopBackfillJobResponseSchema },
        errorFactory:
          GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsObjectsStopBackfillJobError,
      },
      options,
    );
  }

  /**
   * Patch streams
   *
   * @remarks
   * Use this method to update the configuration of a stream.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsPatchError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDatastreamError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  datastreamProjectsLocationsStreamsPatch(
    request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "streamsId", value: request.streamsId, schema: s.string() },
        ],
        query: [
          { name: "force", value: request.force, schema: s.optional(s.boolean()) },
          { name: "requestId", value: request.requestId, schema: s.optional(s.string()) },
          { name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) },
          { name: "validateOnly", value: request.validateOnly, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: streamSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsPatchError,
      },
      options,
    );
  }

  /**
   * Run streams
   *
   * @remarks
   * Use this method to start, resume or recover a stream with a non default CDC strategy.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsRunError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDatastreamError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  datastreamProjectsLocationsStreamsRun(
    request: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsRunRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsRunError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}:run",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "streamsId", value: request.streamsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: runStreamRequestSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDatastreamClient.DatastreamProjectsLocationsStreamsRunError,
      },
      options,
    );
  }
}

export namespace GoogleCloudDatastreamClient {
  export type DatastreamProjectsLocationsConnectionProfilesCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Required. The connection profile identifier. */
    connectionProfileId?: string;
    /** Optional. Create the connection profile without validating it. */
    force?: boolean;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must
     * retry your request, the server will know to ignore the request if it has already been
     * completed. The server will guarantee that for at least 60 minutes since the first request.
     * For example, consider a situation where you make an initial request and the request times
     * out. If you make the request again with the same request ID, the server can check if original
     * operation with the same request ID was received, and if so, will ignore the second request.
     * This prevents clients from accidentally creating duplicate commitments. The request ID must
     * be a valid UUID with the exception that zero UUID is not supported
     * (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. Only validate the connection profile, but don't create any resources. The default
     * is false.
     */
    validateOnly?: boolean;
    body: ConnectionProfile;
  };

  export class DatastreamProjectsLocationsConnectionProfilesCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DatastreamProjectsLocationsConnectionProfilesCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DatastreamProjectsLocationsConnectionProfilesDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (connectionProfilesId). */
    connectionProfilesId: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must
     * retry your request, the server will know to ignore the request if it has already been
     * completed. The server will guarantee that for at least 60 minutes after the first request.
     * For example, consider a situation where you make an initial request and the request times
     * out. If you make the request again with the same request ID, the server can check if original
     * operation with the same request ID was received, and if so, will ignore the second request.
     * This prevents clients from accidentally creating duplicate commitments. The request ID must
     * be a valid UUID with the exception that zero UUID is not supported
     * (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  };

  export class DatastreamProjectsLocationsConnectionProfilesDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DatastreamProjectsLocationsConnectionProfilesDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DatastreamProjectsLocationsConnectionProfilesDiscoverRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    body: DiscoverConnectionProfileRequest;
  };

  export class DatastreamProjectsLocationsConnectionProfilesDiscoverError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DatastreamProjectsLocationsConnectionProfilesDiscoverError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DatastreamProjectsLocationsConnectionProfilesGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (connectionProfilesId). */
    connectionProfilesId: string;
  };

  export class DatastreamProjectsLocationsConnectionProfilesGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DatastreamProjectsLocationsConnectionProfilesGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DatastreamProjectsLocationsConnectionProfilesListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Optional. Filter request. */
    filter?: string;
    /** Optional. Order by fields for the result. */
    orderBy?: string;
    /**
     * Optional. Maximum number of connection profiles to return. If unspecified, at most 50
     * connection profiles will be returned. The maximum value is 1000; values above 1000 will be
     * coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. Page token received from a previous `ListConnectionProfiles` call. Provide this to
     * retrieve the subsequent page. When paginating, all other parameters provided to
     * `ListConnectionProfiles` must match the call that provided the page token.
     */
    pageToken?: string;
  };

  export class DatastreamProjectsLocationsConnectionProfilesListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DatastreamProjectsLocationsConnectionProfilesListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DatastreamProjectsLocationsConnectionProfilesPatchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (connectionProfilesId). */
    connectionProfilesId: string;
    /** Optional. Update the connection profile without validating it. */
    force?: boolean;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must
     * retry your request, the server will know to ignore the request if it has already been
     * completed. The server will guarantee that for at least 60 minutes since the first request.
     * For example, consider a situation where you make an initial request and the request times
     * out. If you make the request again with the same request ID, the server can check if original
     * operation with the same request ID was received, and if so, will ignore the second request.
     * This prevents clients from accidentally creating duplicate commitments. The request ID must
     * be a valid UUID with the exception that zero UUID is not supported
     * (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. Field mask is used to specify the fields to be overwritten in the ConnectionProfile
     * resource by the update. The fields specified in the update_mask are relative to the resource,
     * not the full request. A field will be overwritten if it is in the mask. If the user does not
     * provide a mask then all fields will be overwritten.
     */
    updateMask?: string;
    /**
     * Optional. Only validate the connection profile, but don't update any resources. The default
     * is false.
     */
    validateOnly?: boolean;
    body: ConnectionProfile;
  };

  export class DatastreamProjectsLocationsConnectionProfilesPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DatastreamProjectsLocationsConnectionProfilesPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DatastreamProjectsLocationsFetchStaticIpsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Optional. Maximum number of Ips to return, will likely not be specified. */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListStaticIps` call. will likely not be
     * specified.
     */
    pageToken?: string;
  };

  export class DatastreamProjectsLocationsFetchStaticIpsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DatastreamProjectsLocationsFetchStaticIpsError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DatastreamProjectsLocationsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
  };

  export class DatastreamProjectsLocationsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DatastreamProjectsLocationsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DatastreamProjectsLocationsListRequest = {
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

  export class DatastreamProjectsLocationsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DatastreamProjectsLocationsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DatastreamProjectsLocationsOperationsCancelRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (operationsId). */
    operationsId: string;
    body: Record<string, unknown>;
  };

  export class DatastreamProjectsLocationsOperationsCancelError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DatastreamProjectsLocationsOperationsCancelError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DatastreamProjectsLocationsOperationsDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (operationsId). */
    operationsId: string;
  };

  export class DatastreamProjectsLocationsOperationsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DatastreamProjectsLocationsOperationsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DatastreamProjectsLocationsOperationsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (operationsId). */
    operationsId: string;
  };

  export class DatastreamProjectsLocationsOperationsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DatastreamProjectsLocationsOperationsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DatastreamProjectsLocationsOperationsListRequest = {
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

  export class DatastreamProjectsLocationsOperationsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DatastreamProjectsLocationsOperationsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DatastreamProjectsLocationsPrivateConnectionsCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Optional. If set to true, will skip validations. */
    force?: boolean;
    /** Required. The private connectivity identifier. */
    privateConnectionId?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must
     * retry your request, the server will know to ignore the request if it has already been
     * completed. The server will guarantee that for at least 60 minutes since the first request.
     * For example, consider a situation where you make an initial request and the request times
     * out. If you make the request again with the same request ID, the server can check if original
     * operation with the same request ID was received, and if so, will ignore the second request.
     * This prevents clients from accidentally creating duplicate commitments. The request ID must
     * be a valid UUID with the exception that zero UUID is not supported
     * (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. When supplied with PSC Interface config, will get/create the tenant project
     * required for the customer to allow list and won't actually create the private connection.
     */
    validateOnly?: boolean;
    body: PrivateConnection;
  };

  export class DatastreamProjectsLocationsPrivateConnectionsCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DatastreamProjectsLocationsPrivateConnectionsCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DatastreamProjectsLocationsPrivateConnectionsDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (privateConnectionsId). */
    privateConnectionsId: string;
    /**
     * Optional. If set to true, any child routes that belong to this PrivateConnection will also be
     * deleted.
     */
    force?: boolean;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must
     * retry your request, the server will know to ignore the request if it has already been
     * completed. The server will guarantee that for at least 60 minutes after the first request.
     * For example, consider a situation where you make an initial request and the request times
     * out. If you make the request again with the same request ID, the server can check if original
     * operation with the same request ID was received, and if so, will ignore the second request.
     * This prevents clients from accidentally creating duplicate commitments. The request ID must
     * be a valid UUID with the exception that zero UUID is not supported
     * (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  };

  export class DatastreamProjectsLocationsPrivateConnectionsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DatastreamProjectsLocationsPrivateConnectionsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DatastreamProjectsLocationsPrivateConnectionsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (privateConnectionsId). */
    privateConnectionsId: string;
  };

  export class DatastreamProjectsLocationsPrivateConnectionsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DatastreamProjectsLocationsPrivateConnectionsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DatastreamProjectsLocationsPrivateConnectionsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Optional. Filter request. */
    filter?: string;
    /** Optional. Order by fields for the result. */
    orderBy?: string;
    /**
     * Maximum number of private connectivity configurations to return. If unspecified, at most 50
     * private connectivity configurations that will be returned. The maximum value is 1000; values
     * above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. Page token received from a previous `ListPrivateConnections` call. Provide this to
     * retrieve the subsequent page. When paginating, all other parameters provided to
     * `ListPrivateConnections` must match the call that provided the page token.
     */
    pageToken?: string;
  };

  export class DatastreamProjectsLocationsPrivateConnectionsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DatastreamProjectsLocationsPrivateConnectionsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DatastreamProjectsLocationsPrivateConnectionsRoutesCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (privateConnectionsId). */
    privateConnectionsId: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must
     * retry your request, the server will know to ignore the request if it has already been
     * completed. The server will guarantee that for at least 60 minutes since the first request.
     * For example, consider a situation where you make an initial request and the request times
     * out. If you make the request again with the same request ID, the server can check if original
     * operation with the same request ID was received, and if so, will ignore the second request.
     * This prevents clients from accidentally creating duplicate commitments. The request ID must
     * be a valid UUID with the exception that zero UUID is not supported
     * (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /** Required. The Route identifier. */
    routeId?: string;
    body: Route;
  };

  export class DatastreamProjectsLocationsPrivateConnectionsRoutesCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DatastreamProjectsLocationsPrivateConnectionsRoutesCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (privateConnectionsId). */
    privateConnectionsId: string;
    /** Resource name segment (routesId). */
    routesId: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must
     * retry your request, the server will know to ignore the request if it has already been
     * completed. The server will guarantee that for at least 60 minutes after the first request.
     * For example, consider a situation where you make an initial request and the request times
     * out. If you make the request again with the same request ID, the server can check if original
     * operation with the same request ID was received, and if so, will ignore the second request.
     * This prevents clients from accidentally creating duplicate commitments. The request ID must
     * be a valid UUID with the exception that zero UUID is not supported
     * (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  };

  export class DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DatastreamProjectsLocationsPrivateConnectionsRoutesGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (privateConnectionsId). */
    privateConnectionsId: string;
    /** Resource name segment (routesId). */
    routesId: string;
  };

  export class DatastreamProjectsLocationsPrivateConnectionsRoutesGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DatastreamProjectsLocationsPrivateConnectionsRoutesGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DatastreamProjectsLocationsPrivateConnectionsRoutesListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (privateConnectionsId). */
    privateConnectionsId: string;
    /** Optional. Filter request. */
    filter?: string;
    /** Optional. Order by fields for the result. */
    orderBy?: string;
    /**
     * Optional. Maximum number of Routes to return. The service may return fewer than this value.
     * If unspecified, at most 50 Routes will be returned. The maximum value is 1000; values above
     * 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. Page token received from a previous `ListRoutes` call. Provide this to retrieve the
     * subsequent page. When paginating, all other parameters provided to `ListRoutes` must match
     * the call that provided the page token.
     */
    pageToken?: string;
  };

  export class DatastreamProjectsLocationsPrivateConnectionsRoutesListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DatastreamProjectsLocationsPrivateConnectionsRoutesListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DatastreamProjectsLocationsStreamsCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Optional. Create the stream without validating it. */
    force?: boolean;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must
     * retry your request, the server will know to ignore the request if it has already been
     * completed. The server will guarantee that for at least 60 minutes since the first request.
     * For example, consider a situation where you make an initial request and the request times
     * out. If you make the request again with the same request ID, the server can check if original
     * operation with the same request ID was received, and if so, will ignore the second request.
     * This prevents clients from accidentally creating duplicate commitments. The request ID must
     * be a valid UUID with the exception that zero UUID is not supported
     * (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /** Required. The stream identifier. */
    streamId?: string;
    /** Optional. Only validate the stream, but don't create any resources. The default is false. */
    validateOnly?: boolean;
    body: Stream;
  };

  export class DatastreamProjectsLocationsStreamsCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DatastreamProjectsLocationsStreamsCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DatastreamProjectsLocationsStreamsDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (streamsId). */
    streamsId: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must
     * retry your request, the server will know to ignore the request if it has already been
     * completed. The server will guarantee that for at least 60 minutes after the first request.
     * For example, consider a situation where you make an initial request and the request times
     * out. If you make the request again with the same request ID, the server can check if original
     * operation with the same request ID was received, and if so, will ignore the second request.
     * This prevents clients from accidentally creating duplicate commitments. The request ID must
     * be a valid UUID with the exception that zero UUID is not supported
     * (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  };

  export class DatastreamProjectsLocationsStreamsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DatastreamProjectsLocationsStreamsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DatastreamProjectsLocationsStreamsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (streamsId). */
    streamsId: string;
  };

  export class DatastreamProjectsLocationsStreamsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DatastreamProjectsLocationsStreamsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DatastreamProjectsLocationsStreamsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Optional. Filter request. */
    filter?: string;
    /** Optional. Order by fields for the result. */
    orderBy?: string;
    /**
     * Optional. Maximum number of streams to return. If unspecified, at most 50 streams will be
     * returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. Page token received from a previous `ListStreams` call. Provide this to retrieve
     * the subsequent page. When paginating, all other parameters provided to `ListStreams` must
     * match the call that provided the page token.
     */
    pageToken?: string;
  };

  export class DatastreamProjectsLocationsStreamsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DatastreamProjectsLocationsStreamsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DatastreamProjectsLocationsStreamsObjectsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (streamsId). */
    streamsId: string;
    /** Resource name segment (objectsId). */
    objectsId: string;
  };

  export class DatastreamProjectsLocationsStreamsObjectsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DatastreamProjectsLocationsStreamsObjectsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DatastreamProjectsLocationsStreamsObjectsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (streamsId). */
    streamsId: string;
    /**
     * Optional. Maximum number of objects to return. Default is 50. The maximum value is 1000;
     * values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. Page token received from a previous `ListStreamObjectsRequest` call. Provide this
     * to retrieve the subsequent page. When paginating, all other parameters provided to
     * `ListStreamObjectsRequest` must match the call that provided the page token.
     */
    pageToken?: string;
  };

  export class DatastreamProjectsLocationsStreamsObjectsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DatastreamProjectsLocationsStreamsObjectsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DatastreamProjectsLocationsStreamsObjectsLookupRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (streamsId). */
    streamsId: string;
    body: LookupStreamObjectRequest;
  };

  export class DatastreamProjectsLocationsStreamsObjectsLookupError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DatastreamProjectsLocationsStreamsObjectsLookupError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DatastreamProjectsLocationsStreamsObjectsStartBackfillJobRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (streamsId). */
    streamsId: string;
    /** Resource name segment (objectsId). */
    objectsId: string;
    body: StartBackfillJobRequest;
  };

  export class DatastreamProjectsLocationsStreamsObjectsStartBackfillJobError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DatastreamProjectsLocationsStreamsObjectsStartBackfillJobError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (streamsId). */
    streamsId: string;
    /** Resource name segment (objectsId). */
    objectsId: string;
    body: Record<string, unknown>;
  };

  export class DatastreamProjectsLocationsStreamsObjectsStopBackfillJobError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DatastreamProjectsLocationsStreamsObjectsStopBackfillJobError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DatastreamProjectsLocationsStreamsPatchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (streamsId). */
    streamsId: string;
    /** Optional. Update the stream without validating it. */
    force?: boolean;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must
     * retry your request, the server will know to ignore the request if it has already been
     * completed. The server will guarantee that for at least 60 minutes since the first request.
     * For example, consider a situation where you make an initial request and the request times
     * out. If you make the request again with the same request ID, the server can check if original
     * operation with the same request ID was received, and if so, will ignore the second request.
     * This prevents clients from accidentally creating duplicate commitments. The request ID must
     * be a valid UUID with the exception that zero UUID is not supported
     * (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. Field mask is used to specify the fields to be overwritten in the stream resource
     * by the update. The fields specified in the update_mask are relative to the resource, not the
     * full request. A field will be overwritten if it is in the mask. If the user does not provide
     * a mask then all fields will be overwritten.
     */
    updateMask?: string;
    /**
     * Optional. Only validate the stream with the changes, without actually updating it. The
     * default is false.
     */
    validateOnly?: boolean;
    body: Stream;
  };

  export class DatastreamProjectsLocationsStreamsPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DatastreamProjectsLocationsStreamsPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DatastreamProjectsLocationsStreamsRunRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (streamsId). */
    streamsId: string;
    body: RunStreamRequest;
  };

  export class DatastreamProjectsLocationsStreamsRunError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DatastreamProjectsLocationsStreamsRunError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }
}
