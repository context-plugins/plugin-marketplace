import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  publicApiCreateDatasourceRequestDtoSchema,
  type PublicApiCreateDatasourceRequestDto,
} from "../models/public-api-create-datasource-request-dto.js";
import {
  publicApiCreateDatasourceResponseSchema,
  type PublicApiCreateDatasourceResponse,
} from "../models/public-api-create-datasource-response.js";
import {
  publicApiCreateDatasourceRoleResponseSchema,
  type PublicApiCreateDatasourceRoleResponse,
} from "../models/public-api-create-datasource-role-response.js";
import {
  publicApiDatasourceDiagnosticsWarehouseResponseSchema,
  type PublicApiDatasourceDiagnosticsWarehouseResponse,
} from "../models/public-api-datasource-diagnostics-warehouse-response.js";
import {
  publicApiDatasourceResponsibilitiesResponseSchema,
  type PublicApiDatasourceResponsibilitiesResponse,
} from "../models/public-api-datasource-responsibilities-response.js";
import {
  publicApiDatasourceRoleRequestDtoSchema,
  type PublicApiDatasourceRoleRequestDto,
} from "../models/public-api-datasource-role-request-dto.js";
import {
  publicApiDatasourceRolesResponseSchema,
  type PublicApiDatasourceRolesResponse,
} from "../models/public-api-datasource-roles-response.js";
import {
  publicApiDeleteDatasourceResponseSchema,
  type PublicApiDeleteDatasourceResponse,
} from "../models/public-api-delete-datasource-response.js";
import {
  publicApiDeleteDatasourceRoleResponseSchema,
  type PublicApiDeleteDatasourceRoleResponse,
} from "../models/public-api-delete-datasource-role-response.js";
import {
  publicApiGetDatasourceResponseSchema,
  type PublicApiGetDatasourceResponse,
} from "../models/public-api-get-datasource-response.js";
import {
  publicApiListDatasourcesResponseSchema,
  type PublicApiListDatasourcesResponse,
} from "../models/public-api-list-datasources-response.js";
import {
  publicApiOnboardDatasetsRequestDtoSchema,
  type PublicApiOnboardDatasetsRequestDto,
} from "../models/public-api-onboard-datasets-request-dto.js";
import {
  publicApiOnboardDatasetsStatusResponseSchema,
  type PublicApiOnboardDatasetsStatusResponse,
} from "../models/public-api-onboard-datasets-status-response.js";
import {
  publicApiTestConnectionRequestDtoSchema,
  type PublicApiTestConnectionRequestDto,
} from "../models/public-api-test-connection-request-dto.js";
import {
  publicApiTestConnectionStatusResponseSchema,
  type PublicApiTestConnectionStatusResponse,
} from "../models/public-api-test-connection-status-response.js";
import {
  publicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoSchema,
  type PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDto,
} from "../models/public-api-update-datasource-diagnostics-warehouse-request-dto.js";
import {
  publicApiUpdateDatasourceRequestDtoSchema,
  type PublicApiUpdateDatasourceRequestDto,
} from "../models/public-api-update-datasource-request-dto.js";
import {
  publicApiUpdateDatasourceResponseSchema,
  type PublicApiUpdateDatasourceResponse,
} from "../models/public-api-update-datasource-response.js";
import {
  publicApiUpdateDatasourceResponsibilitiesRequestDtoSchema,
  type PublicApiUpdateDatasourceResponsibilitiesRequestDto,
} from "../models/public-api-update-datasource-responsibilities-request-dto.js";
import {
  publicApiUpdateDatasourceRoleResponseSchema,
  type PublicApiUpdateDatasourceRoleResponse,
} from "../models/public-api-update-datasource-role-response.js";
import type { Servers } from "../servers.js";

/**
 * Soda Cloud API Datasource Endpoints
 */
