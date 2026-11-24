import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { adSetCreateSchema, type AdSetCreate } from "../models/ad-set-create.js";
import { adSetListInternalSchema, type AdSetList } from "../models/ad-set-list.js";
import { adSetUpdateSchema, type AdSetUpdate } from "../models/ad-set-update.js";
import { adSetInternalSchema, type AdSet } from "../models/ad-set.js";
import { createResponseSchema, type CreateResponse } from "../models/create-response.js";
import { errorSchema, type Error } from "../models/error.js";
import { successResponseSchema, type SuccessResponse } from "../models/success-response.js";
import type { Servers } from "../servers.js";

/**
 * Manage ad sets within campaigns, including targeting, budgets, scheduling, and optimization
 * goals.
 */
export class AdSets {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Facebook Business Manager Create an ad set
   *
   * @remarks
   * Creates a new ad set within a campaign. Defines targeting, budget, schedule, optimization goal,
   * and bid strategy.
   *
   * @returns Ad set created successfully
   *
   * @throws {@link AdSets.CreateAdSetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link FacebookBusinessManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createAdSet(
    request: AdSets.CreateAdSetRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateResponse, AdSets.CreateAdSetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/act_{ad_account_id}/adsets"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "ad_account_id", value: request.adAccountId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: adSetCreateSchema },
      },
      {
        success: { kind: "json", schema: createResponseSchema },
        errorFactory: AdSets.CreateAdSetError,
      },
      options,
    );
  }

  /**
   * Facebook Business Manager Get an ad set
   *
   * @remarks
   * Retrieves the details of a specific ad set including targeting, budget, scheduling, and
   * optimization settings.
   *
   * @returns Successfully retrieved ad set details
   *
   * @throws {@link AdSets.GetAdSetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link FacebookBusinessManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getAdSet(
    request: AdSets.GetAdSetRequest,
    options?: RequestOptions,
  ): ApiPromise<AdSet, AdSets.GetAdSetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{ad_set_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "ad_set_id", value: request.adSetId, schema: s.string() }],
        query: [{ name: "fields", value: request.fields, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: adSetInternalSchema },
        errorFactory: AdSets.GetAdSetError,
      },
      options,
    );
  }

  /**
   * Facebook Business Manager List ad sets
   *
   * @remarks
   * Retrieves all ad sets for the specified ad account. Returns targeting, budget, scheduling, and
   * optimization configurations.
   *
   * @returns Successfully retrieved list of ad sets
   *
   * @throws {@link AdSets.ListAdSetsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link FacebookBusinessManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listAdSets(
    request: AdSets.ListAdSetsRequest,
    options?: RequestOptions,
  ): ApiPromise<AdSetList, AdSets.ListAdSetsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/act_{ad_account_id}/adsets"),
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
        success: { kind: "json", schema: adSetListInternalSchema },
        errorFactory: AdSets.ListAdSetsError,
      },
      options,
    );
  }

  /**
   * Facebook Business Manager Update an ad set
   *
   * @remarks
   * Updates an existing ad set. Supports modifying targeting, budget, schedule, and optimization
   * settings.
   *
   * @returns Ad set updated successfully
   *
   * @throws {@link AdSets.UpdateAdSetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link FacebookBusinessManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateAdSet(
    request: AdSets.UpdateAdSetRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessResponse, AdSets.UpdateAdSetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/{ad_set_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "ad_set_id", value: request.adSetId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: adSetUpdateSchema },
      },
      {
        success: { kind: "json", schema: successResponseSchema },
        errorFactory: AdSets.UpdateAdSetError,
      },
      options,
    );
  }
}

export namespace AdSets {
  export type CreateAdSetRequest = {
    /** The ID of the ad account (numeric, without the act_ prefix) */
    adAccountId: string;
    body: AdSetCreate;
  };

  export class CreateAdSetError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<CreateAdSetError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAdSetRequest = {
    /** The ID of the ad set */
    adSetId: string;
    /**
     * Comma-separated list of fields to include in the response. If omitted, default fields are
     * returned.
     */
    fields?: string;
  };

  export class GetAdSetError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetAdSetError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListAdSetsRequest = {
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

  export const listAdSetsRequestSchema: Schema<ListAdSetsRequest> = s.lazySchema(() =>
    s.object<ListAdSetsRequest>({
      adAccountId: s.string(),
      fields: s.optional(s.string()),
      limit: s.defaulted(s.int().check(s.lte(100)), 25),
      after: s.optional(s.string()),
    }),
  );

  export class ListAdSetsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<ListAdSetsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateAdSetRequest = {
    /** The ID of the ad set */
    adSetId: string;
    body: AdSetUpdate;
  };

  export class UpdateAdSetError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateAdSetError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
