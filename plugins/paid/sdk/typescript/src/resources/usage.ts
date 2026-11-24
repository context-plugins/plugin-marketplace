import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  usageCheckUsageRequestSchema,
  type UsageCheckUsageRequest,
} from "../models/usage-check-usage-request.js";
import {
  usageCheckUsageResponse200Schema,
  type UsageCheckUsageResponse200,
} from "../models/usage-check-usage-response200.js";
import {
  usageSignalsBulkRequestSchema,
  type UsageSignalsBulkRequest,
} from "../models/usage-signals-bulk-request.js";
import {
  usageV2SignalsBulkRequestSchema,
  type UsageV2SignalsBulkRequest,
} from "../models/usage-v2-signals-bulk-request.js";
import type { Servers } from "../servers.js";

export class Usage {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Check if usage is allowed for a customer and product
   *
   * @returns Usage check response
   *
   * @throws {@link Usage.CheckUsageError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkUsage(
    request: Usage.CheckUsageRequest,
    options?: RequestOptions,
  ): ApiPromise<UsageCheckUsageResponse200, Usage.CheckUsageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/usage/check-usage"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usageCheckUsageRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: usageCheckUsageResponse200Schema },
        errorFactory: Usage.CheckUsageError,
      },
      options,
    );
  }

  /**
   * Record usage signals in bulk
   *
   * @remarks
   * DEPRECATED: Use POST /usage/v2/signals/bulk instead for cleaner field names.
   *
   * @returns Success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  recordBulk(
    request: Usage.RecordBulkRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/usage/signals/bulk"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usageSignalsBulkRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Record usage signals in bulk (V2 - Clean field names)
   *
   * @returns Success response
   *
   * @throws {@link Usage.UsageRecordBulkV2Error} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usageRecordBulkV2(
    request: Usage.UsageRecordBulkV2Request,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Usage.UsageRecordBulkV2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/usage/v2/signals/bulk"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usageV2SignalsBulkRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Usage.UsageRecordBulkV2Error,
      },
      options,
    );
  }
}

export namespace Usage {
  export type CheckUsageRequest = {
    /** Bearer authentication */
    authorization: string;
    body?: UsageCheckUsageRequest;
  };

  export class CheckUsageError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CheckUsageError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RecordBulkRequest = {
    /** Bearer authentication */
    authorization: string;
    body?: UsageSignalsBulkRequest;
  };

  export type UsageRecordBulkV2Request = {
    /** Bearer authentication */
    authorization: string;
    body?: UsageV2SignalsBulkRequest;
  };

  export class UsageRecordBulkV2Error extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<UsageRecordBulkV2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
