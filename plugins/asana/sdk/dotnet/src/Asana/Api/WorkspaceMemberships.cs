using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Asana.Core;
using Asana.Core.Authentication;
using Asana.Core.ErrorResponse;
using Asana.Core.Exceptions;
using Asana.Core.Models;
using Asana.Core.Request;
using Asana.Core.Response;
using Asana.Errors;
using Asana.Models;
using Asana.Requests.WorkspaceMemberships;

namespace Asana.Api;

/// <summary>
/// This object determines if a user is a member of a workspace.
/// </summary>
public sealed class WorkspaceMemberships
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal WorkspaceMemberships(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get a workspace membership
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WorkspaceMembershipsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkspaceMembershipError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the complete workspace record for a single workspace membership.
    /// </remarks>
    public Task<WorkspaceMembershipsResponse> GetWorkspaceMembership(GetWorkspaceMembershipRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspace_memberships/{workspace_membership_gid}"),
            [new TemplateParam("workspace_membership_gid", request.WorkspaceMembershipGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WorkspaceMembershipsResponse>(),
            GetWorkspaceMembershipError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get workspace memberships for a user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UsersWorkspaceMembershipsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkspaceMembershipsForUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the compact workspace membership records for the user.
    /// </remarks>
    public Task<UsersWorkspaceMembershipsResponse> GetWorkspaceMembershipsForUser(GetWorkspaceMembershipsForUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{user_gid}/workspace_memberships"),
            [new TemplateParam("user_gid", request.UserGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<UsersWorkspaceMembershipsResponse>(),
            GetWorkspaceMembershipsForUserError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get the workspace memberships for a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WorkspacesWorkspaceMembershipsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the compact workspace membership records for the workspace.
    /// </remarks>
    public Task<WorkspacesWorkspaceMembershipsResponse> GetWorkspaceMembershipsForWorkspace(GetWorkspaceMembershipsForWorkspaceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace_gid}/workspace_memberships"),
            [new TemplateParam("workspace_gid", request.WorkspaceGid)],
            [
                new Param("user", request.User),
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WorkspacesWorkspaceMembershipsResponse>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
