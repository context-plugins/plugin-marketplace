import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { alertRequestInternalSchema, type AlertRequest } from "../models/alert-request.js";
import {
  alertSlackChannelListInternalSchema,
  type AlertSlackChannelList,
} from "../models/alert-slack-channel-list.js";
import { alertUpdateRequestInternalSchema, type AlertUpdateRequest } from "../models/alert-update-request.js";
import { alertInternalSchema, type Alert } from "../models/alert.js";
import { errorSchema, type Error } from "../models/error.js";
import { externalAlertListInternalSchema, type ExternalAlertList } from "../models/external-alert-list.js";
import { sortBySchema, type SortBy } from "../models/sort-by.js";
import { sortOrderSchema, type SortOrder } from "../models/sort-order.js";
import type { Servers } from "../servers.js";

/**
 * Notifications triggered when cloud costs exceed defined thresholds or meet specific conditions.
 */
export class Alerts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create an alert
   *
   * @remarks
   * Creates a new alert.
   *
   * @returns Created - The request succeeded.
   *
   * @throws {@link Alerts.CreateAlertError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createAlert(
    request: Alerts.CreateAlertRequest,
    options?: RequestOptions,
  ): ApiPromise<Alert, Alerts.CreateAlertError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/analytics/v1/alerts"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: alertRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: alertInternalSchema },
        errorFactory: Alerts.CreateAlertError,
      },
      options,
    );
  }

  /**
   * Delete an alert
   *
   * @remarks
   * Deletes the alert specified by the Id.
   *
   * @returns OK - Alert deleted.
   *
   * @throws {@link Alerts.DeleteAlertError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteAlert(
    request: Alerts.DeleteAlertRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Alerts.DeleteAlertError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/analytics/v1/alerts/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Alerts.DeleteAlertError,
      },
      options,
    );
  }

  /**
   * Retrieve an alert
   *
   * @remarks
   * Returns an alert by the specified Id.
   *
   * @returns OK - Alert returned.
   *
   * @throws {@link Alerts.GetAlertError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAlert(
    request: Alerts.GetAlertRequest,
    options?: RequestOptions,
  ): ApiPromise<Alert, Alerts.GetAlertError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/analytics/v1/alerts/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: alertInternalSchema },
        errorFactory: Alerts.GetAlertError,
      },
      options,
    );
  }

  /**
   * List eligible Slack destinations
   *
   * @remarks
   * Lists Slack destinations eligible for Alert notifications for the authenticated customer and
   * caller. Returns canonical identifiers for recipientsSlackChannels and integration status. User
   * credentials include visible private channels; service accounts return public/shared channels
   * only. Results are sorted by stable destination identity. Keep nameContains unchanged when
   * following pageToken.
   *
   * @returns Eligible channels and connection status.
   *
   * @throws {@link Alerts.ListAlertSlackChannelsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAlertSlackChannels(
    request: Alerts.ListAlertSlackChannelsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<AlertSlackChannelList, Alerts.ListAlertSlackChannelsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/analytics/v1/alerts/slack-channels"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [
          { name: "nameContains", value: request.nameContains, schema: s.optional(s.string()) },
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 50) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: alertSlackChannelListInternalSchema },
        errorFactory: Alerts.ListAlertSlackChannelsError,
      },
      options,
    );
  }

  /**
   * List alerts
   *
   * @remarks
   * Returns a list of alerts that your account has access to. Alerts are listed in reverse
   * chronological order by default.
   *
   * @returns OK - The request succeeded.
   *
   * @throws {@link Alerts.ListAlertsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAlerts(
    request: Alerts.ListAlertsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ExternalAlertList, Alerts.ListAlertsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/analytics/v1/alerts"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [
          { name: "sortBy", value: request.sortBy, schema: s.optional(s.lazy(() => sortBySchema)) },
          { name: "sortOrder", value: request.sortOrder, schema: s.optional(s.lazy(() => sortOrderSchema)) },
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 50) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "nameContains", value: request.nameContains, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: externalAlertListInternalSchema },
        errorFactory: Alerts.ListAlertsError,
      },
      options,
    );
  }

  /**
   * Update an alert
   *
   * @remarks
   * Updates the alert specified by the Id.
   *
   * @returns OK - Alert updated.
   *
   * @throws {@link Alerts.UpdateAlertError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateAlert(
    request: Alerts.UpdateAlertRequest,
    options?: RequestOptions,
  ): ApiPromise<Alert, Alerts.UpdateAlertError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/analytics/v1/alerts/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: alertUpdateRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: alertInternalSchema },
        errorFactory: Alerts.UpdateAlertError,
      },
      options,
    );
  }
}

export namespace Alerts {
  export type CreateAlertRequest = {
    body: AlertRequest;
  };

  export class CreateAlertError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateAlertError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteAlertRequest = {
    /** Alert ID */
    id: string;
  };

  export class DeleteAlertError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteAlertError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAlertRequest = {
    /** Alert ID */
    id: string;
  };

  export class GetAlertError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAlertError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListAlertSlackChannelsRequest = {
    nameContains?: string;
    /** @default 50 */
    maxResults?: number;
    /** Page token, returned by a previous call, to request the next page of results */
    pageToken?: string;
  };

  export const listAlertSlackChannelsRequestSchema: Schema<ListAlertSlackChannelsRequest> = s.lazySchema(() =>
    s.object<ListAlertSlackChannelsRequest>({
      nameContains: s.optional(s.string()),
      maxResults: s.defaulted(s.int().check(s.gte(1), s.lte(500)), 50),
      pageToken: s.optional(s.string()),
    }),
  );

  export class ListAlertSlackChannelsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAlertSlackChannelsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type ListAlertsRequest = {
    /** A field by which the results will be sorted. */
    sortBy?: SortBy;
    /**
     * Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for
     * descending (highest to lowest).
     */
    sortOrder?: SortOrder;
    /**
     * The maximum number of results to return in a single page. Use the page tokens to iterate
     * through the entire collection.
     *
     * @default 50
     */
    maxResults?: number;
    /** Page token, returned by a previous call, to request the next page of results */
    pageToken?: string;
    /**
     * An expression for filtering the results. The syntax is `key:[<value>]`. Multiple filters can
     * be connected using a pipe |. See [Filters](https://developer.doit.com/docs/filters).
     * Available filter keys: **owner**, **name**
     */
    filter?: string;
    /**
     * Case-insensitive substring match against the resource name. Combined with the "filter"
     * parameter using AND semantics.
     */
    nameContains?: string;
  };

  export class ListAlertsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAlertsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateAlertRequest = {
    /** Alert ID */
    id: string;
    body: AlertUpdateRequest;
  };

  export class UpdateAlertError extends ApiError {
    declare readonly payload:
      | Declared<"error409", undefined>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateAlertError> = [
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
