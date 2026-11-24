import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListbuildsApiSchema,
  type XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListbuildsApi,
} from "../models/xamz-target-aws-code-build-aws-codebuild-xamz-target-codebuild20161006-listbuilds-api.js";
import type { Servers } from "../servers.js";

export class AwsCodebuildXAmzTargetCodebuild20161006Listbuilds {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List Builds
   *
   * @remarks
   * Gets a list of build IDs, with each build ID representing a single build.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild20161006Listbuilds.ListBuildsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBuilds(
    request: AwsCodebuildXAmzTargetCodebuild20161006Listbuilds.ListBuildsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild20161006Listbuilds.ListBuildsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListBuilds"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListbuildsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild20161006Listbuilds.ListBuildsError,
      },
      options,
    );
  }
}

export namespace AwsCodebuildXAmzTargetCodebuild20161006Listbuilds {
  export type ListBuildsRequest = {
    xAmzTarget: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListbuildsApi;
  };

  export class ListBuildsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListBuildsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
