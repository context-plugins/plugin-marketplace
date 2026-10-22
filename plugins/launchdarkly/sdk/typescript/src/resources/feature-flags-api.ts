import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  expiringTargetGetResponseSchema,
  type ExpiringTargetGetResponse,
} from "../models/expiring-target-get-response.js";
import {
  expiringTargetPatchResponseSchema,
  type ExpiringTargetPatchResponse,
} from "../models/expiring-target-patch-response.js";
import {
  expiringUserTargetGetResponseSchema,
  type ExpiringUserTargetGetResponse,
} from "../models/expiring-user-target-get-response.js";
import {
  expiringUserTargetPatchResponseSchema,
  type ExpiringUserTargetPatchResponse,
} from "../models/expiring-user-target-patch-response.js";
import { featureFlagBodySchema, type FeatureFlagBody } from "../models/feature-flag-body.js";
import {
  featureFlagStatusAcrossEnvironmentsSchema,
  type FeatureFlagStatusAcrossEnvironments,
} from "../models/feature-flag-status-across-environments.js";
import { featureFlagStatusesSchema, type FeatureFlagStatuses } from "../models/feature-flag-statuses.js";
import { featureFlagSchema, type FeatureFlag } from "../models/feature-flag.js";
import { featureFlagsSchema, type FeatureFlags } from "../models/feature-flags.js";
import { flagCopyConfigPostSchema, type FlagCopyConfigPost } from "../models/flag-copy-config-post.js";
import { flagSempatchSchema, type FlagSempatch } from "../models/flag-sempatch.js";
import { flagStatusRepSchema, type FlagStatusRep } from "../models/flag-status-rep.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import {
  invalidRequestErrorRepSchema,
  type InvalidRequestErrorRep,
} from "../models/invalid-request-error-rep.js";
import {
  methodNotAllowedErrorRepSchema,
  type MethodNotAllowedErrorRep,
} from "../models/method-not-allowed-error-rep.js";
import {
  migrationSafetyIssueRepSchema,
  type MigrationSafetyIssueRep,
} from "../models/migration-safety-issue-rep.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import { patchFlagsRequestSchema, type PatchFlagsRequest } from "../models/patch-flags-request.js";
import { patchWithCommentSchema, type PatchWithComment } from "../models/patch-with-comment.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import {
  statusConflictErrorRepSchema,
  type StatusConflictErrorRep,
} from "../models/status-conflict-error-rep.js";
import {
  statusServiceUnavailableSchema,
  type StatusServiceUnavailable,
} from "../models/status-service-unavailable.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import type { Servers } from "../servers.js";

/**
 * The feature flags API allows you to list, create, and modify feature flags and their targeting.
 * For example, you can control percentage rollouts, target specific contexts, or even toggle off a
 * feature flag programmatically.
 *
 * ## Sample feature flag representation
 *
 * Every feature flag has a set of top-level attributes, as well as an `environments` map containing
 * the flag rollout and targeting rules specific to each environment. To learn more, read [Using
 * feature flags](https://launchdarkly.com/docs/home/flags/create).
 *
 * <details> <summary>Click to expand an example of a <strong>complete feature flag
 * representation</strong></summary>
 *
 * ```json
 * {
 *   "name": "Alternate product page",
 *   "kind": "boolean",
 *   "description": "This is a description",
 *   "key": "alternate.page",
 *   "_version": 2,
 *   "creationDate": 1418684722483,
 *   "includeInSnippet": true,
 *   "clientSideAvailability" {
 *     "usingMobileKey": false,
 *     "usingEnvironmentId": true,
 *   },
 *   "variations": [
 *     {
 *       "value": true,
 *       "name": "true",
 *       "_id": "86208e6e-468f-4425-b334-7f318397f95c"
 *     },
 *     {
 *       "value": false,
 *       "name": "false",
 *       "_id": "7b32de80-f346-4276-bb77-28dfa7ddc2d8"
 *     }
 *   ],
 *   "variationJsonSchema": null,
 *   "defaults": {
 *     "onVariation": 0,
 *     "offVariation": 1
 *   },
 *   "temporary": false,
 *   "tags": ["ops", "experiments"],
 *   "_links": {
 *     "parent": {
 *       "href": "/api/v2/flags/default",
 *       "type": "application/json"
 *     },
 *     "self": {
 *       "href": "/api/v2/flags/default/alternate.page",
 *       "type": "application/json"
 *     }
 *   },
 *   "maintainerId": "548f6741c1efad40031b18ae",
 *   "_maintainer": {
 *     "_links": {
 *       "self": {
 *         "href": "/api/v2/members/548f6741c1efad40031b18ae",
 *         "type": "application/json"
 *       }
 *     },
 *     "_id": "548f6741c1efad40031b18ae",
 *     "firstName": "Ariel",
 *     "lastName": "Flores",
 *     "role": "reader",
 *     "email": "ariel@acme.com"
 *   },
 *   "goalIds": [],
 *   "experiments": {
 *     "baselineIdx": 0,
 *     "items": []
 *   },
 *   "environments": {
 *     "production": {
 *       "on": true,
 *       "archived": false,
 *       "salt": "YWx0ZXJuYXRlLnBhZ2U=",
 *       "sel": "45501b9314dc4641841af774cb038b96",
 *       "lastModified": 1469326565348,
 *       "version": 61,
 *       "targets": [{
 *           "values": ["user-key-123abc"],
 *           "variation": 0,
 *           "contextKind": "user"
 *       }],
 *       "contextTargets": [{
 *         "values": [],
 *         "variation": 0,
 *         "contextKind": "user"
 *         }, {
 *         "values": ["org-key-123abc"],
 *         "variation": 0,
 *         "contextKind": "organization"
 *       }],
 *       "rules": [
 *         {
 *           "_id": "f3ea72d0-e473-4e8b-b942-565b790ffe18",
 *           "variation": 0,
 *           "clauses": [
 *             {
 *               "_id": "6b81968e-3744-4416-9d64-74547eb0a7d1",
 *               "attribute": "groups",
 *               "op": "in",
 *               "values": ["Top Customers"],
 *               "contextKind": "user",
 *               "negate": false
 *             },
 *             {
 *               "_id": "9d60165d-82b8-4b9a-9136-f23407ba1718",
 *               "attribute": "email",
 *               "op": "endsWith",
 *               "values": ["gmail.com"],
 *               "contextKind": "user",
 *               "negate": false
 *             }
 *           ],
 *           "trackEvents": false,
 *           "ref": "73257308-472b-4d9c-a556-10aa7adbf857"
 *         }
 *       ],
 *       "fallthrough": {
 *         "rollout": {
 *           "variations": [
 *             {
 *               "variation": 0,
 *               "weight": 60000
 *             },
 *             {
 *               "variation": 1,
 *               "weight": 40000
 *             }
 *           ],
 *           "contextKind": "user"
 *         }
 *       },
 *       "offVariation": 1,
 *       "prerequisites": [],
 *       "_site": {
 *         "href": "/default/production/features/alternate.page",
 *         "type": "text/html"
 *       },
 *       "_environmentName": "Production",
 *       "trackEvents": false,
 *       "trackEventsFallthrough": false,
 *       "_summary": {
 *         "variations": {
 *           "0": {
 *             "rules": 1,
 *             "nullRules": 0,
 *             "targets": 2,
 *             "rollout": 60000
 *           },
 *           "1": {
 *             "rules": 0,
 *             "nullRules": 0,
 *             "targets": 0,
 *             "isOff": true,
 *             "rollout": 40000
 *           }
 *         },
 *         "prerequisites": 0
 *       }
 *     }
 * }
 * ```
 *
 * </details>
 *
 * ## Anatomy of a feature flag
 *
 * This section describes the sample feature flag representation in more detail.
 *
 * ### Top-level attributes
 *
 * Most of the top-level attributes have a straightforward interpretation, for example `name` and
 * `description`.
 *
 * The `variations` array represents the different variation values that a feature flag has. For a
 * boolean flag, there are two variations: `true` and `false`. Multivariate flags have more
 * variation values, and those values could be any JSON type: numbers, strings, objects, or arrays.
 * In targeting rules, the variations are referred to by their index into this array.
 *
 * To update these attributes, read [Update feature flag](#operation/patchFeatureFlag), especially
 * the instructions for **updating flag settings**.
 *
 * ### Per-environment configurations
 *
 * Each entry in the `environments` map contains a JSON object that represents the
 * environment-specific flag configuration data available in the flag's targeting page. To learn
 * more, read [Targeting with flags](https://launchdarkly.com/docs/home/flags/target).
 *
 * To update per-environment information for a flag, read [Update feature
 * flag](#operation/patchFeatureFlag), especially the instructions for **turning flags on and off**
 * and **working with targeting and variations**.
 *
 * ### Individual context targets
 *
 * The `targets` and `contextTargets` arrays in the per-environment configuration data correspond to
 * the individual context targeting on the flag's targeting page. To learn more, read [Individual
 * targeting](https://launchdarkly.com/docs/home/flags/individual-targeting).
 *
 * Each object in the `targets` and `contextTargets` arrays represents a list of context keys
 * assigned to a particular variation. The `targets` array includes contexts with `contextKind` of
 * "user" and the `contextTargets` array includes contexts with context kinds other than "user."
 *
 * For example:
 *
 * ```json
 * {
 *   ...
 *   "environments" : {
 *     "production" : {
 *       ...
 *       "targets": [
 *         {
 *           "values": ["user-key-123abc"],
 *           "variation": 0,
 *           "contextKind": "user"
 *         }
 *       ],
 *       "contextTargets": [
 *         {
 *           "values": ["org-key-123abc"],
 *           "variation": 0,
 *           "contextKind": "organization"
 *         }
 *       ]
 *     }
 *   }
 * }
 * ```
 *
 * The `targets` array means that any user context instance with the key `user-key-123abc` receives
 * the first variation listed in the `variations` array. The `contextTargets` array means that any
 * organization context with the key `org-key-123abc` receives the first variation listed in the
 * `variations` array. Recall that the variations are stored at the top level of the flag JSON in an
 * array, and the per-environment configuration rules point to indexes into this array. If this is a
 * boolean flag, both contexts are receiving the `true` variation.
 *
 * ### Targeting rules
 *
 * The `rules` array corresponds to the rules section of the flag's targeting page. This is where
 * you can express complex rules on attributes with conditions and operators. For example, you might
 * create a rule that specifies "roll out the `true` variation to 80% of contexts whose email
 * address ends with `gmail.com`". To learn more, read [Targeting
 * rules](https://launchdarkly.com/docs/home/flags/targeting-rules).
 *
 * ### The fallthrough rule
 *
 * The `fallthrough` object is a special rule that contains no conditions. It is the rollout
 * strategy that is applied when none of the individual or custom targeting rules match. In the
 * LaunchDarkly UI, it is called the "Default rule."
 *
 * ### The off variation
 *
 * The off variation represents the variation to serve if the feature flag targeting is turned off,
 * meaning the `on` attribute is `false`. For boolean flags, this is usually `false`. For
 * multivariate flags, set the off variation to whatever variation represents the control or
 * baseline behavior for your application. If you don't set the off variation, LaunchDarkly will
 * serve the fallback value defined in your code.
 *
 * ### Percentage rollouts
 *
 * When you work with targeting rules and with the default rule, you can specify either a single
 * variation or a percentage rollout. The `weight` attribute defines the percentage rollout for each
 * variation. Weights range from 0 (a 0% rollout) to 100000 (a 100% rollout). The weights are scaled
 * by a factor of 1000 so that fractions of a percent can be represented without using
 * floating-point. For example, a weight of `60000` means that 60% of contexts will receive that
 * variation. The sum of weights across all variations should be 100%.
 */
