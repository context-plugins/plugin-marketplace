import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  approvalRequestPatchInputSchema,
  type ApprovalRequestPatchInput,
} from "../models/approval-request-patch-input.js";
import {
  approvalRequestSettingWithEnvsSchema,
  type ApprovalRequestSettingWithEnvs,
} from "../models/approval-request-setting-with-envs.js";
import {
  approvalRequestSettingsPatchSchema,
  type ApprovalRequestSettingsPatch,
} from "../models/approval-request-settings-patch.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  flagConfigApprovalRequestResponseSchema,
  type FlagConfigApprovalRequestResponse,
} from "../models/flag-config-approval-request-response.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import { ldApiVersionSchema, type LdApiVersion } from "../models/ld-api-version.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import type { Servers } from "../servers.js";

/**
 * > ### This feature is in beta > > To use this feature, pass in a header including the
 * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
 * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
 * in beta are still undergoing testing and development. They may change without notice, including
 * becoming backwards incompatible.
 */
export class ApprovalsBeta {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get approval request settings
   *
   * @remarks
   * Get the approval request settings for the given project, optionally filtered by environment and
   * resource kind.
   *
   * @returns Successful response
   *
   * @throws {@link ApprovalsBeta.GetApprovalRequestSettingsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApprovalRequestSettings(
    request: ApprovalsBeta.GetApprovalRequestSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, ApprovalRequestSettingWithEnvs>,
    ApprovalsBeta.GetApprovalRequestSettingsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/approval-requests/projects/{projectKey}/settings"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [
          { name: "environmentKey", value: request.environmentKey, schema: s.optional(s.string()) },
          { name: "resourceKind", value: request.resourceKind, schema: s.optional(s.string()) },
          { name: "expand", value: request.expand, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "LD-API-Version", value: request.ldApiVersion, schema: ldApiVersionSchema }],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: s.record(
            s.string(),
            s.lazy(() => approvalRequestSettingWithEnvsSchema),
          ),
        },
        errorFactory: ApprovalsBeta.GetApprovalRequestSettingsError,
      },
      options,
    );
  }

  /**
   * Update approval request
   *
   * @remarks
   * Perform a partial update to an approval request. Updating an approval request uses the semantic
   * patch format. This endpoint works with any approval requests.
   *
   * To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to
   * your `Content-Type` header. To learn more, read [Updates using semantic
   * patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).
   *
   * ### Instructions
   *
   * Semantic patch requests support the following `kind` instructions for updating an approval
   * request.
   *
   * #### addReviewers
   *
   * Adds the specified members and teams to the existing list of reviewers. You must include at
   * least one of `notifyMemberIds` and `notifyTeamKeys`.
   *
   * ##### Parameters
   *
   * - `notifyMemberIds`: (Optional) List of member IDs.
   * - `notifyTeamKeys`: (Optional) List of team keys.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "addReviewers",
   *     "notifyMemberIds": [ "user-key-123abc", "user-key-456def" ],
   *     "notifyTeamKeys": [ "team-key-789abc"]
   *   }]
   * }
   * ```
   *
   * #### updateDescription
   *
   * Updates the description (title) of the approval request.
   *
   * ##### Parameters
   *
   * - `value`: (Required) The new description for the approval request. Must be non-empty and no
   *   more than 5000 characters.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "updateDescription",
   *     "value": "Updated approval request title"
   *   }]
   * }
   * ```
   *
   * @returns Approval request response
   *
   * @throws {@link ApprovalsBeta.PatchApprovalRequestError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchApprovalRequest(
    request: ApprovalsBeta.PatchApprovalRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<FlagConfigApprovalRequestResponse, ApprovalsBeta.PatchApprovalRequestError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/approval-requests/{id}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: approvalRequestPatchInputSchema },
      },
      {
        success: { kind: "json", schema: flagConfigApprovalRequestResponseSchema },
        errorFactory: ApprovalsBeta.PatchApprovalRequestError,
      },
      options,
    );
  }

  /**
   * Update approval request settings
   *
   * @remarks
   * Perform a partial update to approval request settings
   *
   * @returns Successful response
   *
   * @throws {@link ApprovalsBeta.PatchApprovalRequestSettingsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchApprovalRequestSettings(
    request: ApprovalsBeta.PatchApprovalRequestSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, ApprovalRequestSettingWithEnvs>,
    ApprovalsBeta.PatchApprovalRequestSettingsError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/approval-requests/projects/{projectKey}/settings"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [],
        headers: [
          { name: "LD-API-Version", value: request.ldApiVersion, schema: ldApiVersionSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => approvalRequestSettingsPatchSchema)),
        },
      },
      {
        success: {
          kind: "json",
          schema: s.record(
            s.string(),
            s.lazy(() => approvalRequestSettingWithEnvsSchema),
          ),
        },
        errorFactory: ApprovalsBeta.PatchApprovalRequestSettingsError,
      },
      options,
    );
  }

  /**
   * Update flag approval request
   *
   * @remarks
   * Perform a partial update to an approval request. Updating an approval request uses the semantic
   * patch format. This endpoint requires a feature flag key, and can only be used for updating
   * approval requests for flags.
   *
   * To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to
   * your `Content-Type` header. To learn more, read [Updates using semantic
   * patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).
   *
   * ### Instructions
   *
   * Semantic patch requests support the following `kind` instructions for updating an approval
   * request.
   *
   * #### addReviewers
   *
   * Adds the specified members and teams to the existing list of reviewers. You must include at
   * least one of `notifyMemberIds` and `notifyTeamKeys`.
   *
   * ##### Parameters
   *
   * - `notifyMemberIds`: (Optional) List of member IDs.
   * - `notifyTeamKeys`: (Optional) List of team keys.
   *
   * #### updateDescription
   *
   * Updates the description (title) of the approval request.
   *
   * ##### Parameters
   *
   * - `value`: (Required) The new description for the approval request. Must be non-empty and no
   *   more than 5000 characters.
   *
   * @returns Approval request response
   *
   * @throws {@link ApprovalsBeta.PatchFlagConfigApprovalRequestError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchFlagConfigApprovalRequest(
    request: ApprovalsBeta.PatchFlagConfigApprovalRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<FlagConfigApprovalRequestResponse, ApprovalsBeta.PatchFlagConfigApprovalRequestError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}",
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
        success: { kind: "json", schema: flagConfigApprovalRequestResponseSchema },
        errorFactory: ApprovalsBeta.PatchFlagConfigApprovalRequestError,
      },
      options,
    );
  }
}

export namespace ApprovalsBeta {
  export type GetApprovalRequestSettingsRequest = {
    projectKey: string;
    /** An environment key filter to apply to the approval request settings. */
    environmentKey?: string;
    /** A resource kind filter to apply to the approval request settings. */
    resourceKind?: string;
    /**
     * A comma-separated list of fields to expand in the response. Options include 'default' and
     * 'strict'.
     */
    expand?: string;
    /** Version of the endpoint. */
    ldApiVersion: LdApiVersion;
  };

  export class GetApprovalRequestSettingsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApprovalRequestSettingsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PatchApprovalRequestRequest = {
    /** The approval ID */
    id: string;
    body: ApprovalRequestPatchInput;
  };

  export class PatchApprovalRequestError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchApprovalRequestError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PatchApprovalRequestSettingsRequest = {
    projectKey: string;
    /** Version of the endpoint. */
    ldApiVersion: LdApiVersion;
    /** Approval request settings to update */
    body?: ApprovalRequestSettingsPatch;
  };

  export class PatchApprovalRequestSettingsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchApprovalRequestSettingsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PatchFlagConfigApprovalRequestRequest = {
    /** The project key */
    projectKey: string;
    /** The feature flag key */
    featureFlagKey: string;
    /** The environment key */
    environmentKey: string;
    /** The approval ID */
    id: string;
  };

  export class PatchFlagConfigApprovalRequestError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchFlagConfigApprovalRequestError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }
}
