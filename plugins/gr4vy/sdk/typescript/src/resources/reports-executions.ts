import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { error400Schema, type Error400 } from "../models/error400.js";
import { error401Schema, type Error401 } from "../models/error401.js";
import { error403Schema, type Error403 } from "../models/error403.js";
import { error404Schema, type Error404 } from "../models/error404.js";
import { error405Schema, type Error405 } from "../models/error405.js";
import { error409Schema, type Error409 } from "../models/error409.js";
import { error425Schema, type Error425 } from "../models/error425.js";
import { error429Schema, type Error429 } from "../models/error429.js";
import { error500Schema, type Error500 } from "../models/error500.js";
import { error502Schema, type Error502 } from "../models/error502.js";
import { error504Schema, type Error504 } from "../models/error504.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  reportExecutionUrlGenerateSchema,
  type ReportExecutionUrlGenerate,
} from "../models/report-execution-url-generate.js";
import { reportExecutionUrlSchema, type ReportExecutionUrl } from "../models/report-execution-url.js";
import { reportExecutionSchema, type ReportExecution } from "../models/report-execution.js";
import { reportExecutionsSchema, type ReportExecutions } from "../models/report-executions.js";
import { createdAtGte1Schema, type CreatedAtGte1 } from "../models/unions/created-at-gte1.js";
import { createdAtLte1Schema, type CreatedAtLte1 } from "../models/unions/created-at-lte1.js";
import { creatorId2Schema, type CreatorId2 } from "../models/unions/creator-id2.js";
import { cursorSchema, type Cursor } from "../models/unions/cursor.js";
import { reportNameSchema, type ReportName } from "../models/unions/report-name.js";
import { status4Schema, type Status4 } from "../models/unions/status4.js";
import {
  xGr4VyMerchantAccountIdSchema,
  type XGr4VyMerchantAccountId,
} from "../models/unions/xgr4-vy-merchant-account-id.js";
import type { Servers } from "../servers.js";

/**
 * Manage executions of reports.
 */
export class ReportsExecutions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create URL for executed report
   *
   * @remarks
   * Creates a download URL for a specific execution of a report.
   *
   * @returns Successful Response
   *
   * @throws {@link ReportsExecutions.CreateReportExecutionUrlError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createReportExecutionUrl(
    request: ReportsExecutions.CreateReportExecutionUrlRequest,
    options?: RequestOptions,
  ): ApiPromise<ReportExecutionUrl, ReportsExecutions.CreateReportExecutionUrlError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/reports/{report_id}/executions/{report_execution_id}/url"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [
          { name: "report_id", value: request.reportId, schema: s.string() },
          { name: "report_execution_id", value: request.reportExecutionId, schema: s.string() },
        ],
        query: [],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => reportExecutionUrlGenerateSchema)),
        },
      },
      {
        success: { kind: "json", schema: reportExecutionUrlSchema },
        errorFactory: ReportsExecutions.CreateReportExecutionUrlError,
      },
      options,
    );
  }

  /**
   * Get executed report
   *
   * @remarks
   * Fetch a specific executed report.
   *
   * @returns Successful Response
   *
   * @throws {@link ReportsExecutions.GetReportExecutionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getReportExecution(
    request: ReportsExecutions.GetReportExecutionRequest,
    options?: RequestOptions,
  ): ApiPromise<ReportExecution, ReportsExecutions.GetReportExecutionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/report-executions/{report_execution_id}"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [{ name: "report_execution_id", value: request.reportExecutionId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: reportExecutionSchema },
        errorFactory: ReportsExecutions.GetReportExecutionError,
      },
      options,
    );
  }

  /**
   * List executed reports
   *
   * @remarks
   * List all executed reports that have been generated.
   *
   * @returns Successful Response
   *
   * @throws {@link ReportsExecutions.ListAllReportExecutionsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAllReportExecutions(
    request: ReportsExecutions.ListAllReportExecutionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ReportExecutions, ReportsExecutions.ListAllReportExecutionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/report-executions"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [],
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.lazy(() => cursorSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          {
            name: "report_name",
            value: request.reportName,
            schema: s.optional(s.lazy(() => reportNameSchema)),
          },
          {
            name: "created_at_lte",
            value: request.createdAtLte,
            schema: s.optional(s.lazy(() => createdAtLte1Schema)),
          },
          {
            name: "created_at_gte",
            value: request.createdAtGte,
            schema: s.optional(s.lazy(() => createdAtGte1Schema)),
          },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => status4Schema)) },
          {
            name: "creator_id",
            value: request.creatorId,
            schema: s.optional(s.lazy(() => creatorId2Schema)),
          },
        ],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: reportExecutionsSchema },
        errorFactory: ReportsExecutions.ListAllReportExecutionsError,
      },
      options,
    );
  }

  /**
   * List executions for report
   *
   * @remarks
   * List all executions of a specific report.
   *
   * @returns Successful Response
   *
   * @throws {@link ReportsExecutions.ListReportExecutionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listReportExecutions(
    request: ReportsExecutions.ListReportExecutionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ReportExecutions, ReportsExecutions.ListReportExecutionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/reports/{report_id}/executions"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [{ name: "report_id", value: request.reportId, schema: s.string() }],
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.lazy(() => cursorSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
        ],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: reportExecutionsSchema },
        errorFactory: ReportsExecutions.ListReportExecutionsError,
      },
      options,
    );
  }
}

export namespace ReportsExecutions {
  export type CreateReportExecutionUrlRequest = {
    /** The ID of the report to retrieve a URL for. */
    reportId: string;
    /** The ID of the execution of a report to retrieve a URL for. */
    reportExecutionId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
    body?: ReportExecutionUrlGenerate;
  };

  export class CreateReportExecutionUrlError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateReportExecutionUrlError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetReportExecutionRequest = {
    /** The ID of the execution of a report to retrieve details for. */
    reportExecutionId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class GetReportExecutionError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetReportExecutionError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ListAllReportExecutionsRequest = {
    /** A pointer to the page of results to return. */
    cursor?: Cursor;
    /** The maximum number of items that are at returned. @default 20 */
    limit?: number;
    /** Filters the reports by searching their name for (partial) matches. */
    reportName?: ReportName;
    /**
     * Filters the results to only reports created before this ISO date-time string. The time zone
     * must be included. Ensure that the date-time string is URL encoded, e.g.
     * `2022-01-01T12:00:00+08:00` must be encoded as `2022-01-01T12%3A00%3A00%2B08%3A00`.
     */
    createdAtLte?: CreatedAtLte1;
    /**
     * Filters the results to only reports created after this ISO date-time string. The time zone
     * must be included. Ensure that the date-time string is URL encoded, e.g.
     * `2022-01-01T12:00:00+08:00` must be encoded as `2022-01-01T12%3A00%3A00%2B08%3A00`.
     */
    createdAtGte?: CreatedAtGte1;
    /**
     * Filters the results to only the reports that have a `status` that matches with any of the
     * provided status values.
     */
    status?: Status4;
    /** Filters the results to only the reports that were created by the users with these IDs. */
    creatorId?: CreatorId2;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class ListAllReportExecutionsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAllReportExecutionsError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ListReportExecutionsRequest = {
    /** The ID of the report to retrieve details for. */
    reportId: string;
    /** A pointer to the page of results to return. */
    cursor?: Cursor;
    /** The maximum number of items that are at returned. @default 20 */
    limit?: number;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class ListReportExecutionsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListReportExecutionsError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
