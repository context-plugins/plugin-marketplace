import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { pageCollectionSchema, type PageCollection } from "../models/page-collection.js";
import { pageSchema, type Page } from "../models/page.js";
import {
  pagesFormFieldsResponseSchema,
  type PagesFormFieldsResponse,
} from "../models/pages-form-fields-response.js";
import type { Servers } from "../servers.js";

/**
 * Landing pages and form fields
 */
export class Pages {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve a page
   *
   * @returns Page
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link UnbounceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPage(request: Pages.GetPageRequest, options?: RequestOptions): ApiPromise<Page, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/pages/{page_id}"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.oauth2),
        pathParams: [{ name: "page_id", value: request.pageId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pageSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List pages for an account
   *
   * @returns Page collection
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link UnbounceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAccountPages(
    request: Pages.ListAccountPagesRequest,
    options?: RequestOptions,
  ): ApiPromise<PageCollection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/accounts/{account_id}/pages"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.oauth2),
        pathParams: [{ name: "account_id", value: request.accountId, schema: s.string() }],
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

  /**
   * Retrieve form fields for a page
   *
   * @returns Form field collection
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link UnbounceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listFormFields(
    request: Pages.ListFormFieldsRequest,
    options?: RequestOptions,
  ): ApiPromise<PagesFormFieldsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/pages/{page_id}/form_fields"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.oauth2),
        pathParams: [{ name: "page_id", value: request.pageId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagesFormFieldsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List all accessible pages
   *
   * @returns Page collection
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link UnbounceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPages(options?: RequestOptions): ApiPromise<PageCollection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/pages"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.oauth2),
        pathParams: [],
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

  /**
   * List pages on a domain
   *
   * @returns Page collection
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link UnbounceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPagesForDomain(
    request: Pages.ListPagesForDomainRequest,
    options?: RequestOptions,
  ): ApiPromise<PageCollection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/domains/{domain_id}/pages"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.oauth2),
        pathParams: [{ name: "domain_id", value: request.domainId, schema: s.string() }],
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

  /**
   * List pages for a sub-account
   *
   * @returns Page collection
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link UnbounceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSubAccountPages(
    request: Pages.ListSubAccountPagesRequest,
    options?: RequestOptions,
  ): ApiPromise<PageCollection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sub_accounts/{sub_account_id}/pages"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.oauth2),
        pathParams: [{ name: "sub_account_id", value: request.subAccountId, schema: s.string() }],
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

export namespace Pages {
  export type GetPageRequest = {
    pageId: string;
  };

  export type ListAccountPagesRequest = {
    accountId: string;
  };

  export type ListFormFieldsRequest = {
    pageId: string;
  };

  export type ListPagesForDomainRequest = {
    domainId: string;
  };

  export type ListSubAccountPagesRequest = {
    subAccountId: string;
  };
}
