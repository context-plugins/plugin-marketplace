import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { artifactInternalSchema, type Artifact } from "../models/artifact.js";
import { filterSchema, type Filter } from "../models/filter.js";
import { vcsTypeSchema, type VcsType } from "../models/vcs-type.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for listing and downloading build artifacts.
 */
export class ArtifactApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List artifacts for a build
   *
   * @remarks
   * Returns a list of artifacts produced by the specified build.
   *
   * @returns Successfully retrieved artifacts
   *
   * @throws {@link ArtifactApi.ListBuildArtifactsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBuildArtifacts(
    request: ArtifactApi.ListBuildArtifactsRequest,
    options?: RequestOptions,
  ): ApiPromise<Artifact[], ArtifactApi.ListBuildArtifactsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/project/{vcs-type}/{username}/{project}/{build_num}/artifacts"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => artifactInternalSchema)) },
        errorFactory: ArtifactApi.ListBuildArtifactsError,
      },
      options,
    );
  }

  /**
   * List latest build artifacts
   *
   * @remarks
   * Returns artifacts from the latest build of the project, optionally filtered by branch.
   *
   * @returns Successfully retrieved latest artifacts
   *
   * @throws {@link ArtifactApi.ListLatestArtifactsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listLatestArtifacts(
    request: ArtifactApi.ListLatestArtifactsRequest,
    options?: RequestOptions,
  ): ApiPromise<Artifact[], ArtifactApi.ListLatestArtifactsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/project/{vcs-type}/{username}/{project}/latest/artifacts"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "vcs-type", value: request.vcsType, schema: vcsTypeSchema },
          { name: "username", value: request.username, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [
          { name: "branch", value: request.branch, schema: s.optional(s.string()) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filterSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => artifactInternalSchema)) },
        errorFactory: ArtifactApi.ListLatestArtifactsError,
      },
      options,
    );
  }
}

export namespace ArtifactApi {
  export type ListBuildArtifactsRequest = {
    /** The version control system type */
    vcsType: VcsType;
    /** The organization or user name */
    username: string;
    /** The repository name */
    project: string;
    /** The build number */
    buildNum: number;
  };

  export class ListBuildArtifactsError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListBuildArtifactsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export type ListLatestArtifactsRequest = {
    /** The version control system type */
    vcsType: VcsType;
    /** The organization or user name */
    username: string;
    /** The repository name */
    project: string;
    /** Filter artifacts by branch name */
    branch?: string;
    /** Filter artifacts by status */
    filter?: Filter;
  };

  export class ListLatestArtifactsError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListLatestArtifactsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }
}
