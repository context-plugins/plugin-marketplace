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
import { campaignTeamResourceSchema, type CampaignTeamResource } from "../models/campaign-team-resource.js";
import {
  modelNotFoundException1Schema,
  type ModelNotFoundException1,
} from "../models/model-not-found-exception1.js";
import {
  v1CampaignsTeamsResponseInternalSchema,
  type V1CampaignsTeamsResponse,
} from "../models/v1-campaigns-teams-response.js";
import type { Servers } from "../servers.js";

export class CampaignTeams {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a campaign team
   *
   * @throws {@link CampaignTeams.CampaignsTeamsDestroyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  campaignsTeamsDestroy(
    request: CampaignTeams.CampaignsTeamsDestroyRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CampaignTeams.CampaignsTeamsDestroyError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/campaigns/{campaign}/teams/{team}"),
        auth: this.#auth.http,
        pathParams: [
          { name: "campaign", value: request.campaign, schema: s.int() },
          { name: "team", value: request.team, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CampaignTeams.CampaignsTeamsDestroyError,
      },
      options,
    );
  }

  /**
   * List all campaign teams
   *
   * @returns Paginated set of `CampaignTeamResource`
   *
   * @throws {@link CampaignTeams.CampaignsTeamsIndexError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  campaignsTeamsIndex(
    request: CampaignTeams.CampaignsTeamsIndexRequest,
    options?: RequestOptions,
  ): ApiPromise<V1CampaignsTeamsResponse, CampaignTeams.CampaignsTeamsIndexError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/campaigns/{campaign}/teams"),
        auth: this.#auth.http,
        pathParams: [{ name: "campaign", value: request.campaign, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1CampaignsTeamsResponseInternalSchema },
        errorFactory: CampaignTeams.CampaignsTeamsIndexError,
      },
      options,
    );
  }

  /**
   * Get a campaign team
   *
   * @returns `CampaignTeamResource`
   *
   * @throws {@link CampaignTeams.CampaignsTeamsShowError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  campaignsTeamsShow(
    request: CampaignTeams.CampaignsTeamsShowRequest,
    options?: RequestOptions,
  ): ApiPromise<CampaignTeamResource, CampaignTeams.CampaignsTeamsShowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/campaigns/{campaign}/teams/{team}"),
        auth: this.#auth.http,
        pathParams: [
          { name: "campaign", value: request.campaign, schema: s.int() },
          { name: "team", value: request.team, schema: s.int() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: campaignTeamResourceSchema },
        errorFactory: CampaignTeams.CampaignsTeamsShowError,
      },
      options,
    );
  }
}

export namespace CampaignTeams {
  export type CampaignsTeamsDestroyRequest = {
    /** The campaign ID */
    campaign: number;
    /** The team ID */
    team: number;
  };

  export class CampaignsTeamsDestroyError extends ApiError {
    declare readonly payload:
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CampaignsTeamsDestroyError> = [
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

  export type CampaignsTeamsIndexRequest = {
    /** The campaign ID */
    campaign: number;
  };

  export class CampaignsTeamsIndexError extends ApiError {
    declare readonly payload:
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CampaignsTeamsIndexError> = [
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

  export type CampaignsTeamsShowRequest = {
    /** The campaign ID */
    campaign: number;
    /** The team ID */
    team: number;
  };

  export class CampaignsTeamsShowError extends ApiError {
    declare readonly payload:
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CampaignsTeamsShowError> = [
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
}
