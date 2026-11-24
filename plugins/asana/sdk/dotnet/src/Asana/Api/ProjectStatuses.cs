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
using Asana.Requests.ProjectStatuses;

namespace Asana.Api;

/// <summary>
/// *Deprecated: new integrations should prefer using status updates*
/// <para>
/// A project status is an update on the progress of a particular project,
/// and is sent out to all project followers when created. These updates
/// include both text describing the update and a color code intended to
/// represent the overall state of the project: "green" for projects that
/// are on track, "yellow" for projects at risk, "red" for projects that
/// are behind, and "blue" for projects on hold.
/// </para>
/// <para>
/// Project statuses can be created and deleted, but not modified.
/// </para>
/// </summary>
public sealed class ProjectStatuses
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ProjectStatuses(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a project status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectsProjectStatusesResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateProjectStatusForProjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// *Deprecated: new integrations should prefer the <c>/status_updates</c> route.*
    /// <para>
    /// Creates a new status update on the project.
    /// </para>
    /// <para>
    /// Returns the full record of the newly created project status update.
    /// </para>
    /// </remarks>
    public Task<ProjectsProjectStatusesResponse1> CreateProjectStatusForProject(CreateProjectStatusForProjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/projects/{project_gid}/project_statuses"),
            [new TemplateParam("project_gid", request.ProjectGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ProjectsProjectStatusesResponse1>(),
            CreateProjectStatusForProjectError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a project status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectStatusesResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteProjectStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// *Deprecated: new integrations should prefer the <c>/status_updates/{status_gid}</c> route.*
    /// <para>
    /// Deletes a specific, existing project status update.
    /// </para>
    /// <para>
    /// Returns an empty data record.
    /// </para>
    /// </remarks>
    public Task<ProjectStatusesResponse1> DeleteProjectStatus(DeleteProjectStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/project_statuses/{project_status_gid}"),
            [new TemplateParam("project_status_gid", request.ProjectStatusGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<ProjectStatusesResponse1>(),
            DeleteProjectStatusError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a project status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectStatusesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetProjectStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// *Deprecated: new integrations should prefer the <c>/status_updates/{status_gid}</c> route.*
    /// <para>
    /// Returns the complete record for a single status update.
    /// </para>
    /// </remarks>
    public Task<ProjectStatusesResponse> GetProjectStatus(GetProjectStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/project_statuses/{project_status_gid}"),
            [new TemplateParam("project_status_gid", request.ProjectStatusGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ProjectStatusesResponse>(),
            GetProjectStatusError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get statuses from a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectsProjectStatusesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetProjectStatusesForProjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// *Deprecated: new integrations should prefer the <c>/status_updates</c> route.*
    /// <para>
    /// Returns the compact project status update records for all updates on the project.
    /// </para>
    /// </remarks>
    public Task<ProjectsProjectStatusesResponse> GetProjectStatusesForProject(GetProjectStatusesForProjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/projects/{project_gid}/project_statuses"),
            [new TemplateParam("project_gid", request.ProjectGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ProjectsProjectStatusesResponse>(),
            GetProjectStatusesForProjectError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
