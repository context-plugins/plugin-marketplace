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
import {
  apiLimitExceededExceptionSchema,
  type ApiLimitExceededException,
} from "../models/api-limit-exceeded-exception.js";
import { apiType2Schema, type ApiType2 } from "../models/api-type2.js";
import { badRequestExceptionSchema, type BadRequestException } from "../models/bad-request-exception.js";
import {
  concurrentModificationExceptionSchema,
  type ConcurrentModificationException,
} from "../models/concurrent-modification-exception.js";
import {
  createGraphqlApiResponseSchema,
  type CreateGraphqlApiResponse,
} from "../models/create-graphql-api-response.js";
import {
  evaluateMappingTemplateResponseSchema,
  type EvaluateMappingTemplateResponse,
} from "../models/evaluate-mapping-template-response.js";
import {
  getGraphqlApiResponseSchema,
  type GetGraphqlApiResponse,
} from "../models/get-graphql-api-response.js";
import {
  internalFailureExceptionSchema,
  type InternalFailureException,
} from "../models/internal-failure-exception.js";
import {
  limitExceededExceptionSchema,
  type LimitExceededException,
} from "../models/limit-exceeded-exception.js";
import {
  listGraphqlApisResponseSchema,
  type ListGraphqlApisResponse,
} from "../models/list-graphql-apis-response.js";
import { notFoundExceptionSchema, type NotFoundException } from "../models/not-found-exception.js";
import { ownerSchema, type Owner } from "../models/owner.js";
import { unauthorizedExceptionSchema, type UnauthorizedException } from "../models/unauthorized-exception.js";
import {
  updateGraphqlApiResponseSchema,
  type UpdateGraphqlApiResponse,
} from "../models/update-graphql-api-response.js";
import { v1ApisRequestSchema, type V1ApisRequest } from "../models/v1-apis-request.js";
import { v1ApisRequest1Schema, type V1ApisRequest1 } from "../models/v1-apis-request1.js";
import {
  v1DataplaneEvaluatetemplateRequestSchema,
  type V1DataplaneEvaluatetemplateRequest,
} from "../models/v1-dataplane-evaluatetemplate-request.js";
import type { Servers } from "../servers.js";

