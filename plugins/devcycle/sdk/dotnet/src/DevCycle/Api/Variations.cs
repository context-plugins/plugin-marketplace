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
using DevCycle.Requests.Variations;

namespace DevCycle.Api;

public sealed class Variations
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Variations(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create a Feature Variation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FeatureDevCycleManagementMetricAssociationsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="VariationsControllerCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new variation within a Feature
    /// </remarks>
    public Task<FeatureDevCycleManagementMetricAssociationsApi> VariationsControllerCreate(VariationsControllerCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/features/{feature}/variations"),
            [new TemplateParam("project", request.Project), new TemplateParam("feature", request.Feature)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<FeatureDevCycleManagementMetricAssociationsApi>(),
            VariationsControllerCreateError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Feature Variations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="Variation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="VariationsControllerFindAllError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of variations for a feature
    /// </remarks>
    public Task<IReadOnlyList<Variation>> VariationsControllerFindAll(VariationsControllerFindAllRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/features/{feature}/variations"),
            [new TemplateParam("feature", request.Feature), new TemplateParam("project", request.Project)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<Variation>>(),
            VariationsControllerFindAllError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a Feature Variation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Variation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="VariationsControllerFindOneError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a variation by ID or key
    /// </remarks>
    public Task<Variation> VariationsControllerFindOne(VariationsControllerFindOneRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/features/{feature}/variations/{key}"),
            [
                new TemplateParam("key", request.Key),
                new TemplateParam("feature", request.Feature),
                new TemplateParam("project", request.Project),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Variation>(),
            VariationsControllerFindOneError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a Feature Variation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FeatureDevCycleManagementMetricAssociationsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="VariationsControllerUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a variation by ID or key
    /// </remarks>
    public Task<FeatureDevCycleManagementMetricAssociationsApi> VariationsControllerUpdate(VariationsControllerUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/features/{feature}/variations/{key}"),
            [
                new TemplateParam("key", request.Key),
                new TemplateParam("feature", request.Feature),
                new TemplateParam("project", request.Project),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<FeatureDevCycleManagementMetricAssociationsApi>(),
            VariationsControllerUpdateError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
