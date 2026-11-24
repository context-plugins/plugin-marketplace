import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  companiesApiItemsResponseInternalSchema,
  type CompaniesApiItemsResponse,
} from "../models/companies-api-items-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { itemCreateInternalSchema, type ItemCreate } from "../models/item-create.js";
import { itemUpdateInternalSchema, type ItemUpdate } from "../models/item-update.js";
import { itemInternalSchema, type Item } from "../models/item.js";
import type { Servers } from "../servers.js";

/**
 * Manage inventory items
 */
export class Items {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create an Item
   *
   * @remarks
   * Creates a new item object in the specified company.
   *
   * @returns Item created successfully
   *
   * @throws {@link Items.CreateItemError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link MicrosoftDynamicsNavError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createItem(
    request: Items.CreateItemRequest,
    options?: RequestOptions,
  ): ApiPromise<Item, Items.CreateItemError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/companies({company_id})/items"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [{ name: "company_id", value: request.companyId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: itemCreateInternalSchema },
      },
      {
        success: { kind: "json", schema: itemInternalSchema },
        errorFactory: Items.CreateItemError,
      },
      options,
    );
  }

  /**
   * Delete an Item
   *
   * @remarks
   * Deletes an item by ID.
   *
   * @returns Item deleted successfully
   *
   * @throws {@link Items.DeleteItemError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link MicrosoftDynamicsNavError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteItem(
    request: Items.DeleteItemRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Items.DeleteItemError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/companies({company_id})/items({item_id})"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          { name: "company_id", value: request.companyId, schema: s.string() },
          { name: "item_id", value: request.itemId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Items.DeleteItemError,
      },
      options,
    );
  }

  /**
   * Get an Item
   *
   * @remarks
   * Retrieves a specific item by ID.
   *
   * @returns Successfully retrieved item
   *
   * @throws {@link Items.GetItemError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link MicrosoftDynamicsNavError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getItem(request: Items.GetItemRequest, options?: RequestOptions): ApiPromise<Item, Items.GetItemError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies({company_id})/items({item_id})"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          { name: "company_id", value: request.companyId, schema: s.string() },
          { name: "item_id", value: request.itemId, schema: s.string() },
        ],
        query: [{ name: "$select", value: request.select, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: itemInternalSchema },
        errorFactory: Items.GetItemError,
      },
      options,
    );
  }

  /**
   * List Items
   *
   * @remarks
   * Returns a list of item objects from the specified company.
   *
   * @returns Successfully retrieved items
   *
   * @throws {@link Items.ListItemsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link MicrosoftDynamicsNavError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listItems(
    request: Items.ListItemsRequest,
    options?: RequestOptions,
  ): ApiPromise<CompaniesApiItemsResponse, Items.ListItemsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies({company_id})/items"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [{ name: "company_id", value: request.companyId, schema: s.string() }],
        query: [
          { name: "$top", value: request.top, schema: s.optional(s.int()) },
          { name: "$skip", value: request.skip, schema: s.optional(s.int()) },
          { name: "$filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "$orderby", value: request.orderby, schema: s.optional(s.string()) },
          { name: "$select", value: request.select, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companiesApiItemsResponseInternalSchema },
        errorFactory: Items.ListItemsError,
      },
      options,
    );
  }

  /**
   * Update an Item
   *
   * @remarks
   * Updates an existing item object.
   *
   * @returns Item updated successfully
   *
   * @throws {@link Items.UpdateItemError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link MicrosoftDynamicsNavError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateItem(
    request: Items.UpdateItemRequest,
    options?: RequestOptions,
  ): ApiPromise<Item, Items.UpdateItemError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/companies({company_id})/items({item_id})"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          { name: "company_id", value: request.companyId, schema: s.string() },
          { name: "item_id", value: request.itemId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "If-Match", value: request.ifMatch, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: itemUpdateInternalSchema },
      },
      {
        success: { kind: "json", schema: itemInternalSchema },
        errorFactory: Items.UpdateItemError,
      },
      options,
    );
  }
}

export namespace Items {
  export type CreateItemRequest = {
    /** The unique identifier of the company */
    companyId: string;
    body: ItemCreate;
  };

  export class CreateItemError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateItemError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteItemRequest = {
    /** The unique identifier of the company */
    companyId: string;
    /** The unique identifier of the item */
    itemId: string;
  };

  export class DeleteItemError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteItemError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetItemRequest = {
    /** The unique identifier of the company */
    companyId: string;
    /** The unique identifier of the item */
    itemId: string;
    /** Comma-separated list of properties to include in the response */
    select?: string;
  };

  export class GetItemError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetItemError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListItemsRequest = {
    /** The unique identifier of the company */
    companyId: string;
    /** Maximum number of items to return */
    top?: number;
    /** Number of items to skip */
    skip?: number;
    /** OData filter expression */
    filter?: string;
    /** OData order by expression */
    orderby?: string;
    /** Comma-separated list of properties to include in the response */
    select?: string;
  };

  export const listItemsRequestSchema: Schema<ListItemsRequest> = s.lazySchema(() =>
    s.object<ListItemsRequest>({
      companyId: s.string(),
      top: s.optional(s.int().check(s.gte(0))),
      skip: s.optional(s.int().check(s.gte(0))),
      filter: s.optional(s.string()),
      orderby: s.optional(s.string()),
      select: s.optional(s.string()),
    }),
  );

  export class ListItemsError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListItemsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateItemRequest = {
    /** The unique identifier of the company */
    companyId: string;
    /** The unique identifier of the item */
    itemId: string;
    /** ETag value for optimistic concurrency control */
    ifMatch: string;
    body: ItemUpdate;
  };

  export class UpdateItemError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateItemError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
