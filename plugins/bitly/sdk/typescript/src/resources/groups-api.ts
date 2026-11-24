import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  cityMetricsBitlyGroupsApiSchema,
  type CityMetricsBitlyGroupsApi,
} from "../models/city-metrics-bitly-groups-api.js";
import {
  clickMetricsBitlyCustomBitlinksApiSchema,
  type ClickMetricsBitlyCustomBitlinksApi,
} from "../models/click-metrics-bitly-custom-bitlinks-api.js";
import {
  deviceMetricsBitlyGroupsApiSchema,
  type DeviceMetricsBitlyGroupsApi,
} from "../models/device-metrics-bitly-groups-api.js";
import { errorSchema, type Error } from "../models/error.js";
import { groupClicksSchema, type GroupClicks } from "../models/group-clicks.js";
import {
  groupExportRequestBodySchema,
  type GroupExportRequestBody,
} from "../models/group-export-request-body.js";
import { groupExportResponseSchema, type GroupExportResponse } from "../models/group-export-response.js";
import { groupFeatureUsageSchema, type GroupFeatureUsage } from "../models/group-feature-usage.js";
import { groupHistoricalUsageSchema, type GroupHistoricalUsage } from "../models/group-historical-usage.js";
import { groupPreferencesSchema, type GroupPreferences } from "../models/group-preferences.js";
import { groupUpdateSchema, type GroupUpdate } from "../models/group-update.js";
import { groupSchema, type Group } from "../models/group.js";
import {
  groupsLinksClicksDevicesResponseSchema,
  type GroupsLinksClicksDevicesResponse,
} from "../models/groups-links-clicks-devices-response.js";
import { groupsSchema, type Groups } from "../models/groups.js";
import { metricsSchema, type Metrics } from "../models/metrics.js";
import { simplifiedErrorSchema, type SimplifiedError } from "../models/simplified-error.js";
import { sortedLinksSchema, type SortedLinks } from "../models/sorted-links.js";
import { tagsSchema, type Tags } from "../models/tags.js";
import { TimeUnitDwm, timeUnitDwmSchema } from "../models/time-unit-dwm.js";
import { TimeUnit, timeUnitSchema } from "../models/time-unit.js";
import { Type, typeSchema } from "../models/type.js";
import {
  groupsCodesScansTopResponseSchema,
  type GroupsCodesScansTopResponse,
} from "../models/unions/groups-codes-scans-top-response.js";
import type { Servers } from "../servers.js";

/**
 * Groups are subdivisions within organizations. Every user will be in at least one group, and every
 * shortened link will be in one group. Most actions on our API will be on behalf of a group. For
 * example, when you shorten a link, it will be on behalf of a user and a group.
 */
