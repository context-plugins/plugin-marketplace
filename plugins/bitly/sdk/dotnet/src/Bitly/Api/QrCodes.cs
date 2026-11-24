using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Bitly.Core;
using Bitly.Core.Exceptions;
using Bitly.Core.Models;
using Bitly.Core.Request;
using Bitly.Core.Response;
using Bitly.Errors;
using Bitly.Models;
using Bitly.Requests.QrCodes;

namespace Bitly.Api;

/// <summary>
/// QR codes can be created and customized with different dot patterns, corner shapes, colors, and more. They can contain bitlinks, links to microsites, or several kinds of static data.
/// </summary>
public sealed class QrCodes
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal QrCodes(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a QR Code
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="QrCodeMinimal"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateQrCodePublicError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new QR Code and return its metadata
    /// </remarks>
    public Task<QrCodeMinimal> CreateQrCodePublic(CreateQrCodePublicRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/qr-codes"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<QrCodeMinimal>(),
            CreateQrCodePublicError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Generate a static QR Code image
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicStaticQrCodeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateStaticQrCodePublicError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate a static QR code image without creating or saving a QR code resource. SVG and PNG output are supported via the Accept header
    /// Contact your Account Manager to discuss enabling this feature for your account.
    /// <para>
    /// The <c>render_customizations</c> field supports basic appearance options. Customizations that require the rasterize API are not supported: <c>gradient</c>, <c>background_gradient</c>, <c>frame</c>, <c>text</c>, and <c>logo</c>.
    /// </para>
    /// <para>
    /// The Accept header controls the response format:
    /// - <c>application/json</c> (default): Returns a JSON object with the image as a base64-encoded byte string.
    /// - <c>image/svg+xml</c>: Returns the raw SVG image.
    /// - <c>image/png</c>: Returns the raw PNG image.
    /// </para>
    /// </remarks>
    public Task<PublicStaticQrCodeResponse> CreateStaticQrCodePublic(CreateStaticQrCodePublicRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/qr-codes/static"),
            [],
            [new Param("format", request.Format)],
            [new HeaderParam("Accept", request.Accept), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PublicStaticQrCodeResponse>(),
            CreateStaticQrCodePublicError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a QR Code
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicDeleteQrCodeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteQrCodeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a QR Code that has not been redirected and is not for a custom link. Also deletes the associated link (if applicable).
    /// </remarks>
    public Task<PublicDeleteQrCodeResponse> DeleteQrCode(DeleteQrCodeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/qr-codes/{qrcode_id}"),
            [new TemplateParam("qrcode_id", request.QrcodeId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<PublicDeleteQrCodeResponse>(),
            DeleteQrCodeError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve a QR Code
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="QrCodeDetails"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetQrCodeByIdPublicError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the QR code with a matching id.
    /// </remarks>
    public Task<QrCodeDetails> GetQrCodeByIdPublic(GetQrCodeByIdPublicRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/qr-codes/{qrcode_id}"),
            [new TemplateParam("qrcode_id", request.QrcodeId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<QrCodeDetails>(),
            GetQrCodeByIdPublicError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve a QR Code image
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicQrCodeImageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetQrCodeImagePublicError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the image of a given QR Code. The Accept header controls how this is returned (options are "application/json", "image/svg+xml", and "image/png").
    /// If the Accept header is "application/json" the format query parameter will determine the image format inside of the json (which will be base64 encoded and prefixed with its mime type as would be suitable for a HTML image src tag).
    /// To Return the QR Code image itself, set the Accept header to "image/svg+xml" or "image/png", or remove the Accept header and set the format query parameter to “svg” or “png” (if no format is specified the default will be “svg”).
    /// </remarks>
    public Task<PublicQrCodeImageResponse> GetQrCodeImagePublic(GetQrCodeImagePublicRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/qr-codes/{qrcode_id}/image"),
            [new TemplateParam("qrcode_id", request.QrcodeId)],
            [new Param("format", request.Format)],
            [new HeaderParam("Accept", request.Accept)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicQrCodeImageResponse>(),
            GetQrCodeImagePublicError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Scans for a QR Code
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BitlinkScans"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetScanMetricsForQrCodeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns an array of scan counts for the specified QR code. The array is comprised of scan counts for each time window, where the window is based on the provided unit.
    /// </remarks>
    public Task<BitlinkScans> GetScanMetricsForQrCode(GetScanMetricsForQrCodeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/qr-codes/{qrcode_id}/scans"),
            [new TemplateParam("qrcode_id", request.QrcodeId)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BitlinkScans>(),
            GetScanMetricsForQrCodeError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Scans for a QR Code by Browser
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ScanMetrics"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetScanMetricsForQrCodeByBrowserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the browsers generating scan traffic to the specified QR Code.
    /// </remarks>
    public Task<ScanMetrics> GetScanMetricsForQrCodeByBrowser(GetScanMetricsForQrCodeByBrowserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/qr-codes/{qrcode_id}/scans/browsers"),
            [new TemplateParam("qrcode_id", request.QrcodeId)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("size", request.Size),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ScanMetrics>(),
            GetScanMetricsForQrCodeByBrowserError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Metrics for a QR Code by City
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CityScanMetrics"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetScanMetricsForQrCodeByCitiesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the city origins of scan traffic for the specified QR Code.
    /// </remarks>
    public Task<CityScanMetrics> GetScanMetricsForQrCodeByCities(GetScanMetricsForQrCodeByCitiesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/qr-codes/{qrcode_id}/scans/cities"),
            [new TemplateParam("qrcode_id", request.QrcodeId)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("size", request.Size),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CityScanMetrics>(),
            GetScanMetricsForQrCodeByCitiesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Scans for a QR Code by Country
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ScanMetrics"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetScanMetricsForQrCodeByCountriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the country origins of scan traffic for the specified QR Code.
    /// </remarks>
    public Task<ScanMetrics> GetScanMetricsForQrCodeByCountries(GetScanMetricsForQrCodeByCountriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/qr-codes/{qrcode_id}/scans/countries"),
            [new TemplateParam("qrcode_id", request.QrcodeId)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("size", request.Size),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ScanMetrics>(),
            GetScanMetricsForQrCodeByCountriesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Scans for a QR Code by Device OS
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ScanMetrics"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetScanMetricsForQrCodeByDevicesOsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the device os generating scan traffic for the specified QR Code.
    /// </remarks>
    public Task<ScanMetrics> GetScanMetricsForQrCodeByDevicesOs(GetScanMetricsForQrCodeByDevicesOsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/qr-codes/{qrcode_id}/scans/device_os"),
            [new TemplateParam("qrcode_id", request.QrcodeId)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("size", request.Size),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ScanMetrics>(),
            GetScanMetricsForQrCodeByDevicesOsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Scans Summary for a QR Code
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BitlinkScansSummary"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetScanMetricsSummaryForQrCodeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the scan counts for a QR Code rolled up into a single field for a specified time window, where the window is based on the provided unit.
    /// </remarks>
    public Task<BitlinkScansSummary> GetScanMetricsSummaryForQrCode(GetScanMetricsSummaryForQrCodeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/qr-codes/{qrcode_id}/scans/summary"),
            [new TemplateParam("qrcode_id", request.QrcodeId)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BitlinkScansSummary>(),
            GetScanMetricsSummaryForQrCodeError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve QR Codes by Group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="QrCodesMinimal"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListQrMinimalError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a list of QR codes matching the filter settings. Values are in reverse chronological order.
    /// The pagination occurs by calling the next link in the pagination response object.
    /// </remarks>
    public Task<QrCodesMinimal> ListQrMinimal(ListQrMinimalRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/groups/{group_guid}/qr-codes"),
            [new TemplateParam("group_guid", request.GroupGuid)],
            [
                new Param("has_render_customizations", request.HasRenderCustomizations),
                new Param("size", request.Size),
                new Param("search_after", request.SearchAfter),
                new Param("query", request.Query),
                new Param("hostname_path_query", request.HostnamePathQuery),
                new Param("created_before", request.CreatedBefore),
                new Param("created_after", request.CreatedAfter),
                new Param("archived", request.Archived),
                new Param("creating_login", request.CreatingLogin),
                new Param("qrc_type", request.QrcType),
                new Param("is_gs1", request.IsGs1),
                new Param("is_expired", request.IsExpired),
                new Param("has_expiration", request.HasExpiration),
                new Param("has_dynamic_routing", request.HasDynamicRouting),
                new Param("tags", request.Tags),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<QrCodesMinimal>(),
            ListQrMinimalError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Redirect a QR Code
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="QrCodeMinimal"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RedirectQrCodeDestinationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Changes the destination URL that a stand alone QR Code redirects to. This only works for stand alone QR Codes; a QR Code already associated with a bitlink must be updated via the Bitlinks API.
    /// </remarks>
    public Task<QrCodeMinimal> RedirectQrCodeDestination(RedirectQrCodeDestinationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/qr-codes/{qrcode_id}/redirect"),
            [new TemplateParam("qrcode_id", request.QrcodeId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<QrCodeMinimal>(),
            RedirectQrCodeDestinationError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a QR Code
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="QrCodeMinimal"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateQrCodePublicError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the QR code with a matching id and returns it.
    /// </remarks>
    public Task<QrCodeMinimal> UpdateQrCodePublic(UpdateQrCodePublicRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/qr-codes/{qrcode_id}"),
            [new TemplateParam("qrcode_id", request.QrcodeId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<QrCodeMinimal>(),
            UpdateQrCodePublicError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Bulk update QR codes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="QrcBulkUpdate"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateQrCodesByGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Bulk update can add or remove tags, or archive/un-archive, up to 100 QR codes at a time.
    /// Pages QR codes cannot be updated with this endpoint.
    /// The response includes a list of QR code ids that were updated.
    /// </remarks>
    public Task<QrcBulkUpdate> UpdateQrCodesByGroup(UpdateQrCodesByGroupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/groups/{group_guid}/qr-codes"),
            [new TemplateParam("group_guid", request.GroupGuid)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<QrcBulkUpdate>(),
            UpdateQrCodesByGroupError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Upgrade a QR Code to a bitlink
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BitlinkBody"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpgradeQrCodeToBitlinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upgrades a stand alone (decoupled) QR Code to a coupled QR Code by associating it with its underlying Bitly short link. This operation consumes one encode from the organization's monthly Link limit. If the QR Code is already coupled, no encode is consumed.
    /// </remarks>
    public Task<BitlinkBody> UpgradeQrCodeToBitlink(UpgradeQrCodeToBitlinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/qr-codes/{qrcode_id}/to-bitlink"),
            [new TemplateParam("qrcode_id", request.QrcodeId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            JsonResponse.Create<BitlinkBody>(),
            UpgradeQrCodeToBitlinkError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
