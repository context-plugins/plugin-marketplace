using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Postscript.Core;
using Postscript.Core.Exceptions;
using Postscript.Core.Models;
using Postscript.Core.Request;
using Postscript.Core.Response;
using Postscript.Errors;
using Postscript.Models;
using Postscript.Requests.Events;

namespace Postscript.Api;

/// <summary>
/// Send custom events for use in Postscript Flows and triggers.
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
    /// Create Custom Event
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV2EventsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCustomEventError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Send a Custom Event to use in Flows
    /// </remarks>
    public Task<ApiV2EventsResponse> CreateCustomEvent(CreateCustomEventRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/events"),
            [],
            [],
            [
                new HeaderParam("X-Postscript-Shop-Token", request.XPostscriptShopToken),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV2EventsResponse>(),
            CreateCustomEventError.Response,
            _auth.Sec0,
            requestOptions,
            cancellationToken);
}
