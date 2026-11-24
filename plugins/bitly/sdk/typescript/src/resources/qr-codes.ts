import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { acceptSchema, type Accept } from "../models/accept.js";
import { Archived, archivedSchema } from "../models/archived.js";
import { bitlinkBodySchema, type BitlinkBody } from "../models/bitlink-body.js";
import { bitlinkScansSummarySchema, type BitlinkScansSummary } from "../models/bitlink-scans-summary.js";
import { bitlinkScansSchema, type BitlinkScans } from "../models/bitlink-scans.js";
import { cityScanMetricsSchema, type CityScanMetrics } from "../models/city-scan-metrics.js";
import { errorSchema, type Error } from "../models/error.js";
import { Format, formatSchema } from "../models/format.js";
import { HasDynamicRouting, hasDynamicRoutingSchema } from "../models/has-dynamic-routing.js";
import { HasExpiration, hasExpirationSchema } from "../models/has-expiration.js";
import {
  HasRenderCustomizations,
  hasRenderCustomizationsSchema,
} from "../models/has-render-customizations.js";
import { IsExpired, isExpiredSchema } from "../models/is-expired.js";
import { IsGs1, isGs1Schema } from "../models/is-gs1.js";
import {
  publicCreateQrCodeRequestSchema,
  type PublicCreateQrCodeRequest,
} from "../models/public-create-qr-code-request.js";
import {
  publicCreateStaticQrCodeRequestSchema,
  type PublicCreateStaticQrCodeRequest,
} from "../models/public-create-static-qr-code-request.js";
import {
  publicDeleteQrCodeResponseSchema,
  type PublicDeleteQrCodeResponse,
} from "../models/public-delete-qr-code-response.js";
import {
  publicQrCodeImageResponseSchema,
  type PublicQrCodeImageResponse,
} from "../models/public-qr-code-image-response.js";
import {
  publicStaticQrCodeResponseSchema,
  type PublicStaticQrCodeResponse,
} from "../models/public-static-qr-code-response.js";
import {
  publicUpdateQrCodeRequestSchema,
  type PublicUpdateQrCodeRequest,
} from "../models/public-update-qr-code-request.js";
import { qrCodeDetailsSchema, type QrCodeDetails } from "../models/qr-code-details.js";
import { qrCodeMinimalSchema, type QrCodeMinimal } from "../models/qr-code-minimal.js";
import { qrCodesMinimalSchema, type QrCodesMinimal } from "../models/qr-codes-minimal.js";
import { qrcBulkUpdateRequestSchema, type QrcBulkUpdateRequest } from "../models/qrc-bulk-update-request.js";
import { qrcBulkUpdateSchema, type QrcBulkUpdate } from "../models/qrc-bulk-update.js";
import { qrcTypeSchema, type QrcType } from "../models/qrc-type.js";
import {
  redirectQrCodeRequestSchema,
  type RedirectQrCodeRequest,
} from "../models/redirect-qr-code-request.js";
import { scanMetricsSchema, type ScanMetrics } from "../models/scan-metrics.js";
import { simplifiedErrorSchema, type SimplifiedError } from "../models/simplified-error.js";
import { TimeUnit, timeUnitSchema } from "../models/time-unit.js";
import type { Servers } from "../servers.js";

/**
 * QR codes can be created and customized with different dot patterns, corner shapes, colors, and
 * more. They can contain bitlinks, links to microsites, or several kinds of static data.
 */
