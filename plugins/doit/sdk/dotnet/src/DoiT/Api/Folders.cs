using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DoiT.Core;
using DoiT.Core.Authentication;
using DoiT.Core.Exceptions;
using DoiT.Core.Models;
using DoiT.Core.Request;
using DoiT.Core.Response;
using DoiT.Errors;
using DoiT.Models;
using DoiT.Requests.Folders;

namespace DoiT.Api;

/// <summary>
/// Organize Cloud Analytics resources (reports, allocations) into folders.
/// </summary>
public sealed class Folders
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Folders(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a folder
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Folder"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateFolderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new Cloud Analytics folder.
    /// </remarks>
    public Task<Folder> CreateFolder(CreateFolderOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/folders"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Folder>(),
            CreateFolderError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a folder
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteFolderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the specified folder. All nested folders will be deleted. Any reports or allocations contained in the folder are moved to the root.
    /// </remarks>
    public Task DeleteFolder(DeleteFolderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/folders/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteFolderError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a folder
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Folder"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetFolderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the specified Cloud Analytics folder.
    /// </remarks>
    public Task<Folder> GetFolder(GetFolderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/folders/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Folder>(),
            GetFolderError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List folders
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AnalyticsV1FoldersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListFoldersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns Cloud Analytics folders the current customer has access to.
    /// Folders are returned in id-ascending order.
    /// </remarks>
    public Task<AnalyticsV1FoldersResponse> ListFolders(ListFoldersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/folders"),
            [],
            [new Param("maxResults", request.MaxResults), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AnalyticsV1FoldersResponse>(),
            ListFoldersError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a folder
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Folder"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateFolderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the specified folder. All fields are optional.
    /// To reparent the folder, set <c>parentFolderId</c> to the target folder ID
    /// (use "root" for the top level). If a sibling at the target has the same
    /// name, the folder is auto-renamed.
    /// To move reports or allocations into or out of a folder, update the item's
    /// <c>folderId</c> field via the report or allocation PATCH endpoint.
    /// </remarks>
    public Task<Folder> UpdateFolder(UpdateFolderOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/folders/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Folder>(),
            UpdateFolderError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
