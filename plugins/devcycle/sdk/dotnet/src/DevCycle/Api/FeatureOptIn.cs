using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DevCycle.Core;
using DevCycle.Core.Authentication;
using DevCycle.Core.Exceptions;
using DevCycle.Core.Models;
using DevCycle.Core.Request;
using DevCycle.Core.Response;
using DevCycle.Errors;
using DevCycle.Models;
using DevCycle.Requests.FeatureOptIn;

namespace DevCycle.Api;

public sealed class FeatureOptIn
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal FeatureOptIn(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Fetch opt-in config
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OptInConfigResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetV1OptInConfigError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetch a project config to display features available for Opt-in
    /// </remarks>
    public Task<OptInConfigResponse> GetV1OptInConfig(GetV1OptInConfigRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultDevCycleBucketingBucketingApi("/v1/optInConfig"),
            [],
            [new Param("user_id", request.UserId), new Param("sdkKey", request.SdkKey)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<OptInConfigResponse>(),
            GetV1OptInConfigError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update opt-in preferences for a user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1OptInsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutV1OptInsByUserIdError"/> when the server returns an error response.</exception>
    public Task<V1OptInsResponse> PutV1OptInsByUserId(PutV1OptInsByUserIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultDevCycleBucketingBucketingApi("/v1/optIns/{user_id}"),
            [new TemplateParam("user_id", request.UserId)],
            [new Param("sdkKey", request.SdkKey)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1OptInsResponse>(),
            PutV1OptInsByUserIdError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
