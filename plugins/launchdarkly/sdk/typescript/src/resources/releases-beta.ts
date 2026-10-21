import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { createReleaseInputSchema, type CreateReleaseInput } from "../models/create-release-input.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import {
  invalidRequestErrorRepSchema,
  type InvalidRequestErrorRep,
} from "../models/invalid-request-error-rep.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import { patchOperationSchema, type PatchOperation } from "../models/patch-operation.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import { releaseSchema, type Release } from "../models/release.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import {
  updatePhaseStatusInputSchema,
  type UpdatePhaseStatusInput,
} from "../models/update-phase-status-input.js";
import type { Servers } from "../servers.js";

/**
 * > ### This feature is in beta > > To use this feature, pass in a header including the
 * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
 * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
 * in beta are still undergoing testing and development. They may change without notice, including
 * becoming backwards incompatible.
 *
 * Release pipelines standardize and automate the release process for feature flags across a series
 * of phases, where each phase consists of one or more environments and audiences. When you add a
 * flag to an existing release pipeline, you create a "release" to automate that flag's progress
 * through the pipeline.
 *
 * Use the releases API to add a flag to an existing release pipeline, or to monitor or update an
 * ongoing release for a flag. Updating an ongoing release generally involves the following steps:
 *
 * 1. Obtain the release phases associated with the release. The `phases` field provides an ordered
 *    list of all pipeline phases associated with the flag's release. `phases` is returned in the
 *    response when you [Create a new release for a
 *    flag](https://launchdarkly.com/docs/api/releases-beta/create-release-for-flag) or [Get the
 *    release for a flag](https://launchdarkly.com/docs/api/releases-beta/get-release-by-flag-key).
 *
 * 2. Determine the `_id` of the phase you want to start. Release pipeline phases take place in
 *    their configured order, so find the first incomplete, unstarted phase in the `phases` list.
 *    For example, in a newly-created release the first phase in the `phases` list has both the
 *    `complete` and `started` fields set to `false`.
 *
 * 3. Use the phase `_id` value with the [Update phase status for
 *    release](https://launchdarkly.com/docs/api/releases-beta/update-phase-status) endpoint to
 *    start the release phase. At a minimum, you must provide `{"status": active}` in the request
 *    object to start a pipeline phase. If the phase requires approvals or guarded rollouts, provide
 *    the additional required information in the `audiences` list.
 *
 * ### Configuring release pipelines
 *
 * Use the related [release pipelines API](https://launchdarkly.com/docs/api/release-pipelines-beta)
 * to view, create, update, and delete release pipelines, or to view the progress of all ongoing
 * releases across all flags in a project for a given release pipeline.
 */
