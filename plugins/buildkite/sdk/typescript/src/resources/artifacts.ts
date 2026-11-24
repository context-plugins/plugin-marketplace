import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import type { Servers } from "../servers.js";

export class Artifacts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List Artifacts For A Build
   *
   * @returns A list of artifacts
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BuildkiteError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listArtifactsForBuild(
    request: Artifacts.ListArtifactsForBuildRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/organizations/{org}/pipelines/{pipeline}/builds/{number}/artifacts",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "org", value: request.org, schema: s.string() },
          { name: "pipeline", value: request.pipeline, schema: s.string() },
          { name: "number", value: request.number, schema: s.int() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Artifacts {
  export type ListArtifactsForBuildRequest = {
    /** Organization slug */
    org: string;
    /** Pipeline slug */
    pipeline: string;
    /** Build number */
    number: number;
  };
}
