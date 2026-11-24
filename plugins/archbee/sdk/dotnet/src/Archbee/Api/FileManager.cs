using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Archbee.Core;
using Archbee.Core.Exceptions;
using Archbee.Core.Models;
using Archbee.Core.Request;
using Archbee.Core.Response;
using Archbee.Errors;
using Archbee.Models;
using Archbee.Requests.FileManager;

namespace Archbee.Api;

/// <summary>
/// Upload, list, move, replace and delete File Manager files
/// </summary>
public sealed class FileManager
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal FileManager(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete a File Manager file
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteAFileManagerFileError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently delete a File Manager file or folder (folders delete their contents recursively).
    /// </remarks>
    public Task DeleteAFileManagerFile(DeleteAFileManagerFileRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/file-manager/file"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            DeleteAFileManagerFileError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List File Manager files
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListFileManagerFilesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List files and folders in the File Manager. Omitting parentId lists every entry across all folders (use searchQuery/pagination to find one); pass a folder id to list that folder's direct children. Filter with itemType (directory, image, or file).
    /// </remarks>
    public Task ListFileManagerFiles(ListFileManagerFilesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/file-manager/files"),
            [],
            [
                new Param("parentId", request.ParentId),
                new Param("itemType", request.ItemType),
                new Param("searchQuery", request.SearchQuery),
                new Param("pageIndex", request.PageIndex),
                new Param("pageSize", request.PageSize),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListFileManagerFilesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Move a File Manager file
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MoveAFileManagerFileError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Move a File Manager file or folder into another folder. Pass a null newParentId to move it to the root.
    /// </remarks>
    public Task MoveAFileManagerFile(MoveAFileManagerFileRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/file-manager/move"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            MoveAFileManagerFileError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Overwrite a File Manager file
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="OverwriteAFileManagerFileError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Replace the contents of an existing File Manager file in place. The file keeps its id and public URL, so existing document embeds update automatically.
    /// </remarks>
    public Task OverwriteAFileManagerFile(OverwriteAFileManagerFileRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/file-manager/replace"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormRequest.Create(new MultipartParam("fileId", request.FileId), new MultipartParam("file", request.File)),
            VoidResponse.Instance,
            OverwriteAFileManagerFileError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Upload single file
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UploadFileResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadSingleFileError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upload a single file to the File Manager
    /// </remarks>
    public Task<UploadFileResponse> UploadSingleFile(UploadSingleFileRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/upload/file"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormRequest.Create(
                new MultipartParam("file", request.File),
                new MultipartParam("isPublic", request.IsPublic)),
            JsonResponse.Create<UploadFileResponse>(),
            UploadSingleFileError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
