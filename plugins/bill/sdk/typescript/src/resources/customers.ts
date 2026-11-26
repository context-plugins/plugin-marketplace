import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bdcErrorInternalSchema, type BdcError } from "../models/bdc-error.js";
import {
  chargeAuthorizationRequestDtoSchema,
  type ChargeAuthorizationRequestDto,
} from "../models/charge-authorization-request-dto.js";
import {
  chargeAuthorizationResponseDtoSchema,
  type ChargeAuthorizationResponseDto,
} from "../models/charge-authorization-response-dto.js";
import {
  createCustomerBankAccountRequestDtoInternalSchema,
  createCustomerBankAccountRequestDtoSchema,
  type CreateCustomerBankAccountRequestDto,
} from "../models/create-customer-bank-account-request-dto.js";
import {
  createCustomerContactRequestDtoInternalSchema,
  createCustomerContactRequestDtoSchema,
  type CreateCustomerContactRequestDto,
} from "../models/create-customer-contact-request-dto.js";
import {
  customerBankAccountResponseDtoSchema,
  type CustomerBankAccountResponseDto,
} from "../models/customer-bank-account-response-dto.js";
import {
  customerContactResponseDtoSchema,
  type CustomerContactResponseDto,
} from "../models/customer-contact-response-dto.js";
import {
  customerCreateRequestDtoInternalSchema,
  type CustomerCreateRequestDto,
} from "../models/customer-create-request-dto.js";
import {
  customerResponseDtoInternalSchema,
  type CustomerResponseDto,
} from "../models/customer-response-dto.js";
import {
  customerUpdateRequestDtoInternalSchema,
  customerUpdateRequestDtoSchema,
  type CustomerUpdateRequestDto,
} from "../models/customer-update-request-dto.js";
import {
  listResponseDtoCustomerBankAccountResponseDtoSchema,
  type ListResponseDtoCustomerBankAccountResponseDto,
} from "../models/list-response-dto-customer-bank-account-response-dto.js";
import {
  listResponseDtoCustomerContactResponseDtoSchema,
  type ListResponseDtoCustomerContactResponseDto,
} from "../models/list-response-dto-customer-contact-response-dto.js";
import {
  listResponseDtoCustomerResponseDtoInternalSchema,
  type ListResponseDtoCustomerResponseDto,
} from "../models/list-response-dto-customer-response-dto.js";
import {
  updateCustomerBankAccountRequestDtoSchema,
  type UpdateCustomerBankAccountRequestDto,
} from "../models/update-customer-bank-account-request-dto.js";
import {
  updateCustomerContactRequestDtoInternalSchema,
  updateCustomerContactRequestDtoSchema,
  type UpdateCustomerContactRequestDto,
} from "../models/update-customer-contact-request-dto.js";
import type { Servers } from "../servers.js";

