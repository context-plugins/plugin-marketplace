import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV2SubscribersRequestSchema,
  type ApiV2SubscribersRequest,
} from "../models/api-v2-subscribers-request.js";
import type { Servers } from "../servers.js";

/**
 * Read and update SMS subscribers for a shop.
 */
export class Subscribers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Subscriber
   *
   * @remarks
   * Get an individual subscriber for a shop.
   *
   * @returns 200
   *
   * @throws {@link Subscribers.GetSubscriberError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PostscriptError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSubscriber(
    request: Subscribers.GetSubscriberRequest,
    options?: RequestOptions,
  ): ApiPromise<unknown, Subscribers.GetSubscriberError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/subscribers/{id}"),
        auth: this.#auth.sec0,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "X-Postscript-Shop-Token",
            value: request.xPostscriptShopToken,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.unknown() },
        errorFactory: Subscribers.GetSubscriberError,
      },
      options,
    );
  }

  /**
   * Get Subscribers
   *
   * @remarks
   * Get a list of subscribers for a shop.
   *
   * @returns 200
   *
   * @throws {@link Subscribers.GetSubscribersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PostscriptError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSubscribers(
    request: Subscribers.GetSubscribersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<unknown, Subscribers.GetSubscribersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/subscribers"),
        auth: this.#auth.sec0,
        pathParams: [],
        query: [
          { name: "created_at__eq", value: request.createdAtEq, schema: s.optional(s.dateTime()) },
          { name: "created_at__gt", value: request.createdAtGt, schema: s.optional(s.dateTime()) },
          { name: "created_at__gte", value: request.createdAtGte, schema: s.optional(s.dateTime()) },
          { name: "created_at__lt", value: request.createdAtLt, schema: s.optional(s.dateTime()) },
          { name: "created_at__lte", value: request.createdAtLte, schema: s.optional(s.dateTime()) },
          { name: "email__contains", value: request.emailContains, schema: s.optional(s.string()) },
          { name: "email__eq", value: request.emailEq, schema: s.optional(s.string()) },
          { name: "email__in", value: request.emailIn, schema: s.optional(s.array(s.string())) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          {
            name: "phone_number__contains",
            value: request.phoneNumberContains,
            schema: s.optional(s.string()),
          },
          { name: "phone_number__eq", value: request.phoneNumberEq, schema: s.optional(s.string()) },
          { name: "phone_number__in", value: request.phoneNumberIn, schema: s.optional(s.array(s.string())) },
          {
            name: "shopify_customer_id__contains",
            value: request.shopifyCustomerIdContains,
            schema: s.optional(s.string()),
          },
          {
            name: "shopify_customer_id__eq",
            value: request.shopifyCustomerIdEq,
            schema: s.optional(s.string()),
          },
          {
            name: "shopify_customer_id__in",
            value: request.shopifyCustomerIdIn,
            schema: s.optional(s.array(s.string())),
          },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
          { name: "updated_at__eq", value: request.updatedAtEq, schema: s.optional(s.dateTime()) },
          { name: "updated_at__gt", value: request.updatedAtGt, schema: s.optional(s.dateOnly()) },
          { name: "updated_at__gte", value: request.updatedAtGte, schema: s.optional(s.dateTime()) },
          { name: "updated_at__lt", value: request.updatedAtLt, schema: s.optional(s.dateTime()) },
          { name: "updated_at__lte", value: request.updatedAtLte, schema: s.optional(s.dateTime()) },
          { name: "ps_id__eq", value: request.psIdEq, schema: s.optional(s.int()) },
        ],
        headers: [
          {
            name: "X-Postscript-Shop-Token",
            value: request.xPostscriptShopToken,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.unknown() },
        errorFactory: Subscribers.GetSubscribersError,
      },
      options,
    );
  }

  /**
   * Update Subscriber
   *
   * @remarks
   * Updates data for a given subscriber.
   *
   * @returns 200
   *
   * @throws {@link Subscribers.UpdateSubscriberByIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PostscriptError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSubscriberById(
    request: Subscribers.UpdateSubscriberByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<unknown, Subscribers.UpdateSubscriberByIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/subscribers/{id}"),
        auth: this.#auth.sec0,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "X-Postscript-Shop-Token",
            value: request.xPostscriptShopToken,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV2SubscribersRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.unknown() },
        errorFactory: Subscribers.UpdateSubscriberByIdError,
      },
      options,
    );
  }
}

export namespace Subscribers {
  export type GetSubscriberRequest = {
    /** The ID for the subscriber you'd like to get. */
    id: string;
    /**
     * Shop API Token. **Required for partners**. This header should be used *only* by partners.
     * Shops should include their API token in the *Authorization* header.
     */
    xPostscriptShopToken?: string;
  };

  export class GetSubscriberError extends ApiError {
    declare readonly payload: Declared<"error400", Record<string, unknown>> | Undeclared;

    static readonly errors: ErrorDecoders<GetSubscriberError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: s.record(s.string(), s.unknown()) } },
    ];
  }

  export type GetSubscribersRequest = {
    /** Created at is equal to */
    createdAtEq?: Date;
    /** Created at is greater than */
    createdAtGt?: Date;
    /** Created at is greater than or equal to */
    createdAtGte?: Date;
    /** Created at is less than */
    createdAtLt?: Date;
    /** Created at is less than or equal to */
    createdAtLte?: Date;
    /** Email contains */
    emailContains?: string;
    /** Email is equal to */
    emailEq?: string;
    /** Email is in */
    emailIn?: string[];
    /** Page number of results to start from */
    page?: number;
    /** Phone number contains */
    phoneNumberContains?: string;
    /** Phone number is equal to */
    phoneNumberEq?: string;
    /** Phone number is in */
    phoneNumberIn?: string[];
    /** Shopify customer id contains */
    shopifyCustomerIdContains?: string;
    /** Shopify customer id is equal to */
    shopifyCustomerIdEq?: string;
    /** Shopify customer id is in */
    shopifyCustomerIdIn?: string[];
    /**
     * Sorting Order. In `{field}__asc` or `{field}__desc` format. Valid fields: `created_at`,
     * `updated_at`, `phone_number`, `shopify_customer_id`
     */
    sort?: string;
    /** Updated at is equal to */
    updatedAtEq?: Date;
    /** Updated at is greater than */
    updatedAtGt?: string;
    /** Updated at is greater than or equal to */
    updatedAtGte?: Date;
    /** Updated at is less than */
    updatedAtLt?: Date;
    /** Updated at is less than or equal to */
    updatedAtLte?: Date;
    /**
     * Filters subscribers by their ps_id tracking ID. This ID is stored in the ps_id cookie for
     * subscribers on the front end and is used to uniquely identify a subscriber across sessions.
     */
    psIdEq?: number;
    /**
     * Shop API Token. **Required for partners**. This header should be used *only* by partners.
     * Shops should include their API token in the *Authorization* header.
     */
    xPostscriptShopToken?: string;
  };

  export class GetSubscribersError extends ApiError {
    declare readonly payload: Declared<"error400", Record<string, unknown>> | Undeclared;

    static readonly errors: ErrorDecoders<GetSubscribersError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: s.record(s.string(), s.unknown()) } },
    ];
  }

  export type UpdateSubscriberByIdRequest = {
    /** ID of the subscriber you'd like to update. */
    id: string;
    /**
     * Shop API Token. **Required for partners**. This header should be used *only* by partners.
     * Shops should include their API token in the *Authorization* header.
     */
    xPostscriptShopToken?: string;
    body?: ApiV2SubscribersRequest;
  };

  export class UpdateSubscriberByIdError extends ApiError {
    declare readonly payload: Declared<"error400", Record<string, unknown>> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateSubscriberByIdError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: s.record(s.string(), s.unknown()) } },
    ];
  }
}
