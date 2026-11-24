import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  associateSourceGraphqlApiResponseSchema,
  type AssociateSourceGraphqlApiResponse,
} from "../models/associate-source-graphql-api-response.js";
import { badRequestExceptionSchema, type BadRequestException } from "../models/bad-request-exception.js";
import {
  concurrentModificationExceptionSchema,
  type ConcurrentModificationException,
} from "../models/concurrent-modification-exception.js";
import {
  disassociateSourceGraphqlApiResponseSchema,
  type DisassociateSourceGraphqlApiResponse,
} from "../models/disassociate-source-graphql-api-response.js";
import {
  getSourceApiAssociationResponseSchema,
  type GetSourceApiAssociationResponse,
} from "../models/get-source-api-association-response.js";
import {
  internalFailureExceptionSchema,
  type InternalFailureException,
} from "../models/internal-failure-exception.js";
import {
  limitExceededExceptionSchema,
  type LimitExceededException,
} from "../models/limit-exceeded-exception.js";
import {
  listSourceApiAssociationsResponseSchema,
  type ListSourceApiAssociationsResponse,
} from "../models/list-source-api-associations-response.js";
import { notFoundExceptionSchema, type NotFoundException } from "../models/not-found-exception.js";
import { unauthorizedExceptionSchema, type UnauthorizedException } from "../models/unauthorized-exception.js";
import {
  updateSourceApiAssociationResponseSchema,
  type UpdateSourceApiAssociationResponse,
} from "../models/update-source-api-association-response.js";
import {
  v1MergedApisSourceApiAssociationsRequestSchema,
  type V1MergedApisSourceApiAssociationsRequest,
} from "../models/v1-merged-apis-source-api-associations-request.js";
import {
  v1MergedApisSourceApiAssociationsRequest1Schema,
  type V1MergedApisSourceApiAssociationsRequest1,
} from "../models/v1-merged-apis-source-api-associations-request1.js";
import type { Servers } from "../servers.js";

