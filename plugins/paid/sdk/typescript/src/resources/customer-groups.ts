import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { addMembersResponseSchema, type AddMembersResponse } from "../models/add-members-response.js";
import {
  createCustomerGroupRequestSchema,
  type CreateCustomerGroupRequest,
} from "../models/create-customer-group-request.js";
import {
  customerGroupDeleteResponseSchema,
  type CustomerGroupDeleteResponse,
} from "../models/customer-group-delete-response.js";
import { customerGroupDetailSchema, type CustomerGroupDetail } from "../models/customer-group-detail.js";
import {
  customerGroupListResponseSchema,
  type CustomerGroupListResponse,
} from "../models/customer-group-list-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { memberRequestSchema, type MemberRequest } from "../models/member-request.js";
import {
  removeMembersResponseSchema,
  type RemoveMembersResponse,
} from "../models/remove-members-response.js";
import { setMembersResponseSchema, type SetMembersResponse } from "../models/set-members-response.js";
import {
  updateCustomerGroupRequestSchema,
  type UpdateCustomerGroupRequest,
} from "../models/update-customer-group-request.js";
import type { Servers } from "../servers.js";

export class CustomerGroups {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create customer group
   *
   * @remarks
   * Create a new customer group. Names must be unique per org.
   *
   * @returns 201
   *
   * @throws {@link CustomerGroups.CreateCustomerGroupError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCustomerGroup(
    request: CustomerGroups.CreateCustomerGroupRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CustomerGroupDetail, CustomerGroups.CreateCustomerGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/customer-groups/"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createCustomerGroupRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: customerGroupDetailSchema },
        errorFactory: CustomerGroups.CreateCustomerGroupError,
      },
      options,
    );
  }

  /**
   * Add members to group
   *
   * @remarks
   * Additive. Adds customers to the group without removing existing members.
   *
   * @returns 200
   *
   * @throws {@link CustomerGroups.CreateCustomerGroupMembersError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCustomerGroupMembers(
    request: CustomerGroups.CreateCustomerGroupMembersRequest,
    options?: RequestOptions,
  ): ApiPromise<AddMembersResponse, CustomerGroups.CreateCustomerGroupMembersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/customer-groups/{id}/members"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => memberRequestSchema)) },
      },
      {
        success: { kind: "json", schema: addMembersResponseSchema },
        errorFactory: CustomerGroups.CreateCustomerGroupMembersError,
      },
      options,
    );
  }

  /**
   * Delete customer group
   *
   * @remarks
   * Deletes the group and unbinds all members. Unbound customers fall back to the base value model
   * config.
   *
   * @returns 200
   *
   * @throws {@link CustomerGroups.DeleteCustomerGroupError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCustomerGroup(
    request: CustomerGroups.DeleteCustomerGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomerGroupDeleteResponse, CustomerGroups.DeleteCustomerGroupError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/customer-groups/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: customerGroupDeleteResponseSchema },
        errorFactory: CustomerGroups.DeleteCustomerGroupError,
      },
      options,
    );
  }

  /**
   * Remove members from group
   *
   * @remarks
   * Removes specific customers from the group.
   *
   * @returns 200
   *
   * @throws {@link CustomerGroups.DeleteCustomerGroupMembersError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCustomerGroupMembers(
    request: CustomerGroups.DeleteCustomerGroupMembersRequest,
    options?: RequestOptions,
  ): ApiPromise<RemoveMembersResponse, CustomerGroups.DeleteCustomerGroupMembersError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/customer-groups/{id}/members"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => memberRequestSchema)) },
      },
      {
        success: { kind: "json", schema: removeMembersResponseSchema },
        errorFactory: CustomerGroups.DeleteCustomerGroupMembersError,
      },
      options,
    );
  }

  /**
   * Get customer group
   *
   * @remarks
   * Returns group details including member list (capped at 500).
   *
   * @returns 200
   *
   * @throws {@link CustomerGroups.GetCustomerGroupError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCustomerGroup(
    request: CustomerGroups.GetCustomerGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomerGroupDetail, CustomerGroups.GetCustomerGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/customer-groups/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customerGroupDetailSchema },
        errorFactory: CustomerGroups.GetCustomerGroupError,
      },
      options,
    );
  }

  /**
   * List customer groups
   *
   * @remarks
   * List all customer groups for the organization.
   *
   * @returns 200
   *
   * @throws {@link CustomerGroups.ListCustomerGroupsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCustomerGroups(
    request: CustomerGroups.ListCustomerGroupsRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomerGroupListResponse, CustomerGroups.ListCustomerGroupsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/customer-groups/"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 10) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customerGroupListResponseSchema },
        errorFactory: CustomerGroups.ListCustomerGroupsError,
      },
      options,
    );
  }

  /**
   * Update customer group
   *
   * @remarks
   * Update a customer group's name or description.
   *
   * @returns 200
   *
   * @throws {@link CustomerGroups.UpdateCustomerGroupError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCustomerGroup(
    request: CustomerGroups.UpdateCustomerGroupRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CustomerGroupDetail, CustomerGroups.UpdateCustomerGroupError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/customer-groups/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateCustomerGroupRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: customerGroupDetailSchema },
        errorFactory: CustomerGroups.UpdateCustomerGroupError,
      },
      options,
    );
  }

  /**
   * Set group members
   *
   * @remarks
   * Reconcile membership. The provided list is the complete desired membership. Customers not in
   * the list are removed. Customers in the list but not currently in the group are added.
   *
   * @returns 200
   *
   * @throws {@link CustomerGroups.UpdateCustomerGroupMembersError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCustomerGroupMembers(
    request: CustomerGroups.UpdateCustomerGroupMembersRequest,
    options?: RequestOptions,
  ): ApiPromise<SetMembersResponse, CustomerGroups.UpdateCustomerGroupMembersError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/customer-groups/{id}/members"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => memberRequestSchema)) },
      },
      {
        success: { kind: "json", schema: setMembersResponseSchema },
        errorFactory: CustomerGroups.UpdateCustomerGroupMembersError,
      },
      options,
    );
  }
}

export namespace CustomerGroups {
  export type CreateCustomerGroupRequestParams = {
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: CreateCustomerGroupRequest;
  };

  export class CreateCustomerGroupError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCustomerGroupError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type CreateCustomerGroupMembersRequest = {
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: MemberRequest;
  };

  export class CreateCustomerGroupMembersError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCustomerGroupMembersError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteCustomerGroupRequest = {
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: Record<string, unknown>;
  };

  export class DeleteCustomerGroupError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCustomerGroupError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteCustomerGroupMembersRequest = {
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: MemberRequest;
  };

  export class DeleteCustomerGroupMembersError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCustomerGroupMembersError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCustomerGroupRequest = {
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class GetCustomerGroupError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCustomerGroupError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListCustomerGroupsRequest = {
    /** @default 10 */
    limit?: number;
    offset?: number;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class ListCustomerGroupsError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListCustomerGroupsError> = [
      { on: 500, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateCustomerGroupRequestParams = {
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: UpdateCustomerGroupRequest;
  };

  export class UpdateCustomerGroupError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateCustomerGroupError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateCustomerGroupMembersRequest = {
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: MemberRequest;
  };

  export class UpdateCustomerGroupMembersError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateCustomerGroupMembersError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
