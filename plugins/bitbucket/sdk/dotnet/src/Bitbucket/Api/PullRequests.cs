using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Bitbucket.Core;
using Bitbucket.Core.Authentication;
using Bitbucket.Core.ErrorResponse;
using Bitbucket.Core.Exceptions;
using Bitbucket.Core.Models;
using Bitbucket.Core.Request;
using Bitbucket.Core.Response;
using Bitbucket.Errors;
using Bitbucket.Models;
using Bitbucket.Models.AllOf;
using Bitbucket.Requests.PullRequests;

namespace Bitbucket.Api;

/// <summary>
/// Pull requests are a feature that makes it easier for developers
/// to collaborate using Bitbucket. They provide a user-friendly web
/// interface for discussing proposed changes before integrating them
/// into the official project.
/// </summary>
public sealed class PullRequests
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal PullRequests(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Remove a user from the default reviewers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes a default reviewer from the repository.
    /// </remarks>
    public Task DeleteRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsername(DeleteRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}"),
            [
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("target_username", request.TargetUsername),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Unapprove a pull request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Redact the authenticated user's approval of the specified pull
    /// request.
    /// </remarks>
    public Task DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApprove(DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/approve"),
            [
                new TemplateParam("pull_request_id", request.PullRequestId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a comment on a pull request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a specific pull request comment.
    /// </remarks>
    public Task DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentId(DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}"),
            [
                new TemplateParam("comment_id", request.CommentId),
                new TemplateParam("pull_request_id", request.PullRequestId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Reopen a comment thread
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveError"/> when the server returns an error response.</exception>
    public Task DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolve(DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}/resolve"),
            [
                new TemplateParam("comment_id", request.CommentId),
                new TemplateParam("pull_request_id", request.PullRequestId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove change request for a pull request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesError"/> when the server returns an error response.</exception>
    public Task DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChanges(DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/request-changes"),
            [
                new TemplateParam("pull_request_id", request.PullRequestId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a task on a pull request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a specific pull request task.
    /// </remarks>
    public Task DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskId(DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks/{task_id}"),
            [
                new TemplateParam("pull_request_id", request.PullRequestId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("task_id", request.TaskId),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List pull requests that contain a commit
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedPullRequests"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPullrequestsForCommitError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of all pull requests as part of which this commit was reviewed. Pull Request Commit Links app must be installed first before using this API; installation automatically occurs when 'Go to pull request' is clicked from the web interface for a commit's details.
    /// </remarks>
    public Task<PaginatedPullRequests> GetPullrequestsForCommit(GetPullrequestsForCommitRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/commit/{commit}/pullrequests"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("commit", request.Commit),
            ],
            [new Param("page", request.Page), new Param("pagelen", request.Pagelen)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedPullRequests>(),
            GetPullrequestsForCommitError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List default reviewers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedAccounts"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the repository's default reviewers.
    /// <para>
    /// These are the users that are automatically added as reviewers on every
    /// new pull request that is created. To obtain the repository's default reviewers
    /// as well as the default reviewers inherited from the project, use the
    /// effective-default-reveiwers endpoint.
    /// </para>
    /// </remarks>
    public Task<PaginatedAccounts> GetRepositoriesByWorkspaceByRepoSlugDefaultReviewers(GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/default-reviewers"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedAccounts>(),
            GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a default reviewer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Account"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the specified reviewer.
    /// <para>
    /// This can be used to test whether a user is among the repository's
    /// default reviewers list. A 404 indicates that that specified user is not
    /// a default reviewer.
    /// </para>
    /// </remarks>
    public Task<Account> GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsername(GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}"),
            [
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("target_username", request.TargetUsername),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Account>(),
            GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List effective default reviewers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedDefaultReviewerAndType"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugEffectiveDefaultReviewersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the repository's effective default reviewers. This includes both default
    /// reviewers defined at the repository level as well as those inherited from its project.
    /// <para>
    /// These are the users that are automatically added as reviewers on every
    /// new pull request that is created.
    /// </para>
    /// </remarks>
    public Task<PaginatedDefaultReviewerAndType> GetRepositoriesByWorkspaceByRepoSlugEffectiveDefaultReviewers(GetRepositoriesByWorkspaceByRepoSlugEffectiveDefaultReviewersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/effective-default-reviewers"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedDefaultReviewerAndType>(),
            GetRepositoriesByWorkspaceByRepoSlugEffectiveDefaultReviewersError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List pull requests
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedPullRequests"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugPullrequestsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns all pull requests on the specified repository.
    /// <para>
    /// By default only open pull requests are returned. This can be controlled
    /// using the <c>state</c> query parameter. To retrieve pull requests that are
    /// in one of multiple states, repeat the <c>state</c> parameter for each
    /// individual state.
    /// </para>
    /// <para>
    /// This endpoint also supports filtering and sorting of the results. See
    /// filtering and sorting for more details.
    /// </para>
    /// </remarks>
    public Task<PaginatedPullRequests> GetRepositoriesByWorkspaceByRepoSlugPullrequests(GetRepositoriesByWorkspaceByRepoSlugPullrequestsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pullrequests"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [new Param("state", request.State)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedPullRequests>(),
            GetRepositoriesByWorkspaceByRepoSlugPullrequestsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List a pull request activity log
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugPullrequestsActivityError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of the pull request's activity log.
    /// </remarks>
    public Task GetRepositoriesByWorkspaceByRepoSlugPullrequestsActivity(GetRepositoriesByWorkspaceByRepoSlugPullrequestsActivityRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pullrequests/activity"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetRepositoriesByWorkspaceByRepoSlugPullrequestsActivityError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a pull request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Pullrequest"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the specified pull request.
    /// </remarks>
    public Task<Pullrequest> GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestId(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}"),
            [
                new TemplateParam("pull_request_id", request.PullRequestId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Pullrequest>(),
            GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List a pull request activity log
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdActivityError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of the pull request's activity log.
    /// </remarks>
    public Task GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdActivity(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdActivityRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/activity"),
            [
                new TemplateParam("pull_request_id", request.PullRequestId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdActivityError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List comments on a pull request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedPullRequestComments"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of the pull request's comments.
    /// <para>
    /// This includes both global, inline comments and replies.
    /// </para>
    /// <para>
    /// The default sorting is oldest to newest and can be overridden with
    /// the <c>sort</c> query parameter.
    /// </para>
    /// <para>
    /// This endpoint also supports filtering and sorting of the results. See
    /// filtering and sorting for more
    /// details.
    /// </para>
    /// </remarks>
    public Task<PaginatedPullRequestComments> GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdComments(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments"),
            [
                new TemplateParam("pull_request_id", request.PullRequestId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedPullRequestComments>(),
            GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a comment on a pull request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PullrequestComment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a specific pull request comment.
    /// </remarks>
    public Task<PullrequestComment> GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentId(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}"),
            [
                new TemplateParam("comment_id", request.CommentId),
                new TemplateParam("pull_request_id", request.PullRequestId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PullrequestComment>(),
            GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List commits on a pull request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommitsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of the pull request's commits.
    /// <para>
    /// These are the commits that are being merged into the destination
    /// branch when the pull requests gets accepted.
    /// </para>
    /// </remarks>
    public Task GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommits(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommitsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/commits"),
            [
                new TemplateParam("pull_request_id", request.PullRequestId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommitsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List changes in a pull request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Redirects to the repository diff
    /// with the revspec that corresponds to the pull request.
    /// </remarks>
    public Task GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDiff(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDiffRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/diff"),
            [
                new TemplateParam("pull_request_id", request.PullRequestId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get the diff stat for a pull request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Redirects to the repository diffstat
    /// with the revspec that corresponds to the pull request.
    /// </remarks>
    public Task GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDiffstat(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDiffstatRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/diffstat"),
            [
                new TemplateParam("pull_request_id", request.PullRequestId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get the merge task status for a pull request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeTaskStatusByTaskIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// When merging a pull request takes too long, the client receives a
    /// task ID along with a 202 status code. The task ID can be used in a call
    /// to this endpoint to check the status of a merge task.
    /// <code>
    /// curl -X GET https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/
    /// </code>
    /// <para>
    /// If the merge task is not yet finished, a PENDING status will be returned.
    /// </para>
    /// <code>
    /// HTTP/2 200
    /// {
    /// "task_status": "PENDING",
    /// "links": {
    /// "self": {
    /// "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/"
    /// }
    /// }
    /// }
    /// </code>
    /// <para>
    /// If the merge was successful, a SUCCESS status will be returned.
    /// </para>
    /// <code>
    /// HTTP/2 200
    /// {
    /// "task_status": "SUCCESS",
    /// "links": {
    /// "self": {
    /// "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/"
    /// }
    /// },
    /// "merge_result":
    /// }
    /// </code>
    /// <para>
    /// If the merge task failed, an error will be returned.
    /// </para>
    /// <code>
    /// {
    /// "type": "error",
    /// "error": {
    /// "message": ""
    /// }
    /// }
    /// </code>
    /// </remarks>
    public Task GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeTaskStatusByTaskId(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeTaskStatusByTaskIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/merge/task-status/{task_id}"),
            [
                new TemplateParam("pull_request_id", request.PullRequestId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("task_id", request.TaskId),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeTaskStatusByTaskIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get the patch for a pull request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Redirects to the repository patch
    /// with the revspec that corresponds to pull request.
    /// </remarks>
    public Task GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdPatch(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/patch"),
            [
                new TemplateParam("pull_request_id", request.PullRequestId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List commit statuses for a pull request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedCommitStatuses"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatuses2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns all statuses (e.g. build results) for the given pull
    /// request.
    /// </remarks>
    public Task<PaginatedCommitStatuses> GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatuses2(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatuses2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/statuses"),
            [
                new TemplateParam("pull_request_id", request.PullRequestId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [new Param("q", request.Q), new Param("sort", request.Sort)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedCommitStatuses>(),
            GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatuses2Error.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List tasks on a pull request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedTasks"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of the pull request's tasks.
    /// <para>
    /// This endpoint supports filtering and sorting of the results by the 'task' field.
    /// See filtering and sorting for more details.
    /// </para>
    /// </remarks>
    public Task<PaginatedTasks> GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasks(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks"),
            [
                new TemplateParam("pull_request_id", request.PullRequestId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [new Param("q", request.Q), new Param("sort", request.Sort), new Param("pagelen", request.Pagelen)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedTasks>(),
            GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a task on a pull request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PullrequestCommentTask"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a specific pull request task.
    /// </remarks>
    public Task<PullrequestCommentTask> GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskId(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks/{task_id}"),
            [
                new TemplateParam("pull_request_id", request.PullRequestId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("task_id", request.TaskId),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PullrequestCommentTask>(),
            GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List workspace pull requests for a user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedPullRequests"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkspacesByWorkspacePullrequestsBySelectedUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns all workspace pull requests authored by the specified user.
    /// <para>
    /// By default only open pull requests are returned. This can be controlled
    /// using the <c>state</c> query parameter. To retrieve pull requests that are
    /// in one of multiple states, repeat the <c>state</c> parameter for each
    /// individual state.
    /// </para>
    /// <para>
    /// This endpoint also supports filtering and sorting of the results. See
    /// filtering and sorting for more details.
    /// </para>
    /// </remarks>
    public Task<PaginatedPullRequests> GetWorkspacesByWorkspacePullrequestsBySelectedUser(GetWorkspacesByWorkspacePullrequestsBySelectedUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/pullrequests/{selected_user}"),
            [
                new TemplateParam("selected_user", request.SelectedUser),
                new TemplateParam("workspace", request.Workspace),
            ],
            [new Param("state", request.State)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedPullRequests>(),
            GetWorkspacesByWorkspacePullrequestsBySelectedUserError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a pull request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Pullrequest"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostRepositoriesByWorkspaceByRepoSlugPullrequestsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new pull request where the destination repository is
    /// this repository and the author is the authenticated user.
    /// <para>
    /// The minimum required fields to create a pull request are <c>title</c> and
    /// <c>source</c>, specified by a branch name.
    /// </para>
    /// <code>
    /// curl https://api.bitbucket.org/2.0/repositories/my-workspace/my-repository/pullrequests \
    /// -u my-username:my-password \
    /// --request POST \
    /// --header 'Content-Type: application/json' \
    /// --data '{
    /// "title": "My Title",
    /// "source": {
    /// "branch": {
    /// "name": "staging"
    /// }
    /// }
    /// }'
    /// </code>
    /// <para>
    /// If the pull request's <c>destination</c> is not specified, it will default
    /// to the <c>repository.mainbranch</c>. To open a pull request to a
    /// different branch, say from a feature branch to a staging branch,
    /// specify a <c>destination</c> (same format as the <c>source</c>):
    /// </para>
    /// <code>
    /// {
    /// "title": "My Title",
    /// "source": {
    /// "branch": {
    /// "name": "my-feature-branch"
    /// }
    /// },
    /// "destination": {
    /// "branch": {
    /// "name": "staging"
    /// }
    /// }
    /// }
    /// </code>
    /// <para>
    /// Reviewers can be specified by adding an array of user objects as the
    /// <c>reviewers</c> property.
    /// </para>
    /// <code>
    /// {
    /// "title": "My Title",
    /// "source": {
    /// "branch": {
    /// "name": "my-feature-branch"
    /// }
    /// },
    /// "reviewers": [
    /// {
    /// "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
    /// }
    /// ]
    /// }
    /// </code>
    /// <para>
    /// Other fields:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>description</c> - a string</description></item>
    ///   <item><description><c>close_source_branch</c> - boolean that specifies if the source branch should be closed upon merging</description></item>
    ///   <item><description><c>draft</c> - boolean that specifies whether the pull request is a draft</description></item>
    /// </list>
    /// </remarks>
    public Task<Pullrequest> PostRepositoriesByWorkspaceByRepoSlugPullrequests(PostRepositoriesByWorkspaceByRepoSlugPullrequestsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pullrequests"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Pullrequest>(),
            PostRepositoriesByWorkspaceByRepoSlugPullrequestsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Approve a pull request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Participant"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Approve the specified pull request as the authenticated user.
    /// </remarks>
    public Task<Participant> PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApprove(PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/approve"),
            [
                new TemplateParam("pull_request_id", request.PullRequestId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<Participant>(),
            PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a comment on a pull request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PullrequestComment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new pull request comment.
    /// <para>
    /// Returns the newly created pull request comment.
    /// </para>
    /// </remarks>
    public Task<PullrequestComment> PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdComments(PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments"),
            [
                new TemplateParam("pull_request_id", request.PullRequestId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PullrequestComment>(),
            PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Resolve a comment thread
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CommentResolution"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveError"/> when the server returns an error response.</exception>
    public Task<CommentResolution> PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolve(PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}/resolve"),
            [
                new TemplateParam("comment_id", request.CommentId),
                new TemplateParam("pull_request_id", request.PullRequestId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<CommentResolution>(),
            PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Decline a pull request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Pullrequest"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDeclineError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Declines the pull request.
    /// </remarks>
    public Task<Pullrequest> PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDecline(PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDeclineRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/decline"),
            [
                new TemplateParam("pull_request_id", request.PullRequestId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<Pullrequest>(),
            PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDeclineError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Merge a pull request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Pullrequest"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Merges the pull request.
    /// </remarks>
    public Task<Pullrequest> PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMerge(PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/merge"),
            [
                new TemplateParam("pull_request_id", request.PullRequestId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [new Param("async", request.Async)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Pullrequest>(),
            PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Request changes for a pull request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Participant"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesError"/> when the server returns an error response.</exception>
    public Task<Participant> PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChanges(PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/request-changes"),
            [
                new TemplateParam("pull_request_id", request.PullRequestId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<Participant>(),
            PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a task on a pull request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PullrequestCommentTask"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new pull request task.
    /// <para>
    /// Returns the newly created pull request task.
    /// </para>
    /// <para>
    /// Tasks can optionally be created in relation to a comment specified by the comment's ID which
    /// will cause the task to appear below the comment on a pull request when viewed in Bitbucket.
    /// </para>
    /// </remarks>
    public Task<PullrequestCommentTask> PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasks(PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks"),
            [
                new TemplateParam("pull_request_id", request.PullRequestId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PullrequestCommentTask>(),
            PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Add a user to the default reviewers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Account"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds the specified user to the repository's list of default
    /// reviewers.
    /// <para>
    /// This method is idempotent. Adding a user a second time has no effect.
    /// </para>
    /// </remarks>
    public Task<Account> PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsername(PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}"),
            [
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("target_username", request.TargetUsername),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            JsonResponse.Create<Account>(),
            PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a pull request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Pullrequest"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Mutates the specified pull request.
    /// <para>
    /// This can be used to change the pull request's branches or description.
    /// </para>
    /// <para>
    /// Only open pull requests can be mutated.
    /// </para>
    /// </remarks>
    public Task<Pullrequest> PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestId(PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}"),
            [
                new TemplateParam("pull_request_id", request.PullRequestId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Pullrequest>(),
            PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a comment on a pull request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PullrequestComment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a specific pull request comment.
    /// </remarks>
    public Task<PullrequestComment> PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentId(PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}"),
            [
                new TemplateParam("comment_id", request.CommentId),
                new TemplateParam("pull_request_id", request.PullRequestId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PullrequestComment>(),
            PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a task on a pull request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PullrequestCommentTask"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a specific pull request task.
    /// </remarks>
    public Task<PullrequestCommentTask> PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskId(PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks/{task_id}"),
            [
                new TemplateParam("pull_request_id", request.PullRequestId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("task_id", request.TaskId),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PullrequestCommentTask>(),
            PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
