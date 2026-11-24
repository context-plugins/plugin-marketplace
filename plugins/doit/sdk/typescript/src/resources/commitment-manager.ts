import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  commitmentExternalListSchema,
  type CommitmentExternalList,
} from "../models/commitment-external-list.js";
import { commitmentExternalSchema, type CommitmentExternal } from "../models/commitment-external.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  sortByDoiTCommitmentManagerApiSchema,
  type SortByDoiTCommitmentManagerApi,
} from "../models/sort-by-doi-tcommitment-manager-api.js";
import { sortOrderSchema, type SortOrder } from "../models/sort-order.js";
import type { Servers } from "../servers.js";

/**
 * View and manage commitment contracts with DoiT.
 */
export class CommitmentManager {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve a commitment
   *
   * @remarks
   * Returns a commitment by the specified Id.
   *
   * @returns OK - Commitment returned.
   *
   * @throws {@link CommitmentManager.GetCommitmentError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCommitment(
    request: CommitmentManager.GetCommitmentRequest,
    options?: RequestOptions,
  ): ApiPromise<CommitmentExternal, CommitmentManager.GetCommitmentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/analytics/v1/commitment-manager/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: commitmentExternalSchema },
        errorFactory: CommitmentManager.GetCommitmentError,
      },
      options,
    );
  }

  /**
   * List commitments
   *
   * @remarks
   * Returns a list of commitments for the customer. Commitments are listed in reverse chronological
   * order by default.
   *
   * @returns OK - The request succeeded.
   *
   * @throws {@link CommitmentManager.ListCommitmentsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCommitments(
    request: CommitmentManager.ListCommitmentsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<CommitmentExternalList, CommitmentManager.ListCommitmentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/analytics/v1/commitment-manager"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [
          {
            name: "sortBy",
            value: request.sortBy,
            schema: s.optional(s.lazy(() => sortByDoiTCommitmentManagerApiSchema)),
          },
          { name: "sortOrder", value: request.sortOrder, schema: s.optional(s.lazy(() => sortOrderSchema)) },
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 50) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: commitmentExternalListSchema },
        errorFactory: CommitmentManager.ListCommitmentsError,
      },
      options,
    );
  }
}

export namespace CommitmentManager {
  export type GetCommitmentRequest = {
    /** Commitment ID */
    id: string;
  };

  export class GetCommitmentError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCommitmentError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListCommitmentsRequest = {
    /** A field by which the results will be sorted. */
    sortBy?: SortByDoiTCommitmentManagerApi;
    /**
     * Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for
     * descending (highest to lowest).
     */
    sortOrder?: SortOrder;
    /**
     * The maximum number of results to return in a single page. Use the page tokens to iterate
     * through the entire collection.
     *
     * @default 50
     */
    maxResults?: number;
    /** Page token, returned by a previous call, to request the next page of results */
    pageToken?: string;
    /**
     * An expression for filtering the results. The syntax is `key:[<value>]`. Multiple filters can
     * be connected using a pipe |. See [Filters](https://developer.doit.com/docs/filters).
     * Available filter keys: **name**, **provider**
     */
    filter?: string;
  };

  export class ListCommitmentsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCommitmentsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
