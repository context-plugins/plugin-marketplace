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
using Bitbucket.Requests.CommitStatuses;

namespace Bitbucket.Api;

/// <summary>
/// Commit statuses provide a way to tag commits with meta data,
/// like automated build results.
/// </summary>
public sealed class CommitStatuses
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal CommitStatuses(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List commit statuses for a commit
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedCommitStatuses"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns all statuses (e.g. build results) for a specific commit.
    /// </remarks>
    public Task<PaginatedCommitStatuses> GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatuses(GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses"),
            [
                new TemplateParam("commit", request.Commit),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [new Param("refname", request.Refname), new Param("q", request.Q), new Param("sort", request.Sort)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedCommitStatuses>(),
            GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a build status for a commit
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Commitstatus"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the specified build status for a commit.
    /// </remarks>
    public Task<Commitstatus> GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKey(GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build/{key}"),
            [
                new TemplateParam("commit", request.Commit),
                new TemplateParam("key", request.Key),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Commitstatus>(),
            GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatusesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns all statuses (e.g. build results) for the given pull
    /// request.
    /// </remarks>
    public Task<PaginatedCommitStatuses> GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatuses(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatusesRequest request,
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
            GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatusesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a build status for a commit
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Commitstatus"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new build status against the specified commit.
    /// <para>
    /// If the specified key already exists, the existing status object will
    /// be overwritten.
    /// </para>
    /// <para>
    /// Example:
    /// </para>
    /// <code>
    /// curl https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo/commit/e10dae226959c2194f2b07b077c07762d93821cf/statuses/build/ -X POST -u jdoe -H 'Content-Type: application/json' -d '{
    /// "key": "MY-BUILD",
    /// "state": "SUCCESSFUL",
    /// "description": "42 tests passed",
    /// "url": "https://www.example.org/my-build-result"
    /// }'
    /// </code>
    /// <para>
    /// When creating a new commit status, you can use a URI template for the URL.
    /// Templates are URLs that contain variable names that Bitbucket will
    /// evaluate at runtime whenever the URL is displayed anywhere similar to
    /// parameter substitution in
    /// Bitbucket Connect.
    /// For example, one could use <c>https://foo.com/builds/{repository.full_name}</c>
    /// which Bitbucket will turn into <c>https://foo.com/builds/foo/bar</c> at render time.
    /// The context variables available are <c>repository</c> and <c>commit</c>.
    /// </para>
    /// <para>
    /// To associate a commit status to a pull request, the refname field must be set to the source branch
    /// of the pull request.
    /// </para>
    /// <para>
    /// Example:
    /// <code>
    /// curl https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo/commit/e10dae226959c2194f2b07b077c07762d93821cf/statuses/build/ -X POST -u jdoe -H 'Content-Type: application/json' -d '{
    /// "key": "MY-BUILD",
    /// "state": "SUCCESSFUL",
    /// "description": "42 tests passed",
    /// "url": "https://www.example.org/my-build-result",
    /// "refname": "my-pr-branch"
    /// }'
    /// </code>
    /// </para>
    /// </remarks>
    public Task<Commitstatus> PostRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuild(PostRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build"),
            [
                new TemplateParam("commit", request.Commit),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Commitstatus>(),
            PostRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a build status for a commit
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Commitstatus"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Used to update the current status of a build status object on the
    /// specific commit.
    /// <para>
    /// This operation can also be used to change other properties of the
    /// build status:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>state</c></description></item>
    ///   <item><description><c>name</c></description></item>
    ///   <item><description><c>description</c></description></item>
    ///   <item><description><c>url</c></description></item>
    ///   <item><description><c>refname</c></description></item>
    /// </list>
    /// <para>
    /// The <c>key</c> cannot be changed.
    /// </para>
    /// </remarks>
    public Task<Commitstatus> PutRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKey(PutRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build/{key}"),
            [
                new TemplateParam("commit", request.Commit),
                new TemplateParam("key", request.Key),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Commitstatus>(),
            PutRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
