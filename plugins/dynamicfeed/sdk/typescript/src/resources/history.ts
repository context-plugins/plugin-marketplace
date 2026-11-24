import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import type { Servers } from "../servers.js";

export class History {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * History
   *
   * @remarks
   * Archive coverage — what Dynamic Feed's permanent, append-only archive holds.
   *
   * • No `tool` → the set of tools captured + a count. • `tool=` → that tool's captured date
   * partitions, earliest/latest, and day count.
   *
   * This is the availability index over the un-backfillable history (the permanence moat): it tells
   * an agent which days are on record for a tool. Row-level point-in-time values ("what was the
   * value at time T") are a premium query that layers on the same Hive-partitioned archive.
   *
   * @returns Successful Response
   *
   * @throws {@link History.HistoryV1HistoryGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  historyV1HistoryGet(
    request: History.HistoryV1HistoryGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, History.HistoryV1HistoryGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/history"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "tool", value: request.tool, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: History.HistoryV1HistoryGetError,
      },
      options,
    );
  }
}

export namespace History {
  export type HistoryV1HistoryGetRequest = {
    tool?: string;
  };

  export class HistoryV1HistoryGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<HistoryV1HistoryGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
