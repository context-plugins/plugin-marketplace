import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApiSchema,
  type XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApi,
} from "../models/xamz-target-aws-code-build-aws-codebuild-xamz-target-codebuild20161006-stopbuild-api-api.js";
import type { Servers } from "../servers.js";

export class AwsCodebuildXAmzTargetCodebuild20161006StopbuildApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Stop Build
   *
   * @remarks
   * Attempts to stop running a build.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild20161006StopbuildApi.StopBuildError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  stopBuild(
    request: AwsCodebuildXAmzTargetCodebuild20161006StopbuildApi.StopBuildRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild20161006StopbuildApi.StopBuildError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StopBuild"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild20161006StopbuildApi.StopBuildError,
      },
      options,
    );
  }
}

export namespace AwsCodebuildXAmzTargetCodebuild20161006StopbuildApi {
  export type StopBuildRequest = {
    xAmzTarget: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApi;
  };

  export class StopBuildError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<StopBuildError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
