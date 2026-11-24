import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { pageCollectionSchema, type PageCollection } from "../models/page-collection.js";
import {
  subAccountsPageGroupsResponseSchema,
  type SubAccountsPageGroupsResponse,
} from "../models/sub-accounts-page-groups-response.js";
import type { Servers } from "../servers.js";

/**
 * Logical page groupings
 */
export class PageGroups {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List page groups for a sub-account
   *
   * @returns Page group collection
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link UnbounceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPageGroupsForSubAccount(
    request: PageGroups.ListPageGroupsForSubAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<SubAccountsPageGroupsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sub_accounts/{sub_account_id}/page_groups"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.oauth2),
        pathParams: [{ name: "sub_account_id", value: request.subAccountId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: subAccountsPageGroupsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List pages in a page group
   *
   * @returns Page collection
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link UnbounceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPagesForPageGroup(
    request: PageGroups.ListPagesForPageGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<PageCollection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/page_groups/{page_group_id}/pages"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.oauth2),
        pathParams: [{ name: "page_group_id", value: request.pageGroupId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pageCollectionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace PageGroups {
  export type ListPageGroupsForSubAccountRequest = {
    subAccountId: string;
  };

  export type ListPagesForPageGroupRequest = {
    pageGroupId: string;
  };
}
