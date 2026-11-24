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
using Bitbucket.Requests.Repositories;

namespace Bitbucket.Api;

/// <summary>
/// A Git repository is a virtual storage of your project. It
/// allows you to save versions of your code, which you can access
/// when needed. The repo resource allows you to access public repos,
/// or repos that belong to a specific workspace.
/// </summary>
public sealed class Repositories
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Repositories(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete a repository
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteRepositoriesByWorkspaceByRepoSlugError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the repository. This is an irreversible operation.
    /// <para>
    /// This does not affect its forks.
    /// </para>
    /// </remarks>
    public Task DeleteRepositoriesByWorkspaceByRepoSlug(DeleteRepositoriesByWorkspaceByRepoSlugRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [new Param("redirect_to", request.RedirectTo)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteRepositoriesByWorkspaceByRepoSlugError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a webhook for a repository
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteRepositoriesByWorkspaceByRepoSlugHooksByUidError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the specified webhook subscription from the given
    /// repository.
    /// </remarks>
    public Task DeleteRepositoriesByWorkspaceByRepoSlugHooksByUid(DeleteRepositoriesByWorkspaceByRepoSlugHooksByUidRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/hooks/{uid}"),
            [
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("uid", request.Uid),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteRepositoriesByWorkspaceByRepoSlugHooksByUidError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete an explicit group permission for a repository
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the repository group permission between the requested repository and group, if one exists.
    /// <para>
    /// Only users with admin permission for the repository may access this resource.
    /// </para>
    /// <para>
    /// The only authentication method supported for this endpoint is via app passwords.
    /// </para>
    /// </remarks>
    public Task DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlug(DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/permissions-config/groups/{group_slug}"),
            [
                new TemplateParam("group_slug", request.GroupSlug),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete an explicit user permission for a repository
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the repository user permission between the requested repository and user, if one exists.
    /// <para>
    /// Only users with admin permission for the repository may access this resource.
    /// </para>
    /// <para>
    /// The only authentication method for this endpoint is via app passwords.
    /// </para>
    /// </remarks>
    public Task DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserId(DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/permissions-config/users/{selected_user_id}"),
            [
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("selected_user_id", request.SelectedUserId),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List public repositories
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedRepositories"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// **This endpoint is deprecated. Please use the
    /// workspace scoped alternative.**
    /// <para>
    /// Returns a paginated list of all public repositories.
    /// </para>
    /// <para>
    /// This endpoint also supports filtering and sorting of the results. See
    /// filtering and sorting for more details.
    /// </para>
    /// </remarks>
    public Task<PaginatedRepositories> GetRepositories(GetRepositoriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories"),
            [],
            [
                new Param("after", request.After),
                new Param("role", request.Role),
                new Param("q", request.Q),
                new Param("sort", request.Sort),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedRepositories>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List repositories in a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedRepositories"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of all repositories owned by the specified
    /// workspace.
    /// <para>
    /// The result can be narrowed down based on the authenticated user's role.
    /// </para>
    /// <para>
    /// E.g. with <c>?role=contributor</c>, only those repositories that the
    /// authenticated user has write access to are returned (this includes any
    /// repo the user is an admin on, as that implies write access).
    /// </para>
    /// <para>
    /// This endpoint also supports filtering and sorting of the results. See
    /// filtering and sorting for more details.
    /// </para>
    /// </remarks>
    public Task<PaginatedRepositories> GetRepositoriesByWorkspace(GetRepositoriesByWorkspaceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}"),
            [new TemplateParam("workspace", request.Workspace)],
            [new Param("role", request.Role), new Param("q", request.Q), new Param("sort", request.Sort)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedRepositories>(),
            GetRepositoriesByWorkspaceError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a repository
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RepositoryBitbucketRepositoriesApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the object describing this repository.
    /// </remarks>
    public Task<RepositoryBitbucketRepositoriesApi> GetRepositoriesByWorkspaceByRepoSlug(GetRepositoriesByWorkspaceByRepoSlugRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RepositoryBitbucketRepositoriesApi>(),
            GetRepositoriesByWorkspaceByRepoSlugError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List commits that modified a file
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedFiles"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPathError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of commits that modified the specified file.
    /// <para>
    /// Commits are returned in reverse chronological order. This is roughly
    /// equivalent to the following commands:
    /// </para>
    /// <para>
    /// $ git log --follow --date-order
    /// </para>
    /// <para>
    /// By default, Bitbucket will follow renames and the path name in the
    /// returned entries reflects that. This can be turned off using the
    /// <c>?renames=false</c> query parameter.
    /// </para>
    /// <para>
    /// Results are returned in descending chronological order by default, and
    /// like most endpoints you can
    /// filter and sort the response to
    /// only provide exactly the data you want.
    /// </para>
    /// <para>
    /// The example response returns commits made before 2011-05-18 against a file
    /// named <c>README.rst</c>. The results are filtered to only return the path and
    /// date. This request can be made using:
    /// </para>
    /// <code>
    /// $ curl 'https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/filehistory/master/README.rst'\
    /// '?fields=values.next,values.path,values.commit.date&amp;q=commit.date&lt;=2011-05-18'
    /// </code>
    /// <para>
    /// In the response you can see that the file was renamed to <c>README.rst</c>
    /// by the commit made on 2011-05-16, and was previously named <c>README.txt</c>.
    /// </para>
    /// </remarks>
    public Task<PaginatedFiles> GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath(GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPathRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/filehistory/{commit}/{path}"),
            [
                new TemplateParam("commit", request.Commit),
                new TemplateParam("path", request.Path),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [new Param("renames", request.Renames), new Param("q", request.Q), new Param("sort", request.Sort)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedFiles>(),
            GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPathError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List repository forks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedRepositories"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of all the forks of the specified
    /// repository.
    /// </remarks>
    public Task<PaginatedRepositories> GetRepositoriesByWorkspaceByRepoSlugForks(GetRepositoriesByWorkspaceByRepoSlugForksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/forks"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [new Param("role", request.Role), new Param("q", request.Q), new Param("sort", request.Sort)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedRepositories>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List webhooks for a repository
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedWebhookSubscriptions"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugHooksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of webhooks installed on this repository.
    /// </remarks>
    public Task<PaginatedWebhookSubscriptions> GetRepositoriesByWorkspaceByRepoSlugHooks(GetRepositoriesByWorkspaceByRepoSlugHooksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/hooks"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedWebhookSubscriptions>(),
            GetRepositoriesByWorkspaceByRepoSlugHooksError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a webhook for a repository
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookSubscription"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugHooksByUidError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the webhook with the specified id installed on the specified
    /// repository.
    /// </remarks>
    public Task<WebhookSubscription> GetRepositoriesByWorkspaceByRepoSlugHooksByUid(GetRepositoriesByWorkspaceByRepoSlugHooksByUidRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/hooks/{uid}"),
            [
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("uid", request.Uid),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WebhookSubscription>(),
            GetRepositoriesByWorkspaceByRepoSlugHooksByUidError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve the inheritance state for repository settings
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RepositoryInheritanceState"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugOverrideSettingsError"/> when the server returns an error response.</exception>
    public Task<RepositoryInheritanceState> GetRepositoriesByWorkspaceByRepoSlugOverrideSettings(GetRepositoriesByWorkspaceByRepoSlugOverrideSettingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/override-settings"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RepositoryInheritanceState>(),
            GetRepositoriesByWorkspaceByRepoSlugOverrideSettingsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List explicit group permissions for a repository
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedRepositoryGroupPermissions"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of explicit group permissions for the given repository.
    /// This endpoint does not support BBQL features.
    /// </remarks>
    public Task<PaginatedRepositoryGroupPermissions> GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroups(GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/permissions-config/groups"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedRepositoryGroupPermissions>(),
            GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get an explicit group permission for a repository
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RepositoryGroupPermission"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the group permission for a given group slug and repository
    /// <para>
    /// Only users with admin permission for the repository may access this resource.
    /// </para>
    /// <para>
    /// Permissions can be:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>admin</c></description></item>
    ///   <item><description><c>write</c></description></item>
    ///   <item><description><c>read</c></description></item>
    ///   <item><description><c>none</c></description></item>
    /// </list>
    /// </remarks>
    public Task<RepositoryGroupPermission> GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlug(GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/permissions-config/groups/{group_slug}"),
            [
                new TemplateParam("group_slug", request.GroupSlug),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RepositoryGroupPermission>(),
            GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List explicit user permissions for a repository
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedRepositoryUserPermissions"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of explicit user permissions for the given repository.
    /// This endpoint does not support BBQL features.
    /// </remarks>
    public Task<PaginatedRepositoryUserPermissions> GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsers(GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/permissions-config/users"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedRepositoryUserPermissions>(),
            GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get an explicit user permission for a repository
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RepositoryUserPermission"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the explicit user permission for a given user and repository.
    /// <para>
    /// Only users with admin permission for the repository may access this resource.
    /// </para>
    /// <para>
    /// Permissions can be:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>admin</c></description></item>
    ///   <item><description><c>write</c></description></item>
    ///   <item><description><c>read</c></description></item>
    ///   <item><description><c>none</c></description></item>
    /// </list>
    /// </remarks>
    public Task<RepositoryUserPermission> GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserId(GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/permissions-config/users/{selected_user_id}"),
            [
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("selected_user_id", request.SelectedUserId),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RepositoryUserPermission>(),
            GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get the root directory of the main branch
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedTreeEntry"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugSrcError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint redirects the client to the directory listing of the
    /// root directory on the main branch.
    /// <para>
    /// This is equivalent to directly hitting
    /// /2.0/repositories/{username}/{repo_slug}/src/{commit}/{path}
    /// without having to know the name or SHA1 of the repo's main branch.
    /// </para>
    /// <para>
    /// To create new commits, POST to this endpoint
    /// </para>
    /// </remarks>
    public Task<PaginatedTreeEntry> GetRepositoriesByWorkspaceByRepoSlugSrc(GetRepositoriesByWorkspaceByRepoSlugSrcRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/src"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [new Param("format", request.Format)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedTreeEntry>(),
            GetRepositoriesByWorkspaceByRepoSlugSrcError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get file or directory contents
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedTreeEntry"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPathError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoints is used to retrieve the contents of a single file,
    /// or the contents of a directory at a specified revision.
    /// </remarks>
    public Task<PaginatedTreeEntry> GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath(GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPathRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/src/{commit}/{path}"),
            [
                new TemplateParam("commit", request.Commit),
                new TemplateParam("path", request.Path),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [
                new Param("format", request.Format),
                new Param("q", request.Q),
                new Param("sort", request.Sort),
                new Param("max_depth", request.MaxDepth),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedTreeEntry>(),
            GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPathError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List repositories watchers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedAccounts"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of all the watchers on the specified
    /// repository.
    /// </remarks>
    public Task<PaginatedAccounts> GetRepositoriesByWorkspaceByRepoSlugWatchers(GetRepositoriesByWorkspaceByRepoSlugWatchersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/watchers"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedAccounts>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List repository permissions for a user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedRepositoryPermissions"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// **This endpoint is deprecated. Please use the
    /// workspace scoped alternative.**
    /// <para>
    /// Returns an object for each repository the caller has explicit access
    /// to and their effective permission — the highest level of permission the
    /// caller has. This does not return public repositories that the user was
    /// not granted any specific permission in, and does not distinguish between
    /// explicit and implicit privileges.
    /// </para>
    /// <para>
    /// Permissions can be:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>admin</c></description></item>
    ///   <item><description><c>write</c></description></item>
    ///   <item><description><c>read</c></description></item>
    /// </list>
    /// <para>
    /// Results may be further filtered or sorted by
    /// repository or permission by adding the following query string
    /// parameters:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>q=repository.name="geordi"</c> or <c>q=permission&gt;"read"</c></description></item>
    ///   <item><description><c>sort=repository.name</c></description></item>
    /// </list>
    /// <para>
    /// Note that the query parameter values need to be URL escaped so that <c>=</c>
    /// would become <c>%3D</c>.
    /// </para>
    /// </remarks>
    public Task<PaginatedRepositoryPermissions> GetUserPermissionsRepositories(GetUserPermissionsRepositoriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/user/permissions/repositories"),
            [],
            [new Param("q", request.Q), new Param("sort", request.Sort)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedRepositoryPermissions>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List repository permissions in a workspace for a user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedRepositoryPermissions"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUserWorkspacesByWorkspacePermissionsRepositoriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns an object for each repository the caller has explicit access to in the
    /// specified workspace and their effective permission — the highest level of
    /// permission the caller has. This does not return public repositories that the
    /// user was not granted any specific permission in, and does not distinguish between
    /// explicit and implicit privileges.
    /// <para>
    /// Permissions can be:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>admin</c></description></item>
    ///   <item><description><c>write</c></description></item>
    ///   <item><description><c>read</c></description></item>
    /// </list>
    /// <para>
    /// Results may be further filtered or sorted by
    /// repository or permission by adding the following query string
    /// parameters:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>q=repository.name="bits"</c> or <c>q=permission&gt;"read"</c></description></item>
    ///   <item><description><c>sort=repository.name</c></description></item>
    /// </list>
    /// <para>
    /// Note that the query parameter values need to be URL escaped so that <c>=</c>
    /// would become <c>%3D</c>.
    /// </para>
    /// </remarks>
    public Task<PaginatedRepositoryPermissions> GetUserWorkspacesByWorkspacePermissionsRepositories(GetUserWorkspacesByWorkspacePermissionsRepositoriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/user/workspaces/{workspace}/permissions/repositories"),
            [new TemplateParam("workspace", request.Workspace)],
            [new Param("q", request.Q), new Param("sort", request.Sort)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedRepositoryPermissions>(),
            GetUserWorkspacesByWorkspacePermissionsRepositoriesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a repository
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RepositoryBitbucketRepositoriesApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostRepositoriesByWorkspaceByRepoSlugError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new repository.
    /// <para>
    /// Note: In order to set the project for the newly created repository,
    /// pass in either the project key or the project UUID as part of the
    /// request body as shown in the examples below:
    /// </para>
    /// <code>
    /// $ curl -X POST -H "Content-Type: application/json" -d '{
    /// "scm": "git",
    /// "project": {
    /// "key": "MARS"
    /// }
    /// }' https://api.bitbucket.org/2.0/repositories/teamsinspace/hablanding
    /// </code>
    /// <para>
    /// or
    /// </para>
    /// <code>
    /// $ curl -X POST -H "Content-Type: application/json" -d '{
    /// "scm": "git",
    /// "project": {
    /// "key": "{ba516952-992a-4c2d-acbd-17d502922f96}"
    /// }
    /// }' https://api.bitbucket.org/2.0/repositories/teamsinspace/hablanding
    /// </code>
    /// <para>
    /// The project must be assigned for all repositories. If the project is not provided,
    /// the repository is automatically assigned to the oldest project in the workspace.
    /// </para>
    /// <para>
    /// Note: In the examples above, the workspace ID <c>teamsinspace</c>,
    /// and/or the repository name <c>hablanding</c> can be replaced by UUIDs.
    /// </para>
    /// </remarks>
    public Task<RepositoryBitbucketRepositoriesApi> PostRepositoriesByWorkspaceByRepoSlug(PostRepositoriesByWorkspaceByRepoSlugRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RepositoryBitbucketRepositoriesApi>(),
            PostRepositoriesByWorkspaceByRepoSlugError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fork a repository
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RepositoryBitbucketRepositoriesApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new fork of the specified repository.
    /// <para>
    /// #### Forking a repository
    /// </para>
    /// <para>
    /// To create a fork, specify the workspace explicitly as part of the
    /// request body:
    /// </para>
    /// <code>
    /// $ curl -X POST -u jdoe https://api.bitbucket.org/2.0/repositories/atlassian/bbql/forks \
    /// -H 'Content-Type: application/json' -d '{
    /// "name": "bbql_fork",
    /// "workspace": {
    /// "slug": "atlassian"
    /// }
    /// }'
    /// </code>
    /// <para>
    /// To fork a repository into the same workspace, also specify a new <c>name</c>.
    /// </para>
    /// <para>
    /// When you specify a value for <c>name</c>, it will also affect the <c>slug</c>.
    /// The <c>slug</c> is reflected in the repository URL of the new fork. It is
    /// derived from <c>name</c> by substituting non-ASCII characters, removes
    /// whitespace, and changes characters to lower case. For example,
    /// <c>My repo</c> would turn into <c>my_repo</c>.
    /// </para>
    /// <para>
    /// You need contributor access to create new forks within a workspace.
    /// </para>
    /// <para>
    /// #### Change the properties of a new fork
    /// </para>
    /// <para>
    /// By default the fork inherits most of its properties from the parent.
    /// However, since the optional POST body document follows the normal
    /// <c>repository</c> JSON schema and you can override the new fork's
    /// properties.
    /// </para>
    /// <para>
    /// Properties that can be overridden include:
    /// </para>
    /// <para>
    /// * description
    /// * fork_policy
    /// * language
    /// * mainbranch
    /// * is_private (note that a private repo's fork_policy might prohibit
    /// the creation of public forks, in which <c>is_private=False</c> would fail)
    /// * has_issues (to initialize or disable the new repo's issue tracker --
    /// note that the actual contents of the parent repository's issue
    /// tracker are not copied during forking)
    /// * has_wiki (to initialize or disable the new repo's wiki --
    /// note that the actual contents of the parent repository's wiki are not
    /// copied during forking)
    /// * project (when forking into a private project, the fork's <c>is_private</c>
    /// must be <c>true</c>)
    /// </para>
    /// <para>
    /// Properties that cannot be modified include:
    /// </para>
    /// <list type="bullet">
    ///   <item><description>scm</description></item>
    ///   <item><description>parent</description></item>
    ///   <item><description>full_name</description></item>
    /// </list>
    /// </remarks>
    public Task<RepositoryBitbucketRepositoriesApi> PostRepositoriesByWorkspaceByRepoSlugForks(PostRepositoriesByWorkspaceByRepoSlugForksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/forks"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RepositoryBitbucketRepositoriesApi>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a webhook for a repository
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookSubscription"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostRepositoriesByWorkspaceByRepoSlugHooksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new webhook on the specified repository.
    /// <para>
    /// Example:
    /// </para>
    /// <code>
    /// $ curl -X POST -u credentials -H 'Content-Type: application/json'
    /// https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo-slug/hooks
    /// -d '
    /// {
    /// "description": "Webhook Description",
    /// "url": "https://example.com/",
    /// "active": true,
    /// "secret": "this is a really bad secret",
    /// "events": [
    /// "repo:push",
    /// "issue:created",
    /// "issue:updated"
    /// ]
    /// }'
    /// </code>
    /// <para>
    /// When the <c>secret</c> is provided it will be used as the key to generate a HMAC
    /// digest value sent in the <c>X-Hub-Signature</c> header at delivery time. Passing
    /// a <c>null</c> or empty <c>secret</c> or not passing a <c>secret</c> will leave the webhook's
    /// secret unset. Bitbucket only generates the <c>X-Hub-Signature</c> when the webhook's
    /// secret is set.
    /// </para>
    /// <para>
    /// Note that this call requires the webhook scope, as well as any scope
    /// that applies to the events that the webhook subscribes to. In the
    /// example above that means: <c>webhook</c>, <c>repository</c> and <c>issue</c>.
    /// </para>
    /// <para>
    /// Also note that the <c>url</c> must properly resolve and cannot be an
    /// internal, non-routed address.
    /// </para>
    /// </remarks>
    public Task<WebhookSubscription> PostRepositoriesByWorkspaceByRepoSlugHooks(PostRepositoriesByWorkspaceByRepoSlugHooksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/hooks"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<WebhookSubscription>(),
            PostRepositoriesByWorkspaceByRepoSlugHooksError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a commit by uploading a file
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostRepositoriesByWorkspaceByRepoSlugSrcError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint is used to create new commits in the repository by
    /// uploading files.
    /// </remarks>
    public Task PostRepositoriesByWorkspaceByRepoSlugSrc(PostRepositoriesByWorkspaceByRepoSlugSrcRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/src"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [
                new Param("message", request.Message),
                new Param("author", request.Author),
                new Param("parents", request.Parents),
                new Param("files", request.Files),
                new Param("branch", request.Branch),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            PostRepositoriesByWorkspaceByRepoSlugSrcError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a repository
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RepositoryBitbucketRepositoriesApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutRepositoriesByWorkspaceByRepoSlugError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Since this endpoint can be used to both update and to create a
    /// repository, the request body depends on the intent.
    /// <para>
    /// #### Creation
    /// </para>
    /// <para>
    /// See the POST documentation for the repository endpoint for an example
    /// of the request body.
    /// </para>
    /// <para>
    /// #### Update
    /// </para>
    /// <para>
    /// Note: Changing the <c>name</c> of the repository will cause the location to
    /// be changed. This is because the URL of the repo is derived from the
    /// name (a process called slugification). In such a scenario, it is
    /// possible for the request to fail if the newly created slug conflicts
    /// with an existing repository's slug. But if there is no conflict,
    /// the new location will be returned in the <c>Location</c> header of the
    /// response.
    /// </para>
    /// </remarks>
    public Task<RepositoryBitbucketRepositoriesApi> PutRepositoriesByWorkspaceByRepoSlug(PutRepositoriesByWorkspaceByRepoSlugRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RepositoryBitbucketRepositoriesApi>(),
            PutRepositoriesByWorkspaceByRepoSlugError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a webhook for a repository
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookSubscription"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutRepositoriesByWorkspaceByRepoSlugHooksByUidError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the specified webhook subscription.
    /// <para>
    /// The following properties can be mutated:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>description</c></description></item>
    ///   <item><description><c>url</c></description></item>
    ///   <item><description><c>secret</c></description></item>
    ///   <item><description><c>active</c></description></item>
    ///   <item><description><c>events</c></description></item>
    /// </list>
    /// <para>
    /// The hook's secret is used as a key to generate the HMAC hex digest sent in the
    /// <c>X-Hub-Signature</c> header at delivery time. This signature is only generated
    /// when the hook has a secret.
    /// </para>
    /// <para>
    /// Set the hook's secret by passing the new value in the <c>secret</c> field. Passing a
    /// <c>null</c> value in the <c>secret</c> field will remove the secret from the hook. The
    /// hook's secret can be left unchanged by not passing the <c>secret</c> field in the
    /// request.
    /// </para>
    /// </remarks>
    public Task<WebhookSubscription> PutRepositoriesByWorkspaceByRepoSlugHooksByUid(PutRepositoriesByWorkspaceByRepoSlugHooksByUidRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/hooks/{uid}"),
            [
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("uid", request.Uid),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            JsonResponse.Create<WebhookSubscription>(),
            PutRepositoriesByWorkspaceByRepoSlugHooksByUidError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set the inheritance state for repository settings
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutRepositoriesByWorkspaceByRepoSlugOverrideSettingsError"/> when the server returns an error response.</exception>
    public Task PutRepositoriesByWorkspaceByRepoSlugOverrideSettings(PutRepositoriesByWorkspaceByRepoSlugOverrideSettingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/override-settings"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            VoidResponse.Instance,
            PutRepositoriesByWorkspaceByRepoSlugOverrideSettingsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an explicit group permission for a repository
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RepositoryGroupPermission"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the group permission, or grants a new permission if one does not already exist.
    /// <para>
    /// Only users with admin permission for the repository may access this resource.
    /// </para>
    /// <para>
    /// The only authentication method supported for this endpoint is via app passwords.
    /// </para>
    /// <para>
    /// Permissions can be:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>admin</c></description></item>
    ///   <item><description><c>write</c></description></item>
    ///   <item><description><c>read</c></description></item>
    /// </list>
    /// </remarks>
    public Task<RepositoryGroupPermission> PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlug(PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/permissions-config/groups/{group_slug}"),
            [
                new TemplateParam("group_slug", request.GroupSlug),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RepositoryGroupPermission>(),
            PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an explicit user permission for a repository
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RepositoryUserPermission"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the explicit user permission for a given user and repository. The selected user must be a member of
    /// the workspace, and cannot be the workspace owner.
    /// Only users with admin permission for the repository may access this resource.
    /// <para>
    /// The only authentication method for this endpoint is via app passwords.
    /// </para>
    /// <para>
    /// Permissions can be:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>admin</c></description></item>
    ///   <item><description><c>write</c></description></item>
    ///   <item><description><c>read</c></description></item>
    /// </list>
    /// </remarks>
    public Task<RepositoryUserPermission> PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserId(PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/permissions-config/users/{selected_user_id}"),
            [
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("selected_user_id", request.SelectedUserId),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RepositoryUserPermission>(),
            PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
