import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  campaignItemTicketResourceSchema,
  type CampaignItemTicketResource,
} from "../models/campaign-item-ticket-resource.js";
import {
  modelNotFoundException1Schema,
  type ModelNotFoundException1,
} from "../models/model-not-found-exception1.js";
import {
  storeCampaignItemTicketRequestInternalSchema,
  type StoreCampaignItemTicketRequest,
} from "../models/store-campaign-item-ticket-request.js";
import {
  v1CampaignsItemsTicketsResponseInternalSchema,
  type V1CampaignsItemsTicketsResponse,
} from "../models/v1-campaigns-items-tickets-response.js";
import { validationException1Schema, type ValidationException1 } from "../models/validation-exception1.js";
import type { Servers } from "../servers.js";

export class CampaignTickets {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List all campaign tickets
   *
   * @returns Paginated set of `CampaignItemTicketResource`
   *
   * @throws {@link CampaignTickets.CampaignsItemsTicketsIndexError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  campaignsItemsTicketsIndex(
    request: CampaignTickets.CampaignsItemsTicketsIndexRequest,
    options?: RequestOptions,
  ): ApiPromise<V1CampaignsItemsTicketsResponse, CampaignTickets.CampaignsItemsTicketsIndexError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/campaigns/{campaign}/items/tickets"),
        auth: this.#auth.http,
        pathParams: [{ name: "campaign", value: request.campaign, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1CampaignsItemsTicketsResponseInternalSchema },
        errorFactory: CampaignTickets.CampaignsItemsTicketsIndexError,
      },
      options,
    );
  }

  /**
   * Get a campaign ticket
   *
   * @returns `CampaignItemTicketResource`
   *
   * @throws {@link CampaignTickets.CampaignsItemsTicketsShowError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  campaignsItemsTicketsShow(
    request: CampaignTickets.CampaignsItemsTicketsShowRequest,
    options?: RequestOptions,
  ): ApiPromise<CampaignItemTicketResource, CampaignTickets.CampaignsItemsTicketsShowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/campaigns/{campaign}/items/tickets/{ticketId}"),
        auth: this.#auth.http,
        pathParams: [
          { name: "campaign", value: request.campaign, schema: s.int() },
          { name: "ticketId", value: request.ticketId, schema: s.int() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: campaignItemTicketResourceSchema },
        errorFactory: CampaignTickets.CampaignsItemsTicketsShowError,
      },
      options,
    );
  }

  /**
   * Create a campaign ticket
   *
   * @returns `CampaignItemTicketResource`
   *
   * @throws {@link CampaignTickets.CampaignsItemsTicketsStoreError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  campaignsItemsTicketsStore(
    request: CampaignTickets.CampaignsItemsTicketsStoreRequest,
    options?: RequestOptions,
  ): ApiPromise<CampaignItemTicketResource, CampaignTickets.CampaignsItemsTicketsStoreError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/campaigns/{campaign}/items/tickets"),
        auth: this.#auth.http,
        pathParams: [{ name: "campaign", value: request.campaign, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: storeCampaignItemTicketRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: campaignItemTicketResourceSchema },
        errorFactory: CampaignTickets.CampaignsItemsTicketsStoreError,
      },
      options,
    );
  }
}

export namespace CampaignTickets {
  export type CampaignsItemsTicketsIndexRequest = {
    /** The campaign ID */
    campaign: number;
  };

  export class CampaignsItemsTicketsIndexError extends ApiError {
    declare readonly payload: Declared<"modelNotFoundException1", ModelNotFoundException1> | Undeclared;

    static readonly errors: ErrorDecoders<CampaignsItemsTicketsIndexError> = [
      {
        on: 404,
        kind: "modelNotFoundException1",
        decode: { kind: "json", schema: modelNotFoundException1Schema },
      },
    ];
  }

  export type CampaignsItemsTicketsShowRequest = {
    /** The campaign ID */
    campaign: number;
    ticketId: number;
  };

  export class CampaignsItemsTicketsShowError extends ApiError {
    declare readonly payload: Declared<"modelNotFoundException1", ModelNotFoundException1> | Undeclared;

    static readonly errors: ErrorDecoders<CampaignsItemsTicketsShowError> = [
      {
        on: 404,
        kind: "modelNotFoundException1",
        decode: { kind: "json", schema: modelNotFoundException1Schema },
      },
    ];
  }

  export type CampaignsItemsTicketsStoreRequest = {
    /** The campaign ID */
    campaign: number;
    body: StoreCampaignItemTicketRequest;
  };

  export class CampaignsItemsTicketsStoreError extends ApiError {
    declare readonly payload:
      | Declared<"validationException1", ValidationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CampaignsItemsTicketsStoreError> = [
      { on: 422, kind: "validationException1", decode: { kind: "json", schema: validationException1Schema } },
      {
        on: 404,
        kind: "modelNotFoundException1",
        decode: { kind: "json", schema: modelNotFoundException1Schema },
      },
    ];
  }
}
