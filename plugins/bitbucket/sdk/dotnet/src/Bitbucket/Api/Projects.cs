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
using Bitbucket.Requests.Projects;

namespace Bitbucket.Api;

/// <summary>
/// Bitbucket Cloud projects make it easier for teams to focus on
/// a goal, product, or process by organizing their repositories.
/// </summary>
public sealed class Projects
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Projects(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete a project for a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteWorkspacesByWorkspaceProjectsByProjectKeyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes this project. This is an irreversible operation.
    /// <para>
    /// You cannot delete a project that still contains repositories.
    /// To delete the project, delete
    /// or transfer the repositories first.
    /// </para>
    /// <para>
    /// Example:
    /// <code>
    /// $ curl -X DELETE https://api.bitbucket.org/2.0/workspaces/bbworkspace1/projects/PROJ
    /// </code>
    /// </para>
    /// </remarks>
    public Task DeleteWorkspacesByWorkspaceProjectsByProjectKey(DeleteWorkspacesByWorkspaceProjectsByProjectKeyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/projects/{project_key}"),
            [new TemplateParam("project_key", request.ProjectKey), new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteWorkspacesByWorkspaceProjectsByProjectKeyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove the specific user from the project's default reviewers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes a default reviewer from the project.
    /// <para>
    /// Example:
    /// <code>
    /// $ curl https://api.bitbucket.org/2.0/.../default-reviewers/%7Bf0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6%7D
    /// </para>
    /// <para>
    /// HTTP/1.1 204
    /// <code>
    /// </para>
    /// </remarks>
    public Task DeleteWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUser(DeleteWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/projects/{project_key}/default-reviewers/{selected_user}"),
            [
                new TemplateParam("project_key", request.ProjectKey),
                new TemplateParam("selected_user", request.SelectedUser),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete an explicit group permission for a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the project group permission between the requested project and group, if one exists.
    /// <para>
    /// Only users with admin permission for the project may access this resource.
    /// </para>
    /// </remarks>
    public Task DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlug(DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/projects/{project_key}/permissions-config/groups/{group_slug}"),
            [
                new TemplateParam("group_slug", request.GroupSlug),
                new TemplateParam("project_key", request.ProjectKey),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete an explicit user permission for a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the project user permission between the requested project and user, if one exists.
    /// <para>
    /// Only users with admin permission for the project may access this resource.
    /// </para>
    /// <para>
    /// Due to security concerns, the JWT and OAuth authentication methods are unsupported.
    /// This is to ensure integrations and add-ons are not allowed to change permissions.
    /// </para>
    /// </remarks>
    public Task DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserId(DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/workspaces/{workspace}/projects/{project_key}/permissions-config/users/{selected_user_id}"),
            [
                new TemplateParam("project_key", request.ProjectKey),
                new TemplateParam("selected_user_id", request.SelectedUserId),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a project for a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectBitbucketProjectsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkspacesByWorkspaceProjectsByProjectKeyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the requested project.
    /// </remarks>
    public Task<ProjectBitbucketProjectsApi> GetWorkspacesByWorkspaceProjectsByProjectKey(GetWorkspacesByWorkspaceProjectsByProjectKeyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/projects/{project_key}"),
            [new TemplateParam("project_key", request.ProjectKey), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ProjectBitbucketProjectsApi>(),
            GetWorkspacesByWorkspaceProjectsByProjectKeyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List the default reviewers in a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedDefaultReviewerAndType"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Return a list of all default reviewers for a project. This is a list of users that will be added as default
    /// reviewers to pull requests for any repository within the project.
    /// </remarks>
    public Task<PaginatedDefaultReviewerAndType> GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewers(GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/projects/{project_key}/default-reviewers"),
            [new TemplateParam("project_key", request.ProjectKey), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedDefaultReviewerAndType>(),
            GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a default reviewer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="User"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the specified default reviewer.
    /// </remarks>
    public Task<User> GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUser(GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/projects/{project_key}/default-reviewers/{selected_user}"),
            [
                new TemplateParam("project_key", request.ProjectKey),
                new TemplateParam("selected_user", request.SelectedUser),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<User>(),
            GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List explicit group permissions for a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedProjectGroupPermissions"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of explicit group permissions for the given project.
    /// This endpoint does not support BBQL features.
    /// </remarks>
    public Task<PaginatedProjectGroupPermissions> GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroups(GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/projects/{project_key}/permissions-config/groups"),
            [new TemplateParam("project_key", request.ProjectKey), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedProjectGroupPermissions>(),
            GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get an explicit group permission for a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectGroupPermission"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the group permission for a given group and project.
    /// <para>
    /// Only users with admin permission for the project may access this resource.
    /// </para>
    /// <para>
    /// Permissions can be:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>admin</c></description></item>
    ///   <item><description><c>create-repo</c></description></item>
    ///   <item><description><c>write</c></description></item>
    ///   <item><description><c>read</c></description></item>
    ///   <item><description><c>none</c></description></item>
    /// </list>
    /// </remarks>
    public Task<ProjectGroupPermission> GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlug(GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/projects/{project_key}/permissions-config/groups/{group_slug}"),
            [
                new TemplateParam("group_slug", request.GroupSlug),
                new TemplateParam("project_key", request.ProjectKey),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ProjectGroupPermission>(),
            GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List explicit user permissions for a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedProjectUserPermissions"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of explicit user permissions for the given project.
    /// This endpoint does not support BBQL features.
    /// </remarks>
    public Task<PaginatedProjectUserPermissions> GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsers(GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/projects/{project_key}/permissions-config/users"),
            [new TemplateParam("project_key", request.ProjectKey), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedProjectUserPermissions>(),
            GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get an explicit user permission for a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectUserPermission"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the explicit user permission for a given user and project.
    /// <para>
    /// Only users with admin permission for the project may access this resource.
    /// </para>
    /// <para>
    /// Permissions can be:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>admin</c></description></item>
    ///   <item><description><c>create-repo</c></description></item>
    ///   <item><description><c>write</c></description></item>
    ///   <item><description><c>read</c></description></item>
    ///   <item><description><c>none</c></description></item>
    /// </list>
    /// </remarks>
    public Task<ProjectUserPermission> GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserId(GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/workspaces/{workspace}/projects/{project_key}/permissions-config/users/{selected_user_id}"),
            [
                new TemplateParam("project_key", request.ProjectKey),
                new TemplateParam("selected_user_id", request.SelectedUserId),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ProjectUserPermission>(),
            GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a project in a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectBitbucketProjectsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostWorkspacesByWorkspaceProjectsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new project.
    /// <para>
    /// Note that the avatar has to be embedded as either a data-url
    /// or a URL to an external image as shown in the examples below:
    /// </para>
    /// <code>
    /// $ body=$(cat &lt;&lt; EOF
    /// {
    /// "name": "Mars Project",
    /// "key": "MARS",
    /// "description": "Software for colonizing mars.",
    /// "links": {
    /// "avatar": {
    /// "href": "data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/..."
    /// }
    /// },
    /// "is_private": false
    /// }
    /// EOF
    /// )
    /// $ curl -H "Content-Type: application/json" \
    /// -X POST \
    /// -d "$body" \
    /// https://api.bitbucket.org/2.0/workspaces/teams-in-space/projects/ | jq .
    /// {
    /// // Serialized project document
    /// }
    /// </code>
    /// <para>
    /// or even:
    /// </para>
    /// <code>
    /// $ body=$(cat &lt;&lt; EOF
    /// {
    /// "name": "Mars Project",
    /// "key": "MARS",
    /// "description": "Software for colonizing mars.",
    /// "links": {
    /// "avatar": {
    /// "href": "http://i.imgur.com/72tRx4w.gif"
    /// }
    /// },
    /// "is_private": false
    /// }
    /// EOF
    /// )
    /// $ curl -H "Content-Type: application/json" \
    /// -X POST \
    /// -d "$body" \
    /// https://api.bitbucket.org/2.0/workspaces/teams-in-space/projects/ | jq .
    /// {
    /// // Serialized project document
    /// }
    /// </code>
    /// </remarks>
    public Task<ProjectBitbucketProjectsApi> PostWorkspacesByWorkspaceProjects(PostWorkspacesByWorkspaceProjectsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/projects"),
            [new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ProjectBitbucketProjectsApi>(),
            PostWorkspacesByWorkspaceProjectsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a project for a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectBitbucketProjectsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutWorkspacesByWorkspaceProjectsByProjectKeyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Since this endpoint can be used to both update and to create a
    /// project, the request body depends on the intent.
    /// <para>
    /// #### Creation
    /// </para>
    /// <para>
    /// See the POST documentation for the project collection for an
    /// example of the request body.
    /// </para>
    /// <para>
    /// Note: The <c>key</c> should not be specified in the body of request
    /// (since it is already present in the URL). The <c>name</c> is required,
    /// everything else is optional.
    /// </para>
    /// <para>
    /// #### Update
    /// </para>
    /// <para>
    /// See the POST documentation for the project collection for an
    /// example of the request body.
    /// </para>
    /// <para>
    /// Note: The key is not required in the body (since it is already in
    /// the URL). The key may be specified in the body, if the intent is
    /// to change the key itself. In such a scenario, the location of the
    /// project is changed and is returned in the <c>Location</c> header of the
    /// response.
    /// </para>
    /// </remarks>
    public Task<ProjectBitbucketProjectsApi> PutWorkspacesByWorkspaceProjectsByProjectKey(PutWorkspacesByWorkspaceProjectsByProjectKeyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/projects/{project_key}"),
            [new TemplateParam("project_key", request.ProjectKey), new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ProjectBitbucketProjectsApi>(),
            PutWorkspacesByWorkspaceProjectsByProjectKeyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Add the specific user as a default reviewer for the project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="User"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds the specified user to the project's list of default reviewers. The method is
    /// idempotent. Accepts an optional body containing the <c>uuid</c> of the user to be added.
    /// </remarks>
    public Task<User> PutWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUser(PutWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/projects/{project_key}/default-reviewers/{selected_user}"),
            [
                new TemplateParam("project_key", request.ProjectKey),
                new TemplateParam("selected_user", request.SelectedUser),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            JsonResponse.Create<User>(),
            PutWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an explicit group permission for a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectGroupPermission"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the group permission, or grants a new permission if one does not already exist.
    /// <para>
    /// Only users with admin permission for the project may access this resource.
    /// </para>
    /// <para>
    /// Due to security concerns, the JWT and OAuth authentication methods are unsupported.
    /// This is to ensure integrations and add-ons are not allowed to change permissions.
    /// </para>
    /// <para>
    /// Permissions can be:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>admin</c></description></item>
    ///   <item><description><c>create-repo</c></description></item>
    ///   <item><description><c>write</c></description></item>
    ///   <item><description><c>read</c></description></item>
    /// </list>
    /// </remarks>
    public Task<ProjectGroupPermission> PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlug(PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/projects/{project_key}/permissions-config/groups/{group_slug}"),
            [
                new TemplateParam("group_slug", request.GroupSlug),
                new TemplateParam("project_key", request.ProjectKey),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ProjectGroupPermission>(),
            PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an explicit user permission for a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectUserPermission"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the explicit user permission for a given user and project. The selected
    /// user must be a member of the workspace, and cannot be the workspace owner.
    /// <para>
    /// Only users with admin permission for the project may access this resource.
    /// </para>
    /// <para>
    /// Due to security concerns, the JWT and OAuth authentication methods are unsupported.
    /// This is to ensure integrations and add-ons are not allowed to change permissions.
    /// </para>
    /// <para>
    /// Permissions can be:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>admin</c></description></item>
    ///   <item><description><c>create-repo</c></description></item>
    ///   <item><description><c>write</c></description></item>
    ///   <item><description><c>read</c></description></item>
    /// </list>
    /// </remarks>
    public Task<ProjectUserPermission> PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserId(PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/workspaces/{workspace}/projects/{project_key}/permissions-config/users/{selected_user_id}"),
            [
                new TemplateParam("project_key", request.ProjectKey),
                new TemplateParam("selected_user_id", request.SelectedUserId),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ProjectUserPermission>(),
            PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
