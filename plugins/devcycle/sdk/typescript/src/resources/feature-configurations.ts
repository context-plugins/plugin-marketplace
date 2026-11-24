import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  badRequestErrorResponseSchema,
  type BadRequestErrorResponse,
} from "../models/bad-request-error-response.js";
import { featureConfigInternalSchema, type FeatureConfig } from "../models/feature-config.js";
import {
  notFoundErrorResponseSchema,
  type NotFoundErrorResponse,
} from "../models/not-found-error-response.js";
import {
  updateFeatureConfigDtoInternalSchema,
  type UpdateFeatureConfigDto,
} from "../models/update-feature-config-dto.js";
import type { Servers } from "../servers.js";

export class FeatureConfigurations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * List Feature configurations
   *
   * @remarks
   * List Feature configurations for all environments or by environment key or ID
   *
   * @throws {@link FeatureConfigurations.FeatureConfigsControllerFindAllError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  featureConfigsControllerFindAll(
    request: FeatureConfigurations.FeatureConfigsControllerFindAllRequest,
    options?: RequestOptions,
  ): ApiPromise<FeatureConfig[], FeatureConfigurations.FeatureConfigsControllerFindAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project}/features/{feature}/configurations"),
        auth: noneAuth,
        pathParams: [
          { name: "feature", value: request.feature, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [{ name: "environment", value: request.environment, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => featureConfigInternalSchema)) },
        errorFactory: FeatureConfigurations.FeatureConfigsControllerFindAllError,
      },
      options,
    );
  }

  /**
   * Update a Feature configuration
   *
   * @remarks
   * Update a Feature configuration by environment key or ID
   *
   * @throws {@link FeatureConfigurations.FeatureConfigsControllerUpdateError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  featureConfigsControllerUpdate(
    request: FeatureConfigurations.FeatureConfigsControllerUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<FeatureConfig, FeatureConfigurations.FeatureConfigsControllerUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v1/projects/{project}/features/{feature}/configurations"),
        auth: noneAuth,
        pathParams: [
          { name: "feature", value: request.feature, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [{ name: "environment", value: request.environment, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateFeatureConfigDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: featureConfigInternalSchema },
        errorFactory: FeatureConfigurations.FeatureConfigsControllerUpdateError,
      },
      options,
    );
  }
}

export namespace FeatureConfigurations {
  export type FeatureConfigsControllerFindAllRequest = {
    /** A Feature key or ID */
    feature: string;
    /** A Project key or ID */
    project: string;
    /** A Environment key or ID */
    environment?: string;
  };

  export class FeatureConfigsControllerFindAllError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<FeatureConfigsControllerFindAllError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type FeatureConfigsControllerUpdateRequest = {
    /** A Feature key or ID */
    feature: string;
    /** A Project key or ID */
    project: string;
    /** A Environment key or ID */
    environment: string;
    body: UpdateFeatureConfigDto;
  };

  export class FeatureConfigsControllerUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<FeatureConfigsControllerUpdateError> = [
      {
        on: 400,
        kind: "badRequestErrorResponse",
        decode: { kind: "json", schema: badRequestErrorResponseSchema },
      },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      {
        on: 404,
        kind: "notFoundErrorResponse",
        decode: { kind: "json", schema: notFoundErrorResponseSchema },
      },
    ];
  }
}
