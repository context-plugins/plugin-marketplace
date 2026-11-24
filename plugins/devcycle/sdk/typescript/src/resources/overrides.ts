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
import { featureOverridesSchema, type FeatureOverrides } from "../models/feature-overrides.js";
import { overrideResponseSchema, type OverrideResponse } from "../models/override-response.js";
import { overrideSchema, type Override } from "../models/override.js";
import { updateOverrideDtoSchema, type UpdateOverrideDto } from "../models/update-override-dto.js";
import { userOverrideSchema, type UserOverride } from "../models/user-override.js";
import type { Servers } from "../servers.js";

export class Overrides {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Delete override for specific feature and environment for the current user
   *
   * @throws {@link Overrides.OverridesControllerDeleteOverridesForFeatureError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  overridesControllerDeleteOverridesForFeature(
    request: Overrides.OverridesControllerDeleteOverridesForFeatureRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Overrides.OverridesControllerDeleteOverridesForFeatureError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/projects/{project}/features/{feature}/overrides/current"),
        auth: noneAuth,
        pathParams: [
          { name: "feature", value: request.feature, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [{ name: "environment", value: request.environment, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Overrides.OverridesControllerDeleteOverridesForFeatureError,
      },
      options,
    );
  }

  /**
   * Delete all overrides for project for current user
   *
   * @throws {@link Overrides.OverridesControllerDeleteOverridesForProjectError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  overridesControllerDeleteOverridesForProject(
    request: Overrides.OverridesControllerDeleteOverridesForProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Overrides.OverridesControllerDeleteOverridesForProjectError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/projects/{project}/overrides/current"),
        auth: noneAuth,
        pathParams: [{ name: "project", value: request.project, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Overrides.OverridesControllerDeleteOverridesForProjectError,
      },
      options,
    );
  }

  /**
   * Get feature overrides for current user
   *
   * @throws {@link Overrides.OverridesControllerFindOneError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  overridesControllerFindOne(
    request: Overrides.OverridesControllerFindOneRequest,
    options?: RequestOptions,
  ): ApiPromise<OverrideResponse, Overrides.OverridesControllerFindOneError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project}/features/{feature}/overrides/current"),
        auth: noneAuth,
        pathParams: [
          { name: "feature", value: request.feature, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: overrideResponseSchema },
        errorFactory: Overrides.OverridesControllerFindOneError,
      },
      options,
    );
  }

  /**
   * Get overrides for feature
   *
   * @throws {@link Overrides.OverridesControllerFindOverridesForFeatureError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  overridesControllerFindOverridesForFeature(
    request: Overrides.OverridesControllerFindOverridesForFeatureRequest,
    options?: RequestOptions,
  ): ApiPromise<FeatureOverrides, Overrides.OverridesControllerFindOverridesForFeatureError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project}/features/{feature}/overrides"),
        auth: noneAuth,
        pathParams: [
          { name: "feature", value: request.feature, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [
          { name: "addMetadata", value: request.addMetadata, schema: s.optional(s.boolean()) },
          { name: "environment", value: request.environment, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: featureOverridesSchema },
        errorFactory: Overrides.OverridesControllerFindOverridesForFeatureError,
      },
      options,
    );
  }

  /**
   * Get all overrides for project for current user
   *
   * @throws {@link Overrides.OverridesControllerFindOverridesForProjectError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  overridesControllerFindOverridesForProject(
    request: Overrides.OverridesControllerFindOverridesForProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<UserOverride[], Overrides.OverridesControllerFindOverridesForProjectError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project}/overrides/current"),
        auth: noneAuth,
        pathParams: [{ name: "project", value: request.project, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => userOverrideSchema)) },
        errorFactory: Overrides.OverridesControllerFindOverridesForProjectError,
      },
      options,
    );
  }

  /**
   * Update Overrides for the Current User
   *
   * @throws {@link Overrides.OverridesControllerUpdateFeatureOverrideError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  overridesControllerUpdateFeatureOverride(
    request: Overrides.OverridesControllerUpdateFeatureOverrideRequest,
    options?: RequestOptions,
  ): ApiPromise<Override, Overrides.OverridesControllerUpdateFeatureOverrideError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v1/projects/{project}/features/{feature}/overrides/current"),
        auth: noneAuth,
        pathParams: [
          { name: "feature", value: request.feature, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateOverrideDtoSchema },
      },
      {
        success: { kind: "json", schema: overrideSchema },
        errorFactory: Overrides.OverridesControllerUpdateFeatureOverrideError,
      },
      options,
    );
  }
}

export namespace Overrides {
  export type OverridesControllerDeleteOverridesForFeatureRequest = {
    /** A Feature key or ID */
    feature: string;
    /** A Project key or ID */
    project: string;
    /** A Environment key or ID */
    environment: string;
  };

  export class OverridesControllerDeleteOverridesForFeatureError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<OverridesControllerDeleteOverridesForFeatureError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type OverridesControllerDeleteOverridesForProjectRequest = {
    /** A Project key or ID */
    project: string;
  };

  export class OverridesControllerDeleteOverridesForProjectError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<OverridesControllerDeleteOverridesForProjectError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type OverridesControllerFindOneRequest = {
    /** A Feature key or ID */
    feature: string;
    /** A Project key or ID */
    project: string;
  };

  export class OverridesControllerFindOneError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<OverridesControllerFindOneError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type OverridesControllerFindOverridesForFeatureRequest = {
    /** A Feature key or ID */
    feature: string;
    /** A Project key or ID */
    project: string;
    addMetadata?: boolean;
    /** A Environment key or ID */
    environment?: string;
  };

  export class OverridesControllerFindOverridesForFeatureError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<OverridesControllerFindOverridesForFeatureError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type OverridesControllerFindOverridesForProjectRequest = {
    /** A Project key or ID */
    project: string;
  };

  export class OverridesControllerFindOverridesForProjectError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<OverridesControllerFindOverridesForProjectError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type OverridesControllerUpdateFeatureOverrideRequest = {
    /** A Feature key or ID */
    feature: string;
    /** A Project key or ID */
    project: string;
    body: UpdateOverrideDto;
  };

  export class OverridesControllerUpdateFeatureOverrideError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<OverridesControllerUpdateFeatureOverrideError> = [
      {
        on: 400,
        kind: "badRequestErrorResponse",
        decode: { kind: "json", schema: badRequestErrorResponseSchema },
      },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
