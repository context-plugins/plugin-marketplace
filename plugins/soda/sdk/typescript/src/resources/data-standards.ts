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
  dataStandardSortFieldDtoSchema,
  type DataStandardSortFieldDto,
} from "../models/data-standard-sort-field-dto.js";
import {
  dataStandardStatusDtoSchema,
  type DataStandardStatusDto,
} from "../models/data-standard-status-dto.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  publicApiCreateDataStandardResponseSchema,
  type PublicApiCreateDataStandardResponse,
} from "../models/public-api-create-data-standard-response.js";
import {
  publicApiDataStandardRequestDtoSchema,
  type PublicApiDataStandardRequestDto,
} from "../models/public-api-data-standard-request-dto.js";
import {
  publicApiDataStandardsActivityResponseSchema,
  type PublicApiDataStandardsActivityResponse,
} from "../models/public-api-data-standards-activity-response.js";
import {
  publicApiDeleteDataStandardResponseSchema,
  type PublicApiDeleteDataStandardResponse,
} from "../models/public-api-delete-data-standard-response.js";
import {
  publicApiEvaluateDataStandardScopeResponseSchema,
  type PublicApiEvaluateDataStandardScopeResponse,
} from "../models/public-api-evaluate-data-standard-scope-response.js";
import {
  publicApiExecuteDataStandardsRequestDtoSchema,
  type PublicApiExecuteDataStandardsRequestDto,
} from "../models/public-api-execute-data-standards-request-dto.js";
import {
  publicApiExecuteDataStandardsResponseSchema,
  type PublicApiExecuteDataStandardsResponse,
} from "../models/public-api-execute-data-standards-response.js";
import {
  publicApiGetDataStandardResponseSchema,
  type PublicApiGetDataStandardResponse,
} from "../models/public-api-get-data-standard-response.js";
import {
  publicApiListDataStandardChecksResponseSchema,
  type PublicApiListDataStandardChecksResponse,
} from "../models/public-api-list-data-standard-checks-response.js";
import {
  publicApiListDataStandardDatasetsResponseSchema,
  type PublicApiListDataStandardDatasetsResponse,
} from "../models/public-api-list-data-standard-datasets-response.js";
import {
  publicApiListDataStandardsResponseSchema,
  type PublicApiListDataStandardsResponse,
} from "../models/public-api-list-data-standards-response.js";
import {
  publicApiPreviewDataStandardScopeRequestDtoSchema,
  type PublicApiPreviewDataStandardScopeRequestDto,
} from "../models/public-api-preview-data-standard-scope-request-dto.js";
import {
  publicApiPreviewDataStandardScopeResponseSchema,
  type PublicApiPreviewDataStandardScopeResponse,
} from "../models/public-api-preview-data-standard-scope-response.js";
import {
  publicApiTestDataStandardRequestDtoSchema,
  type PublicApiTestDataStandardRequestDto,
} from "../models/public-api-test-data-standard-request-dto.js";
import {
  publicApiTestDataStandardResponseSchema,
  type PublicApiTestDataStandardResponse,
} from "../models/public-api-test-data-standard-response.js";
import {
  publicApiUpdateDataStandardResponseSchema,
  type PublicApiUpdateDataStandardResponse,
} from "../models/public-api-update-data-standard-response.js";
import {
  publicApiUpdateDataStandardStatusRequestDtoSchema,
  type PublicApiUpdateDataStandardStatusRequestDto,
} from "../models/public-api-update-data-standard-status-request-dto.js";
import {
  publicApiUpdateDataStandardStatusResponseSchema,
  type PublicApiUpdateDataStandardStatusResponse,
} from "../models/public-api-update-data-standard-status-response.js";
import type { Servers } from "../servers.js";

/**
 * Soda Cloud API Data Standard Endpoints
 */
