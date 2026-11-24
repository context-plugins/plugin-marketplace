using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Divvy.Core;
using Divvy.Core.Authentication;
using Divvy.Core.Exceptions;
using Divvy.Core.Models;
using Divvy.Core.Request;
using Divvy.Core.Response;
using Divvy.Errors;
using Divvy.Models;
using Divvy.Requests.Exports;

namespace Divvy.Api;

public sealed class Exports
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Exports(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Get exported record download URL
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ExportDownloadLinkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetDownloadLinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the download URL for an exported record file.
    /// <para>
    /// From the response, use <c>downloadLink</c> in a GET request to download the file.
    /// </para>
    /// <para>
    /// <code>
    /// curl '{downloadLink}' --output {file_name}
    /// </code>
    /// See Export BILL records in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<ExportDownloadLinkResponseDto> GetDownloadLink(GetDownloadLinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/exports/{exportId}/download-link"),
            [new TemplateParam("exportId", request.ExportId)],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ExportDownloadLinkResponseDto>(),
            GetDownloadLinkError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of exported BILL records
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListResponseDtoExportResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListExportsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of exported BILL records available for you to download. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// <para>
    /// From the response, use <c>exportId</c> to get the download URL for an exported record file with <c>GET /v3/exports/{exportId}/download-link</c>.
    /// </para>
    /// <para>
    /// You can export records, such as vendors, customers, bills, and invoices. In addition, you can export AP payments and AR payments. The <b>Import and export</b> section in the BILL web app (<b>Settings &gt; Import &amp; export &gt; Custom File Integration</b>) provides the complete list of entities that you can export.
    /// </para>
    /// <para>
    /// See Export BILL records in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<ListResponseDtoExportResponseDto> ListExports(ListExportsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/exports"),
            [],
            [new Param("max", request.Max), new Param("filters", request.Filters), new Param("page", request.Page)],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListResponseDtoExportResponseDto>(),
            ListExportsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
