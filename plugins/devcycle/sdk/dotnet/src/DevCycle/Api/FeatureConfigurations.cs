using System;
using System.Collections.Generic;
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
using DevCycle.Requests.FeatureConfigurations;

namespace DevCycle.Api;

public sealed class FeatureConfigurations
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal FeatureConfigurations(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// List Feature configurations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="FeatureConfig"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FeatureConfigsControllerFindAllError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List Feature configurations for all environments or by environment key or ID
    /// </remarks>
    public Task<IReadOnlyList<FeatureConfig>> FeatureConfigsControllerFindAll(FeatureConfigsControllerFindAllRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/features/{feature}/configurations"),
            [new TemplateParam("feature", request.Feature), new TemplateParam("project", request.Project)],
            [new Param("environment", request.Environment)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<FeatureConfig>>(),
            FeatureConfigsControllerFindAllError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a Feature configuration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FeatureConfig"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FeatureConfigsControllerUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a Feature configuration by environment key or ID
    /// </remarks>
    public Task<FeatureConfig> FeatureConfigsControllerUpdate(FeatureConfigsControllerUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/features/{feature}/configurations"),
            [new TemplateParam("feature", request.Feature), new TemplateParam("project", request.Project)],
            [new Param("environment", request.Environment)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<FeatureConfig>(),
            FeatureConfigsControllerUpdateError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
