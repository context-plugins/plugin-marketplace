import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Archived, archivedSchema } from "../models/archived.js";
import { bitlinkBodySchema, type BitlinkBody } from "../models/bitlink-body.js";
import { bitlinkUpdateBodySchema, type BitlinkUpdateBody } from "../models/bitlink-update-body.js";
import { bitlinksSchema, type Bitlinks } from "../models/bitlinks.js";
import { bulkUpdateRequestSchema, type BulkUpdateRequest } from "../models/bulk-update-request.js";
import { bulkUpdateSchema, type BulkUpdate } from "../models/bulk-update.js";
import { cityMetricsSchema, type CityMetrics } from "../models/city-metrics.js";
import { clickMetricsSchema, type ClickMetrics } from "../models/click-metrics.js";
import { clicksSummarySchema, type ClicksSummary } from "../models/clicks-summary.js";
import { clicksSchema, type Clicks } from "../models/clicks.js";
import { CustomBitlink, customBitlinkSchema } from "../models/custom-bitlink.js";
import { Deeplinks, deeplinksSchema } from "../models/deeplinks.js";
import { deviceMetricsSchema, type DeviceMetrics } from "../models/device-metrics.js";
import { DomainDeeplinks, domainDeeplinksSchema } from "../models/domain-deeplinks.js";
import { errorSchema, type Error } from "../models/error.js";
import { expandBitlinkSchema, type ExpandBitlink } from "../models/expand-bitlink.js";
import { expandedBitlinkSchema, type ExpandedBitlink } from "../models/expanded-bitlink.js";
import { fullShortenSchema, type FullShorten } from "../models/full-shorten.js";
import { HasDynamicRouting, hasDynamicRoutingSchema } from "../models/has-dynamic-routing.js";
import { HasExpiration, hasExpirationSchema } from "../models/has-expiration.js";
import { HasQrCodes, hasQrCodesSchema } from "../models/has-qr-codes.js";
import { IsExpired, isExpiredSchema } from "../models/is-expired.js";
import { linkDeletionResponseSchema, type LinkDeletionResponse } from "../models/link-deletion-response.js";
import { referrersByDomainsSchema, type ReferrersByDomains } from "../models/referrers-by-domains.js";
import { shortenBitlinkBodySchema, type ShortenBitlinkBody } from "../models/shorten-bitlink-body.js";
import { shortenSchema, type Shorten } from "../models/shorten.js";
import { simplifiedErrorSchema, type SimplifiedError } from "../models/simplified-error.js";
import { sortSchema, type Sort } from "../models/sort.js";
import { sortedLinksSchema, type SortedLinks } from "../models/sorted-links.js";
import { TimeUnit, timeUnitSchema } from "../models/time-unit.js";
import { topLinksAndQrCodesSchema, type TopLinksAndQrCodes } from "../models/top-links-and-qr-codes.js";
import {
  totalEngagementsSummarySchema,
  type TotalEngagementsSummary,
} from "../models/total-engagements-summary.js";
import { totalEngagementsSchema, type TotalEngagements } from "../models/total-engagements.js";
import type { Servers } from "../servers.js";

/**
 * Bitlinks are shortened links. They could begin with the bit.ly domain or your own custom branded
 * short domain (BSD).
 *
 * **Related Operations:**
 * - POST /bitlinks - Create a new bitlink or add a custom keyword to an existing bitlink
 * - PATCH /bitlinks/{bitlink} - Redirect an existing bitlink
 */
