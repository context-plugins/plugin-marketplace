import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiV1CallsResponseSchema, type ApiV1CallsResponse } from "../models/api-v1-calls-response.js";
import { apiV1CallsResponse1Schema, type ApiV1CallsResponse1 } from "../models/api-v1-calls-response1.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { errorSchema, type Error } from "../models/error.js";
import { statusSchema, type Status } from "../models/status.js";
import type { Servers } from "../servers.js";

/**
 * Read-only records of calls on your numbers — inbound and outbound, with timings, status, end
 * reason, and the SIP-level hangup cause.
 */
export class CallRecords {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve a call record
   *
   * @remarks
   * One record by call id — the same uuid CallNode hands you everywhere else for that call: the
   * `X-CallNode-Call-Id` header on a BYOC delivery INVITE, and the `callId` in webhook and
   * audio-stream query strings. Returns 404 for a call that does not exist **or is not yours**.
   *
   * @returns The call record.
   *
   * @throws {@link CallRecords.GetCallRecordError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCallRecord(
    request: CallRecords.GetCallRecordRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1CallsResponse1, CallRecords.GetCallRecordError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/calls/{callId}"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [{ name: "callId", value: request.callId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1CallsResponse1Schema },
        errorFactory: CallRecords.GetCallRecordError,
      },
      options,
    );
  }

  /**
   * List call records
   *
   * @remarks
   * Records of calls on your numbers, newest first — the same rows the dashboard's call history
   * shows. Covers inbound calls (webhook-answered, BYOC `voice.sipUri` deliveries, SIP-trunk
   * ingress) and outbound calls logged against your numbers.
   *
   * `endReason` and `sipCause` say **why a call ended**: `endReason` is CallNode's own vocabulary
   * (for example `idle_timeout` or `insufficient_balance`; null means an ordinary hangup), and
   * `sipCause` is the SIP-level hangup cause of the caller leg (for example `NORMAL_CLEARING` or
   * `RECOVERY_ON_TIMER_EXPIRE`). Records from before 2026-09-22 predate these fields and return
   * null for both.
   *
   * @returns Call records, newest first.
   *
   * @throws {@link CallRecords.ListCallRecordsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCallRecords(
    request: CallRecords.ListCallRecordsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1CallsResponse, CallRecords.ListCallRecordsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/calls"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [],
        query: [
          { name: "number", value: request.number, schema: s.optional(s.string()) },
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => statusSchema)) },
          { name: "since", value: request.since, schema: s.optional(s.dateTime()) },
          { name: "until", value: request.until, schema: s.optional(s.dateTime()) },
          { name: "before", value: request.before, schema: s.optional(s.dateTime()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1CallsResponseSchema },
        errorFactory: CallRecords.ListCallRecordsError,
      },
      options,
    );
  }
}

export namespace CallRecords {
  export type GetCallRecordRequest = {
    callId: string;
  };

  export class GetCallRecordError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetCallRecordError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListCallRecordsRequest = {
    /** Limit to one of your numbers — E.164 or the number's id. */
    number?: string;
    direction?: Direction;
    status?: Status;
    /** Only calls starting at or after this instant. */
    since?: Date;
    /** Only calls starting at or before this instant. */
    until?: Date;
    /** Keyset cursor — pass the previous page's `nextBefore`. */
    before?: Date;
    /** @default 50 */
    limit?: number;
  };

  export const listCallRecordsRequestSchema: Schema<ListCallRecordsRequest> = s.lazySchema(() =>
    s.object<ListCallRecordsRequest>({
      number: s.optional(s.string()),
      direction: s.optional(s.lazy(() => directionSchema)),
      status: s.optional(s.lazy(() => statusSchema)),
      since: s.optional(s.dateTime()),
      until: s.optional(s.dateTime()),
      before: s.optional(s.dateTime()),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(200)), 50),
    }),
  );

  export class ListCallRecordsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<ListCallRecordsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
