import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  modelNotFoundException1Schema,
  type ModelNotFoundException1,
} from "../models/model-not-found-exception1.js";
import {
  v1CampaignsMembersResponse1InternalSchema,
  type V1CampaignsMembersResponse1,
} from "../models/unions/v1-campaigns-members-response1.js";
import {
  v1CampaignsMembersResponse11Schema,
  type V1CampaignsMembersResponse11,
} from "../models/unions/v1-campaigns-members-response11.js";
import type { Servers } from "../servers.js";

export class CampaignMembers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a campaign member
   *
   * @throws {@link CampaignMembers.CampaignsMembersDestroyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  campaignsMembersDestroy(
    request: CampaignMembers.CampaignsMembersDestroyRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, CampaignMembers.CampaignsMembersDestroyError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/campaigns/{campaign}/members/{member}"),
        auth: this.#auth.http,
        pathParams: [
          { name: "campaign", value: request.campaign, schema: s.int() },
          { name: "member", value: request.member, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: CampaignMembers.CampaignsMembersDestroyError,
      },
      options,
    );
  }

  /**
   * List all campaign members
   *
   * @returns Paginated set of `CampaignMemberResource`
   *
   * @throws {@link CampaignMembers.CampaignsMembersIndexError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  campaignsMembersIndex(
    request: CampaignMembers.CampaignsMembersIndexRequest,
    options?: RequestOptions,
  ): ApiPromise<V1CampaignsMembersResponse1, CampaignMembers.CampaignsMembersIndexError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/campaigns/{campaign}/members"),
        auth: this.#auth.http,
        pathParams: [{ name: "campaign", value: request.campaign, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1CampaignsMembersResponse1InternalSchema },
        errorFactory: CampaignMembers.CampaignsMembersIndexError,
      },
      options,
    );
  }

  /**
   * Get a campaign member
   *
   * @returns `CampaignMemberResource`
   *
   * @throws {@link CampaignMembers.CampaignsMembersShowError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  campaignsMembersShow(
    request: CampaignMembers.CampaignsMembersShowRequest,
    options?: RequestOptions,
  ): ApiPromise<V1CampaignsMembersResponse11, CampaignMembers.CampaignsMembersShowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/campaigns/{campaign}/members/{member}"),
        auth: this.#auth.http,
        pathParams: [
          { name: "campaign", value: request.campaign, schema: s.int() },
          { name: "member", value: request.member, schema: s.int() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1CampaignsMembersResponse11Schema },
        errorFactory: CampaignMembers.CampaignsMembersShowError,
      },
      options,
    );
  }
}

export namespace CampaignMembers {
  export type CampaignsMembersDestroyRequest = {
    /** The campaign ID */
    campaign: number;
    /** The member ID */
    member: number;
  };

  export class CampaignsMembersDestroyError extends ApiError {
    declare readonly payload: Declared<"modelNotFoundException1", ModelNotFoundException1> | Undeclared;

    static readonly errors: ErrorDecoders<CampaignsMembersDestroyError> = [
      {
        on: 404,
        kind: "modelNotFoundException1",
        decode: { kind: "json", schema: modelNotFoundException1Schema },
      },
    ];
  }

  export type CampaignsMembersIndexRequest = {
    /** The campaign ID */
    campaign: number;
  };

  export class CampaignsMembersIndexError extends ApiError {
    declare readonly payload: Declared<"modelNotFoundException1", ModelNotFoundException1> | Undeclared;

    static readonly errors: ErrorDecoders<CampaignsMembersIndexError> = [
      {
        on: 404,
        kind: "modelNotFoundException1",
        decode: { kind: "json", schema: modelNotFoundException1Schema },
      },
    ];
  }

  export type CampaignsMembersShowRequest = {
    /** The campaign ID */
    campaign: number;
    /** The member ID */
    member: number;
  };

  export class CampaignsMembersShowError extends ApiError {
    declare readonly payload: Declared<"modelNotFoundException1", ModelNotFoundException1> | Undeclared;

    static readonly errors: ErrorDecoders<CampaignsMembersShowError> = [
      {
        on: 404,
        kind: "modelNotFoundException1",
        decode: { kind: "json", schema: modelNotFoundException1Schema },
      },
    ];
  }
}
