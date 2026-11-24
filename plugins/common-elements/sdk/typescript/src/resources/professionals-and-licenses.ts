import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  apiV1LicensesVerifyResponseSchema,
  type ApiV1LicensesVerifyResponse,
} from "../models/api-v1-licenses-verify-response.js";
import {
  apiV1ProfessionalsAssociationsResponseSchema,
  type ApiV1ProfessionalsAssociationsResponse,
} from "../models/api-v1-professionals-associations-response.js";
import {
  apiV1ProfessionalsResponseSchema,
  type ApiV1ProfessionalsResponse,
} from "../models/api-v1-professionals-response.js";
import {
  apiV1ProfessionalsSearchResponseSchema,
  type ApiV1ProfessionalsSearchResponse,
} from "../models/api-v1-professionals-search-response.js";
import { errorInternalSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

export class ProfessionalsAndLicenses {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Verify a professional license against the state board roll by license number…
   *
   * @remarks
   * Verify a professional license against the state board roll by license number, or by name when
   * you do not have the number. Returns the raw status and expiry plus two derived flags, because a
   * status that reads "current" can still be past its expiry date.
   *
   * - Branch on is_active, not on status. A board roll can carry a "Current" status on a license
   *   whose expiry date has already passed.
   *
   * @returns Success.
   *
   * @throws {@link ProfessionalsAndLicenses.LicensesVerifyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  licensesVerify(
    request: ProfessionalsAndLicenses.LicensesVerifyRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1LicensesVerifyResponse, ProfessionalsAndLicenses.LicensesVerifyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/licenses/verify"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "state", value: request.state, schema: s.string() },
          { name: "license_number", value: request.licenseNumber, schema: s.optional(s.string()) },
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "license_type", value: request.licenseType, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1LicensesVerifyResponseSchema },
        errorFactory: ProfessionalsAndLicenses.LicensesVerifyError,
      },
      options,
    );
  }

  /**
   * The communities a professional or firm is on record serving: the…
   *
   * @remarks
   * The communities a professional or firm is on record serving: the manager-to-portfolio view.
   * Merges confirmed relationship edges with name-matched rows from the public management registry,
   * de-duplicated, with the provenance of each row.
   *
   * - Read the source field before treating a row as confirmed. A "relationship:" row is a
   *   confirmed edge in the graph; a "manager_view:" row is a name match against a public registry
   *   and carries the ambiguity of name matching.
   * - When the license has no linked organization (linked_org_id is null), only name-matched rows
   *   are returned.
   *
   * @returns Success.
   *
   * @throws {@link ProfessionalsAndLicenses.ProfessionalsAssociationsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  professionalsAssociations(
    request: ProfessionalsAndLicenses.ProfessionalsAssociationsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1ProfessionalsAssociationsResponse,
    ProfessionalsAndLicenses.ProfessionalsAssociationsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/professionals/{id}/associations"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ProfessionalsAssociationsResponseSchema },
        errorFactory: ProfessionalsAndLicenses.ProfessionalsAssociationsError,
      },
      options,
    );
  }

  /**
   * The full single-record projection for one licensed professional or firm…
   *
   * @remarks
   * The full single-record projection for one licensed professional or firm, including the
   * city/county/zip of record and the linked Common Elements organization. The street address is
   * not returned: a licence with no firm and no d/b/a is an individual, and that address is
   * overwhelmingly a home.
   *
   * - Business address of record only. No personal email or phone is returned by any Common
   *   Elements endpoint.
   *
   * @returns Success.
   *
   * @throws {@link ProfessionalsAndLicenses.ProfessionalsDetailError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  professionalsDetail(
    request: ProfessionalsAndLicenses.ProfessionalsDetailRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ProfessionalsResponse, ProfessionalsAndLicenses.ProfessionalsDetailError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/professionals/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ProfessionalsResponseSchema },
        errorFactory: ProfessionalsAndLicenses.ProfessionalsDetailError,
      },
      options,
    );
  }

  /**
   * Search the licensed professional graph: community association managers…
   *
   * @remarks
   * Search the licensed professional graph: community association managers, contractors, engineers,
   * and the firms they work under, from state licensing board rolls. Filter by name, state, license
   * type, board, or status.
   *
   * **Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.
   *
   * - At least one of q, state, license_type, or board is required. The roll is multi-million rows
   *   and cannot be paged unfiltered. Omitting all four returns a 400.
   *
   * @returns Success.
   *
   * @throws {@link ProfessionalsAndLicenses.ProfessionalsSearchError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  professionalsSearch(
    request: ProfessionalsAndLicenses.ProfessionalsSearchRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1ProfessionalsSearchResponse, ProfessionalsAndLicenses.ProfessionalsSearchError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/professionals/search"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "state", value: request.state, schema: s.optional(s.string()) },
          { name: "license_type", value: request.licenseType, schema: s.optional(s.string()) },
          { name: "board", value: request.board, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.float64()) },
          { name: "offset", value: request.offset, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ProfessionalsSearchResponseSchema },
        errorFactory: ProfessionalsAndLicenses.ProfessionalsSearchError,
      },
      options,
    );
  }
}

export namespace ProfessionalsAndLicenses {
  export type LicensesVerifyRequest = {
    /** Two-letter state code. */
    state: string;
    /** Exact license number. Provide this or name. */
    licenseNumber?: string;
    /** Licensee name, substring match. Provide this or license_number. */
    name?: string;
    /** Substring filter on license type, e.g. "CAM". */
    licenseType?: string;
    /** Max results, 1 to 25 (default 10). */
    limit?: number;
  };

  export class LicensesVerifyError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<LicensesVerifyError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type ProfessionalsAssociationsRequest = {
    /** License record UUID, from the search endpoint. */
    id: string;
  };

  export class ProfessionalsAssociationsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ProfessionalsAssociationsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type ProfessionalsDetailRequest = {
    /** License record UUID, from the search endpoint. */
    id: string;
  };

  export class ProfessionalsDetailError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ProfessionalsDetailError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type ProfessionalsSearchRequest = {
    /** Licensee name, substring match. Minimum 2 characters. */
    q?: string;
    /** Two-letter state code. */
    state?: string;
    /** Exact license type, e.g. "CAM". */
    licenseType?: string;
    /** Exact issuing board name. */
    board?: string;
    /** Exact board status. */
    status?: string;
    /** Rows to return, 1 to 100 (default 25). */
    limit?: number;
    /** Pagination offset (default 0). */
    offset?: number;
  };

  export class ProfessionalsSearchError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ProfessionalsSearchError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }
}
