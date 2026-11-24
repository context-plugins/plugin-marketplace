import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { adCreateSchema, type AdCreate } from "../models/ad-create.js";
import { adListSchema, type AdList } from "../models/ad-list.js";
import { adSchema, type Ad } from "../models/ad.js";
import { createResponseSchema, type CreateResponse } from "../models/create-response.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * Manage individual ads within ad sets, including creative associations and status.
 */
export class Ads {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Facebook Business Manager Create an ad
   *
   * @remarks
   * Creates a new ad within an ad set. Associates an ad creative with targeting and delivery
   * settings defined at the ad set level.
   *
   * @returns Ad created successfully
   *
   * @throws {@link Ads.CreateAdError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link FacebookBusinessManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createAd(
    request: Ads.CreateAdRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateResponse, Ads.CreateAdError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/act_{ad_account_id}/ads"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "ad_account_id", value: request.adAccountId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: adCreateSchema },
      },
      {
        success: { kind: "json", schema: createResponseSchema },
        errorFactory: Ads.CreateAdError,
      },
      options,
    );
  }

  /**
   * Facebook Business Manager Get an ad
   *
   * @remarks
   * Retrieves the details of a specific ad including its creative, status, and configuration.
   *
   * @returns Successfully retrieved ad details
   *
   * @throws {@link Ads.GetAdError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link FacebookBusinessManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getAd(request: Ads.GetAdRequest, options?: RequestOptions): ApiPromise<Ad, Ads.GetAdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{ad_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "ad_id", value: request.adId, schema: s.string() }],
        query: [{ name: "fields", value: request.fields, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: adSchema },
        errorFactory: Ads.GetAdError,
      },
      options,
    );
  }

  /**
   * Facebook Business Manager List ads
   *
   * @remarks
   * Retrieves all ads for the specified ad account. Returns ad configurations including creative
   * associations and status.
   *
   * @returns Successfully retrieved list of ads
   *
   * @throws {@link Ads.ListAdsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link FacebookBusinessManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listAds(request: Ads.ListAdsRequest, options?: RequestOptions): ApiPromise<AdList, Ads.ListAdsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/act_{ad_account_id}/ads"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "ad_account_id", value: request.adAccountId, schema: s.string() }],
        query: [
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          { name: "after", value: request.after, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: adListSchema },
        errorFactory: Ads.ListAdsError,
      },
      options,
    );
  }
}

export namespace Ads {
  export type CreateAdRequest = {
    /** The ID of the ad account (numeric, without the act_ prefix) */
    adAccountId: string;
    body: AdCreate;
  };

  export class CreateAdError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<CreateAdError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAdRequest = {
    /** The ID of the ad */
    adId: string;
    /**
     * Comma-separated list of fields to include in the response. If omitted, default fields are
     * returned.
     */
    fields?: string;
  };

  export class GetAdError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetAdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListAdsRequest = {
    /** The ID of the ad account (numeric, without the act_ prefix) */
    adAccountId: string;
    /**
     * Comma-separated list of fields to include in the response. If omitted, default fields are
     * returned.
     */
    fields?: string;
    /** Maximum number of objects to return per page. Default is 25. @default 25 */
    limit?: number;
    /** Cursor for pagination to retrieve the next page of results */
    after?: string;
  };

  export const listAdsRequestSchema: Schema<ListAdsRequest> = s.lazySchema(() =>
    s.object<ListAdsRequest>({
      adAccountId: s.string(),
      fields: s.optional(s.string()),
      limit: s.defaulted(s.int().check(s.lte(100)), 25),
      after: s.optional(s.string()),
    }),
  );

  export class ListAdsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<ListAdsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
