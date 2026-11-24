using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Bitbucket.Core;
using Bitbucket.Core.Authentication;
using Bitbucket.Core.Exceptions;
using Bitbucket.Core.Models;
using Bitbucket.Core.Request;
using Bitbucket.Core.Response;
using Bitbucket.Errors;
using Bitbucket.Models.AllOf;
using Bitbucket.Requests.BranchingModelApi;

namespace Bitbucket.Api;

/// <summary>
/// The branching model resource is used to modify the branching model
/// for a repository.
/// <para>
/// You can use the branching model to define a branch based workflow
/// for your repositories. When you map your workflow to branch types,
/// you can ensure that branches are named consistently by configuring
/// which branch types to make available.
/// </para>
/// </summary>
public sealed class BranchingModelApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal BranchingModelApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get the branching model for a repository
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BranchingModel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugBranchingModelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Return the branching model as applied to the repository. This view is
    /// read-only. The branching model settings can be changed using the
    /// settings API.
    /// <para>
    /// The returned object:
    /// </para>
    /// <para>
    /// 1. Always has a <c>development</c> property. <c>development.branch</c> contains
    /// the actual repository branch object that is considered to be the
    /// <c>development</c> branch. <c>development.branch</c> will not be present
    /// if it does not exist.
    /// 2. Might have a <c>production</c> property. <c>production</c> will not
    /// be present when <c>production</c> is disabled.
    /// <c>production.branch</c> contains the actual branch object that is
    /// considered to be the <c>production</c> branch. <c>production.branch</c> will
    /// not be present if it does not exist.
    /// 3. Always has a <c>branch_types</c> array which contains all enabled branch
    /// types.
    /// </para>
    /// </remarks>
    public Task<BranchingModel> GetRepositoriesByWorkspaceByRepoSlugBranchingModel(GetRepositoriesByWorkspaceByRepoSlugBranchingModelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/branching-model"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BranchingModel>(),
            GetRepositoriesByWorkspaceByRepoSlugBranchingModelError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get the branching model config for a repository
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BranchingModelSettings"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Return the branching model configuration for a repository. The returned
    /// object:
    /// <para>
    /// 1. Always has a <c>development</c> property for the development branch.
    /// 2. Always a <c>production</c> property for the production branch. The
    /// production branch can be disabled.
    /// 3. The <c>branch_types</c> contains all the branch types.
    /// 4. <c>default_branch_deletion</c> indicates whether branches will be
    /// deleted by default on merge.
    /// </para>
    /// <para>
    /// This is the raw configuration for the branching model. A client
    /// wishing to see the branching model with its actual current branches may
    /// find the active model API more useful.
    /// </para>
    /// </remarks>
    public Task<BranchingModelSettings> GetRepositoriesByWorkspaceByRepoSlugBranchingModelSettings(GetRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/branching-model/settings"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BranchingModelSettings>(),
            GetRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get the effective, or currently applied, branching model for a repository
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EffectiveRepoBranchingModel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugEffectiveBranchingModelError"/> when the server returns an error response.</exception>
    public Task<EffectiveRepoBranchingModel> GetRepositoriesByWorkspaceByRepoSlugEffectiveBranchingModel(GetRepositoriesByWorkspaceByRepoSlugEffectiveBranchingModelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/effective-branching-model"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EffectiveRepoBranchingModel>(),
            GetRepositoriesByWorkspaceByRepoSlugEffectiveBranchingModelError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get the branching model for a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectBranchingModel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Return the branching model set at the project level. This view is
    /// read-only. The branching model settings can be changed using the
    /// settings
    /// API.
    /// <para>
    /// The returned object:
    /// </para>
    /// <para>
    /// 1. Always has a <c>development</c> property. <c>development.name</c> is
    /// the user-specified branch that can be inherited by an individual repository's
    /// branching model.
    /// 2. Might have a <c>production</c> property. <c>production</c> will not
    /// be present when <c>production</c> is disabled.
    /// <c>production.name</c> is the user-specified branch that can be
    /// inherited by an individual repository's branching model.
    /// 3. Always has a <c>branch_types</c> array which contains all enabled branch
    /// types.
    /// </para>
    /// </remarks>
    public Task<ProjectBranchingModel> GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModel(GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/projects/{project_key}/branching-model"),
            [new TemplateParam("project_key", request.ProjectKey), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ProjectBranchingModel>(),
            GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get the branching model config for a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BranchingModelSettings"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Return the branching model configuration for a project. The returned
    /// object:
    /// <para>
    /// 1. Always has a <c>development</c> property for the development branch.
    /// 2. Always a <c>production</c> property for the production branch. The
    /// production branch can be disabled.
    /// 3. The <c>branch_types</c> contains all the branch types.
    /// 4. <c>default_branch_deletion</c> indicates whether branches will be
    /// deleted by default on merge.
    /// </para>
    /// <para>
    /// This is the raw configuration for the branching model. A client
    /// wishing to see the branching model with its actual current branches may find the
    /// active model API
    /// more useful.
    /// </para>
    /// </remarks>
    public Task<BranchingModelSettings> GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettings(GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/projects/{project_key}/branching-model/settings"),
            [new TemplateParam("project_key", request.ProjectKey), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BranchingModelSettings>(),
            GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update the branching model config for a repository
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BranchingModelSettings"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the branching model configuration for a repository.
    /// <para>
    /// The <c>development</c> branch can be configured to a specific branch or to
    /// track the main branch. When set to a specific branch it must
    /// currently exist. Only the passed properties will be updated. The
    /// properties not passed will be left unchanged. A request without a
    /// <c>development</c> property will leave the development branch unchanged.
    /// </para>
    /// <para>
    /// It is possible for the <c>development</c> branch to be invalid. This
    /// happens when it points at a specific branch that has been
    /// deleted. This is indicated in the <c>is_valid</c> field for the branch. It is
    /// not possible to update the settings for <c>development</c> if that
    /// would leave the branch in an invalid state. Such a request will be
    /// rejected.
    /// </para>
    /// <para>
    /// The <c>production</c> branch can be a specific branch, the main
    /// branch or disabled. When set to a specific branch it must currently
    /// exist. The <c>enabled</c> property can be used to enable (<c>true</c>) or
    /// disable (<c>false</c>) it. Only the passed properties will be updated. The
    /// properties not passed will be left unchanged. A request without a
    /// <c>production</c> property will leave the production branch unchanged.
    /// </para>
    /// <para>
    /// It is possible for the <c>production</c> branch to be invalid. This
    /// happens when it points at a specific branch that has been
    /// deleted. This is indicated in the <c>is_valid</c> field for the branch. A
    /// request that would leave <c>production</c> enabled and invalid will be
    /// rejected. It is possible to update <c>production</c> and make it invalid if
    /// it would also be left disabled.
    /// </para>
    /// <para>
    /// The <c>branch_types</c> property contains the branch types to be updated.
    /// Only the branch types passed will be updated. All updates will be
    /// rejected if it would leave the branching model in an invalid state.
    /// For branch types this means that:
    /// </para>
    /// <para>
    /// 1. The prefixes for all enabled branch types are valid. For example,
    /// it is not possible to use '*' inside a Git prefix.
    /// 2. A prefix of an enabled branch type must not be a prefix of another
    /// enabled branch type. This is to ensure that a branch can be easily
    /// classified by its prefix unambiguously.
    /// </para>
    /// <para>
    /// It is possible to store an invalid prefix if that branch type would be
    /// left disabled. Only the passed properties will be updated. The
    /// properties not passed will be left unchanged. Each branch type must
    /// have a <c>kind</c> property to identify it.
    /// </para>
    /// <para>
    /// The <c>default_branch_deletion</c> property is a string. The value of <c>true</c>
    /// indicates to delete branches by default. The value of <c>false</c> indicates
    /// that branches will not be deleted by default. A request without a
    /// <c>default_branch_deletion</c> property will leave it unchanged. Other values
    /// would be ignored.
    /// </para>
    /// <para>
    /// There is currently a side effect when using this API endpoint. If the
    /// repository is inheriting branching model settings from its project,
    /// updating the branching model for this repository will disable the
    /// project setting inheritance.
    /// </para>
    /// <para>
    /// We have deprecated this side effect and will remove it on 1 August 2022.
    /// </para>
    /// </remarks>
    public Task<BranchingModelSettings> PutRepositoriesByWorkspaceByRepoSlugBranchingModelSettings(PutRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/branching-model/settings"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            JsonResponse.Create<BranchingModelSettings>(),
            PutRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update the branching model config for a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BranchingModelSettings"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the branching model configuration for a project.
    /// <para>
    /// The <c>development</c> branch can be configured to a specific branch or to
    /// track the main branch. Any branch name can be supplied, but will only
    /// successfully be applied to a repository via inheritance if that branch
    /// exists for that repository. Only the passed properties will be updated. The
    /// properties not passed will be left unchanged. A request without a
    /// <c>development</c> property will leave the development branch unchanged.
    /// </para>
    /// <para>
    /// The <c>production</c> branch can be a specific branch, the main
    /// branch or disabled. Any branch name can be supplied, but will only
    /// successfully be applied to a repository via inheritance if that branch
    /// exists for that repository. The <c>enabled</c> property can be used to enable (<c>true</c>)
    /// or disable (<c>false</c>) it. Only the passed properties will be updated. The
    /// properties not passed will be left unchanged. A request without a
    /// <c>production</c> property will leave the production branch unchanged.
    /// </para>
    /// <para>
    /// The <c>branch_types</c> property contains the branch types to be updated.
    /// Only the branch types passed will be updated. All updates will be
    /// rejected if it would leave the branching model in an invalid state.
    /// For branch types this means that:
    /// </para>
    /// <para>
    /// 1. The prefixes for all enabled branch types are valid. For example,
    /// it is not possible to use '*' inside a Git prefix.
    /// 2. A prefix of an enabled branch type must not be a prefix of another
    /// enabled branch type. This is to ensure that a branch can be easily
    /// classified by its prefix unambiguously.
    /// </para>
    /// <para>
    /// It is possible to store an invalid prefix if that branch type would be
    /// left disabled. Only the passed properties will be updated. The
    /// properties not passed will be left unchanged. Each branch type must
    /// have a <c>kind</c> property to identify it.
    /// </para>
    /// <para>
    /// The <c>default_branch_deletion</c> property is a string. The value of <c>true</c>
    /// indicates to delete branches by default. The value of <c>false</c> indicates
    /// that branches will not be deleted by default. A request without a
    /// <c>default_branch_deletion</c> property will leave it unchanged. Other values
    /// would be ignored.
    /// </para>
    /// </remarks>
    public Task<BranchingModelSettings> PutWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettings(PutWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/projects/{project_key}/branching-model/settings"),
            [new TemplateParam("project_key", request.ProjectKey), new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            JsonResponse.Create<BranchingModelSettings>(),
            PutWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
