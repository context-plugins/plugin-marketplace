using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Skribble.Core;
using Skribble.Core.Exceptions;
using Skribble.Core.Models;
using Skribble.Core.Request;
using Skribble.Core.Response;
using Skribble.Errors;
using Skribble.Requests.Reports;

namespace Skribble.Api;

/// <summary>
/// Endpoints for generating, retrieving, and managing reports related to document processing.
/// </summary>
public sealed class Reports
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Reports(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// ETSI TS 119 102-2 validation report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetReportsEtsiError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the ETSI TS 119 102-2 signature validation report as a XML
    /// </remarks>
    public Task GetReportsEtsi(GetReportsEtsiRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleAdditionalInformationApi("/reports/{id}/etsi"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetReportsEtsiError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Skribble validation report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSkribbleReportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the digitally signed Skribble validation report as PDF. The report is generated once per validation ID, language, ETSI attachment flag and timezone, then cached — subsequent requests with the same parameters are served from cache and not billed. Optionally attach the ETSI TS 119 102-2 XML validation report as an embedded file in the PDF.
    /// </remarks>
    public Task<BinaryContent> GetSkribbleReport(GetSkribbleReportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleAdditionalInformationApi("/reports/{id}/skribble"),
            [new TemplateParam("id", request.Id)],
            [
                new Param("lang", request.Lang),
                new Param("attachETSIReport", request.AttachEtsiReport),
                new Param("timeZone", request.TimeZone),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            GetSkribbleReportError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);
}
