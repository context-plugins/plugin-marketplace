import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonRekognitionProjectApiSchema,
  type XAmzTargetAmazonRekognitionProjectApi,
} from "../models/xamz-target-amazon-rekognition-project-api.js";
import {
  xAmzTarget1AmazonRekognitionProjectApiSchema,
  type XAmzTarget1AmazonRekognitionProjectApi,
} from "../models/xamz-target1-amazon-rekognition-project-api.js";
import {
  xAmzTarget2AmazonRekognitionProjectApiSchema,
  type XAmzTarget2AmazonRekognitionProjectApi,
} from "../models/xamz-target2-amazon-rekognition-project-api.js";
import type { Servers } from "../servers.js";

export class Project {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Project
   *
   * @remarks
   * Creates a new Amazon Rekognition project. A project is a group of resources (datasets, model
   * versions) that you use to create and manage a Amazon Rekognition Custom Labels Model or custom
   * adapter. You can specify a feature to create the project with, if no feature is specified then
   * Custom Labels is used by default. For adapters, you can also choose whether or not to have the
   * project auto update by using the AutoUpdate argument. This operation requires permissions to
   * perform the rekognition:CreateProject action.
   *
   * @returns Success
   *
   * @throws {@link Project.CreateProjectError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createProject(
    request: Project.CreateProjectRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Project.CreateProjectError> {
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
            schema: xAmzTargetAmazonRekognitionProjectApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Project.CreateProjectError,
      },
      options,
    );
  }

  /**
   * Delete Project
   *
   * @remarks
   * Deletes a Amazon Rekognition project. To delete a project you must first delete all models or
   * adapters associated with the project. To delete a model or adapter, see DeleteProjectVersion.
   * DeleteProject is an asynchronous operation. To check if the project is deleted, call
   * DescribeProjects. The project is deleted when the project no longer appears in the response. Be
   * aware that deleting a given project will also delete any ProjectPolicies associated with that
   * project. This operation requires permissions to perform the rekognition:DeleteProject action.
   *
   * @returns Success
   *
   * @throws {@link Project.DeleteProjectError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteProject(
    request: Project.DeleteProjectRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Project.DeleteProjectError> {
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
            schema: xAmzTarget1AmazonRekognitionProjectApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Project.DeleteProjectError,
      },
      options,
    );
  }

  /**
   * Describe Projects
   *
   * @remarks
   * Gets information about your Rekognition projects. This operation requires permissions to
   * perform the rekognition:DescribeProjects action.
   *
   * @returns Success
   *
   * @throws {@link Project.DescribeProjectsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeProjects(
    request: Project.DescribeProjectsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Project.DescribeProjectsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeProjects"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AmazonRekognitionProjectApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Project.DescribeProjectsError,
      },
      options,
    );
  }
}

export namespace Project {
  export type CreateProjectRequestParams = {
    xAmzTarget: XAmzTargetAmazonRekognitionProjectApi;
  };

  export class CreateProjectError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateProjectError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DeleteProjectRequestParams = {
    xAmzTarget: XAmzTarget1AmazonRekognitionProjectApi;
  };

  export class DeleteProjectError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteProjectError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DescribeProjectsRequestParams = {
    xAmzTarget: XAmzTarget2AmazonRekognitionProjectApi;
  };

  export class DescribeProjectsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeProjectsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