export class ReleasesBeta {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new release for flag
   *
   * @remarks
   * Creates a release by adding a flag to a release pipeline
   *
   * @returns Release response
   *
   * @throws {@link ReleasesBeta.CreateReleaseForFlagError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createReleaseForFlag(
    request: ReleasesBeta.CreateReleaseForFlagRequest,
    options?: RequestOptions,
  ): ApiPromise<Release, ReleasesBeta.CreateReleaseForFlagError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/flags/{flagKey}/release"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "flagKey", value: request.flagKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createReleaseInputSchema },
      },
      {
        success: { kind: "json", schema: releaseSchema },
        errorFactory: ReleasesBeta.CreateReleaseForFlagError,
      },
      options,
    );
  }

  /**
   * Delete a release for flag
   *
   * @remarks
   * Deletes a release from a flag
   *
   * @returns Action succeeded
   *
   * @throws {@link ReleasesBeta.DeleteReleaseByFlagKeyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteReleaseByFlagKey(
    request: ReleasesBeta.DeleteReleaseByFlagKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ReleasesBeta.DeleteReleaseByFlagKeyError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v2/flags/{projectKey}/{flagKey}/release"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "flagKey", value: request.flagKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ReleasesBeta.DeleteReleaseByFlagKeyError,
      },
      options,
    );
  }

  /**
   * Get release for flag
   *
   * @remarks
   * Get currently active release for a flag
   *
   * @returns Release response
   *
   * @throws {@link ReleasesBeta.GetReleaseByFlagKeyError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getReleaseByFlagKey(
    request: ReleasesBeta.GetReleaseByFlagKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<Release, ReleasesBeta.GetReleaseByFlagKeyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/flags/{projectKey}/{flagKey}/release"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "flagKey", value: request.flagKey, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: releaseSchema },
        errorFactory: ReleasesBeta.GetReleaseByFlagKeyError,
      },
      options,
    );
  }

  /**
   * Patch release for flag
   *
   * @remarks
   * This endpoint is only available for releases that are part of a legacy release pipeline.
   * Releases for new release pipelines should use the [Update phase status for
   * release](https://launchdarkly.com/docs/api/releases-beta/update-phase-status) endpoint.
   *
   * Update currently active release for a flag. Updating releases requires the [JSON
   * patch](https://datatracker.ietf.org/doc/html/rfc6902) format. To learn more, read
   * [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * You can only use this endpoint to mark a release phase complete or incomplete. To indicate
   * which phase to update, use the array index in the `path`. For example, to mark the first phase
   * of a release as complete, use the following request body:
   *
   * ```
   *   [
   *     {
   *       "op": "replace",
   *       "path": "/phase/0/complete",
   *       "value": true
   *     }
   *   ]
   * ```
   *
   * @returns Release response
   *
   * @throws {@link ReleasesBeta.PatchReleaseByFlagKeyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchReleaseByFlagKey(
    request: ReleasesBeta.PatchReleaseByFlagKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<Release, ReleasesBeta.PatchReleaseByFlagKeyError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/flags/{projectKey}/{flagKey}/release"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "flagKey", value: request.flagKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.array(s.lazy(() => patchOperationSchema)) },
      },
      {
        success: { kind: "json", schema: releaseSchema },
        errorFactory: ReleasesBeta.PatchReleaseByFlagKeyError,
      },
      options,
    );
  }

  /**
   * Update phase status for release
   *
   * @remarks
   * Updates the execution status of a phase of a release
   *
   * @returns Action succeeded
   *
   * @throws {@link ReleasesBeta.UpdatePhaseStatusError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updatePhaseStatus(
    request: ReleasesBeta.UpdatePhaseStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<Release, ReleasesBeta.UpdatePhaseStatusError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/flags/{flagKey}/release/phases/{phaseId}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "flagKey", value: request.flagKey, schema: s.string() },
          { name: "phaseId", value: request.phaseId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updatePhaseStatusInputSchema },
      },
      {
        success: { kind: "json", schema: releaseSchema },
        errorFactory: ReleasesBeta.UpdatePhaseStatusError,
      },
      options,
    );
  }
}

export namespace ReleasesBeta {
  export type CreateReleaseForFlagRequest = {
    /** The project key */
    projectKey: string;
    /** The flag key */
    flagKey: string;
    body: CreateReleaseInput;
  };

  export class CreateReleaseForFlagError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateReleaseForFlagError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type DeleteReleaseByFlagKeyRequest = {
    /** The project key */
    projectKey: string;
    /** The flag key */
    flagKey: string;
  };

  export class DeleteReleaseByFlagKeyError extends ApiError {
    declare readonly payload:
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteReleaseByFlagKeyError> = [
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
    ];
  }

  export type GetReleaseByFlagKeyRequest = {
    /** The project key */
    projectKey: string;
    /** The flag key */
    flagKey: string;
  };

  export class GetReleaseByFlagKeyError extends ApiError {
    declare readonly payload: Declared<"notFoundErrorRep", NotFoundErrorRep> | Undeclared;

    static readonly errors: ErrorDecoders<GetReleaseByFlagKeyError> = [
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
    ];
  }

  export type PatchReleaseByFlagKeyRequest = {
    /** The project key */
    projectKey: string;
    /** The flag key */
    flagKey: string;
    body: PatchOperation[];
  };

  export class PatchReleaseByFlagKeyError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchReleaseByFlagKeyError> = [
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

  export type UpdatePhaseStatusRequest = {
    /** The project key */
    projectKey: string;
    /** The flag key */
    flagKey: string;
    /** The phase ID */
    phaseId: string;
    body: UpdatePhaseStatusInput;
  };

  export class UpdatePhaseStatusError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdatePhaseStatusError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }
}
