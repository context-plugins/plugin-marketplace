import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  getSamplingTargetsResultSchema,
  type GetSamplingTargetsResult,
} from "../models/get-sampling-targets-result.js";
import {
  invalidRequestExceptionSchema,
  type InvalidRequestException,
} from "../models/invalid-request-exception.js";
import {
  samplingTargetsRequestSchema,
  type SamplingTargetsRequest,
} from "../models/sampling-targets-request.js";
import { throttledExceptionSchema, type ThrottledException } from "../models/throttled-exception.js";
import type { Servers } from "../servers.js";

export class Samplingtargets {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Sampling Targets
   *
   * @remarks
   * Requests a sampling quota for rules that the service is using to sample requests.
   *
   * @returns Success
   *
   * @throws {@link Samplingtargets.GetSamplingTargetsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsXRayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSamplingTargets(
    request: Samplingtargets.GetSamplingTargetsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<GetSamplingTargetsResult, Samplingtargets.GetSamplingTargetsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/SamplingTargets"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => samplingTargetsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: getSamplingTargetsResultSchema },
        errorFactory: Samplingtargets.GetSamplingTargetsError,
      },
      options,
    );
  }
}

export namespace Samplingtargets {
  export type GetSamplingTargetsRequest = {
    body?: SamplingTargetsRequest;
  };

  export class GetSamplingTargetsError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestException", InvalidRequestException>
      | Declared<"throttledException", ThrottledException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSamplingTargetsError> = [
      {
        on: 400,
        kind: "invalidRequestException",
        decode: { kind: "json", schema: invalidRequestExceptionSchema },
      },
      { on: 429, kind: "throttledException", decode: { kind: "json", schema: throttledExceptionSchema } },
    ];
  }
}
