using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using FacebookBusinessManager.Core;
using FacebookBusinessManager.Core.Exceptions;
using FacebookBusinessManager.Core.Models;
using FacebookBusinessManager.Core.Request;
using FacebookBusinessManager.Core.Response;
using FacebookBusinessManager.Errors;
using FacebookBusinessManager.Models;
using FacebookBusinessManager.Requests.Insights;

namespace FacebookBusinessManager.Api;

/// <summary>
/// Retrieve performance metrics and analytics data for campaigns, ad sets, and ads.
/// </summary>
public sealed class Insights
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Insights(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Facebook Business Manager Get ad account insights
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="InsightsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAdAccountInsightsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves performance insights and analytics for the specified ad account. Supports date range filtering, breakdowns, and action breakdowns.
    /// </remarks>
    public Task<InsightsResponse> GetAdAccountInsights(GetAdAccountInsightsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/act_{ad_account_id}/insights"),
            [new TemplateParam("ad_account_id", request.AdAccountId)],
            [
                new Param("fields", request.Fields),
                new Param("time_range", request.TimeRange),
                new Param("breakdowns", request.Breakdowns),
                new Param("level", request.Level),
                new Param("time_increment", request.TimeIncrement),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<InsightsResponse>(),
            GetAdAccountInsightsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Facebook Business Manager Get campaign insights
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="InsightsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCampaignInsightsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves performance insights for a specific campaign including impressions, clicks, spend, and conversion metrics.
    /// </remarks>
    public Task<InsightsResponse> GetCampaignInsights(GetCampaignInsightsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{campaign_id}/insights"),
            [new TemplateParam("campaign_id", request.CampaignId)],
            [new Param("fields", request.Fields), new Param("time_range", request.TimeRange)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<InsightsResponse>(),
            GetCampaignInsightsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
