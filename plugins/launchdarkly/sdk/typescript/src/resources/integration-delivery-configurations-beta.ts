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
  integrationDeliveryConfigurationCollectionSchema,
  type IntegrationDeliveryConfigurationCollection,
} from "../models/integration-delivery-configuration-collection.js";
import {
  integrationDeliveryConfigurationPostSchema,
  type IntegrationDeliveryConfigurationPost,
} from "../models/integration-delivery-configuration-post.js";
import {
  integrationDeliveryConfigurationResponseSchema,
  type IntegrationDeliveryConfigurationResponse,
} from "../models/integration-delivery-configuration-response.js";
import {
  integrationDeliveryConfigurationSchema,
  type IntegrationDeliveryConfiguration,
} from "../models/integration-delivery-configuration.js";
import {
  invalidRequestErrorRepSchema,
  type InvalidRequestErrorRep,
} from "../models/invalid-request-error-rep.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import { patchFailedErrorRepSchema, type PatchFailedErrorRep } from "../models/patch-failed-error-rep.js";
import { patchOperationSchema, type PatchOperation } from "../models/patch-operation.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
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
 * The integration delivery configurations API allow you to create, modify, validate, and delete
 * delivery configurations.
 *
 * Several of the endpoints require a delivery configuration ID. The delivery configuration ID is
 * returned as part of the [Create delivery
 * configuration](https://launchdarkly.com/docs/api/integration-delivery-configurations-beta/create-integration-delivery-configuration)
 * and [List all delivery
 * configurations](https://launchdarkly.com/docs/api/integration-delivery-configurations-beta/get-integration-delivery-configurations)
 * responses. It is the `_id` field, or the `_id` field of each element in the `items` array.
 */
export class IntegrationDeliveryConfigurationsBeta {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create delivery configuration
   *
   * @remarks
   * Create a delivery configuration.
   *
   * @returns Integration delivery configuration response
   *
   * @throws {@link
   * IntegrationDeliveryConfigurationsBeta.CreateIntegrationDeliveryConfigurationError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createIntegrationDeliveryConfiguration(
    request: IntegrationDeliveryConfigurationsBeta.CreateIntegrationDeliveryConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<
    IntegrationDeliveryConfiguration,
    IntegrationDeliveryConfigurationsBeta.CreateIntegrationDeliveryConfigurationError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "integrationKey", value: request.integrationKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: integrationDeliveryConfigurationPostSchema },
      },
      {
        success: { kind: "json", schema: integrationDeliveryConfigurationSchema },
        errorFactory: IntegrationDeliveryConfigurationsBeta.CreateIntegrationDeliveryConfigurationError,
      },
      options,
    );
  }

  /**
   * Delete delivery configuration
   *
   * @remarks
   * Delete a delivery configuration.
   *
   * @returns Action succeeded
   *
   * @throws {@link
   * IntegrationDeliveryConfigurationsBeta.DeleteIntegrationDeliveryConfigurationError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteIntegrationDeliveryConfiguration(
    request: IntegrationDeliveryConfigurationsBeta.DeleteIntegrationDeliveryConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<
    undefined,
    IntegrationDeliveryConfigurationsBeta.DeleteIntegrationDeliveryConfigurationError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "integrationKey", value: request.integrationKey, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: IntegrationDeliveryConfigurationsBeta.DeleteIntegrationDeliveryConfigurationError,
      },
      options,
    );
  }

  /**
   * Get delivery configurations by environment
   *
   * @remarks
   * Get delivery configurations by environment.
   *
   * @returns Integration delivery configuration collection response
   *
   * @throws {@link
   * IntegrationDeliveryConfigurationsBeta.GetIntegrationDeliveryConfigurationByEnvironmentError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getIntegrationDeliveryConfigurationByEnvironment(
    request: IntegrationDeliveryConfigurationsBeta.GetIntegrationDeliveryConfigurationByEnvironmentRequest,
    options?: RequestOptions,
  ): ApiPromise<
    IntegrationDeliveryConfigurationCollection,
    IntegrationDeliveryConfigurationsBeta.GetIntegrationDeliveryConfigurationByEnvironmentError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}",
        ),
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
        success: { kind: "json", schema: integrationDeliveryConfigurationCollectionSchema },
        errorFactory:
          IntegrationDeliveryConfigurationsBeta.GetIntegrationDeliveryConfigurationByEnvironmentError,
      },
      options,
    );
  }

  /**
   * Get delivery configuration by ID
   *
   * @remarks
   * Get delivery configuration by ID.
   *
   * @returns Integration delivery configuration response
   *
   * @throws {@link
   * IntegrationDeliveryConfigurationsBeta.GetIntegrationDeliveryConfigurationByIdError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getIntegrationDeliveryConfigurationById(
    request: IntegrationDeliveryConfigurationsBeta.GetIntegrationDeliveryConfigurationByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    IntegrationDeliveryConfiguration,
    IntegrationDeliveryConfigurationsBeta.GetIntegrationDeliveryConfigurationByIdError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "integrationKey", value: request.integrationKey, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: integrationDeliveryConfigurationSchema },
        errorFactory: IntegrationDeliveryConfigurationsBeta.GetIntegrationDeliveryConfigurationByIdError,
      },
      options,
    );
  }

  /**
   * List all delivery configurations
   *
   * @remarks
   * List all delivery configurations.
   *
   * @returns Integration delivery configuration collection response
   *
   * @throws {@link IntegrationDeliveryConfigurationsBeta.GetIntegrationDeliveryConfigurationsError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getIntegrationDeliveryConfigurations(
    options?: RequestOptions,
  ): ApiPromise<
    IntegrationDeliveryConfigurationCollection,
    IntegrationDeliveryConfigurationsBeta.GetIntegrationDeliveryConfigurationsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/integration-capabilities/featureStore"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: integrationDeliveryConfigurationCollectionSchema },
        errorFactory: IntegrationDeliveryConfigurationsBeta.GetIntegrationDeliveryConfigurationsError,
      },
      options,
    );
  }

  /**
   * Update delivery configuration
   *
   * @remarks
   * Update an integration delivery configuration. Updating an integration delivery configuration
   * uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the
   * desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * @returns Integration delivery configuration response
   *
   * @throws {@link
   * IntegrationDeliveryConfigurationsBeta.PatchIntegrationDeliveryConfigurationError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchIntegrationDeliveryConfiguration(
    request: IntegrationDeliveryConfigurationsBeta.PatchIntegrationDeliveryConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<
    IntegrationDeliveryConfiguration,
    IntegrationDeliveryConfigurationsBeta.PatchIntegrationDeliveryConfigurationError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "integrationKey", value: request.integrationKey, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.array(s.lazy(() => patchOperationSchema)) },
      },
      {
        success: { kind: "json", schema: integrationDeliveryConfigurationSchema },
        errorFactory: IntegrationDeliveryConfigurationsBeta.PatchIntegrationDeliveryConfigurationError,
      },
      options,
    );
  }

  /**
   * Validate delivery configuration
   *
   * @remarks
   * Validate the saved delivery configuration, using the `validationRequest` in the integration's
   * `manifest.json` file.
   *
   * @returns Integration delivery configuration validation response
   *
   * @throws {@link
   * IntegrationDeliveryConfigurationsBeta.ValidateIntegrationDeliveryConfigurationError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  validateIntegrationDeliveryConfiguration(
    request: IntegrationDeliveryConfigurationsBeta.ValidateIntegrationDeliveryConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<
    IntegrationDeliveryConfigurationResponse,
    IntegrationDeliveryConfigurationsBeta.ValidateIntegrationDeliveryConfigurationError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id}/validate",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "integrationKey", value: request.integrationKey, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: integrationDeliveryConfigurationResponseSchema },
        errorFactory: IntegrationDeliveryConfigurationsBeta.ValidateIntegrationDeliveryConfigurationError,
      },
      options,
    );
  }
}

export namespace IntegrationDeliveryConfigurationsBeta {
  export type CreateIntegrationDeliveryConfigurationRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The integration key */
    integrationKey: string;
    body: IntegrationDeliveryConfigurationPost;
  };

  export class CreateIntegrationDeliveryConfigurationError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateIntegrationDeliveryConfigurationError> = [
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

  export type DeleteIntegrationDeliveryConfigurationRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The integration key */
    integrationKey: string;
    /** The configuration ID */
    id: string;
  };

  export class DeleteIntegrationDeliveryConfigurationError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteIntegrationDeliveryConfigurationError> = [
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

  export type GetIntegrationDeliveryConfigurationByEnvironmentRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
  };

  export class GetIntegrationDeliveryConfigurationByEnvironmentError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetIntegrationDeliveryConfigurationByEnvironmentError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetIntegrationDeliveryConfigurationByIdRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The integration key */
    integrationKey: string;
    /** The configuration ID */
    id: string;
  };

  export class GetIntegrationDeliveryConfigurationByIdError extends ApiError {
    declare readonly payload:
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetIntegrationDeliveryConfigurationByIdError> = [
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export class GetIntegrationDeliveryConfigurationsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetIntegrationDeliveryConfigurationsError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PatchIntegrationDeliveryConfigurationRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The integration key */
    integrationKey: string;
    /** The configuration ID */
    id: string;
    body: PatchOperation[];
  };

  export class PatchIntegrationDeliveryConfigurationError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"patchFailedErrorRep", PatchFailedErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchIntegrationDeliveryConfigurationError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 422, kind: "patchFailedErrorRep", decode: { kind: "json", schema: patchFailedErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type ValidateIntegrationDeliveryConfigurationRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The integration key */
    integrationKey: string;
    /** The configuration ID */
    id: string;
  };

  export class ValidateIntegrationDeliveryConfigurationError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<ValidateIntegrationDeliveryConfigurationError> = [
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
}
