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
using Asana.Requests.ProjectMemberships;

namespace Asana.Api;

/// <summary>
/// With the introduction of “comment-only” projects in Asana, a user’s membership in a project comes with associated permissions. These permissions (i.e., whether a user has full access to the project or comment-only access) are accessible through the project memberships endpoints described here.
/// </summary>
public sealed class ProjectMemberships
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ProjectMemberships(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get a project membership
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectMembershipsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetProjectMembershipError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the complete project record for a single project membership.
    /// </remarks>
    public Task<ProjectMembershipsResponse> GetProjectMembership(GetProjectMembershipRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/project_memberships/{project_membership_gid}"),
            [new TemplateParam("project_membership_gid", request.ProjectMembershipGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ProjectMembershipsResponse>(),
            GetProjectMembershipError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get memberships from a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectsProjectMembershipsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetProjectMembershipsForProjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the compact project membership records for the project.
    /// </remarks>
    public Task<ProjectsProjectMembershipsResponse> GetProjectMembershipsForProject(GetProjectMembershipsForProjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/projects/{project_gid}/project_memberships"),
            [new TemplateParam("project_gid", request.ProjectGid)],
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
            JsonResponse.Create<ProjectsProjectMembershipsResponse>(),
            GetProjectMembershipsForProjectError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
