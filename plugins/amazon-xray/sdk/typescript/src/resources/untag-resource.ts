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
  resourceNotFoundExceptionSchema,
  type ResourceNotFoundException,
} from "../models/resource-not-found-exception.js";
import { throttledExceptionSchema, type ThrottledException } from "../models/throttled-exception.js";
import { untagResourceRequestSchema, type UntagResourceRequest } from "../models/untag-resource-request.js";
import type { Servers } from "../servers.js";

export class UntagResource {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Untag Resource
   *
   * @remarks
   * Removes tags from an Amazon Web Services X-Ray group or sampling rule. You cannot edit or
   * delete system tags (those with an aws: prefix).
   *
   * @returns Success
   *
   * @throws {@link UntagResource.UntagResourceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsXRayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  untagResource(
    request: UntagResource.UntagResourceRequestParams = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, UntagResource.UntagResourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/UntagResource"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => untagResourceRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: UntagResource.UntagResourceError,
      },
      options,
    );
  }
}

export namespace UntagResource {
  export type UntagResourceRequestParams = {
    body?: UntagResourceRequest;
  };

  export class UntagResourceError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestException", InvalidRequestException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttledException", ThrottledException>
      | Undeclared;

    static readonly errors: ErrorDecoders<UntagResourceError> = [
      {
        on: 400,
        kind: "invalidRequestException",
        decode: { kind: "json", schema: invalidRequestExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      { on: 429, kind: "throttledException", decode: { kind: "json", schema: throttledExceptionSchema } },
    ];
  }
}