export class DataStandards {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a data standard
   *
   * @remarks
   * Schedules a data standard for deletion. Deletion is processed asynchronously: the standard and
   * its dataset associations, owners and YAML file are removed in the background.
   *
   * ## Authorization
   *
   * Only users with **Manage data standards** permission can delete data standards.
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
   * Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.
   *
   * ## Tags
   *
   * `Data Standards`
   *
   * ## Rate limiting
   *
   * 100 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link DataStandards.DeleteApiV1DataStandardsDataStandardIdError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteApiV1DataStandardsDataStandardId(
    request: DataStandards.DeleteApiV1DataStandardsDataStandardIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PublicApiDeleteDataStandardResponse,
    DataStandards.DeleteApiV1DataStandardsDataStandardIdError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/dataStandards/{dataStandardId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "dataStandardId", value: request.dataStandardId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiDeleteDataStandardResponseSchema },
        errorFactory: DataStandards.DeleteApiV1DataStandardsDataStandardIdError,
      },
      options,
    );
  }

  /**
   * List data standards
   *
   * @remarks
   * This endpoint allows you to list the data standards in your organization.
   *
   * This GET is a paginated API that uses the following parameters to request specific details:
   *
   * - `size`: Supply an integer value between 1 and 1000, inclusive. The default value is 10.
   *
   * - `page`: Supply an integer value. The default value is 0.
   *
   * - `search`: Optionally, use this parameter to perform a fuzzy search on the data standard name
   *   and label.
   *
   * - `status`: Optionally, use this parameter to list only data standards with a given status
   *   (`draft`, `active`, `paused`, or `invalid`).
   *
   * - `sort`: Optionally, sort the results by `name` (default) or `label`.
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
   * `Data Standards`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link DataStandards.GetApiV1DataStandardsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1DataStandards(
    request: DataStandards.GetApiV1DataStandardsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PublicApiListDataStandardsResponse, DataStandards.GetApiV1DataStandardsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/dataStandards"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
          {
            name: "sort",
            value: request.sort,
            schema: s.optional(s.lazy(() => dataStandardSortFieldDtoSchema)),
          },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => dataStandardStatusDtoSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiListDataStandardsResponseSchema },
        errorFactory: DataStandards.GetApiV1DataStandardsError,
      },
      options,
    );
  }

  /**
   * Data standards activity
   *
   * @remarks
   * This endpoint returns an organization-wide rollup of data standards activity, including counts
   * of active and total standards, matched datasets, and check results.
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
   * `Data Standards`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link DataStandards.GetApiV1DataStandardsActivityError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1DataStandardsActivity(
    options?: RequestOptions,
  ): ApiPromise<PublicApiDataStandardsActivityResponse, DataStandards.GetApiV1DataStandardsActivityError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/dataStandards/activity"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiDataStandardsActivityResponseSchema },
        errorFactory: DataStandards.GetApiV1DataStandardsActivityError,
      },
      options,
    );
  }

  /**
   * Get a data standard
   *
   * @remarks
   * This endpoint allows you to retrieve a specific data standard, including its YAML contents and
   * scope.
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
   * `Data Standards`
   *
   * ## Rate limiting
   *
   * 1000 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link DataStandards.GetApiV1DataStandardsDataStandardIdError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1DataStandardsDataStandardId(
    request: DataStandards.GetApiV1DataStandardsDataStandardIdRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicApiGetDataStandardResponse, DataStandards.GetApiV1DataStandardsDataStandardIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/dataStandards/{dataStandardId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "dataStandardId", value: request.dataStandardId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiGetDataStandardResponseSchema },
        errorFactory: DataStandards.GetApiV1DataStandardsDataStandardIdError,
      },
      options,
    );
  }

  /**
   * List data standard checks
   *
   * @remarks
   * This endpoint allows you to list the aggregated checks of a specific data standard.
   *
   * This GET is a paginated API that uses the following parameters to request specific details:
   *
   * - `size`: Supply an integer value between 1 and 1000, inclusive. The default value is 10.
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
   * ## Tags
   *
   * `Data Standards`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link DataStandards.GetApiV1DataStandardsDataStandardIdChecksError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1DataStandardsDataStandardIdChecks(
    request: DataStandards.GetApiV1DataStandardsDataStandardIdChecksRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PublicApiListDataStandardChecksResponse,
    DataStandards.GetApiV1DataStandardsDataStandardIdChecksError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/dataStandards/{dataStandardId}/checks"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "dataStandardId", value: request.dataStandardId, schema: s.string() }],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiListDataStandardChecksResponseSchema },
        errorFactory: DataStandards.GetApiV1DataStandardsDataStandardIdChecksError,
      },
      options,
    );
  }

  /**
   * List data standard datasets
   *
   * @remarks
   * This endpoint allows you to list the datasets matched by a specific data standard.
   *
   * This GET is a paginated API that uses the following parameters to request specific details:
   *
   * - `size`: Supply an integer value between 1 and 1000, inclusive. The default value is 10.
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
   * ## Tags
   *
   * `Data Standards`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link DataStandards.GetApiV1DataStandardsDataStandardIdDatasetsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1DataStandardsDataStandardIdDatasets(
    request: DataStandards.GetApiV1DataStandardsDataStandardIdDatasetsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PublicApiListDataStandardDatasetsResponse,
    DataStandards.GetApiV1DataStandardsDataStandardIdDatasetsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/dataStandards/{dataStandardId}/datasets"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "dataStandardId", value: request.dataStandardId, schema: s.string() }],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiListDataStandardDatasetsResponseSchema },
        errorFactory: DataStandards.GetApiV1DataStandardsDataStandardIdDatasetsError,
      },
      options,
    );
  }

  /**
   * Create a data standard
   *
   * @remarks
   * This endpoint allows you to create a new data standard from YAML contents, a structured scope,
   * status, owners and an optional schedule.
   *
   * The `contents` field must contain valid data standard YAML. If the YAML is malformed, the
   * request is rejected with a 400 error.
   *
   * ## Authorization
   *
   * Only users with **Manage data standards** permission can create data standards.
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
   * Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.
   *
   * ## Tags
   *
   * `Data Standards`
   *
   * ## Rate limiting
   *
   * 100 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link DataStandards.PostApiV1DataStandardsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1DataStandards(
    request: DataStandards.PostApiV1DataStandardsRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicApiCreateDataStandardResponse, DataStandards.PostApiV1DataStandardsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/dataStandards"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publicApiDataStandardRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: publicApiCreateDataStandardResponseSchema },
        errorFactory: DataStandards.PostApiV1DataStandardsError,
      },
      options,
    );
  }

  /**
   * Execute data standards for a dataset
   *
   * @remarks
   * This endpoint triggers a scan that runs the active data standards linked to the specified
   * dataset.
   *
   * The response, when successful, is `201` and contains the header `X-Soda-Scan-Id` and a
   * `Location` header which identify the triggered scan. Use the value of `X-Soda-Scan-Id` in the
   * `scanId` parameter of the **Get scan status**, **Get scan logs**, and **Cancel a scan**
   * endpoints.
   *
   * ## Authorization
   *
   * Only users with **Manage data standards** permission can execute data standards.
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
   * Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.
   *
   * ## Tags
   *
   * `Data Standards`
   *
   * ## Rate limiting
   *
   * 10 requests/60 seconds
   *
   * @returns Created
   *
   * @throws {@link DataStandards.PostApiV1DataStandardsActionsExecuteError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1DataStandardsActionsExecute(
    request: DataStandards.PostApiV1DataStandardsActionsExecuteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PublicApiExecuteDataStandardsResponse,
    DataStandards.PostApiV1DataStandardsActionsExecuteError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/dataStandards/actions/execute"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publicApiExecuteDataStandardsRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: publicApiExecuteDataStandardsResponseSchema },
        errorFactory: DataStandards.PostApiV1DataStandardsActionsExecuteError,
      },
      options,
    );
  }

  /**
   * Preview the datasets matching a data standard scope
   *
   * @remarks
   * This endpoint evaluates a candidate scope and returns the datasets that would match it, without
   * creating or modifying any data standard.
   *
   * The `scope` uses the same structured rule grammar as the create-data-standard endpoint. An
   * omitted or empty scope matches **all** datasets, mirroring how a data standard without a scope
   * applies to every dataset. Results are paged with `page` (0-based, default 0) and `size`
   * (between 1 and 1000, default 10).
   *
   * ## Authorization
   *
   * Only users with **Manage data standards** permission can preview a data standard scope.
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
   * Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.
   *
   * ## Tags
   *
   * `Data Standards`
   *
   * ## Rate limiting
   *
   * 100 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link DataStandards.PostApiV1DataStandardsActionsPreviewScopeError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1DataStandardsActionsPreviewScope(
    request: DataStandards.PostApiV1DataStandardsActionsPreviewScopeRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PublicApiPreviewDataStandardScopeResponse,
    DataStandards.PostApiV1DataStandardsActionsPreviewScopeError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/dataStandards/actions/previewScope"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: publicApiPreviewDataStandardScopeRequestDtoSchema,
        },
      },
      {
        success: { kind: "json", schema: publicApiPreviewDataStandardScopeResponseSchema },
        errorFactory: DataStandards.PostApiV1DataStandardsActionsPreviewScopeError,
      },
      options,
    );
  }

  /**
   * Test a data standard against a dataset
   *
   * @remarks
   * This endpoint runs the checks of an unsaved data standard against one dataset's live data,
   * without creating or modifying any data standard. The tested standard does not appear in your
   * data standards and no checks or check results are persisted; the outcome is only visible on the
   * triggered scan.
   *
   * The `contents` field must contain valid data standard YAML. If the YAML is malformed, the
   * request is rejected with a 400 error.
   *
   * The response, when successful, is `201` and contains the header `X-Soda-Scan-Id` and a
   * `Location` header which identify the triggered scan. Use the value of `X-Soda-Scan-Id` in the
   * `scanId` parameter of the **Get scan status**, **Get scan logs**, and **Cancel a scan**
   * endpoints.
   *
   * ## Authorization
   *
   * Only users with **Manage data standards** permission who can view the dataset's datasource can
   * test a data standard.
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
   * Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.
   *
   * ## Tags
   *
   * `Data Standards`
   *
   * ## Rate limiting
   *
   * 10 requests/60 seconds
   *
   * @returns Created
   *
   * @throws {@link DataStandards.PostApiV1DataStandardsActionsTestError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1DataStandardsActionsTest(
    request: DataStandards.PostApiV1DataStandardsActionsTestRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicApiTestDataStandardResponse, DataStandards.PostApiV1DataStandardsActionsTestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/dataStandards/actions/test"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publicApiTestDataStandardRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: publicApiTestDataStandardResponseSchema },
        errorFactory: DataStandards.PostApiV1DataStandardsActionsTestError,
      },
      options,
    );
  }

  /**
   * Update a data standard
   *
   * @remarks
   * This endpoint allows you to replace an existing data standard's YAML contents, scope, status,
   * owners and schedule.
   *
   * The `contents` field must contain valid data standard YAML. If the YAML is malformed, the
   * request is rejected with a 400 error.
   *
   * ## Authorization
   *
   * Only users with **Manage data standards** permission can update data standards.
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
   * Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.
   *
   * ## Tags
   *
   * `Data Standards`
   *
   * ## Rate limiting
   *
   * 100 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link DataStandards.PostApiV1DataStandardsDataStandardIdError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1DataStandardsDataStandardId(
    request: DataStandards.PostApiV1DataStandardsDataStandardIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PublicApiUpdateDataStandardResponse,
    DataStandards.PostApiV1DataStandardsDataStandardIdError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/dataStandards/{dataStandardId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "dataStandardId", value: request.dataStandardId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publicApiDataStandardRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: publicApiUpdateDataStandardResponseSchema },
        errorFactory: DataStandards.PostApiV1DataStandardsDataStandardIdError,
      },
      options,
    );
  }

  /**
   * Evaluate a data standard's scope
   *
   * @remarks
   * This endpoint re-evaluates a data standard's scope and returns the ids of the datasets that
   * currently match it.
   *
   * ## Authorization
   *
   * Only users with **Manage data standards** permission can evaluate a data standard's scope.
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
   * Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.
   *
   * ## Tags
   *
   * `Data Standards`
   *
   * ## Rate limiting
   *
   * 100 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link DataStandards.PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1DataStandardsDataStandardIdActionsEvaluateScope(
    request: DataStandards.PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PublicApiEvaluateDataStandardScopeResponse,
    DataStandards.PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/dataStandards/{dataStandardId}/actions/evaluateScope"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "dataStandardId", value: request.dataStandardId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiEvaluateDataStandardScopeResponseSchema },
        errorFactory: DataStandards.PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeError,
      },
      options,
    );
  }

  /**
   * Update a data standard's status
   *
   * @remarks
   * This endpoint transitions a data standard to a new status without modifying its contents,
   * scope, owners or schedule.
   *
   * Allowed transitions are validated; an invalid transition is rejected with a 400 error.
   *
   * ## Authorization
   *
   * Only users with **Manage data standards** permission can update a data standard's status.
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
   * Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.
   *
   * ## Tags
   *
   * `Data Standards`
   *
   * ## Rate limiting
   *
   * 100 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link DataStandards.PostApiV1DataStandardsDataStandardIdActionsStatusError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1DataStandardsDataStandardIdActionsStatus(
    request: DataStandards.PostApiV1DataStandardsDataStandardIdActionsStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PublicApiUpdateDataStandardStatusResponse,
    DataStandards.PostApiV1DataStandardsDataStandardIdActionsStatusError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/dataStandards/{dataStandardId}/actions/status"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "dataStandardId", value: request.dataStandardId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: publicApiUpdateDataStandardStatusRequestDtoSchema,
        },
      },
      {
        success: { kind: "json", schema: publicApiUpdateDataStandardStatusResponseSchema },
        errorFactory: DataStandards.PostApiV1DataStandardsDataStandardIdActionsStatusError,
      },
      options,
    );
  }
}

export namespace DataStandards {
  export type DeleteApiV1DataStandardsDataStandardIdRequest = {
    dataStandardId: string;
  };

  export class DeleteApiV1DataStandardsDataStandardIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteApiV1DataStandardsDataStandardIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1DataStandardsRequest = {
    page?: number;
    search?: string;
    size?: number;
    sort?: DataStandardSortFieldDto;
    status?: DataStandardStatusDto;
  };

  export class GetApiV1DataStandardsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1DataStandardsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class GetApiV1DataStandardsActivityError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1DataStandardsActivityError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1DataStandardsDataStandardIdRequest = {
    dataStandardId: string;
  };

  export class GetApiV1DataStandardsDataStandardIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1DataStandardsDataStandardIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1DataStandardsDataStandardIdChecksRequest = {
    dataStandardId: string;
    page?: number;
    size?: number;
  };

  export class GetApiV1DataStandardsDataStandardIdChecksError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1DataStandardsDataStandardIdChecksError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1DataStandardsDataStandardIdDatasetsRequest = {
    dataStandardId: string;
    page?: number;
    size?: number;
  };

  export class GetApiV1DataStandardsDataStandardIdDatasetsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1DataStandardsDataStandardIdDatasetsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1DataStandardsRequest = {
    body: PublicApiDataStandardRequestDto;
  };

  export class PostApiV1DataStandardsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1DataStandardsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1DataStandardsActionsExecuteRequest = {
    body: PublicApiExecuteDataStandardsRequestDto;
  };

  export class PostApiV1DataStandardsActionsExecuteError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1DataStandardsActionsExecuteError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1DataStandardsActionsPreviewScopeRequest = {
    body: PublicApiPreviewDataStandardScopeRequestDto;
  };

  export class PostApiV1DataStandardsActionsPreviewScopeError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1DataStandardsActionsPreviewScopeError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1DataStandardsActionsTestRequest = {
    body: PublicApiTestDataStandardRequestDto;
  };

  export class PostApiV1DataStandardsActionsTestError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1DataStandardsActionsTestError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1DataStandardsDataStandardIdRequest = {
    dataStandardId: string;
    body: PublicApiDataStandardRequestDto;
  };

  export class PostApiV1DataStandardsDataStandardIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1DataStandardsDataStandardIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeRequest = {
    dataStandardId: string;
  };

  export class PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1DataStandardsDataStandardIdActionsStatusRequest = {
    dataStandardId: string;
    body: PublicApiUpdateDataStandardStatusRequestDto;
  };

  export class PostApiV1DataStandardsDataStandardIdActionsStatusError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1DataStandardsDataStandardIdActionsStatusError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
