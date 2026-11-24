import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  websiteVisitsRequestInternalSchema,
  type WebsiteVisitsRequest,
} from "../models/website-visits-request.js";
import {
  websiteVisitsResponseSchema,
  type WebsiteVisitsResponse,
} from "../models/website-visits-response.js";
import type { Servers } from "../servers.js";

/**
 * Retrieve companies ranked by website-visit signals for your tracked domains.
 *
 * Domains must be configured for tracking in the dashboard. Each result combines a V3 company
 * firmographic preview with behavioral visit metrics (score, sessions, unique visitors, avg session
 * length, and more).
 */
export class WebsiteVisits {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Website Visitors
   *
   * @remarks
   * Returns companies ranked by website-visit signals for your tracked domains and date range.
   *
   * Domains must be configured for tracking in the Lusha dashboard — they are resolved to site IDs
   * server-side. Each result combines a V3 company firmographic preview (same shape as Search
   * Companies) with behavioral visit metrics.
   *
   * **Notes:**
   * - Date range must be ≤ 3 months
   * - If any requested domain is not configured for tracking, the entire request fails with `400`
   * - `limit` accepts 1–150
   *
   * @returns Successful response
   *
   * @throws {@link WebsiteVisits.GetWebsiteVisitsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWebsiteVisits(
    request: WebsiteVisits.GetWebsiteVisitsRequest,
    options?: RequestOptions,
  ): ApiPromise<WebsiteVisitsResponse, WebsiteVisits.GetWebsiteVisitsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/companies/website-visits"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: websiteVisitsRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: websiteVisitsResponseSchema },
        errorFactory: WebsiteVisits.GetWebsiteVisitsError,
      },
      options,
    );
  }
}

export namespace WebsiteVisits {
  export type GetWebsiteVisitsRequest = {
    body: WebsiteVisitsRequest;
  };

  export class GetWebsiteVisitsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetWebsiteVisitsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 402, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
