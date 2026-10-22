import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import { holdoutDetailRepSchema, type HoldoutDetailRep } from "../models/holdout-detail-rep.js";
import { holdoutPatchInputSchema, type HoldoutPatchInput } from "../models/holdout-patch-input.js";
import { holdoutPostRequestSchema, type HoldoutPostRequest } from "../models/holdout-post-request.js";
import { holdoutRepSchema, type HoldoutRep } from "../models/holdout-rep.js";
import {
  holdoutsCollectionRepSchema,
  type HoldoutsCollectionRep,
} from "../models/holdouts-collection-rep.js";
import {
  invalidRequestErrorRepSchema,
  type InvalidRequestErrorRep,
} from "../models/invalid-request-error-rep.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import type { Servers } from "../servers.js";

/**
 * > ### Available for customers using Experimentation > > Holdouts are available to customers using
 * [Experimentation](https://launchdarkly.com/docs/api/experiments).
 *
 * > ### This feature is in beta > > To use this feature, pass in a header including the
 * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
 * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
 * in beta are still undergoing testing and development. They may change without notice, including
 * becoming backwards incompatible.
 *
 * Holdouts let you exclude a percentage of your audience from your Experimentation program. This
 * enables you to see the overall effect of your experiments on your customer base, and helps
 * determine how effective the experiments you're running are.
 *
 * Using the holdouts API, you can create, delete, and manage holdouts. To learn more, read
 * [Holdouts](https://launchdarkly.com/docs/home/holdouts).
 */
