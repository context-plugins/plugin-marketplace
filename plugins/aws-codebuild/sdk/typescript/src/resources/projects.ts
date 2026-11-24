import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAwsCodeBuildProjectsApiSchema,
  type XAmzTargetAwsCodeBuildProjectsApi,
} from "../models/xamz-target-aws-code-build-projects-api.js";
import {
  xAmzTarget1AwsCodeBuildProjectsApiSchema,
  type XAmzTarget1AwsCodeBuildProjectsApi,
} from "../models/xamz-target1-aws-code-build-projects-api.js";
import {
  xAmzTarget2AwsCodeBuildProjectsApiSchema,
  type XAmzTarget2AwsCodeBuildProjectsApi,
} from "../models/xamz-target2-aws-code-build-projects-api.js";
import {
  xAmzTarget3AwsCodeBuildProjectsApiSchema,
  type XAmzTarget3AwsCodeBuildProjectsApi,
} from "../models/xamz-target3-aws-code-build-projects-api.js";
import {
  xAmzTarget4AwsCodeBuildProjectsApiSchema,
  type XAmzTarget4AwsCodeBuildProjectsApi,
} from "../models/xamz-target4-aws-code-build-projects-api.js";
import type { Servers } from "../servers.js";

export class Projects {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Batch Get Projects
   *
   * @remarks
   * Gets information about one or more build projects.
   *
   * @returns Success
   *
   * @throws {@link Projects.BatchGetProjects2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  batchGetProjects2(
    request: Projects.BatchGetProjects2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Projects.BatchGetProjects2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#BatchGetProjects"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAwsCodeBuildProjectsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Projects.BatchGetProjects2Error,
      },
      options,
    );
  }

  /**
   * Create Project
   *
   * @remarks
   * Creates a build project.
   *
   * @returns Success
   *
   * @throws {@link Projects.CreateProject2Error} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createProject2(
    request: Projects.CreateProject2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Projects.CreateProject2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateProject"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AwsCodeBuildProjectsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Projects.CreateProject2Error,
      },
      options,
    );
  }

  /**
   * Delete Project
   *
   * @remarks
   * Deletes a build project. When you delete a project, its builds are not deleted.
   *
   * @returns Success
   *
   * @throws {@link Projects.DeleteProject2Error} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteProject2(
    request: Projects.DeleteProject2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Projects.DeleteProject2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteProject"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AwsCodeBuildProjectsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Projects.DeleteProject2Error,
      },
      options,
    );
  }

  /**
   * List Projects
   *
   * @remarks
   * Gets a list of build project names, with each build project name representing a single build
   * project.
   *
   * @returns Success
   *
   * @throws {@link Projects.ListProjects2Error} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listProjects2(
    request: Projects.ListProjects2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Projects.ListProjects2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListProjects"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget3AwsCodeBuildProjectsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Projects.ListProjects2Error,
      },
      options,
    );
  }

  /**
   * Update Project
   *
   * @remarks
   * Changes the settings of a build project.
   *
   * @returns Success
   *
   * @throws {@link Projects.UpdateProject2Error} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateProject2(
    request: Projects.UpdateProject2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Projects.UpdateProject2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateProject"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget4AwsCodeBuildProjectsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Projects.UpdateProject2Error,
      },
      options,
    );
  }
}

export namespace Projects {
  export type BatchGetProjects2Request = {
    xAmzTarget: XAmzTargetAwsCodeBuildProjectsApi;
  };

  export class BatchGetProjects2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<BatchGetProjects2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type CreateProject2Request = {
    xAmzTarget: XAmzTarget1AwsCodeBuildProjectsApi;
  };

  export class CreateProject2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateProject2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DeleteProject2Request = {
    xAmzTarget: XAmzTarget2AwsCodeBuildProjectsApi;
  };

  export class DeleteProject2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteProject2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListProjects2Request = {
    xAmzTarget: XAmzTarget3AwsCodeBuildProjectsApi;
  };

  export class ListProjects2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListProjects2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type UpdateProject2Request = {
    xAmzTarget: XAmzTarget4AwsCodeBuildProjectsApi;
  };

  export class UpdateProject2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateProject2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
