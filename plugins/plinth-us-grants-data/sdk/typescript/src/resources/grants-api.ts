import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { apiErrorModelSchema, type ApiErrorModel } from "../models/api-error-model.js";
import { exampleSchema, type Example } from "../models/example.js";
import { example1Schema, type Example1 } from "../models/example1.js";
import { example3Schema, type Example3 } from "../models/example3.js";
import { fundersResponseSchema, type FundersResponse } from "../models/funders-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { recipientsResponseSchema, type RecipientsResponse } from "../models/recipients-response.js";
import { summaryResponseSchema, type SummaryResponse } from "../models/summary-response.js";
import { transactionsResponseSchema, type TransactionsResponse } from "../models/transactions-response.js";
import {
  countryVariantQgdleuSchema,
  type CountryVariantQgdleu,
} from "../models/unions/country-variant-qgdleu.js";
import { einSource1Schema, type EinSource1 } from "../models/unions/ein-source1.js";
import { excludeDafSchema, type ExcludeDaf } from "../models/unions/exclude-daf.js";
import { excludeSchema, type Exclude } from "../models/unions/exclude.js";
import { format1Schema, type Format1 } from "../models/unions/format1.js";
import { funderIdSchema, type FunderId } from "../models/unions/funder-id.js";
import { funderType1Schema, type FunderType1 } from "../models/unions/funder-type1.js";
import { geoIdType1Schema, type GeoIdType1 } from "../models/unions/geo-id-type1.js";
import { idType1Schema, type IdType1 } from "../models/unions/id-type1.js";
import { includeGovSchema, type IncludeGov } from "../models/unions/include-gov.js";
import { jurisdictionSchema, type Jurisdiction } from "../models/unions/jurisdiction.js";
import { lastUpdatedSchema, type LastUpdated } from "../models/unions/last-updated.js";
import { limitSchema, type Limit } from "../models/unions/limit.js";
import { locationType1Schema, type LocationType1 } from "../models/unions/location-type1.js";
import { location1Schema, type Location1 } from "../models/unions/location1.js";
import { maxAmtSchema, type MaxAmt } from "../models/unions/max-amt.js";
import { maxYearSchema, type MaxYear } from "../models/unions/max-year.js";
import { minAmtSchema, type MinAmt } from "../models/unions/min-amt.js";
import { minMatchProbSchema, type MinMatchProb } from "../models/unions/min-match-prob.js";
import { minYearSchema, type MinYear } from "../models/unions/min-year.js";
import { pageSchema, type Page } from "../models/unions/page.js";
import { populationSchema, type Population } from "../models/unions/population.js";
import { profileLevelsSchema, type ProfileLevels } from "../models/unions/profile-levels.js";
import { querySchema, type Query } from "../models/unions/query.js";
import { recipIdSchema, type RecipId } from "../models/unions/recip-id.js";
import { sortBySchema, type SortBy } from "../models/unions/sort-by.js";
import { sortOrder1Schema, type SortOrder1 } from "../models/unions/sort-order1.js";
import { sortOrder11Schema, type SortOrder11 } from "../models/unions/sort-order11.js";
import { strictSchema, type Strict } from "../models/unions/strict.js";
import { subjectSchema, type Subject } from "../models/unions/subject.js";
import { supportSchema, type Support } from "../models/unions/support.js";
import { transactionSchema, type Transaction } from "../models/unions/transaction.js";
import {
  yearPlinthUsDataGrantsApiSchema,
  type YearPlinthUsDataGrantsApi,
} from "../models/unions/year-plinth-us-data-grants-api.js";
import type { Servers } from "../servers.js";

/**
 * The funder-grantee graph: grants, funders, recipients and aggregates.
 */
