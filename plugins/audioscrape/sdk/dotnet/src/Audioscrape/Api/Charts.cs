using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Audioscrape.Core;
using Audioscrape.Core.Exceptions;
using Audioscrape.Core.Models;
using Audioscrape.Core.Request;
using Audioscrape.Core.Response;
using Audioscrape.Errors;
using Audioscrape.Models;
using Audioscrape.Requests.Charts;

namespace Audioscrape.Api;

/// <summary>
/// Apple Podcasts and Spotify chart rankings
/// </summary>
public sealed class Charts
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Charts(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Top podcasts by country
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="ChartPodcastEntry"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetChartPodcastsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the latest Apple Podcasts / Spotify podcast chart for the given country. If <c>platform</c> is omitted, results from both platforms are interleaved. Audioscrape ingests new chart snapshots daily.
    /// </remarks>
    public Task<IReadOnlyList<ChartPodcastEntry>> GetChartPodcasts(GetChartPodcastsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/charts/podcasts"),
            [],
            [
                new Param("country", request.Country),
                new Param("platform", request.Platform),
                new Param("limit", request.Limit),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<ChartPodcastEntry>>(),
            GetChartPodcastsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
