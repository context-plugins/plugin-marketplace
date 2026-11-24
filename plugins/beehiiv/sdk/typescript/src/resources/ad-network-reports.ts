import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  adNetworkReportSummarySchema,
  type AdNetworkReportSummary,
} from "../models/ad-network-report-summary.js";
import {
  adNetworkReportsGetResponseSchema,
  type AdNetworkReportsGetResponse,
} from "../models/ad-network-reports-get-response.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

export class AdNetworkReports {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get account ad network report summary OAuth Scope: posts:read
   *
   * @remarks
   * This feature is currently in beta and the API is subject to change.
   *
   * Retrieve one account-wide aggregate of advertisement performance and revenue across accessible
   * publications.
   *
   * @returns OK
   *
   * @throws {@link AdNetworkReports.AccountSummaryError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  accountSummary(
    request: AdNetworkReports.AccountSummaryRequest,
    options?: RequestOptions,
  ): ApiPromise<AdNetworkReportSummary, AdNetworkReports.AccountSummaryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ad_network/reports/summaries"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "start_date", value: request.startDate, schema: s.optional(s.dateOnly()) },
          { name: "end_date", value: request.endDate, schema: s.optional(s.dateOnly()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: adNetworkReportSummarySchema },
        errorFactory: AdNetworkReports.AccountSummaryError,
      },
      options,
    );
  }

  /**
   * Get ad network reports OAuth Scope: posts:read
   *
   * @remarks
   * This feature is currently in beta and the API is subject to change.
   *
   * Retrieve advertisement performance and payment reports for the publication.
   *
   * @returns OK
   *
   * @throws {@link AdNetworkReports.Index2Error} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  index2(
    request: AdNetworkReports.Index2Request,
    options?: RequestOptions,
  ): ApiPromise<AdNetworkReportsGetResponse, AdNetworkReports.Index2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/ad_network/reports"),
        auth: noneAuth,
        pathParams: [{ name: "publicationId", value: request.publicationId, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "start_date", value: request.startDate, schema: s.optional(s.dateOnly()) },
          { name: "end_date", value: request.endDate, schema: s.optional(s.dateOnly()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: adNetworkReportsGetResponseSchema },
        errorFactory: AdNetworkReports.Index2Error,
      },
      options,
    );
  }

  /**
   * Get ad network report summary OAuth Scope: posts:read
   *
   * @remarks
   * This feature is currently in beta and the API is subject to change.
   *
   * Retrieve aggregate advertisement performance and revenue for a publication.
   *
   * @returns OK
   *
   * @throws {@link AdNetworkReports.SummaryError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  summary(
    request: AdNetworkReports.SummaryRequest,
    options?: RequestOptions,
  ): ApiPromise<AdNetworkReportSummary, AdNetworkReports.SummaryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/ad_network/reports/summaries"),
        auth: noneAuth,
        pathParams: [{ name: "publicationId", value: request.publicationId, schema: s.string() }],
        query: [
          { name: "start_date", value: request.startDate, schema: s.optional(s.dateOnly()) },
          { name: "end_date", value: request.endDate, schema: s.optional(s.dateOnly()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: adNetworkReportSummarySchema },
        errorFactory: AdNetworkReports.SummaryError,
      },
      options,
    );
  }
}

export namespace AdNetworkReports {
  export type AccountSummaryRequest = {
    /** Include reports for advertisements sent on or after this date in `YYYY-MM-DD` format. */
    startDate?: string;
    /** Include reports for advertisements sent on or before this date in `YYYY-MM-DD` format. */
    endDate?: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class AccountSummaryError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<AccountSummaryError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Index2Request = {
    /** The prefixed ID of the publication object. */
    publicationId: string;
    /** A limit between 1 and 100. Defaults to 10. */
    limit?: number;
    /** The page of reports to return. Defaults to 1. */
    page?: number;
    /** Include reports for advertisements sent on or after this date in `YYYY-MM-DD` format. */
    startDate?: string;
    /** Include reports for advertisements sent on or before this date in `YYYY-MM-DD` format. */
    endDate?: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class Index2Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Index2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SummaryRequest = {
    /** The prefixed ID of the publication object. */
    publicationId: string;
    /** Include reports for advertisements sent on or after this date in `YYYY-MM-DD` format. */
    startDate?: string;
    /** Include reports for advertisements sent on or before this date in `YYYY-MM-DD` format. */
    endDate?: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class SummaryError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SummaryError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
