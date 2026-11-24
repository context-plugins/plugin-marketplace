import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  contactPointListResultSchema,
  type ContactPointListResult,
} from "../models/contact-point-list-result.js";
import {
  contactPointRequestBodySchema,
  type ContactPointRequestBody,
} from "../models/contact-point-request-body.js";
import { contactPointResultSchema, type ContactPointResult } from "../models/contact-point-result.js";
import { contactPointSortBySchema, type ContactPointSortBy } from "../models/contact-point-sort-by.js";
import {
  contactPointUpdateBodySchema,
  type ContactPointUpdateBody,
} from "../models/contact-point-update-body.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { nullsSchema, type Nulls } from "../models/nulls.js";
import { sortOrderSchema, type SortOrder } from "../models/sort-order.js";
import { status1Schema, type Status1 } from "../models/status1.js";
import { type1Schema, type Type1 } from "../models/type1.js";
import type { Servers } from "../servers.js";

/**
 * Manage contact points used to deliver monitor notifications. Contact points define where and how
 * monitor events are delivered (e.g. webhooks). Only WEBHOOK contact points can be created and
 * managed via the API.
 */
export class ContactPoints {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create contact point
   *
   * @remarks
   * Create a new contact point under the organization associated with the API key. Only WEBHOOK
   * contact points can be created via the API.
   *
   * @returns 200 - Success
   *
   * @throws {@link ContactPoints.CreateContactPointError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createContactPoint(
    request: ContactPoints.CreateContactPointRequest,
    options?: RequestOptions,
  ): ApiPromise<ContactPointResult, ContactPoints.CreateContactPointError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/api/contactPoints"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: contactPointRequestBodySchema },
      },
      {
        success: { kind: "json", schema: contactPointResultSchema },
        errorFactory: ContactPoints.CreateContactPointError,
      },
      options,
    );
  }

  /**
   * Delete contact point
   *
   * @remarks
   * Delete a contact point owned by the organization associated with the API key. Contact points
   * with historical notifications are archived rather than hard-deleted.
   *
   * @returns 200 - Success
   *
   * @throws {@link ContactPoints.DeleteContactPointError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteContactPoint(
    request: ContactPoints.DeleteContactPointRequest,
    options?: RequestOptions,
  ): ApiPromise<ContactPointResult, ContactPoints.DeleteContactPointError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/api/contactPoints/{uuid}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "uuid", value: request.uuid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: contactPointResultSchema },
        errorFactory: ContactPoints.DeleteContactPointError,
      },
      options,
    );
  }

  /**
   * Get contact point
   *
   * @remarks
   * Retrieve a contact point by UUID. Only returns contact points owned by the organization
   * associated with the API key. FASTN contact points are not accessible via this endpoint.
   *
   * @returns 200 - Success
   *
   * @throws {@link ContactPoints.GetContactPointError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getContactPoint(
    request: ContactPoints.GetContactPointRequest,
    options?: RequestOptions,
  ): ApiPromise<ContactPointResult, ContactPoints.GetContactPointError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/api/contactPoints/{uuid}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "uuid", value: request.uuid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: contactPointResultSchema },
        errorFactory: ContactPoints.GetContactPointError,
      },
      options,
    );
  }

  /**
   * List contact points
   *
   * @remarks
   * List contact points owned by the organization associated with the API key. Supports filtering
   * by status and type. FASTN contact points are excluded from results.
   *
   * @returns 200 - Success
   *
   * @throws {@link ContactPoints.ListContactPointsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listContactPoints(
    request: ContactPoints.ListContactPointsRequest,
    options?: RequestOptions,
  ): ApiPromise<ContactPointListResult, ContactPoints.ListContactPointsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/api/contactPoints"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "sortBy", value: request.sortBy, schema: contactPointSortBySchema },
          { name: "sortOrder", value: request.sortOrder, schema: sortOrderSchema },
          { name: "status", value: request.status, schema: s.optional(s.array(s.lazy(() => status1Schema))) },
          { name: "type", value: request.type, schema: s.optional(s.array(s.lazy(() => type1Schema))) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 0) },
          { name: "size", value: request.size, schema: s.defaulted(s.int(), 10) },
          { name: "nulls", value: request.nulls, schema: s.optional(s.lazy(() => nullsSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: contactPointListResultSchema },
        errorFactory: ContactPoints.ListContactPointsError,
      },
      options,
    );
  }

  /**
   * Update contact point
   *
   * @remarks
   * Partially update a contact point owned by the organization associated with the API key. Only
   * provided fields will be updated.
   *
   * @returns 200 - Success
   *
   * @throws {@link ContactPoints.UpdateContactPointError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateContactPoint(
    request: ContactPoints.UpdateContactPointRequest,
    options?: RequestOptions,
  ): ApiPromise<ContactPointResult, ContactPoints.UpdateContactPointError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v1/api/contactPoints/{uuid}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "uuid", value: request.uuid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: contactPointUpdateBodySchema },
      },
      {
        success: { kind: "json", schema: contactPointResultSchema },
        errorFactory: ContactPoints.UpdateContactPointError,
      },
      options,
    );
  }
}

export namespace ContactPoints {
  export type CreateContactPointRequest = {
    body: ContactPointRequestBody;
  };

  export class CreateContactPointError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateContactPointError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteContactPointRequest = {
    uuid: string;
  };

  export class DeleteContactPointError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteContactPointError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetContactPointRequest = {
    uuid: string;
  };

  export class GetContactPointError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetContactPointError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListContactPointsRequest = {
    sortBy: ContactPointSortBy;
    /** Required direction used to sort results. Accepts asc or desc. */
    sortOrder: SortOrder;
    status?: Status1[];
    type?: Type1[];
    /** Zero-based page number to retrieve. Defaults to 0. @default 0 */
    page?: number;
    /** Number of results per page. Must be between 1 and 100; defaults to 10. @default 10 */
    size?: number;
    /** Placement of null values in sorted results. Accepts first or last. */
    nulls?: Nulls;
  };

  export const listContactPointsRequestSchema: Schema<ListContactPointsRequest> = s.lazySchema(() =>
    s.object<ListContactPointsRequest>({
      sortBy: contactPointSortBySchema,
      sortOrder: sortOrderSchema,
      status: s.optional(s.array(s.lazy(() => status1Schema))),
      type: s.optional(s.array(s.lazy(() => type1Schema))),
      page: s.defaulted(s.int().check(s.gte(0)), 0),
      size: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 10),
      nulls: s.optional(s.lazy(() => nullsSchema)),
    }),
  );

  export class ListContactPointsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListContactPointsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateContactPointRequest = {
    uuid: string;
    body: ContactPointUpdateBody;
  };

  export class UpdateContactPointError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateContactPointError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
