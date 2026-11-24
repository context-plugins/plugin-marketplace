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
  createMetricAssociationDtoSchema,
  type CreateMetricAssociationDto,
} from "../models/create-metric-association-dto.js";
import { metricAssociationInternalSchema, type MetricAssociation } from "../models/metric-association.js";
import type { Servers } from "../servers.js";

export class MetricAssociations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Associate a Metric with a Feature
   *
   * @throws {@link MetricAssociations.MetricAssociationsControllerCreateError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  metricAssociationsControllerCreate(
    request: MetricAssociations.MetricAssociationsControllerCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<MetricAssociation, MetricAssociations.MetricAssociationsControllerCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{project}/metric-associations"),
        auth: noneAuth,
        pathParams: [{ name: "project", value: request.project, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createMetricAssociationDtoSchema },
      },
      {
        success: { kind: "json", schema: metricAssociationInternalSchema },
        errorFactory: MetricAssociations.MetricAssociationsControllerCreateError,
      },
      options,
    );
  }

  /**
   * Get Metric Associations
   *
   * @throws {@link MetricAssociations.MetricAssociationsControllerFindAllError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  metricAssociationsControllerFindAll(
    request: MetricAssociations.MetricAssociationsControllerFindAllRequest,
    options?: RequestOptions,
  ): ApiPromise<MetricAssociation[], MetricAssociations.MetricAssociationsControllerFindAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project}/metric-associations"),
        auth: noneAuth,
        pathParams: [{ name: "project", value: request.project, schema: s.string() }],
        query: [
          { name: "metric", value: request.metric, schema: s.optional(s.string()) },
          { name: "feature", value: request.feature, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => metricAssociationInternalSchema)) },
        errorFactory: MetricAssociations.MetricAssociationsControllerFindAllError,
      },
      options,
    );
  }

  /**
   * Delete an Association of a Metric and a Feature
   *
   * @throws {@link MetricAssociations.MetricAssociationsControllerRemoveError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  metricAssociationsControllerRemove(
    request: MetricAssociations.MetricAssociationsControllerRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, MetricAssociations.MetricAssociationsControllerRemoveError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/projects/{project}/metric-associations"),
        auth: noneAuth,
        pathParams: [{ name: "project", value: request.project, schema: s.string() }],
        query: [
          { name: "metric", value: request.metric, schema: s.string() },
          { name: "feature", value: request.feature, schema: s.string() },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: MetricAssociations.MetricAssociationsControllerRemoveError,
      },
      options,
    );
  }
}

export namespace MetricAssociations {
  export type MetricAssociationsControllerCreateRequest = {
    /** A Project key or ID */
    project: string;
    body: CreateMetricAssociationDto;
  };

  export class MetricAssociationsControllerCreateError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<MetricAssociationsControllerCreateError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type MetricAssociationsControllerFindAllRequest = {
    /** A Project key or ID */
    project: string;
    metric?: string;
    feature?: string;
  };

  export class MetricAssociationsControllerFindAllError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<MetricAssociationsControllerFindAllError> = [
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

  export type MetricAssociationsControllerRemoveRequest = {
    /** A Project key or ID */
    project: string;
    metric: string;
    feature: string;
  };

  export class MetricAssociationsControllerRemoveError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<MetricAssociationsControllerRemoveError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
