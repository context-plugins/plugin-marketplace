import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import {
  pullRequestCollectionRepSchema,
  type PullRequestCollectionRep,
} from "../models/pull-request-collection-rep.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import {
  validationFailedErrorRepSchema,
  type ValidationFailedErrorRep,
} from "../models/validation-failed-error-rep.js";
import type { Servers } from "../servers.js";

/**
 * > ### This feature is in beta > > To use this feature, pass in a header including the
 * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
 * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
 * in beta are still undergoing testing and development. They may change without notice, including
 * becoming backwards incompatible.
 *
 * The pull requests API provides access to information used for lead time calculations. To learn
 * more, read [Lead time](https://launchdarkly.com/docs/home/observability/lead-time).
 */
export class InsightsPullRequestsBeta {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List pull requests
   *
   * @remarks
   * Get a list of pull requests
   *
   * ### Expanding the pull request collection response
   *
   * LaunchDarkly supports expanding the pull request collection response to include additional
   * fields.
   *
   * To expand the response, append the `expand` query parameter and include the following:
   *
   * * `deployments` includes details on all of the deployments associated with each pull request
   * * `flagReferences` includes details on all of the references to flags in each pull request
   * * `leadTime` includes details about the lead time of the pull request for each stage
   *
   * For example, use `?expand=deployments` to include the `deployments` field in the response. By
   * default, this field is **not** included in the response.
   *
   * @returns Pull request collection response
   *
   * @throws {@link InsightsPullRequestsBeta.GetPullRequestsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getPullRequests(
    request: InsightsPullRequestsBeta.GetPullRequestsRequest,
    options?: RequestOptions,
  ): ApiPromise<PullRequestCollectionRep, InsightsPullRequestsBeta.GetPullRequestsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/engineering-insights/pull-requests"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.optional(s.string()) },
          { name: "applicationKey", value: request.applicationKey, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.optional(s.string()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "expand", value: request.expand, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
          { name: "from", value: request.from, schema: s.optional(s.dateTime()) },
          { name: "to", value: request.to, schema: s.optional(s.dateTime()) },
          { name: "after", value: request.after, schema: s.optional(s.string()) },
          { name: "before", value: request.before, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pullRequestCollectionRepSchema },
        errorFactory: InsightsPullRequestsBeta.GetPullRequestsError,
      },
      options,
    );
  }
}

export namespace InsightsPullRequestsBeta {
  export type GetPullRequestsRequest = {
    /** The project key */
    projectKey: string;
    /**
     * Required if you are using the <code>sort</code> parameter's <code>leadTime</code> option to
     * sort pull requests.
     */
    environmentKey?: string;
    /** Filter the results to pull requests deployed to a comma separated list of applications */
    applicationKey?: string;
    /**
     * Filter results to pull requests with the given status. Options: `open`, `merged`, `closed`,
     * `deployed`.
     */
    status?: string;
    /** Filter list of pull requests by title or author */
    query?: string;
    /** The number of pull requests to return. Default is 20. Maximum allowed is 100. */
    limit?: number;
    /** Expand properties in response. Options: `deployments`, `flagReferences`, `leadTime`. */
    expand?: string;
    /**
     * Sort results. Requires the `environmentKey` to be set. Options: `leadTime` (asc) and
     * `-leadTime` (desc). When query option is excluded, default sort is by created or merged date.
     */
    sort?: string;
    /** Unix timestamp in milliseconds. Default value is 7 days ago. */
    from?: Date;
    /** Unix timestamp in milliseconds. Default value is now. */
    to?: Date;
    /** Identifier used for pagination */
    after?: string;
    /** Identifier used for pagination */
    before?: string;
  };

  export class GetPullRequestsError extends ApiError {
    declare readonly payload:
      | Declared<"validationFailedErrorRep", ValidationFailedErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPullRequestsError> = [
      {
        on: 400,
        kind: "validationFailedErrorRep",
        decode: { kind: "json", schema: validationFailedErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }
}
