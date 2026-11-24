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
import { jiraIssueLinkSchema, type JiraIssueLink } from "../models/jira-issue-link.js";
import { linkJiraIssueDtoSchema, type LinkJiraIssueDto } from "../models/link-jira-issue-dto.js";
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
  updateStaticConfigurationDtoInternalSchema,
  type UpdateStaticConfigurationDto,
} from "../models/update-static-configuration-dto.js";
import type { Servers } from "../servers.js";

export class DeprecatedFeaturesV1 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create Multiple Features with a single request
   *
   * @remarks
   * Create multiple new Features
   *
   * @throws {@link DeprecatedFeaturesV1.FeaturesControllerCreateMultipleV1Error} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  featuresControllerCreateMultipleV1(
    request: DeprecatedFeaturesV1.FeaturesControllerCreateMultipleV1Request,
    options?: RequestOptions,
  ): ApiPromise<
    FeatureDevCycleManagementDeprecatedFeaturesV1Api[],
    DeprecatedFeaturesV1.FeaturesControllerCreateMultipleV1Error
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{project}/features/multiple"),
        auth: noneAuth,
        pathParams: [{ name: "project", value: request.project, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.array(s.string()) },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => featureDevCycleManagementDeprecatedFeaturesV1ApiInternalSchema)),
        },
        errorFactory: DeprecatedFeaturesV1.FeaturesControllerCreateMultipleV1Error,
      },
      options,
    );
  }

  /**
   * Create Feature
   *
   * @remarks
   * Create a new Feature
   *
   * @throws {@link DeprecatedFeaturesV1.FeaturesControllerCreateV1Error} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  featuresControllerCreateV1(
    request: DeprecatedFeaturesV1.FeaturesControllerCreateV1Request,
    options?: RequestOptions,
  ): ApiPromise<
    FeatureDevCycleManagementDeprecatedFeaturesV1Api,
    DeprecatedFeaturesV1.FeaturesControllerCreateV1Error
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{project}/features"),
        auth: noneAuth,
        pathParams: [{ name: "project", value: request.project, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createFeatureDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: featureDevCycleManagementDeprecatedFeaturesV1ApiInternalSchema },
        errorFactory: DeprecatedFeaturesV1.FeaturesControllerCreateV1Error,
      },
      options,
    );
  }

  /**
   * List linked Jira Issues
   *
   * @throws {@link DeprecatedFeaturesV1.FeaturesControllerFindAllLinkedIssuesV1Error} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  featuresControllerFindAllLinkedIssuesV1(
    request: DeprecatedFeaturesV1.FeaturesControllerFindAllLinkedIssuesV1Request,
    options?: RequestOptions,
  ): ApiPromise<JiraIssueLink[], DeprecatedFeaturesV1.FeaturesControllerFindAllLinkedIssuesV1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{project}/features/{feature}/integrations/jira/issues",
        ),
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
        success: { kind: "json", schema: s.array(s.lazy(() => jiraIssueLinkSchema)) },
        errorFactory: DeprecatedFeaturesV1.FeaturesControllerFindAllLinkedIssuesV1Error,
      },
      options,
    );
  }

  /**
   * List Features
   *
   * @throws {@link DeprecatedFeaturesV1.FeaturesControllerFindAllV1Error} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  featuresControllerFindAllV1(
    request: DeprecatedFeaturesV1.FeaturesControllerFindAllV1Request,
    options?: RequestOptions,
  ): ApiPromise<
    FeatureDevCycleManagementDeprecatedFeaturesV1Api[],
    DeprecatedFeaturesV1.FeaturesControllerFindAllV1Error
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project}/features"),
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
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => featureDevCycleManagementDeprecatedFeaturesV1ApiInternalSchema)),
        },
        errorFactory: DeprecatedFeaturesV1.FeaturesControllerFindAllV1Error,
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
   * @throws {@link DeprecatedFeaturesV1.FeaturesControllerFindOneV1Error} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  featuresControllerFindOneV1(
    request: DeprecatedFeaturesV1.FeaturesControllerFindOneV1Request,
    options?: RequestOptions,
  ): ApiPromise<
    FeatureDevCycleManagementDeprecatedFeaturesV1Api,
    DeprecatedFeaturesV1.FeaturesControllerFindOneV1Error
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project}/features/{feature}"),
        auth: noneAuth,
        pathParams: [
          { name: "feature", value: request.feature, schema: s.string() },
          { name: "key", value: request.key, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: featureDevCycleManagementDeprecatedFeaturesV1ApiInternalSchema },
        errorFactory: DeprecatedFeaturesV1.FeaturesControllerFindOneV1Error,
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
   * @throws {@link DeprecatedFeaturesV1.FeaturesControllerFindStaticConfigurationV1Error} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  featuresControllerFindStaticConfigurationV1(
    request: DeprecatedFeaturesV1.FeaturesControllerFindStaticConfigurationV1Request,
    options?: RequestOptions,
  ): ApiPromise<StaticConfiguration, DeprecatedFeaturesV1.FeaturesControllerFindStaticConfigurationV1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project}/features/{feature}/static-configuration"),
        auth: noneAuth,
        pathParams: [
          { name: "feature", value: request.feature, schema: s.string() },
          { name: "key", value: request.key, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: staticConfigurationInternalSchema },
        errorFactory: DeprecatedFeaturesV1.FeaturesControllerFindStaticConfigurationV1Error,
      },
      options,
    );
  }

  /**
   * Link feature to Jira issue
   *
   * @throws {@link DeprecatedFeaturesV1.FeaturesControllerLinkIssueV1Error} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  featuresControllerLinkIssueV1(
    request: DeprecatedFeaturesV1.FeaturesControllerLinkIssueV1Request,
    options?: RequestOptions,
  ): ApiPromise<JiraIssueLink, DeprecatedFeaturesV1.FeaturesControllerLinkIssueV1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{project}/features/{feature}/integrations/jira/issues",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "feature", value: request.feature, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: linkJiraIssueDtoSchema },
      },
      {
        success: { kind: "json", schema: jiraIssueLinkSchema },
        errorFactory: DeprecatedFeaturesV1.FeaturesControllerLinkIssueV1Error,
      },
      options,
    );
  }

  /**
   * Unlink feature from Jira issue
   *
   * @throws {@link DeprecatedFeaturesV1.FeaturesControllerRemoveLinkedIssueV1Error} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  featuresControllerRemoveLinkedIssueV1(
    request: DeprecatedFeaturesV1.FeaturesControllerRemoveLinkedIssueV1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, DeprecatedFeaturesV1.FeaturesControllerRemoveLinkedIssueV1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{project}/features/{feature}/integrations/jira/issues/{issue_id}",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "feature", value: request.feature, schema: s.string() },
          { name: "issue_id", value: request.issueId, schema: s.string() },
          { name: "key", value: request.key, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: DeprecatedFeaturesV1.FeaturesControllerRemoveLinkedIssueV1Error,
      },
      options,
    );
  }

  /**
   * Delete a Feature
   *
   * @remarks
   * Delete a Feature by ID or key
   *
   * @throws {@link DeprecatedFeaturesV1.FeaturesControllerRemoveV1Error} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  featuresControllerRemoveV1(
    request: DeprecatedFeaturesV1.FeaturesControllerRemoveV1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, DeprecatedFeaturesV1.FeaturesControllerRemoveV1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/projects/{project}/features/{feature}"),
        auth: noneAuth,
        pathParams: [
          { name: "feature", value: request.feature, schema: s.string() },
          { name: "key", value: request.key, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [{ name: "deleteVariables", value: request.deleteVariables, schema: s.optional(s.boolean()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: DeprecatedFeaturesV1.FeaturesControllerRemoveV1Error,
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
   * @throws {@link DeprecatedFeaturesV1.FeaturesControllerUpdateStaticConfigurationV1Error} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  featuresControllerUpdateStaticConfigurationV1(
    request: DeprecatedFeaturesV1.FeaturesControllerUpdateStaticConfigurationV1Request,
    options?: RequestOptions,
  ): ApiPromise<
    StaticConfiguration,
    DeprecatedFeaturesV1.FeaturesControllerUpdateStaticConfigurationV1Error
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v1/projects/{project}/features/{feature}/static-configuration"),
        auth: noneAuth,
        pathParams: [
          { name: "feature", value: request.feature, schema: s.string() },
          { name: "key", value: request.key, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateStaticConfigurationDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: staticConfigurationInternalSchema },
        errorFactory: DeprecatedFeaturesV1.FeaturesControllerUpdateStaticConfigurationV1Error,
      },
      options,
    );
  }

  /**
   * Update a Feature's status
   *
   * @remarks
   * Update a Feature's status by key
   *
   * @throws {@link DeprecatedFeaturesV1.FeaturesControllerUpdateStatusV1Error} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  featuresControllerUpdateStatusV1(
    request: DeprecatedFeaturesV1.FeaturesControllerUpdateStatusV1Request,
    options?: RequestOptions,
  ): ApiPromise<
    FeatureDevCycleManagementDeprecatedFeaturesV1Api,
    DeprecatedFeaturesV1.FeaturesControllerUpdateStatusV1Error
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v1/projects/{project}/features/{feature}/status"),
        auth: noneAuth,
        pathParams: [
          { name: "feature", value: request.feature, schema: s.string() },
          { name: "key", value: request.key, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateFeatureStatusDtoSchema },
      },
      {
        success: { kind: "json", schema: featureDevCycleManagementDeprecatedFeaturesV1ApiInternalSchema },
        errorFactory: DeprecatedFeaturesV1.FeaturesControllerUpdateStatusV1Error,
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
   * @throws {@link DeprecatedFeaturesV1.FeaturesControllerUpdateV1Error} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  featuresControllerUpdateV1(
    request: DeprecatedFeaturesV1.FeaturesControllerUpdateV1Request,
    options?: RequestOptions,
  ): ApiPromise<
    FeatureDevCycleManagementDeprecatedFeaturesV1Api,
    DeprecatedFeaturesV1.FeaturesControllerUpdateV1Error
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v1/projects/{project}/features/{feature}"),
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
        errorFactory: DeprecatedFeaturesV1.FeaturesControllerUpdateV1Error,
      },
      options,
    );
  }
}

export namespace DeprecatedFeaturesV1 {
  export type FeaturesControllerCreateMultipleV1Request = {
    /** A Project key or ID */
    project: string;
    body: string[];
  };

  export class FeaturesControllerCreateMultipleV1Error extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"conflictErrorResponse", ConflictErrorResponse>
      | Declared<"preconditionFailedErrorResponse", PreconditionFailedErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<FeaturesControllerCreateMultipleV1Error> = [
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

  export type FeaturesControllerCreateV1Request = {
    /** A Project key or ID */
    project: string;
    body: CreateFeatureDto;
  };

  export class FeaturesControllerCreateV1Error extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"conflictErrorResponse", ConflictErrorResponse>
      | Declared<"preconditionFailedErrorResponse", PreconditionFailedErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<FeaturesControllerCreateV1Error> = [
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

  export type FeaturesControllerFindAllLinkedIssuesV1Request = {
    feature: string;
    /** A Project key or ID */
    project: string;
  };

  export class FeaturesControllerFindAllLinkedIssuesV1Error extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<FeaturesControllerFindAllLinkedIssuesV1Error> = [
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

  export type FeaturesControllerFindAllV1Request = {
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
  };

  export const featuresControllerFindAllV1RequestSchema: Schema<FeaturesControllerFindAllV1Request> =
    s.lazySchema(() =>
      s.object<FeaturesControllerFindAllV1Request>({
        project: s.string(),
        page: s.defaulted(s.float64().check(s.gte(1)), 1),
        perPage: s.defaulted(s.float64().check(s.gte(1), s.lte(1000)), 100),
        sortBy: s.defaulted(sortBySchema, SortBy.CreatedAt),
        sortOrder: s.defaulted(sortOrderSchema, SortOrder.Desc),
        search: s.optional(s.string().check(s.minLength(3))),
        createdBy: s.optional(s.string()),
        type: s.optional(s.lazy(() => type9Schema)),
        status: s.optional(s.lazy(() => status5Schema)),
      }),
    );

  export class FeaturesControllerFindAllV1Error extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<FeaturesControllerFindAllV1Error> = [
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

  export type FeaturesControllerFindOneV1Request = {
    feature: string;
    /** A Feature key or ID */
    key: string;
    /** A Project key or ID */
    project: string;
  };

  export class FeaturesControllerFindOneV1Error extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<FeaturesControllerFindOneV1Error> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      {
        on: 404,
        kind: "notFoundErrorResponse",
        decode: { kind: "json", schema: notFoundErrorResponseSchema },
      },
    ];
  }

  export type FeaturesControllerFindStaticConfigurationV1Request = {
    feature: string;
    /** A Feature key or ID */
    key: string;
    /** A Project key or ID */
    project: string;
  };

  export class FeaturesControllerFindStaticConfigurationV1Error extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"preconditionFailedErrorResponse", PreconditionFailedErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<FeaturesControllerFindStaticConfigurationV1Error> = [
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

  export type FeaturesControllerLinkIssueV1Request = {
    feature: string;
    /** A Project key or ID */
    project: string;
    body: LinkJiraIssueDto;
  };

  export class FeaturesControllerLinkIssueV1Error extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Declared<"conflictErrorResponse", ConflictErrorResponse>
      | Declared<"preconditionFailedErrorResponse", PreconditionFailedErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<FeaturesControllerLinkIssueV1Error> = [
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

  export type FeaturesControllerRemoveLinkedIssueV1Request = {
    feature: string;
    issueId: string;
    /** A Feature key or ID */
    key: string;
    /** A Project key or ID */
    project: string;
  };

  export class FeaturesControllerRemoveLinkedIssueV1Error extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<FeaturesControllerRemoveLinkedIssueV1Error> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      {
        on: 404,
        kind: "notFoundErrorResponse",
        decode: { kind: "json", schema: notFoundErrorResponseSchema },
      },
    ];
  }

  export type FeaturesControllerRemoveV1Request = {
    feature: string;
    /** A Feature key or ID */
    key: string;
    /** A Project key or ID */
    project: string;
    /** Controls whether the feature's associated variables should also be deleted */
    deleteVariables?: boolean;
  };

  export class FeaturesControllerRemoveV1Error extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<FeaturesControllerRemoveV1Error> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      {
        on: 404,
        kind: "notFoundErrorResponse",
        decode: { kind: "json", schema: notFoundErrorResponseSchema },
      },
    ];
  }

  export type FeaturesControllerUpdateStaticConfigurationV1Request = {
    feature: string;
    /** A Feature key or ID */
    key: string;
    /** A Project key or ID */
    project: string;
    body: UpdateStaticConfigurationDto;
  };

  export class FeaturesControllerUpdateStaticConfigurationV1Error extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"preconditionFailedErrorResponse", PreconditionFailedErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<FeaturesControllerUpdateStaticConfigurationV1Error> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      {
        on: 412,
        kind: "preconditionFailedErrorResponse",
        decode: { kind: "json", schema: preconditionFailedErrorResponseSchema },
      },
    ];
  }

  export type FeaturesControllerUpdateStatusV1Request = {
    feature: string;
    /** A Feature key or ID */
    key: string;
    /** A Project key or ID */
    project: string;
    body: UpdateFeatureStatusDto;
  };

  export class FeaturesControllerUpdateStatusV1Error extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Declared<"conflictErrorResponse", ConflictErrorResponse>
      | Declared<"preconditionFailedErrorResponse", PreconditionFailedErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<FeaturesControllerUpdateStatusV1Error> = [
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

  export type FeaturesControllerUpdateV1Request = {
    /** A Feature key or ID */
    feature: string;
    /** A Project key or ID */
    project: string;
    body: UpdateFeatureDto;
  };

  export class FeaturesControllerUpdateV1Error extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Declared<"conflictErrorResponse", ConflictErrorResponse>
      | Declared<"preconditionFailedErrorResponse", PreconditionFailedErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<FeaturesControllerUpdateV1Error> = [
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
}
