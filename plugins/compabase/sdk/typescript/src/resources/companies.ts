import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  companyCountResponseInternalSchema,
  type CompanyCountResponse,
} from "../models/company-count-response.js";
import { companyListResponseSchema, type CompanyListResponse } from "../models/company-list-response.js";
import { Currency, currencySchema } from "../models/currency.js";
import { Dir, dirSchema } from "../models/dir.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { Locale, localeSchema } from "../models/locale.js";
import { sortSchema, type Sort } from "../models/sort.js";
import type { Servers } from "../servers.js";

export class Companies {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * CEIDG profile by NIP
   *
   * @remarks
   * Sole-proprietor (CEIDG) profile by **NIP**. Subject to public CEIDG catalog visibility. Contact
   * email/phone revealed for API-key auth when present and allowed. Personal owner fields follow
   * the same RODO gating as the website.
   *
   * Typical payload:
   * - `company` – identifiers, address, PKD activities, contacts, logo, `roles` (owner)
   * - `primaryPkdDescription` – localized primary PKD label
   * - `companySummary` – AI description for the requested `locale` only (e.g. `{ "en": "…" }`)
   * - `details.vat` – VAT whitelist status + bank accounts when known
   * - `similarCompanies` – peer JDGs from the same enrichment cache
   * - `changeHistory` – CEIDG change events when available
   * - `sudop` – public-aid (SUDOP) snapshot when checked (`null` if unavailable)
   * - `bzp` – public-procurement (BZP) summary when present (`null` if none)
   * - `ure` – URE energy concessions when checked (`null` if unavailable)
   * - `bdo` – BDO waste/packaging register when present (`null` if none)
   * - `gpw` – Warsaw Stock Exchange listing snapshot when the NIP is matched (`null` if not listed)
   *
   * @returns CEIDG company profile.
   *
   * @throws {@link Companies.GetCeidgNipByNipError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCeidgNipByNip(
    request: Companies.GetCeidgNipByNipRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Companies.GetCeidgNipByNipError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ceidg/nip/{nip}"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "nip", value: request.nip, schema: s.string() }],
        query: [{ name: "locale", value: request.locale, schema: s.defaulted(localeSchema, Locale.En) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Companies.GetCeidgNipByNipError,
      },
      options,
    );
  }

  /**
   * Search and list companies
   *
   * @remarks
   * Uses the same search dataset as the public site. Filters combine with **AND** where applicable.
   *
   * **Response:** `data` is one page of rows; `pagination` has `limit`, `offset`, `total`,
   * `hasMore`, and optionally `cursor` when cursor-based paging is used.
   *
   * For a single company’s full profile, use `GET /companies/krs/{krs}` (KRS court number).
   *
   * Parameter details are documented on each query field below.
   *
   * **Pagination mode**
   *
   * `offset` and `cursor` are mutually exclusive in client usage. If both are sent, the server
   * returns `400 CONFLICTING_PARAMETERS`.
   *
   * Use `offset` for shallow interactive browsing and `cursor` for deep paging/export flows.
   *
   * Cursor pagination is ordered by `entity_id` ascending; `cursor` is the last `entity_id` from
   * the prior page.
   *
   * Because datasets can change between requests, deep paging may still observe occasional
   * duplicates or skips.
   *
   * With cursor mode, `pagination.total` may be unavailable and returned as `-1`; rely on
   * `hasMore`.
   *
   * **Default ordering (offset mode)**
   *
   * - without `q`: `has_email` desc, then `has_website` desc, then `revenue_total` desc, then
   *   `extracted_at` desc, then `entity_id` asc.
   * - with `q`: same ordering as above (not TF-IDF/full-text relevance ranking).
   * - offset pagination is intended for interactive browsing; for deterministic deep traversal use
   *   cursor mode.
   *
   * **Financial filter semantics** (for `/companies` and `/companies/count`)
   *
   * - financial range filters are evaluated on the latest indexed financial snapshot per company
   *   (search index row).
   * - companies with `null` value for a filtered metric do not match that metric filter.
   * - when `last_report_year_*` is combined with financial metric filters, both are evaluated
   *   against the same indexed reporting snapshot.
   *
   * @returns Paginated search results: **`data`** is an array of companies (one object per row on
   * this page). Fields per row depend on filters and internal path; optional keys may be omitted or
   * null.
   *
   * @throws {@link Companies.GetCompaniesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompanies(
    request: Companies.GetCompaniesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<CompanyListResponse, Companies.GetCompaniesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [],
        query: [
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "keywords", value: request.keywords, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "pkd", value: request.pkd, schema: s.optional(s.string()) },
          { name: "primary_only", value: request.primaryOnly, schema: s.defaulted(s.boolean(), true) },
          { name: "currency", value: request.currency, schema: s.defaulted(currencySchema, Currency.Pln) },
          { name: "voivodeship", value: request.voivodeship, schema: s.optional(s.string()) },
          { name: "postal_code", value: request.postalCode, schema: s.optional(s.string()) },
          { name: "city", value: request.city, schema: s.optional(s.string()) },
          { name: "revenue_min", value: request.revenueMin, schema: s.optional(s.float64()) },
          { name: "revenue_max", value: request.revenueMax, schema: s.optional(s.float64()) },
          {
            name: "revenue_operating_min",
            value: request.revenueOperatingMin,
            schema: s.optional(s.float64()),
          },
          {
            name: "revenue_operating_max",
            value: request.revenueOperatingMax,
            schema: s.optional(s.float64()),
          },
          {
            name: "profit_operating_min",
            value: request.profitOperatingMin,
            schema: s.optional(s.float64()),
          },
          {
            name: "profit_operating_max",
            value: request.profitOperatingMax,
            schema: s.optional(s.float64()),
          },
          { name: "profit_net_min", value: request.profitNetMin, schema: s.optional(s.float64()) },
          { name: "profit_net_max", value: request.profitNetMax, schema: s.optional(s.float64()) },
          { name: "income_tax_min", value: request.incomeTaxMin, schema: s.optional(s.float64()) },
          { name: "income_tax_max", value: request.incomeTaxMax, schema: s.optional(s.float64()) },
          { name: "cost_wages_min", value: request.costWagesMin, schema: s.optional(s.float64()) },
          { name: "cost_wages_max", value: request.costWagesMax, schema: s.optional(s.float64()) },
          {
            name: "cost_amortization_min",
            value: request.costAmortizationMin,
            schema: s.optional(s.float64()),
          },
          {
            name: "cost_amortization_max",
            value: request.costAmortizationMax,
            schema: s.optional(s.float64()),
          },
          { name: "total_assets_min", value: request.totalAssetsMin, schema: s.optional(s.float64()) },
          { name: "total_assets_max", value: request.totalAssetsMax, schema: s.optional(s.float64()) },
          { name: "ebitda_min", value: request.ebitdaMin, schema: s.optional(s.float64()) },
          { name: "ebitda_max", value: request.ebitdaMax, schema: s.optional(s.float64()) },
          { name: "capital_min", value: request.capitalMin, schema: s.optional(s.float64()) },
          { name: "capital_max", value: request.capitalMax, schema: s.optional(s.float64()) },
          { name: "estimated_value_min", value: request.estimatedValueMin, schema: s.optional(s.float64()) },
          { name: "estimated_value_max", value: request.estimatedValueMax, schema: s.optional(s.float64()) },
          { name: "registration_year_min", value: request.registrationYearMin, schema: s.optional(s.int()) },
          { name: "registration_year_max", value: request.registrationYearMax, schema: s.optional(s.int()) },
          {
            name: "registration_date_min",
            value: request.registrationDateMin,
            schema: s.optional(s.dateOnly()),
          },
          {
            name: "registration_date_max",
            value: request.registrationDateMax,
            schema: s.optional(s.dateOnly()),
          },
          { name: "last_report_year_min", value: request.lastReportYearMin, schema: s.optional(s.int()) },
          { name: "last_report_year_max", value: request.lastReportYearMax, schema: s.optional(s.int()) },
          { name: "status_active", value: request.statusActive, schema: s.optional(s.boolean()) },
          { name: "legal_form", value: request.legalForm, schema: s.optional(s.string()) },
          { name: "has_email", value: request.hasEmail, schema: s.optional(s.boolean()) },
          { name: "has_website", value: request.hasWebsite, schema: s.optional(s.boolean()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sortSchema)) },
          { name: "dir", value: request.dir, schema: s.defaulted(dirSchema, Dir.Desc) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companyListResponseSchema },
        errorFactory: Companies.GetCompaniesError,
      },
      options,
    );
  }

  /**
   * Count companies for current filters
   *
   * @remarks
   * Returns how many companies match the same **filter set** as `GET /companies`, without returning
   * rows. Use the **same query parameters** as list/search (except pagination: no `limit`,
   * `offset`, or `cursor`). Filters combine with **AND** where applicable.
   *
   * **Response:** a single integer `count`; total matching companies for the current filters.
   *
   * @returns Total number of companies matching the request filters.
   *
   * @throws {@link Companies.GetCompaniesCountError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesCount(
    request: Companies.GetCompaniesCountRequest = {},
    options?: RequestOptions,
  ): ApiPromise<CompanyCountResponse, Companies.GetCompaniesCountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies/count"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [],
        query: [
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "keywords", value: request.keywords, schema: s.optional(s.string()) },
          { name: "pkd", value: request.pkd, schema: s.optional(s.string()) },
          { name: "primary_only", value: request.primaryOnly, schema: s.defaulted(s.boolean(), true) },
          { name: "currency", value: request.currency, schema: s.defaulted(currencySchema, Currency.Pln) },
          { name: "voivodeship", value: request.voivodeship, schema: s.optional(s.string()) },
          { name: "postal_code", value: request.postalCode, schema: s.optional(s.string()) },
          { name: "city", value: request.city, schema: s.optional(s.string()) },
          { name: "revenue_min", value: request.revenueMin, schema: s.optional(s.float64()) },
          { name: "revenue_max", value: request.revenueMax, schema: s.optional(s.float64()) },
          {
            name: "revenue_operating_min",
            value: request.revenueOperatingMin,
            schema: s.optional(s.float64()),
          },
          {
            name: "revenue_operating_max",
            value: request.revenueOperatingMax,
            schema: s.optional(s.float64()),
          },
          {
            name: "profit_operating_min",
            value: request.profitOperatingMin,
            schema: s.optional(s.float64()),
          },
          {
            name: "profit_operating_max",
            value: request.profitOperatingMax,
            schema: s.optional(s.float64()),
          },
          { name: "profit_net_min", value: request.profitNetMin, schema: s.optional(s.float64()) },
          { name: "profit_net_max", value: request.profitNetMax, schema: s.optional(s.float64()) },
          { name: "income_tax_min", value: request.incomeTaxMin, schema: s.optional(s.float64()) },
          { name: "income_tax_max", value: request.incomeTaxMax, schema: s.optional(s.float64()) },
          { name: "cost_wages_min", value: request.costWagesMin, schema: s.optional(s.float64()) },
          { name: "cost_wages_max", value: request.costWagesMax, schema: s.optional(s.float64()) },
          {
            name: "cost_amortization_min",
            value: request.costAmortizationMin,
            schema: s.optional(s.float64()),
          },
          {
            name: "cost_amortization_max",
            value: request.costAmortizationMax,
            schema: s.optional(s.float64()),
          },
          { name: "total_assets_min", value: request.totalAssetsMin, schema: s.optional(s.float64()) },
          { name: "total_assets_max", value: request.totalAssetsMax, schema: s.optional(s.float64()) },
          { name: "ebitda_min", value: request.ebitdaMin, schema: s.optional(s.float64()) },
          { name: "ebitda_max", value: request.ebitdaMax, schema: s.optional(s.float64()) },
          { name: "capital_min", value: request.capitalMin, schema: s.optional(s.float64()) },
          { name: "capital_max", value: request.capitalMax, schema: s.optional(s.float64()) },
          { name: "estimated_value_min", value: request.estimatedValueMin, schema: s.optional(s.float64()) },
          { name: "estimated_value_max", value: request.estimatedValueMax, schema: s.optional(s.float64()) },
          { name: "registration_year_min", value: request.registrationYearMin, schema: s.optional(s.int()) },
          { name: "registration_year_max", value: request.registrationYearMax, schema: s.optional(s.int()) },
          {
            name: "registration_date_min",
            value: request.registrationDateMin,
            schema: s.optional(s.dateOnly()),
          },
          {
            name: "registration_date_max",
            value: request.registrationDateMax,
            schema: s.optional(s.dateOnly()),
          },
          { name: "last_report_year_min", value: request.lastReportYearMin, schema: s.optional(s.int()) },
          { name: "last_report_year_max", value: request.lastReportYearMax, schema: s.optional(s.int()) },
          { name: "status_active", value: request.statusActive, schema: s.optional(s.boolean()) },
          { name: "legal_form", value: request.legalForm, schema: s.optional(s.string()) },
          { name: "has_email", value: request.hasEmail, schema: s.optional(s.boolean()) },
          { name: "has_website", value: request.hasWebsite, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companyCountResponseInternalSchema },
        errorFactory: Companies.GetCompaniesCountError,
      },
      options,
    );
  }

  /**
   * Bulk company search export page
   *
   * @remarks
   * Same filters as `GET /companies`, with page size up to **500** (vs 100 on the standard list).
   * Contact emails are included when available. For large pulls, page with `cursor` (`cursor` =
   * last row `entity_id`). Large `offset` values get slow. Each page consumes **1** monthly quota
   * request.
   *
   * @returns One page of companies (same shape as `GET /companies`).
   *
   * @throws {@link Companies.GetCompaniesExportError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesExport(
    request: Companies.GetCompaniesExportRequest = {},
    options?: RequestOptions,
  ): ApiPromise<CompanyListResponse, Companies.GetCompaniesExportError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies/export"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [],
        query: [
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "keywords", value: request.keywords, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 100) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "pkd", value: request.pkd, schema: s.optional(s.string()) },
          { name: "primary_only", value: request.primaryOnly, schema: s.defaulted(s.boolean(), true) },
          { name: "has_email", value: request.hasEmail, schema: s.optional(s.boolean()) },
          { name: "has_website", value: request.hasWebsite, schema: s.optional(s.boolean()) },
          { name: "status_active", value: request.statusActive, schema: s.optional(s.boolean()) },
          { name: "revenue_min", value: request.revenueMin, schema: s.optional(s.float64()) },
          { name: "revenue_max", value: request.revenueMax, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companyListResponseSchema },
        errorFactory: Companies.GetCompaniesExportError,
      },
      options,
    );
  }

  /**
   * Full company profile
   *
   * @remarks
   * Returns full company profile addressed by **KRS** (Polish court registry number). Digits only;
   * leading zeros are optional (normalized to 10 digits server-side).
   *
   * Integrations that only have a KRS number can call this directly. One request typically covers
   * enrichment for a company. The payload includes:
   * - `company` (identifiers, address, PKD, logo, capital),
   * - `details.contacts` (email, phone, website, deliverability flags; email/phone revealed for API
   *   keys),
   * - `details.vat` (VAT whitelist status + bank accounts when known),
   * - `details.filings` / attributes / operational status,
   * - `roles` and `ownership`,
   * - `financials.byYear` (metrics + `esf_statement_lines` when present; XML files are on the
   *   documents endpoint),
   * - `krz` (restructuring/insolvency proceedings summary),
   * - `sanctions` (MSWiA sanctions listing with measures and grounds; omitted when the company is
   *   not listed; dedicated read is `/companies/krs/{krs}/sanctions`),
   * - `sudop` (public aid / de minimis when checked),
   * - `bzp` (public procurement summary when present),
   * - `ure` (URE energy concessions when checked),
   * - `bdo` (BDO waste/packaging register when present),
   * - `gpw` (Warsaw Stock Exchange listing snapshot when the NIP is matched — no full OHLCV; use
   *   `/companies/krs/{krs}/gpw`),
   * - `crbr` (beneficial owners when present and RODO-eligible),
   * - `changeHistory` when non-empty,
   * - `similarCompanies`, `subsidiaryCompanies`, `pkdRankings`, `faq`, `insightsByYear`,
   * - `hasStatistics` (boolean; full peer benchmarks via `/statistics`).
   *
   * @returns Full company profile object resolved from KRS.
   *
   * @throws {@link Companies.GetCompaniesKrsByKrsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesKrsByKrs(
    request: Companies.GetCompaniesKrsByKrsRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Companies.GetCompaniesKrsByKrsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies/krs/{krs}"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "krs", value: request.krs, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Companies.GetCompaniesKrsByKrsError,
      },
      options,
    );
  }

  /**
   * Company connections
   *
   * @remarks
   * Graph of related companies and people linked through shared roles/ownership (same payload as
   * the profile Connections UI).
   *
   * @returns Connections payload.
   *
   * @throws {@link Companies.GetCompaniesKrsByKrsConnectionsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesKrsByKrsConnections(
    request: Companies.GetCompaniesKrsByKrsConnectionsRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Companies.GetCompaniesKrsByKrsConnectionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies/krs/{krs}/connections"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "krs", value: request.krs, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Companies.GetCompaniesKrsByKrsConnectionsError,
      },
      options,
    );
  }

  /**
   * Corporate group (GLEIF LEI register)
   *
   * @remarks
   * Corporate group of a Polish company from the global LEI register run by GLEIF, supplemented
   * with foreign corporate shareholders from KRS matched to the LEI register: direct parent and
   * ultimate parent (name, country, LEI), subsidiaries and other group companies (Polish ones with
   * KRS number, foreign ones with country) and group size. `direct_parent.source = "krs"` means the
   * parent comes from the KRS shareholder list (`pct` = stake). Refreshed daily. Same data as MCP
   * `get_company_group`.
   *
   * @returns Corporate group.
   *
   * @throws {@link Companies.GetCompaniesKrsByKrsGroupError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesKrsByKrsGroup(
    request: Companies.GetCompaniesKrsByKrsGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Companies.GetCompaniesKrsByKrsGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies/krs/{krs}/group"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "krs", value: request.krs, schema: s.string() }],
        query: [{ name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Companies.GetCompaniesKrsByKrsGroupError,
      },
      options,
    );
  }

  /**
   * Legal status
   *
   * @remarks
   * Quick legal-status check (Active, Bankruptcy, Liquidation).
   *
   * @returns Legal status for a company.
   *
   * @throws {@link Companies.GetCompaniesKrsByKrsStatusError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesKrsByKrsStatus(
    request: Companies.GetCompaniesKrsByKrsStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Companies.GetCompaniesKrsByKrsStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies/krs/{krs}/status"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "krs", value: request.krs, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Companies.GetCompaniesKrsByKrsStatusError,
      },
      options,
    );
  }

  /**
   * Structure & People
   *
   * @remarks
   * Returns ownership and management structure only (without profile or financial data): `roles`
   * and `ownership`.
   *
   * @returns Roles and ownership structure.
   *
   * @throws {@link Companies.GetCompaniesKrsByKrsStructurePeopleError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesKrsByKrsStructurePeople(
    request: Companies.GetCompaniesKrsByKrsStructurePeopleRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Companies.GetCompaniesKrsByKrsStructurePeopleError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies/krs/{krs}/structure-people"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "krs", value: request.krs, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Companies.GetCompaniesKrsByKrsStructurePeopleError,
      },
      options,
    );
  }
}

export namespace Companies {
  export type GetCeidgNipByNipRequest = {
    /** NIP normalized to exactly 10 digits. */
    nip: string;
    /**
     * Language for PKD labels and `companySummary` (one locale key in the response).
     *
     * @default Locale.En
     */
    locale?: Locale;
  };

