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
  imsOnerosterGradebookV1P2LineItemsRequestSchema,
  type ImsOnerosterGradebookV1P2LineItemsRequest,
} from "../models/ims-oneroster-gradebook-v1-p2-line-items-request.js";
import {
  imsOnerosterGradebookV1P2LineItemsResponseSchema,
  type ImsOnerosterGradebookV1P2LineItemsResponse,
} from "../models/ims-oneroster-gradebook-v1-p2-line-items-response.js";
import {
  imsOnerosterGradebookV1P2LineItemsResponse1Schema,
  type ImsOnerosterGradebookV1P2LineItemsResponse1,
} from "../models/ims-oneroster-gradebook-v1-p2-line-items-response1.js";
import {
  imsOnerosterGradebookV1P2LineItemsResponse2Schema,
  type ImsOnerosterGradebookV1P2LineItemsResponse2,
} from "../models/ims-oneroster-gradebook-v1-p2-line-items-response2.js";
import {
  imsOnerosterGradebookV1P2LineItemsResultsRequestSchema,
  type ImsOnerosterGradebookV1P2LineItemsResultsRequest,
} from "../models/ims-oneroster-gradebook-v1-p2-line-items-results-request.js";
import {
  imsOnerosterGradebookV1P2LineItemsResultsResponseSchema,
  type ImsOnerosterGradebookV1P2LineItemsResultsResponse,
} from "../models/ims-oneroster-gradebook-v1-p2-line-items-results-response.js";
import {
  imsOnerosterGradebookV1P2SchoolsLineItemsRequestSchema,
  type ImsOnerosterGradebookV1P2SchoolsLineItemsRequest,
} from "../models/ims-oneroster-gradebook-v1-p2-schools-line-items-request.js";
import {
  imsOnerosterGradebookV1P2SchoolsLineItemsResponseSchema,
  type ImsOnerosterGradebookV1P2SchoolsLineItemsResponse,
} from "../models/ims-oneroster-gradebook-v1-p2-schools-line-items-response.js";
import {
  imsOnerosterGradebookV1P2SchoolsLineItemsResponse1Schema,
  type ImsOnerosterGradebookV1P2SchoolsLineItemsResponse1,
} from "../models/ims-oneroster-gradebook-v1-p2-schools-line-items-response1.js";
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
 * This enables the management of lineItems i.e. the set of results for the assessment of some
 * activity.
 */
