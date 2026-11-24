using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Instagram.Core;
using Instagram.Core.Authentication;
using Instagram.Core.ErrorResponse;
using Instagram.Core.Exceptions;
using Instagram.Core.Models;
using Instagram.Core.Request;
using Instagram.Core.Response;
using Instagram.Models;
using Instagram.Requests.Insights;

namespace Instagram.Api;

/// <summary>
/// Account and media level analytics
/// </summary>
public sealed class Insights
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Insights(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Instagram Get Media Insights
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="InsightsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get social interaction metrics for a media object.
    /// </remarks>
    public Task<InsightsResponse> GetMediaInsights(GetMediaInsightsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{media_id}/insights"),
            [new TemplateParam("media_id", request.MediaId)],
            [new Param("metric", request.Metric), new Param("access_token", request.AccessToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<InsightsResponse>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Instagram Get User Insights
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="InsightsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get social interaction metrics for the account.
    /// </remarks>
    public Task<InsightsResponse> GetUserInsights(GetUserInsightsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{user_id}/insights"),
            [new TemplateParam("user_id", request.UserId)],
            [
                new Param("metric", request.Metric),
                new Param("period", request.Period),
                new Param("access_token", request.AccessToken),
                new Param("since", request.Since),
                new Param("until", request.Until),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<InsightsResponse>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
