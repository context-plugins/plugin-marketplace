using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DynamicFeed.Core;
using DynamicFeed.Core.Authentication;
using DynamicFeed.Core.Exceptions;
using DynamicFeed.Core.Models;
using DynamicFeed.Core.Request;
using DynamicFeed.Core.Response;
using DynamicFeed.Errors;
using DynamicFeed.Requests.Benchmarks;

namespace DynamicFeed.Api;

public sealed class Benchmarks
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Benchmarks(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Benchmarks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BenchmarksBenchmarksGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Measured latency &amp; uptime per AI provider — our own data, fastest first. (Requires API key.)
    /// </remarks>
    public Task<object> BenchmarksBenchmarksGet(BenchmarksBenchmarksGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/benchmarks"),
            [],
            [new Param("window_hours", request.WindowHours)],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            BenchmarksBenchmarksGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Benchmarks History
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BenchmarksHistoryBenchmarksHistoryGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The PERMANENT daily provider-latency &amp; uptime archive — data Dynamic Feed measures itself and
    /// never prunes, so it cannot be backfilled by anyone. Built for quant / eval / research use. Free keys
    /// get a 7-day sample; paid plans get the full history. (Requires API key.)
    /// </remarks>
    public Task<object> BenchmarksHistoryBenchmarksHistoryGet(BenchmarksHistoryBenchmarksHistoryGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/benchmarks/history"),
            [],
            [new Param("provider", request.Provider), new Param("days", request.Days)],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            BenchmarksHistoryBenchmarksHistoryGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
