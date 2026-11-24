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
import { associateApiResponseSchema, type AssociateApiResponse } from "../models/associate-api-response.js";
import { badRequestExceptionSchema, type BadRequestException } from "../models/bad-request-exception.js";
import {
  concurrentModificationExceptionSchema,
  type ConcurrentModificationException,
} from "../models/concurrent-modification-exception.js";
import {
  createDomainNameResponseSchema,
  type CreateDomainNameResponse,
} from "../models/create-domain-name-response.js";
import {
  getApiAssociationResponseSchema,
  type GetApiAssociationResponse,
} from "../models/get-api-association-response.js";
import {
  getDomainNameResponseSchema,
  type GetDomainNameResponse,
} from "../models/get-domain-name-response.js";
import {
  internalFailureExceptionSchema,
  type InternalFailureException,
} from "../models/internal-failure-exception.js";
import {
  listDomainNamesResponseSchema,
  type ListDomainNamesResponse,
} from "../models/list-domain-names-response.js";
import { notFoundExceptionSchema, type NotFoundException } from "../models/not-found-exception.js";
import {
  updateDomainNameResponseSchema,
  type UpdateDomainNameResponse,
} from "../models/update-domain-name-response.js";
import {
  v1DomainnamesApiassociationRequestSchema,
  type V1DomainnamesApiassociationRequest,
} from "../models/v1-domainnames-apiassociation-request.js";
import { v1DomainnamesRequestSchema, type V1DomainnamesRequest } from "../models/v1-domainnames-request.js";
import {
  v1DomainnamesRequest1Schema,
  type V1DomainnamesRequest1,
} from "../models/v1-domainnames-request1.js";
import type { Servers } from "../servers.js";