export class LineItemsManagement {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a Line Item
   *
   * @remarks
   * To create a new Line Item. The responding system must return the set of sourcedIds that have
   * been allocated to the newly created Line Item records.
   *
   * @returns Line item successfully created
   *
   * @throws {@link LineItemsManagement.CreateLineItemError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createLineItem(
    request: LineItemsManagement.CreateLineItemRequest,
    options?: RequestOptions,
  ): ApiPromise<ImsOnerosterGradebookV1P2LineItemsResponse1, LineItemsManagement.CreateLineItemError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/ims/oneroster/gradebook/v1p2/lineItems/"),
        auth: this.#auth.oAuth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: imsOnerosterGradebookV1P2LineItemsRequestSchema },
      },
      {
        success: { kind: "json", schema: imsOnerosterGradebookV1P2LineItemsResponse1Schema },
        errorFactory: LineItemsManagement.CreateLineItemError,
      },
      options,
    );
  }

  /**
   * Create Line Items for a School
   *
   * @remarks
   * To create a set of lineItems for a specific school. The responding system must return the set
   * of sourcedIds that have been allocated to the newly created lineItem records. If the
   * corresponding record cannot be located, the api will return a 404 error code and message
   * 'School not found.'
   *
   * @returns Line items successfully created for school
   *
   * @throws {@link LineItemsManagement.CreateLineItemsForSchoolError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createLineItemsForSchool(
    request: LineItemsManagement.CreateLineItemsForSchoolRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ImsOnerosterGradebookV1P2SchoolsLineItemsResponse1,
    LineItemsManagement.CreateLineItemsForSchoolError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/ims/oneroster/gradebook/v1p2/schools/{sourcedId}/lineItems"),
        auth: this.#auth.oAuth2,
        pathParams: [{ name: "sourcedId", value: request.sourcedId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: imsOnerosterGradebookV1P2SchoolsLineItemsRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: imsOnerosterGradebookV1P2SchoolsLineItemsResponse1Schema },
        errorFactory: LineItemsManagement.CreateLineItemsForSchoolError,
      },
      options,
    );
  }

  /**
   * Create a Result for a Line Item
   *
   * @remarks
   * To create a new result for a specific Line Item. The responding system must return the set of
   * sourcedIds that have been allocated to the newly created result records. If the corresponding
   * record cannot be located, the api will return a 404 error code and message 'Line item not
   * found.'
   *
   * @returns Result successfully created
   *
   * @throws {@link LineItemsManagement.CreateResultForLineItemError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createResultForLineItem(
    request: LineItemsManagement.CreateResultForLineItemRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ImsOnerosterGradebookV1P2LineItemsResultsResponse,
    LineItemsManagement.CreateResultForLineItemError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/ims/oneroster/gradebook/v1p2/lineItems/{sourcedId}/results"),
        auth: this.#auth.oAuth2,
        pathParams: [{ name: "sourcedId", value: request.sourcedId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: imsOnerosterGradebookV1P2LineItemsResultsRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: imsOnerosterGradebookV1P2LineItemsResultsResponseSchema },
        errorFactory: LineItemsManagement.CreateResultForLineItemError,
      },
      options,
    );
  }

  /**
   * Delete a Line Item
   *
   * @remarks
   * Perform a soft delete on a specific Line Item on the service provider. This operation changes
   * the status of the LineItem to 'tobedeleted'.
   *
   * @returns Line item successfully deleted
   *
   * @throws {@link LineItemsManagement.DeleteLineItemError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteLineItem(
    request: LineItemsManagement.DeleteLineItemRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LineItemsManagement.DeleteLineItemError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/ims/oneroster/gradebook/v1p2/lineItems/{sourcedId}"),
        auth: this.#auth.oAuth2,
        pathParams: [{ name: "sourcedId", value: request.sourcedId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: LineItemsManagement.DeleteLineItemError,
      },
      options,
    );
  }

  /**
   * Get all Line Items
   *
   * @remarks
   * Get all of the Line Items on the service provider.
   *
   * @returns Successful response containing a collection of line items
   *
   * @throws {@link LineItemsManagement.GetAllLineItemsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllLineItems(
    request: LineItemsManagement.GetAllLineItemsRequest,
    options?: RequestOptions,
  ): ApiPromise<ImsOnerosterGradebookV1P2LineItemsResponse, LineItemsManagement.GetAllLineItemsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ims/oneroster/gradebook/v1p2/lineItems/"),
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
        success: { kind: "json", schema: imsOnerosterGradebookV1P2LineItemsResponseSchema },
        errorFactory: LineItemsManagement.GetAllLineItemsError,
      },
      options,
    );
  }

  /**
   * Get a Line Item
   *
   * @remarks
   * Get a specific Line Item on the service provider. If the corresponding record cannot be
   * located, the api will return a 404 error code and message 'Line item not found.'
   *
   * @returns Successful response with the line item
   *
   * @throws {@link LineItemsManagement.GetLineItemError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLineItem(
    request: LineItemsManagement.GetLineItemRequest,
    options?: RequestOptions,
  ): ApiPromise<ImsOnerosterGradebookV1P2LineItemsResponse2, LineItemsManagement.GetLineItemError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ims/oneroster/gradebook/v1p2/lineItems/{sourcedId}"),
        auth: this.#auth.oAuth2,
        pathParams: [{ name: "sourcedId", value: request.sourcedId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: imsOnerosterGradebookV1P2LineItemsResponse2Schema },
        errorFactory: LineItemsManagement.GetLineItemError,
      },
      options,
    );
  }

  /**
   * Get Line Items for a School
   *
   * @remarks
   * Get the set of lineItems on the service provider for a specific school. If the corresponding
   * record cannot be located, the api will return a 404 error code and message 'School not found.'
   *
   * @returns Successful response containing a collection of line items
   *
   * @throws {@link LineItemsManagement.GetLineItemsForSchoolError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLineItemsForSchool(
    request: LineItemsManagement.GetLineItemsForSchoolRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ImsOnerosterGradebookV1P2SchoolsLineItemsResponse,
    LineItemsManagement.GetLineItemsForSchoolError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ims/oneroster/gradebook/v1p2/schools/{sourcedId}/lineItems"),
        auth: this.#auth.oAuth2,
        pathParams: [{ name: "sourcedId", value: request.sourcedId, schema: s.string() }],
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
        success: { kind: "json", schema: imsOnerosterGradebookV1P2SchoolsLineItemsResponseSchema },
        errorFactory: LineItemsManagement.GetLineItemsForSchoolError,
      },
      options,
    );
  }

  /**
   * Update a Line Item
   *
   * @remarks
   * To update an existing Line Item. The sourcedId for the record to be updated is supplied by the
   * requesting system.
   *
   * @returns Line item successfully updated
   *
   * @throws {@link LineItemsManagement.UpdateLineItemError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateLineItem(
    request: LineItemsManagement.UpdateLineItemRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LineItemsManagement.UpdateLineItemError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/ims/oneroster/gradebook/v1p2/lineItems/{sourcedId}"),
        auth: this.#auth.oAuth2,
        pathParams: [{ name: "sourcedId", value: request.sourcedId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: imsOnerosterGradebookV1P2LineItemsRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: LineItemsManagement.UpdateLineItemError,
      },
      options,
    );
  }
}

export namespace LineItemsManagement {
  export type CreateLineItemRequest = {
    body: ImsOnerosterGradebookV1P2LineItemsRequest;
  };

  export class CreateLineItemError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateLineItemError> = [
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

  export type CreateLineItemsForSchoolRequest = {
    /** The sourcedId of the school */
    sourcedId: string;
    body: ImsOnerosterGradebookV1P2SchoolsLineItemsRequest;
  };

  export class CreateLineItemsForSchoolError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateLineItemsForSchoolError> = [
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

  export type CreateResultForLineItemRequest = {
    /** The sourcedId of the line item */
    sourcedId: string;
    body: ImsOnerosterGradebookV1P2LineItemsResultsRequest;
  };

  export class CreateResultForLineItemError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateResultForLineItemError> = [
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

  export type DeleteLineItemRequest = {
    /** The sourcedId of the line item to delete */
    sourcedId: string;
  };

  export class DeleteLineItemError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteLineItemError> = [
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

  export type GetAllLineItemsRequest = {
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

  export class GetAllLineItemsError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAllLineItemsError> = [
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

  export type GetLineItemRequest = {
    /** The sourcedId of the line item */
    sourcedId: string;
  };

  export class GetLineItemError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetLineItemError> = [
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

  export type GetLineItemsForSchoolRequest = {
    /** The sourcedId of the school */
    sourcedId: string;
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

  export class GetLineItemsForSchoolError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetLineItemsForSchoolError> = [
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

  export type UpdateLineItemRequest = {
    /** The sourcedId of the line item to update */
    sourcedId: string;
    body: ImsOnerosterGradebookV1P2LineItemsRequest;
  };

  export class UpdateLineItemError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateLineItemError> = [
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
