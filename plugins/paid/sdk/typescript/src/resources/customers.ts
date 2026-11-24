import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { costTracesResponseSchema, type CostTracesResponse } from "../models/cost-traces-response.js";
import {
  createCustomerRequestInternalSchema,
  type CreateCustomerRequest,
} from "../models/create-customer-request.js";
import {
  creditBalanceListResponseSchema,
  type CreditBalanceListResponse,
} from "../models/credit-balance-list-response.js";
import {
  creditGrantCreateRequestSchema,
  type CreditGrantCreateRequest,
} from "../models/credit-grant-create-request.js";
import {
  customerAliasCreateRequestSchema,
  type CustomerAliasCreateRequest,
} from "../models/customer-alias-create-request.js";
import {
  customerAliasListResponseSchema,
  type CustomerAliasListResponse,
} from "../models/customer-alias-list-response.js";
import { customerAliasSchema, type CustomerAlias } from "../models/customer-alias.js";
import { customerCreateSchema, type CustomerCreate } from "../models/customer-create.js";
import { customerListResponseSchema, type CustomerListResponse } from "../models/customer-list-response.js";
import { customerStateSchema, type CustomerState } from "../models/customer-state.js";
import { customerUpdateSchema, type CustomerUpdate } from "../models/customer-update.js";
import { customerUserSchema, type CustomerUser } from "../models/customer-user.js";
import { customerSchema, type Customer } from "../models/customer.js";
import { customer1Schema, type Customer1 } from "../models/customer1.js";
import {
  customersCheckEntitlementResponse200Schema,
  type CustomersCheckEntitlementResponse200,
} from "../models/customers-check-entitlement-response200.js";
import {
  CustomersCustomerIdEntitlementGetParametersView,
  customersCustomerIdEntitlementGetParametersViewSchema,
} from "../models/customers-customer-id-entitlement-get-parameters-view.js";
import {
  customersExternalPaymentMethodsRequestSchema,
  type CustomersExternalPaymentMethodsRequest,
} from "../models/customers-external-payment-methods-request.js";
import {
  customersGetParametersCreationStateSchema,
  type CustomersGetParametersCreationState,
} from "../models/customers-get-parameters-creation-state.js";
import {
  customersGetParametersStatusSchema,
  type CustomersGetParametersStatus,
} from "../models/customers-get-parameters-status.js";
import { entitlementUsageSchema, type EntitlementUsage } from "../models/entitlement-usage.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  grantCustomerCreditsResponseSchema,
  type GrantCustomerCreditsResponse,
} from "../models/grant-customer-credits-response.js";
import { paymentMethodSchema, type PaymentMethod } from "../models/payment-method.js";
import {
  updateCustomerRequestInternalSchema,
  type UpdateCustomerRequest,
} from "../models/update-customer-request.js";
import {
  upsertCustomerUserRequestInternalSchema,
  type UpsertCustomerUserRequest,
} from "../models/upsert-customer-user-request.js";
import {
  usageSummariesResponseSchema,
  type UsageSummariesResponse,
} from "../models/usage-summaries-response.js";
import type { Servers } from "../servers.js";

