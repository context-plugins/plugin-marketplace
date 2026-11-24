using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Hud.Core;
using Hud.Core.Authentication;
using Hud.Core.Exceptions;
using Hud.Core.Models;
using Hud.Core.Request;
using Hud.Core.Response;
using Hud.Errors;
using Hud.Models;
using Hud.Requests.Inference;

namespace Hud.Api;

public sealed class Inference
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Inference(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Get Inference Usage
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="InferenceUsageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetInferenceUsageV2InferenceUsageGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the team's inference usage over a window, with summary and paged requests.
    /// </remarks>
    public Task<InferenceUsageResponse> GetInferenceUsageV2InferenceUsageGet(GetInferenceUsageV2InferenceUsageGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/inference/usage"),
            [],
            [
                new Param("days", request.Days),
                new Param("user_id", request.UserId),
                new Param("api_key_id", request.ApiKeyId),
                new Param("byok_credential_id", request.ByokCredentialId),
                new Param("model_id", request.ModelId),
                new Param("request_type", request.RequestType),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<InferenceUsageResponse>(),
            GetInferenceUsageV2InferenceUsageGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
