import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  invalidRequestExceptionSchema,
  type InvalidRequestException,
} from "../models/invalid-request-exception.js";
import {
  putTraceSegmentsResultSchema,
  type PutTraceSegmentsResult,
} from "../models/put-trace-segments-result.js";
import { throttledExceptionSchema, type ThrottledException } from "../models/throttled-exception.js";
import { traceSegmentsRequestSchema, type TraceSegmentsRequest } from "../models/trace-segments-request.js";
import type { Servers } from "../servers.js";

export class Tracesegments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Put Trace Segments
   *
   * @remarks
   * Uploads segment documents to Amazon Web Services X-Ray. A segment document can be a completed
   * segment, an in-progress segment, or an array of subsegments. Segments must include the
   * following fields. For the full segment document schema, see Amazon Web Services X-Ray Segment
   * Documents in the Amazon Web Services X-Ray Developer Guide. Required segment document fields
   * name - The name of the service that handled the request. id - A 64-bit identifier for the
   * segment, unique among segments in the same trace, in 16 hexadecimal digits. trace_id - A unique
   * identifier that connects all segments and subsegments originating from a single client request.
   * start_time - Time the segment or subsegment was created, in floating point seconds in epoch
   * time, accurate to milliseconds. For example, 1480615200.010 or 1.480615200010E9. end_time -
   * Time the segment or subsegment was closed. For example, 1480615200.090 or 1.480615200090E9.
   * Specify either an end_time or in_progress. in_progress - Set to true instead of specifying an
   * end_time to record that a segment has been started, but is not complete. Send an in-progress
   * segment when your application receives a request that will take a long time to serve, t
   *
   * @returns Success
   *
   * @throws {@link Tracesegments.PutTraceSegmentsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsXRayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putTraceSegments(
    request: Tracesegments.PutTraceSegmentsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PutTraceSegmentsResult, Tracesegments.PutTraceSegmentsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/TraceSegments"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => traceSegmentsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: putTraceSegmentsResultSchema },
        errorFactory: Tracesegments.PutTraceSegmentsError,
      },
      options,
    );
  }
}

export namespace Tracesegments {
  export type PutTraceSegmentsRequest = {
    body?: TraceSegmentsRequest;
  };

  export class PutTraceSegmentsError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestException", InvalidRequestException>
      | Declared<"throttledException", ThrottledException>
      | Undeclared;

    static readonly errors: ErrorDecoders<PutTraceSegmentsError> = [
      {
        on: 400,
        kind: "invalidRequestException",
        decode: { kind: "json", schema: invalidRequestExceptionSchema },
      },
      { on: 429, kind: "throttledException", decode: { kind: "json", schema: throttledExceptionSchema } },
    ];
  }
}