  export class GetCeidgNipByNipError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCeidgNipByNipError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCompaniesRequest = {
    /**
     * Free-text search (company name and identifiers). **Digits** are treated as a possible
     * KRS/NIP/REGON lookup. Whitespace is trimmed. Matching strategy: - identifier-like numeric
     * input: identifier lookup path is used first. For 10-digit numeric values, exact match is
     * attempted against KRS (`registry_number`) and NIP; an exact match is also attempted against
     * REGON as stored in the index. For other numeric lengths, prefix matching is used for those
     * identifier fields. - textual input: case-insensitive substring match on company name (`ILIKE
     * %q%`). Numeric lookup has priority over text-name matching when `q` contains only digits.
     * Example: `q=0000028860` is treated as identifier lookup (not generic relevance search).
     */
    q?: string;
    /**
     * Keyword filter with **OR** semantics. Pass a comma-separated list, or repeat the parameter.
     * Each keyword must be at least **2** characters after trimming. Empty tokens are ignored.
     * Duplicate tokens may appear and are not guaranteed to be deduplicated server-side. Mixing
     * repeated params and CSV is supported (e.g. `keywords=a,b&keywords=c`).
     */
    keywords?: string;
    /**
     * Page size. **Default:** `20`. `GET /companies` caps at **100** per request. For bulk pulls
     * use `GET /companies/export` (or `limit` &gt; 100 on `/companies` via API key), capped at
     * **500** per page. For deep traversal, page with `cursor`. **Quota accounting:** monthly quota
     * counts each HTTP request. Row count in the page does not change the cost. Example:
     * `limit=500` still consumes **1** request from monthly quota.
     *
     * @default 20
     */
    limit?: number;
    /**
     * Zero-based row offset for classic **offset** pagination. Client contract: use either `offset`
     * or `cursor` (not both). If both are provided, the server returns `400
     * CONFLICTING_PARAMETERS`.
     *
     * @default 0
     */
    offset?: number;
    /**
     * Optional **cursor** for pagination: `entity_id` of the last row from the previous page.
     * Cursor paging is ordered by `entity_id` ascending. Use it for deep paging/export-style
     * traversal. Do not combine with `offset`; if both are sent, request fails with `400
     * CONFLICTING_PARAMETERS`. When present, the server may return `pagination.total: -1` and
     * include `pagination.cursor` for the next page.
     */
    cursor?: string;
    /**
     * PKD code (Polish business activity classification). **Case-insensitive**; trimmed and
     * uppercased server-side. By default only the **primary** PKD (`primary_only=true`) is matched;
     * set `primary_only=false` to match any code in `all_pkd_codes`.
     */
    pkd?: string;
    /**
     * Boolean filter syntax is accepted (`true`/`false`). Semantics: `true` (default) means `pkd`
     * matches `primary_pkd` only. `false` means `pkd` can match any entry in `all_pkd_codes`.
     *
     * @default true
     */
    primaryOnly?: boolean;
    /**
     * Display/filter currency context for financial threshold filters. Allowed values: `PLN`,
     * `USD`, `EUR` (case-insensitive). Default is `PLN`. For `revenue_min` / `revenue_max`, the API
     * applies thresholds against: - `revenue_total` when `currency=PLN` - `revenue_total_usd` when
     * `currency=USD` - `revenue_total_eur` when `currency=EUR`
     *
     * @default Currency.Pln
     */
    currency?: Currency;
    /**
     * Voivodeship / region filter. Compared to `company_search.region` **case-insensitively**
     * (lowercased on the server). Use the same spelling as stored in data (e.g. Polish voivodeship
     * names such as `mazowieckie`, `śląskie`). Common values include: `dolnośląskie`,
     * `małopolskie`, `mazowieckie`, `pomorskie`, `śląskie`, `wielkopolskie`.
     */
    voivodeship?: string;
    /** Exact postal code match (trimmed). Format depends on source data (e.g. `00-001`). */
    postalCode?: string;
    /** City substring filter (case-insensitive **ILIKE** `%city%`). */
    city?: string;
    /**
     * Minimum **total revenue** (`revenue_total`). Currency depends on `currency` query param
     * (`PLN`/`USD`/`EUR`). If `currency` is omitted, PLN is used. Values are in **full currency
     * units** (not thousands), e.g. `1000000` = one million PLN. Evaluated against the latest
     * indexed financial snapshot per company. Companies with `null` in the selected revenue column
     * do not match this filter.
     */
    revenueMin?: number;
    /**
     * Maximum **total revenue** threshold in full units. Currency depends on `currency` query param
     * (`PLN`/`USD`/`EUR`). If `currency` is omitted, PLN is used. If `revenue_min > revenue_max`,
     * the API returns `400` with code `INVALID_RANGE`. Evaluated against the latest indexed
     * financial snapshot per company. Companies with `null` in the selected revenue column do not
     * match this filter.
     */
    revenueMax?: number;
    /** Minimum operating revenue (net sales / operating revenue field from financials). */
    revenueOperatingMin?: number;
    revenueOperatingMax?: number;
    profitOperatingMin?: number;
    profitOperatingMax?: number;
    profitNetMin?: number;
    profitNetMax?: number;
    incomeTaxMin?: number;
    incomeTaxMax?: number;
    costWagesMin?: number;
    costWagesMax?: number;
    costAmortizationMin?: number;
    costAmortizationMax?: number;
    totalAssetsMin?: number;
    totalAssetsMax?: number;
    ebitdaMin?: number;
    ebitdaMax?: number;
    /** Minimum **share capital** (`capital_total`). */
    capitalMin?: number;
    capitalMax?: number;
    /** Minimum **estimated company value** (`estimated_value`), when present in search index. */
    estimatedValueMin?: number;
    estimatedValueMax?: number;
    /**
     * Earliest **registration** year (`registration_date` filter): companies registered on or after
     * `YYYY-01-01`.
     */
    registrationYearMin?: number;
    /** Latest registration year (`registration_date` on or before `YYYY-12-31`). */
    registrationYearMax?: number;
    /**
     * Earliest exact **registration date** (`registration_date` on or after this day, inclusive),
     * format `YYYY-MM-DD`. Takes precedence over `registration_year_min`. For companies registered
     * today, pass today's date as both `registration_date_min` and `registration_date_max`. Applies
     * to KRS companies and to JDG (CEIDG) rows merged into browse results.
     */
    registrationDateMin?: string;
    /**
     * Latest exact registration date (`registration_date` on or before this day, inclusive), format
     * `YYYY-MM-DD`. Takes precedence over `registration_year_max`.
     */
    registrationDateMax?: string;
    /**
     * Earliest **financial report period** (`financial_period_to` on or after `YYYY-01-01`). When
     * combined with financial metric filters, both are evaluated against the same indexed reporting
     * snapshot.
     */
    lastReportYearMin?: number;
    /**
     * Latest financial report period (`financial_period_to` on or before `YYYY-12-31`). When
     * combined with financial metric filters, both are evaluated against the same indexed reporting
     * snapshot.
     */
    lastReportYearMax?: number;
    /**
     * Boolean filter syntax is accepted (`true`/`false`). Semantics: `true` applies positive filter
     * (only active companies). `false` is syntactically valid and treated as no filter.
     */
    statusActive?: boolean;
    /**
     * Legal form substring filter (case-insensitive **ILIKE** `%legal_form%`). Common
     * values/phrases: `spółka z ograniczoną odpowiedzialnością`, `spółka akcyjna`, `prosta spółka
     * akcyjna`, `spółka komandytowa`, `jednoosobowa działalność gospodarcza`.
     */
    legalForm?: string;
    /**
     * Boolean filter syntax is accepted (`true`/`false`). Semantics: `true` applies positive filter
     * (only companies with email). `false` is syntactically valid and treated as no filter.
     */
    hasEmail?: boolean;
    /**
     * Boolean filter syntax is accepted (`true`/`false`). Semantics: `true` applies positive filter
     * (only companies with website). `false` is syntactically valid and treated as no filter.
     */
    hasWebsite?: boolean;
    /**
     * Sort the result set by one column (default: completeness / revenue ranking). Rows without a
     * value in that column are excluded while sorting. Text columns (`name`, `nip`, `regon`,
     * `city`, `region`, `postal_code`) sort alphabetically; `registration_date` with `dir=desc`
     * lists the newest registrations first (future-dated register errors are skipped);
     * `revenue_growth` with `dir=desc` lists the fastest-growing companies (y/y revenue growth in
     * %, latest vs previous financial year from KRS statements; combine with `revenue_min` to skip
     * small companies). Not applied to free-text (`q`) or `keywords` searches, which keep relevance
     * order.
     */
    sort?: Sort;
    /** Sort direction for `sort` (`asc` or `desc`, default `desc`). @default Dir.Desc */
    dir?: Dir;
  };

