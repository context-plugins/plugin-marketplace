import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { audienceExportSchema, type AudienceExport } from "../models/audience-export.js";
import {
  batchRunPivotReportsRequestSchema,
  type BatchRunPivotReportsRequest,
} from "../models/batch-run-pivot-reports-request.js";
import {
  batchRunPivotReportsResponseSchema,
  type BatchRunPivotReportsResponse,
} from "../models/batch-run-pivot-reports-response.js";
import {
  batchRunReportsRequestSchema,
  type BatchRunReportsRequest,
} from "../models/batch-run-reports-request.js";
import {
  batchRunReportsResponseSchema,
  type BatchRunReportsResponse,
} from "../models/batch-run-reports-response.js";
import {
  checkCompatibilityRequestSchema,
  type CheckCompatibilityRequest,
} from "../models/check-compatibility-request.js";
import {
  checkCompatibilityResponseSchema,
  type CheckCompatibilityResponse,
} from "../models/check-compatibility-response.js";
import {
  googleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequestSchema,
  type GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequest,
} from "../models/google-analytics-admin-v1-beta-acknowledge-user-data-collection-request.js";
import {
  googleAnalyticsAdminV1BetaConversionEventSchema,
  type GoogleAnalyticsAdminV1BetaConversionEvent,
} from "../models/google-analytics-admin-v1-beta-conversion-event.js";
import {
  googleAnalyticsAdminV1BetaCustomDimensionSchema,
  type GoogleAnalyticsAdminV1BetaCustomDimension,
} from "../models/google-analytics-admin-v1-beta-custom-dimension.js";
import {
  googleAnalyticsAdminV1BetaCustomMetricSchema,
  type GoogleAnalyticsAdminV1BetaCustomMetric,
} from "../models/google-analytics-admin-v1-beta-custom-metric.js";
import {
  googleAnalyticsAdminV1BetaDataRetentionSettingsSchema,
  type GoogleAnalyticsAdminV1BetaDataRetentionSettings,
} from "../models/google-analytics-admin-v1-beta-data-retention-settings.js";
import {
  googleAnalyticsAdminV1BetaDataStreamSchema,
  type GoogleAnalyticsAdminV1BetaDataStream,
} from "../models/google-analytics-admin-v1-beta-data-stream.js";
import {
  googleAnalyticsAdminV1BetaFirebaseLinkSchema,
  type GoogleAnalyticsAdminV1BetaFirebaseLink,
} from "../models/google-analytics-admin-v1-beta-firebase-link.js";
import {
  googleAnalyticsAdminV1BetaGoogleAdsLinkSchema,
  type GoogleAnalyticsAdminV1BetaGoogleAdsLink,
} from "../models/google-analytics-admin-v1-beta-google-ads-link.js";
import {
  googleAnalyticsAdminV1BetaKeyEventSchema,
  type GoogleAnalyticsAdminV1BetaKeyEvent,
} from "../models/google-analytics-admin-v1-beta-key-event.js";
import {
  googleAnalyticsAdminV1BetaListConversionEventsResponseSchema,
  type GoogleAnalyticsAdminV1BetaListConversionEventsResponse,
} from "../models/google-analytics-admin-v1-beta-list-conversion-events-response.js";
import {
  googleAnalyticsAdminV1BetaListCustomDimensionsResponseSchema,
  type GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse,
} from "../models/google-analytics-admin-v1-beta-list-custom-dimensions-response.js";
import {
  googleAnalyticsAdminV1BetaListCustomMetricsResponseSchema,
  type GoogleAnalyticsAdminV1BetaListCustomMetricsResponse,
} from "../models/google-analytics-admin-v1-beta-list-custom-metrics-response.js";
import {
  googleAnalyticsAdminV1BetaListDataStreamsResponseSchema,
  type GoogleAnalyticsAdminV1BetaListDataStreamsResponse,
} from "../models/google-analytics-admin-v1-beta-list-data-streams-response.js";
import {
  googleAnalyticsAdminV1BetaListFirebaseLinksResponseSchema,
  type GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse,
} from "../models/google-analytics-admin-v1-beta-list-firebase-links-response.js";
import {
  googleAnalyticsAdminV1BetaListGoogleAdsLinksResponseSchema,
  type GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse,
} from "../models/google-analytics-admin-v1-beta-list-google-ads-links-response.js";
import {
  googleAnalyticsAdminV1BetaListKeyEventsResponseSchema,
  type GoogleAnalyticsAdminV1BetaListKeyEventsResponse,
} from "../models/google-analytics-admin-v1-beta-list-key-events-response.js";
import {
  googleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponseSchema,
  type GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse,
} from "../models/google-analytics-admin-v1-beta-list-measurement-protocol-secrets-response.js";
import {
  googleAnalyticsAdminV1BetaListPropertiesResponseSchema,
  type GoogleAnalyticsAdminV1BetaListPropertiesResponse,
} from "../models/google-analytics-admin-v1-beta-list-properties-response.js";
import {
  googleAnalyticsAdminV1BetaMeasurementProtocolSecretSchema,
  type GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret,
} from "../models/google-analytics-admin-v1-beta-measurement-protocol-secret.js";
import {
  googleAnalyticsAdminV1BetaPropertySchema,
  type GoogleAnalyticsAdminV1BetaProperty,
} from "../models/google-analytics-admin-v1-beta-property.js";
import {
  googleAnalyticsAdminV1BetaRunAccessReportRequestSchema,
  type GoogleAnalyticsAdminV1BetaRunAccessReportRequest,
} from "../models/google-analytics-admin-v1-beta-run-access-report-request.js";
import {
  googleAnalyticsAdminV1BetaRunAccessReportResponseSchema,
  type GoogleAnalyticsAdminV1BetaRunAccessReportResponse,
} from "../models/google-analytics-admin-v1-beta-run-access-report-response.js";
import { googleRpcErrorSchema, type GoogleRpcError } from "../models/google-rpc-error.js";
import {
  listAudienceExportsResponseSchema,
  type ListAudienceExportsResponse,
} from "../models/list-audience-exports-response.js";
import { metadataSchema, type Metadata } from "../models/metadata.js";
import {
  operationGoogleAnalyticsPropertiesApiSchema,
  type OperationGoogleAnalyticsPropertiesApi,
} from "../models/operation-google-analytics-properties-api.js";
import {
  queryAudienceExportRequestSchema,
  type QueryAudienceExportRequest,
} from "../models/query-audience-export-request.js";
import {
  queryAudienceExportResponseSchema,
  type QueryAudienceExportResponse,
} from "../models/query-audience-export-response.js";
import {
  runPivotReportRequestSchema,
  type RunPivotReportRequest,
} from "../models/run-pivot-report-request.js";
import {
  runPivotReportResponseSchema,
  type RunPivotReportResponse,
} from "../models/run-pivot-report-response.js";
import {
  runRealtimeReportRequestSchema,
  type RunRealtimeReportRequest,
} from "../models/run-realtime-report-request.js";
import {
  runRealtimeReportResponseSchema,
  type RunRealtimeReportResponse,
} from "../models/run-realtime-report-response.js";
import { runReportRequestSchema, type RunReportRequest } from "../models/run-report-request.js";
import { runReportResponseSchema, type RunReportResponse } from "../models/run-report-response.js";
import type { Servers } from "../servers.js";