export class HoldoutsBeta {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get all holdouts
   *
   * @returns All Holdouts response
   *
   * @throws {@link HoldoutsBeta.GetAllHoldoutsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getAllHoldouts(
    request: HoldoutsBeta.GetAllHoldoutsRequest,
    options?: RequestOptions,
  ): ApiPromise<HoldoutsCollectionRep, HoldoutsBeta.GetAllHoldoutsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
        ],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: holdoutsCollectionRepSchema },
        errorFactory: HoldoutsBeta.GetAllHoldoutsError,
      },
      options,
    );
  }

  /**
   * Get holdout
   *
   * @remarks
   * Get details about a holdout.
   *
   * ### Expanding the holdout response
   *
   * LaunchDarkly supports the following fields for expanding the "Get holdout" response. By
   * default, these fields are **not** included in the response.
   *
   * To expand the response, append the `expand` query parameter and add a comma-separated list with
   * any of the following fields:
   *
   * - `draftIteration` includes the iteration which has not been started yet, if any, for this
   *   holdout.
   * - `previousIterations` includes all iterations prior to the current iteration, for this
   *   holdout. By default only the current iteration is included in the response.
   * - `rel-draftIteration` includes the iteration which has not been started yet, if any, for the
   *   experiments related to this holdout.
   * - `rel-metrics` includes metrics for experiments related to this holdout.
   * - `rel-previousIterations` includes all iterations prior to the current iteration, for the
   *   experiments related to this holdout.
   * - `rel-secondaryMetrics` includes secondary metrics for experiments related to this holdout.
   * - `rel-treatments` includes all treatment and parameter details for experiments related to this
   *   holdout.
   * - `secondaryMetrics` includes secondary metrics for this holdout. By default only the primary
   *   metric is included in the response.
   * - `treatments` includes all treatment and parameter details for this holdout. By default
   *   treatment data is not included in the response.
   *
   * For example, `expand=draftIteration,rel-draftIteration` includes the `draftIteration` and
   * `rel-draftIteration` fields in the response. If fields that you request with the `expand` query
   * parameter are empty, they are not included in the response.
   *
   * @returns HoldoutDetail response with full experiments
   *
   * @throws {@link HoldoutsBeta.GetHoldoutError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getHoldout(
    request: HoldoutsBeta.GetHoldoutRequest,
    options?: RequestOptions,
  ): ApiPromise<HoldoutDetailRep, HoldoutsBeta.GetHoldoutError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts/{holdoutKey}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "holdoutKey", value: request.holdoutKey, schema: s.string() },
        ],
        query: [{ name: "expand", value: request.expand, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: holdoutDetailRepSchema },
        errorFactory: HoldoutsBeta.GetHoldoutError,
      },
      options,
    );
  }

  /**
   * Get Holdout by Id
   *
   * @returns Holdout response
   *
   * @throws {@link HoldoutsBeta.GetHoldoutByIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getHoldoutById(
    request: HoldoutsBeta.GetHoldoutByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<HoldoutRep, HoldoutsBeta.GetHoldoutByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts/id/{holdoutId}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "holdoutId", value: request.holdoutId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: holdoutRepSchema },
        errorFactory: HoldoutsBeta.GetHoldoutByIdError,
      },
      options,
    );
  }

  /**
   * Patch holdout
   *
   * @remarks
   * Updates an existing holdout, and returns the updated holdout. Updating holdouts uses the
   * semantic patch format.
   *
   * To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to
   * your `Content-Type` header. To learn more, read [Updates using semantic
   * patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).
   *
   * ### Instructions
   *
   * Semantic patch requests support the following `kind` instructions for updating holdouts.
   *
   * <details> <summary>Click to expand instructions for <strong>updating
   * holdouts</strong></summary>
   *
   * #### endHoldout
   *
   * Ends a holdout.
   *
   * ##### Parameters
   *
   * None.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "comment": "Optional comment describing why the holdout is ending",
   *   "instructions": [{
   *     "kind": "endHoldout"
   *   }]
   * }
   * ```
   *
   * #### removeExperiment
   *
   * Removes an experiment from a holdout.
   *
   * ##### Parameters
   *
   * - `value`: The key of the experiment to remove
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "comment": "Optional comment describing the change",
   *   "instructions": [{
   *     "kind": "removeExperiment",
   *     "value": "experiment-key"
   *   }]
   * }
   * ```
   *
   * #### updateDescription
   *
   * Updates the description of the holdout.
   *
   * ##### Parameters
   *
   * - `value`: The new description.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "comment": "Optional comment describing the update",
   *   "instructions": [{
   *     "kind": "updateDescription",
   *     "value": "Updated holdout description"
   *   }]
   * }
   * ```
   *
   * #### updateName
   *
   * Updates the name of the holdout.
   *
   * ##### Parameters
   *
   * - `value`: The new name.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "comment": "Optional comment describing the update",
   *   "instructions": [{
   *     "kind": "updateName",
   *     "value": "Updated holdout name"
   *   }]
   * }
   * ```
   *
   * </details>
   *
   * @returns Holdout response
   *
   * @throws {@link HoldoutsBeta.PatchHoldoutError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchHoldout(
    request: HoldoutsBeta.PatchHoldoutRequest,
    options?: RequestOptions,
  ): ApiPromise<HoldoutRep, HoldoutsBeta.PatchHoldoutError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts/{holdoutKey}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "holdoutKey", value: request.holdoutKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: holdoutPatchInputSchema },
      },
      {
        success: { kind: "json", schema: holdoutRepSchema },
        errorFactory: HoldoutsBeta.PatchHoldoutError,
      },
      options,
    );
  }

  /**
   * Create holdout
   *
   * @remarks
   * Create a new holdout in the specified project.
   *
   * @returns Holdout response
   *
   * @throws {@link HoldoutsBeta.PostHoldoutError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postHoldout(
    request: HoldoutsBeta.PostHoldoutRequest,
    options?: RequestOptions,
  ): ApiPromise<HoldoutRep, HoldoutsBeta.PostHoldoutError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: holdoutPostRequestSchema },
      },
      {
        success: { kind: "json", schema: holdoutRepSchema },
        errorFactory: HoldoutsBeta.PostHoldoutError,
      },
      options,
    );
  }
}

export namespace HoldoutsBeta {
  export type GetAllHoldoutsRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The number of holdouts to return in the response. Defaults to 20 */
    limit?: number;
    /**
     * Where to start in the list. Use this with pagination. For example, an `offset` of 10 skips
     * the first ten items and then returns the next items in the list, up to the query `limit`.
     */
    offset?: number;
  };

  export class GetAllHoldoutsError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAllHoldoutsError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetHoldoutRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The holdout experiment key */
    holdoutKey: string;
    /**
     * A comma-separated list of properties that can reveal additional information in the response.
     * Supported fields are explained above. Holdout experiment expansion fields have no prefix.
     * Related experiment expansion fields have `rel-` as a prefix.
     */
    expand?: string;
  };

  export class GetHoldoutError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetHoldoutError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetHoldoutByIdRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The holdout experiment ID */
    holdoutId: string;
  };

  export class GetHoldoutByIdError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetHoldoutByIdError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PatchHoldoutRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The holdout key */
    holdoutKey: string;
    body: HoldoutPatchInput;
  };

  export class PatchHoldoutError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchHoldoutError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PostHoldoutRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    body: HoldoutPostRequest;
  };

  export class PostHoldoutError extends ApiError {
    declare readonly payload: Declared<"invalidRequestErrorRep", InvalidRequestErrorRep> | Undeclared;

    static readonly errors: ErrorDecoders<PostHoldoutError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
    ];
  }
}
