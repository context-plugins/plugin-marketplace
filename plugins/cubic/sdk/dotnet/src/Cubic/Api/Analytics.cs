using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Cubic.Core;
using Cubic.Core.Exceptions;
using Cubic.Core.Models;
using Cubic.Core.Request;
using Cubic.Core.Response;
using Cubic.Errors;
using Cubic.Models;
using Cubic.Requests.Analytics;

namespace Cubic.Api;

public sealed class Analytics
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Analytics(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List pull request analytics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AnalyticsPrPage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPullRequestAnalyticsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Export metrics for merged pull requests reviewed by cubic.
    /// </remarks>
    public Task<AnalyticsPrPage> ListPullRequestAnalytics(ListPullRequestAnalyticsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/analytics/v1/prs"),
            [],
            [
                new Param("org", request.Org),
                new Param("repo", request.Repo),
                new Param("startDate", request.StartDate),
                new Param("endDate", request.EndDate),
                new Param("perPage", request.PerPage),
                new Param("cursor", request.Cursor),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AnalyticsPrPage>(),
            ListPullRequestAnalyticsError.Response,
            _auth.AnalyticsApiKey,
            requestOptions,
            cancellationToken);
}