export class DataSources {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a datasource role
   *
   * @remarks
   * This endpoint allows you to delete a custom datasource role from your organization's Soda Cloud
   * account. Datasource roles define a named set of permissions that control what actions users can
   * perform on individual datasources, such as creating datasets, managing datasource settings,
   * managing permissions, or deleting the datasource.
   *
   * Deletion is performed asynchronously and may take some time to complete.
   *
   * Deletion will fail if the role is still assigned to any datasource permissions or used in
   * responsibility settings.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Authorization
   *
   * Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.
   *
   * ## Tags
   *
   * `Datasources`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link DataSources.DeleteApiV1DatasourcesRolesRoleIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteApiV1DatasourcesRolesRoleId(
    request: DataSources.DeleteApiV1DatasourcesRolesRoleIdRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicApiDeleteDatasourceRoleResponse, DataSources.DeleteApiV1DatasourcesRolesRoleIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/datasources/roles/{roleId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "roleId", value: request.roleId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiDeleteDatasourceRoleResponseSchema },
        errorFactory: DataSources.DeleteApiV1DatasourcesRolesRoleIdError,
      },
      options,
    );
  }

  /**
   * Delete a datasource
   *
   * @remarks
   * Deletes an existing datasource and all its associated resources.
   *
   * The deletion is performed asynchronously.
   *
   * ## Authorization
   *
   * Users with the **Delete** permission on the datasource, or the organization-level **Manage
   * datasources and runners** permission, can delete it.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Tags
   *
   * `Datasources`
   *
   * ## Rate limiting
   *
   * 10 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link DataSources.DeleteApiV1DatasourcesDatasourceIdError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteApiV1DatasourcesDatasourceId(
    request: DataSources.DeleteApiV1DatasourcesDatasourceIdRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicApiDeleteDatasourceResponse, DataSources.DeleteApiV1DatasourcesDatasourceIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/datasources/{datasourceId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "datasourceId", value: request.datasourceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiDeleteDatasourceResponseSchema },
        errorFactory: DataSources.DeleteApiV1DatasourcesDatasourceIdError,
      },
      options,
    );
  }

  /**
   * List datasources
   *
   * @remarks
   * This endpoint allows you to list datasources in your organization.
   *
   * This GET is a paginated API that uses the following parameters to request specific details:
   *
   * - `size`: Supply an integer value between 10 and 1000, inclusive. The default value is 10.
   *
   * - `page`: Supply an integer value. The default value is 0.
   *
   * - `search`: Supply a string value to filter datasources by name (case-insensitive partial
   *   match).
   *
   * ## Authorization
   *
   * Soda only returns datasources for which the user has the **View** permission. Soda Cloud Admins
   * have access to all datasources.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Tags
   *
   * `Datasources`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link DataSources.GetApiV1DatasourcesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1Datasources(
    request: DataSources.GetApiV1DatasourcesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PublicApiListDatasourcesResponse, DataSources.GetApiV1DatasourcesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/datasources"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiListDatasourcesResponseSchema },
        errorFactory: DataSources.GetApiV1DatasourcesError,
      },
      options,
    );
  }

  /**
   * Get status for async connection test
   *
   * @remarks
   * This endpoint allows you to check the status of an asynchronous connection test operation.
   *
   * Use the operation ID returned by the test connection endpoint to poll for its current state.
   *
   * ## Authorization
   *
   * Any authenticated Soda Cloud user in your organization may poll the status of a connection test
   * operation.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Tags
   *
   * `Datasources`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link DataSources.GetApiV1DatasourcesActionsTestConnectionOperationIdError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1DatasourcesActionsTestConnectionOperationId(
    request: DataSources.GetApiV1DatasourcesActionsTestConnectionOperationIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PublicApiTestConnectionStatusResponse,
    DataSources.GetApiV1DatasourcesActionsTestConnectionOperationIdError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/datasources/actions/testConnection/{operationId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "operationId", value: request.operationId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiTestConnectionStatusResponseSchema },
        errorFactory: DataSources.GetApiV1DatasourcesActionsTestConnectionOperationIdError,
      },
      options,
    );
  }

  /**
   * List datasource roles
   *
   * @remarks
   * This endpoint enables you to gather information about the datasource roles available in your
   * organization's Soda Cloud account. Use the datasource roles to manage access to individual
   * datasources.
   *
   * This GET is a paginated API that uses the following parameters to request specific details:
   *
   * - `size`: Supply an integer value between 10 and 100, inclusive. The default value is 100.
   *
   * - `page`: Supply an integer value. The default value is 0.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Authorization
   *
   * Any Soda Cloud user in your organization may execute this query.
   *
   * ## Tags
   *
   * `Datasources`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link DataSources.GetApiV1DatasourcesRolesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1DatasourcesRoles(
    request: DataSources.GetApiV1DatasourcesRolesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PublicApiDatasourceRolesResponse, DataSources.GetApiV1DatasourcesRolesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/datasources/roles"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiDatasourceRolesResponseSchema },
        errorFactory: DataSources.GetApiV1DatasourcesRolesError,
      },
      options,
    );
  }

  /**
   * Get a datasource
   *
   * @remarks
   * This endpoint allows you to retrieve a specific datasource by its ID.
   *
   * ## Authorization
   *
   * Users with the **View** permission on the datasource can retrieve its details.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Tags
   *
   * `Datasources`
   *
   * ## Rate limiting
   *
   * 1000 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link DataSources.GetApiV1DatasourcesDatasourceIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1DatasourcesDatasourceId(
    request: DataSources.GetApiV1DatasourcesDatasourceIdRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicApiGetDatasourceResponse, DataSources.GetApiV1DatasourcesDatasourceIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/datasources/{datasourceId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "datasourceId", value: request.datasourceId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiGetDatasourceResponseSchema },
        errorFactory: DataSources.GetApiV1DatasourcesDatasourceIdError,
      },
      options,
    );
  }

  /**
   * Get datasource diagnostics warehouse configuration
   *
   * @remarks
   * This endpoint allows you to retrieve the diagnostics warehouse configuration for a specific
   * datasource in your organization's Soda Cloud account. The diagnostics warehouse collects
   * scan-related data and securely forwards it to the customer's warehouse for storage and
   * analysis.
   *
   * ## Authorization
   *
   * Users with the **View** permission on the datasource can retrieve its diagnostics warehouse
   * configuration.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Tags
   *
   * `Datasources`
   *
   * ## Rate limiting
   *
   * 1000 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link DataSources.GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1DatasourcesDatasourceIdDiagnosticsWarehouse(
    request: DataSources.GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PublicApiDatasourceDiagnosticsWarehouseResponse,
    DataSources.GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/datasources/{datasourceId}/diagnosticsWarehouse"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "datasourceId", value: request.datasourceId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiDatasourceDiagnosticsWarehouseResponseSchema },
        errorFactory: DataSources.GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError,
      },
      options,
    );
  }

  /**
   * Get status for async dataset onboarding process
   *
   * @remarks
   * This endpoint allows you to check the status of an asynchronous dataset onboarding operation.
   *
   * Use the operation ID returned by the onboard datasets endpoint to poll for its current state.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Tags
   *
   * `Datasources`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link DataSources.GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1DatasourcesDatasourceIdOnboardDatasetsOperationId(
    request: DataSources.GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PublicApiOnboardDatasetsStatusResponse,
    DataSources.GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v1/datasources/{datasourceId}/onboardDatasets/{operationId}",
        ),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [
          { name: "datasourceId", value: request.datasourceId, schema: s.string() },
          { name: "operationId", value: request.operationId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiOnboardDatasetsStatusResponseSchema },
        errorFactory: DataSources.GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdError,
      },
      options,
    );
  }

  /**
   * List datasource responsibilities
   *
   * @remarks
   * This endpoint enables you to gather information about the user and user groups permissions
   * assigned to a datasource, and their associated roles in your organization's Soda Cloud account.
   *
   * This GET is a paginated API that uses the following parameters to request specific details:
   *
   * - `size`: Supply an integer value between 1 and 100, inclusive. The default value is 100.
   *
   * - `page`: Supply an integer value. The default value is 0.
   *
   * ## Authorization
   *
   * Soda only returns the datasource responsibilities to which the user has **View datasource**
   * permissions. Soda Cloud Admins have access to all datasource responsibilities.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Tags
   *
   * `Datasources`
   *
   * ## Rate limiting
   *
   * 100 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link DataSources.GetApiV1DatasourcesDatasourceIdResponsibilitiesError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1DatasourcesDatasourceIdResponsibilities(
    request: DataSources.GetApiV1DatasourcesDatasourceIdResponsibilitiesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PublicApiDatasourceResponsibilitiesResponse,
    DataSources.GetApiV1DatasourcesDatasourceIdResponsibilitiesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/datasources/{datasourceId}/responsibilities"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "datasourceId", value: request.datasourceId, schema: s.string() }],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiDatasourceResponsibilitiesResponseSchema },
        errorFactory: DataSources.GetApiV1DatasourcesDatasourceIdResponsibilitiesError,
      },
      options,
    );
  }

  /**
   * Create a datasource
   *
   * @remarks
   * Creates a new V4 datasource with the provided configuration.
   *
   * The datasource type is extracted from the YAML configuration file contents.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Authorization
   *
   * Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.
   *
   * ## Tags
   *
   * `Datasources`
   *
   * ## Rate limiting
   *
   * 10 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link DataSources.PostApiV1DatasourcesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1Datasources(
    request: DataSources.PostApiV1DatasourcesRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicApiCreateDatasourceResponse, DataSources.PostApiV1DatasourcesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/datasources"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publicApiCreateDatasourceRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: publicApiCreateDatasourceResponseSchema },
        errorFactory: DataSources.PostApiV1DatasourcesError,
      },
      options,
    );
  }

  /**
   * Test datasource connection
   *
   * @remarks
   * This endpoint triggers an asynchronous connection test for a datasource configuration.
   *
   * The response includes an operation ID that you can use to poll the status of the connection
   * test.
   *
   * ## Authorization
   *
   * Any authenticated Soda Cloud user in your organization may test a datasource connection. The
   * test runs against a configuration provided in the request, not against an existing datasource.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Tags
   *
   * `Datasources`
   *
   * ## Rate limiting
   *
   * 10 requests/60 seconds
   *
   * @returns Accepted
   *
   * @throws {@link DataSources.PostApiV1DatasourcesActionsTestConnectionError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1DatasourcesActionsTestConnection(
    request: DataSources.PostApiV1DatasourcesActionsTestConnectionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, DataSources.PostApiV1DatasourcesActionsTestConnectionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/datasources/actions/testConnection"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publicApiTestConnectionRequestDtoSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: DataSources.PostApiV1DatasourcesActionsTestConnectionError,
      },
      options,
    );
  }

  /**
   * Create a datasource role
   *
   * @remarks
   * This endpoint allows you to create a new custom datasource role in your organization's Soda
   * Cloud account. Datasource roles define a named set of permissions that control what actions
   * users can perform on individual datasources, such as creating datasets, managing datasource
   * settings, managing permissions, or deleting the datasource.
   *
   * Once created, the role can be assigned to users or user groups via the datasource
   * responsibilities endpoints.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Authorization
   *
   * Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.
   *
   * ## Tags
   *
   * `Datasources`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link DataSources.PostApiV1DatasourcesRolesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1DatasourcesRoles(
    request: DataSources.PostApiV1DatasourcesRolesRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicApiCreateDatasourceRoleResponse, DataSources.PostApiV1DatasourcesRolesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/datasources/roles"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publicApiDatasourceRoleRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: publicApiCreateDatasourceRoleResponseSchema },
        errorFactory: DataSources.PostApiV1DatasourcesRolesError,
      },
      options,
    );
  }

  /**
   * Update a datasource role
   *
   * @remarks
   * This endpoint allows you to update the name or permissions of an existing custom datasource
   * role. Datasource roles define a named set of permissions that control what actions users can
   * perform on individual datasources, such as creating datasets, managing datasource settings,
   * managing permissions, or deleting the datasource.
   *
   * Changes apply immediately to all users and user groups assigned this role.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Authorization
   *
   * Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.
   *
   * ## Tags
   *
   * `Datasources`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link DataSources.PostApiV1DatasourcesRolesRoleIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1DatasourcesRolesRoleId(
    request: DataSources.PostApiV1DatasourcesRolesRoleIdRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicApiUpdateDatasourceRoleResponse, DataSources.PostApiV1DatasourcesRolesRoleIdError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/datasources/roles/{roleId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "roleId", value: request.roleId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publicApiDatasourceRoleRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: publicApiUpdateDatasourceRoleResponseSchema },
        errorFactory: DataSources.PostApiV1DatasourcesRolesRoleIdError,
      },
      options,
    );
  }

  /**
   * Update a datasource
   *
   * @remarks
   * Updates the configuration of an existing contract (V4) datasource.
   *
   * Only the fields provided in the request body will be updated.
   *
   * ## Authorization
   *
   * Users with the **Manage datasource settings** permission on the datasource, or the
   * organization-level **Manage datasources and runners** permission, can update its configuration.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Tags
   *
   * `Datasources`
   *
   * ## Rate limiting
   *
   * 100 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link DataSources.PostApiV1DatasourcesDatasourceIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1DatasourcesDatasourceId(
    request: DataSources.PostApiV1DatasourcesDatasourceIdRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicApiUpdateDatasourceResponse, DataSources.PostApiV1DatasourcesDatasourceIdError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/datasources/{datasourceId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "datasourceId", value: request.datasourceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publicApiUpdateDatasourceRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: publicApiUpdateDatasourceResponseSchema },
        errorFactory: DataSources.PostApiV1DatasourcesDatasourceIdError,
      },
      options,
    );
  }

  /**
   * Update datasource diagnostics warehouse configuration
   *
   * @remarks
   * This endpoint allows you to update the diagnostics warehouse configuration for a specific
   * datasource in your organization's Soda Cloud account. The diagnostics warehouse collects
   * scan-related data and securely stores it in your warehouse for storage and analysis.
   *
   * ## Table name template
   *
   * The `tableNameTemplate` field controls how diagnostic tables are named in the warehouse. Use
   * the `{dataset_name}` placeholder to include the source dataset name. For example,
   * `dwh_{dataset_name}_failed` produces table names like `dwh_orders_failed`.
   *
   * ## Authorization
   *
   * Users with the **Manage datasource settings** permission on the datasource, or the
   * organization-level **Manage datasources and runners** permission, can update its diagnostics
   * warehouse configuration.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Tags
   *
   * `Datasources`
   *
   * ## Rate limiting
   *
   * 100 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link DataSources.PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1DatasourcesDatasourceIdDiagnosticsWarehouse(
    request: DataSources.PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PublicApiDatasourceDiagnosticsWarehouseResponse,
    DataSources.PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/datasources/{datasourceId}/diagnosticsWarehouse"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "datasourceId", value: request.datasourceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: publicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoSchema,
        },
      },
      {
        success: { kind: "json", schema: publicApiDatasourceDiagnosticsWarehouseResponseSchema },
        errorFactory: DataSources.PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError,
      },
      options,
    );
  }

  /**
   * Trigger datasource discovery
   *
   * @remarks
   * This endpoint triggers a discovery scan on the specified datasource.
   *
   * Discovery scans detect new tables and schemas in the datasource. Use this to run discovery
   * on-demand instead of waiting for the scheduled cron.
   *
   * The response includes a `Location` header and `X-Soda-Scan-Id` header identifying the triggered
   * scan. Use the scan ID with the **Get scan status** endpoint to poll for completion.
   *
   * ## Authorization
   *
   * Users with the **Manage datasource settings** permission on the datasource, or the
   * organization-level **Manage datasources and runners** permission, can trigger discovery on the
   * datasource.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Tags
   *
   * `Datasources`
   *
   * ## Rate limiting
   *
   * 10 requests/60 seconds
   *
   * @returns Created
   *
   * @throws {@link DataSources.PostApiV1DatasourcesDatasourceIdDiscoverError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1DatasourcesDatasourceIdDiscover(
    request: DataSources.PostApiV1DatasourcesDatasourceIdDiscoverRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, DataSources.PostApiV1DatasourcesDatasourceIdDiscoverError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/datasources/{datasourceId}/discover"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "datasourceId", value: request.datasourceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: DataSources.PostApiV1DatasourcesDatasourceIdDiscoverError,
      },
      options,
    );
  }

  /**
   * Onboard discovered datasets
   *
   * @remarks
   * This endpoint triggers the asynchronous onboarding of discovered datasets for a datasource.
   *
   * Supply a list of discovered dataset IDs in the request body to onboard them as datasets.
   *
   * The response includes an onboarding ID that you can use to poll the status of the onboarding
   * process.
   *
   * ## Authorization
   *
   * Users with the **Create datasets** permission on the datasource, or the organization-level
   * **Create new datasources and datasets** permission, can onboard discovered datasets.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Tags
   *
   * `Datasources`
   *
   * ## Rate limiting
   *
   * 10 requests/60 seconds
   *
   * @returns Accepted
   *
   * @throws {@link DataSources.PostApiV1DatasourcesDatasourceIdOnboardDatasetsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1DatasourcesDatasourceIdOnboardDatasets(
    request: DataSources.PostApiV1DatasourcesDatasourceIdOnboardDatasetsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, DataSources.PostApiV1DatasourcesDatasourceIdOnboardDatasetsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/datasources/{datasourceId}/onboardDatasets"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "datasourceId", value: request.datasourceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publicApiOnboardDatasetsRequestDtoSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: DataSources.PostApiV1DatasourcesDatasourceIdOnboardDatasetsError,
      },
      options,
    );
  }

  /**
   * Update datasource responsibilities
   *
   * @remarks
   * This endpoint enables you to update the user and user groups permissions and their associated
   * roles for a datasource in your organization's Soda Cloud account.
   *
   * **Note**: This API fully replaces the existing responsibilities. The entire list of
   * responsibilities must be provided in the request, including both new and existing entries, as
   * any omissions will result in their removal.
   *
   * ## Authorization
   *
   * Only users with **Manage datasource responsibilities** permission can update datasource
   * responsibilities. Soda Cloud Admins have permission to update all datasources
   * responsibilities.The Response of this call, when successful, is `201` and contains header
   * `Location` which identify the URL where the responsibilities will eventually become available.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Tags
   *
   * `Datasources`
   *
   * ## Rate limiting
   *
   * 100 requests/60 seconds
   *
   * @returns Created
   *
   * @throws {@link DataSources.PostApiV1DatasourcesDatasourceIdResponsibilitiesError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1DatasourcesDatasourceIdResponsibilities(
    request: DataSources.PostApiV1DatasourcesDatasourceIdResponsibilitiesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, DataSources.PostApiV1DatasourcesDatasourceIdResponsibilitiesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/datasources/{datasourceId}/responsibilities"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "datasourceId", value: request.datasourceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: publicApiUpdateDatasourceResponsibilitiesRequestDtoSchema,
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: DataSources.PostApiV1DatasourcesDatasourceIdResponsibilitiesError,
      },
      options,
    );
  }
}

export namespace DataSources {
  export type DeleteApiV1DatasourcesRolesRoleIdRequest = {
    roleId: string;
  };

  export class DeleteApiV1DatasourcesRolesRoleIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteApiV1DatasourcesRolesRoleIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteApiV1DatasourcesDatasourceIdRequest = {
    datasourceId: string;
  };

  export class DeleteApiV1DatasourcesDatasourceIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteApiV1DatasourcesDatasourceIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1DatasourcesRequest = {
    page?: number;
    search?: string;
    size?: number;
  };

  export class GetApiV1DatasourcesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1DatasourcesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1DatasourcesActionsTestConnectionOperationIdRequest = {
    operationId: string;
  };

  export class GetApiV1DatasourcesActionsTestConnectionOperationIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1DatasourcesActionsTestConnectionOperationIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1DatasourcesRolesRequest = {
    page?: number;
    size?: number;
  };

  export class GetApiV1DatasourcesRolesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1DatasourcesRolesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1DatasourcesDatasourceIdRequest = {
    datasourceId: string;
  };

  export class GetApiV1DatasourcesDatasourceIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1DatasourcesDatasourceIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseRequest = {
    datasourceId: string;
  };

  export class GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdRequest = {
    datasourceId: string;
    operationId: string;
  };

  export class GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1DatasourcesDatasourceIdResponsibilitiesRequest = {
    datasourceId: string;
    page?: number;
    size?: number;
  };

  export class GetApiV1DatasourcesDatasourceIdResponsibilitiesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1DatasourcesDatasourceIdResponsibilitiesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1DatasourcesRequest = {
    body: PublicApiCreateDatasourceRequestDto;
  };

  export class PostApiV1DatasourcesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1DatasourcesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1DatasourcesActionsTestConnectionRequest = {
    body: PublicApiTestConnectionRequestDto;
  };

  export class PostApiV1DatasourcesActionsTestConnectionError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1DatasourcesActionsTestConnectionError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1DatasourcesRolesRequest = {
    body: PublicApiDatasourceRoleRequestDto;
  };

  export class PostApiV1DatasourcesRolesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1DatasourcesRolesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1DatasourcesRolesRoleIdRequest = {
    roleId: string;
    body: PublicApiDatasourceRoleRequestDto;
  };

  export class PostApiV1DatasourcesRolesRoleIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1DatasourcesRolesRoleIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1DatasourcesDatasourceIdRequest = {
    datasourceId: string;
    body: PublicApiUpdateDatasourceRequestDto;
  };

  export class PostApiV1DatasourcesDatasourceIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1DatasourcesDatasourceIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseRequest = {
    datasourceId: string;
    body: PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDto;
  };

  export class PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1DatasourcesDatasourceIdDiscoverRequest = {
    datasourceId: string;
  };

  export class PostApiV1DatasourcesDatasourceIdDiscoverError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1DatasourcesDatasourceIdDiscoverError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1DatasourcesDatasourceIdOnboardDatasetsRequest = {
    datasourceId: string;
    body: PublicApiOnboardDatasetsRequestDto;
  };

  export class PostApiV1DatasourcesDatasourceIdOnboardDatasetsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1DatasourcesDatasourceIdOnboardDatasetsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1DatasourcesDatasourceIdResponsibilitiesRequest = {
    datasourceId: string;
    body: PublicApiUpdateDatasourceResponsibilitiesRequestDto;
  };

  export class PostApiV1DatasourcesDatasourceIdResponsibilitiesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1DatasourcesDatasourceIdResponsibilitiesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
