import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  batchSendStatusRequestInternalSchema,
  type BatchSendStatusRequest,
} from "../models/batch-send-status-request.js";
import {
  batchSendStatusResponseSchema,
  type BatchSendStatusResponse,
} from "../models/batch-send-status-response.js";
import { internalServerErrorSchema, type InternalServerError } from "../models/internal-server-error.js";
import {
  startCampaignRequestInternalSchema,
  type StartCampaignRequest,
} from "../models/start-campaign-request.js";
import { triggerErrorResponseSchema, type TriggerErrorResponse } from "../models/trigger-error-response.js";
import {
  campaignsTriggerResponseSchema,
  type CampaignsTriggerResponse,
} from "../models/unions/campaigns-trigger-response.js";
import { validateErrorJsonSchema, type ValidateErrorJson } from "../models/validate-error-json.js";
import type { Servers } from "../servers.js";

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
   * Get send delivery statuses
   *
   * @remarks
   * Get the delivery status of up to 100 sends in a single request, using the `sendId` values
   * returned from the start endpoint. Prefer this over polling the single-send endpoint once per
   * `sendId`.
   *
   * @returns Ok
   *
   * @throws {@link Campaigns.GetSendStatusesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSendStatuses(
    request: Campaigns.GetSendStatusesRequest,
    options?: RequestOptions,
  ): ApiPromise<BatchSendStatusResponse, Campaigns.GetSendStatusesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/campaigns/{campaignId}/sends/batch-get"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "campaignId", value: request.campaignId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: batchSendStatusRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: batchSendStatusResponseSchema },
        errorFactory: Campaigns.GetSendStatusesError,
      },
      options,
    );
  }

  /**
   * Trigger an API campaign send
   *
   * @remarks
   * Start an API-triggered campaign: send to the given recipients.
   *
   * @returns Ok
   *
   * @throws {@link Campaigns.TriggerCampaignError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  triggerCampaign(
    request: Campaigns.TriggerCampaignRequest,
    options?: RequestOptions,
  ): ApiPromise<CampaignsTriggerResponse, Campaigns.TriggerCampaignError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/campaigns/{campaignId}/trigger"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "campaignId", value: request.campaignId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: startCampaignRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: campaignsTriggerResponseSchema },
        errorFactory: Campaigns.TriggerCampaignError,
      },
      options,
    );
  }
}

export namespace Campaigns {
  export type GetSendStatusesRequest = {
    campaignId: string;
    body: BatchSendStatusRequest;
  };

  export class GetSendStatusesError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Declared<"internalServerError", InternalServerError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSendStatusesError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
      { on: 500, kind: "internalServerError", decode: { kind: "json", schema: internalServerErrorSchema } },
    ];
  }

  export type TriggerCampaignRequest = {
    campaignId: string;
    body: StartCampaignRequest;
  };

  export class TriggerCampaignError extends ApiError {
    declare readonly payload:
      | Declared<"triggerErrorResponse", TriggerErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"triggerErrorResponse2", TriggerErrorResponse>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Declared<"triggerErrorResponse3", TriggerErrorResponse>
      | Declared<"internalServerError", InternalServerError>
      | Undeclared;

    static readonly errors: ErrorDecoders<TriggerCampaignError> = [
      { on: 400, kind: "triggerErrorResponse", decode: { kind: "json", schema: triggerErrorResponseSchema } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      {
        on: 404,
        kind: "triggerErrorResponse2",
        decode: { kind: "json", schema: triggerErrorResponseSchema },
      },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
      {
        on: 429,
        kind: "triggerErrorResponse3",
        decode: { kind: "json", schema: triggerErrorResponseSchema },
      },
      { on: 500, kind: "internalServerError", decode: { kind: "json", schema: internalServerErrorSchema } },
    ];
  }
}
