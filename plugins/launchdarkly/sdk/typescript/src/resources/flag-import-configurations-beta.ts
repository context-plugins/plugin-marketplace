import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  flagImportConfigurationPostSchema,
  type FlagImportConfigurationPost,
} from "../models/flag-import-configuration-post.js";
import {
  flagImportIntegrationCollectionSchema,
  type FlagImportIntegrationCollection,
} from "../models/flag-import-integration-collection.js";
import {
  flagImportIntegrationSchema,
  type FlagImportIntegration,
} from "../models/flag-import-integration.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import {
  invalidRequestErrorRepSchema,
  type InvalidRequestErrorRep,
} from "../models/invalid-request-error-rep.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import { patchOperationSchema, type PatchOperation } from "../models/patch-operation.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import {
  statusConflictErrorRepSchema,
  type StatusConflictErrorRep,
} from "../models/status-conflict-error-rep.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import type { Servers } from "../servers.js";

/**
 * > ### This feature is in beta > > To use this feature, pass in a header including the
 * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
 * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
 * in beta are still undergoing testing and development. They may change without notice, including
 * becoming backwards incompatible.
 *
 * Flag import configurations allow you to import feature flags from another feature management
 * system.
 *
 * Use the flag import configuration endpoints to create, delete, and manage flag import
 * configurations. You can import flags from other feature management tools into LaunchDarkly. For
 * example, you can import flags from Split.io.
 *
 * Several of the endpoints in the flag import configuration API require an integration ID. The
 * integration ID is returned as part of the [Create a flag import
 * configuration](https://launchdarkly.com/docs/api/flag-import-configurations-beta/create-flag-import-configuration)
 * response, in the `_id` field. It is also returned as part of the [List all flag import
 * configurations](https://launchdarkly.com/docs/api/flag-import-configurations-beta/get-flag-import-configurations)
 * response, in the `_id` field of each element in the `items` array.
 *
 * To learn more about flag import configurations, read [Import
 * flags](https://launchdarkly.com/docs/home/flags/import).
 */