export class GrantsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Rank funders by giving
   *
   * @remarks
   * Funders matching the filter, ranked by total dollars: amount, grant count, distinct recipients
   * reached, and the first and last fiscal years they were active.
   *
   * @returns Funders matching the filter, aggregated.
   *
   * @throws {@link GrantsApi.GetApiV1GrantsFundersError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV1GrantsFunders(
    request: GrantsApi.GetApiV1GrantsFundersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<FundersResponse, GrantsApi.GetApiV1GrantsFundersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/grants/funders"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "funder_id", value: request.funderId, schema: s.optional(s.lazy(() => funderIdSchema)) },
          { name: "recip_id", value: request.recipId, schema: s.optional(s.lazy(() => recipIdSchema)) },
          { name: "id_type", value: request.idType, schema: s.optional(s.lazy(() => idType1Schema)) },
          {
            name: "year",
            value: request.year,
            schema: s.optional(s.lazy(() => yearPlinthUsDataGrantsApiSchema)),
          },
          { name: "min_year", value: request.minYear, schema: s.optional(s.lazy(() => minYearSchema)) },
          { name: "max_year", value: request.maxYear, schema: s.optional(s.lazy(() => maxYearSchema)) },
          { name: "subject", value: request.subject, schema: s.optional(s.lazy(() => subjectSchema)) },
          { name: "location", value: request.location, schema: s.optional(s.lazy(() => location1Schema)) },
          {
            name: "geo_id_type",
            value: request.geoIdType,
            schema: s.optional(s.lazy(() => geoIdType1Schema)),
          },
          {
            name: "location_type",
            value: request.locationType,
            schema: s.optional(s.lazy(() => locationType1Schema)),
          },
          {
            name: "country",
            value: request.country,
            schema: s.optional(s.lazy(() => countryVariantQgdleuSchema)),
          },
          { name: "query", value: request.query, schema: s.optional(s.lazy(() => querySchema)) },
          { name: "support", value: request.support, schema: s.optional(s.lazy(() => supportSchema)) },
          {
            name: "funder_type",
            value: request.funderType,
            schema: s.optional(s.lazy(() => funderType1Schema)),
          },
          { name: "exclude", value: request.exclude, schema: s.optional(s.lazy(() => excludeSchema)) },
          {
            name: "exclude_daf",
            value: request.excludeDaf,
            schema: s.optional(s.lazy(() => excludeDafSchema)),
          },
          { name: "min_amt", value: request.minAmt, schema: s.optional(s.lazy(() => minAmtSchema)) },
          { name: "max_amt", value: request.maxAmt, schema: s.optional(s.lazy(() => maxAmtSchema)) },
          {
            name: "min_match_prob",
            value: request.minMatchProb,
            schema: s.optional(s.lazy(() => minMatchProbSchema)),
          },
          {
            name: "ein_source",
            value: request.einSource,
            schema: s.optional(s.lazy(() => einSource1Schema)),
          },
          {
            name: "jurisdiction",
            value: request.jurisdiction,
            schema: s.optional(s.lazy(() => jurisdictionSchema)),
          },
          { name: "strict", value: request.strict, schema: s.optional(s.lazy(() => strictSchema)) },
          { name: "format", value: request.format, schema: s.optional(s.lazy(() => format1Schema)) },
          {
            name: "population",
            value: request.population,
            schema: s.optional(s.lazy(() => populationSchema)),
          },
          {
            name: "transaction",
            value: request.transaction,
            schema: s.optional(s.lazy(() => transactionSchema)),
          },
          {
            name: "include_gov",
            value: request.includeGov,
            schema: s.optional(s.lazy(() => includeGovSchema)),
          },
          {
            name: "last_updated",
            value: request.lastUpdated,
            schema: s.optional(s.lazy(() => lastUpdatedSchema)),
          },
          {
            name: "profile_levels",
            value: request.profileLevels,
            schema: s.optional(s.lazy(() => profileLevelsSchema)),
          },
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "limit", value: request.limit, schema: s.optional(s.lazy(() => limitSchema)) },
          { name: "sort_by", value: request.sortBy, schema: s.optional(s.lazy(() => sortBySchema)) },
          {
            name: "sort_order",
            value: request.sortOrder,
            schema: s.optional(s.lazy(() => sortOrder11Schema)),
          },
          { name: "example", value: request.example, schema: s.optional(s.lazy(() => example1Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fundersResponseSchema },
        errorFactory: GrantsApi.GetApiV1GrantsFundersError,
      },
      options,
    );
  }

  /**
   * Rank recipients by what they received
   *
   * @remarks
   * Recipient organizations matching the filter, ranked by dollars received, with location and how
   * many distinct funders backed them.
   *
   * @returns Recipients matching the filter, aggregated.
   *
   * @throws {@link GrantsApi.GetApiV1GrantsRecipientsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV1GrantsRecipients(
    request: GrantsApi.GetApiV1GrantsRecipientsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<RecipientsResponse, GrantsApi.GetApiV1GrantsRecipientsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/grants/recipients"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "funder_id", value: request.funderId, schema: s.optional(s.lazy(() => funderIdSchema)) },
          { name: "recip_id", value: request.recipId, schema: s.optional(s.lazy(() => recipIdSchema)) },
          { name: "id_type", value: request.idType, schema: s.optional(s.lazy(() => idType1Schema)) },
          {
            name: "year",
            value: request.year,
            schema: s.optional(s.lazy(() => yearPlinthUsDataGrantsApiSchema)),
          },
          { name: "min_year", value: request.minYear, schema: s.optional(s.lazy(() => minYearSchema)) },
          { name: "max_year", value: request.maxYear, schema: s.optional(s.lazy(() => maxYearSchema)) },
          { name: "subject", value: request.subject, schema: s.optional(s.lazy(() => subjectSchema)) },
          { name: "location", value: request.location, schema: s.optional(s.lazy(() => location1Schema)) },
          {
            name: "geo_id_type",
            value: request.geoIdType,
            schema: s.optional(s.lazy(() => geoIdType1Schema)),
          },
          {
            name: "location_type",
            value: request.locationType,
            schema: s.optional(s.lazy(() => locationType1Schema)),
          },
          {
            name: "country",
            value: request.country,
            schema: s.optional(s.lazy(() => countryVariantQgdleuSchema)),
          },
          { name: "query", value: request.query, schema: s.optional(s.lazy(() => querySchema)) },
          { name: "support", value: request.support, schema: s.optional(s.lazy(() => supportSchema)) },
          {
            name: "funder_type",
            value: request.funderType,
            schema: s.optional(s.lazy(() => funderType1Schema)),
          },
          { name: "exclude", value: request.exclude, schema: s.optional(s.lazy(() => excludeSchema)) },
          {
            name: "exclude_daf",
            value: request.excludeDaf,
            schema: s.optional(s.lazy(() => excludeDafSchema)),
          },
          { name: "min_amt", value: request.minAmt, schema: s.optional(s.lazy(() => minAmtSchema)) },
          { name: "max_amt", value: request.maxAmt, schema: s.optional(s.lazy(() => maxAmtSchema)) },
          {
            name: "min_match_prob",
            value: request.minMatchProb,
            schema: s.optional(s.lazy(() => minMatchProbSchema)),
          },
          {
            name: "ein_source",
            value: request.einSource,
            schema: s.optional(s.lazy(() => einSource1Schema)),
          },
          {
            name: "jurisdiction",
            value: request.jurisdiction,
            schema: s.optional(s.lazy(() => jurisdictionSchema)),
          },
          { name: "strict", value: request.strict, schema: s.optional(s.lazy(() => strictSchema)) },
          { name: "format", value: request.format, schema: s.optional(s.lazy(() => format1Schema)) },
          {
            name: "population",
            value: request.population,
            schema: s.optional(s.lazy(() => populationSchema)),
          },
          {
            name: "transaction",
            value: request.transaction,
            schema: s.optional(s.lazy(() => transactionSchema)),
          },
          {
            name: "include_gov",
            value: request.includeGov,
            schema: s.optional(s.lazy(() => includeGovSchema)),
          },
          {
            name: "last_updated",
            value: request.lastUpdated,
            schema: s.optional(s.lazy(() => lastUpdatedSchema)),
          },
          {
            name: "profile_levels",
            value: request.profileLevels,
            schema: s.optional(s.lazy(() => profileLevelsSchema)),
          },
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "limit", value: request.limit, schema: s.optional(s.lazy(() => limitSchema)) },
          { name: "sort_by", value: request.sortBy, schema: s.optional(s.lazy(() => sortBySchema)) },
          {
            name: "sort_order",
            value: request.sortOrder,
            schema: s.optional(s.lazy(() => sortOrder11Schema)),
          },
          { name: "example", value: request.example, schema: s.optional(s.lazy(() => example1Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: recipientsResponseSchema },
        errorFactory: GrantsApi.GetApiV1GrantsRecipientsError,
      },
      options,
    );
  }

  /**
   * Aggregate totals for a filter
   *
   * @remarks
   * One call for the whole shape of a filter: total dollars, grant count, distinct funders and
   * recipients, plus a year-by-year breakdown. Cheaper than paging the rows to count them.
   *
   * @returns Totals and a per-year breakdown over the whole filter.
   *
   * @throws {@link GrantsApi.GetApiV1GrantsSummaryError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV1GrantsSummary(
    request: GrantsApi.GetApiV1GrantsSummaryRequest = {},
    options?: RequestOptions,
  ): ApiPromise<SummaryResponse, GrantsApi.GetApiV1GrantsSummaryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/grants/summary"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "funder_id", value: request.funderId, schema: s.optional(s.lazy(() => funderIdSchema)) },
          { name: "recip_id", value: request.recipId, schema: s.optional(s.lazy(() => recipIdSchema)) },
          { name: "id_type", value: request.idType, schema: s.optional(s.lazy(() => idType1Schema)) },
          {
            name: "year",
            value: request.year,
            schema: s.optional(s.lazy(() => yearPlinthUsDataGrantsApiSchema)),
          },
          { name: "min_year", value: request.minYear, schema: s.optional(s.lazy(() => minYearSchema)) },
          { name: "max_year", value: request.maxYear, schema: s.optional(s.lazy(() => maxYearSchema)) },
          { name: "subject", value: request.subject, schema: s.optional(s.lazy(() => subjectSchema)) },
          { name: "location", value: request.location, schema: s.optional(s.lazy(() => location1Schema)) },
          {
            name: "geo_id_type",
            value: request.geoIdType,
            schema: s.optional(s.lazy(() => geoIdType1Schema)),
          },
          {
            name: "location_type",
            value: request.locationType,
            schema: s.optional(s.lazy(() => locationType1Schema)),
          },
          {
            name: "country",
            value: request.country,
            schema: s.optional(s.lazy(() => countryVariantQgdleuSchema)),
          },
          { name: "query", value: request.query, schema: s.optional(s.lazy(() => querySchema)) },
          { name: "support", value: request.support, schema: s.optional(s.lazy(() => supportSchema)) },
          {
            name: "funder_type",
            value: request.funderType,
            schema: s.optional(s.lazy(() => funderType1Schema)),
          },
          { name: "exclude", value: request.exclude, schema: s.optional(s.lazy(() => excludeSchema)) },
          {
            name: "exclude_daf",
            value: request.excludeDaf,
            schema: s.optional(s.lazy(() => excludeDafSchema)),
          },
          { name: "min_amt", value: request.minAmt, schema: s.optional(s.lazy(() => minAmtSchema)) },
          { name: "max_amt", value: request.maxAmt, schema: s.optional(s.lazy(() => maxAmtSchema)) },
          {
            name: "min_match_prob",
            value: request.minMatchProb,
            schema: s.optional(s.lazy(() => minMatchProbSchema)),
          },
          {
            name: "ein_source",
            value: request.einSource,
            schema: s.optional(s.lazy(() => einSource1Schema)),
          },
          {
            name: "jurisdiction",
            value: request.jurisdiction,
            schema: s.optional(s.lazy(() => jurisdictionSchema)),
          },
          { name: "strict", value: request.strict, schema: s.optional(s.lazy(() => strictSchema)) },
          { name: "format", value: request.format, schema: s.optional(s.lazy(() => format1Schema)) },
          {
            name: "population",
            value: request.population,
            schema: s.optional(s.lazy(() => populationSchema)),
          },
          {
            name: "transaction",
            value: request.transaction,
            schema: s.optional(s.lazy(() => transactionSchema)),
          },
          {
            name: "include_gov",
            value: request.includeGov,
            schema: s.optional(s.lazy(() => includeGovSchema)),
          },
          {
            name: "last_updated",
            value: request.lastUpdated,
            schema: s.optional(s.lazy(() => lastUpdatedSchema)),
          },
          {
            name: "profile_levels",
            value: request.profileLevels,
            schema: s.optional(s.lazy(() => profileLevelsSchema)),
          },
          { name: "example", value: request.example, schema: s.optional(s.lazy(() => example3Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: summaryResponseSchema },
        errorFactory: GrantsApi.GetApiV1GrantsSummaryError,
      },
      options,
    );
  }

  /**
   * List individual grants
   *
   * @remarks
   * Individual grant rows — funder, recipient, amount, fiscal year, cause and the purpose text as
   * filed. The graph traverses both ways: `funder_id` for everything a foundation funded,
   * `recip_id` for every funder behind a nonprofit.
   *
   * @returns Grant lines matching the filter.
   *
   * @throws {@link GrantsApi.GetApiV1GrantsTransactionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV1GrantsTransactions(
    request: GrantsApi.GetApiV1GrantsTransactionsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<TransactionsResponse, GrantsApi.GetApiV1GrantsTransactionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/grants/transactions"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "funder_id", value: request.funderId, schema: s.optional(s.lazy(() => funderIdSchema)) },
          { name: "recip_id", value: request.recipId, schema: s.optional(s.lazy(() => recipIdSchema)) },
          { name: "id_type", value: request.idType, schema: s.optional(s.lazy(() => idType1Schema)) },
          {
            name: "year",
            value: request.year,
            schema: s.optional(s.lazy(() => yearPlinthUsDataGrantsApiSchema)),
          },
          { name: "min_year", value: request.minYear, schema: s.optional(s.lazy(() => minYearSchema)) },
          { name: "max_year", value: request.maxYear, schema: s.optional(s.lazy(() => maxYearSchema)) },
          { name: "subject", value: request.subject, schema: s.optional(s.lazy(() => subjectSchema)) },
          { name: "location", value: request.location, schema: s.optional(s.lazy(() => location1Schema)) },
          {
            name: "geo_id_type",
            value: request.geoIdType,
            schema: s.optional(s.lazy(() => geoIdType1Schema)),
          },
          {
            name: "location_type",
            value: request.locationType,
            schema: s.optional(s.lazy(() => locationType1Schema)),
          },
          {
            name: "country",
            value: request.country,
            schema: s.optional(s.lazy(() => countryVariantQgdleuSchema)),
          },
          { name: "query", value: request.query, schema: s.optional(s.lazy(() => querySchema)) },
          { name: "support", value: request.support, schema: s.optional(s.lazy(() => supportSchema)) },
          {
            name: "funder_type",
            value: request.funderType,
            schema: s.optional(s.lazy(() => funderType1Schema)),
          },
          { name: "exclude", value: request.exclude, schema: s.optional(s.lazy(() => excludeSchema)) },
          {
            name: "exclude_daf",
            value: request.excludeDaf,
            schema: s.optional(s.lazy(() => excludeDafSchema)),
          },
          { name: "min_amt", value: request.minAmt, schema: s.optional(s.lazy(() => minAmtSchema)) },
          { name: "max_amt", value: request.maxAmt, schema: s.optional(s.lazy(() => maxAmtSchema)) },
          {
            name: "min_match_prob",
            value: request.minMatchProb,
            schema: s.optional(s.lazy(() => minMatchProbSchema)),
          },
          {
            name: "ein_source",
            value: request.einSource,
            schema: s.optional(s.lazy(() => einSource1Schema)),
          },
          {
            name: "jurisdiction",
            value: request.jurisdiction,
            schema: s.optional(s.lazy(() => jurisdictionSchema)),
          },
          { name: "strict", value: request.strict, schema: s.optional(s.lazy(() => strictSchema)) },
          { name: "format", value: request.format, schema: s.optional(s.lazy(() => format1Schema)) },
          {
            name: "population",
            value: request.population,
            schema: s.optional(s.lazy(() => populationSchema)),
          },
          {
            name: "transaction",
            value: request.transaction,
            schema: s.optional(s.lazy(() => transactionSchema)),
          },
          {
            name: "include_gov",
            value: request.includeGov,
            schema: s.optional(s.lazy(() => includeGovSchema)),
          },
          {
            name: "last_updated",
            value: request.lastUpdated,
            schema: s.optional(s.lazy(() => lastUpdatedSchema)),
          },
          {
            name: "profile_levels",
            value: request.profileLevels,
            schema: s.optional(s.lazy(() => profileLevelsSchema)),
          },
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "limit", value: request.limit, schema: s.optional(s.lazy(() => limitSchema)) },
          { name: "sort_by", value: request.sortBy, schema: s.optional(s.lazy(() => sortBySchema)) },
          {
            name: "sort_order",
            value: request.sortOrder,
            schema: s.optional(s.lazy(() => sortOrder11Schema)),
          },
          { name: "example", value: request.example, schema: s.optional(s.lazy(() => exampleSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transactionsResponseSchema },
        errorFactory: GrantsApi.GetApiV1GrantsTransactionsError,
      },
      options,
    );
  }

  /**
   * Aggregate totals for a filter
   *
   * @remarks
   * One call for the whole shape of a filter: total dollars, grant count, distinct funders and
   * recipients, plus a year-by-year breakdown. Cheaper than paging the rows to count them.
   *
   * @returns Successful Response
   *
   * @throws {@link GrantsApi.GetGrantsSummaryError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getGrantsSummary(
    request: GrantsApi.GetGrantsSummaryRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, GrantsApi.GetGrantsSummaryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/grants/summary"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "funder_id", value: request.funderId, schema: s.optional(s.lazy(() => funderIdSchema)) },
          { name: "recip_id", value: request.recipId, schema: s.optional(s.lazy(() => recipIdSchema)) },
          {
            name: "year",
            value: request.year,
            schema: s.optional(s.lazy(() => yearPlinthUsDataGrantsApiSchema)),
          },
          { name: "subject", value: request.subject, schema: s.optional(s.lazy(() => subjectSchema)) },
          { name: "location", value: request.location, schema: s.optional(s.lazy(() => location1Schema)) },
          { name: "min_amt", value: request.minAmt, schema: s.optional(s.lazy(() => minAmtSchema)) },
          { name: "max_amt", value: request.maxAmt, schema: s.optional(s.lazy(() => maxAmtSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GrantsApi.GetGrantsSummaryError,
      },
      options,
    );
  }

  /**
   * Rank funders by giving
   *
   * @remarks
   * Funders matching the filter, ranked by total dollars: amount, grant count, distinct recipients
   * reached, and the first and last fiscal years they were active.
   *
   * @returns Successful Response
   *
   * @throws {@link GrantsApi.ListFundersError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listFunders(
    request: GrantsApi.ListFundersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, GrantsApi.ListFundersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/grants/funders"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "funder_id", value: request.funderId, schema: s.optional(s.lazy(() => funderIdSchema)) },
          { name: "recip_id", value: request.recipId, schema: s.optional(s.lazy(() => recipIdSchema)) },
          {
            name: "year",
            value: request.year,
            schema: s.optional(s.lazy(() => yearPlinthUsDataGrantsApiSchema)),
          },
          { name: "subject", value: request.subject, schema: s.optional(s.lazy(() => subjectSchema)) },
          { name: "location", value: request.location, schema: s.optional(s.lazy(() => location1Schema)) },
          { name: "min_amt", value: request.minAmt, schema: s.optional(s.lazy(() => minAmtSchema)) },
          { name: "max_amt", value: request.maxAmt, schema: s.optional(s.lazy(() => maxAmtSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "limit", value: request.limit, schema: s.optional(s.lazy(() => limitSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GrantsApi.ListFundersError,
      },
      options,
    );
  }

  /**
   * List individual grants
   *
   * @remarks
   * Individual grant rows — funder, recipient, amount, fiscal year, cause and the purpose text as
   * filed. The graph traverses both ways: `funder_id` for everything a foundation funded,
   * `recip_id` for every funder behind a nonprofit.
   *
   * @returns Successful Response
   *
   * @throws {@link GrantsApi.ListGrantsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listGrants(
    request: GrantsApi.ListGrantsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, GrantsApi.ListGrantsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/grants/transactions"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "funder_id", value: request.funderId, schema: s.optional(s.lazy(() => funderIdSchema)) },
          { name: "recip_id", value: request.recipId, schema: s.optional(s.lazy(() => recipIdSchema)) },
          {
            name: "year",
            value: request.year,
            schema: s.optional(s.lazy(() => yearPlinthUsDataGrantsApiSchema)),
          },
          { name: "subject", value: request.subject, schema: s.optional(s.lazy(() => subjectSchema)) },
          { name: "location", value: request.location, schema: s.optional(s.lazy(() => location1Schema)) },
          { name: "min_amt", value: request.minAmt, schema: s.optional(s.lazy(() => minAmtSchema)) },
          { name: "max_amt", value: request.maxAmt, schema: s.optional(s.lazy(() => maxAmtSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "limit", value: request.limit, schema: s.optional(s.lazy(() => limitSchema)) },
          { name: "sort_by", value: request.sortBy, schema: s.optional(s.lazy(() => sortBySchema)) },
          {
            name: "sort_order",
            value: request.sortOrder,
            schema: s.optional(s.lazy(() => sortOrder1Schema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GrantsApi.ListGrantsError,
      },
      options,
    );
  }

  /**
   * Rank recipients by what they received
   *
   * @remarks
   * Recipient organizations matching the filter, ranked by dollars received, with location and how
   * many distinct funders backed them.
   *
   * @returns Successful Response
   *
   * @throws {@link GrantsApi.ListRecipientsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listRecipients(
    request: GrantsApi.ListRecipientsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, GrantsApi.ListRecipientsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/grants/recipients"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "funder_id", value: request.funderId, schema: s.optional(s.lazy(() => funderIdSchema)) },
          { name: "recip_id", value: request.recipId, schema: s.optional(s.lazy(() => recipIdSchema)) },
          {
            name: "year",
            value: request.year,
            schema: s.optional(s.lazy(() => yearPlinthUsDataGrantsApiSchema)),
          },
          { name: "subject", value: request.subject, schema: s.optional(s.lazy(() => subjectSchema)) },
          { name: "location", value: request.location, schema: s.optional(s.lazy(() => location1Schema)) },
          { name: "min_amt", value: request.minAmt, schema: s.optional(s.lazy(() => minAmtSchema)) },
          { name: "max_amt", value: request.maxAmt, schema: s.optional(s.lazy(() => maxAmtSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "limit", value: request.limit, schema: s.optional(s.lazy(() => limitSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GrantsApi.ListRecipientsError,
      },
      options,
    );
  }
}

export namespace GrantsApi {
  export type GetApiV1GrantsFundersRequest = {
    /**
     * EIN of the grantmaker. Any format — hyphens and missing leading zeros are normalized.
     * Comma-separate for several.
     */
    funderId?: FunderId;
    /**
     * EIN of the recipient organization. Same normalization as funder_id. Comma-separate for
     * several.
     */
    recipId?: RecipId;
    /**
     * Accepted for Candid compatibility. Only `ein` is valid — Candid's proprietary organization
     * keys mean nothing here, so any other value is a 400 pointing at /api/search rather than a
     * silently wrong filter.
     */
    idType?: IdType1;
    /** Filing fiscal year. A single year, a comma-separated list, or a `2019-2023` range. */
    year?: YearPlinthUsDataGrantsApi;
    /** Lowest fiscal year to include (open-ended alternative to `year`). */
    minYear?: MinYear;
    /** Highest fiscal year to include. */
    maxYear?: MaxYear;
    /**
     * Cause area of the RECIPIENT. Accepts an NTEE major-group letter (T), a full NTEE code (T31)
     * or a cause label (Philanthropy); comma-separate for several. NOT a Candid PCS code — a
     * PCS-shaped value is rejected rather than silently matching nothing. Only grants resolved to
     * an EIN carry a classification, so this filter excludes unmatched grant lines (~33% of
     * dollars).
     */
    subject?: Subject;
    /**
     * Place filter. **Whose place it is comes from `location_type`, which defaults to the
     * RECIPIENT** — so on /grants/funders, `location=MA` returns funders that gave TO
     * Massachusetts, not funders based there (which is why a Seattle foundation can appear). Set
     * `location_type=funder` for the other reading. How the value itself is read comes from
     * `geo_id_type` (default: two-letter US state). Comma-separate for several.
     */
    location?: Location1;
    /**
     * How `location` is interpreted: state (default) | zip | city | county_fips | country. GeoNames
     * ids are not resolved.
     */
    geoIdType?: GeoIdType1;
    /**
     * Whose geography `location` refers to: recipient (default) | funder | area_served.
     * `area_served` means the funder demonstrably gives there — see the response note for exactly
     * what it covers.
     */
    locationType?: LocationType1;
    /**
     * Recipient country for cross-border giving, as the FIPS-10-4 code the 990 foreign-address
     * block carries (IN=India, UK=United Kingdom — NOT ISO).
     */
    country?: CountryVariantQgdleu;
    /**
     * Free-text keyword search over the grant's as-filed purpose text and the recipient's name. ⚠️
     * Purpose coverage varies sharply between filers — many report none at all, and for those
     * funders this is a recipient-name search only, which a caller searching for a THEME will read
     * as a real absence. Every response says so in `x_plinth.warnings`; check `description` on the
     * rows to see which you got. **Requires a narrowing filter** — one of year, funder_id,
     * recip_id, location, country, subject, funder_type or an amount range. There is no text index
     * behind this, so an unnarrowed search reads every purpose string in the corpus and times out;
     * narrowed, it typically returns in a few seconds. Sending it alone is a 400, immediately,
     * rather than a timeout later.
     */
    query?: Query;
    /**
     * Support strategy, derived from the filing's own purpose wording (general_operating, program,
     * capital, endowment, scholarship, fellowship, research, capacity_building, matching,
     * emergency_relief, equipment, sponsorship). Approximate by construction — it finds grants that
     * SAY so.
     */
    support?: Support;
    /**
     * private_foundation | public_charity | daf_or_passthrough. Separates institutional money from
     * donor-advised pass-through.
     */
    funderType?: FunderType1;
    /**
     * Drop structurally distorting flows, comma-separated: daf | individuals | related_party.
     * Nothing is excluded by default — together these are 50.9% of corpus dollars, so a total that
     * omits them and a total that keeps them are different claims and the caller has to be the one
     * making it. On /grants/summary, `x_plinth.excluded` prices each class against your own filter.
     */
    exclude?: Exclude;
    /**
     * Set to 1/true to drop donor-advised-fund sponsors and other pass-through vehicles. **Reach
     * for this whenever you rank by dollars.** DAF sponsors (Fidelity Charitable, Schwab
     * Charitable, National Philanthropic Trust and similar) report enormous grant totals because
     * money passes through them from individual donors — so any amount-ranked list is topped by
     * them unless you say otherwise, which answers a different question from 'which foundations
     * give the most'. Exactly equivalent to `exclude=daf`, and kept because the amount-ranked
     * caveat names it; `exclude=` additionally drops the two distortions that survive it (grants to
     * individuals, and transfers inside one economic entity).
     */
    excludeDaf?: ExcludeDaf;
    /** Minimum grant amount, whole dollars. */
    minAmt?: MinAmt;
    /** Maximum grant amount, whole dollars. */
    maxAmt?: MaxAmt;
    /**
     * Keep only rows whose recipient EIN carries `x_plinth.match_prob` at or above this value (0 to
     * 1). Rows with no recipient EIN carry no probability and are excluded. ⚠️ Model-resolved rows
     * top out near 0.965 (isotonic calibration only emits values it observed), so a threshold above
     * that drops every `model` row while keeping the rule-resolved ones: it reads as a confidence
     * cut and acts as a provenance filter, and the response says so in `x_plinth.warnings`. For
     * provenance, say so with `ein_source`.
     */
    minMatchProb?: MinMatchProb;
    /**
     * Keep only rows whose recipient EIN came from these resolution rules, comma-separated.
     * Strongest first, with each rule's measured held-out precision: filed (0.995), override_human
     * (0.99), override_keyerror (0.98), name (0.97), registry-dominant (0.97), fuzzy (0.961),
     * override_llm (0.95), address (0.944), registry (0.944), zip (0.934), street (0.834), model
     * (per-row, see match_prob). `filed` is the filer-stated subset, the one to use for anything
     * load-bearing. Rows with no recipient EIN are excluded.
     */
    einSource?: EinSource1;
    /**
     * Filing jurisdiction of the GRANT: us (default) | ca. Never mixed — amounts stay in the
     * currency the filing was made in and are never converted, so every total is a
     * single-jurisdiction total. `x_plinth.dataset` names the source, licence and currency behind
     * the answer. Distinct from `country`, which is where the RECIPIENT sits.
     */
    jurisdiction?: Jurisdiction;
    /**
     * Set to 1/true to turn any unsupported or unusable parameter into a 400 instead of a warning.
     * Use it in a migration test suite so a dropped filter fails loudly.
     */
    strict?: Strict;
    /** json (default) or xml. */
    format?: Format1;
    /**
     * NOT SUPPORTED. PCS population (who a grant benefits) is Candid-only classification work; 990
     * filings do not carry it and we do not infer it. Approximate with `subject` plus `query`, and
     * expect lower precision.
     *
     * @deprecated
     */
    population?: Population;
    /**
     * NOT SUPPORTED. PCS transaction type. Effectively every row here is a cash grant as reported
     * on Schedule I / Part XIV.
     *
     * @deprecated
     */
    transaction?: Transaction;
    /**
     * NOT SUPPORTED. There are no government grantmakers to include or exclude: this corpus is
     * built from Form 990 filings, and government agencies do not file them. `include_gov=false` is
     * therefore already the state of the data. Use /api/premier gov_funding, or the gov_funding_*
     * tables over /api/sql, for money flowing FROM government.
     *
     * @deprecated
     */
    includeGov?: IncludeGov;
    /**
     * NOT SUPPORTED. No per-row change timestamp. The dataset is versioned as a whole — read
     * `x_plinth.dataset` on any response, or GET /api/meta, and re-sync when the build stamp moves.
     *
     * @deprecated
     */
    lastUpdated?: LastUpdated;
    /**
     * NOT SUPPORTED. Candid/GuideStar profile participation level. Nothing equivalent exists
     * outside Candid's own platform.
     *
     * @deprecated
     */
    profileLevels?: ProfileLevels;
    /** 1-based page number. Default 1. */
    page?: Page;
    /** Maximum rows to return. */
    limit?: Limit;
    /**
     * Sort field. amount and count are available everywhere; the name/geography fields vary by
     * endpoint. An unavailable field is reported in x_plinth.warnings, never silently swapped.
     */
    sortBy?: SortBy;
    /** asc or desc. Default desc. */
    sortOrder?: SortOrder11;
    /**
     * Return a canned example instead of querying the corpus. **Needs no API key and is not
     * metered.** `1` is the plain success case; `list` enumerates what each named case
     * demonstrates. The organizations in an example are invented — only the shape is real.
     */
    example?: Example1;
  };

  export class GetApiV1GrantsFundersError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1GrantsFundersError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 402, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetApiV1GrantsRecipientsRequest = {
    /**
     * EIN of the grantmaker. Any format — hyphens and missing leading zeros are normalized.
     * Comma-separate for several.
     */
    funderId?: FunderId;
    /**
     * EIN of the recipient organization. Same normalization as funder_id. Comma-separate for
     * several.
     */
    recipId?: RecipId;
    /**
     * Accepted for Candid compatibility. Only `ein` is valid — Candid's proprietary organization
     * keys mean nothing here, so any other value is a 400 pointing at /api/search rather than a
     * silently wrong filter.
     */
    idType?: IdType1;
    /** Filing fiscal year. A single year, a comma-separated list, or a `2019-2023` range. */
    year?: YearPlinthUsDataGrantsApi;
    /** Lowest fiscal year to include (open-ended alternative to `year`). */
    minYear?: MinYear;
    /** Highest fiscal year to include. */
    maxYear?: MaxYear;
    /**
     * Cause area of the RECIPIENT. Accepts an NTEE major-group letter (T), a full NTEE code (T31)
     * or a cause label (Philanthropy); comma-separate for several. NOT a Candid PCS code — a
     * PCS-shaped value is rejected rather than silently matching nothing. Only grants resolved to
     * an EIN carry a classification, so this filter excludes unmatched grant lines (~33% of
     * dollars).
     */
    subject?: Subject;
    /**
     * Place filter. **Whose place it is comes from `location_type`, which defaults to the
     * RECIPIENT** — so on /grants/funders, `location=MA` returns funders that gave TO
     * Massachusetts, not funders based there (which is why a Seattle foundation can appear). Set
     * `location_type=funder` for the other reading. How the value itself is read comes from
     * `geo_id_type` (default: two-letter US state). Comma-separate for several.
     */
    location?: Location1;
    /**
     * How `location` is interpreted: state (default) | zip | city | county_fips | country. GeoNames
     * ids are not resolved.
     */
    geoIdType?: GeoIdType1;
    /**
     * Whose geography `location` refers to: recipient (default) | funder | area_served.
     * `area_served` means the funder demonstrably gives there — see the response note for exactly
     * what it covers.
     */
    locationType?: LocationType1;
    /**
     * Recipient country for cross-border giving, as the FIPS-10-4 code the 990 foreign-address
     * block carries (IN=India, UK=United Kingdom — NOT ISO).
     */
    country?: CountryVariantQgdleu;
    /**
     * Free-text keyword search over the grant's as-filed purpose text and the recipient's name. ⚠️
     * Purpose coverage varies sharply between filers — many report none at all, and for those
     * funders this is a recipient-name search only, which a caller searching for a THEME will read
     * as a real absence. Every response says so in `x_plinth.warnings`; check `description` on the
     * rows to see which you got. **Requires a narrowing filter** — one of year, funder_id,
     * recip_id, location, country, subject, funder_type or an amount range. There is no text index
     * behind this, so an unnarrowed search reads every purpose string in the corpus and times out;
     * narrowed, it typically returns in a few seconds. Sending it alone is a 400, immediately,
     * rather than a timeout later.
     */
    query?: Query;
    /**
     * Support strategy, derived from the filing's own purpose wording (general_operating, program,
     * capital, endowment, scholarship, fellowship, research, capacity_building, matching,
     * emergency_relief, equipment, sponsorship). Approximate by construction — it finds grants that
     * SAY so.
     */
    support?: Support;
    /**
     * private_foundation | public_charity | daf_or_passthrough. Separates institutional money from
     * donor-advised pass-through.
     */
    funderType?: FunderType1;
    /**
     * Drop structurally distorting flows, comma-separated: daf | individuals | related_party.
     * Nothing is excluded by default — together these are 50.9% of corpus dollars, so a total that
     * omits them and a total that keeps them are different claims and the caller has to be the one
     * making it. On /grants/summary, `x_plinth.excluded` prices each class against your own filter.
     */
    exclude?: Exclude;
    /**
     * Set to 1/true to drop donor-advised-fund sponsors and other pass-through vehicles. **Reach
     * for this whenever you rank by dollars.** DAF sponsors (Fidelity Charitable, Schwab
     * Charitable, National Philanthropic Trust and similar) report enormous grant totals because
     * money passes through them from individual donors — so any amount-ranked list is topped by
     * them unless you say otherwise, which answers a different question from 'which foundations
     * give the most'. Exactly equivalent to `exclude=daf`, and kept because the amount-ranked
     * caveat names it; `exclude=` additionally drops the two distortions that survive it (grants to
     * individuals, and transfers inside one economic entity).
     */
    excludeDaf?: ExcludeDaf;
    /** Minimum grant amount, whole dollars. */
    minAmt?: MinAmt;
    /** Maximum grant amount, whole dollars. */
    maxAmt?: MaxAmt;
    /**
     * Keep only rows whose recipient EIN carries `x_plinth.match_prob` at or above this value (0 to
     * 1). Rows with no recipient EIN carry no probability and are excluded. ⚠️ Model-resolved rows
     * top out near 0.965 (isotonic calibration only emits values it observed), so a threshold above
     * that drops every `model` row while keeping the rule-resolved ones: it reads as a confidence
     * cut and acts as a provenance filter, and the response says so in `x_plinth.warnings`. For
     * provenance, say so with `ein_source`.
     */
    minMatchProb?: MinMatchProb;
    /**
     * Keep only rows whose recipient EIN came from these resolution rules, comma-separated.
     * Strongest first, with each rule's measured held-out precision: filed (0.995), override_human
     * (0.99), override_keyerror (0.98), name (0.97), registry-dominant (0.97), fuzzy (0.961),
     * override_llm (0.95), address (0.944), registry (0.944), zip (0.934), street (0.834), model
     * (per-row, see match_prob). `filed` is the filer-stated subset, the one to use for anything
     * load-bearing. Rows with no recipient EIN are excluded.
     */
    einSource?: EinSource1;
    /**
     * Filing jurisdiction of the GRANT: us (default) | ca. Never mixed — amounts stay in the
     * currency the filing was made in and are never converted, so every total is a
     * single-jurisdiction total. `x_plinth.dataset` names the source, licence and currency behind
     * the answer. Distinct from `country`, which is where the RECIPIENT sits.
     */
    jurisdiction?: Jurisdiction;
    /**
     * Set to 1/true to turn any unsupported or unusable parameter into a 400 instead of a warning.
     * Use it in a migration test suite so a dropped filter fails loudly.
     */
    strict?: Strict;
    /** json (default) or xml. */
    format?: Format1;
    /**
     * NOT SUPPORTED. PCS population (who a grant benefits) is Candid-only classification work; 990
     * filings do not carry it and we do not infer it. Approximate with `subject` plus `query`, and
     * expect lower precision.
     *
     * @deprecated
     */
    population?: Population;
    /**
     * NOT SUPPORTED. PCS transaction type. Effectively every row here is a cash grant as reported
     * on Schedule I / Part XIV.
     *
     * @deprecated
     */
    transaction?: Transaction;
    /**
     * NOT SUPPORTED. There are no government grantmakers to include or exclude: this corpus is
     * built from Form 990 filings, and government agencies do not file them. `include_gov=false` is
     * therefore already the state of the data. Use /api/premier gov_funding, or the gov_funding_*
     * tables over /api/sql, for money flowing FROM government.
     *
     * @deprecated
     */
    includeGov?: IncludeGov;
    /**
     * NOT SUPPORTED. No per-row change timestamp. The dataset is versioned as a whole — read
     * `x_plinth.dataset` on any response, or GET /api/meta, and re-sync when the build stamp moves.
     *
     * @deprecated
     */
    lastUpdated?: LastUpdated;
    /**
     * NOT SUPPORTED. Candid/GuideStar profile participation level. Nothing equivalent exists
     * outside Candid's own platform.
     *
     * @deprecated
     */
    profileLevels?: ProfileLevels;
    /** 1-based page number. Default 1. */
    page?: Page;
    /** Maximum rows to return. */
    limit?: Limit;
    /**
     * Sort field. amount and count are available everywhere; the name/geography fields vary by
     * endpoint. An unavailable field is reported in x_plinth.warnings, never silently swapped.
     */
    sortBy?: SortBy;
    /** asc or desc. Default desc. */
    sortOrder?: SortOrder11;
    /**
     * Return a canned example instead of querying the corpus. **Needs no API key and is not
     * metered.** `1` is the plain success case; `list` enumerates what each named case
     * demonstrates. The organizations in an example are invented — only the shape is real.
     */
    example?: Example1;
  };

  export class GetApiV1GrantsRecipientsError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1GrantsRecipientsError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 402, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetApiV1GrantsSummaryRequest = {
    /**
     * EIN of the grantmaker. Any format — hyphens and missing leading zeros are normalized.
     * Comma-separate for several.
     */
    funderId?: FunderId;
    /**
     * EIN of the recipient organization. Same normalization as funder_id. Comma-separate for
     * several.
     */
    recipId?: RecipId;
    /**
     * Accepted for Candid compatibility. Only `ein` is valid — Candid's proprietary organization
     * keys mean nothing here, so any other value is a 400 pointing at /api/search rather than a
     * silently wrong filter.
     */
    idType?: IdType1;
    /** Filing fiscal year. A single year, a comma-separated list, or a `2019-2023` range. */
    year?: YearPlinthUsDataGrantsApi;
    /** Lowest fiscal year to include (open-ended alternative to `year`). */
    minYear?: MinYear;
    /** Highest fiscal year to include. */
    maxYear?: MaxYear;
    /**
     * Cause area of the RECIPIENT. Accepts an NTEE major-group letter (T), a full NTEE code (T31)
     * or a cause label (Philanthropy); comma-separate for several. NOT a Candid PCS code — a
     * PCS-shaped value is rejected rather than silently matching nothing. Only grants resolved to
     * an EIN carry a classification, so this filter excludes unmatched grant lines (~33% of
     * dollars).
     */
    subject?: Subject;
    /**
     * Place filter. **Whose place it is comes from `location_type`, which defaults to the
     * RECIPIENT** — so on /grants/funders, `location=MA` returns funders that gave TO
     * Massachusetts, not funders based there (which is why a Seattle foundation can appear). Set
     * `location_type=funder` for the other reading. How the value itself is read comes from
     * `geo_id_type` (default: two-letter US state). Comma-separate for several.
     */
    location?: Location1;
    /**
     * How `location` is interpreted: state (default) | zip | city | county_fips | country. GeoNames
     * ids are not resolved.
     */
    geoIdType?: GeoIdType1;
    /**
     * Whose geography `location` refers to: recipient (default) | funder | area_served.
     * `area_served` means the funder demonstrably gives there — see the response note for exactly
     * what it covers.
     */
    locationType?: LocationType1;
    /**
     * Recipient country for cross-border giving, as the FIPS-10-4 code the 990 foreign-address
     * block carries (IN=India, UK=United Kingdom — NOT ISO).
     */
    country?: CountryVariantQgdleu;
    /**
     * Free-text keyword search over the grant's as-filed purpose text and the recipient's name. ⚠️
     * Purpose coverage varies sharply between filers — many report none at all, and for those
     * funders this is a recipient-name search only, which a caller searching for a THEME will read
     * as a real absence. Every response says so in `x_plinth.warnings`; check `description` on the
     * rows to see which you got. **Requires a narrowing filter** — one of year, funder_id,
     * recip_id, location, country, subject, funder_type or an amount range. There is no text index
     * behind this, so an unnarrowed search reads every purpose string in the corpus and times out;
     * narrowed, it typically returns in a few seconds. Sending it alone is a 400, immediately,
     * rather than a timeout later.
     */
    query?: Query;
    /**
     * Support strategy, derived from the filing's own purpose wording (general_operating, program,
     * capital, endowment, scholarship, fellowship, research, capacity_building, matching,
     * emergency_relief, equipment, sponsorship). Approximate by construction — it finds grants that
     * SAY so.
     */
    support?: Support;
    /**
     * private_foundation | public_charity | daf_or_passthrough. Separates institutional money from
     * donor-advised pass-through.
     */
    funderType?: FunderType1;
    /**
     * Drop structurally distorting flows, comma-separated: daf | individuals | related_party.
     * Nothing is excluded by default — together these are 50.9% of corpus dollars, so a total that
     * omits them and a total that keeps them are different claims and the caller has to be the one
     * making it. On /grants/summary, `x_plinth.excluded` prices each class against your own filter.
     */
    exclude?: Exclude;
    /**
     * Set to 1/true to drop donor-advised-fund sponsors and other pass-through vehicles. **Reach
     * for this whenever you rank by dollars.** DAF sponsors (Fidelity Charitable, Schwab
     * Charitable, National Philanthropic Trust and similar) report enormous grant totals because
     * money passes through them from individual donors — so any amount-ranked list is topped by
     * them unless you say otherwise, which answers a different question from 'which foundations
     * give the most'. Exactly equivalent to `exclude=daf`, and kept because the amount-ranked
     * caveat names it; `exclude=` additionally drops the two distortions that survive it (grants to
     * individuals, and transfers inside one economic entity).
     */
    excludeDaf?: ExcludeDaf;
    /** Minimum grant amount, whole dollars. */
    minAmt?: MinAmt;
    /** Maximum grant amount, whole dollars. */
    maxAmt?: MaxAmt;
    /**
     * Keep only rows whose recipient EIN carries `x_plinth.match_prob` at or above this value (0 to
     * 1). Rows with no recipient EIN carry no probability and are excluded. ⚠️ Model-resolved rows
     * top out near 0.965 (isotonic calibration only emits values it observed), so a threshold above
     * that drops every `model` row while keeping the rule-resolved ones: it reads as a confidence
     * cut and acts as a provenance filter, and the response says so in `x_plinth.warnings`. For
     * provenance, say so with `ein_source`.
     */
    minMatchProb?: MinMatchProb;
    /**
     * Keep only rows whose recipient EIN came from these resolution rules, comma-separated.
     * Strongest first, with each rule's measured held-out precision: filed (0.995), override_human
     * (0.99), override_keyerror (0.98), name (0.97), registry-dominant (0.97), fuzzy (0.961),
     * override_llm (0.95), address (0.944), registry (0.944), zip (0.934), street (0.834), model
     * (per-row, see match_prob). `filed` is the filer-stated subset, the one to use for anything
     * load-bearing. Rows with no recipient EIN are excluded.
     */
    einSource?: EinSource1;
    /**
     * Filing jurisdiction of the GRANT: us (default) | ca. Never mixed — amounts stay in the
     * currency the filing was made in and are never converted, so every total is a
     * single-jurisdiction total. `x_plinth.dataset` names the source, licence and currency behind
     * the answer. Distinct from `country`, which is where the RECIPIENT sits.
     */
    jurisdiction?: Jurisdiction;
    /**
     * Set to 1/true to turn any unsupported or unusable parameter into a 400 instead of a warning.
     * Use it in a migration test suite so a dropped filter fails loudly.
     */
    strict?: Strict;
    /** json (default) or xml. */
    format?: Format1;
    /**
     * NOT SUPPORTED. PCS population (who a grant benefits) is Candid-only classification work; 990
     * filings do not carry it and we do not infer it. Approximate with `subject` plus `query`, and
     * expect lower precision.
     *
     * @deprecated
     */
    population?: Population;
    /**
     * NOT SUPPORTED. PCS transaction type. Effectively every row here is a cash grant as reported
     * on Schedule I / Part XIV.
     *
     * @deprecated
     */
    transaction?: Transaction;
    /**
     * NOT SUPPORTED. There are no government grantmakers to include or exclude: this corpus is
     * built from Form 990 filings, and government agencies do not file them. `include_gov=false` is
     * therefore already the state of the data. Use /api/premier gov_funding, or the gov_funding_*
     * tables over /api/sql, for money flowing FROM government.
     *
     * @deprecated
     */
    includeGov?: IncludeGov;
    /**
     * NOT SUPPORTED. No per-row change timestamp. The dataset is versioned as a whole — read
     * `x_plinth.dataset` on any response, or GET /api/meta, and re-sync when the build stamp moves.
     *
     * @deprecated
     */
    lastUpdated?: LastUpdated;
    /**
     * NOT SUPPORTED. Candid/GuideStar profile participation level. Nothing equivalent exists
     * outside Candid's own platform.
     *
     * @deprecated
     */
    profileLevels?: ProfileLevels;
    /**
     * Return a canned example instead of querying the corpus. **Needs no API key and is not
     * metered.** `1` is the plain success case; `list` enumerates what each named case
     * demonstrates. The organizations in an example are invented — only the shape is real.
     */
    example?: Example3;
  };

  export class GetApiV1GrantsSummaryError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1GrantsSummaryError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 402, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetApiV1GrantsTransactionsRequest = {
    /**
     * EIN of the grantmaker. Any format — hyphens and missing leading zeros are normalized.
     * Comma-separate for several.
     */
    funderId?: FunderId;
    /**
     * EIN of the recipient organization. Same normalization as funder_id. Comma-separate for
     * several.
     */
    recipId?: RecipId;
    /**
     * Accepted for Candid compatibility. Only `ein` is valid — Candid's proprietary organization
     * keys mean nothing here, so any other value is a 400 pointing at /api/search rather than a
     * silently wrong filter.
     */
    idType?: IdType1;
    /** Filing fiscal year. A single year, a comma-separated list, or a `2019-2023` range. */
    year?: YearPlinthUsDataGrantsApi;
    /** Lowest fiscal year to include (open-ended alternative to `year`). */
    minYear?: MinYear;
    /** Highest fiscal year to include. */
    maxYear?: MaxYear;
    /**
     * Cause area of the RECIPIENT. Accepts an NTEE major-group letter (T), a full NTEE code (T31)
     * or a cause label (Philanthropy); comma-separate for several. NOT a Candid PCS code — a
     * PCS-shaped value is rejected rather than silently matching nothing. Only grants resolved to
     * an EIN carry a classification, so this filter excludes unmatched grant lines (~33% of
     * dollars).
     */
    subject?: Subject;
    /**
     * Place filter. **Whose place it is comes from `location_type`, which defaults to the
     * RECIPIENT** — so on /grants/funders, `location=MA` returns funders that gave TO
     * Massachusetts, not funders based there (which is why a Seattle foundation can appear). Set
     * `location_type=funder` for the other reading. How the value itself is read comes from
     * `geo_id_type` (default: two-letter US state). Comma-separate for several.
     */
    location?: Location1;
    /**
     * How `location` is interpreted: state (default) | zip | city | county_fips | country. GeoNames
     * ids are not resolved.
     */
    geoIdType?: GeoIdType1;
    /**
     * Whose geography `location` refers to: recipient (default) | funder | area_served.
     * `area_served` means the funder demonstrably gives there — see the response note for exactly
     * what it covers.
     */
    locationType?: LocationType1;
    /**
     * Recipient country for cross-border giving, as the FIPS-10-4 code the 990 foreign-address
     * block carries (IN=India, UK=United Kingdom — NOT ISO).
     */
    country?: CountryVariantQgdleu;
    /**
     * Free-text keyword search over the grant's as-filed purpose text and the recipient's name. ⚠️
     * Purpose coverage varies sharply between filers — many report none at all, and for those
     * funders this is a recipient-name search only, which a caller searching for a THEME will read
     * as a real absence. Every response says so in `x_plinth.warnings`; check `description` on the
     * rows to see which you got. **Requires a narrowing filter** — one of year, funder_id,
     * recip_id, location, country, subject, funder_type or an amount range. There is no text index
     * behind this, so an unnarrowed search reads every purpose string in the corpus and times out;
     * narrowed, it typically returns in a few seconds. Sending it alone is a 400, immediately,
     * rather than a timeout later.
     */
    query?: Query;
    /**
     * Support strategy, derived from the filing's own purpose wording (general_operating, program,
     * capital, endowment, scholarship, fellowship, research, capacity_building, matching,
     * emergency_relief, equipment, sponsorship). Approximate by construction — it finds grants that
     * SAY so.
     */
    support?: Support;
    /**
     * private_foundation | public_charity | daf_or_passthrough. Separates institutional money from
     * donor-advised pass-through.
     */
    funderType?: FunderType1;
    /**
     * Drop structurally distorting flows, comma-separated: daf | individuals | related_party.
     * Nothing is excluded by default — together these are 50.9% of corpus dollars, so a total that
     * omits them and a total that keeps them are different claims and the caller has to be the one
     * making it. On /grants/summary, `x_plinth.excluded` prices each class against your own filter.
     */
    exclude?: Exclude;
    /**
     * Set to 1/true to drop donor-advised-fund sponsors and other pass-through vehicles. **Reach
     * for this whenever you rank by dollars.** DAF sponsors (Fidelity Charitable, Schwab
     * Charitable, National Philanthropic Trust and similar) report enormous grant totals because
     * money passes through them from individual donors — so any amount-ranked list is topped by
     * them unless you say otherwise, which answers a different question from 'which foundations
     * give the most'. Exactly equivalent to `exclude=daf`, and kept because the amount-ranked
     * caveat names it; `exclude=` additionally drops the two distortions that survive it (grants to
     * individuals, and transfers inside one economic entity).
     */
    excludeDaf?: ExcludeDaf;
    /** Minimum grant amount, whole dollars. */
    minAmt?: MinAmt;
    /** Maximum grant amount, whole dollars. */
    maxAmt?: MaxAmt;
    /**
     * Keep only rows whose recipient EIN carries `x_plinth.match_prob` at or above this value (0 to
     * 1). Rows with no recipient EIN carry no probability and are excluded. ⚠️ Model-resolved rows
     * top out near 0.965 (isotonic calibration only emits values it observed), so a threshold above
     * that drops every `model` row while keeping the rule-resolved ones: it reads as a confidence
     * cut and acts as a provenance filter, and the response says so in `x_plinth.warnings`. For
     * provenance, say so with `ein_source`.
     */
    minMatchProb?: MinMatchProb;
    /**
     * Keep only rows whose recipient EIN came from these resolution rules, comma-separated.
     * Strongest first, with each rule's measured held-out precision: filed (0.995), override_human
     * (0.99), override_keyerror (0.98), name (0.97), registry-dominant (0.97), fuzzy (0.961),
     * override_llm (0.95), address (0.944), registry (0.944), zip (0.934), street (0.834), model
     * (per-row, see match_prob). `filed` is the filer-stated subset, the one to use for anything
     * load-bearing. Rows with no recipient EIN are excluded.
     */
    einSource?: EinSource1;
    /**
     * Filing jurisdiction of the GRANT: us (default) | ca. Never mixed — amounts stay in the
     * currency the filing was made in and are never converted, so every total is a
     * single-jurisdiction total. `x_plinth.dataset` names the source, licence and currency behind
     * the answer. Distinct from `country`, which is where the RECIPIENT sits.
     */
    jurisdiction?: Jurisdiction;
    /**
     * Set to 1/true to turn any unsupported or unusable parameter into a 400 instead of a warning.
     * Use it in a migration test suite so a dropped filter fails loudly.
     */
    strict?: Strict;
    /** json (default) or xml. */
    format?: Format1;
    /**
     * NOT SUPPORTED. PCS population (who a grant benefits) is Candid-only classification work; 990
     * filings do not carry it and we do not infer it. Approximate with `subject` plus `query`, and
     * expect lower precision.
     *
     * @deprecated
     */
    population?: Population;
    /**
     * NOT SUPPORTED. PCS transaction type. Effectively every row here is a cash grant as reported
     * on Schedule I / Part XIV.
     *
     * @deprecated
     */
    transaction?: Transaction;
    /**
     * NOT SUPPORTED. There are no government grantmakers to include or exclude: this corpus is
     * built from Form 990 filings, and government agencies do not file them. `include_gov=false` is
     * therefore already the state of the data. Use /api/premier gov_funding, or the gov_funding_*
     * tables over /api/sql, for money flowing FROM government.
     *
     * @deprecated
     */
    includeGov?: IncludeGov;
    /**
     * NOT SUPPORTED. No per-row change timestamp. The dataset is versioned as a whole — read
     * `x_plinth.dataset` on any response, or GET /api/meta, and re-sync when the build stamp moves.
     *
     * @deprecated
     */
    lastUpdated?: LastUpdated;
    /**
     * NOT SUPPORTED. Candid/GuideStar profile participation level. Nothing equivalent exists
     * outside Candid's own platform.
     *
     * @deprecated
     */
    profileLevels?: ProfileLevels;
    /** 1-based page number. Default 1. */
    page?: Page;
    /** Maximum rows to return. */
    limit?: Limit;
    /**
     * Sort field. amount and count are available everywhere; the name/geography fields vary by
     * endpoint. An unavailable field is reported in x_plinth.warnings, never silently swapped.
     */
    sortBy?: SortBy;
    /** asc or desc. Default desc. */
    sortOrder?: SortOrder11;
    /**
     * Return a canned example instead of querying the corpus. **Needs no API key and is not
     * metered.** `1` is the plain success case; `list` enumerates what each named case
     * demonstrates. The organizations in an example are invented — only the shape is real.
     */
    example?: Example;
  };

  export class GetApiV1GrantsTransactionsError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1GrantsTransactionsError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 402, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetGrantsSummaryRequest = {
    funderId?: FunderId;
    recipId?: RecipId;
    year?: YearPlinthUsDataGrantsApi;
    subject?: Subject;
    location?: Location1;
    minAmt?: MinAmt;
    maxAmt?: MaxAmt;
  };

  export class GetGrantsSummaryError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGrantsSummaryError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 402, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ListFundersRequest = {
    funderId?: FunderId;
    recipId?: RecipId;
    year?: YearPlinthUsDataGrantsApi;
    subject?: Subject;
    location?: Location1;
    minAmt?: MinAmt;
    maxAmt?: MaxAmt;
    page?: Page;
    limit?: Limit;
  };

  export class ListFundersError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListFundersError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 402, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ListGrantsRequest = {
    funderId?: FunderId;
    recipId?: RecipId;
    year?: YearPlinthUsDataGrantsApi;
    subject?: Subject;
    location?: Location1;
    minAmt?: MinAmt;
    maxAmt?: MaxAmt;
    page?: Page;
    limit?: Limit;
    sortBy?: SortBy;
    sortOrder?: SortOrder1;
  };

  export class ListGrantsError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListGrantsError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 402, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ListRecipientsRequest = {
    funderId?: FunderId;
    recipId?: RecipId;
    year?: YearPlinthUsDataGrantsApi;
    subject?: Subject;
    location?: Location1;
    minAmt?: MinAmt;
    maxAmt?: MaxAmt;
    page?: Page;
    limit?: Limit;
  };

  export class ListRecipientsError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListRecipientsError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 402, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
