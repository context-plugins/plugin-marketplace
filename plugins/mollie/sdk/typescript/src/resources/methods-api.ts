import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { amountSchema, type Amount } from "../models/amount.js";
import { lineCategoriesSchema, type LineCategories } from "../models/line-categories.js";
import { localeSchema, type Locale } from "../models/locale.js";
import { methodIdWithIssuerSchema, type MethodIdWithIssuer } from "../models/method-id-with-issuer.js";
import {
  methodIncludeWalletsParameterSchema,
  type MethodIncludeWalletsParameter,
} from "../models/method-include-wallets-parameter.js";
import {
  methodResourceParameterSchema,
  type MethodResourceParameter,
} from "../models/method-resource-parameter.js";
import { methodSchema, type Method } from "../models/method.js";
import { sequenceTypeSchema, type SequenceType } from "../models/sequence-type.js";
import {
  v2ProfilesMethodsIssuersIssuerIdRequestSchema,
  type V2ProfilesMethodsIssuersIssuerIdRequest,
} from "../models/v2-profiles-methods-issuers-issuer-id-request.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to the Methods API
 */
export class MethodsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Disable payment method
   *
   * @remarks
   * Disable a payment method on a specific profile.
   *
   * When using a profile-specific API credential, the alias `me` can be used instead of the profile
   * ID to refer to the current profile.
   *
   * @returns An empty response.
   *
   * @throws {@link MethodsApi.DisableMethodError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  disableMethod(
    request: MethodsApi.DisableMethodRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, MethodsApi.DisableMethodError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/profiles/{profileId}/methods/{methodId}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [
          { name: "profileId", value: request.profileId, schema: s.string() },
          { name: "methodId", value: request.methodId, schema: s.nullable(s.lazy(() => methodSchema)) },
        ],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: MethodsApi.DisableMethodError,
      },
      options,
    );
  }

  /**
   * Disable payment method issuer
   *
   * @remarks
   * Disable an issuer for a payment method on a specific profile.
   *
   * Currently only the payment methods `voucher` and `giftcard` are supported.
   *
   * When using a profile-specific API credential, the alias `me` can be used instead of the profile
   * ID to refer to the current profile.
   *
   * @returns An empty response.
   *
   * @throws {@link MethodsApi.DisableMethodIssuerError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  disableMethodIssuer(
    request: MethodsApi.DisableMethodIssuerRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, MethodsApi.DisableMethodIssuerError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/profiles/{profileId}/methods/{methodId}/issuers/{issuerId}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [
          { name: "profileId", value: request.profileId, schema: s.string() },
          { name: "methodId", value: request.methodId, schema: methodIdWithIssuerSchema },
          { name: "issuerId", value: request.issuerId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: MethodsApi.DisableMethodIssuerError,
      },
      options,
    );
  }

  /**
   * Enable payment method
   *
   * @remarks
   * Enable a payment method on a specific profile.
   *
   * When using a profile-specific API credential, the alias `me` can be used instead of the profile
   * ID to refer to the current profile.
   *
   * Some payment methods require extra steps in order to be activated. In cases where a step at the
   * payment method provider needs to be completed first, the status will be set to
   * `pending-external` and the response will contain a link to complete the activation at the
   * provider.
   *
   * To enable voucher or gift card issuers, refer to the [Enable payment method
   * issuer](enable-method-issuer) endpoint.
   *
   * @returns The payment method object.
   *
   * @throws {@link MethodsApi.EnableMethodError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  enableMethod(
    request: MethodsApi.EnableMethodRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, MethodsApi.EnableMethodError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/profiles/{profileId}/methods/{methodId}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [
          { name: "profileId", value: request.profileId, schema: s.string() },
          { name: "methodId", value: request.methodId, schema: s.nullable(s.lazy(() => methodSchema)) },
        ],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: MethodsApi.EnableMethodError,
      },
      options,
    );
  }

  /**
   * Enable payment method issuer
   *
   * @remarks
   * Enable an issuer for a payment method on a specific profile.
   *
   * Currently only the payment methods `voucher` and `giftcard` are supported.
   *
   * When using a profile-specific API credential, the alias `me` can be used instead of the profile
   * ID to refer to the current profile.
   *
   * @returns The payment method issuer object.
   *
   * @throws {@link MethodsApi.EnableMethodIssuerError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  enableMethodIssuer(
    request: MethodsApi.EnableMethodIssuerRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, MethodsApi.EnableMethodIssuerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/profiles/{profileId}/methods/{methodId}/issuers/{issuerId}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [
          { name: "profileId", value: request.profileId, schema: s.string() },
          { name: "methodId", value: request.methodId, schema: methodIdWithIssuerSchema },
          { name: "issuerId", value: request.issuerId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v2ProfilesMethodsIssuersIssuerIdRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: MethodsApi.EnableMethodIssuerError,
      },
      options,
    );
  }

  /**
   * Get payment method
   *
   * @remarks
   * Retrieve a single payment method by its ID.
   *
   * If a method is not available on this profile, a `404 Not Found` response is returned. If the
   * method is available but not enabled yet, a status `403 Forbidden` is returned. You can enable
   * payments methods via the [Enable payment method endpoint](enable-method) of the Profiles API,
   * or via the Mollie Dashboard.
   *
   * If you do not know the method's ID, you can use the [methods list endpoint](list-methods) to
   * retrieve all payment methods that are available.
   *
   * Additionally, it is possible to check if wallet methods such as Apple Pay are enabled by
   * passing the wallet ID (`applepay`) as the method ID.
   *
   * @returns The payment method object.
   *
   * @throws {@link MethodsApi.GetMethodError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMethod(
    request: MethodsApi.GetMethodRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, MethodsApi.GetMethodError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/methods/{methodId}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [
          { name: "methodId", value: request.methodId, schema: s.nullable(s.lazy(() => methodSchema)) },
        ],
        query: [
          { name: "locale", value: request.locale, schema: s.optionalNullable(s.lazy(() => localeSchema)) },
          { name: "currency", value: request.currency, schema: s.optional(s.string()) },
          { name: "profileId", value: request.profileId, schema: s.optional(s.string()) },
          { name: "include", value: request.include, schema: s.optionalNullable(s.string()) },
          {
            name: "sequenceType",
            value: request.sequenceType,
            schema: s.optional(s.lazy(() => sequenceTypeSchema)),
          },
          { name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: MethodsApi.GetMethodError,
      },
      options,
    );
  }

  /**
   * List all payment methods
   *
   * @remarks
   * Retrieve all payment methods that Mollie offers, regardless of the eligibility of the
   * organization for the specific method. The results of this endpoint are **not** paginated —
   * unlike most other list endpoints in our API.
   *
   * The list can optionally be filtered using a number of parameters described below.
   *
   * ℹ️ **Note:** This endpoint only returns **online** payment methods. If you wish to retrieve the
   * information about a non-online payment method, you can use the [Get payment method
   * endpoint](get-method).
   *
   * @returns A list of payment method objects. For a complete reference of the payment method
   * object, refer to the [Get payment method endpoint](get-method) documentation.
   *
   * @throws {@link MethodsApi.ListAllMethodsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAllMethods(
    request: MethodsApi.ListAllMethodsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, MethodsApi.ListAllMethodsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/methods/all"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [],
        query: [
          { name: "locale", value: request.locale, schema: s.optionalNullable(s.lazy(() => localeSchema)) },
          { name: "amount", value: request.amount, schema: s.optional(s.lazy(() => amountSchema)) },
          { name: "include", value: request.include, schema: s.optionalNullable(s.string()) },
          {
            name: "sequenceType",
            value: request.sequenceType,
            schema: s.optional(s.lazy(() => sequenceTypeSchema)),
          },
          { name: "profileId", value: request.profileId, schema: s.optional(s.string()) },
          { name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: MethodsApi.ListAllMethodsError,
      },
      options,
    );
  }

  /**
   * List payment methods
   *
   * @remarks
   * Retrieve all enabled payment methods. The results of this endpoint are **not** paginated —
   * unlike most other list endpoints in our API.
   *
   * For test mode, all pending and enabled payment methods are returned. If no payment methods are
   * requested yet, the most popular payment methods are returned in the test mode. For live mode,
   * only fully enabled payment methods are returned.
   *
   * Payment methods can be requested and enabled via the Mollie Dashboard, or via the [Enable
   * payment method endpoint](enable-method) of the Profiles API.
   *
   * The list can optionally be filtered using a number of parameters described below.
   *
   * By default, only payment methods for the Euro currency are returned. If you wish to retrieve
   * payment methods which exclusively support other currencies (e.g. Twint), you need to use the
   * `amount` parameters.
   *
   * ℹ️ **Note:** This endpoint only returns **online** payment methods. If you wish to retrieve the
   * information about a non-online payment method, you can use the [Get payment method
   * endpoint](get-method).
   *
   * @returns A list of payment method objects. For a complete reference of the payment method
   * object, refer to the [Get payment method endpoint](get-method) documentation.
   *
   * @throws {@link MethodsApi.ListMethodsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listMethods(
    request: MethodsApi.ListMethodsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, MethodsApi.ListMethodsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/methods"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [],
        query: [
          {
            name: "sequenceType",
            value: request.sequenceType,
            schema: s.optional(s.lazy(() => sequenceTypeSchema)),
          },
          { name: "locale", value: request.locale, schema: s.optionalNullable(s.lazy(() => localeSchema)) },
          { name: "amount", value: request.amount, schema: s.optional(s.lazy(() => amountSchema)) },
          {
            name: "resource",
            value: request.resource,
            schema: s.optional(s.lazy(() => methodResourceParameterSchema)),
          },
          { name: "billingCountry", value: request.billingCountry, schema: s.optional(s.string()) },
          {
            name: "includeWallets",
            value: request.includeWallets,
            schema: s.optional(s.lazy(() => methodIncludeWalletsParameterSchema)),
          },
          {
            name: "orderLineCategories",
            value: request.orderLineCategories,
            schema: s.optional(s.lazy(() => lineCategoriesSchema)),
          },
          { name: "profileId", value: request.profileId, schema: s.optional(s.string()) },
          { name: "include", value: request.include, schema: s.optionalNullable(s.string()) },
          { name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: MethodsApi.ListMethodsError,
      },
      options,
    );
  }
}

export namespace MethodsApi {
  export type DisableMethodRequest = {
    /** Provide the ID of the related profile. */
    profileId: string;
    /** Provide the ID of the related payment method. */
    methodId: Method | null;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class DisableMethodError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DisableMethodError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DisableMethodIssuerRequest = {
    /** Provide the ID of the related profile. */
    profileId: string;
    /** Provide the ID of the related payment method. */
    methodId: MethodIdWithIssuer;
    /** Provide the ID of the related issuer. */
    issuerId: string;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class DisableMethodIssuerError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DisableMethodIssuerError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type EnableMethodRequest = {
    /** Provide the ID of the related profile. */
    profileId: string;
    /** Provide the ID of the related payment method. */
    methodId: Method | null;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class EnableMethodError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<EnableMethodError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type EnableMethodIssuerRequest = {
    /** Provide the ID of the related profile. */
    profileId: string;
    /** Provide the ID of the related payment method. */
    methodId: MethodIdWithIssuer;
    /** Provide the ID of the related issuer. */
    issuerId: string;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
    body?: V2ProfilesMethodsIssuersIssuerIdRequest;
  };

  export class EnableMethodIssuerError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<EnableMethodIssuerError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetMethodRequest = {
    /** Provide the ID of the related payment method. */
    methodId: Method | null;
    /**
     * Passing a locale will sort the payment methods in the preferred order for the country, and
     * translate the payment method names in the corresponding language.
     */
    locale?: Locale | null;
    /**
     * If provided, the `minimumAmount` and `maximumAmount` will be converted to the given currency.
     * An error is returned if the currency is not supported by the payment method.
     */
    currency?: string;
    /**
     * The identifier referring to the [profile](get-profile) you wish to retrieve the resources
     * for.
     *
     * Most API credentials are linked to a single profile. In these cases the `profileId` must not
     * be sent. For organization-level credentials such as OAuth access tokens however, the
     * `profileId` parameter is required.
     */
    profileId?: string;
    /**
     * This endpoint allows you to include additional information via the `include` query string
     * parameter.
     */
    include?: string | null;
    /**
     * Set this parameter to `first` to only return the methods that can be used for the first
     * payment of a recurring sequence.
     *
     * Set it to `recurring` to only return methods that can be used for recurring payments or
     * subscriptions.
     */
    sequenceType?: SequenceType;
    /**
     * Most API credentials are specifically created for either live mode or test mode. In those
     * cases the `testmode` query parameter must not be sent. For organization-level credentials
     * such as OAuth access tokens, you can enable test mode by setting the `testmode` query
     * parameter to `true`.
     *
     * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
     */
    testmode?: boolean;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class GetMethodError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMethodError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListAllMethodsRequest = {
    /**
     * Passing a locale will sort the payment methods in the preferred order for the country, and
     * translate the payment method names in the corresponding language.
     */
    locale?: Locale | null;
    /**
     * If supplied, only payment methods that support the amount and currency are returned.
     *
     * Example: `/v2/methods/all?amount[value]=100.00&amount[currency]=USD`
     */
    amount?: Amount;
    /**
     * This endpoint allows you to include additional information via the `include` query string
     * parameter.
     */
    include?: string | null;
    /**
     * Set this parameter to `first` to only return the methods that can be used for the first
     * payment of a recurring sequence.
     *
     * Set it to `recurring` to only return methods that can be used for recurring payments or
     * subscriptions.
     */
    sequenceType?: SequenceType;
    /**
     * The identifier referring to the [profile](get-profile) you wish to retrieve the resources
     * for.
     *
     * Most API credentials are linked to a single profile. In these cases the `profileId` must not
     * be sent. For organization-level credentials such as OAuth access tokens however, the
     * `profileId` parameter is required.
     */
    profileId?: string;
    /**
     * Most API credentials are specifically created for either live mode or test mode. In those
     * cases the `testmode` query parameter must not be sent. For organization-level credentials
     * such as OAuth access tokens, you can enable test mode by setting the `testmode` query
     * parameter to `true`.
     *
     * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
     */
    testmode?: boolean;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class ListAllMethodsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListAllMethodsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListMethodsRequest = {
    /**
     * Set this parameter to `first` to only return the enabled methods that can be used for the
     * first payment of a recurring sequence.
     *
     * Set it to `recurring` to only return enabled methods that can be used for recurring payments
     * or subscriptions.
     */
    sequenceType?: SequenceType;
    /**
     * Passing a locale will sort the payment methods in the preferred order for the country, and
     * translate the payment method names in the corresponding language.
     */
    locale?: Locale | null;
    /**
     * If supplied, only payment methods that support the amount and currency are returned.
     *
     * Example: `/v2/methods?amount[value]=100.00&amount[currency]=USD`
     */
    amount?: Amount;
    /**
     * **⚠️ We no longer recommend using the Orders API. Please refer to the [Payments
     * API](payments-api) instead.**
     *
     * Indicate if you will use the result for the [Create order](create-order) or the [Create
     * payment](create-payment) endpoint.
     *
     * When passing the value `orders`, the result will include payment methods that are only
     * available for payments created via the Orders API.
     *
     * @deprecated
     */
    resource?: MethodResourceParameter;
    /**
     * The country taken from your customer's billing address in ISO 3166-1 alpha-2 format. This
     * parameter can be used to check whether your customer is eligible for certain payment methods,
     * for example for Klarna.
     *
     * Example: `/v2/methods?resource=orders&billingCountry=DE`
     */
    billingCountry?: string;
    /**
     * A comma-separated list of the wallets you support in your checkout. Wallets often require
     * wallet specific code to check if they are available on the shoppers device, hence the need to
     * indicate your support.
     */
    includeWallets?: MethodIncludeWalletsParameter;
    /**
     * A comma-separated list of the line categories you support in your checkout.
     *
     * Example: `/v2/methods?orderLineCategories=eco,meal`
     */
    orderLineCategories?: LineCategories;
    /**
     * The identifier referring to the [profile](get-profile) you wish to retrieve the resources
     * for.
     *
     * Most API credentials are linked to a single profile. In these cases the `profileId` must not
     * be sent. For organization-level credentials such as OAuth access tokens however, the
     * `profileId` parameter is required.
     */
    profileId?: string;
    /**
     * This endpoint allows you to include additional information via the `include` query string
     * parameter.
     */
    include?: string | null;
    /**
     * Most API credentials are specifically created for either live mode or test mode. In those
     * cases the `testmode` query parameter must not be sent. For organization-level credentials
     * such as OAuth access tokens, you can enable test mode by setting the `testmode` query
     * parameter to `true`.
     *
     * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
     */
    testmode?: boolean;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class ListMethodsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListMethodsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
