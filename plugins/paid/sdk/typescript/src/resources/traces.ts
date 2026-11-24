import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { tracesResponseSchema, type TracesResponse } from "../models/traces-response.js";
import type { Servers } from "../servers.js";

export class Traces {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Fetch cost traces for an organization
   *
   * @returns Success response
   *
   * @throws {@link Traces.GetTracesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTraces(
    request: Traces.GetTracesRequest,
    options?: RequestOptions,
  ): ApiPromise<TracesResponse, Traces.GetTracesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/traces"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 100) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.dateTime()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.dateTime()) },
          { name: "externalCustomerId", value: request.externalCustomerId, schema: s.optional(s.string()) },
          { name: "externalProductId", value: request.externalProductId, schema: s.optional(s.string()) },
          { name: "externalAgentId", value: request.externalAgentId, schema: s.optional(s.string()) },
          { name: "metadata", value: request.metadata, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tracesResponseSchema },
        errorFactory: Traces.GetTracesError,
      },
      options,
    );
  }
}

export namespace Traces {
  export type GetTracesRequest = {
    /** Maximum number of traces to return (1-1000) @default 100 */
    limit?: number;
    /** Number of traces to skip for pagination @default 0 */
    offset?: number;
    /** Filter traces starting from this time (ISO 8601 format) */
    startTime?: Date;
    /** Filter traces up to this time (ISO 8601 format) */
    endTime?: Date;
    /** Filter traces by external customer ID */
    externalCustomerId?: string;
    /** Filter traces by external product ID */
    externalProductId?: string;
    /** DEPRECATED: Use externalProductId instead. Filter traces by external agent ID */
    externalAgentId?: string;
    /**
     * Filter traces by metadata fields. Must be a valid JSON object (e.g.,
     * {"key1":"value1","key2":"value2"}). All specified fields must match (AND logic).
     */
    metadata?: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class GetTracesError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetTracesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
