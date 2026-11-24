import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAwsCodeBuildSandboxeApiSchema,
  type XAmzTargetAwsCodeBuildSandboxeApi,
} from "../models/xamz-target-aws-code-build-sandboxe-api.js";
import {
  xAmzTarget1AwsCodeBuildSandboxeApiSchema,
  type XAmzTarget1AwsCodeBuildSandboxeApi,
} from "../models/xamz-target1-aws-code-build-sandboxe-api.js";
import {
  xAmzTarget2AwsCodeBuildSandboxeApiSchema,
  type XAmzTarget2AwsCodeBuildSandboxeApi,
} from "../models/xamz-target2-aws-code-build-sandboxe-api.js";
import type { Servers } from "../servers.js";

export class Sandboxe {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Batch Get Sandboxes
   *
   * @remarks
   * Gets information about the sandbox status.
   *
   * @returns Success
   *
   * @throws {@link Sandboxe.BatchGetSandboxesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  batchGetSandboxes(
    request: Sandboxe.BatchGetSandboxesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Sandboxe.BatchGetSandboxesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#BatchGetSandboxes"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAwsCodeBuildSandboxeApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Sandboxe.BatchGetSandboxesError,
      },
      options,
    );
  }

  /**
   * List Sandboxes
   *
   * @remarks
   * Gets a list of sandboxes.
   *
   * @returns Success
   *
   * @throws {@link Sandboxe.ListSandboxesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSandboxes(
    request: Sandboxe.ListSandboxesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Sandboxe.ListSandboxesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListSandboxes"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AwsCodeBuildSandboxeApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Sandboxe.ListSandboxesError,
      },
      options,
    );
  }

  /**
   * List Sandboxes For Project
   *
   * @remarks
   * Gets a list of sandboxes for a given project.
   *
   * @returns Success
   *
   * @throws {@link Sandboxe.ListSandboxesForProjectError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSandboxesForProject(
    request: Sandboxe.ListSandboxesForProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Sandboxe.ListSandboxesForProjectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListSandboxesForProject"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AwsCodeBuildSandboxeApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Sandboxe.ListSandboxesForProjectError,
      },
      options,
    );
  }
}

export namespace Sandboxe {
  export type BatchGetSandboxesRequest = {
    xAmzTarget: XAmzTargetAwsCodeBuildSandboxeApi;
  };

  export class BatchGetSandboxesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<BatchGetSandboxesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListSandboxesRequest = {
    xAmzTarget: XAmzTarget1AwsCodeBuildSandboxeApi;
  };

  export class ListSandboxesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListSandboxesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListSandboxesForProjectRequest = {
    xAmzTarget: XAmzTarget2AwsCodeBuildSandboxeApi;
  };

  export class ListSandboxesForProjectError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListSandboxesForProjectError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
