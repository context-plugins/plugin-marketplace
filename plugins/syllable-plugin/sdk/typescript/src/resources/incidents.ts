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
  incidentCreateRequestSchema,
  type IncidentCreateRequest,
} from "../models/incident-create-request.js";
import {
  incidentOrganizationResponseSchema,
  type IncidentOrganizationResponse,
} from "../models/incident-organization-response.js";
import { incidentPropertiesSchema, type IncidentProperties } from "../models/incident-properties.js";
import { incidentResponseSchema, type IncidentResponse } from "../models/incident-response.js";
import {
  incidentUpdateRequestSchema,
  type IncidentUpdateRequest,
} from "../models/incident-update-request.js";
import {
  listResponseIncidentResponseSchema,
  type ListResponseIncidentResponse,
} from "../models/list-response-incident-response.js";
import { endDatetime3Schema, type EndDatetime3 } from "../models/unions/end-datetime3.js";
import { fields7Schema, type Fields7 } from "../models/unions/fields7.js";
import { orderByDirection1Schema, type OrderByDirection1 } from "../models/unions/order-by-direction1.js";
import { orderBy7Schema, type OrderBy7 } from "../models/unions/order-by7.js";
import { pageSchema, type Page } from "../models/unions/page.js";
import { startDatetime3Schema, type StartDatetime3 } from "../models/unions/start-datetime3.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to incidents.
 */
export class Incidents {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Incident
   *
   * @remarks
   * Create a new incident
   *
   * @returns Successful Response
   *
   * @throws {@link Incidents.IncidentCreateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  incidentCreate(
    request: Incidents.IncidentCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<IncidentResponse, Incidents.IncidentCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/incidents/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: incidentCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: incidentResponseSchema },
        errorFactory: Incidents.IncidentCreateError,
      },
      options,
    );
  }

  /**
   * Delete Incident
   *
   * @remarks
   * Delete an incident by ID
   *
   * @returns Successful Response
   *
   * @throws {@link Incidents.IncidentDeleteError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  incidentDelete(
    request: Incidents.IncidentDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Incidents.IncidentDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/incidents/{incident_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "incident_id", value: request.incidentId, schema: s.int() }],
        query: [{ name: "reason", value: request.reason, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Incidents.IncidentDeleteError,
      },
      options,
    );
  }

  /**
   * Get Incident By Id
   *
   * @remarks
   * Get incident by ID
   *
   * @returns Successful Response
   *
   * @throws {@link Incidents.IncidentGetByIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  incidentGetById(
    request: Incidents.IncidentGetByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<IncidentResponse, Incidents.IncidentGetByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/incidents/{incident_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "incident_id", value: request.incidentId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: incidentResponseSchema },
        errorFactory: Incidents.IncidentGetByIdError,
      },
      options,
    );
  }

  /**
   * Get Organizations
   *
   * @remarks
   * Get all organizations
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  incidentGetOrganizations(options?: RequestOptions): ApiPromise<IncidentOrganizationResponse[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/incidents/organizations"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => incidentOrganizationResponseSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List Incidents
   *
   * @remarks
   * List service incidents with pagination and filtering
   *
   * @returns Successful Response
   *
   * @throws {@link Incidents.IncidentListError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  incidentList(
    request: Incidents.IncidentListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseIncidentResponse, Incidents.IncidentListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/incidents/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          {
            name: "search_fields",
            value: request.searchFields,
            schema: s.optional(s.array(s.lazy(() => incidentPropertiesSchema))),
          },
          {
            name: "search_field_values",
            value: request.searchFieldValues,
            schema: s.optional(s.array(s.string())),
          },
          { name: "order_by", value: request.orderBy, schema: s.optional(s.lazy(() => orderBy7Schema)) },
          {
            name: "order_by_direction",
            value: request.orderByDirection,
            schema: s.optional(s.lazy(() => orderByDirection1Schema)),
          },
          { name: "fields", value: request.fields, schema: s.optional(s.lazy(() => fields7Schema)) },
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
        success: { kind: "json", schema: listResponseIncidentResponseSchema },
        errorFactory: Incidents.IncidentListError,
      },
      options,
    );
  }

  /**
   * Update Incident
   *
   * @remarks
   * Update an existing incident
   *
   * @returns Successful Response
   *
   * @throws {@link Incidents.IncidentUpdateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  incidentUpdate(
    request: Incidents.IncidentUpdateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<IncidentResponse, Incidents.IncidentUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/incidents/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: incidentUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: incidentResponseSchema },
        errorFactory: Incidents.IncidentUpdateError,
      },
      options,
    );
  }
}

export namespace Incidents {
  export type IncidentCreateRequestParams = {
    body: IncidentCreateRequest;
  };

  export class IncidentCreateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<IncidentCreateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type IncidentDeleteRequest = {
    incidentId: number;
    reason: string;
  };

  export class IncidentDeleteError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<IncidentDeleteError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type IncidentGetByIdRequest = {
    incidentId: number;
  };

  export class IncidentGetByIdError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<IncidentGetByIdError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type IncidentListRequest = {
    /** The page number from which to start (0-based) */
    page?: Page;
    /** The maximum number of items to return @default 25 */
    limit?: number;
    /** String names of fields to search. Correspond by index to search field values */
    searchFields?: IncidentProperties[];
    /**
     * Values of fields to search. Correspond by index to search fields. Unless field name contains
     * "list", an individual search field value cannot be a list
     */
    searchFieldValues?: string[];
    /** The field whose value should be used to order the results */
    orderBy?: OrderBy7;
    /** The direction in which to order the results */
    orderByDirection?: OrderByDirection1;
    /** The fields to include in the response */
    fields?: Fields7;
    /** The start datetime for filtering results */
    startDatetime?: StartDatetime3;
    /** The end datetime for filtering results */
    endDatetime?: EndDatetime3;
  };

  export class IncidentListError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<IncidentListError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type IncidentUpdateRequestParams = {
    body: IncidentUpdateRequest;
  };

  export class IncidentUpdateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<IncidentUpdateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
