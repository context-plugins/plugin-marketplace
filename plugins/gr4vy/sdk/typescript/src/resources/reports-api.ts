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
import { reportCreateSchema, type ReportCreate } from "../models/report-create.js";
import { reportUpdateSchema, type ReportUpdate } from "../models/report-update.js";
import { reportSchema, type Report } from "../models/report.js";
import { reportsSchema, type Reports } from "../models/reports.js";
import { cursorSchema, type Cursor } from "../models/unions/cursor.js";
import { name111Schema, type Name111 } from "../models/unions/name111.js";
import { scheduleEnabled1Schema, type ScheduleEnabled1 } from "../models/unions/schedule-enabled1.js";
import { scheduleSchema, type Schedule } from "../models/unions/schedule.js";
import {
  xGr4VyMerchantAccountIdSchema,
  type XGr4VyMerchantAccountId,
} from "../models/unions/xgr4-vy-merchant-account-id.js";
import type { Servers } from "../servers.js";

/**
 * Manage one-off and scheduled reports.
 */
export class ReportsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a report
   *
   * @remarks
   * Create a new report.
   *
   * @returns Successful Response
   *
   * @throws {@link ReportsApi.AddReportError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addReport(
    request: ReportsApi.AddReportRequest,
    options?: RequestOptions,
  ): ApiPromise<Report, ReportsApi.AddReportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/reports"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: reportCreateSchema },
      },
      {
        success: { kind: "json", schema: reportSchema },
        errorFactory: ReportsApi.AddReportError,
      },
      options,
    );
  }

  /**
   * Get a report
   *
   * @remarks
   * Fetches a report by its ID.
   *
   * @returns Successful Response
   *
   * @throws {@link ReportsApi.GetReportError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getReport(
    request: ReportsApi.GetReportRequest,
    options?: RequestOptions,
  ): ApiPromise<Report, ReportsApi.GetReportError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/reports/{report_id}"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [{ name: "report_id", value: request.reportId, schema: s.string() }],
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
        success: { kind: "json", schema: reportSchema },
        errorFactory: ReportsApi.GetReportError,
      },
      options,
    );
  }

  /**
   * List configured reports
   *
   * @remarks
   * List all configured reports that can be generated.
   *
   * @returns Successful Response
   *
   * @throws {@link ReportsApi.ListReportsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listReports(
    request: ReportsApi.ListReportsRequest,
    options?: RequestOptions,
  ): ApiPromise<Reports, ReportsApi.ListReportsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/reports"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [],
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.lazy(() => cursorSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "schedule", value: request.schedule, schema: s.optional(s.lazy(() => scheduleSchema)) },
          {
            name: "schedule_enabled",
            value: request.scheduleEnabled,
            schema: s.optional(s.lazy(() => scheduleEnabled1Schema)),
          },
          { name: "name", value: request.name, schema: s.optional(s.lazy(() => name111Schema)) },
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
        success: { kind: "json", schema: reportsSchema },
        errorFactory: ReportsApi.ListReportsError,
      },
      options,
    );
  }

  /**
   * Update a report
   *
   * @remarks
   * Updates the configuration of a report.
   *
   * @returns Successful Response
   *
   * @throws {@link ReportsApi.UpdateReportError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateReport(
    request: ReportsApi.UpdateReportRequest,
    options?: RequestOptions,
  ): ApiPromise<Report, ReportsApi.UpdateReportError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/reports/{report_id}"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [{ name: "report_id", value: request.reportId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: reportUpdateSchema },
      },
      {
        success: { kind: "json", schema: reportSchema },
        errorFactory: ReportsApi.UpdateReportError,
      },
      options,
    );
  }
}

export namespace ReportsApi {
  export type AddReportRequest = {
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
    body: ReportCreate;
  };

  export class AddReportError extends ApiError {
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

    static readonly errors: ErrorDecoders<AddReportError> = [
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

  export type GetReportRequest = {
    /** The ID of the report to retrieve details for. */
    reportId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class GetReportError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetReportError> = [
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

  export type ListReportsRequest = {
    /** A pointer to the page of results to return. */
    cursor?: Cursor;
    /** The maximum number of items that are at returned. @default 20 */
    limit?: number;
    /** Filters the reports by the type of schedule at which they run. */
    schedule?: Schedule;
    /** Filters the reports by wether their schedule is enabled. */
    scheduleEnabled?: ScheduleEnabled1;
    /** Filters the reports by searching their name for (partial) matches. */
    name?: Name111;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class ListReportsError extends ApiError {
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

    static readonly errors: ErrorDecoders<ListReportsError> = [
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

  export type UpdateReportRequest = {
    /** The ID of the report to edit. */
    reportId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
    body: ReportUpdate;
  };

  export class UpdateReportError extends ApiError {
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

    static readonly errors: ErrorDecoders<UpdateReportError> = [
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
