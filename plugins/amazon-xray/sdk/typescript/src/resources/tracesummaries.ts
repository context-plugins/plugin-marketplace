import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  getTraceSummariesResultSchema,
  type GetTraceSummariesResult,
} from "../models/get-trace-summaries-result.js";
import {
  invalidRequestExceptionSchema,
  type InvalidRequestException,
} from "../models/invalid-request-exception.js";
import { throttledExceptionSchema, type ThrottledException } from "../models/throttled-exception.js";
import {
  traceSummariesRequestSchema,
  type TraceSummariesRequest,
} from "../models/trace-summaries-request.js";
import type { Servers } from "../servers.js";

export class Tracesummaries {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Trace Summaries
   *
   * @remarks
   * Retrieves IDs and annotations for traces available for a specified time frame using an optional
   * filter. To get the full traces, pass the trace IDs to BatchGetTraces. A filter expression can
   * target traced requests that hit specific service nodes or edges, have errors, or come from a
   * known user. For example, the following filter expression targets traces that pass through
   * api.example.com: service("api.example.com") This filter expression finds traces that have an
   * annotation named account with the value 12345: annotation.account = "12345" For a full list of
   * indexed fields and keywords that you can use in filter expressions, see Use filter expressions
   * in the Amazon Web Services X-Ray Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link Tracesummaries.GetTraceSummaries2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsXRayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTraceSummaries2(
    request: Tracesummaries.GetTraceSummaries2Request = {},
    options?: RequestOptions,
  ): ApiPromise<GetTraceSummariesResult, Tracesummaries.GetTraceSummaries2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/TraceSummaries"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => traceSummariesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: getTraceSummariesResultSchema },
        errorFactory: Tracesummaries.GetTraceSummaries2Error,
      },
      options,
    );
  }
}

export namespace Tracesummaries {
  export type GetTraceSummaries2Request = {
    body?: TraceSummariesRequest;
  };

  export class GetTraceSummaries2Error extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestException", InvalidRequestException>
      | Declared<"throttledException", ThrottledException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTraceSummaries2Error> = [
      {
        on: 400,
        kind: "invalidRequestException",
        decode: { kind: "json", schema: invalidRequestExceptionSchema },
      },
      { on: 429, kind: "throttledException", decode: { kind: "json", schema: throttledExceptionSchema } },
    ];
  }
}
