using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Asana.Core;
using Asana.Core.Authentication;
using Asana.Core.Exceptions;
using Asana.Core.Extensions;
using Asana.Core.Models;
using Asana.Core.Request;
using Asana.Core.Response;
using Asana.Errors;
using Asana.Models;
using Asana.Requests.Tasks;

namespace Asana.Api;

/// <summary>
/// The task is the basic object around which many operations in Asana are centered. In the Asana application, multiple tasks populate the middle pane according to some view parameters, and the set of selected tasks determines the more detailed information presented in the details pane.
/// <para>
/// Sections are unique in that they will be included in the <c>memberships</c> field of task objects returned in the API when the task is within a section. They can also be used to manipulate the ordering of a task within a project.
/// </para>
/// <para>
/// Queries return a compact representation of each task object. To retrieve *all* fields or *specific set* of the fields, use field selectors to manipulate what data is included in a response.
/// </para>
/// </summary>
public sealed class Tasks
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Tasks(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Set dependencies for a task
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TasksAddDependenciesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddDependenciesForTaskError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Marks a set of tasks as dependencies of this task, if they are not already dependencies. *A task can have at most 30 dependents and dependencies combined*.
    /// </remarks>
    public Task<TasksAddDependenciesResponse> AddDependenciesForTask(AddDependenciesForTaskRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tasks/{task_gid}/addDependencies"),
            [new TemplateParam("task_gid", request.TaskGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TasksAddDependenciesResponse>(),
            AddDependenciesForTaskError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set dependents for a task
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TasksAddDependentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddDependentsForTaskError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Marks a set of tasks as dependents of this task, if they are not already dependents. *A task can have at most 30 dependents and dependencies combined*.
    /// </remarks>
    public Task<TasksAddDependentsResponse> AddDependentsForTask(AddDependentsForTaskRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tasks/{task_gid}/addDependents"),
            [new TemplateParam("task_gid", request.TaskGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TasksAddDependentsResponse>(),
            AddDependentsForTaskError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Add followers to a task
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TasksAddFollowersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddFollowersForTaskError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds followers to a task. Returns an empty data block.
    /// Each task can be associated with zero or more followers in the system.
    /// Requests to add/remove followers, if successful, will return the complete updated task record, described above.
    /// </remarks>
    public Task<TasksAddFollowersResponse> AddFollowersForTask(AddFollowersForTaskRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tasks/{task_gid}/addFollowers"),
            [new TemplateParam("task_gid", request.TaskGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TasksAddFollowersResponse>(),
            AddFollowersForTaskError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Add a project to a task
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TasksAddProjectResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddProjectForTaskError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds the task to the specified project, in the optional location
    /// specified. If no location arguments are given, the task will be added to
    /// the end of the project.
    /// <para>
    /// <c>addProject</c> can also be used to reorder a task within a project or
    /// section that already contains it.
    /// </para>
    /// <para>
    /// At most one of <c>insert_before</c>, <c>insert_after</c>, or <c>section</c> should be
    /// specified. Inserting into a section in an non-order-dependent way can be
    /// done by specifying section, otherwise, to insert within a section in a
    /// particular place, specify <c>insert_before</c> or <c>insert_after</c> and a task
    /// within the section to anchor the position of this task.
    /// </para>
    /// <para>
    /// Returns an empty data block.
    /// </para>
    /// </remarks>
    public Task<TasksAddProjectResponse> AddProjectForTask(AddProjectForTaskRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tasks/{task_gid}/addProject"),
            [new TemplateParam("task_gid", request.TaskGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TasksAddProjectResponse>(),
            AddProjectForTaskError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Add a tag to a task
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TasksAddTagResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddTagForTaskError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds a tag to a task. Returns an empty data block.
    /// </remarks>
    public Task<TasksAddTagResponse> AddTagForTask(AddTagForTaskRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tasks/{task_gid}/addTag"),
            [new TemplateParam("task_gid", request.TaskGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TasksAddTagResponse>(),
            AddTagForTaskError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a subtask
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TasksSubtasksResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSubtaskForTaskError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new subtask and adds it to the parent task. Returns the full record for the newly created subtask.
    /// </remarks>
    public Task<TasksSubtasksResponse1> CreateSubtaskForTask(CreateSubtaskForTaskRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tasks/{task_gid}/subtasks"),
            [new TemplateParam("task_gid", request.TaskGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TasksSubtasksResponse1>(),
            CreateSubtaskForTaskError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a task
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TasksResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateTaskError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creating a new task is as easy as POSTing to the <c>/tasks</c> endpoint with a
    /// data block containing the fields you’d like to set on the task. Any
    /// unspecified fields will take on default values.
    /// <para>
    /// Every task is required to be created in a specific workspace, and this
    /// workspace cannot be changed once set. The workspace need not be set
    /// explicitly if you specify <c>projects</c> or a <c>parent</c> task instead.
    /// </para>
    /// </remarks>
    public Task<TasksResponse1> CreateTask(CreateTaskRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tasks"),
            [],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TasksResponse1>(),
            CreateTaskError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a task
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TasksResponse4"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteTaskError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// A specific, existing task can be deleted by making a DELETE request on
    /// the URL for that task. Deleted tasks go into the “trash” of the user
    /// making the delete request. Tasks can be recovered from the trash within a
    /// period of 30 days; afterward they are completely removed from the system.
    /// <para>
    /// Returns an empty data record.
    /// </para>
    /// </remarks>
    public Task<TasksResponse4> DeleteTask(DeleteTaskRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tasks/{task_gid}"),
            [new TemplateParam("task_gid", request.TaskGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<TasksResponse4>(),
            DeleteTaskError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Duplicate a task
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TasksDuplicateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DuplicateTaskError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates and returns a job that will asynchronously handle the duplication.
    /// </remarks>
    public Task<TasksDuplicateResponse> DuplicateTask(DuplicateTaskRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tasks/{task_gid}/duplicate"),
            [new TemplateParam("task_gid", request.TaskGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TasksDuplicateResponse>(),
            DuplicateTaskError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get dependencies from a task
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TasksDependenciesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetDependenciesForTaskError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the compact representations of all of the dependencies of a task.
    /// </remarks>
    public Task<TasksDependenciesResponse> GetDependenciesForTask(GetDependenciesForTaskRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tasks/{task_gid}/dependencies"),
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
            JsonResponse.Create<TasksDependenciesResponse>(),
            GetDependenciesForTaskError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get dependents from a task
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TasksDependentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetDependentsForTaskError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the compact representations of all of the dependents of a task.
    /// </remarks>
    public Task<TasksDependentsResponse> GetDependentsForTask(GetDependentsForTaskRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tasks/{task_gid}/dependents"),
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
            JsonResponse.Create<TasksDependentsResponse>(),
            GetDependentsForTaskError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get subtasks from a task
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TasksSubtasksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSubtasksForTaskError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a compact representation of all of the subtasks of a task.
    /// </remarks>
    public Task<TasksSubtasksResponse> GetSubtasksForTask(GetSubtasksForTaskRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tasks/{task_gid}/subtasks"),
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
            JsonResponse.Create<TasksSubtasksResponse>(),
            GetSubtasksForTaskError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a task
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TasksResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTaskError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the complete task record for a single task.
    /// </remarks>
    public Task<TasksResponse1> GetTask(GetTaskRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tasks/{task_gid}"),
            [new TemplateParam("task_gid", request.TaskGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TasksResponse1>(),
            GetTaskError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get multiple tasks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TasksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTasksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the compact task records for some filtered set of tasks. Use one or more of the parameters provided to filter the tasks returned. You must specify a <c>project</c> or <c>tag</c> if you do not specify <c>assignee</c> and <c>workspace</c>.
    /// <para>
    /// For more complex task retrieval, use workspaces/{workspace_gid}/tasks/search.
    /// </para>
    /// </remarks>
    public Task<TasksResponse> GetTasks(GetTasksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tasks"),
            [],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("assignee", request.Assignee),
                new Param("project", request.Project),
                new Param("section", request.Section),
                new Param("workspace", request.Workspace),
                new Param("completed_since", request.CompletedSince?.ToIso8601()),
                new Param("modified_since", request.ModifiedSince?.ToIso8601()),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TasksResponse>(),
            GetTasksError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get tasks from a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectsTasksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTasksForProjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the compact task records for all tasks within the given project, ordered by their priority within the project. Tasks can exist in more than one project at a time.
    /// </remarks>
    public Task<ProjectsTasksResponse> GetTasksForProject(GetTasksForProjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/projects/{project_gid}/tasks"),
            [new TemplateParam("project_gid", request.ProjectGid)],
            [
                new Param("completed_since", request.CompletedSince),
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ProjectsTasksResponse>(),
            GetTasksForProjectError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get tasks from a section
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SectionsTasksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTasksForSectionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// *Board view only*: Returns the compact section records for all tasks within the given section.
    /// </remarks>
    public Task<SectionsTasksResponse> GetTasksForSection(GetTasksForSectionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sections/{section_gid}/tasks"),
            [new TemplateParam("section_gid", request.SectionGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SectionsTasksResponse>(),
            GetTasksForSectionError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get tasks from a tag
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TagsTasksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTasksForTagError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the compact task records for all tasks with the given tag. Tasks can have more than one tag at a time.
    /// </remarks>
    public Task<TagsTasksResponse> GetTasksForTag(GetTasksForTagRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tags/{tag_gid}/tasks"),
            [new TemplateParam("tag_gid", request.TagGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TagsTasksResponse>(),
            GetTasksForTagError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get tasks from a user task list
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UserTaskListsTasksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTasksForUserTaskListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the compact list of tasks in a user’s My Tasks list.
    /// *Note: Access control is enforced for this endpoint as with all Asana API endpoints, meaning a user’s private tasks will be filtered out if the API-authenticated user does not have access to them.*
    /// *Note: Both complete and incomplete tasks are returned by default unless they are filtered out (for example, setting <c>completed_since=now</c> will return only incomplete tasks, which is the default view for “My Tasks” in Asana.)*
    /// </remarks>
    public Task<UserTaskListsTasksResponse> GetTasksForUserTaskList(GetTasksForUserTaskListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/user_task_lists/{user_task_list_gid}/tasks"),
            [new TemplateParam("user_task_list_gid", request.UserTaskListGid)],
            [
                new Param("completed_since", request.CompletedSince),
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<UserTaskListsTasksResponse>(),
            GetTasksForUserTaskListError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Unlink dependencies from a task
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TasksRemoveDependenciesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemoveDependenciesForTaskError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Unlinks a set of dependencies from this task.
    /// </remarks>
    public Task<TasksRemoveDependenciesResponse> RemoveDependenciesForTask(RemoveDependenciesForTaskRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tasks/{task_gid}/removeDependencies"),
            [new TemplateParam("task_gid", request.TaskGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TasksRemoveDependenciesResponse>(),
            RemoveDependenciesForTaskError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Unlink dependents from a task
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TasksRemoveDependentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemoveDependentsForTaskError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Unlinks a set of dependents from this task.
    /// </remarks>
    public Task<TasksRemoveDependentsResponse> RemoveDependentsForTask(RemoveDependentsForTaskRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tasks/{task_gid}/removeDependents"),
            [new TemplateParam("task_gid", request.TaskGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TasksRemoveDependentsResponse>(),
            RemoveDependentsForTaskError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove followers from a task
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TasksRemoveFollowersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemoveFollowerForTaskError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes each of the specified followers from the task if they are following. Returns the complete, updated record for the affected task.
    /// </remarks>
    public Task<TasksRemoveFollowersResponse> RemoveFollowerForTask(RemoveFollowerForTaskRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tasks/{task_gid}/removeFollowers"),
            [new TemplateParam("task_gid", request.TaskGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TasksRemoveFollowersResponse>(),
            RemoveFollowerForTaskError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove a project from a task
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TasksRemoveProjectResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemoveProjectForTaskError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes the task from the specified project. The task will still exist in
    /// the system, but it will not be in the project anymore.
    /// <para>
    /// Returns an empty data block.
    /// </para>
    /// </remarks>
    public Task<TasksRemoveProjectResponse> RemoveProjectForTask(RemoveProjectForTaskRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tasks/{task_gid}/removeProject"),
            [new TemplateParam("task_gid", request.TaskGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TasksRemoveProjectResponse>(),
            RemoveProjectForTaskError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove a tag from a task
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TasksRemoveTagResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemoveTagForTaskError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes a tag from a task. Returns an empty data block.
    /// </remarks>
    public Task<TasksRemoveTagResponse> RemoveTagForTask(RemoveTagForTaskRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tasks/{task_gid}/removeTag"),
            [new TemplateParam("task_gid", request.TaskGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TasksRemoveTagResponse>(),
            RemoveTagForTaskError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search tasks in a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WorkspacesTasksSearchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchTasksForWorkspaceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// To mirror the functionality of the Asana web app's advanced search feature, the Asana API has a task search endpoint that allows you to build complex filters to find and retrieve the exact data you need.
    /// #### Premium access
    /// Like the Asana web product's advance search feature, this search endpoint will only be available to premium Asana users. A user is premium if any of the following is true:
    /// <list type="bullet">
    ///   <item><description>The workspace in which the search is being performed is a premium workspace - The user is a member of a premium team inside the workspace</description></item>
    /// </list>
    /// <para>
    /// Even if a user is only a member of a premium team inside a non-premium workspace, search will allow them to find data anywhere in the workspace, not just inside the premium team. Making a search request using credentials of a non-premium user will result in a <c>402 Payment Required</c> error.
    /// #### Pagination
    /// Search results are not stable; repeating the same query multiple times may return the data in a different order, even if the data do not change. Because of this, the traditional pagination available elsewhere in the Asana API is not available here. However, you can paginate manually by sorting the search results by their creation time and then modifying each subsequent query to exclude data you have already seen. Page sizes are limited to a maximum of 100 items, and can be specified by the <c>limit</c> query parameter.
    /// #### Eventual consistency
    /// Changes in Asana (regardless of whether they’re made though the web product or the API) are forwarded to our search infrastructure to be indexed. This process can take between 10 and 60 seconds to complete under normal operation, and longer during some production incidents. Making a change to a task that would alter its presence in a particular search query will not be reflected immediately. This is also true of the advanced search feature in the web product.
    /// #### Rate limits
    /// You may receive a <c>429 Too Many Requests</c> response if you hit any of our rate limits.
    /// #### Custom field parameters
    /// | Parameter name | Custom field type | Accepted type |
    /// |---|---|---|
    /// | custom_fields.{gid}.is_set | All | Boolean |
    /// | custom_fields.{gid}.value | Text | String |
    /// | custom_fields.{gid}.value | Number | Number |
    /// | custom_fields.{gid}.value | Enum | Enum option ID |
    /// | custom_fields.{gid}.starts_with | Text only | String |
    /// | custom_fields.{gid}.ends_with | Text only | String |
    /// | custom_fields.{gid}.contains | Text only | String |
    /// | custom_fields.{gid}.less_than | Number only | Number |
    /// | custom_fields.{gid}.greater_than | Number only | Number |
    /// </para>
    /// <para>
    /// For example, if the gid of the custom field is 12345, these query parameter to find tasks where it is set would be <c>custom_fields.12345.is_set=true</c>. To match an exact value for an enum custom field, use the gid of the desired enum option and not the name of the enum option: <c>custom_fields.12345.value=67890</c>.
    /// </para>
    /// <para>
    /// <b>Not Supported</b>: searching for multiple exact matches of a custom field, searching for multi-enum custom field
    /// </para>
    /// <para>
    /// *Note: If you specify <c>projects.any</c> and <c>sections.any</c>, you will receive tasks for the project <b>and</b> tasks for the section. If you're looking for only tasks in a section, omit the <c>projects.any</c> from the request.*
    /// </para>
    /// </remarks>
    public Task<WorkspacesTasksSearchResponse> SearchTasksForWorkspace(SearchTasksForWorkspaceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace_gid}/tasks/search"),
            [new TemplateParam("workspace_gid", request.WorkspaceGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("text", request.Text),
                new Param("resource_subtype", request.ResourceSubtype),
                new Param("assignee.any", request.AssigneeAny),
                new Param("assignee.not", request.AssigneeNot),
                new Param("portfolios.any", request.PortfoliosAny),
                new Param("projects.any", request.ProjectsAny),
                new Param("projects.not", request.ProjectsNot),
                new Param("projects.all", request.ProjectsAll),
                new Param("sections.any", request.SectionsAny),
                new Param("sections.not", request.SectionsNot),
                new Param("sections.all", request.SectionsAll),
                new Param("tags.any", request.TagsAny),
                new Param("tags.not", request.TagsNot),
                new Param("tags.all", request.TagsAll),
                new Param("teams.any", request.TeamsAny),
                new Param("followers.not", request.FollowersNot),
                new Param("created_by.any", request.CreatedByAny),
                new Param("created_by.not", request.CreatedByNot),
                new Param("assigned_by.any", request.AssignedByAny),
                new Param("assigned_by.not", request.AssignedByNot),
                new Param("liked_by.not", request.LikedByNot),
                new Param("commented_on_by.not", request.CommentedOnByNot),
                new Param("due_on.before", request.DueOnBefore?.ToDate()),
                new Param("due_on.after", request.DueOnAfter?.ToDate()),
                new Param("due_on", request.DueOn?.ToDate()),
                new Param("due_at.before", request.DueAtBefore?.ToIso8601()),
                new Param("due_at.after", request.DueAtAfter?.ToIso8601()),
                new Param("start_on.before", request.StartOnBefore?.ToDate()),
                new Param("start_on.after", request.StartOnAfter?.ToDate()),
                new Param("start_on", request.StartOn?.ToDate()),
                new Param("created_on.before", request.CreatedOnBefore?.ToDate()),
                new Param("created_on.after", request.CreatedOnAfter?.ToDate()),
                new Param("created_on", request.CreatedOn?.ToDate()),
                new Param("created_at.before", request.CreatedAtBefore?.ToIso8601()),
                new Param("created_at.after", request.CreatedAtAfter?.ToIso8601()),
                new Param("completed_on.before", request.CompletedOnBefore?.ToDate()),
                new Param("completed_on.after", request.CompletedOnAfter?.ToDate()),
                new Param("completed_on", request.CompletedOn?.ToDate()),
                new Param("completed_at.before", request.CompletedAtBefore?.ToIso8601()),
                new Param("completed_at.after", request.CompletedAtAfter?.ToIso8601()),
                new Param("modified_on.before", request.ModifiedOnBefore?.ToDate()),
                new Param("modified_on.after", request.ModifiedOnAfter?.ToDate()),
                new Param("modified_on", request.ModifiedOn?.ToDate()),
                new Param("modified_at.before", request.ModifiedAtBefore?.ToIso8601()),
                new Param("modified_at.after", request.ModifiedAtAfter?.ToIso8601()),
                new Param("is_blocking", request.IsBlocking),
                new Param("is_blocked", request.IsBlocked),
                new Param("has_attachment", request.HasAttachment),
                new Param("completed", request.Completed),
                new Param("is_subtask", request.IsSubtask),
                new Param("sort_by", request.SortBy),
                new Param("sort_ascending", request.SortAscending),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WorkspacesTasksSearchResponse>(),
            SearchTasksForWorkspaceError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set the parent of a task
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TasksSetParentResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SetParentForTaskError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// parent, or no parent task at all. Returns an empty data block. When using <c>insert_before</c> and <c>insert_after</c>, at most one of those two options can be specified, and they must already be subtasks of the parent.
    /// </remarks>
    public Task<TasksSetParentResponse> SetParentForTask(SetParentForTaskRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tasks/{task_gid}/setParent"),
            [new TemplateParam("task_gid", request.TaskGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TasksSetParentResponse>(),
            SetParentForTaskError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a task
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TasksResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateTaskError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// A specific, existing task can be updated by making a PUT request on the
    /// URL for that task. Only the fields provided in the <c>data</c> block will be
    /// updated; any unspecified fields will remain unchanged.
    /// <para>
    /// When using this method, it is best to specify only those fields you wish
    /// to change, or else you may overwrite changes made by another user since
    /// you last retrieved the task.
    /// </para>
    /// <para>
    /// Returns the complete updated task record.
    /// </para>
    /// </remarks>
    public Task<TasksResponse1> UpdateTask(UpdateTaskRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tasks/{task_gid}"),
            [new TemplateParam("task_gid", request.TaskGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TasksResponse1>(),
            UpdateTaskError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
