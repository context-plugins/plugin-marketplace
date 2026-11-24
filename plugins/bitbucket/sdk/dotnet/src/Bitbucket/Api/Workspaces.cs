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
using Bitbucket.Requests.Workspaces;

namespace Bitbucket.Api;

/// <summary>
/// A workspace is where you create repositories, collaborate on
/// your code, and organize different streams of work in your Bitbucket
/// Cloud account. Workspaces replace the use of teams and users in API
/// calls.
/// </summary>
public sealed class Workspaces
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Workspaces(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete a webhook for a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteWorkspacesByWorkspaceHooksByUid2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the specified webhook subscription from the given workspace.
    /// </remarks>
    public Task DeleteWorkspacesByWorkspaceHooksByUid2(DeleteWorkspacesByWorkspaceHooksByUid2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/hooks/{uid}"),
            [new TemplateParam("uid", request.Uid), new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteWorkspacesByWorkspaceHooksByUid2Error.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List workspaces for the current user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedWorkspaceMemberships"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUserPermissionsWorkspacesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// <b>This endpoint is deprecated. Please use the supported alternatives:</b>
    /// * List workspaces for user
    /// * Get user permission on a workspace
    /// <para>
    /// Returns an object for each workspace the caller is a member of, and
    /// their effective role - the highest level of privilege the caller has.
    /// If a user is a member of multiple groups with distinct roles, only the
    /// highest level is returned.
    /// </para>
    /// <para>
    /// Permissions can be:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>owner</c></description></item>
    ///   <item><description><c>collaborator</c></description></item>
    ///   <item><description><c>member</c></description></item>
    /// </list>
    /// <para>
    /// **The <c>collaborator</c> role is being removed from the Bitbucket Cloud API. For more information,
    /// see the deprecation announcement.**
    /// </para>
    /// <para>
    /// **When you move your administration from Bitbucket Cloud to admin.atlassian.com, the following fields on
    /// <c>workspace_membership</c> will no longer be present: <c>last_accessed</c> and <c>added_on</c>. See the
    /// deprecation announcement.**
    /// </para>
    /// <para>
    /// Results may be further filtered or sorted by
    /// workspace or permission by adding the following query string parameters:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>q=workspace.slug="bbworkspace1"</c> or <c>q=permission="owner"</c></description></item>
    ///   <item><description><c>sort=workspace.slug</c></description></item>
    /// </list>
    /// <para>
    /// Note that the query parameter values need to be URL escaped so that <c>=</c>
    /// would become <c>%3D</c>.
    /// </para>
    /// </remarks>
    public Task<PaginatedWorkspaceMemberships> GetUserPermissionsWorkspaces(GetUserPermissionsWorkspacesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/user/permissions/workspaces"),
            [],
            [new Param("q", request.Q), new Param("sort", request.Sort)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedWorkspaceMemberships>(),
            GetUserPermissionsWorkspacesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List workspaces for the current user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedWorkspacePermissions"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUserWorkspacesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns an object for each workspace accessible to the caller. This object
    /// also contains details on whether the caller has admin permissions on the workspace
    /// (<c>"administrator" = true</c>) or not (<c>"administrator" = false</c>).
    /// <para>
    /// Queries support filtering based on administrator permissions,
    /// sorting or
    /// filtering by <c>slug</c>. Results can
    /// be paginated.
    /// </para>
    /// </remarks>
    public Task<PaginatedWorkspacePermissions> GetUserWorkspaces(GetUserWorkspacesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/user/workspaces"),
            [],
            [new Param("sort", request.Sort), new Param("administrator", request.Administrator)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedWorkspacePermissions>(),
            GetUserWorkspacesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get user permission on a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WorkspaceMembership"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUserWorkspacesByWorkspacePermissionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the caller's effective role; as in, the highest level of privilege
    /// the caller has for the workspace.
    /// If the calling user is a member of multiple groups with distinct roles, only the
    /// highest level is returned.
    /// <para>
    /// Permissions can be:
    /// </para>
    /// <para>
    /// * <c>owner</c>
    /// * <c>create-project</c>
    /// * <c>collaborator</c> (deprecated; see this
    /// deprecation announcement for more details)
    /// * <c>member</c>
    /// </para>
    /// </remarks>
    public Task<WorkspaceMembership> GetUserWorkspacesByWorkspacePermission(GetUserWorkspacesByWorkspacePermissionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/user/workspaces/{workspace}/permission"),
            [new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WorkspaceMembership>(),
            GetUserWorkspacesByWorkspacePermissionError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List workspaces for user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedWorkspaces"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkspacesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// **This endpoint is deprecated. Please use the
    /// supported alternative.**
    /// <para>
    /// Returns a list of workspaces accessible by the authenticated user.
    /// </para>
    /// <para>
    /// Results may be further filtered or sorted by
    /// workspace or permission by adding the following query string parameters:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>q=slug="bbworkspace1"</c> or <c>q=is_private=true</c></description></item>
    ///   <item><description><c>sort=created_on</c></description></item>
    /// </list>
    /// <para>
    /// Note that the query parameter values need to be URL escaped so that <c>=</c>
    /// would become <c>%3D</c>.
    /// </para>
    /// <para>
    /// **The <c>collaborator</c> role is being removed from the Bitbucket Cloud API. For more information,
    /// see the deprecation announcement.**
    /// </para>
    /// </remarks>
    public Task<PaginatedWorkspaces> GetWorkspaces(GetWorkspacesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces"),
            [],
            [new Param("role", request.Role), new Param("q", request.Q), new Param("sort", request.Sort)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedWorkspaces>(),
            GetWorkspacesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WorkspaceBitbucketWorkspacesApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkspacesByWorkspaceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the requested workspace.
    /// </remarks>
    public Task<WorkspaceBitbucketWorkspacesApi> GetWorkspacesByWorkspace(GetWorkspacesByWorkspaceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}"),
            [new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WorkspaceBitbucketWorkspacesApi>(),
            GetWorkspacesByWorkspaceError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List webhooks for a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedWebhookSubscriptions"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkspacesByWorkspaceHooks2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of webhooks installed on this workspace.
    /// </remarks>
    public Task<PaginatedWebhookSubscriptions> GetWorkspacesByWorkspaceHooks2(GetWorkspacesByWorkspaceHooks2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/hooks"),
            [new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedWebhookSubscriptions>(),
            GetWorkspacesByWorkspaceHooks2Error.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a webhook for a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookSubscription"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkspacesByWorkspaceHooksByUid2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the webhook with the specified id installed on the given
    /// workspace.
    /// </remarks>
    public Task<WebhookSubscription> GetWorkspacesByWorkspaceHooksByUid2(GetWorkspacesByWorkspaceHooksByUid2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/hooks/{uid}"),
            [new TemplateParam("uid", request.Uid), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WebhookSubscription>(),
            GetWorkspacesByWorkspaceHooksByUid2Error.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List users in a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedWorkspaceMemberships"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkspacesByWorkspaceMembersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns all members of the requested workspace.
    /// <para>
    /// This endpoint additionally supports filtering by
    /// email address, if called by a workspace administrator, integration or workspace access
    /// token. This is done by adding the following query string parameter:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>q=user.email IN ("user1@org.com","user2@org.com")</c></description></item>
    /// </list>
    /// <para>
    /// When filtering by email, you can query up to 90 addresses at a time.
    /// Note that the query parameter values need to be URL escaped, so the final query string
    /// should be:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>q=user.email%20IN%20(%22user1@org.com%22,%22user2@org.com%22)</c></description></item>
    /// </list>
    /// <para>
    /// Email addresses that you filter by (and only these email addresses) can be included in the
    /// response using the <c>fields</c> query parameter:
    /// </para>
    /// <para>
    /// * <c>&amp;fields=+values.user.email</c> - add the <c>email</c> field to the default <c>user</c> response object
    /// * <c>&amp;fields=values.user.email,values.user.account_id</c> - only return user email addresses and
    /// account IDs
    /// </para>
    /// <para>
    /// Once again, all query parameter values must be URL escaped.
    /// </para>
    /// </remarks>
    public Task<PaginatedWorkspaceMemberships> GetWorkspacesByWorkspaceMembers(GetWorkspacesByWorkspaceMembersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/members"),
            [new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedWorkspaceMemberships>(),
            GetWorkspacesByWorkspaceMembersError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get user membership for a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WorkspaceMembership"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkspacesByWorkspaceMembersByMemberError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the workspace membership, which includes
    /// a <c>User</c> object for the member and a <c>Workspace</c> object
    /// for the requested workspace.
    /// </remarks>
    public Task<WorkspaceMembership> GetWorkspacesByWorkspaceMembersByMember(GetWorkspacesByWorkspaceMembersByMemberRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/members/{member}"),
            [new TemplateParam("member", request.Member), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WorkspaceMembership>(),
            GetWorkspacesByWorkspaceMembersByMemberError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List user permissions in a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedWorkspaceMemberships"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkspacesByWorkspacePermissionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the list of members in a workspace
    /// and their permission levels.
    /// Permission can be:
    /// * <c>owner</c>
    /// * <c>collaborator</c>
    /// * <c>member</c>
    /// <para>
    /// **The <c>collaborator</c> role is being removed from the Bitbucket Cloud API. For more information,
    /// see the deprecation announcement.**
    /// </para>
    /// <para>
    /// **When you move your administration from Bitbucket Cloud to admin.atlassian.com, the following fields on
    /// <c>workspace_membership</c> will no longer be present: <c>last_accessed</c> and <c>added_on</c>. See the
    /// deprecation announcement.**
    /// </para>
    /// <para>
    /// Results may be further filtered by
    /// permission by adding the following query string parameters:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>q=permission="owner"</c></description></item>
    /// </list>
    /// </remarks>
    public Task<PaginatedWorkspaceMemberships> GetWorkspacesByWorkspacePermissions(GetWorkspacesByWorkspacePermissionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/permissions"),
            [new TemplateParam("workspace", request.Workspace)],
            [new Param("q", request.Q)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedWorkspaceMemberships>(),
            GetWorkspacesByWorkspacePermissionsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List all repository permissions for a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedRepositoryPermissions"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkspacesByWorkspacePermissionsRepositoriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns an object for each repository permission for all of a
    /// workspace's repositories.
    /// <para>
    /// Permissions returned are effective permissions: the highest level of
    /// permission the user has. This does not distinguish between direct and
    /// indirect (group) privileges.
    /// </para>
    /// <para>
    /// Only users with admin permission for the team may access this resource.
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
    /// Results may be further filtered or sorted
    /// by repository, user, or permission by adding the following query string
    /// parameters:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>q=repository.name="geordi"</c> or <c>q=permission&gt;"read"</c></description></item>
    ///   <item><description><c>sort=user.display_name</c></description></item>
    /// </list>
    /// <para>
    /// Note that the query parameter values need to be URL escaped so that <c>=</c>
    /// would become <c>%3D</c>.
    /// </para>
    /// </remarks>
    public Task<PaginatedRepositoryPermissions> GetWorkspacesByWorkspacePermissionsRepositories(GetWorkspacesByWorkspacePermissionsRepositoriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/permissions/repositories"),
            [new TemplateParam("workspace", request.Workspace)],
            [new Param("q", request.Q), new Param("sort", request.Sort)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedRepositoryPermissions>(),
            GetWorkspacesByWorkspacePermissionsRepositoriesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List a repository permissions for a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedRepositoryPermissions"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkspacesByWorkspacePermissionsRepositoriesByRepoSlugError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns an object for the repository permission of each user in the
    /// requested repository.
    /// <para>
    /// Permissions returned are effective permissions: the highest level of
    /// permission the user has. This does not distinguish between direct and
    /// indirect (group) privileges.
    /// </para>
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
    /// </list>
    /// <para>
    /// Results may be further filtered or sorted
    /// by user, or permission by adding the following query string parameters:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>q=permission&gt;"read"</c></description></item>
    ///   <item><description><c>sort=user.display_name</c></description></item>
    /// </list>
    /// <para>
    /// Note that the query parameter values need to be URL escaped so that <c>=</c>
    /// would become <c>%3D</c>.
    /// </para>
    /// </remarks>
    public Task<PaginatedRepositoryPermissions> GetWorkspacesByWorkspacePermissionsRepositoriesByRepoSlug(GetWorkspacesByWorkspacePermissionsRepositoriesByRepoSlugRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/permissions/repositories/{repo_slug}"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [new Param("q", request.Q), new Param("sort", request.Sort)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedRepositoryPermissions>(),
            GetWorkspacesByWorkspacePermissionsRepositoriesByRepoSlugError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List projects in a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedProjects"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkspacesByWorkspaceProjectsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the list of projects in this workspace.
    /// </remarks>
    public Task<PaginatedProjects> GetWorkspacesByWorkspaceProjects(GetWorkspacesByWorkspaceProjectsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/projects"),
            [new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedProjects>(),
            GetWorkspacesByWorkspaceProjectsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a project for a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectBitbucketDeploymentsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkspacesByWorkspaceProjectsByProjectKey2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the requested project.
    /// </remarks>
    public Task<ProjectBitbucketDeploymentsApi> GetWorkspacesByWorkspaceProjectsByProjectKey2(GetWorkspacesByWorkspaceProjectsByProjectKey2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/projects/{project_key}"),
            [new TemplateParam("project_key", request.ProjectKey), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ProjectBitbucketDeploymentsApi>(),
            GetWorkspacesByWorkspaceProjectsByProjectKey2Error.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkspacesByWorkspacePullrequestsBySelectedUser2Error"/> when the server returns an error response.</exception>
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
    public Task<PaginatedPullRequests> GetWorkspacesByWorkspacePullrequestsBySelectedUser2(GetWorkspacesByWorkspacePullrequestsBySelectedUser2Request request,
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
            GetWorkspacesByWorkspacePullrequestsBySelectedUser2Error.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a webhook for a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookSubscription"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostWorkspacesByWorkspaceHooks2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new webhook on the specified workspace.
    /// <para>
    /// Workspace webhooks are fired for events from all repositories contained
    /// by that workspace.
    /// </para>
    /// <para>
    /// Example:
    /// </para>
    /// <code>
    /// $ curl -X POST -u credentials -H 'Content-Type: application/json'
    /// https://api.bitbucket.org/2.0/workspaces/my-workspace/hooks
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
    /// This call requires the webhook scope, as well as any scope
    /// that applies to the events that the webhook subscribes to. In the
    /// example above that means: <c>webhook</c>, <c>repository</c> and <c>issue</c>.
    /// </para>
    /// <para>
    /// The <c>url</c> must properly resolve and cannot be an internal, non-routed address.
    /// </para>
    /// <para>
    /// Only workspace owners can install webhooks on workspaces.
    /// </para>
    /// </remarks>
    public Task<WebhookSubscription> PostWorkspacesByWorkspaceHooks2(PostWorkspacesByWorkspaceHooks2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/hooks"),
            [new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<WebhookSubscription>(),
            PostWorkspacesByWorkspaceHooks2Error.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a webhook for a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookSubscription"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutWorkspacesByWorkspaceHooksByUid2Error"/> when the server returns an error response.</exception>
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
    public Task<WebhookSubscription> PutWorkspacesByWorkspaceHooksByUid2(PutWorkspacesByWorkspaceHooksByUid2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/hooks/{uid}"),
            [new TemplateParam("uid", request.Uid), new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            JsonResponse.Create<WebhookSubscription>(),
            PutWorkspacesByWorkspaceHooksByUid2Error.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
