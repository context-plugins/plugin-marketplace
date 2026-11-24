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
using DevCycle.Requests.Overrides;

namespace DevCycle.Api;

public sealed class Overrides
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Overrides(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Delete override for specific feature and environment for the current user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="OverridesControllerDeleteOverridesForFeatureError"/> when the server returns an error response.</exception>
    public Task OverridesControllerDeleteOverridesForFeature(OverridesControllerDeleteOverridesForFeatureRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/features/{feature}/overrides/current"),
            [new TemplateParam("feature", request.Feature), new TemplateParam("project", request.Project)],
            [new Param("environment", request.Environment)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            OverridesControllerDeleteOverridesForFeatureError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete all overrides for project for current user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="OverridesControllerDeleteOverridesForProjectError"/> when the server returns an error response.</exception>
    public Task OverridesControllerDeleteOverridesForProject(OverridesControllerDeleteOverridesForProjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/overrides/current"),
            [new TemplateParam("project", request.Project)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            OverridesControllerDeleteOverridesForProjectError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get feature overrides for current user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OverrideResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="OverridesControllerFindOneError"/> when the server returns an error response.</exception>
    public Task<OverrideResponse> OverridesControllerFindOne(OverridesControllerFindOneRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/features/{feature}/overrides/current"),
            [new TemplateParam("feature", request.Feature), new TemplateParam("project", request.Project)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<OverrideResponse>(),
            OverridesControllerFindOneError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get overrides for feature
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FeatureOverrides"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="OverridesControllerFindOverridesForFeatureError"/> when the server returns an error response.</exception>
    public Task<FeatureOverrides> OverridesControllerFindOverridesForFeature(OverridesControllerFindOverridesForFeatureRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/features/{feature}/overrides"),
            [new TemplateParam("feature", request.Feature), new TemplateParam("project", request.Project)],
            [new Param("addMetadata", request.AddMetadata), new Param("environment", request.Environment)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<FeatureOverrides>(),
            OverridesControllerFindOverridesForFeatureError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get all overrides for project for current user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="UserOverride"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="OverridesControllerFindOverridesForProjectError"/> when the server returns an error response.</exception>
    public Task<IReadOnlyList<UserOverride>> OverridesControllerFindOverridesForProject(OverridesControllerFindOverridesForProjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/overrides/current"),
            [new TemplateParam("project", request.Project)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<UserOverride>>(),
            OverridesControllerFindOverridesForProjectError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Overrides for the Current User
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Override"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="OverridesControllerUpdateFeatureOverrideError"/> when the server returns an error response.</exception>
    public Task<Override> OverridesControllerUpdateFeatureOverride(OverridesControllerUpdateFeatureOverrideRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/features/{feature}/overrides/current"),
            [new TemplateParam("feature", request.Feature), new TemplateParam("project", request.Project)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Override>(),
            OverridesControllerUpdateFeatureOverrideError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
