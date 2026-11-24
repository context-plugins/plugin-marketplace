using System;
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
using Asana.Requests.Teams;

namespace Asana.Api;

/// <summary>
/// A team is used to group related projects and people together within an organization. Each project in an organization is associated with a team.
/// </summary>
public sealed class Teams
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Teams(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Add a user to a team
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TeamsAddUserResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddUserForTeamError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The user making this call must be a member of the team in order to add others. The user being added must exist in the same organization as the team.
    /// <para>
    /// Returns the complete team membership record for the newly added user.
    /// </para>
    /// </remarks>
    public Task<TeamsAddUserResponse> AddUserForTeam(AddUserForTeamRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/teams/{team_gid}/addUser"),
            [new TemplateParam("team_gid", request.TeamGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TeamsAddUserResponse>(),
            AddUserForTeamError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a team
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TeamsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateTeamError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a team within the current workspace.
    /// </remarks>
    public Task<TeamsResponse> CreateTeam(CreateTeamRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/teams"),
            [],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TeamsResponse>(),
            CreateTeamError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a team
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TeamsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTeamError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the full record for a single team.
    /// </remarks>
    public Task<TeamsResponse> GetTeam(GetTeamRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/teams/{team_gid}"),
            [new TemplateParam("team_gid", request.TeamGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TeamsResponse>(),
            GetTeamError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get teams for a user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UsersTeamsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTeamsForUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the compact records for all teams to which the given user is assigned.
    /// </remarks>
    public Task<UsersTeamsResponse> GetTeamsForUser(GetTeamsForUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{user_gid}/teams"),
            [new TemplateParam("user_gid", request.UserGid)],
            [
                new Param("organization", request.Organization),
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<UsersTeamsResponse>(),
            GetTeamsForUserError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get teams in a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WorkspacesTeamsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTeamsForWorkspaceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the compact records for all teams in the workspace visible to the authorized user.
    /// </remarks>
    public Task<WorkspacesTeamsResponse> GetTeamsForWorkspace(GetTeamsForWorkspaceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace_gid}/teams"),
            [new TemplateParam("workspace_gid", request.WorkspaceGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WorkspacesTeamsResponse>(),
            GetTeamsForWorkspaceError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove a user from a team
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TeamsRemoveUserResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemoveUserForTeamError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The user making this call must be a member of the team in order to remove themselves or others.
    /// </remarks>
    public Task<TeamsRemoveUserResponse> RemoveUserForTeam(RemoveUserForTeamRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/teams/{team_gid}/removeUser"),
            [new TemplateParam("team_gid", request.TeamGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TeamsRemoveUserResponse>(),
            RemoveUserForTeamError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a team
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TeamsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateTeamError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a team within the current workspace.
    /// </remarks>
    public Task<TeamsResponse> UpdateTeam(UpdateTeamRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/teams"),
            [],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TeamsResponse>(),
            UpdateTeamError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
