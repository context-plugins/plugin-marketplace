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
using Asana.Requests.Sections;

namespace Asana.Api;

/// <summary>
/// A section is a subdivision of a project that groups tasks together. It can either be a header above a list of tasks in a list view or a column in a board view of a project.
/// <para>
/// Sections are largely a shared idiom in Asana’s API for both list and board views of a project regardless of the project’s layout.
/// </para>
/// <para>
/// The ‘memberships’ property when getting a task will return the information for the section or the column under ‘section’ in the response.
/// </para>
/// </summary>
public sealed class Sections
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Sections(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Add task to section
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SectionsAddTaskResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddTaskForSectionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Add a task to a specific, existing section. This will remove the task from other sections of the project.
    /// <para>
    /// The task will be inserted at the top of a section unless an insert_before or insert_after parameter is declared.
    /// </para>
    /// <para>
    /// This does not work for separators (tasks with the resource_subtype of section).
    /// </para>
    /// </remarks>
    public Task<SectionsAddTaskResponse> AddTaskForSection(AddTaskForSectionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sections/{section_gid}/addTask"),
            [new TemplateParam("section_gid", request.SectionGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SectionsAddTaskResponse>(),
            AddTaskForSectionError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a section in a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectsSectionsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSectionForProjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new section in a project.
    /// Returns the full record of the newly created section.
    /// </remarks>
    public Task<ProjectsSectionsResponse1> CreateSectionForProject(CreateSectionForProjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/projects/{project_gid}/sections"),
            [new TemplateParam("project_gid", request.ProjectGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ProjectsSectionsResponse1>(),
            CreateSectionForProjectError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a section
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SectionsResponse2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteSectionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// A specific, existing section can be deleted by making a DELETE request on
    /// the URL for that section.
    /// <para>
    /// Note that sections must be empty to be deleted.
    /// </para>
    /// <para>
    /// The last remaining section cannot be deleted.
    /// </para>
    /// <para>
    /// Returns an empty data block.
    /// </para>
    /// </remarks>
    public Task<SectionsResponse2> DeleteSection(DeleteSectionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sections/{section_gid}"),
            [new TemplateParam("section_gid", request.SectionGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<SectionsResponse2>(),
            DeleteSectionError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a section
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SectionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSectionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the complete record for a single section.
    /// </remarks>
    public Task<SectionsResponse> GetSection(GetSectionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sections/{section_gid}"),
            [new TemplateParam("section_gid", request.SectionGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SectionsResponse>(),
            GetSectionError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get sections in a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectsSectionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSectionsForProjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the compact records for all sections in the specified project.
    /// </remarks>
    public Task<ProjectsSectionsResponse> GetSectionsForProject(GetSectionsForProjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/projects/{project_gid}/sections"),
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
            JsonResponse.Create<ProjectsSectionsResponse>(),
            GetSectionsForProjectError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Move or Insert sections
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectsSectionsInsertResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="InsertSectionForProjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Move sections relative to each other. One of
    /// <c>before_section</c> or <c>after_section</c> is required.
    /// <para>
    /// Sections cannot be moved between projects.
    /// </para>
    /// <para>
    /// Returns an empty data block.
    /// </para>
    /// </remarks>
    public Task<ProjectsSectionsInsertResponse> InsertSectionForProject(InsertSectionForProjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/projects/{project_gid}/sections/insert"),
            [new TemplateParam("project_gid", request.ProjectGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ProjectsSectionsInsertResponse>(),
            InsertSectionForProjectError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a section
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SectionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateSectionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// A specific, existing section can be updated by making a PUT request on
    /// the URL for that project. Only the fields provided in the <c>data</c> block
    /// will be updated; any unspecified fields will remain unchanged. (note that
    /// at this time, the only field that can be updated is the <c>name</c> field.)
    /// <para>
    /// When using this method, it is best to specify only those fields you wish
    /// to change, or else you may overwrite changes made by another user since
    /// you last retrieved the task.
    /// </para>
    /// <para>
    /// Returns the complete updated section record.
    /// </para>
    /// </remarks>
    public Task<SectionsResponse> UpdateSection(UpdateSectionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sections/{section_gid}"),
            [new TemplateParam("section_gid", request.SectionGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SectionsResponse>(),
            UpdateSectionError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
