import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  datasetComputeWarehouseConfigurationDtoSchema,
  type DatasetComputeWarehouseConfigurationDto,
} from "../models/dataset-compute-warehouse-configuration-dto.js";
import { datasetsContentDtoSchema, type DatasetsContentDto } from "../models/datasets-content-dto.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  publicApiCreateColumnMetricMonitorRequestDtoSchema,
  type PublicApiCreateColumnMetricMonitorRequestDto,
} from "../models/public-api-create-column-metric-monitor-request-dto.js";
import {
  publicApiCreateCustomSqlMonitorRequestDtoSchema,
  type PublicApiCreateCustomSqlMonitorRequestDto,
} from "../models/public-api-create-custom-sql-monitor-request-dto.js";
import {
  publicApiCreateCustomSqlMonitorResponseSchema,
  type PublicApiCreateCustomSqlMonitorResponse,
} from "../models/public-api-create-custom-sql-monitor-response.js";
import {
  publicApiDatasetDiagnosticsWarehouseResponseSchema,
  type PublicApiDatasetDiagnosticsWarehouseResponse,
} from "../models/public-api-dataset-diagnostics-warehouse-response.js";
import {
  publicApiDatasetMetricMonitoringResponseSchema,
  type PublicApiDatasetMetricMonitoringResponse,
} from "../models/public-api-dataset-metric-monitoring-response.js";
import {
  publicApiDatasetProfilingResponseSchema,
  type PublicApiDatasetProfilingResponse,
} from "../models/public-api-dataset-profiling-response.js";
import {
  publicApiDatasetResponsibilitiesResponseSchema,
  type PublicApiDatasetResponsibilitiesResponse,
} from "../models/public-api-dataset-responsibilities-response.js";
import {
  publicApiDatasetRoleRequestDtoSchema,
  type PublicApiDatasetRoleRequestDto,
} from "../models/public-api-dataset-role-request-dto.js";
import {
  publicApiDatasetRolesResponseSchema,
  type PublicApiDatasetRolesResponse,
} from "../models/public-api-dataset-roles-response.js";
import {
  publicApiDatasetsResponseSchema,
  type PublicApiDatasetsResponse,
} from "../models/public-api-datasets-response.js";
import {
  publicApiDeleteDatasetResponseSchema,
  type PublicApiDeleteDatasetResponse,
} from "../models/public-api-delete-dataset-response.js";
import {
  publicApiListDatasetColumnsResponseSchema,
  type PublicApiListDatasetColumnsResponse,
} from "../models/public-api-list-dataset-columns-response.js";
import {
  publicApiSetColumnAttributesRequestDtoSchema,
  type PublicApiSetColumnAttributesRequestDto,
} from "../models/public-api-set-column-attributes-request-dto.js";
import {
  publicApiUpdateColumnMetricMonitorRequestDtoSchema,
  type PublicApiUpdateColumnMetricMonitorRequestDto,
} from "../models/public-api-update-column-metric-monitor-request-dto.js";
import {
  publicApiUpdateColumnMetricMonitorResponseSchema,
  type PublicApiUpdateColumnMetricMonitorResponse,
} from "../models/public-api-update-column-metric-monitor-response.js";
import {
  publicApiUpdateCustomSqlMonitorRequestDtoSchema,
  type PublicApiUpdateCustomSqlMonitorRequestDto,
} from "../models/public-api-update-custom-sql-monitor-request-dto.js";
import {
  publicApiUpdateCustomSqlMonitorResponseSchema,
  type PublicApiUpdateCustomSqlMonitorResponse,
} from "../models/public-api-update-custom-sql-monitor-response.js";
import {
  publicApiUpdateDatasetDtoSchema,
  type PublicApiUpdateDatasetDto,
} from "../models/public-api-update-dataset-dto.js";
import {
  publicApiUpdateDatasetResponsibilitiesRequestDtoSchema,
  type PublicApiUpdateDatasetResponsibilitiesRequestDto,
} from "../models/public-api-update-dataset-responsibilities-request-dto.js";
import {
  publicApiUpdateDatasetRoleResponseSchema,
  type PublicApiUpdateDatasetRoleResponse,
} from "../models/public-api-update-dataset-role-response.js";
import type { Servers } from "../servers.js";

/**
 * Soda Cloud API Dataset Endpoints
 */
