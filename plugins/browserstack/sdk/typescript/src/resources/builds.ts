import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  automateBuildsJsonRequestSchema,
  type AutomateBuildsJsonRequest,
} from "../models/automate-builds-json-request.js";
import { buildSchema, type Build } from "../models/build.js";
import { statusMessageSchema, type StatusMessage } from "../models/status-message.js";
import { statusSchema, type Status } from "../models/status.js";
import type { Servers } from "../servers.js";

/**
 * Operations on Automate builds.
 */
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
   * Delete build
   *
   * @returns Build deletion confirmation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BrowserStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteBuild(
    request: Builds.DeleteBuildRequest,
    options?: RequestOptions,
  ): ApiPromise<StatusMessage, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/automate/builds/{buildId}.json"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "buildId", value: request.buildId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: statusMessageSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List recent builds
   *
   * @returns Array of builds
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BrowserStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBuilds(
    request: Builds.ListBuildsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Build[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/automate/builds.json"),
        auth: this.#auth.basicAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => statusSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => buildSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update build
   *
   * @returns Updated build
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BrowserStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateBuild(request: Builds.UpdateBuildRequest, options?: RequestOptions): ApiPromise<Build, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/automate/builds/{buildId}.json"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "buildId", value: request.buildId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: automateBuildsJsonRequestSchema },
      },
      {
        success: { kind: "json", schema: buildSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Builds {
  export type DeleteBuildRequest = {
    buildId: string;
  };

  export type ListBuildsRequest = {
    limit?: number;
    offset?: number;
    status?: Status;
  };

  export type UpdateBuildRequest = {
    buildId: string;
    body: AutomateBuildsJsonRequest;
  };
}
