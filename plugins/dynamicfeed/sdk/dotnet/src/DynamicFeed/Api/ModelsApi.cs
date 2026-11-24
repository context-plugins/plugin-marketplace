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
using DynamicFeed.Requests.ModelsApi;

namespace DynamicFeed.Api;

public sealed class ModelsApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal ModelsApi(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Models
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ModelsModelsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search current AI models by price, context, capability. Cheapest first. (Requires API key.)
    /// </remarks>
    public Task<object> ModelsModelsGet(ModelsModelsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/models"),
            [],
            [
                new Param("q", request.Q),
                new Param("provider", request.Provider),
                new Param("max_input_price", request.MaxInputPrice),
                new Param("min_context", request.MinContext),
                new Param("needs_vision", request.NeedsVision),
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
            ModelsModelsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
