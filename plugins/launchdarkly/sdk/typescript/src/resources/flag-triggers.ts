import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { flagTriggerInputSchema, type FlagTriggerInput } from "../models/flag-trigger-input.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import {
  invalidRequestErrorRepSchema,
  type InvalidRequestErrorRep,
} from "../models/invalid-request-error-rep.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import {
  statusConflictErrorRepSchema,
  type StatusConflictErrorRep,
} from "../models/status-conflict-error-rep.js";
import { triggerPostSchema, type TriggerPost } from "../models/trigger-post.js";
import {
  triggerWorkflowCollectionRepSchema,
  type TriggerWorkflowCollectionRep,
} from "../models/trigger-workflow-collection-rep.js";
import { triggerWorkflowRepSchema, type TriggerWorkflowRep } from "../models/trigger-workflow-rep.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import type { Servers } from "../servers.js";

/**
 * > ### Flag triggers is an Enterprise feature > > Flag triggers is available to customers on an
 * Enterprise plan. To learn more, [read about our pricing](https://launchdarkly.com/pricing/). To
 * upgrade your plan, [contact Sales](https://launchdarkly.com/contact-sales/).
 *
 * Flag triggers let you initiate flag changes remotely using a unique webhook URL. For example, you
 * can integrate triggers with your existing tools to enable or disable flags when you hit specific
 * operational health thresholds or receive certain alerts. To learn more, read [Flag
 * triggers](https://launchdarkly.com/docs/home/releases/triggers).
 *
 * With the flag triggers API, you can create, delete, and manage triggers.
 *
 * Several of the endpoints in the flag triggers API require a flag trigger ID. The flag trigger ID
 * is returned as part of the [Create flag
 * trigger](https://launchdarkly.com/docs/api/flag-triggers/create-trigger-workflow) and [List flag
 * triggers](https://launchdarkly.com/docs/api/flag-triggers/get-trigger-workflows) responses. It is
 * the `_id` field, or the `_id` field of each element in the `items` array.
 */
