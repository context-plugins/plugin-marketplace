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
using DevCycle.Requests.DeprecatedFeaturesV1;

namespace DevCycle.Api;

public sealed class DeprecatedFeaturesV1
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal DeprecatedFeaturesV1(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create Multiple Features with a single request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="FeatureDevCycleManagementDeprecatedFeaturesV1Api"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FeaturesControllerCreateMultipleV1Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create multiple new Features
    /// </remarks>
    public Task<IReadOnlyList<FeatureDevCycleManagementDeprecatedFeaturesV1Api>> FeaturesControllerCreateMultipleV1(FeaturesControllerCreateMultipleV1Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/features/multiple"),
            [new TemplateParam("project", request.Project)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyList<FeatureDevCycleManagementDeprecatedFeaturesV1Api>>(),
            FeaturesControllerCreateMultipleV1Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Feature
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FeatureDevCycleManagementDeprecatedFeaturesV1Api"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FeaturesControllerCreateV1Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new Feature
    /// </remarks>
    public Task<FeatureDevCycleManagementDeprecatedFeaturesV1Api> FeaturesControllerCreateV1(FeaturesControllerCreateV1Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/features"),
            [new TemplateParam("project", request.Project)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<FeatureDevCycleManagementDeprecatedFeaturesV1Api>(),
            FeaturesControllerCreateV1Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List linked Jira Issues
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="JiraIssueLink"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FeaturesControllerFindAllLinkedIssuesV1Error"/> when the server returns an error response.</exception>
    public Task<IReadOnlyList<JiraIssueLink>> FeaturesControllerFindAllLinkedIssuesV1(FeaturesControllerFindAllLinkedIssuesV1Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/features/{feature}/integrations/jira/issues"),
            [new TemplateParam("feature", request.Feature), new TemplateParam("project", request.Project)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<JiraIssueLink>>(),
            FeaturesControllerFindAllLinkedIssuesV1Error.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="FeaturesControllerFindAllV1Error"/> when the server returns an error response.</exception>
    public Task<IReadOnlyList<FeatureDevCycleManagementDeprecatedFeaturesV1Api>> FeaturesControllerFindAllV1(FeaturesControllerFindAllV1Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/features"),
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
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<FeatureDevCycleManagementDeprecatedFeaturesV1Api>>(),
            FeaturesControllerFindAllV1Error.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="FeaturesControllerFindOneV1Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a Feature by ID or key
    /// </remarks>
    public Task<FeatureDevCycleManagementDeprecatedFeaturesV1Api> FeaturesControllerFindOneV1(FeaturesControllerFindOneV1Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/features/{feature}"),
            [
                new TemplateParam("feature", request.Feature),
                new TemplateParam("key", request.Key),
                new TemplateParam("project", request.Project),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<FeatureDevCycleManagementDeprecatedFeaturesV1Api>(),
            FeaturesControllerFindOneV1Error.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="FeaturesControllerFindStaticConfigurationV1Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a completed Feature's static configuration
    /// </remarks>
    public Task<StaticConfiguration> FeaturesControllerFindStaticConfigurationV1(FeaturesControllerFindStaticConfigurationV1Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/features/{feature}/static-configuration"),
            [
                new TemplateParam("feature", request.Feature),
                new TemplateParam("key", request.Key),
                new TemplateParam("project", request.Project),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<StaticConfiguration>(),
            FeaturesControllerFindStaticConfigurationV1Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Link feature to Jira issue
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="JiraIssueLink"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FeaturesControllerLinkIssueV1Error"/> when the server returns an error response.</exception>
    public Task<JiraIssueLink> FeaturesControllerLinkIssueV1(FeaturesControllerLinkIssueV1Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/features/{feature}/integrations/jira/issues"),
            [new TemplateParam("feature", request.Feature), new TemplateParam("project", request.Project)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<JiraIssueLink>(),
            FeaturesControllerLinkIssueV1Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Unlink feature from Jira issue
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FeaturesControllerRemoveLinkedIssueV1Error"/> when the server returns an error response.</exception>
    public Task FeaturesControllerRemoveLinkedIssueV1(FeaturesControllerRemoveLinkedIssueV1Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/features/{feature}/integrations/jira/issues/{issue_id}"),
            [
                new TemplateParam("feature", request.Feature),
                new TemplateParam("issue_id", request.IssueId),
                new TemplateParam("key", request.Key),
                new TemplateParam("project", request.Project),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            FeaturesControllerRemoveLinkedIssueV1Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a Feature
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FeaturesControllerRemoveV1Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a Feature by ID or key
    /// </remarks>
    public Task FeaturesControllerRemoveV1(FeaturesControllerRemoveV1Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/features/{feature}"),
            [
                new TemplateParam("feature", request.Feature),
                new TemplateParam("key", request.Key),
                new TemplateParam("project", request.Project),
            ],
            [new Param("deleteVariables", request.DeleteVariables)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            FeaturesControllerRemoveV1Error.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="FeaturesControllerUpdateStaticConfigurationV1Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a completed Feature's static configuration
    /// </remarks>
    public Task<StaticConfiguration> FeaturesControllerUpdateStaticConfigurationV1(FeaturesControllerUpdateStaticConfigurationV1Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/features/{feature}/static-configuration"),
            [
                new TemplateParam("feature", request.Feature),
                new TemplateParam("key", request.Key),
                new TemplateParam("project", request.Project),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StaticConfiguration>(),
            FeaturesControllerUpdateStaticConfigurationV1Error.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="FeaturesControllerUpdateStatusV1Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a Feature's status by key
    /// </remarks>
    public Task<FeatureDevCycleManagementDeprecatedFeaturesV1Api> FeaturesControllerUpdateStatusV1(FeaturesControllerUpdateStatusV1Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/features/{feature}/status"),
            [
                new TemplateParam("feature", request.Feature),
                new TemplateParam("key", request.Key),
                new TemplateParam("project", request.Project),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<FeatureDevCycleManagementDeprecatedFeaturesV1Api>(),
            FeaturesControllerUpdateStatusV1Error.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="FeaturesControllerUpdateV1Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a Feature by ID or key
    /// </remarks>
    public Task<FeatureDevCycleManagementDeprecatedFeaturesV1Api> FeaturesControllerUpdateV1(FeaturesControllerUpdateV1Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/features/{feature}"),
            [new TemplateParam("feature", request.Feature), new TemplateParam("project", request.Project)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<FeatureDevCycleManagementDeprecatedFeaturesV1Api>(),
            FeaturesControllerUpdateV1Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
