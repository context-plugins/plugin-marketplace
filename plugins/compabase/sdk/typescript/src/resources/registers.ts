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
  companiesKrsBeneficiariesResponseSchema,
  type CompaniesKrsBeneficiariesResponse,
} from "../models/companies-krs-beneficiaries-response.js";
import {
  companiesKrsCourtGazetteResponseSchema,
  type CompaniesKrsCourtGazetteResponse,
} from "../models/companies-krs-court-gazette-response.js";
import {
  companiesKrsEnergyLicensesResponseSchema,
  type CompaniesKrsEnergyLicensesResponse,
} from "../models/companies-krs-energy-licenses-response.js";
import {
  companiesKrsEuFundsResponseSchema,
  type CompaniesKrsEuFundsResponse,
} from "../models/companies-krs-eu-funds-response.js";
import {
  companiesKrsEuGrantsResponseSchema,
  type CompaniesKrsEuGrantsResponse,
} from "../models/companies-krs-eu-grants-response.js";
import {
  companiesKrsFilingTimelinessResponseSchema,
  type CompaniesKrsFilingTimelinessResponse,
} from "../models/companies-krs-filing-timeliness-response.js";
import {
  companiesKrsFinancialLicensesResponseSchema,
  type CompaniesKrsFinancialLicensesResponse,
} from "../models/companies-krs-financial-licenses-response.js";
import {
  companiesKrsInsolvencyResponseSchema,
  type CompaniesKrsInsolvencyResponse,
} from "../models/companies-krs-insolvency-response.js";
import {
  companiesKrsProcurementCounterpartiesResponseSchema,
  type CompaniesKrsProcurementCounterpartiesResponse,
} from "../models/companies-krs-procurement-counterparties-response.js";
import {
  companiesKrsPublicAidResponseSchema,
  type CompaniesKrsPublicAidResponse,
} from "../models/companies-krs-public-aid-response.js";
import {
  companiesKrsRealEstateResponseSchema,
  type CompaniesKrsRealEstateResponse,
} from "../models/companies-krs-real-estate-response.js";
import {
  companiesKrsSanctionsResponseSchema,
  type CompaniesKrsSanctionsResponse,
} from "../models/companies-krs-sanctions-response.js";
import {
  companiesKrsSecuredLiabilitiesResponseSchema,
  type CompaniesKrsSecuredLiabilitiesResponse,
} from "../models/companies-krs-secured-liabilities-response.js";
import {
  companiesKrsTendersResponseSchema,
  type CompaniesKrsTendersResponse,
} from "../models/companies-krs-tenders-response.js";
import {
  companiesKrsWasteRegistryResponseSchema,
  type CompaniesKrsWasteRegistryResponse,
} from "../models/companies-krs-waste-registry-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import type { Servers } from "../servers.js";

/**
 * Public-register data of one company (CRBR, MSiG, KRZ, URE, BDO, SUDOP, KNF, FE, FTS, BZP/TED, NFZ
 * contracts and waiting lists, sanctions and PEP lists, Warsaw Stock Exchange, real estate, secured
 * liabilities, website facts).
 */
