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
using Asana.Requests.TeamMemberships;

namespace Asana.Api;

/// <summary>
/// This object determines if a user is a member of a team.
/// </summary>
public sealed class TeamMemberships
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal TeamMemberships(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get a team membership
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TeamMembershipsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTeamMembershipError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the complete team membership record for a single team membership.
    /// </remarks>
    public Task<TeamMembershipsResponse> GetTeamMembership(GetTeamMembershipRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/team_memberships/{team_membership_gid}"),
            [new TemplateParam("team_membership_gid", request.TeamMembershipGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TeamMembershipsResponse>(),
            GetTeamMembershipError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get team memberships
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TeamMembershipsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTeamMembershipsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns compact team membership records.
    /// </remarks>
    public Task<TeamMembershipsResponse1> GetTeamMemberships(GetTeamMembershipsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/team_memberships"),
            [],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("team", request.Team),
                new Param("user", request.User),
                new Param("workspace", request.Workspace),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TeamMembershipsResponse1>(),
            GetTeamMembershipsError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get memberships from a team
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TeamsTeamMembershipsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTeamMembershipsForTeamError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the compact team memberships for the team.
    /// </remarks>
    public Task<TeamsTeamMembershipsResponse> GetTeamMembershipsForTeam(GetTeamMembershipsForTeamRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/teams/{team_gid}/team_memberships"),
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
            JsonResponse.Create<TeamsTeamMembershipsResponse>(),
            GetTeamMembershipsForTeamError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get memberships from a user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UsersTeamMembershipsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTeamMembershipsForUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the compact team membership records for the user.
    /// </remarks>
    public Task<UsersTeamMembershipsResponse> GetTeamMembershipsForUser(GetTeamMembershipsForUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{user_gid}/team_memberships"),
            [new TemplateParam("user_gid", request.UserGid)],
            [
                new Param("workspace", request.Workspace),
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<UsersTeamMembershipsResponse>(),
            GetTeamMembershipsForUserError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
