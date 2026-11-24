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
  assignObjectsToLabelRequestSchema,
  type AssignObjectsToLabelRequest,
} from "../models/assign-objects-to-label-request.js";
import { createLabelRequestSchema, type CreateLabelRequest } from "../models/create-label-request.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  labelAssignmentsResponseSchema,
  type LabelAssignmentsResponse,
} from "../models/label-assignments-response.js";
import { labelListItemSchema, type LabelListItem } from "../models/label-list-item.js";
import { labelListSchema, type LabelList } from "../models/label-list.js";
import { sortByDoiTLabelsApiSchema, type SortByDoiTLabelsApi } from "../models/sort-by-doi-tlabels-api.js";
import { sortOrderSchema, type SortOrder } from "../models/sort-order.js";
import { updateLabelRequestSchema, type UpdateLabelRequest } from "../models/update-label-request.js";
import type { Servers } from "../servers.js";

/**
 * Create and manage labels to organize and categorize your cloud resources.
 */
export class Labels {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Assign or unassign objects to a label
   *
   * @remarks
   * Assigns or un-assigns objects to the label specified by the ID.
   *
   * @returns OK - Objects assigned/unassigned successfully.
   *
   * @throws {@link Labels.AssignObjectsToLabelError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  assignObjectsToLabel(
    request: Labels.AssignObjectsToLabelRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Labels.AssignObjectsToLabelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/analytics/v1/labels/{id}/assignments"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: assignObjectsToLabelRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Labels.AssignObjectsToLabelError,
      },
      options,
    );
  }

  /**
   * Create a label
   *
   * @remarks
   * Creates a new label.
   *
   * @returns Created - Label created successfully.
   *
   * @throws {@link Labels.CreateLabelError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createLabel(
    request: Labels.CreateLabelRequestParams,
    options?: RequestOptions,
  ): ApiPromise<LabelListItem, Labels.CreateLabelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/analytics/v1/labels"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createLabelRequestSchema },
      },
      {
        success: { kind: "json", schema: labelListItemSchema },
        errorFactory: Labels.CreateLabelError,
      },
      options,
    );
  }

  /**
   * Delete a label
   *
   * @remarks
   * Deletes the label specified by the Id.
   *
   * @returns OK - Label deleted.
   *
   * @throws {@link Labels.DeleteLabelError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteLabel(
    request: Labels.DeleteLabelRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Labels.DeleteLabelError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/analytics/v1/labels/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Labels.DeleteLabelError,
      },
      options,
    );
  }

  /**
   * Retrieve a label
   *
   * @remarks
   * Returns a label by the specified Id.
   *
   * @returns OK - Label returned.
   *
   * @throws {@link Labels.GetLabelError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLabel(
    request: Labels.GetLabelRequest,
    options?: RequestOptions,
  ): ApiPromise<LabelListItem, Labels.GetLabelError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/analytics/v1/labels/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: labelListItemSchema },
        errorFactory: Labels.GetLabelError,
      },
      options,
    );
  }

  /**
   * Get label assignments
   *
   * @remarks
   * Returns the list of objects currently assigned to the label specified by the ID.
   *
   * @returns OK - Label assignments returned.
   *
   * @throws {@link Labels.GetLabelAssignmentsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLabelAssignments(
    request: Labels.GetLabelAssignmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<LabelAssignmentsResponse, Labels.GetLabelAssignmentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/analytics/v1/labels/{id}/assignments"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: labelAssignmentsResponseSchema },
        errorFactory: Labels.GetLabelAssignmentsError,
      },
      options,
    );
  }

  /**
   * List labels
   *
   * @remarks
   * Returns a list of labels that your account has access to. Labels are listed in reverse
   * chronological order by default.
   *
   * @returns OK - The request succeeded.
   *
   * @throws {@link Labels.ListLabelsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listLabels(
    request: Labels.ListLabelsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<LabelList, Labels.ListLabelsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/analytics/v1/labels"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 50) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "nameContains", value: request.nameContains, schema: s.optional(s.string()) },
          {
            name: "sortBy",
            value: request.sortBy,
            schema: s.optional(s.lazy(() => sortByDoiTLabelsApiSchema)),
          },
          { name: "sortOrder", value: request.sortOrder, schema: s.optional(s.lazy(() => sortOrderSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: labelListSchema },
        errorFactory: Labels.ListLabelsError,
      },
      options,
    );
  }

  /**
   * Update a label
   *
   * @remarks
   * Updates the label specified by the Id.
   *
   * @returns OK - Label updated.
   *
   * @throws {@link Labels.UpdateLabelError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateLabel(
    request: Labels.UpdateLabelRequestParams,
    options?: RequestOptions,
  ): ApiPromise<LabelListItem, Labels.UpdateLabelError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/analytics/v1/labels/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateLabelRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: labelListItemSchema },
        errorFactory: Labels.UpdateLabelError,
      },
      options,
    );
  }
}

export namespace Labels {
  export type AssignObjectsToLabelRequestParams = {
    /** Label ID */
    id: string;
    body: AssignObjectsToLabelRequest;
  };

  export class AssignObjectsToLabelError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<AssignObjectsToLabelError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateLabelRequestParams = {
    body: CreateLabelRequest;
  };

  export class CreateLabelError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateLabelError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteLabelRequest = {
    /** Label ID */
    id: string;
  };

  export class DeleteLabelError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteLabelError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLabelRequest = {
    /** Label ID */
    id: string;
  };

  export class GetLabelError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetLabelError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLabelAssignmentsRequest = {
    /** Label ID */
    id: string;
  };

  export class GetLabelAssignmentsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetLabelAssignmentsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListLabelsRequest = {
    /**
     * The maximum number of results to return in a single page. Use the page tokens to iterate
     * through the entire collection.
     *
     * @default 50
     */
    maxResults?: number;
    /** Page token, returned by a previous call, to request the next page of results */
    pageToken?: string;
    /** An expression for filtering the results. Valid fields: **name**, **type**. */
    filter?: string;
    /**
     * Case-insensitive substring match against the resource name. Combined with the "filter"
     * parameter using AND semantics.
     */
    nameContains?: string;
    /** A field by which the results will be sorted. */
    sortBy?: SortByDoiTLabelsApi;
    /**
     * Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for
     * descending (highest to lowest).
     */
    sortOrder?: SortOrder;
  };

  export class ListLabelsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListLabelsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateLabelRequestParams = {
    /** Label ID */
    id: string;
    body?: UpdateLabelRequest;
  };

  export class UpdateLabelError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateLabelError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
