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
import { incidentContentDtoSchema, type IncidentContentDto } from "../models/incident-content-dto.js";
import {
  publicApiCreateIncidentDtoSchema,
  type PublicApiCreateIncidentDto,
} from "../models/public-api-create-incident-dto.js";
import {
  publicApiIncidentsResponseSchema,
  type PublicApiIncidentsResponse,
} from "../models/public-api-incidents-response.js";
import {
  publicApiRcaReportContentDtoSchema,
  type PublicApiRcaReportContentDto,
} from "../models/public-api-rca-report-content-dto.js";
import {
  publicApiRcaReportDtoSchema,
  type PublicApiRcaReportDto,
} from "../models/public-api-rca-report-dto.js";
import {
  publicApiUpdateIncidentDtoSchema,
  type PublicApiUpdateIncidentDto,
} from "../models/public-api-update-incident-dto.js";
import type { Servers } from "../servers.js";

/**
 * Soda Cloud API Incidents Endpoints
 */
export class Incidents {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List incidents
   *
   * @remarks
   * This endpoint enables you to gather information about the incidents that exist in your
   * organization's Soda Cloud account.
   *
   * Each incident carries a `hasRcaReport` flag indicating whether a structured root cause analysis
   * report has been published for it; retrieve the report itself from `GET
   * /api/v1/incidents/{incidentId}/rcaReport`. **`hasRcaReport` is in private preview**: it is
   * `true` or `false` only when the root cause analysis report preview is enabled for your
   * organization, and `null` otherwise.
   *
   * This GET is a paginated API that uses the following parameters to request specific details:
   *
   * - `size`: Supply an integer value between 1 and 1000, inclusive. The default value is 10.
   *
   * - `page`: Supply an integer value. The default value is 0.
   *
   * - `status`: Optionally, use this parameter to collect only the incidents with a specific
   *   status. One of `reported`, `investigating`, `fixing`, `resolved`.
   *
   * - `severity`: Optionally, use this parameter to collect only the incidents with a specific
   *   severity. One of `minor`, `major`, `critical`.
   *
   * - `datasetId`: Optionally, use this parameter to collect only the incidents associated with a
   *   specific dataset. Find the `datasetId` in the URL of the dataset page in Soda Cloud.
   *
   * - `incidentIds`: Optionally, use this parameter to collect only a specific batch of incidents.
   *   Provide multiple values as a comma-separated list of incident IDs, which you can find on the
   *   individual incident pages in Soda Cloud. This query parameter is limited to 1000 incident IDs
   *   and can be combined with the other query parameters (`status`, `severity`, `datasetId`,
   *   `page`, `size`), which are all applied together.
   *
   * - `leadId`: Optionally, use this parameter to collect only the incidents assigned to a specific
   *   lead user. Provide the user id of the incident lead.
   *
   * - `from`: Optionally, use this parameter to collect only the incidents created on or after this
   *   moment, compared against each incident's created timestamp. Supply an ISO8601 timestamp
   *   value. Example: `2026-08-01T00:00:00+01:00`
   *
   * - `to`: Optionally, use this parameter to collect only the incidents created on or before this
   *   moment, compared against each incident's created timestamp. Supply an ISO8601 timestamp
   *   value. Example: `2026-08-01T23:59:59+01:00`
   *
   * The `leadId`, `from`, and `to` parameters can be combined with the other query parameters,
   * which are all applied together (AND).
   *
   * If not specified, the query gathers information for all incidents in the account and sorts the
   * results by incident number in ascending order.
   *
   * ## Authorization
   *
   * Soda only returns the incidents linked to datasets to which the user has **View dataset**
   * permissions. Soda Cloud Admins have access to all incidents.**See Manage dataset roles for more
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
   * `Incidents`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Incidents.GetApiV1IncidentsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1Incidents(
    request: Incidents.GetApiV1IncidentsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PublicApiIncidentsResponse, Incidents.GetApiV1IncidentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/incidents"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [],
        query: [
          { name: "datasetId", value: request.datasetId, schema: s.optional(s.string()) },
          { name: "from", value: request.from, schema: s.optional(s.dateTime()) },
          { name: "incidentIds", value: request.incidentIds, schema: s.optional(s.string()) },
          { name: "leadId", value: request.leadId, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "severity", value: request.severity, schema: s.optional(s.string()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
          { name: "status", value: request.status, schema: s.optional(s.string()) },
          { name: "to", value: request.to, schema: s.optional(s.dateTime()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiIncidentsResponseSchema },
        errorFactory: Incidents.GetApiV1IncidentsError,
      },
      options,
    );
  }

  /**
   * Get incident RCA report
   *
   * @remarks
   * This endpoint returns the structured root cause analysis and impact assessment published on an
   * incident in your organization's Soda Cloud account.
   *
   * Returns 404 if the incident does not exist or has no RCA report published yet.
   *
   * ## Authorization
   *
   * Unlike the incident list, this endpoint requires **View dataset** permission on every dataset
   * the incident touches. Soda Cloud Admins have access to all incidents. **See Manage dataset
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
   * `Incidents`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Incidents.GetApiV1IncidentsIncidentIdRcaReportError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1IncidentsIncidentIdRcaReport(
    request: Incidents.GetApiV1IncidentsIncidentIdRcaReportRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicApiRcaReportContentDto, Incidents.GetApiV1IncidentsIncidentIdRcaReportError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/incidents/{incidentId}/rcaReport"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "incidentId", value: request.incidentId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiRcaReportContentDtoSchema },
        errorFactory: Incidents.GetApiV1IncidentsIncidentIdRcaReportError,
      },
      options,
    );
  }

  /**
   * Create incident
   *
   * @remarks
   * This endpoint enables you to create a new incident linked to one or more monitor results in
   * your organization's Soda Cloud account. The authenticated user becomes the incident reporter.
   *
   * ## Authorization
   *
   * Only users with **Manage incident** permission can create incidents. Soda Cloud Admins have
   * permission to create incidents on all datasets.**See Manage dataset roles for more
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
   * `Incidents`
   *
   * ## Rate limiting
   *
   * 10 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Incidents.PostApiV1IncidentsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1Incidents(
    request: Incidents.PostApiV1IncidentsRequest,
    options?: RequestOptions,
  ): ApiPromise<IncidentContentDto, Incidents.PostApiV1IncidentsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/incidents"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publicApiCreateIncidentDtoSchema },
      },
      {
        success: { kind: "json", schema: incidentContentDtoSchema },
        errorFactory: Incidents.PostApiV1IncidentsError,
      },
      options,
    );
  }

  /**
   * Update incident
   *
   * @remarks
   * This endpoint enables you to update an existing incident title, severity, status, or
   * description in your organization's Soda Cloud account.
   *
   * ## Authorization
   *
   * Only users with **Manage incident** permission can update incidents. Soda Cloud Admins have
   * permission to update all incidents.**See Manage dataset roles for more information.**
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
   * `Incidents`
   *
   * ## Rate limiting
   *
   * 10 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Incidents.PostApiV1IncidentsIncidentIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1IncidentsIncidentId(
    request: Incidents.PostApiV1IncidentsIncidentIdRequest,
    options?: RequestOptions,
  ): ApiPromise<IncidentContentDto, Incidents.PostApiV1IncidentsIncidentIdError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/incidents/{incidentId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "incidentId", value: request.incidentId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publicApiUpdateIncidentDtoSchema },
      },
      {
        success: { kind: "json", schema: incidentContentDtoSchema },
        errorFactory: Incidents.PostApiV1IncidentsIncidentIdError,
      },
      options,
    );
  }

  /**
   * Publish incident RCA report
   *
   * @remarks
   * This endpoint publishes a structured root cause analysis and impact assessment onto an existing
   * incident in your organization's Soda Cloud account. The report is additive and does not mutate
   * the incident's own fields (title, severity, status, description).
   *
   * There is one report per incident: publishing replaces any previous report. Publishing to a
   * resolved incident is rejected.
   *
   * ## Authorization
   *
   * Only users with **Manage incident** permission can publish incident RCA reports. Soda Cloud
   * Admins have permission to publish reports on all incidents.**See Manage dataset roles for more
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
   * `Incidents`
   *
   * ## Rate limiting
   *
   * 10 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Incidents.PostApiV1IncidentsIncidentIdRcaReportError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1IncidentsIncidentIdRcaReport(
    request: Incidents.PostApiV1IncidentsIncidentIdRcaReportRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicApiRcaReportContentDto, Incidents.PostApiV1IncidentsIncidentIdRcaReportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/incidents/{incidentId}/rcaReport"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "incidentId", value: request.incidentId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publicApiRcaReportDtoSchema },
      },
      {
        success: { kind: "json", schema: publicApiRcaReportContentDtoSchema },
        errorFactory: Incidents.PostApiV1IncidentsIncidentIdRcaReportError,
      },
      options,
    );
  }
}

export namespace Incidents {
  export type GetApiV1IncidentsRequest = {
    datasetId?: string;
    from?: Date;
    incidentIds?: string;
    leadId?: string;
    page?: number;
    severity?: string;
    size?: number;
    status?: string;
    to?: Date;
  };

  export class GetApiV1IncidentsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1IncidentsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1IncidentsIncidentIdRcaReportRequest = {
    incidentId: string;
  };

  export class GetApiV1IncidentsIncidentIdRcaReportError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1IncidentsIncidentIdRcaReportError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1IncidentsRequest = {
    body: PublicApiCreateIncidentDto;
  };

  export class PostApiV1IncidentsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1IncidentsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1IncidentsIncidentIdRequest = {
    incidentId: string;
    body: PublicApiUpdateIncidentDto;
  };

  export class PostApiV1IncidentsIncidentIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1IncidentsIncidentIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1IncidentsIncidentIdRcaReportRequest = {
    incidentId: string;
    body: PublicApiRcaReportDto;
  };

  export class PostApiV1IncidentsIncidentIdRcaReportError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1IncidentsIncidentIdRcaReportError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
