import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  featureFlagScheduledChangeSchema,
  type FeatureFlagScheduledChange,
} from "../models/feature-flag-scheduled-change.js";
import {
  featureFlagScheduledChangesSchema,
  type FeatureFlagScheduledChanges,
} from "../models/feature-flag-scheduled-changes.js";
import {
  flagScheduledChangesInputSchema,
  type FlagScheduledChangesInput,
} from "../models/flag-scheduled-changes-input.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import {
  invalidRequestErrorRepSchema,
  type InvalidRequestErrorRep,
} from "../models/invalid-request-error-rep.js";
import {
  methodNotAllowedErrorRepSchema,
  type MethodNotAllowedErrorRep,
} from "../models/method-not-allowed-error-rep.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import {
  postFlagScheduledChangesInputSchema,
  type PostFlagScheduledChangesInput,
} from "../models/post-flag-scheduled-changes-input.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import {
  statusConflictErrorRepSchema,
  type StatusConflictErrorRep,
} from "../models/status-conflict-error-rep.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import type { Servers } from "../servers.js";

/**
 * > ### Scheduled flag changes is an Enterprise feature > > Scheduled flag changes is available to
 * customers on an Enterprise plan. To learn more, [read about our
 * pricing](https://launchdarkly.com/pricing/). To upgrade your plan, [contact
 * Sales](https://launchdarkly.com/contact-sales/).
 *
 * You can schedule flag targeting rule changes to take place at a selected time. You may schedule
 * multiple changes for a single flag with each change having a different `ExecutionDate`. To learn
 * more, read [Scheduled flag
 * changes](https://launchdarkly.com/docs/home/releases/scheduled-changes).
 *
 * Several endpoints in the scheduled changes API require an existing scheduled change ID. This ID
 * is returned in the `_id` field from the [Create scheduled changes
 * workflow](https://launchdarkly.com/docs/api/scheduled-changes/post-flag-config-scheduled-changes)
 * response, or in the `_id` field of each element in the `items` array from the [List scheduled
 * changes](https://launchdarkly.com/docs/api/scheduled-changes/get-flag-config-scheduled-changes)
 * response.
 */