export class GraphqlApis {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Graphql Api
   *
   * @remarks
   * Creates a GraphqlApi object.
   *
   * @returns Success
   *
   * @throws {@link GraphqlApis.CreateGraphqlApi2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createGraphqlApi2(
    request: GraphqlApis.CreateGraphqlApi2Request = {},
    options?: RequestOptions,
  ): ApiPromise<CreateGraphqlApiResponse, GraphqlApis.CreateGraphqlApi2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/apis"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => v1ApisRequestSchema)) },
      },
      {
        success: { kind: "json", schema: createGraphqlApiResponseSchema },
        errorFactory: GraphqlApis.CreateGraphqlApi2Error,
      },
      options,
    );
  }

  /**
   * Delete Graphql Api
   *
   * @remarks
   * Deletes a GraphqlApi object.
   *
   * @returns Success
   *
   * @throws {@link GraphqlApis.DeleteGraphqlApi2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteGraphqlApi2(
    request: GraphqlApis.DeleteGraphqlApi2Request,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, GraphqlApis.DeleteGraphqlApi2Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "apiId", value: request.apiId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GraphqlApis.DeleteGraphqlApi2Error,
      },
      options,
    );
  }

  /**
   * Evaluate Mapping Template
   *
   * @remarks
   * Evaluates a given template and returns the response. The mapping template can be a request or
   * response template. Request templates take the incoming request after a GraphQL operation is
   * parsed and convert it into a request configuration for the selected data source operation.
   * Response templates interpret responses from the data source and map it to the shape of the
   * GraphQL field output type. Mapping templates are written in the Apache Velocity Template
   * Language (VTL).
   *
   * @returns Success
   *
   * @throws {@link GraphqlApis.EvaluateMappingTemplateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  evaluateMappingTemplate(
    request: GraphqlApis.EvaluateMappingTemplateRequest = {},
    options?: RequestOptions,
  ): ApiPromise<EvaluateMappingTemplateResponse, GraphqlApis.EvaluateMappingTemplateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/dataplane-evaluatetemplate"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1DataplaneEvaluatetemplateRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: evaluateMappingTemplateResponseSchema },
        errorFactory: GraphqlApis.EvaluateMappingTemplateError,
      },
      options,
    );
  }

  /**
   * Get Graphql Api
   *
   * @remarks
   * Retrieves a GraphqlApi object.
   *
   * @returns Success
   *
   * @throws {@link GraphqlApis.GetGraphqlApi2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGraphqlApi2(
    request: GraphqlApis.GetGraphqlApi2Request,
    options?: RequestOptions,
  ): ApiPromise<GetGraphqlApiResponse, GraphqlApis.GetGraphqlApi2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "apiId", value: request.apiId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getGraphqlApiResponseSchema },
        errorFactory: GraphqlApis.GetGraphqlApi2Error,
      },
      options,
    );
  }

  /**
   * List Graphql Apis
   *
   * @remarks
   * Lists your GraphQL APIs.
   *
   * @returns Success
   *
   * @throws {@link GraphqlApis.ListGraphqlApis2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listGraphqlApis2(
    request: GraphqlApis.ListGraphqlApis2Request = {},
    options?: RequestOptions,
  ): ApiPromise<ListGraphqlApisResponse, GraphqlApis.ListGraphqlApis2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/apis"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [
          { name: "nextToken", value: request.nextToken, schema: s.optional(s.string()) },
          { name: "maxResults", value: request.maxResults, schema: s.optional(s.int()) },
          { name: "apiType", value: request.apiType, schema: s.optional(s.lazy(() => apiType2Schema)) },
          { name: "owner", value: request.owner, schema: s.optional(s.lazy(() => ownerSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listGraphqlApisResponseSchema },
        errorFactory: GraphqlApis.ListGraphqlApis2Error,
      },
      options,
    );
  }

  /**
   * Update Graphql Api
   *
   * @remarks
   * Updates a GraphqlApi object.
   *
   * @returns Success
   *
   * @throws {@link GraphqlApis.UpdateGraphqlApi2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateGraphqlApi2(
    request: GraphqlApis.UpdateGraphqlApi2Request,
    options?: RequestOptions,
  ): ApiPromise<UpdateGraphqlApiResponse, GraphqlApis.UpdateGraphqlApi2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "apiId", value: request.apiId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => v1ApisRequest1Schema)) },
      },
      {
        success: { kind: "json", schema: updateGraphqlApiResponseSchema },
        errorFactory: GraphqlApis.UpdateGraphqlApi2Error,
      },
      options,
    );
  }
}

export namespace GraphqlApis {
  export type CreateGraphqlApi2Request = {
    body?: V1ApisRequest;
  };

  export class CreateGraphqlApi2Error extends ApiError {
    declare readonly payload:
      | Declared<"apiLimitExceededException", ApiLimitExceededException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateGraphqlApi2Error> = [
      {
        on: 400,
        kind: "apiLimitExceededException",
        decode: { kind: "json", schema: apiLimitExceededExceptionSchema },
      },
      {
        on: 409,
        kind: "concurrentModificationException",
        decode: { kind: "json", schema: concurrentModificationExceptionSchema },
      },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      {
        on: 429,
        kind: "limitExceededException",
        decode: { kind: "json", schema: limitExceededExceptionSchema },
      },
      {
        on: 401,
        kind: "unauthorizedException",
        decode: { kind: "json", schema: unauthorizedExceptionSchema },
      },
    ];
  }

  export type DeleteGraphqlApi2Request = {
    /** The API ID. */
    apiId: string;
  };

  export class DeleteGraphqlApi2Error extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteGraphqlApi2Error> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      {
        on: 409,
        kind: "concurrentModificationException",
        decode: { kind: "json", schema: concurrentModificationExceptionSchema },
      },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      { on: 404, kind: "notFoundException", decode: { kind: "json", schema: notFoundExceptionSchema } },
      {
        on: 401,
        kind: "unauthorizedException",
        decode: { kind: "json", schema: unauthorizedExceptionSchema },
      },
    ];
  }

  export type EvaluateMappingTemplateRequest = {
    body?: V1DataplaneEvaluatetemplateRequest;
  };

  export class EvaluateMappingTemplateError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Undeclared;

    static readonly errors: ErrorDecoders<EvaluateMappingTemplateError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
    ];
  }

  export type GetGraphqlApi2Request = {
    /** The API ID for the GraphQL API. */
    apiId: string;
  };

  export class GetGraphqlApi2Error extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGraphqlApi2Error> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      { on: 404, kind: "notFoundException", decode: { kind: "json", schema: notFoundExceptionSchema } },
      {
        on: 401,
        kind: "unauthorizedException",
        decode: { kind: "json", schema: unauthorizedExceptionSchema },
      },
    ];
  }

  export type ListGraphqlApis2Request = {
    /**
     * An identifier that was returned from the previous call to this operation, which you can use
     * to return the next set of items in the list.
     */
    nextToken?: string;
    /** The maximum number of results that you want the request to return. */
    maxResults?: number;
    /**
     * The value that indicates whether the GraphQL API is a standard API (GRAPHQL) or merged API
     * (MERGED).
     */
    apiType?: ApiType2;
    /** The account owner of the GraphQL API. */
    owner?: Owner;
  };

  export class ListGraphqlApis2Error extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListGraphqlApis2Error> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      {
        on: 401,
        kind: "unauthorizedException",
        decode: { kind: "json", schema: unauthorizedExceptionSchema },
      },
    ];
  }

  export type UpdateGraphqlApi2Request = {
    /** The API ID. */
    apiId: string;
    body?: V1ApisRequest1;
  };

  export class UpdateGraphqlApi2Error extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateGraphqlApi2Error> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      {
        on: 409,
        kind: "concurrentModificationException",
        decode: { kind: "json", schema: concurrentModificationExceptionSchema },
      },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      { on: 404, kind: "notFoundException", decode: { kind: "json", schema: notFoundExceptionSchema } },
      {
        on: 401,
        kind: "unauthorizedException",
        decode: { kind: "json", schema: unauthorizedExceptionSchema },
      },
    ];
  }
}