export class Sourceapiassociations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Associate Source Graphql Api
   *
   * @remarks
   * Creates an association between a Merged API and source API using the Merged API's identifier.
   *
   * @returns Success
   *
   * @throws {@link Sourceapiassociations.AssociateSourceGraphqlApiError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  associateSourceGraphqlApi(
    request: Sourceapiassociations.AssociateSourceGraphqlApiRequest,
    options?: RequestOptions,
  ): ApiPromise<AssociateSourceGraphqlApiResponse, Sourceapiassociations.AssociateSourceGraphqlApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "mergedApiIdentifier", value: request.mergedApiIdentifier, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1MergedApisSourceApiAssociationsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: associateSourceGraphqlApiResponseSchema },
        errorFactory: Sourceapiassociations.AssociateSourceGraphqlApiError,
      },
      options,
    );
  }

  /**
   * Disassociate Source Graphql Api
   *
   * @remarks
   * Deletes an association between a Merged API and source API using the Merged API's identifier
   * and the association ID.
   *
   * @returns Success
   *
   * @throws {@link Sourceapiassociations.DisassociateSourceGraphqlApiError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  disassociateSourceGraphqlApi(
    request: Sourceapiassociations.DisassociateSourceGraphqlApiRequest,
    options?: RequestOptions,
  ): ApiPromise<
    DisassociateSourceGraphqlApiResponse,
    Sourceapiassociations.DisassociateSourceGraphqlApiError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "mergedApiIdentifier", value: request.mergedApiIdentifier, schema: s.string() },
          { name: "associationId", value: request.associationId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: disassociateSourceGraphqlApiResponseSchema },
        errorFactory: Sourceapiassociations.DisassociateSourceGraphqlApiError,
      },
      options,
    );
  }

  /**
   * Get Source Api Association
   *
   * @remarks
   * Retrieves a SourceApiAssociation object.
   *
   * @returns Success
   *
   * @throws {@link Sourceapiassociations.GetSourceApiAssociationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSourceApiAssociation(
    request: Sourceapiassociations.GetSourceApiAssociationRequest,
    options?: RequestOptions,
  ): ApiPromise<GetSourceApiAssociationResponse, Sourceapiassociations.GetSourceApiAssociationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "mergedApiIdentifier", value: request.mergedApiIdentifier, schema: s.string() },
          { name: "associationId", value: request.associationId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getSourceApiAssociationResponseSchema },
        errorFactory: Sourceapiassociations.GetSourceApiAssociationError,
      },
      options,
    );
  }

  /**
   * List Source Api Associations
   *
   * @remarks
   * Lists the SourceApiAssociationSummary data.
   *
   * @returns Success
   *
   * @throws {@link Sourceapiassociations.ListSourceApiAssociationsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSourceApiAssociations(
    request: Sourceapiassociations.ListSourceApiAssociationsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSourceApiAssociationsResponse, Sourceapiassociations.ListSourceApiAssociationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}/sourceApiAssociations"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "apiId", value: request.apiId, schema: s.string() }],
        query: [
          { name: "nextToken", value: request.nextToken, schema: s.optional(s.string()) },
          { name: "maxResults", value: request.maxResults, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listSourceApiAssociationsResponseSchema },
        errorFactory: Sourceapiassociations.ListSourceApiAssociationsError,
      },
      options,
    );
  }

  /**
   * Update Source Api Association
   *
   * @remarks
   * Updates some of the configuration choices of a particular source API association.
   *
   * @returns Success
   *
   * @throws {@link Sourceapiassociations.UpdateSourceApiAssociationError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSourceApiAssociation(
    request: Sourceapiassociations.UpdateSourceApiAssociationRequest,
    options?: RequestOptions,
  ): ApiPromise<UpdateSourceApiAssociationResponse, Sourceapiassociations.UpdateSourceApiAssociationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "associationId", value: request.associationId, schema: s.string() },
          { name: "mergedApiIdentifier", value: request.mergedApiIdentifier, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1MergedApisSourceApiAssociationsRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: updateSourceApiAssociationResponseSchema },
        errorFactory: Sourceapiassociations.UpdateSourceApiAssociationError,
      },
      options,
    );
  }
}

export namespace Sourceapiassociations {
  export type AssociateSourceGraphqlApiRequest = {
    /**
     * The identifier of the AppSync Merged API. This is generated by the AppSync service. In most
     * cases, Merged APIs (especially in your account) only require the API ID value or ARN of the
     * merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require
     * the full resource ARN of the merged API.
     */
    mergedApiIdentifier: string;
    body?: V1MergedApisSourceApiAssociationsRequest;
  };

  export class AssociateSourceGraphqlApiError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<AssociateSourceGraphqlApiError> = [
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
      {
        on: 429,
        kind: "limitExceededException",
        decode: { kind: "json", schema: limitExceededExceptionSchema },
      },
      { on: 404, kind: "notFoundException", decode: { kind: "json", schema: notFoundExceptionSchema } },
      {
        on: 401,
        kind: "unauthorizedException",
        decode: { kind: "json", schema: unauthorizedExceptionSchema },
      },
    ];
  }

  export type DisassociateSourceGraphqlApiRequest = {
    /**
     * The identifier of the AppSync Merged API. This is generated by the AppSync service. In most
     * cases, Merged APIs (especially in your account) only require the API ID value or ARN of the
     * merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require
     * the full resource ARN of the merged API.
     */
    mergedApiIdentifier: string;
    /** The ID generated by the AppSync service for the source API association. */
    associationId: string;
  };

  export class DisassociateSourceGraphqlApiError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DisassociateSourceGraphqlApiError> = [
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

  export type GetSourceApiAssociationRequest = {
    /**
     * The identifier of the AppSync Merged API. This is generated by the AppSync service. In most
     * cases, Merged APIs (especially in your account) only require the API ID value or ARN of the
     * merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require
     * the full resource ARN of the merged API.
     */
    mergedApiIdentifier: string;
    /** The ID generated by the AppSync service for the source API association. */
    associationId: string;
  };

  export class GetSourceApiAssociationError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSourceApiAssociationError> = [
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

  export type ListSourceApiAssociationsRequest = {
    /** The API ID. */
    apiId: string;
    /**
     * An identifier that was returned from the previous call to this operation, which you can use
     * to return the next set of items in the list.
     */
    nextToken?: string;
    /** The maximum number of results that you want the request to return. */
    maxResults?: number;
  };

  export class ListSourceApiAssociationsError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListSourceApiAssociationsError> = [
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

  export type UpdateSourceApiAssociationRequest = {
    /** The ID generated by the AppSync service for the source API association. */
    associationId: string;
    /**
     * The identifier of the AppSync Merged API. This is generated by the AppSync service. In most
     * cases, Merged APIs (especially in your account) only require the API ID value or ARN of the
     * merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require
     * the full resource ARN of the merged API.
     */
    mergedApiIdentifier: string;
    body?: V1MergedApisSourceApiAssociationsRequest1;
  };

  export class UpdateSourceApiAssociationError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateSourceApiAssociationError> = [
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
