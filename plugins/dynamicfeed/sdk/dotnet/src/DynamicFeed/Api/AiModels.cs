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
using DynamicFeed.Requests.AiModels;

namespace DynamicFeed.Api;

public sealed class AiModels
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal AiModels(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Ai Models Ep
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AiModelsEpAiModelsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Current &amp; trending AI models from the open-model ecosystem (Hugging Face) — name, org, task,
    /// popularity, release date. Complements /models (closed-flagship pricing &amp; versions). (Requires API key.)
    /// </remarks>
    public Task<object> AiModelsEpAiModelsGet(AiModelsEpAiModelsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ai-models"),
            [],
            [
                new Param("query", request.Query),
                new Param("org", request.Org),
                new Param("task", request.Task),
                new Param("sort", request.Sort),
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
            AiModelsEpAiModelsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
