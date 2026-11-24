using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Upstox.Core;
using Upstox.Core.Authentication;
using Upstox.Core.Exceptions;
using Upstox.Core.Models;
using Upstox.Core.Request;
using Upstox.Core.Response;
using Upstox.Errors;
using Upstox.Models;
using Upstox.Requests.EventsControllerV2;

namespace Upstox.Api;

public sealed class EventsControllerV2
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal EventsControllerV2(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Publish event
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EventResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PublishEventError"/> when the server returns an error response.</exception>
    public Task<EventResponse> PublishEvent(PublishEventRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/events"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EventResponse>(),
            PublishEventError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