export class DomainNames {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Associate Api
   *
   * @remarks
   * Maps an endpoint to your custom domain.
   *
   * @returns Success
   *
   * @throws {@link DomainNames.AssociateApiError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  associateApi(
    request: DomainNames.AssociateApiRequest,
    options?: RequestOptions,
  ): ApiPromise<AssociateApiResponse, DomainNames.AssociateApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/domainnames/{domainName}/apiassociation"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "domainName", value: request.domainName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1DomainnamesApiassociationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: associateApiResponseSchema },
        errorFactory: DomainNames.AssociateApiError,
      },
      options,
    );
  }

  /**
   * Create Domain Name
   *
   * @remarks
   * Creates a custom DomainName object.
   *
   * @returns Success
   *
   * @throws {@link DomainNames.CreateDomainNameError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createDomainName(
    request: DomainNames.CreateDomainNameRequest = {},
    options?: RequestOptions,
  ): ApiPromise<CreateDomainNameResponse, DomainNames.CreateDomainNameError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/domainnames"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1DomainnamesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createDomainNameResponseSchema },
        errorFactory: DomainNames.CreateDomainNameError,
      },
      options,
    );
  }

  /**
   * Delete Domain Name
   *
   * @remarks
   * Deletes a custom DomainName object.
   *
   * @returns Success
   *
   * @throws {@link DomainNames.DeleteDomainNameError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteDomainName(
    request: DomainNames.DeleteDomainNameRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, DomainNames.DeleteDomainNameError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/domainnames/{domainName}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "domainName", value: request.domainName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: DomainNames.DeleteDomainNameError,
      },
      options,
    );
  }

  /**
   * Disassociate Api
   *
   * @remarks
   * Removes an ApiAssociation object from a custom domain.
   *
   * @returns Success
   *
   * @throws {@link DomainNames.DisassociateApiError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  disassociateApi(
    request: DomainNames.DisassociateApiRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, DomainNames.DisassociateApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/domainnames/{domainName}/apiassociation"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "domainName", value: request.domainName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: DomainNames.DisassociateApiError,
      },
      options,
    );
  }

  /**
   * Get Api Association
   *
   * @remarks
   * Retrieves an ApiAssociation object.
   *
   * @returns Success
   *
   * @throws {@link DomainNames.GetApiAssociationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiAssociation(
    request: DomainNames.GetApiAssociationRequest,
    options?: RequestOptions,
  ): ApiPromise<GetApiAssociationResponse, DomainNames.GetApiAssociationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/domainnames/{domainName}/apiassociation"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "domainName", value: request.domainName, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getApiAssociationResponseSchema },
        errorFactory: DomainNames.GetApiAssociationError,
      },
      options,
    );
  }

  /**
   * Get Domain Name
   *
   * @remarks
   * Retrieves a custom DomainName object.
   *
   * @returns Success
   *
   * @throws {@link DomainNames.GetDomainNameError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDomainName(
    request: DomainNames.GetDomainNameRequest,
    options?: RequestOptions,
  ): ApiPromise<GetDomainNameResponse, DomainNames.GetDomainNameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/domainnames/{domainName}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "domainName", value: request.domainName, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getDomainNameResponseSchema },
        errorFactory: DomainNames.GetDomainNameError,
      },
      options,
    );
  }

  /**
   * List Domain Names
   *
   * @remarks
   * Lists multiple custom domain names.
   *
   * @returns Success
   *
   * @throws {@link DomainNames.ListDomainNamesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDomainNames(
    request: DomainNames.ListDomainNamesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListDomainNamesResponse, DomainNames.ListDomainNamesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/domainnames"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [
          { name: "nextToken", value: request.nextToken, schema: s.optional(s.string()) },
          { name: "maxResults", value: request.maxResults, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listDomainNamesResponseSchema },
        errorFactory: DomainNames.ListDomainNamesError,
      },
      options,
    );
  }

  /**
   * Update Domain Name
   *
   * @remarks
   * Updates a custom DomainName object.
   *
   * @returns Success
   *
   * @throws {@link DomainNames.UpdateDomainNameError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateDomainName(
    request: DomainNames.UpdateDomainNameRequest,
    options?: RequestOptions,
  ): ApiPromise<UpdateDomainNameResponse, DomainNames.UpdateDomainNameError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/domainnames/{domainName}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "domainName", value: request.domainName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1DomainnamesRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: updateDomainNameResponseSchema },
        errorFactory: DomainNames.UpdateDomainNameError,
      },
      options,
    );
  }
}

export namespace DomainNames {
  export type AssociateApiRequest = {
    /** The domain name. */
    domainName: string;
    body?: V1DomainnamesApiassociationRequest;
  };

  export class AssociateApiError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<AssociateApiError> = [
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
    ];
  }

  export type CreateDomainNameRequest = {
    body?: V1DomainnamesRequest;
  };

  export class CreateDomainNameError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateDomainNameError> = [
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

  export type DeleteDomainNameRequest = {
    /** The domain name. */
    domainName: string;
  };

  export class DeleteDomainNameError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteDomainNameError> = [
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
    ];
  }

  export type DisassociateApiRequest = {
    /** The domain name. */
    domainName: string;
  };

  export class DisassociateApiError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DisassociateApiError> = [
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
    ];
  }

  export type GetApiAssociationRequest = {
    /** The domain name. */
    domainName: string;
  };

  export class GetApiAssociationError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiAssociationError> = [
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
    ];
  }

  export type GetDomainNameRequest = {
    /** The domain name. */
    domainName: string;
  };

  export class GetDomainNameError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDomainNameError> = [
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
    ];
  }

  export type ListDomainNamesRequest = {
    /**
     * An identifier that was returned from the previous call to this operation, which you can use
     * to return the next set of items in the list.
     */
    nextToken?: string;
    /** The maximum number of results that you want the request to return. */
    maxResults?: number;
  };

  export class ListDomainNamesError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListDomainNamesError> = [
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

  export type UpdateDomainNameRequest = {
    /** The domain name. */
    domainName: string;
    body?: V1DomainnamesRequest1;
  };

  export class UpdateDomainNameError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateDomainNameError> = [
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
    ];
  }
}
