import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { buildInternalSchema, type Build } from "../models/build.js";
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
   * Cancel A Build
   *
   * @returns Build cancelled
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BuildkiteError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelBuild(request: Builds.CancelBuildRequest, options?: RequestOptions): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default(
          "/organizations/{org}/pipelines/{pipeline}/builds/{number}/cancel",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "org", value: request.org, schema: s.string() },
          { name: "pipeline", value: request.pipeline, schema: s.string() },
          { name: "number", value: request.number, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create A Build
   *
   * @returns Build created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BuildkiteError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBuild(request: Builds.CreateBuildRequest, options?: RequestOptions): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/organizations/{org}/pipelines/{pipeline}/builds"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "org", value: request.org, schema: s.string() },
          { name: "pipeline", value: request.pipeline, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get A Build
   *
   * @returns Build record
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BuildkiteError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBuild(request: Builds.GetBuildRequest, options?: RequestOptions): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/organizations/{org}/pipelines/{pipeline}/builds/{number}"),
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

  /**
   * List Builds For A Pipeline
   *
   * @returns A list of builds
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BuildkiteError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBuilds(request: Builds.ListBuildsRequest, options?: RequestOptions): ApiPromise<Build[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/organizations/{org}/pipelines/{pipeline}/builds"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "org", value: request.org, schema: s.string() },
          { name: "pipeline", value: request.pipeline, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => buildInternalSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Rebuild A Build
   *
   * @returns Build re-queued
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BuildkiteError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  rebuildBuild(
    request: Builds.RebuildBuildRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default(
          "/organizations/{org}/pipelines/{pipeline}/builds/{number}/rebuild",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "org", value: request.org, schema: s.string() },
          { name: "pipeline", value: request.pipeline, schema: s.string() },
          { name: "number", value: request.number, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

export namespace Builds {
  export type CancelBuildRequest = {
    /** Organization slug */
    org: string;
    /** Pipeline slug */
    pipeline: string;
    /** Build number */
    number: number;
  };

  export type CreateBuildRequest = {
    /** Organization slug */
    org: string;
    /** Pipeline slug */
    pipeline: string;
  };

  export type GetBuildRequest = {
    /** Organization slug */
    org: string;
    /** Pipeline slug */
    pipeline: string;
    /** Build number */
    number: number;
  };

  export type ListBuildsRequest = {
    /** Organization slug */
    org: string;
    /** Pipeline slug */
    pipeline: string;
  };

  export type RebuildBuildRequest = {
    /** Organization slug */
    org: string;
    /** Pipeline slug */
    pipeline: string;
    /** Build number */
    number: number;
  };
}
