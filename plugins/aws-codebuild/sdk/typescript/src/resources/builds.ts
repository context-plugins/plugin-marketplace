import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema,
  type XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi,
} from "../models/xamz-target-aws-code-build-aws-codebuild-xamz-target-codebuild-api.js";
import {
  xAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema,
  type XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi,
} from "../models/xamz-target1-aws-code-build-aws-codebuild-xamz-target-codebuild-api.js";
import {
  xAmzTarget2AwsCodeBuildBuildsApiSchema,
  type XAmzTarget2AwsCodeBuildBuildsApi,
} from "../models/xamz-target2-aws-code-build-builds-api.js";
import {
  xAmzTarget3AwsCodeBuildBuildsApiSchema,
  type XAmzTarget3AwsCodeBuildBuildsApi,
} from "../models/xamz-target3-aws-code-build-builds-api.js";
import {
  xAmzTarget4AwsCodeBuildBuildsApiSchema,
  type XAmzTarget4AwsCodeBuildBuildsApi,
} from "../models/xamz-target4-aws-code-build-builds-api.js";
import {
  xAmzTarget5AwsCodeBuildBuildsApiSchema,
  type XAmzTarget5AwsCodeBuildBuildsApi,
} from "../models/xamz-target5-aws-code-build-builds-api.js";
import type { Servers } from "../servers.js";

export class Builds {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Batch Delete Builds
   *
   * @remarks
   * Deletes one or more builds.
   *
   * @returns Success
   *
   * @throws {@link Builds.BatchDeleteBuilds2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  batchDeleteBuilds2(
    request: Builds.BatchDeleteBuilds2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Builds.BatchDeleteBuilds2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#BatchDeleteBuilds"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Builds.BatchDeleteBuilds2Error,
      },
      options,
    );
  }

  /**
   * Batch Get Builds
   *
   * @remarks
   * Gets information about one or more builds.
   *
   * @returns Success
   *
   * @throws {@link Builds.BatchGetBuilds2Error} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  batchGetBuilds2(
    request: Builds.BatchGetBuilds2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Builds.BatchGetBuilds2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#BatchGetBuilds"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Builds.BatchGetBuilds2Error,
      },
      options,
    );
  }

  /**
   * List Builds
   *
   * @remarks
   * Gets a list of build IDs, with each build ID representing a single build.
   *
   * @returns Success
   *
   * @throws {@link Builds.ListBuilds2Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBuilds2(
    request: Builds.ListBuilds2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Builds.ListBuilds2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListBuilds"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget2AwsCodeBuildBuildsApiSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Builds.ListBuilds2Error,
      },
      options,
    );
  }

  /**
   * List Builds For Project
   *
   * @remarks
   * Gets a list of build identifiers for the specified build project, with each build identifier
   * representing a single build.
   *
   * @returns Success
   *
   * @throws {@link Builds.ListBuildsForProject2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBuildsForProject2(
    request: Builds.ListBuildsForProject2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Builds.ListBuildsForProject2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListBuildsForProject"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget3AwsCodeBuildBuildsApiSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Builds.ListBuildsForProject2Error,
      },
      options,
    );
  }

  /**
   * Start Build
   *
   * @remarks
   * Starts running a build with the settings defined in the project. These setting include: how to
   * run a build, where to get the source code, which build environment to use, which build commands
   * to run, and where to store the build output. You can also start a build run by overriding some
   * of the build settings in the project. The overrides only apply for that specific start build
   * request. The settings in the project are unaltered.
   *
   * @returns Success
   *
   * @throws {@link Builds.StartBuild2Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startBuild2(
    request: Builds.StartBuild2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Builds.StartBuild2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartBuild"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget4AwsCodeBuildBuildsApiSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Builds.StartBuild2Error,
      },
      options,
    );
  }

  /**
   * Stop Build
   *
   * @remarks
   * Attempts to stop running a build.
   *
   * @returns Success
   *
   * @throws {@link Builds.StopBuild2Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  stopBuild2(
    request: Builds.StopBuild2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Builds.StopBuild2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StopBuild"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget5AwsCodeBuildBuildsApiSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Builds.StopBuild2Error,
      },
      options,
    );
  }
}

export namespace Builds {
  export type BatchDeleteBuilds2Request = {
    xAmzTarget: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi;
  };

  export class BatchDeleteBuilds2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<BatchDeleteBuilds2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type BatchGetBuilds2Request = {
    xAmzTarget: XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi;
  };

  export class BatchGetBuilds2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<BatchGetBuilds2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListBuilds2Request = {
    xAmzTarget: XAmzTarget2AwsCodeBuildBuildsApi;
  };

  export class ListBuilds2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListBuilds2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListBuildsForProject2Request = {
    xAmzTarget: XAmzTarget3AwsCodeBuildBuildsApi;
  };

  export class ListBuildsForProject2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListBuildsForProject2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type StartBuild2Request = {
    xAmzTarget: XAmzTarget4AwsCodeBuildBuildsApi;
  };

  export class StartBuild2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<StartBuild2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type StopBuild2Request = {
    xAmzTarget: XAmzTarget5AwsCodeBuildBuildsApi;
  };

  export class StopBuild2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<StopBuild2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