export class FeatureFlagsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Copy feature flag
   *
   * @remarks
   *
   * > ### Copying flag settings is an Enterprise feature > > Copying flag settings is available to
   * customers on an Enterprise plan. To learn more, [read about our
   * pricing](https://launchdarkly.com/pricing/). To upgrade your plan, [contact
   * Sales](https://launchdarkly.com/contact-sales/).
   *
   * Copy flag settings from a source environment to a target environment.
   *
   * By default, this operation copies the entire flag configuration. You can use the
   * `includedActions` or `excludedActions` to specify that only part of the flag configuration is
   * copied.
   *
   * If you provide the optional `currentVersion` of a flag, this operation tests to ensure that the
   * current flag version in the environment matches the version you've specified. The operation
   * rejects attempts to copy flag settings if the environment's current version of the flag does
   * not match the version you've specified. You can use this to enforce optimistic locking on copy
   * attempts.
   *
   * @returns Global flag response
   *
   * @throws {@link FeatureFlagsApi.CopyFeatureFlagError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  copyFeatureFlag(
    request: FeatureFlagsApi.CopyFeatureFlagRequest,
    options?: RequestOptions,
  ): ApiPromise<FeatureFlag, FeatureFlagsApi.CopyFeatureFlagError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/flags/{projectKey}/{featureFlagKey}/copy"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "featureFlagKey", value: request.featureFlagKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: flagCopyConfigPostSchema },
      },
      {
        success: { kind: "json", schema: featureFlagSchema },
        errorFactory: FeatureFlagsApi.CopyFeatureFlagError,
      },
      options,
    );
  }

  /**
   * Delete feature flag
   *
   * @remarks
   * Delete a feature flag in all environments. Use with caution: only delete feature flags your
   * application no longer uses.
   *
   * @returns Action succeeded
   *
   * @throws {@link FeatureFlagsApi.DeleteFeatureFlagError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteFeatureFlag(
    request: FeatureFlagsApi.DeleteFeatureFlagRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, FeatureFlagsApi.DeleteFeatureFlagError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v2/flags/{projectKey}/{featureFlagKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "featureFlagKey", value: request.featureFlagKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FeatureFlagsApi.DeleteFeatureFlagError,
      },
      options,
    );
  }

  /**
   * Get expiring context targets for feature flag
   *
   * @remarks
   * Get a list of context targets on a feature flag that are scheduled for removal.
   *
   * @returns Expiring target response
   *
   * @throws {@link FeatureFlagsApi.GetExpiringContextTargetsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getExpiringContextTargets(
    request: FeatureFlagsApi.GetExpiringContextTargetsRequest,
    options?: RequestOptions,
  ): ApiPromise<ExpiringTargetGetResponse, FeatureFlagsApi.GetExpiringContextTargetsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/flags/{projectKey}/{featureFlagKey}/expiring-targets/{environmentKey}",
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
        success: { kind: "json", schema: expiringTargetGetResponseSchema },
        errorFactory: FeatureFlagsApi.GetExpiringContextTargetsError,
      },
      options,
    );
  }

  /**
   * Get expiring user targets for feature flag
   *
   * @remarks
   *
   * > ### Contexts are now available > > After you have upgraded your LaunchDarkly SDK to use
   * contexts instead of users, you should use [Get expiring context targets for feature
   * flag](https://launchdarkly.com/docs/api/feature-flags/get-expiring-context-targets) instead of
   * this endpoint. To learn more, read
   * [Contexts](https://launchdarkly.com/docs/home/observability/contexts).
   *
   * Get a list of user targets on a feature flag that are scheduled for removal.
   *
   * @returns Expiring user target response
   *
   * @throws {@link FeatureFlagsApi.GetExpiringUserTargetsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getExpiringUserTargets(
    request: FeatureFlagsApi.GetExpiringUserTargetsRequest,
    options?: RequestOptions,
  ): ApiPromise<ExpiringUserTargetGetResponse, FeatureFlagsApi.GetExpiringUserTargetsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/flags/{projectKey}/{featureFlagKey}/expiring-user-targets/{environmentKey}",
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
        success: { kind: "json", schema: expiringUserTargetGetResponseSchema },
        errorFactory: FeatureFlagsApi.GetExpiringUserTargetsError,
      },
      options,
    );
  }

  /**
   * Get feature flag
   *
   * @remarks
   * Get a single feature flag by key. By default, this returns the configurations for all
   * environments. You can filter environments with the `env` query parameter. For example, setting
   * `env=production` restricts the returned configurations to just the `production` environment.
   *
   * > #### Recommended use > > This endpoint can return a large amount of information. Specifying
   * one or multiple environments with the `env` parameter can decrease response time and overall
   * payload size. We recommend using this parameter to return only the environments relevant to
   * your query.
   *
   * ### Expanding response
   *
   * LaunchDarkly supports the `expand` query param to include additional fields in the response,
   * with the following fields:
   *
   * - `evaluation` includes evaluation information within returned environments, including which
   *   context kinds the flag has been evaluated for in the past 30 days
   * - `migrationSettings` includes migration settings information within the flag and within
   *   returned environments. These settings are only included for migration flags, that is, where
   *   `purpose` is `migration`.
   *
   * For example, `expand=evaluation` includes the `evaluation` field in the response.
   *
   * @returns Global flag response
   *
   * @throws {@link FeatureFlagsApi.GetFeatureFlagError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getFeatureFlag(
    request: FeatureFlagsApi.GetFeatureFlagRequest,
    options?: RequestOptions,
  ): ApiPromise<FeatureFlag, FeatureFlagsApi.GetFeatureFlagError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/flags/{projectKey}/{featureFlagKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "featureFlagKey", value: request.featureFlagKey, schema: s.string() },
        ],
        query: [
          { name: "env", value: request.env, schema: s.optional(s.string()) },
          { name: "expand", value: request.expand, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: featureFlagSchema },
        errorFactory: FeatureFlagsApi.GetFeatureFlagError,
      },
      options,
    );
  }

  /**
   * Get feature flag status
   *
   * @remarks
   * Get the status for a particular feature flag.
   *
   * @returns Flag status response
   *
   * @throws {@link FeatureFlagsApi.GetFeatureFlagStatusError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getFeatureFlagStatus(
    request: FeatureFlagsApi.GetFeatureFlagStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<FlagStatusRep, FeatureFlagsApi.GetFeatureFlagStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/flag-statuses/{projectKey}/{environmentKey}/{featureFlagKey}",
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
        success: { kind: "json", schema: flagStatusRepSchema },
        errorFactory: FeatureFlagsApi.GetFeatureFlagStatusError,
      },
      options,
    );
  }

  /**
   * Get flag status across environments
   *
   * @remarks
   * Get the status for a particular feature flag across environments.
   *
   * @returns Flag status across environments response
   *
   * @throws {@link FeatureFlagsApi.GetFeatureFlagStatusAcrossEnvironmentsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getFeatureFlagStatusAcrossEnvironments(
    request: FeatureFlagsApi.GetFeatureFlagStatusAcrossEnvironmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    FeatureFlagStatusAcrossEnvironments,
    FeatureFlagsApi.GetFeatureFlagStatusAcrossEnvironmentsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/flag-status/{projectKey}/{featureFlagKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "featureFlagKey", value: request.featureFlagKey, schema: s.string() },
        ],
        query: [{ name: "env", value: request.env, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: featureFlagStatusAcrossEnvironmentsSchema },
        errorFactory: FeatureFlagsApi.GetFeatureFlagStatusAcrossEnvironmentsError,
      },
      options,
    );
  }

  /**
   * List feature flag statuses
   *
   * @remarks
   * Get a list of statuses for all feature flags. The status includes the last time the feature
   * flag was requested, as well as a state, which is one of the following:
   *
   * - `new`: You created the flag fewer than seven days ago and it has never been requested.
   * - `active`: LaunchDarkly is receiving requests for this flag, but there are either multiple
   *   variations configured, or it is toggled off, or there have been changes to configuration in
   *   the past seven days.
   * - `inactive`: You created the feature flag more than seven days ago, and hasn't been requested
   *   within the past seven days.
   * - `launched`: LaunchDarkly is receiving requests for this flag, it is toggled on, there is only
   *   one variation configured, and there have been no changes to configuration in the past seven
   *   days.
   *
   * To learn more, read [Flag
   * statuses](https://launchdarkly.com/docs/home/observability/flag-status).
   *
   * @returns Flag Statuses collection response
   *
   * @throws {@link FeatureFlagsApi.GetFeatureFlagStatusesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getFeatureFlagStatuses(
    request: FeatureFlagsApi.GetFeatureFlagStatusesRequest,
    options?: RequestOptions,
  ): ApiPromise<FeatureFlagStatuses, FeatureFlagsApi.GetFeatureFlagStatusesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/flag-statuses/{projectKey}/{environmentKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: featureFlagStatusesSchema },
        errorFactory: FeatureFlagsApi.GetFeatureFlagStatusesError,
      },
      options,
    );
  }

  /**
   * List feature flags
   *
   * @remarks
   * Get a list of all feature flags in the given project. You can include information specific to
   * different environments by adding `env` query parameter. For example, setting `env=production`
   * adds configuration details about your production environment to the response. You can also
   * filter feature flags by tag with the `tag` query parameter.
   *
   * > #### Recommended use > > This endpoint can return a large amount of information. We recommend
   * using some or all of these query parameters to decrease response time and overall payload size:
   * `limit`, `env`, `query`, and `filter=creationDate`.
   *
   * ### Filtering flags
   *
   * You can filter on certain fields using the `filter` query parameter. For example, setting
   * `filter=query:dark-mode,tags:beta+test` matches flags with the string `dark-mode` in their key
   * or name, ignoring case, which also have the tags `beta` and `test`.
   *
   * The `filter` query parameter supports the following arguments:
   *
   * | Filter argument       | Description | Example              |
   * |-----------------------|-------------|----------------------|
   * | `applicationEvaluated`  | A string. It filters the list to flags that are evaluated in the application with the given key. | `filter=applicationEvaluated:com.launchdarkly.cafe` |
   * | `archived`              | (deprecated) A boolean value. It filters the list to archived flags. | Use `filter=state:archived` instead |
   * | `contextKindsEvaluated` | A `+`-separated list of context kind keys. It filters the list to flags which have been evaluated in the past 30 days for all of the context kinds in the list. | `filter=contextKindsEvaluated:user+application` |
   * | `codeReferences.max`    | An integer value. Use `0` to return flags that do not have code references. | `filter=codeReferences.max:0` |
   * | `codeReferences.min`    | An integer value. Use `1` to return flags that do have code references. | `filter=codeReferences.min:1` |
   * | `creationDate`          | An object with an optional `before` field whose value is Unix time in milliseconds. It filters the list to flags created before the date. | `filter=creationDate:{"before":1690527600000}` |
   * | `evaluated`             | An object that contains a key of `after` and a value in Unix time in milliseconds. It filters the list to all flags that have been evaluated since the time you specify, in the environment provided. This filter requires the `filterEnv` filter. | `filter=evaluated:{"after":1690527600000},filterEnv:production` |
   * | `filterEnv`             | A valid environment key. You must use this field for filters that are environment-specific. If there are multiple environment-specific filters, you only need to include this field once. | `filter=evaluated:{"after": 1590768455282},filterEnv:production` |
   * | `guardedRollout` | A string, one of `any`, `monitoring`, `regressed`, `rolledBack`, `completed`, `archived`. It filters the list to flags that are part of guarded rollouts. | `filter=guardedRollout:monitoring` |
   * | `hasExperiment`         | A boolean value. It filters the list to flags that are used in an experiment. | `filter=hasExperiment:true` |
   * | `maintainerId`          | A valid member ID. It filters the list to flags that are maintained by this member. | `filter=maintainerId:12ab3c45de678910abc12345` |
   * | `maintainerTeamKey`     | A string. It filters the list to flags that are maintained by the team with this key. | `filter=maintainerTeamKey:example-team-key` |
   * | `query`                 | A string. It filters the list to flags that include the specified string in their key or name. It is not case sensitive. | `filter=query:example` |
   * | `releasePipeline`       | A release pipeline key. It filters the list to flags that are either currently active in the release pipeline or have completed the release pipeline. | `filter=releasePipeline:default-release-pipeline` |
   * | `state`                 | A string, either `live`, `deprecated`, or `archived`. It filters the list to flags in this state. | `filter=state:archived` |
   * | `sdkAvailability`       | A string, one of `client`, `mobile`, `anyClient`, `server`. Using `client` filters the list to flags whose client-side SDK availability is set to use the client-side ID. Using `mobile` filters to flags set to use the mobile key. Using `anyClient` filters to flags set to use either the client-side ID or the mobile key. Using `server` filters to flags set to use neither, that is, to flags only available in server-side SDKs.  | `filter=sdkAvailability:client` |
   * | `tags`                  | A `+`-separated list of tags. It filters the list to flags that have all of the tags in the list. | `filter=tags:beta+test` |
   * | `type`                  | A string, either `temporary` or `permanent`. It filters the list to flags with the specified type. | `filter=type:permanent` |
   *
   * The documented values for the `filter` query are prior to URL encoding. For example, the `+` in
   * `filter=tags:beta+test` must be encoded to `%2B`.
   *
   * By default, this endpoint returns all flags. You can page through the list with the `limit`
   * parameter and by following the `first`, `prev`, `next`, and `last` links in the returned
   * `_links` field. These links will not be present if the pages they refer to don't exist. For
   * example, the `first` and `prev` links will be missing from the response on the first page.
   *
   * ### Sorting flags
   *
   * You can sort flags based on the following fields:
   *
   * - `creationDate` sorts by the creation date of the flag.
   * - `key` sorts by the key of the flag.
   * - `maintainerId` sorts by the flag maintainer.
   * - `name` sorts by flag name.
   * - `tags` sorts by tags.
   * - `targetingModifiedDate` sorts by the date that the flag's targeting rules were last modified
   *   in a given environment. It must be used with `env` parameter and it can not be combined with
   *   any other sort. If multiple `env` values are provided, it will perform sort using the first
   *   one. For example, `sort=-targetingModifiedDate&env=production&env=staging` returns results
   *   sorted by `targetingModifiedDate` for the `production` environment.
   * - `type` sorts by flag type
   *
   * All fields are sorted in ascending order by default. To sort in descending order, prefix the
   * field with a dash ( - ). For example, `sort=-name` sorts the response by flag name in
   * descending order.
   *
   * ### Expanding response
   *
   * LaunchDarkly supports the `expand` query param to include additional fields in the response,
   * with the following fields:
   *
   * - `codeReferences` includes code references for the feature flag
   * - `evaluation` includes evaluation information within returned environments, including which
   *   context kinds the flag has been evaluated for in the past 30 days
   * - `migrationSettings` includes migration settings information within the flag and within
   *   returned environments. These settings are only included for migration flags, that is, where
   *   `purpose` is `migration`.
   *
   * For example, `expand=evaluation` includes the `evaluation` field in the response.
   *
   * ### Migration flags
   * For migration flags, the cohort information is included in the `rules` property of a flag's
   * response, and default cohort information is included in the `fallthrough` property of a flag's
   * response. To learn more, read [Migration
   * Flags](https://launchdarkly.com/docs/home/flags/migration).
   *
   * @returns Global flags collection response
   *
   * @throws {@link FeatureFlagsApi.GetFeatureFlagsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getFeatureFlags(
    request: FeatureFlagsApi.GetFeatureFlagsRequest,
    options?: RequestOptions,
  ): ApiPromise<FeatureFlags, FeatureFlagsApi.GetFeatureFlagsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/flags/{projectKey}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [
          { name: "env", value: request.env, schema: s.optional(s.string()) },
          { name: "tag", value: request.tag, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "archived", value: request.archived, schema: s.optional(s.boolean()) },
          { name: "summary", value: request.summary, schema: s.optional(s.boolean()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
          { name: "compare", value: request.compare, schema: s.optional(s.boolean()) },
          { name: "expand", value: request.expand, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: featureFlagsSchema },
        errorFactory: FeatureFlagsApi.GetFeatureFlagsError,
      },
      options,
    );
  }

  /**
   * Update expiring context targets on feature flag
   *
   * @remarks
   * Schedule a context for removal from individual targeting on a feature flag. The flag must
   * already individually target the context.
   *
   * You can add, update, or remove a scheduled removal date. You can only schedule a context for
   * removal on a single variation per flag.
   *
   * Updating an expiring target uses the semantic patch format. To make a semantic patch request,
   * you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To
   * learn more, read [Updates using semantic
   * patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).
   *
   * ### Instructions
   *
   * Semantic patch requests support the following `kind` instructions for updating expiring
   * targets.
   *
   * <details> <summary>Click to expand instructions for <strong>updating expiring
   * targets</strong></summary>
   *
   * #### addExpiringTarget
   *
   * Adds a date and time that LaunchDarkly will remove the context from the flag's individual
   * targeting.
   *
   * ##### Parameters
   *
   * * `value`: The time, in Unix milliseconds, when LaunchDarkly should remove the context from
   *   individual targeting for this flag
   * * `variationId`: ID of a variation on the flag
   * * `contextKey`: The context key for the context to remove from individual targeting
   * * `contextKind`: The kind of context represented by the `contextKey`
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "addExpiringTarget",
   *     "value": 1754006460000,
   *     "variationId": "4254742c-71ae-411f-a992-43b18a51afe0",
   *     "contextKey": "user-key-123abc",
   *     "contextKind": "user"
   *   }]
   * }
   * ```
   *
   * #### updateExpiringTarget
   *
   * Updates the date and time that LaunchDarkly will remove the context from the flag's individual
   * targeting
   *
   * ##### Parameters
   *
   * * `value`: The time, in Unix milliseconds, when LaunchDarkly should remove the context from
   *   individual targeting for this flag
   * * `variationId`: ID of a variation on the flag
   * * `contextKey`: The context key for the context to remove from individual targeting
   * * `contextKind`: The kind of context represented by the `contextKey`
   * * `version`: (Optional) The version of the expiring target to update. If included, update will
   *   fail if version doesn't match current version of the expiring target.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "updateExpiringTarget",
   *     "value": 1754006460000,
   *     "variationId": "4254742c-71ae-411f-a992-43b18a51afe0",
   *     "contextKey": "user-key-123abc",
   *     "contextKind": "user"
   *   }]
   * }
   * ```
   *
   * #### removeExpiringTarget
   *
   * Removes the scheduled removal of the context from the flag's individual targeting. The context
   * will remain part of the flag's individual targeting until you explicitly remove it, or until
   * you schedule another removal.
   *
   * ##### Parameters
   *
   * * `variationId`: ID of a variation on the flag
   * * `contextKey`: The context key for the context to remove from individual targeting
   * * `contextKind`: The kind of context represented by the `contextKey`
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "removeExpiringTarget",
   *     "variationId": "4254742c-71ae-411f-a992-43b18a51afe0",
   *     "contextKey": "user-key-123abc",
   *     "contextKind": "user"
   *   }]
   * }
   * ```
   *
   * </details>
   *
   * @returns Expiring target response
   *
   * @throws {@link FeatureFlagsApi.PatchExpiringTargetsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchExpiringTargets(
    request: FeatureFlagsApi.PatchExpiringTargetsRequest,
    options?: RequestOptions,
  ): ApiPromise<ExpiringTargetPatchResponse, FeatureFlagsApi.PatchExpiringTargetsError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/api/v2/flags/{projectKey}/{featureFlagKey}/expiring-targets/{environmentKey}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "featureFlagKey", value: request.featureFlagKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: patchFlagsRequestSchema },
      },
      {
        success: { kind: "json", schema: expiringTargetPatchResponseSchema },
        errorFactory: FeatureFlagsApi.PatchExpiringTargetsError,
      },
      options,
    );
  }

  /**
   * Update expiring user targets on feature flag
   *
   * @remarks
   * > ### Contexts are now available > > After you have upgraded your LaunchDarkly SDK to use
   * contexts instead of users, you should use [Update expiring context targets on feature
   * flag](https://launchdarkly.com/docs/api/feature-flags/patch-expiring-targets) instead of this
   * endpoint. To learn more, read
   * [Contexts](https://launchdarkly.com/docs/home/observability/contexts).
   *
   * Schedule a target for removal from individual targeting on a feature flag. The flag must
   * already serve a variation to specific targets based on their key.
   *
   * You can add, update, or remove a scheduled removal date. You can only schedule a target for
   * removal on a single variation per flag.
   *
   * Updating an expiring target uses the semantic patch format. To make a semantic patch request,
   * you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To
   * learn more, read [Updates using semantic
   * patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).
   *
   * ### Instructions
   *
   * Semantic patch requests support the following `kind` instructions for updating expiring user
   * targets.
   *
   * <details> <summary>Click to expand instructions for <strong>updating expiring user
   * targets</strong></summary>
   *
   * #### addExpireUserTargetDate
   *
   * Adds a date and time that LaunchDarkly will remove the user from the flag's individual
   * targeting.
   *
   * ##### Parameters
   *
   * * `value`: The time, in Unix milliseconds, when LaunchDarkly should remove the user from
   *   individual targeting for this flag
   * * `variationId`: ID of a variation on the flag
   * * `userKey`: The user key for the user to remove from individual targeting
   *
   * #### updateExpireUserTargetDate
   *
   * Updates the date and time that LaunchDarkly will remove the user from the flag's individual
   * targeting.
   *
   * ##### Parameters
   *
   * * `value`: The time, in Unix milliseconds, when LaunchDarkly should remove the user from
   *   individual targeting for this flag
   * * `variationId`: ID of a variation on the flag
   * * `userKey`: The user key for the user to remove from individual targeting
   * * `version`: (Optional) The version of the expiring user target to update. If included, update
   *   will fail if version doesn't match current version of the expiring user target.
   *
   * #### removeExpireUserTargetDate
   *
   * Removes the scheduled removal of the user from the flag's individual targeting. The user will
   * remain part of the flag's individual targeting until you explicitly remove them, or until you
   * schedule another removal.
   *
   * ##### Parameters
   *
   * * `variationId`: ID of a variation on the flag
   * * `userKey`: The user key for the user to remove from individual targeting
   *
   * </details>
   *
   * @returns Expiring user target response
   *
   * @throws {@link FeatureFlagsApi.PatchExpiringUserTargetsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchExpiringUserTargets(
    request: FeatureFlagsApi.PatchExpiringUserTargetsRequest,
    options?: RequestOptions,
  ): ApiPromise<ExpiringUserTargetPatchResponse, FeatureFlagsApi.PatchExpiringUserTargetsError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/api/v2/flags/{projectKey}/{featureFlagKey}/expiring-user-targets/{environmentKey}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "featureFlagKey", value: request.featureFlagKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: patchFlagsRequestSchema },
      },
      {
        success: { kind: "json", schema: expiringUserTargetPatchResponseSchema },
        errorFactory: FeatureFlagsApi.PatchExpiringUserTargetsError,
      },
      options,
    );
  }

  /**
   * Update feature flag
   *
   * @remarks
   * Perform a partial update to a feature flag. The request body must be a valid semantic patch,
   * JSON patch, or JSON merge patch. To learn more the different formats, read
   * [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * ### Using semantic patches on a feature flag
   *
   * To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to
   * your `Content-Type` header. To learn more, read [Updates using semantic
   * patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).
   *
   * The body of a semantic patch request for updating feature flags takes the following properties:
   *
   * * `comment` (string): (Optional) A description of the update.
   * * `environmentKey` (string): (Required for some instructions only) The key of the LaunchDarkly
   *   environment.
   * * `instructions` (array): (Required) A list of actions the update should perform. Each action
   *   in the list must be an object with a `kind` property that indicates the instruction. If the
   *   action requires parameters, you must include those parameters as additional fields in the
   *   object. The body of a single semantic patch can contain many different instructions.
   *
   * ### Instructions
   *
   * Semantic patch requests support the following `kind` instructions for updating feature flags.
   *
   * <details> <summary>Click to expand instructions for <strong>turning flags on and
   * off</strong></summary>
   *
   * These instructions require the `environmentKey` parameter.
   *
   * #### turnFlagOff
   *
   * Sets the flag's targeting state to **Off**.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "environmentKey": "environment-key-123abc",
   *   "instructions": [ { "kind": "turnFlagOff" } ]
   * }
   * ```
   *
   * #### turnFlagOn
   *
   * Sets the flag's targeting state to **On**.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "environmentKey": "environment-key-123abc",
   *   "instructions": [ { "kind": "turnFlagOn" } ]
   * }
   * ```
   *
   * </details><br />
   *
   * <details> <summary>Click to expand instructions for <strong>working with targeting and
   * variations</strong></summary>
   *
   * These instructions require the `environmentKey` parameter.
   *
   * Several of the instructions for working with targeting and variations require flag rule IDs,
   * variation IDs, or clause IDs as parameters. Each of these are returned as part of the [Get
   * feature flag](https://launchdarkly.com/docs/api/feature-flags/get-feature-flag) response. The
   * flag rule ID is the `_id` field of each element in the `rules` array within each environment
   * listed in the `environments` object. The variation ID is the `_id` field in each element of the
   * `variations` array. The clause ID is the `_id` field of each element of the `clauses` array
   * within the `rules` array within each environment listed in the `environments` object.
   *
   * #### addClauses
   *
   * Adds the given clauses to the rule indicated by `ruleId`.
   *
   * ##### Parameters
   *
   * - `ruleId`: ID of a rule in the flag.
   * - `clauses`: Array of clause objects, with `contextKind` (string), `attribute` (string), `op`
   *   (string), `negate` (boolean), and `values` (array of strings, numbers, or dates) properties.
   *   The `contextKind`, `attribute`, and `values` are case sensitive. The `op` must be lower-case.
   *
   * Here's an example:
   *
   * ```json
   * {
   * 	"environmentKey": "environment-key-123abc",
   * 	"instructions": [{
   * 		"kind": "addClauses",
   * 		"ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
   * 		"clauses": [{
   * 			"contextKind": "user",
   * 			"attribute": "country",
   * 			"op": "in",
   * 			"negate": false,
   * 			"values": ["USA", "Canada"]
   * 		}]
   * 	}]
   * }
   * ```
   *
   * #### addPrerequisite
   *
   * Adds the flag indicated by `key` with variation `variationId` as a prerequisite to the flag in
   * the path parameter.
   *
   * ##### Parameters
   *
   * - `key`: Flag key of the prerequisite flag.
   * - `variationId`: ID of a variation of the prerequisite flag.
   *
   * Here's an example:
   *
   * ```json
   * {
   * 	"environmentKey": "environment-key-123abc",
   * 	"instructions": [{
   * 		"kind": "addPrerequisite",
   * 		"key": "example-prereq-flag-key",
   * 		"variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00"
   * 	}]
   * }
   * ```
   *
   * #### addRule
   *
   * Adds a new targeting rule to the flag. The rule may contain `clauses` and serve the variation
   * that `variationId` indicates, or serve a percentage rollout that `rolloutWeights`,
   * `rolloutBucketBy`, and `rolloutContextKind` indicate.
   *
   * If you set `beforeRuleId`, this adds the new rule before the indicated rule. Otherwise, adds
   * the new rule to the end of the list.
   *
   * ##### Parameters
   *
   * - `clauses`: Array of clause objects, with `contextKind` (string), `attribute` (string), `op`
   *   (string), `negate` (boolean), and `values` (array of strings, numbers, or dates) properties.
   *   The `contextKind`, `attribute`, and `values` are case sensitive. The `op` must be lower-case.
   * - `beforeRuleId`: (Optional) ID of a flag rule.
   * - Either
   *   - `variationId`: ID of a variation of the flag.
   *
   * or
   *
   *   - `rolloutWeights`: (Optional) Map of `variationId` to weight, in thousandths of a percent
   *     (0-100000).
   *   - `rolloutBucketBy`: (Optional) Context attribute available in the specified
   *     `rolloutContextKind`.
   *   - `rolloutContextKind`: (Optional) Context kind, defaults to `user`
   *
   * Here's an example that uses a `variationId`:
   *
   * ```json
   * {
   *   "environmentKey": "environment-key-123abc",
   *   "instructions": [{
   *     "kind": "addRule",
   *     "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00",
   *     "clauses": [{
   *       "contextKind": "organization",
   *       "attribute": "located_in",
   *       "op": "in",
   *       "negate": false,
   *       "values": ["Sweden", "Norway"]
   *     }]
   *   }]
   * }
   * ```
   *
   * Here's an example that uses a percentage rollout:
   *
   * ```json
   * {
   *   "environmentKey": "environment-key-123abc",
   *   "instructions": [{
   *     "kind": "addRule",
   *     "clauses": [{
   *       "contextKind": "organization",
   *       "attribute": "located_in",
   *       "op": "in",
   *       "negate": false,
   *       "values": ["Sweden", "Norway"]
   *     }],
   *     "rolloutContextKind": "organization",
   *     "rolloutWeights": {
   *       "2f43f67c-3e4e-4945-a18a-26559378ca00": 15000, // serve 15% this variation
   *       "e5830889-1ec5-4b0c-9cc9-c48790090c43": 85000  // serve 85% this variation
   *     }
   *   }]
   * }
   * ```
   *
   * #### addTargets
   *
   * Adds context keys to the individual context targets for the context kind that `contextKind`
   * specifies and the variation that `variationId` specifies. Returns an error if this causes the
   * flag to target the same context key in multiple variations.
   *
   * ##### Parameters
   *
   * - `values`: List of context keys.
   * - `contextKind`: (Optional) Context kind to target, defaults to `user`
   * - `variationId`: ID of a variation on the flag.
   *
   * Here's an example:
   *
   * ```json
   * {
   * 	"environmentKey": "environment-key-123abc",
   * 	"instructions": [{
   * 		"kind": "addTargets",
   * 		"values": ["context-key-123abc", "context-key-456def"],
   * 		"variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00"
   * 	}]
   * }
   * ```
   *
   * #### addUserTargets
   *
   * Adds user keys to the individual user targets for the variation that `variationId` specifies.
   * Returns an error if this causes the flag to target the same user key in multiple variations. If
   * you are working with contexts, use `addTargets` instead of this instruction.
   *
   * ##### Parameters
   *
   * - `values`: List of user keys.
   * - `variationId`: ID of a variation on the flag.
   *
   * Here's an example:
   *
   * ```json
   * {
   * 	"environmentKey": "environment-key-123abc",
   * 	"instructions": [{
   * 		"kind": "addUserTargets",
   * 		"values": ["user-key-123abc", "user-key-456def"],
   * 		"variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00"
   * 	}]
   * }
   * ```
   *
   * #### addValuesToClause
   *
   * Adds `values` to the values of the clause that `ruleId` and `clauseId` indicate. Does not
   * update the context kind, attribute, or operator.
   *
   * ##### Parameters
   *
   * - `ruleId`: ID of a rule in the flag.
   * - `clauseId`: ID of a clause in that rule.
   * - `values`: Array of strings, case sensitive.
   *
   * Here's an example:
   *
   * ```json
   * {
   * 	"environmentKey": "environment-key-123abc",
   * 	"instructions": [{
   * 		"kind": "addValuesToClause",
   * 		"ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
   * 		"clauseId": "10a58772-3121-400f-846b-b8a04e8944ed",
   * 		"values": ["beta_testers"]
   * 	}]
   * }
   * ```
   *
   * #### addVariation
   *
   * Adds a variation to the flag.
   *
   * ##### Parameters
   *
   * - `value`: The variation value.
   * - `name`: (Optional) The variation name.
   * - `description`: (Optional) A description for the variation.
   *
   * Here's an example:
   *
   * ```json
   * {
   * 	"instructions": [ { "kind": "addVariation", "value": 20, "name": "New variation" } ]
   * }
   * ```
   *
   * #### clearTargets
   *
   * Removes all individual targets from the variation that `variationId` specifies. This includes
   * both user and non-user targets.
   *
   * ##### Parameters
   *
   * - `variationId`: ID of a variation on the flag.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "environmentKey": "environment-key-123abc",
   *   "instructions": [ { "kind": "clearTargets", "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00" } ]
   * }
   * ```
   *
   * #### clearUserTargets
   *
   * Removes all individual user targets from the variation that `variationId` specifies. If you are
   * working with contexts, use `clearTargets` instead of this instruction.
   *
   * ##### Parameters
   *
   * - `variationId`: ID of a variation on the flag.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "environmentKey": "environment-key-123abc",
   *   "instructions": [ { "kind": "clearUserTargets", "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00" } ]
   * }
   * ```
   *
   * #### removeClauses
   *
   * Removes the clauses specified by `clauseIds` from the rule indicated by `ruleId`.
   *
   * ##### Parameters
   *
   * - `ruleId`: ID of a rule in the flag.
   * - `clauseIds`: Array of IDs of clauses in the rule.
   *
   * Here's an example:
   *
   * ```json
   * {
   * 	"environmentKey": "environment-key-123abc",
   * 	"instructions": [{
   * 		"kind": "removeClauses",
   * 		"ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
   * 		"clauseIds": ["10a58772-3121-400f-846b-b8a04e8944ed", "36a461dc-235e-4b08-97b9-73ce9365873e"]
   * 	}]
   * }
   * ```
   *
   * #### removePrerequisite
   *
   * Removes the prerequisite flag indicated by `key`. Does nothing if this prerequisite does not
   * exist.
   *
   * ##### Parameters
   *
   * - `key`: Flag key of an existing prerequisite flag.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "environmentKey": "environment-key-123abc",
   *   "instructions": [ { "kind": "removePrerequisite", "key": "prereq-flag-key-123abc" } ]
   * }
   * ```
   *
   * #### removeRule
   *
   * Removes the targeting rule specified by `ruleId`. Does nothing if the rule does not exist.
   *
   * ##### Parameters
   *
   * - `ruleId`: ID of a rule in the flag.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "environmentKey": "environment-key-123abc",
   *   "instructions": [ { "kind": "removeRule", "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29" } ]
   * }
   * ```
   *
   * #### removeTargets
   *
   * Removes context keys from the individual context targets for the context kind that
   * `contextKind` specifies and the variation that `variationId` specifies. Does nothing if the
   * flag does not target the context keys.
   *
   * ##### Parameters
   *
   * - `values`: List of context keys.
   * - `contextKind`: (Optional) Context kind to target, defaults to `user`
   * - `variationId`: ID of a flag variation.
   *
   * Here's an example:
   *
   * ```json
   * {
   * 	"environmentKey": "environment-key-123abc",
   * 	"instructions": [{
   * 		"kind": "removeTargets",
   * 		"values": ["context-key-123abc", "context-key-456def"],
   * 		"variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00"
   * 	}]
   * }
   * ```
   *
   * #### removeUserTargets
   *
   * Removes user keys from the individual user targets for the variation that `variationId`
   * specifies. Does nothing if the flag does not target the user keys. If you are working with
   * contexts, use `removeTargets` instead of this instruction.
   *
   * ##### Parameters
   *
   * - `values`: List of user keys.
   * - `variationId`: ID of a flag variation.
   *
   * Here's an example:
   *
   * ```json
   * {
   * 	"environmentKey": "environment-key-123abc",
   * 	"instructions": [{
   * 		"kind": "removeUserTargets",
   * 		"values": ["user-key-123abc", "user-key-456def"],
   * 		"variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00"
   * 	}]
   * }
   * ```
   *
   * #### removeValuesFromClause
   *
   * Removes `values` from the values of the clause indicated by `ruleId` and `clauseId`. Does not
   * update the context kind, attribute, or operator.
   *
   * ##### Parameters
   *
   * - `ruleId`: ID of a rule in the flag.
   * - `clauseId`: ID of a clause in that rule.
   * - `values`: Array of strings, case sensitive.
   *
   * Here's an example:
   *
   * ```json
   * {
   * 	"environmentKey": "environment-key-123abc",
   * 	"instructions": [{
   * 		"kind": "removeValuesFromClause",
   * 		"ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
   * 		"clauseId": "10a58772-3121-400f-846b-b8a04e8944ed",
   * 		"values": ["beta_testers"]
   * 	}]
   * }
   * ```
   *
   * #### removeVariation
   *
   * Removes a variation from the flag.
   *
   * ##### Parameters
   *
   * - `variationId`: ID of a variation of the flag to remove.
   *
   * Here's an example:
   *
   * ```json
   * {
   * 	"instructions": [ { "kind": "removeVariation", "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00" } ]
   * }
   * ```
   *
   * #### reorderRules
   *
   * Rearranges the rules to match the order given in `ruleIds`. Returns an error if `ruleIds` does
   * not match the current set of rules on the flag.
   *
   * ##### Parameters
   *
   * - `ruleIds`: Array of IDs of all rules in the flag.
   *
   * Here's an example:
   *
   * ```json
   * {
   * 	"environmentKey": "environment-key-123abc",
   * 	"instructions": [{
   * 		"kind": "reorderRules",
   * 		"ruleIds": ["a902ef4a-2faf-4eaf-88e1-ecc356708a29", "63c238d1-835d-435e-8f21-c8d5e40b2a3d"]
   * 	}]
   * }
   * ```
   *
   * #### replacePrerequisites
   *
   * Removes all existing prerequisites and replaces them with the list you provide.
   *
   * ##### Parameters
   *
   * - `prerequisites`: A list of prerequisites. Each item in the list must include a flag `key` and
   *   `variationId`.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "environmentKey": "environment-key-123abc",
   *   "instructions": [
   *     {
   *       "kind": "replacePrerequisites",
   *       "prerequisites": [
   *         {
   *           "key": "prereq-flag-key-123abc",
   *           "variationId": "10a58772-3121-400f-846b-b8a04e8944ed"
   *         },
   *         {
   *           "key": "another-prereq-flag-key-456def",
   *           "variationId": "e5830889-1ec5-4b0c-9cc9-c48790090c43"
   *         }
   *       ]
   *     }
   *   ]
   * }
   * ```
   *
   * #### replaceRules
   *
   * Removes all targeting rules for the flag and replaces them with the list you provide.
   *
   * ##### Parameters
   *
   * - `rules`: A list of rules.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "environmentKey": "environment-key-123abc",
   *   "instructions": [
   *     {
   *       "kind": "replaceRules",
   *       "rules": [
   *         {
   *           "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00",
   *           "description": "My new rule",
   *           "clauses": [
   *             {
   *               "contextKind": "user",
   *               "attribute": "segmentMatch",
   *               "op": "segmentMatch",
   *               "values": ["test"]
   *             }
   *           ],
   *           "trackEvents": true
   *         }
   *       ]
   *     }
   *   ]
   * }
   * ```
   *
   * #### replaceTargets
   *
   * Removes all existing targeting and replaces it with the list of targets you provide.
   *
   * ##### Parameters
   *
   * - `targets`: A list of context targeting. Each item in the list includes an optional
   *   `contextKind` that defaults to `user`, a required `variationId`, and a required list of
   *   `values`.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "environmentKey": "environment-key-123abc",
   *   "instructions": [
   *     {
   *       "kind": "replaceTargets",
   *       "targets": [
   *         {
   *           "contextKind": "user",
   *           "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00",
   *           "values": ["user-key-123abc"]
   *         },
   *         {
   *           "contextKind": "device",
   *           "variationId": "e5830889-1ec5-4b0c-9cc9-c48790090c43",
   *           "values": ["device-key-456def"]
   *         }
   *       ]
   *     }
   *   ]
   * }
   * ```
   *
   * #### replaceUserTargets
   *
   * Removes all existing user targeting and replaces it with the list of targets you provide. In
   * the list of targets, you must include a target for each of the flag's variations. If you are
   * working with contexts, use `replaceTargets` instead of this instruction.
   *
   * ##### Parameters
   *
   * - `targets`: A list of user targeting. Each item in the list must include a `variationId` and a
   *   list of `values`.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "environmentKey": "environment-key-123abc",
   *   "instructions": [
   *     {
   *       "kind": "replaceUserTargets",
   *       "targets": [
   *         {
   *           "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00",
   *           "values": ["user-key-123abc", "user-key-456def"]
   *         },
   *         {
   *           "variationId": "e5830889-1ec5-4b0c-9cc9-c48790090c43",
   *           "values": ["user-key-789ghi"]
   *         }
   *       ]
   *     }
   *   ]
   * }
   * ```
   *
   * #### updateClause
   *
   * Replaces the clause indicated by `ruleId` and `clauseId` with `clause`.
   *
   * ##### Parameters
   *
   * - `ruleId`: ID of a rule in the flag.
   * - `clauseId`: ID of a clause in that rule.
   * - `clause`: New `clause` object, with `contextKind` (string), `attribute` (string), `op`
   *   (string), `negate` (boolean), and `values` (array of strings, numbers, or dates) properties.
   *   The `contextKind`, `attribute`, and `values` are case sensitive. The `op` must be lower-case.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "environmentKey": "environment-key-123abc",
   *   "instructions": [{
   *     "kind": "updateClause",
   *     "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
   *     "clauseId": "10c7462a-2062-45ba-a8bb-dfb3de0f8af5",
   *     "clause": {
   *       "contextKind": "user",
   *       "attribute": "country",
   *       "op": "in",
   *       "negate": false,
   *       "values": ["Mexico", "Canada"]
   *     }
   *   }]
   * }
   * ```
   *
   * #### updateDefaultVariation
   *
   * Updates the default on or off variation of the flag.
   *
   * ##### Parameters
   *
   * - `onVariationValue`: (Optional) The value of the variation of the new on variation.
   * - `offVariationValue`: (Optional) The value of the variation of the new off variation
   *
   * Here's an example:
   *
   * ```json
   * {
   * 	"instructions": [ { "kind": "updateDefaultVariation", "OnVariationValue": true, "OffVariationValue": false } ]
   * }
   * ```
   *
   * #### updateFallthroughVariationOrRollout
   *
   * Updates the default or "fallthrough" rule for the flag, which the flag serves when a context
   * matches none of the targeting rules. The rule can serve either the variation that `variationId`
   * indicates, or a percentage rollout that `rolloutWeights` and `rolloutBucketBy` indicate.
   *
   * ##### Parameters
   *
   * - `variationId`: ID of a variation of the flag.
   *
   * or
   *
   * - `rolloutWeights`: Map of `variationId` to weight, in thousandths of a percent (0-100000).
   * - `rolloutBucketBy`: (Optional) Context attribute available in the specified
   *   `rolloutContextKind`.
   * - `rolloutContextKind`: (Optional) Context kind, defaults to `user`
   *
   * Here's an example that uses a `variationId`:
   *
   * ```json
   * {
   * 	"environmentKey": "environment-key-123abc",
   * 	"instructions": [{
   * 		"kind": "updateFallthroughVariationOrRollout",
   * 		"variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00"
   * 	}]
   * }
   * ```
   *
   * Here's an example that uses a percentage rollout:
   *
   * ```json
   * {
   * 	"environmentKey": "environment-key-123abc",
   * 	"instructions": [{
   * 		"kind": "updateFallthroughVariationOrRollout",
   * 		"rolloutContextKind": "user",
   * 		"rolloutWeights": {
   * 			"2f43f67c-3e4e-4945-a18a-26559378ca00": 15000, // serve 15% this variation
   * 			"e5830889-1ec5-4b0c-9cc9-c48790090c43": 85000  // serve 85% this variation
   * 		}
   * 	}]
   * }
   * ```
   *
   * #### updateOffVariation
   *
   * Updates the default off variation to `variationId`. The flag serves the default off variation
   * when the flag's targeting is **Off**.
   *
   * ##### Parameters
   *
   * - `variationId`: ID of a variation of the flag.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "environmentKey": "environment-key-123abc",
   *   "instructions": [ { "kind": "updateOffVariation", "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00" } ]
   * }
   * ```
   *
   * #### updatePrerequisite
   *
   * Changes the prerequisite flag that `key` indicates to use the variation that `variationId`
   * indicates. Returns an error if this prerequisite does not exist.
   *
   * ##### Parameters
   *
   * - `key`: Flag key of an existing prerequisite flag.
   * - `variationId`: ID of a variation of the prerequisite flag.
   *
   * Here's an example:
   *
   * ```json
   * {
   * 	"environmentKey": "environment-key-123abc",
   * 	"instructions": [{
   * 		"kind": "updatePrerequisite",
   * 		"key": "example-prereq-flag-key",
   * 		"variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00"
   * 	}]
   * }
   * ```
   *
   * #### updateRuleDescription
   *
   * Updates the description of the feature flag rule.
   *
   * ##### Parameters
   *
   * - `description`: The new human-readable description for this rule.
   * - `ruleId`: The ID of the rule. You can retrieve this by making a GET request for the flag.
   *
   * Here's an example:
   *
   * ```json
   * {
   * 	"environmentKey": "environment-key-123abc",
   * 	"instructions": [{
   * 		"kind": "updateRuleDescription",
   * 		"description": "New rule description",
   * 		"ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29"
   * 	}]
   * }
   * ```
   *
   * #### updateRuleTrackEvents
   *
   * Updates whether or not LaunchDarkly tracks events for the feature flag associated with this
   * rule.
   *
   * ##### Parameters
   *
   * - `ruleId`: The ID of the rule. You can retrieve this by making a GET request for the flag.
   * - `trackEvents`: Whether or not events are tracked.
   *
   * Here's an example:
   *
   * ```json
   * {
   * 	"environmentKey": "environment-key-123abc",
   * 	"instructions": [{
   * 		"kind": "updateRuleTrackEvents",
   * 		"ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
   * 		"trackEvents": true
   * 	}]
   * }
   * ```
   *
   * #### updateRuleVariationOrRollout
   *
   * Updates what `ruleId` serves when its clauses evaluate to true. The rule can serve either the
   * variation that `variationId` indicates, or a percent rollout that `rolloutWeights` and
   * `rolloutBucketBy` indicate.
   *
   * ##### Parameters
   *
   * - `ruleId`: ID of a rule in the flag.
   * - `variationId`: ID of a variation of the flag.
   *
   * or
   *
   * - `rolloutWeights`: Map of `variationId` to weight, in thousandths of a percent (0-100000).
   * - `rolloutBucketBy`: (Optional) Context attribute available in the specified
   *   `rolloutContextKind`.
   * - `rolloutContextKind`: (Optional) Context kind, defaults to `user`
   *
   * Here's an example:
   *
   * ```json
   * {
   * 	"environmentKey": "environment-key-123abc",
   * 	"instructions": [{
   * 		"kind": "updateRuleVariationOrRollout",
   * 		"ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
   * 		"variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00"
   * 	}]
   * }
   * ```
   *
   * #### updateTrackEvents
   *
   * Updates whether or not LaunchDarkly tracks events for the feature flag, for all rules.
   *
   * ##### Parameters
   *
   * - `trackEvents`: Whether or not events are tracked.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "environmentKey": "environment-key-123abc",
   *   "instructions": [ { "kind": "updateTrackEvents", "trackEvents": true } ]
   * }
   * ```
   *
   * #### updateTrackEventsFallthrough
   *
   * Updates whether or not LaunchDarkly tracks events for the feature flag, for the default rule.
   *
   * ##### Parameters
   *
   * - `trackEvents`: Whether or not events are tracked.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "environmentKey": "environment-key-123abc",
   *   "instructions": [ { "kind": "updateTrackEventsFallthrough", "trackEvents": true } ]
   * }
   * ```
   *
   * #### updateVariation
   *
   * Updates a variation of the flag.
   *
   * ##### Parameters
   *
   * - `variationId`: The ID of the variation to update.
   * - `name`: (Optional) The updated variation name.
   * - `value`: (Optional) The updated variation value.
   * - `description`: (Optional) The updated variation description.
   *
   * Here's an example:
   *
   * ```json
   * {
   * 	"instructions": [ { "kind": "updateVariation", "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00", "value": 20 } ]
   * }
   * ```
   *
   * </details><br />
   *
   * <details> <summary>Click to expand instructions for <strong>updating flag
   * settings</strong></summary>
   *
   * These instructions do not require the `environmentKey` parameter. They make changes that apply
   * to the flag across all environments.
   *
   * #### addCustomProperties
   *
   * Adds a new custom property to the feature flag. Custom properties are used to associate feature
   * flags with LaunchDarkly integrations. For example, if you create an integration with an issue
   * tracking service, you may want to associate a flag with a list of issues related to a feature's
   * development.
   *
   * ##### Parameters
   *
   *  - `key`: The custom property key.
   *  - `name`: The custom property name.
   *  - `values`: A list of the associated values for the custom property.
   *
   * Here's an example:
   *
   * ```json
   * {
   * 	"instructions": [{
   * 		"kind": "addCustomProperties",
   * 		"key": "example-custom-property",
   * 		"name": "Example custom property",
   * 		"values": ["value1", "value2"]
   * 	}]
   * }
   * ```
   *
   * #### addTags
   *
   * Adds tags to the feature flag.
   *
   * ##### Parameters
   *
   * - `values`: A list of tags to add.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [ { "kind": "addTags", "values": ["tag1", "tag2"] } ]
   * }
   * ```
   *
   * #### makeFlagPermanent
   *
   * Marks the feature flag as permanent. LaunchDarkly does not prompt you to remove permanent
   * flags, even if one variation is rolled out to all your customers.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [ { "kind": "makeFlagPermanent" } ]
   * }
   * ```
   *
   * #### makeFlagTemporary
   *
   * Marks the feature flag as temporary.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [ { "kind": "makeFlagTemporary" } ]
   * }
   * ```
   *
   * #### removeCustomProperties
   *
   * Removes the associated values from a custom property. If all the associated values are removed,
   * this instruction also removes the custom property.
   *
   * ##### Parameters
   *
   *  - `key`: The custom property key.
   *  - `values`: A list of the associated values to remove from the custom property.
   *
   * ```json
   * {
   * 	"instructions": [{
   * 		"kind": "replaceCustomProperties",
   * 		"key": "example-custom-property",
   * 		"values": ["value1", "value2"]
   * 	}]
   * }
   * ```
   *
   * #### removeMaintainer
   *
   * Removes the flag's maintainer. To set a new maintainer, use the `updateMaintainerMember` or
   * `updateMaintainerTeam` instructions.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [ { "kind": "removeMaintainer" } ]
   * }
   * ```
   *
   * #### removeTags
   *
   * Removes tags from the feature flag.
   *
   * ##### Parameters
   *
   * - `values`: A list of tags to remove.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [ { "kind": "removeTags", "values": ["tag1", "tag2"] } ]
   * }
   * ```
   *
   * #### replaceCustomProperties
   *
   * Replaces the existing associated values for a custom property with the new values.
   *
   * ##### Parameters
   *
   *  - `key`: The custom property key.
   *  - `name`: The custom property name.
   *  - `values`: A list of the new associated values for the custom property.
   *
   * Here's an example:
   *
   * ```json
   * {
   *  "instructions": [{
   *    "kind": "replaceCustomProperties",
   *    "key": "example-custom-property",
   *    "name": "Example custom property",
   *    "values": ["value1", "value2"]
   *  }]
   * }
   * ```
   *
   * #### turnOffClientSideAvailability
   *
   * Turns off client-side SDK availability for the flag. This is equivalent to unchecking the
   * **SDKs using Mobile key** and/or **SDKs using Client-side ID** boxes for the flag. If you're
   * using a client-side or mobile SDK, you must expose your feature flags in order for the
   * client-side or mobile SDKs to evaluate them.
   *
   * ##### Parameters
   *
   * - `value`: Use "usingMobileKey" to turn off availability for mobile SDKs. Use
   *   "usingEnvironmentId" to turn on availability for client-side SDKs.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [ { "kind": "turnOffClientSideAvailability", "value": "usingMobileKey" } ]
   * }
   * ```
   *
   * #### turnOnClientSideAvailability
   *
   * Turns on client-side SDK availability for the flag. This is equivalent to checking the **SDKs
   * using Mobile key** and/or **SDKs using Client-side ID** boxes for the flag. If you're using a
   * client-side or mobile SDK, you must expose your feature flags in order for the client-side or
   * mobile SDKs to evaluate them.
   *
   * ##### Parameters
   *
   * - `value`: Use "usingMobileKey" to turn on availability for mobile SDKs. Use
   *   "usingEnvironmentId" to turn on availability for client-side SDKs.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [ { "kind": "turnOnClientSideAvailability", "value": "usingMobileKey" } ]
   * }
   * ```
   *
   * #### updateDescription
   *
   * Updates the feature flag description.
   *
   * ##### Parameters
   *
   * - `value`: The new description.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [ { "kind": "updateDescription", "value": "Updated flag description" } ]
   * }
   * ```
   * #### updateMaintainerMember
   *
   * Updates the maintainer of the flag to an existing member and removes the existing maintainer.
   *
   * ##### Parameters
   *
   * - `value`: The ID of the member.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [ { "kind": "updateMaintainerMember", "value": "61e9b714fd47591727db558a" } ]
   * }
   * ```
   *
   * #### updateMaintainerTeam
   *
   * Updates the maintainer of the flag to an existing team and removes the existing maintainer.
   *
   * ##### Parameters
   *
   * - `value`: The key of the team.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [ { "kind": "updateMaintainerTeam", "value": "example-team-key" } ]
   * }
   * ```
   *
   * #### updateName
   *
   * Updates the feature flag name.
   *
   * ##### Parameters
   *
   * - `value`: The new name.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [ { "kind": "updateName", "value": "Updated flag name" } ]
   * }
   * ```
   *
   * </details><br />
   *
   * <details> <summary>Click to expand instructions for <strong>updating the flag
   * lifecycle</strong></summary>
   *
   * These instructions do not require the `environmentKey` parameter. They make changes that apply
   * to the flag across all environments.
   *
   * #### archiveFlag
   *
   * Archives the feature flag. This retires it from LaunchDarkly without deleting it. You cannot
   * archive a flag that is a prerequisite of other flags.
   *
   * ```json
   * {
   *   "instructions": [ { "kind": "archiveFlag" } ]
   * }
   * ```
   *
   * #### deleteFlag
   *
   * Deletes the feature flag and its rules. You cannot restore a deleted flag. If this flag is
   * requested again, the flag value defined in code will be returned for all contexts.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [ { "kind": "deleteFlag" } ]
   * }
   * ```
   *
   * #### deprecateFlag
   *
   * Deprecates the feature flag. This hides it from the live flags list without archiving or
   * deleting it.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [ { "kind": "deprecateFlag" } ]
   * }
   * ```
   *
   * #### restoreDeprecatedFlag
   *
   * Restores the feature flag if it was previously deprecated.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [ { "kind": "restoreDeprecatedFlag" } ]
   * }
   * ```
   *
   * #### restoreFlag
   *
   * Restores the feature flag if it was previously archived.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [ { "kind": "restoreFlag" } ]
   * }
   * ```
   *
   * </details>
   *
   * ### Using JSON patches on a feature flag
   *
   * If you do not include the semantic patch header described above, you can use a [JSON
   * patch](https://launchdarkly.com/docs/api#updates-using-json-patch) or [JSON merge
   * patch](https://datatracker.ietf.org/doc/html/rfc7386) representation of the desired changes.
   *
   * In the JSON patch representation, use a JSON pointer in the `path` element to describe what
   * field to change. Use the [Get feature
   * flag](https://launchdarkly.com/docs/api/feature-flags/get-feature-flag) endpoint to find the
   * field you want to update.
   *
   * There are a few special cases to keep in mind when determining the value of the `path` element:
   *
   *   * To add an individual target to a specific variation if the flag variation already has
   *     individual targets, the path for the JSON patch operation is:
   *
   *   ```json
   *   [
   *     {
   *       "op": "add",
   *       "path": "/environments/devint/targets/0/values/-",
   *       "value": "TestClient10"
   *     }
   *   ]
   *   ```
   *
   *   * To add an individual target to a specific variation if the flag variation does not already
   *     have individual targets, the path for the JSON patch operation is:
   *
   *   ```json
   *   [
   *     {
   *       "op": "add",
   *       "path": "/environments/devint/targets/-",
   *       "value": { "variation": 0, "values": ["TestClient10"] }
   *     }
   *   ]
   *   ```
   *
   *   * To add a flag to a release pipeline, the path for the JSON patch operation is:
   *
   *   ```json
   *   [
   *     {
   *       "op": "add",
   *       "path": "/releasePipelineKey",
   *       "value": "example-release-pipeline-key"
   *     }
   *   ]
   *   ```
   *
   * ### Required approvals
   * If a request attempts to alter a flag configuration in an environment where approvals are
   * required for the flag, the request will fail with a 405. Changes to the flag configuration in
   * that environment will require creating an [approval
   * request](https://launchdarkly.com/docs/api/approvals).
   *
   * ### Conflicts
   * If a flag configuration change made through this endpoint would cause a pending scheduled
   * change or approval request to fail, this endpoint will return a 400. You can ignore this check
   * by adding an `ignoreConflicts` query parameter set to `true`.
   *
   * ### Migration flags
   * For migration flags, the cohort information is included in the `rules` property of a flag's
   * response. You can update cohorts by updating `rules`. Default cohort information is included in
   * the `fallthrough` property of a flag's response. You can update the default cohort by updating
   * `fallthrough`. When you update the rollout for a cohort or the default cohort through the API,
   * provide a rollout instead of a single `variationId`. To learn more, read [Migration
   * flags](https://launchdarkly.com/docs/home/flags/migration).
   *
   * @returns Global flag response
   *
   * @throws {@link FeatureFlagsApi.PatchFeatureFlagError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchFeatureFlag(
    request: FeatureFlagsApi.PatchFeatureFlagRequest,
    options?: RequestOptions,
  ): ApiPromise<FeatureFlag, FeatureFlagsApi.PatchFeatureFlagError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/flags/{projectKey}/{featureFlagKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "featureFlagKey", value: request.featureFlagKey, schema: s.string() },
        ],
        query: [
          { name: "ignoreConflicts", value: request.ignoreConflicts, schema: s.optional(s.boolean()) },
          { name: "dryRun", value: request.dryRun, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: patchWithCommentSchema },
      },
      {
        success: { kind: "json", schema: featureFlagSchema },
        errorFactory: FeatureFlagsApi.PatchFeatureFlagError,
      },
      options,
    );
  }

  /**
   * Create a feature flag
   *
   * @remarks
   * Create a feature flag with the given name, key, and variations.
   *
   * <details> <summary>Click to expand instructions for <strong>creating a migration
   * flag</strong></summary>
   *
   * ### Creating a migration flag
   *
   * When you create a migration flag, the variations are pre-determined based on the number of
   * stages in the migration.
   *
   * To create a migration flag, omit the `variations` and `defaults` information. Instead, provide
   * a `purpose` of `migration`, and `migrationSettings`. If you create a migration flag with six
   * stages, `contextKind` is required. Otherwise, it should be omitted.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "key": "flag-key-123",
   *   "purpose": "migration",
   *   "migrationSettings": {
   *     "stageCount": 6,
   *     "contextKind": "account"
   *   }
   * }
   * ```
   *
   * To learn more, read [Migration Flags](https://launchdarkly.com/docs/home/flags/migration).
   *
   * </details>
   *
   * @returns Global flag response
   *
   * @throws {@link FeatureFlagsApi.PostFeatureFlagError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postFeatureFlag(
    request: FeatureFlagsApi.PostFeatureFlagRequest,
    options?: RequestOptions,
  ): ApiPromise<FeatureFlag, FeatureFlagsApi.PostFeatureFlagError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/flags/{projectKey}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [{ name: "clone", value: request.clone, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: featureFlagBodySchema },
      },
      {
        success: { kind: "json", schema: featureFlagSchema },
        errorFactory: FeatureFlagsApi.PostFeatureFlagError,
      },
      options,
    );
  }

  /**
   * Get migration safety issues
   *
   * @remarks
   * Returns the migration safety issues that are associated with the POSTed flag patch. The patch
   * must use the semantic patch format for updating feature flags.
   *
   * @returns Migration safety issues found
   *
   * @throws {@link FeatureFlagsApi.PostMigrationSafetyIssuesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postMigrationSafetyIssues(
    request: FeatureFlagsApi.PostMigrationSafetyIssuesRequest,
    options?: RequestOptions,
  ): ApiPromise<MigrationSafetyIssueRep[], FeatureFlagsApi.PostMigrationSafetyIssuesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/flags/{flagKey}/environments/{environmentKey}/migration-safety-issues",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "flagKey", value: request.flagKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: flagSempatchSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => migrationSafetyIssueRepSchema)) },
        errorFactory: FeatureFlagsApi.PostMigrationSafetyIssuesError,
      },
      options,
    );
  }
}

export namespace FeatureFlagsApi {
  export type CopyFeatureFlagRequest = {
    /** The project key */
    projectKey: string;
    /** The feature flag key. The key identifies the flag in your code. */
    featureFlagKey: string;
    body: FlagCopyConfigPost;
  };

  export class CopyFeatureFlagError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"methodNotAllowedErrorRep", MethodNotAllowedErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<CopyFeatureFlagError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
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

  export type DeleteFeatureFlagRequest = {
    /** The project key */
    projectKey: string;
    /** The feature flag key. The key identifies the flag in your code. */
    featureFlagKey: string;
  };

  export class DeleteFeatureFlagError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteFeatureFlagError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      {
        on: 409,
        kind: "statusConflictErrorRep",
        decode: { kind: "json", schema: statusConflictErrorRepSchema },
      },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetExpiringContextTargetsRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The feature flag key */
    featureFlagKey: string;
  };

  export class GetExpiringContextTargetsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetExpiringContextTargetsError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetExpiringUserTargetsRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The feature flag key */
    featureFlagKey: string;
  };

  export class GetExpiringUserTargetsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetExpiringUserTargetsError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetFeatureFlagRequest = {
    /** The project key */
    projectKey: string;
    /** The feature flag key */
    featureFlagKey: string;
    /** Filter configurations by environment */
    env?: string;
    /**
     * A comma-separated list of fields to expand in the response. Supported fields are explained
     * above.
     */
    expand?: string;
  };

  export class GetFeatureFlagError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFeatureFlagError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetFeatureFlagStatusRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The feature flag key */
    featureFlagKey: string;
  };

  export class GetFeatureFlagStatusError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFeatureFlagStatusError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetFeatureFlagStatusAcrossEnvironmentsRequest = {
    /** The project key */
    projectKey: string;
    /** The feature flag key */
    featureFlagKey: string;
    /** Optional environment filter */
    env?: string;
  };

  export class GetFeatureFlagStatusAcrossEnvironmentsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFeatureFlagStatusAcrossEnvironmentsError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetFeatureFlagStatusesRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
  };

  export class GetFeatureFlagStatusesError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFeatureFlagStatusesError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetFeatureFlagsRequest = {
    /** The project key */
    projectKey: string;
    /** Filter configurations by environment */
    env?: string;
    /** Filter feature flags by tag */
    tag?: string;
    /** The number of feature flags to return. Defaults to 20. */
    limit?: number;
    /**
     * Where to start in the list. Use this with pagination. For example, an offset of 10 skips the
     * first ten items and then returns the next items in the list, up to the query `limit`.
     */
    offset?: number;
    /**
     * Deprecated, use `filter=archived:true` instead. A boolean to filter the list to archived
     * flags. When this is absent, only unarchived flags will be returned
     *
     * @deprecated
     */
    archived?: boolean;
    /**
     * By default, flags do _not_ include their lists of prerequisites, targets, or rules for each
     * environment. Set `summary=0` and include the `env` query parameter to include these fields
     * for each flag returned.
     */
    summary?: boolean;
    /**
     * A comma-separated list of filters. Each filter is of the form field:value. Read the endpoint
     * description for a full list of available filter fields.
     */
    filter?: string;
    /**
     * A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in
     * descending order. Read the endpoint description for a full list of available sort fields.
     */
    sort?: string;
    /**
     * Deprecated, unavailable in API version `20240415`. A boolean to filter results by only flags
     * that have differences between environments.
     *
     * @deprecated
     */
    compare?: boolean;
    /**
     * A comma-separated list of fields to expand in the response. Supported fields are explained
     * above.
     */
    expand?: string;
  };

  export class GetFeatureFlagsError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFeatureFlagsError> = [
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

  export type PatchExpiringTargetsRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The feature flag key */
    featureFlagKey: string;
    body: PatchFlagsRequest;
  };

  export class PatchExpiringTargetsError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchExpiringTargetsError> = [
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

  export type PatchExpiringUserTargetsRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The feature flag key */
    featureFlagKey: string;
    body: PatchFlagsRequest;
  };

  export class PatchExpiringUserTargetsError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchExpiringUserTargetsError> = [
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

  export type PatchFeatureFlagRequest = {
    /** The project key */
    projectKey: string;
    /** The feature flag key. The key identifies the flag in your code. */
    featureFlagKey: string;
    /**
     * If true, the patch will be applied even if it causes a pending scheduled change or approval
     * request to fail.
     */
    ignoreConflicts?: boolean;
    /**
     * If true, the patch will be validated but not persisted. Returns a preview of the flag after
     * the patch is applied.
     */
    dryRun?: boolean;
    body: PatchWithComment;
  };

  export class PatchFeatureFlagError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"methodNotAllowedErrorRep", MethodNotAllowedErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchFeatureFlagError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
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

  export type PostFeatureFlagRequest = {
    /** The project key */
    projectKey: string;
    /**
     * The key of the feature flag to be cloned. The key identifies the flag in your code. For
     * example, setting `clone=flagKey` copies the full targeting configuration for all
     * environments, including `on/off` state, from the original flag to the new flag.
     */
    clone?: string;
    body: FeatureFlagBody;
  };

  export class PostFeatureFlagError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostFeatureFlagError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      {
        on: 409,
        kind: "statusConflictErrorRep",
        decode: { kind: "json", schema: statusConflictErrorRepSchema },
      },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PostMigrationSafetyIssuesRequest = {
    /** The project key */
    projectKey: string;
    /** The migration flag key */
    flagKey: string;
    /** The environment key */
    environmentKey: string;
    body: FlagSempatch;
  };

  export class PostMigrationSafetyIssuesError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Declared<"statusServiceUnavailable", StatusServiceUnavailable>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostMigrationSafetyIssuesError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
      {
        on: 503,
        kind: "statusServiceUnavailable",
        decode: { kind: "json", schema: statusServiceUnavailableSchema },
      },
    ];
  }
}
