import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createSamplingRuleRequestSchema,
  type CreateSamplingRuleRequest,
} from "../models/create-sampling-rule-request.js";
import {
  createSamplingRuleResultSchema,
  type CreateSamplingRuleResult,
} from "../models/create-sampling-rule-result.js";
import {
  invalidRequestExceptionSchema,
  type InvalidRequestException,
} from "../models/invalid-request-exception.js";
import { throttledExceptionSchema, type ThrottledException } from "../models/throttled-exception.js";
import type { Servers } from "../servers.js";

export class Createsamplingrule {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Sampling Rule
   *
   * @remarks
   * Creates a rule to control sampling behavior for instrumented applications. Services retrieve
   * rules with GetSamplingRules, and evaluate each rule in ascending order of priority for each
   * request. If a rule matches, the service records a trace, borrowing it from the reservoir size.
   * After 10 seconds, the service reports back to X-Ray with GetSamplingTargets to get updated
   * versions of each in-use rule. The updated rule contains a trace quota that the service can use
   * instead of borrowing from the reservoir.
   *
   * @returns Success
   *
   * @throws {@link Createsamplingrule.CreateSamplingRuleError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsXRayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSamplingRule(
    request: Createsamplingrule.CreateSamplingRuleRequestParams = {},
    options?: RequestOptions,
  ): ApiPromise<CreateSamplingRuleResult, Createsamplingrule.CreateSamplingRuleError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/CreateSamplingRule"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createSamplingRuleRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createSamplingRuleResultSchema },
        errorFactory: Createsamplingrule.CreateSamplingRuleError,
      },
      options,
    );
  }
}

export namespace Createsamplingrule {
  export type CreateSamplingRuleRequestParams = {
    body?: CreateSamplingRuleRequest;
  };

  export class CreateSamplingRuleError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestException", InvalidRequestException>
      | Declared<"throttledException", ThrottledException>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSamplingRuleError> = [
      {
        on: 400,
        kind: "invalidRequestException",
        decode: { kind: "json", schema: invalidRequestExceptionSchema },
      },
      { on: 429, kind: "throttledException", decode: { kind: "json", schema: throttledExceptionSchema } },
    ];
  }
}
