using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using BrowserUse.Core;
using BrowserUse.Core.Exceptions;
using BrowserUse.Core.Models;
using BrowserUse.Core.Request;
using BrowserUse.Core.Response;
using BrowserUse.Errors;
using BrowserUse.Models;
using BrowserUse.Requests.Workspaces;

namespace BrowserUse.Api;

public sealed class Workspaces
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Workspaces(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WorkspaceInfo"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateWorkspaceWorkspacesPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Mint an empty workspace. Lets callers upload input files BEFORE the
    /// first run exists; pass the id as workspaceId on POST /runs.
    /// </remarks>
    public Task<WorkspaceInfo> CreateWorkspaceWorkspacesPost(CreateWorkspaceWorkspacesPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<WorkspaceInfo>(),
            CreateWorkspaceWorkspacesPostError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Workspace File
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete one exact path from a workspace and remove matching upload metadata.
    /// </remarks>
    public Task DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDelete(DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace_id}/files"),
            [new TemplateParam("workspace_id", request.WorkspaceId)],
            [new Param("path", request.Path)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteWorkspaceWorkspacesWorkspaceIdDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archive a workspace. Idempotent for missing, archived, and foreign ids.
    /// </remarks>
    public Task DeleteWorkspaceWorkspacesWorkspaceIdDelete(DeleteWorkspaceWorkspacesWorkspaceIdDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace_id}"),
            [new TemplateParam("workspace_id", request.WorkspaceId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteWorkspaceWorkspacesWorkspaceIdDeleteError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Workspace Size
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WorkspaceSizeInfo"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Return current storage usage and the plan-specific workspace quota.
    /// </remarks>
    public Task<WorkspaceSizeInfo> GetWorkspaceSizeWorkspacesWorkspaceIdSizeGet(GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace_id}/size"),
            [new TemplateParam("workspace_id", request.WorkspaceId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WorkspaceSizeInfo>(),
            GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WorkspaceInfo"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkspaceWorkspacesWorkspaceIdGetError"/> when the server returns an error response.</exception>
    public Task<WorkspaceInfo> GetWorkspaceWorkspacesWorkspaceIdGet(GetWorkspaceWorkspacesWorkspaceIdGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace_id}"),
            [new TemplateParam("workspace_id", request.WorkspaceId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WorkspaceInfo>(),
            GetWorkspaceWorkspacesWorkspaceIdGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Workspace Files
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WorkspaceFileListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List files the agent has produced for this workspace, paginated.
    /// </remarks>
    public Task<WorkspaceFileListResponse> ListWorkspaceFilesWorkspacesWorkspaceIdFilesGet(ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace_id}/files"),
            [new TemplateParam("workspace_id", request.WorkspaceId)],
            [
                new Param("prefix", request.Prefix),
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
                new Param("includeUrls", request.IncludeUrls),
                new Param("contentDisposition", request.ContentDisposition),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WorkspaceFileListResponse>(),
            ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WorkspaceInfo"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateWorkspaceWorkspacesWorkspaceIdPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Rename a workspace. Explicit null clears the name; omission is a no-op.
    /// </remarks>
    public Task<WorkspaceInfo> UpdateWorkspaceWorkspacesWorkspaceIdPatch(UpdateWorkspaceWorkspacesWorkspaceIdPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace_id}"),
            [new TemplateParam("workspace_id", request.WorkspaceId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<WorkspaceInfo>(),
            UpdateWorkspaceWorkspacesWorkspaceIdPatchError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Upload Workspace Files
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WorkspaceFileUploadResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Presigned PUT URLs for input files, placed under ``uploads/`` in the
    /// workspace. The agent pulls them in at the start of every run. URLs are
    /// pinned to the declared Content-Type and exact Content-Length.
    /// </remarks>
    public Task<WorkspaceFileUploadResponse> UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPost(UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace_id}/files/upload"),
            [new TemplateParam("workspace_id", request.WorkspaceId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<WorkspaceFileUploadResponse>(),
            UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);
}
