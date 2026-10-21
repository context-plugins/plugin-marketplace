import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
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
import {
  shippingDetailsCreateSchema,
  type ShippingDetailsCreate,
} from "../models/shipping-details-create.js";
import { shippingDetailsListSchema, type ShippingDetailsList } from "../models/shipping-details-list.js";
import {
  shippingDetailsUpdateSchema,
  type ShippingDetailsUpdate,
} from "../models/shipping-details-update.js";
import { shippingDetailsSchema, type ShippingDetails } from "../models/shipping-details.js";
import {
  xGr4VyMerchantAccountIdSchema,
  type XGr4VyMerchantAccountId,
} from "../models/unions/xgr4-vy-merchant-account-id.js";
import type { Servers } from "../servers.js";

/**
 * Manage shipping details for buyers.
 */
export class BuyersShippingDetails {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add buyer shipping details
   *
   * @remarks
   * Associate shipping details to a buyer.
   *
   * @returns Successful Response
   *
   * @throws {@link BuyersShippingDetails.AddBuyerShippingDetailsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addBuyerShippingDetails(
    request: BuyersShippingDetails.AddBuyerShippingDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<ShippingDetails, BuyersShippingDetails.AddBuyerShippingDetailsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/buyers/{buyer_id}/shipping-details"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [{ name: "buyer_id", value: request.buyerId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: shippingDetailsCreateSchema },
      },
      {
        success: { kind: "json", schema: shippingDetailsSchema },
        errorFactory: BuyersShippingDetails.AddBuyerShippingDetailsError,
      },
      options,
    );
  }

  /**
   * Delete a buyer's shipping details
   *
   * @remarks
   * Delete the shipping details associated to a specific buyer.
   *
   * @returns Successful Response
   *
   * @throws {@link BuyersShippingDetails.DeleteBuyerShippingDetailsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteBuyerShippingDetails(
    request: BuyersShippingDetails.DeleteBuyerShippingDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, BuyersShippingDetails.DeleteBuyerShippingDetailsError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/buyers/{buyer_id}/shipping-details/{shipping_details_id}"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [
          { name: "buyer_id", value: request.buyerId, schema: s.string() },
          { name: "shipping_details_id", value: request.shippingDetailsId, schema: s.string() },
        ],
        query: [],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: BuyersShippingDetails.DeleteBuyerShippingDetailsError,
      },
      options,
    );
  }

  /**
   * Get buyer shipping details
   *
   * @remarks
   * Get a buyer's shipping details.
   *
   * @returns Successful Response
   *
   * @throws {@link BuyersShippingDetails.GetBuyerShippingDetailsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBuyerShippingDetails(
    request: BuyersShippingDetails.GetBuyerShippingDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<ShippingDetails, BuyersShippingDetails.GetBuyerShippingDetailsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/buyers/{buyer_id}/shipping-details/{shipping_details_id}"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [
          { name: "buyer_id", value: request.buyerId, schema: s.string() },
          { name: "shipping_details_id", value: request.shippingDetailsId, schema: s.string() },
        ],
        query: [],
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
        success: { kind: "json", schema: shippingDetailsSchema },
        errorFactory: BuyersShippingDetails.GetBuyerShippingDetailsError,
      },
      options,
    );
  }

  /**
   * List a buyer's shipping details
   *
   * @remarks
   * List all the shipping details associated to a specific buyer.
   *
   * @returns Successful Response
   *
   * @throws {@link BuyersShippingDetails.ListBuyerShippingDetailsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBuyerShippingDetails(
    request: BuyersShippingDetails.ListBuyerShippingDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<ShippingDetailsList, BuyersShippingDetails.ListBuyerShippingDetailsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/buyers/{buyer_id}/shipping-details"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [{ name: "buyer_id", value: request.buyerId, schema: s.string() }],
        query: [],
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
        success: { kind: "json", schema: shippingDetailsListSchema },
        errorFactory: BuyersShippingDetails.ListBuyerShippingDetailsError,
      },
      options,
    );
  }

  /**
   * Update a buyer's shipping details
   *
   * @remarks
   * Update the shipping details associated to a specific buyer.
   *
   * @returns Successful Response
   *
   * @throws {@link BuyersShippingDetails.UpdateBuyerShippingDetailsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateBuyerShippingDetails(
    request: BuyersShippingDetails.UpdateBuyerShippingDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<ShippingDetails, BuyersShippingDetails.UpdateBuyerShippingDetailsError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/buyers/{buyer_id}/shipping-details/{shipping_details_id}"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [
          { name: "buyer_id", value: request.buyerId, schema: s.string() },
          { name: "shipping_details_id", value: request.shippingDetailsId, schema: s.string() },
        ],
        query: [],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: shippingDetailsUpdateSchema },
      },
      {
        success: { kind: "json", schema: shippingDetailsSchema },
        errorFactory: BuyersShippingDetails.UpdateBuyerShippingDetailsError,
      },
      options,
    );
  }
}

export namespace BuyersShippingDetails {
  export type AddBuyerShippingDetailsRequest = {
    /** The ID of the buyer to add shipping details to. */
    buyerId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
    body: ShippingDetailsCreate;
  };

  export class AddBuyerShippingDetailsError extends ApiError {
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

    static readonly errors: ErrorDecoders<AddBuyerShippingDetailsError> = [
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

  export type DeleteBuyerShippingDetailsRequest = {
    /** The ID of the buyer to delete shipping details for. */
    buyerId: string;
    /** The ID of the shipping details to delete. */
    shippingDetailsId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class DeleteBuyerShippingDetailsError extends ApiError {
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

    static readonly errors: ErrorDecoders<DeleteBuyerShippingDetailsError> = [
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

  export type GetBuyerShippingDetailsRequest = {
    /** The ID of the buyer to retrieve shipping details for. */
    buyerId: string;
    /** The ID of the shipping details to retrieve. */
    shippingDetailsId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class GetBuyerShippingDetailsError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetBuyerShippingDetailsError> = [
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

  export type ListBuyerShippingDetailsRequest = {
    /** The ID of the buyer to retrieve shipping details for. */
    buyerId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class ListBuyerShippingDetailsError extends ApiError {
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

    static readonly errors: ErrorDecoders<ListBuyerShippingDetailsError> = [
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

  export type UpdateBuyerShippingDetailsRequest = {
    /** The ID of the buyer to update shipping details for. */
    buyerId: string;
    /** The ID of the shipping details to update. */
    shippingDetailsId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
    body: ShippingDetailsUpdate;
  };

  export class UpdateBuyerShippingDetailsError extends ApiError {
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

    static readonly errors: ErrorDecoders<UpdateBuyerShippingDetailsError> = [
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
