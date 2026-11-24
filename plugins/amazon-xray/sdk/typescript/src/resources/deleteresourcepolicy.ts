import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  deleteResourcePolicyRequestSchema,
  type DeleteResourcePolicyRequest,
} from "../models/delete-resource-policy-request.js";
import {
  invalidPolicyRevisionIdExceptionSchema,
  type InvalidPolicyRevisionIdException,
} from "../models/invalid-policy-revision-id-exception.js";
import { throttledExceptionSchema, type ThrottledException } from "../models/throttled-exception.js";
import type { Servers } from "../servers.js";

export class Deleteresourcepolicy {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete Resource Policy
   *
   * @remarks
   * Deletes a resource policy from the target Amazon Web Services account.
   *
   * @returns Success
   *
   * @throws {@link Deleteresourcepolicy.DeleteResourcePolicyError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsXRayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteResourcePolicy(
    request: Deleteresourcepolicy.DeleteResourcePolicyRequestParams = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Deleteresourcepolicy.DeleteResourcePolicyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/DeleteResourcePolicy"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => deleteResourcePolicyRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Deleteresourcepolicy.DeleteResourcePolicyError,
      },
      options,
    );
  }
}

export namespace Deleteresourcepolicy {
  export type DeleteResourcePolicyRequestParams = {
    body?: DeleteResourcePolicyRequest;
  };

  export class DeleteResourcePolicyError extends ApiError {
    declare readonly payload:
      | Declared<"invalidPolicyRevisionIdException", InvalidPolicyRevisionIdException>
      | Declared<"throttledException", ThrottledException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteResourcePolicyError> = [
      {
        on: 400,
        kind: "invalidPolicyRevisionIdException",
        decode: { kind: "json", schema: invalidPolicyRevisionIdExceptionSchema },
      },
      { on: 429, kind: "throttledException", decode: { kind: "json", schema: throttledExceptionSchema } },
    ];
  }
}
