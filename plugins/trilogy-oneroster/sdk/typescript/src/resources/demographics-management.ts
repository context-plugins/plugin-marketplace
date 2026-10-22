import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { badRequestResponseSchema, type BadRequestResponse } from "../models/bad-request-response.js";
import { demographicsSchema, type Demographics } from "../models/demographics.js";
import { forbiddenResponseSchema, type ForbiddenResponse } from "../models/forbidden-response.js";
import {
  imsOnerosterRosteringV1P2DemographicsRequestSchema,
  type ImsOnerosterRosteringV1P2DemographicsRequest,
} from "../models/ims-oneroster-rostering-v1-p2-demographics-request.js";
import {
  imsOnerosterRosteringV1P2DemographicsResponseSchema,
  type ImsOnerosterRosteringV1P2DemographicsResponse,
} from "../models/ims-oneroster-rostering-v1-p2-demographics-response.js";
import {
  imsOnerosterRosteringV1P2DemographicsResponse1Schema,
  type ImsOnerosterRosteringV1P2DemographicsResponse1,
} from "../models/ims-oneroster-rostering-v1-p2-demographics-response1.js";
import {
  imsOnerosterRosteringV1P2DemographicsResponse2Schema,
  type ImsOnerosterRosteringV1P2DemographicsResponse2,
} from "../models/ims-oneroster-rostering-v1-p2-demographics-response2.js";
import {
  internalServerErrorResponseSchema,
  type InternalServerErrorResponse,
} from "../models/internal-server-error-response.js";
import { notFoundResponseSchema, type NotFoundResponse } from "../models/not-found-response.js";
import { orderBySchema, type OrderBy } from "../models/order-by.js";
import {
  tooManyRequestsResponseSchema,
  type TooManyRequestsResponse,
} from "../models/too-many-requests-response.js";
import {
  unauthorizedRequestResponseSchema,
  type UnauthorizedRequestResponse,
} from "../models/unauthorized-request-response.js";
import {
  unprocessableEntityResponseSchema,
  type UnprocessableEntityResponse,
} from "../models/unprocessable-entity-response.js";
import type { Servers } from "../servers.js";

/**
 * This enables the management of demographics information (each assigned to a specific user). The
 * sourcedIds for the user and the demographics records should be the same.
 */
