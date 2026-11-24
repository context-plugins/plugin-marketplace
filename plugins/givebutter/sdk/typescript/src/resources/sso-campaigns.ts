import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  authenticationException1Schema,
  type AuthenticationException1,
} from "../models/authentication-exception1.js";
import { campaignResourceSchema, type CampaignResource } from "../models/campaign-resource.js";
import type { Servers } from "../servers.js";

export class SsoCampaigns {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Sso campaigns show
   *
   * @returns `CampaignResource`
   *
   * @throws {@link SsoCampaigns.SsoCampaignsShowError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  ssoCampaignsShow(
    request: SsoCampaigns.SsoCampaignsShowRequest,
    options?: RequestOptions,
  ): ApiPromise<CampaignResource, SsoCampaigns.SsoCampaignsShowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sso/v1/campaigns/{campaign}"),
        auth: this.#auth.http,
        pathParams: [{ name: "campaign", value: request.campaign, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: campaignResourceSchema },
        errorFactory: SsoCampaigns.SsoCampaignsShowError,
      },
      options,
    );
  }
}

export namespace SsoCampaigns {
  export type SsoCampaignsShowRequest = {
    campaign: number;
  };

  export class SsoCampaignsShowError extends ApiError {
    declare readonly payload: Declared<"authenticationException1", AuthenticationException1> | Undeclared;

    static readonly errors: ErrorDecoders<SsoCampaignsShowError> = [
      {
        on: 401,
        kind: "authenticationException1",
        decode: { kind: "json", schema: authenticationException1Schema },
      },
    ];
  }
}
