import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { campaignModifySchema, type CampaignModify } from "../models/campaign-modify.js";
import { campaignSchema, type Campaign } from "../models/campaign.js";
import { campaignsSchema, type Campaigns } from "../models/campaigns.js";
import { channelModifySchema, type ChannelModify } from "../models/channel-modify.js";
import { channelSchema, type Channel } from "../models/channel.js";
import { channelsSchema, type Channels } from "../models/channels.js";
import { errorSchema, type Error } from "../models/error.js";
import { simplifiedErrorSchema, type SimplifiedError } from "../models/simplified-error.js";
import type { Servers } from "../servers.js";

/**
 * Bitly Campaigns are used to build and organize links and metrics for marketing campaigns.
 */
export class CampaignsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Campaign
   *
   * @remarks
   * Creates a new campaign.
   *
   * @returns SUCCESS
   *
   * @throws {@link CampaignsApi.CreateCampaignError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCampaign(
    request: CampaignsApi.CreateCampaignRequest,
    options?: RequestOptions,
  ): ApiPromise<Campaign, CampaignsApi.CreateCampaignError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/campaigns"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: campaignModifySchema },
      },
      {
        success: { kind: "json", schema: campaignSchema },
        errorFactory: CampaignsApi.CreateCampaignError,
      },
      options,
    );
  }

  /**
   * Create Channel
   *
   * @remarks
   * Creates a new channel.
   *
   * @returns SUCCESS
   *
   * @throws {@link CampaignsApi.CreateChannelError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createChannel(
    request: CampaignsApi.CreateChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<Channel, CampaignsApi.CreateChannelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/channels"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: channelModifySchema },
      },
      {
        success: { kind: "json", schema: channelSchema },
        errorFactory: CampaignsApi.CreateChannelError,
      },
      options,
    );
  }

  /**
   * Retrieve a Campaign
   *
   * @remarks
   * Returns details for a campaign.
   *
   * @returns SUCCESS
   *
   * @throws {@link CampaignsApi.GetCampaignError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCampaign(
    request: CampaignsApi.GetCampaignRequest,
    options?: RequestOptions,
  ): ApiPromise<Campaign, CampaignsApi.GetCampaignError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/campaigns/{campaign_guid}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "campaign_guid", value: request.campaignGuid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: campaignSchema },
        errorFactory: CampaignsApi.GetCampaignError,
      },
      options,
    );
  }

  /**
   * Retrieve Campaigns
   *
   * @remarks
   * Returns the campaigns for the current authenticated user.
   *
   * @returns SUCCESS
   *
   * @throws {@link CampaignsApi.GetCampaignsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCampaigns(
    request: CampaignsApi.GetCampaignsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Campaigns, CampaignsApi.GetCampaignsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/campaigns"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [{ name: "group_guid", value: request.groupGuid, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: campaignsSchema },
        errorFactory: CampaignsApi.GetCampaignsError,
      },
      options,
    );
  }

  /**
   * Get a Channel
   *
   * @remarks
   * Returns a channel's details.
   *
   * @returns SUCCESS
   *
   * @throws {@link CampaignsApi.GetChannelError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getChannel(
    request: CampaignsApi.GetChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<Channel, CampaignsApi.GetChannelError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/channels/{channel_guid}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "channel_guid", value: request.channelGuid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: channelSchema },
        errorFactory: CampaignsApi.GetChannelError,
      },
      options,
    );
  }

  /**
   * Retrieve Channels
   *
   * @remarks
   * Returns the channels available to a user.
   *
   * @returns SUCCESS
   *
   * @throws {@link CampaignsApi.GetChannelsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getChannels(
    request: CampaignsApi.GetChannelsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Channels, CampaignsApi.GetChannelsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/channels"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "group_guid", value: request.groupGuid, schema: s.optional(s.string()) },
          { name: "campaign_guid", value: request.campaignGuid, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: channelsSchema },
        errorFactory: CampaignsApi.GetChannelsError,
      },
      options,
    );
  }

  /**
   * Update Campaign
   *
   * @remarks
   * Updates a campaign's details.
   *
   * @returns SUCCESS
   *
   * @throws {@link CampaignsApi.UpdateCampaignError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCampaign(
    request: CampaignsApi.UpdateCampaignRequest,
    options?: RequestOptions,
  ): ApiPromise<Campaign, CampaignsApi.UpdateCampaignError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/campaigns/{campaign_guid}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "campaign_guid", value: request.campaignGuid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: campaignModifySchema },
      },
      {
        success: { kind: "json", schema: campaignSchema },
        errorFactory: CampaignsApi.UpdateCampaignError,
      },
      options,
    );
  }

  /**
   * Update a Channel
   *
   * @remarks
   * Updates an existing channel.
   *
   * @returns SUCCESS
   *
   * @throws {@link CampaignsApi.UpdateChannelError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateChannel(
    request: CampaignsApi.UpdateChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<Channel, CampaignsApi.UpdateChannelError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/channels/{channel_guid}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "channel_guid", value: request.channelGuid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: channelModifySchema },
      },
      {
        success: { kind: "json", schema: channelSchema },
        errorFactory: CampaignsApi.UpdateChannelError,
      },
      options,
    );
  }
}

export namespace CampaignsApi {
  export type CreateCampaignRequest = {
    body: CampaignModify;
  };

  export class CreateCampaignError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCampaignError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateChannelRequest = {
    body: ChannelModify;
  };

  export class CreateChannelError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateChannelError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCampaignRequest = {
    /** A GUID for a Bitly campaign */
    campaignGuid: string;
  };

  export class GetCampaignError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCampaignError> = [
      { on: 402, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCampaignsRequest = {
    /** A GUID for a Bitly group */
    groupGuid?: string;
  };

  export class GetCampaignsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCampaignsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 502, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetChannelRequest = {
    /** A GUID for a Bitly Channel */
    channelGuid: string;
  };

  export class GetChannelError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetChannelError> = [
      { on: 402, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetChannelsRequest = {
    /** A GUID for a Bitly group */
    groupGuid?: string;
    /** A GUID for a Bitly campaign */
    campaignGuid?: string;
  };

  export class GetChannelsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetChannelsError> = [
      { on: 402, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateCampaignRequest = {
    /** A GUID for a Bitly campaign */
    campaignGuid: string;
    body: CampaignModify;
  };

  export class UpdateCampaignError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateCampaignError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateChannelRequest = {
    /** A GUID for a Bitly Channel */
    channelGuid: string;
    body: ChannelModify;
  };

  export class UpdateChannelError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateChannelError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
