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
  companiesApiCustomersResponseInternalSchema,
  type CompaniesApiCustomersResponse,
} from "../models/companies-api-customers-response.js";
import { customerCreateInternalSchema, type CustomerCreate } from "../models/customer-create.js";
import { customerUpdateInternalSchema, type CustomerUpdate } from "../models/customer-update.js";
import { customerInternalSchema, type Customer } from "../models/customer.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import type { Servers } from "../servers.js";

/**
 * Manage customer records
 */
export class Customers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a Customer
   *
   * @remarks
   * Creates a new customer object in the specified company.
   *
   * @returns Customer created successfully
   *
   * @throws {@link Customers.CreateCustomerError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  createCustomer(
    request: Customers.CreateCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<Customer, Customers.CreateCustomerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/companies({company_id})/customers"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [{ name: "company_id", value: request.companyId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: customerCreateInternalSchema },
      },
      {
        success: { kind: "json", schema: customerInternalSchema },
        errorFactory: Customers.CreateCustomerError,
      },
      options,
    );
  }

  /**
   * Delete a Customer
   *
   * @remarks
   * Deletes a customer by ID.
   *
   * @returns Customer deleted successfully
   *
   * @throws {@link Customers.DeleteCustomerError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  deleteCustomer(
    request: Customers.DeleteCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Customers.DeleteCustomerError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/companies({company_id})/customers({customer_id})"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          { name: "company_id", value: request.companyId, schema: s.string() },
          { name: "customer_id", value: request.customerId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Customers.DeleteCustomerError,
      },
      options,
    );
  }

  /**
   * Get a Customer
   *
   * @remarks
   * Retrieves a specific customer by ID.
   *
   * @returns Successfully retrieved customer
   *
   * @throws {@link Customers.GetCustomerError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getCustomer(
    request: Customers.GetCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<Customer, Customers.GetCustomerError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies({company_id})/customers({customer_id})"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          { name: "company_id", value: request.companyId, schema: s.string() },
          { name: "customer_id", value: request.customerId, schema: s.string() },
        ],
        query: [
          { name: "$select", value: request.select, schema: s.optional(s.string()) },
          { name: "$expand", value: request.expand, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customerInternalSchema },
        errorFactory: Customers.GetCustomerError,
      },
      options,
    );
  }

  /**
   * List Customers
   *
   * @remarks
   * Returns a list of customer objects from the specified company.
   *
   * @returns Successfully retrieved customers
   *
   * @throws {@link Customers.ListCustomersError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listCustomers(
    request: Customers.ListCustomersRequest,
    options?: RequestOptions,
  ): ApiPromise<CompaniesApiCustomersResponse, Customers.ListCustomersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies({company_id})/customers"),
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
          { name: "$expand", value: request.expand, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companiesApiCustomersResponseInternalSchema },
        errorFactory: Customers.ListCustomersError,
      },
      options,
    );
  }

  /**
   * Update a Customer
   *
   * @remarks
   * Updates an existing customer object.
   *
   * @returns Customer updated successfully
   *
   * @throws {@link Customers.UpdateCustomerError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  updateCustomer(
    request: Customers.UpdateCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<Customer, Customers.UpdateCustomerError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/companies({company_id})/customers({customer_id})"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          { name: "company_id", value: request.companyId, schema: s.string() },
          { name: "customer_id", value: request.customerId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "If-Match", value: request.ifMatch, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: customerUpdateInternalSchema },
      },
      {
        success: { kind: "json", schema: customerInternalSchema },
        errorFactory: Customers.UpdateCustomerError,
      },
      options,
    );
  }
}

export namespace Customers {
  export type CreateCustomerRequest = {
    /** The unique identifier of the company */
    companyId: string;
    body: CustomerCreate;
  };

  export class CreateCustomerError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCustomerError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteCustomerRequest = {
    /** The unique identifier of the company */
    companyId: string;
    /** The unique identifier of the customer */
    customerId: string;
  };

  export class DeleteCustomerError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCustomerError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCustomerRequest = {
    /** The unique identifier of the company */
    companyId: string;
    /** The unique identifier of the customer */
    customerId: string;
    /** Comma-separated list of properties to include in the response */
    select?: string;
    /** Related entities to expand inline */
    expand?: string;
  };

  export class GetCustomerError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCustomerError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListCustomersRequest = {
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
    /** Related entities to expand inline */
    expand?: string;
  };

  export const listCustomersRequestSchema: Schema<ListCustomersRequest> = s.lazySchema(() =>
    s.object<ListCustomersRequest>({
      companyId: s.string(),
      top: s.optional(s.int().check(s.gte(0))),
      skip: s.optional(s.int().check(s.gte(0))),
      filter: s.optional(s.string()),
      orderby: s.optional(s.string()),
      select: s.optional(s.string()),
      expand: s.optional(s.string()),
    }),
  );

  export class ListCustomersError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListCustomersError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateCustomerRequest = {
    /** The unique identifier of the company */
    companyId: string;
    /** The unique identifier of the customer */
    customerId: string;
    /** ETag value for optimistic concurrency control */
    ifMatch: string;
    body: CustomerUpdate;
  };

  export class UpdateCustomerError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateCustomerError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
