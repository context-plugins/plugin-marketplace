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
  oDataWebhookCollectionInternalSchema,
  type ODataWebhookCollection,
} from "../models/odata-webhook-collection.js";
import {
  odataWebhooksUiPathServerConfigurationODataGetEventTypesResponseSchema,
  type OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse,
} from "../models/odata-webhooks-ui-path-server-configuration-odata-get-event-types-response.js";
import { webhookInternalSchema, type Webhook } from "../models/webhook.js";
import type { Servers } from "../servers.js";

/**
 * Manage webhook subscriptions for Orchestrator event notifications
 */
export class Webhooks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * UiPath Create a Webhook
   *
   * @remarks
   * Creates a new webhook subscription. Specify the target URL, optional HMAC secret for payload
   * verification, whether to subscribe to all events or specific event types, and whether to allow
   * insecure SSL.
   *
   * @returns Webhook created successfully
   *
   * @throws {@link Webhooks.CreateWebhookError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createWebhook(
    request: Webhooks.CreateWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<Webhook, Webhooks.CreateWebhookError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/odata/Webhooks"),
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
        body: { kind: "json", value: request.body, schema: webhookInternalSchema },
      },
      {
        success: { kind: "json", schema: webhookInternalSchema },
        errorFactory: Webhooks.CreateWebhookError,
      },
      options,
    );
  }

  /**
   * UiPath Delete a Webhook
   *
   * @remarks
   * Permanently deletes a webhook subscription by its unique integer identifier. After deletion,
   * the target URL will no longer receive event notifications from Orchestrator.
   *
   * @returns Webhook deleted successfully
   *
   * @throws {@link Webhooks.DeleteWebhookError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteWebhook(
    request: Webhooks.DeleteWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Webhooks.DeleteWebhookError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/odata/Webhooks({key})"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "key", value: request.key, schema: s.int() }],
        query: [],
        headers: [
          {
            name: "X-UIPATH-OrganizationUnitId",
            value: request.xUipathOrganizationUnitId,
            schema: s.optional(s.int()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Webhooks.DeleteWebhookError,
      },
      options,
    );
  }

  /**
   * UiPath Get Available Webhook Event Types
   *
   * @remarks
   * Retrieves the complete list of event types available for webhook subscriptions in Orchestrator.
   * Event types cover jobs, robots, queues, queue items, processes, and triggers, each with a
   * unique string identifier such as job.faulted or queueItem.transactionCompleted.
   *
   * @returns A list of available webhook event types
   *
   * @throws {@link Webhooks.GetWebhookEventTypesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWebhookEventTypes(
    request: Webhooks.GetWebhookEventTypesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse,
    Webhooks.GetWebhookEventTypesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/odata/Webhooks/UiPath.Server.Configuration.OData.GetEventTypes()",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
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
        success: {
          kind: "json",
          schema: odataWebhooksUiPathServerConfigurationODataGetEventTypesResponseSchema,
        },
        errorFactory: Webhooks.GetWebhookEventTypesError,
      },
      options,
    );
  }

  /**
   * UiPath List Webhooks
   *
   * @remarks
   * Retrieves all webhook subscriptions configured in Orchestrator. Each webhook specifies a target
   * URL, the events to subscribe to, and an HMAC secret for payload signature verification.
   *
   * @returns A list of webhooks
   *
   * @throws {@link Webhooks.ListWebhooksError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWebhooks(
    request: Webhooks.ListWebhooksRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ODataWebhookCollection, Webhooks.ListWebhooksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/odata/Webhooks"),
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
        success: { kind: "json", schema: oDataWebhookCollectionInternalSchema },
        errorFactory: Webhooks.ListWebhooksError,
      },
      options,
    );
  }
}

export namespace Webhooks {
  export type CreateWebhookRequest = {
    /**
     * The numeric ID of the folder context for the request. Required when accessing folder-scoped
     * resources. Retrieve folder IDs using the /odata/Folders endpoint.
     */
    xUipathOrganizationUnitId?: number;
    body: Webhook;
  };

  export class CreateWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateWebhookError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteWebhookRequest = {
    /** The unique integer identifier of the entity */
    key: number;
    /**
     * The numeric ID of the folder context for the request. Required when accessing folder-scoped
     * resources. Retrieve folder IDs using the /odata/Folders endpoint.
     */
    xUipathOrganizationUnitId?: number;
  };

  export class DeleteWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteWebhookError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetWebhookEventTypesRequest = {
    /**
     * The numeric ID of the folder context for the request. Required when accessing folder-scoped
     * resources. Retrieve folder IDs using the /odata/Folders endpoint.
     */
    xUipathOrganizationUnitId?: number;
  };

  export class GetWebhookEventTypesError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<GetWebhookEventTypesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListWebhooksRequest = {
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

  export const listWebhooksRequestSchema: Schema<ListWebhooksRequest> = s.lazySchema(() =>
    s.object<ListWebhooksRequest>({
      filter: s.optional(s.string()),
      top: s.optional(s.int().check(s.gte(1), s.lte(1000))),
      skip: s.optional(s.int().check(s.gte(0))),
      xUipathOrganizationUnitId: s.optional(s.int()),
    }),
  );

  export class ListWebhooksError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListWebhooksError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
