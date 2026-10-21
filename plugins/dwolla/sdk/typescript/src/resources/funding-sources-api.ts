import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { Accept, acceptSchema } from "../models/accept.js";
import {
  fundingSourcesMicroDepositsRequestSchema,
  type FundingSourcesMicroDepositsRequest,
} from "../models/unions/funding-sources-micro-deposits-request.js";
import {
  fundingSourcesRequestSchema,
  type FundingSourcesRequest,
} from "../models/unions/funding-sources-request.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to Funding Sources
 */
export class FundingSourcesApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create customer funding source
   *
   * @remarks
   * Creates a bank account or debit card funding source for a customer. Supports multiple methods
   * including manual entry with routing/account numbers, instant verification using existing open
   * banking connections, debit card addition via Exchange, and virtual account numbers. Bank
   * funding sources require verification before transfers can be initiated.
   *
   * @returns created
   *
   * @throws {@link FundingSourcesApi.CreateCustomerFundingSourceError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCustomerFundingSource(
    request: FundingSourcesApi.CreateCustomerFundingSourceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, FundingSourcesApi.CreateCustomerFundingSourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/customers/{id}/funding-sources"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FundingSourcesApi.CreateCustomerFundingSourceError,
      },
      options,
    );
  }

  /**
   * Create an on-demand transfer authorization
   *
   * @remarks
   * Create an on-demand transfer authorization that allows Customers to pre-authorize variable
   * amount ACH transfers from their bank account for future payments. This authorization is used
   * when creating Customer funding sources to enable flexible payment processing. Returns UI text
   * elements including authorization body text and button text for display in your application's
   * bank account addition flow.
   *
   * @returns Ok
   *
   * @throws {@link FundingSourcesApi.CreateOnDemandTransferAuthorizationError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createOnDemandTransferAuthorization(
    request: FundingSourcesApi.CreateOnDemandTransferAuthorizationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, FundingSourcesApi.CreateOnDemandTransferAuthorizationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/on-demand-authorizations"),
        auth: this.#auth.clientCredentials,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FundingSourcesApi.CreateOnDemandTransferAuthorizationError,
      },
      options,
    );
  }

  /**
   * Retrieve a funding source
   *
   * @remarks
   * Returns detailed information for a specific funding source, including its type, status, and
   * verification details. Supports bank accounts (via Open Banking), debit card funding sources,
   * and Dwolla balance (verified customers only). Debit card funding sources include masked card
   * details such as brand, last four digits, expiration date, and cardholder name, along with
   * `dateOfBirth` and `countryOfBirth` when those optional identity fields were supplied.
   *
   * @returns successful operation
   *
   * @throws {@link FundingSourcesApi.GetFundingSourceError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFundingSource(
    request: FundingSourcesApi.GetFundingSourceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, FundingSourcesApi.GetFundingSourceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/funding-sources/{id}"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FundingSourcesApi.GetFundingSourceError,
      },
      options,
    );
  }

  /**
   * Retrieve funding source balance
   *
   * @remarks
   * Returns the current balance for a specific funding source. For bank accounts, includes
   * available and closing balances; for Dwolla balance, includes balance and total amounts; for
   * settlement accounts (bankUsageType = card-network), includes available balance only. Supports
   * bank accounts (via Open Banking), Dwolla balance (verified customers only), and settlement
   * accounts for card network processing.
   *
   * @returns successful operation
   *
   * @throws {@link FundingSourcesApi.GetFundingSourceBalanceError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFundingSourceBalance(
    request: FundingSourcesApi.GetFundingSourceBalanceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, FundingSourcesApi.GetFundingSourceBalanceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/funding-sources/{id}/balance"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FundingSourcesApi.GetFundingSourceBalanceError,
      },
      options,
    );
  }

  /**
   * Retrieve micro-deposits details
   *
   * @remarks
   * Returns the status and details of micro-deposits for a funding source to check verification
   * eligibility. Includes deposit status (pending, processed, failed), creation timestamp, failure
   * details with ACH return codes if deposits failed, and ACH trace IDs for each deposit when
   * available. Use this endpoint to determine when micro-deposits are ready for verification.
   *
   * @returns successful operation
   *
   * @throws {@link FundingSourcesApi.GetMicroDepositsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMicroDeposits(
    request: FundingSourcesApi.GetMicroDepositsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, FundingSourcesApi.GetMicroDepositsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/funding-sources/{id}/micro-deposits"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FundingSourcesApi.GetMicroDepositsError,
      },
      options,
    );
  }

  /**
   * Retrieve VAN account and routing numbers
   *
   * @remarks
   * Returns the unique account and routing numbers for a Virtual Account Number (VAN) funding
   * source. These numbers can be used by external systems to initiate ACH transactions that pull
   * funds from or push funds to the associated Dwolla balance.
   *
   * @returns successful operation
   *
   * @throws {@link FundingSourcesApi.GetVanRoutingError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVanRouting(
    request: FundingSourcesApi.GetVanRoutingRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, FundingSourcesApi.GetVanRoutingError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/funding-sources/{id}/ach-routing"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FundingSourcesApi.GetVanRoutingError,
      },
      options,
    );
  }

  /**
   * Initiate or Verify micro-deposits
   *
   * @remarks
   * Handles micro-deposit bank verification process. Make a request without a request body to
   * initiate two small deposits to the customer's bank account. Include deposit amounts to verify
   * the received values and complete verification.
   *
   * @returns successful operation
   *
   * @throws {@link FundingSourcesApi.InitiateOrVerifyMicroDepositsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  initiateOrVerifyMicroDeposits(
    request: FundingSourcesApi.InitiateOrVerifyMicroDepositsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, FundingSourcesApi.InitiateOrVerifyMicroDepositsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/funding-sources/{id}/micro-deposits"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => fundingSourcesMicroDepositsRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: FundingSourcesApi.InitiateOrVerifyMicroDepositsError,
      },
      options,
    );
  }

  /**
   * List customer funding sources
   *
   * @remarks
   * Returns all funding sources for a customer, including bank accounts, debit card funding
   * sources, and Dwolla balance (verified customers only). Shows verification status, limited
   * account details, and creation dates. Card funding sources include masked card information.
   * Supports filtering to exclude removed funding sources using the removed parameter.
   *
   * @returns successful operation
   *
   * @throws {@link FundingSourcesApi.ListCustomerFundingSourcesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCustomerFundingSources(
    request: FundingSourcesApi.ListCustomerFundingSourcesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, FundingSourcesApi.ListCustomerFundingSourcesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/{id}/funding-sources"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "removed", value: request.removed, schema: s.optional(s.string()) }],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FundingSourcesApi.ListCustomerFundingSourcesError,
      },
      options,
    );
  }

  /**
   * Update or remove a funding source
   *
   * @remarks
   * Updates a bank or debit card funding source's details, or soft deletes it.
   *
   * For **bank** funding sources you can change the name (any status), or modify routing/account
   * numbers and account type (unverified status only).
   *
   * For **debit card** funding sources you can change the name and any field within `cardDetails`,
   * including the optional cardholder identity fields `dateOfBirth`, `countryOfBirth`, and
   * `identification`. This is how you add or update those identity values on a card funding source
   * that already exists.
   *
   * You must provide at least one updateable field. Bank funding sources cannot be updated with
   * card fields, and card funding sources cannot be updated with bank fields.
   *
   * When removing, the funding source is soft deleted and can still be accessed but marked as
   * removed.
   *
   * @returns successful operation
   *
   * @throws {@link FundingSourcesApi.UpdateOrRemoveFundingSourceError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateOrRemoveFundingSource(
    request: FundingSourcesApi.UpdateOrRemoveFundingSourceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, FundingSourcesApi.UpdateOrRemoveFundingSourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/funding-sources/{id}"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: fundingSourcesRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: FundingSourcesApi.UpdateOrRemoveFundingSourceError,
      },
      options,
    );
  }
}

export namespace FundingSourcesApi {
  export type CreateCustomerFundingSourceRequest = {
    /** Customer's unique identifier */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class CreateCustomerFundingSourceError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCustomerFundingSourceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type CreateOnDemandTransferAuthorizationRequest = {
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class CreateOnDemandTransferAuthorizationError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateOnDemandTransferAuthorizationError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }

  export type GetFundingSourceRequest = {
    /** Funding source unique identifier */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class GetFundingSourceError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetFundingSourceError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type GetFundingSourceBalanceRequest = {
    /** ID of funding source to retrieve the balance for */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class GetFundingSourceBalanceError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetFundingSourceBalanceError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type GetMicroDepositsRequest = {
    /** The ID of the FS that previously had micro-deposits initiated */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class GetMicroDepositsError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetMicroDepositsError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type GetVanRoutingRequest = {
    /** ID of VAN funding source to retrieve ACH details */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class GetVanRoutingError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetVanRoutingError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type InitiateOrVerifyMicroDepositsRequest = {
    /** The ID of the FS to initiate or verify micro-deposit */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
    /**
     * Optional request body for verifying micro-deposits.
     * - If omitted: Endpoint will initiate micro-deposits
     * - If provided: Must contain micro-deposit amounts for verification
     */
    body?: FundingSourcesMicroDepositsRequest;
  };

  export class InitiateOrVerifyMicroDepositsError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<InitiateOrVerifyMicroDepositsError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListCustomerFundingSourcesRequest = {
    /** Customer's unique identifier */
    id: string;
    /** Filter removed funding sources. Boolean value. Defaults to `true` */
    removed?: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class ListCustomerFundingSourcesError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListCustomerFundingSourcesError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type UpdateOrRemoveFundingSourceRequest = {
    /** Funding source unique identifier */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
    /** Parameters to update a customer funding source */
    body: FundingSourcesRequest;
  };

  export class UpdateOrRemoveFundingSourceError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error403", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateOrRemoveFundingSourceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }
}
