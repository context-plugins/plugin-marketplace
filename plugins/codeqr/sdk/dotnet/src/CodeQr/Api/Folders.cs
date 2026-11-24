using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CodeQr.Core;
using CodeQr.Core.Exceptions;
using CodeQr.Core.Models;
using CodeQr.Core.Request;
using CodeQr.Core.Response;
using CodeQr.Errors;
using CodeQr.Models;
using CodeQr.Requests.Folders;

namespace CodeQr.Api;

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
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FolderSchema"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateFolderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a folder for the authenticated workspace.
    /// </remarks>
    public Task<FolderSchema> CreateFolder(CreateFolderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/folders"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<FolderSchema>(),
            CreateFolderError.Response,
            _auth.Token,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a folder
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FoldersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteFolderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a folder from the workspace. All existing links will still work, but they will no longer be associated with this folder.
    /// </remarks>
    public Task<FoldersResponse> DeleteFolder(DeleteFolderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/folders/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<FoldersResponse>(),
            DeleteFolderError.Response,
            _auth.Token,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve a list of folders
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="FolderSchema"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListFoldersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of folders for the authenticated workspace.
    /// </remarks>
    public Task<IReadOnlyList<FolderSchema>> ListFolders(ListFoldersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/folders"),
            [],
            [
                new Param("search", request.Search),
                new Param("page", request.Page),
                new Param("pageSize", request.PageSize),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<FolderSchema>>(),
            ListFoldersError.Response,
            _auth.Token,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a folder
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FolderSchema"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateFolderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a folder in the workspace.
    /// </remarks>
    public Task<FolderSchema> UpdateFolder(UpdateFolderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/folders/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<FolderSchema>(),
            UpdateFolderError.Response,
            _auth.Token,
            requestOptions,
            cancellationToken);
}
