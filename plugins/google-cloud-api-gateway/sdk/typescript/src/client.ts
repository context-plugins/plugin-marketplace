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
import { apigatewayApiConfigSchema, type ApigatewayApiConfig } from "./models/apigateway-api-config.js";
import { apigatewayApiSchema, type ApigatewayApi } from "./models/apigateway-api.js";
import { apigatewayGatewaySchema, type ApigatewayGateway } from "./models/apigateway-gateway.js";
import {
  apigatewayListApiConfigsResponseSchema,
  type ApigatewayListApiConfigsResponse,
} from "./models/apigateway-list-api-configs-response.js";
import {
  apigatewayListApisResponseSchema,
  type ApigatewayListApisResponse,
} from "./models/apigateway-list-apis-response.js";
import {
  apigatewayListGatewaysResponseSchema,
  type ApigatewayListGatewaysResponse,
} from "./models/apigateway-list-gateways-response.js";
import {
  apigatewayListLocationsResponseSchema,
  type ApigatewayListLocationsResponse,
} from "./models/apigateway-list-locations-response.js";
import {
  apigatewayListOperationsResponseSchema,
  type ApigatewayListOperationsResponse,
} from "./models/apigateway-list-operations-response.js";
import { apigatewayLocationSchema, type ApigatewayLocation } from "./models/apigateway-location.js";
import { apigatewayOperationSchema, type ApigatewayOperation } from "./models/apigateway-operation.js";
import { apigatewayPolicySchema, type ApigatewayPolicy } from "./models/apigateway-policy.js";
import {
  apigatewaySetIamPolicyRequestSchema,
  type ApigatewaySetIamPolicyRequest,
} from "./models/apigateway-set-iam-policy-request.js";
import {
  apigatewayTestIamPermissionsRequestSchema,
  type ApigatewayTestIamPermissionsRequest,
} from "./models/apigateway-test-iam-permissions-request.js";
import {
  apigatewayTestIamPermissionsResponseSchema,
  type ApigatewayTestIamPermissionsResponse,
} from "./models/apigateway-test-iam-permissions-response.js";
import { googleRpcErrorSchema, type GoogleRpcError } from "./models/google-rpc-error.js";
import { viewSchema, type View } from "./models/view.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Generated from Google's published Discovery document for API Gateway API (apigateway v1, revision
 * 20261102). 30 operation(s).
 */
export class GoogleCloudApiGatewayClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "GOOGLE_CLOUD_API_GATEWAY_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "GoogleCloudApiGatewayClient/1.0.0 TypeScript", schema: s.string() },
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
   * Create configs
   *
   * @remarks
   * Creates a new ApiConfig in a given project and location.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsCreateError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudApiGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  apigatewayProjectsLocationsApisConfigsCreate(
    request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApigatewayOperation,
    GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apisId", value: request.apisId, schema: s.string() },
        ],
        query: [{ name: "apiConfigId", value: request.apiConfigId, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apigatewayApiConfigSchema },
      },
      {
        success: { kind: "json", schema: apigatewayOperationSchema },
        errorFactory: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsCreateError,
      },
      options,
    );
  }

  /**
   * Delete configs
   *
   * @remarks
   * Deletes a single ApiConfig.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsDeleteError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudApiGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  apigatewayProjectsLocationsApisConfigsDelete(
    request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApigatewayOperation,
    GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsDeleteError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs/{configsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apisId", value: request.apisId, schema: s.string() },
          { name: "configsId", value: request.configsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apigatewayOperationSchema },
        errorFactory: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsDeleteError,
      },
      options,
    );
  }

  /**
   * Get configs
   *
   * @remarks
   * Gets details of a single ApiConfig.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsGetError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudApiGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  apigatewayProjectsLocationsApisConfigsGet(
    request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApigatewayApiConfig,
    GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs/{configsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apisId", value: request.apisId, schema: s.string() },
          { name: "configsId", value: request.configsId, schema: s.string() },
        ],
        query: [{ name: "view", value: request.view, schema: s.optional(s.lazy(() => viewSchema)) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apigatewayApiConfigSchema },
        errorFactory: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsGetError,
      },
      options,
    );
  }

  /**
   * Get iam policy configs
   *
   * @remarks
   * Gets the access control policy for a resource. Returns an empty policy if the resource exists
   * and does not have a policy set.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsGetIamPolicyError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudApiGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  apigatewayProjectsLocationsApisConfigsGetIamPolicy(
    request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsGetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApigatewayPolicy,
    GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsGetIamPolicyError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs/{configsId}:getIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apisId", value: request.apisId, schema: s.string() },
          { name: "configsId", value: request.configsId, schema: s.string() },
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
        success: { kind: "json", schema: apigatewayPolicySchema },
        errorFactory: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsGetIamPolicyError,
      },
      options,
    );
  }

  /**
   * List configs
   *
   * @remarks
   * Lists ApiConfigs in a given project and location.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsListError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudApiGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  apigatewayProjectsLocationsApisConfigsList(
    request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApigatewayListApiConfigsResponse,
    GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apisId", value: request.apisId, schema: s.string() },
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
        success: { kind: "json", schema: apigatewayListApiConfigsResponseSchema },
        errorFactory: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsListError,
      },
      options,
    );
  }

  /**
   * Patch configs
   *
   * @remarks
   * Updates the parameters of a single ApiConfig.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsPatchError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudApiGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  apigatewayProjectsLocationsApisConfigsPatch(
    request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApigatewayOperation,
    GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsPatchError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs/{configsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apisId", value: request.apisId, schema: s.string() },
          { name: "configsId", value: request.configsId, schema: s.string() },
        ],
        query: [{ name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apigatewayApiConfigSchema },
      },
      {
        success: { kind: "json", schema: apigatewayOperationSchema },
        errorFactory: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsPatchError,
      },
      options,
    );
  }

  /**
   * Set iam policy configs
   *
   * @remarks
   * Sets the access control policy on the specified resource. Replaces any existing policy. Can
   * return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsSetIamPolicyError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudApiGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  apigatewayProjectsLocationsApisConfigsSetIamPolicy(
    request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsSetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApigatewayPolicy,
    GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsSetIamPolicyError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs/{configsId}:setIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apisId", value: request.apisId, schema: s.string() },
          { name: "configsId", value: request.configsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apigatewaySetIamPolicyRequestSchema },
      },
      {
        success: { kind: "json", schema: apigatewayPolicySchema },
        errorFactory: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsSetIamPolicyError,
      },
      options,
    );
  }

  /**
   * Test iam permissions configs
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
   * GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsTestIamPermissionsError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudApiGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  apigatewayProjectsLocationsApisConfigsTestIamPermissions(
    request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsTestIamPermissionsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApigatewayTestIamPermissionsResponse,
    GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsTestIamPermissionsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs/{configsId}:testIamPermissions",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apisId", value: request.apisId, schema: s.string() },
          { name: "configsId", value: request.configsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apigatewayTestIamPermissionsRequestSchema },
      },
      {
        success: { kind: "json", schema: apigatewayTestIamPermissionsResponseSchema },
        errorFactory:
          GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisConfigsTestIamPermissionsError,
      },
      options,
    );
  }

  /**
   * Create apis
   *
   * @remarks
   * Creates a new Api in a given project and location.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisCreateError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudApiGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  apigatewayProjectsLocationsApisCreate(
    request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<ApigatewayOperation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/apis"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [{ name: "apiId", value: request.apiId, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apigatewayApiSchema },
      },
      {
        success: { kind: "json", schema: apigatewayOperationSchema },
        errorFactory: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisCreateError,
      },
      options,
    );
  }

  /**
   * Delete apis
   *
   * @remarks
   * Deletes a single Api.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisDeleteError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudApiGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  apigatewayProjectsLocationsApisDelete(
    request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<ApigatewayOperation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apisId", value: request.apisId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apigatewayOperationSchema },
        errorFactory: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisDeleteError,
      },
      options,
    );
  }

  /**
   * Get apis
   *
   * @remarks
   * Gets details of a single Api.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisGetError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudApiGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  apigatewayProjectsLocationsApisGet(
    request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisGetRequest,
    options?: RequestOptions,
  ): ApiPromise<ApigatewayApi, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apisId", value: request.apisId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apigatewayApiSchema },
        errorFactory: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisGetError,
      },
      options,
    );
  }

  /**
   * Get iam policy apis
   *
   * @remarks
   * Gets the access control policy for a resource. Returns an empty policy if the resource exists
   * and does not have a policy set.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisGetIamPolicyError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudApiGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  apigatewayProjectsLocationsApisGetIamPolicy(
    request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisGetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApigatewayPolicy,
    GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisGetIamPolicyError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}:getIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apisId", value: request.apisId, schema: s.string() },
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
        success: { kind: "json", schema: apigatewayPolicySchema },
        errorFactory: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisGetIamPolicyError,
      },
      options,
    );
  }

  /**
   * List apis
   *
   * @remarks
   * Lists Apis in a given project and location.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisListError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudApiGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  apigatewayProjectsLocationsApisList(
    request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApigatewayListApisResponse,
    GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/apis"),
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
        success: { kind: "json", schema: apigatewayListApisResponseSchema },
        errorFactory: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisListError,
      },
      options,
    );
  }

  /**
   * Patch apis
   *
   * @remarks
   * Updates the parameters of a single Api.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisPatchError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudApiGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  apigatewayProjectsLocationsApisPatch(
    request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<ApigatewayOperation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apisId", value: request.apisId, schema: s.string() },
        ],
        query: [{ name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apigatewayApiSchema },
      },
      {
        success: { kind: "json", schema: apigatewayOperationSchema },
        errorFactory: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisPatchError,
      },
      options,
    );
  }

  /**
   * Set iam policy apis
   *
   * @remarks
   * Sets the access control policy on the specified resource. Replaces any existing policy. Can
   * return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisSetIamPolicyError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudApiGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  apigatewayProjectsLocationsApisSetIamPolicy(
    request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisSetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApigatewayPolicy,
    GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisSetIamPolicyError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}:setIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apisId", value: request.apisId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apigatewaySetIamPolicyRequestSchema },
      },
      {
        success: { kind: "json", schema: apigatewayPolicySchema },
        errorFactory: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisSetIamPolicyError,
      },
      options,
    );
  }

  /**
   * Test iam permissions apis
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
   * GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisTestIamPermissionsError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudApiGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  apigatewayProjectsLocationsApisTestIamPermissions(
    request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisTestIamPermissionsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApigatewayTestIamPermissionsResponse,
    GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisTestIamPermissionsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}:testIamPermissions",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apisId", value: request.apisId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apigatewayTestIamPermissionsRequestSchema },
      },
      {
        success: { kind: "json", schema: apigatewayTestIamPermissionsResponseSchema },
        errorFactory: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsApisTestIamPermissionsError,
      },
      options,
    );
  }

  /**
   * Create gateways
   *
   * @remarks
   * Creates a new Gateway in a given project and location.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysCreateError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudApiGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  apigatewayProjectsLocationsGatewaysCreate(
    request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApigatewayOperation,
    GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/gateways"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [{ name: "gatewayId", value: request.gatewayId, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apigatewayGatewaySchema },
      },
      {
        success: { kind: "json", schema: apigatewayOperationSchema },
        errorFactory: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysCreateError,
      },
      options,
    );
  }

  /**
   * Delete gateways
   *
   * @remarks
   * Deletes a single Gateway.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysDeleteError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudApiGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  apigatewayProjectsLocationsGatewaysDelete(
    request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApigatewayOperation,
    GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysDeleteError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/gateways/{gatewaysId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "gatewaysId", value: request.gatewaysId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apigatewayOperationSchema },
        errorFactory: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysDeleteError,
      },
      options,
    );
  }

  /**
   * Get gateways
   *
   * @remarks
   * Gets details of a single Gateway.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysGetError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudApiGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  apigatewayProjectsLocationsGatewaysGet(
    request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysGetRequest,
    options?: RequestOptions,
  ): ApiPromise<ApigatewayGateway, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/gateways/{gatewaysId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "gatewaysId", value: request.gatewaysId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apigatewayGatewaySchema },
        errorFactory: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysGetError,
      },
      options,
    );
  }

  /**
   * Get iam policy gateways
   *
   * @remarks
   * Gets the access control policy for a resource. Returns an empty policy if the resource exists
   * and does not have a policy set.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysGetIamPolicyError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudApiGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  apigatewayProjectsLocationsGatewaysGetIamPolicy(
    request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApigatewayPolicy,
    GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysGetIamPolicyError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/gateways/{gatewaysId}:getIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "gatewaysId", value: request.gatewaysId, schema: s.string() },
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
        success: { kind: "json", schema: apigatewayPolicySchema },
        errorFactory: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysGetIamPolicyError,
      },
      options,
    );
  }

  /**
   * List gateways
   *
   * @remarks
   * Lists Gateways in a given project and location.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysListError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudApiGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  apigatewayProjectsLocationsGatewaysList(
    request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApigatewayListGatewaysResponse,
    GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/gateways"),
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
        success: { kind: "json", schema: apigatewayListGatewaysResponseSchema },
        errorFactory: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysListError,
      },
      options,
    );
  }

  /**
   * Patch gateways
   *
   * @remarks
   * Updates the parameters of a single Gateway.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysPatchError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudApiGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  apigatewayProjectsLocationsGatewaysPatch(
    request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApigatewayOperation,
    GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysPatchError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/gateways/{gatewaysId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "gatewaysId", value: request.gatewaysId, schema: s.string() },
        ],
        query: [{ name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apigatewayGatewaySchema },
      },
      {
        success: { kind: "json", schema: apigatewayOperationSchema },
        errorFactory: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysPatchError,
      },
      options,
    );
  }

  /**
   * Set iam policy gateways
   *
   * @remarks
   * Sets the access control policy on the specified resource. Replaces any existing policy. Can
   * return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysSetIamPolicyError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudApiGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  apigatewayProjectsLocationsGatewaysSetIamPolicy(
    request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApigatewayPolicy,
    GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysSetIamPolicyError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/gateways/{gatewaysId}:setIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "gatewaysId", value: request.gatewaysId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apigatewaySetIamPolicyRequestSchema },
      },
      {
        success: { kind: "json", schema: apigatewayPolicySchema },
        errorFactory: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysSetIamPolicyError,
      },
      options,
    );
  }

  /**
   * Test iam permissions gateways
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
   * GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysTestIamPermissionsError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudApiGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  apigatewayProjectsLocationsGatewaysTestIamPermissions(
    request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysTestIamPermissionsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApigatewayTestIamPermissionsResponse,
    GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysTestIamPermissionsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/gateways/{gatewaysId}:testIamPermissions",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "gatewaysId", value: request.gatewaysId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apigatewayTestIamPermissionsRequestSchema },
      },
      {
        success: { kind: "json", schema: apigatewayTestIamPermissionsResponseSchema },
        errorFactory: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGatewaysTestIamPermissionsError,
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
   * @throws {@link GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudApiGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  apigatewayProjectsLocationsGet(
    request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<ApigatewayLocation, GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGetError> {
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
        success: { kind: "json", schema: apigatewayLocationSchema },
        errorFactory: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsGetError,
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
   * @throws {@link GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsListError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudApiGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  apigatewayProjectsLocationsList(
    request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApigatewayListLocationsResponse,
    GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsListError
  > {
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
        success: { kind: "json", schema: apigatewayListLocationsResponseSchema },
        errorFactory: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsListError,
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
   * @throws {@link GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsCancelError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudApiGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  apigatewayProjectsLocationsOperationsCancel(
    request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsCancelRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, unknown>,
    GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsCancelError
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
        errorFactory: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsCancelError,
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
   * @throws {@link GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsDeleteError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudApiGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  apigatewayProjectsLocationsOperationsDelete(
    request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, unknown>,
    GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsDeleteError
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
        errorFactory: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsDeleteError,
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
   * @throws {@link GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsGetError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudApiGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  apigatewayProjectsLocationsOperationsGet(
    request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApigatewayOperation,
    GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsGetError
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
        success: { kind: "json", schema: apigatewayOperationSchema },
        errorFactory: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsGetError,
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
   * @throws {@link GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsListError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudApiGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  apigatewayProjectsLocationsOperationsList(
    request: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApigatewayListOperationsResponse,
    GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsListError
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
        success: { kind: "json", schema: apigatewayListOperationsResponseSchema },
        errorFactory: GoogleCloudApiGatewayClient.ApigatewayProjectsLocationsOperationsListError,
      },
      options,
    );
  }
}

export namespace GoogleCloudApiGatewayClient {
  export type ApigatewayProjectsLocationsApisConfigsCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apisId). */
    apisId: string;
    /**
     * Required. Identifier to assign to the API Config. Must be unique within scope of the parent
     * resource.
     */
    apiConfigId?: string;
    body: ApigatewayApiConfig;
  };

  export class ApigatewayProjectsLocationsApisConfigsCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApigatewayProjectsLocationsApisConfigsCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApigatewayProjectsLocationsApisConfigsDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apisId). */
    apisId: string;
    /** Resource name segment (configsId). */
    configsId: string;
  };

  export class ApigatewayProjectsLocationsApisConfigsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApigatewayProjectsLocationsApisConfigsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApigatewayProjectsLocationsApisConfigsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apisId). */
    apisId: string;
    /** Resource name segment (configsId). */
    configsId: string;
    /**
     * Optional. Specifies which fields of the API Config are returned in the response. Defaults to
     * `BASIC` view.
     */
    view?: View;
  };

  export class ApigatewayProjectsLocationsApisConfigsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApigatewayProjectsLocationsApisConfigsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApigatewayProjectsLocationsApisConfigsGetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apisId). */
    apisId: string;
    /** Resource name segment (configsId). */
    configsId: string;
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

  export class ApigatewayProjectsLocationsApisConfigsGetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApigatewayProjectsLocationsApisConfigsGetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApigatewayProjectsLocationsApisConfigsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apisId). */
    apisId: string;
    /** Optional. Filter. */
    filter?: string;
    /** Optional. Order by parameters. */
    orderBy?: string;
    /** Optional. Page size. */
    pageSize?: number;
    /** Optional. Page token. */
    pageToken?: string;
  };

  export class ApigatewayProjectsLocationsApisConfigsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApigatewayProjectsLocationsApisConfigsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApigatewayProjectsLocationsApisConfigsPatchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apisId). */
    apisId: string;
    /** Resource name segment (configsId). */
    configsId: string;
    /**
     * Optional. Field mask is used to specify the fields to be overwritten in the ApiConfig
     * resource by the update. The fields specified in the update_mask are relative to the resource,
     * not the full request. A field will be overwritten if it is in the mask. The request fails if
     * `update_mask` is missing or empty.
     */
    updateMask?: string;
    body: ApigatewayApiConfig;
  };

  export class ApigatewayProjectsLocationsApisConfigsPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApigatewayProjectsLocationsApisConfigsPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApigatewayProjectsLocationsApisConfigsSetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apisId). */
    apisId: string;
    /** Resource name segment (configsId). */
    configsId: string;
    body: ApigatewaySetIamPolicyRequest;
  };

  export class ApigatewayProjectsLocationsApisConfigsSetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApigatewayProjectsLocationsApisConfigsSetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApigatewayProjectsLocationsApisConfigsTestIamPermissionsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apisId). */
    apisId: string;
    /** Resource name segment (configsId). */
    configsId: string;
    body: ApigatewayTestIamPermissionsRequest;
  };

  export class ApigatewayProjectsLocationsApisConfigsTestIamPermissionsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApigatewayProjectsLocationsApisConfigsTestIamPermissionsError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApigatewayProjectsLocationsApisCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Required. Identifier to assign to the API. Must be unique within scope of the parent
     * resource.
     */
    apiId?: string;
    body: ApigatewayApi;
  };

  export class ApigatewayProjectsLocationsApisCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApigatewayProjectsLocationsApisCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApigatewayProjectsLocationsApisDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apisId). */
    apisId: string;
  };

  export class ApigatewayProjectsLocationsApisDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApigatewayProjectsLocationsApisDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApigatewayProjectsLocationsApisGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apisId). */
    apisId: string;
  };

  export class ApigatewayProjectsLocationsApisGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApigatewayProjectsLocationsApisGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApigatewayProjectsLocationsApisGetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apisId). */
    apisId: string;
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

  export class ApigatewayProjectsLocationsApisGetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApigatewayProjectsLocationsApisGetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApigatewayProjectsLocationsApisListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Optional. Filter. */
    filter?: string;
    /** Optional. Order by parameters. */
    orderBy?: string;
    /** Optional. Page size. */
    pageSize?: number;
    /** Optional. Page token. */
    pageToken?: string;
  };

  export class ApigatewayProjectsLocationsApisListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApigatewayProjectsLocationsApisListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApigatewayProjectsLocationsApisPatchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apisId). */
    apisId: string;
    /**
     * Optional. Field mask is used to specify the fields to be overwritten in the Api resource by
     * the update. The fields specified in the update_mask are relative to the resource, not the
     * full request. A field will be overwritten if it is in the mask. The request fails if
     * `update_mask` is missing or empty.
     */
    updateMask?: string;
    body: ApigatewayApi;
  };

  export class ApigatewayProjectsLocationsApisPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApigatewayProjectsLocationsApisPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApigatewayProjectsLocationsApisSetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apisId). */
    apisId: string;
    body: ApigatewaySetIamPolicyRequest;
  };

  export class ApigatewayProjectsLocationsApisSetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApigatewayProjectsLocationsApisSetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApigatewayProjectsLocationsApisTestIamPermissionsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apisId). */
    apisId: string;
    body: ApigatewayTestIamPermissionsRequest;
  };

  export class ApigatewayProjectsLocationsApisTestIamPermissionsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApigatewayProjectsLocationsApisTestIamPermissionsError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApigatewayProjectsLocationsGatewaysCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Required. Identifier to assign to the Gateway. Must be unique within scope of the parent
     * resource.
     */
    gatewayId?: string;
    body: ApigatewayGateway;
  };

  export class ApigatewayProjectsLocationsGatewaysCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApigatewayProjectsLocationsGatewaysCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApigatewayProjectsLocationsGatewaysDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (gatewaysId). */
    gatewaysId: string;
  };

  export class ApigatewayProjectsLocationsGatewaysDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApigatewayProjectsLocationsGatewaysDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApigatewayProjectsLocationsGatewaysGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (gatewaysId). */
    gatewaysId: string;
  };

  export class ApigatewayProjectsLocationsGatewaysGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApigatewayProjectsLocationsGatewaysGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (gatewaysId). */
    gatewaysId: string;
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

  export class ApigatewayProjectsLocationsGatewaysGetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApigatewayProjectsLocationsGatewaysGetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApigatewayProjectsLocationsGatewaysListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Optional. Filter. */
    filter?: string;
    /** Optional. Order by parameters. */
    orderBy?: string;
    /** Optional. Page size. */
    pageSize?: number;
    /** Optional. Page token. */
    pageToken?: string;
  };

  export class ApigatewayProjectsLocationsGatewaysListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApigatewayProjectsLocationsGatewaysListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApigatewayProjectsLocationsGatewaysPatchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (gatewaysId). */
    gatewaysId: string;
    /**
     * Optional. Field mask is used to specify the fields to be overwritten in the Gateway resource
     * by the update. The fields specified in the update_mask are relative to the resource, not the
     * full request. A field will be overwritten if it is in the mask. The request fails if
     * `update_mask` is missing or empty.
     */
    updateMask?: string;
    body: ApigatewayGateway;
  };

  export class ApigatewayProjectsLocationsGatewaysPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApigatewayProjectsLocationsGatewaysPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (gatewaysId). */
    gatewaysId: string;
    body: ApigatewaySetIamPolicyRequest;
  };

  export class ApigatewayProjectsLocationsGatewaysSetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApigatewayProjectsLocationsGatewaysSetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApigatewayProjectsLocationsGatewaysTestIamPermissionsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (gatewaysId). */
    gatewaysId: string;
    body: ApigatewayTestIamPermissionsRequest;
  };

  export class ApigatewayProjectsLocationsGatewaysTestIamPermissionsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApigatewayProjectsLocationsGatewaysTestIamPermissionsError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApigatewayProjectsLocationsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
  };

  export class ApigatewayProjectsLocationsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApigatewayProjectsLocationsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApigatewayProjectsLocationsListRequest = {
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

  export class ApigatewayProjectsLocationsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApigatewayProjectsLocationsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApigatewayProjectsLocationsOperationsCancelRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (operationsId). */
    operationsId: string;
    body: Record<string, unknown>;
  };

  export class ApigatewayProjectsLocationsOperationsCancelError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApigatewayProjectsLocationsOperationsCancelError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApigatewayProjectsLocationsOperationsDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (operationsId). */
    operationsId: string;
  };

  export class ApigatewayProjectsLocationsOperationsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApigatewayProjectsLocationsOperationsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApigatewayProjectsLocationsOperationsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (operationsId). */
    operationsId: string;
  };

  export class ApigatewayProjectsLocationsOperationsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApigatewayProjectsLocationsOperationsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApigatewayProjectsLocationsOperationsListRequest = {
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

  export class ApigatewayProjectsLocationsOperationsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApigatewayProjectsLocationsOperationsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }
}
