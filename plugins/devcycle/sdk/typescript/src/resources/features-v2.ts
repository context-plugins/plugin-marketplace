import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  badRequestErrorResponseSchema,
  type BadRequestErrorResponse,
} from "../models/bad-request-error-response.js";
import {
  conflictErrorResponseSchema,
  type ConflictErrorResponse,
} from "../models/conflict-error-response.js";
import { createFeatureDtoInternalSchema, type CreateFeatureDto } from "../models/create-feature-dto.js";
import {
  featureDevCycleManagementDeprecatedFeaturesV1ApiInternalSchema,
  type FeatureDevCycleManagementDeprecatedFeaturesV1Api,
} from "../models/feature-dev-cycle-management-deprecated-features-v1-api.js";
import {
  featureStalenessEntitySchema,
  type FeatureStalenessEntity,
} from "../models/feature-staleness-entity.js";
import { featureSummarySchema, type FeatureSummary } from "../models/feature-summary.js";
import {
  notFoundErrorResponseSchema,
  type NotFoundErrorResponse,
} from "../models/not-found-error-response.js";
import {
  preconditionFailedErrorResponseSchema,
  type PreconditionFailedErrorResponse,
} from "../models/precondition-failed-error-response.js";
import { SortBy, sortBySchema } from "../models/sort-by.js";
import { SortOrder, sortOrderSchema } from "../models/sort-order.js";
import { stalenessSchema, type Staleness } from "../models/staleness.js";
import {
  staticConfigurationInternalSchema,
  type StaticConfiguration,
} from "../models/static-configuration.js";
import { status5Schema, type Status5 } from "../models/status5.js";
import { type9Schema, type Type9 } from "../models/type9.js";
import { updateFeatureDtoInternalSchema, type UpdateFeatureDto } from "../models/update-feature-dto.js";
import {
  updateFeatureStatusDtoSchema,
  type UpdateFeatureStatusDto,
} from "../models/update-feature-status-dto.js";
import {
  updateFeatureSummaryDtoSchema,
  type UpdateFeatureSummaryDto,
} from "../models/update-feature-summary-dto.js";
import { updateStalenessDtoSchema, type UpdateStalenessDto } from "../models/update-staleness-dto.js";
import {
  updateStaticConfigurationDtoInternalSchema,
  type UpdateStaticConfigurationDto,
} from "../models/update-static-configuration-dto.js";
import type { Servers } from "../servers.js";

