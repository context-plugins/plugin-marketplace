import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  analyticsV1AnnotationsResponseSchema,
  type AnalyticsV1AnnotationsResponse,
} from "../models/analytics-v1-annotations-response.js";
import { annotationListItemSchema, type AnnotationListItem } from "../models/annotation-list-item.js";
import {
  createAnnotationRequestSchema,
  type CreateAnnotationRequest,
} from "../models/create-annotation-request.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  sortByDoiTAnnotationsApiSchema,
  type SortByDoiTAnnotationsApi,
} from "../models/sort-by-doi-tannotations-api.js";
import { sortOrderSchema, type SortOrder } from "../models/sort-order.js";
import {
  updateAnnotationRequestSchema,
  type UpdateAnnotationRequest,
} from "../models/update-annotation-request.js";
import type { Servers } from "../servers.js";

/**
 * Custom notes added to cost data to provide contextual information.
 */
export class Annotations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create an annotation
   *
   * @remarks
   * Creates a new annotation.
   *
   * @returns Created - Annotation created successfully.
   *
   * @throws {@link Annotations.CreateAnnotationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createAnnotation(
    request: Annotations.CreateAnnotationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AnnotationListItem, Annotations.CreateAnnotationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/analytics/v1/annotations"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createAnnotationRequestSchema },
      },
      {
        success: { kind: "json", schema: annotationListItemSchema },
        errorFactory: Annotations.CreateAnnotationError,
      },
      options,
    );
  }

  /**
   * Delete an annotation
   *
   * @remarks
   * Deletes the annotation specified by the Id.
   *
   * @returns OK - Annotation deleted.
   *
   * @throws {@link Annotations.DeleteAnnotationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteAnnotation(
    request: Annotations.DeleteAnnotationRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Annotations.DeleteAnnotationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/analytics/v1/annotations/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Annotations.DeleteAnnotationError,
      },
      options,
    );
  }

  /**
   * Retrieve an annotation
   *
   * @remarks
   * Returns an annotation by the specified Id.
   *
   * @returns OK - Annotation returned.
   *
   * @throws {@link Annotations.GetAnnotationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAnnotation(
    request: Annotations.GetAnnotationRequest,
    options?: RequestOptions,
  ): ApiPromise<AnnotationListItem, Annotations.GetAnnotationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/analytics/v1/annotations/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: annotationListItemSchema },
        errorFactory: Annotations.GetAnnotationError,
      },
      options,
    );
  }

  /**
   * List annotations
   *
   * @remarks
   * Returns a list of annotations that your account has access to. Annotations are listed in
   * reverse chronological order by default.
   *
   * @returns OK - The request succeeded.
   *
   * @throws {@link Annotations.ListAnnotationsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAnnotations(
    request: Annotations.ListAnnotationsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<AnalyticsV1AnnotationsResponse, Annotations.ListAnnotationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/analytics/v1/annotations"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 50) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          {
            name: "sortBy",
            value: request.sortBy,
            schema: s.optional(s.lazy(() => sortByDoiTAnnotationsApiSchema)),
          },
          { name: "sortOrder", value: request.sortOrder, schema: s.optional(s.lazy(() => sortOrderSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: analyticsV1AnnotationsResponseSchema },
        errorFactory: Annotations.ListAnnotationsError,
      },
      options,
    );
  }

  /**
   * Update an annotation
   *
   * @remarks
   * Updates the annotation specified by the Id.
   *
   * @returns OK - Annotation updated.
   *
   * @throws {@link Annotations.UpdateAnnotationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateAnnotation(
    request: Annotations.UpdateAnnotationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AnnotationListItem, Annotations.UpdateAnnotationError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/analytics/v1/annotations/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateAnnotationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: annotationListItemSchema },
        errorFactory: Annotations.UpdateAnnotationError,
      },
      options,
    );
  }
}

export namespace Annotations {
  export type CreateAnnotationRequestParams = {
    body: CreateAnnotationRequest;
  };

  export class CreateAnnotationError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateAnnotationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteAnnotationRequest = {
    /** Annotation ID */
    id: string;
  };

  export class DeleteAnnotationError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteAnnotationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAnnotationRequest = {
    /** Annotation ID */
    id: string;
  };

  export class GetAnnotationError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAnnotationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListAnnotationsRequest = {
    /**
     * The maximum number of results to return in a single page. Use the page tokens to iterate
     * through the entire collection.
     *
     * @default 50
     */
    maxResults?: number;
    /** Page token, returned by a previous call, to request the next page of results */
    pageToken?: string;
    /**
     * An expression for filtering the results. Valid fields: **content**, **timestamp**,
     * **labels**.
     */
    filter?: string;
    /** A field by which the results will be sorted. */
    sortBy?: SortByDoiTAnnotationsApi;
    /**
     * Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for
     * descending (highest to lowest).
     */
    sortOrder?: SortOrder;
  };

  export class ListAnnotationsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAnnotationsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateAnnotationRequestParams = {
    /** Annotation ID */
    id: string;
    body?: UpdateAnnotationRequest;
  };

  export class UpdateAnnotationError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateAnnotationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
