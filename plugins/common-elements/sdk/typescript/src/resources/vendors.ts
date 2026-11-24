import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { apiV1VendorsResponseSchema, type ApiV1VendorsResponse } from "../models/api-v1-vendors-response.js";
import {
  apiV1VendorsResponse1Schema,
  type ApiV1VendorsResponse1,
} from "../models/api-v1-vendors-response1.js";
import {
  apiV1VendorsReviewsResponseSchema,
  type ApiV1VendorsReviewsResponse,
} from "../models/api-v1-vendors-reviews-response.js";
import { errorInternalSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

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
   * The full public profile for one verified vendor: identity, self-reported…
   *
   * @remarks
   * The full public profile for one verified vendor: identity, self-reported service offerings,
   * review summary, and the neutral, independently-sourced trust profile (workers' comp status,
   * professional licenses, enforcement history) pulled from public records.
   *
   * - Never returns private contact data, street address lines, phone, or email. That data does not
   *   exist on this endpoint at all, not merely hidden.
   * - Distinguish self-asserted from verified:
   *   description/services_offered/certifications/license_number are what the vendor states about
   *   itself; trust_profile is what public records independently confirm.
   *
   * @returns Success.
   *
   * @throws {@link Vendors.VendorsDetailError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  vendorsDetail(
    request: Vendors.VendorsDetailRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1VendorsResponse1, Vendors.VendorsDetailError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/vendors/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1VendorsResponse1Schema },
        errorFactory: Vendors.VendorsDetailError,
      },
      options,
    );
  }

  /**
   * Search the public vendor directory: verified vendors only, ranked by review…
   *
   * @remarks
   * Search the public vendor directory: verified vendors only, ranked by review rating. Filter by
   * name/description text, state (home or served), or service category.
   *
   * **Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.
   *
   * - Only verified vendors are listed. Coverage grows as vendors complete verification — see the
   *   note this endpoint returns on an empty result for the current count.
   *
   * @returns Success.
   *
   * @throws {@link Vendors.VendorsListError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  vendorsList(
    request: Vendors.VendorsListRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1VendorsResponse, Vendors.VendorsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/vendors"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "state", value: request.state, schema: s.optional(s.string()) },
          { name: "category", value: request.category, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.float64()) },
          { name: "offset", value: request.offset, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1VendorsResponseSchema },
        errorFactory: Vendors.VendorsListError,
      },
      options,
    );
  }

  /**
   * Published reviews for a vendor, newest first
   *
   * @remarks
   * Published reviews for a vendor, newest first. Every review is tied to a completed RFP or
   * proposal, so each one is a verified-buyer review, not an open review anyone can post.
   *
   * - Reviewer identity is never included, by design — the reviewing association is withheld to
   *   keep the projection neutral.
   *
   * @returns Success.
   *
   * @throws {@link Vendors.VendorsReviewsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  vendorsReviews(
    request: Vendors.VendorsReviewsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1VendorsReviewsResponse, Vendors.VendorsReviewsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/vendors/{id}/reviews"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.float64()) },
          { name: "offset", value: request.offset, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1VendorsReviewsResponseSchema },
        errorFactory: Vendors.VendorsReviewsError,
      },
      options,
    );
  }
}

export namespace Vendors {
  export type VendorsDetailRequest = {
    /** Vendor organization id. */
    id: string;
  };

  export class VendorsDetailError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<VendorsDetailError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type VendorsListRequest = {
    /** Free-text search over name and description. */
    q?: string;
    /** Two-letter state code. Matches either the vendor's home state or a state it serves. */
    state?: string;
    /** A vendor-category slug, matched against the vendor's self-tagged service categories. */
    category?: string;
    /** Max results per page. Free keys are capped at 50; paid tiers get a higher cap. */
    limit?: number;
    /** Pagination offset (default 0). */
    offset?: number;
  };

  export class VendorsListError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<VendorsListError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type VendorsReviewsRequest = {
    /** Vendor organization id. */
    id: string;
    /** Max results, 1 to 100 (default 25). */
    limit?: number;
    /** Pagination offset (default 0). */
    offset?: number;
  };

  export class VendorsReviewsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<VendorsReviewsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }
}
