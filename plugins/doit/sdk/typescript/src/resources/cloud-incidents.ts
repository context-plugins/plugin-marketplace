import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  coreV1CloudincidentsResponseSchema,
  type CoreV1CloudincidentsResponse,
} from "../models/core-v1-cloudincidents-response.js";
import {
  coreV1CloudincidentsResponse1Schema,
  type CoreV1CloudincidentsResponse1,
} from "../models/core-v1-cloudincidents-response1.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * Service disruptions and outages from cloud providers.
 */
export class CloudIncidents {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve a cloud incident
   *
   * @remarks
   * Returns the specified cloud incident.
   *
   * @returns OK - Cloud incident returned.
   *
   * @throws {@link CloudIncidents.GetKnownIssueError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getKnownIssue(
    request: CloudIncidents.GetKnownIssueRequest,
    options?: RequestOptions,
  ): ApiPromise<CoreV1CloudincidentsResponse1, CloudIncidents.GetKnownIssueError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/core/v1/cloudincidents/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: coreV1CloudincidentsResponse1Schema },
        errorFactory: CloudIncidents.GetKnownIssueError,
      },
      options,
    );
  }

  /**
   * List cloud incidents
   *
   * @remarks
   * Returns a list of all the active and historical cloud incidents for Google Cloud and Amazon Web
   * Services. Incidents are returned in reverse chronological order by default.
   *
   * @returns OK - The request succeeded.
   *
   * @throws {@link CloudIncidents.ListKnownIssuesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listKnownIssues(
    request: CloudIncidents.ListKnownIssuesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<CoreV1CloudincidentsResponse, CloudIncidents.ListKnownIssuesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/core/v1/cloudincidents"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 50) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "minCreationTime", value: request.minCreationTime, schema: s.optional(s.string()) },
          { name: "maxCreationTime", value: request.maxCreationTime, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: coreV1CloudincidentsResponseSchema },
        errorFactory: CloudIncidents.ListKnownIssuesError,
      },
      options,
    );
  }
}

export namespace CloudIncidents {
  export type GetKnownIssueRequest = {
    /** The unique id of a cloud incident. */
    id: string;
  };

  export class GetKnownIssueError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetKnownIssueError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListKnownIssuesRequest = {
    /**
     * The maximum number of results to return in a single page. Leverage the page tokens to iterate
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
     */
    filter?: string;
    /**
     * Min value for the cloud incident creation time, in milliseconds since the POSIX epoch. If
     * set, only cloud incidents created after or at this timestamp are returned.
     */
    minCreationTime?: string;
    /**
     * Max value for the cloud incident creation time, in milliseconds since the POSIX epoch. If
     * set, only cloud incidents created before or at this timestamp are returned.
     */
    maxCreationTime?: string;
  };

  export class ListKnownIssuesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListKnownIssuesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
