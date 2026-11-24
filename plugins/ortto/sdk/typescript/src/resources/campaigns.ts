import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  campaignCalendarRequestSchema,
  type CampaignCalendarRequest,
} from "../models/campaign-calendar-request.js";
import {
  campaignReportsGetRequestSchema,
  type CampaignReportsGetRequest,
} from "../models/campaign-reports-get-request.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * Retrieve campaigns, reports, and assets.
 */
export class Campaigns {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve campaigns by time period
   *
   * @returns Matching campaigns.
   *
   * @throws {@link Campaigns.GetCampaignCalendarError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link OrttoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCampaignCalendar(
    request: Campaigns.GetCampaignCalendarRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Campaigns.GetCampaignCalendarError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/campaign/calendar"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: campaignCalendarRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Campaigns.GetCampaignCalendarError,
      },
      options,
    );
  }

  /**
   * Retrieve a campaign or asset report
   *
   * @returns Campaign or asset report.
   *
   * @throws {@link Campaigns.GetCampaignReportError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link OrttoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCampaignReport(
    request: Campaigns.GetCampaignReportRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Campaigns.GetCampaignReportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/campaign/reports/get"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: campaignReportsGetRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Campaigns.GetCampaignReportError,
      },
      options,
    );
  }
}

export namespace Campaigns {
  export type GetCampaignCalendarRequest = {
    body: CampaignCalendarRequest;
  };

  export class GetCampaignCalendarError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetCampaignCalendarError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCampaignReportRequest = {
    body: CampaignReportsGetRequest;
  };

  export class GetCampaignReportError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetCampaignReportError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
