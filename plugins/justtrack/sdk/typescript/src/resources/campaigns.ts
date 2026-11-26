import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { campaignOutputInternalSchema, type CampaignOutput } from "../models/campaign-output.js";
import {
  createCampaignRequestInternalSchema,
  type CreateCampaignRequest,
} from "../models/create-campaign-request.js";
import { errorResponseInternalSchema, type ErrorResponse } from "../models/error-response.js";
import {
  listCampaignsRequestInternalSchema,
  type ListCampaignsRequest,
} from "../models/list-campaigns-request.js";
import type { Servers } from "../servers.js";

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
   * Create campaign
   *
   * @remarks
   * Typically, we automatically track campaigns in justtrack when we receive the first click or
   * impression. However, you can also use this API to create a campaign manually.
   *
   * @returns OK
   *
   * @throws {@link Campaigns.PostManagementV1CampaignError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link JusttrackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postManagementV1Campaign(
    request: Campaigns.PostManagementV1CampaignRequest = {},
    options?: RequestOptions,
  ): ApiPromise<CampaignOutput, Campaigns.PostManagementV1CampaignError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultManagementAppPartnerConnectionApi("/management/v1/campaign"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createCampaignRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: campaignOutputInternalSchema },
        errorFactory: Campaigns.PostManagementV1CampaignError,
      },
      options,
    );
  }

  /**
   * List campaigns
   *
   * @remarks
   * Get a paginated list of campaigns for your organization.
   *
   * @returns OK
   *
   * @throws {@link Campaigns.PostManagementV1CampaignsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link JusttrackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postManagementV1Campaigns(
    request: Campaigns.PostManagementV1CampaignsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<CampaignOutput, Campaigns.PostManagementV1CampaignsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultManagementAppPartnerConnectionApi("/management/v1/campaigns"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listCampaignsRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: campaignOutputInternalSchema },
        errorFactory: Campaigns.PostManagementV1CampaignsError,
      },
      options,
    );
  }
}

export namespace Campaigns {
  export type PostManagementV1CampaignRequest = {
    body?: CreateCampaignRequest;
  };

  export class PostManagementV1CampaignError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<PostManagementV1CampaignError> = [
      { on: 500, kind: "errorResponse", decode: { kind: "json", schema: errorResponseInternalSchema } },
    ];
  }

  export type PostManagementV1CampaignsRequest = {
    body?: ListCampaignsRequest;
  };

  export class PostManagementV1CampaignsError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<PostManagementV1CampaignsError> = [
      { on: 500, kind: "errorResponse", decode: { kind: "json", schema: errorResponseInternalSchema } },
    ];
  }
}
