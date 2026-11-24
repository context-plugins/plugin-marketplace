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
using Asana.Requests.Projects;

namespace Asana.Api;

/// <summary>
/// A project represents a prioritized list of tasks in Asana or a board with columns of tasks represented as cards. A project exists in a single workspace or organization and is accessible to a subset of users in that workspace or organization, depending on its permissions.
/// <para>
/// Projects in organizations are shared with a single team. Currently, the team of a project cannot be changed via the API. Non-organization workspaces do not have teams and so you should not specify the team of project in a regular workspace.
/// </para>
/// <para>
/// Followers of a project are a subset of the members of that project. Followers of a project will receive all updates including tasks created, added and removed from that project. Members of the project have access to and will receive status updates of the project. Adding followers to a project will add them as members if they are not already, removing followers from a project will not affect membership.
/// </para>
/// <para>
/// <b>Note:</b> You can use certain project endpoints to operate on user task lists (My Tasks) by substituting the <c>{project_gid}</c> with the <c>{user_task_list_gid}</c>. For example, you can perform operations on the custom fields of a user task list by using the following projects endpoints: Add a custom field to a project, Remove a custom field from a project and Get a project's custom fields
/// </para>
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
    /// Add a custom field to a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectsAddCustomFieldSettingResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddCustomFieldSettingForProjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Custom fields are associated with projects by way of custom field settings. This method creates a setting for the project.
    /// </remarks>
    public Task<ProjectsAddCustomFieldSettingResponse> AddCustomFieldSettingForProject(AddCustomFieldSettingForProjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/projects/{project_gid}/addCustomFieldSetting"),
            [new TemplateParam("project_gid", request.ProjectGid)],
            [new Param("opt_pretty", request.OptPretty)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ProjectsAddCustomFieldSettingResponse>(),
            AddCustomFieldSettingForProjectError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Add followers to a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectsAddFollowersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddFollowersForProjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds the specified list of users as followers to the project. Followers are a subset of members who have opted in to receive "tasks added" notifications for a project. Therefore, if the users are not already members of the project, they will also become members as a result of this operation.
    /// Returns the updated project record.
    /// </remarks>
    public Task<ProjectsAddFollowersResponse> AddFollowersForProject(AddFollowersForProjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/projects/{project_gid}/addFollowers"),
            [new TemplateParam("project_gid", request.ProjectGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ProjectsAddFollowersResponse>(),
            AddFollowersForProjectError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Add users to a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectsAddMembersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddMembersForProjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds the specified list of users as members of the project. Note that a user being added as a member may also be added as a *follower* as a result of this operation. This is because the user's default notification settings (i.e., in the "Notifcations" tab of "My Profile Settings") will override this endpoint's default behavior of setting "Tasks added" notifications to <c>false</c>.
    /// Returns the updated project record.
    /// </remarks>
    public Task<ProjectsAddMembersResponse> AddMembersForProject(AddMembersForProjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/projects/{project_gid}/addMembers"),
            [new TemplateParam("project_gid", request.ProjectGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ProjectsAddMembersResponse>(),
            AddMembersForProjectError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateProjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new project in a workspace or team.
    /// <para>
    /// Every project is required to be created in a specific workspace or
    /// organization, and this cannot be changed once set. Note that you can use
    /// the <c>workspace</c> parameter regardless of whether or not it is an
    /// organization.
    /// </para>
    /// <para>
    /// If the workspace for your project is an organization, you must also
    /// supply a <c>team</c> to share the project with.
    /// </para>
    /// <para>
    /// Returns the full record of the newly created project.
    /// </para>
    /// </remarks>
    public Task<ProjectsResponse1> CreateProject(CreateProjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/projects"),
            [],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ProjectsResponse1>(),
            CreateProjectError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a project in a team
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TeamsProjectsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateProjectForTeamError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a project shared with the given team.
    /// <para>
    /// Returns the full record of the newly created project.
    /// </para>
    /// </remarks>
    public Task<TeamsProjectsResponse1> CreateProjectForTeam(CreateProjectForTeamRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/teams/{team_gid}/projects"),
            [new TemplateParam("team_gid", request.TeamGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TeamsProjectsResponse1>(),
            CreateProjectForTeamError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a project in a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WorkspacesProjectsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateProjectForWorkspaceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the compact project records for all projects in the workspace.
    /// <para>
    /// If the workspace for your project is an organization, you must also
    /// supply a team to share the project with.
    /// </para>
    /// <para>
    /// Returns the full record of the newly created project.
    /// </para>
    /// </remarks>
    public Task<WorkspacesProjectsResponse1> CreateProjectForWorkspace(CreateProjectForWorkspaceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace_gid}/projects"),
            [new TemplateParam("workspace_gid", request.WorkspaceGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<WorkspacesProjectsResponse1>(),
            CreateProjectForWorkspaceError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectsResponse4"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteProjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// A specific, existing project can be deleted by making a DELETE request on
    /// the URL for that project.
    /// <para>
    /// Returns an empty data record.
    /// </para>
    /// </remarks>
    public Task<ProjectsResponse4> DeleteProject(DeleteProjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/projects/{project_gid}"),
            [new TemplateParam("project_gid", request.ProjectGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<ProjectsResponse4>(),
            DeleteProjectError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Duplicate a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectsDuplicateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DuplicateProjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates and returns a job that will asynchronously handle the duplication.
    /// </remarks>
    public Task<ProjectsDuplicateResponse> DuplicateProject(DuplicateProjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/projects/{project_gid}/duplicate"),
            [new TemplateParam("project_gid", request.ProjectGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ProjectsDuplicateResponse>(),
            DuplicateProjectError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetProjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the complete project record for a single project.
    /// </remarks>
    public Task<ProjectsResponse1> GetProject(GetProjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/projects/{project_gid}"),
            [new TemplateParam("project_gid", request.ProjectGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ProjectsResponse1>(),
            GetProjectError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get multiple projects
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetProjectsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the compact project records for some filtered set of projects. Use one or more of the parameters provided to filter the projects returned.
    /// *Note: This endpoint may timeout for large domains. Try filtering by team!*
    /// </remarks>
    public Task<ProjectsResponse> GetProjects(GetProjectsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/projects"),
            [],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("workspace", request.Workspace),
                new Param("team", request.Team),
                new Param("archived", request.Archived),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ProjectsResponse>(),
            GetProjectsError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get projects a task is in
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TasksProjectsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetProjectsForTaskError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a compact representation of all of the projects the task is in.
    /// </remarks>
    public Task<TasksProjectsResponse> GetProjectsForTask(GetProjectsForTaskRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tasks/{task_gid}/projects"),
            [new TemplateParam("task_gid", request.TaskGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TasksProjectsResponse>(),
            GetProjectsForTaskError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a team's projects
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TeamsProjectsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetProjectsForTeamError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the compact project records for all projects in the team.
    /// </remarks>
    public Task<TeamsProjectsResponse> GetProjectsForTeam(GetProjectsForTeamRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/teams/{team_gid}/projects"),
            [new TemplateParam("team_gid", request.TeamGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("archived", request.Archived),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TeamsProjectsResponse>(),
            GetProjectsForTeamError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get all projects in a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WorkspacesProjectsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetProjectsForWorkspaceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the compact project records for all projects in the workspace.
    /// *Note: This endpoint may timeout for large domains. Prefer the <c>/teams/{team_gid}/projects</c> endpoint.*
    /// </remarks>
    public Task<WorkspacesProjectsResponse> GetProjectsForWorkspace(GetProjectsForWorkspaceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace_gid}/projects"),
            [new TemplateParam("workspace_gid", request.WorkspaceGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("archived", request.Archived),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WorkspacesProjectsResponse>(),
            GetProjectsForWorkspaceError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get task count of a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectsTaskCountsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTaskCountsForProjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get an object that holds task count fields. <b>All fields are excluded by default</b>. You must opt in using <c>opt_fields</c> to get any information from this endpoint.
    /// <para>
    /// This endpoint has an additional rate limit and each field counts especially high against our cost limits.
    /// </para>
    /// <para>
    /// Milestones are just tasks, so they are included in the <c>num_tasks</c>, <c>num_incomplete_tasks</c>, and <c>num_completed_tasks</c> counts.
    /// </para>
    /// </remarks>
    public Task<ProjectsTaskCountsResponse> GetTaskCountsForProject(GetTaskCountsForProjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/projects/{project_gid}/task_counts"),
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
            JsonResponse.Create<ProjectsTaskCountsResponse>(),
            GetTaskCountsForProjectError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a project template from a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectsSaveAsTemplateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ProjectSaveAsTemplateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates and returns a job that will asynchronously handle the project template creation. Note that
    /// while the resulting project template can be accessed with the API, it won't be visible in the Asana
    /// UI until Project Templates 2.0 is launched in the app. See more in this forum post.
    /// </remarks>
    public Task<ProjectsSaveAsTemplateResponse> ProjectSaveAsTemplate(ProjectSaveAsTemplateOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/projects/{project_gid}/saveAsTemplate"),
            [new TemplateParam("project_gid", request.ProjectGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ProjectsSaveAsTemplateResponse>(),
            ProjectSaveAsTemplateError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove a custom field from a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectsRemoveCustomFieldSettingResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemoveCustomFieldSettingForProjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes a custom field setting from a project.
    /// </remarks>
    public Task<ProjectsRemoveCustomFieldSettingResponse> RemoveCustomFieldSettingForProject(RemoveCustomFieldSettingForProjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/projects/{project_gid}/removeCustomFieldSetting"),
            [new TemplateParam("project_gid", request.ProjectGid)],
            [new Param("opt_pretty", request.OptPretty)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ProjectsRemoveCustomFieldSettingResponse>(),
            RemoveCustomFieldSettingForProjectError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove followers from a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectsRemoveFollowersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemoveFollowersForProjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes the specified list of users from following the project, this will not affect project membership status.
    /// Returns the updated project record.
    /// </remarks>
    public Task<ProjectsRemoveFollowersResponse> RemoveFollowersForProject(RemoveFollowersForProjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/projects/{project_gid}/removeFollowers"),
            [new TemplateParam("project_gid", request.ProjectGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ProjectsRemoveFollowersResponse>(),
            RemoveFollowersForProjectError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove users from a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectsRemoveMembersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemoveMembersForProjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes the specified list of users from members of the project.
    /// Returns the updated project record.
    /// </remarks>
    public Task<ProjectsRemoveMembersResponse> RemoveMembersForProject(RemoveMembersForProjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/projects/{project_gid}/removeMembers"),
            [new TemplateParam("project_gid", request.ProjectGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ProjectsRemoveMembersResponse>(),
            RemoveMembersForProjectError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateProjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// A specific, existing project can be updated by making a PUT request on
    /// the URL for that project. Only the fields provided in the <c>data</c> block
    /// will be updated; any unspecified fields will remain unchanged.
    /// <para>
    /// When using this method, it is best to specify only those fields you wish
    /// to change, or else you may overwrite changes made by another user since
    /// you last retrieved the task.
    /// </para>
    /// <para>
    /// Returns the complete updated project record.
    /// </para>
    /// </remarks>
    public Task<ProjectsResponse1> UpdateProject(UpdateProjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/projects/{project_gid}"),
            [new TemplateParam("project_gid", request.ProjectGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ProjectsResponse1>(),
            UpdateProjectError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
