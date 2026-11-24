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
import {
  conflictErrorResponseSchema,
  type ConflictErrorResponse,
} from "../models/conflict-error-response.js";
import {
  featureDevCycleManagementMetricAssociationsApiInternalSchema,
  type FeatureDevCycleManagementMetricAssociationsApi,
} from "../models/feature-dev-cycle-management-metric-associations-api.js";
import {
  featureVariationDtoInternalSchema,
  type FeatureVariationDto,
} from "../models/feature-variation-dto.js";
import {
  notFoundErrorResponseSchema,
  type NotFoundErrorResponse,
} from "../models/not-found-error-response.js";
import {
  preconditionFailedErrorResponseSchema,
  type PreconditionFailedErrorResponse,
} from "../models/precondition-failed-error-response.js";
import {
  updateFeatureVariationDtoInternalSchema,
  type UpdateFeatureVariationDto,
} from "../models/update-feature-variation-dto.js";
import { variationInternalSchema, type Variation } from "../models/variation.js";
import type { Servers } from "../servers.js";

export class Variations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create a Feature Variation
   *
   * @remarks
   * Create a new variation within a Feature
   *
   * @throws {@link Variations.VariationsControllerCreateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  variationsControllerCreate(
    request: Variations.VariationsControllerCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<FeatureDevCycleManagementMetricAssociationsApi, Variations.VariationsControllerCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{project}/features/{feature}/variations"),
        auth: noneAuth,
        pathParams: [
          { name: "project", value: request.project, schema: s.string() },
          { name: "feature", value: request.feature, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: featureVariationDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: featureDevCycleManagementMetricAssociationsApiInternalSchema },
        errorFactory: Variations.VariationsControllerCreateError,
      },
      options,
    );
  }

  /**
   * List Feature Variations
   *
   * @remarks
   * Get a list of variations for a feature
   *
   * @throws {@link Variations.VariationsControllerFindAllError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  variationsControllerFindAll(
    request: Variations.VariationsControllerFindAllRequest,
    options?: RequestOptions,
  ): ApiPromise<Variation[], Variations.VariationsControllerFindAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project}/features/{feature}/variations"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => variationInternalSchema)) },
        errorFactory: Variations.VariationsControllerFindAllError,
      },
      options,
    );
  }

  /**
   * Get a Feature Variation
   *
   * @remarks
   * Get a variation by ID or key
   *
   * @throws {@link Variations.VariationsControllerFindOneError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  variationsControllerFindOne(
    request: Variations.VariationsControllerFindOneRequest,
    options?: RequestOptions,
  ): ApiPromise<Variation, Variations.VariationsControllerFindOneError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project}/features/{feature}/variations/{key}"),
        auth: noneAuth,
        pathParams: [
          { name: "key", value: request.key, schema: s.string() },
          { name: "feature", value: request.feature, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: variationInternalSchema },
        errorFactory: Variations.VariationsControllerFindOneError,
      },
      options,
    );
  }

  /**
   * Update a Feature Variation
   *
   * @remarks
   * Update a variation by ID or key
   *
   * @throws {@link Variations.VariationsControllerUpdateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  variationsControllerUpdate(
    request: Variations.VariationsControllerUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<FeatureDevCycleManagementMetricAssociationsApi, Variations.VariationsControllerUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v1/projects/{project}/features/{feature}/variations/{key}"),
        auth: noneAuth,
        pathParams: [
          { name: "key", value: request.key, schema: s.string() },
          { name: "feature", value: request.feature, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateFeatureVariationDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: featureDevCycleManagementMetricAssociationsApiInternalSchema },
        errorFactory: Variations.VariationsControllerUpdateError,
      },
      options,
    );
  }
}

export namespace Variations {
  export type VariationsControllerCreateRequest = {
    /** A Project key or ID */
    project: string;
    /** A Feature key or ID */
    feature: string;
    body: FeatureVariationDto;
  };

  export class VariationsControllerCreateError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"conflictErrorResponse", ConflictErrorResponse>
      | Declared<"preconditionFailedErrorResponse", PreconditionFailedErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<VariationsControllerCreateError> = [
      {
        on: 400,
        kind: "badRequestErrorResponse",
        decode: { kind: "json", schema: badRequestErrorResponseSchema },
      },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      {
        on: 409,
        kind: "conflictErrorResponse",
        decode: { kind: "json", schema: conflictErrorResponseSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedErrorResponse",
        decode: { kind: "json", schema: preconditionFailedErrorResponseSchema },
      },
    ];
  }

  export type VariationsControllerFindAllRequest = {
    /** A Feature key or ID */
    feature: string;
    /** A Project key or ID */
    project: string;
  };

  export class VariationsControllerFindAllError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<VariationsControllerFindAllError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type VariationsControllerFindOneRequest = {
    /** A Variation key or ID */
    key: string;
    /** A Feature key or ID */
    feature: string;
    /** A Project key or ID */
    project: string;
  };

  export class VariationsControllerFindOneError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<VariationsControllerFindOneError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      {
        on: 404,
        kind: "notFoundErrorResponse",
        decode: { kind: "json", schema: notFoundErrorResponseSchema },
      },
    ];
  }

  export type VariationsControllerUpdateRequest = {
    /** A Feature key or ID */
    key: string;
    /** A Feature key or ID */
    feature: string;
    /** A Project key or ID */
    project: string;
    body: UpdateFeatureVariationDto;
  };

  export class VariationsControllerUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Declared<"conflictErrorResponse", ConflictErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<VariationsControllerUpdateError> = [
      {
        on: 400,
        kind: "badRequestErrorResponse",
        decode: { kind: "json", schema: badRequestErrorResponseSchema },
      },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      {
        on: 404,
        kind: "notFoundErrorResponse",
        decode: { kind: "json", schema: notFoundErrorResponseSchema },
      },
      {
        on: 409,
        kind: "conflictErrorResponse",
        decode: { kind: "json", schema: conflictErrorResponseSchema },
      },
    ];
  }
}
