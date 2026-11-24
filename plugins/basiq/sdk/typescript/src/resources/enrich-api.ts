import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { enrichResponseSchema, type EnrichResponse } from "../models/enrich-response.js";
import { enrich400Error1Schema, type Enrich400Error1 } from "../models/enrich400-error1.js";
import { enrich403Error1Schema, type Enrich403Error1 } from "../models/enrich403-error1.js";
import { enrich500Error1Schema, type Enrich500Error1 } from "../models/enrich500-error1.js";
import {
  merchantNotFoundErrorSchema,
  type MerchantNotFoundError,
} from "../models/merchant-not-found-error.js";
import { merchantsResponseSchema, type MerchantsResponse } from "../models/merchants-response.js";
import {
  singleMerchantResponseSchema,
  type SingleMerchantResponse,
} from "../models/single-merchant-response.js";
import type { Servers } from "../servers.js";

export class EnrichApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Enrich
   *
   * @remarks
   * The Enrich resource enables you to retrieve details by passing in a search query containing a
   * bank transaction description. The service enriches transaction data with multiple attributes,
   * returning a transaction classification and three metadata components. The transaction
   * classification will first determine if the transaction is of type payment, transfer,
   * cash-withdrawal, bank-fee etc. The engine then derives merchant information, purchase location
   * and prescribes an industry standard categorisation for each payment transaction.
   *
   * @returns The enrich endpoint will always return a 200 response to the user, along with a set of
   * results for each of the datasets subscribed to: category, entity and location. If no results
   * are found for the search query then an empty result set is returned. If parameter inputs are
   * invalid an error is returned.
   *
   * @throws {@link EnrichApi.EnrichError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  enrich(
    request: EnrichApi.EnrichRequest,
    options?: RequestOptions,
  ): ApiPromise<EnrichResponse, EnrichApi.EnrichError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/enrich"),
        auth: this.#auth.servicesToken,
        pathParams: [],
        query: [
          { name: "q", value: request.q, schema: s.string() },
          { name: "institution", value: request.institution, schema: s.string() },
          { name: "country", value: request.country, schema: s.string() },
          { name: "mcc", value: request.mcc, schema: s.optional(s.string()) },
          { name: "accountType", value: request.accountType, schema: s.optional(s.string()) },
          { name: "amount", value: request.amount, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: enrichResponseSchema },
        errorFactory: EnrichApi.EnrichError,
      },
      options,
    );
  }

  /**
   * Retrieve a merchant
   *
   * @remarks
   * Retrieves a single merchant's details using its unique ID.
   *
   * @returns Successful response with a single merchant's detailed data.
   *
   * @throws {@link EnrichApi.GetMerchantByIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMerchantById(
    request: EnrichApi.GetMerchantByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<SingleMerchantResponse, EnrichApi.GetMerchantByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/merchants/{merchantId}"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: singleMerchantResponseSchema },
        errorFactory: EnrichApi.GetMerchantByIdError,
      },
      options,
    );
  }

  /**
   * Search Merchants
   *
   * @remarks
   * Retrieves merchant details. At least one of `abn` or `merchantName` is required for a
   * successful search. Optional filters for suburb and entity type can also be applied.
   *
   * @returns Successful response with merchant data.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  merchantSearch(
    request: EnrichApi.MerchantSearchRequest = {},
    options?: RequestOptions,
  ): ApiPromise<MerchantsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/merchants"),
        auth: this.#auth.servicesToken,
        pathParams: [],
        query: [
          { name: "abn", value: request.abn, schema: s.optional(s.string()) },
          { name: "merchantName", value: request.merchantName, schema: s.optional(s.string()) },
          { name: "suburb", value: request.suburb, schema: s.optional(s.string()) },
          { name: "entityType", value: request.entityType, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: merchantsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace EnrichApi {
  export type EnrichRequest = {
    /**
     * This is the search string that is used to lookup the entity (merchant) information.
     * ```**q=garfish%20MANLY%20NS**&country=AU&institution=AU06703```
     */
    q: string;
    /**
     * Identifies the institution from where the transaction was derived. This must be a Basiq
     * recognisable institution ID.
     * ```enrich?METRO%20PETROLEUM%20FR%20FORE&country=AU&accountType=transaction&amount=-12.95&**institution=AU04301**```
     */
    institution: string;
    /**
     * Specifies the country the search should be narrowed down to. Passing in a country value will
     * limit the search to the specified country. The country must be in ISO 3166 Alpha-2 format
     * ```q=garfish%20MANLY%20NS&**country=AU**&institution=AU06703```
     */
    country: string;
    /**
     * Merchant classification code as defined by Visa and Mastercard
     * ```q=garfish%20MANLY%20NS&country=AU&institution=AU06703&**mcc=3299**```
     */
    mcc?: string;
    /**
     * The Account type from which the transaction was derived.
     * ```METRO%20PETROLEUM%20FR%20FORE&country=AU&accountType=transaction&institution=AU04301```
     * **Valid values:**
     * - `transaction` - `credit-card` - `savings` - `mortgage` - `loan` - `foreign`
     */
    accountType?: string;
    /**
     * The dollar/cent amount relevant to the transaction.
     * ```q=garfish%20MANLY%20NS&country=AU&institution=AU06703&**amount=-12.95**```
     */
    amount?: string;
  };

  export class EnrichError extends ApiError {
    declare readonly payload:
      | Declared<"enrich400Error1", Enrich400Error1>
      | Declared<"enrich403Error1", Enrich403Error1>
      | Declared<"enrich500Error1", Enrich500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<EnrichError> = [
      { on: 400, kind: "enrich400Error1", decode: { kind: "json", schema: enrich400Error1Schema } },
      { on: 403, kind: "enrich403Error1", decode: { kind: "json", schema: enrich403Error1Schema } },
      { on: 500, kind: "enrich500Error1", decode: { kind: "json", schema: enrich500Error1Schema } },
    ];
  }

  export type GetMerchantByIdRequest = {
    /** The unique identifier of the merchant. */
    merchantId: string;
  };

  export class GetMerchantByIdError extends ApiError {
    declare readonly payload: Declared<"merchantNotFoundError", MerchantNotFoundError> | Undeclared;

    static readonly errors: ErrorDecoders<GetMerchantByIdError> = [
      {
        on: 404,
        kind: "merchantNotFoundError",
        decode: { kind: "json", schema: merchantNotFoundErrorSchema },
      },
    ];
  }

  export type MerchantSearchRequest = {
    /**
     * The Australian Business Number (ABN) of the merchant. Required if `merchantName` is not
     * provided.
     */
    abn?: string;
    /** The name of the merchant. Required if `abn` is not provided. */
    merchantName?: string;
    /** The suburb of the merchant location to filter by. */
    suburb?: string;
    /** The type of the merchant entity to filter by. */
    entityType?: string;
  };
}
