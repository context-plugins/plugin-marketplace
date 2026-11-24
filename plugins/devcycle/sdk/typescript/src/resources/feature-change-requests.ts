import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  applyFeatureChangeRequestDtoInternalSchema,
  type ApplyFeatureChangeRequestDto,
} from "../models/apply-feature-change-request-dto.js";
import {
  createFeatureChangeRequestDtoSchema,
  type CreateFeatureChangeRequestDto,
} from "../models/create-feature-change-request-dto.js";
import { featureChangeRequestSchema, type FeatureChangeRequest } from "../models/feature-change-request.js";
import {
  notFoundErrorResponseSchema,
  type NotFoundErrorResponse,
} from "../models/not-found-error-response.js";
import {
  reviewFeatureChangeRequestDtoSchema,
  type ReviewFeatureChangeRequestDto,
} from "../models/review-feature-change-request-dto.js";
import {
  submitFeatureChangeRequestDtoInternalSchema,
  type SubmitFeatureChangeRequestDto,
} from "../models/submit-feature-change-request-dto.js";
import type { Servers } from "../servers.js";

export class FeatureChangeRequests {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Review a Pending Feature Change Request
   *
   * @remarks
   * Update a Feature Change Request by ID
   *
   * @throws {@link
   * FeatureChangeRequests.FeatureChangeRequestsControllerApplyFeatureChangeRequestError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  featureChangeRequestsControllerApplyFeatureChangeRequest(
    request: FeatureChangeRequests.FeatureChangeRequestsControllerApplyFeatureChangeRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<
    undefined,
    FeatureChangeRequests.FeatureChangeRequestsControllerApplyFeatureChangeRequestError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v2/projects/{project}/features/{feature}/change-requests/{id}/apply",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "feature", value: request.feature, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: applyFeatureChangeRequestDtoInternalSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: FeatureChangeRequests.FeatureChangeRequestsControllerApplyFeatureChangeRequestError,
      },
      options,
    );
  }

  /**
   * Cancel a Pending Feature Change Request
   *
   * @remarks
   * Cancel a Feature Change Request by ID
   *
   * @throws {@link
   * FeatureChangeRequests.FeatureChangeRequestsControllerCancelFeatureChangeRequestError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  featureChangeRequestsControllerCancelFeatureChangeRequest(
    request: FeatureChangeRequests.FeatureChangeRequestsControllerCancelFeatureChangeRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<
    undefined,
    FeatureChangeRequests.FeatureChangeRequestsControllerCancelFeatureChangeRequestError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v2/projects/{project}/features/{feature}/change-requests/{id}/cancel",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "feature", value: request.feature, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FeatureChangeRequests.FeatureChangeRequestsControllerCancelFeatureChangeRequestError,
      },
      options,
    );
  }

  /**
   * Create Feature Change Request
   *
   * @remarks
   * Create a new Feature Change Request
   *
   * @throws {@link FeatureChangeRequests.FeatureChangeRequestsControllerCreateChangeRequestError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  featureChangeRequestsControllerCreateChangeRequest(
    request: FeatureChangeRequests.FeatureChangeRequestsControllerCreateChangeRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<
    FeatureChangeRequest,
    FeatureChangeRequests.FeatureChangeRequestsControllerCreateChangeRequestError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/projects/{project}/features/{feature}/change-requests"),
        auth: noneAuth,
        pathParams: [
          { name: "feature", value: request.feature, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createFeatureChangeRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: featureChangeRequestSchema },
        errorFactory: FeatureChangeRequests.FeatureChangeRequestsControllerCreateChangeRequestError,
      },
      options,
    );
  }

  /**
   * Get a Feature Change Request
   *
   * @remarks
   * Get a Feature Change Request by ID
   *
   * @throws {@link
   * FeatureChangeRequests.FeatureChangeRequestsControllerGetFeatureChangeRequestError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  featureChangeRequestsControllerGetFeatureChangeRequest(
    request: FeatureChangeRequests.FeatureChangeRequestsControllerGetFeatureChangeRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<
    FeatureChangeRequest,
    FeatureChangeRequests.FeatureChangeRequestsControllerGetFeatureChangeRequestError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/projects/{project}/features/{feature}/change-requests/{id}"),
        auth: noneAuth,
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "feature", value: request.feature, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: featureChangeRequestSchema },
        errorFactory: FeatureChangeRequests.FeatureChangeRequestsControllerGetFeatureChangeRequestError,
      },
      options,
    );
  }

  /**
   * Get the latest non-draft Feature Change Request for a Feature
   *
   * @remarks
   * Get the latest Feature Change Request for a Feature that is NOT in the 'draft' state
   *
   * @throws {@link
   * FeatureChangeRequests.FeatureChangeRequestsControllerGetLatestFeatureChangeRequestError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  featureChangeRequestsControllerGetLatestFeatureChangeRequest(
    request: FeatureChangeRequests.FeatureChangeRequestsControllerGetLatestFeatureChangeRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<
    FeatureChangeRequest,
    FeatureChangeRequests.FeatureChangeRequestsControllerGetLatestFeatureChangeRequestError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v2/projects/{project}/features/{feature}/change-requests/latest",
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
        success: { kind: "json", schema: featureChangeRequestSchema },
        errorFactory: FeatureChangeRequests.FeatureChangeRequestsControllerGetLatestFeatureChangeRequestError,
      },
      options,
    );
  }

  /**
   * Get a list of Pending Feature Change Requests for a Feature
   *
   * @remarks
   * Get all pending Feature Change Requests for a Feature
   *
   * @throws {@link
   * FeatureChangeRequests.FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  featureChangeRequestsControllerGetPendingFeatureChangeRequests(
    request: FeatureChangeRequests.FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    FeatureChangeRequest[],
    FeatureChangeRequests.FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/projects/{project}/features/{feature}/change-requests"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => featureChangeRequestSchema)) },
        errorFactory:
          FeatureChangeRequests.FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsError,
      },
      options,
    );
  }

  /**
   * Review a Pending Feature Change Request
   *
   * @remarks
   * Update a Feature Change Request by ID
   *
   * @throws {@link
   * FeatureChangeRequests.FeatureChangeRequestsControllerReviewFeatureChangeRequestError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  featureChangeRequestsControllerReviewFeatureChangeRequest(
    request: FeatureChangeRequests.FeatureChangeRequestsControllerReviewFeatureChangeRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<
    undefined,
    FeatureChangeRequests.FeatureChangeRequestsControllerReviewFeatureChangeRequestError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v2/projects/{project}/features/{feature}/change-requests/{id}/review",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "feature", value: request.feature, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [{ name: "apply", value: request.apply, schema: s.optional(s.boolean()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: reviewFeatureChangeRequestDtoSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: FeatureChangeRequests.FeatureChangeRequestsControllerReviewFeatureChangeRequestError,
      },
      options,
    );
  }

  /**
   * Submit Feature Change Request for Review
   *
   * @remarks
   * Submit a Feature Change Request for Review
   *
   * @throws {@link
   * FeatureChangeRequests.FeatureChangeRequestsControllerSubmitChangeRequestForReviewError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  featureChangeRequestsControllerSubmitChangeRequestForReview(
    request: FeatureChangeRequests.FeatureChangeRequestsControllerSubmitChangeRequestForReviewRequest,
    options?: RequestOptions,
  ): ApiPromise<
    FeatureChangeRequest,
    FeatureChangeRequests.FeatureChangeRequestsControllerSubmitChangeRequestForReviewError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v2/projects/{project}/features/{feature}/change-requests/{id}/submit",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "feature", value: request.feature, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: submitFeatureChangeRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: featureChangeRequestSchema },
        errorFactory: FeatureChangeRequests.FeatureChangeRequestsControllerSubmitChangeRequestForReviewError,
      },
      options,
    );
  }
}

export namespace FeatureChangeRequests {
  export type FeatureChangeRequestsControllerApplyFeatureChangeRequestRequest = {
    id: string;
    /** A Feature key or ID */
    feature: string;
    /** A Project key or ID */
    project: string;
    body: ApplyFeatureChangeRequestDto;
  };

  export class FeatureChangeRequestsControllerApplyFeatureChangeRequestError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Declared<"error405", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<FeatureChangeRequestsControllerApplyFeatureChangeRequestError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      {
        on: 404,
        kind: "notFoundErrorResponse",
        decode: { kind: "json", schema: notFoundErrorResponseSchema },
      },
      { on: 405, kind: "error405", decode: { kind: "empty" } },
    ];
  }

  export type FeatureChangeRequestsControllerCancelFeatureChangeRequestRequest = {
    id: string;
    /** A Feature key or ID */
    feature: string;
    /** A Project key or ID */
    project: string;
  };

  export class FeatureChangeRequestsControllerCancelFeatureChangeRequestError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Declared<"error405", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<FeatureChangeRequestsControllerCancelFeatureChangeRequestError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      {
        on: 404,
        kind: "notFoundErrorResponse",
        decode: { kind: "json", schema: notFoundErrorResponseSchema },
      },
      { on: 405, kind: "error405", decode: { kind: "empty" } },
    ];
  }

  export type FeatureChangeRequestsControllerCreateChangeRequestRequest = {
    /** A Feature key or ID */
    feature: string;
    /** A Project key or ID */
    project: string;
    body: CreateFeatureChangeRequestDto;
  };

  export class FeatureChangeRequestsControllerCreateChangeRequestError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error412", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<FeatureChangeRequestsControllerCreateChangeRequestError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 412, kind: "error412", decode: { kind: "empty" } },
    ];
  }

  export type FeatureChangeRequestsControllerGetFeatureChangeRequestRequest = {
    id: string;
    /** A Feature key or ID */
    feature: string;
    /** A Project key or ID */
    project: string;
  };

  export class FeatureChangeRequestsControllerGetFeatureChangeRequestError extends ApiError {
    declare readonly payload:
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Declared<"error405", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<FeatureChangeRequestsControllerGetFeatureChangeRequestError> = [
      {
        on: 404,
        kind: "notFoundErrorResponse",
        decode: { kind: "json", schema: notFoundErrorResponseSchema },
      },
      { on: 405, kind: "error405", decode: { kind: "empty" } },
    ];
  }

  export type FeatureChangeRequestsControllerGetLatestFeatureChangeRequestRequest = {
    /** A Feature key or ID */
    feature: string;
    /** A Project key or ID */
    project: string;
  };

  export class FeatureChangeRequestsControllerGetLatestFeatureChangeRequestError extends ApiError {
    declare readonly payload:
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Declared<"error405", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<FeatureChangeRequestsControllerGetLatestFeatureChangeRequestError> =
      [
        {
          on: 404,
          kind: "notFoundErrorResponse",
          decode: { kind: "json", schema: notFoundErrorResponseSchema },
        },
        { on: 405, kind: "error405", decode: { kind: "empty" } },
      ];
  }

  export type FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsRequest = {
    /** A Feature key or ID */
    feature: string;
    /** A Project key or ID */
    project: string;
  };

  export class FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsError extends ApiError {
    declare readonly payload:
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Declared<"error405", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsError> =
      [
        {
          on: 404,
          kind: "notFoundErrorResponse",
          decode: { kind: "json", schema: notFoundErrorResponseSchema },
        },
        { on: 405, kind: "error405", decode: { kind: "empty" } },
      ];
  }

  export type FeatureChangeRequestsControllerReviewFeatureChangeRequestRequest = {
    id: string;
    /** A Feature key or ID */
    feature: string;
    /** A Project key or ID */
    project: string;
    /** Controls whether the review should also apply the change request to the feature */
    apply?: boolean;
    body: ReviewFeatureChangeRequestDto;
  };

  export class FeatureChangeRequestsControllerReviewFeatureChangeRequestError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Declared<"error405", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<FeatureChangeRequestsControllerReviewFeatureChangeRequestError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      {
        on: 404,
        kind: "notFoundErrorResponse",
        decode: { kind: "json", schema: notFoundErrorResponseSchema },
      },
      { on: 405, kind: "error405", decode: { kind: "empty" } },
    ];
  }

  export type FeatureChangeRequestsControllerSubmitChangeRequestForReviewRequest = {
    id: string;
    /** A Feature key or ID */
    feature: string;
    /** A Project key or ID */
    project: string;
    body: SubmitFeatureChangeRequestDto;
  };

  export class FeatureChangeRequestsControllerSubmitChangeRequestForReviewError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Declared<"error405", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<FeatureChangeRequestsControllerSubmitChangeRequestForReviewError> =
      [
        { on: 400, kind: "error400", decode: { kind: "empty" } },
        { on: 403, kind: "error403", decode: { kind: "empty" } },
        {
          on: 404,
          kind: "notFoundErrorResponse",
          decode: { kind: "json", schema: notFoundErrorResponseSchema },
        },
        { on: 405, kind: "error405", decode: { kind: "empty" } },
      ];
  }
}