export class GroupsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Click Metrics for a Group by Referrer
   *
   * @remarks
   * Returns metrics by referrer for the specified group's links.
   *
   * @returns SUCCESS
   *
   * @throws {@link GroupsApi.GetGroupMetricsByReferrerError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroupMetricsByReferrer(
    request: GroupsApi.GetGroupMetricsByReferrerRequest,
    options?: RequestOptions,
  ): ApiPromise<ClickMetricsBitlyCustomBitlinksApi, GroupsApi.GetGroupMetricsByReferrerError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups/{group_guid}/referrers"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "group_guid", value: request.groupGuid, schema: s.string() }],
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
        success: { kind: "json", schema: clickMetricsBitlyCustomBitlinksApiSchema },
        errorFactory: GroupsApi.GetGroupMetricsByReferrerError,
      },
      options,
    );
  }

  /**
   * Get Click Metrics for a Group by Referring Networks
   *
   * @remarks
   * Returns metrics by referring networks for the specified group's links.
   *
   * @returns SUCCESS
   *
   * @throws {@link GroupsApi.GetGroupMetricsByReferringNetworksError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroupMetricsByReferringNetworks(
    request: GroupsApi.GetGroupMetricsByReferringNetworksRequest,
    options?: RequestOptions,
  ): ApiPromise<ClickMetricsBitlyCustomBitlinksApi, GroupsApi.GetGroupMetricsByReferringNetworksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups/{group_guid}/referring_networks"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "group_guid", value: request.groupGuid, schema: s.string() }],
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
        success: { kind: "json", schema: clickMetricsBitlyCustomBitlinksApiSchema },
        errorFactory: GroupsApi.GetGroupMetricsByReferringNetworksError,
      },
      options,
    );
  }

  /**
   * Retrieve a Group
   *
   * @remarks
   * Returns details for a group.
   *
   * @returns SUCCESS
   *
   * @throws {@link GroupsApi.GetGroupError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroup(
    request: GroupsApi.GetGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<Group, GroupsApi.GetGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups/{group_guid}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "group_guid", value: request.groupGuid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: groupSchema },
        errorFactory: GroupsApi.GetGroupError,
      },
      options,
    );
  }

  /**
   * Get clicks by group
   *
   * @remarks
   * get number of clicks on bitlinks in a group
   *
   * @returns SUCCESS
   *
   * @throws {@link GroupsApi.GetGroupClicksError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroupClicks(
    request: GroupsApi.GetGroupClicksRequest,
    options?: RequestOptions,
  ): ApiPromise<GroupClicks, GroupsApi.GetGroupClicksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups/{group_guid}/clicks"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "group_guid", value: request.groupGuid, schema: s.string() }],
        query: [
          { name: "unit", value: request.unit, schema: s.defaulted(timeUnitSchema, TimeUnit.Day) },
          { name: "units", value: request.units, schema: s.defaulted(s.int(), -1) },
          { name: "unit_reference", value: request.unitReference, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: groupClicksSchema },
        errorFactory: GroupsApi.GetGroupClicksError,
      },
      options,
    );
  }

  /**
   * Get Scan Metrics for a Group by City
   *
   * @remarks
   * Get QR code scan metrics for a group broken down by city.
   *
   * @returns SUCCESS
   *
   * @throws {@link GroupsApi.GetGroupCodeScansByCityError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroupCodeScansByCity(
    request: GroupsApi.GetGroupCodeScansByCityRequest,
    options?: RequestOptions,
  ): ApiPromise<CityMetricsBitlyGroupsApi, GroupsApi.GetGroupCodeScansByCityError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups/{group_guid}/codes/scans/cities"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "group_guid", value: request.groupGuid, schema: s.string() }],
        query: [
          { name: "unit", value: request.unit, schema: s.defaulted(timeUnitSchema, TimeUnit.Day) },
          { name: "units", value: request.units, schema: s.defaulted(s.int(), -1) },
          { name: "unit_reference", value: request.unitReference, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cityMetricsBitlyGroupsApiSchema },
        errorFactory: GroupsApi.GetGroupCodeScansByCityError,
      },
      options,
    );
  }

  /**
   * Get Scan Metrics for a Group by Country
   *
   * @remarks
   * Get QR code scan metrics for a group broken down by country.
   *
   * @returns SUCCESS
   *
   * @throws {@link GroupsApi.GetGroupCodeScansByCountryError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroupCodeScansByCountry(
    request: GroupsApi.GetGroupCodeScansByCountryRequest,
    options?: RequestOptions,
  ): ApiPromise<ClickMetricsBitlyCustomBitlinksApi, GroupsApi.GetGroupCodeScansByCountryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups/{group_guid}/codes/scans/countries"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "group_guid", value: request.groupGuid, schema: s.string() }],
        query: [
          { name: "unit", value: request.unit, schema: s.defaulted(timeUnitSchema, TimeUnit.Day) },
          { name: "units", value: request.units, schema: s.defaulted(s.int(), -1) },
          { name: "unit_reference", value: request.unitReference, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: clickMetricsBitlyCustomBitlinksApiSchema },
        errorFactory: GroupsApi.GetGroupCodeScansByCountryError,
      },
      options,
    );
  }

  /**
   * Get Scan Metrics for a Group Over Time
   *
   * @remarks
   * Get QR code scan metrics over time for a group.
   *
   * @returns SUCCESS
   *
   * @throws {@link GroupsApi.GetGroupCodeScansOverTimeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroupCodeScansOverTime(
    request: GroupsApi.GetGroupCodeScansOverTimeRequest,
    options?: RequestOptions,
  ): ApiPromise<GroupClicks, GroupsApi.GetGroupCodeScansOverTimeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups/{group_guid}/codes/scans/over_time"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "group_guid", value: request.groupGuid, schema: s.string() }],
        query: [
          { name: "unit", value: request.unit, schema: s.defaulted(timeUnitSchema, TimeUnit.Day) },
          { name: "units", value: request.units, schema: s.defaulted(s.int(), -1) },
          { name: "unit_reference", value: request.unitReference, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: groupClicksSchema },
        errorFactory: GroupsApi.GetGroupCodeScansOverTimeError,
      },
      options,
    );
  }

  /**
   * Get limit usage for a group
   *
   * @remarks
   * Get a group's current feature limit usage, optionally provide limit name(s) for usage on
   * specific limit(s)
   *
   * @returns SUCCESS
   *
   * @throws {@link GroupsApi.GetGroupFeatureUsageError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroupFeatureUsage(
    request: GroupsApi.GetGroupFeatureUsageRequest,
    options?: RequestOptions,
  ): ApiPromise<GroupFeatureUsage, GroupsApi.GetGroupFeatureUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups/{group_guid}/feature_usage"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "group_guid", value: request.groupGuid, schema: s.string() }],
        query: [{ name: "name", value: request.name, schema: s.optional(s.array(s.string())) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: groupFeatureUsageSchema },
        errorFactory: GroupsApi.GetGroupFeatureUsageError,
      },
      options,
    );
  }

  /**
   * Get historical usage for a group
   *
   * @remarks
   * Get a group's historical usage for specific limit(s) and date range. Refer to GET
   * /v4/groups/{group_guid}/feature_usage endpoint response for available limit names.
   *
   * @returns SUCCESS
   *
   * @throws {@link GroupsApi.GetGroupHistoricalUsageError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroupHistoricalUsage(
    request: GroupsApi.GetGroupHistoricalUsageRequest,
    options?: RequestOptions,
  ): ApiPromise<GroupHistoricalUsage, GroupsApi.GetGroupHistoricalUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups/{group_guid}/historical_usage"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "group_guid", value: request.groupGuid, schema: s.string() }],
        query: [
          { name: "name", value: request.name, schema: s.optional(s.array(s.string())) },
          { name: "start_date", value: request.startDate, schema: s.optional(s.string()) },
          { name: "end_date", value: request.endDate, schema: s.optional(s.string()) },
          { name: "unit", value: request.unit, schema: s.defaulted(timeUnitDwmSchema, TimeUnitDwm.Month) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: groupHistoricalUsageSchema },
        errorFactory: GroupsApi.GetGroupHistoricalUsageError,
      },
      options,
    );
  }

  /**
   * Get Group Link Clicks by City
   *
   * @remarks
   * Get link clicks by city for all links in a group.
   *
   * @returns SUCCESS
   *
   * @throws {@link GroupsApi.GetGroupLinkClicksByCityError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroupLinkClicksByCity(
    request: GroupsApi.GetGroupLinkClicksByCityRequest,
    options?: RequestOptions,
  ): ApiPromise<CityMetricsBitlyGroupsApi, GroupsApi.GetGroupLinkClicksByCityError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups/{group_guid}/links/clicks/cities"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "group_guid", value: request.groupGuid, schema: s.string() }],
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
        success: { kind: "json", schema: cityMetricsBitlyGroupsApiSchema },
        errorFactory: GroupsApi.GetGroupLinkClicksByCityError,
      },
      options,
    );
  }

  /**
   * Get Group Link Clicks by Country
   *
   * @remarks
   * Get link clicks by country for all links in a group.
   *
   * @returns SUCCESS
   *
   * @throws {@link GroupsApi.GetGroupLinkClicksByCountryError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroupLinkClicksByCountry(
    request: GroupsApi.GetGroupLinkClicksByCountryRequest,
    options?: RequestOptions,
  ): ApiPromise<ClickMetricsBitlyCustomBitlinksApi, GroupsApi.GetGroupLinkClicksByCountryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups/{group_guid}/links/clicks/countries"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "group_guid", value: request.groupGuid, schema: s.string() }],
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
        success: { kind: "json", schema: clickMetricsBitlyCustomBitlinksApiSchema },
        errorFactory: GroupsApi.GetGroupLinkClicksByCountryError,
      },
      options,
    );
  }

  /**
   * Get Group Link Clicks by Device
   *
   * @remarks
   * Get link clicks by device for all links in a group.
   *
   * @returns SUCCESS
   *
   * @throws {@link GroupsApi.GetGroupLinkClicksByDeviceError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroupLinkClicksByDevice(
    request: GroupsApi.GetGroupLinkClicksByDeviceRequest,
    options?: RequestOptions,
  ): ApiPromise<GroupsLinksClicksDevicesResponse, GroupsApi.GetGroupLinkClicksByDeviceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups/{group_guid}/links/clicks/devices"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "group_guid", value: request.groupGuid, schema: s.string() }],
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
        success: { kind: "json", schema: groupsLinksClicksDevicesResponseSchema },
        errorFactory: GroupsApi.GetGroupLinkClicksByDeviceError,
      },
      options,
    );
  }

  /**
   * Get Group Link Clicks by Referrer
   *
   * @remarks
   * Get link clicks by referrer for all links in a group.
   *
   * @returns SUCCESS
   *
   * @throws {@link GroupsApi.GetGroupLinkClicksByReferrerError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroupLinkClicksByReferrer(
    request: GroupsApi.GetGroupLinkClicksByReferrerRequest,
    options?: RequestOptions,
  ): ApiPromise<ClickMetricsBitlyCustomBitlinksApi, GroupsApi.GetGroupLinkClicksByReferrerError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups/{group_guid}/links/clicks/referrers"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "group_guid", value: request.groupGuid, schema: s.string() }],
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
        success: { kind: "json", schema: clickMetricsBitlyCustomBitlinksApiSchema },
        errorFactory: GroupsApi.GetGroupLinkClicksByReferrerError,
      },
      options,
    );
  }

  /**
   * Get Group Link Clicks Over Time
   *
   * @remarks
   * Get link clicks over time for all links in a group.
   *
   * @returns SUCCESS
   *
   * @throws {@link GroupsApi.GetGroupLinkClicksOverTimeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroupLinkClicksOverTime(
    request: GroupsApi.GetGroupLinkClicksOverTimeRequest,
    options?: RequestOptions,
  ): ApiPromise<GroupClicks, GroupsApi.GetGroupLinkClicksOverTimeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups/{group_guid}/links/clicks/over_time"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "group_guid", value: request.groupGuid, schema: s.string() }],
        query: [
          { name: "unit", value: request.unit, schema: s.defaulted(timeUnitSchema, TimeUnit.Day) },
          { name: "units", value: request.units, schema: s.defaulted(s.int(), -1) },
          { name: "unit_reference", value: request.unitReference, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: groupClicksSchema },
        errorFactory: GroupsApi.GetGroupLinkClicksOverTimeError,
      },
      options,
    );
  }

  /**
   * Get Click Metrics for a Group by City
   *
   * @remarks
   * Returns the geographic origins of click traffic by city for the specified group.
   *
   * @returns SUCCESS
   *
   * @throws {@link GroupsApi.GetGroupMetricsByCitiesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroupMetricsByCities(
    request: GroupsApi.GetGroupMetricsByCitiesRequest,
    options?: RequestOptions,
  ): ApiPromise<CityMetricsBitlyGroupsApi, GroupsApi.GetGroupMetricsByCitiesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups/{group_guid}/cities"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "group_guid", value: request.groupGuid, schema: s.string() }],
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
        success: { kind: "json", schema: cityMetricsBitlyGroupsApiSchema },
        errorFactory: GroupsApi.GetGroupMetricsByCitiesError,
      },
      options,
    );
  }

  /**
   * Get Click Metrics for a Group by Country
   *
   * @remarks
   * Returns the geographic origins of click traffic by country for the specified group.
   *
   * @returns SUCCESS
   *
   * @throws {@link GroupsApi.GetGroupMetricsByCountriesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroupMetricsByCountries(
    request: GroupsApi.GetGroupMetricsByCountriesRequest,
    options?: RequestOptions,
  ): ApiPromise<ClickMetricsBitlyCustomBitlinksApi, GroupsApi.GetGroupMetricsByCountriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups/{group_guid}/countries"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "group_guid", value: request.groupGuid, schema: s.string() }],
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
        success: { kind: "json", schema: clickMetricsBitlyCustomBitlinksApiSchema },
        errorFactory: GroupsApi.GetGroupMetricsByCountriesError,
      },
      options,
    );
  }

  /**
   * Get Click Metrics for a Group by Device Type
   *
   * @remarks
   * Returns the device types generating click traffic to the specified group's links.
   *
   * @returns SUCCESS
   *
   * @throws {@link GroupsApi.GetGroupMetricsByDevicesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroupMetricsByDevices(
    request: GroupsApi.GetGroupMetricsByDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceMetricsBitlyGroupsApi, GroupsApi.GetGroupMetricsByDevicesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups/{group_guid}/devices"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "group_guid", value: request.groupGuid, schema: s.string() }],
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
        success: { kind: "json", schema: deviceMetricsBitlyGroupsApiSchema },
        errorFactory: GroupsApi.GetGroupMetricsByDevicesError,
      },
      options,
    );
  }

  /**
   * Get Group Metrics Over Time
   *
   * @remarks
   * Get group engagement metrics over time for all links in a group.
   *
   * @returns SUCCESS
   *
   * @throws {@link GroupsApi.GetGroupMetricsOverTimeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroupMetricsOverTime(
    request: GroupsApi.GetGroupMetricsOverTimeRequest,
    options?: RequestOptions,
  ): ApiPromise<GroupClicks, GroupsApi.GetGroupMetricsOverTimeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups/{group_guid}/engagements/over_time"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "group_guid", value: request.groupGuid, schema: s.string() }],
        query: [
          { name: "unit", value: request.unit, schema: s.defaulted(timeUnitSchema, TimeUnit.Day) },
          { name: "units", value: request.units, schema: s.defaulted(s.int(), -1) },
          { name: "unit_reference", value: request.unitReference, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: groupClicksSchema },
        errorFactory: GroupsApi.GetGroupMetricsOverTimeError,
      },
      options,
    );
  }

  /**
   * Retrieve Group Preferences
   *
   * @remarks
   * Returns preferences for the specified group.
   *
   * @returns SUCCESS
   *
   * @throws {@link GroupsApi.GetGroupPreferencesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroupPreferences(
    request: GroupsApi.GetGroupPreferencesRequest,
    options?: RequestOptions,
  ): ApiPromise<GroupPreferences, GroupsApi.GetGroupPreferencesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups/{group_guid}/preferences"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "group_guid", value: request.groupGuid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: groupPreferencesSchema },
        errorFactory: GroupsApi.GetGroupPreferencesError,
      },
      options,
    );
  }

  /**
   * Retrieve Group Shorten Counts
   *
   * @remarks
   * Returns all the shorten counts for a group.
   *
   * @returns SUCCESS
   *
   * @throws {@link GroupsApi.GetGroupShortenCountsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroupShortenCounts(
    request: GroupsApi.GetGroupShortenCountsRequest,
    options?: RequestOptions,
  ): ApiPromise<Metrics, GroupsApi.GetGroupShortenCountsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups/{group_guid}/shorten_counts"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "group_guid", value: request.groupGuid, schema: s.string() }],
        query: [
          { name: "unit", value: request.unit, schema: s.defaulted(timeUnitSchema, TimeUnit.Day) },
          { name: "units", value: request.units, schema: s.defaulted(s.int(), -1) },
          { name: "unit_reference", value: request.unitReference, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: metricsSchema },
        errorFactory: GroupsApi.GetGroupShortenCountsError,
      },
      options,
    );
  }

  /**
   * Retrieve Tags by Group
   *
   * @remarks
   * Returns the tags currently used in the specified group. Maximum 1000.
   *
   * @returns SUCCESS
   *
   * @throws {@link GroupsApi.GetGroupTagsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroupTags(
    request: GroupsApi.GetGroupTagsRequest,
    options?: RequestOptions,
  ): ApiPromise<Tags, GroupsApi.GetGroupTagsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups/{group_guid}/tags"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "group_guid", value: request.groupGuid, schema: s.string() }],
        query: [{ name: "type", value: request.type, schema: s.defaulted(typeSchema, Type.Bitlink) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tagsSchema },
        errorFactory: GroupsApi.GetGroupTagsError,
      },
      options,
    );
  }

  /**
   * Get Top Performing QR Codes for a Group
   *
   * @remarks
   * Get top performing QR codes by scan count for all codes in a group.
   *
   * @returns SUCCESS
   *
   * @throws {@link GroupsApi.GetGroupTopCodeScansError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroupTopCodeScans(
    request: GroupsApi.GetGroupTopCodeScansRequest,
    options?: RequestOptions,
  ): ApiPromise<GroupsCodesScansTopResponse, GroupsApi.GetGroupTopCodeScansError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups/{group_guid}/codes/scans/top"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "group_guid", value: request.groupGuid, schema: s.string() }],
        query: [
          { name: "unit", value: request.unit, schema: s.defaulted(timeUnitSchema, TimeUnit.Day) },
          { name: "units", value: request.units, schema: s.defaulted(s.int(), -1) },
          { name: "unit_reference", value: request.unitReference, schema: s.optional(s.string()) },
          { name: "decoupled", value: request.decoupled, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: groupsCodesScansTopResponseSchema },
        errorFactory: GroupsApi.GetGroupTopCodeScansError,
      },
      options,
    );
  }

  /**
   * Get Group Top Performing Links by Click
   *
   * @remarks
   * Get top performing links by click for all links in a group.
   *
   * @returns SUCCESS
   *
   * @throws {@link GroupsApi.GetGroupTopLinkClicksError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroupTopLinkClicks(
    request: GroupsApi.GetGroupTopLinkClicksRequest,
    options?: RequestOptions,
  ): ApiPromise<SortedLinks, GroupsApi.GetGroupTopLinkClicksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups/{group_guid}/links/clicks/top"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "group_guid", value: request.groupGuid, schema: s.string() }],
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
        success: { kind: "json", schema: sortedLinksSchema },
        errorFactory: GroupsApi.GetGroupTopLinkClicksError,
      },
      options,
    );
  }

  /**
   * Get Group Top Performing Links by Engagement
   *
   * @remarks
   * Get top performing links by engagement for all links in a group.
   *
   * @returns SUCCESS
   *
   * @throws {@link GroupsApi.GetGroupTopMetricsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroupTopMetrics(
    request: GroupsApi.GetGroupTopMetricsRequest,
    options?: RequestOptions,
  ): ApiPromise<SortedLinks, GroupsApi.GetGroupTopMetricsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups/{group_guid}/engagements/top"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "group_guid", value: request.groupGuid, schema: s.string() }],
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
        success: { kind: "json", schema: sortedLinksSchema },
        errorFactory: GroupsApi.GetGroupTopMetricsError,
      },
      options,
    );
  }

  /**
   * Retrieve Groups
   *
   * @remarks
   * Returns a list of groups in the organization.
   *
   * @returns SUCCESS
   *
   * @throws {@link GroupsApi.GetGroupsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroups(
    request: GroupsApi.GetGroupsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Groups, GroupsApi.GetGroupsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "organization_guid", value: request.organizationGuid, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: groupsSchema },
        errorFactory: GroupsApi.GetGroupsError,
      },
      options,
    );
  }

  /**
   * Create an inline CSV export for a group
   *
   * @remarks
   * Build a CSV export synchronously and return it inline as a base64 data URI plus metadata. The
   * export_type field selects the CSV shape: link_engagements_batch (engagement metrics for
   * explicit bitlinks or a filter), links_list (link metadata roster), or qr_codes_list (QR code
   * metadata roster). Row caps apply per request: 200 rows when metrics are included
   * (link_engagements_batch, or include_metrics on a list export); 1000 rows for metadata-only list
   * exports. When the match set exceeds the cap, truncated is true and only the first cap rows are
   * returned; row_count reports how many data rows are in the CSV.
   *
   * @returns OK
   *
   * @throws {@link GroupsApi.PostCreateGroupExportError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postCreateGroupExport(
    request: GroupsApi.PostCreateGroupExportRequest,
    options?: RequestOptions,
  ): ApiPromise<GroupExportResponse, GroupsApi.PostCreateGroupExportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/groups/{group_guid}/exports"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "group_guid", value: request.groupGuid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: groupExportRequestBodySchema },
      },
      {
        success: { kind: "json", schema: groupExportResponseSchema },
        errorFactory: GroupsApi.PostCreateGroupExportError,
      },
      options,
    );
  }

  /**
   * Update a Group
   *
   * @remarks
   * Updates the details of a group.
   *
   * @returns SUCCESS
   *
   * @throws {@link GroupsApi.UpdateGroupError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateGroup(
    request: GroupsApi.UpdateGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<Group, GroupsApi.UpdateGroupError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/groups/{group_guid}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "group_guid", value: request.groupGuid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: groupUpdateSchema },
      },
      {
        success: { kind: "json", schema: groupSchema },
        errorFactory: GroupsApi.UpdateGroupError,
      },
      options,
    );
  }

  /**
   * Update Group Preferences
   *
   * @remarks
   * Updates preferences for a group.
   *
   * @returns SUCCESS
   *
   * @throws {@link GroupsApi.UpdateGroupPreferencesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateGroupPreferences(
    request: GroupsApi.UpdateGroupPreferencesRequest,
    options?: RequestOptions,
  ): ApiPromise<GroupPreferences, GroupsApi.UpdateGroupPreferencesError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/groups/{group_guid}/preferences"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "group_guid", value: request.groupGuid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: groupPreferencesSchema },
      },
      {
        success: { kind: "json", schema: groupPreferencesSchema },
        errorFactory: GroupsApi.UpdateGroupPreferencesError,
      },
      options,
    );
  }
}

export namespace GroupsApi {
  export type GetGroupMetricsByReferrerRequest = {
    /** A GUID for a Bitly group */
    groupGuid: string;
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

  export class GetGroupMetricsByReferrerError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGroupMetricsByReferrerError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetGroupMetricsByReferringNetworksRequest = {
    /** A GUID for a Bitly group */
    groupGuid: string;
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

  export class GetGroupMetricsByReferringNetworksError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGroupMetricsByReferringNetworksError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetGroupRequest = {
    /** A GUID for a Bitly group */
    groupGuid: string;
  };

  export class GetGroupError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGroupError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetGroupClicksRequest = {
    /** A GUID for a Bitly group */
    groupGuid: string;
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

  export class GetGroupClicksError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGroupClicksError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetGroupCodeScansByCityRequest = {
    /** A GUID for a Bitly group */
    groupGuid: string;
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

  export class GetGroupCodeScansByCityError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGroupCodeScansByCityError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetGroupCodeScansByCountryRequest = {
    /** A GUID for a Bitly group */
    groupGuid: string;
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

  export class GetGroupCodeScansByCountryError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGroupCodeScansByCountryError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetGroupCodeScansOverTimeRequest = {
    /** A GUID for a Bitly group */
    groupGuid: string;
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

  export class GetGroupCodeScansOverTimeError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGroupCodeScansOverTimeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetGroupFeatureUsageRequest = {
    /** A GUID for a Bitly group */
    groupGuid: string;
    /** The limit name you would like usage for */
    name?: string[];
  };

  export class GetGroupFeatureUsageError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGroupFeatureUsageError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetGroupHistoricalUsageRequest = {
    /** A GUID for a Bitly group */
    groupGuid: string;
    /** The limit name you would like usage for */
    name?: string[];
    /** The start date for the date range */
    startDate?: string;
    /** The end date for the date range */
    endDate?: string;
    /** A unit of time (day, week, or month) @default TimeUnitDwm.Month */
    unit?: TimeUnitDwm;
  };

  export class GetGroupHistoricalUsageError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGroupHistoricalUsageError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetGroupLinkClicksByCityRequest = {
    /** A GUID for a Bitly group */
    groupGuid: string;
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

  export class GetGroupLinkClicksByCityError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGroupLinkClicksByCityError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetGroupLinkClicksByCountryRequest = {
    /** A GUID for a Bitly group */
    groupGuid: string;
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

  export class GetGroupLinkClicksByCountryError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGroupLinkClicksByCountryError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetGroupLinkClicksByDeviceRequest = {
    /** A GUID for a Bitly group */
    groupGuid: string;
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

  export class GetGroupLinkClicksByDeviceError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGroupLinkClicksByDeviceError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetGroupLinkClicksByReferrerRequest = {
    /** A GUID for a Bitly group */
    groupGuid: string;
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

  export class GetGroupLinkClicksByReferrerError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGroupLinkClicksByReferrerError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetGroupLinkClicksOverTimeRequest = {
    /** A GUID for a Bitly group */
    groupGuid: string;
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

  export class GetGroupLinkClicksOverTimeError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGroupLinkClicksOverTimeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetGroupMetricsByCitiesRequest = {
    /** A GUID for a Bitly group */
    groupGuid: string;
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

  export class GetGroupMetricsByCitiesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGroupMetricsByCitiesError> = [
      { on: 402, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetGroupMetricsByCountriesRequest = {
    /** A GUID for a Bitly group */
    groupGuid: string;
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

  export class GetGroupMetricsByCountriesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGroupMetricsByCountriesError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetGroupMetricsByDevicesRequest = {
    /** A GUID for a Bitly group */
    groupGuid: string;
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

  export class GetGroupMetricsByDevicesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGroupMetricsByDevicesError> = [
      { on: 402, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetGroupMetricsOverTimeRequest = {
    /** A GUID for a Bitly group */
    groupGuid: string;
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

  export class GetGroupMetricsOverTimeError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGroupMetricsOverTimeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetGroupPreferencesRequest = {
    /** A GUID for a Bitly group */
    groupGuid: string;
  };

  export class GetGroupPreferencesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGroupPreferencesError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetGroupShortenCountsRequest = {
    /** A GUID for a Bitly group */
    groupGuid: string;
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

  export class GetGroupShortenCountsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGroupShortenCountsError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetGroupTagsRequest = {
    /** A GUID for a Bitly group */
    groupGuid: string;
    /** Tag set to return; defaults to bitlink @default Type.Bitlink */
    type?: Type;
  };

  export class GetGroupTagsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGroupTagsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetGroupTopCodeScansRequest = {
    /** A GUID for a Bitly group */
    groupGuid: string;
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
    /**
     * When true, ranks results by decoupled QR scan count and returns a TopLinksAndQRCodes response
     * with links and QR codes partitioned into separate lists and a unified sorted_engagements
     * ordering.
     */
    decoupled?: boolean;
  };

  export class GetGroupTopCodeScansError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGroupTopCodeScansError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetGroupTopLinkClicksRequest = {
    /** A GUID for a Bitly group */
    groupGuid: string;
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

  export class GetGroupTopLinkClicksError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGroupTopLinkClicksError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetGroupTopMetricsRequest = {
    /** A GUID for a Bitly group */
    groupGuid: string;
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

  export class GetGroupTopMetricsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGroupTopMetricsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetGroupsRequest = {
    /** A GUID for a Bitly organization */
    organizationGuid?: string;
  };

  export class GetGroupsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGroupsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PostCreateGroupExportRequest = {
    /** A GUID for a Bitly group */
    groupGuid: string;
    body: GroupExportRequestBody;
  };

  export class PostCreateGroupExportError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostCreateGroupExportError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateGroupRequest = {
    /** A GUID for a Bitly group */
    groupGuid: string;
    body: GroupUpdate;
  };

  export class UpdateGroupError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateGroupError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateGroupPreferencesRequest = {
    /** A GUID for a Bitly group */
    groupGuid: string;
    body: GroupPreferences;
  };

  export class UpdateGroupPreferencesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateGroupPreferencesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
