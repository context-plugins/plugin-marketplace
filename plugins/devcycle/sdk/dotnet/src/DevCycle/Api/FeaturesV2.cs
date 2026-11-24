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
using DevCycle.Requests.FeaturesV2;

namespace DevCycle.Api;

public sealed class FeaturesV2
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal FeaturesV2(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create Feature
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FeatureDevCycleManagementDeprecatedFeaturesV1Api"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FeaturesControllerCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new Feature
    /// </remarks>
    public Task<FeatureDevCycleManagementDeprecatedFeaturesV1Api> FeaturesControllerCreate(FeaturesControllerCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{project}/features"),
            [new TemplateParam("project", request.Project)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<FeatureDevCycleManagementDeprecatedFeaturesV1Api>(),
            FeaturesControllerCreateError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Features
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="FeatureDevCycleManagementDeprecatedFeaturesV1Api"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FeaturesControllerFindAllError"/> when the server returns an error response.</exception>
    public Task<IReadOnlyList<FeatureDevCycleManagementDeprecatedFeaturesV1Api>> FeaturesControllerFindAll(FeaturesControllerFindAllRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{project}/features"),
            [new TemplateParam("project", request.Project)],
            [
                new Param("page", request.Page),
                new Param("perPage", request.PerPage),
                new Param("sortBy", request.SortBy),
                new Param("sortOrder", request.SortOrder),
                new Param("search", request.Search),
                new Param("createdBy", request.CreatedBy),
                new Param("type", request.Type),
                new Param("status", request.Status),
                new Param("customStatus", request.CustomStatus),
                new Param("keys", request.Keys),
                new Param("includeLatestUpdate", request.IncludeLatestUpdate),
                new Param("staleness", request.Staleness),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<FeatureDevCycleManagementDeprecatedFeaturesV1Api>>(),
            FeaturesControllerFindAllError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a Feature
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FeatureDevCycleManagementDeprecatedFeaturesV1Api"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FeaturesControllerFindOneError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a Feature by ID or key
    /// </remarks>
    public Task<FeatureDevCycleManagementDeprecatedFeaturesV1Api> FeaturesControllerFindOne(FeaturesControllerFindOneRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{project}/features/{feature}"),
            [new TemplateParam("feature", request.Feature), new TemplateParam("project", request.Project)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<FeatureDevCycleManagementDeprecatedFeaturesV1Api>(),
            FeaturesControllerFindOneError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a Feature's Static Configuration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StaticConfiguration"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FeaturesControllerFindStaticConfigurationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a completed Feature's static configuration
    /// </remarks>
    public Task<StaticConfiguration> FeaturesControllerFindStaticConfiguration(FeaturesControllerFindStaticConfigurationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{project}/features/{feature}/static-configuration"),
            [new TemplateParam("feature", request.Feature), new TemplateParam("project", request.Project)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<StaticConfiguration>(),
            FeaturesControllerFindStaticConfigurationError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a Feature's Staleness
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FeatureStalenessEntity"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FeaturesControllerGetStalenessError"/> when the server returns an error response.</exception>
    public Task<FeatureStalenessEntity> FeaturesControllerGetStaleness(FeaturesControllerGetStalenessRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{project}/features/{feature}/staleness"),
            [new TemplateParam("feature", request.Feature), new TemplateParam("project", request.Project)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<FeatureStalenessEntity>(),
            FeaturesControllerGetStalenessError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a Feature
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FeatureDevCycleManagementDeprecatedFeaturesV1Api"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FeaturesControllerUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a Feature by ID or key
    /// </remarks>
    public Task<FeatureDevCycleManagementDeprecatedFeaturesV1Api> FeaturesControllerUpdate(FeaturesControllerUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{project}/features/{feature}"),
            [new TemplateParam("feature", request.Feature), new TemplateParam("project", request.Project)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<FeatureDevCycleManagementDeprecatedFeaturesV1Api>(),
            FeaturesControllerUpdateError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a Feature's Staleness
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FeatureStalenessEntity"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FeaturesControllerUpdateStalenessError"/> when the server returns an error response.</exception>
    public Task<FeatureStalenessEntity> FeaturesControllerUpdateStaleness(FeaturesControllerUpdateStalenessRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{project}/features/{feature}/staleness"),
            [new TemplateParam("feature", request.Feature), new TemplateParam("project", request.Project)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<FeatureStalenessEntity>(),
            FeaturesControllerUpdateStalenessError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a Feature's Static Configuration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StaticConfiguration"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FeaturesControllerUpdateStaticConfigurationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a completed Feature's static configuration
    /// </remarks>
    public Task<StaticConfiguration> FeaturesControllerUpdateStaticConfiguration(FeaturesControllerUpdateStaticConfigurationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{project}/features/{feature}/static-configuration"),
            [new TemplateParam("feature", request.Feature), new TemplateParam("project", request.Project)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StaticConfiguration>(),
            FeaturesControllerUpdateStaticConfigurationError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a Feature's status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FeatureDevCycleManagementDeprecatedFeaturesV1Api"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FeaturesControllerUpdateStatusError"/> when the server returns an error response.</exception>
    public Task<FeatureDevCycleManagementDeprecatedFeaturesV1Api> FeaturesControllerUpdateStatus(FeaturesControllerUpdateStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{project}/features/{feature}/status"),
            [new TemplateParam("feature", request.Feature), new TemplateParam("project", request.Project)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<FeatureDevCycleManagementDeprecatedFeaturesV1Api>(),
            FeaturesControllerUpdateStatusError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a Feature's summary
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FeatureSummary"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FeaturesControllerUpdateSummaryError"/> when the server returns an error response.</exception>
    public Task<FeatureSummary> FeaturesControllerUpdateSummary(FeaturesControllerUpdateSummaryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{project}/features/{feature}/summary"),
            [new TemplateParam("feature", request.Feature), new TemplateParam("project", request.Project)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<FeatureSummary>(),
            FeaturesControllerUpdateSummaryError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
