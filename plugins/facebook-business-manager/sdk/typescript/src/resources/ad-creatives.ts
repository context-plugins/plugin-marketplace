import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { adCreativeCreateSchema, type AdCreativeCreate } from "../models/ad-creative-create.js";
import { adCreativeListInternalSchema, type AdCreativeList } from "../models/ad-creative-list.js";
import { createResponseSchema, type CreateResponse } from "../models/create-response.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * Manage ad creative content including images, videos, copy, and call-to-action configurations.
 */
export class AdCreatives {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Facebook Business Manager Create an ad creative
   *
   * @remarks
   * Creates a new ad creative with image, video, copy, and call-to-action configurations for use in
   * ads.
   *
   * @returns Ad creative created successfully
   *
   * @throws {@link AdCreatives.CreateAdCreativeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FacebookBusinessManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createAdCreative(
    request: AdCreatives.CreateAdCreativeRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateResponse, AdCreatives.CreateAdCreativeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/act_{ad_account_id}/adcreatives"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "ad_account_id", value: request.adAccountId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: adCreativeCreateSchema },
      },
      {
        success: { kind: "json", schema: createResponseSchema },
        errorFactory: AdCreatives.CreateAdCreativeError,
      },
      options,
    );
  }

  /**
   * Facebook Business Manager List ad creatives
   *
   * @remarks
   * Retrieves all ad creatives for the specified ad account.
   *
   * @returns Successfully retrieved list of ad creatives
   *
   * @throws {@link AdCreatives.ListAdCreativesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FacebookBusinessManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listAdCreatives(
    request: AdCreatives.ListAdCreativesRequest,
    options?: RequestOptions,
  ): ApiPromise<AdCreativeList, AdCreatives.ListAdCreativesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/act_{ad_account_id}/adcreatives"),
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
        success: { kind: "json", schema: adCreativeListInternalSchema },
        errorFactory: AdCreatives.ListAdCreativesError,
      },
      options,
    );
  }
}

export namespace AdCreatives {
  export type CreateAdCreativeRequest = {
    /** The ID of the ad account (numeric, without the act_ prefix) */
    adAccountId: string;
    body: AdCreativeCreate;
  };

  export class CreateAdCreativeError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<CreateAdCreativeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListAdCreativesRequest = {
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

  export const listAdCreativesRequestSchema: Schema<ListAdCreativesRequest> = s.lazySchema(() =>
    s.object<ListAdCreativesRequest>({
      adAccountId: s.string(),
      fields: s.optional(s.string()),
      limit: s.defaulted(s.int().check(s.lte(100)), 25),
      after: s.optional(s.string()),
    }),
  );

  export class ListAdCreativesError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<ListAdCreativesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
