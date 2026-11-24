using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AppstoreSpy.Core;
using AppstoreSpy.Core.Exceptions;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Core.Request;
using AppstoreSpy.Core.Response;
using AppstoreSpy.Errors;
using AppstoreSpy.Models;
using AppstoreSpy.Requests.Events;

namespace AppstoreSpy.Api;

/// <summary>
/// LiveOps events Google Play surfaces on an app listing: sales, tournaments, updates and new content.
/// </summary>
public sealed class Events
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Events(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Google Play LiveOps events for an app
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="Event"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetEventsPlayLiveopsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the LiveOps events (sales, tournaments, updates, new content) Google Play shows for one app in one country. Responds 202 while a fresh crawl is in progress.
    /// </remarks>
    public Task<IReadOnlyList<Event>> GetEventsPlayLiveopsGet(GetEventsPlayLiveopsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/play/liveops"),
            [],
            [
                new Param("app", request.App),
                new Param("country", request.Country),
                new Param("freshness", request.Freshness),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<Event>>(),
            GetEventsPlayLiveopsGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);
}
