import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { error400Schema, type Error400 } from "../models/error400.js";
import { error401Schema, type Error401 } from "../models/error401.js";
import { error403Schema, type Error403 } from "../models/error403.js";
import { error404Schema, type Error404 } from "../models/error404.js";
import { error405Schema, type Error405 } from "../models/error405.js";
import { error409Schema, type Error409 } from "../models/error409.js";
import { error425Schema, type Error425 } from "../models/error425.js";
import { error429Schema, type Error429 } from "../models/error429.js";
import { error500Schema, type Error500 } from "../models/error500.js";
import { error502Schema, type Error502 } from "../models/error502.js";
import { error504Schema, type Error504 } from "../models/error504.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { OrderBy, orderBySchema } from "../models/order-by.js";
import {
  paymentMethodSummariesSchema,
  type PaymentMethodSummaries,
} from "../models/payment-method-summaries.js";
import {
  buyerExternalIdentifier20Schema,
  type BuyerExternalIdentifier20,
} from "../models/unions/buyer-external-identifier20.js";
import { buyerId23Schema, type BuyerId23 } from "../models/unions/buyer-id23.js";
import { country13Schema, type Country13 } from "../models/unions/country13.js";
import { currency14Schema, type Currency14 } from "../models/unions/currency14.js";
import { sortBy4Schema, type SortBy4 } from "../models/unions/sort-by4.js";
import {
  xGr4VyMerchantAccountIdSchema,
  type XGr4VyMerchantAccountId,
} from "../models/unions/xgr4-vy-merchant-account-id.js";
import type { Servers } from "../servers.js";

/**
 * Query payment methods for buyers.
 */
export class BuyersPaymentMethods {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List payment methods for a buyer
   *
   * @remarks
   * List all the stored payment methods for a specific buyer.
   *
   * @returns Successful Response
   *
   * @throws {@link BuyersPaymentMethods.ListBuyerPaymentMethodsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBuyerPaymentMethods(
    request: BuyersPaymentMethods.ListBuyerPaymentMethodsRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentMethodSummaries, BuyersPaymentMethods.ListBuyerPaymentMethodsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/buyers/payment-methods"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [],
        query: [
          { name: "buyer_id", value: request.buyerId, schema: s.optional(s.lazy(() => buyerId23Schema)) },
          {
            name: "buyer_external_identifier",
            value: request.buyerExternalIdentifier,
            schema: s.optional(s.lazy(() => buyerExternalIdentifier20Schema)),
          },
          { name: "sort_by", value: request.sortBy, schema: s.optional(s.lazy(() => sortBy4Schema)) },
          { name: "order_by", value: request.orderBy, schema: s.defaulted(orderBySchema, OrderBy.Desc) },
          { name: "country", value: request.country, schema: s.optional(s.lazy(() => country13Schema)) },
          { name: "currency", value: request.currency, schema: s.optional(s.lazy(() => currency14Schema)) },
        ],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentMethodSummariesSchema },
        errorFactory: BuyersPaymentMethods.ListBuyerPaymentMethodsError,
      },
      options,
    );
  }
}

export namespace BuyersPaymentMethods {
  export type ListBuyerPaymentMethodsRequest = {
    /** The ID of the buyer to query payment methods for. */
    buyerId?: BuyerId23;
    /** The external identifier of the buyer to query payment methods for. */
    buyerExternalIdentifier?: BuyerExternalIdentifier20;
    /** The field to sort the payment methods by. */
    sortBy?: SortBy4;
    /** The direction to sort the payment methods in. @default OrderBy.Desc */
    orderBy?: OrderBy;
    /**
     * The country code to filter payment methods by. This only applies to payment methods with a
     * `country` value.
     */
    country?: Country13;
    /**
     * The currency code to filter payment methods by. This only applies to payment methods with a
     * `currency` value.
     */
    currency?: Currency14;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class ListBuyerPaymentMethodsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListBuyerPaymentMethodsError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
