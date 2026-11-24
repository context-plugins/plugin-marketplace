import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  v3CompaniesEnrichRequestInternalSchema,
  type V3CompaniesEnrichRequest,
} from "../models/v3-companies-enrich-request.js";
import {
  v3CompaniesEnrichResponseInternalSchema,
  type V3CompaniesEnrichResponse,
} from "../models/v3-companies-enrich-response.js";
import {
  v3ContactsEnrichRequestInternalSchema,
  type V3ContactsEnrichRequest,
} from "../models/v3-contacts-enrich-request.js";
import {
  v3ContactsEnrichResponseInternalSchema,
  type V3ContactsEnrichResponse,
} from "../models/v3-contacts-enrich-response.js";
import type { Servers } from "../servers.js";

/**
 * **Enrich APIs:** Retrieve full profile data for contacts or companies by ID.
 *
 * Pass IDs from Search results to reveal emails, phones, and full firmographic data.
 *
 * > **Billing:** Charged per revealed field via per-datapoint pricing (`revealEmail`,
 * `revealPhone`, `reveal_company`).
 */
export class Enrich {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Enrich Companies
   *
   * @remarks
   * Reveal full company data for companies you've already found via Search Companies.
   *
   * Pass up to 100 company `ids` (from the search response). Each enriched result includes:
   * - Firmographics: size, revenue range, year founded, company type
   * - Industry: primary industry, sub-industry, SIC/NAICS codes
   * - Locations: HQ and additional office sites
   * - Technologies, funding rounds, buyer intent topics
   * - LinkedIn followers, logo URL, social links
   *
   * > **Billing:** Charged per successful result via the `reveal_company` action.
   *
   * > **Persisting to a table:** Pass `tableId` to also add these companies to an existing table
   * and populate the relevant enrichment columns. See Companies Tables.
   *
   * @returns Successful response
   *
   * @throws {@link Enrich.EnrichCompaniesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  enrichCompanies(
    request: Enrich.EnrichCompaniesRequest,
    options?: RequestOptions,
  ): ApiPromise<V3CompaniesEnrichResponse, Enrich.EnrichCompaniesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/companies/enrich"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v3CompaniesEnrichRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: v3CompaniesEnrichResponseInternalSchema },
        errorFactory: Enrich.EnrichCompaniesError,
      },
      options,
    );
  }

  /**
   * Enrich Contacts
   *
   * @remarks
   * Reveal full contact data for contacts you've already found via Search Contacts.
   *
   * Pass up to 100 contact `ids` (from the search response). Use the `reveal` field to control what
   * gets unlocked:
   * - `emails` — work and personal email addresses
   * - `phones` — mobile and direct phone numbers
   * - Omit `reveal` to get both by default
   *
   * ---
   *
   * ### Waterfall Reveal
   * Fall through to your enabled third-party providers when Lusha's own data has no match, for
   * extra reach on hard-to-match contacts.
   *
   * If **Data Waterfall** is enabled on your account, with specific providers turned on under
   * **Account > Waterfall**, the waterfall runs automatically on every Enrich Contacts call - you
   * don't need to pass anything to trigger it.
   *
   * Pass `waterfallEnabled: false` to opt a specific call out:
   *
   * ```json
   * "reveal": ["emails", "phones"],
   * "waterfallEnabled": false
   * ```
   *
   * - `reveal` controls **which fields** come back.
   * - `waterfallEnabled` controls whether the waterfall runs for this call at all. Defaults to
   *   `true` whenever Data Waterfall is enabled on your account; pass `false` to disable it just
   *   for this call.
   * - Provider order isn't configurable - Lusha manages that internally.
   * - If Data Waterfall is off or no providers are enabled on your account, `waterfallEnabled` has
   *   no effect either way. --- > **Tip:** If `canReveal.credits` is `0` in the search response,
   *   that data has already been revealed for your account — re-enriching it is free.
   *
   * > **Billing:** Charged per revealed field (email or phone) via per-datapoint pricing.
   *
   * > **Persisting to a table:** Pass `tableId` to also add these contacts to an existing table and
   * populate the Work email / Phone columns. See Contacts Tables.
   *
   * @returns Successful response
   *
   * @throws {@link Enrich.EnrichContactsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  enrichContacts(
    request: Enrich.EnrichContactsRequest,
    options?: RequestOptions,
  ): ApiPromise<V3ContactsEnrichResponse, Enrich.EnrichContactsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/contacts/enrich"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v3ContactsEnrichRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: v3ContactsEnrichResponseInternalSchema },
        errorFactory: Enrich.EnrichContactsError,
      },
      options,
    );
  }
}

export namespace Enrich {
  export type EnrichCompaniesRequest = {
    body: V3CompaniesEnrichRequest;
  };

  export class EnrichCompaniesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<EnrichCompaniesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 402, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type EnrichContactsRequest = {
    body: V3ContactsEnrichRequest;
  };

  export class EnrichContactsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<EnrichContactsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 402, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
