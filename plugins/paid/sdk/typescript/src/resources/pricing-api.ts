import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { pricingListResponseSchema, type PricingListResponse } from "../models/pricing-list-response.js";
import { pricingResponseSchema, type PricingResponse } from "../models/pricing-response.js";
import { updatePricingRequestSchema, type UpdatePricingRequest } from "../models/update-pricing-request.js";
import type { Servers } from "../servers.js";

export class PricingApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get pricing for a product attribute
   *
   * @remarks
   * Returns pricing and credit benefits for a single product attribute.
   *
   * @returns 200
   *
   * @throws {@link PricingApi.GetPricingError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPricing(
    request: PricingApi.GetPricingRequest,
    options?: RequestOptions,
  ): ApiPromise<PricingResponse, PricingApi.GetPricingError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/pricing/{productAttributeId}"),
        auth: noneAuth,
        pathParams: [{ name: "productAttributeId", value: request.productAttributeId, schema: s.string() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pricingResponseSchema },
        errorFactory: PricingApi.GetPricingError,
      },
      options,
    );
  }

  /**
   * List pricing for a product
   *
   * @remarks
   * Returns pricing for all product attributes of a product. Each entry includes the attribute's
   * pricing configuration and credit benefits.
   *
   * @returns 200
   *
   * @throws {@link PricingApi.ListPricingError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPricing(
    request: PricingApi.ListPricingRequest,
    options?: RequestOptions,
  ): ApiPromise<PricingListResponse, PricingApi.ListPricingError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/pricing/"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "productId", value: request.productId, schema: s.string() }],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pricingListResponseSchema },
        errorFactory: PricingApi.ListPricingError,
      },
      options,
    );
  }

  /**
   * Update pricing for a product attribute
   *
   * @remarks
   * Updates pricing on an existing product attribute. If creditBenefits is provided, it fully
   * replaces existing benefits. If omitted, existing benefits are preserved.
   *
   * @returns 200
   *
   * @throws {@link PricingApi.UpdatePricingError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updatePricing(
    request: PricingApi.UpdatePricingRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PricingResponse, PricingApi.UpdatePricingError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/pricing/{productAttributeId}"),
        auth: noneAuth,
        pathParams: [{ name: "productAttributeId", value: request.productAttributeId, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updatePricingRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: pricingResponseSchema },
        errorFactory: PricingApi.UpdatePricingError,
      },
      options,
    );
  }
}

export namespace PricingApi {
  export type GetPricingRequest = {
    productAttributeId: string;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class GetPricingError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPricingError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListPricingRequest = {
    /** Product display ID or UUID */
    productId: string;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class ListPricingError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListPricingError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdatePricingRequestParams = {
    productAttributeId: string;
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: UpdatePricingRequest;
  };

  export class UpdatePricingError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdatePricingError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
