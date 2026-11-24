using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using PrismaReviews.Core;
using PrismaReviews.Core.Exceptions;
using PrismaReviews.Core.Models;
using PrismaReviews.Core.Request;
using PrismaReviews.Core.Response;
using PrismaReviews.Errors;
using PrismaReviews.Models;
using PrismaReviews.Requests.StatsApi;

namespace PrismaReviews.Api;

/// <summary>
/// Review statistics per workspace, location or platform.
/// </summary>
public sealed class StatsApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal StatsApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get a location's review stats
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Stats"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetLocationStatsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The same statistics as <c>GET /v1/stats</c>, for one location.
    /// </remarks>
    public Task<Stats> GetLocationStats(GetLocationStatsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/locations/{id}/stats"),
            [new TemplateParam("id", request.Id)],
            [new Param("since", request.Since), new Param("until", request.Until)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Stats>(),
            GetLocationStatsError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get review stats
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Stats"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetStatsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Review statistics for your workspace in the mode of your key: count, average rating, reviews per star, replies, reply rate, median reply time, unanswered negative reviews and a month-by-month series. Filter by location or platform.
    /// </remarks>
    public Task<Stats> GetStats(GetStatsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/stats"),
            [],
            [
                new Param("location_id", request.LocationId),
                new Param("platform", request.Platform),
                new Param("since", request.Since),
                new Param("until", request.Until),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Stats>(),
            GetStatsError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
