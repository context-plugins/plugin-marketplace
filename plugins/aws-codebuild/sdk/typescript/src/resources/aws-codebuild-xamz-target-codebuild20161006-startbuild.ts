import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApiSchema,
  type XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApi,
} from "../models/xamz-target-aws-code-build-aws-codebuild-xamz-target-codebuild20161006-startbuild-api.js";
import type { Servers } from "../servers.js";

export class AwsCodebuildXAmzTargetCodebuild20161006Startbuild {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
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
   * @throws {@link AwsCodebuildXAmzTargetCodebuild20161006Startbuild.StartBuildError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startBuild(
    request: AwsCodebuildXAmzTargetCodebuild20161006Startbuild.StartBuildRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild20161006Startbuild.StartBuildError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartBuild"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild20161006Startbuild.StartBuildError,
      },
      options,
    );
  }
}

export namespace AwsCodebuildXAmzTargetCodebuild20161006Startbuild {
  export type StartBuildRequest = {
    xAmzTarget: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApi;
  };

  export class StartBuildError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<StartBuildError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
