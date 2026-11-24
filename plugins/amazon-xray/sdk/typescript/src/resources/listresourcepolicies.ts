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
  listResourcePoliciesRequestSchema,
  type ListResourcePoliciesRequest,
} from "../models/list-resource-policies-request.js";
import {
  listResourcePoliciesResultSchema,
  type ListResourcePoliciesResult,
} from "../models/list-resource-policies-result.js";
import { throttledExceptionSchema, type ThrottledException } from "../models/throttled-exception.js";
import type { Servers } from "../servers.js";

export class Listresourcepolicies {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List Resource Policies
   *
   * @remarks
   * Returns the list of resource policies in the target Amazon Web Services account.
   *
   * @returns Success
   *
   * @throws {@link Listresourcepolicies.ListResourcePoliciesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsXRayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listResourcePolicies(
    request: Listresourcepolicies.ListResourcePoliciesRequestParams = {},
    options?: RequestOptions,
  ): ApiPromise<ListResourcePoliciesResult, Listresourcepolicies.ListResourcePoliciesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/ListResourcePolicies"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listResourcePoliciesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listResourcePoliciesResultSchema },
        errorFactory: Listresourcepolicies.ListResourcePoliciesError,
      },
      options,
    );
  }
}

export namespace Listresourcepolicies {
  export type ListResourcePoliciesRequestParams = {
    body?: ListResourcePoliciesRequest;
  };

  export class ListResourcePoliciesError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestException", InvalidRequestException>
      | Declared<"throttledException", ThrottledException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListResourcePoliciesError> = [
      {
        on: 400,
        kind: "invalidRequestException",
        decode: { kind: "json", schema: invalidRequestExceptionSchema },
      },
      { on: 429, kind: "throttledException", decode: { kind: "json", schema: throttledExceptionSchema } },
    ];
  }
}
