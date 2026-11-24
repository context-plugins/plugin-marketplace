using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Deliverd.Core;
using Deliverd.Core.Exceptions;
using Deliverd.Core.Models;
using Deliverd.Core.Request;
using Deliverd.Core.Response;
using Deliverd.Errors;
using Deliverd.Models;
using Deliverd.Requests.Analytics;

namespace Deliverd.Api;

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
    /// What is being read, across every report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AnalyticsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1AnalyticsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// <c>GET /reports/{idOrSlug}/analytics</c> needs to be told which report, so "what is getting read" meant walking the list and adding up. The half that cannot be reconstructed that way is <c>inactiveReports</c> — a report nobody has opened does not appear in anything you would think to ask about. Part of analytics, so Team and above; the per-report call returns a total view count on every plan.
    /// </remarks>
    public Task<ApiV1AnalyticsResponse> GetApiV1Analytics(GetApiV1AnalyticsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/analytics"),
            [],
            [new Param("days", request.Days), new Param("limit", request.Limit)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AnalyticsResponse>(),
            GetApiV1AnalyticsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
