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
  imsOnerosterGradebookV1P2AssessmentLineItemsRequestSchema,
  type ImsOnerosterGradebookV1P2AssessmentLineItemsRequest,
} from "../models/ims-oneroster-gradebook-v1-p2-assessment-line-items-request.js";
import {
  imsOnerosterGradebookV1P2AssessmentLineItemsResponseSchema,
  type ImsOnerosterGradebookV1P2AssessmentLineItemsResponse,
} from "../models/ims-oneroster-gradebook-v1-p2-assessment-line-items-response.js";
import {
  imsOnerosterGradebookV1P2AssessmentLineItemsResponse1Schema,
  type ImsOnerosterGradebookV1P2AssessmentLineItemsResponse1,
} from "../models/ims-oneroster-gradebook-v1-p2-assessment-line-items-response1.js";
import {
  imsOnerosterGradebookV1P2AssessmentLineItemsResponse2Schema,
  type ImsOnerosterGradebookV1P2AssessmentLineItemsResponse2,
} from "../models/ims-oneroster-gradebook-v1-p2-assessment-line-items-response2.js";
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
 * This enables the management of the assessment line items i.e. line items that are used to store
 * results about tests/assessments and where these test/assessments are not aligned to a class.
 */
export class AssessmentLineItemsManagement {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create an Assessment Line Item
   *
   * @remarks
   * To create an Assessment Line Item. The responding system must return the set of sourcedIds that
   * have been allocated to the newly created assessmentLineItem record. A 'title' MUST be provided
   * when creating an assessmentLineItem.
   *
   * @returns Assessment line item successfully created
   *
   * @throws {@link AssessmentLineItemsManagement.CreateAssessmentLineItemError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createAssessmentLineItem(
    request: AssessmentLineItemsManagement.CreateAssessmentLineItemRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ImsOnerosterGradebookV1P2AssessmentLineItemsResponse1,
    AssessmentLineItemsManagement.CreateAssessmentLineItemError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/ims/oneroster/gradebook/v1p2/assessmentLineItems/"),
        auth: this.#auth.oAuth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: imsOnerosterGradebookV1P2AssessmentLineItemsRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: imsOnerosterGradebookV1P2AssessmentLineItemsResponse1Schema },
        errorFactory: AssessmentLineItemsManagement.CreateAssessmentLineItemError,
      },
      options,
    );
  }

  /**
   * Delete an Assessment Line Item
   *
   * @remarks
   * Perform a soft delete on a specific Assessment Line Item on the service provider. This
   * operation changes the status of the Assessment Line Item to 'tobedeleted'.
   *
   * @returns Assessment line item successfully deleted
   *
   * @throws {@link AssessmentLineItemsManagement.DeleteAssessmentLineItemError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteAssessmentLineItem(
    request: AssessmentLineItemsManagement.DeleteAssessmentLineItemRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AssessmentLineItemsManagement.DeleteAssessmentLineItemError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/ims/oneroster/gradebook/v1p2/assessmentLineItems/{sourcedId}"),
        auth: this.#auth.oAuth2,
        pathParams: [{ name: "sourcedId", value: request.sourcedId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AssessmentLineItemsManagement.DeleteAssessmentLineItemError,
      },
      options,
    );
  }

  /**
   * Get all Assessment Line Items
   *
   * @remarks
   * Get all of the Assessment Line Items on the service provider.
   *
   * @returns Successful response containing a collection of assessment line items
   *
   * @throws {@link AssessmentLineItemsManagement.GetAllAssessmentLineItemsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllAssessmentLineItems(
    request: AssessmentLineItemsManagement.GetAllAssessmentLineItemsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ImsOnerosterGradebookV1P2AssessmentLineItemsResponse,
    AssessmentLineItemsManagement.GetAllAssessmentLineItemsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ims/oneroster/gradebook/v1p2/assessmentLineItems/"),
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
        success: { kind: "json", schema: imsOnerosterGradebookV1P2AssessmentLineItemsResponseSchema },
        errorFactory: AssessmentLineItemsManagement.GetAllAssessmentLineItemsError,
      },
      options,
    );
  }

  /**
   * Get an Assessment Line Item
   *
   * @remarks
   * Get a specific Assessment Line Item on the service provider. If the corresponding record cannot
   * be located, the api will return a 404 error code and message 'Assessment line item not found.'
   *
   * @returns Successful response with the assessment line item
   *
   * @throws {@link AssessmentLineItemsManagement.GetAssessmentLineItemError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAssessmentLineItem(
    request: AssessmentLineItemsManagement.GetAssessmentLineItemRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ImsOnerosterGradebookV1P2AssessmentLineItemsResponse2,
    AssessmentLineItemsManagement.GetAssessmentLineItemError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ims/oneroster/gradebook/v1p2/assessmentLineItems/{sourcedId}"),
        auth: this.#auth.oAuth2,
        pathParams: [{ name: "sourcedId", value: request.sourcedId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: imsOnerosterGradebookV1P2AssessmentLineItemsResponse2Schema },
        errorFactory: AssessmentLineItemsManagement.GetAssessmentLineItemError,
      },
      options,
    );
  }

  /**
   * Update an Assessment Line Item
   *
   * @remarks
   * To update an existing Assessment Line Item. The sourcedId for the record to be updated is
   * supplied by the requesting system.
   *
   * @returns Assessment line item successfully updated
   *
   * @throws {@link AssessmentLineItemsManagement.UpdateAssessmentLineItemError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateAssessmentLineItem(
    request: AssessmentLineItemsManagement.UpdateAssessmentLineItemRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ImsOnerosterGradebookV1P2AssessmentLineItemsResponse2,
    AssessmentLineItemsManagement.UpdateAssessmentLineItemError
  > {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/ims/oneroster/gradebook/v1p2/assessmentLineItems/{sourcedId}"),
        auth: this.#auth.oAuth2,
        pathParams: [{ name: "sourcedId", value: request.sourcedId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: imsOnerosterGradebookV1P2AssessmentLineItemsRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: imsOnerosterGradebookV1P2AssessmentLineItemsResponse2Schema },
        errorFactory: AssessmentLineItemsManagement.UpdateAssessmentLineItemError,
      },
      options,
    );
  }
}

export namespace AssessmentLineItemsManagement {
  export type CreateAssessmentLineItemRequest = {
    body: ImsOnerosterGradebookV1P2AssessmentLineItemsRequest;
  };

  export class CreateAssessmentLineItemError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateAssessmentLineItemError> = [
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

  export type DeleteAssessmentLineItemRequest = {
    /** The sourcedId of the assessment line item to delete */
    sourcedId: string;
  };

  export class DeleteAssessmentLineItemError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteAssessmentLineItemError> = [
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

  export type GetAllAssessmentLineItemsRequest = {
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

  export class GetAllAssessmentLineItemsError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAllAssessmentLineItemsError> = [
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

  export type GetAssessmentLineItemRequest = {
    /** The sourcedId of the assessment line item */
    sourcedId: string;
  };

  export class GetAssessmentLineItemError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAssessmentLineItemError> = [
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

  export type UpdateAssessmentLineItemRequest = {
    /** The sourcedId of the assessment line item to update */
    sourcedId: string;
    body: ImsOnerosterGradebookV1P2AssessmentLineItemsRequest;
  };

  export class UpdateAssessmentLineItemError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateAssessmentLineItemError> = [
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
