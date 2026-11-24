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
using FacebookBusinessManager.Requests.PageInsights;

namespace FacebookBusinessManager.Api;

/// <summary>
/// Retrieve analytics and engagement metrics for a Facebook Page.
/// </summary>
public sealed class PageInsights
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal PageInsights(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Facebook Business Manager Get page insights
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PageInsightsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPageInsightsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves analytics metrics for the Facebook Page including reach, impressions, engagement, and audience demographics.
    /// </remarks>
    public Task<PageInsightsResponse> GetPageInsights(GetPageInsightsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{page_id}/insights"),
            [new TemplateParam("page_id", request.PageId)],
            [
                new Param("metric", request.Metric),
                new Param("period", request.Period),
                new Param("since", request.Since),
                new Param("until", request.Until),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PageInsightsResponse>(),
            GetPageInsightsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
