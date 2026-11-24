import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonRekognitionProjectPolicyApiSchema,
  type XAmzTargetAmazonRekognitionProjectPolicyApi,
} from "../models/xamz-target-amazon-rekognition-project-policy-api.js";
import {
  xAmzTarget1AmazonRekognitionProjectPolicyApiSchema,
  type XAmzTarget1AmazonRekognitionProjectPolicyApi,
} from "../models/xamz-target1-amazon-rekognition-project-policy-api.js";
import {
  xAmzTarget2AmazonRekognitionProjectPolicyApiSchema,
  type XAmzTarget2AmazonRekognitionProjectPolicyApi,
} from "../models/xamz-target2-amazon-rekognition-project-policy-api.js";
import type { Servers } from "../servers.js";

export class ProjectPolicyApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete Project Policy
   *
   * @remarks
   * This operation applies only to Amazon Rekognition Custom Labels. Deletes an existing project
   * policy. To get a list of project policies attached to a project, call ListProjectPolicies. To
   * attach a project policy to a project, call PutProjectPolicy. This operation requires
   * permissions to perform the rekognition:DeleteProjectPolicy action.
   *
   * @returns Success
   *
   * @throws {@link ProjectPolicyApi.DeleteProjectPolicyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteProjectPolicy(
    request: ProjectPolicyApi.DeleteProjectPolicyRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ProjectPolicyApi.DeleteProjectPolicyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteProjectPolicy"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonRekognitionProjectPolicyApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ProjectPolicyApi.DeleteProjectPolicyError,
      },
      options,
    );
  }

  /**
   * List Project Policies
   *
   * @remarks
   * This operation applies only to Amazon Rekognition Custom Labels. Gets a list of the project
   * policies attached to a project. To attach a project policy to a project, call PutProjectPolicy.
   * To remove a project policy from a project, call DeleteProjectPolicy. This operation requires
   * permissions to perform the rekognition:ListProjectPolicies action.
   *
   * @returns Success
   *
   * @throws {@link ProjectPolicyApi.ListProjectPoliciesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listProjectPolicies(
    request: ProjectPolicyApi.ListProjectPoliciesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ProjectPolicyApi.ListProjectPoliciesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListProjectPolicies"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonRekognitionProjectPolicyApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ProjectPolicyApi.ListProjectPoliciesError,
      },
      options,
    );
  }

  /**
   * Put Project Policy
   *
   * @remarks
   * This operation applies only to Amazon Rekognition Custom Labels. Attaches a project policy to a
   * Amazon Rekognition Custom Labels project in a trusting AWS account. A project policy specifies
   * that a trusted AWS account can copy a model version from a trusting AWS account to a project in
   * the trusted AWS account. To copy a model version you use the CopyProjectVersion operation. Only
   * applies to Custom Labels projects. For more information about the format of a project policy
   * document, see Attaching a project policy (SDK) in the Amazon Rekognition Custom Labels
   * Developer Guide. The response from PutProjectPolicy is a revision ID for the project policy.
   * You can attach multiple project policies to a project. You can also update an existing project
   * policy by specifying the policy revision ID of the existing policy. To remove a project policy
   * from a project, call DeleteProjectPolicy. To get a list of project policies attached to a
   * project, call ListProjectPolicies. You copy a model version by calling CopyProjectVersion. This
   * operation requires permissions to perform the rekognition:PutProjectPolicy action.
   *
   * @returns Success
   *
   * @throws {@link ProjectPolicyApi.PutProjectPolicyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  putProjectPolicy(
    request: ProjectPolicyApi.PutProjectPolicyRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ProjectPolicyApi.PutProjectPolicyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#PutProjectPolicy"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AmazonRekognitionProjectPolicyApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ProjectPolicyApi.PutProjectPolicyError,
      },
      options,
    );
  }
}

export namespace ProjectPolicyApi {
  export type DeleteProjectPolicyRequestParams = {
    xAmzTarget: XAmzTargetAmazonRekognitionProjectPolicyApi;
  };

  export class DeleteProjectPolicyError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteProjectPolicyError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ListProjectPoliciesRequestParams = {
    xAmzTarget: XAmzTarget1AmazonRekognitionProjectPolicyApi;
  };

  export class ListProjectPoliciesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListProjectPoliciesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type PutProjectPolicyRequestParams = {
    xAmzTarget: XAmzTarget2AmazonRekognitionProjectPolicyApi;
  };

  export class PutProjectPolicyError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PutProjectPolicyError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
