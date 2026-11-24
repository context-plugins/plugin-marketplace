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
using Hud.Requests.Usage;

namespace Hud.Api;

public sealed class Usage
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Usage(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Get Environment Usage
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EnvironmentUsageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetEnvironmentUsageV2EnvironmentsUsageGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the team's environment session usage over a window, with summary and paged sessions.
    /// </remarks>
    public Task<EnvironmentUsageResponse> GetEnvironmentUsageV2EnvironmentsUsageGet(GetEnvironmentUsageV2EnvironmentsUsageGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/environments/usage"),
            [],
            [
                new Param("days", request.Days),
                new Param("user_id", request.UserId),
                new Param("api_key_id", request.ApiKeyId),
                new Param("status", request.Status),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EnvironmentUsageResponse>(),
            GetEnvironmentUsageV2EnvironmentsUsageGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Inference Usage Aggregate
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="InferenceUsageAggregateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetInferenceUsageAggregateV2UsageInferenceGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Aggregate the team's inference usage into time buckets, optionally grouped.
    /// </remarks>
    public Task<InferenceUsageAggregateResponse> GetInferenceUsageAggregateV2UsageInferenceGet(GetInferenceUsageAggregateV2UsageInferenceGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/usage/inference"),
            [],
            [
                new Param("start", request.Start),
                new Param("end", request.End),
                new Param("bucket_width", request.BucketWidth),
                new Param("group_by", request.GroupBy),
                new Param("user_id", request.UserId),
                new Param("api_key_id", request.ApiKeyId),
                new Param("byok_credential_id", request.ByokCredentialId),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<InferenceUsageAggregateResponse>(),
            GetInferenceUsageAggregateV2UsageInferenceGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
