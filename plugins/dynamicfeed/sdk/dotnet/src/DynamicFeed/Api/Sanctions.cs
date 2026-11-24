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
using DynamicFeed.Requests.Sanctions;

namespace DynamicFeed.Api;

public sealed class Sanctions
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Sanctions(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Sanctions Screen
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SanctionsScreenSanctionsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Screen a name against the US OFAC SDN + UK Sanctions List (FCDO, Open Government Licence) — each match
    /// tagged with its list (US-OFAC | UK). A match means the party is sanctioned — legally binding the instant
    /// it's posted; models can't know recent designations. Confirm the full official entry before acting.
    /// (Requires API key.)
    /// </remarks>
    public Task<object> SanctionsScreenSanctionsGet(SanctionsScreenSanctionsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sanctions"),
            [],
            [new Param("name", request.Name), new Param("program", request.Program), new Param("limit", request.Limit)],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            SanctionsScreenSanctionsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
