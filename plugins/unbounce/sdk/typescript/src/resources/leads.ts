import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { leadDeletionRequestSchema, type LeadDeletionRequest } from "../models/lead-deletion-request.js";
import { leadSchema, type Lead } from "../models/lead.js";
import {
  pagesLeadDeletionRequestResponseSchema,
  type PagesLeadDeletionRequestResponse,
} from "../models/pages-lead-deletion-request-response.js";
import { pagesLeadsResponseSchema, type PagesLeadsResponse } from "../models/pages-leads-response.js";
import type { Servers } from "../servers.js";

/**
 * Lead submissions captured by pages
 */
export class Leads {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve a lead
   *
   * @returns Lead
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link UnbounceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLead(request: Leads.GetLeadRequest, options?: RequestOptions): ApiPromise<Lead, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/leads/{lead_id}"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.oauth2),
        pathParams: [{ name: "lead_id", value: request.leadId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: leadSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a single lead deletion request
   *
   * @returns Lead deletion request
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link UnbounceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLeadDeletionRequest(
    request: Leads.GetLeadDeletionRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<LeadDeletionRequest, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/pages/{page_id}/lead_deletion_request/{lead_deletion_request_id}",
        ),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.oauth2),
        pathParams: [
          { name: "page_id", value: request.pageId, schema: s.string() },
          { name: "lead_deletion_request_id", value: request.leadDeletionRequestId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: leadDeletionRequestSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a lead from a page
   *
   * @returns Lead
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link UnbounceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLeadForPage(request: Leads.GetLeadForPageRequest, options?: RequestOptions): ApiPromise<Lead, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/pages/{page_id}/leads/{lead_id}"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.oauth2),
        pathParams: [
          { name: "page_id", value: request.pageId, schema: s.string() },
          { name: "lead_id", value: request.leadId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: leadSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List lead deletion requests for a page
   *
   * @returns Lead deletion request collection
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link UnbounceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listLeadDeletionRequests(
    request: Leads.ListLeadDeletionRequestsRequest,
    options?: RequestOptions,
  ): ApiPromise<PagesLeadDeletionRequestResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/pages/{page_id}/lead_deletion_request"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.oauth2),
        pathParams: [{ name: "page_id", value: request.pageId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagesLeadDeletionRequestResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List leads for a page
   *
   * @returns Lead collection
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link UnbounceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listLeadsForPage(
    request: Leads.ListLeadsForPageRequest,
    options?: RequestOptions,
  ): ApiPromise<PagesLeadsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/pages/{page_id}/leads"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.oauth2),
        pathParams: [{ name: "page_id", value: request.pageId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagesLeadsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Leads {
  export type GetLeadRequest = {
    leadId: string;
  };

  export type GetLeadDeletionRequestRequest = {
    pageId: string;
    leadDeletionRequestId: string;
  };

  export type GetLeadForPageRequest = {
    pageId: string;
    leadId: string;
  };

  export type ListLeadDeletionRequestsRequest = {
    pageId: string;
  };

  export type ListLeadsForPageRequest = {
    pageId: string;
  };
}
