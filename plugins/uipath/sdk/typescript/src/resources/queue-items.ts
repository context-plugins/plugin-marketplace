import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addQueueItemRequestSchema, type AddQueueItemRequest } from "../models/add-queue-item-request.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  oDataQueueItemCollectionSchema,
  type ODataQueueItemCollection,
} from "../models/odata-queue-item-collection.js";
import { queueItemSchema, type QueueItem } from "../models/queue-item.js";
import type { Servers } from "../servers.js";

/**
 * Manage individual queue transaction items and their processing state
 */
export class QueueItems {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * UiPath Add a Queue Item
   *
   * @remarks
   * Adds a new transaction item to a specified queue. The item can include specific content (custom
   * key-value data), priority level, deadline, postpone time, and a unique reference string.
   * Returns the created queue item with its assigned ID and key.
   *
   * @returns Queue item added successfully
   *
   * @throws {@link QueueItems.AddQueueItemError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addQueueItem(
    request: QueueItems.AddQueueItemRequestParams,
    options?: RequestOptions,
  ): ApiPromise<QueueItem, QueueItems.AddQueueItemError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/odata/QueueItems"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-UIPATH-OrganizationUnitId",
            value: request.xUipathOrganizationUnitId,
            schema: s.optional(s.int()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: addQueueItemRequestSchema },
      },
      {
        success: { kind: "json", schema: queueItemSchema },
        errorFactory: QueueItems.AddQueueItemError,
      },
      options,
    );
  }

  /**
   * UiPath List Queue Items
   *
   * @remarks
   * Retrieves a list of queue transaction items. Items can be filtered by queue name, status,
   * review status, and priority. Supports OData filtering, ordering, and pagination.
   *
   * @returns A list of queue items
   *
   * @throws {@link QueueItems.ListQueueItemsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listQueueItems(
    request: QueueItems.ListQueueItemsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ODataQueueItemCollection, QueueItems.ListQueueItemsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/odata/QueueItems"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "$filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "$orderby", value: request.orderby, schema: s.optional(s.string()) },
          { name: "$top", value: request.top, schema: s.optional(s.int()) },
          { name: "$skip", value: request.skip, schema: s.optional(s.int()) },
        ],
        headers: [
          {
            name: "X-UIPATH-OrganizationUnitId",
            value: request.xUipathOrganizationUnitId,
            schema: s.optional(s.int()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: oDataQueueItemCollectionSchema },
        errorFactory: QueueItems.ListQueueItemsError,
      },
      options,
    );
  }
}

export namespace QueueItems {
  export type AddQueueItemRequestParams = {
    /**
     * The numeric ID of the folder context for the request. Required when accessing folder-scoped
     * resources. Retrieve folder IDs using the /odata/Folders endpoint.
     */
    xUipathOrganizationUnitId?: number;
    body: AddQueueItemRequest;
  };

  export class AddQueueItemError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddQueueItemError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListQueueItemsRequest = {
    /** OData filter expression to narrow results (e.g., State eq 'Running') */
    filter?: string;
    /** OData orderby clause (e.g., CreationTime desc) */
    orderby?: string;
    /** Maximum number of records to return (default 100, max 1000) */
    top?: number;
    /** Number of records to skip for pagination */
    skip?: number;
    /**
     * The numeric ID of the folder context for the request. Required when accessing folder-scoped
     * resources. Retrieve folder IDs using the /odata/Folders endpoint.
     */
    xUipathOrganizationUnitId?: number;
  };

  export const listQueueItemsRequestSchema: Schema<ListQueueItemsRequest> = s.lazySchema(() =>
    s.object<ListQueueItemsRequest>({
      filter: s.optional(s.string()),
      orderby: s.optional(s.string()),
      top: s.optional(s.int().check(s.gte(1), s.lte(1000))),
      skip: s.optional(s.int().check(s.gte(0))),
      xUipathOrganizationUnitId: s.optional(s.int()),
    }),
  );

  export class ListQueueItemsError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListQueueItemsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
