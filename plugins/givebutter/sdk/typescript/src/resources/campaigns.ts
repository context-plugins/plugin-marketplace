import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  authorizationException1Schema,
  type AuthorizationException1,
} from "../models/authorization-exception1.js";
import { campaignResourceSchema, type CampaignResource } from "../models/campaign-resource.js";
import {
  modelNotFoundException1Schema,
  type ModelNotFoundException1,
} from "../models/model-not-found-exception1.js";
import {
  storeCampaignRequestInternalSchema,
  type StoreCampaignRequest,
} from "../models/store-campaign-request.js";
import {
  updateCampaignRequestInternalSchema,
  type UpdateCampaignRequest,
} from "../models/update-campaign-request.js";
import {
  v1CampaignsResponseInternalSchema,
  type V1CampaignsResponse,
} from "../models/v1-campaigns-response.js";
import { v1Campaigns409Error1Schema, type V1Campaigns409Error1 } from "../models/v1-campaigns409-error1.js";
import { validationException1Schema, type ValidationException1 } from "../models/validation-exception1.js";
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
   * Delete a campaign
   *
   * @throws {@link Campaigns.CampaignsDestroyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  campaignsDestroy(
    request: Campaigns.CampaignsDestroyRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Campaigns.CampaignsDestroyError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/campaigns/{campaign}"),
        auth: this.#auth.http,
        pathParams: [{ name: "campaign", value: request.campaign, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Campaigns.CampaignsDestroyError,
      },
      options,
    );
  }

  /**
   * List all campaigns
   *
   * @returns Paginated set of `CampaignResource`
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  campaignsIndex(
    request: Campaigns.CampaignsIndexRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1CampaignsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/campaigns"),
        auth: this.#auth.http,
        pathParams: [],
        query: [{ name: "scope", value: request.scope, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1CampaignsResponseInternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a campaign
   *
   * @returns `CampaignResource`
   *
   * @throws {@link Campaigns.CampaignsShowError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  campaignsShow(
    request: Campaigns.CampaignsShowRequest,
    options?: RequestOptions,
  ): ApiPromise<CampaignResource, Campaigns.CampaignsShowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/campaigns/{campaign}"),
        auth: this.#auth.http,
        pathParams: [{ name: "campaign", value: request.campaign, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: campaignResourceSchema },
        errorFactory: Campaigns.CampaignsShowError,
      },
      options,
    );
  }

  /**
   * Create a campaign
   *
   * @returns `CampaignResource`
   *
   * @throws {@link Campaigns.CampaignsStoreError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  campaignsStore(
    request: Campaigns.CampaignsStoreRequest,
    options?: RequestOptions,
  ): ApiPromise<CampaignResource, Campaigns.CampaignsStoreError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/campaigns"),
        auth: this.#auth.http,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: storeCampaignRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: campaignResourceSchema },
        errorFactory: Campaigns.CampaignsStoreError,
      },
      options,
    );
  }

  /**
   * Update a campaign
   *
   * @returns `CampaignResource`
   *
   * @throws {@link Campaigns.CampaignsUpdateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  campaignsUpdate(
    request: Campaigns.CampaignsUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<CampaignResource, Campaigns.CampaignsUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v1/campaigns/{campaign}"),
        auth: this.#auth.http,
        pathParams: [{ name: "campaign", value: request.campaign, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateCampaignRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: campaignResourceSchema },
        errorFactory: Campaigns.CampaignsUpdateError,
      },
      options,
    );
  }
}

export namespace Campaigns {
  export type CampaignsDestroyRequest = {
    /** The campaign ID */
    campaign: number;
  };

  export class CampaignsDestroyError extends ApiError {
    declare readonly payload:
      | Declared<"v1Campaigns409Error1", V1Campaigns409Error1>
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CampaignsDestroyError> = [
      { on: 409, kind: "v1Campaigns409Error1", decode: { kind: "json", schema: v1Campaigns409Error1Schema } },
      {
        on: 403,
        kind: "authorizationException1",
        decode: { kind: "json", schema: authorizationException1Schema },
      },
      {
        on: 404,
        kind: "modelNotFoundException1",
        decode: { kind: "json", schema: modelNotFoundException1Schema },
      },
    ];
  }

  export type CampaignsIndexRequest = {
    scope?: string;
  };

  export type CampaignsShowRequest = {
    /** The campaign ID */
    campaign: number;
  };

  export class CampaignsShowError extends ApiError {
    declare readonly payload: Declared<"modelNotFoundException1", ModelNotFoundException1> | Undeclared;

    static readonly errors: ErrorDecoders<CampaignsShowError> = [
      {
        on: 404,
        kind: "modelNotFoundException1",
        decode: { kind: "json", schema: modelNotFoundException1Schema },
      },
    ];
  }

  export type CampaignsStoreRequest = {
    body: StoreCampaignRequest;
  };

  export class CampaignsStoreError extends ApiError {
    declare readonly payload: Declared<"validationException1", ValidationException1> | Undeclared;

    static readonly errors: ErrorDecoders<CampaignsStoreError> = [
      { on: 422, kind: "validationException1", decode: { kind: "json", schema: validationException1Schema } },
    ];
  }

  export type CampaignsUpdateRequest = {
    /** The campaign ID */
    campaign: number;
    body?: UpdateCampaignRequest;
  };

  export class CampaignsUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"validationException1", ValidationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CampaignsUpdateError> = [
      {
        on: 403,
        kind: "authorizationException1",
        decode: { kind: "json", schema: authorizationException1Schema },
      },
      { on: 422, kind: "validationException1", decode: { kind: "json", schema: validationException1Schema } },
      {
        on: 404,
        kind: "modelNotFoundException1",
        decode: { kind: "json", schema: modelNotFoundException1Schema },
      },
    ];
  }
}
