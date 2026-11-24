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
using Bitbucket.Models;
using Bitbucket.Models.AllOf;
using Bitbucket.Requests.BranchRestrictions;

namespace Bitbucket.Api;

/// <summary>
/// Repository owners and administrators can set branch management
/// rules on a repository that control what can be pushed by whom.
/// Through these rules, you can enforce a project or team
/// workflow. For example, owners or administrators can:
/// <list type="bullet">
///   <item><description>Limit push powers</description></item>
///   <item><description>Prevent branch deletion</description></item>
///   <item><description>Prevent history re-writes (Git only)</description></item>
/// </list>
/// </summary>
public sealed class BranchRestrictions
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal BranchRestrictions(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete a branch restriction rule
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an existing branch restriction rule.
    /// </remarks>
    public Task DeleteRepositoriesByWorkspaceByRepoSlugBranchRestrictionsById(DeleteRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}"),
            [
                new TemplateParam("id", request.Id),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List branch restrictions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedBranchRestrictions"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of all branch restrictions on the
    /// repository.
    /// </remarks>
    public Task<PaginatedBranchRestrictions> GetRepositoriesByWorkspaceByRepoSlugBranchRestrictions(GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/branch-restrictions"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [new Param("kind", request.Kind), new Param("pattern", request.Pattern)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedBranchRestrictions>(),
            GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a branch restriction rule
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Branchrestriction"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a specific branch restriction rule.
    /// </remarks>
    public Task<Branchrestriction> GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsById(GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}"),
            [
                new TemplateParam("id", request.Id),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Branchrestriction>(),
            GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a branch restriction rule
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Branchrestriction"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostRepositoriesByWorkspaceByRepoSlugBranchRestrictionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new branch restriction rule for a repository.
    /// <para>
    /// <c>kind</c> describes what will be restricted. Allowed values include:
    /// <c>push</c>, <c>force</c>, <c>delete</c>, <c>restrict_merges</c>, <c>require_tasks_to_be_completed</c>,
    /// <c>require_approvals_to_merge</c>, <c>require_default_reviewer_approvals_to_merge</c>,
    /// <c>require_no_changes_requested</c>, <c>require_passing_builds_to_merge</c>, <c>require_commits_behind</c>,
    /// <c>reset_pullrequest_approvals_on_change</c>, <c>smart_reset_pullrequest_approvals</c>,
    /// <c>reset_pullrequest_changes_requested_on_change</c>, <c>require_all_dependencies_merged</c>,
    /// <c>enforce_merge_checks</c>, and <c>allow_auto_merge_when_builds_pass</c>.
    /// </para>
    /// <para>
    /// Different kinds of branch restrictions have different requirements:
    /// </para>
    /// <para>
    /// * <c>push</c> and <c>restrict_merges</c> require <c>users</c> and <c>groups</c> to be
    /// specified. Empty lists are allowed, in which case permission is
    /// denied for everybody.
    /// </para>
    /// <para>
    /// The restriction applies to all branches that match. There are
    /// two ways to match a branch. It is configured in <c>branch_match_kind</c>:
    /// </para>
    /// <para>
    /// 1. <c>glob</c>: Matches a branch against the <c>pattern</c>. A <c>'*'</c> in
    /// <c>pattern</c> will expand to match zero or more characters, and every
    /// other character matches itself. For example, <c>'foo*'</c> will match
    /// <c>'foo'</c> and <c>'foobar'</c>, but not <c>'barfoo'</c>. <c>'*'</c> will match all
    /// branches.
    /// 2. <c>branching_model</c>: Matches a branch against the repository's
    /// branching model. The <c>branch_type</c> controls the type of branch
    /// to match. Allowed values include: <c>production</c>, <c>development</c>,
    /// <c>bugfix</c>, <c>release</c>, <c>feature</c> and <c>hotfix</c>.
    /// </para>
    /// <para>
    /// The combination of <c>kind</c> and match must be unique. This means that
    /// two <c>glob</c> restrictions in a repository cannot have the same <c>kind</c> and
    /// <c>pattern</c>. Additionally, two <c>branching_model</c> restrictions in a
    /// repository cannot have the same <c>kind</c> and <c>branch_type</c>.
    /// </para>
    /// <para>
    /// <c>users</c> and <c>groups</c> are lists of users and groups that are except from
    /// the restriction. They can only be configured in <c>push</c> and
    /// <c>restrict_merges</c> restrictions. The <c>push</c> restriction stops a user
    /// pushing to matching branches unless that user is in <c>users</c> or is a
    /// member of a group in <c>groups</c>. The <c>restrict_merges</c> stops a user
    /// merging pull requests to matching branches unless that user is in
    /// <c>users</c> or is a member of a group in <c>groups</c>. Adding new users or
    /// groups to an existing restriction should be done via <c>PUT</c>.
    /// </para>
    /// <para>
    /// Note that branch restrictions with overlapping matchers is allowed,
    /// but the resulting behavior may be surprising.
    /// </para>
    /// </remarks>
    public Task<Branchrestriction> PostRepositoriesByWorkspaceByRepoSlugBranchRestrictions(PostRepositoriesByWorkspaceByRepoSlugBranchRestrictionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/branch-restrictions"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Branchrestriction>(),
            PostRepositoriesByWorkspaceByRepoSlugBranchRestrictionsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a branch restriction rule
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Branchrestriction"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an existing branch restriction rule.
    /// <para>
    /// Fields not present in the request body are ignored.
    /// </para>
    /// <para>
    /// See <c>POST</c> for details.
    /// </para>
    /// </remarks>
    public Task<Branchrestriction> PutRepositoriesByWorkspaceByRepoSlugBranchRestrictionsById(PutRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}"),
            [
                new TemplateParam("id", request.Id),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Branchrestriction>(),
            PutRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