export class DemographicsManagement {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a Demographic record
   *
   * @remarks
   * Perform a soft delete on a specific Demographic record on the service provider. The operation
   * changes the status of the Demographic record to 'tobedeleted'.
   *
   * @returns Demographics record deleted successfully
   *
   * @throws {@link DemographicsManagement.DeleteDemographicsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteDemographics(
    request: DemographicsManagement.DeleteDemographicsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, DemographicsManagement.DeleteDemographicsError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/ims/oneroster/rostering/v1p2/demographics/{sourcedId}"),
        auth: this.#auth.oAuth2,
        pathParams: [{ name: "sourcedId", value: request.sourcedId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: DemographicsManagement.DeleteDemographicsError,
      },
      options,
    );
  }

  /**
   * Get all Demographic records
   *
   * @remarks
   * To get all Demographic records on the service provider.
   *
   * @returns Demographics collection retrieved successfully
   *
   * @throws {@link DemographicsManagement.GetAllDemographicsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllDemographics(
    request: DemographicsManagement.GetAllDemographicsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ImsOnerosterRosteringV1P2DemographicsResponse,
    DemographicsManagement.GetAllDemographicsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ims/oneroster/rostering/v1p2/demographics/"),
        auth: this.#auth.oAuth2,
        pathParams: [],
        query: [
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 100) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
          { name: "orderBy", value: request.orderBy, schema: s.optional(s.lazy(() => orderBySchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: imsOnerosterRosteringV1P2DemographicsResponseSchema },
        errorFactory: DemographicsManagement.GetAllDemographicsError,
      },
      options,
    );
  }

  /**
   * Get a specific Demographic record
   *
   * @remarks
   * Get a specific Demographic record on the service provider. If the corresponding record cannot
   * be located, the api will return a 404 error code and message 'Demographics record not found.'
   *
   * @returns Demographics record retrieved successfully
   *
   * @throws {@link DemographicsManagement.GetDemographicsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDemographics(
    request: DemographicsManagement.GetDemographicsRequest,
    options?: RequestOptions,
  ): ApiPromise<ImsOnerosterRosteringV1P2DemographicsResponse2, DemographicsManagement.GetDemographicsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ims/oneroster/rostering/v1p2/demographics/{sourcedId}"),
        auth: this.#auth.oAuth2,
        pathParams: [{ name: "sourcedId", value: request.sourcedId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: imsOnerosterRosteringV1P2DemographicsResponse2Schema },
        errorFactory: DemographicsManagement.GetDemographicsError,
      },
      options,
    );
  }

  /**
   * Create a new Demographic record
   *
   * @remarks
   * To create a new Demographic record. The responding system must return the set of sourcedIds
   * that have been allocated to the newly created demographic record.
   *
   * @returns Demographics record created successfully
   *
   * @throws {@link DemographicsManagement.PostDemographicsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postDemographics(
    request: DemographicsManagement.PostDemographicsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ImsOnerosterRosteringV1P2DemographicsResponse1,
    DemographicsManagement.PostDemographicsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/ims/oneroster/rostering/v1p2/demographics/"),
        auth: this.#auth.oAuth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => imsOnerosterRosteringV1P2DemographicsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: imsOnerosterRosteringV1P2DemographicsResponse1Schema },
        errorFactory: DemographicsManagement.PostDemographicsError,
      },
      options,
    );
  }

  /**
   * Update a Demographic record
   *
   * @remarks
   * To update an existing Demographic record. The sourcedId for the record to be updated is
   * supplied by the requesting system.
   *
   * @returns Demographics record updated successfully
   *
   * @throws {@link DemographicsManagement.PutDemographicsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putDemographics(
    request: DemographicsManagement.PutDemographicsRequest,
    options?: RequestOptions,
  ): ApiPromise<Demographics, DemographicsManagement.PutDemographicsError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/ims/oneroster/rostering/v1p2/demographics/{sourcedId}"),
        auth: this.#auth.oAuth2,
        pathParams: [{ name: "sourcedId", value: request.sourcedId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => imsOnerosterRosteringV1P2DemographicsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: demographicsSchema },
        errorFactory: DemographicsManagement.PutDemographicsError,
      },
      options,
    );
  }
}

export namespace DemographicsManagement {
  export type DeleteDemographicsRequest = {
    /** The unique identifier for the Demographic record to delete */
    sourcedId: string;
  };