export class BitlinksApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Shorten a Link
   *
   * @remarks
   * Converts a long url to a Bitlink. You may see errors returned from this endpoint -
   * "BRANDED_LINK_MONTHLY_LIMIT_EXCEEDED" occurs if you have shortened more links than your account
   * is configured for for the month, and "DNS_CONFIGURATION_ERROR" occurs if you are attempting to
   * shorten links against a custom domain which doesn't have DNS properly configured.
   *
   * @returns SUCCESS
   *
   * @throws {@link BitlinksApi.CreateBitlinkError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBitlink(
    request: BitlinksApi.CreateBitlinkRequest,
    options?: RequestOptions,
  ): ApiPromise<ShortenBitlinkBody, BitlinksApi.CreateBitlinkError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/shorten"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: shortenSchema },
      },
      {
        success: { kind: "json", schema: shortenBitlinkBodySchema },
        errorFactory: BitlinksApi.CreateBitlinkError,
      },
      options,
    );
  }

  /**
   * Create a Bitlink
   *
   * @remarks
   * Converts a long url to a Bitlink and sets additional parameters. You may see errors returned
   * from this endpoint - "BRANDED_LINK_MONTHLY_LIMIT_EXCEEDED" occurs if you have shortened more
   * links than your account is configured for for the month, and "DNS_CONFIGURATION_ERROR" occurs
   * if you are attempting to shorten links against a custom domain which doesn't have DNS properly
   * configured.
   *
   * @returns SUCCESS
   *
   * @throws {@link BitlinksApi.CreateFullBitlinkError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createFullBitlink(
    request: BitlinksApi.CreateFullBitlinkRequest,
    options?: RequestOptions,
  ): ApiPromise<BitlinkBody, BitlinksApi.CreateFullBitlinkError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/bitlinks"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: fullShortenSchema },
      },
      {
        success: { kind: "json", schema: bitlinkBodySchema },
        errorFactory: BitlinksApi.CreateFullBitlinkError,
      },
      options,
    );
  }

  /**
   * Delete a Bitlink
   *
   * @remarks
   * Delete an unedited hash Bitlink.
   *
   * @returns SUCCESS
   *
   * @throws {@link BitlinksApi.DeleteBitlinkError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteBitlink(
    request: BitlinksApi.DeleteBitlinkRequest,
    options?: RequestOptions,
  ): ApiPromise<LinkDeletionResponse, BitlinksApi.DeleteBitlinkError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/bitlinks/{bitlink}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "bitlink", value: request.bitlink, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: linkDeletionResponseSchema },
        errorFactory: BitlinksApi.DeleteBitlinkError,
      },
      options,
    );
  }

  /**
   * Expand a Bitlink
   *
   * @remarks
   * Returns the short link and long URL for the specified link.
   *
   * @returns SUCCESS
   *
   * @throws {@link BitlinksApi.ExpandBitlinkError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  expandBitlink(
    request: BitlinksApi.ExpandBitlinkRequest,
    options?: RequestOptions,
  ): ApiPromise<ExpandedBitlink, BitlinksApi.ExpandBitlinkError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/expand"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: expandBitlinkSchema },
      },
      {
        success: { kind: "json", schema: expandedBitlinkSchema },
        errorFactory: BitlinksApi.ExpandBitlinkError,
      },
      options,
    );
  }

  /**
   * Retrieve a Bitlink
   *
   * @remarks
   * Returns information for the specified link.
   *
   * @returns SUCCESS
   *
   * @throws {@link BitlinksApi.GetBitlinkError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBitlink(
    request: BitlinksApi.GetBitlinkRequest,
    options?: RequestOptions,
  ): ApiPromise<BitlinkBody, BitlinksApi.GetBitlinkError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/bitlinks/{bitlink}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "bitlink", value: request.bitlink, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bitlinkBodySchema },
        errorFactory: BitlinksApi.GetBitlinkError,
      },
      options,
    );
  }

  /**
   * Retrieve Bitlinks by Group
   *
   * @remarks
   * Returns a paginated collection of Bitlinks for a group. The list of custom bitlinks has newest
   * entries first.
   *
   * @returns SUCCESS
   *
   * @throws {@link BitlinksApi.GetBitlinksByGroupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBitlinksByGroup(
    request: BitlinksApi.GetBitlinksByGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<Bitlinks, BitlinksApi.GetBitlinksByGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups/{group_guid}/bitlinks"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "group_guid", value: request.groupGuid, schema: s.string() }],
        query: [
          { name: "size", value: request.size, schema: s.defaulted(s.int(), 50) },
          { name: "search_after", value: request.searchAfter, schema: s.optional(s.string()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "hostname_path_query", value: request.hostnamePathQuery, schema: s.optional(s.string()) },
          { name: "created_before", value: request.createdBefore, schema: s.optional(s.int()) },
          { name: "created_after", value: request.createdAfter, schema: s.optional(s.int()) },
          { name: "archived", value: request.archived, schema: s.defaulted(archivedSchema, Archived.Off) },
          {
            name: "deeplinks",
            value: request.deeplinks,
            schema: s.defaulted(deeplinksSchema, Deeplinks.Both),
          },
          {
            name: "domain_deeplinks",
            value: request.domainDeeplinks,
            schema: s.defaulted(domainDeeplinksSchema, DomainDeeplinks.Both),
          },
          { name: "campaign_guid", value: request.campaignGuid, schema: s.optional(s.string()) },
          { name: "channel_guid", value: request.channelGuid, schema: s.optional(s.string()) },
          {
            name: "custom_bitlink",
            value: request.customBitlink,
            schema: s.defaulted(customBitlinkSchema, CustomBitlink.Both),
          },
          {
            name: "has_qr_codes",
            value: request.hasQrCodes,
            schema: s.defaulted(hasQrCodesSchema, HasQrCodes.Both),
          },
          {
            name: "is_expired",
            value: request.isExpired,
            schema: s.defaulted(isExpiredSchema, IsExpired.Both),
          },
          {
            name: "has_expiration",
            value: request.hasExpiration,
            schema: s.defaulted(hasExpirationSchema, HasExpiration.Both),
          },
          {
            name: "has_dynamic_routing",
            value: request.hasDynamicRouting,
            schema: s.defaulted(hasDynamicRoutingSchema, HasDynamicRouting.Both),
          },
          { name: "tags", value: request.tags, schema: s.optional(s.array(s.string())) },
          { name: "launchpad_ids", value: request.launchpadIds, schema: s.optional(s.array(s.string())) },
          { name: "encoding_login", value: request.encodingLogin, schema: s.optional(s.array(s.string())) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bitlinksSchema },
        errorFactory: BitlinksApi.GetBitlinksByGroupError,
      },
      options,
    );
  }

  /**
   * Get Clicks for a Bitlink
   *
   * @remarks
   * Returns the click counts for the specified link in an array based on a date.
   *
   * @returns SUCCESS
   *
   * @throws {@link BitlinksApi.GetClicksForBitlinkError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getClicksForBitlink(
    request: BitlinksApi.GetClicksForBitlinkRequest,
    options?: RequestOptions,
  ): ApiPromise<Clicks, BitlinksApi.GetClicksForBitlinkError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/bitlinks/{bitlink}/clicks"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "bitlink", value: request.bitlink, schema: s.string() }],
        query: [
          { name: "unit", value: request.unit, schema: s.defaulted(timeUnitSchema, TimeUnit.Day) },
          { name: "units", value: request.units, schema: s.defaulted(s.int(), -1) },
          { name: "unit_reference", value: request.unitReference, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: clicksSchema },
        errorFactory: BitlinksApi.GetClicksForBitlinkError,
      },
      options,
    );
  }

  /**
   * Get a Clicks Summary for a Bitlink
   *
   * @remarks
   * Returns the click counts for the specified link rolled up into a single field.
   *
   * @returns SUCCESS
   *
   * @throws {@link BitlinksApi.GetClicksSummaryForBitlinkError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getClicksSummaryForBitlink(
    request: BitlinksApi.GetClicksSummaryForBitlinkRequest,
    options?: RequestOptions,
  ): ApiPromise<ClicksSummary, BitlinksApi.GetClicksSummaryForBitlinkError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/bitlinks/{bitlink}/clicks/summary"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "bitlink", value: request.bitlink, schema: s.string() }],
        query: [
          { name: "unit", value: request.unit, schema: s.defaulted(timeUnitSchema, TimeUnit.Day) },
          { name: "units", value: request.units, schema: s.defaulted(s.int(), -1) },
          { name: "unit_reference", value: request.unitReference, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: clicksSummarySchema },
        errorFactory: BitlinksApi.GetClicksSummaryForBitlinkError,
      },
      options,
    );
  }

  /**
   * Get Engagement Counts for a Bitlink
   *
   * @remarks
   * Returns an array of engagement counts for the specified link. The array is comprised of button
   * click, click and scan counts for each time window, where the window is based on the provided
   * unit.
   *
   * @returns SUCCESS
   *
   * @throws {@link BitlinksApi.GetEngagementsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEngagements(
    request: BitlinksApi.GetEngagementsRequest,
    options?: RequestOptions,
  ): ApiPromise<TotalEngagements, BitlinksApi.GetEngagementsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/bitlinks/{bitlink}/engagements"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "bitlink", value: request.bitlink, schema: s.string() }],
        query: [
          { name: "unit", value: request.unit, schema: s.defaulted(timeUnitSchema, TimeUnit.Day) },
          { name: "units", value: request.units, schema: s.defaulted(s.int(), -1) },
          { name: "unit_reference", value: request.unitReference, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: totalEngagementsSchema },
        errorFactory: BitlinksApi.GetEngagementsError,
      },
      options,
    );
  }

  /**
   * Get an Engagement Count Summary for a Bitlink
   *
   * @remarks
   * Returns the engagement counts for the specified link rolled up into a single field.
   *
   * @returns SUCCESS
   *
   * @throws {@link BitlinksApi.GetEngagementsSummaryError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEngagementsSummary(
    request: BitlinksApi.GetEngagementsSummaryRequest,
    options?: RequestOptions,
  ): ApiPromise<TotalEngagementsSummary, BitlinksApi.GetEngagementsSummaryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/bitlinks/{bitlink}/engagements/summary"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "bitlink", value: request.bitlink, schema: s.string() }],
        query: [
          { name: "unit", value: request.unit, schema: s.defaulted(timeUnitSchema, TimeUnit.Day) },
          { name: "units", value: request.units, schema: s.defaulted(s.int(), -1) },
          { name: "unit_reference", value: request.unitReference, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: totalEngagementsSummarySchema },
        errorFactory: BitlinksApi.GetEngagementsSummaryError,
      },
      options,
    );
  }

  /**
   * Get Metrics for a Bitlink by City
   *
   * @remarks
   * Returns the city origins of click traffic for the specified link.
   *
   * @returns SUCCESS
   *
   * @throws {@link BitlinksApi.GetMetricsForBitlinkByCitiesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMetricsForBitlinkByCities(
    request: BitlinksApi.GetMetricsForBitlinkByCitiesRequest,
    options?: RequestOptions,
  ): ApiPromise<CityMetrics, BitlinksApi.GetMetricsForBitlinkByCitiesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/bitlinks/{bitlink}/cities"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "bitlink", value: request.bitlink, schema: s.string() }],
        query: [
          { name: "unit", value: request.unit, schema: s.defaulted(timeUnitSchema, TimeUnit.Day) },
          { name: "units", value: request.units, schema: s.defaulted(s.int(), -1) },
          { name: "size", value: request.size, schema: s.defaulted(s.int(), 50) },
          { name: "unit_reference", value: request.unitReference, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cityMetricsSchema },
        errorFactory: BitlinksApi.GetMetricsForBitlinkByCitiesError,
      },
      options,
    );
  }

  /**
   * Get Metrics for a Bitlink by Country
   *
   * @remarks
   * Returns the country origins of click traffic for the specified link.
   *
   * @returns SUCCESS
   *
   * @throws {@link BitlinksApi.GetMetricsForBitlinkByCountriesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMetricsForBitlinkByCountries(
    request: BitlinksApi.GetMetricsForBitlinkByCountriesRequest,
    options?: RequestOptions,
  ): ApiPromise<ClickMetrics, BitlinksApi.GetMetricsForBitlinkByCountriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/bitlinks/{bitlink}/countries"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "bitlink", value: request.bitlink, schema: s.string() }],
        query: [
          { name: "unit", value: request.unit, schema: s.defaulted(timeUnitSchema, TimeUnit.Day) },
          { name: "units", value: request.units, schema: s.defaulted(s.int(), -1) },
          { name: "size", value: request.size, schema: s.defaulted(s.int(), 50) },
          { name: "unit_reference", value: request.unitReference, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: clickMetricsSchema },
        errorFactory: BitlinksApi.GetMetricsForBitlinkByCountriesError,
      },
      options,
    );
  }

  /**
   * Get Metrics for a Bitlink by Device Type
   *
   * @remarks
   * Returns the device types generating click traffic to the specified link.
   *
   * @returns SUCCESS
   *
   * @throws {@link BitlinksApi.GetMetricsForBitlinkByDevicesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMetricsForBitlinkByDevices(
    request: BitlinksApi.GetMetricsForBitlinkByDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceMetrics, BitlinksApi.GetMetricsForBitlinkByDevicesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/bitlinks/{bitlink}/devices"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "bitlink", value: request.bitlink, schema: s.string() }],
        query: [
          { name: "unit", value: request.unit, schema: s.defaulted(timeUnitSchema, TimeUnit.Day) },
          { name: "units", value: request.units, schema: s.defaulted(s.int(), -1) },
          { name: "size", value: request.size, schema: s.defaulted(s.int(), 50) },
          { name: "unit_reference", value: request.unitReference, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deviceMetricsSchema },
        errorFactory: BitlinksApi.GetMetricsForBitlinkByDevicesError,
      },
      options,
    );
  }

  /**
   * Get Metrics for a Bitlink by Referrer Name
   *
   * @remarks
   * Returns referrer click counts for the specified link.
   *
   * @returns SUCCESS
   *
   * @throws {@link BitlinksApi.GetMetricsForBitlinkByReferrerNameError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMetricsForBitlinkByReferrerName(
    request: BitlinksApi.GetMetricsForBitlinkByReferrerNameRequest,
    options?: RequestOptions,
  ): ApiPromise<ClickMetrics, BitlinksApi.GetMetricsForBitlinkByReferrerNameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/bitlinks/{bitlink}/referrer_name"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "bitlink", value: request.bitlink, schema: s.string() }],
        query: [
          { name: "unit", value: request.unit, schema: s.defaulted(timeUnitSchema, TimeUnit.Day) },
          { name: "units", value: request.units, schema: s.defaulted(s.int(), -1) },
          { name: "size", value: request.size, schema: s.defaulted(s.int(), 50) },
          { name: "unit_reference", value: request.unitReference, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: clickMetricsSchema },
        errorFactory: BitlinksApi.GetMetricsForBitlinkByReferrerNameError,
      },
      options,
    );
  }

  /**
   * Get Metrics for a Bitlink by Referrers
   *
   * @remarks
   * Returns referrer click counts for the specified link.
   *
   * @returns SUCCESS
   *
   * @throws {@link BitlinksApi.GetMetricsForBitlinkByReferrersError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMetricsForBitlinkByReferrers(
    request: BitlinksApi.GetMetricsForBitlinkByReferrersRequest,
    options?: RequestOptions,
  ): ApiPromise<ClickMetrics, BitlinksApi.GetMetricsForBitlinkByReferrersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/bitlinks/{bitlink}/referrers"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "bitlink", value: request.bitlink, schema: s.string() }],
        query: [
          { name: "unit", value: request.unit, schema: s.defaulted(timeUnitSchema, TimeUnit.Day) },
          { name: "units", value: request.units, schema: s.defaulted(s.int(), -1) },
          { name: "size", value: request.size, schema: s.defaulted(s.int(), 50) },
          { name: "unit_reference", value: request.unitReference, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: clickMetricsSchema },
        errorFactory: BitlinksApi.GetMetricsForBitlinkByReferrersError,
      },
      options,
    );
  }

  /**
   * Get Metrics for a Bitlink by Referrers by Domain
   *
   * @remarks
   * Returns click metrics grouped by referrers for the specified link.
   *
   * @returns SUCCESS
   *
   * @throws {@link BitlinksApi.GetMetricsForBitlinkByReferrersByDomainsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMetricsForBitlinkByReferrersByDomains(
    request: BitlinksApi.GetMetricsForBitlinkByReferrersByDomainsRequest,
    options?: RequestOptions,
  ): ApiPromise<ReferrersByDomains, BitlinksApi.GetMetricsForBitlinkByReferrersByDomainsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/bitlinks/{bitlink}/referrers_by_domains"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "bitlink", value: request.bitlink, schema: s.string() }],
        query: [
          { name: "unit", value: request.unit, schema: s.defaulted(timeUnitSchema, TimeUnit.Day) },
          { name: "units", value: request.units, schema: s.defaulted(s.int(), -1) },
          { name: "size", value: request.size, schema: s.defaulted(s.int(), 50) },
          { name: "unit_reference", value: request.unitReference, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: referrersByDomainsSchema },
        errorFactory: BitlinksApi.GetMetricsForBitlinkByReferrersByDomainsError,
      },
      options,
    );
  }

  /**
   * Get Metrics for a Bitlink by Referring Domains
   *
   * @remarks
   * Returns the referring domain click counts for the specified link.
   *
   * @returns SUCCESS
   *
   * @throws {@link BitlinksApi.GetMetricsForBitlinkByReferringDomainsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMetricsForBitlinkByReferringDomains(
    request: BitlinksApi.GetMetricsForBitlinkByReferringDomainsRequest,
    options?: RequestOptions,
  ): ApiPromise<ClickMetrics, BitlinksApi.GetMetricsForBitlinkByReferringDomainsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/bitlinks/{bitlink}/referring_domains"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "bitlink", value: request.bitlink, schema: s.string() }],
        query: [
          { name: "unit", value: request.unit, schema: s.defaulted(timeUnitSchema, TimeUnit.Day) },
          { name: "units", value: request.units, schema: s.defaulted(s.int(), -1) },
          { name: "size", value: request.size, schema: s.defaulted(s.int(), 50) },
          { name: "unit_reference", value: request.unitReference, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: clickMetricsSchema },
        errorFactory: BitlinksApi.GetMetricsForBitlinkByReferringDomainsError,
      },
      options,
    );
  }

  /**
   * Retrieve Sorted Bitlinks for Group
   *
   * @remarks
   * Returns a list of Bitlinks sorted by group. The list of custom bitlinks has newest entries
   * first.
   *
   * @returns SUCCESS
   *
   * @throws {@link BitlinksApi.GetSortedBitlinksError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSortedBitlinks(
    request: BitlinksApi.GetSortedBitlinksRequest,
    options?: RequestOptions,
  ): ApiPromise<SortedLinks, BitlinksApi.GetSortedBitlinksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups/{group_guid}/bitlinks/{sort}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "group_guid", value: request.groupGuid, schema: s.string() },
          { name: "sort", value: request.sort, schema: sortSchema },
        ],
        query: [
          { name: "unit", value: request.unit, schema: s.defaulted(timeUnitSchema, TimeUnit.Day) },
          { name: "units", value: request.units, schema: s.defaulted(s.int(), -1) },
          { name: "unit_reference", value: request.unitReference, schema: s.optional(s.string()) },
          { name: "size", value: request.size, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sortedLinksSchema },
        errorFactory: BitlinksApi.GetSortedBitlinksError,
      },
      options,
    );
  }

  /**
   * Retrieve Top Links and Decoupled QR Codes by Engagements
   *
   * @remarks
   * Returns the bitlinks and decoupled QR codes in a group with the most engagements over the
   * requested time window, ranked together in descending order by engagement count. Bitlinks and
   * decoupled QR codes are returned in separate lists; `sorted_links` preserves the unified
   * descending-by-count ordering across both, with each entry's id referencing either a bitlink or
   * a QR code guid.
   *
   * @returns SUCCESS
   *
   * @throws {@link BitlinksApi.GetTopLinksAndQrCodesByEngagementsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTopLinksAndQrCodesByEngagements(
    request: BitlinksApi.GetTopLinksAndQrCodesByEngagementsRequest,
    options?: RequestOptions,
  ): ApiPromise<TopLinksAndQrCodes, BitlinksApi.GetTopLinksAndQrCodesByEngagementsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups/{group_guid}/engagements/sorted/top"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "group_guid", value: request.groupGuid, schema: s.string() }],
        query: [
          { name: "unit", value: request.unit, schema: s.defaulted(timeUnitSchema, TimeUnit.Day) },
          { name: "units", value: request.units, schema: s.defaulted(s.int(), -1) },
          { name: "unit_reference", value: request.unitReference, schema: s.optional(s.string()) },
          { name: "size", value: request.size, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: topLinksAndQrCodesSchema },
        errorFactory: BitlinksApi.GetTopLinksAndQrCodesByEngagementsError,
      },
      options,
    );
  }

  /**
   * Update a Bitlink
   *
   * @remarks
   * Updates fields in the specified link. To redirect the link (i.e. to update the Long URL), use
   * the long_url parameter. This will always charge an encode limit.
   *
   * @returns SUCCESS
   *
   * @throws {@link BitlinksApi.UpdateBitlinkError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateBitlink(
    request: BitlinksApi.UpdateBitlinkRequest,
    options?: RequestOptions,
  ): ApiPromise<BitlinkBody, BitlinksApi.UpdateBitlinkError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/bitlinks/{bitlink}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "bitlink", value: request.bitlink, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bitlinkUpdateBodySchema },
      },
      {
        success: { kind: "json", schema: bitlinkBodySchema },
        errorFactory: BitlinksApi.UpdateBitlinkError,
      },
      options,
    );
  }

  /**
   * Bulk update bitlinks
   *
   * @remarks
   * Bulk update can add or remove tags or archive up to 100 links at a time; The response includes
   * a list of bitlink ids that were updated.
   *
   * @returns SUCCESS
   *
   * @throws {@link BitlinksApi.UpdateBitlinksByGroupError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateBitlinksByGroup(
    request: BitlinksApi.UpdateBitlinksByGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BulkUpdate, BitlinksApi.UpdateBitlinksByGroupError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/groups/{group_guid}/bitlinks"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "group_guid", value: request.groupGuid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bulkUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkUpdateSchema },
        errorFactory: BitlinksApi.UpdateBitlinksByGroupError,
      },
      options,
    );
  }
}

export namespace BitlinksApi {
  export type CreateBitlinkRequest = {
    body: Shorten;
  };

  export class CreateBitlinkError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateBitlinkError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 417, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateFullBitlinkRequest = {
    body: FullShorten;
  };

  export class CreateFullBitlinkError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error7", Error>
      | Declared<"error8", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateFullBitlinkError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 417, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error7", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error8", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteBitlinkRequest = {
    /** A Bitlink made of the domain and hash */
    bitlink: string;
  };

  export class DeleteBitlinkError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteBitlinkError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ExpandBitlinkRequest = {
    body: ExpandBitlink;
  };

  export class ExpandBitlinkError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ExpandBitlinkError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 410, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetBitlinkRequest = {
    /** A Bitlink made of the domain and hash */
    bitlink: string;
  };

  export class GetBitlinkError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBitlinkError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 410, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetBitlinksByGroupRequest = {
    /** A GUID for a Bitly group */
    groupGuid: string;
    /** The quantity of items to be be returned @default 50 */
    size?: number;
    /** Token used to search next batch, only use response from API as input value. */
    searchAfter?: string;
    /** The value that you would like to search */
    query?: string;
    /**
     * The hostname and/or path you would like to search (case-insensitive). Subdomains included;
     * query params and fragment ignored.
     */
    hostnamePathQuery?: string;
    /** Timestamp as an integer unix epoch (seconds only) */
    createdBefore?: number;
    /** Timestamp as an integer unix epoch (seconds only) */
    createdAfter?: number;
    /** Whether or not to include archived resources @default Archived.Off */
    archived?: Archived;
    /** Filter to only Bitlinks that contain deeplinks @default Deeplinks.Both */
    deeplinks?: Deeplinks;
    /**
     * Filter to only Bitlinks that contain deeplinks configured with a custom domain
     *
     * @default DomainDeeplinks.Both
     */
    domainDeeplinks?: DomainDeeplinks;
    /** Filter to return only links for the given campaign GUID, can be provided */
    campaignGuid?: string;
    /**
     * Filter to return only links for the given channel GUID, can be provided, overrides all other
     * parameters
     */
    channelGuid?: string;
    /** @default CustomBitlink.Both */
    customBitlink?: CustomBitlink;
    /** a filter value if the resource has any QR codes @default HasQrCodes.Both */
    hasQrCodes?: HasQrCodes;
    /** filter bitlinks by expiration status @default IsExpired.Both */
    isExpired?: IsExpired;
    /** filter bitlinks by presence of expiration @default HasExpiration.Both */
    hasExpiration?: HasExpiration;
    /** filter bitlinks by presence of dynamic routing rules @default HasDynamicRouting.Both */
    hasDynamicRouting?: HasDynamicRouting;
    /** Filter by given tags */
    tags?: string[];
    /** Filter by launchpad id */
    launchpadIds?: string[];
    /** Filter by the login of the authenticated user that created the Bitlink */
    encodingLogin?: string[];
  };

  export class GetBitlinksByGroupError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBitlinksByGroupError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetClicksForBitlinkRequest = {
    /** A Bitlink made of the domain and hash */
    bitlink: string;
    /** A unit of time @default TimeUnit.Day */
    unit?: TimeUnit;
    /**
     * An integer representing the time units to query data for. pass -1 to return all units of time
     *
     * @default -1
     */
    units?: number;
    /**
     * An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
     * default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B'
     * and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
     */
    unitReference?: string;
  };

  export class GetClicksForBitlinkError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetClicksForBitlinkError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetClicksSummaryForBitlinkRequest = {
    /** A Bitlink made of the domain and hash */
    bitlink: string;
    /** A unit of time @default TimeUnit.Day */
    unit?: TimeUnit;
    /**
     * An integer representing the time units to query data for. pass -1 to return all units of time
     *
     * @default -1
     */
    units?: number;
    /**
     * An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
     * default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B'
     * and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
     */
    unitReference?: string;
  };

  export class GetClicksSummaryForBitlinkError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetClicksSummaryForBitlinkError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetEngagementsRequest = {
    /** A Bitlink made of the domain and hash */
    bitlink: string;
    /** A unit of time @default TimeUnit.Day */
    unit?: TimeUnit;
    /**
     * An integer representing the time units to query data for. pass -1 to return all units of time
     *
     * @default -1
     */
    units?: number;
    /**
     * An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
     * default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B'
     * and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
     */
    unitReference?: string;
  };

  export class GetEngagementsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetEngagementsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 410, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetEngagementsSummaryRequest = {
    /** A Bitlink made of the domain and hash */
    bitlink: string;
    /** A unit of time @default TimeUnit.Day */
    unit?: TimeUnit;
    /**
     * An integer representing the time units to query data for. pass -1 to return all units of time
     *
     * @default -1
     */
    units?: number;
    /**
     * An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
     * default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B'
     * and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
     */
    unitReference?: string;
  };

  export class GetEngagementsSummaryError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetEngagementsSummaryError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 410, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetMetricsForBitlinkByCitiesRequest = {
    /** A Bitlink made of the domain and hash */
    bitlink: string;
    /** A unit of time @default TimeUnit.Day */
    unit?: TimeUnit;
    /**
     * An integer representing the time units to query data for. pass -1 to return all units of time
     *
     * @default -1
     */
    units?: number;
    /** The quantity of items to be be returned @default 50 */
    size?: number;
    /**
     * An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
     * default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B'
     * and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
     */
    unitReference?: string;
  };

  export class GetMetricsForBitlinkByCitiesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMetricsForBitlinkByCitiesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 410, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetMetricsForBitlinkByCountriesRequest = {
    /** A Bitlink made of the domain and hash */
    bitlink: string;
    /** A unit of time @default TimeUnit.Day */
    unit?: TimeUnit;
    /**
     * An integer representing the time units to query data for. pass -1 to return all units of time
     *
     * @default -1
     */
    units?: number;
    /** The quantity of items to be be returned @default 50 */
    size?: number;
    /**
     * An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
     * default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B'
     * and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
     */
    unitReference?: string;
  };

  export class GetMetricsForBitlinkByCountriesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMetricsForBitlinkByCountriesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 410, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetMetricsForBitlinkByDevicesRequest = {
    /** A Bitlink made of the domain and hash */
    bitlink: string;
    /** A unit of time @default TimeUnit.Day */
    unit?: TimeUnit;
    /**
     * An integer representing the time units to query data for. pass -1 to return all units of time
     *
     * @default -1
     */
    units?: number;
    /** The quantity of items to be be returned @default 50 */
    size?: number;
    /**
     * An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
     * default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B'
     * and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
     */
    unitReference?: string;
  };

  export class GetMetricsForBitlinkByDevicesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMetricsForBitlinkByDevicesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 410, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetMetricsForBitlinkByReferrerNameRequest = {
    /** A Bitlink made of the domain and hash */
    bitlink: string;
    /** A unit of time @default TimeUnit.Day */
    unit?: TimeUnit;
    /**
     * An integer representing the time units to query data for. pass -1 to return all units of time
     *
     * @default -1
     */
    units?: number;
    /** The quantity of items to be be returned @default 50 */
    size?: number;
    /**
     * An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
     * default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B'
     * and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
     */
    unitReference?: string;
  };

  export class GetMetricsForBitlinkByReferrerNameError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMetricsForBitlinkByReferrerNameError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 410, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetMetricsForBitlinkByReferrersRequest = {
    /** A Bitlink made of the domain and hash */
    bitlink: string;
    /** A unit of time @default TimeUnit.Day */
    unit?: TimeUnit;
    /**
     * An integer representing the time units to query data for. pass -1 to return all units of time
     *
     * @default -1
     */
    units?: number;
    /** The quantity of items to be be returned @default 50 */
    size?: number;
    /**
     * An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
     * default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B'
     * and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
     */
    unitReference?: string;
  };

  export class GetMetricsForBitlinkByReferrersError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMetricsForBitlinkByReferrersError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 410, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetMetricsForBitlinkByReferrersByDomainsRequest = {
    /** A Bitlink made of the domain and hash */
    bitlink: string;
    /** A unit of time @default TimeUnit.Day */
    unit?: TimeUnit;
    /**
     * An integer representing the time units to query data for. pass -1 to return all units of time
     *
     * @default -1
     */
    units?: number;
    /** The quantity of items to be be returned @default 50 */
    size?: number;
    /**
     * An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
     * default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B'
     * and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
     */
    unitReference?: string;
  };

  export class GetMetricsForBitlinkByReferrersByDomainsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMetricsForBitlinkByReferrersByDomainsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 410, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetMetricsForBitlinkByReferringDomainsRequest = {
    /** A Bitlink made of the domain and hash */
    bitlink: string;
    /** A unit of time @default TimeUnit.Day */
    unit?: TimeUnit;
    /**
     * An integer representing the time units to query data for. pass -1 to return all units of time
     *
     * @default -1
     */
    units?: number;
    /** The quantity of items to be be returned @default 50 */
    size?: number;
    /**
     * An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
     * default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B'
     * and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
     */
    unitReference?: string;
  };

  export class GetMetricsForBitlinkByReferringDomainsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMetricsForBitlinkByReferringDomainsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 410, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetSortedBitlinksRequest = {
    /** A GUID for a Bitly group */
    groupGuid: string;
    /** The type of sorting that you would like to do */
    sort: Sort;
    /** A unit of time @default TimeUnit.Day */
    unit?: TimeUnit;
    /**
     * An integer representing the time units to query data for. pass -1 to return all units of
     * time.
     *
     * @default -1
     */
    units?: number;
    /**
     * An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
     * default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B'
     * and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
     */
    unitReference?: string;
    /** The quantity of items to be be returned @default 50 */
    size?: number;
  };

  export const getSortedBitlinksRequestSchema: Schema<GetSortedBitlinksRequest> = s.lazySchema(() =>
    s.object<GetSortedBitlinksRequest>({
      groupGuid: s.string(),
      sort: sortSchema,
      unit: s.defaulted(timeUnitSchema, TimeUnit.Day),
      units: s.defaulted(s.int(), -1),
      unitReference: s.optional(s.string()),
      size: s.defaulted(s.int().check(s.lte(100)), 50),
    }),
  );

  export class GetSortedBitlinksError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSortedBitlinksError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetTopLinksAndQrCodesByEngagementsRequest = {
    /** A GUID for a Bitly group */
    groupGuid: string;
    /** A unit of time @default TimeUnit.Day */
    unit?: TimeUnit;
    /**
     * An integer representing the time units to query data for. pass -1 to return all units of
     * time.
     *
     * @default -1
     */
    units?: number;
    /**
     * An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
     * default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B'
     * and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
     */
    unitReference?: string;
    /** The quantity of items to be be returned @default 50 */
    size?: number;
  };

  export const getTopLinksAndQrCodesByEngagementsRequestSchema: Schema<GetTopLinksAndQrCodesByEngagementsRequest> =
    s.lazySchema(() =>
      s.object<GetTopLinksAndQrCodesByEngagementsRequest>({
        groupGuid: s.string(),
        unit: s.defaulted(timeUnitSchema, TimeUnit.Day),
        units: s.defaulted(s.int(), -1),
        unitReference: s.optional(s.string()),
        size: s.defaulted(s.int().check(s.lte(100)), 50),
      }),
    );

  export class GetTopLinksAndQrCodesByEngagementsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTopLinksAndQrCodesByEngagementsError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateBitlinkRequest = {
    /** A Bitlink made of the domain and hash */
    bitlink: string;
    body: BitlinkUpdateBody;
  };

  export class UpdateBitlinkError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error8", Error>
      | Declared<"error9", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateBitlinkError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 410, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error7", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error8", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error9", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateBitlinksByGroupRequest = {
    /** A GUID for a Bitly group */
    groupGuid: string;
    body: BulkUpdateRequest;
  };

  export class UpdateBitlinksByGroupError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateBitlinksByGroupError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
