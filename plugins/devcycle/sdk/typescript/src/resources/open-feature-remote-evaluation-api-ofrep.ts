import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  ofrepBulkEvaluationFailureSchema,
  type OfrepBulkEvaluationFailure,
} from "../models/ofrep-bulk-evaluation-failure.js";
import {
  ofrepBulkEvaluationRequestSchema,
  type OfrepBulkEvaluationRequest,
} from "../models/ofrep-bulk-evaluation-request.js";
import {
  ofrepBulkEvaluationSuccessInternalSchema,
  type OfrepBulkEvaluationSuccess,
} from "../models/ofrep-bulk-evaluation-success.js";
import {
  ofrepEvaluationFailureInternalSchema,
  type OfrepEvaluationFailure,
} from "../models/ofrep-evaluation-failure.js";
import {
  ofrepEvaluationRequestSchema,
  type OfrepEvaluationRequest,
} from "../models/ofrep-evaluation-request.js";
import {
  ofrepEvaluationSuccessInternalSchema,
  type OfrepEvaluationSuccess,
} from "../models/ofrep-evaluation-success.js";
import { ofrepFlagNotFoundInternalSchema, type OfrepFlagNotFound } from "../models/ofrep-flag-not-found.js";
import {
  ofrepGeneralErrorResponseSchema,
  type OfrepGeneralErrorResponse,
} from "../models/ofrep-general-error-response.js";
import type { Servers } from "../servers.js";

/**
 * See the OpenFeature documentation for more information: https://github.com/open-feature/protocol
 */
export class OpenFeatureRemoteEvaluationApiOfrep {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * OFREP Bulk Evaluation Request
   *
   * @remarks
   * Return all flag values for a user context.
   *
   * @returns OFREP successful evaluation response
   *
   * @throws {@link OpenFeatureRemoteEvaluationApiOfrep.PostOfrepV1EvaluateFlagsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postOfrepV1EvaluateFlags(
    request: OpenFeatureRemoteEvaluationApiOfrep.PostOfrepV1EvaluateFlagsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    OfrepBulkEvaluationSuccess,
    OpenFeatureRemoteEvaluationApiOfrep.PostOfrepV1EvaluateFlagsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultDevCycleBucketingBucketingApi("/ofrep/v1/evaluate/flags"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "If-None-Match", value: request.ifNoneMatch, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => ofrepBulkEvaluationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: ofrepBulkEvaluationSuccessInternalSchema },
        errorFactory: OpenFeatureRemoteEvaluationApiOfrep.PostOfrepV1EvaluateFlagsError,
      },
      options,
    );
  }

  /**
   * OFREP Single Flag Evaluation Request
   *
   * @remarks
   * Return a single flag for a user context
   *
   * @returns OFREP successful evaluation response
   *
   * @throws {@link OpenFeatureRemoteEvaluationApiOfrep.PostOfrepV1EvaluateFlagsByKeyError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postOfrepV1EvaluateFlagsByKey(
    request: OpenFeatureRemoteEvaluationApiOfrep.PostOfrepV1EvaluateFlagsByKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<
    OfrepEvaluationSuccess,
    OpenFeatureRemoteEvaluationApiOfrep.PostOfrepV1EvaluateFlagsByKeyError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultDevCycleBucketingBucketingApi("/ofrep/v1/evaluate/flags/{key}"),
        auth: noneAuth,
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => ofrepEvaluationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: ofrepEvaluationSuccessInternalSchema },
        errorFactory: OpenFeatureRemoteEvaluationApiOfrep.PostOfrepV1EvaluateFlagsByKeyError,
      },
      options,
    );
  }
}

export namespace OpenFeatureRemoteEvaluationApiOfrep {
  export type PostOfrepV1EvaluateFlagsRequest = {
    /** The request will be processed only if ETag doesn't match any of the values listed. */
    ifNoneMatch?: string;
    body?: OfrepBulkEvaluationRequest;
  };

  export class PostOfrepV1EvaluateFlagsError extends ApiError {
    declare readonly payload:
      | Declared<"error304", undefined>
      | Declared<"ofrepBulkEvaluationFailure", OfrepBulkEvaluationFailure>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error429", undefined>
      | Declared<"ofrepGeneralErrorResponse", OfrepGeneralErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostOfrepV1EvaluateFlagsError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
      {
        on: 400,
        kind: "ofrepBulkEvaluationFailure",
        decode: { kind: "json", schema: ofrepBulkEvaluationFailureSchema },
      },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      {
        on: 500,
        kind: "ofrepGeneralErrorResponse",
        decode: { kind: "json", schema: ofrepGeneralErrorResponseSchema },
      },
    ];
  }

  export type PostOfrepV1EvaluateFlagsByKeyRequest = {
    key: string;
    body?: OfrepEvaluationRequest;
  };

  export const postOfrepV1EvaluateFlagsByKeyRequestSchema: Schema<PostOfrepV1EvaluateFlagsByKeyRequest> =
    s.lazySchema(() =>
      s.object<PostOfrepV1EvaluateFlagsByKeyRequest>({
        key: s.string().check(s.pattern("^[a-z0-9-_.]+$")),
        body: s.optional(s.lazy(() => ofrepEvaluationRequestSchema)),
      }),
    );

  export class PostOfrepV1EvaluateFlagsByKeyError extends ApiError {
    declare readonly payload:
      | Declared<"ofrepEvaluationFailure", OfrepEvaluationFailure>
      | Declared<"ofrepFlagNotFound", OfrepFlagNotFound>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error429", undefined>
      | Declared<"ofrepGeneralErrorResponse", OfrepGeneralErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostOfrepV1EvaluateFlagsByKeyError> = [
      {
        on: 400,
        kind: "ofrepEvaluationFailure",
        decode: { kind: "json", schema: ofrepEvaluationFailureInternalSchema },
      },
      {
        on: 404,
        kind: "ofrepFlagNotFound",
        decode: { kind: "json", schema: ofrepFlagNotFoundInternalSchema },
      },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      {
        on: 500,
        kind: "ofrepGeneralErrorResponse",
        decode: { kind: "json", schema: ofrepGeneralErrorResponseSchema },
      },
    ];
  }
}
