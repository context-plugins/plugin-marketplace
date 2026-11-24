using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Asana.Core;
using Asana.Core.Authentication;
using Asana.Core.Exceptions;
using Asana.Core.Models;
using Asana.Core.Request;
using Asana.Core.Response;
using Asana.Errors;
using Asana.Models;
using Asana.Requests.Users;

namespace Asana.Api;

/// <summary>
/// A user object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
/// <para>
/// Like other objects in the system, users are referred to by numerical IDs. However, the special string identifier <c>me</c> can be used anywhere a user ID is accepted, to refer to the current authenticated user (e.g, <c>GET /users/me</c>).
/// </para>
/// </summary>
public sealed class Users
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Users(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get a user's favorites
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UsersFavoritesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetFavoritesForUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns all of a user's favorites in the given workspace, of the given type.
    /// Results are given in order (The same order as Asana's sidebar).
    /// </remarks>
    public Task<UsersFavoritesResponse> GetFavoritesForUser(GetFavoritesForUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{user_gid}/favorites"),
            [new TemplateParam("user_gid", request.UserGid)],
            [
                new Param("resource_type", request.ResourceType),
                new Param("workspace", request.Workspace),
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<UsersFavoritesResponse>(),
            GetFavoritesForUserError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UsersResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the full user record for the single user with the provided ID.
    /// </remarks>
    public Task<UsersResponse1> GetUser(GetUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{user_gid}"),
            [new TemplateParam("user_gid", request.UserGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<UsersResponse1>(),
            GetUserError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get multiple users
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UsersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUsersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the user records for all users in all workspaces and organizations accessible to the authenticated user. Accepts an optional workspace ID parameter.
    /// Results are sorted by user ID.
    /// </remarks>
    public Task<UsersResponse> GetUsers(GetUsersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users"),
            [],
            [
                new Param("workspace", request.Workspace),
                new Param("team", request.Team),
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<UsersResponse>(),
            GetUsersError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get users in a team
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TeamsUsersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUsersForTeamError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the compact records for all users that are members of the team.
    /// Results are sorted alphabetically and limited to 2000. For more results use the <c>/users</c> endpoint.
    /// </remarks>
    public Task<TeamsUsersResponse> GetUsersForTeam(GetUsersForTeamRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/teams/{team_gid}/users"),
            [new TemplateParam("team_gid", request.TeamGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TeamsUsersResponse>(),
            GetUsersForTeamError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get users in a workspace or organization
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WorkspacesUsersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUsersForWorkspaceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the compact records for all users in the specified workspace or organization.
    /// Results are sorted alphabetically and limited to 2000. For more results use the <c>/users</c> endpoint.
    /// </remarks>
    public Task<WorkspacesUsersResponse> GetUsersForWorkspace(GetUsersForWorkspaceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace_gid}/users"),
            [new TemplateParam("workspace_gid", request.WorkspaceGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WorkspacesUsersResponse>(),
            GetUsersForWorkspaceError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
