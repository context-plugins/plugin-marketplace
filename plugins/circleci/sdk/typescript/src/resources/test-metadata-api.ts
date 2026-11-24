import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  projectProjectBuildNumTestsResponseSchema,
  type ProjectProjectBuildNumTestsResponse,
} from "../models/project-project-build-num-tests-response.js";
import { vcsTypeSchema, type VcsType } from "../models/vcs-type.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for retrieving test metadata collected during builds.
 */
export class TestMetadataApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List test metadata for a build
   *
   * @remarks
   * Returns test metadata collected from the specified build, sourced from JUnit XML or similar
   * test result files.
   *
   * @returns Successfully retrieved test metadata
   *
   * @throws {@link TestMetadataApi.ListBuildTestsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBuildTests(
    request: TestMetadataApi.ListBuildTestsRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectProjectBuildNumTestsResponse, TestMetadataApi.ListBuildTestsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/project/{vcs-type}/{username}/{project}/{build_num}/tests"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "vcs-type", value: request.vcsType, schema: vcsTypeSchema },
          { name: "username", value: request.username, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
          { name: "build_num", value: request.buildNum, schema: s.int() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectProjectBuildNumTestsResponseSchema },
        errorFactory: TestMetadataApi.ListBuildTestsError,
      },
      options,
    );
  }
}

export namespace TestMetadataApi {
  export type ListBuildTestsRequest = {
    /** The version control system type */
    vcsType: VcsType;
    /** The organization or user name */
    username: string;
    /** The repository name */
    project: string;
    /** The build number */
    buildNum: number;
  };

  export class ListBuildTestsError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListBuildTestsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }
}
