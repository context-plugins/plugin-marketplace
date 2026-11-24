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
using DynamicFeed.Requests.WhatsNew;

namespace DynamicFeed.Api;

public sealed class WhatsNew
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal WhatsNew(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Whats New Ep
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WhatsNewEpWhatsNewGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// What an AI has missed since its training cutoff — a LIVE snapshot of the current world
    /// (trending model, live prices, top exploited CVE, latest versions, a headline, fastest AI API)
    /// with a plain-English summary. The 'pulse' every connecting model can read. (Requires API key on
    /// REST; the same tool is keyless over MCP.)
    /// </remarks>
    public Task<object> WhatsNewEpWhatsNewGet(WhatsNewEpWhatsNewGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/whats-new"),
            [],
            [new Param("cutoff", request.Cutoff)],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            WhatsNewEpWhatsNewGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
