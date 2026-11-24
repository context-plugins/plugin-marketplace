import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  getSamplingRulesRequestSchema,
  type GetSamplingRulesRequest,
} from "../models/get-sampling-rules-request.js";
import {
  getSamplingRulesResultSchema,
  type GetSamplingRulesResult,
} from "../models/get-sampling-rules-result.js";
import {
  invalidRequestExceptionSchema,
  type InvalidRequestException,
} from "../models/invalid-request-exception.js";
import { throttledExceptionSchema, type ThrottledException } from "../models/throttled-exception.js";
import type { Servers } from "../servers.js";

export class Sampling {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Sampling Rules
   *
   * @remarks
   * Retrieves all sampling rules.
   *
   * @returns Success
   *
   * @throws {@link Sampling.GetSamplingRules2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsXRayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSamplingRules2(
    request: Sampling.GetSamplingRules2Request = {},
    options?: RequestOptions,
  ): ApiPromise<GetSamplingRulesResult, Sampling.GetSamplingRules2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/GetSamplingRules"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => getSamplingRulesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: getSamplingRulesResultSchema },
        errorFactory: Sampling.GetSamplingRules2Error,
      },
      options,
    );
  }
}

export namespace Sampling {
  export type GetSamplingRules2Request = {
    body?: GetSamplingRulesRequest;
  };

  export class GetSamplingRules2Error extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestException", InvalidRequestException>
      | Declared<"throttledException", ThrottledException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSamplingRules2Error> = [
      {
        on: 400,
        kind: "invalidRequestException",
        decode: { kind: "json", schema: invalidRequestExceptionSchema },
      },
      { on: 429, kind: "throttledException", decode: { kind: "json", schema: throttledExceptionSchema } },
    ];
  }
}
