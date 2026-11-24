import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1DeliveriesDatasetsResponseSchema,
  type ApiV1DeliveriesDatasetsResponse,
} from "../models/api-v1-deliveries-datasets-response.js";
import {
  apiV1DeliveriesDownloadResponseSchema,
  type ApiV1DeliveriesDownloadResponse,
} from "../models/api-v1-deliveries-download-response.js";
import {
  apiV1DeliveriesRequestSchema,
  type ApiV1DeliveriesRequest,
} from "../models/api-v1-deliveries-request.js";
import {
  apiV1DeliveriesResponseSchema,
  type ApiV1DeliveriesResponse,
} from "../models/api-v1-deliveries-response.js";
import {
  apiV1DeliveriesResponse1Schema,
  type ApiV1DeliveriesResponse1,
} from "../models/api-v1-deliveries-response1.js";
import {
  apiV1DeliveriesResponse2Schema,
  type ApiV1DeliveriesResponse2,
} from "../models/api-v1-deliveries-response2.js";
import {
  apiV1DeliveriesResponse3Schema,
  type ApiV1DeliveriesResponse3,
} from "../models/api-v1-deliveries-response3.js";
import {
  apiV1DeliveriesSchedulesRequestSchema,
  type ApiV1DeliveriesSchedulesRequest,
} from "../models/api-v1-deliveries-schedules-request.js";
import {
  apiV1DeliveriesSchedulesRequest1Schema,
  type ApiV1DeliveriesSchedulesRequest1,
} from "../models/api-v1-deliveries-schedules-request1.js";
import {
  apiV1DeliveriesSchedulesResponseSchema,
  type ApiV1DeliveriesSchedulesResponse,
} from "../models/api-v1-deliveries-schedules-response.js";
import {
  apiV1DeliveriesSchedulesResponse1Schema,
  type ApiV1DeliveriesSchedulesResponse1,
} from "../models/api-v1-deliveries-schedules-response1.js";
import {
  apiV1DeliveriesSchedulesResponse2Schema,
  type ApiV1DeliveriesSchedulesResponse2,
} from "../models/api-v1-deliveries-schedules-response2.js";
import {
  apiV1DeliveriesSchedulesResponse3Schema,
  type ApiV1DeliveriesSchedulesResponse3,
} from "../models/api-v1-deliveries-schedules-response3.js";
import { errorInternalSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * Asynchronous exports for datasets larger than one HTTP response. Request, poll, download a
 * durable artifact with a manifest and a column dictionary beside it — or put it on a schedule and
 * stop asking. Growth plan and above.
 */
export class BulkDelivery {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel a queued or running delivery
   *
   * @remarks
   * Cancel a queued or running delivery. Authorization is enforced in SQL from the key's
   * organization rather than asserted by the route, so a delivery belonging to another organization
   * cannot be cancelled even by a caller that skips the check.
   *
   * @returns Success.
   *
   * @throws {@link BulkDelivery.DeliveriesCancelError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deliveriesCancel(
    request: BulkDelivery.DeliveriesCancelRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1DeliveriesResponse3, BulkDelivery.DeliveriesCancelError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/deliveries/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1DeliveriesResponse3Schema },
        errorFactory: BulkDelivery.DeliveriesCancelError,
      },
      options,
    );
  }

  /**
   * The deliverable catalog and its column dictionary: what can be delivered, in…
   *
   * @remarks
   * The deliverable catalog and its column dictionary: what can be delivered, in what shape, and —
   * resolved for the key on this request — what your plan allows. Every dataset is listed, each
   * carrying `available_to_you` and the reason when it is false. Add `?dataset=` for one dataset's
   * full column dictionary.
   *
   * - The dictionary returned here is the same document shipped inside each delivery, so a schema
   *   can be built against this endpoint before the first file arrives, and diffed afterwards.
   *
   * @returns Success.
   *
   * @throws {@link BulkDelivery.DeliveriesCatalogError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deliveriesCatalog(
    request: BulkDelivery.DeliveriesCatalogRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1DeliveriesDatasetsResponse, BulkDelivery.DeliveriesCatalogError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/deliveries/datasets"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [{ name: "dataset", value: request.dataset, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1DeliveriesDatasetsResponseSchema },
        errorFactory: BulkDelivery.DeliveriesCatalogError,
      },
      options,
    );
  }

  /**
   * Request an asynchronous bulk delivery
   *
   * @remarks
   * Request an asynchronous bulk delivery. Returns immediately with a delivery id; the export runs
   * server-side with keyset pagination and produces a durable artifact with a manifest and a column
   * dictionary beside it. Use this instead of /v1/export when the dataset is larger than one HTTP
   * response can carry.
   *
   * **Plan:** Bulk delivery is a Growth plan capability, the same line /v1/export draws. Row cap,
   * lookback window, monthly delivery quota and concurrency are all resolved server-side from the
   * key; none of them is a parameter.
   *
   * - One delivery counts once against your monthly request quota and once against your plan's
   *   separate monthly delivery quota. Polling its status costs a request like any other call.
   * - A refusal names its reason: `tier_not_allowed` when the plan does not include delivery,
   *   `quota_exceeded` when the monthly delivery quota is spent, and 429 again when too many
   *   deliveries are already running.
   *
   * @returns Success.
   *
   * @throws {@link BulkDelivery.DeliveriesCreateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deliveriesCreate(
    request: BulkDelivery.DeliveriesCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1DeliveriesResponse, BulkDelivery.DeliveriesCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/deliveries"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1DeliveriesRequestSchema },
      },
      {
        success: { kind: "json", schema: apiV1DeliveriesResponseSchema },
        errorFactory: BulkDelivery.DeliveriesCreateError,
      },
      options,
    );
  }

  /**
   * Stream a delivered artifact, or one of its sidecars
   *
   * @remarks
   * Stream a delivered artifact, or one of its sidecars. Two doors, one gate: the artifact's own
   * capability token for a pipeline that should not hold an API key, or the organization's API key
   * for anything that already does. Either way the same database function re-checks that the run
   * succeeded, that its retention window is still open, and that the presenter is entitled.
   *
   * - The response is the file itself, not a redirect to storage. A signed storage URL would keep
   *   working after the artifact expired, after the subscription lapsed and after the key was
   *   revoked, with no server left in the path to reconsider.
   * - Fetch `?part=dictionary` to build a schema before parsing, and `?part=manifest` to verify the
   *   row count and checksum after downloading.
   *
   * @returns Success.
   *
   * @throws {@link BulkDelivery.DeliveriesDownloadError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deliveriesDownload(
    request: BulkDelivery.DeliveriesDownloadRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1DeliveriesDownloadResponse, BulkDelivery.DeliveriesDownloadError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/deliveries/{id}/download"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "part", value: request.part, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1DeliveriesDownloadResponseSchema },
        errorFactory: BulkDelivery.DeliveriesDownloadError,
      },
      options,
    );
  }

  /**
   * List this organization's deliveries, most recent first, with their status, row…
   *
   * @remarks
   * List this organization's deliveries, most recent first, with their status, row and byte counts,
   * checksum, and download links while they are live.
   *
   * @returns Success.
   *
   * @throws {@link BulkDelivery.DeliveriesListError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deliveriesList(
    options?: RequestOptions,
  ): ApiPromise<ApiV1DeliveriesResponse1, BulkDelivery.DeliveriesListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/deliveries"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1DeliveriesResponse1Schema },
        errorFactory: BulkDelivery.DeliveriesListError,
      },
      options,
    );
  }

  /**
   * Remove a recurring delivery
   *
   * @remarks
   * Remove a recurring delivery. Artifacts already produced are unaffected and remain downloadable
   * until their retention window closes.
   *
   * @returns Success.
   *
   * @throws {@link BulkDelivery.DeliveriesScheduleDeleteError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deliveriesScheduleDelete(
    request: BulkDelivery.DeliveriesScheduleDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1DeliveriesSchedulesResponse3, BulkDelivery.DeliveriesScheduleDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/deliveries/schedules/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1DeliveriesSchedulesResponse3Schema },
        errorFactory: BulkDelivery.DeliveriesScheduleDeleteError,
      },
      options,
    );
  }

  /**
   * One recurring delivery and its recent runs
   *
   * @remarks
   * One recurring delivery and its recent runs.
   *
   * @returns Success.
   *
   * @throws {@link BulkDelivery.DeliveriesScheduleDetailError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deliveriesScheduleDetail(
    request: BulkDelivery.DeliveriesScheduleDetailRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1DeliveriesSchedulesResponse2, BulkDelivery.DeliveriesScheduleDetailError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/deliveries/schedules/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1DeliveriesSchedulesResponse2Schema },
        errorFactory: BulkDelivery.DeliveriesScheduleDetailError,
      },
      options,
    );
  }

  /**
   * Pause, resume, retime or refilter a recurring delivery
   *
   * @remarks
   * Pause, resume, retime or refilter a recurring delivery. Dataset, format and mode are
   * deliberately not editable: they are what entitlement was checked against at creation, and
   * letting a PATCH swap the dataset would turn one authorized decision into a standing permission
   * for any other. Change them by creating a new schedule.
   *
   * - For a `changes` schedule the watermark is untouched by a pause, so the first run after
   *   resuming covers everything that happened while it slept — clamped, as always, by your plan's
   *   lookback window.
   *
   * @returns Success.
   *
   * @throws {@link BulkDelivery.DeliveriesScheduleUpdateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deliveriesScheduleUpdate(
    request: BulkDelivery.DeliveriesScheduleUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1DeliveriesSchedulesResponse3, BulkDelivery.DeliveriesScheduleUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/deliveries/schedules/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1DeliveriesSchedulesRequest1Schema },
      },
      {
        success: { kind: "json", schema: apiV1DeliveriesSchedulesResponse3Schema },
        errorFactory: BulkDelivery.DeliveriesScheduleUpdateError,
      },
      options,
    );
  }

  /**
   * Create a recurring delivery: this dataset, these filters, this format, on this…
   *
   * @remarks
   * Create a recurring delivery: this dataset, these filters, this format, on this cadence,
   * produced whether or not anyone is awake. In `changes` mode each run covers only what was
   * observed after the previous SUCCESSFUL delivery, so a failed run is re-covered on the next one
   * rather than silently skipped.
   *
   * **Plan:** Growth plan and above, the same gate as one-off delivery.
   *
   * - Dataset, format and mode are fixed at creation. Filters, columns, cadence and pause/resume
   *   are editable through PATCH on the schedule.
   *
   * @returns Success.
   *
   * @throws {@link BulkDelivery.DeliveriesSchedulesCreateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deliveriesSchedulesCreate(
    request: BulkDelivery.DeliveriesSchedulesCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1DeliveriesSchedulesResponse, BulkDelivery.DeliveriesSchedulesCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/deliveries/schedules"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1DeliveriesSchedulesRequestSchema },
      },
      {
        success: { kind: "json", schema: apiV1DeliveriesSchedulesResponseSchema },
        errorFactory: BulkDelivery.DeliveriesSchedulesCreateError,
      },
      options,
    );
  }

  /**
   * List this organization's recurring deliveries, with their cadence, next run…
   *
   * @remarks
   * List this organization's recurring deliveries, with their cadence, next run, watermark and
   * paused state.
   *
   * @returns Success.
   *
   * @throws {@link BulkDelivery.DeliveriesSchedulesListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deliveriesSchedulesList(
    options?: RequestOptions,
  ): ApiPromise<ApiV1DeliveriesSchedulesResponse1, BulkDelivery.DeliveriesSchedulesListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/deliveries/schedules"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1DeliveriesSchedulesResponse1Schema },
        errorFactory: BulkDelivery.DeliveriesSchedulesListError,
      },
      options,
    );
  }

  /**
   * Status of one delivery: progress while it runs, download links once it…
   *
   * @remarks
   * Status of one delivery: progress while it runs, download links once it succeeds, and — when it
   * fails — a machine-readable `error.code` with a message written for the person who has to decide
   * what to do next.
   *
   * @returns Success.
   *
   * @throws {@link BulkDelivery.DeliveriesStatusError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deliveriesStatus(
    request: BulkDelivery.DeliveriesStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1DeliveriesResponse2, BulkDelivery.DeliveriesStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/deliveries/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1DeliveriesResponse2Schema },
        errorFactory: BulkDelivery.DeliveriesStatusError,
      },
      options,
    );
  }
}

export namespace BulkDelivery {
  export type DeliveriesCancelRequest = {
    /** Delivery id. */
    id: string;
  };

  export class DeliveriesCancelError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeliveriesCancelError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type DeliveriesCatalogRequest = {
    /**
     * Narrow to one dataset and include its full column dictionary. Without it the response carries
     * column counts rather than every column. Current keys: associations, vendors, statutes,
     * building-safety, report-card, changes.
     */
    dataset?: string;
  };

  export class DeliveriesCatalogError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeliveriesCatalogError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type DeliveriesCreateRequest = {
    body: ApiV1DeliveriesRequest;
  };

  export class DeliveriesCreateError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeliveriesCreateError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type DeliveriesDownloadRequest = {
    /** Delivery id. */
    id: string;
    /**
     * The artifact's capability token, as returned on the delivery's status. Use this when the
     * consumer should not hold an API key. A token download does not consume your monthly request
     * quota.
     */
    token?: string;
    /**
     * `manifest` for the run's manifest or `dictionary` for its column dictionary, fetched through
     * the same authorization. Omit for the data itself.
     */
    part?: string;
  };

  export class DeliveriesDownloadError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeliveriesDownloadError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export class DeliveriesListError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeliveriesListError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type DeliveriesScheduleDeleteRequest = {
    /** Schedule id. */
    id: string;
  };

  export class DeliveriesScheduleDeleteError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeliveriesScheduleDeleteError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type DeliveriesScheduleDetailRequest = {
    /** Schedule id. */
    id: string;
  };

  export class DeliveriesScheduleDetailError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeliveriesScheduleDetailError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type DeliveriesScheduleUpdateRequest = {
    /** Schedule id. */
    id: string;
    body: ApiV1DeliveriesSchedulesRequest1;
  };

  export class DeliveriesScheduleUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeliveriesScheduleUpdateError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type DeliveriesSchedulesCreateRequest = {
    body: ApiV1DeliveriesSchedulesRequest;
  };

  export class DeliveriesSchedulesCreateError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeliveriesSchedulesCreateError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export class DeliveriesSchedulesListError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeliveriesSchedulesListError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type DeliveriesStatusRequest = {
    /** Delivery id returned when the delivery was requested. */
    id: string;
  };

  export class DeliveriesStatusError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeliveriesStatusError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }
}
