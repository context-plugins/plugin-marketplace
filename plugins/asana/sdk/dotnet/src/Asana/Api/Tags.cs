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
using Asana.Requests.Tags;

namespace Asana.Api;

/// <summary>
/// A tag is a label that can be attached to any task in Asana. It exists in a single workspace or organization.
/// <para>
/// Tags have some metadata associated with them, but it is possible that we will simplify them in the future so it is not encouraged to rely too heavily on it. Unlike projects, tags do not provide any ordering on the tasks they are associated with.
/// </para>
/// </summary>
public sealed class Tags
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Tags(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a tag
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TagsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateTagError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new tag in a workspace or organization.
    /// <para>
    /// Every tag is required to be created in a specific workspace or
    /// organization, and this cannot be changed once set. Note that you can use
    /// the workspace parameter regardless of whether or not it is an
    /// organization.
    /// </para>
    /// <para>
    /// Returns the full record of the newly created tag.
    /// </para>
    /// </remarks>
    public Task<TagsResponse1> CreateTag(CreateTagRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tags"),
            [],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TagsResponse1>(),
            CreateTagError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a tag in a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WorkspacesTagsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateTagForWorkspaceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new tag in a workspace or organization.
    /// <para>
    /// Every tag is required to be created in a specific workspace or
    /// organization, and this cannot be changed once set. Note that you can use
    /// the workspace parameter regardless of whether or not it is an
    /// organization.
    /// </para>
    /// <para>
    /// Returns the full record of the newly created tag.
    /// </para>
    /// </remarks>
    public Task<WorkspacesTagsResponse1> CreateTagForWorkspace(CreateTagForWorkspaceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace_gid}/tags"),
            [new TemplateParam("workspace_gid", request.WorkspaceGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<WorkspacesTagsResponse1>(),
            CreateTagForWorkspaceError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a tag
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TagsResponse4"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteTagError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// A specific, existing tag can be deleted by making a DELETE request on
    /// the URL for that tag.
    /// <para>
    /// Returns an empty data record.
    /// </para>
    /// </remarks>
    public Task<TagsResponse4> DeleteTag(DeleteTagRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tags/{tag_gid}"),
            [new TemplateParam("tag_gid", request.TagGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<TagsResponse4>(),
            DeleteTagError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a tag
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TagsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTagError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the complete tag record for a single tag.
    /// </remarks>
    public Task<TagsResponse1> GetTag(GetTagRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tags/{tag_gid}"),
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
            JsonResponse.Create<TagsResponse1>(),
            GetTagError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get multiple tags
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TagsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTagsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the compact tag records for some filtered set of tags. Use one or more of the parameters provided to filter the tags returned.
    /// </remarks>
    public Task<TagsResponse> GetTags(GetTagsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tags"),
            [],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("workspace", request.Workspace),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TagsResponse>(),
            GetTagsError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a task's tags
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TasksTagsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTagsForTaskError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a compact representation of all of the tags the task has.
    /// </remarks>
    public Task<TasksTagsResponse> GetTagsForTask(GetTagsForTaskRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tasks/{task_gid}/tags"),
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
            JsonResponse.Create<TasksTagsResponse>(),
            GetTagsForTaskError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get tags in a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WorkspacesTagsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTagsForWorkspaceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the compact tag records for some filtered set of tags. Use one or more of the parameters provided to filter the tags returned.
    /// </remarks>
    public Task<WorkspacesTagsResponse> GetTagsForWorkspace(GetTagsForWorkspaceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace_gid}/tags"),
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
            JsonResponse.Create<WorkspacesTagsResponse>(),
            GetTagsForWorkspaceError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a tag
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TagsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateTagError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the properties of a tag. Only the fields provided in the <c>data</c>
    /// block will be updated; any unspecified fields will remain unchanged.
    /// <para>
    /// When using this method, it is best to specify only those fields you wish
    /// to change, or else you may overwrite changes made by another user since
    /// you last retrieved the tag.
    /// </para>
    /// <para>
    /// Returns the complete updated tag record.
    /// </para>
    /// </remarks>
    public Task<TagsResponse1> UpdateTag(UpdateTagRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tags/{tag_gid}"),
            [new TemplateParam("tag_gid", request.TagGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            JsonResponse.Create<TagsResponse1>(),
            UpdateTagError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
