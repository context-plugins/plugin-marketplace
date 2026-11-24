import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV1CallsTransferRequestSchema,
  type ApiV1CallsTransferRequest,
} from "../models/api-v1-calls-transfer-request.js";
import {
  apiV1CallsTransferResponseSchema,
  type ApiV1CallsTransferResponse,
} from "../models/api-v1-calls-transfer-response.js";
import {
  apiV1OutboundCallsResponseInternalSchema,
  type ApiV1OutboundCallsResponse,
} from "../models/api-v1-outbound-calls-response.js";
import {
  apiV1OutboundCallsResponse1Schema,
  type ApiV1OutboundCallsResponse1,
} from "../models/api-v1-outbound-calls-response1.js";
import { callStatusSchema, type CallStatus } from "../models/call-status.js";
import { callInternalSchema, type Call } from "../models/call.js";
import { errorSchema, type Error } from "../models/error.js";
import { originateRequestInternalSchema, type OriginateRequest } from "../models/originate-request.js";
import { originateResponseSchema, type OriginateResponse } from "../models/originate-response.js";
import type { Servers } from "../servers.js";

/**
 * Originate, retrieve, list, and cancel outbound voice calls.
 */
export class OutboundCalls {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel a call
   *
   * @remarks
   * Hangs up an in-progress call, or cancels one that has not yet connected. Calls already in a
   * terminal state are returned unchanged (also 202) — the operation is safe to retry.
   *
   * @returns Cancellation accepted, or the call was already terminal.
   *
   * @throws {@link OutboundCalls.CancelCallError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelCall(
    request: OutboundCalls.CancelCallRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1OutboundCallsResponse1, OutboundCalls.CancelCallError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/outbound/calls/{callId}"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [{ name: "callId", value: request.callId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1OutboundCallsResponse1Schema },
        errorFactory: OutboundCalls.CancelCallError,
      },
      options,
    );
  }

  /**
   * Retrieve a call
   *
   * @returns The call.
   *
   * @throws {@link OutboundCalls.GetCallError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCall(
    request: OutboundCalls.GetCallRequest,
    options?: RequestOptions,
  ): ApiPromise<Call, OutboundCalls.GetCallError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/outbound/calls/{callId}"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [{ name: "callId", value: request.callId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: callInternalSchema },
        errorFactory: OutboundCalls.GetCallError,
      },
      options,
    );
  }

  /**
   * List calls
   *
   * @remarks
   * Returns your outbound calls, newest first, with cursor pagination.
   *
   * @returns A page of calls.
   *
   * @throws {@link OutboundCalls.ListCallsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCalls(
    request: OutboundCalls.ListCallsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1OutboundCallsResponse, OutboundCalls.ListCallsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/outbound/calls"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [],
        query: [
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => callStatusSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1OutboundCallsResponseInternalSchema },
        errorFactory: OutboundCalls.ListCallsError,
      },
      options,
    );
  }

  /**
   * Originate a call
   *
   * @remarks
   * Places an outbound call. Returns 202 once CallNode accepts the originate command. The call
   * lifecycle is then visible via GET on the same `callId`, or via the optional status webhook.
   *
   * The destination takes one of three mutually exclusive forms:
   *
   * 1. **PSTN** — `to` is E.164; the call is completed over the phone network.
   * 2. **Direct SIP URI** — `to` is `sip:user@host[:port][;transport=udp|tcp]`; the call is
   *    delivered straight to your SIP endpoint.
   * 3. **Saved trunk (BYOC)** — `sipTrunkId` selects a trunk created in the dashboard, and `to` is
   *    an E.164 number (terminated by your carrier) or an extension your host understands.
   *
   * In every form `from` must be a CallNode number you own — it becomes the caller ID presented to
   * the called party or your SIP endpoint. SIP destinations bill at your plan's SIP egress rate and
   * must accept traffic from 198.27.122.194 or 192.95.44.47 (audio G.711 PCMU/PCMA at 8 kHz, DTMF
   * RFC 2833).
   *
   * @returns Originate command accepted.
   *
   * @throws {@link OutboundCalls.OriginateCallError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  originateCall(
    request: OutboundCalls.OriginateCallRequest,
    options?: RequestOptions,
  ): ApiPromise<OriginateResponse, OutboundCalls.OriginateCallError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/outbound/calls"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Idempotency-Key", value: request.xIdempotencyKey, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: originateRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: originateResponseSchema },
        errorFactory: OutboundCalls.OriginateCallError,
      },
      options,
    );
  }

  /**
   * Transfer a live call to another destination
   *
   * @remarks
   * Moves the caller on an in-progress call to another destination, and hangs up whatever they were
   * connected to.
   *
   * Built for calls delivered to your own SIP endpoint via a number's `voice.sipUri`: those bridge
   * straight to you without running the conversational webhook, so returning `transfer: true` from
   * a webhook is not available on them. It also works on calls answered by a CallNode AI agent.
   *
   * Every transfer originates a new leg on your behalf, so it clears the same gates as placing an
   * outbound call: KYC, DNC/suppression, and the destination-class guard. A CallLog and UsageRecord
   * are written for the transferred leg, so it is attributed and billable.
   *
   * A transfer blocked by a gate returns the caller to the agent rather than hanging up, so the
   * agent can take a message.
   *
   * `202` means accepted, not yet connected; the bridge follows immediately.
   *
   * @returns Transfer accepted; the caller is being bridged.
   *
   * @throws {@link OutboundCalls.TransferCallError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferCall(
    request: OutboundCalls.TransferCallRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1CallsTransferResponse, OutboundCalls.TransferCallError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/calls/{callId}/transfer"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [{ name: "callId", value: request.callId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1CallsTransferRequestSchema },
      },
      {
        success: { kind: "json", schema: apiV1CallsTransferResponseSchema },
        errorFactory: OutboundCalls.TransferCallError,
      },
      options,
    );
  }
}

export namespace OutboundCalls {
  export type CancelCallRequest = {
    /** The `callId` returned by originate. */
    callId: string;
  };

  export class CancelCallError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<CancelCallError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCallRequest = {
    /** The `callId` returned by originate. */
    callId: string;
  };

  export class GetCallError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetCallError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListCallsRequest = {
    /** Filter by status. Repeat the parameter to filter on several. */
    status?: CallStatus;
    /** Page size. Defaults to 50, capped at 200. @default 50 */
    limit?: number;
    /** Opaque cursor from a previous response's `nextCursor`. */
    cursor?: string;
  };

  export const listCallsRequestSchema: Schema<ListCallsRequest> = s.lazySchema(() =>
    s.object<ListCallsRequest>({
      status: s.optional(s.lazy(() => callStatusSchema)),
      limit: s.defaulted(s.int().check(s.lte(200)), 50),
      cursor: s.optional(s.string()),
    }),
  );

  export class ListCallsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<ListCallsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type OriginateCallRequest = {
    /** A UUID. Replaying the same key returns the original result rather than acting twice. */
    xIdempotencyKey?: string;
    body: OriginateRequest;
  };

  export class OriginateCallError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<OriginateCallError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type TransferCallRequest = {
    /**
     * The **caller's** channel id — the `callId` CallNode sends you in the webhook/stream query
     * string for that call. On a bridged call this is the A-leg, not the leg your own endpoint
     * sees.
     */
    callId: string;
    body: ApiV1CallsTransferRequest;
  };

  export class TransferCallError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error409", undefined>
      | Declared<"error422", undefined>
      | Declared<"error502", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<TransferCallError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 502, kind: "error502", decode: { kind: "empty" } },
    ];
  }
}
