using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Jid.Core;
using Jid.Core.Authentication;
using Jid.Core.Exceptions;
using Jid.Core.Models;
using Jid.Core.Request;
using Jid.Core.Response;
using Jid.Errors;
using Jid.Models;
using Jid.Requests.SignalApi;

namespace Jid.Api;

public sealed class SignalApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal SignalApi(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Jid Signals: a 30-minute signed location token for the visitor (call from the…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1SignalResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SignalError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Called from the visitor's browser by https://jid.com/s/1.js. Jid reads the connection's country, region, city and network type itself and returns an HMAC-signed token (never the IP) for the form to forward to /v1/qualify or /v1/screen as <c>signal</c>. No key, CORS open, never cached, rate-limited per IP. See https://jid.com/signals.
    /// </remarks>
    public Task<V1SignalResponse> Signal(SignalRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/signal"),
            [],
            [new Param("tz", request.Tz)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1SignalResponse>(),
            SignalError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