export class ScheduledChanges {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete scheduled changes workflow
   *
   * @remarks
   * Delete a scheduled changes workflow.
   *
   * @returns Action succeeded
   *
   * @throws {@link ScheduledChanges.DeleteFlagConfigScheduledChangesError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteFlagConfigScheduledChanges(
    request: ScheduledChanges.DeleteFlagConfigScheduledChangesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ScheduledChanges.DeleteFlagConfigScheduledChangesError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes/{id}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "featureFlagKey", value: request.featureFlagKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ScheduledChanges.DeleteFlagConfigScheduledChangesError,
      },
      options,
    );
  }

  /**
   * Get a scheduled change
   *
   * @remarks
   * Get a scheduled change that will be applied to the feature flag by ID.
   *
   * @returns Scheduled changes response
   *
   * @throws {@link ScheduledChanges.GetFeatureFlagScheduledChangeError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getFeatureFlagScheduledChange(
    request: ScheduledChanges.GetFeatureFlagScheduledChangeRequest,
    options?: RequestOptions,
  ): ApiPromise<FeatureFlagScheduledChange, ScheduledChanges.GetFeatureFlagScheduledChangeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes/{id}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "featureFlagKey", value: request.featureFlagKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: featureFlagScheduledChangeSchema },
        errorFactory: ScheduledChanges.GetFeatureFlagScheduledChangeError,
      },
      options,
    );
  }

  /**
   * List scheduled changes
   *
   * @remarks
   * Get a list of scheduled changes that will be applied to the feature flag.
   *
   * @returns Scheduled changes collection response
   *
   * @throws {@link ScheduledChanges.GetFlagConfigScheduledChangesError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getFlagConfigScheduledChanges(
    request: ScheduledChanges.GetFlagConfigScheduledChangesRequest,
    options?: RequestOptions,
  ): ApiPromise<FeatureFlagScheduledChanges, ScheduledChanges.GetFlagConfigScheduledChangesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "featureFlagKey", value: request.featureFlagKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: featureFlagScheduledChangesSchema },
        errorFactory: ScheduledChanges.GetFlagConfigScheduledChangesError,
      },
      options,
    );
  }

  /**
   * Update scheduled changes workflow
   *
   * @remarks
   *
   * Update a scheduled change, overriding existing instructions with the new ones. Updating a
   * scheduled change uses the semantic patch format.
   *
   * To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to
   * your `Content-Type` header. To learn more, read [Updates using semantic
   * patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).
   *
   * ### Instructions
   *
   * Semantic patch requests support the following `kind` instructions for updating scheduled
   * changes.
   *
   * <details> <summary>Click to expand instructions for <strong>updating scheduled
   * changes</strong></summary>
   *
   * #### deleteScheduledChange
   *
   * Removes the scheduled change.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{ "kind": "deleteScheduledChange" }]
   * }
   * ```
   *
   * #### replaceScheduledChangesInstructions
   *
   * Removes the existing scheduled changes and replaces them with the new instructions.
   *
   * ##### Parameters
   *
   * - `value`: An array of the new actions to perform when the execution date for these scheduled
   *   changes arrives. Supported scheduled actions are `turnFlagOn` and `turnFlagOff`.
   *
   * Here's an example that replaces the scheduled changes with new instructions to turn flag
   * targeting off:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "replaceScheduledChangesInstructions",
   *       "value": [ {"kind": "turnFlagOff"} ]
   *     }
   *   ]
   * }
   * ```
   *
   * #### updateScheduledChangesExecutionDate
   *
   * Updates the execution date for the scheduled changes.
   *
   * ##### Parameters
   *
   * - `value`: the new execution date, in Unix milliseconds.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "updateScheduledChangesExecutionDate",
   *       "value": 1754092860000
   *     }
   *   ]
   * }
   * ```
   *
   * </details>
   *
   * @returns Scheduled changes response
   *
   * @throws {@link ScheduledChanges.PatchFlagConfigScheduledChangeError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchFlagConfigScheduledChange(
    request: ScheduledChanges.PatchFlagConfigScheduledChangeRequest,
    options?: RequestOptions,
  ): ApiPromise<FeatureFlagScheduledChange, ScheduledChanges.PatchFlagConfigScheduledChangeError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes/{id}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "featureFlagKey", value: request.featureFlagKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [{ name: "ignoreConflicts", value: request.ignoreConflicts, schema: s.optional(s.boolean()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: flagScheduledChangesInputSchema },
      },
      {
        success: { kind: "json", schema: featureFlagScheduledChangeSchema },
        errorFactory: ScheduledChanges.PatchFlagConfigScheduledChangeError,
      },
      options,
    );
  }

  /**
   * Create scheduled changes workflow
   *
   * @remarks
   * Create scheduled changes for a feature flag. The changes you schedule may include any semantic
   * patch instructions available when [updating a feature
   * flag](https://launchdarkly.com/docs/api/feature-flags/patch-feature-flag#using-semantic-patches-on-a-feature-flag).
   * If the `ignoreConflicts` query parameter is false and there are conflicts between these
   * instructions and existing scheduled changes, the request will fail. If the parameter is true
   * and there are conflicts, the request will succeed.
   *
   * @returns Scheduled changes response
   *
   * @throws {@link ScheduledChanges.PostFlagConfigScheduledChangesError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postFlagConfigScheduledChanges(
    request: ScheduledChanges.PostFlagConfigScheduledChangesRequest,
    options?: RequestOptions,
  ): ApiPromise<FeatureFlagScheduledChange, ScheduledChanges.PostFlagConfigScheduledChangesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "featureFlagKey", value: request.featureFlagKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
        ],
        query: [{ name: "ignoreConflicts", value: request.ignoreConflicts, schema: s.optional(s.boolean()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: postFlagScheduledChangesInputSchema },
      },
      {
        success: { kind: "json", schema: featureFlagScheduledChangeSchema },
        errorFactory: ScheduledChanges.PostFlagConfigScheduledChangesError,
      },
      options,
    );
  }
}

export namespace ScheduledChanges {
  export type DeleteFlagConfigScheduledChangesRequest = {
    /** The project key */
    projectKey: string;
    /** The feature flag key */
    featureFlagKey: string;
    /** The environment key */
    environmentKey: string;
    /** The scheduled change id */
    id: string;
  };

  export class DeleteFlagConfigScheduledChangesError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"methodNotAllowedErrorRep", MethodNotAllowedErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteFlagConfigScheduledChangesError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      {
        on: 405,
        kind: "methodNotAllowedErrorRep",
        decode: { kind: "json", schema: methodNotAllowedErrorRepSchema },
      },
      {
        on: 409,
        kind: "statusConflictErrorRep",
        decode: { kind: "json", schema: statusConflictErrorRepSchema },
      },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetFeatureFlagScheduledChangeRequest = {
    /** The project key */
    projectKey: string;
    /** The feature flag key */
    featureFlagKey: string;
    /** The environment key */
    environmentKey: string;
    /** The scheduled change id */
    id: string;
  };

  export class GetFeatureFlagScheduledChangeError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFeatureFlagScheduledChangeError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetFlagConfigScheduledChangesRequest = {
    /** The project key */
    projectKey: string;
    /** The feature flag key */
    featureFlagKey: string;
    /** The environment key */
    environmentKey: string;
  };

  export class GetFlagConfigScheduledChangesError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFlagConfigScheduledChangesError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
    ];
  }

  export type PatchFlagConfigScheduledChangeRequest = {
    /** The project key */
    projectKey: string;
    /** The feature flag key */
    featureFlagKey: string;
    /** The environment key */
    environmentKey: string;
    /** The scheduled change ID */
    id: string;
    /**
     * Whether to succeed (`true`) or fail (`false`) when these new instructions conflict with
     * existing scheduled changes
     */
    ignoreConflicts?: boolean;
    body: FlagScheduledChangesInput;
  };

  export class PatchFlagConfigScheduledChangeError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"methodNotAllowedErrorRep", MethodNotAllowedErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchFlagConfigScheduledChangeError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      {
        on: 405,
        kind: "methodNotAllowedErrorRep",
        decode: { kind: "json", schema: methodNotAllowedErrorRepSchema },
      },
      {
        on: 409,
        kind: "statusConflictErrorRep",
        decode: { kind: "json", schema: statusConflictErrorRepSchema },
      },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PostFlagConfigScheduledChangesRequest = {
    /** The project key */
    projectKey: string;
    /** The feature flag key */
    featureFlagKey: string;
    /** The environment key */
    environmentKey: string;
    /**
     * Whether to succeed (`true`) or fail (`false`) when these instructions conflict with existing
     * scheduled changes
     */
    ignoreConflicts?: boolean;
    body: PostFlagScheduledChangesInput;
  };

  export class PostFlagConfigScheduledChangesError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"methodNotAllowedErrorRep", MethodNotAllowedErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostFlagConfigScheduledChangesError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      {
        on: 405,
        kind: "methodNotAllowedErrorRep",
        decode: { kind: "json", schema: methodNotAllowedErrorRepSchema },
      },
      {
        on: 409,
        kind: "statusConflictErrorRep",
        decode: { kind: "json", schema: statusConflictErrorRepSchema },
      },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }
}
