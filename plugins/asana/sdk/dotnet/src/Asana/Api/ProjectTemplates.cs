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
using Asana.Requests.ProjectTemplates;

namespace Asana.Api;

/// <summary>
/// A project template is an object that allows new projects to be created
/// with a predefined setup, which may include tasks, sections, rules, etc.
/// It simplifies the process of running a workflow that involves a similar
/// set of work every time.
/// <para>
/// Project templates in organizations are shared with a single team. Currently, the
/// team of a project template cannot be changed via the API.
/// </para>
/// </summary>
public sealed class ProjectTemplates
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ProjectTemplates(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get a project template
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectTemplatesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetProjectTemplateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the complete project template record for a single project template.
    /// </remarks>
    public Task<ProjectTemplatesResponse> GetProjectTemplate(GetProjectTemplateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/project_templates/{project_template_gid}"),
            [new TemplateParam("project_template_gid", request.ProjectTemplateGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ProjectTemplatesResponse>(),
            GetProjectTemplateError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get multiple project templates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectTemplatesResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetProjectTemplatesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the compact project template records for all project templates in the given team or workspace.
    /// </remarks>
    public Task<ProjectTemplatesResponse1> GetProjectTemplates(GetProjectTemplatesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/project_templates"),
            [],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("workspace", request.Workspace),
                new Param("team", request.Team),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ProjectTemplatesResponse1>(),
            GetProjectTemplatesError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a team's project templates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TeamsProjectTemplatesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetProjectTemplatesForTeamError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the compact project template records for all project templates in the team.
    /// </remarks>
    public Task<TeamsProjectTemplatesResponse> GetProjectTemplatesForTeam(GetProjectTemplatesForTeamRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/teams/{team_gid}/project_templates"),
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
            JsonResponse.Create<TeamsProjectTemplatesResponse>(),
            GetProjectTemplatesForTeamError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Instantiate a project from a project template
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectTemplatesInstantiateProjectResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="InstantiateProjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates and returns a job that will asynchronously handle the project instantiation.
    /// <para>
    /// To form this request, it is recommended to first make a request to get a project template. Then, from the response, copy the <c>gid</c> from the object in the <c>requested_dates</c> array. This <c>gid</c> should be used in <c>requested_dates</c> to instantiate a project.
    /// </para>
    /// <para>
    /// _Note: The body of this request will differ if your workspace is an organization. To determine if your workspace is an organization, use the is_organization parameter._
    /// </para>
    /// </remarks>
    public Task<ProjectTemplatesInstantiateProjectResponse> InstantiateProject(InstantiateProjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/project_templates/{project_template_gid}/instantiateProject"),
            [new TemplateParam("project_template_gid", request.ProjectTemplateGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ProjectTemplatesInstantiateProjectResponse>(),
            InstantiateProjectError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
