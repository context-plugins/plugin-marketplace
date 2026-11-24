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
  appInventoryListResponseSchema,
  type AppInventoryListResponse,
} from "../models/app-inventory-list-response.js";
import { appinventoryRequestSchema, type AppinventoryRequest } from "../models/appinventory-request.js";
import {
  errorResponseUiPathAutomationHubAppInventoryApiSchema,
  type ErrorResponseUiPathAutomationHubAppInventoryApi,
} from "../models/error-response-ui-path-automation-hub-app-inventory-api.js";
import type { Servers } from "../servers.js";

/**
 * Manage the application inventory used in automation assessments
 */
export class AppInventory {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * UiPath Bulk Add or Update Application Inventory
   *
   * @remarks
   * Adds or updates application entries in bulk. If an application with the same name already
   * exists, it will be updated; otherwise, a new entry is created. This endpoint is designed for
   * bulk synchronization of the application inventory from an external CMDB or asset register.
   *
   * @returns Applications upserted successfully
   *
   * @throws {@link AppInventory.BulkUpsertAppInventoryError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkUpsertAppInventory(
    request: AppInventory.BulkUpsertAppInventoryRequest,
    options?: RequestOptions,
  ): ApiPromise<AppInventoryListResponse, AppInventory.BulkUpsertAppInventoryError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultUiPathAutomationHubAppInventoryApi("/appinventory"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: appinventoryRequestSchema },
      },
      {
        success: { kind: "json", schema: appInventoryListResponseSchema },
        errorFactory: AppInventory.BulkUpsertAppInventoryError,
      },
      options,
    );
  }

  /**
   * UiPath Delete an Application from Inventory
   *
   * @remarks
   * Permanently removes an application entry from the application inventory by its unique
   * identifier. Automations that reference this application will lose the association.
   *
   * @returns Application deleted successfully
   *
   * @throws {@link AppInventory.DeleteApplicationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteApplication(
    request: AppInventory.DeleteApplicationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AppInventory.DeleteApplicationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultUiPathAutomationHubAppInventoryApi("/appinventory/{applicationId}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "applicationId", value: request.applicationId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AppInventory.DeleteApplicationError,
      },
      options,
    );
  }

  /**
   * UiPath List Application Inventory
   *
   * @remarks
   * Retrieves the application inventory used for automation assessments. Each entry represents a
   * business application that may be involved in automations. Inventory data is used in the
   * assessment process to calculate automation complexity and effort.
   *
   * @returns A list of application inventory entries
   *
   * @throws {@link AppInventory.ListAppInventoryError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAppInventory(
    request: AppInventory.ListAppInventoryRequest = {},
    options?: RequestOptions,
  ): ApiPromise<AppInventoryListResponse, AppInventory.ListAppInventoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultUiPathAutomationHubAppInventoryApi("/appinventory"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.int(), 20) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: appInventoryListResponseSchema },
        errorFactory: AppInventory.ListAppInventoryError,
      },
      options,
    );
  }
}

export namespace AppInventory {
  export type BulkUpsertAppInventoryRequest = {
    body: AppinventoryRequest;
  };

  export class BulkUpsertAppInventoryError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseUiPathAutomationHubAppInventoryApi",
          ErrorResponseUiPathAutomationHubAppInventoryApi
        >
      | Declared<
          "errorResponseUiPathAutomationHubAppInventoryApi2",
          ErrorResponseUiPathAutomationHubAppInventoryApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkUpsertAppInventoryError> = [
      {
        on: 400,
        kind: "errorResponseUiPathAutomationHubAppInventoryApi",
        decode: { kind: "json", schema: errorResponseUiPathAutomationHubAppInventoryApiSchema },
      },
      {
        on: 401,
        kind: "errorResponseUiPathAutomationHubAppInventoryApi2",
        decode: { kind: "json", schema: errorResponseUiPathAutomationHubAppInventoryApiSchema },
      },
    ];
  }

  export type DeleteApplicationRequest = {
    /** Unique identifier of the application to delete */
    applicationId: number;
  };

  export class DeleteApplicationError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseUiPathAutomationHubAppInventoryApi",
          ErrorResponseUiPathAutomationHubAppInventoryApi
        >
      | Declared<
          "errorResponseUiPathAutomationHubAppInventoryApi2",
          ErrorResponseUiPathAutomationHubAppInventoryApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteApplicationError> = [
      {
        on: 401,
        kind: "errorResponseUiPathAutomationHubAppInventoryApi",
        decode: { kind: "json", schema: errorResponseUiPathAutomationHubAppInventoryApiSchema },
      },
      {
        on: 404,
        kind: "errorResponseUiPathAutomationHubAppInventoryApi2",
        decode: { kind: "json", schema: errorResponseUiPathAutomationHubAppInventoryApiSchema },
      },
    ];
  }

  export type ListAppInventoryRequest = {
    /** Page number for pagination (1-based) @default 1 */
    page?: number;
    /** Number of records per page @default 20 */
    pageSize?: number;
  };

  export const listAppInventoryRequestSchema: Schema<ListAppInventoryRequest> = s.lazySchema(() =>
    s.object<ListAppInventoryRequest>({
      page: s.defaulted(s.int().check(s.gte(1)), 1),
      pageSize: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 20),
    }),
  );

  export class ListAppInventoryError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseUiPathAutomationHubAppInventoryApi",
          ErrorResponseUiPathAutomationHubAppInventoryApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAppInventoryError> = [
      {
        on: 401,
        kind: "errorResponseUiPathAutomationHubAppInventoryApi",
        decode: { kind: "json", schema: errorResponseUiPathAutomationHubAppInventoryApiSchema },
      },
    ];
  }
}