export class FeaturesV2 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create Feature
   *
   * @remarks
   * Create a new Feature
   *
   * @throws {@link FeaturesV2.FeaturesControllerCreateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  featuresControllerCreate(
    request: FeaturesV2.FeaturesControllerCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesV2.FeaturesControllerCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/projects/{project}/features"),
        auth: noneAuth,
        pathParams: [{ name: "project", value: request.project, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createFeatureDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: featureDevCycleManagementDeprecatedFeaturesV1ApiInternalSchema },
        errorFactory: FeaturesV2.FeaturesControllerCreateError,
      },
      options,
    );
  }

  /**
   * List Features
   *
   * @throws {@link FeaturesV2.FeaturesControllerFindAllError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  featuresControllerFindAll(
    request: FeaturesV2.FeaturesControllerFindAllRequest,
    options?: RequestOptions,
  ): ApiPromise<
    FeatureDevCycleManagementDeprecatedFeaturesV1Api[],
    FeaturesV2.FeaturesControllerFindAllError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/projects/{project}/features"),
        auth: noneAuth,
        pathParams: [{ name: "project", value: request.project, schema: s.string() }],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.float64(), 1) },
          { name: "perPage", value: request.perPage, schema: s.defaulted(s.float64(), 100) },
          { name: "sortBy", value: request.sortBy, schema: s.defaulted(sortBySchema, SortBy.CreatedAt) },
          {
            name: "sortOrder",
            value: request.sortOrder,
            schema: s.defaulted(sortOrderSchema, SortOrder.Desc),
          },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "createdBy", value: request.createdBy, schema: s.optional(s.string()) },
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => type9Schema)) },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => status5Schema)) },
          { name: "customStatus", value: request.customStatus, schema: s.optional(s.array(s.string())) },
          { name: "keys", value: request.keys, schema: s.optional(s.array(s.string())) },
          {
            name: "includeLatestUpdate",
            value: request.includeLatestUpdate,
            schema: s.optional(s.boolean()),
          },
          { name: "staleness", value: request.staleness, schema: s.optional(s.lazy(() => stalenessSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => featureDevCycleManagementDeprecatedFeaturesV1ApiInternalSchema)),
        },
        errorFactory: FeaturesV2.FeaturesControllerFindAllError,
      },
      options,
    );
  }

  /**
   * Get a Feature
   *
   * @remarks
   * Get a Feature by ID or key
   *
   * @throws {@link FeaturesV2.FeaturesControllerFindOneError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  featuresControllerFindOne(
    request: FeaturesV2.FeaturesControllerFindOneRequest,
    options?: RequestOptions,
  ): ApiPromise<FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesV2.FeaturesControllerFindOneError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/projects/{project}/features/{feature}"),
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
        success: { kind: "json", schema: featureDevCycleManagementDeprecatedFeaturesV1ApiInternalSchema },
        errorFactory: FeaturesV2.FeaturesControllerFindOneError,
      },
      options,
    );
  }

  /**
   * Get a Feature's Static Configuration
   *
   * @remarks
   * Get a completed Feature's static configuration
   *
   * @throws {@link FeaturesV2.FeaturesControllerFindStaticConfigurationError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  featuresControllerFindStaticConfiguration(
    request: FeaturesV2.FeaturesControllerFindStaticConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<StaticConfiguration, FeaturesV2.FeaturesControllerFindStaticConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/projects/{project}/features/{feature}/static-configuration"),
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
        success: { kind: "json", schema: staticConfigurationInternalSchema },
        errorFactory: FeaturesV2.FeaturesControllerFindStaticConfigurationError,
      },
      options,
    );
  }

  /**
   * Get a Feature's Staleness
   *
   * @throws {@link FeaturesV2.FeaturesControllerGetStalenessError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  featuresControllerGetStaleness(
    request: FeaturesV2.FeaturesControllerGetStalenessRequest,
    options?: RequestOptions,
  ): ApiPromise<FeatureStalenessEntity, FeaturesV2.FeaturesControllerGetStalenessError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/projects/{project}/features/{feature}/staleness"),
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
        success: { kind: "json", schema: featureStalenessEntitySchema },
        errorFactory: FeaturesV2.FeaturesControllerGetStalenessError,
      },
      options,
    );
  }

  /**
   * Update a Feature
   *
   * @remarks
   * Update a Feature by ID or key
   *
   * @throws {@link FeaturesV2.FeaturesControllerUpdateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  featuresControllerUpdate(
    request: FeaturesV2.FeaturesControllerUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesV2.FeaturesControllerUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v2/projects/{project}/features/{feature}"),
        auth: noneAuth,
        pathParams: [
          { name: "feature", value: request.feature, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateFeatureDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: featureDevCycleManagementDeprecatedFeaturesV1ApiInternalSchema },
        errorFactory: FeaturesV2.FeaturesControllerUpdateError,
      },
      options,
    );
  }

  /**
   * Update a Feature's Staleness
   *
   * @throws {@link FeaturesV2.FeaturesControllerUpdateStalenessError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  featuresControllerUpdateStaleness(
    request: FeaturesV2.FeaturesControllerUpdateStalenessRequest,
    options?: RequestOptions,
  ): ApiPromise<FeatureStalenessEntity, FeaturesV2.FeaturesControllerUpdateStalenessError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v2/projects/{project}/features/{feature}/staleness"),
        auth: noneAuth,
        pathParams: [
          { name: "feature", value: request.feature, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateStalenessDtoSchema },
      },
      {
        success: { kind: "json", schema: featureStalenessEntitySchema },
        errorFactory: FeaturesV2.FeaturesControllerUpdateStalenessError,
      },
      options,
    );
  }

  /**
   * Update a Feature's Static Configuration
   *
   * @remarks
   * Update a completed Feature's static configuration
   *
   * @throws {@link FeaturesV2.FeaturesControllerUpdateStaticConfigurationError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  featuresControllerUpdateStaticConfiguration(
    request: FeaturesV2.FeaturesControllerUpdateStaticConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<StaticConfiguration, FeaturesV2.FeaturesControllerUpdateStaticConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v2/projects/{project}/features/{feature}/static-configuration"),
        auth: noneAuth,
        pathParams: [
          { name: "feature", value: request.feature, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateStaticConfigurationDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: staticConfigurationInternalSchema },
        errorFactory: FeaturesV2.FeaturesControllerUpdateStaticConfigurationError,
      },
      options,
    );
  }

  /**
   * Update a Feature's status
   *
   * @throws {@link FeaturesV2.FeaturesControllerUpdateStatusError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  featuresControllerUpdateStatus(
    request: FeaturesV2.FeaturesControllerUpdateStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<
    FeatureDevCycleManagementDeprecatedFeaturesV1Api,
    FeaturesV2.FeaturesControllerUpdateStatusError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v2/projects/{project}/features/{feature}/status"),
        auth: noneAuth,
        pathParams: [
          { name: "feature", value: request.feature, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateFeatureStatusDtoSchema },
      },
      {
        success: { kind: "json", schema: featureDevCycleManagementDeprecatedFeaturesV1ApiInternalSchema },
        errorFactory: FeaturesV2.FeaturesControllerUpdateStatusError,
      },
      options,
    );
  }

  /**
   * Update a Feature's summary
   *
   * @throws {@link FeaturesV2.FeaturesControllerUpdateSummaryError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  featuresControllerUpdateSummary(
    request: FeaturesV2.FeaturesControllerUpdateSummaryRequest,
    options?: RequestOptions,
  ): ApiPromise<FeatureSummary, FeaturesV2.FeaturesControllerUpdateSummaryError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v2/projects/{project}/features/{feature}/summary"),
        auth: noneAuth,
        pathParams: [
          { name: "feature", value: request.feature, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateFeatureSummaryDtoSchema },
      },
      {
        success: { kind: "json", schema: featureSummarySchema },
        errorFactory: FeaturesV2.FeaturesControllerUpdateSummaryError,
      },
      options,
    );
  }
}

export namespace FeaturesV2 {
  export type FeaturesControllerCreateRequest = {
    /** A Project key or ID */
    project: string;
    body: CreateFeatureDto;
  };

  export class FeaturesControllerCreateError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"conflictErrorResponse", ConflictErrorResponse>
      | Declared<"preconditionFailedErrorResponse", PreconditionFailedErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<FeaturesControllerCreateError> = [
      {
        on: 400,
        kind: "badRequestErrorResponse",
        decode: { kind: "json", schema: badRequestErrorResponseSchema },
      },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
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

  export type FeaturesControllerFindAllRequest = {
    /** A Project key or ID */
    project: string;
    /** @default 1 */
    page?: number;
    /** @default 100 */
    perPage?: number;
    /** @default SortBy.CreatedAt */
    sortBy?: SortBy;
    /** @default SortOrder.Desc */
    sortOrder?: SortOrder;
    search?: string;
    createdBy?: string;
    type?: Type9;
    status?: Status5;
    customStatus?: string[];
    keys?: string[];
    includeLatestUpdate?: boolean;
    staleness?: Staleness;
  };

  export const featuresControllerFindAllRequestSchema: Schema<FeaturesControllerFindAllRequest> =
    s.lazySchema(() =>
      s.object<FeaturesControllerFindAllRequest>({
        project: s.string(),
        page: s.defaulted(s.float64().check(s.gte(1)), 1),
        perPage: s.defaulted(s.float64().check(s.gte(1), s.lte(1000)), 100),
        sortBy: s.defaulted(sortBySchema, SortBy.CreatedAt),
        sortOrder: s.defaulted(sortOrderSchema, SortOrder.Desc),
        search: s.optional(s.string().check(s.minLength(3))),
        createdBy: s.optional(s.string()),
        type: s.optional(s.lazy(() => type9Schema)),
        status: s.optional(s.lazy(() => status5Schema)),
        customStatus: s.optional(s.array(s.string())),
        keys: s.optional(s.array(s.string())),
        includeLatestUpdate: s.optional(s.boolean()),
        staleness: s.optional(s.lazy(() => stalenessSchema)),
      }),
    );

  export class FeaturesControllerFindAllError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<FeaturesControllerFindAllError> = [
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

  export type FeaturesControllerFindOneRequest = {
    /** A Feature key or ID */
    feature: string;
    /** A Project key or ID */
    project: string;
  };

  export class FeaturesControllerFindOneError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<FeaturesControllerFindOneError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      {
        on: 404,
        kind: "notFoundErrorResponse",
        decode: { kind: "json", schema: notFoundErrorResponseSchema },
      },
    ];
  }

  export type FeaturesControllerFindStaticConfigurationRequest = {
    /** A Feature key or ID */
    feature: string;
    /** A Project key or ID */
    project: string;
  };

  export class FeaturesControllerFindStaticConfigurationError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"preconditionFailedErrorResponse", PreconditionFailedErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<FeaturesControllerFindStaticConfigurationError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      {
        on: 412,
        kind: "preconditionFailedErrorResponse",
        decode: { kind: "json", schema: preconditionFailedErrorResponseSchema },
      },
    ];
  }

  export type FeaturesControllerGetStalenessRequest = {
    /** A Feature key or ID */
    feature: string;
    /** A Project key or ID */
    project: string;
  };

  export class FeaturesControllerGetStalenessError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<FeaturesControllerGetStalenessError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      {
        on: 404,
        kind: "notFoundErrorResponse",
        decode: { kind: "json", schema: notFoundErrorResponseSchema },
      },
    ];
  }

  export type FeaturesControllerUpdateRequest = {
    /** A Feature key or ID */
    feature: string;
    /** A Project key or ID */
    project: string;
    body: UpdateFeatureDto;
  };

  export class FeaturesControllerUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Declared<"conflictErrorResponse", ConflictErrorResponse>
      | Declared<"preconditionFailedErrorResponse", PreconditionFailedErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<FeaturesControllerUpdateError> = [
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
      {
        on: 412,
        kind: "preconditionFailedErrorResponse",
        decode: { kind: "json", schema: preconditionFailedErrorResponseSchema },
      },
    ];
  }

  export type FeaturesControllerUpdateStalenessRequest = {
    /** A Feature key or ID */
    feature: string;
    /** A Project key or ID */
    project: string;
    body: UpdateStalenessDto;
  };

  export class FeaturesControllerUpdateStalenessError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Declared<"preconditionFailedErrorResponse", PreconditionFailedErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<FeaturesControllerUpdateStalenessError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      {
        on: 404,
        kind: "notFoundErrorResponse",
        decode: { kind: "json", schema: notFoundErrorResponseSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedErrorResponse",
        decode: { kind: "json", schema: preconditionFailedErrorResponseSchema },
      },
    ];
  }

  export type FeaturesControllerUpdateStaticConfigurationRequest = {
    /** A Feature key or ID */
    feature: string;
    /** A Project key or ID */
    project: string;
    body: UpdateStaticConfigurationDto;
  };

  export class FeaturesControllerUpdateStaticConfigurationError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"preconditionFailedErrorResponse", PreconditionFailedErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<FeaturesControllerUpdateStaticConfigurationError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      {
        on: 412,
        kind: "preconditionFailedErrorResponse",
        decode: { kind: "json", schema: preconditionFailedErrorResponseSchema },
      },
    ];
  }

  export type FeaturesControllerUpdateStatusRequest = {
    /** A Feature key or ID */
    feature: string;
    /** A Project key or ID */
    project: string;
    body: UpdateFeatureStatusDto;
  };

  export class FeaturesControllerUpdateStatusError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Declared<"conflictErrorResponse", ConflictErrorResponse>
      | Declared<"preconditionFailedErrorResponse", PreconditionFailedErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<FeaturesControllerUpdateStatusError> = [
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
      {
        on: 412,
        kind: "preconditionFailedErrorResponse",
        decode: { kind: "json", schema: preconditionFailedErrorResponseSchema },
      },
    ];
  }

  export type FeaturesControllerUpdateSummaryRequest = {
    /** A Feature key or ID */
    feature: string;
    /** A Project key or ID */
    project: string;
    body: UpdateFeatureSummaryDto;
  };

  export class FeaturesControllerUpdateSummaryError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Declared<"preconditionFailedErrorResponse", PreconditionFailedErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<FeaturesControllerUpdateSummaryError> = [
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
        on: 412,
        kind: "preconditionFailedErrorResponse",
        decode: { kind: "json", schema: preconditionFailedErrorResponseSchema },
      },
    ];
  }
}
