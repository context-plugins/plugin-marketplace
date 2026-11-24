import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  companiesApiVendorsResponseInternalSchema,
  type CompaniesApiVendorsResponse,
} from "../models/companies-api-vendors-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { vendorCreateInternalSchema, type VendorCreate } from "../models/vendor-create.js";
import { vendorUpdateInternalSchema, type VendorUpdate } from "../models/vendor-update.js";
import { vendorInternalSchema, type Vendor } from "../models/vendor.js";
import type { Servers } from "../servers.js";

/**
 * Manage vendor records
 */
export class Vendors {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a Vendor
   *
   * @remarks
   * Creates a new vendor object in the specified company.
   *
   * @returns Vendor created successfully
   *
   * @throws {@link Vendors.CreateVendorError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link MicrosoftDynamicsNavError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createVendor(
    request: Vendors.CreateVendorRequest,
    options?: RequestOptions,
  ): ApiPromise<Vendor, Vendors.CreateVendorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/companies({company_id})/vendors"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [{ name: "company_id", value: request.companyId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: vendorCreateInternalSchema },
      },
      {
        success: { kind: "json", schema: vendorInternalSchema },
        errorFactory: Vendors.CreateVendorError,
      },
      options,
    );
  }

  /**
   * Delete a Vendor
   *
   * @remarks
   * Deletes a vendor by ID.
   *
   * @returns Vendor deleted successfully
   *
   * @throws {@link Vendors.DeleteVendorError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link MicrosoftDynamicsNavError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteVendor(
    request: Vendors.DeleteVendorRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Vendors.DeleteVendorError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/companies({company_id})/vendors({vendor_id})"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          { name: "company_id", value: request.companyId, schema: s.string() },
          { name: "vendor_id", value: request.vendorId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Vendors.DeleteVendorError,
      },
      options,
    );
  }

  /**
   * Get a Vendor
   *
   * @remarks
   * Retrieves a specific vendor by ID.
   *
   * @returns Successfully retrieved vendor
   *
   * @throws {@link Vendors.GetVendorError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link MicrosoftDynamicsNavError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getVendor(
    request: Vendors.GetVendorRequest,
    options?: RequestOptions,
  ): ApiPromise<Vendor, Vendors.GetVendorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies({company_id})/vendors({vendor_id})"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          { name: "company_id", value: request.companyId, schema: s.string() },
          { name: "vendor_id", value: request.vendorId, schema: s.string() },
        ],
        query: [{ name: "$select", value: request.select, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: vendorInternalSchema },
        errorFactory: Vendors.GetVendorError,
      },
      options,
    );
  }

  /**
   * List Vendors
   *
   * @remarks
   * Returns a list of vendor objects from the specified company.
   *
   * @returns Successfully retrieved vendors
   *
   * @throws {@link Vendors.ListVendorsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link MicrosoftDynamicsNavError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listVendors(
    request: Vendors.ListVendorsRequest,
    options?: RequestOptions,
  ): ApiPromise<CompaniesApiVendorsResponse, Vendors.ListVendorsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies({company_id})/vendors"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [{ name: "company_id", value: request.companyId, schema: s.string() }],
        query: [
          { name: "$top", value: request.top, schema: s.optional(s.int()) },
          { name: "$skip", value: request.skip, schema: s.optional(s.int()) },
          { name: "$filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "$orderby", value: request.orderby, schema: s.optional(s.string()) },
          { name: "$select", value: request.select, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companiesApiVendorsResponseInternalSchema },
        errorFactory: Vendors.ListVendorsError,
      },
      options,
    );
  }

  /**
   * Update a Vendor
   *
   * @remarks
   * Updates an existing vendor object.
   *
   * @returns Vendor updated successfully
   *
   * @throws {@link Vendors.UpdateVendorError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link MicrosoftDynamicsNavError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateVendor(
    request: Vendors.UpdateVendorRequest,
    options?: RequestOptions,
  ): ApiPromise<Vendor, Vendors.UpdateVendorError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/companies({company_id})/vendors({vendor_id})"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          { name: "company_id", value: request.companyId, schema: s.string() },
          { name: "vendor_id", value: request.vendorId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "If-Match", value: request.ifMatch, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: vendorUpdateInternalSchema },
      },
      {
        success: { kind: "json", schema: vendorInternalSchema },
        errorFactory: Vendors.UpdateVendorError,
      },
      options,
    );
  }
}

export namespace Vendors {
  export type CreateVendorRequest = {
    /** The unique identifier of the company */
    companyId: string;
    body: VendorCreate;
  };

  export class CreateVendorError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateVendorError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteVendorRequest = {
    /** The unique identifier of the company */
    companyId: string;
    /** The unique identifier of the vendor */
    vendorId: string;
  };

  export class DeleteVendorError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteVendorError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetVendorRequest = {
    /** The unique identifier of the company */
    companyId: string;
    /** The unique identifier of the vendor */
    vendorId: string;
    /** Comma-separated list of properties to include in the response */
    select?: string;
  };

  export class GetVendorError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetVendorError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListVendorsRequest = {
    /** The unique identifier of the company */
    companyId: string;
    /** Maximum number of items to return */
    top?: number;
    /** Number of items to skip */
    skip?: number;
    /** OData filter expression */
    filter?: string;
    /** OData order by expression */
    orderby?: string;
    /** Comma-separated list of properties to include in the response */
    select?: string;
  };

  export const listVendorsRequestSchema: Schema<ListVendorsRequest> = s.lazySchema(() =>
    s.object<ListVendorsRequest>({
      companyId: s.string(),
      top: s.optional(s.int().check(s.gte(0))),
      skip: s.optional(s.int().check(s.gte(0))),
      filter: s.optional(s.string()),
      orderby: s.optional(s.string()),
      select: s.optional(s.string()),
    }),
  );

  export class ListVendorsError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListVendorsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateVendorRequest = {
    /** The unique identifier of the company */
    companyId: string;
    /** The unique identifier of the vendor */
    vendorId: string;
    /** ETag value for optimistic concurrency control */
    ifMatch: string;
    body: VendorUpdate;
  };

  export class UpdateVendorError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateVendorError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