export class Registers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * NFZ waiting lists by NIP
   *
   * @remarks
   * NFZ (National Health Fund) waiting lists of a healthcare provider by NIP (sole proprietors and
   * any other provider) from the NFZ "Terminy leczenia" API: every NFZ-funded service it runs a
   * waiting list for, per location — NFZ forecast waiting time (stable and urgent case), people
   * waiting, average wait, address, phone, children, accessibility. Sorted by shortest wait.
   * Refreshed twice a week. The forecast is not a booking. Same data as MCP
   * `get_company_nfz_queues`.
   *
   * @returns NFZ waiting lists for the NIP.
   *
   * @throws {@link Registers.GetCeidgNipByNipNfzQueuesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCeidgNipByNipNfzQueues(
    request: Registers.GetCeidgNipByNipNfzQueuesRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Registers.GetCeidgNipByNipNfzQueuesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ceidg/nip/{nip}/nfz-queues"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "nip", value: request.nip, schema: s.string() }],
        query: [
          { name: "service", value: request.service, schema: s.optional(s.string()) },
          { name: "town", value: request.town, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Registers.GetCeidgNipByNipNfzQueuesError,
      },
      options,
    );
  }

  /**
   * Public procurement counterparties by NIP
   *
   * @remarks
   * Buyers, contractors and consortium partners of a company or a sole proprietor (public CEIDG
   * profile) by NIP, from BZP, TED and CRU. Same data as MCP
   * `get_company_procurement_counterparties`. One request = one API call from the monthly quota.
   *
   * @returns Counterparties.
   *
   * @throws {@link Registers.GetCeidgNipByNipProcurementCounterpartiesError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCeidgNipByNipProcurementCounterparties(
    request: Registers.GetCeidgNipByNipProcurementCounterpartiesRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Registers.GetCeidgNipByNipProcurementCounterpartiesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ceidg/nip/{nip}/procurement-counterparties"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "nip", value: request.nip, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Registers.GetCeidgNipByNipProcurementCounterpartiesError,
      },
      options,
    );
  }

  /**
   * Facts from the website by NIP
   *
   * @remarks
   * Same as `/companies/krs/{krs}/website-facts` for sole proprietors with a public profile (and
   * any company) by NIP. Same data as MCP `get_company_website_facts`. One request = one API call
   * from the monthly quota.
   *
   * @returns Website facts.
   *
   * @throws {@link Registers.GetCeidgNipByNipWebsiteFactsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCeidgNipByNipWebsiteFacts(
    request: Registers.GetCeidgNipByNipWebsiteFactsRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Registers.GetCeidgNipByNipWebsiteFactsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ceidg/nip/{nip}/website-facts"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "nip", value: request.nip, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Registers.GetCeidgNipByNipWebsiteFactsError,
      },
      options,
    );
  }

  /**
   * Beneficial owners (CRBR)
   *
   * @remarks
   * Beneficial owners of a KRS company from the Central Register of Beneficial Owners (CRBR) —
   * name, nationality, country of residence and nature/extent of control. PESEL is never returned
   * (birth year only). Sole proprietors are not in CRBR. Same data as MCP
   * `get_company_beneficiaries`. One request = one API call from the monthly quota.
   *
   * @returns CRBR filing with the list of beneficial owners.
   *
   * @throws {@link Registers.GetCompaniesKrsByKrsBeneficiariesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesKrsByKrsBeneficiaries(
    request: Registers.GetCompaniesKrsByKrsBeneficiariesRequest,
    options?: RequestOptions,
  ): ApiPromise<CompaniesKrsBeneficiariesResponse, Registers.GetCompaniesKrsByKrsBeneficiariesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies/krs/{krs}/beneficiaries"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "krs", value: request.krs, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companiesKrsBeneficiariesResponseSchema },
        errorFactory: Registers.GetCompaniesKrsByKrsBeneficiariesError,
      },
      options,
    );
  }

  /**
   * Court and Commercial Gazette notices (MSiG)
   *
   * @remarks
   * Notices about the company published in the Court and Commercial Gazette (Monitor Sądowy i
   * Gospodarczy) — creditor calls, dissolution, mergers, liquidation, transformations — matched by
   * KRS or NIP. Same data as MCP `get_company_court_gazette`. One request = one API call from the
   * monthly quota.
   *
   * @returns MSiG notices, newest first.
   *
   * @throws {@link Registers.GetCompaniesKrsByKrsCourtGazetteError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesKrsByKrsCourtGazette(
    request: Registers.GetCompaniesKrsByKrsCourtGazetteRequest,
    options?: RequestOptions,
  ): ApiPromise<CompaniesKrsCourtGazetteResponse, Registers.GetCompaniesKrsByKrsCourtGazetteError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies/krs/{krs}/court-gazette"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "krs", value: request.krs, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companiesKrsCourtGazetteResponseSchema },
        errorFactory: Registers.GetCompaniesKrsByKrsCourtGazetteError,
      },
      options,
    );
  }

  /**
   * Energy concessions (URE)
   *
   * @remarks
   * Energy Regulatory Office (URE) concessions — electricity, gas, heat and liquid fuels — with
   * validity dates and pending applications. Keyed by the company's NIP. Same data as MCP
   * `get_company_energy_licenses`. One request = one API call from the monthly quota.
   *
   * @returns URE concessions (null when the company holds none).
   *
   * @throws {@link Registers.GetCompaniesKrsByKrsEnergyLicensesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesKrsByKrsEnergyLicenses(
    request: Registers.GetCompaniesKrsByKrsEnergyLicensesRequest,
    options?: RequestOptions,
  ): ApiPromise<CompaniesKrsEnergyLicensesResponse, Registers.GetCompaniesKrsByKrsEnergyLicensesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies/krs/{krs}/energy-licenses"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "krs", value: request.krs, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companiesKrsEnergyLicensesResponseSchema },
        errorFactory: Registers.GetCompaniesKrsByKrsEnergyLicensesError,
      },
      options,
    );
  }

  /**
   * European Funds projects (FE)
   *
   * @remarks
   * EU cohesion-fund projects (Fundusze Europejskie, official MFiPR project lists) — programme, EU
   * co-financing, total value and dates. Keyed by NIP. Not TED procurement, not FTS Commission
   * grants, not SUDOP state aid. Same data as MCP `get_company_eu_funds`. One request = one API
   * call from the monthly quota.
   *
   * @returns European Funds projects of the company.
   *
   * @throws {@link Registers.GetCompaniesKrsByKrsEuFundsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesKrsByKrsEuFunds(
    request: Registers.GetCompaniesKrsByKrsEuFundsRequest,
    options?: RequestOptions,
  ): ApiPromise<CompaniesKrsEuFundsResponse, Registers.GetCompaniesKrsByKrsEuFundsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies/krs/{krs}/eu-funds"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "krs", value: request.krs, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companiesKrsEuFundsResponseSchema },
        errorFactory: Registers.GetCompaniesKrsByKrsEuFundsError,
      },
      options,
    );
  }

  /**
   * European Commission grants (FTS)
   *
   * @remarks
   * European Commission Financial Transparency System awards — Horizon, LIFE, Erasmus+ and other
   * direct/indirect management grants and contracts. Keyed by NIP (VAT). Same data as MCP
   * `get_company_procurement`. One request = one API call from the monthly quota.
   *
   * @returns FTS awards of the company.
   *
   * @throws {@link Registers.GetCompaniesKrsByKrsEuGrantsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesKrsByKrsEuGrants(
    request: Registers.GetCompaniesKrsByKrsEuGrantsRequest,
    options?: RequestOptions,
  ): ApiPromise<CompaniesKrsEuGrantsResponse, Registers.GetCompaniesKrsByKrsEuGrantsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies/krs/{krs}/eu-grants"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "krs", value: request.krs, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companiesKrsEuGrantsResponseSchema },
        errorFactory: Registers.GetCompaniesKrsByKrsEuGrantsError,
      },
      options,
    );
  }

  /**
   * Financial statement filing timeliness
   *
   * @remarks
   * For each recent financial year: period end, the date the annual financial statement was filed
   * (KRS register entries and the Financial Document Repository), the statutory deadline (year end
   * + 6 months + 15 days; +3 months for 2019–2020), days late or not filed, and whether a statutory
   * auditor's report was filed. Also `overdue_year` when the latest statement is past its deadline
   * and missing. Same data as MCP `get_company_filing_timeliness`. One request = one API call from
   * the monthly quota.
   *
   * @returns Filing timeliness (null when the company has never filed a financial statement).
   *
   * @throws {@link Registers.GetCompaniesKrsByKrsFilingTimelinessError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesKrsByKrsFilingTimeliness(
    request: Registers.GetCompaniesKrsByKrsFilingTimelinessRequest,
    options?: RequestOptions,
  ): ApiPromise<CompaniesKrsFilingTimelinessResponse, Registers.GetCompaniesKrsByKrsFilingTimelinessError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies/krs/{krs}/filing-timeliness"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "krs", value: request.krs, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companiesKrsFilingTimelinessResponseSchema },
        errorFactory: Registers.GetCompaniesKrsByKrsFilingTimelinessError,
      },
      options,
    );
  }

  /**
   * Financial supervision entries (KNF)
   *
   * @remarks
   * Polish Financial Supervision Authority (KNF) registers — licences and entries of banks, payment
   * / e-money institutions, investment firms, insurers, lending institutions and agents, with KNF
   * number, status, registration, decision and strike-off dates and services. Keyed by NIP. Same
   * data as MCP `get_company_financial_supervision`. One request = one API call from the monthly
   * quota.
   *
   * @returns KNF entries (null when the company has none).
   *
   * @throws {@link Registers.GetCompaniesKrsByKrsFinancialLicensesError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesKrsByKrsFinancialLicenses(
    request: Registers.GetCompaniesKrsByKrsFinancialLicensesRequest,
    options?: RequestOptions,
  ): ApiPromise<CompaniesKrsFinancialLicensesResponse, Registers.GetCompaniesKrsByKrsFinancialLicensesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies/krs/{krs}/financial-licenses"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "krs", value: request.krs, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companiesKrsFinancialLicensesResponseSchema },
        errorFactory: Registers.GetCompaniesKrsByKrsFinancialLicensesError,
      },
      options,
    );
  }

  /**
   * Warsaw Stock Exchange (GPW)
   *
   * @remarks
   * Listing snapshot for a KRS company matched to GPW Main Market, NewConnect, or GlobalConnect:
   * ticker, ISIN, last close and change, market cap, shares, EPS, P/E, dividend and yield, plus a
   * few recent daily bars. Quotes delayed ~15 minutes, in PLN.
   *
   * Not an official GPW licensed feed. `gpw` is `null` when the company is not listed / not
   * matched.
   *
   * Optional history (still capped — never the full MAX chart):
   * - `include=series` — daily OHLCV, default 250 bars, max 2000 (`series_limit`)
   * - `include=intraday` — 1-minute bars for the last 10 calendar days
   * - combine as `include=series,intraday`
   *
   * @returns Listing snapshot (`gpw` may be null).
   *
   * @throws {@link Registers.GetCompaniesKrsByKrsGpwError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesKrsByKrsGpw(
    request: Registers.GetCompaniesKrsByKrsGpwRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Registers.GetCompaniesKrsByKrsGpwError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies/krs/{krs}/gpw"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "krs", value: request.krs, schema: s.string() }],
        query: [
          { name: "include", value: request.include, schema: s.optional(s.string()) },
          { name: "series_limit", value: request.seriesLimit, schema: s.defaulted(s.int(), 250) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Registers.GetCompaniesKrsByKrsGpwError,
      },
      options,
    );
  }

  /**
   * Insolvency and restructuring proceedings (KRZ)
   *
   * @remarks
   * Bankruptcy and restructuring proceedings from the National Debtor Register (Krajowy Rejestr
   * Zadłużonych, KRZ): case numbers, court, proceeding type and status, key dates. Same data as MCP
   * `get_company_debt_registry`. One request = one API call from the monthly quota.
   *
   * @returns KRZ proceedings of the company.
   *
   * @throws {@link Registers.GetCompaniesKrsByKrsInsolvencyError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesKrsByKrsInsolvency(
    request: Registers.GetCompaniesKrsByKrsInsolvencyRequest,
    options?: RequestOptions,
  ): ApiPromise<CompaniesKrsInsolvencyResponse, Registers.GetCompaniesKrsByKrsInsolvencyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies/krs/{krs}/insolvency"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "krs", value: request.krs, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companiesKrsInsolvencyResponseSchema },
        errorFactory: Registers.GetCompaniesKrsByKrsInsolvencyError,
      },
      options,
    );
  }

  /**
   * NFZ contracts
   *
   * @remarks
   * NFZ (National Health Fund) contracts of a healthcare provider — contract value per year since
   * 2008, types of care with NFZ branch and the largest contracts (PLN). Keyed by the company's
   * NIP. Same data as MCP `get_company_nfz_contracts`.
   *
   * @returns NFZ contracts (`nfz` is null when the company has no NFZ contracts).
   *
   * @throws {@link Registers.GetCompaniesKrsByKrsNfzContractsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesKrsByKrsNfzContracts(
    request: Registers.GetCompaniesKrsByKrsNfzContractsRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Registers.GetCompaniesKrsByKrsNfzContractsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies/krs/{krs}/nfz-contracts"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "krs", value: request.krs, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Registers.GetCompaniesKrsByKrsNfzContractsError,
      },
      options,
    );
  }

  /**
   * NFZ waiting lists
   *
   * @remarks
   * NFZ (National Health Fund) waiting lists of a healthcare provider from the NFZ "Terminy
   * leczenia" API: every NFZ-funded service it runs a waiting list for, per location — NFZ forecast
   * waiting time (stable and urgent case), people waiting, average wait, address, phone, children,
   * accessibility. Sorted by shortest wait. Refreshed twice a week. The forecast is not a booking.
   * Same data as MCP `get_company_nfz_queues`.
   *
   * @returns NFZ waiting lists (`queues` is null when the provider has none).
   *
   * @throws {@link Registers.GetCompaniesKrsByKrsNfzQueuesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesKrsByKrsNfzQueues(
    request: Registers.GetCompaniesKrsByKrsNfzQueuesRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Registers.GetCompaniesKrsByKrsNfzQueuesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies/krs/{krs}/nfz-queues"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "krs", value: request.krs, schema: s.string() }],
        query: [
          { name: "service", value: request.service, schema: s.optional(s.string()) },
          { name: "town", value: request.town, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Registers.GetCompaniesKrsByKrsNfzQueuesError,
      },
      options,
    );
  }

  /**
   * Public procurement counterparties
   *
   * @remarks
   * Buyers the company most often wins public contracts from, contractors it most often awards
   * contracts to, and consortium partners — from BZP, TED and CRU. Each with KRS (when known),
   * number of contracts, total value (PLN/EUR/USD) and years; top 20 per role plus totals. Same
   * data as MCP `get_company_procurement_counterparties`. One request = one API call from the
   * monthly quota.
   *
   * @returns Counterparties (null when the company has no public procurement).
   *
   * @throws {@link Registers.GetCompaniesKrsByKrsProcurementCounterpartiesError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesKrsByKrsProcurementCounterparties(
    request: Registers.GetCompaniesKrsByKrsProcurementCounterpartiesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    CompaniesKrsProcurementCounterpartiesResponse,
    Registers.GetCompaniesKrsByKrsProcurementCounterpartiesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies/krs/{krs}/procurement-counterparties"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "krs", value: request.krs, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companiesKrsProcurementCounterpartiesResponseSchema },
        errorFactory: Registers.GetCompaniesKrsByKrsProcurementCounterpartiesError,
      },
      options,
    );
  }

  /**
   * Public aid received (SUDOP)
   *
   * @remarks
   * Public aid and de minimis aid from SUDOP (UOKiK) — full case list with amount, grantor, aid
   * measure, purpose and date. Keyed by NIP. Same data as MCP `get_company_public_aid`. One request
   * = one API call from the monthly quota.
   *
   * @returns Public aid cases of the company.
   *
   * @throws {@link Registers.GetCompaniesKrsByKrsPublicAidError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesKrsByKrsPublicAid(
    request: Registers.GetCompaniesKrsByKrsPublicAidRequest,
    options?: RequestOptions,
  ): ApiPromise<CompaniesKrsPublicAidResponse, Registers.GetCompaniesKrsByKrsPublicAidError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies/krs/{krs}/public-aid"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "krs", value: request.krs, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companiesKrsPublicAidResponseSchema },
        errorFactory: Registers.GetCompaniesKrsByKrsPublicAidError,
      },
      options,
    );
  }

  /**
   * Real estate (financial statements)
   *
   * @remarks
   * Company real estate from the latest financial statement (period ending 2025+): land incl.
   * perpetual usufruct, buildings and premises, investment property (book values in PLN/EUR/USD),
   * plus properties named as mortgage collateral (address, land-register KW numbers, creditor).
   * Micro and small entities have no such breakdown. Same data as MCP `get_company_real_estate`.
   * One request = one API call from the monthly quota.
   *
   * @returns Real estate (null when the balance sheet shows none).
   *
   * @throws {@link Registers.GetCompaniesKrsByKrsRealEstateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesKrsByKrsRealEstate(
    request: Registers.GetCompaniesKrsByKrsRealEstateRequest,
    options?: RequestOptions,
  ): ApiPromise<CompaniesKrsRealEstateResponse, Registers.GetCompaniesKrsByKrsRealEstateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies/krs/{krs}/real-estate"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "krs", value: request.krs, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companiesKrsRealEstateResponseSchema },
        errorFactory: Registers.GetCompaniesKrsByKrsRealEstateError,
      },
      options,
    );
  }

  /**
   * MSWiA sanctions listing
   *
   * @remarks
   * Official Polish Ministry of the Interior and Administration (MSWiA) sanctions listing for a KRS
   * company matched by KRS, NIP, or REGON.
   *
   * `sanctions` is `null` when the company is not on the list. When present, `entries` include the
   * name on the list, listed and removed dates, restrictive measures, and the legal grounds. Polish
   * text stays in `measures` / `justification`; English and German are in `measures_i18n` /
   * `justification_i18n`.
   *
   * @returns Sanctions payload. `sanctions` is null when the company is not listed.
   *
   * @throws {@link Registers.GetCompaniesKrsByKrsSanctionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesKrsByKrsSanctions(
    request: Registers.GetCompaniesKrsByKrsSanctionsRequest,
    options?: RequestOptions,
  ): ApiPromise<CompaniesKrsSanctionsResponse, Registers.GetCompaniesKrsByKrsSanctionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies/krs/{krs}/sanctions"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "krs", value: request.krs, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companiesKrsSanctionsResponseSchema },
        errorFactory: Registers.GetCompaniesKrsByKrsSanctionsError,
      },
      options,
    );
  }

  /**
   * Secured liabilities (mortgages and pledges)
   *
   * @remarks
   * Secured liabilities disclosed in the notes to the latest financial statement (period ending
   * 2025+): mortgages, registered / financial pledges, transfers of ownership, assignments — with
   * creditor, amount, secured debt, asset and land-register (KW) numbers. Same data as MCP
   * `get_company_secured_liabilities`. One request = one API call from the monthly quota.
   *
   * @returns Secured liabilities (null when nothing is disclosed).
   *
   * @throws {@link Registers.GetCompaniesKrsByKrsSecuredLiabilitiesError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesKrsByKrsSecuredLiabilities(
    request: Registers.GetCompaniesKrsByKrsSecuredLiabilitiesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    CompaniesKrsSecuredLiabilitiesResponse,
    Registers.GetCompaniesKrsByKrsSecuredLiabilitiesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies/krs/{krs}/secured-liabilities"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "krs", value: request.krs, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companiesKrsSecuredLiabilitiesResponseSchema },
        errorFactory: Registers.GetCompaniesKrsByKrsSecuredLiabilitiesError,
      },
      options,
    );
  }

  /**
   * Public procurement of a company (BZP + TED)
   *
   * @remarks
   * Public procurement of one company: national tenders from the Public Procurement Bulletin (BZP)
   * and EU-threshold tenders from TED — as contractor (awards won) and as contracting authority.
   * Returns `national` and `eu` blocks. Same data as MCP `get_company_public_tenders /
   * get_company_eu_tenders`. One request = one API call from the monthly quota.
   *
   * @returns `national` (BZP) and `eu` (TED) procurement of the company.
   *
   * @throws {@link Registers.GetCompaniesKrsByKrsTendersError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesKrsByKrsTenders(
    request: Registers.GetCompaniesKrsByKrsTendersRequest,
    options?: RequestOptions,
  ): ApiPromise<CompaniesKrsTendersResponse, Registers.GetCompaniesKrsByKrsTendersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies/krs/{krs}/tenders"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "krs", value: request.krs, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companiesKrsTendersResponseSchema },
        errorFactory: Registers.GetCompaniesKrsByKrsTendersError,
      },
      options,
    );
  }

  /**
   * Waste and packaging register (BDO)
   *
   * @remarks
   * BDO register (waste, products and packaging) — registration number, number of sites, activity
   * flags and decisions with issue and validity dates. Keyed by NIP. Same data as MCP
   * `get_company_waste_registry`. One request = one API call from the monthly quota.
   *
   * @returns BDO entry (null when the company is not registered).
   *
   * @throws {@link Registers.GetCompaniesKrsByKrsWasteRegistryError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesKrsByKrsWasteRegistry(
    request: Registers.GetCompaniesKrsByKrsWasteRegistryRequest,
    options?: RequestOptions,
  ): ApiPromise<CompaniesKrsWasteRegistryResponse, Registers.GetCompaniesKrsByKrsWasteRegistryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies/krs/{krs}/waste-registry"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "krs", value: request.krs, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companiesKrsWasteRegistryResponseSchema },
        errorFactory: Registers.GetCompaniesKrsByKrsWasteRegistryError,
      },
      options,
    );
  }

  /**
   * Facts from the company website
   *
   * @remarks
   * Opening hours, branches, offer (CPV divisions and product/service names in PL/EN/DE),
   * certifications, website technology and clients/partners linked from the site (matched to KRS
   * companies), read from the company's own website. Same data as MCP `get_company_website_facts`.
   * One request = one API call from the monthly quota.
   *
   * @returns Website facts (null when nothing has been read from the website).
   *
   * @throws {@link Registers.GetCompaniesKrsByKrsWebsiteFactsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesKrsByKrsWebsiteFacts(
    request: Registers.GetCompaniesKrsByKrsWebsiteFactsRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Registers.GetCompaniesKrsByKrsWebsiteFactsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies/krs/{krs}/website-facts"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "krs", value: request.krs, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Registers.GetCompaniesKrsByKrsWebsiteFactsError,
      },
      options,
    );
  }
}

export namespace Registers {
  export type GetCeidgNipByNipNfzQueuesRequest = {
    nip: string;
    /**
     * Filter by a fragment of the service name (diacritics optional), e.g. `okulist`, `ortoped`,
     * `rezonans`.
     */
    service?: string;
    /** Filter by town or district, e.g. `Poznań`. */
    town?: string;
    /** @default 50 */
    limit?: number;
  };

  export const getCeidgNipByNipNfzQueuesRequestSchema: Schema<GetCeidgNipByNipNfzQueuesRequest> =
    s.lazySchema(() =>
      s.object<GetCeidgNipByNipNfzQueuesRequest>({
        nip: s.string(),
        service: s.optional(s.string()),
        town: s.optional(s.string()),
        limit: s.defaulted(s.int().check(s.lte(400)), 50),
      }),
    );

  export class GetCeidgNipByNipNfzQueuesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCeidgNipByNipNfzQueuesError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCeidgNipByNipProcurementCounterpartiesRequest = {
    /** 10-digit NIP (non-digits are stripped). */
    nip: string;
  };

  export class GetCeidgNipByNipProcurementCounterpartiesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCeidgNipByNipProcurementCounterpartiesError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCeidgNipByNipWebsiteFactsRequest = {
    /** 10-digit NIP (non-digits are stripped). */
    nip: string;
  };

  export class GetCeidgNipByNipWebsiteFactsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCeidgNipByNipWebsiteFactsError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCompaniesKrsByKrsBeneficiariesRequest = {
    /** KRS input is normalized by stripping non-digits and left-padding to 10 digits. */
    krs: string;
  };

  export class GetCompaniesKrsByKrsBeneficiariesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompaniesKrsByKrsBeneficiariesError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCompaniesKrsByKrsCourtGazetteRequest = {
    /** KRS input is normalized by stripping non-digits and left-padding to 10 digits. */
    krs: string;
  };

  export class GetCompaniesKrsByKrsCourtGazetteError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompaniesKrsByKrsCourtGazetteError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCompaniesKrsByKrsEnergyLicensesRequest = {
    /** KRS input is normalized by stripping non-digits and left-padding to 10 digits. */
    krs: string;
  };

  export class GetCompaniesKrsByKrsEnergyLicensesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompaniesKrsByKrsEnergyLicensesError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCompaniesKrsByKrsEuFundsRequest = {
    /** KRS input is normalized by stripping non-digits and left-padding to 10 digits. */
    krs: string;
  };

  export class GetCompaniesKrsByKrsEuFundsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompaniesKrsByKrsEuFundsError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCompaniesKrsByKrsEuGrantsRequest = {
    /** KRS input is normalized by stripping non-digits and left-padding to 10 digits. */
    krs: string;
  };

  export class GetCompaniesKrsByKrsEuGrantsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompaniesKrsByKrsEuGrantsError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCompaniesKrsByKrsFilingTimelinessRequest = {
    /** KRS input is normalized by stripping non-digits and left-padding to 10 digits. */
    krs: string;
  };

  export class GetCompaniesKrsByKrsFilingTimelinessError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompaniesKrsByKrsFilingTimelinessError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCompaniesKrsByKrsFinancialLicensesRequest = {
    /** KRS input is normalized by stripping non-digits and left-padding to 10 digits. */
    krs: string;
  };

  export class GetCompaniesKrsByKrsFinancialLicensesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompaniesKrsByKrsFinancialLicensesError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCompaniesKrsByKrsGpwRequest = {
    /** KRS input is normalized by stripping non-digits and left-padding to 10 digits. */
    krs: string;
    /** Comma-separated extras. Supported values `series`, `intraday`. */
    include?: string;
    /** Daily bars when `include` contains `series`. Ignored otherwise. @default 250 */
    seriesLimit?: number;
  };

  export const getCompaniesKrsByKrsGpwRequestSchema: Schema<GetCompaniesKrsByKrsGpwRequest> = s.lazySchema(
    () =>
      s.object<GetCompaniesKrsByKrsGpwRequest>({
        krs: s.string(),
        include: s.optional(s.string()),
        seriesLimit: s.defaulted(s.int().check(s.gte(0), s.lte(2000)), 250),
      }),
  );

  export class GetCompaniesKrsByKrsGpwError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompaniesKrsByKrsGpwError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCompaniesKrsByKrsInsolvencyRequest = {
    /** KRS input is normalized by stripping non-digits and left-padding to 10 digits. */
    krs: string;
  };

  export class GetCompaniesKrsByKrsInsolvencyError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompaniesKrsByKrsInsolvencyError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCompaniesKrsByKrsNfzContractsRequest = {
    /** KRS input is normalized by stripping non-digits and left-padding to 10 digits. */
    krs: string;
  };

  export class GetCompaniesKrsByKrsNfzContractsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompaniesKrsByKrsNfzContractsError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCompaniesKrsByKrsNfzQueuesRequest = {
    /** KRS input is normalized by stripping non-digits and left-padding to 10 digits. */
    krs: string;
    /**
     * Filter by a fragment of the service name (diacritics optional), e.g. `okulist`, `ortoped`,
     * `rezonans`.
     */
    service?: string;
    /** Filter by town or district, e.g. `Poznań`. */
    town?: string;
    /** @default 50 */
    limit?: number;
  };

  export const getCompaniesKrsByKrsNfzQueuesRequestSchema: Schema<GetCompaniesKrsByKrsNfzQueuesRequest> =
    s.lazySchema(() =>
      s.object<GetCompaniesKrsByKrsNfzQueuesRequest>({
        krs: s.string(),
        service: s.optional(s.string()),
        town: s.optional(s.string()),
        limit: s.defaulted(s.int().check(s.lte(400)), 50),
      }),
    );

  export class GetCompaniesKrsByKrsNfzQueuesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompaniesKrsByKrsNfzQueuesError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCompaniesKrsByKrsProcurementCounterpartiesRequest = {
    /** KRS input is normalized by stripping non-digits and left-padding to 10 digits. */
    krs: string;
  };

  export class GetCompaniesKrsByKrsProcurementCounterpartiesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompaniesKrsByKrsProcurementCounterpartiesError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCompaniesKrsByKrsPublicAidRequest = {
    /** KRS input is normalized by stripping non-digits and left-padding to 10 digits. */
    krs: string;
  };

  export class GetCompaniesKrsByKrsPublicAidError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompaniesKrsByKrsPublicAidError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCompaniesKrsByKrsRealEstateRequest = {
    /** KRS input is normalized by stripping non-digits and left-padding to 10 digits. */
    krs: string;
  };

  export class GetCompaniesKrsByKrsRealEstateError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompaniesKrsByKrsRealEstateError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCompaniesKrsByKrsSanctionsRequest = {
    /** KRS input is normalized by stripping non-digits and left-padding to 10 digits. */
    krs: string;
  };

  export class GetCompaniesKrsByKrsSanctionsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompaniesKrsByKrsSanctionsError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCompaniesKrsByKrsSecuredLiabilitiesRequest = {
    /** KRS input is normalized by stripping non-digits and left-padding to 10 digits. */
    krs: string;
  };

  export class GetCompaniesKrsByKrsSecuredLiabilitiesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompaniesKrsByKrsSecuredLiabilitiesError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCompaniesKrsByKrsTendersRequest = {
    /** KRS input is normalized by stripping non-digits and left-padding to 10 digits. */
    krs: string;
  };

  export class GetCompaniesKrsByKrsTendersError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompaniesKrsByKrsTendersError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCompaniesKrsByKrsWasteRegistryRequest = {
    /** KRS input is normalized by stripping non-digits and left-padding to 10 digits. */
    krs: string;
  };

  export class GetCompaniesKrsByKrsWasteRegistryError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompaniesKrsByKrsWasteRegistryError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCompaniesKrsByKrsWebsiteFactsRequest = {
    /** KRS input is normalized by stripping non-digits and left-padding to 10 digits. */
    krs: string;
  };

  export class GetCompaniesKrsByKrsWebsiteFactsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompaniesKrsByKrsWebsiteFactsError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
