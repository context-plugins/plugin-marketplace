import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import {
  integrationConfigurationCollectionRepSchema,
  type IntegrationConfigurationCollectionRep,
} from "../models/integration-configuration-collection-rep.js";
import {
  integrationConfigurationPostSchema,
  type IntegrationConfigurationPost,
} from "../models/integration-configuration-post.js";
import {
  integrationConfigurationsRepSchema,
  type IntegrationConfigurationsRep,
} from "../models/integration-configurations-rep.js";
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
 *
 * > ### This feature is in beta > > To use this feature, pass in a header including the
 * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
 * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
 * in beta are still undergoing testing and development. They may change without notice, including
 * becoming backwards incompatible.
 *
 * > ### Integration configuration is an Enterprise feature > > Integration configuration is
 * available to customers on an Enterprise plan. To learn more, [read about our
 * pricing](https://launchdarkly.com/pricing/). To upgrade your plan, [contact
 * Sales](https://launchdarkly.com/contact-sales/).
 *
 * You can use the integrations API to create, delete, and manage integration configurations.
 *
 * An integration configuration stores and manages configuration details for an integration between
 * LaunchDarkly and a third-party application. To learn more about building an integration, read
 * [Using the LaunchDarkly integration
 * framework](https://launchdarkly.com/docs/integrations/building-integrations) and [Building
 * partner integrations](https://launchdarkly.com/docs/integrations/partner-integrations).
 */
export class IntegrationsBeta {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create integration configuration
   *
   * @remarks
   * Create a new integration configuration. (Excludes [persistent
   * store](https://launchdarkly.com/docs/api/persistent-store-integrations-beta) and [flag import
   * configurations](https://launchdarkly.com/docs/api/flag-import-configurations-beta).)
   *
   * @returns Integration Configuration response
   *
   * @throws {@link IntegrationsBeta.CreateIntegrationConfigurationError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createIntegrationConfiguration(
    request: IntegrationsBeta.CreateIntegrationConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<IntegrationConfigurationsRep, IntegrationsBeta.CreateIntegrationConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/integration-configurations/keys/{integrationKey}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "integrationKey", value: request.integrationKey, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: integrationConfigurationPostSchema },
      },
      {
        success: { kind: "json", schema: integrationConfigurationsRepSchema },
        errorFactory: IntegrationsBeta.CreateIntegrationConfigurationError,
      },
      options,
    );
  }

  /**
   * Delete integration configuration
   *
   * @remarks
   * Delete an integration configuration by ID. (Excludes [persistent
   * store](https://launchdarkly.com/docs/api/persistent-store-integrations-beta) and [flag import
   * configurations](https://launchdarkly.com/docs/api/flag-import-configurations-beta).)
   *
   * @returns Action succeeded
   *
   * @throws {@link IntegrationsBeta.DeleteIntegrationConfigurationError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteIntegrationConfiguration(
    request: IntegrationsBeta.DeleteIntegrationConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, IntegrationsBeta.DeleteIntegrationConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v2/integration-configurations/{integrationConfigurationId}"),
        auth: this.#auth.apiKey,
        pathParams: [
          {
            name: "integrationConfigurationId",
            value: request.integrationConfigurationId,
            schema: s.string(),
          },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: IntegrationsBeta.DeleteIntegrationConfigurationError,
      },
      options,
    );
  }

  /**
   * Get all configurations for the integration
   *
   * @remarks
   * Get all integration configurations with the specified integration key. (Excludes [persistent
   * store](https://launchdarkly.com/docs/api/persistent-store-integrations-beta) and [flag import
   * configurations](https://launchdarkly.com/docs/api/flag-import-configurations-beta).).
   *
   * @returns List of Integration Configurations
   *
   * @throws {@link IntegrationsBeta.GetAllIntegrationConfigurationsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getAllIntegrationConfigurations(
    request: IntegrationsBeta.GetAllIntegrationConfigurationsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    IntegrationConfigurationCollectionRep,
    IntegrationsBeta.GetAllIntegrationConfigurationsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/integration-configurations/keys/{integrationKey}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "integrationKey", value: request.integrationKey, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: integrationConfigurationCollectionRepSchema },
        errorFactory: IntegrationsBeta.GetAllIntegrationConfigurationsError,
      },
      options,
    );
  }

  /**
   * Get an integration configuration
   *
   * @remarks
   * Get integration configuration with the specified ID. (Excludes [persistent
   * store](https://launchdarkly.com/docs/api/persistent-store-integrations-beta) and [flag import
   * configurations](https://launchdarkly.com/docs/api/flag-import-configurations-beta).)
   *
   * @returns Integration Configuration response
   *
   * @throws {@link IntegrationsBeta.GetIntegrationConfigurationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getIntegrationConfiguration(
    request: IntegrationsBeta.GetIntegrationConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<IntegrationConfigurationsRep, IntegrationsBeta.GetIntegrationConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/integration-configurations/{integrationConfigurationId}"),
        auth: this.#auth.apiKey,
        pathParams: [
          {
            name: "integrationConfigurationId",
            value: request.integrationConfigurationId,
            schema: s.string(),
          },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: integrationConfigurationsRepSchema },
        errorFactory: IntegrationsBeta.GetIntegrationConfigurationError,
      },
      options,
    );
  }

  /**
   * Update integration configuration
   *
   * @remarks
   * Update an integration configuration. Updating an integration configuration uses a [JSON
   * patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To
   * learn more, read [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * @returns Integration configuration response
   *
   * @throws {@link IntegrationsBeta.UpdateIntegrationConfigurationError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateIntegrationConfiguration(
    request: IntegrationsBeta.UpdateIntegrationConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<IntegrationConfigurationsRep, IntegrationsBeta.UpdateIntegrationConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/integration-configurations/{integrationConfigurationId}"),
        auth: this.#auth.apiKey,
        pathParams: [
          {
            name: "integrationConfigurationId",
            value: request.integrationConfigurationId,
            schema: s.string(),
          },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.array(s.lazy(() => patchOperationSchema)) },
      },
      {
        success: { kind: "json", schema: integrationConfigurationsRepSchema },
        errorFactory: IntegrationsBeta.UpdateIntegrationConfigurationError,
      },
      options,
    );
  }
}

export namespace IntegrationsBeta {
  export type CreateIntegrationConfigurationRequest = {
    /** The integration key */
    integrationKey: string;
    body: IntegrationConfigurationPost;
  };

  export class CreateIntegrationConfigurationError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateIntegrationConfigurationError> = [
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

  export type DeleteIntegrationConfigurationRequest = {
    /** The ID of the integration configuration to be deleted */
    integrationConfigurationId: string;
  };

  export class DeleteIntegrationConfigurationError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteIntegrationConfigurationError> = [
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

  export type GetAllIntegrationConfigurationsRequest = {
    /** Integration key */
    integrationKey: string;
  };

  export class GetAllIntegrationConfigurationsError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAllIntegrationConfigurationsError> = [
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

  export type GetIntegrationConfigurationRequest = {
    /** Integration configuration ID */
    integrationConfigurationId: string;
  };

  export class GetIntegrationConfigurationError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetIntegrationConfigurationError> = [
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

  export type UpdateIntegrationConfigurationRequest = {
    /** The ID of the integration configuration */
    integrationConfigurationId: string;
    body: PatchOperation[];
  };

  export class UpdateIntegrationConfigurationError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateIntegrationConfigurationError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
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
