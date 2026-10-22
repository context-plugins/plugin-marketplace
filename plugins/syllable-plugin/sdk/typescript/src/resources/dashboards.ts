import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { dashboardPropertiesSchema, type DashboardProperties } from "../models/dashboard-properties.js";
import {
  dashboardTokenResponseSchema,
  type DashboardTokenResponse,
} from "../models/dashboard-token-response.js";
import { dashboardSchema, type Dashboard } from "../models/dashboard.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  listResponseDashboardResponseSchema,
  type ListResponseDashboardResponse,
} from "../models/list-response-dashboard-response.js";
import { endDatetime3Schema, type EndDatetime3 } from "../models/unions/end-datetime3.js";
import { fields24Schema, type Fields24 } from "../models/unions/fields24.js";
import { orderByDirection1Schema, type OrderByDirection1 } from "../models/unions/order-by-direction1.js";
import { orderBy312Schema, type OrderBy312 } from "../models/unions/order-by312.js";
import { pageSchema, type Page } from "../models/unions/page.js";
import { startDatetime3Schema, type StartDatetime3 } from "../models/unions/start-datetime3.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to dashboards. Currently the API/SDK only supports fetching basic information
 * about dashboards.
 */
export class Dashboards {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Post Fetch Info
   *
   * @remarks
   * METHOD: POST URL: /dashboard/fetch_info ARGUMENTS: None RETURNS: Dashboard info for embedding
   *
   * @returns Successful Response
   *
   * @throws {@link Dashboards.PostGetDashboardError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postGetDashboard(
    request: Dashboards.PostGetDashboardRequest,
    options?: RequestOptions,
  ): ApiPromise<DashboardTokenResponse, Dashboards.PostGetDashboardError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/dashboards/fetch_info"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [{ name: "dashboard_name", value: request.dashboardName, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dashboardTokenResponseSchema },
        errorFactory: Dashboards.PostGetDashboardError,
      },
      options,
    );
  }

  /**
   * Post List Dashboards
   *
   * @remarks
   * METHOD: POST URL: /dashboard/list ARGUMENTS: None RETURNS: List of dashboards
   *
   * @returns Successful Response
   *
   * @throws {@link Dashboards.PostListDashboardError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postListDashboard(
    request: Dashboards.PostListDashboardRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseDashboardResponse, Dashboards.PostListDashboardError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/dashboards/list"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          {
            name: "search_fields",
            value: request.searchFields,
            schema: s.optional(s.array(s.lazy(() => dashboardPropertiesSchema))),
          },
          {
            name: "search_field_values",
            value: request.searchFieldValues,
            schema: s.optional(s.array(s.string())),
          },
          { name: "order_by", value: request.orderBy, schema: s.optional(s.lazy(() => orderBy312Schema)) },
          {
            name: "order_by_direction",
            value: request.orderByDirection,
            schema: s.optional(s.lazy(() => orderByDirection1Schema)),
          },
          { name: "fields", value: request.fields, schema: s.optional(s.lazy(() => fields24Schema)) },
          {
            name: "start_datetime",
            value: request.startDatetime,
            schema: s.optional(s.lazy(() => startDatetime3Schema)),
          },
          {
            name: "end_datetime",
            value: request.endDatetime,
            schema: s.optional(s.lazy(() => endDatetime3Schema)),
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseDashboardResponseSchema },
        errorFactory: Dashboards.PostListDashboardError,
      },
      options,
    );
  }

  /**
   * Post Session Events
   *
   * @remarks
   * METHOD: POST URL: /dashboard/session_events ARGUMENTS: None RETURNS: Dashboard info for
   * embedding DEPRECATED: This endpoint is deprecated. Please use /dashboard/list instead
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  postSessionEventsDashboard(options?: RequestOptions): ApiPromise<Dashboard, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/dashboards/session_events"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dashboardSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Post Session Summary
   *
   * @remarks
   * METHOD: POST URL: /dashboard/session_summary ARGUMENTS: None RETURNS: Dashboard info for
   * embedding DEPRECATED: This endpoint is deprecated. Please use /dashboard/list instead
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  postSessionSummaryDashboard(options?: RequestOptions): ApiPromise<Dashboard, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/dashboards/session_summary"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dashboardSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Post Session Transfers
   *
   * @remarks
   * METHOD: POST URL: /dashboard/session_transfers ARGUMENTS: None RETURNS: Dashboard info for
   * embedding DEPRECATED: This endpoint is deprecated. Please use /dashboard/list instead
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  postSessionTransfersDashboard(options?: RequestOptions): ApiPromise<Dashboard, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/dashboards/session_transfers"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dashboardSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Post Sessions
   *
   * @remarks
   * METHOD: POST URL: /dashboard/sessions ARGUMENTS: None RETURNS: Dashboard info for embedding
   * DEPRECATED: This endpoint is deprecated. Please use /dashboard/list instead
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  postSessionsDashboard(options?: RequestOptions): ApiPromise<Dashboard, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/dashboards/sessions"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dashboardSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Dashboards {
  export type PostGetDashboardRequest = {
    dashboardName: string;
  };

  export class PostGetDashboardError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<PostGetDashboardError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type PostListDashboardRequest = {
    /** The page number from which to start (0-based) */
    page?: Page;
    /** The maximum number of items to return @default 25 */
    limit?: number;
    /** String names of fields to search. Correspond by index to search field values */
    searchFields?: DashboardProperties[];
    /**
     * Values of fields to search. Correspond by index to search fields. Unless field name contains
     * "list", an individual search field value cannot be a list
     */
    searchFieldValues?: string[];
    /** The field whose value should be used to order the results */
    orderBy?: OrderBy312;
    /** The direction in which to order the results */
    orderByDirection?: OrderByDirection1;
    /** The fields to include in the response */
    fields?: Fields24;
    /** The start datetime for filtering results */
    startDatetime?: StartDatetime3;
    /** The end datetime for filtering results */
    endDatetime?: EndDatetime3;
  };

  export class PostListDashboardError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<PostListDashboardError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
