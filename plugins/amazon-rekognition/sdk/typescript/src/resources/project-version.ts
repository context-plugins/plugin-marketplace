import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonRekognitionProjectVersionApiSchema,
  type XAmzTargetAmazonRekognitionProjectVersionApi,
} from "../models/xamz-target-amazon-rekognition-project-version-api.js";
import {
  xAmzTarget1AmazonRekognitionProjectVersionApiSchema,
  type XAmzTarget1AmazonRekognitionProjectVersionApi,
} from "../models/xamz-target1-amazon-rekognition-project-version-api.js";
import {
  xAmzTarget2AmazonRekognitionProjectVersionApiSchema,
  type XAmzTarget2AmazonRekognitionProjectVersionApi,
} from "../models/xamz-target2-amazon-rekognition-project-version-api.js";
import {
  xAmzTarget3AmazonRekognitionProjectVersionApiSchema,
  type XAmzTarget3AmazonRekognitionProjectVersionApi,
} from "../models/xamz-target3-amazon-rekognition-project-version-api.js";
import {
  xAmzTarget4AmazonRekognitionProjectVersionApiSchema,
  type XAmzTarget4AmazonRekognitionProjectVersionApi,
} from "../models/xamz-target4-amazon-rekognition-project-version-api.js";
import type { Servers } from "../servers.js";

export class ProjectVersion {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Project Version
   *
   * @remarks
   * Creates a new version of Amazon Rekognition project (like a Custom Labels model or a custom
   * adapter) and begins training. Models and adapters are managed as part of a Rekognition project.
   * The response from CreateProjectVersion is an Amazon Resource Name (ARN) for the project
   * version. The FeatureConfig operation argument allows you to configure specific model or adapter
   * settings. You can provide a description to the project version by using the VersionDescription
   * argment. Training can take a while to complete. You can get the current status by calling
   * DescribeProjectVersions. Training completed successfully if the value of the Status field is
   * TRAINING_COMPLETED. Once training has successfully completed, call DescribeProjectVersions to
   * get the training results and evaluate the model. This operation requires permissions to perform
   * the rekognition:CreateProjectVersion action. The following applies only to projects with Amazon
   * Rekognition Custom Labels as the chosen feature: You can train a model in a project that
   * doesn't have associated datasets by specifying manifest files in the TrainingData and
   * TestingData fields. If you open the console after training a model with manifest files, A
   *
   * @returns Success
   *
   * @throws {@link ProjectVersion.CreateProjectVersionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createProjectVersion(
    request: ProjectVersion.CreateProjectVersionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ProjectVersion.CreateProjectVersionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateProjectVersion"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonRekognitionProjectVersionApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ProjectVersion.CreateProjectVersionError,
      },
      options,
    );
  }

  /**
   * Delete Project Version
   *
   * @remarks
   * Deletes a Rekognition project model or project version, like a Amazon Rekognition Custom Labels
   * model or a custom adapter. You can't delete a project version if it is running or if it is
   * training. To check the status of a project version, use the Status field returned from
   * DescribeProjectVersions. To stop a project version call StopProjectVersion. If the project
   * version is training, wait until it finishes. This operation requires permissions to perform the
   * rekognition:DeleteProjectVersion action.
   *
   * @returns Success
   *
   * @throws {@link ProjectVersion.DeleteProjectVersionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteProjectVersion(
    request: ProjectVersion.DeleteProjectVersionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ProjectVersion.DeleteProjectVersionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteProjectVersion"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonRekognitionProjectVersionApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ProjectVersion.DeleteProjectVersionError,
      },
      options,
    );
  }

  /**
   * Describe Project Versions
   *
   * @remarks
   * Lists and describes the versions of an Amazon Rekognition project. You can specify up to 10
   * model or adapter versions in ProjectVersionArns. If you don't specify a value, descriptions for
   * all model/adapter versions in the project are returned. This operation requires permissions to
   * perform the rekognition:DescribeProjectVersions action.
   *
   * @returns Success
   *
   * @throws {@link ProjectVersion.DescribeProjectVersionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeProjectVersions(
    request: ProjectVersion.DescribeProjectVersionsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ProjectVersion.DescribeProjectVersionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeProjectVersions"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AmazonRekognitionProjectVersionApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ProjectVersion.DescribeProjectVersionsError,
      },
      options,
    );
  }

  /**
   * Start Project Version
   *
   * @remarks
   * This operation applies only to Amazon Rekognition Custom Labels. Starts the running of the
   * version of a model. Starting a model takes a while to complete. To check the current state of
   * the model, use DescribeProjectVersions. Once the model is running, you can detect custom labels
   * in new images by calling DetectCustomLabels. You are charged for the amount of time that the
   * model is running. To stop a running model, call StopProjectVersion. This operation requires
   * permissions to perform the rekognition:StartProjectVersion action.
   *
   * @returns Success
   *
   * @throws {@link ProjectVersion.StartProjectVersionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startProjectVersion(
    request: ProjectVersion.StartProjectVersionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ProjectVersion.StartProjectVersionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartProjectVersion"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget3AmazonRekognitionProjectVersionApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ProjectVersion.StartProjectVersionError,
      },
      options,
    );
  }

  /**
   * Stop Project Version
   *
   * @remarks
   * This operation applies only to Amazon Rekognition Custom Labels. Stops a running model. The
   * operation might take a while to complete. To check the current status, call
   * DescribeProjectVersions. Only applies to Custom Labels projects. This operation requires
   * permissions to perform the rekognition:StopProjectVersion action.
   *
   * @returns Success
   *
   * @throws {@link ProjectVersion.StopProjectVersionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  stopProjectVersion(
    request: ProjectVersion.StopProjectVersionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ProjectVersion.StopProjectVersionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StopProjectVersion"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget4AmazonRekognitionProjectVersionApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ProjectVersion.StopProjectVersionError,
      },
      options,
    );
  }
}

export namespace ProjectVersion {
  export type CreateProjectVersionRequestParams = {
    xAmzTarget: XAmzTargetAmazonRekognitionProjectVersionApi;
  };

  export class CreateProjectVersionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateProjectVersionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DeleteProjectVersionRequestParams = {
    xAmzTarget: XAmzTarget1AmazonRekognitionProjectVersionApi;
  };

  export class DeleteProjectVersionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteProjectVersionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DescribeProjectVersionsRequestParams = {
    xAmzTarget: XAmzTarget2AmazonRekognitionProjectVersionApi;
  };

  export class DescribeProjectVersionsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeProjectVersionsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type StartProjectVersionRequestParams = {
    xAmzTarget: XAmzTarget3AmazonRekognitionProjectVersionApi;
  };

  export class StartProjectVersionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<StartProjectVersionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type StopProjectVersionRequestParams = {
    xAmzTarget: XAmzTarget4AmazonRekognitionProjectVersionApi;
  };

  export class StopProjectVersionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<StopProjectVersionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