export class Datasets {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a dataset role
   *
   * @remarks
   * This endpoint allows you to delete a custom dataset role from your organization's Soda Cloud
   * account. Dataset roles define a named set of permissions that control what actions users can
   * perform on individual datasets, such as managing checks, viewing profiling data, configuring
   * the dataset, or managing incidents.
   *
   * Deletion is performed asynchronously and may take some time to complete.
   *
   * Deletion will fail if the role is still assigned to any dataset permissions or used in
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
   * `Datasets`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Datasets.DeleteApiV1DatasetsRolesRoleIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteApiV1DatasetsRolesRoleId(
    request: Datasets.DeleteApiV1DatasetsRolesRoleIdRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicApiDeleteDatasetResponse, Datasets.DeleteApiV1DatasetsRolesRoleIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/datasets/roles/{roleId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "roleId", value: request.roleId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiDeleteDatasetResponseSchema },
        errorFactory: Datasets.DeleteApiV1DatasetsRolesRoleIdError,
      },
      options,
    );
  }

  /**
   * Delete dataset
   *
   * @remarks
   * This endpoint enables you to delete an existing dataset in your organization's Soda Cloud
   * account.
   *
   * Deletion is not immediate and can take some time to complete, depending on the size of your
   * dataset. You can check the status of the deletion by calling the **Get dataset** endpoint.
   *
   * ## Authorization
   *
   * Only users with **Delete dataset** permission can delete a dataset. Soda Cloud Admins have
   * permission to delete any dataset.**See Manage dataset roles for more information.**
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
   * `Datasets`
   *
   * ## Rate limiting
   *
   * 10 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Datasets.DeleteApiV1DatasetsDatasetIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteApiV1DatasetsDatasetId(
    request: Datasets.DeleteApiV1DatasetsDatasetIdRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicApiDeleteDatasetResponse, Datasets.DeleteApiV1DatasetsDatasetIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/datasets/{datasetId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "datasetId", value: request.datasetId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiDeleteDatasetResponseSchema },
        errorFactory: Datasets.DeleteApiV1DatasetsDatasetIdError,
      },
      options,
    );
  }

  /**
   * Delete a column metric monitor
   *
   * @remarks
   * This endpoint allows you to delete a column metric monitor for a specific dataset in your
   * organization's Soda Cloud account.
   *
   * ## Authorization
   *
   * Only users with **Manage checks** permission (V3 datasets) or **Manage contracts** permission
   * (V4 datasets) can delete column metric monitors. Soda Cloud Admins can delete column metric
   * monitors for all datasets. **See Manage dataset roles for more information.**
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
   * `Datasets`
   *
   * ## Rate limiting
   *
   * 100 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Datasets.DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorId(
    request: Datasets.DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PublicApiDeleteDatasetResponse,
    Datasets.DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/datasets/{datasetId}/columnMetricMonitors/{monitorId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [
          { name: "datasetId", value: request.datasetId, schema: s.string() },
          { name: "monitorId", value: request.monitorId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiDeleteDatasetResponseSchema },
        errorFactory: Datasets.DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError,
      },
      options,
    );
  }

  /**
   * Delete a custom SQL monitor
   *
   * @remarks
   * This endpoint allows you to delete a custom SQL monitor for a specific dataset in your
   * organization's Soda Cloud account.
   *
   * ## Authorization
   *
   * Only users with **Manage contracts** permission can delete custom SQL monitors. Soda Cloud
   * Admins can delete custom SQL monitors for all datasets. **See Manage dataset roles for more
   * information.**
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
   * `Datasets`
   *
   * ## Rate limiting
   *
   * 100 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Datasets.DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorId(
    request: Datasets.DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PublicApiDeleteDatasetResponse,
    Datasets.DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/datasets/{datasetId}/customSqlMonitors/{monitorId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [
          { name: "datasetId", value: request.datasetId, schema: s.string() },
          { name: "monitorId", value: request.monitorId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiDeleteDatasetResponseSchema },
        errorFactory: Datasets.DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError,
      },
      options,
    );
  }

  /**
   * Dataset information
   *
   * @remarks
   * This endpoint enables you to gather information about the datasets that in exist in your
   * organization's Soda Cloud account, including information about the Soda Cloud resources with
   * which it is associated, such as data source, incidents, attributes and health status.
   *
   * This GET is a paginated API that uses the following parameters to request specific details:
   *
   * - `size`: Supply an integer value between 10 and 1000, inclusive. The default value is 10.
   *
   * - `page`: Supply an integer value. The default value is 0.
   *
   * - `from`: Optionally, use this parameter to collect only the information for datasets that have
   *   been updated after a particular point in time. Supply an ISO8601 timestamp value. Example:
   *   `2023-12-31T10:15:30+01:00`
   *
   * - `datasourceName`: Optionally, use this parameter to collect only the information for datasets
   *   associated with a specific datasource.
   *
   * - `search`: Optionally, use this parameter to perform a fuzzy search on the dataset name.
   *
   * If not specified, the query gathers information for all datasets in the account and sorts the
   * results first by dataset name and then by datasource name in ascending order.
   *
   * ## Authorization
   *
   * Soda only returns the datasets to which the user has **View dataset** permissions. Soda Cloud
   * Admins have access to all datasets.**See Manage dataset roles for more information.**
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
   * `Datasets`
   *
   * ## Rate limiting
   *
   * 30 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Datasets.GetApiV1DatasetsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1Datasets(
    request: Datasets.GetApiV1DatasetsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PublicApiDatasetsResponse, Datasets.GetApiV1DatasetsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/datasets"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [],
        query: [
          { name: "datasourceName", value: request.datasourceName, schema: s.optional(s.string()) },
          { name: "from", value: request.from, schema: s.optional(s.dateTime()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiDatasetsResponseSchema },
        errorFactory: Datasets.GetApiV1DatasetsError,
      },
      options,
    );
  }

  /**
   * Get dataset by qualified name
   *
   * @remarks
   * This endpoint enables you to retrieve a single dataset by its qualified name
   * (contractIdentifier) from your organization's Soda Cloud account.
   *
   * ## Authorization
   *
   * Only users with **View dataset** permission can view a dataset. Soda Cloud Admins have
   * permission to view any dataset. **See Manage dataset roles for more information.**
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
   * `Datasets`
   *
   * ## Rate limiting
   *
   * 1000 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Datasets.GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedName(
    request: Datasets.GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameRequest,
    options?: RequestOptions,
  ): ApiPromise<
    DatasetsContentDto,
    Datasets.GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/datasets/byDatasetQualifiedName/{datasetQualifiedName}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [
          { name: "datasetQualifiedName", value: request.datasetQualifiedName, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: datasetsContentDtoSchema },
        errorFactory: Datasets.GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameError,
      },
      options,
    );
  }

  /**
   * List dataset roles
   *
   * @remarks
   * This endpoint enables you to gather information about the dataset roles available in your
   * organization's Soda Cloud account. Use the dataset roles to manage access to individual
   * datasets.
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
   * `Datasets`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Datasets.GetApiV1DatasetsRolesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1DatasetsRoles(
    request: Datasets.GetApiV1DatasetsRolesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PublicApiDatasetRolesResponse, Datasets.GetApiV1DatasetsRolesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/datasets/roles"),
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
        success: { kind: "json", schema: publicApiDatasetRolesResponseSchema },
        errorFactory: Datasets.GetApiV1DatasetsRolesError,
      },
      options,
    );
  }

  /**
   * Get dataset
   *
   * @remarks
   * This endpoint enables you to retrieve a single dataset by its ID from your organization's Soda
   * Cloud account.
   *
   * ## Authorization
   *
   * Only users with **View dataset** permission can view a dataset. Soda Cloud Admins have
   * permission to view any dataset. **See Manage dataset roles for more information.**
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
   * `Datasets`
   *
   * ## Rate limiting
   *
   * 1000 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Datasets.GetApiV1DatasetsDatasetIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1DatasetsDatasetId(
    request: Datasets.GetApiV1DatasetsDatasetIdRequest,
    options?: RequestOptions,
  ): ApiPromise<DatasetsContentDto, Datasets.GetApiV1DatasetsDatasetIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/datasets/{datasetId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "datasetId", value: request.datasetId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: datasetsContentDtoSchema },
        errorFactory: Datasets.GetApiV1DatasetsDatasetIdError,
      },
      options,
    );
  }

  /**
   * List the active columns of a dataset with their attribute values
   *
   * @remarks
   * Returns the active columns of a dataset, each with the attribute values currently assigned to
   * it.
   *
   * Columns are ordered by name ascending. Columns with no assigned attribute values are returned
   * with an empty `attributes` map.
   *
   * This GET is a paginated API that uses the following parameters to request specific details:
   *
   * - `size`: Supply an integer value between 10 and 1000, inclusive. The default value is 1000.
   *
   * - `page`: Supply a non-negative integer. The default value is 0.
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
   * Users must have dataset role permission VIEW to execute this call.
   *
   * ## Tags
   *
   * `Datasets`
   *
   * ## Rate limiting
   *
   * 1000 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Datasets.GetApiV1DatasetsDatasetIdColumnsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1DatasetsDatasetIdColumns(
    request: Datasets.GetApiV1DatasetsDatasetIdColumnsRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicApiListDatasetColumnsResponse, Datasets.GetApiV1DatasetsDatasetIdColumnsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/datasets/{datasetId}/columns"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "datasetId", value: request.datasetId, schema: s.string() }],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiListDatasetColumnsResponseSchema },
        errorFactory: Datasets.GetApiV1DatasetsDatasetIdColumnsError,
      },
      options,
    );
  }

  /**
   * Get dataset compute warehouse configuration
   *
   * @remarks
   * This endpoint retrieves the compute warehouse configuration for a specific dataset in your
   * organization's Soda Cloud account. When the compute warehouse configuration is enabled, the
   * warehouse in the configuration will be used for compute-heavy tasks like data contract
   * execution, metric monitoring, and profiling.
   *
   * ## Authorization
   *
   * Only users with **View dataset** permission can retrieve dataset compute warehouse
   * configuration. Soda Cloud Admins have permission to view all datasets.**See Manage dataset
   * roles for more information.**
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
   * `Datasets`
   *
   * ## Rate limiting
   *
   * 100 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Datasets.GetApiV1DatasetsDatasetIdComputeWarehouseError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1DatasetsDatasetIdComputeWarehouse(
    request: Datasets.GetApiV1DatasetsDatasetIdComputeWarehouseRequest,
    options?: RequestOptions,
  ): ApiPromise<
    DatasetComputeWarehouseConfigurationDto,
    Datasets.GetApiV1DatasetsDatasetIdComputeWarehouseError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/datasets/{datasetId}/computeWarehouse"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "datasetId", value: request.datasetId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: datasetComputeWarehouseConfigurationDtoSchema },
        errorFactory: Datasets.GetApiV1DatasetsDatasetIdComputeWarehouseError,
      },
      options,
    );
  }

  /**
   * Get dataset diagnostics warehouse information
   *
   * @remarks
   * This endpoint allows you to retrieve detailed diagnostics warehouse information for a specific
   * dataset in your organization's Soda Cloud account. The diagnostics warehouse collects
   * scan-related data and securely forwards it to the customer's warehouse for storage and
   * analysis.
   *
   * ## Authorization
   *
   * Only users with **View dataset** permission can view dataset diagnostics warehouse. Soda Cloud
   * Admins have access to diagnostics warehouse information for all datasets.**See Manage dataset
   * roles for more information.**
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
   * `Datasets`
   *
   * ## Rate limiting
   *
   * 1000 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Datasets.GetApiV1DatasetsDatasetIdDiagnosticsWarehouseError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1DatasetsDatasetIdDiagnosticsWarehouse(
    request: Datasets.GetApiV1DatasetsDatasetIdDiagnosticsWarehouseRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PublicApiDatasetDiagnosticsWarehouseResponse,
    Datasets.GetApiV1DatasetsDatasetIdDiagnosticsWarehouseError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/datasets/{datasetId}/diagnosticsWarehouse"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "datasetId", value: request.datasetId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiDatasetDiagnosticsWarehouseResponseSchema },
        errorFactory: Datasets.GetApiV1DatasetsDatasetIdDiagnosticsWarehouseError,
      },
      options,
    );
  }

  /**
   * Get dataset metric monitoring configuration information
   *
   * @remarks
   * This endpoint allows you to retrieve detailed metric monitoring configuration information for a
   * specific dataset in your organization's Soda Cloud account.
   *
   * ## Authorization
   *
   * Only users with **View dataset** permission can view dataset metric monitoring configuration.
   * Soda Cloud Admins have access to metric monitoring configuration information for all
   * datasets.**See Manage dataset roles for more information.**
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
   * `Datasets`
   *
   * ## Rate limiting
   *
   * 1000 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Datasets.GetApiV1DatasetsDatasetIdMetricMonitoringError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1DatasetsDatasetIdMetricMonitoring(
    request: Datasets.GetApiV1DatasetsDatasetIdMetricMonitoringRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PublicApiDatasetMetricMonitoringResponse,
    Datasets.GetApiV1DatasetsDatasetIdMetricMonitoringError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/datasets/{datasetId}/metricMonitoring"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "datasetId", value: request.datasetId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiDatasetMetricMonitoringResponseSchema },
        errorFactory: Datasets.GetApiV1DatasetsDatasetIdMetricMonitoringError,
      },
      options,
    );
  }

  /**
   * Get dataset profiling information
   *
   * @remarks
   * This endpoint allows you to retrieve detailed profiling information for a specific dataset in
   * your organization's Soda Cloud account. Profiling information provides insights into the
   * dataset's structure, statistical summaries, and data characteristics.
   *
   * ## Authorization
   *
   * Only users with **Access dataset profiling and sampling** permission can view dataset
   * profiling. Soda Cloud Admins have access to profiling information for all datasets.**See Manage
   * dataset roles for more information.**
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
   * `Datasets`
   *
   * ## Rate limiting
   *
   * 1000 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Datasets.GetApiV1DatasetsDatasetIdProfilingError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1DatasetsDatasetIdProfiling(
    request: Datasets.GetApiV1DatasetsDatasetIdProfilingRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicApiDatasetProfilingResponse, Datasets.GetApiV1DatasetsDatasetIdProfilingError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/datasets/{datasetId}/profiling"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "datasetId", value: request.datasetId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiDatasetProfilingResponseSchema },
        errorFactory: Datasets.GetApiV1DatasetsDatasetIdProfilingError,
      },
      options,
    );
  }

  /**
   * List dataset responsibilities
   *
   * @remarks
   * This endpoint enables you to gather information about the user and user groups permissions
   * assigned to a dataset, and their associated roles in your organization's Soda Cloud account.
   *
   * This GET is a paginated API that uses the following parameters to request specific details:
   *
   * - `size`: Supply an integer value between 1 and 100, inclusive. The default value is 100.
   *
   * - `page`: Supply an integer value. The default value is 0.
   *
   * ## Authorization
   *
   * Soda only returns the dataset responsibilities to which the user has **View dataset**
   * permissions. Soda Cloud Admins have access to all dataset responsibilities.**See Manage dataset
   * roles for more information.**
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
   * `Datasets`
   *
   * ## Rate limiting
   *
   * 100 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Datasets.GetApiV1DatasetsDatasetIdResponsibilitiesError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1DatasetsDatasetIdResponsibilities(
    request: Datasets.GetApiV1DatasetsDatasetIdResponsibilitiesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PublicApiDatasetResponsibilitiesResponse,
    Datasets.GetApiV1DatasetsDatasetIdResponsibilitiesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/datasets/{datasetId}/responsibilities"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "datasetId", value: request.datasetId, schema: s.string() }],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiDatasetResponsibilitiesResponseSchema },
        errorFactory: Datasets.GetApiV1DatasetsDatasetIdResponsibilitiesError,
      },
      options,
    );
  }

  /**
   * Create a dataset role
   *
   * @remarks
   * This endpoint allows you to create a new custom dataset role in your organization's Soda Cloud
   * account. Dataset roles define a named set of permissions that control what actions users can
   * perform on individual datasets, such as managing checks, viewing profiling data, configuring
   * the dataset, or managing incidents.
   *
   * Once created, the role can be assigned to users or user groups via the dataset responsibilities
   * endpoints.
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
   * `Datasets`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Datasets.PostApiV1DatasetsRolesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1DatasetsRoles(
    request: Datasets.PostApiV1DatasetsRolesRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicApiUpdateDatasetRoleResponse, Datasets.PostApiV1DatasetsRolesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/datasets/roles"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publicApiDatasetRoleRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: publicApiUpdateDatasetRoleResponseSchema },
        errorFactory: Datasets.PostApiV1DatasetsRolesError,
      },
      options,
    );
  }

  /**
   * Update a dataset role
   *
   * @remarks
   * This endpoint allows you to update the name or permissions of an existing custom dataset role.
   * Dataset roles define a named set of permissions that control what actions users can perform on
   * individual datasets, such as managing checks, viewing profiling data, configuring the dataset,
   * or managing incidents.
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
   * `Datasets`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Datasets.PostApiV1DatasetsRolesRoleIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1DatasetsRolesRoleId(
    request: Datasets.PostApiV1DatasetsRolesRoleIdRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicApiUpdateDatasetRoleResponse, Datasets.PostApiV1DatasetsRolesRoleIdError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/datasets/roles/{roleId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "roleId", value: request.roleId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publicApiDatasetRoleRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: publicApiUpdateDatasetRoleResponseSchema },
        errorFactory: Datasets.PostApiV1DatasetsRolesRoleIdError,
      },
      options,
    );
  }

  /**
   * Update dataset
   *
   * @remarks
   * This endpoint enables you to update an existing dataset properties in your organization's Soda
   * Cloud account.
   *
   * ## Authorization
   *
   * Only users with **Configure dataset** permission can update dataset properties. Soda Cloud
   * Admins have permission to update all datasets.**See Manage dataset roles for more
   * information.**
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
   * `Datasets`
   *
   * ## Rate limiting
   *
   * 100 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Datasets.PostApiV1DatasetsDatasetIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1DatasetsDatasetId(
    request: Datasets.PostApiV1DatasetsDatasetIdRequest,
    options?: RequestOptions,
  ): ApiPromise<DatasetsContentDto, Datasets.PostApiV1DatasetsDatasetIdError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/datasets/{datasetId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "datasetId", value: request.datasetId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publicApiUpdateDatasetDtoSchema },
      },
      {
        success: { kind: "json", schema: datasetsContentDtoSchema },
        errorFactory: Datasets.PostApiV1DatasetsDatasetIdError,
      },
      options,
    );
  }

  /**
   * Set column attribute values in bulk
   *
   * @remarks
   * Upsert attribute values on the columns of a dataset.
   *
   * The request body maps a column name to a map of attribute-name to value. Setting one attribute
   * on a column does not affect other attribute values on the same column. If any column or
   * attribute name is unknown, or any value has the wrong type, the entire request is rejected and
   * no changes are persisted.
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
   * Users must have dataset role permission CONFIGURE_DATASET to execute this call.
   *
   * ## Tags
   *
   * `Datasets`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Datasets.PostApiV1DatasetsDatasetIdColumnAttributesError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1DatasetsDatasetIdColumnAttributes(
    request: Datasets.PostApiV1DatasetsDatasetIdColumnAttributesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Datasets.PostApiV1DatasetsDatasetIdColumnAttributesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/datasets/{datasetId}/columnAttributes"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "datasetId", value: request.datasetId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publicApiSetColumnAttributesRequestDtoSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Datasets.PostApiV1DatasetsDatasetIdColumnAttributesError,
      },
      options,
    );
  }

  /**
   * Create a column metric monitor
   *
   * @remarks
   * This endpoint allows you to create a new column metric monitor for a specific dataset in your
   * organization's Soda Cloud account.
   *
   * ## Authorization
   *
   * Only users with **Manage checks** permission (V3 datasets) or **Manage contracts** permission
   * (V4 datasets) can create column metric monitors. Soda Cloud Admins can create column metric
   * monitors for all datasets.**See Manage dataset roles for more information.**
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
   * `Datasets`
   *
   * ## Rate limiting
   *
   * 100 requests/60 seconds
   *
   * @returns Created
   *
   * @throws {@link Datasets.PostApiV1DatasetsDatasetIdColumnMetricMonitorsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1DatasetsDatasetIdColumnMetricMonitors(
    request: Datasets.PostApiV1DatasetsDatasetIdColumnMetricMonitorsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PublicApiUpdateColumnMetricMonitorResponse,
    Datasets.PostApiV1DatasetsDatasetIdColumnMetricMonitorsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/datasets/{datasetId}/columnMetricMonitors"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "datasetId", value: request.datasetId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: publicApiCreateColumnMetricMonitorRequestDtoSchema,
        },
      },
      {
        success: { kind: "json", schema: publicApiUpdateColumnMetricMonitorResponseSchema },
        errorFactory: Datasets.PostApiV1DatasetsDatasetIdColumnMetricMonitorsError,
      },
      options,
    );
  }

  /**
   * Update a column metric monitor
   *
   * @remarks
   * This endpoint allows you to update an existing column metric monitor for a specific dataset in
   * your organization's Soda Cloud account.
   *
   * ## Authorization
   *
   * Only users with **Manage checks** permission (V3 datasets) or **Manage contracts** permission
   * (V4 datasets) can update column metric monitors. Soda Cloud Admins can update column metric
   * monitors for all datasets. **See Manage dataset roles for more information.**
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
   * `Datasets`
   *
   * ## Rate limiting
   *
   * 100 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Datasets.PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorId(
    request: Datasets.PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PublicApiUpdateColumnMetricMonitorResponse,
    Datasets.PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/datasets/{datasetId}/columnMetricMonitors/{monitorId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [
          { name: "datasetId", value: request.datasetId, schema: s.string() },
          { name: "monitorId", value: request.monitorId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: publicApiUpdateColumnMetricMonitorRequestDtoSchema,
        },
      },
      {
        success: { kind: "json", schema: publicApiUpdateColumnMetricMonitorResponseSchema },
        errorFactory: Datasets.PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError,
      },
      options,
    );
  }

  /**
   * Create a custom SQL monitor
   *
   * @remarks
   * This endpoint allows you to create a new custom SQL monitor for a specific dataset in your
   * organization's Soda Cloud account.
   *
   * ## Authorization
   *
   * Only users with **Manage contracts** permission can create custom SQL monitors. Soda Cloud
   * Admins can create custom SQL monitors for all datasets.**See Manage dataset roles for more
   * information.**
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
   * `Datasets`
   *
   * ## Rate limiting
   *
   * 100 requests/60 seconds
   *
   * @returns Created
   *
   * @throws {@link Datasets.PostApiV1DatasetsDatasetIdCustomSqlMonitorsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1DatasetsDatasetIdCustomSqlMonitors(
    request: Datasets.PostApiV1DatasetsDatasetIdCustomSqlMonitorsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PublicApiCreateCustomSqlMonitorResponse,
    Datasets.PostApiV1DatasetsDatasetIdCustomSqlMonitorsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/datasets/{datasetId}/customSqlMonitors"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "datasetId", value: request.datasetId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publicApiCreateCustomSqlMonitorRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: publicApiCreateCustomSqlMonitorResponseSchema },
        errorFactory: Datasets.PostApiV1DatasetsDatasetIdCustomSqlMonitorsError,
      },
      options,
    );
  }

  /**
   * Update a custom SQL monitor
   *
   * @remarks
   * This endpoint allows you to update an existing custom SQL monitor for a specific dataset in
   * your organization's Soda Cloud account.
   *
   * ## Authorization
   *
   * Only users with **Manage contracts** permission can update custom SQL monitors. Soda Cloud
   * Admins can update custom SQL monitors for all datasets. **See Manage dataset roles for more
   * information.**
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
   * `Datasets`
   *
   * ## Rate limiting
   *
   * 100 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Datasets.PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorId(
    request: Datasets.PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PublicApiUpdateCustomSqlMonitorResponse,
    Datasets.PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/datasets/{datasetId}/customSqlMonitors/{monitorId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [
          { name: "datasetId", value: request.datasetId, schema: s.string() },
          { name: "monitorId", value: request.monitorId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publicApiUpdateCustomSqlMonitorRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: publicApiUpdateCustomSqlMonitorResponseSchema },
        errorFactory: Datasets.PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError,
      },
      options,
    );
  }

  /**
   * Run historical metric collection for a dataset
   *
   * @remarks
   * This endpoint triggers a historical metric collection scan for a specific dataset in your
   * organization's Soda Cloud account.
   *
   * The dataset must have metric monitoring enabled and a historical collection scan definition
   * configured.
   *
   * The response includes the scan ID and a Location header pointing to the scan status endpoint.
   *
   * ## Authorization
   *
   * Only users with **Manage contracts** permission can run historical metric collection. Soda
   * Cloud Admins have access to run historical metric collection for all datasets. **See Manage
   * dataset roles for more information.**
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
   * `Datasets`
   *
   * ## Rate limiting
   *
   * 10 requests/60 seconds
   *
   * @returns Created
   *
   * @throws {@link
   * Datasets.PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollection(
    request: Datasets.PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionRequest,
    options?: RequestOptions,
  ): ApiPromise<
    undefined,
    Datasets.PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/api/v1/datasets/{datasetId}/metricMonitoring/historicalMetricCollection",
        ),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "datasetId", value: request.datasetId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Datasets.PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionError,
      },
      options,
    );
  }

  /**
   * Update dataset responsibilities
   *
   * @remarks
   * This endpoint enables you to update the user and user groups permissions and their associated
   * roles for a dataset in your organization's Soda Cloud account.
   *
   * **Note**: This API fully replaces the existing responsibilities. The entire list of
   * responsibilities must be provided in the request, including both new and existing entries, as
   * any omissions will result in their removal.
   *
   * ## Authorization
   *
   * Only users with **Manage dataset responsibilities** permission can update dataset
   * responsibilities. Soda Cloud Admins have permission to update all datasets
   * responsibilities.**See Manage dataset roles for more information.**The Response of this call,
   * when successful, is `201` and contains header `Location` which identify the URL where the
   * responsibilities will eventually become available.
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
   * `Datasets`
   *
   * ## Rate limiting
   *
   * 100 requests/60 seconds
   *
   * @returns Created
   *
   * @throws {@link Datasets.PostApiV1DatasetsDatasetIdResponsibilitiesError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1DatasetsDatasetIdResponsibilities(
    request: Datasets.PostApiV1DatasetsDatasetIdResponsibilitiesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Datasets.PostApiV1DatasetsDatasetIdResponsibilitiesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/datasets/{datasetId}/responsibilities"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "datasetId", value: request.datasetId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: publicApiUpdateDatasetResponsibilitiesRequestDtoSchema,
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Datasets.PostApiV1DatasetsDatasetIdResponsibilitiesError,
      },
      options,
    );
  }
}

export namespace Datasets {
  export type DeleteApiV1DatasetsRolesRoleIdRequest = {
    roleId: string;
  };

  export class DeleteApiV1DatasetsRolesRoleIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteApiV1DatasetsRolesRoleIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteApiV1DatasetsDatasetIdRequest = {
    datasetId: string;
  };

  export class DeleteApiV1DatasetsDatasetIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteApiV1DatasetsDatasetIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdRequest = {
    datasetId: string;
    monitorId: string;
  };

  export class DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdRequest = {
    datasetId: string;
    monitorId: string;
  };

  export class DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1DatasetsRequest = {
    datasourceName?: string;
    from?: Date;
    page?: number;
    search?: string;
    size?: number;
  };

  export class GetApiV1DatasetsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1DatasetsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameRequest = {
    datasetQualifiedName: string;
  };

  export class GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1DatasetsRolesRequest = {
    page?: number;
    size?: number;
  };

  export class GetApiV1DatasetsRolesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1DatasetsRolesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1DatasetsDatasetIdRequest = {
    datasetId: string;
  };

  export class GetApiV1DatasetsDatasetIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1DatasetsDatasetIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1DatasetsDatasetIdColumnsRequest = {
    datasetId: string;
    page?: number;
    size?: number;
  };

  export class GetApiV1DatasetsDatasetIdColumnsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1DatasetsDatasetIdColumnsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1DatasetsDatasetIdComputeWarehouseRequest = {
    datasetId: string;
  };

  export class GetApiV1DatasetsDatasetIdComputeWarehouseError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1DatasetsDatasetIdComputeWarehouseError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1DatasetsDatasetIdDiagnosticsWarehouseRequest = {
    datasetId: string;
  };

  export class GetApiV1DatasetsDatasetIdDiagnosticsWarehouseError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1DatasetsDatasetIdDiagnosticsWarehouseError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1DatasetsDatasetIdMetricMonitoringRequest = {
    datasetId: string;
  };

  export class GetApiV1DatasetsDatasetIdMetricMonitoringError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1DatasetsDatasetIdMetricMonitoringError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1DatasetsDatasetIdProfilingRequest = {
    datasetId: string;
  };

  export class GetApiV1DatasetsDatasetIdProfilingError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1DatasetsDatasetIdProfilingError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1DatasetsDatasetIdResponsibilitiesRequest = {
    datasetId: string;
    page?: number;
    size?: number;
  };

  export class GetApiV1DatasetsDatasetIdResponsibilitiesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1DatasetsDatasetIdResponsibilitiesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1DatasetsRolesRequest = {
    body: PublicApiDatasetRoleRequestDto;
  };

  export class PostApiV1DatasetsRolesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1DatasetsRolesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1DatasetsRolesRoleIdRequest = {
    roleId: string;
    body: PublicApiDatasetRoleRequestDto;
  };

  export class PostApiV1DatasetsRolesRoleIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1DatasetsRolesRoleIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1DatasetsDatasetIdRequest = {
    datasetId: string;
    body: PublicApiUpdateDatasetDto;
  };

  export class PostApiV1DatasetsDatasetIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1DatasetsDatasetIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1DatasetsDatasetIdColumnAttributesRequest = {
    datasetId: string;
    body: PublicApiSetColumnAttributesRequestDto;
  };

  export class PostApiV1DatasetsDatasetIdColumnAttributesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1DatasetsDatasetIdColumnAttributesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1DatasetsDatasetIdColumnMetricMonitorsRequest = {
    datasetId: string;
    body: PublicApiCreateColumnMetricMonitorRequestDto;
  };

  export class PostApiV1DatasetsDatasetIdColumnMetricMonitorsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1DatasetsDatasetIdColumnMetricMonitorsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdRequest = {
    datasetId: string;
    monitorId: string;
    body: PublicApiUpdateColumnMetricMonitorRequestDto;
  };

  export class PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1DatasetsDatasetIdCustomSqlMonitorsRequest = {
    datasetId: string;
    body: PublicApiCreateCustomSqlMonitorRequestDto;
  };

  export class PostApiV1DatasetsDatasetIdCustomSqlMonitorsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1DatasetsDatasetIdCustomSqlMonitorsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdRequest = {
    datasetId: string;
    monitorId: string;
    body: PublicApiUpdateCustomSqlMonitorRequestDto;
  };

  export class PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionRequest = {
    datasetId: string;
  };

  export class PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionError> =
      [
        { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
        { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
        { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
        { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
        { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      ];
  }

  export type PostApiV1DatasetsDatasetIdResponsibilitiesRequest = {
    datasetId: string;
    body: PublicApiUpdateDatasetResponsibilitiesRequestDto;
  };

  export class PostApiV1DatasetsDatasetIdResponsibilitiesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1DatasetsDatasetIdResponsibilitiesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