  export const getCompaniesRequestSchema: Schema<GetCompaniesRequest> = s.lazySchema(() =>
    s.object<GetCompaniesRequest>({
      q: s.optional(s.string()),
      keywords: s.optional(s.string()),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(500)), 20),
      offset: s.defaulted(s.int().check(s.gte(0)), 0),
      cursor: s.optional(s.string()),
      pkd: s.optional(s.string()),
      primaryOnly: s.defaulted(s.boolean(), true),
      currency: s.defaulted(currencySchema, Currency.Pln),
      voivodeship: s.optional(s.string()),
      postalCode: s.optional(s.string()),
      city: s.optional(s.string()),
      revenueMin: s.optional(s.float64()),
      revenueMax: s.optional(s.float64()),
      revenueOperatingMin: s.optional(s.float64()),
      revenueOperatingMax: s.optional(s.float64()),
      profitOperatingMin: s.optional(s.float64()),
      profitOperatingMax: s.optional(s.float64()),
      profitNetMin: s.optional(s.float64()),
      profitNetMax: s.optional(s.float64()),
      incomeTaxMin: s.optional(s.float64()),
      incomeTaxMax: s.optional(s.float64()),
      costWagesMin: s.optional(s.float64()),
      costWagesMax: s.optional(s.float64()),
      costAmortizationMin: s.optional(s.float64()),
      costAmortizationMax: s.optional(s.float64()),
      totalAssetsMin: s.optional(s.float64()),
      totalAssetsMax: s.optional(s.float64()),
      ebitdaMin: s.optional(s.float64()),
      ebitdaMax: s.optional(s.float64()),
      capitalMin: s.optional(s.float64()),
      capitalMax: s.optional(s.float64()),
      estimatedValueMin: s.optional(s.float64()),
      estimatedValueMax: s.optional(s.float64()),
      registrationYearMin: s.optional(s.int()),
      registrationYearMax: s.optional(s.int()),
      registrationDateMin: s.optional(s.dateOnly()),
      registrationDateMax: s.optional(s.dateOnly()),
      lastReportYearMin: s.optional(s.int()),
      lastReportYearMax: s.optional(s.int()),
      statusActive: s.optional(s.boolean()),
      legalForm: s.optional(s.string()),
      hasEmail: s.optional(s.boolean()),
      hasWebsite: s.optional(s.boolean()),
      sort: s.optional(s.lazy(() => sortSchema)),
      dir: s.defaulted(dirSchema, Dir.Desc),
    }),
  );

  export class GetCompaniesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompaniesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCompaniesCountRequest = {
    /**
     * Free-text search (company name and identifiers). **Digits** are treated as a possible
     * KRS/NIP/REGON lookup. Whitespace is trimmed. Matching strategy: - identifier-like numeric
     * input: identifier lookup path is used first. For 10-digit numeric values, exact match is
     * attempted against KRS (`registry_number`) and NIP; an exact match is also attempted against
     * REGON as stored in the index. For other numeric lengths, prefix matching is used for those
     * identifier fields. - textual input: case-insensitive substring match on company name (`ILIKE
     * %q%`). Numeric lookup has priority over text-name matching when `q` contains only digits.
     * Example: `q=0000028860` is treated as identifier lookup (not generic relevance search).
     */
    q?: string;
    /**
     * Keyword filter with **OR** semantics. Pass a comma-separated list, or repeat the parameter.
     * Each keyword must be at least **2** characters after trimming. Empty tokens are ignored.
     * Duplicate tokens may appear and are not guaranteed to be deduplicated server-side. Mixing
     * repeated params and CSV is supported (e.g. `keywords=a,b&keywords=c`).
     */
    keywords?: string;
    /**
     * PKD code (Polish business activity classification). **Case-insensitive**; trimmed and
     * uppercased server-side. By default only the **primary** PKD (`primary_only=true`) is matched;
     * set `primary_only=false` to match any code in `all_pkd_codes`.
     */
    pkd?: string;
    /**
     * Boolean filter syntax is accepted (`true`/`false`). Semantics: `true` (default) means `pkd`
     * matches `primary_pkd` only. `false` means `pkd` can match any entry in `all_pkd_codes`.
     *
     * @default true
     */
    primaryOnly?: boolean;
    /**
     * Display/filter currency context for financial threshold filters. Allowed values: `PLN`,
     * `USD`, `EUR` (case-insensitive). Default is `PLN`. For `revenue_min` / `revenue_max`, the API
     * applies thresholds against: - `revenue_total` when `currency=PLN` - `revenue_total_usd` when
     * `currency=USD` - `revenue_total_eur` when `currency=EUR`
     *
     * @default Currency.Pln
     */
    currency?: Currency;
    /**
     * Voivodeship / region filter. Compared to `company_search.region` **case-insensitively**
     * (lowercased on the server). Use the same spelling as stored in data (e.g. Polish voivodeship
     * names such as `mazowieckie`, `śląskie`). Common values include: `dolnośląskie`,
     * `małopolskie`, `mazowieckie`, `pomorskie`, `śląskie`, `wielkopolskie`.
     */
    voivodeship?: string;
    /** Exact postal code match (trimmed). Format depends on source data (e.g. `00-001`). */
    postalCode?: string;
    /** City substring filter (case-insensitive **ILIKE** `%city%`). */
    city?: string;
    /**
     * Minimum **total revenue** (`revenue_total`). Currency depends on `currency` query param
     * (`PLN`/`USD`/`EUR`). If `currency` is omitted, PLN is used. Values are in **full currency
     * units** (not thousands), e.g. `1000000` = one million PLN. Evaluated against the latest
     * indexed financial snapshot per company. Companies with `null` in the selected revenue column
     * do not match this filter.
     */
    revenueMin?: number;
    /**
     * Maximum **total revenue** threshold in full units. Currency depends on `currency` query param
     * (`PLN`/`USD`/`EUR`). If `currency` is omitted, PLN is used. If `revenue_min > revenue_max`,
     * the API returns `400` with code `INVALID_RANGE`. Evaluated against the latest indexed
     * financial snapshot per company. Companies with `null` in the selected revenue column do not
     * match this filter.
     */
    revenueMax?: number;
    /** Minimum operating revenue (net sales / operating revenue field from financials). */
    revenueOperatingMin?: number;
    revenueOperatingMax?: number;
    profitOperatingMin?: number;
    profitOperatingMax?: number;
    profitNetMin?: number;
    profitNetMax?: number;
    incomeTaxMin?: number;
    incomeTaxMax?: number;
    costWagesMin?: number;
    costWagesMax?: number;
    costAmortizationMin?: number;
    costAmortizationMax?: number;
    totalAssetsMin?: number;
    totalAssetsMax?: number;
    ebitdaMin?: number;
    ebitdaMax?: number;
    /** Minimum **share capital** (`capital_total`). */
    capitalMin?: number;
    capitalMax?: number;
    /** Minimum **estimated company value** (`estimated_value`), when present in search index. */
    estimatedValueMin?: number;
    estimatedValueMax?: number;
    /**
     * Earliest **registration** year (`registration_date` filter): companies registered on or after
     * `YYYY-01-01`.
     */
    registrationYearMin?: number;
    /** Latest registration year (`registration_date` on or before `YYYY-12-31`). */
    registrationYearMax?: number;
    /**
     * Earliest exact **registration date** (`registration_date` on or after this day, inclusive),
     * format `YYYY-MM-DD`. Takes precedence over `registration_year_min`. For companies registered
     * today, pass today's date as both `registration_date_min` and `registration_date_max`. Applies
     * to KRS companies and to JDG (CEIDG) rows merged into browse results.
     */
    registrationDateMin?: string;
    /**
     * Latest exact registration date (`registration_date` on or before this day, inclusive), format
     * `YYYY-MM-DD`. Takes precedence over `registration_year_max`.
     */
    registrationDateMax?: string;
    /**
     * Earliest **financial report period** (`financial_period_to` on or after `YYYY-01-01`). When
     * combined with financial metric filters, both are evaluated against the same indexed reporting
     * snapshot.
     */
    lastReportYearMin?: number;
    /**
     * Latest financial report period (`financial_period_to` on or before `YYYY-12-31`). When
     * combined with financial metric filters, both are evaluated against the same indexed reporting
     * snapshot.
     */
    lastReportYearMax?: number;
    /**
     * Boolean filter syntax is accepted (`true`/`false`). Semantics: `true` applies positive filter
     * (only active companies). `false` is syntactically valid and treated as no filter.
     */
    statusActive?: boolean;
    /**
     * Legal form substring filter (case-insensitive **ILIKE** `%legal_form%`). Common
     * values/phrases: `spółka z ograniczoną odpowiedzialnością`, `spółka akcyjna`, `prosta spółka
     * akcyjna`, `spółka komandytowa`, `jednoosobowa działalność gospodarcza`.
     */
    legalForm?: string;
    /**
     * Boolean filter syntax is accepted (`true`/`false`). Semantics: `true` applies positive filter
     * (only companies with email). `false` is syntactically valid and treated as no filter.
     */
    hasEmail?: boolean;
    /**
     * Boolean filter syntax is accepted (`true`/`false`). Semantics: `true` applies positive filter
     * (only companies with website). `false` is syntactically valid and treated as no filter.
     */
    hasWebsite?: boolean;
  };

  export class GetCompaniesCountError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompaniesCountError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCompaniesExportRequest = {
    /**
     * Free-text search (company name and identifiers). **Digits** are treated as a possible
     * KRS/NIP/REGON lookup. Whitespace is trimmed. Matching strategy: - identifier-like numeric
     * input: identifier lookup path is used first. For 10-digit numeric values, exact match is
     * attempted against KRS (`registry_number`) and NIP; an exact match is also attempted against
     * REGON as stored in the index. For other numeric lengths, prefix matching is used for those
     * identifier fields. - textual input: case-insensitive substring match on company name (`ILIKE
     * %q%`). Numeric lookup has priority over text-name matching when `q` contains only digits.
     * Example: `q=0000028860` is treated as identifier lookup (not generic relevance search).
     */
    q?: string;
    /**
     * Keyword filter with **OR** semantics. Pass a comma-separated list, or repeat the parameter.
     * Each keyword must be at least **2** characters after trimming. Empty tokens are ignored.
     * Duplicate tokens may appear and are not guaranteed to be deduplicated server-side. Mixing
     * repeated params and CSV is supported (e.g. `keywords=a,b&keywords=c`).
     */
    keywords?: string;
    /** Page size for bulk export (max 500). @default 100 */
    limit?: number;
    /**
     * Zero-based row offset for classic **offset** pagination. Client contract: use either `offset`
     * or `cursor` (not both). If both are provided, the server returns `400
     * CONFLICTING_PARAMETERS`.
     *
     * @default 0
     */
    offset?: number;
    /**
     * Optional **cursor** for pagination: `entity_id` of the last row from the previous page.
     * Cursor paging is ordered by `entity_id` ascending. Use it for deep paging/export-style
     * traversal. Do not combine with `offset`; if both are sent, request fails with `400
     * CONFLICTING_PARAMETERS`. When present, the server may return `pagination.total: -1` and
     * include `pagination.cursor` for the next page.
     */
    cursor?: string;
    /**
     * PKD code (Polish business activity classification). **Case-insensitive**; trimmed and
     * uppercased server-side. By default only the **primary** PKD (`primary_only=true`) is matched;
     * set `primary_only=false` to match any code in `all_pkd_codes`.
     */
    pkd?: string;
    /**
     * Boolean filter syntax is accepted (`true`/`false`). Semantics: `true` (default) means `pkd`
     * matches `primary_pkd` only. `false` means `pkd` can match any entry in `all_pkd_codes`.
     *
     * @default true
     */
    primaryOnly?: boolean;
    /**
     * Boolean filter syntax is accepted (`true`/`false`). Semantics: `true` applies positive filter
     * (only companies with email). `false` is syntactically valid and treated as no filter.
     */
    hasEmail?: boolean;
    /**
     * Boolean filter syntax is accepted (`true`/`false`). Semantics: `true` applies positive filter
     * (only companies with website). `false` is syntactically valid and treated as no filter.
     */
    hasWebsite?: boolean;
    /**
     * Boolean filter syntax is accepted (`true`/`false`). Semantics: `true` applies positive filter
     * (only active companies). `false` is syntactically valid and treated as no filter.
     */
    statusActive?: boolean;
    /**
     * Minimum **total revenue** (`revenue_total`). Currency depends on `currency` query param
     * (`PLN`/`USD`/`EUR`). If `currency` is omitted, PLN is used. Values are in **full currency
     * units** (not thousands), e.g. `1000000` = one million PLN. Evaluated against the latest
     * indexed financial snapshot per company. Companies with `null` in the selected revenue column
     * do not match this filter.
     */
    revenueMin?: number;
    /**
     * Maximum **total revenue** threshold in full units. Currency depends on `currency` query param
     * (`PLN`/`USD`/`EUR`). If `currency` is omitted, PLN is used. If `revenue_min > revenue_max`,
     * the API returns `400` with code `INVALID_RANGE`. Evaluated against the latest indexed
     * financial snapshot per company. Companies with `null` in the selected revenue column do not
     * match this filter.
     */
    revenueMax?: number;
  };

  export const getCompaniesExportRequestSchema: Schema<GetCompaniesExportRequest> = s.lazySchema(() =>
    s.object<GetCompaniesExportRequest>({
      q: s.optional(s.string()),
      keywords: s.optional(s.string()),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(500)), 100),
      offset: s.defaulted(s.int().check(s.gte(0)), 0),
      cursor: s.optional(s.string()),
      pkd: s.optional(s.string()),
      primaryOnly: s.defaulted(s.boolean(), true),
      hasEmail: s.optional(s.boolean()),
      hasWebsite: s.optional(s.boolean()),
      statusActive: s.optional(s.boolean()),
      revenueMin: s.optional(s.float64()),
      revenueMax: s.optional(s.float64()),
    }),
  );

  export class GetCompaniesExportError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompaniesExportError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCompaniesKrsByKrsRequest = {
    /**
     * KRS input is normalized by stripping non-digits and left-padding to 10 digits. After
     * normalization, KRS must contain exactly 10 digits; otherwise request fails with `400
     * INVALID_KRS`.
     */
    krs: string;
  };

  export class GetCompaniesKrsByKrsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompaniesKrsByKrsError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCompaniesKrsByKrsConnectionsRequest = {
    /** KRS input is normalized by stripping non-digits and left-padding to 10 digits. */
    krs: string;
  };

  export class GetCompaniesKrsByKrsConnectionsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompaniesKrsByKrsConnectionsError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCompaniesKrsByKrsGroupRequest = {
    /** KRS input is normalized by stripping non-digits and left-padding to 10 digits. */
    krs: string;
    /** Max group companies per list. @default 50 */
    limit?: number;
  };

  export const getCompaniesKrsByKrsGroupRequestSchema: Schema<GetCompaniesKrsByKrsGroupRequest> =
    s.lazySchema(() =>
      s.object<GetCompaniesKrsByKrsGroupRequest>({
        krs: s.string(),
        limit: s.defaulted(s.int().check(s.lte(200)), 50),
      }),
    );

  export class GetCompaniesKrsByKrsGroupError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetCompaniesKrsByKrsGroupError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type GetCompaniesKrsByKrsStatusRequest = {
    /**
     * KRS input is normalized by stripping non-digits and left-padding to 10 digits. After
     * normalization, KRS must contain exactly 10 digits; otherwise request fails with `400
     * INVALID_KRS`.
     */
    krs: string;
  };

  export class GetCompaniesKrsByKrsStatusError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompaniesKrsByKrsStatusError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCompaniesKrsByKrsStructurePeopleRequest = {
    /**
     * KRS input is normalized by stripping non-digits and left-padding to 10 digits. After
     * normalization, KRS must contain exactly 10 digits; otherwise request fails with `400
     * INVALID_KRS`.
     */
    krs: string;
  };

  export class GetCompaniesKrsByKrsStructurePeopleError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompaniesKrsByKrsStructurePeopleError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