export class FlagTriggers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create flag trigger
   *
   * @remarks
   * Create a new flag trigger.
   *
   * @returns Flag trigger response
   *
   * @throws {@link FlagTriggers.CreateTriggerWorkflowError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createTriggerWorkflow(
    request: FlagTriggers.CreateTriggerWorkflowRequest,
    options?: RequestOptions,
  ): ApiPromise<TriggerWorkflowRep, FlagTriggers.CreateTriggerWorkflowError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "featureFlagKey", value: request.featureFlagKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: triggerPostSchema },
      },
      {
        success: { kind: "json", schema: triggerWorkflowRepSchema },
        errorFactory: FlagTriggers.CreateTriggerWorkflowError,
      },
      options,
    );
  }

  /**
   * Delete flag trigger
   *
   * @remarks
   * Delete a flag trigger by ID.
   *
   * @returns Action succeeded
   *
   * @throws {@link FlagTriggers.DeleteTriggerWorkflowError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteTriggerWorkflow(
    request: FlagTriggers.DeleteTriggerWorkflowRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, FlagTriggers.DeleteTriggerWorkflowError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}/{id}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "featureFlagKey", value: request.featureFlagKey, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FlagTriggers.DeleteTriggerWorkflowError,
      },
      options,
    );
  }

  /**
   * Get flag trigger by ID
   *
   * @remarks
   * Get a flag trigger by ID.
   *
   * @returns Flag trigger response
   *
   * @throws {@link FlagTriggers.GetTriggerWorkflowByIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getTriggerWorkflowById(
    request: FlagTriggers.GetTriggerWorkflowByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<TriggerWorkflowRep, FlagTriggers.GetTriggerWorkflowByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}/{id}",
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
        success: { kind: "json", schema: triggerWorkflowRepSchema },
        errorFactory: FlagTriggers.GetTriggerWorkflowByIdError,
      },
      options,
    );
  }

  /**
   * List flag triggers
   *
   * @remarks
   * Get a list of all flag triggers.
   *
   * @returns Flag trigger collection response
   *
   * @throws {@link FlagTriggers.GetTriggerWorkflowsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getTriggerWorkflows(
    request: FlagTriggers.GetTriggerWorkflowsRequest,
    options?: RequestOptions,
  ): ApiPromise<TriggerWorkflowCollectionRep, FlagTriggers.GetTriggerWorkflowsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "featureFlagKey", value: request.featureFlagKey, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: triggerWorkflowCollectionRepSchema },
        errorFactory: FlagTriggers.GetTriggerWorkflowsError,
      },
      options,
    );
  }

  /**
   * Update flag trigger
   *
   * @remarks
   * Update a flag trigger. Updating a flag trigger uses the semantic patch format.
   *
   * To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to
   * your `Content-Type` header. To learn more, read [Updates using semantic
   * patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).
   *
   * ### Instructions
   *
   * Semantic patch requests support the following `kind` instructions for updating flag triggers.
   *
   * <details> <summary>Click to expand instructions for <strong>updating flag
   * triggers</strong></summary>
   *
   * #### replaceTriggerActionInstructions
   *
   * Removes the existing trigger action and replaces it with the new instructions.
   *
   * ##### Parameters
   *
   * - `value`: An array of the new `kind`s of actions to perform when triggering. Supported flag
   *   actions are `turnFlagOn` and `turnFlagOff`.
   *
   * Here's an example that replaces the existing action with new instructions to turn flag
   * targeting off:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "replaceTriggerActionInstructions",
   *       "value": [ {"kind": "turnFlagOff"} ]
   *     }
   *   ]
   * }
   * ```
   *
   * #### cycleTriggerUrl
   *
   * Generates a new URL for this trigger. You must update any clients using the trigger to use this
   * new URL.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{ "kind": "cycleTriggerUrl" }]
   * }
   * ```
   *
   * #### disableTrigger
   *
   * Disables the trigger. This saves the trigger configuration, but the trigger stops running. To
   * re-enable, use `enableTrigger`.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{ "kind": "disableTrigger" }]
   * }
   * ```
   *
   * #### enableTrigger
   *
   * Enables the trigger. If you previously disabled the trigger, it begins running again.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{ "kind": "enableTrigger" }]
   * }
   * ```
   *
   * </details>
   *
   * @returns Flag trigger response
   *
   * @throws {@link FlagTriggers.PatchTriggerWorkflowError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchTriggerWorkflow(
    request: FlagTriggers.PatchTriggerWorkflowRequest,
    options?: RequestOptions,
  ): ApiPromise<TriggerWorkflowRep, FlagTriggers.PatchTriggerWorkflowError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}/{id}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "featureFlagKey", value: request.featureFlagKey, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: flagTriggerInputSchema },
      },
      {
        success: { kind: "json", schema: triggerWorkflowRepSchema },
        errorFactory: FlagTriggers.PatchTriggerWorkflowError,
      },
      options,
    );
  }
}

export namespace FlagTriggers {
  export type CreateTriggerWorkflowRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The feature flag key */
    featureFlagKey: string;
    body: TriggerPost;
  };

  export class CreateTriggerWorkflowError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateTriggerWorkflowError> = [
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

  export type DeleteTriggerWorkflowRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The feature flag key */
    featureFlagKey: string;
    /** The flag trigger ID */
    id: string;
  };

  export class DeleteTriggerWorkflowError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteTriggerWorkflowError> = [
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

  export type GetTriggerWorkflowByIdRequest = {
    /** The project key */
    projectKey: string;
    /** The feature flag key */
    featureFlagKey: string;
    /** The environment key */
    environmentKey: string;
    /** The flag trigger ID */
    id: string;
  };

  export class GetTriggerWorkflowByIdError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTriggerWorkflowByIdError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetTriggerWorkflowsRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The feature flag key */
    featureFlagKey: string;
  };

  export class GetTriggerWorkflowsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTriggerWorkflowsError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PatchTriggerWorkflowRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The feature flag key */
    featureFlagKey: string;
    /** The flag trigger ID */
    id: string;
    body: FlagTriggerInput;
  };

  export class PatchTriggerWorkflowError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchTriggerWorkflowError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      {
        on: 409,
        kind: "statusConflictErrorRep",
        decode: { kind: "json", schema: statusConflictErrorRepSchema },
      },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }
}
