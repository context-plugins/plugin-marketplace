import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1Click2CallRequestSchema,
  type ApiV1Click2CallRequest,
} from "../models/api-v1-click2-call-request.js";
import {
  apiV1Click2CallResponseSchema,
  type ApiV1Click2CallResponse,
} from "../models/api-v1-click2-call-response.js";
import {
  apiV1Click2CallResponse1Schema,
  type ApiV1Click2CallResponse1,
} from "../models/api-v1-click2-call-response1.js";
import {
  apiV1Click2Call401Error1Schema,
  type ApiV1Click2Call401Error1,
} from "../models/api-v1-click2-call401-error1.js";
import {
  apiV1Click2Call402Error1Schema,
  type ApiV1Click2Call402Error1,
} from "../models/api-v1-click2-call402-error1.js";
import {
  apiV1Click2Call403Error1Schema,
  type ApiV1Click2Call403Error1,
} from "../models/api-v1-click2-call403-error1.js";
import {
  apiV1Click2Call404Error1Schema,
  type ApiV1Click2Call404Error1,
} from "../models/api-v1-click2-call404-error1.js";
import {
  apiV1Click2Call409Error1Schema,
  type ApiV1Click2Call409Error1,
} from "../models/api-v1-click2-call409-error1.js";
import {
  apiV1Click2Call422Error1Schema,
  type ApiV1Click2Call422Error1,
} from "../models/api-v1-click2-call422-error1.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

