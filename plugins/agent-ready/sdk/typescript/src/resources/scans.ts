import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiX402ScanRequestInternalSchema,
  type ApiX402ScanRequest,
} from "../models/api-x402-scan-request.js";
import { errorSchema, type Error } from "../models/error.js";
import { paidScanResponseInternalSchema, type PaidScanResponse } from "../models/paid-scan-response.js";
import { scanListResponseInternalSchema, type ScanListResponse } from "../models/scan-list-response.js";
import { scanInternalSchema, type Scan } from "../models/scan.js";
import {
  startScanRequestInternalSchema,
  startScanRequestSchema,
  type StartScanRequest,
} from "../models/start-scan-request.js";
import { startScanResponseInternalSchema, type StartScanResponse } from "../models/start-scan-response.js";
import type { Servers } from "../servers.js";

export class Scans {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a scan
   *
   * @remarks
   * Returns the full scan including per-check results. Returns 404 if the scan does not exist or is
   * not owned by the API key's user.
   *
   * @returns Scan.
   *
   * @throws {@link Scans.GetScanError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AgentReadyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getScan(request: Scans.GetScanRequest, options?: RequestOptions): ApiPromise<Scan, Scans.GetScanError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/scans/{id}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: scanInternalSchema },
        errorFactory: Scans.GetScanError,
      },
      options,
    );
  }

  /**
   * List recent scans
   *
   * @remarks
   * Returns scans owned by the API key's user, newest first. Cursor-paginate by passing the
   * `nextCursor` value from a previous response as the `cursor` query parameter on the next
   * request; `nextCursor` is only returned when the page filled exactly to `limit`.
   *
   * @returns Scan list.
   *
   * @throws {@link Scans.ListScansError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AgentReadyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listScans(
    request: Scans.ListScansRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ScanListResponse, Scans.ListScansError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/scans"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.dateTime()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: scanListResponseInternalSchema },
        errorFactory: Scans.ListScansError,
      },
      options,
    );
  }

  /**
   * Start a scan
   *
   * @remarks
   * Queues an asynchronous scan and returns a 202 with the scan id. Poll GET /api/v1/scans/{id}
   * until status is 'completed' or 'failed'.
   *
   * Supply an optional `Idempotency-Key` header to make retries safe: the first request runs the
   * scan and any retry carrying the same key replays the original 202 (with `Idempotency-Replayed:
   * true`) instead of starting a duplicate. Reusing a key with a different request body returns
   * 422; a retry that arrives while the first is still in flight returns 409. Keys are retained for
   * 24 hours.
   *
   * @returns Scan queued. The `Location` response header carries the polling URL (per RFC 7231
   * §6.3.3); the same URL is also returned as `pollUrl` in the body.
   *
   * @throws {@link Scans.StartScanError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AgentReadyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startScan(
    request: Scans.StartScanRequestParams,
    options?: RequestOptions,
  ): ApiPromise<StartScanResponse, Scans.StartScanError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/scans"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "json", value: request.body, schema: startScanRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: startScanResponseInternalSchema },
        errorFactory: Scans.StartScanError,
      },
      options,
    );
  }

  /**
   * Run a scan, paid via x402
   *
   * @remarks
   * Runs an agent-readability scan paid via x402 v2 (no account or subscription). Without a valid
   * `X-PAYMENT` header this returns a v2 402 challenge; sign the EIP-3009 USDC authorization for
   * one of the advertised tiers and resend the v2 payment payload in the `X-PAYMENT` header to run
   * the scan. Settlement is on Base mainnet (CAIP-2 eip155:8453; the facilitator pays gas); the
   * response carries an `X-PAYMENT-RESPONSE` header. Tiers: $0.02 (25 pages), $0.25 (250 pages).
   *
   * @returns Payment verified and the scan completed. The `X-PAYMENT-RESPONSE` header carries the
   * settlement.
   *
   * @throws {@link Scans.X402ScanError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AgentReadyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  x402Scan(
    request: Scans.X402ScanRequest,
    options?: RequestOptions,
  ): ApiPromise<PaidScanResponse, Scans.X402ScanError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/x402/scan"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-PAYMENT", value: request.xPayment, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: apiX402ScanRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: paidScanResponseInternalSchema },
        errorFactory: Scans.X402ScanError,
      },
      options,
    );
  }

  /**
   * x402 payment challenge for a paid scan
   *
   * @remarks
   * Returns an HTTP 402 payment-requirements challenge for the paid scan resource (x402 v2). This
   * is the discovery/probe surface: it always 402s with the v2 PaymentRequired delivered in the
   * base64 `PAYMENT-REQUIRED` response header (and mirrored in the JSON body) — x402Version 2 +
   * resource + accepts[] + Bazaar discovery extensions. To run a scan, POST to this path with a
   * signed PAYMENT-SIGNATURE (x402 v2) or X-PAYMENT (v1) header.
   *
   * @throws {@link Scans.X402ScanChallengeError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AgentReadyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  x402ScanChallenge(options?: RequestOptions): ApiPromise<undefined, Scans.X402ScanChallengeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/x402/scan"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Scans.X402ScanChallengeError,
      },
      options,
    );
  }
}

export namespace Scans {
  export type GetScanRequest = {
    /** Scan id. */
    id: string;
  };

  export class GetScanError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetScanError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListScansRequest = {
    limit?: number;
    /**
     * Opaque pagination cursor (ISO 8601 datetime returned as `nextCursor` by a previous response).
     * Returns scans strictly older than the cursor.
     */
    cursor?: Date;
  };

  export const listScansRequestSchema: Schema<ListScansRequest> = s.lazySchema(() =>
    s.object<ListScansRequest>({
      limit: s.optional(s.int().check(s.gte(1), s.lte(100))),
      cursor: s.optional(s.dateTime()),
    }),
  );

  export class ListScansError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListScansError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type StartScanRequestParams = {
    /**
     * Optional client-generated key (1-255 chars, [A-Za-z0-9_-]) that makes this POST safe to
     * retry. The same key replays the original response.
     */
    idempotencyKey?: string;
    body: StartScanRequest;
  };

  export const startScanRequestParamsSchema: Schema<StartScanRequestParams> = s.lazySchema(() =>
    s.object<StartScanRequestParams>({
      idempotencyKey: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      body: startScanRequestSchema,
    }),
  );

  export class StartScanError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Declared<"error8", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartScanError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error7", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error8", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type X402ScanRequest = {
    /** Base64-encoded signed x402 payment authorization. Omit it to receive the 402 challenge. */
    xPayment?: string;
    body: ApiX402ScanRequest;
  };

  export class X402ScanError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<X402ScanError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 502, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class X402ScanChallengeError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<X402ScanChallengeError> = [
      { on: 402, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
