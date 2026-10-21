import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  experimentCollectionRepSchema,
  type ExperimentCollectionRep,
} from "../models/experiment-collection-rep.js";
import { experimentPatchInputSchema, type ExperimentPatchInput } from "../models/experiment-patch-input.js";
import { experimentPostSchema, type ExperimentPost } from "../models/experiment-post.js";
import { experimentSchema, type Experiment } from "../models/experiment.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import {
  invalidRequestErrorRepSchema,
  type InvalidRequestErrorRep,
} from "../models/invalid-request-error-rep.js";
import { iterationInputSchema, type IterationInput } from "../models/iteration-input.js";
import { iterationRepSchema, type IterationRep } from "../models/iteration-rep.js";
import {
  methodNotAllowedErrorRepSchema,
  type MethodNotAllowedErrorRep,
} from "../models/method-not-allowed-error-rep.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import {
  randomizationSettingsPutSchema,
  type RandomizationSettingsPut,
} from "../models/randomization-settings-put.js";
import {
  randomizationSettingsRepSchema,
  type RandomizationSettingsRep,
} from "../models/randomization-settings-rep.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import {
  statusConflictErrorRepSchema,
  type StatusConflictErrorRep,
} from "../models/status-conflict-error-rep.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import type { Servers } from "../servers.js";

/**
 * > ### Available for subscription customers > > Experimentation is available to all customers on a
 * Developer, Foundation, or Enterprise subscription. If you're on an older Pro or Enterprise plan,
 * Experimentation is available as an add-on. To learn more, [read about our
 * pricing](https://launchdarkly.com/pricing/). To change your plan, [contact
 * Sales](https://launchdarkly.com/contact-sales/).
 *
 *
 * > ### This feature is in beta > > To use this feature, pass in a header including the
 * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
 * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
 * in beta are still undergoing testing and development. They may change without notice, including
 * becoming backwards incompatible.
 *
 * Experimentation lets you validate the impact of features you roll out to your app or
 * infrastructure. You can measure things like page views, clicks, load time, infrastructure costs,
 * and more. By connecting metrics you create to flags in your LaunchDarkly environment, you can
 * measure the changes in your customers' behavior based on what flags they evaluate. You can run
 * experiments with any type of flag, including boolean, string, number, and JSON flags. To learn
 * more, read [Experimentation](https://launchdarkly.com/docs/home/experimentation).
 *
 * You can manage experiments by using the dedicated experiment endpoints described below.
 *
 * Several of the endpoints require a treatment ID or a flag rule ID. Treatment IDs are returned as
 * part of the expanded [Get
 * experiment](https://launchdarkly.com/docs/api/experiments/get-experiment#expanding-the-experiment-response)
 * response. Winning treatment IDs are also returned as part of the [Get
 * experiment](https://launchdarkly.com/docs/api/experiments/get-experiment) response. They are the
 * `winningTreatmentId` in the `currentIteration`, the `winningTreatmentId` in the `draftIteration`,
 * and the `winningTreatmentId` in each element of the `previousIterations` array. In the flags
 * object, the rule ID is the ID of the variation or rollout of the flag. Each flag variation ID is
 * returned as part of the [Get feature
 * flag](https://launchdarkly.com/docs/api/feature-flags/get-feature-flag) response. It is the `_id`
 * field in each element of the `variations` array.
 */