export class Customers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Archive a customer
   *
   * @remarks
   * Archive an existing customer. In the response, the `archived` field is set as `true`.
   *
   * You can restore an archived customer with `POST /v3/customers/{customerId}/restore`. There is
   * no change when you archive an archived customer.
   *
   * @returns Archive a customer response
   *
   * @throws {@link Customers.ArchiveCustomerError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  archiveCustomer(
    request: Customers.ArchiveCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomerResponseDto, Customers.ArchiveCustomerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/customers/{customerId}/archive"),
        auth: noneAuth,
        pathParams: [{ name: "customerId", value: request.customerId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customerResponseDtoInternalSchema },
        errorFactory: Customers.ArchiveCustomerError,
      },
      options,
    );
  }

  /**
   * Archive a customer bank account
   *
   * @remarks
   * Archive an existing customer bank account. In the response, the `archived` field is set as
   * `true`. An archived customer bank account cannot be restored.
   *
   * @returns Archive a customer bank account response
   *
   * @throws {@link Customers.ArchiveCustomerBankAccountError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  archiveCustomerBankAccount(
    request: Customers.ArchiveCustomerBankAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomerBankAccountResponseDto, Customers.ArchiveCustomerBankAccountError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v3/customers/{customerId}/bank-accounts/{bankAccountId}/archive",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "customerId", value: request.customerId, schema: s.string() },
          { name: "bankAccountId", value: request.bankAccountId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customerBankAccountResponseDtoSchema },
        errorFactory: Customers.ArchiveCustomerBankAccountError,
      },
      options,
    );
  }

  /**
   * Archive a customer contact
   *
   * @remarks
   * Archive an existing customer contact. In the response, the `archived` field is set as `true`.
   *
   * You can restore an archived customer with `POST
   * /v3/customers/{customerId}/contacts/{contactId}/restore`. There is no change when you archive
   * an archived customer contact.
   *
   * @returns Archive a customer contact response
   *
   * @throws {@link Customers.ArchiveCustomerContactError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  archiveCustomerContact(
    request: Customers.ArchiveCustomerContactRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomerContactResponseDto, Customers.ArchiveCustomerContactError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/customers/{customerId}/contacts/{contactId}/archive"),
        auth: noneAuth,
        pathParams: [
          { name: "customerId", value: request.customerId, schema: s.string() },
          { name: "contactId", value: request.contactId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customerContactResponseDtoSchema },
        errorFactory: Customers.ArchiveCustomerContactError,
      },
      options,
    );
  }

  /**
   * Set charge customer authorization
   *
   * @remarks
   * Authorize your organization to charge a customer for invoices.
   *
   * By default, your organization is not authorized to charge a customer. The customer
   * `authorizedToCharge` field must be set as `true` for you to charge the customer for invoices.
   *
   * @returns Set charge customer authorization response
   *
   * @throws {@link Customers.AuthorizeToChargeCustomerError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  authorizeToChargeCustomer(
    request: Customers.AuthorizeToChargeCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<ChargeAuthorizationResponseDto, Customers.AuthorizeToChargeCustomerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/customers/{customerId}/charge-authorization"),
        auth: noneAuth,
        pathParams: [{ name: "customerId", value: request.customerId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: chargeAuthorizationRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: chargeAuthorizationResponseDtoSchema },
        errorFactory: Customers.AuthorizeToChargeCustomerError,
      },
      options,
    );
  }

  /**
   * Create a customer
   *
   * @remarks
   * Create a new customer.
   *
   * See Customers in the Guides section for more information, sample requests, and responses.
   *
   * @returns Create a customer response
   *
   * @throws {@link Customers.CreateCustomerError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCustomer(
    request: Customers.CreateCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomerResponseDto, Customers.CreateCustomerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/customers"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: customerCreateRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: customerResponseDtoInternalSchema },
        errorFactory: Customers.CreateCustomerError,
      },
      options,
    );
  }

  /**
   * Create a customer bank account
   *
   * @remarks
   * Create a new customer bank account. When you add customer bank account information, you can
   * charge the customer for invoices.
   *
   * Creating a customer bank account follows a set of rules.
   * * **Customer billing address**: The customer `billingAddress` information is required before
   *   you can create a customer bank account.
   * * **Customer bank account verification**: If the customer bank account requires verification,
   *   BILL requires up to 2 business days to complete a one-time verification of the bank account.
   *
   * **Note**: When you add a customer bank account in the production environment, BILL validates
   * the customer routing number before you can charge the customer. You will get an error message
   * if the customer routing number is invalid in production.
   *
   * @returns Create a customer bank account response
   *
   * @throws {@link Customers.CreateCustomerBankAccountError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCustomerBankAccount(
    request: Customers.CreateCustomerBankAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomerBankAccountResponseDto, Customers.CreateCustomerBankAccountError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/customers/{customerId}/bank-accounts"),
        auth: noneAuth,
        pathParams: [{ name: "customerId", value: request.customerId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: createCustomerBankAccountRequestDtoInternalSchema,
        },
      },
      {
        success: { kind: "json", schema: customerBankAccountResponseDtoSchema },
        errorFactory: Customers.CreateCustomerBankAccountError,
      },
      options,
    );
  }

  /**
   * Create a customer contact
   *
   * @remarks
   * Create a new customer contact.
   *
   * When you create a customer contact, BILL enables the customer to sign in to the BILL web app
   * with the `email` value and a random password. The signed-in customer can view invoices, make
   * payments, and manage their account.
   *
   * @returns Create a customer contact response
   *
   * @throws {@link Customers.CreateCustomerContactError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCustomerContact(
    request: Customers.CreateCustomerContactRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomerContactResponseDto, Customers.CreateCustomerContactError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/customers/{customerId}/contacts"),
        auth: noneAuth,
        pathParams: [{ name: "customerId", value: request.customerId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createCustomerContactRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: customerContactResponseDtoSchema },
        errorFactory: Customers.CreateCustomerContactError,
      },
      options,
    );
  }

  /**
   * Get customer details
   *
   * @remarks
   * Get details about an existing customer.
   *
   * @returns Get customer details response
   *
   * @throws {@link Customers.GetCustomerError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCustomer(
    request: Customers.GetCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomerResponseDto, Customers.GetCustomerError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/customers/{customerId}"),
        auth: noneAuth,
        pathParams: [{ name: "customerId", value: request.customerId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customerResponseDtoInternalSchema },
        errorFactory: Customers.GetCustomerError,
      },
      options,
    );
  }

  /**
   * Get customer bank account details
   *
   * @remarks
   * Get details about an existing customer bank account.
   *
   * @returns Get customer bank account details response
   *
   * @throws {@link Customers.GetCustomerBankAccountError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCustomerBankAccount(
    request: Customers.GetCustomerBankAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomerBankAccountResponseDto, Customers.GetCustomerBankAccountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/customers/{customerId}/bank-accounts/{bankAccountId}"),
        auth: noneAuth,
        pathParams: [
          { name: "customerId", value: request.customerId, schema: s.string() },
          { name: "bankAccountId", value: request.bankAccountId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customerBankAccountResponseDtoSchema },
        errorFactory: Customers.GetCustomerBankAccountError,
      },
      options,
    );
  }

  /**
   * Get customer contact details
   *
   * @remarks
   * Get details about an existing customer contact.
   *
   * @returns Get customer contact details response
   *
   * @throws {@link Customers.GetCustomerContactError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCustomerContact(
    request: Customers.GetCustomerContactRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomerContactResponseDto, Customers.GetCustomerContactError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/customers/{customerId}/contacts/{contactId}"),
        auth: noneAuth,
        pathParams: [
          { name: "customerId", value: request.customerId, schema: s.string() },
          { name: "contactId", value: request.contactId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customerContactResponseDtoSchema },
        errorFactory: Customers.GetCustomerContactError,
      },
      options,
    );
  }

  /**
   * Get list of customer bank accounts
   *
   * @remarks
   * Get a list of customer bank account objects. By default, you get 20 results on one page of
   * results. Set `max` in your request to get up to 100 results on one page.
   *
   * See Search operations with lists in the Guides section for filtering, sorting, and pagination
   * examples.
   *
   * @returns Get list of customer bank accounts response
   *
   * @throws {@link Customers.ListCustomerBankAccountsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCustomerBankAccounts(
    request: Customers.ListCustomerBankAccountsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseDtoCustomerBankAccountResponseDto, Customers.ListCustomerBankAccountsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/customers/{customerId}/bank-accounts"),
        auth: noneAuth,
        pathParams: [{ name: "customerId", value: request.customerId, schema: s.string() }],
        query: [
          { name: "max", value: request.max, schema: s.optionalNullable(s.int()) },
          { name: "sort", value: request.sort, schema: s.optionalNullable(s.string()) },
          { name: "filters", value: request.filters, schema: s.optionalNullable(s.string()) },
          { name: "page", value: request.page, schema: s.optionalNullable(s.string()) },
        ],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseDtoCustomerBankAccountResponseDtoSchema },
        errorFactory: Customers.ListCustomerBankAccountsError,
      },
      options,
    );
  }

  /**
   * Get list of customer contacts
   *
   * @remarks
   * Get a list of customer contact objects. By default, you get 20 results on one page of results.
   * Set `max` in your request to get up to 100 results on one page.
   *
   * See Search operations with lists in the Guides section for filtering, sorting, and pagination
   * examples.
   *
   * @returns Get list of customer contacts response
   *
   * @throws {@link Customers.ListCustomerContactsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCustomerContacts(
    request: Customers.ListCustomerContactsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseDtoCustomerContactResponseDto, Customers.ListCustomerContactsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/customers/{customerId}/contacts"),
        auth: noneAuth,
        pathParams: [{ name: "customerId", value: request.customerId, schema: s.string() }],
        query: [
          { name: "max", value: request.max, schema: s.optionalNullable(s.int()) },
          { name: "sort", value: request.sort, schema: s.optionalNullable(s.string()) },
          { name: "filters", value: request.filters, schema: s.optionalNullable(s.string()) },
          { name: "page", value: request.page, schema: s.optionalNullable(s.string()) },
        ],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseDtoCustomerContactResponseDtoSchema },
        errorFactory: Customers.ListCustomerContactsError,
      },
      options,
    );
  }

  /**
   * Get list of customers
   *
   * @remarks
   * Get a list of customer objects. By default, you get 20 results on one page of results. Set
   * `max` in your request to get up to 100 results on one page.
   *
   * See Search operations with lists in the Guides section for filtering, sorting, and pagination
   * examples.
   *
   * @returns Get list of customers response
   *
   * @throws {@link Customers.ListCustomersError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCustomers(
    request: Customers.ListCustomersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListResponseDtoCustomerResponseDto, Customers.ListCustomersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/customers"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "max", value: request.max, schema: s.optionalNullable(s.int()) },
          { name: "sort", value: request.sort, schema: s.optionalNullable(s.string()) },
          { name: "filters", value: request.filters, schema: s.optionalNullable(s.string()) },
          { name: "page", value: request.page, schema: s.optionalNullable(s.string()) },
        ],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseDtoCustomerResponseDtoInternalSchema },
        errorFactory: Customers.ListCustomersError,
      },
      options,
    );
  }

  /**
   * Restore an archived customer
   *
   * @remarks
   * Restore an archived customer. In the response, the `archived` field is set as `false`.
   *
   * You can perform any valid BILL operation on restored customers. There is no change when you
   * restore a restored customer.
   *
   * @returns Restore an archived customer response
   *
   * @throws {@link Customers.RestoreCustomerError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  restoreCustomer(
    request: Customers.RestoreCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomerResponseDto, Customers.RestoreCustomerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/customers/{customerId}/restore"),
        auth: noneAuth,
        pathParams: [{ name: "customerId", value: request.customerId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customerResponseDtoInternalSchema },
        errorFactory: Customers.RestoreCustomerError,
      },
      options,
    );
  }

  /**
   * Restore a customer contact
   *
   * @remarks
   * Restore an archived customer contact. In the response, the `archived` field is set as `false`.
   *
   * You can perform any valid BILL operation on restored customer contacts. There is no change when
   * you restore a restored customer contact.
   *
   * @returns Restore a customer contact response
   *
   * @throws {@link Customers.RestoreCustomerContactError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  restoreCustomerContact(
    request: Customers.RestoreCustomerContactRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomerContactResponseDto, Customers.RestoreCustomerContactError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/customers/{customerId}/contacts/{contactId}/restore"),
        auth: noneAuth,
        pathParams: [
          { name: "customerId", value: request.customerId, schema: s.string() },
          { name: "contactId", value: request.contactId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customerContactResponseDtoSchema },
        errorFactory: Customers.RestoreCustomerContactError,
      },
      options,
    );
  }

  /**
   * Update a customer
   *
   * @remarks
   * Update details about an existing customer.
   *
   * @returns Update a customer response
   *
   * @throws {@link Customers.UpdateCustomerError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCustomer(
    request: Customers.UpdateCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomerResponseDto, Customers.UpdateCustomerError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/customers/{customerId}"),
        auth: noneAuth,
        pathParams: [{ name: "customerId", value: request.customerId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: customerUpdateRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: customerResponseDtoInternalSchema },
        errorFactory: Customers.UpdateCustomerError,
      },
      options,
    );
  }

  /**
   * Update a customer bank account
   *
   * @remarks
   * Update details about an existing customer bank account.
   *
   * You can update only the `nickname` and `ownerType` fields for a customer bank account. If you
   * want to update any of the other fields, create a new customer bank account with `POST
   * /v3/customers/{customerId}/bank-accounts`.
   *
   * @returns Update a customer bank account response
   *
   * @throws {@link Customers.UpdateCustomerBankAccountError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCustomerBankAccount(
    request: Customers.UpdateCustomerBankAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomerBankAccountResponseDto, Customers.UpdateCustomerBankAccountError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/customers/{customerId}/bank-accounts/{bankAccountId}"),
        auth: noneAuth,
        pathParams: [
          { name: "customerId", value: request.customerId, schema: s.string() },
          { name: "bankAccountId", value: request.bankAccountId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: updateCustomerBankAccountRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: customerBankAccountResponseDtoSchema },
        errorFactory: Customers.UpdateCustomerBankAccountError,
      },
      options,
    );
  }

  /**
   * Update a customer contact
   *
   * @remarks
   * Update details about an existing customer contact.
   *
   * @returns Update a customer contact response
   *
   * @throws {@link Customers.UpdateCustomerContactError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCustomerContact(
    request: Customers.UpdateCustomerContactRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomerContactResponseDto, Customers.UpdateCustomerContactError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/customers/{customerId}/contacts/{contactId}"),
        auth: noneAuth,
        pathParams: [
          { name: "customerId", value: request.customerId, schema: s.string() },
          { name: "contactId", value: request.contactId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: updateCustomerContactRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: customerContactResponseDtoSchema },
        errorFactory: Customers.UpdateCustomerContactError,
      },
      options,
    );
  }
}

export namespace Customers {
  export type ArchiveCustomerRequest = {
    customerId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const archiveCustomerRequestSchema: Schema<ArchiveCustomerRequest> = s.lazySchema(() =>
    s.object<ArchiveCustomerRequest>({
      customerId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class ArchiveCustomerError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ArchiveCustomerError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type ArchiveCustomerBankAccountRequest = {
    customerId: string;
    bankAccountId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const archiveCustomerBankAccountRequestSchema: Schema<ArchiveCustomerBankAccountRequest> =
    s.lazySchema(() =>
      s.object<ArchiveCustomerBankAccountRequest>({
        customerId: s.string().check(s.minLength(1)),
        bankAccountId: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
    );

  export class ArchiveCustomerBankAccountError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ArchiveCustomerBankAccountError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type ArchiveCustomerContactRequest = {
    customerId: string;
    contactId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const archiveCustomerContactRequestSchema: Schema<ArchiveCustomerContactRequest> = s.lazySchema(() =>
    s.object<ArchiveCustomerContactRequest>({
      customerId: s.string().check(s.minLength(1)),
      contactId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class ArchiveCustomerContactError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ArchiveCustomerContactError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type AuthorizeToChargeCustomerRequest = {
    customerId: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: ChargeAuthorizationRequestDto;
  };

  export const authorizeToChargeCustomerRequestSchema: Schema<AuthorizeToChargeCustomerRequest> =
    s.lazySchema(() =>
      s.object<AuthorizeToChargeCustomerRequest>({
        customerId: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
        body: chargeAuthorizationRequestDtoSchema,
      }),
    );

  export class AuthorizeToChargeCustomerError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<AuthorizeToChargeCustomerError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type CreateCustomerRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: CustomerCreateRequestDto;
  };

  export class CreateCustomerError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCustomerError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type CreateCustomerBankAccountRequest = {
    customerId: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: CreateCustomerBankAccountRequestDto;
  };

  export const createCustomerBankAccountRequestSchema: Schema<CreateCustomerBankAccountRequest> =
    s.lazySchema(() =>
      s.object<CreateCustomerBankAccountRequest>({
        customerId: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
        body: createCustomerBankAccountRequestDtoSchema,
      }),
    );

  export class CreateCustomerBankAccountError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCustomerBankAccountError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type CreateCustomerContactRequest = {
    customerId: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: CreateCustomerContactRequestDto;
  };

  export const createCustomerContactRequestSchema: Schema<CreateCustomerContactRequest> = s.lazySchema(() =>
    s.object<CreateCustomerContactRequest>({
      customerId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      body: createCustomerContactRequestDtoSchema,
    }),
  );

  export class CreateCustomerContactError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCustomerContactError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type GetCustomerRequest = {
    customerId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const getCustomerRequestSchema: Schema<GetCustomerRequest> = s.lazySchema(() =>
    s.object<GetCustomerRequest>({
      customerId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class GetCustomerError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCustomerError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type GetCustomerBankAccountRequest = {
    customerId: string;
    bankAccountId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const getCustomerBankAccountRequestSchema: Schema<GetCustomerBankAccountRequest> = s.lazySchema(() =>
    s.object<GetCustomerBankAccountRequest>({
      customerId: s.string().check(s.minLength(1)),
      bankAccountId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class GetCustomerBankAccountError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCustomerBankAccountError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type GetCustomerContactRequest = {
    customerId: string;
    contactId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const getCustomerContactRequestSchema: Schema<GetCustomerContactRequest> = s.lazySchema(() =>
    s.object<GetCustomerContactRequest>({
      customerId: s.string().check(s.minLength(1)),
      contactId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class GetCustomerContactError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCustomerContactError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type ListCustomerBankAccountsRequest = {
    customerId: string;
    max?: number | null;
    sort?: string | null;
    filters?: string | null;
    page?: string | null;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const listCustomerBankAccountsRequestSchema: Schema<ListCustomerBankAccountsRequest> = s.lazySchema(
    () =>
      s.object<ListCustomerBankAccountsRequest>({
        customerId: s.string().check(s.minLength(1)),
        max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
        sort: s.optionalNullable(s.string()),
        filters: s.optionalNullable(s.string()),
        page: s.optionalNullable(s.string()),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
  );

  export class ListCustomerBankAccountsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCustomerBankAccountsError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type ListCustomerContactsRequest = {
    customerId: string;
    max?: number | null;
    sort?: string | null;
    filters?: string | null;
    page?: string | null;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const listCustomerContactsRequestSchema: Schema<ListCustomerContactsRequest> = s.lazySchema(() =>
    s.object<ListCustomerContactsRequest>({
      customerId: s.string().check(s.minLength(1)),
      max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
      sort: s.optionalNullable(s.string()),
      filters: s.optionalNullable(s.string()),
      page: s.optionalNullable(s.string()),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class ListCustomerContactsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCustomerContactsError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type ListCustomersRequest = {
    max?: number | null;
    sort?: string | null;
    filters?: string | null;
    page?: string | null;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const listCustomersRequestSchema: Schema<ListCustomersRequest> = s.lazySchema(() =>
    s.object<ListCustomersRequest>({
      max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
      sort: s.optionalNullable(s.string()),
      filters: s.optionalNullable(s.string()),
      page: s.optionalNullable(s.string()),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class ListCustomersError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCustomersError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type RestoreCustomerRequest = {
    customerId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const restoreCustomerRequestSchema: Schema<RestoreCustomerRequest> = s.lazySchema(() =>
    s.object<RestoreCustomerRequest>({
      customerId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class RestoreCustomerError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<RestoreCustomerError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type RestoreCustomerContactRequest = {
    customerId: string;
    contactId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const restoreCustomerContactRequestSchema: Schema<RestoreCustomerContactRequest> = s.lazySchema(() =>
    s.object<RestoreCustomerContactRequest>({
      customerId: s.string().check(s.minLength(1)),
      contactId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class RestoreCustomerContactError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<RestoreCustomerContactError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type UpdateCustomerRequest = {
    customerId: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: CustomerUpdateRequestDto;
  };

  export const updateCustomerRequestSchema: Schema<UpdateCustomerRequest> = s.lazySchema(() =>
    s.object<UpdateCustomerRequest>({
      customerId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      body: customerUpdateRequestDtoSchema,
    }),
  );

  export class UpdateCustomerError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateCustomerError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type UpdateCustomerBankAccountRequest = {
    customerId: string;
    bankAccountId: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: UpdateCustomerBankAccountRequestDto;
  };

  export const updateCustomerBankAccountRequestSchema: Schema<UpdateCustomerBankAccountRequest> =
    s.lazySchema(() =>
      s.object<UpdateCustomerBankAccountRequest>({
        customerId: s.string().check(s.minLength(1)),
        bankAccountId: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
        body: updateCustomerBankAccountRequestDtoSchema,
      }),
    );

  export class UpdateCustomerBankAccountError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateCustomerBankAccountError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type UpdateCustomerContactRequest = {
    customerId: string;
    contactId: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: UpdateCustomerContactRequestDto;
  };

  export const updateCustomerContactRequestSchema: Schema<UpdateCustomerContactRequest> = s.lazySchema(() =>
    s.object<UpdateCustomerContactRequest>({
      customerId: s.string().check(s.minLength(1)),
      contactId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      body: updateCustomerContactRequestDtoSchema,
    }),
  );

  export class UpdateCustomerContactError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateCustomerContactError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }
}
