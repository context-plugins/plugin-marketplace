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
using DynamicFeed.Requests.Recalls;

namespace DynamicFeed.Api;

public sealed class Recalls
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Recalls(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Recalls
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RecallsRecallsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// US product recalls — food, drug &amp; medical-device enforcement reports (openFDA, keyless, CC0).
    /// 'Is product X recalled right now?' Class I = most serious; most-recent first. (Requires API key.)
    /// </remarks>
    public Task<object> RecallsRecallsGet(RecallsRecallsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/recalls"),
            [],
            [
                new Param("query", request.Query),
                new Param("category", request.Category),
                new Param("limit", request.Limit),
            ],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RecallsRecallsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
