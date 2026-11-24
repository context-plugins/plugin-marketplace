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
import { brandKitListSchema, type BrandKitList } from "../models/brand-kit-list.js";
import { brandKitSchema, type BrandKit } from "../models/brand-kit.js";
import {
  createBrandKitRequestSchema,
  type CreateBrandKitRequest,
} from "../models/create-brand-kit-request.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * Brand Kits are centralized repositories for an organization's brand identity assets, guidelines,
 * and AI configuration. They are used to ensure consistent brand voice and style across
 * AI-generated content.
 */
export class BrandKits {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a Brand Kit
   *
   * @remarks
   * Creates a new Brand Kit in the organization with brand identity configuration including name,
   * description, guidelines, and associated metadata.
   *
   * @returns The newly created Brand Kit.
   *
   * @throws {@link BrandKits.CreateBrandKitError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBrandKit(
    request: BrandKits.CreateBrandKitRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BrandKit, BrandKits.CreateBrandKitError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultContentstackBrandKitManagementBrandKitsApi("/v1/brand-kits"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [],
        query: [],
        headers: [
          { name: "organization_uid", value: request.organizationUid, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createBrandKitRequestSchema },
      },
      {
        success: { kind: "json", schema: brandKitSchema },
        errorFactory: BrandKits.CreateBrandKitError,
      },
      options,
    );
  }

  /**
   * Delete a Brand Kit
   *
   * @remarks
   * Permanently removes a Brand Kit from the organization including all associated voice profiles
   * and knowledge vault content.
   *
   * @returns Brand Kit deleted successfully.
   *
   * @throws {@link BrandKits.DeleteBrandKitError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteBrandKit(
    request: BrandKits.DeleteBrandKitRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, BrandKits.DeleteBrandKitError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultContentstackBrandKitManagementBrandKitsApi(
          "/v1/brand-kits/{brand_kit_uid}",
        ),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [{ name: "brand_kit_uid", value: request.brandKitUid, schema: s.string() }],
        query: [],
        headers: [
          { name: "organization_uid", value: request.organizationUid, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: BrandKits.DeleteBrandKitError,
      },
      options,
    );
  }

  /**
   * Get all Brand Kits
   *
   * @remarks
   * Retrieves all Brand Kits in the organization with pagination support and optional filtering.
   * Each Brand Kit contains brand identity information used for AI content generation.
   *
   * @returns A list of Brand Kits in the organization.
   *
   * @throws {@link BrandKits.GetAllBrandKitsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllBrandKits(
    request: BrandKits.GetAllBrandKitsRequest,
    options?: RequestOptions,
  ): ApiPromise<BrandKitList, BrandKits.GetAllBrandKitsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackBrandKitManagementBrandKitsApi("/v1/brand-kits"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [],
        query: [
          { name: "skip", value: request.skip, schema: s.defaulted(s.int(), 0) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
        ],
        headers: [{ name: "organization_uid", value: request.organizationUid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: brandKitListSchema },
        errorFactory: BrandKits.GetAllBrandKitsError,
      },
      options,
    );
  }

  /**
   * Get a Brand Kit
   *
   * @remarks
   * Retrieves the full details of a specific Brand Kit including its brand identity configuration,
   * voice profiles, and associated knowledge vault content.
   *
   * @returns The requested Brand Kit.
   *
   * @throws {@link BrandKits.GetBrandKitError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBrandKit(
    request: BrandKits.GetBrandKitRequest,
    options?: RequestOptions,
  ): ApiPromise<BrandKit, BrandKits.GetBrandKitError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackBrandKitManagementBrandKitsApi(
          "/v1/brand-kits/{brand_kit_uid}",
        ),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [{ name: "brand_kit_uid", value: request.brandKitUid, schema: s.string() }],
        query: [],
        headers: [{ name: "organization_uid", value: request.organizationUid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: brandKitSchema },
        errorFactory: BrandKits.GetBrandKitError,
      },
      options,
    );
  }

  /**
   * Update a Brand Kit
   *
   * @remarks
   * Updates the configuration and brand identity information for an existing Brand Kit.
   *
   * @returns The updated Brand Kit.
   *
   * @throws {@link BrandKits.UpdateBrandKitError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateBrandKit(
    request: BrandKits.UpdateBrandKitRequest,
    options?: RequestOptions,
  ): ApiPromise<BrandKit, BrandKits.UpdateBrandKitError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultContentstackBrandKitManagementBrandKitsApi(
          "/v1/brand-kits/{brand_kit_uid}",
        ),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [{ name: "brand_kit_uid", value: request.brandKitUid, schema: s.string() }],
        query: [],
        headers: [
          { name: "organization_uid", value: request.organizationUid, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createBrandKitRequestSchema },
      },
      {
        success: { kind: "json", schema: brandKitSchema },
        errorFactory: BrandKits.UpdateBrandKitError,
      },
      options,
    );
  }
}

export namespace BrandKits {
  export type CreateBrandKitRequestParams = {
    /** The unique identifier of the organization. */
    organizationUid: string;
    body: CreateBrandKitRequest;
  };

  export class CreateBrandKitError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<CreateBrandKitError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteBrandKitRequest = {
    /** The unique identifier of the Brand Kit. */
    brandKitUid: string;
    /** The unique identifier of the organization. */
    organizationUid: string;
  };

  export class DeleteBrandKitError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteBrandKitError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAllBrandKitsRequest = {
    /** Number of records to skip for pagination. @default 0 */
    skip?: number;
    /** Maximum number of records to return. @default 25 */
    limit?: number;
    /** The unique identifier of the organization. */
    organizationUid: string;
  };

  export const getAllBrandKitsRequestSchema: Schema<GetAllBrandKitsRequest> = s.lazySchema(() =>
    s.object<GetAllBrandKitsRequest>({
      skip: s.defaulted(s.int().check(s.gte(0)), 0),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 25),
      organizationUid: s.string(),
    }),
  );

  export class GetAllBrandKitsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetAllBrandKitsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetBrandKitRequest = {
    /** The unique identifier of the Brand Kit. */
    brandKitUid: string;
    /** The unique identifier of the organization. */
    organizationUid: string;
  };

  export class GetBrandKitError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetBrandKitError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateBrandKitRequest = {
    /** The unique identifier of the Brand Kit. */
    brandKitUid: string;
    /** The unique identifier of the organization. */
    organizationUid: string;
    body: CreateBrandKitRequest;
  };

  export class UpdateBrandKitError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateBrandKitError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
