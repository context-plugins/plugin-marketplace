import type { ClientOptions } from "./client-options.js";
import { ApiError } from "./core/api-error.js";
import type { ApiPromise } from "./core/api-promise.js";
import type { RequestOptions } from "./core/api-request.js";
import { noneAuth } from "./core/auth/schemes.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import { uuid } from "./core/uuid.js";
import * as s from "./core/validation/index.js";
import { validateBatchRequestSchema, type ValidateBatchRequest } from "./models/validate-batch-request.js";
import { validateEmailRequestSchema, type ValidateEmailRequest } from "./models/validate-email-request.js";
import { validateEmailResponseSchema, type ValidateEmailResponse } from "./models/validate-email-response.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Plugin that can validate email addresses. Send the email address you want to validate and the
 * ZeroBounce API will validate that email and return information on it.
 */
export class ZeroBounceClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "ZERO_BOUNCE_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "ZeroBounceClient/1.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "1.0.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);
  }

  /**
   * Validate an email address.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ZeroBounceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  validate(
    request: ZeroBounceClient.ValidateRequest,
    options?: RequestOptions,
  ): ApiPromise<ValidateEmailResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/validation/chatgpt-single-email-validation/"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: validateEmailRequestSchema },
      },
      {
        success: { kind: "json", schema: validateEmailResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Validate a list of email addresses.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ZeroBounceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  validateBatch(
    request: ZeroBounceClient.ValidateBatchRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ValidateEmailResponse[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/validation/chatgpt-batch-validation/"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: validateBatchRequestSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => validateEmailResponseSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace ZeroBounceClient {
  export type ValidateRequest = {
    body: ValidateEmailRequest;
  };

  export type ValidateBatchRequestParams = {
    body: ValidateBatchRequest;
  };
}
