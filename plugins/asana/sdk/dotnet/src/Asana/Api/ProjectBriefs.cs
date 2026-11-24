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
using Asana.Requests.ProjectBriefs;

namespace Asana.Api;

/// <summary>
/// A project brief object represents a rich text document that describes a project.
/// <para>
/// Please note that this API is in *preview*, and is expected to change. This API is to be used for development and testing only as an advance view into the upcoming rich text format experience in the task description. For more information, see this post in the developer forum.
/// </para>
/// </summary>
public sealed class ProjectBriefs
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ProjectBriefs(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a project brief
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectsProjectBriefsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateProjectBriefError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new project brief.
    /// <para>
    /// Returns the full record of the newly created project brief.
    /// </para>
    /// </remarks>
    public Task<ProjectsProjectBriefsResponse> CreateProjectBrief(CreateProjectBriefRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/projects/{project_gid}/project_briefs"),
            [new TemplateParam("project_gid", request.ProjectGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ProjectsProjectBriefsResponse>(),
            CreateProjectBriefError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a project brief
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectBriefsResponse2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteProjectBriefError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a specific, existing project brief.
    /// <para>
    /// Returns an empty data record.
    /// </para>
    /// </remarks>
    public Task<ProjectBriefsResponse2> DeleteProjectBrief(DeleteProjectBriefRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/project_briefs/{project_brief_gid}"),
            [new TemplateParam("project_brief_gid", request.ProjectBriefGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<ProjectBriefsResponse2>(),
            DeleteProjectBriefError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a project brief
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectBriefsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetProjectBriefError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the full record for a project brief.
    /// </remarks>
    public Task<ProjectBriefsResponse> GetProjectBrief(GetProjectBriefRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/project_briefs/{project_brief_gid}"),
            [new TemplateParam("project_brief_gid", request.ProjectBriefGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ProjectBriefsResponse>(),
            GetProjectBriefError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a project brief
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectBriefsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateProjectBriefError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// An existing project brief can be updated by making a PUT request on the URL for
    /// that project brief. Only the fields provided in the <c>data</c> block will be updated;
    /// any unspecified fields will remain unchanged.
    /// <para>
    /// Returns the complete updated project brief record.
    /// </para>
    /// </remarks>
    public Task<ProjectBriefsResponse> UpdateProjectBrief(UpdateProjectBriefRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/project_briefs/{project_brief_gid}"),
            [new TemplateParam("project_brief_gid", request.ProjectBriefGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ProjectBriefsResponse>(),
            UpdateProjectBriefError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
