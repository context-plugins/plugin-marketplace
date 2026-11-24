using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Ortto.Core;
using Ortto.Core.Exceptions;
using Ortto.Core.Models;
using Ortto.Core.Request;
using Ortto.Core.Response;
using Ortto.Errors;
using Ortto.Requests.Campaigns;

namespace Ortto.Api;

/// <summary>
/// Retrieve campaigns, reports, and assets.
/// </summary>
public sealed class Campaigns
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Campaigns(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Retrieve campaigns by time period
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCampaignCalendarError"/> when the server returns an error response.</exception>
    public Task GetCampaignCalendar(GetCampaignCalendarRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/campaign/calendar"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            GetCampaignCalendarError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve a campaign or asset report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCampaignReportError"/> when the server returns an error response.</exception>
    public Task GetCampaignReport(GetCampaignReportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/campaign/reports/get"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            GetCampaignReportError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