export class Experiments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create experiment
   *
   * @remarks
   * Create an experiment.
   *
   * To run this experiment, you'll need to [create an
   * iteration](https://launchdarkly.com/docs/api/experiments/create-iteration) and then [update the
   * experiment](https://launchdarkly.com/docs/api/experiments/patch-experiment) with the
   * `startIteration` instruction.
   *
   * To learn more, read [Creating
   * experiments](https://launchdarkly.com/docs/home/experimentation/create).
   *
   * @returns Experiment response
   *
   * @throws {@link Experiments.CreateExperimentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createExperiment(
    request: Experiments.CreateExperimentRequest,
    options?: RequestOptions,
  ): ApiPromise<Experiment, Experiments.CreateExperimentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/environments/{environmentKey}/experiments",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: experimentPostSchema },
      },
      {
        success: { kind: "json", schema: experimentSchema },
        errorFactory: Experiments.CreateExperimentError,
      },
      options,
    );
  }

  /**
   * Create iteration
   *
   * @remarks
   * Create an experiment iteration.
   *
   * Experiment iterations let you record experiments in individual blocks of time. Initially,
   * iterations are created with a status of `not_started` and appear in the `draftIteration` field
   * of an experiment. To start or stop an iteration, [update the
   * experiment](https://launchdarkly.com/docs/api/experiments/patch-experiment) with the
   * `startIteration` or `stopIteration` instruction.
   *
   * To learn more, read [Start experiment
   * iterations](https://launchdarkly.com/docs/home/experimentation/create#start-an-experiment-iteration).
   *
   * @returns Iteration response
   *
   * @throws {@link Experiments.CreateIterationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createIteration(
    request: Experiments.CreateIterationRequest,
    options?: RequestOptions,
  ): ApiPromise<IterationRep, Experiments.CreateIterationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey}/iterations",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "experimentKey", value: request.experimentKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: iterationInputSchema },
      },
      {
        success: { kind: "json", schema: iterationRepSchema },
        errorFactory: Experiments.CreateIterationError,
      },
      options,
    );
  }

  /**
   * Get experiment
   *
   * @remarks
   * Get details about an experiment.
   *
   * ### Expanding the experiment response
   *
   * LaunchDarkly supports four fields for expanding the "Get experiment" response. By default,
   * these fields are **not** included in the response.
   *
   * To expand the response, append the `expand` query parameter and add a comma-separated list with
   * any of the following fields:
   *
   * - `previousIterations` includes all iterations prior to the current iteration. By default only
   *   the current iteration is included in the response.
   * - `draftIteration` includes the iteration which has not been started yet, if any.
   * - `secondaryMetrics` includes secondary metrics. By default only the primary metric is included
   *   in the response.
   * - `treatments` includes all treatment and parameter details. By default treatment data is not
   *   included in the response.
   *
   * For example, `expand=draftIteration,treatments` includes the `draftIteration` and `treatments`
   * fields in the response. If fields that you request with the `expand` query parameter are empty,
   * they are not included in the response.
   *
   * @returns Experiment response
   *
   * @throws {@link Experiments.GetExperimentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getExperiment(
    request: Experiments.GetExperimentRequest,
    options?: RequestOptions,
  ): ApiPromise<Experiment, Experiments.GetExperimentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "experimentKey", value: request.experimentKey, schema: s.string() },
        ],
        query: [{ name: "expand", value: request.expand, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: experimentSchema },
        errorFactory: Experiments.GetExperimentError,
      },
      options,
    );
  }

  /**
   * Get experimentation settings
   *
   * @remarks
   * Get current experimentation settings for the given project
   *
   * @returns Experimentation settings response
   *
   * @throws {@link Experiments.GetExperimentationSettingsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getExperimentationSettings(
    request: Experiments.GetExperimentationSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<RandomizationSettingsRep, Experiments.GetExperimentationSettingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/experimentation-settings"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: randomizationSettingsRepSchema },
        errorFactory: Experiments.GetExperimentationSettingsError,
      },
      options,
    );
  }

  /**
   * Get experiments
   *
   * @remarks
   * Get details about all experiments in an environment.
   *
   * ### Filtering experiments
   *
   * LaunchDarkly supports the `filter` query param for filtering, with the following fields:
   *
   * - `flagKey` filters for only experiments that use the flag with the given key.
   * - `metricKey` filters for only experiments that use the metric with the given key.
   * - `status` filters for only experiments with an iteration with the given status. An iteration
   *   can have the status `not_started`, `running` or `stopped`.
   *
   * For example, `filter=flagKey:my-flag,status:running,metricKey:page-load-ms` filters for
   * experiments for the given flag key and the given metric key which have a currently running
   * iteration.
   *
   * ### Expanding the experiments response
   *
   * LaunchDarkly supports four fields for expanding the "Get experiments" response. By default,
   * these fields are **not** included in the response.
   *
   * To expand the response, append the `expand` query parameter and add a comma-separated list with
   * any of the following fields:
   *
   * - `previousIterations` includes all iterations prior to the current iteration. By default only
   *   the current iteration is included in the response.
   * - `draftIteration` includes the iteration which has not been started yet, if any.
   * - `secondaryMetrics` includes secondary metrics. By default only the primary metric is included
   *   in the response.
   * - `treatments` includes all treatment and parameter details. By default treatment data is not
   *   included in the response.
   *
   * For example, `expand=draftIteration,treatments` includes the `draftIteration` and `treatments`
   * fields in the response. If fields that you request with the `expand` query parameter are empty,
   * they are not included in the response.
   *
   * @returns Experiment collection response
   *
   * @throws {@link Experiments.GetExperimentsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getExperiments(
    request: Experiments.GetExperimentsRequest,
    options?: RequestOptions,
  ): ApiPromise<ExperimentCollectionRep, Experiments.GetExperimentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/environments/{environmentKey}/experiments",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
        ],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "expand", value: request.expand, schema: s.optional(s.string()) },
          { name: "lifecycleState", value: request.lifecycleState, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: experimentCollectionRepSchema },
        errorFactory: Experiments.GetExperimentsError,
      },
      options,
    );
  }

  /**
   * Patch experiment
   *
   * @remarks
   * Update an experiment. Updating an experiment uses the semantic patch format.
   *
   * To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to
   * your `Content-Type` header. To learn more, read [Updates using semantic
   * patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).
   *
   * ### Instructions
   *
   * Semantic patch requests support the following `kind` instructions for updating experiments.
   *
   * #### updateName
   *
   * Updates the experiment name.
   *
   * ##### Parameters
   *
   * - `value`: The new name.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "updateName",
   *     "value": "Example updated experiment name"
   *   }]
   * }
   * ```
   *
   * #### updateDescription
   *
   * Updates the experiment description.
   *
   * ##### Parameters
   *
   * - `value`: The new description.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "updateDescription",
   *     "value": "Example updated description"
   *   }]
   * }
   * ```
   *
   * #### startIteration
   *
   * Starts a new iteration for this experiment. You must [create a new
   * iteration](https://launchdarkly.com/docs/api/experiments/create-iteration) before calling this
   * instruction.
   *
   * An iteration may not be started until it meets the following criteria:
   *
   * * Its associated flag is toggled on and is not archived
   * * Its `randomizationUnit` is set
   * * At least one of its `treatments` has a non-zero `allocationPercent`
   *
   * ##### Parameters
   *
   * - `changeJustification`: The reason for starting a new iteration. Required when you call
   *   `startIteration` on an already running experiment, otherwise optional.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "startIteration",
   *     "changeJustification": "It's time to start a new iteration"
   *   }]
   * }
   * ```
   *
   * #### stopIteration
   *
   * Stops the current iteration for this experiment.
   *
   * ##### Parameters
   *
   * - `winningTreatmentId`: The ID of the winning treatment. Treatment IDs are returned as part of
   *   the [Get experiment](https://launchdarkly.com/docs/api/experiments/get-experiment) response.
   *   They are the `_id` of each element in the `treatments` array.
   * - `winningReason`: The reason for the winner
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "stopIteration",
   *     "winningTreatmentId": "3a548ec2-72ac-4e59-8518-5c24f5609ccf",
   *     "winningReason": "Example reason to stop the iteration"
   *   }]
   * }
   * ```
   *
   * #### archiveExperiment
   *
   * Archives this experiment. Archived experiments are hidden by default in the LaunchDarkly user
   * interface. You cannot start new iterations for archived experiments.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{ "kind": "archiveExperiment" }]
   * }
   * ```
   *
   * #### restoreExperiment
   *
   * Restores an archived experiment. After restoring an experiment, you can start new iterations
   * for it again.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{ "kind": "restoreExperiment" }]
   * }
   * ```
   *
   * @returns Experiment response
   *
   * @throws {@link Experiments.PatchExperimentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchExperiment(
    request: Experiments.PatchExperimentRequest,
    options?: RequestOptions,
  ): ApiPromise<Experiment, Experiments.PatchExperimentError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "experimentKey", value: request.experimentKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: experimentPatchInputSchema },
      },
      {
        success: { kind: "json", schema: experimentSchema },
        errorFactory: Experiments.PatchExperimentError,
      },
      options,
    );
  }

  /**
   * Update experimentation settings
   *
   * @remarks
   * Update experimentation settings for the given project
   *
   * @returns Experimentation settings response
   *
   * @throws {@link Experiments.PutExperimentationSettingsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  putExperimentationSettings(
    request: Experiments.PutExperimentationSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<RandomizationSettingsRep, Experiments.PutExperimentationSettingsError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/experimentation-settings"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: randomizationSettingsPutSchema },
      },
      {
        success: { kind: "json", schema: randomizationSettingsRepSchema },
        errorFactory: Experiments.PutExperimentationSettingsError,
      },
      options,
    );
  }
}

export namespace Experiments {
  export type CreateExperimentRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    body: ExperimentPost;
  };

  export class CreateExperimentError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateExperimentError> = [
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

  export type CreateIterationRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The experiment key */
    experimentKey: string;
    body: IterationInput;
  };

  export class CreateIterationError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateIterationError> = [
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

  export type GetExperimentRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The experiment key */
    experimentKey: string;
    /**
     * A comma-separated list of properties that can reveal additional information in the response.
     * Supported fields are explained above.
     */
    expand?: string;
  };

  export class GetExperimentError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"methodNotAllowedErrorRep", MethodNotAllowedErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetExperimentError> = [
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
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetExperimentationSettingsRequest = {
    /** The project key */
    projectKey: string;
  };

  export class GetExperimentationSettingsError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"methodNotAllowedErrorRep", MethodNotAllowedErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetExperimentationSettingsError> = [
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
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetExperimentsRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The maximum number of experiments to return. Defaults to 20. */
    limit?: number;
    /**
     * Where to start in the list. Use this with pagination. For example, an offset of 10 skips the
     * first ten items and then returns the next items in the list, up to the query `limit`.
     */
    offset?: number;
    /**
     * A comma-separated list of filters. Each filter is of the form `field:value`. Supported fields
     * are explained above.
     */
    filter?: string;
    /**
     * A comma-separated list of properties that can reveal additional information in the response.
     * Supported fields are explained above.
     */
    expand?: string;
    /**
     * A comma-separated list of experiment archived states. Supports `archived`, `active`, or both.
     * Defaults to `active` experiments.
     */
    lifecycleState?: string;
  };

  export class GetExperimentsError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"methodNotAllowedErrorRep", MethodNotAllowedErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetExperimentsError> = [
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
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PatchExperimentRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The experiment key */
    experimentKey: string;
    body: ExperimentPatchInput;
  };

  export class PatchExperimentError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchExperimentError> = [
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

  export type PutExperimentationSettingsRequest = {
    /** The project key */
    projectKey: string;
    body: RandomizationSettingsPut;
  };

  export class PutExperimentationSettingsError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"methodNotAllowedErrorRep", MethodNotAllowedErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PutExperimentationSettingsError> = [
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
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }
}
