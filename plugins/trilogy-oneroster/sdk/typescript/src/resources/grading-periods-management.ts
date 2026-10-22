import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { badRequestResponseSchema, type BadRequestResponse } from "../models/bad-request-response.js";
import { forbiddenResponseSchema, type ForbiddenResponse } from "../models/forbidden-response.js";
import {
  imsOnerosterRosteringV1P2GradingPeriodsRequestSchema,
  type ImsOnerosterRosteringV1P2GradingPeriodsRequest,
} from "../models/ims-oneroster-rostering-v1-p2-grading-periods-request.js";
import {
  imsOnerosterRosteringV1P2GradingPeriodsResponseSchema,
  type ImsOnerosterRosteringV1P2GradingPeriodsResponse,
} from "../models/ims-oneroster-rostering-v1-p2-grading-periods-response.js";
import {
  imsOnerosterRosteringV1P2GradingPeriodsResponse1Schema,
  type ImsOnerosterRosteringV1P2GradingPeriodsResponse1,
} from "../models/ims-oneroster-rostering-v1-p2-grading-periods-response1.js";
import {
  imsOnerosterRosteringV1P2GradingPeriodsResponse2Schema,
  type ImsOnerosterRosteringV1P2GradingPeriodsResponse2,
} from "../models/ims-oneroster-rostering-v1-p2-grading-periods-response2.js";
import {
  imsOnerosterRosteringV1P2TermsGradingPeriodsRequestSchema,
  type ImsOnerosterRosteringV1P2TermsGradingPeriodsRequest,
} from "../models/ims-oneroster-rostering-v1-p2-terms-grading-periods-request.js";
import {
  imsOnerosterRosteringV1P2TermsGradingPeriodsResponseSchema,
  type ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse,
} from "../models/ims-oneroster-rostering-v1-p2-terms-grading-periods-response.js";
import {
  imsOnerosterRosteringV1P2TermsGradingPeriodsResponse1Schema,
  type ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse1,
} from "../models/ims-oneroster-rostering-v1-p2-terms-grading-periods-response1.js";
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
 * This enables the management of grading periods i.e. specific academic sessions.
 */
