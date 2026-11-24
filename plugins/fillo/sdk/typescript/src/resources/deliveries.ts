import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1ManageFormsDeliveriesRedeliverRequestInternalSchema,
  type ApiV1ManageFormsDeliveriesRedeliverRequest,
} from "../models/api-v1-manage-forms-deliveries-redeliver-request.js";
import {
  apiV1ManageFormsDeliveriesRedeliverResponseSchema,
  type ApiV1ManageFormsDeliveriesRedeliverResponse,
} from "../models/api-v1-manage-forms-deliveries-redeliver-response.js";
import {
  apiV1ManageFormsDeliveriesRetryRequestInternalSchema,
  type ApiV1ManageFormsDeliveriesRetryRequest,
} from "../models/api-v1-manage-forms-deliveries-retry-request.js";
import {
  apiV1ManageFormsDeliveriesRetryResponseSchema,
  type ApiV1ManageFormsDeliveriesRetryResponse,
} from "../models/api-v1-manage-forms-deliveries-retry-response.js";
import { deliveryHealthSchema, type DeliveryHealth } from "../models/delivery-health.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

export class Deliveries {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get delivery health and recent activity
   *
   * @remarks
   * Per-destination delivery health plus the bounded recent-delivery list — exactly what the form's
   * Activity page shows. Counts cover the telemetry retention window, not all time. Destinations
   * are NAMED rather than spelled out: a webhook's target URL is the credential that authorizes
   * posting to it, so a connector-owned hook is labelled by its connector (“Zapier”, “n8n”) and any
   * other webhook by its host plus a short fingerprint of its path. The dashboard's Activity page
   * is where a signed-in member reads the full URL. Scope: responses:manage.
   *
   * @returns Destination health and recent deliveries.
   *
   * @throws {@link Deliveries.GetFormDeliveriesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFormDeliveries(
    request: Deliveries.GetFormDeliveriesRequest,
    options?: RequestOptions,
  ): ApiPromise<DeliveryHealth, Deliveries.GetFormDeliveriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/manage/forms/{form}/deliveries"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "form", value: request.form, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deliveryHealthSchema },
        errorFactory: Deliveries.GetFormDeliveriesError,
      },
      options,
    );
  }

  /**
   * Re-send responses to every destination
   *
   * @remarks
   * Send responses to every current destination again as a new delivery. This is not a repair:
   * receivers that are not idempotent will see duplicates, which makes it outward-facing (Tier B).
   * Held responses are never redelivered. Scope: responses:manage.
   *
   * @returns How many responses were sent again.
   *
   * @throws {@link Deliveries.RedeliverFormResponsesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  redeliverFormResponses(
    request: Deliveries.RedeliverFormResponsesRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageFormsDeliveriesRedeliverResponse, Deliveries.RedeliverFormResponsesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/manage/forms/{form}/deliveries/redeliver"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "form", value: request.form, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: apiV1ManageFormsDeliveriesRedeliverRequestInternalSchema,
        },
      },
      {
        success: { kind: "json", schema: apiV1ManageFormsDeliveriesRedeliverResponseSchema },
        errorFactory: Deliveries.RedeliverFormResponsesError,
      },
      options,
    );
  }

  /**
   * Retry failed deliveries
   *
   * @remarks
   * Repair deliveries that failed or are overdue. Send exactly one target: `responseIds` (repair
   * those responses' newest occurrence), `destinationKey` (one destination's backlog),
   * `deliveryKind` + `deliveryId` (one row), or `all: true` (the form's whole failed backlog). A
   * retry re-sends work that was already meant to go out, so it is routine (Tier A). Scope:
   * responses:manage.
   *
   * @returns How many deliveries were queued again.
   *
   * @throws {@link Deliveries.RetryFormDeliveriesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retryFormDeliveries(
    request: Deliveries.RetryFormDeliveriesRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageFormsDeliveriesRetryResponse, Deliveries.RetryFormDeliveriesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/manage/forms/{form}/deliveries/retry"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "form", value: request.form, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: apiV1ManageFormsDeliveriesRetryRequestInternalSchema,
        },
      },
      {
        success: { kind: "json", schema: apiV1ManageFormsDeliveriesRetryResponseSchema },
        errorFactory: Deliveries.RetryFormDeliveriesError,
      },
      options,
    );
  }
}

export namespace Deliveries {
  export type GetFormDeliveriesRequest = {
    /** A form id or slug. */
    form: string;
  };

  export class GetFormDeliveriesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFormDeliveriesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RedeliverFormResponsesRequest = {
    /** A form id or slug. */
    form: string;
    body: ApiV1ManageFormsDeliveriesRedeliverRequest;
  };

  export class RedeliverFormResponsesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<RedeliverFormResponsesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RetryFormDeliveriesRequest = {
    /** A form id or slug. */
    form: string;
    body: ApiV1ManageFormsDeliveriesRetryRequest;
  };

  export class RetryFormDeliveriesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<RetryFormDeliveriesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
