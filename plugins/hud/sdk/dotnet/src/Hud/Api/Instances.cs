using System;
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
using Hud.Requests.Instances;

namespace Hud.Api;

public sealed class Instances
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Instances(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// List Instances
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ActiveInstancesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListInstancesV2InstanceGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List a registry's instances, optionally including recently terminated ones.
    /// </remarks>
    public Task<ActiveInstancesResponse> ListInstancesV2InstanceGet(ListInstancesV2InstanceGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/instance"),
            [],
            [
                new Param("registry_id", request.RegistryId),
                new Param("include_terminated", request.IncludeTerminated),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ActiveInstancesResponse>(),
            ListInstancesV2InstanceGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Stop Instances
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StopInstancesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StopInstancesV2InstanceStopPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Stop the given instances of a registry, reporting per-instance results.
    /// </remarks>
    public Task<StopInstancesResponse> StopInstancesV2InstanceStopPost(StopInstancesV2InstanceStopPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/instance/stop"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StopInstancesResponse>(),
            StopInstancesV2InstanceStopPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
