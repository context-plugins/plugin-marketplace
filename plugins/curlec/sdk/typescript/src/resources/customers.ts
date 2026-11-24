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
  customerRazorpayCustomersApiInternalSchema,
  type CustomerRazorpayCustomersApi,
} from "../models/customer-razorpay-customers-api.js";
import { customersRequestInternalSchema, type CustomersRequest } from "../models/customers-request.js";
import { customersRequest1Schema, type CustomersRequest1 } from "../models/customers-request1.js";
import { customersResponseInternalSchema, type CustomersResponse } from "../models/customers-response.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * Customer profiles store contact information for recurring billing, saved cards, and personalised
 * checkout. Each email+contact combination must be unique.
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
   * Create a customer
   *
   * @remarks
   * Create a customer profile. The combination of email and contact must be unique per customer.
   * Customer profiles enable saved card tokens, faster checkout, and customer-scoped data.
   *
   * @returns Customer created.
   *
   * @throws {@link Customers.CreateCustomerError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCustomer(
    request: Customers.CreateCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomerRazorpayCustomersApi, Customers.CreateCustomerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/customers"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: customersRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: customerRazorpayCustomersApiInternalSchema },
        errorFactory: Customers.CreateCustomerError,
      },
      options,
    );
  }

  /**
   * Fetch all customers
   *
   * @remarks
   * Retrieve a paginated list of all customers. Maximum 100 per call.
   *
   * @returns Collection of customers.
   *
   * @throws {@link Customers.FetchAllCustomersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchAllCustomers(
    request: Customers.FetchAllCustomersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<CustomersResponse, Customers.FetchAllCustomersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [],
        query: [
          { name: "count", value: request.count, schema: s.defaulted(s.int(), 10) },
          { name: "skip", value: request.skip, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customersResponseInternalSchema },
        errorFactory: Customers.FetchAllCustomersError,
      },
      options,
    );
  }

  /**
   * Fetch customer by ID
   *
   * @remarks
   * Retrieve full details of a specific customer.
   *
   * @returns Customer details.
   *
   * @throws {@link Customers.FetchCustomerError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchCustomer(
    request: Customers.FetchCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomerRazorpayCustomersApi, Customers.FetchCustomerError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/{id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customerRazorpayCustomersApiInternalSchema },
        errorFactory: Customers.FetchCustomerError,
      },
      options,
    );
  }

  /**
   * Update a customer
   *
   * @remarks
   * Update a customer's name, email, or contact. The combination of email and contact must remain
   * unique. Contact number must contain at least 8 digits.
   *
   * @returns Updated customer.
   *
   * @throws {@link Customers.UpdateCustomerError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCustomer(
    request: Customers.UpdateCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomerRazorpayCustomersApi, Customers.UpdateCustomerError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/customers/{id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: customersRequest1Schema },
      },
      {
        success: { kind: "json", schema: customerRazorpayCustomersApiInternalSchema },
        errorFactory: Customers.UpdateCustomerError,
      },
      options,
    );
  }
}

export namespace Customers {
  export type CreateCustomerRequest = {
    body: CustomersRequest;
  };

  export class CreateCustomerError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCustomerError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchAllCustomersRequest = {
    /** Number of records to return per call. Maximum 100. Default 10. @default 10 */
    count?: number;
    /** Number of records to skip. Use with count for pagination. Default 0. @default 0 */
    skip?: number;
  };

  export const fetchAllCustomersRequestSchema: Schema<FetchAllCustomersRequest> = s.lazySchema(() =>
    s.object<FetchAllCustomersRequest>({
      count: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 10),
      skip: s.defaulted(s.int().check(s.gte(0)), 0),
    }),
  );

  export class FetchAllCustomersError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<FetchAllCustomersError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchCustomerRequest = {
    /** Customer ID (cust_*). */
    id: string;
  };

  export class FetchCustomerError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchCustomerError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateCustomerRequest = {
    /** Customer ID (cust_*). */
    id: string;
    body: CustomersRequest1;
  };

  export class UpdateCustomerError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateCustomerError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
