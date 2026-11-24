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
import { throttledExceptionSchema, type ThrottledException } from "../models/throttled-exception.js";
import { updateGroupRequestSchema, type UpdateGroupRequest } from "../models/update-group-request.js";
import { updateGroupResultSchema, type UpdateGroupResult } from "../models/update-group-result.js";
import type { Servers } from "../servers.js";

export class UpdateGroup {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Update Group
   *
   * @remarks
   * Updates a group resource.
   *
   * @returns Success
   *
   * @throws {@link UpdateGroup.UpdateGroupError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AwsXRayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateGroup(
    request: UpdateGroup.UpdateGroupRequestParams = {},
    options?: RequestOptions,
  ): ApiPromise<UpdateGroupResult, UpdateGroup.UpdateGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/UpdateGroup"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateGroupRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: updateGroupResultSchema },
        errorFactory: UpdateGroup.UpdateGroupError,
      },
      options,
    );
  }
}

export namespace UpdateGroup {
  export type UpdateGroupRequestParams = {
    body?: UpdateGroupRequest;
  };

  export class UpdateGroupError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestException", InvalidRequestException>
      | Declared<"throttledException", ThrottledException>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateGroupError> = [
      {
        on: 400,
        kind: "invalidRequestException",
        decode: { kind: "json", schema: invalidRequestExceptionSchema },
      },
      { on: 429, kind: "throttledException", decode: { kind: "json", schema: throttledExceptionSchema } },
    ];
  }
}
