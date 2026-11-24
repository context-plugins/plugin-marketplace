import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { campaignCreateSchema, type CampaignCreate } from "../models/campaign-create.js";
import { campaignListSchema, type CampaignList } from "../models/campaign-list.js";
import { campaignUpdateSchema, type CampaignUpdate } from "../models/campaign-update.js";
import { campaignSchema, type Campaign } from "../models/campaign.js";
import { createResponseSchema, type CreateResponse } from "../models/create-response.js";
import { errorSchema, type Error } from "../models/error.js";
import { successResponseSchema, type SuccessResponse } from "../models/success-response.js";
import type { Servers } from "../servers.js";

/**
 * Manage advertising campaigns including creation, updating, and status management.
 */
export class Campaigns {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Facebook Business Manager Create a campaign
   *
   * @remarks
   * Creates a new advertising campaign in the specified ad account. Requires at minimum a name,
   * objective, and status.
   *
   * @returns Campaign created successfully
   *
   * @throws {@link Campaigns.CreateCampaignError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FacebookBusinessManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createCampaign(
    request: Campaigns.CreateCampaignRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateResponse, Campaigns.CreateCampaignError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/act_{ad_account_id}/campaigns"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "ad_account_id", value: request.adAccountId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: campaignCreateSchema },
      },
      {
        success: { kind: "json", schema: createResponseSchema },
        errorFactory: Campaigns.CreateCampaignError,
      },
      options,
    );
  }

  /**
   * Facebook Business Manager Delete a campaign
   *
   * @remarks
   * Deletes an advertising campaign. This sets the campaign status to DELETED and it will no longer
   * serve ads.
   *
   * @returns Campaign deleted successfully
   *
   * @throws {@link Campaigns.DeleteCampaignError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FacebookBusinessManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteCampaign(
    request: Campaigns.DeleteCampaignRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessResponse, Campaigns.DeleteCampaignError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/{campaign_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "campaign_id", value: request.campaignId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: successResponseSchema },
        errorFactory: Campaigns.DeleteCampaignError,
      },
      options,
    );
  }

  /**
   * Facebook Business Manager Get a campaign
   *
   * @remarks
   * Retrieves the details of a specific campaign by its ID, including configuration, status, and
   * objective.
   *
   * @returns Successfully retrieved campaign details
   *
   * @throws {@link Campaigns.GetCampaignError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link FacebookBusinessManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getCampaign(
    request: Campaigns.GetCampaignRequest,
    options?: RequestOptions,
  ): ApiPromise<Campaign, Campaigns.GetCampaignError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{campaign_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "campaign_id", value: request.campaignId, schema: s.string() }],
        query: [{ name: "fields", value: request.fields, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: campaignSchema },
        errorFactory: Campaigns.GetCampaignError,
      },
      options,
    );
  }

  /**
   * Facebook Business Manager List campaigns
   *
   * @remarks
   * Retrieves all campaigns for the specified ad account. Returns a paginated list of campaign
   * objects with their configurations and status information.
   *
   * @returns Successfully retrieved list of campaigns
   *
   * @throws {@link Campaigns.ListCampaignsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link FacebookBusinessManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listCampaigns(
    request: Campaigns.ListCampaignsRequest,
    options?: RequestOptions,
  ): ApiPromise<CampaignList, Campaigns.ListCampaignsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/act_{ad_account_id}/campaigns"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "ad_account_id", value: request.adAccountId, schema: s.string() }],
        query: [
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          { name: "after", value: request.after, schema: s.optional(s.string()) },
          { name: "filtering", value: request.filtering, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: campaignListSchema },
        errorFactory: Campaigns.ListCampaignsError,
      },
      options,
    );
  }

  /**
   * Facebook Business Manager Update a campaign
   *
   * @remarks
   * Updates an existing campaign. Supports modifying name, status, budget, and other campaign-level
   * settings.
   *
   * @returns Campaign updated successfully
   *
   * @throws {@link Campaigns.UpdateCampaignError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FacebookBusinessManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateCampaign(
    request: Campaigns.UpdateCampaignRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessResponse, Campaigns.UpdateCampaignError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/{campaign_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "campaign_id", value: request.campaignId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: campaignUpdateSchema },
      },
      {
        success: { kind: "json", schema: successResponseSchema },
        errorFactory: Campaigns.UpdateCampaignError,
      },
      options,
    );
  }
}

export namespace Campaigns {
  export type CreateCampaignRequest = {
    /** The ID of the ad account (numeric, without the act_ prefix) */
    adAccountId: string;
    body: CampaignCreate;
  };

  export class CreateCampaignError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<CreateCampaignError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteCampaignRequest = {
    /** The ID of the campaign */
    campaignId: string;
  };

  export class DeleteCampaignError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCampaignError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCampaignRequest = {
    /** The ID of the campaign */
    campaignId: string;
    /**
     * Comma-separated list of fields to include in the response. If omitted, default fields are
     * returned.
     */
    fields?: string;
  };

  export class GetCampaignError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetCampaignError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListCampaignsRequest = {
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
    /**
     * Filters to apply to the campaign list. Accepts JSON array of filter objects with field,
     * operator, and value.
     */
    filtering?: string;
  };

  export const listCampaignsRequestSchema: Schema<ListCampaignsRequest> = s.lazySchema(() =>
    s.object<ListCampaignsRequest>({
      adAccountId: s.string(),
      fields: s.optional(s.string()),
      limit: s.defaulted(s.int().check(s.lte(100)), 25),
      after: s.optional(s.string()),
      filtering: s.optional(s.string()),
    }),
  );

  export class ListCampaignsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<ListCampaignsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateCampaignRequest = {
    /** The ID of the campaign */
    campaignId: string;
    body: CampaignUpdate;
  };

  export class UpdateCampaignError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateCampaignError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
