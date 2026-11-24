using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CircleCi.Core;
using CircleCi.Core.Exceptions;
using CircleCi.Core.Models;
using CircleCi.Core.Request;
using CircleCi.Core.Response;
using CircleCi.Errors;
using CircleCi.Models;
using CircleCi.Requests.BuildApi;

namespace CircleCi.Api;

/// <summary>
/// Endpoints for retrieving build details, triggering builds, retrying builds, and canceling builds.
/// </summary>
public sealed class BuildApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal BuildApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Cancel a build
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BuildSummary"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelBuildError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cancels a running build.
    /// </remarks>
    public Task<BuildSummary> CancelBuild(CancelBuildRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/project/{vcs-type}/{username}/{project}/{build_num}/cancel"),
            [
                new TemplateParam("vcs-type", request.VcsType),
                new TemplateParam("username", request.Username),
                new TemplateParam("project", request.Project),
                new TemplateParam("build_num", request.BuildNum),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<BuildSummary>(),
            CancelBuildError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get build details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BuildDetail"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBuildError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns detailed information about a specific build, including its status, steps, and timing information.
    /// </remarks>
    public Task<BuildDetail> GetBuild(GetBuildRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/project/{vcs-type}/{username}/{project}/{build_num}"),
            [
                new TemplateParam("vcs-type", request.VcsType),
                new TemplateParam("username", request.Username),
                new TemplateParam("project", request.Project),
                new TemplateParam("build_num", request.BuildNum),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BuildDetail>(),
            GetBuildError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List builds for a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="Build"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListProjectBuildsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of the most recent builds for the specified project, with optional filtering by branch.
    /// </remarks>
    public Task<IReadOnlyList<Build>> ListProjectBuilds(ListProjectBuildsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/project/{vcs-type}/{username}/{project}"),
            [
                new TemplateParam("vcs-type", request.VcsType),
                new TemplateParam("username", request.Username),
                new TemplateParam("project", request.Project),
            ],
            [
                new Param("filter", request.Filter),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<Build>>(),
            ListProjectBuildsError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List recent builds across all projects
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="Build"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListRecentBuildsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of the most recent builds across all followed projects for the authenticated user.
    /// </remarks>
    public Task<IReadOnlyList<Build>> ListRecentBuilds(ListRecentBuildsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/recent-builds"),
            [],
            [new Param("limit", request.Limit), new Param("offset", request.Offset)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<Build>>(),
            ListRecentBuildsError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retry a build
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BuildSummary"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RetryBuildError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retries a build using the same configuration and revision as the original build.
    /// </remarks>
    public Task<BuildSummary> RetryBuild(RetryBuildRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/project/{vcs-type}/{username}/{project}/{build_num}/retry"),
            [
                new TemplateParam("vcs-type", request.VcsType),
                new TemplateParam("username", request.Username),
                new TemplateParam("project", request.Project),
                new TemplateParam("build_num", request.BuildNum),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<BuildSummary>(),
            RetryBuildError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Trigger a build on a branch
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BuildSummary"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TriggerBranchBuildError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Triggers a new build on the specified branch of the project.
    /// </remarks>
    public Task<BuildSummary> TriggerBranchBuild(TriggerBranchBuildRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/project/{vcs-type}/{username}/{project}/tree/{branch}"),
            [
                new TemplateParam("vcs-type", request.VcsType),
                new TemplateParam("username", request.Username),
                new TemplateParam("project", request.Project),
                new TemplateParam("branch", request.Branch),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BuildSummary>(),
            TriggerBranchBuildError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Trigger a new build
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BuildSummary"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TriggerBuildError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Triggers a new build for the specified project. Optionally specify a branch, revision, or build parameters.
    /// </remarks>
    public Task<BuildSummary> TriggerBuild(TriggerBuildRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/project/{vcs-type}/{username}/{project}"),
            [
                new TemplateParam("vcs-type", request.VcsType),
                new TemplateParam("username", request.Username),
                new TemplateParam("project", request.Project),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BuildSummary>(),
            TriggerBuildError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);
}
