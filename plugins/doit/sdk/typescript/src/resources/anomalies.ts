import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { anomaliesResponseSchema, type AnomaliesResponse } from "../models/anomalies-response.js";
import {
  anomaliesV1ExplanationResponseSchema,
  type AnomaliesV1ExplanationResponse,
} from "../models/anomalies-v1-explanation-response.js";
import { anomaliesV1ResponseSchema, type AnomaliesV1Response } from "../models/anomalies-v1-response.js";
import { anomalyStatusUpdateSchema, type AnomalyStatusUpdate } from "../models/anomaly-status-update.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  SortByDoiTAnomaliesApi,
  sortByDoiTAnomaliesApiSchema,
} from "../models/sort-by-doi-tanomalies-api.js";
import { sortOrderSchema, type SortOrder } from "../models/sort-order.js";
import type { Servers } from "../servers.js";

/**
 * Monitor cost spikes in your cloud environment.
 */
export class Anomalies {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve an anomaly
   *
   * @remarks
   * Returns the specified anomaly.
   *
   * @returns OK - Anomaly returned.
   *
   * @throws {@link Anomalies.GetAnomalyError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAnomaly(
    request: Anomalies.GetAnomalyRequest,
    options?: RequestOptions,
  ): ApiPromise<AnomaliesV1Response, Anomalies.GetAnomalyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/anomalies/v1/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: anomaliesV1ResponseSchema },
        errorFactory: Anomalies.GetAnomalyError,
      },
      options,
    );
  }

  /**
   * Explain an anomaly
   *
   * @remarks
   * Returns a likely-cause explanation for the specified anomaly, alongside the deterministic facts
   * and evidence references it was generated from. The explanation itself is AI-generated; it is
   * always returned separately from the deterministic `facts`, and is marked as such in the
   * `explanation` object. Generation is ephemeral: no conversation is persisted on your behalf.
   *
   * @returns OK - Anomaly explanation returned.
   *
   * @throws {@link Anomalies.GetAnomalyExplanationError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAnomalyExplanation(
    request: Anomalies.GetAnomalyExplanationRequest,
    options?: RequestOptions,
  ): ApiPromise<AnomaliesV1ExplanationResponse, Anomalies.GetAnomalyExplanationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/anomalies/v1/{id}/explanation"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: anomaliesV1ExplanationResponseSchema },
        errorFactory: Anomalies.GetAnomalyExplanationError,
      },
      options,
    );
  }

  /**
   * List anomalies
   *
   * @remarks
   * Returns a list of detected anomalies. Anomalies can be sorted by `startTime`, `severityLevel`,
   * or `costOfAnomaly` using `sortBy` and `sortOrder`. By default they are sorted by `startTime` in
   * descending order (most recent first). The sort order is total and reproducible: ties on the
   * selected field are broken by `startTime` descending and then by anomaly `id` ascending, so the
   * same result set always paginates in the same order. The `notifications` array is always present
   * on each anomaly item; it is empty unless `includeNotifications=true` is supplied. **Pagination
   * stability**: `sortBy`, `sortOrder`, `filter`, `minCreationTime`, and `maxCreationTime` must be
   * held constant across a pagination sequence. A `pageToken` presented with any of them changed is
   * rejected with `400`.
   *
   * @returns OK - The request succeeded.
   *
   * @throws {@link Anomalies.ListAnomaliesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAnomalies(
    request: Anomalies.ListAnomaliesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<AnomaliesResponse, Anomalies.ListAnomaliesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/anomalies/v1"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [
          { name: "minCreationTime", value: request.minCreationTime, schema: s.optional(s.int()) },
          { name: "maxCreationTime", value: request.maxCreationTime, schema: s.optional(s.int()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          {
            name: "sortBy",
            value: request.sortBy,
            schema: s.defaulted(sortByDoiTAnomaliesApiSchema, SortByDoiTAnomaliesApi.StartTime),
          },
          { name: "sortOrder", value: request.sortOrder, schema: s.optional(s.lazy(() => sortOrderSchema)) },
          { name: "maxResults", value: request.maxResults, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          {
            name: "includeNotifications",
            value: request.includeNotifications,
            schema: s.defaulted(s.boolean(), false),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: anomaliesResponseSchema },
        errorFactory: Anomalies.ListAnomaliesError,
      },
      options,
    );
  }

  /**
   * Update an anomaly's review status
   *
   * @remarks
   * Updates the review status of the anomaly identified by `{id}`, the same identifier `getAnomaly`
   * accepts. Mirrors the review workflow available in the console: set `reviewStatus`, and when
   * resolving, qualify it with `resolution` and optionally a `resolutionNote` (feedback reason and
   * comment). The change is recorded in the anomaly's review history exactly like a console update,
   * and the actor is derived from the API credentials - never from the request body.
   *
   * Validation: `reviewStatus` is one of `NEEDS_REVIEW`, `UNDER_REVIEW`, `RESOLVED`; `resolution`
   * (`ANOMALY_CONFIRMED` or `NOT_ANOMALY`) is required when `reviewStatus` is `RESOLVED` and
   * forbidden otherwise; `resolutionNote.reason` must belong to the given `resolution` -
   * `SECURITY_BREACH`, `MISCONFIGURATION`, `UNINTENTIONAL_PROVISIONING`, `EXPECTED_COST_SPIKE` or
   * `ANOMALOUS_OTHER` for `ANOMALY_CONFIRMED`, and `FAULTY_ANOMALY_DETECTION_MODEL`,
   * `INCORRECT_DATA`, `LOW_IMPACT` or `NON_ANOMALOUS_OTHER` for `NOT_ANOMALY`. Requires the
   * `AnomaliesManager` permission and DoiT API access (`platform:externalApi`).
   *
   * @returns OK - Anomaly status updated.
   *
   * @throws {@link Anomalies.PatchAnomalyError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchAnomaly(
    request: Anomalies.PatchAnomalyRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Anomalies.PatchAnomalyError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/anomalies/v1/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: anomalyStatusUpdateSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Anomalies.PatchAnomalyError,
      },
      options,
    );
  }
}

export namespace Anomalies {
  export type GetAnomalyRequest = {
    /** A unique identifier of the anomaly. */
    id: string;
  };

  export class GetAnomalyError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAnomalyError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAnomalyExplanationRequest = {
    /** A unique identifier of the anomaly. */
    id: string;
  };

  export class GetAnomalyExplanationError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAnomalyExplanationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListAnomaliesRequest = {
    /**
     * Inclusive lower bound on the anomaly's usage start time, in milliseconds since the POSIX
     * epoch. Despite the name, this filters the anomaly's usage start time, not the time the
     * anomaly document was created.
     */
    minCreationTime?: number;
    /**
     * Inclusive upper bound on the anomaly's usage start time, in milliseconds since the POSIX
     * epoch. Despite the name, this filters the anomaly's usage start time, not the time the
     * anomaly document was created.
     */
    maxCreationTime?: number;
    /**
     * An expression for filtering the results. The syntax is `key:value`. Multiple criteria can be
     * combined using a pipe |. See [Filters](https://developer.doit.com/docs/filters). Available
     * filter keys: **serviceName**, **billingAccount**, **platform**, **severityLevel**.
     * `severityLevel` values must be lowercase: `information`, `warning`, `critical`. An
     * unrecognised key, or a segment that is not `key:value`, is rejected with `400` rather than
     * ignored.
     */
    filter?: string;
    /**
     * A field by which the results will be sorted. Defaults to `startTime`.
     *
     * @default SortByDoiTAnomaliesApi.StartTime
     */
    sortBy?: SortByDoiTAnomaliesApi;
    /**
     * Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for
     * descending (highest to lowest).
     */
    sortOrder?: SortOrder;
    /**
     * The maximum number of results to return in a single page. If omitted, all anomalies matching
     * the filters and time window are returned in a single page.
     */
    maxResults?: number;
    /** Page token, returned by a previous call, to request the next page of results */
    pageToken?: string;
    /** Include anomaly notifications from the subcollection. Defaults to false. @default false */
    includeNotifications?: boolean;
  };

  export class ListAnomaliesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAnomaliesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PatchAnomalyRequest = {
    /** A unique identifier of the anomaly. */
    id: string;
    body: AnomalyStatusUpdate;
  };

  export class PatchAnomalyError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchAnomalyError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
