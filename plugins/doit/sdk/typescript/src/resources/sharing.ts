import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  resourcePermissionsResponseSchema,
  type ResourcePermissionsResponse,
} from "../models/resource-permissions-response.js";
import { resourceTypeSchema, type ResourceType } from "../models/resource-type.js";
import { sharingV1RequestSchema, type SharingV1Request } from "../models/sharing-v1-request.js";
import type { Servers } from "../servers.js";

/**
 * Manage permissions associated with specified Cloud Analytics resources.
 */
export class Sharing {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get resource permissions
   *
   * @remarks
   * Returns the permissions associated with the specified Cloud Analytics resource. Supports
   * Allocations, Alerts, Budgets, and Reports.
   *
   * @returns OK - Resource permissions returned.
   *
   * @throws {@link Sharing.GetResourcePermissionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getResourcePermission(
    request: Sharing.GetResourcePermissionRequest,
    options?: RequestOptions,
  ): ApiPromise<ResourcePermissionsResponse, Sharing.GetResourcePermissionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sharing/v1/{resourceType}/{resourceId}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [
          { name: "resourceType", value: request.resourceType, schema: resourceTypeSchema },
          { name: "resourceId", value: request.resourceId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: resourcePermissionsResponseSchema },
        errorFactory: Sharing.GetResourcePermissionError,
      },
      options,
    );
  }

  /**
   * Update resource permissions
   *
   * @remarks
   * Updates the permissions associated with the specified Cloud Analytics resource. Supports
   * Allocations, Alerts, Budgets, and Reports.
   *
   * @returns OK - Resource permissions configuration updated.
   *
   * @throws {@link Sharing.UpdateResourcePermissionError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateResourcePermission(
    request: Sharing.UpdateResourcePermissionRequest,
    options?: RequestOptions,
  ): ApiPromise<ResourcePermissionsResponse, Sharing.UpdateResourcePermissionError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/sharing/v1/{resourceType}/{resourceId}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [
          { name: "resourceType", value: request.resourceType, schema: resourceTypeSchema },
          { name: "resourceId", value: request.resourceId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => sharingV1RequestSchema)) },
      },
      {
        success: { kind: "json", schema: resourcePermissionsResponseSchema },
        errorFactory: Sharing.UpdateResourcePermissionError,
      },
      options,
    );
  }
}

export namespace Sharing {
  export type GetResourcePermissionRequest = {
    /** Resource type. */
    resourceType: ResourceType;
    /** Resource ID. See [Resource IDs](https://developer.doit.com/docs/resource-ids). */
    resourceId: string;
  };

  export class GetResourcePermissionError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetResourcePermissionError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateResourcePermissionRequest = {
    /** Resource type. */
    resourceType: ResourceType;
    /** Resource ID. See [Resource IDs](https://developer.doit.com/docs/resource-ids). */
    resourceId: string;
    body?: SharingV1Request;
  };

  export class UpdateResourcePermissionError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateResourcePermissionError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
