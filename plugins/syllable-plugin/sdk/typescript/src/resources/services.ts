import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  listResponseServiceResponseSchema,
  type ListResponseServiceResponse,
} from "../models/list-response-service-response.js";
import { serviceCreateRequestSchema, type ServiceCreateRequest } from "../models/service-create-request.js";
import { servicePropertiesSchema, type ServiceProperties } from "../models/service-properties.js";
import { serviceResponseSchema, type ServiceResponse } from "../models/service-response.js";
import { serviceUpdateRequestSchema, type ServiceUpdateRequest } from "../models/service-update-request.js";
import { endDatetime3Schema, type EndDatetime3 } from "../models/unions/end-datetime3.js";
import { fields17Schema, type Fields17 } from "../models/unions/fields17.js";
import { orderByDirection1Schema, type OrderByDirection1 } from "../models/unions/order-by-direction1.js";
import { orderBy35Schema, type OrderBy35 } from "../models/unions/order-by35.js";
import { pageSchema, type Page } from "../models/unions/page.js";
import { startDatetime3Schema, type StartDatetime3 } from "../models/unions/start-datetime3.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to service configuration. A service is a collection of tools. You can specify
 * an authentication method and values on a service, and any linked tools will use that auth
 * information to generate headers for HTTP calls.
 */
export class Services {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Service
   *
   * @remarks
   * Create a new service.
   *
   * @returns Successful Response
   *
   * @throws {@link Services.ServiceCreateError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  serviceCreate(
    request: Services.ServiceCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ServiceResponse, Services.ServiceCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/services/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: serviceCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: serviceResponseSchema },
        errorFactory: Services.ServiceCreateError,
      },
      options,
    );
  }

  /**
   * Delete Service
   *
   * @remarks
   * Delete a service. A service with linked tools cannot be deleted.
   *
   * @returns Successful Response
   *
   * @throws {@link Services.ServiceDeleteError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  serviceDelete(
    request: Services.ServiceDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Services.ServiceDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/services/{service_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "service_id", value: request.serviceId, schema: s.int() }],
        query: [{ name: "reason", value: request.reason, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Services.ServiceDeleteError,
      },
      options,
    );
  }

  /**
   * Service List
   *
   * @remarks
   * List the existing services
   *
   * @returns Successful Response
   *
   * @throws {@link Services.ServiceListError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  serviceList(
    request: Services.ServiceListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseServiceResponse, Services.ServiceListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/services/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          {
            name: "search_fields",
            value: request.searchFields,
            schema: s.optional(s.array(s.lazy(() => servicePropertiesSchema))),
          },
          {
            name: "search_field_values",
            value: request.searchFieldValues,
            schema: s.optional(s.array(s.string())),
          },
          { name: "order_by", value: request.orderBy, schema: s.optional(s.lazy(() => orderBy35Schema)) },
          {
            name: "order_by_direction",
            value: request.orderByDirection,
            schema: s.optional(s.lazy(() => orderByDirection1Schema)),
          },
          { name: "fields", value: request.fields, schema: s.optional(s.lazy(() => fields17Schema)) },
          {
            name: "start_datetime",
            value: request.startDatetime,
            schema: s.optional(s.lazy(() => startDatetime3Schema)),
          },
          {
            name: "end_datetime",
            value: request.endDatetime,
            schema: s.optional(s.lazy(() => endDatetime3Schema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseServiceResponseSchema },
        errorFactory: Services.ServiceListError,
      },
      options,
    );
  }

  /**
   * Update Service
   *
   * @remarks
   * Update an existing service.
   *
   * @returns Successful Response
   *
   * @throws {@link Services.ServiceUpdateError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  serviceUpdate(
    request: Services.ServiceUpdateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ServiceResponse, Services.ServiceUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/services/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: serviceUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: serviceResponseSchema },
        errorFactory: Services.ServiceUpdateError,
      },
      options,
    );
  }

  /**
   * Get Service By Id
   *
   * @remarks
   * Get a service by its ID
   *
   * @returns Successful Response
   *
   * @throws {@link Services.ServicesGetByIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  servicesGetById(
    request: Services.ServicesGetByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ServiceResponse, Services.ServicesGetByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/services/{service_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "service_id", value: request.serviceId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: serviceResponseSchema },
        errorFactory: Services.ServicesGetByIdError,
      },
      options,
    );
  }
}

export namespace Services {
  export type ServiceCreateRequestParams = {
    body: ServiceCreateRequest;
  };

  export class ServiceCreateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ServiceCreateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ServiceDeleteRequest = {
    serviceId: number;
    reason: string;
  };

  export class ServiceDeleteError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ServiceDeleteError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ServiceListRequest = {
    /** The page number from which to start (0-based) */
    page?: Page;
    /** The maximum number of items to return @default 25 */
    limit?: number;
    /** String names of fields to search. Correspond by index to search field values */
    searchFields?: ServiceProperties[];
    /**
     * Values of fields to search. Correspond by index to search fields. Unless field name contains
     * "list", an individual search field value cannot be a list
     */
    searchFieldValues?: string[];
    /** The field whose value should be used to order the results */
    orderBy?: OrderBy35;
    /** The direction in which to order the results */
    orderByDirection?: OrderByDirection1;
    /** The fields to include in the response */
    fields?: Fields17;
    /** The start datetime for filtering results */
    startDatetime?: StartDatetime3;
    /** The end datetime for filtering results */
    endDatetime?: EndDatetime3;
  };

  export class ServiceListError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ServiceListError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ServiceUpdateRequestParams = {
    body: ServiceUpdateRequest;
  };

  export class ServiceUpdateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ServiceUpdateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ServicesGetByIdRequest = {
    serviceId: number;
  };

  export class ServicesGetByIdError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ServicesGetByIdError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