export class Customers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Check customer entitlement for an event
   *
   * @returns Success response
   *
   * @throws {@link Customers.CheckEntitlementError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkEntitlement(
    request: Customers.CheckEntitlementRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomersCheckEntitlementResponse200, Customers.CheckEntitlementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/{customerId}/entitlement"),
        auth: noneAuth,
        pathParams: [{ name: "customerId", value: request.customerId, schema: s.string() }],
        query: [
          { name: "event_name", value: request.eventName, schema: s.string() },
          {
            name: "view",
            value: request.view,
            schema: s.defaulted(
              customersCustomerIdEntitlementGetParametersViewSchema,
              CustomersCustomerIdEntitlementGetParametersView.ActiveOnly,
            ),
          },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customersCheckEntitlementResponse200Schema },
        errorFactory: Customers.CheckEntitlementError,
      },
      options,
    );
  }

  /**
   * Create a new customer
   *
   * @remarks
   * Creates a new customer for the organization
   *
   * @returns 201
   *
   * @throws {@link Customers.CreateCustomerError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCustomer(
    request: Customers.CreateCustomerRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Customer1, Customers.CreateCustomerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/customers/"),
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
          schema: s.optional(s.lazy(() => createCustomerRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: customer1Schema },
        errorFactory: Customers.CreateCustomerError,
      },
      options,
    );
  }

  /**
   * Create customer alias
   *
   * @remarks
   * Create an alternate external identifier for a customer by Paid display ID.
   *
   * @returns 201
   *
   * @throws {@link Customers.CreateCustomerAliasError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCustomerAlias(
    request: Customers.CreateCustomerAliasRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomerAlias, Customers.CreateCustomerAliasError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/customers/{id}/aliases"),
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
          schema: s.optional(s.lazy(() => customerAliasCreateRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: customerAliasSchema },
        errorFactory: Customers.CreateCustomerAliasError,
      },
      options,
    );
  }

  /**
   * Create customer alias by external ID
   *
   * @remarks
   * Create an alternate external identifier for a customer by external ID.
   *
   * @returns 201
   *
   * @throws {@link Customers.CreateCustomerAliasByExternalIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCustomerAliasByExternalId(
    request: Customers.CreateCustomerAliasByExternalIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomerAlias, Customers.CreateCustomerAliasByExternalIdError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/customers/external/{externalId}/aliases"),
        auth: noneAuth,
        pathParams: [{ name: "externalId", value: request.externalId, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => customerAliasCreateRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: customerAliasSchema },
        errorFactory: Customers.CreateCustomerAliasByExternalIdError,
      },
      options,
    );
  }

  /**
   * Create customer payment method by external ID
   *
   * @remarks
   * Creates a new payment method for a customer using a Stripe confirmation token.
   *
   * @returns Payment method created successfully
   *
   * @throws {@link Customers.CreatePaymentMethodError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPaymentMethod(
    request: Customers.CreatePaymentMethodRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentMethod, Customers.CreatePaymentMethodError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/customers/external/{externalId}/payment-methods"),
        auth: noneAuth,
        pathParams: [{ name: "externalId", value: request.externalId, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => customersExternalPaymentMethodsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: paymentMethodSchema },
        errorFactory: Customers.CreatePaymentMethodError,
      },
      options,
    );
  }

  /**
   * Create a new customer
   *
   * @returns Success response - customer already exists with this externalId
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  create3(request: Customers.Create3Request, options?: RequestOptions): ApiPromise<Customer, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/customers"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => customerCreateSchema)) },
      },
      {
        success: { kind: "json", schema: customerSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete customer by external ID
   *
   * @returns Success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteByExternalId3(
    request: Customers.DeleteByExternalId3Request,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/customers/external/{externalId}"),
        auth: noneAuth,
        pathParams: [{ name: "externalId", value: request.externalId, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete customer alias
   *
   * @remarks
   * Remove an alternate external identifier from a customer by Paid display ID.
   *
   * @returns 200
   *
   * @throws {@link Customers.DeleteCustomerAliasError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCustomerAlias(
    request: Customers.DeleteCustomerAliasRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Customers.DeleteCustomerAliasError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/customers/{id}/aliases/{alias}"),
        auth: noneAuth,
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "alias", value: request.alias, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Customers.DeleteCustomerAliasError,
      },
      options,
    );
  }

  /**
   * Delete customer alias by external ID
   *
   * @remarks
   * Remove an alternate external identifier from a customer by external ID.
   *
   * @returns 200
   *
   * @throws {@link Customers.DeleteCustomerAliasByExternalIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCustomerAliasByExternalId(
    request: Customers.DeleteCustomerAliasByExternalIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Customers.DeleteCustomerAliasByExternalIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/customers/external/{externalId}/aliases/{alias}"),
        auth: noneAuth,
        pathParams: [
          { name: "externalId", value: request.externalId, schema: s.string() },
          { name: "alias", value: request.alias, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Customers.DeleteCustomerAliasByExternalIdError,
      },
      options,
    );
  }

  /**
   * Delete customer
   *
   * @remarks
   * Delete a customer by Paid display ID. Use the value returned as `customer.id`, for example
   * `cus_abc123`. If you have your own customer ID, use `DELETE
   * /api/v2/customers/external/{externalId}`.
   *
   * @returns 200
   *
   * @throws {@link Customers.DeleteCustomerByIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCustomerById(
    request: Customers.DeleteCustomerByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Customers.DeleteCustomerByIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/customers/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Customers.DeleteCustomerByIdError,
      },
      options,
    );
  }

  /**
   * Delete customer payment method by external ID
   *
   * @remarks
   * Deletes a specific payment method from a customer's account.
   *
   * @returns Payment method deleted successfully
   *
   * @throws {@link Customers.DeletePaymentMethodError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deletePaymentMethod(
    request: Customers.DeletePaymentMethodRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Customers.DeletePaymentMethodError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/customers/external/{externalId}/payment-methods/{paymentMethodId}",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "externalId", value: request.externalId, schema: s.string() },
          { name: "paymentMethodId", value: request.paymentMethodId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Customers.DeletePaymentMethodError,
      },
      options,
    );
  }

  /**
   * Delete customer
   *
   * @returns Success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  delete3(
    request: Customers.Delete3Request,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/customers/{customerId}"),
        auth: noneAuth,
        pathParams: [{ name: "customerId", value: request.customerId, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get customer by external ID
   *
   * @returns Success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getByExternalId3(
    request: Customers.GetByExternalId3Request,
    options?: RequestOptions,
  ): ApiPromise<Customer, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/external/{externalId}"),
        auth: noneAuth,
        pathParams: [{ name: "externalId", value: request.externalId, schema: s.string() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customerSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fetch cost traces for a customer by external ID
   *
   * @returns Success response
   *
   * @throws {@link Customers.GetCostsByExternalIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCostsByExternalId(
    request: Customers.GetCostsByExternalIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CostTracesResponse, Customers.GetCostsByExternalIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/external/{externalId}/costs"),
        auth: noneAuth,
        pathParams: [{ name: "externalId", value: request.externalId, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 100) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.dateTime()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.dateTime()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: costTracesResponseSchema },
        errorFactory: Customers.GetCostsByExternalIdError,
      },
      options,
    );
  }

  /**
   * Get customer
   *
   * @remarks
   * Get a customer by Paid display ID. Use the value returned as `customer.id`, for example
   * `cus_abc123`. If you have your own customer ID, use `GET
   * /api/v2/customers/external/{externalId}`.
   *
   * @returns 200
   *
   * @throws {@link Customers.GetCustomerByIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCustomerById(
    request: Customers.GetCustomerByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Customer1, Customers.GetCustomerByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customer1Schema },
        errorFactory: Customers.GetCustomerByIdError,
      },
      options,
    );
  }

  /**
   * Get customer credit balances
   *
   * @remarks
   * Get current customer credit balances grouped by currency for a Paid customer display ID. Use
   * the value returned as `customer.id`, for example `cus_abc123`. If you have your own customer
   * ID, use `/api/v2/customers/external/{externalId}/credits/balances`.
   *
   * @returns 200
   *
   * @throws {@link Customers.GetCustomerCreditBalancesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCustomerCreditBalances(
    request: Customers.GetCustomerCreditBalancesRequest,
    options?: RequestOptions,
  ): ApiPromise<CreditBalanceListResponse, Customers.GetCustomerCreditBalancesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/{id}/credits/balances"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: creditBalanceListResponseSchema },
        errorFactory: Customers.GetCustomerCreditBalancesError,
      },
      options,
    );
  }

  /**
   * Get customer credit balances by external ID
   *
   * @remarks
   * Get current customer credit balances grouped by currency, looked up by external ID
   *
   * @returns 200
   *
   * @throws {@link Customers.GetCustomerCreditBalancesByExternalIdError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCustomerCreditBalancesByExternalId(
    request: Customers.GetCustomerCreditBalancesByExternalIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CreditBalanceListResponse, Customers.GetCustomerCreditBalancesByExternalIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/external/{externalId}/credits/balances"),
        auth: noneAuth,
        pathParams: [{ name: "externalId", value: request.externalId, schema: s.string() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: creditBalanceListResponseSchema },
        errorFactory: Customers.GetCustomerCreditBalancesByExternalIdError,
      },
      options,
    );
  }

  /**
   * Get customer state by external ID
   *
   * @remarks
   * Primary integration endpoint for agents and programmatic clients using their own customer IDs.
   * Use the value you stored on `customer.externalId`, for example `customer_123`.
   *
   * @returns 200
   *
   * @throws {@link Customers.GetCustomerStateByExternalIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCustomerStateByExternalId(
    request: Customers.GetCustomerStateByExternalIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomerState, Customers.GetCustomerStateByExternalIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/external/{externalId}/state"),
        auth: noneAuth,
        pathParams: [{ name: "externalId", value: request.externalId, schema: s.string() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customerStateSchema },
        errorFactory: Customers.GetCustomerStateByExternalIdError,
      },
      options,
    );
  }

  /**
   * Get customer state
   *
   * @remarks
   * Get the current customer state by Paid display ID
   *
   * @returns 200
   *
   * @throws {@link Customers.GetCustomerStateByIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCustomerStateById(
    request: Customers.GetCustomerStateByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomerState, Customers.GetCustomerStateByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/{id}/state"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customerStateSchema },
        errorFactory: Customers.GetCustomerStateByIdError,
      },
      options,
    );
  }

  /**
   * Get customer entitlements
   *
   * @returns Success response
   *
   * @throws {@link Customers.GetEntitlementsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEntitlements(
    request: Customers.GetEntitlementsRequest,
    options?: RequestOptions,
  ): ApiPromise<EntitlementUsage[], Customers.GetEntitlementsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/{customerId}/credit-bundles"),
        auth: noneAuth,
        pathParams: [{ name: "customerId", value: request.customerId, schema: s.string() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => entitlementUsageSchema)) },
        errorFactory: Customers.GetEntitlementsError,
      },
      options,
    );
  }

  /**
   * Fetch usage summaries for a customer by external ID
   *
   * @returns Success response
   *
   * @throws {@link Customers.GetUsageByExternalIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUsageByExternalId(
    request: Customers.GetUsageByExternalIdRequest,
    options?: RequestOptions,
  ): ApiPromise<UsageSummariesResponse, Customers.GetUsageByExternalIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/external/{externalId}/usage"),
        auth: noneAuth,
        pathParams: [{ name: "externalId", value: request.externalId, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 100) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.dateTime()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.dateTime()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: usageSummariesResponseSchema },
        errorFactory: Customers.GetUsageByExternalIdError,
      },
      options,
    );
  }

  /**
   * Get customer by ID
   *
   * @returns Success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  get3(request: Customers.Get3Request, options?: RequestOptions): ApiPromise<Customer, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/{customerId}"),
        auth: noneAuth,
        pathParams: [{ name: "customerId", value: request.customerId, schema: s.string() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customerSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Grant customer credits
   *
   * @remarks
   * Immediately grant credits to a customer using an active credit currency key.
   *
   * @returns 201
   *
   * @throws {@link Customers.GrantCustomerCreditsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  grantCustomerCredits(
    request: Customers.GrantCustomerCreditsRequest,
    options?: RequestOptions,
  ): ApiPromise<GrantCustomerCreditsResponse, Customers.GrantCustomerCreditsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/customers/{id}/credits/grants"),
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
          schema: s.optional(s.lazy(() => creditGrantCreateRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: grantCustomerCreditsResponseSchema },
        errorFactory: Customers.GrantCustomerCreditsError,
      },
      options,
    );
  }

  /**
   * Grant customer credits by external ID
   *
   * @remarks
   * Immediately grant credits to a customer looked up by external ID using an active credit
   * currency key.
   *
   * @returns 201
   *
   * @throws {@link Customers.GrantCustomerCreditsByExternalIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  grantCustomerCreditsByExternalId(
    request: Customers.GrantCustomerCreditsByExternalIdRequest,
    options?: RequestOptions,
  ): ApiPromise<GrantCustomerCreditsResponse, Customers.GrantCustomerCreditsByExternalIdError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/customers/external/{externalId}/credits/grants"),
        auth: noneAuth,
        pathParams: [{ name: "externalId", value: request.externalId, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => creditGrantCreateRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: grantCustomerCreditsResponseSchema },
        errorFactory: Customers.GrantCustomerCreditsByExternalIdError,
      },
      options,
    );
  }

  /**
   * List customer aliases
   *
   * @remarks
   * List alternate external identifiers that resolve to a customer by Paid display ID.
   *
   * @returns 200
   *
   * @throws {@link Customers.ListCustomerAliasesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCustomerAliases(
    request: Customers.ListCustomerAliasesRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomerAliasListResponse, Customers.ListCustomerAliasesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/{id}/aliases"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 10) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customerAliasListResponseSchema },
        errorFactory: Customers.ListCustomerAliasesError,
      },
      options,
    );
  }

  /**
   * List customer aliases by external ID
   *
   * @remarks
   * List alternate external identifiers that resolve to a customer by external ID.
   *
   * @returns 200
   *
   * @throws {@link Customers.ListCustomerAliasesByExternalIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCustomerAliasesByExternalId(
    request: Customers.ListCustomerAliasesByExternalIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomerAliasListResponse, Customers.ListCustomerAliasesByExternalIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/external/{externalId}/aliases"),
        auth: noneAuth,
        pathParams: [{ name: "externalId", value: request.externalId, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 10) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customerAliasListResponseSchema },
        errorFactory: Customers.ListCustomerAliasesByExternalIdError,
      },
      options,
    );
  }

  /**
   * List customers
   *
   * @remarks
   * Get a list of customers for the organization
   *
   * @returns 200
   *
   * @throws {@link Customers.ListCustomersError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCustomers(
    request: Customers.ListCustomersRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomerListResponse, Customers.ListCustomersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 10) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => customersGetParametersStatusSchema)),
          },
          {
            name: "creationState",
            value: request.creationState,
            schema: s.optional(s.lazy(() => customersGetParametersCreationStateSchema)),
          },
          { name: "createdAtFrom", value: request.createdAtFrom, schema: s.optional(s.string()) },
          { name: "createdAtTo", value: request.createdAtTo, schema: s.optional(s.string()) },
          { name: "externalId", value: request.externalId, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customerListResponseSchema },
        errorFactory: Customers.ListCustomersError,
      },
      options,
    );
  }

  /**
   * List customer payment methods by external ID
   *
   * @remarks
   * Retrieves all payment methods associated with a customer identified by their external ID.
   *
   * @returns Success response
   *
   * @throws {@link Customers.ListPaymentMethodsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPaymentMethods(
    request: Customers.ListPaymentMethodsRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentMethod[], Customers.ListPaymentMethodsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/external/{externalId}/payment-methods"),
        auth: noneAuth,
        pathParams: [{ name: "externalId", value: request.externalId, schema: s.string() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => paymentMethodSchema)) },
        errorFactory: Customers.ListPaymentMethodsError,
      },
      options,
    );
  }

  /**
   * List customers
   *
   * @returns Success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  list3(request: Customers.List3Request, options?: RequestOptions): ApiPromise<Customer[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => customerSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update customer by external ID
   *
   * @returns Success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateByExternalId2(
    request: Customers.UpdateByExternalId2Request,
    options?: RequestOptions,
  ): ApiPromise<Customer, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/customers/external/{externalId}"),
        auth: noneAuth,
        pathParams: [{ name: "externalId", value: request.externalId, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => customerUpdateSchema)) },
      },
      {
        success: { kind: "json", schema: customerSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update customer
   *
   * @remarks
   * Update a customer by Paid display ID. Use the value returned as `customer.id`, for example
   * `cus_abc123`. If you have your own customer ID, use `PUT
   * /api/v2/customers/external/{externalId}`.
   *
   * @returns 200
   *
   * @throws {@link Customers.UpdateCustomerByIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCustomerById(
    request: Customers.UpdateCustomerByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Customer1, Customers.UpdateCustomerByIdError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/customers/{id}"),
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
          schema: s.optional(s.lazy(() => updateCustomerRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: customer1Schema },
        errorFactory: Customers.UpdateCustomerByIdError,
      },
      options,
    );
  }

  /**
   * Update customer
   *
   * @returns Customer updated successfully
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  update2(request: Customers.Update2Request, options?: RequestOptions): ApiPromise<Customer, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/customers/{customerId}"),
        auth: noneAuth,
        pathParams: [{ name: "customerId", value: request.customerId, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => customerUpdateSchema)) },
      },
      {
        success: { kind: "json", schema: customerSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Upsert customer user by external IDs
   *
   * @remarks
   * Create or update a customer user using customer and user external IDs
   *
   * @returns 200
   *
   * @throws {@link Customers.UpsertCustomerUserByExternalIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  upsertCustomerUserByExternalId(
    request: Customers.UpsertCustomerUserByExternalIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomerUser, Customers.UpsertCustomerUserByExternalIdError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/customers/{customerExternalId}/users/{userExternalId}"),
        auth: noneAuth,
        pathParams: [
          { name: "customerExternalId", value: request.customerExternalId, schema: s.string() },
          { name: "userExternalId", value: request.userExternalId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => upsertCustomerUserRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: customerUserSchema },
        errorFactory: Customers.UpsertCustomerUserByExternalIdError,
      },
      options,
    );
  }
}

export namespace Customers {
  export type CheckEntitlementRequest = {
    /** The customer ID */
    customerId: string;
    /** The name of the usage event to check entitlement for */
    eventName: string;
    /**
     * Filter view - 'all' returns all entitlements regardless of status, 'active_only' returns only
     * currently active entitlements with available credits
     *
     * @default CustomersCustomerIdEntitlementGetParametersView.ActiveOnly
     */
    view?: CustomersCustomerIdEntitlementGetParametersView;
    /** Bearer authentication */
    authorization: string;
  };

  export class CheckEntitlementError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<CheckEntitlementError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateCustomerRequestParams = {
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: CreateCustomerRequest;
  };

  export class CreateCustomerError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCustomerError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type CreateCustomerAliasRequest = {
    /** Paid customer display id */
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: CustomerAliasCreateRequest;
  };

  export class CreateCustomerAliasError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCustomerAliasError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type CreateCustomerAliasByExternalIdRequest = {
    /** Customer ID from the integrator's system, stored on Paid as `externalId`. */
    externalId: string;
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: CustomerAliasCreateRequest;
  };

  export class CreateCustomerAliasByExternalIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCustomerAliasByExternalIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type CreatePaymentMethodRequest = {
    /** The external ID of the customer */
    externalId: string;
    /** Bearer authentication */
    authorization: string;
    body?: CustomersExternalPaymentMethodsRequest;
  };

  export class CreatePaymentMethodError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreatePaymentMethodError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Create3Request = {
    /** Bearer authentication */
    authorization: string;
    body?: CustomerCreate;
  };

  export type DeleteByExternalId3Request = {
    externalId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export type DeleteCustomerAliasRequest = {
    /** Paid customer display id */
    id: string;
    /** Customer alias value. */
    alias: string;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class DeleteCustomerAliasError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCustomerAliasError> = [
      { on: 403, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteCustomerAliasByExternalIdRequest = {
    /** Customer ID from the integrator's system, stored on Paid as `externalId`. */
    externalId: string;
    /** Customer alias value. */
    alias: string;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class DeleteCustomerAliasByExternalIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCustomerAliasByExternalIdError> = [
      { on: 403, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteCustomerByIdRequest = {
    /** Paid customer display id */
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class DeleteCustomerByIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCustomerByIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeletePaymentMethodRequest = {
    /** The external ID of the customer */
    externalId: string;
    /** The ID of the payment method to delete */
    paymentMethodId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class DeletePaymentMethodError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<DeletePaymentMethodError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Delete3Request = {
    customerId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export type GetByExternalId3Request = {
    externalId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export type GetCostsByExternalIdRequest = {
    /** The external ID of the customer */
    externalId: string;
    /** Maximum number of traces to return (1-1000) @default 100 */
    limit?: number;
    /** Number of traces to skip for pagination @default 0 */
    offset?: number;
    /** Filter traces starting from this time (ISO 8601 format) */
    startTime?: Date;
    /** Filter traces up to this time (ISO 8601 format) */
    endTime?: Date;
    /** Bearer authentication */
    authorization: string;
  };

  export class GetCostsByExternalIdError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCostsByExternalIdError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCustomerByIdRequest = {
    /** Paid customer display id */
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class GetCustomerByIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCustomerByIdError> = [
      { on: 403, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCustomerCreditBalancesRequest = {
    /** Paid customer display id */
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class GetCustomerCreditBalancesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCustomerCreditBalancesError> = [
      { on: 403, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCustomerCreditBalancesByExternalIdRequest = {
    /** Customer ID from the integrator's system, stored on Paid as `externalId`. */
    externalId: string;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class GetCustomerCreditBalancesByExternalIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCustomerCreditBalancesByExternalIdError> = [
      { on: 403, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCustomerStateByExternalIdRequest = {
    /** Customer ID from the integrator's system, stored on Paid as `externalId`. */
    externalId: string;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class GetCustomerStateByExternalIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCustomerStateByExternalIdError> = [
      { on: 403, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCustomerStateByIdRequest = {
    /** Paid customer display id */
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class GetCustomerStateByIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCustomerStateByIdError> = [
      { on: 403, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetEntitlementsRequest = {
    /** The customer ID */
    customerId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class GetEntitlementsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetEntitlementsError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetUsageByExternalIdRequest = {
    /** The external ID of the customer */
    externalId: string;
    /** Maximum number of usage summaries to return (1-1000) @default 100 */
    limit?: number;
    /** Number of usage summaries to skip for pagination @default 0 */
    offset?: number;
    /**
     * Filter usage summaries starting from this time (ISO 8601 format). Returns summaries that
     * overlap with the time range.
     */
    startTime?: Date;
    /**
     * Filter usage summaries up to this time (ISO 8601 format). Returns summaries that overlap with
     * the time range.
     */
    endTime?: Date;
    /** Bearer authentication */
    authorization: string;
  };

  export class GetUsageByExternalIdError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUsageByExternalIdError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Get3Request = {
    customerId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export type GrantCustomerCreditsRequest = {
    /** Paid customer display id */
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: CreditGrantCreateRequest;
  };

  export class GrantCustomerCreditsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GrantCustomerCreditsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GrantCustomerCreditsByExternalIdRequest = {
    /** Customer ID from the integrator's system, stored on Paid as `externalId`. */
    externalId: string;
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: CreditGrantCreateRequest;
  };

  export class GrantCustomerCreditsByExternalIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GrantCustomerCreditsByExternalIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListCustomerAliasesRequest = {
    /** Paid customer display id */
    id: string;
    /** @default 10 */
    limit?: number;
    offset?: number;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class ListCustomerAliasesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCustomerAliasesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListCustomerAliasesByExternalIdRequest = {
    /** Customer ID from the integrator's system, stored on Paid as `externalId`. */
    externalId: string;
    /** @default 10 */
    limit?: number;
    offset?: number;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class ListCustomerAliasesByExternalIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCustomerAliasesByExternalIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListCustomersRequest = {
    /** @default 10 */
    limit?: number;
    offset?: number;
    /** Search by customer name (case-insensitive, matches anywhere in the name). */
    name?: string;
    /** Filter by customer status. churned: customers marked as churned. active: everyone else. */
    status?: CustomersGetParametersStatus;
    /** Filter by creation state: draft or active. */
    creationState?: CustomersGetParametersCreationState;
    /**
     * Only customers created on or after this date. Accepts an ISO 8601 date or date-time.
     * Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit
     * timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision
     * matters.
     */
    createdAtFrom?: string;
    /**
     * Only customers created on or before this date. Accepts an ISO 8601 date or date-time.
     * Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit
     * timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision
     * matters.
     */
    createdAtTo?: string;
    /** Filter by your external customer ID (exact match). */
    externalId?: string;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class ListCustomersError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCustomersError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListPaymentMethodsRequest = {
    /** The external ID of the customer */
    externalId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class ListPaymentMethodsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<ListPaymentMethodsError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type List3Request = {
    /** Bearer authentication */
    authorization: string;
  };

  export type UpdateByExternalId2Request = {
    externalId: string;
    /** Bearer authentication */
    authorization: string;
    body?: CustomerUpdate;
  };

  export type UpdateCustomerByIdRequest = {
    /** Paid customer display id */
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: UpdateCustomerRequest;
  };

  export class UpdateCustomerByIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateCustomerByIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type Update2Request = {
    customerId: string;
    /** Bearer authentication */
    authorization: string;
    body?: CustomerUpdate;
  };

  export type UpsertCustomerUserByExternalIdRequest = {
    customerExternalId: string;
    userExternalId: string;
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: UpsertCustomerUserRequest;
  };

  export class UpsertCustomerUserByExternalIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpsertCustomerUserByExternalIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
