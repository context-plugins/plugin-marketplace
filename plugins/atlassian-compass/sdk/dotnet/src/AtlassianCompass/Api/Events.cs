using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AtlassianCompass.Core;
using AtlassianCompass.Core.Exceptions;
using AtlassianCompass.Core.Models;
using AtlassianCompass.Core.Request;
using AtlassianCompass.Core.Response;
using AtlassianCompass.Errors;
using AtlassianCompass.Requests.Events;

namespace AtlassianCompass.Api;

/// <summary>
/// This resource represents events. Use this resource to send events into an event source.
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
    /// Send event
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCompassEventError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sends an event into an event source. This API is rate limited. Only 100 requests per user per minute are allowed.
    /// </remarks>
    public Task CreateCompassEvent(CreateCompassEventRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/compass/v1/events"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            CreateCompassEventError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
