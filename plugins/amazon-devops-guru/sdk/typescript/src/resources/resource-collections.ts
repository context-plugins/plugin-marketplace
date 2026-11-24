import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  accessDeniedExceptionSchema,
  type AccessDeniedException,
} from "../models/access-denied-exception.js";
import { conflictExceptionSchema, type ConflictException } from "../models/conflict-exception.js";
import {
  getResourceCollectionResponseSchema,
  type GetResourceCollectionResponse,
} from "../models/get-resource-collection-response.js";
import {
  internalServerExceptionSchema,
  type InternalServerException,
} from "../models/internal-server-exception.js";
import {
  resourceCollectionTypeSchema,
  type ResourceCollectionType,
} from "../models/resource-collection-type.js";
import {
  resourceCollectionsRequestSchema,
  type ResourceCollectionsRequest,
} from "../models/resource-collections-request.js";
import {
  resourceNotFoundExceptionSchema,
  type ResourceNotFoundException,
} from "../models/resource-not-found-exception.js";
import { throttlingExceptionSchema, type ThrottlingException } from "../models/throttling-exception.js";
import { validationExceptionSchema, type ValidationException } from "../models/validation-exception.js";
import type { Servers } from "../servers.js";

export class ResourceCollections {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Resource Collection
   *
   * @remarks
   * Returns lists Amazon Web Services resources that are of the specified resource collection type.
   * The two types of Amazon Web Services resource collections supported are Amazon Web Services
   * CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web
   * Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that
   * are defined in the stacks or that are tagged using the same tag key. You can specify up to 500
   * Amazon Web Services CloudFormation stacks.
   *
   * @returns Success
   *
   * @throws {@link ResourceCollections.GetResourceCollectionError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonDevOpsGuruError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getResourceCollection(
    request: ResourceCollections.GetResourceCollectionRequest,
    options?: RequestOptions,
  ): ApiPromise<GetResourceCollectionResponse, ResourceCollections.GetResourceCollectionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/resource-collections/{ResourceCollectionType}"),
        auth: this.#auth.sigv4,
        pathParams: [
          {
            name: "ResourceCollectionType",
            value: request.resourceCollectionType,
            schema: resourceCollectionTypeSchema,
          },
        ],
        query: [{ name: "NextToken", value: request.nextToken, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getResourceCollectionResponseSchema },
        errorFactory: ResourceCollections.GetResourceCollectionError,
      },
      options,
    );
  }

  /**
   * Update Resource Collection
   *
   * @remarks
   * Updates the collection of resources that DevOps Guru analyzes. The two types of Amazon Web
   * Services resource collections supported are Amazon Web Services CloudFormation stacks and
   * Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be
   * configured to analyze the Amazon Web Services resources that are defined in the stacks or that
   * are tagged using the same tag key. You can specify up to 500 Amazon Web Services CloudFormation
   * stacks. This method also creates the IAM role required for you to use DevOps Guru.
   *
   * @returns Success
   *
   * @throws {@link ResourceCollections.UpdateResourceCollectionError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonDevOpsGuruError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateResourceCollection(
    request: ResourceCollections.UpdateResourceCollectionRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ResourceCollections.UpdateResourceCollectionError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/resource-collections"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => resourceCollectionsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ResourceCollections.UpdateResourceCollectionError,
      },
      options,
    );
  }
}

export namespace ResourceCollections {
  export type GetResourceCollectionRequest = {
    /**
     * The type of Amazon Web Services resource collections to return. The one valid value is
     * CLOUD_FORMATION for Amazon Web Services CloudFormation stacks.
     */
    resourceCollectionType: ResourceCollectionType;
    /**
     * The pagination token to use to retrieve the next page of results for this operation. If this
     * value is null, it retrieves the first page.
     */
    nextToken?: string;
  };

  export class GetResourceCollectionError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetResourceCollectionError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type UpdateResourceCollectionRequest = {
    body?: ResourceCollectionsRequest;
  };

  export class UpdateResourceCollectionError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateResourceCollectionError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }
}
