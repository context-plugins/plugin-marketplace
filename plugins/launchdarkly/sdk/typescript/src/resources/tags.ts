import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { tagsCollectionSchema, type TagsCollection } from "../models/tags-collection.js";
import type { Servers } from "../servers.js";

/**
 * Tags are simple strings that you can attach to most resources in LaunchDarkly. Tags are useful
 * for grouping resources into a set that you can name in a resource specifier. To learn more, read
 * [Custom role concepts](https://launchdarkly.com/docs/home/account/role-concepts#tags).
 *
 * Using the tags API, you can list existing tags for resources.
 */
export class Tags {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List tags
   *
   * @remarks
   * Get a list of tags.
   *
   * @returns Tag collection response
   *
   * @throws {@link Tags.GetTagsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getTags(
    request: Tags.GetTagsRequest,
    options?: RequestOptions,
  ): ApiPromise<TagsCollection, Tags.GetTagsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/tags"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "kind", value: request.kind, schema: s.optional(s.array(s.string())) },
          { name: "pre", value: request.pre, schema: s.optional(s.string()) },
          { name: "archived", value: request.archived, schema: s.optional(s.boolean()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "asOf", value: request.asOf, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tagsCollectionSchema },
        errorFactory: Tags.GetTagsError,
      },
      options,
    );
  }
}

export namespace Tags {
  export type GetTagsRequest = {
    /**
     * Fetch tags associated with the specified resource type. Options are `flag`, `project`,
     * `environment`, `segment`, `metric`, `metric-data-source`, `aiconfig`, and `view`. Returns all
     * types by default.
     */
    kind?: string[];
    /** Return tags with the specified prefix */
    pre?: string;
    /** Whether or not to return archived flags */
    archived?: boolean;
    /** The number of tags to return. Maximum is 1000. */
    limit?: number;
    /** The index of the first tag to return. Default is 0. */
    offset?: number;
    /** The time to retrieve tags as of. Default is the current time. */
    asOf?: string;
  };

  export class GetTagsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTagsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