  export class DeleteDemographicsError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteDemographicsError> = [
      { on: 400, kind: "badRequestResponse", decode: { kind: "json", schema: badRequestResponseSchema } },
      {
        on: 401,
        kind: "unauthorizedRequestResponse",
        decode: { kind: "json", schema: unauthorizedRequestResponseSchema },
      },
      { on: 403, kind: "forbiddenResponse", decode: { kind: "json", schema: forbiddenResponseSchema } },
      { on: 404, kind: "notFoundResponse", decode: { kind: "json", schema: notFoundResponseSchema } },
      {
        on: 422,
        kind: "unprocessableEntityResponse",
        decode: { kind: "json", schema: unprocessableEntityResponseSchema },
      },
      {
        on: 429,
        kind: "tooManyRequestsResponse",
        decode: { kind: "json", schema: tooManyRequestsResponseSchema },
      },
      {
        on: 500,
        kind: "internalServerErrorResponse",
        decode: { kind: "json", schema: internalServerErrorResponseSchema },
      },
    ];
  }

  export type GetAllDemographicsRequest = {
    /** Comma-separated list of fields to include in the response */
    fields?: string;
    /** The maximum number of items to return in the paginated response @default 100 */
    limit?: number;
    /** The number of items to skip in the paginated response @default 0 */
    offset?: number;
    /** The field to sort the response by */
    sort?: string;
    /** The order to sort the response by */
    orderBy?: OrderBy;
    /** The filter to apply to the response */
    filter?: string;
    /** The search query to apply to the response */
    search?: string;
  };

  export class GetAllDemographicsError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAllDemographicsError> = [
      { on: 400, kind: "badRequestResponse", decode: { kind: "json", schema: badRequestResponseSchema } },
      {
        on: 401,
        kind: "unauthorizedRequestResponse",
        decode: { kind: "json", schema: unauthorizedRequestResponseSchema },
      },
      { on: 403, kind: "forbiddenResponse", decode: { kind: "json", schema: forbiddenResponseSchema } },
      { on: 404, kind: "notFoundResponse", decode: { kind: "json", schema: notFoundResponseSchema } },
      {
        on: 422,
        kind: "unprocessableEntityResponse",
        decode: { kind: "json", schema: unprocessableEntityResponseSchema },
      },
      {
        on: 429,
        kind: "tooManyRequestsResponse",
        decode: { kind: "json", schema: tooManyRequestsResponseSchema },
      },
      {
        on: 500,
        kind: "internalServerErrorResponse",
        decode: { kind: "json", schema: internalServerErrorResponseSchema },
      },
    ];
  }

  export type GetDemographicsRequest = {
    /** The unique identifier for the demographics record */
    sourcedId: string;
  };

  export class GetDemographicsError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDemographicsError> = [
      { on: 400, kind: "badRequestResponse", decode: { kind: "json", schema: badRequestResponseSchema } },
      {
        on: 401,
        kind: "unauthorizedRequestResponse",
        decode: { kind: "json", schema: unauthorizedRequestResponseSchema },
      },
      { on: 403, kind: "forbiddenResponse", decode: { kind: "json", schema: forbiddenResponseSchema } },
      { on: 404, kind: "notFoundResponse", decode: { kind: "json", schema: notFoundResponseSchema } },
      {
        on: 422,
        kind: "unprocessableEntityResponse",
        decode: { kind: "json", schema: unprocessableEntityResponseSchema },
      },
      {
        on: 429,
        kind: "tooManyRequestsResponse",
        decode: { kind: "json", schema: tooManyRequestsResponseSchema },
      },
      {
        on: 500,
        kind: "internalServerErrorResponse",
        decode: { kind: "json", schema: internalServerErrorResponseSchema },
      },
    ];
  }

  export type PostDemographicsRequest = {
    body?: ImsOnerosterRosteringV1P2DemographicsRequest;
  };

  export class PostDemographicsError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostDemographicsError> = [
      { on: 400, kind: "badRequestResponse", decode: { kind: "json", schema: badRequestResponseSchema } },
      {
        on: 401,
        kind: "unauthorizedRequestResponse",
        decode: { kind: "json", schema: unauthorizedRequestResponseSchema },
      },
      { on: 403, kind: "forbiddenResponse", decode: { kind: "json", schema: forbiddenResponseSchema } },
      { on: 404, kind: "notFoundResponse", decode: { kind: "json", schema: notFoundResponseSchema } },
      {
        on: 422,
        kind: "unprocessableEntityResponse",
        decode: { kind: "json", schema: unprocessableEntityResponseSchema },
      },
      {
        on: 429,
        kind: "tooManyRequestsResponse",
        decode: { kind: "json", schema: tooManyRequestsResponseSchema },
      },
      {
        on: 500,
        kind: "internalServerErrorResponse",
        decode: { kind: "json", schema: internalServerErrorResponseSchema },
      },
    ];
  }

  export type PutDemographicsRequest = {
    /** The unique identifier for the demographics record to update */
    sourcedId: string;
    body?: ImsOnerosterRosteringV1P2DemographicsRequest;
  };

  export class PutDemographicsError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PutDemographicsError> = [
      { on: 400, kind: "badRequestResponse", decode: { kind: "json", schema: badRequestResponseSchema } },
      {
        on: 401,
        kind: "unauthorizedRequestResponse",
        decode: { kind: "json", schema: unauthorizedRequestResponseSchema },
      },
      { on: 403, kind: "forbiddenResponse", decode: { kind: "json", schema: forbiddenResponseSchema } },
      { on: 404, kind: "notFoundResponse", decode: { kind: "json", schema: notFoundResponseSchema } },
      {
        on: 422,
        kind: "unprocessableEntityResponse",
        decode: { kind: "json", schema: unprocessableEntityResponseSchema },
      },
      {
        on: 429,
        kind: "tooManyRequestsResponse",
        decode: { kind: "json", schema: tooManyRequestsResponseSchema },
      },
      {
        on: 500,
        kind: "internalServerErrorResponse",
        decode: { kind: "json", schema: internalServerErrorResponseSchema },
      },
    ];
  }
}