export class GradingPeriodsManagement {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new Grading Period
   *
   * @remarks
   * To create a new Grading Period. The responding system must return the set of sourcedIds that
   * have been allocated to the newly created gradingPeriod record.
   *
   * @returns Grading period created successfully
   *
   * @throws {@link GradingPeriodsManagement.CreateGradingPeriodError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createGradingPeriod(
    request: GradingPeriodsManagement.CreateGradingPeriodRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ImsOnerosterRosteringV1P2GradingPeriodsResponse1,
    GradingPeriodsManagement.CreateGradingPeriodError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/ims/oneroster/rostering/v1p2/gradingPeriods/"),
        auth: this.#auth.oAuth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => imsOnerosterRosteringV1P2GradingPeriodsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: imsOnerosterRosteringV1P2GradingPeriodsResponse1Schema },
        errorFactory: GradingPeriodsManagement.CreateGradingPeriodError,
      },
      options,
    );
  }

  /**
   * Create a new Grading Period for a Term
   *
   * @remarks
   * To create a new Grading Period for a Term. A Grading Period is a type of Academic Session. The
   * responding system must return the set of sourcedIds that have been allocated to the newly
   * created academicSession record.
   *
   * @returns Grading period successfully created
   *
   * @throws {@link GradingPeriodsManagement.CreateGradingPeriodForTermError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createGradingPeriodForTerm(
    request: GradingPeriodsManagement.CreateGradingPeriodForTermRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse1,
    GradingPeriodsManagement.CreateGradingPeriodForTermError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/ims/oneroster/rostering/v1p2/terms/{termSourcedId}/gradingPeriods",
        ),
        auth: this.#auth.oAuth2,
        pathParams: [{ name: "termSourcedId", value: request.termSourcedId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: imsOnerosterRosteringV1P2TermsGradingPeriodsRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: imsOnerosterRosteringV1P2TermsGradingPeriodsResponse1Schema },
        errorFactory: GradingPeriodsManagement.CreateGradingPeriodForTermError,
      },
      options,
    );
  }

  /**
   * Delete a Grading Period
   *
   * @remarks
   * Perform a soft delete on a specific Grading Period on the service provider. The operation
   * changes the status of the Grading Period to 'tobedeleted'.
   *
   * @returns Grading period deleted successfully
   *
   * @throws {@link GradingPeriodsManagement.DeleteGradingPeriodError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteGradingPeriod(
    request: GradingPeriodsManagement.DeleteGradingPeriodRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, GradingPeriodsManagement.DeleteGradingPeriodError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/ims/oneroster/rostering/v1p2/gradingPeriods/{sourcedId}"),
        auth: this.#auth.oAuth2,
        pathParams: [{ name: "sourcedId", value: request.sourcedId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GradingPeriodsManagement.DeleteGradingPeriodError,
      },
      options,
    );
  }

  /**
   * Get all Grading Periods
   *
   * @remarks
   * To get all Grading Periods on the service provider.
   *
   * @returns Success
   *
   * @throws {@link GradingPeriodsManagement.GetAllGradingPeriodsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllGradingPeriods(
    request: GradingPeriodsManagement.GetAllGradingPeriodsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ImsOnerosterRosteringV1P2GradingPeriodsResponse,
    GradingPeriodsManagement.GetAllGradingPeriodsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ims/oneroster/rostering/v1p2/gradingPeriods/"),
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
        success: { kind: "json", schema: imsOnerosterRosteringV1P2GradingPeriodsResponseSchema },
        errorFactory: GradingPeriodsManagement.GetAllGradingPeriodsError,
      },
      options,
    );
  }

  /**
   * Get a specific Grading Period
   *
   * @remarks
   * Get a specific Grading Period on the service provider. If the corresponding record cannot be
   * located, the api will return a 404 error code and message 'Grading period not found.'
   *
   * @returns Success
   *
   * @throws {@link GradingPeriodsManagement.GetGradingPeriodError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGradingPeriod(
    request: GradingPeriodsManagement.GetGradingPeriodRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ImsOnerosterRosteringV1P2GradingPeriodsResponse2,
    GradingPeriodsManagement.GetGradingPeriodError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ims/oneroster/rostering/v1p2/gradingPeriods/{sourcedId}"),
        auth: this.#auth.oAuth2,
        pathParams: [{ name: "sourcedId", value: request.sourcedId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: imsOnerosterRosteringV1P2GradingPeriodsResponse2Schema },
        errorFactory: GradingPeriodsManagement.GetGradingPeriodError,
      },
      options,
    );
  }

  /**
   * Get Grading Periods for a Term
   *
   * @remarks
   * To get the set of Grading Periods related to a specific Term. If the specified Term cannot be
   * identified within the service provider, the api will return a 404 error code and message 'Term
   * not found.'
   *
   * @returns Successful response containing a collection of grading periods for the term
   *
   * @throws {@link GradingPeriodsManagement.GetGradingPeriodsForTermError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGradingPeriodsForTerm(
    request: GradingPeriodsManagement.GetGradingPeriodsForTermRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse,
    GradingPeriodsManagement.GetGradingPeriodsForTermError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/ims/oneroster/rostering/v1p2/terms/{termSourcedId}/gradingPeriods",
        ),
        auth: this.#auth.oAuth2,
        pathParams: [{ name: "termSourcedId", value: request.termSourcedId, schema: s.string() }],
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
        success: { kind: "json", schema: imsOnerosterRosteringV1P2TermsGradingPeriodsResponseSchema },
        errorFactory: GradingPeriodsManagement.GetGradingPeriodsForTermError,
      },
      options,
    );
  }

  /**
   * Update a Grading Period
   *
   * @remarks
   * To update an existing Grading Period. The sourcedId for the record to be updated is supplied by
   * the requesting system.
   *
   * @returns Grading period updated successfully
   *
   * @throws {@link GradingPeriodsManagement.UpdateGradingPeriodError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateGradingPeriod(
    request: GradingPeriodsManagement.UpdateGradingPeriodRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, GradingPeriodsManagement.UpdateGradingPeriodError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/ims/oneroster/rostering/v1p2/gradingPeriods/{sourcedId}"),
        auth: this.#auth.oAuth2,
        pathParams: [{ name: "sourcedId", value: request.sourcedId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => imsOnerosterRosteringV1P2GradingPeriodsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GradingPeriodsManagement.UpdateGradingPeriodError,
      },
      options,
    );
  }
}

export namespace GradingPeriodsManagement {
  export type CreateGradingPeriodRequest = {
    body?: ImsOnerosterRosteringV1P2GradingPeriodsRequest;
  };

  export class CreateGradingPeriodError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateGradingPeriodError> = [
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

  export type CreateGradingPeriodForTermRequest = {
    /** The sourcedId of the term */
    termSourcedId: string;
    body: ImsOnerosterRosteringV1P2TermsGradingPeriodsRequest;
  };

  export class CreateGradingPeriodForTermError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateGradingPeriodForTermError> = [
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

  export type DeleteGradingPeriodRequest = {
    /** The sourcedId of the grading period to delete */
    sourcedId: string;
  };

  export class DeleteGradingPeriodError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteGradingPeriodError> = [
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

  export type GetAllGradingPeriodsRequest = {
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

  export class GetAllGradingPeriodsError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAllGradingPeriodsError> = [
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

  export type GetGradingPeriodRequest = {
    /** The sourcedId of the grading period to retrieve */
    sourcedId: string;
  };

  export class GetGradingPeriodError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGradingPeriodError> = [
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

  export type GetGradingPeriodsForTermRequest = {
    /** The sourcedId of the term */
    termSourcedId: string;
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

  export class GetGradingPeriodsForTermError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGradingPeriodsForTermError> = [
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

  export type UpdateGradingPeriodRequest = {
    /** The sourcedId of the grading period to update */
    sourcedId: string;
    body?: ImsOnerosterRosteringV1P2GradingPeriodsRequest;
  };

  export class UpdateGradingPeriodError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateGradingPeriodError> = [
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
