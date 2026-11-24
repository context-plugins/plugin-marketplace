import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { domainSchema, type Domain } from "../models/domain.js";
import {
  subAccountsDomainsResponseSchema,
  type SubAccountsDomainsResponse,
} from "../models/sub-accounts-domains-response.js";
import type { Servers } from "../servers.js";

/**
 * Domains attached to sub-accounts
 */
export class Domains {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve a domain
   *
   * @returns Domain
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link UnbounceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDomain(request: Domains.GetDomainRequest, options?: RequestOptions): ApiPromise<Domain, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/domains/{domain_id}"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.oauth2),
        pathParams: [{ name: "domain_id", value: request.domainId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: domainSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List domains for a sub-account
   *
   * @returns Domain collection
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link UnbounceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDomainsForSubAccount(
    request: Domains.ListDomainsForSubAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<SubAccountsDomainsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sub_accounts/{sub_account_id}/domains"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.oauth2),
        pathParams: [{ name: "sub_account_id", value: request.subAccountId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: subAccountsDomainsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Domains {
  export type GetDomainRequest = {
    domainId: string;
  };

  export type ListDomainsForSubAccountRequest = {
    subAccountId: string;
  };
}
