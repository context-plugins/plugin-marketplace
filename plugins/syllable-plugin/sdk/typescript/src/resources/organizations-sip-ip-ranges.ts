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
  organizationSipIpRangeCreateSchema,
  type OrganizationSipIpRangeCreate,
} from "../models/organization-sip-ip-range-create.js";
import {
  organizationSipIpRangeUpdateSchema,
  type OrganizationSipIpRangeUpdate,
} from "../models/organization-sip-ip-range-update.js";
import {
  organizationSipIpRangeSchema,
  type OrganizationSipIpRange,
} from "../models/organization-sip-ip-range.js";
import type { Servers } from "../servers.js";

export class OrganizationsSipIpRanges {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Organization Sip Ip Range
   *
   * @remarks
   * Create an unverified SIP signaling/media IP range for the current organization.
   *
   * @returns Successful Response
   *
   * @throws {@link OrganizationsSipIpRanges.OrganizationSipIpRangesCreateError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  organizationSipIpRangesCreate(
    request: OrganizationsSipIpRanges.OrganizationSipIpRangesCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<OrganizationSipIpRange, OrganizationsSipIpRanges.OrganizationSipIpRangesCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/organizations/sip_ip_ranges/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: organizationSipIpRangeCreateSchema },
      },
      {
        success: { kind: "json", schema: organizationSipIpRangeSchema },
        errorFactory: OrganizationsSipIpRanges.OrganizationSipIpRangesCreateError,
      },
      options,
    );
  }

  /**
   * Delete Organization Sip Ip Range
   *
   * @remarks
   * Delete a SIP signaling/media IP range for the current organization.
   *
   * @returns Successful Response
   *
   * @throws {@link OrganizationsSipIpRanges.OrganizationSipIpRangesDeleteError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  organizationSipIpRangesDelete(
    request: OrganizationsSipIpRanges.OrganizationSipIpRangesDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, OrganizationsSipIpRanges.OrganizationSipIpRangesDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/organizations/sip_ip_ranges/{sip_ip_range_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "sip_ip_range_id", value: request.sipIpRangeId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: OrganizationsSipIpRanges.OrganizationSipIpRangesDeleteError,
      },
      options,
    );
  }

  /**
   * List Organization Sip Ip Ranges
   *
   * @remarks
   * List SIP signaling/media IP ranges for the current organization.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  organizationSipIpRangesList(options?: RequestOptions): ApiPromise<OrganizationSipIpRange[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/organizations/sip_ip_ranges/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => organizationSipIpRangeSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update Organization Sip Ip Range
   *
   * @remarks
   * Update a SIP IP range. The verified status is managed by Syllable only.
   *
   * @returns Successful Response
   *
   * @throws {@link OrganizationsSipIpRanges.OrganizationSipIpRangesUpdateError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  organizationSipIpRangesUpdate(
    request: OrganizationsSipIpRanges.OrganizationSipIpRangesUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<OrganizationSipIpRange, OrganizationsSipIpRanges.OrganizationSipIpRangesUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/organizations/sip_ip_ranges/{sip_ip_range_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "sip_ip_range_id", value: request.sipIpRangeId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: organizationSipIpRangeUpdateSchema },
      },
      {
        success: { kind: "json", schema: organizationSipIpRangeSchema },
        errorFactory: OrganizationsSipIpRanges.OrganizationSipIpRangesUpdateError,
      },
      options,
    );
  }
}

export namespace OrganizationsSipIpRanges {
  export type OrganizationSipIpRangesCreateRequest = {
    body: OrganizationSipIpRangeCreate;
  };

  export class OrganizationSipIpRangesCreateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<OrganizationSipIpRangesCreateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type OrganizationSipIpRangesDeleteRequest = {
    sipIpRangeId: number;
  };

  export class OrganizationSipIpRangesDeleteError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<OrganizationSipIpRangesDeleteError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type OrganizationSipIpRangesUpdateRequest = {
    sipIpRangeId: number;
    body: OrganizationSipIpRangeUpdate;
  };

  export class OrganizationSipIpRangesUpdateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<OrganizationSipIpRangesUpdateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
