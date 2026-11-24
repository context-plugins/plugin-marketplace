import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  oDataQueueDefinitionCollectionInternalSchema,
  type ODataQueueDefinitionCollection,
} from "../models/odata-queue-definition-collection.js";
import { queueDefinitionInternalSchema, type QueueDefinition } from "../models/queue-definition.js";
import type { Servers } from "../servers.js";

/**
 * Manage transaction queues for distributing work items to robots
 */
export class Queues {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * UiPath Create a Queue Definition
   *
   * @remarks
   * Creates a new queue definition in the current folder. The queue definition specifies the queue
   * name, maximum retry count, whether to accept only unique references, and enforcement settings.
   *
   * @returns Queue definition created successfully
   *
   * @throws {@link Queues.CreateQueueError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createQueue(
    request: Queues.CreateQueueRequest,
    options?: RequestOptions,
  ): ApiPromise<QueueDefinition, Queues.CreateQueueError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/odata/QueueDefinitions"),
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
        body: { kind: "json", value: request.body, schema: queueDefinitionInternalSchema },
      },
      {
        success: { kind: "json", schema: queueDefinitionInternalSchema },
        errorFactory: Queues.CreateQueueError,
      },
      options,
    );
  }

  /**
   * UiPath List Queue Definitions
   *
   * @remarks
   * Retrieves all queue definitions in the current folder. Queue definitions describe named queues
   * used for distributing transaction items to robots, including retry settings, unique reference
   * enforcement, and SLA configurations.
   *
   * @returns A list of queue definitions
   *
   * @throws {@link Queues.ListQueuesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listQueues(
    request: Queues.ListQueuesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ODataQueueDefinitionCollection, Queues.ListQueuesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/odata/QueueDefinitions"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "$filter", value: request.filter, schema: s.optional(s.string()) },
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
        success: { kind: "json", schema: oDataQueueDefinitionCollectionInternalSchema },
        errorFactory: Queues.ListQueuesError,
      },
      options,
    );
  }
}

export namespace Queues {
  export type CreateQueueRequest = {
    /**
     * The numeric ID of the folder context for the request. Required when accessing folder-scoped
     * resources. Retrieve folder IDs using the /odata/Folders endpoint.
     */
    xUipathOrganizationUnitId?: number;
    body: QueueDefinition;
  };

  export class CreateQueueError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateQueueError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListQueuesRequest = {
    /** OData filter expression to narrow results (e.g., State eq 'Running') */
    filter?: string;
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

  export const listQueuesRequestSchema: Schema<ListQueuesRequest> = s.lazySchema(() =>
    s.object<ListQueuesRequest>({
      filter: s.optional(s.string()),
      top: s.optional(s.int().check(s.gte(1), s.lte(1000))),
      skip: s.optional(s.int().check(s.gte(0))),
      xUipathOrganizationUnitId: s.optional(s.int()),
    }),
  );

  export class ListQueuesError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListQueuesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
