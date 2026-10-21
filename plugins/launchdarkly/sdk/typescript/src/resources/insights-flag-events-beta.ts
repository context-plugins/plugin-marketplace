import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  flagEventCollectionRepSchema,
  type FlagEventCollectionRep,
} from "../models/flag-event-collection-rep.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
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
 * The flag events API provides access to flag-event data used in engineering insights project
 * metrics. To learn more, read [Flag
 * health](https://launchdarkly.com/docs/home/observability/flag-health).
 */
export class InsightsFlagEventsBeta {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List flag events
   *
   * @remarks
   * Get a list of flag events
   *
   * ### Expanding the flag event collection response
   *
   * LaunchDarkly supports expanding the flag event collection response to include additional
   * fields.
   *
   * To expand the response, append the `expand` query parameter and include the following:
   *
   * * `experiments` includes details on all of the experiments run on each flag
   *
   * For example, use `?expand=experiments` to include the `experiments` field in the response. By
   * default, this field is **not** included in the response.
   *
   * @returns Flag event collection response
   *
   * @throws {@link InsightsFlagEventsBeta.GetFlagEventsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getFlagEvents(
    request: InsightsFlagEventsBeta.GetFlagEventsRequest,
    options?: RequestOptions,
  ): ApiPromise<FlagEventCollectionRep, InsightsFlagEventsBeta.GetFlagEventsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/engineering-insights/flag-events"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "applicationKey", value: request.applicationKey, schema: s.optional(s.string()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "impactSize", value: request.impactSize, schema: s.optional(s.string()) },
          { name: "hasExperiments", value: request.hasExperiments, schema: s.optional(s.boolean()) },
          { name: "global", value: request.global, schema: s.optional(s.string()) },
          { name: "expand", value: request.expand, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "from", value: request.from, schema: s.optional(s.int()) },
          { name: "to", value: request.to, schema: s.optional(s.int()) },
          { name: "after", value: request.after, schema: s.optional(s.string()) },
          { name: "before", value: request.before, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flagEventCollectionRepSchema },
        errorFactory: InsightsFlagEventsBeta.GetFlagEventsError,
      },
      options,
    );
  }
}

export namespace InsightsFlagEventsBeta {
  export type GetFlagEventsRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** Comma separated list of application keys */
    applicationKey?: string;
    /** Filter events by flag key */
    query?: string;
    /**
     * Filter events by impact size. A small impact created a less than 20% change in the proportion
     * of end users receiving one or more flag variations. A medium impact created between a 20%-80%
     * change. A large impact created a more than 80% change. Options: `none`, `small`, `medium`,
     * `large`
     */
    impactSize?: string;
    /**
     * Filter events to those associated with an experiment (`true`) or without an experiment
     * (`false`)
     */
    hasExperiments?: boolean;
    /**
     * Filter to include or exclude global events. Default value is `include`. Options: `include`,
     * `exclude`
     */
    global?: string;
    /** Expand properties in response. Options: `experiments` */
    expand?: string;
    /** The number of deployments to return. Default is 20. Maximum allowed is 100. */
    limit?: number;
    /** Unix timestamp in milliseconds. Default value is 7 days ago. */
    from?: number;
    /** Unix timestamp in milliseconds. Default value is now. */
    to?: number;
    /** Identifier used for pagination */
    after?: string;
    /** Identifier used for pagination */
    before?: string;
  };

  export class GetFlagEventsError extends ApiError {
    declare readonly payload:
      | Declared<"validationFailedErrorRep", ValidationFailedErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFlagEventsError> = [
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