export class QrCodes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a QR Code
   *
   * @remarks
   * Create a new QR Code and return its metadata
   *
   * @returns CREATED
   *
   * @throws {@link QrCodes.CreateQrCodePublicError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createQrCodePublic(
    request: QrCodes.CreateQrCodePublicRequest,
    options?: RequestOptions,
  ): ApiPromise<QrCodeMinimal, QrCodes.CreateQrCodePublicError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/qr-codes"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publicCreateQrCodeRequestSchema },
      },
      {
        success: { kind: "json", schema: qrCodeMinimalSchema },
        errorFactory: QrCodes.CreateQrCodePublicError,
      },
      options,
    );
  }

  /**
   * Generate a static QR Code image
   *
   * @remarks
   * Generate a static QR code image without creating or saving a QR code resource. SVG and PNG
   * output are supported via the Accept header Contact your Account Manager to discuss enabling
   * this feature for your account.
   *
   * The `render_customizations` field supports basic appearance options. Customizations that
   * require the rasterize API are not supported: `gradient`, `background_gradient`, `frame`,
   * `text`, and `logo`.
   *
   * The Accept header controls the response format:
   * - `application/json` (default): Returns a JSON object with the image as a base64-encoded byte
   *   string.
   * - `image/svg+xml`: Returns the raw SVG image.
   * - `image/png`: Returns the raw PNG image.
   *
   * @returns SUCCESS
   *
   * @throws {@link QrCodes.CreateStaticQrCodePublicError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createStaticQrCodePublic(
    request: QrCodes.CreateStaticQrCodePublicRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicStaticQrCodeResponse, QrCodes.CreateStaticQrCodePublicError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/qr-codes/static"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [{ name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Svg) }],
        headers: [
          { name: "Accept", value: request.accept, schema: s.optional(s.lazy(() => acceptSchema)) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: publicCreateStaticQrCodeRequestSchema },
      },
      {
        success: { kind: "json", schema: publicStaticQrCodeResponseSchema },
        errorFactory: QrCodes.CreateStaticQrCodePublicError,
      },
      options,
    );
  }

  /**
   * Delete a QR Code
   *
   * @remarks
   * Delete a QR Code that has not been redirected and is not for a custom link. Also deletes the
   * associated link (if applicable).
   *
   * @returns SUCCESS
   *
   * @throws {@link QrCodes.DeleteQrCodeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteQrCode(
    request: QrCodes.DeleteQrCodeRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicDeleteQrCodeResponse, QrCodes.DeleteQrCodeError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/qr-codes/{qrcode_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "qrcode_id", value: request.qrcodeId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicDeleteQrCodeResponseSchema },
        errorFactory: QrCodes.DeleteQrCodeError,
      },
      options,
    );
  }

  /**
   * Retrieve a QR Code
   *
   * @remarks
   * Gets the QR code with a matching id.
   *
   * @returns SUCCESS
   *
   * @throws {@link QrCodes.GetQrCodeByIdPublicError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getQrCodeByIdPublic(
    request: QrCodes.GetQrCodeByIdPublicRequest,
    options?: RequestOptions,
  ): ApiPromise<QrCodeDetails, QrCodes.GetQrCodeByIdPublicError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/qr-codes/{qrcode_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "qrcode_id", value: request.qrcodeId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: qrCodeDetailsSchema },
        errorFactory: QrCodes.GetQrCodeByIdPublicError,
      },
      options,
    );
  }

  /**
   * Retrieve a QR Code image
   *
   * @remarks
   * Get the image of a given QR Code. The Accept header controls how this is returned (options are
   * "application/json", "image/svg+xml", and "image/png"). If the Accept header is
   * "application/json" the format query parameter will determine the image format inside of the
   * json (which will be base64 encoded and prefixed with its mime type as would be suitable for a
   * HTML image src tag). To Return the QR Code image itself, set the Accept header to
   * "image/svg+xml" or "image/png", or remove the Accept header and set the format query parameter
   * to “svg” or “png” (if no format is specified the default will be “svg”).
   *
   * @returns SUCCESS
   *
   * @throws {@link QrCodes.GetQrCodeImagePublicError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getQrCodeImagePublic(
    request: QrCodes.GetQrCodeImagePublicRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicQrCodeImageResponse, QrCodes.GetQrCodeImagePublicError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/qr-codes/{qrcode_id}/image"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "qrcode_id", value: request.qrcodeId, schema: s.string() }],
        query: [{ name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Svg) }],
        headers: [{ name: "Accept", value: request.accept, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicQrCodeImageResponseSchema },
        errorFactory: QrCodes.GetQrCodeImagePublicError,
      },
      options,
    );
  }

  /**
   * Get Scans for a QR Code
   *
   * @remarks
   * Returns an array of scan counts for the specified QR code. The array is comprised of scan
   * counts for each time window, where the window is based on the provided unit.
   *
   * @returns SUCCESS
   *
   * @throws {@link QrCodes.GetScanMetricsForQrCodeError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getScanMetricsForQrCode(
    request: QrCodes.GetScanMetricsForQrCodeRequest,
    options?: RequestOptions,
  ): ApiPromise<BitlinkScans, QrCodes.GetScanMetricsForQrCodeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/qr-codes/{qrcode_id}/scans"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "qrcode_id", value: request.qrcodeId, schema: s.string() }],
        query: [
          { name: "unit", value: request.unit, schema: s.defaulted(timeUnitSchema, TimeUnit.Day) },
          { name: "units", value: request.units, schema: s.defaulted(s.int(), -1) },
          { name: "unit_reference", value: request.unitReference, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bitlinkScansSchema },
        errorFactory: QrCodes.GetScanMetricsForQrCodeError,
      },
      options,
    );
  }

  /**
   * Get Scans for a QR Code by Browser
   *
   * @remarks
   * Returns the browsers generating scan traffic to the specified QR Code.
   *
   * @returns SUCCESS
   *
   * @throws {@link QrCodes.GetScanMetricsForQrCodeByBrowserError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getScanMetricsForQrCodeByBrowser(
    request: QrCodes.GetScanMetricsForQrCodeByBrowserRequest,
    options?: RequestOptions,
  ): ApiPromise<ScanMetrics, QrCodes.GetScanMetricsForQrCodeByBrowserError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/qr-codes/{qrcode_id}/scans/browsers"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "qrcode_id", value: request.qrcodeId, schema: s.string() }],
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
        success: { kind: "json", schema: scanMetricsSchema },
        errorFactory: QrCodes.GetScanMetricsForQrCodeByBrowserError,
      },
      options,
    );
  }

  /**
   * Get Metrics for a QR Code by City
   *
   * @remarks
   * Returns the city origins of scan traffic for the specified QR Code.
   *
   * @returns SUCCESS
   *
   * @throws {@link QrCodes.GetScanMetricsForQrCodeByCitiesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getScanMetricsForQrCodeByCities(
    request: QrCodes.GetScanMetricsForQrCodeByCitiesRequest,
    options?: RequestOptions,
  ): ApiPromise<CityScanMetrics, QrCodes.GetScanMetricsForQrCodeByCitiesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/qr-codes/{qrcode_id}/scans/cities"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "qrcode_id", value: request.qrcodeId, schema: s.string() }],
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
        success: { kind: "json", schema: cityScanMetricsSchema },
        errorFactory: QrCodes.GetScanMetricsForQrCodeByCitiesError,
      },
      options,
    );
  }

  /**
   * Get Scans for a QR Code by Country
   *
   * @remarks
   * Returns the country origins of scan traffic for the specified QR Code.
   *
   * @returns SUCCESS
   *
   * @throws {@link QrCodes.GetScanMetricsForQrCodeByCountriesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getScanMetricsForQrCodeByCountries(
    request: QrCodes.GetScanMetricsForQrCodeByCountriesRequest,
    options?: RequestOptions,
  ): ApiPromise<ScanMetrics, QrCodes.GetScanMetricsForQrCodeByCountriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/qr-codes/{qrcode_id}/scans/countries"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "qrcode_id", value: request.qrcodeId, schema: s.string() }],
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
        success: { kind: "json", schema: scanMetricsSchema },
        errorFactory: QrCodes.GetScanMetricsForQrCodeByCountriesError,
      },
      options,
    );
  }

  /**
   * Get Scans for a QR Code by Device OS
   *
   * @remarks
   * Returns the device os generating scan traffic for the specified QR Code.
   *
   * @returns SUCCESS
   *
   * @throws {@link QrCodes.GetScanMetricsForQrCodeByDevicesOsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getScanMetricsForQrCodeByDevicesOs(
    request: QrCodes.GetScanMetricsForQrCodeByDevicesOsRequest,
    options?: RequestOptions,
  ): ApiPromise<ScanMetrics, QrCodes.GetScanMetricsForQrCodeByDevicesOsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/qr-codes/{qrcode_id}/scans/device_os"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "qrcode_id", value: request.qrcodeId, schema: s.string() }],
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
        success: { kind: "json", schema: scanMetricsSchema },
        errorFactory: QrCodes.GetScanMetricsForQrCodeByDevicesOsError,
      },
      options,
    );
  }

  /**
   * Get Scans Summary for a QR Code
   *
   * @remarks
   * Returns the scan counts for a QR Code rolled up into a single field for a specified time
   * window, where the window is based on the provided unit.
   *
   * @returns SUCCESS
   *
   * @throws {@link QrCodes.GetScanMetricsSummaryForQrCodeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getScanMetricsSummaryForQrCode(
    request: QrCodes.GetScanMetricsSummaryForQrCodeRequest,
    options?: RequestOptions,
  ): ApiPromise<BitlinkScansSummary, QrCodes.GetScanMetricsSummaryForQrCodeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/qr-codes/{qrcode_id}/scans/summary"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "qrcode_id", value: request.qrcodeId, schema: s.string() }],
        query: [
          { name: "unit", value: request.unit, schema: s.defaulted(timeUnitSchema, TimeUnit.Day) },
          { name: "units", value: request.units, schema: s.defaulted(s.int(), -1) },
          { name: "unit_reference", value: request.unitReference, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bitlinkScansSummarySchema },
        errorFactory: QrCodes.GetScanMetricsSummaryForQrCodeError,
      },
      options,
    );
  }

  /**
   * Retrieve QR Codes by Group
   *
   * @remarks
   * Retrieves a list of QR codes matching the filter settings. Values are in reverse chronological
   * order. The pagination occurs by calling the next link in the pagination response object.
   *
   * @returns SUCCESS
   *
   * @throws {@link QrCodes.ListQrMinimalError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listQrMinimal(
    request: QrCodes.ListQrMinimalRequest,
    options?: RequestOptions,
  ): ApiPromise<QrCodesMinimal, QrCodes.ListQrMinimalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups/{group_guid}/qr-codes"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "group_guid", value: request.groupGuid, schema: s.string() }],
        query: [
          {
            name: "has_render_customizations",
            value: request.hasRenderCustomizations,
            schema: s.defaulted(hasRenderCustomizationsSchema, HasRenderCustomizations.Both),
          },
          { name: "size", value: request.size, schema: s.defaulted(s.int(), 50) },
          { name: "search_after", value: request.searchAfter, schema: s.optional(s.string()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "hostname_path_query", value: request.hostnamePathQuery, schema: s.optional(s.string()) },
          { name: "created_before", value: request.createdBefore, schema: s.optional(s.int()) },
          { name: "created_after", value: request.createdAfter, schema: s.optional(s.int()) },
          { name: "archived", value: request.archived, schema: s.defaulted(archivedSchema, Archived.Off) },
          { name: "creating_login", value: request.creatingLogin, schema: s.optional(s.array(s.string())) },
          {
            name: "qrc_type",
            value: request.qrcType,
            schema: s.optional(s.array(s.lazy(() => qrcTypeSchema))),
          },
          { name: "is_gs1", value: request.isGs1, schema: s.defaulted(isGs1Schema, IsGs1.Both) },
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
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: qrCodesMinimalSchema },
        errorFactory: QrCodes.ListQrMinimalError,
      },
      options,
    );
  }

  /**
   * Redirect a QR Code
   *
   * @remarks
   * Changes the destination URL that a stand alone QR Code redirects to. This only works for stand
   * alone QR Codes; a QR Code already associated with a bitlink must be updated via the Bitlinks
   * API.
   *
   * @returns SUCCESS
   *
   * @throws {@link QrCodes.RedirectQrCodeDestinationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  redirectQrCodeDestination(
    request: QrCodes.RedirectQrCodeDestinationRequest,
    options?: RequestOptions,
  ): ApiPromise<QrCodeMinimal, QrCodes.RedirectQrCodeDestinationError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/qr-codes/{qrcode_id}/redirect"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "qrcode_id", value: request.qrcodeId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: redirectQrCodeRequestSchema },
      },
      {
        success: { kind: "json", schema: qrCodeMinimalSchema },
        errorFactory: QrCodes.RedirectQrCodeDestinationError,
      },
      options,
    );
  }

  /**
   * Update a QR Code
   *
   * @remarks
   * Updates the QR code with a matching id and returns it.
   *
   * @returns SUCCESS
   *
   * @throws {@link QrCodes.UpdateQrCodePublicError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateQrCodePublic(
    request: QrCodes.UpdateQrCodePublicRequest,
    options?: RequestOptions,
  ): ApiPromise<QrCodeMinimal, QrCodes.UpdateQrCodePublicError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/qr-codes/{qrcode_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "qrcode_id", value: request.qrcodeId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => publicUpdateQrCodeRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: qrCodeMinimalSchema },
        errorFactory: QrCodes.UpdateQrCodePublicError,
      },
      options,
    );
  }

  /**
   * Bulk update QR codes
   *
   * @remarks
   * Bulk update can add or remove tags, or archive/un-archive, up to 100 QR codes at a time. Pages
   * QR codes cannot be updated with this endpoint. The response includes a list of QR code ids that
   * were updated.
   *
   * @returns SUCCESS
   *
   * @throws {@link QrCodes.UpdateQrCodesByGroupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateQrCodesByGroup(
    request: QrCodes.UpdateQrCodesByGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<QrcBulkUpdate, QrCodes.UpdateQrCodesByGroupError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/groups/{group_guid}/qr-codes"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "group_guid", value: request.groupGuid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: qrcBulkUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: qrcBulkUpdateSchema },
        errorFactory: QrCodes.UpdateQrCodesByGroupError,
      },
      options,
    );
  }

  /**
   * Upgrade a QR Code to a bitlink
   *
   * @remarks
   * Upgrades a stand alone (decoupled) QR Code to a coupled QR Code by associating it with its
   * underlying Bitly short link. This operation consumes one encode from the organization's monthly
   * Link limit. If the QR Code is already coupled, no encode is consumed.
   *
   * @returns SUCCESS
   *
   * @throws {@link QrCodes.UpgradeQrCodeToBitlinkError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  upgradeQrCodeToBitlink(
    request: QrCodes.UpgradeQrCodeToBitlinkRequest,
    options?: RequestOptions,
  ): ApiPromise<BitlinkBody, QrCodes.UpgradeQrCodeToBitlinkError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/qr-codes/{qrcode_id}/to-bitlink"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "qrcode_id", value: request.qrcodeId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bitlinkBodySchema },
        errorFactory: QrCodes.UpgradeQrCodeToBitlinkError,
      },
      options,
    );
  }
}

export namespace QrCodes {
  export type CreateQrCodePublicRequest = {
    body: PublicCreateQrCodeRequest;
  };

  export class CreateQrCodePublicError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateQrCodePublicError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 410, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateStaticQrCodePublicRequest = {
    /**
     * The image format. Supports `svg` and `png`. Ignored if the Accept header specifies an image
     * type.
     *
     * @default Format.Svg
     */
    format?: Format;
    /**
     * Controls the response format. Use `application/json` (default) to receive a JSON-wrapped
     * base64 image, `image/svg+xml` to receive the raw SVG, or `image/png` to receive the raw PNG.
     */
    accept?: Accept;
    body: PublicCreateStaticQrCodeRequest;
  };

  export class CreateStaticQrCodePublicError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateStaticQrCodePublicError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 406, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteQrCodeRequest = {
    /** The QR Code ID */
    qrcodeId: string;
  };

  export class DeleteQrCodeError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteQrCodeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 410, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetQrCodeByIdPublicRequest = {
    /** The QR Code ID */
    qrcodeId: string;
  };

  export class GetQrCodeByIdPublicError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetQrCodeByIdPublicError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 410, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetQrCodeImagePublicRequest = {
    /** The QR Code ID */
    qrcodeId: string;
    /**
     * The format type of the image. If there is an image format in the header it takes precedence.
     *
     * @default Format.Svg
     */
    format?: Format;
    /**
     * The file format for the QR code's image. If the accept header is application/json the image
     * data will be wrapped in a json object, base64 encoded and prefixed with its mime type as
     * would be suitable for a HTML image src tag.
     */
    accept?: string;
  };

  export class GetQrCodeImagePublicError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetQrCodeImagePublicError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 410, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetScanMetricsForQrCodeRequest = {
    /** The QR Code ID */
    qrcodeId: string;
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

  export class GetScanMetricsForQrCodeError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetScanMetricsForQrCodeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 410, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetScanMetricsForQrCodeByBrowserRequest = {
    /** The QR Code ID */
    qrcodeId: string;
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

  export class GetScanMetricsForQrCodeByBrowserError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetScanMetricsForQrCodeByBrowserError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 410, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetScanMetricsForQrCodeByCitiesRequest = {
    /** The QR Code ID */
    qrcodeId: string;
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

  export class GetScanMetricsForQrCodeByCitiesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetScanMetricsForQrCodeByCitiesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 410, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetScanMetricsForQrCodeByCountriesRequest = {
    /** The QR Code ID */
    qrcodeId: string;
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

  export class GetScanMetricsForQrCodeByCountriesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetScanMetricsForQrCodeByCountriesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 410, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetScanMetricsForQrCodeByDevicesOsRequest = {
    /** The QR Code ID */
    qrcodeId: string;
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

  export class GetScanMetricsForQrCodeByDevicesOsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetScanMetricsForQrCodeByDevicesOsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 410, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetScanMetricsSummaryForQrCodeRequest = {
    /** The QR Code ID */
    qrcodeId: string;
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

  export class GetScanMetricsSummaryForQrCodeError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetScanMetricsSummaryForQrCodeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 410, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListQrMinimalRequest = {
    /** A GUID for a Bitly group */
    groupGuid: string;
    /**
     * Whether or not QRCode has any render customizations (like color or shape changes)
     *
     * @default HasRenderCustomizations.Both
     */
    hasRenderCustomizations?: HasRenderCustomizations;
    /** The quantity of items to be be returned @default 50 */
    size?: number;
    /** Token used to search next batch of qr codes, only use response from API as input value. */
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
    /** Filter by the login of the authenticated user that created the QR Code */
    creatingLogin?: string[];
    qrcType?: QrcType[];
    /** a filter value if the resource is a GS1 QR code @default IsGs1.Both */
    isGs1?: IsGs1;
    /** filter bitlinks by expiration status @default IsExpired.Both */
    isExpired?: IsExpired;
    /** filter bitlinks by presence of expiration @default HasExpiration.Both */
    hasExpiration?: HasExpiration;
    /** filter bitlinks by presence of dynamic routing rules @default HasDynamicRouting.Both */
    hasDynamicRouting?: HasDynamicRouting;
    /** Filter by given tags */
    tags?: string[];
  };

  export class ListQrMinimalError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListQrMinimalError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RedirectQrCodeDestinationRequest = {
    qrcodeId: string;
    body: RedirectQrCodeRequest;
  };

  export class RedirectQrCodeDestinationError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<RedirectQrCodeDestinationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 410, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateQrCodePublicRequest = {
    /** The QR code ID */
    qrcodeId: string;
    body?: PublicUpdateQrCodeRequest;
  };

  export class UpdateQrCodePublicError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateQrCodePublicError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 410, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateQrCodesByGroupRequest = {
    /** A GUID for a Bitly group */
    groupGuid: string;
    body: QrcBulkUpdateRequest;
  };

  export class UpdateQrCodesByGroupError extends ApiError {
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

    static readonly errors: ErrorDecoders<UpdateQrCodesByGroupError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 410, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpgradeQrCodeToBitlinkRequest = {
    qrcodeId: string;
  };

  export class UpgradeQrCodeToBitlinkError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpgradeQrCodeToBitlinkError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
