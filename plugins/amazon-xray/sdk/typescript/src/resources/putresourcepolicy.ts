import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  invalidPolicyRevisionIdExceptionSchema,
  type InvalidPolicyRevisionIdException,
} from "../models/invalid-policy-revision-id-exception.js";
import {
  putResourcePolicyRequestSchema,
  type PutResourcePolicyRequest,
} from "../models/put-resource-policy-request.js";
import {
  putResourcePolicyResultSchema,
  type PutResourcePolicyResult,
} from "../models/put-resource-policy-result.js";
import { throttledExceptionSchema, type ThrottledException } from "../models/throttled-exception.js";
import type { Servers } from "../servers.js";

export class Putresourcepolicy {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Put Resource Policy
   *
   * @remarks
   * Sets the resource policy to grant one or more Amazon Web Services services and accounts
   * permissions to access X-Ray. Each resource policy will be associated with a specific Amazon Web
   * Services account. Each Amazon Web Services account can have a maximum of 5 resource policies,
   * and each policy name must be unique within that account. The maximum size of each resource
   * policy is 5KB.
   *
   * @returns Success
   *
   * @throws {@link Putresourcepolicy.PutResourcePolicyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsXRayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putResourcePolicy(
    request: Putresourcepolicy.PutResourcePolicyRequestParams = {},
    options?: RequestOptions,
  ): ApiPromise<PutResourcePolicyResult, Putresourcepolicy.PutResourcePolicyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/PutResourcePolicy"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => putResourcePolicyRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: putResourcePolicyResultSchema },
        errorFactory: Putresourcepolicy.PutResourcePolicyError,
      },
      options,
    );
  }
}

export namespace Putresourcepolicy {
  export type PutResourcePolicyRequestParams = {
    body?: PutResourcePolicyRequest;
  };

  export class PutResourcePolicyError extends ApiError {
    declare readonly payload:
      | Declared<"invalidPolicyRevisionIdException", InvalidPolicyRevisionIdException>
      | Declared<"throttledException", ThrottledException>
      | Undeclared;

    static readonly errors: ErrorDecoders<PutResourcePolicyError> = [
      {
        on: 400,
        kind: "invalidPolicyRevisionIdException",
        decode: { kind: "json", schema: invalidPolicyRevisionIdExceptionSchema },
      },
      { on: 429, kind: "throttledException", decode: { kind: "json", schema: throttledExceptionSchema } },
    ];
  }
}