export class Properties {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Acknowledge user data collection properties
   *
   * @remarks
   * Acknowledges the terms of user data collection for the specified property. This acknowledgement
   * must be completed (either in the Google Analytics UI or through this API) before
   * MeasurementProtocolSecret resources may be created.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesAcknowledgeUserDataCollectionError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesAcknowledgeUserDataCollection(
    request: Properties.AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, unknown>,
    Properties.AnalyticsadminPropertiesAcknowledgeUserDataCollectionError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1beta/properties/{propertiesId}:acknowledgeUserDataCollection"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "propertiesId", value: request.propertiesId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: googleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Properties.AnalyticsadminPropertiesAcknowledgeUserDataCollectionError,
      },
      options,
    );
  }

  /**
   * Create conversionEvents
   *
   * @remarks
   * Deprecated: Use `CreateKeyEvent` instead. Creates a conversion event with the specified
   * attributes.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesConversionEventsCreateError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   *
   * @deprecated
   */
  analyticsadminPropertiesConversionEventsCreate(
    request: Properties.AnalyticsadminPropertiesConversionEventsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleAnalyticsAdminV1BetaConversionEvent,
    Properties.AnalyticsadminPropertiesConversionEventsCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1beta/properties/{propertiesId}/conversionEvents"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "propertiesId", value: request.propertiesId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleAnalyticsAdminV1BetaConversionEventSchema },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaConversionEventSchema },
        errorFactory: Properties.AnalyticsadminPropertiesConversionEventsCreateError,
      },
      options,
    );
  }

  /**
   * Delete conversionEvents
   *
   * @remarks
   * Deprecated: Use `DeleteKeyEvent` instead. Deletes a conversion event in a property.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesConversionEventsDeleteError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   *
   * @deprecated
   */
  analyticsadminPropertiesConversionEventsDelete(
    request: Properties.AnalyticsadminPropertiesConversionEventsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Properties.AnalyticsadminPropertiesConversionEventsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1beta/properties/{propertiesId}/conversionEvents/{conversionEventsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "propertiesId", value: request.propertiesId, schema: s.string() },
          { name: "conversionEventsId", value: request.conversionEventsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Properties.AnalyticsadminPropertiesConversionEventsDeleteError,
      },
      options,
    );
  }

  /**
   * Get conversionEvents
   *
   * @remarks
   * Deprecated: Use `GetKeyEvent` instead. Retrieve a single conversion event.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesConversionEventsGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   *
   * @deprecated
   */
  analyticsadminPropertiesConversionEventsGet(
    request: Properties.AnalyticsadminPropertiesConversionEventsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleAnalyticsAdminV1BetaConversionEvent,
    Properties.AnalyticsadminPropertiesConversionEventsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1beta/properties/{propertiesId}/conversionEvents/{conversionEventsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "propertiesId", value: request.propertiesId, schema: s.string() },
          { name: "conversionEventsId", value: request.conversionEventsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaConversionEventSchema },
        errorFactory: Properties.AnalyticsadminPropertiesConversionEventsGetError,
      },
      options,
    );
  }

  /**
   * List conversionEvents
   *
   * @remarks
   * Deprecated: Use `ListKeyEvents` instead. Returns a list of conversion events in the specified
   * parent property. Returns an empty list if no conversion events are found.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesConversionEventsListError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   *
   * @deprecated
   */
  analyticsadminPropertiesConversionEventsList(
    request: Properties.AnalyticsadminPropertiesConversionEventsListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleAnalyticsAdminV1BetaListConversionEventsResponse,
    Properties.AnalyticsadminPropertiesConversionEventsListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1beta/properties/{propertiesId}/conversionEvents"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "propertiesId", value: request.propertiesId, schema: s.string() }],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaListConversionEventsResponseSchema },
        errorFactory: Properties.AnalyticsadminPropertiesConversionEventsListError,
      },
      options,
    );
  }

  /**
   * Patch conversionEvents
   *
   * @remarks
   * Deprecated: Use `UpdateKeyEvent` instead. Updates a conversion event with the specified
   * attributes.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesConversionEventsPatchError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   *
   * @deprecated
   */
  analyticsadminPropertiesConversionEventsPatch(
    request: Properties.AnalyticsadminPropertiesConversionEventsPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleAnalyticsAdminV1BetaConversionEvent,
    Properties.AnalyticsadminPropertiesConversionEventsPatchError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v1beta/properties/{propertiesId}/conversionEvents/{conversionEventsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "propertiesId", value: request.propertiesId, schema: s.string() },
          { name: "conversionEventsId", value: request.conversionEventsId, schema: s.string() },
        ],
        query: [{ name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleAnalyticsAdminV1BetaConversionEventSchema },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaConversionEventSchema },
        errorFactory: Properties.AnalyticsadminPropertiesConversionEventsPatchError,
      },
      options,
    );
  }

  /**
   * Create properties
   *
   * @remarks
   * Creates a Google Analytics property with the specified location and attributes.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesCreateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesCreate(
    request: Properties.AnalyticsadminPropertiesCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleAnalyticsAdminV1BetaProperty, Properties.AnalyticsadminPropertiesCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1beta/properties"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleAnalyticsAdminV1BetaPropertySchema },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaPropertySchema },
        errorFactory: Properties.AnalyticsadminPropertiesCreateError,
      },
      options,
    );
  }

  /**
   * Archive customDimensions
   *
   * @remarks
   * Archives a CustomDimension on a property.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesCustomDimensionsArchiveError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesCustomDimensionsArchive(
    request: Properties.AnalyticsadminPropertiesCustomDimensionsArchiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Properties.AnalyticsadminPropertiesCustomDimensionsArchiveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1beta/properties/{propertiesId}/customDimensions/{customDimensionsId}:archive",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "propertiesId", value: request.propertiesId, schema: s.string() },
          { name: "customDimensionsId", value: request.customDimensionsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Properties.AnalyticsadminPropertiesCustomDimensionsArchiveError,
      },
      options,
    );
  }

  /**
   * Create customDimensions
   *
   * @remarks
   * Creates a CustomDimension. Warning: It's not permissible to use this method to collect data on
   * individual users. In particular, sending user IDs in custom dimensions violates the Google
   * Analytics Terms of Service.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesCustomDimensionsCreateError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesCustomDimensionsCreate(
    request: Properties.AnalyticsadminPropertiesCustomDimensionsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleAnalyticsAdminV1BetaCustomDimension,
    Properties.AnalyticsadminPropertiesCustomDimensionsCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1beta/properties/{propertiesId}/customDimensions"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "propertiesId", value: request.propertiesId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleAnalyticsAdminV1BetaCustomDimensionSchema },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaCustomDimensionSchema },
        errorFactory: Properties.AnalyticsadminPropertiesCustomDimensionsCreateError,
      },
      options,
    );
  }

  /**
   * Get customDimensions
   *
   * @remarks
   * Lookup for a single CustomDimension.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesCustomDimensionsGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesCustomDimensionsGet(
    request: Properties.AnalyticsadminPropertiesCustomDimensionsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleAnalyticsAdminV1BetaCustomDimension,
    Properties.AnalyticsadminPropertiesCustomDimensionsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1beta/properties/{propertiesId}/customDimensions/{customDimensionsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "propertiesId", value: request.propertiesId, schema: s.string() },
          { name: "customDimensionsId", value: request.customDimensionsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaCustomDimensionSchema },
        errorFactory: Properties.AnalyticsadminPropertiesCustomDimensionsGetError,
      },
      options,
    );
  }

  /**
   * List customDimensions
   *
   * @remarks
   * Lists CustomDimensions on a property.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesCustomDimensionsListError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesCustomDimensionsList(
    request: Properties.AnalyticsadminPropertiesCustomDimensionsListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse,
    Properties.AnalyticsadminPropertiesCustomDimensionsListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1beta/properties/{propertiesId}/customDimensions"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "propertiesId", value: request.propertiesId, schema: s.string() }],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaListCustomDimensionsResponseSchema },
        errorFactory: Properties.AnalyticsadminPropertiesCustomDimensionsListError,
      },
      options,
    );
  }

  /**
   * Patch customDimensions
   *
   * @remarks
   * Updates a CustomDimension on a property.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesCustomDimensionsPatchError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesCustomDimensionsPatch(
    request: Properties.AnalyticsadminPropertiesCustomDimensionsPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleAnalyticsAdminV1BetaCustomDimension,
    Properties.AnalyticsadminPropertiesCustomDimensionsPatchError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v1beta/properties/{propertiesId}/customDimensions/{customDimensionsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "propertiesId", value: request.propertiesId, schema: s.string() },
          { name: "customDimensionsId", value: request.customDimensionsId, schema: s.string() },
        ],
        query: [{ name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleAnalyticsAdminV1BetaCustomDimensionSchema },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaCustomDimensionSchema },
        errorFactory: Properties.AnalyticsadminPropertiesCustomDimensionsPatchError,
      },
      options,
    );
  }

  /**
   * Archive customMetrics
   *
   * @remarks
   * Archives a CustomMetric on a property.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesCustomMetricsArchiveError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesCustomMetricsArchive(
    request: Properties.AnalyticsadminPropertiesCustomMetricsArchiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Properties.AnalyticsadminPropertiesCustomMetricsArchiveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1beta/properties/{propertiesId}/customMetrics/{customMetricsId}:archive",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "propertiesId", value: request.propertiesId, schema: s.string() },
          { name: "customMetricsId", value: request.customMetricsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Properties.AnalyticsadminPropertiesCustomMetricsArchiveError,
      },
      options,
    );
  }

  /**
   * Create customMetrics
   *
   * @remarks
   * Creates a CustomMetric.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesCustomMetricsCreateError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesCustomMetricsCreate(
    request: Properties.AnalyticsadminPropertiesCustomMetricsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleAnalyticsAdminV1BetaCustomMetric,
    Properties.AnalyticsadminPropertiesCustomMetricsCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1beta/properties/{propertiesId}/customMetrics"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "propertiesId", value: request.propertiesId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleAnalyticsAdminV1BetaCustomMetricSchema },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaCustomMetricSchema },
        errorFactory: Properties.AnalyticsadminPropertiesCustomMetricsCreateError,
      },
      options,
    );
  }

  /**
   * Get customMetrics
   *
   * @remarks
   * Lookup for a single CustomMetric.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesCustomMetricsGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesCustomMetricsGet(
    request: Properties.AnalyticsadminPropertiesCustomMetricsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleAnalyticsAdminV1BetaCustomMetric,
    Properties.AnalyticsadminPropertiesCustomMetricsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1beta/properties/{propertiesId}/customMetrics/{customMetricsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "propertiesId", value: request.propertiesId, schema: s.string() },
          { name: "customMetricsId", value: request.customMetricsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaCustomMetricSchema },
        errorFactory: Properties.AnalyticsadminPropertiesCustomMetricsGetError,
      },
      options,
    );
  }

  /**
   * List customMetrics
   *
   * @remarks
   * Lists CustomMetrics on a property.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesCustomMetricsListError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesCustomMetricsList(
    request: Properties.AnalyticsadminPropertiesCustomMetricsListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleAnalyticsAdminV1BetaListCustomMetricsResponse,
    Properties.AnalyticsadminPropertiesCustomMetricsListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1beta/properties/{propertiesId}/customMetrics"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "propertiesId", value: request.propertiesId, schema: s.string() }],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaListCustomMetricsResponseSchema },
        errorFactory: Properties.AnalyticsadminPropertiesCustomMetricsListError,
      },
      options,
    );
  }

  /**
   * Patch customMetrics
   *
   * @remarks
   * Updates a CustomMetric on a property.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesCustomMetricsPatchError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesCustomMetricsPatch(
    request: Properties.AnalyticsadminPropertiesCustomMetricsPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleAnalyticsAdminV1BetaCustomMetric,
    Properties.AnalyticsadminPropertiesCustomMetricsPatchError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v1beta/properties/{propertiesId}/customMetrics/{customMetricsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "propertiesId", value: request.propertiesId, schema: s.string() },
          { name: "customMetricsId", value: request.customMetricsId, schema: s.string() },
        ],
        query: [{ name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleAnalyticsAdminV1BetaCustomMetricSchema },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaCustomMetricSchema },
        errorFactory: Properties.AnalyticsadminPropertiesCustomMetricsPatchError,
      },
      options,
    );
  }

  /**
   * Create dataStreams
   *
   * @remarks
   * Creates a DataStream.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesDataStreamsCreateError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesDataStreamsCreate(
    request: Properties.AnalyticsadminPropertiesDataStreamsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleAnalyticsAdminV1BetaDataStream,
    Properties.AnalyticsadminPropertiesDataStreamsCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1beta/properties/{propertiesId}/dataStreams"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "propertiesId", value: request.propertiesId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleAnalyticsAdminV1BetaDataStreamSchema },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaDataStreamSchema },
        errorFactory: Properties.AnalyticsadminPropertiesDataStreamsCreateError,
      },
      options,
    );
  }

  /**
   * Delete dataStreams
   *
   * @remarks
   * Deletes a DataStream on a property.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesDataStreamsDeleteError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesDataStreamsDelete(
    request: Properties.AnalyticsadminPropertiesDataStreamsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Properties.AnalyticsadminPropertiesDataStreamsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "propertiesId", value: request.propertiesId, schema: s.string() },
          { name: "dataStreamsId", value: request.dataStreamsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Properties.AnalyticsadminPropertiesDataStreamsDeleteError,
      },
      options,
    );
  }

  /**
   * Get dataStreams
   *
   * @remarks
   * Lookup for a single DataStream.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesDataStreamsGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesDataStreamsGet(
    request: Properties.AnalyticsadminPropertiesDataStreamsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleAnalyticsAdminV1BetaDataStream,
    Properties.AnalyticsadminPropertiesDataStreamsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "propertiesId", value: request.propertiesId, schema: s.string() },
          { name: "dataStreamsId", value: request.dataStreamsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaDataStreamSchema },
        errorFactory: Properties.AnalyticsadminPropertiesDataStreamsGetError,
      },
      options,
    );
  }

  /**
   * List dataStreams
   *
   * @remarks
   * Lists DataStreams on a property.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesDataStreamsListError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesDataStreamsList(
    request: Properties.AnalyticsadminPropertiesDataStreamsListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleAnalyticsAdminV1BetaListDataStreamsResponse,
    Properties.AnalyticsadminPropertiesDataStreamsListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1beta/properties/{propertiesId}/dataStreams"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "propertiesId", value: request.propertiesId, schema: s.string() }],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaListDataStreamsResponseSchema },
        errorFactory: Properties.AnalyticsadminPropertiesDataStreamsListError,
      },
      options,
    );
  }

  /**
   * Create measurementProtocolSecrets
   *
   * @remarks
   * Creates a measurement protocol secret.
   *
   * @returns Successful response
   *
   * @throws {@link
   * Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate(
    request: Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret,
    Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}/measurementProtocolSecrets",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "propertiesId", value: request.propertiesId, schema: s.string() },
          { name: "dataStreamsId", value: request.dataStreamsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: googleAnalyticsAdminV1BetaMeasurementProtocolSecretSchema,
        },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaMeasurementProtocolSecretSchema },
        errorFactory: Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateError,
      },
      options,
    );
  }

  /**
   * Delete measurementProtocolSecrets
   *
   * @remarks
   * Deletes target MeasurementProtocolSecret.
   *
   * @returns Successful response
   *
   * @throws {@link
   * Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDelete(
    request: Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, unknown>,
    Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}/measurementProtocolSecrets/{measurementProtocolSecretsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "propertiesId", value: request.propertiesId, schema: s.string() },
          { name: "dataStreamsId", value: request.dataStreamsId, schema: s.string() },
          {
            name: "measurementProtocolSecretsId",
            value: request.measurementProtocolSecretsId,
            schema: s.string(),
          },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteError,
      },
      options,
    );
  }

  /**
   * Get measurementProtocolSecrets
   *
   * @remarks
   * Lookup for a single MeasurementProtocolSecret.
   *
   * @returns Successful response
   *
   * @throws {@link
   * Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGet(
    request: Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret,
    Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}/measurementProtocolSecrets/{measurementProtocolSecretsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "propertiesId", value: request.propertiesId, schema: s.string() },
          { name: "dataStreamsId", value: request.dataStreamsId, schema: s.string() },
          {
            name: "measurementProtocolSecretsId",
            value: request.measurementProtocolSecretsId,
            schema: s.string(),
          },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaMeasurementProtocolSecretSchema },
        errorFactory: Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetError,
      },
      options,
    );
  }

  /**
   * List measurementProtocolSecrets
   *
   * @remarks
   * Returns child MeasurementProtocolSecrets under the specified parent Property.
   *
   * @returns Successful response
   *
   * @throws {@link
   * Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList(
    request: Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse,
    Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}/measurementProtocolSecrets",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "propertiesId", value: request.propertiesId, schema: s.string() },
          { name: "dataStreamsId", value: request.dataStreamsId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: googleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponseSchema,
        },
        errorFactory: Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListError,
      },
      options,
    );
  }

  /**
   * Patch measurementProtocolSecrets
   *
   * @remarks
   * Updates a measurement protocol secret.
   *
   * @returns Successful response
   *
   * @throws {@link
   * Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatch(
    request: Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret,
    Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}/measurementProtocolSecrets/{measurementProtocolSecretsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "propertiesId", value: request.propertiesId, schema: s.string() },
          { name: "dataStreamsId", value: request.dataStreamsId, schema: s.string() },
          {
            name: "measurementProtocolSecretsId",
            value: request.measurementProtocolSecretsId,
            schema: s.string(),
          },
        ],
        query: [{ name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: googleAnalyticsAdminV1BetaMeasurementProtocolSecretSchema,
        },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaMeasurementProtocolSecretSchema },
        errorFactory: Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchError,
      },
      options,
    );
  }

  /**
   * Patch dataStreams
   *
   * @remarks
   * Updates a DataStream on a property.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesDataStreamsPatchError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesDataStreamsPatch(
    request: Properties.AnalyticsadminPropertiesDataStreamsPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleAnalyticsAdminV1BetaDataStream,
    Properties.AnalyticsadminPropertiesDataStreamsPatchError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "propertiesId", value: request.propertiesId, schema: s.string() },
          { name: "dataStreamsId", value: request.dataStreamsId, schema: s.string() },
        ],
        query: [{ name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleAnalyticsAdminV1BetaDataStreamSchema },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaDataStreamSchema },
        errorFactory: Properties.AnalyticsadminPropertiesDataStreamsPatchError,
      },
      options,
    );
  }

  /**
   * Delete properties
   *
   * @remarks
   * Marks target Property as soft-deleted (ie: "trashed") and returns it. This API does not have a
   * method to restore soft-deleted properties. However, they can be restored using the Trash Can
   * UI. If the properties are not restored before the expiration time, the Property and all child
   * resources (eg: GoogleAdsLinks, Streams, AccessBindings) will be permanently purged.
   * https://support.google.com/analytics/answer/6154772 Returns an error if the target is not
   * found.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesDeleteError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesDelete(
    request: Properties.AnalyticsadminPropertiesDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleAnalyticsAdminV1BetaProperty, Properties.AnalyticsadminPropertiesDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1beta/properties/{propertiesId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "propertiesId", value: request.propertiesId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaPropertySchema },
        errorFactory: Properties.AnalyticsadminPropertiesDeleteError,
      },
      options,
    );
  }

  /**
   * Create firebaseLinks
   *
   * @remarks
   * Creates a FirebaseLink. Properties can have at most one FirebaseLink.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesFirebaseLinksCreateError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesFirebaseLinksCreate(
    request: Properties.AnalyticsadminPropertiesFirebaseLinksCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleAnalyticsAdminV1BetaFirebaseLink,
    Properties.AnalyticsadminPropertiesFirebaseLinksCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1beta/properties/{propertiesId}/firebaseLinks"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "propertiesId", value: request.propertiesId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleAnalyticsAdminV1BetaFirebaseLinkSchema },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaFirebaseLinkSchema },
        errorFactory: Properties.AnalyticsadminPropertiesFirebaseLinksCreateError,
      },
      options,
    );
  }

  /**
   * Delete firebaseLinks
   *
   * @remarks
   * Deletes a FirebaseLink on a property
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesFirebaseLinksDeleteError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesFirebaseLinksDelete(
    request: Properties.AnalyticsadminPropertiesFirebaseLinksDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Properties.AnalyticsadminPropertiesFirebaseLinksDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1beta/properties/{propertiesId}/firebaseLinks/{firebaseLinksId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "propertiesId", value: request.propertiesId, schema: s.string() },
          { name: "firebaseLinksId", value: request.firebaseLinksId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Properties.AnalyticsadminPropertiesFirebaseLinksDeleteError,
      },
      options,
    );
  }

  /**
   * List firebaseLinks
   *
   * @remarks
   * Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesFirebaseLinksListError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesFirebaseLinksList(
    request: Properties.AnalyticsadminPropertiesFirebaseLinksListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse,
    Properties.AnalyticsadminPropertiesFirebaseLinksListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1beta/properties/{propertiesId}/firebaseLinks"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "propertiesId", value: request.propertiesId, schema: s.string() }],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaListFirebaseLinksResponseSchema },
        errorFactory: Properties.AnalyticsadminPropertiesFirebaseLinksListError,
      },
      options,
    );
  }

  /**
   * Get properties
   *
   * @remarks
   * Lookup for a single GA Property.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesGet(
    request: Properties.AnalyticsadminPropertiesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleAnalyticsAdminV1BetaProperty, Properties.AnalyticsadminPropertiesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1beta/properties/{propertiesId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "propertiesId", value: request.propertiesId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaPropertySchema },
        errorFactory: Properties.AnalyticsadminPropertiesGetError,
      },
      options,
    );
  }

  /**
   * Get data retention settings properties
   *
   * @remarks
   * Returns the singleton data retention settings for this property.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesGetDataRetentionSettingsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesGetDataRetentionSettings(
    request: Properties.AnalyticsadminPropertiesGetDataRetentionSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleAnalyticsAdminV1BetaDataRetentionSettings,
    Properties.AnalyticsadminPropertiesGetDataRetentionSettingsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1beta/properties/{propertiesId}/dataRetentionSettings"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "propertiesId", value: request.propertiesId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaDataRetentionSettingsSchema },
        errorFactory: Properties.AnalyticsadminPropertiesGetDataRetentionSettingsError,
      },
      options,
    );
  }

  /**
   * Create googleAdsLinks
   *
   * @remarks
   * Creates a GoogleAdsLink.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesGoogleAdsLinksCreateError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesGoogleAdsLinksCreate(
    request: Properties.AnalyticsadminPropertiesGoogleAdsLinksCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleAnalyticsAdminV1BetaGoogleAdsLink,
    Properties.AnalyticsadminPropertiesGoogleAdsLinksCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1beta/properties/{propertiesId}/googleAdsLinks"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "propertiesId", value: request.propertiesId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleAnalyticsAdminV1BetaGoogleAdsLinkSchema },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaGoogleAdsLinkSchema },
        errorFactory: Properties.AnalyticsadminPropertiesGoogleAdsLinksCreateError,
      },
      options,
    );
  }

  /**
   * Delete googleAdsLinks
   *
   * @remarks
   * Deletes a GoogleAdsLink on a property
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesGoogleAdsLinksDeleteError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesGoogleAdsLinksDelete(
    request: Properties.AnalyticsadminPropertiesGoogleAdsLinksDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Properties.AnalyticsadminPropertiesGoogleAdsLinksDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1beta/properties/{propertiesId}/googleAdsLinks/{googleAdsLinksId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "propertiesId", value: request.propertiesId, schema: s.string() },
          { name: "googleAdsLinksId", value: request.googleAdsLinksId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Properties.AnalyticsadminPropertiesGoogleAdsLinksDeleteError,
      },
      options,
    );
  }

  /**
   * List googleAdsLinks
   *
   * @remarks
   * Lists GoogleAdsLinks on a property.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesGoogleAdsLinksListError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesGoogleAdsLinksList(
    request: Properties.AnalyticsadminPropertiesGoogleAdsLinksListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse,
    Properties.AnalyticsadminPropertiesGoogleAdsLinksListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1beta/properties/{propertiesId}/googleAdsLinks"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "propertiesId", value: request.propertiesId, schema: s.string() }],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaListGoogleAdsLinksResponseSchema },
        errorFactory: Properties.AnalyticsadminPropertiesGoogleAdsLinksListError,
      },
      options,
    );
  }

  /**
   * Patch googleAdsLinks
   *
   * @remarks
   * Updates a GoogleAdsLink on a property
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesGoogleAdsLinksPatchError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesGoogleAdsLinksPatch(
    request: Properties.AnalyticsadminPropertiesGoogleAdsLinksPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleAnalyticsAdminV1BetaGoogleAdsLink,
    Properties.AnalyticsadminPropertiesGoogleAdsLinksPatchError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v1beta/properties/{propertiesId}/googleAdsLinks/{googleAdsLinksId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "propertiesId", value: request.propertiesId, schema: s.string() },
          { name: "googleAdsLinksId", value: request.googleAdsLinksId, schema: s.string() },
        ],
        query: [{ name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleAnalyticsAdminV1BetaGoogleAdsLinkSchema },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaGoogleAdsLinkSchema },
        errorFactory: Properties.AnalyticsadminPropertiesGoogleAdsLinksPatchError,
      },
      options,
    );
  }

  /**
   * Create keyEvents
   *
   * @remarks
   * Creates a Key Event.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesKeyEventsCreateError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesKeyEventsCreate(
    request: Properties.AnalyticsadminPropertiesKeyEventsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleAnalyticsAdminV1BetaKeyEvent, Properties.AnalyticsadminPropertiesKeyEventsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1beta/properties/{propertiesId}/keyEvents"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "propertiesId", value: request.propertiesId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleAnalyticsAdminV1BetaKeyEventSchema },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaKeyEventSchema },
        errorFactory: Properties.AnalyticsadminPropertiesKeyEventsCreateError,
      },
      options,
    );
  }

  /**
   * Delete keyEvents
   *
   * @remarks
   * Deletes a Key Event.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesKeyEventsDeleteError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesKeyEventsDelete(
    request: Properties.AnalyticsadminPropertiesKeyEventsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Properties.AnalyticsadminPropertiesKeyEventsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1beta/properties/{propertiesId}/keyEvents/{keyEventsId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "propertiesId", value: request.propertiesId, schema: s.string() },
          { name: "keyEventsId", value: request.keyEventsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Properties.AnalyticsadminPropertiesKeyEventsDeleteError,
      },
      options,
    );
  }

  /**
   * Get keyEvents
   *
   * @remarks
   * Retrieves a single Key Event.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesKeyEventsGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesKeyEventsGet(
    request: Properties.AnalyticsadminPropertiesKeyEventsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleAnalyticsAdminV1BetaKeyEvent, Properties.AnalyticsadminPropertiesKeyEventsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1beta/properties/{propertiesId}/keyEvents/{keyEventsId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "propertiesId", value: request.propertiesId, schema: s.string() },
          { name: "keyEventsId", value: request.keyEventsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaKeyEventSchema },
        errorFactory: Properties.AnalyticsadminPropertiesKeyEventsGetError,
      },
      options,
    );
  }

  /**
   * List keyEvents
   *
   * @remarks
   * Returns a list of Key Events in the specified parent property. Returns an empty list if no Key
   * Events are found.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesKeyEventsListError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesKeyEventsList(
    request: Properties.AnalyticsadminPropertiesKeyEventsListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleAnalyticsAdminV1BetaListKeyEventsResponse,
    Properties.AnalyticsadminPropertiesKeyEventsListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1beta/properties/{propertiesId}/keyEvents"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "propertiesId", value: request.propertiesId, schema: s.string() }],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaListKeyEventsResponseSchema },
        errorFactory: Properties.AnalyticsadminPropertiesKeyEventsListError,
      },
      options,
    );
  }

  /**
   * Patch keyEvents
   *
   * @remarks
   * Updates a Key Event.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesKeyEventsPatchError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesKeyEventsPatch(
    request: Properties.AnalyticsadminPropertiesKeyEventsPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleAnalyticsAdminV1BetaKeyEvent, Properties.AnalyticsadminPropertiesKeyEventsPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v1beta/properties/{propertiesId}/keyEvents/{keyEventsId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "propertiesId", value: request.propertiesId, schema: s.string() },
          { name: "keyEventsId", value: request.keyEventsId, schema: s.string() },
        ],
        query: [{ name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleAnalyticsAdminV1BetaKeyEventSchema },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaKeyEventSchema },
        errorFactory: Properties.AnalyticsadminPropertiesKeyEventsPatchError,
      },
      options,
    );
  }

  /**
   * List properties
   *
   * @remarks
   * Returns child Properties under the specified parent Account. Properties will be excluded if the
   * caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default.
   * Returns an empty list if no relevant properties are found.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesList(
    request: Properties.AnalyticsadminPropertiesListRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    GoogleAnalyticsAdminV1BetaListPropertiesResponse,
    Properties.AnalyticsadminPropertiesListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1beta/properties"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "showDeleted", value: request.showDeleted, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaListPropertiesResponseSchema },
        errorFactory: Properties.AnalyticsadminPropertiesListError,
      },
      options,
    );
  }

  /**
   * Patch properties
   *
   * @remarks
   * Updates a property.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesPatchError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesPatch(
    request: Properties.AnalyticsadminPropertiesPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleAnalyticsAdminV1BetaProperty, Properties.AnalyticsadminPropertiesPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v1beta/properties/{propertiesId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "propertiesId", value: request.propertiesId, schema: s.string() }],
        query: [{ name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleAnalyticsAdminV1BetaPropertySchema },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaPropertySchema },
        errorFactory: Properties.AnalyticsadminPropertiesPatchError,
      },
      options,
    );
  }

  /**
   * Run access report properties
   *
   * @remarks
   * Returns a customized report of data access records. The report provides records of each time a
   * user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data
   * Access Reports can be requested for a property. Reports may be requested for any property, but
   * dimensions that aren't related to quota can only be requested on Google Analytics 360
   * properties. This method is only available to Administrators. These data access records include
   * GA UI Reporting, GA UI Explorations, GA Data API, and other products like Firebase & Admob that
   * can retrieve data from Google Analytics through a linkage. These records don't include property
   * configuration changes like adding a stream or changing a property's time zone. For
   * configuration change history, see searchChangeHistoryEvents. To give your feedback on this API,
   * complete the Google Analytics Access Reports feedback form.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesRunAccessReportError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesRunAccessReport(
    request: Properties.AnalyticsadminPropertiesRunAccessReportRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleAnalyticsAdminV1BetaRunAccessReportResponse,
    Properties.AnalyticsadminPropertiesRunAccessReportError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1beta/properties/{propertiesId}:runAccessReport"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "propertiesId", value: request.propertiesId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: googleAnalyticsAdminV1BetaRunAccessReportRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaRunAccessReportResponseSchema },
        errorFactory: Properties.AnalyticsadminPropertiesRunAccessReportError,
      },
      options,
    );
  }

  /**
   * Update data retention settings properties
   *
   * @remarks
   * Updates the singleton data retention settings for this property.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsadminPropertiesUpdateDataRetentionSettingsError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminPropertiesUpdateDataRetentionSettings(
    request: Properties.AnalyticsadminPropertiesUpdateDataRetentionSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleAnalyticsAdminV1BetaDataRetentionSettings,
    Properties.AnalyticsadminPropertiesUpdateDataRetentionSettingsError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v1beta/properties/{propertiesId}/dataRetentionSettings"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "propertiesId", value: request.propertiesId, schema: s.string() }],
        query: [{ name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: googleAnalyticsAdminV1BetaDataRetentionSettingsSchema,
        },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaDataRetentionSettingsSchema },
        errorFactory: Properties.AnalyticsadminPropertiesUpdateDataRetentionSettingsError,
      },
      options,
    );
  }

  /**
   * Create audienceExports
   *
   * @remarks
   * Creates an audience export for later retrieval. This method quickly returns the audience
   * export's resource name and initiates a long running asynchronous request to form an audience
   * export. To export the users in an audience export, first create the audience export through
   * this method and then send the audience resource name to the `QueryAudienceExport` method. See
   * Creating an Audience Export for an introduction to Audience Exports with examples. An audience
   * export is a snapshot of the users currently in the audience at the time of audience export
   * creation. Creating audience exports for one audience on different days will return different
   * results as users enter and exit the audience. Audiences in Google Analytics 4 allow you to
   * segment your users in the ways that are important to your business. To learn more, see
   * https://support.google.com/analytics/answer/9267572. Audience exports contain the users in each
   * audience. Audience Export APIs have some methods at alpha and other methods at beta stability.
   * The intention is to advance methods to beta stability after some feedback and adoption. To give
   * your feedback on this API, complete the Google Analytics Audience Export API Feedback form.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsdataPropertiesAudienceExportsCreateError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsdataPropertiesAudienceExportsCreate(
    request: Properties.AnalyticsdataPropertiesAudienceExportsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    OperationGoogleAnalyticsPropertiesApi,
    Properties.AnalyticsdataPropertiesAudienceExportsCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1beta/properties/{propertiesId}/audienceExports"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "propertiesId", value: request.propertiesId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: audienceExportSchema },
      },
      {
        success: { kind: "json", schema: operationGoogleAnalyticsPropertiesApiSchema },
        errorFactory: Properties.AnalyticsdataPropertiesAudienceExportsCreateError,
      },
      options,
    );
  }

  /**
   * Get audienceExports
   *
   * @remarks
   * Gets configuration metadata about a specific audience export. This method can be used to
   * understand an audience export after it has been created. See Creating an Audience Export for an
   * introduction to Audience Exports with examples. Audience Export APIs have some methods at alpha
   * and other methods at beta stability. The intention is to advance methods to beta stability
   * after some feedback and adoption. To give your feedback on this API, complete the Google
   * Analytics Audience Export API Feedback form.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsdataPropertiesAudienceExportsGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsdataPropertiesAudienceExportsGet(
    request: Properties.AnalyticsdataPropertiesAudienceExportsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<AudienceExport, Properties.AnalyticsdataPropertiesAudienceExportsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1beta/properties/{propertiesId}/audienceExports/{audienceExportsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "propertiesId", value: request.propertiesId, schema: s.string() },
          { name: "audienceExportsId", value: request.audienceExportsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: audienceExportSchema },
        errorFactory: Properties.AnalyticsdataPropertiesAudienceExportsGetError,
      },
      options,
    );
  }

  /**
   * List audienceExports
   *
   * @remarks
   * Lists all audience exports for a property. This method can be used for you to find and reuse
   * existing audience exports rather than creating unnecessary new audience exports. The same
   * audience can have multiple audience exports that represent the export of users that were in an
   * audience on different days. See Creating an Audience Export for an introduction to Audience
   * Exports with examples. Audience Export APIs have some methods at alpha and other methods at
   * beta stability. The intention is to advance methods to beta stability after some feedback and
   * adoption. To give your feedback on this API, complete the Google Analytics Audience Export API
   * Feedback form.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsdataPropertiesAudienceExportsListError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsdataPropertiesAudienceExportsList(
    request: Properties.AnalyticsdataPropertiesAudienceExportsListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListAudienceExportsResponse, Properties.AnalyticsdataPropertiesAudienceExportsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1beta/properties/{propertiesId}/audienceExports"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "propertiesId", value: request.propertiesId, schema: s.string() }],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listAudienceExportsResponseSchema },
        errorFactory: Properties.AnalyticsdataPropertiesAudienceExportsListError,
      },
      options,
    );
  }

  /**
   * Query audienceExports
   *
   * @remarks
   * Retrieves an audience export of users. After creating an audience, the users are not
   * immediately available for exporting. First, a request to `CreateAudienceExport` is necessary to
   * create an audience export of users, and then second, this method is used to retrieve the users
   * in the audience export. See Creating an Audience Export for an introduction to Audience Exports
   * with examples. Audiences in Google Analytics 4 allow you to segment your users in the ways that
   * are important to your business. To learn more, see
   * https://support.google.com/analytics/answer/9267572. Audience Export APIs have some methods at
   * alpha and other methods at beta stability. The intention is to advance methods to beta
   * stability after some feedback and adoption. To give your feedback on this API, complete the
   * Google Analytics Audience Export API Feedback form.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsdataPropertiesAudienceExportsQueryError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsdataPropertiesAudienceExportsQuery(
    request: Properties.AnalyticsdataPropertiesAudienceExportsQueryRequest,
    options?: RequestOptions,
  ): ApiPromise<QueryAudienceExportResponse, Properties.AnalyticsdataPropertiesAudienceExportsQueryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1beta/properties/{propertiesId}/audienceExports/{audienceExportsId}:query",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "propertiesId", value: request.propertiesId, schema: s.string() },
          { name: "audienceExportsId", value: request.audienceExportsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: queryAudienceExportRequestSchema },
      },
      {
        success: { kind: "json", schema: queryAudienceExportResponseSchema },
        errorFactory: Properties.AnalyticsdataPropertiesAudienceExportsQueryError,
      },
      options,
    );
  }

  /**
   * Batch run pivot reports properties
   *
   * @remarks
   * Returns multiple pivot reports in a batch. All reports must be for the same Google Analytics
   * property.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsdataPropertiesBatchRunPivotReportsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsdataPropertiesBatchRunPivotReports(
    request: Properties.AnalyticsdataPropertiesBatchRunPivotReportsRequest,
    options?: RequestOptions,
  ): ApiPromise<BatchRunPivotReportsResponse, Properties.AnalyticsdataPropertiesBatchRunPivotReportsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1beta/properties/{propertiesId}:batchRunPivotReports"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "propertiesId", value: request.propertiesId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: batchRunPivotReportsRequestSchema },
      },
      {
        success: { kind: "json", schema: batchRunPivotReportsResponseSchema },
        errorFactory: Properties.AnalyticsdataPropertiesBatchRunPivotReportsError,
      },
      options,
    );
  }

  /**
   * Batch run reports properties
   *
   * @remarks
   * Returns multiple reports in a batch. All reports must be for the same Google Analytics
   * property.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsdataPropertiesBatchRunReportsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsdataPropertiesBatchRunReports(
    request: Properties.AnalyticsdataPropertiesBatchRunReportsRequest,
    options?: RequestOptions,
  ): ApiPromise<BatchRunReportsResponse, Properties.AnalyticsdataPropertiesBatchRunReportsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1beta/properties/{propertiesId}:batchRunReports"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "propertiesId", value: request.propertiesId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: batchRunReportsRequestSchema },
      },
      {
        success: { kind: "json", schema: batchRunReportsResponseSchema },
        errorFactory: Properties.AnalyticsdataPropertiesBatchRunReportsError,
      },
      options,
    );
  }

  /**
   * Check compatibility properties
   *
   * @remarks
   * This compatibility method lists dimensions and metrics that can be added to a report request
   * and maintain compatibility. This method fails if the request's dimensions and metrics are
   * incompatible. In Google Analytics, reports fail if they request incompatible dimensions and/or
   * metrics; in that case, you will need to remove dimensions and/or metrics from the incompatible
   * report until the report is compatible. The Realtime and Core reports have different
   * compatibility rules. This method checks compatibility for Core reports.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsdataPropertiesCheckCompatibilityError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsdataPropertiesCheckCompatibility(
    request: Properties.AnalyticsdataPropertiesCheckCompatibilityRequest,
    options?: RequestOptions,
  ): ApiPromise<CheckCompatibilityResponse, Properties.AnalyticsdataPropertiesCheckCompatibilityError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1beta/properties/{propertiesId}:checkCompatibility"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "propertiesId", value: request.propertiesId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: checkCompatibilityRequestSchema },
      },
      {
        success: { kind: "json", schema: checkCompatibilityResponseSchema },
        errorFactory: Properties.AnalyticsdataPropertiesCheckCompatibilityError,
      },
      options,
    );
  }

  /**
   * Get metadata properties
   *
   * @remarks
   * Returns metadata for dimensions and metrics available in reporting methods. Used to explore the
   * dimensions and metrics. In this method, a Google Analytics property identifier is specified in
   * the request, and the metadata response includes Custom dimensions and metrics as well as
   * Universal metadata. For example if a custom metric with parameter name `levels_unlocked` is
   * registered to a property, the Metadata response will contain `customEvent:levels_unlocked`.
   * Universal metadata are dimensions and metrics applicable to any property such as `country` and
   * `totalUsers`.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsdataPropertiesGetMetadataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsdataPropertiesGetMetadata(
    request: Properties.AnalyticsdataPropertiesGetMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<Metadata, Properties.AnalyticsdataPropertiesGetMetadataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1beta/properties/{propertiesId}/metadata"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "propertiesId", value: request.propertiesId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: metadataSchema },
        errorFactory: Properties.AnalyticsdataPropertiesGetMetadataError,
      },
      options,
    );
  }

  /**
   * Run pivot report properties
   *
   * @remarks
   * Returns a customized pivot report of your Google Analytics event data. Pivot reports are more
   * advanced and expressive formats than regular reports. In a pivot report, dimensions are only
   * visible if they are included in a pivot. Multiple pivots can be specified to further dissect
   * your data.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsdataPropertiesRunPivotReportError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsdataPropertiesRunPivotReport(
    request: Properties.AnalyticsdataPropertiesRunPivotReportRequest,
    options?: RequestOptions,
  ): ApiPromise<RunPivotReportResponse, Properties.AnalyticsdataPropertiesRunPivotReportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1beta/properties/{propertiesId}:runPivotReport"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "propertiesId", value: request.propertiesId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: runPivotReportRequestSchema },
      },
      {
        success: { kind: "json", schema: runPivotReportResponseSchema },
        errorFactory: Properties.AnalyticsdataPropertiesRunPivotReportError,
      },
      options,
    );
  }

  /**
   * Run realtime report properties
   *
   * @remarks
   * Returns a customized report of realtime event data for your property. Events appear in realtime
   * reports seconds after they have been sent to the Google Analytics. Realtime reports show events
   * and usage data for the periods of time ranging from the present moment to 30 minutes ago (up to
   * 60 minutes for Google Analytics 360 properties). For a guide to constructing realtime requests
   * & understanding responses, see Creating a Realtime Report.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsdataPropertiesRunRealtimeReportError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsdataPropertiesRunRealtimeReport(
    request: Properties.AnalyticsdataPropertiesRunRealtimeReportRequest,
    options?: RequestOptions,
  ): ApiPromise<RunRealtimeReportResponse, Properties.AnalyticsdataPropertiesRunRealtimeReportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1beta/properties/{propertiesId}:runRealtimeReport"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "propertiesId", value: request.propertiesId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: runRealtimeReportRequestSchema },
      },
      {
        success: { kind: "json", schema: runRealtimeReportResponseSchema },
        errorFactory: Properties.AnalyticsdataPropertiesRunRealtimeReportError,
      },
      options,
    );
  }

  /**
   * Run report properties
   *
   * @remarks
   * Returns a customized report of your Google Analytics event data. Reports contain statistics
   * derived from data collected by the Google Analytics tracking code. The data returned from the
   * API is as a table with columns for the requested dimensions and metrics. Metrics are individual
   * measurements of user activity on your property, such as active users or event count. Dimensions
   * break down metrics across some common criteria, such as country or event name. For a guide to
   * constructing requests & understanding responses, see Creating a Report.
   *
   * @returns Successful response
   *
   * @throws {@link Properties.AnalyticsdataPropertiesRunReportError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsdataPropertiesRunReport(
    request: Properties.AnalyticsdataPropertiesRunReportRequest,
    options?: RequestOptions,
  ): ApiPromise<RunReportResponse, Properties.AnalyticsdataPropertiesRunReportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1beta/properties/{propertiesId}:runReport"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "propertiesId", value: request.propertiesId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: runReportRequestSchema },
      },
      {
        success: { kind: "json", schema: runReportResponseSchema },
        errorFactory: Properties.AnalyticsdataPropertiesRunReportError,
      },
      options,
    );
  }
}

export namespace Properties {
  export type AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    body: GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequest;
  };

  export class AnalyticsadminPropertiesAcknowledgeUserDataCollectionError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesAcknowledgeUserDataCollectionError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesConversionEventsCreateRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    body: GoogleAnalyticsAdminV1BetaConversionEvent;
  };

  export class AnalyticsadminPropertiesConversionEventsCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesConversionEventsCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesConversionEventsDeleteRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    /** Resource name segment (conversionEventsId). */
    conversionEventsId: string;
  };

  export class AnalyticsadminPropertiesConversionEventsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesConversionEventsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesConversionEventsGetRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    /** Resource name segment (conversionEventsId). */
    conversionEventsId: string;
  };

  export class AnalyticsadminPropertiesConversionEventsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesConversionEventsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesConversionEventsListRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    /**
     * Optional. The maximum number of resources to return. If unspecified, at most 50 resources
     * will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListConversionEvents` call. Provide this to
     * retrieve the subsequent page. When paginating, all other parameters provided to
     * `ListConversionEvents` must match the call that provided the page token.
     */
    pageToken?: string;
  };

  export class AnalyticsadminPropertiesConversionEventsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesConversionEventsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesConversionEventsPatchRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    /** Resource name segment (conversionEventsId). */
    conversionEventsId: string;
    /**
     * Required. The list of fields to be updated. Field names must be in snake case (e.g.,
     * "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one
     * path with the string "*" to match all fields.
     */
    updateMask?: string;
    body: GoogleAnalyticsAdminV1BetaConversionEvent;
  };

  export class AnalyticsadminPropertiesConversionEventsPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesConversionEventsPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesCreateRequest = {
    body: GoogleAnalyticsAdminV1BetaProperty;
  };

  export class AnalyticsadminPropertiesCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesCustomDimensionsArchiveRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    /** Resource name segment (customDimensionsId). */
    customDimensionsId: string;
    body: Record<string, unknown>;
  };

  export class AnalyticsadminPropertiesCustomDimensionsArchiveError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesCustomDimensionsArchiveError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesCustomDimensionsCreateRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    body: GoogleAnalyticsAdminV1BetaCustomDimension;
  };

  export class AnalyticsadminPropertiesCustomDimensionsCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesCustomDimensionsCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesCustomDimensionsGetRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    /** Resource name segment (customDimensionsId). */
    customDimensionsId: string;
  };

  export class AnalyticsadminPropertiesCustomDimensionsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesCustomDimensionsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesCustomDimensionsListRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    /**
     * Optional. The maximum number of resources to return. If unspecified, at most 50 resources
     * will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListCustomDimensions` call. Provide this to
     * retrieve the subsequent page. When paginating, all other parameters provided to
     * `ListCustomDimensions` must match the call that provided the page token.
     */
    pageToken?: string;
  };

  export class AnalyticsadminPropertiesCustomDimensionsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesCustomDimensionsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesCustomDimensionsPatchRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    /** Resource name segment (customDimensionsId). */
    customDimensionsId: string;
    /**
     * Required. The list of fields to be updated. Omitted fields will not be updated. To replace
     * the entire entity, use one path with the string "*" to match all fields.
     */
    updateMask?: string;
    body: GoogleAnalyticsAdminV1BetaCustomDimension;
  };

  export class AnalyticsadminPropertiesCustomDimensionsPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesCustomDimensionsPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesCustomMetricsArchiveRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    /** Resource name segment (customMetricsId). */
    customMetricsId: string;
    body: Record<string, unknown>;
  };

  export class AnalyticsadminPropertiesCustomMetricsArchiveError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesCustomMetricsArchiveError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesCustomMetricsCreateRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    body: GoogleAnalyticsAdminV1BetaCustomMetric;
  };

  export class AnalyticsadminPropertiesCustomMetricsCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesCustomMetricsCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesCustomMetricsGetRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    /** Resource name segment (customMetricsId). */
    customMetricsId: string;
  };

  export class AnalyticsadminPropertiesCustomMetricsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesCustomMetricsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesCustomMetricsListRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    /**
     * The maximum number of resources to return. If unspecified, at most 50 resources will be
     * returned. The maximum value is 200 (higher values will be coerced to the maximum).
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListCustomMetrics` call. Provide this to retrieve the
     * subsequent page. When paginating, all other parameters provided to `ListCustomMetrics` must
     * match the call that provided the page token.
     */
    pageToken?: string;
  };

  export class AnalyticsadminPropertiesCustomMetricsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesCustomMetricsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesCustomMetricsPatchRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    /** Resource name segment (customMetricsId). */
    customMetricsId: string;
    /**
     * Required. The list of fields to be updated. Omitted fields will not be updated. To replace
     * the entire entity, use one path with the string "*" to match all fields.
     */
    updateMask?: string;
    body: GoogleAnalyticsAdminV1BetaCustomMetric;
  };

  export class AnalyticsadminPropertiesCustomMetricsPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesCustomMetricsPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesDataStreamsCreateRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    body: GoogleAnalyticsAdminV1BetaDataStream;
  };

  export class AnalyticsadminPropertiesDataStreamsCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesDataStreamsCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesDataStreamsDeleteRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    /** Resource name segment (dataStreamsId). */
    dataStreamsId: string;
  };

  export class AnalyticsadminPropertiesDataStreamsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesDataStreamsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesDataStreamsGetRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    /** Resource name segment (dataStreamsId). */
    dataStreamsId: string;
  };

  export class AnalyticsadminPropertiesDataStreamsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesDataStreamsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesDataStreamsListRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    /**
     * The maximum number of resources to return. If unspecified, at most 50 resources will be
     * returned. The maximum value is 200 (higher values will be coerced to the maximum).
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListDataStreams` call. Provide this to retrieve the
     * subsequent page. When paginating, all other parameters provided to `ListDataStreams` must
     * match the call that provided the page token.
     */
    pageToken?: string;
  };

  export class AnalyticsadminPropertiesDataStreamsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesDataStreamsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    /** Resource name segment (dataStreamsId). */
    dataStreamsId: string;
    body: GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret;
  };

  export class AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    /** Resource name segment (dataStreamsId). */
    dataStreamsId: string;
    /** Resource name segment (measurementProtocolSecretsId). */
    measurementProtocolSecretsId: string;
  };

  export class AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    /** Resource name segment (dataStreamsId). */
    dataStreamsId: string;
    /** Resource name segment (measurementProtocolSecretsId). */
    measurementProtocolSecretsId: string;
  };

  export class AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    /** Resource name segment (dataStreamsId). */
    dataStreamsId: string;
    /**
     * Optional. The maximum number of resources to return. If unspecified, at most 10 resources
     * will be returned. The maximum value is 10. Higher values will be coerced to the maximum.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListMeasurementProtocolSecrets` call.
     * Provide this to retrieve the subsequent page. When paginating, all other parameters provided
     * to `ListMeasurementProtocolSecrets` must match the call that provided the page token.
     */
    pageToken?: string;
  };

  export class AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    /** Resource name segment (dataStreamsId). */
    dataStreamsId: string;
    /** Resource name segment (measurementProtocolSecretsId). */
    measurementProtocolSecretsId: string;
    /** Required. The list of fields to be updated. Omitted fields will not be updated. */
    updateMask?: string;
    body: GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret;
  };

  export class AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type AnalyticsadminPropertiesDataStreamsPatchRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    /** Resource name segment (dataStreamsId). */
    dataStreamsId: string;
    /**
     * Required. The list of fields to be updated. Omitted fields will not be updated. To replace
     * the entire entity, use one path with the string "*" to match all fields.
     */
    updateMask?: string;
    body: GoogleAnalyticsAdminV1BetaDataStream;
  };

  export class AnalyticsadminPropertiesDataStreamsPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesDataStreamsPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesDeleteRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
  };

  export class AnalyticsadminPropertiesDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesFirebaseLinksCreateRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    body: GoogleAnalyticsAdminV1BetaFirebaseLink;
  };

  export class AnalyticsadminPropertiesFirebaseLinksCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesFirebaseLinksCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesFirebaseLinksDeleteRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    /** Resource name segment (firebaseLinksId). */
    firebaseLinksId: string;
  };

  export class AnalyticsadminPropertiesFirebaseLinksDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesFirebaseLinksDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesFirebaseLinksListRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    /**
     * Optional. The maximum number of resources to return. The service may return fewer than this
     * value, even if there are additional pages. If unspecified, at most 50 resources will be
     * returned. The maximum value is 200; (higher values will be coerced to the maximum)
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListFirebaseLinks` call. Provide this to
     * retrieve the subsequent page. When paginating, all other parameters provided to
     * `ListFirebaseLinks` must match the call that provided the page token.
     */
    pageToken?: string;
  };

  export class AnalyticsadminPropertiesFirebaseLinksListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesFirebaseLinksListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesGetRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
  };

  export class AnalyticsadminPropertiesGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesGetDataRetentionSettingsRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
  };

  export class AnalyticsadminPropertiesGetDataRetentionSettingsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesGetDataRetentionSettingsError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesGoogleAdsLinksCreateRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    body: GoogleAnalyticsAdminV1BetaGoogleAdsLink;
  };

  export class AnalyticsadminPropertiesGoogleAdsLinksCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesGoogleAdsLinksCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesGoogleAdsLinksDeleteRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    /** Resource name segment (googleAdsLinksId). */
    googleAdsLinksId: string;
  };

  export class AnalyticsadminPropertiesGoogleAdsLinksDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesGoogleAdsLinksDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesGoogleAdsLinksListRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    /**
     * Optional. The maximum number of resources to return. If unspecified, at most 50 resources
     * will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListGoogleAdsLinks` call. Provide this to
     * retrieve the subsequent page. When paginating, all other parameters provided to
     * `ListGoogleAdsLinks` must match the call that provided the page token.
     */
    pageToken?: string;
  };

  export class AnalyticsadminPropertiesGoogleAdsLinksListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesGoogleAdsLinksListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesGoogleAdsLinksPatchRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    /** Resource name segment (googleAdsLinksId). */
    googleAdsLinksId: string;
    /**
     * Required. The list of fields to be updated. Field names must be in snake case (e.g.,
     * "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one
     * path with the string "*" to match all fields.
     */
    updateMask?: string;
    body: GoogleAnalyticsAdminV1BetaGoogleAdsLink;
  };

  export class AnalyticsadminPropertiesGoogleAdsLinksPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesGoogleAdsLinksPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesKeyEventsCreateRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    body: GoogleAnalyticsAdminV1BetaKeyEvent;
  };

  export class AnalyticsadminPropertiesKeyEventsCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesKeyEventsCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesKeyEventsDeleteRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    /** Resource name segment (keyEventsId). */
    keyEventsId: string;
  };

  export class AnalyticsadminPropertiesKeyEventsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesKeyEventsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesKeyEventsGetRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    /** Resource name segment (keyEventsId). */
    keyEventsId: string;
  };

  export class AnalyticsadminPropertiesKeyEventsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesKeyEventsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesKeyEventsListRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    /**
     * Optional. The maximum number of resources to return. If unspecified, at most 50 resources
     * will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListKeyEvents` call. Provide this to
     * retrieve the subsequent page. When paginating, all other parameters provided to
     * `ListKeyEvents` must match the call that provided the page token.
     */
    pageToken?: string;
  };

  export class AnalyticsadminPropertiesKeyEventsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesKeyEventsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesKeyEventsPatchRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    /** Resource name segment (keyEventsId). */
    keyEventsId: string;
    /**
     * Required. The list of fields to be updated. Field names must be in snake case (e.g.,
     * "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one
     * path with the string "*" to match all fields.
     */
    updateMask?: string;
    body: GoogleAnalyticsAdminV1BetaKeyEvent;
  };

  export class AnalyticsadminPropertiesKeyEventsPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesKeyEventsPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesListRequest = {
    /**
     * Required. An expression for filtering the results of the request. Fields eligible for
     * filtering are: `parent:`(The resource name of the parent account/property) or `ancestor:`(The
     * resource name of the parent account) or `firebase_project:`(The id or number of the linked
     * firebase project). Some examples of filters: ``` | Filter | Description |
     * |-----------------------------|-------------------------------------------| |
     * parent:accounts/123 | The account with account id: 123. | | parent:properties/123 | The
     * property with property id: 123. | | ancestor:accounts/123 | The account with account id: 123.
     * | | firebase_project:project-id | The firebase project with id: project-id. | |
     * firebase_project:123 | The firebase project with number: 123. | ```
     */
    filter?: string;
    /**
     * Optional. The maximum number of resources to return. The service may return fewer than this
     * value, even if there are additional pages. If unspecified, at most 50 resources will be
     * returned. The maximum value is 200; (higher values will be coerced to the maximum)
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListProperties` call. Provide this to
     * retrieve the subsequent page. When paginating, all other parameters provided to
     * `ListProperties` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Whether to include soft-deleted (ie: "trashed") Properties in the results. Properties can be
     * inspected to determine whether they are deleted or not.
     */
    showDeleted?: boolean;
  };

  export class AnalyticsadminPropertiesListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesPatchRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    /**
     * Required. The list of fields to be updated. Field names must be in snake case (e.g.,
     * "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one
     * path with the string "*" to match all fields.
     */
    updateMask?: string;
    body: GoogleAnalyticsAdminV1BetaProperty;
  };

  export class AnalyticsadminPropertiesPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesRunAccessReportRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    body: GoogleAnalyticsAdminV1BetaRunAccessReportRequest;
  };

  export class AnalyticsadminPropertiesRunAccessReportError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesRunAccessReportError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminPropertiesUpdateDataRetentionSettingsRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    /**
     * Required. The list of fields to be updated. Field names must be in snake case (e.g.,
     * "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one
     * path with the string "*" to match all fields.
     */
    updateMask?: string;
    body: GoogleAnalyticsAdminV1BetaDataRetentionSettings;
  };

  export class AnalyticsadminPropertiesUpdateDataRetentionSettingsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminPropertiesUpdateDataRetentionSettingsError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsdataPropertiesAudienceExportsCreateRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    body: AudienceExport;
  };

  export class AnalyticsdataPropertiesAudienceExportsCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsdataPropertiesAudienceExportsCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsdataPropertiesAudienceExportsGetRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    /** Resource name segment (audienceExportsId). */
    audienceExportsId: string;
  };

  export class AnalyticsdataPropertiesAudienceExportsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsdataPropertiesAudienceExportsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsdataPropertiesAudienceExportsListRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    /**
     * Optional. The maximum number of audience exports to return. The service may return fewer than
     * this value. If unspecified, at most 200 audience exports will be returned. The maximum value
     * is 1000 (higher values will be coerced to the maximum).
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListAudienceExports` call. Provide this to
     * retrieve the subsequent page. When paginating, all other parameters provided to
     * `ListAudienceExports` must match the call that provided the page token.
     */
    pageToken?: string;
  };

  export class AnalyticsdataPropertiesAudienceExportsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsdataPropertiesAudienceExportsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsdataPropertiesAudienceExportsQueryRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    /** Resource name segment (audienceExportsId). */
    audienceExportsId: string;
    body: QueryAudienceExportRequest;
  };

  export class AnalyticsdataPropertiesAudienceExportsQueryError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsdataPropertiesAudienceExportsQueryError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsdataPropertiesBatchRunPivotReportsRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    body: BatchRunPivotReportsRequest;
  };

  export class AnalyticsdataPropertiesBatchRunPivotReportsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsdataPropertiesBatchRunPivotReportsError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsdataPropertiesBatchRunReportsRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    body: BatchRunReportsRequest;
  };

  export class AnalyticsdataPropertiesBatchRunReportsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsdataPropertiesBatchRunReportsError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsdataPropertiesCheckCompatibilityRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    body: CheckCompatibilityRequest;
  };

  export class AnalyticsdataPropertiesCheckCompatibilityError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsdataPropertiesCheckCompatibilityError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsdataPropertiesGetMetadataRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
  };

  export class AnalyticsdataPropertiesGetMetadataError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsdataPropertiesGetMetadataError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsdataPropertiesRunPivotReportRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    body: RunPivotReportRequest;
  };

  export class AnalyticsdataPropertiesRunPivotReportError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsdataPropertiesRunPivotReportError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsdataPropertiesRunRealtimeReportRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    body: RunRealtimeReportRequest;
  };

  export class AnalyticsdataPropertiesRunRealtimeReportError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsdataPropertiesRunRealtimeReportError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsdataPropertiesRunReportRequest = {
    /** Resource name segment (propertiesId). */
    propertiesId: string;
    body: RunReportRequest;
  };

  export class AnalyticsdataPropertiesRunReportError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsdataPropertiesRunReportError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }
}