export class Click2Call {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Place a Click2Call call
   *
   * @remarks
   * Places one call: the platform connects the agent leg first and, once it answers, dials the
   * destination number (the customer leg) and bridges the two. The agent leg is one of your SIP
   * accounts by default, or your own WebSocket endpoint with `a_type: stream`. The response is the
   * call resource in its initial `accepted` state. Poll `GET /api/v1/click2call/{id}` for progress.
   * > **`a_type: stream` requires an endpoint that speaks our protocol.** The > message shapes, the
   * audio format and what answers the call are described in > WebSocket Calls. ### States
   *
   * `accepted` → `agent_ringing` → `agent_answered` → `customer_ringing` → `bridged` → `completed`,
   * with `failed` reachable from any of them. > **`agent_ringing` is best-effort.** It is derived
   * from a ringing > indication on the agent leg, which some user agents never send, so it may > be
   * skipped entirely — a call can go straight from `accepted` to > `agent_answered`. Do not require
   * `agent_ringing` in client logic. ### Webhooks
   *
   * Pass `callback_url` and we POST a JSON body to it on every transition of the call. It must be
   * an `https` URL on a public host, at most 255 characters; anything else is refused with `422`
   * and no call is placed. Delivery is per call — there is no per-account setting, and calls placed
   * without the field get no webhooks. | Event | Fires when |
   * |-------|-----------|
   * | `click2call.agent_ringing` | the agent leg starts ringing |
   * | `click2call.agent_answered` | the agent leg answers |
   * | `click2call.customer_ringing` | the destination is dialled |
   * | `click2call.bridged` | the two legs are bridged |
   * | `click2call.completed` | the call ends normally |
   * | `click2call.failed` | the call ends any other way |
   * | `click2call.finalized` | the billed record is committed |
   *
   * The body is `{"event": …, "occurred_at": …, "event_seq": …, "data": {…}}`, where `data` is the
   * same call resource this endpoint returns. New fields may appear in `data` and new names in the
   * `click2call.*` namespace at any time: ignore what you do not recognise. >
   * **`click2call.completed` and `.failed` fire immediately, with `cost` still > `null`.**
   * `click2call.finalized` follows once billing has settled and > carries the priced document. The
   * two can arrive out of order — `.finalized` > does not mean nothing more is coming. Order is
   * recoverable only from > `event_seq`, which increases within a call. Requests are **not
   * signed**. Treat the call id as unguessable, not as proof of origin, and confirm anything that
   * matters with `GET /api/v1/click2call/{id}`. **Delivery.** Answer `2xx` within 15 seconds. A
   * `408`, `429`, `5xx` or a transport failure is retried up to five times with exponential backoff
   * from 30 seconds, honouring `Retry-After`; any other `4xx` is treated as permanent and never
   * retried. Delivery is at-least-once, so the same `event_seq` can arrive twice. ### Recordings
   *
   * `recording_url` is `null` until the call is settled, and stays `null` for a call that was not
   * recorded. It rides in the same `data` of every `click2call.*` webhook, so
   * `click2call.finalized` is where it first appears. **Default.** `recording_url` is a signed S3
   * link valid for 1 hour. Each read of the call (click2call_show) mints a fresh one. Once it has
   * expired, fetch the file through calls_recording. **Permanent links.** Enabled on request
   * through your account manager or support. `recording_url` becomes
   * `/api/v1/recordings/{user_id}/{token}`, which needs no authentication and answers `302` to a
   * signed URL valid for 5 minutes, `404` when the recording is no longer retained or the option is
   * turned off, and `429` with `Retry-After` past the per-minute download limit. Details:
   * recordings_show. ### Caller ID
   *
   * While the agent's phone rings it shows the destination number as the caller. Pass `a_cli` to
   * show a number of your choice instead — for example when your agents must not see where the call
   * is going.
   *
   * @returns The call was placed. Poll the read operation for progress.
   *
   * @throws {@link Click2Call.Click2CallCreateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  click2CallCreate(
    request: Click2Call.Click2CallCreateRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1Click2CallResponse, Click2Call.Click2CallCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/click2call"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1Click2CallRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1Click2CallResponseSchema },
        errorFactory: Click2Call.Click2CallCreateError,
      },
      options,
    );
  }

  /**
   * Cancel a Click2Call call
   *
   * @remarks
   * Hangs the call up, whatever leg it has reached — before anyone answered, or mid-conversation.
   * The response is `204 No Content` with an empty body.
   *
   * ### Repeating the cancel is safe
   *
   * A repeated `DELETE` also answers `204`. The request is recorded once and every repeat gets the
   * same answer, so a client that retries on a timeout cannot get a spurious failure. Do **not**
   * read a second `204` as "there was still a call to hang up".
   *
   * ### What the cancel shows up as
   *
   * A cancel that actually ended the call reads back with `reason` `canceled`. Its `state` is
   * `completed` if the two legs had already been bridged, and `failed` if the call was hung up
   * before it came together.
   *
   * If the call had **already** ended on its own before your `DELETE` arrived, its original
   * `reason` is kept — a call nobody answered still reads `no_answer`. Cleaning up with a defensive
   * `DELETE` therefore cannot hide why a call ended.
   *
   * ### `404`
   *
   * `404 call_not_found` means the call is unknown to you: it never existed, the ID is malformed,
   * it belongs to another account, or it is older than the 12-hour retention window — which runs
   * from when the call was **placed**, not from when it ended. The cases are deliberately
   * indistinguishable.
   *
   * See also: click2call_show, which reads the call back after the cancel.
   *
   * @returns The call was hung up. The body is empty, and repeating the request answers 204 again.
   *
   * @throws {@link Click2Call.Click2CallDestroyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  click2CallDestroy(
    request: Click2Call.Click2CallDestroyRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Click2Call.Click2CallDestroyError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/click2call/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Click2Call.Click2CallDestroyError,
      },
      options,
    );
  }

  /**
   * Read a Click2Call call
   *
   * @remarks
   * Returns the current state of one call. This is the polling endpoint: call it until `state` is
   * `completed` or `failed`.
   *
   * ### States
   *
   * | State | Meaning |
   * |---|---|
   * | `accepted` | The call was placed; no leg has moved yet |
   * | `agent_ringing` | Your SIP account is ringing — **best-effort, may be skipped** |
   * | `agent_answered` | Your SIP account answered |
   * | `customer_ringing` | The destination is being dialled |
   * | `bridged` | Both legs are up and talking |
   * | `completed` | The call ended normally |
   * | `failed` | The call did not come together |
   *
   * `agent_ringing` is derived from a ringing indication on the agent leg, which some user agents
   * never send. A call may therefore go straight from `accepted` to `agent_answered`; clients must
   * not require `agent_ringing`.
   *
   * ### `reason`
   *
   * `reason` answers *why the call ended*, on its own axis from `state`. It is `null` while the
   * call is live **and** on a normal end. Otherwise it is one of `no_answer`, `busy`,
   * `unreachable`, `canceled`, `timed_out` or `platform_error`. A call your own `DELETE` ended
   * reports `canceled` — including when it had already been answered, in which case `state` is
   * `completed`. A `DELETE` that arrives after the call has already ended leaves the original
   * reason in place.
   *
   * ### Retention
   *
   * A call is readable for **12 hours from the moment it was placed** — not from the moment it
   * ended. After that the record is gone and this endpoint answers `404`. Call history is a
   * separate product surface.
   *
   * ### Recordings
   *
   * `recording_url` is `null` until the call is settled, and stays `null` for a call that was not
   * recorded.
   *
   * **Default.** `recording_url` is a signed S3 link valid for 1 hour, minted fresh on each read.
   * Once it has expired, fetch the file through calls_recording.
   *
   * **Permanent links.** Enabled on request through your account manager or support.
   * `recording_url` becomes `/api/v1/recordings/{user_id}/{token}`, which needs no authentication
   * and answers `302` to a signed URL valid for 5 minutes. It answers `404` when the recording is
   * no longer retained or the option is turned off, and `429` with `Retry-After` past the
   * per-minute download limit. Details: recordings_show.
   *
   * This link is the `recording_url` returned by click2call_create, click2call_show and their
   * `click2call.*` webhooks, and sent in the call-recording webhook. Without permanent links
   * enabled, `recording_url` holds a temporary pre-signed URL; to fetch a recording after it
   * expires, use calls_recording.
   *
   * ### `404`
   *
   * `404 call_not_found` means the call is unknown to you: it never existed, the ID is malformed,
   * it belongs to another account, or it has fallen out of the 12-hour window. The cases are
   * deliberately indistinguishable.
   *
   * `data.recording_url` feeds recordings_show. See also: click2call_destroy.
   *
   * @returns The current state of the call.
   *
   * @throws {@link Click2Call.Click2CallShowError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  click2CallShow(
    request: Click2Call.Click2CallShowRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1Click2CallResponse1, Click2Call.Click2CallShowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/click2call/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1Click2CallResponse1Schema },
        errorFactory: Click2Call.Click2CallShowError,
      },
      options,
    );
  }

  /**
   * Download a recording from a permanent link
   *
   * @remarks
   * Downloads a call recording from the permanent link carried in `recording_url` when the account
   * has permanent recording links enabled. The link needs no authentication.
   *
   * - `302` redirects to a signed download of the recording, valid for 5 minutes.
   * - `404` when the link is invalid, the recording is no longer retained, or permanent recording
   *   links are turned off for the account.
   * - `429` with a `Retry-After` header when the account exceeds its per-minute download limit.
   *
   * This link is the `recording_url` returned by click2call_create, click2call_show and their
   * `click2call.*` webhooks, and sent in the call-recording webhook.
   *
   * Without permanent links enabled, `recording_url` holds a temporary pre-signed URL instead; to
   * fetch a recording after it expires, use calls_recording.
   *
   * @throws {@link Click2Call.RecordingsShowError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  recordingsShow(
    request: Click2Call.RecordingsShowRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Click2Call.RecordingsShowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/recordings/{user_id}/{token}"),
        auth: noneAuth,
        pathParams: [
          { name: "user_id", value: request.userId, schema: s.int() },
          { name: "token", value: request.token, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Click2Call.RecordingsShowError,
      },
      options,
    );
  }
}

export namespace Click2Call {
  export type Click2CallCreateRequest = {
    body?: ApiV1Click2CallRequest;
  };

  export class Click2CallCreateError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Click2Call401Error1", ApiV1Click2Call401Error1>
      | Declared<"apiV1Click2Call402Error1", ApiV1Click2Call402Error1>
      | Declared<"apiV1Click2Call403Error1", ApiV1Click2Call403Error1>
      | Declared<"apiV1Click2Call409Error1", ApiV1Click2Call409Error1>
      | Declared<"apiV1Click2Call422Error1", ApiV1Click2Call422Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<Click2CallCreateError> = [
      {
        on: 401,
        kind: "apiV1Click2Call401Error1",
        decode: { kind: "json", schema: apiV1Click2Call401Error1Schema },
      },
      {
        on: 402,
        kind: "apiV1Click2Call402Error1",
        decode: { kind: "json", schema: apiV1Click2Call402Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1Click2Call403Error1",
        decode: { kind: "json", schema: apiV1Click2Call403Error1Schema },
      },
      {
        on: 409,
        kind: "apiV1Click2Call409Error1",
        decode: { kind: "json", schema: apiV1Click2Call409Error1Schema },
      },
      {
        on: 422,
        kind: "apiV1Click2Call422Error1",
        decode: { kind: "json", schema: apiV1Click2Call422Error1Schema },
      },
    ];
  }

  export type Click2CallDestroyRequest = {
    /** Call ID (`data.id`) from click2call_create, a 26-character ULID */
    id: string;
  };

  export class Click2CallDestroyError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Click2Call401Error1", ApiV1Click2Call401Error1>
      | Declared<"apiV1Click2Call403Error1", ApiV1Click2Call403Error1>
      | Declared<"apiV1Click2Call404Error1", ApiV1Click2Call404Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<Click2CallDestroyError> = [
      {
        on: 401,
        kind: "apiV1Click2Call401Error1",
        decode: { kind: "json", schema: apiV1Click2Call401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1Click2Call403Error1",
        decode: { kind: "json", schema: apiV1Click2Call403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1Click2Call404Error1",
        decode: { kind: "json", schema: apiV1Click2Call404Error1Schema },
      },
    ];
  }

  export type Click2CallShowRequest = {
    /** Call ID (`data.id`) from click2call_create, a 26-character ULID */
    id: string;
  };

  export class Click2CallShowError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Click2Call401Error1", ApiV1Click2Call401Error1>
      | Declared<"apiV1Click2Call403Error1", ApiV1Click2Call403Error1>
      | Declared<"apiV1Click2Call404Error1", ApiV1Click2Call404Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<Click2CallShowError> = [
      {
        on: 401,
        kind: "apiV1Click2Call401Error1",
        decode: { kind: "json", schema: apiV1Click2Call401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1Click2Call403Error1",
        decode: { kind: "json", schema: apiV1Click2Call403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1Click2Call404Error1",
        decode: { kind: "json", schema: apiV1Click2Call404Error1Schema },
      },
    ];
  }

  export type RecordingsShowRequest = {
    /** User ID in the permanent `recording_url` from click2call_create, click2call_show */
    userId: number;
    /**
     * Encrypted recording token in the permanent `recording_url` from click2call_create,
     * click2call_show
     */
    token: string;
  };

  export class RecordingsShowError extends ApiError {
    declare readonly payload:
      | Declared<"error302", string>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<RecordingsShowError> = [
      { on: 302, kind: "error302", decode: { kind: "text", schema: s.string() } },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