export class FlagImportConfigurationsBeta {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a flag import configuration
   *
   * @remarks
   * Create a new flag import configuration. The `integrationKey` path parameter identifies the
   * feature management system from which the import occurs, for example, `split`. The `config`
   * object in the request body schema is described by the global integration settings, as specified
   * by the <code>formVariables</code> in the <code>manifest.json</code> for this integration. It
   * varies slightly based on the `integrationKey`.
   *
   * @returns Flag Import Configuration response
   *
   * @throws {@link FlagImportConfigurationsBeta.CreateFlagImportConfigurationError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createFlagImportConfiguration(
    request: FlagImportConfigurationsBeta.CreateFlagImportConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<FlagImportIntegration, FlagImportConfigurationsBeta.CreateFlagImportConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "integrationKey", value: request.integrationKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: flagImportConfigurationPostSchema },
      },
      {
        success: { kind: "json", schema: flagImportIntegrationSchema },
        errorFactory: FlagImportConfigurationsBeta.CreateFlagImportConfigurationError,
      },
      options,
    );
  }

  /**
   * Delete a flag import configuration
   *
   * @remarks
   * Delete a flag import configuration by ID. The `integrationKey` path parameter identifies the
   * feature management system from which the import occurs, for example, `split`.
   *
   * @returns Action completed successfully
   *
   * @throws {@link FlagImportConfigurationsBeta.DeleteFlagImportConfigurationError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteFlagImportConfiguration(
    request: FlagImportConfigurationsBeta.DeleteFlagImportConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, FlagImportConfigurationsBeta.DeleteFlagImportConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}/{integrationId}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "integrationKey", value: request.integrationKey, schema: s.string() },
          { name: "integrationId", value: request.integrationId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FlagImportConfigurationsBeta.DeleteFlagImportConfigurationError,
      },
      options,
    );
  }

  /**
   * Get a single flag import configuration
   *
   * @remarks
   * Get a single flag import configuration by ID. The `integrationKey` path parameter identifies
   * the feature management system from which the import occurs, for example, `split`.
   *
   * @returns Flag import response
   *
   * @throws {@link FlagImportConfigurationsBeta.GetFlagImportConfigurationError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getFlagImportConfiguration(
    request: FlagImportConfigurationsBeta.GetFlagImportConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<FlagImportIntegration, FlagImportConfigurationsBeta.GetFlagImportConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}/{integrationId}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "integrationKey", value: request.integrationKey, schema: s.string() },
          { name: "integrationId", value: request.integrationId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flagImportIntegrationSchema },
        errorFactory: FlagImportConfigurationsBeta.GetFlagImportConfigurationError,
      },
      options,
    );
  }

  /**
   * List all flag import configurations
   *
   * @remarks
   * List all flag import configurations.
   *
   * @returns Flag Import Configuration response
   *
   * @throws {@link FlagImportConfigurationsBeta.GetFlagImportConfigurationsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getFlagImportConfigurations(
    options?: RequestOptions,
  ): ApiPromise<
    FlagImportIntegrationCollection,
    FlagImportConfigurationsBeta.GetFlagImportConfigurationsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/integration-capabilities/flag-import"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flagImportIntegrationCollectionSchema },
        errorFactory: FlagImportConfigurationsBeta.GetFlagImportConfigurationsError,
      },
      options,
    );
  }

  /**
   * Update a flag import configuration
   *
   * @remarks
   * Updating a flag import configuration uses a [JSON
   * patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To
   * learn more, read [Updates](https://launchdarkly.com/docs/api#updates).<br/><br/>To add an
   * element to the import configuration fields that are arrays, set the `path` to the name of the
   * field and then append `/<array index>`. Use `/0` to add to the beginning of the array. Use `/-`
   * to add to the end of the array.<br/><br/>You can update the `config`, `tags`, and `name` of the
   * flag import configuration.
   *
   * @returns Flag import response
   *
   * @throws {@link FlagImportConfigurationsBeta.PatchFlagImportConfigurationError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchFlagImportConfiguration(
    request: FlagImportConfigurationsBeta.PatchFlagImportConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<FlagImportIntegration, FlagImportConfigurationsBeta.PatchFlagImportConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}/{integrationId}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "integrationKey", value: request.integrationKey, schema: s.string() },
          { name: "integrationId", value: request.integrationId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.array(s.lazy(() => patchOperationSchema)) },
      },
      {
        success: { kind: "json", schema: flagImportIntegrationSchema },
        errorFactory: FlagImportConfigurationsBeta.PatchFlagImportConfigurationError,
      },
      options,
    );
  }

  /**
   * Trigger a single flag import run
   *
   * @remarks
   * Trigger a single flag import run for an existing flag import configuration. The
   * `integrationKey` path parameter identifies the feature management system from which the import
   * occurs, for example, `split`.
   *
   * @returns Import job queued successfully
   *
   * @throws {@link FlagImportConfigurationsBeta.TriggerFlagImportJobError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  triggerFlagImportJob(
    request: FlagImportConfigurationsBeta.TriggerFlagImportJobRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, FlagImportConfigurationsBeta.TriggerFlagImportJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}/{integrationId}/trigger",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "integrationKey", value: request.integrationKey, schema: s.string() },
          { name: "integrationId", value: request.integrationId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FlagImportConfigurationsBeta.TriggerFlagImportJobError,
      },
      options,
    );
  }
}

export namespace FlagImportConfigurationsBeta {
  export type CreateFlagImportConfigurationRequest = {
    /** The project key */
    projectKey: string;
    /** The integration key */
    integrationKey: string;
    body: FlagImportConfigurationPost;
  };

  export class CreateFlagImportConfigurationError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateFlagImportConfigurationError> = [
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

  export type DeleteFlagImportConfigurationRequest = {
    /** The project key */
    projectKey: string;
    /** The integration key */
    integrationKey: string;
    /** The integration ID */
    integrationId: string;
  };

  export class DeleteFlagImportConfigurationError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteFlagImportConfigurationError> = [
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

  export type GetFlagImportConfigurationRequest = {
    /** The project key */
    projectKey: string;
    /** The integration key, for example, `split` */
    integrationKey: string;
    /** The integration ID */
    integrationId: string;
  };

  export class GetFlagImportConfigurationError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFlagImportConfigurationError> = [
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

  export class GetFlagImportConfigurationsError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFlagImportConfigurationsError> = [
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

  export type PatchFlagImportConfigurationRequest = {
    /** The project key */
    projectKey: string;
    /** The integration key */
    integrationKey: string;
    /** The integration ID */
    integrationId: string;
    body: PatchOperation[];
  };

  export class PatchFlagImportConfigurationError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchFlagImportConfigurationError> = [
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

  export type TriggerFlagImportJobRequest = {
    /** The project key */
    projectKey: string;
    /** The integration key */
    integrationKey: string;
    /** The integration ID */
    integrationId: string;
  };

  export class TriggerFlagImportJobError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<TriggerFlagImportJobError> = [
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
