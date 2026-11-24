using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Shortcut.Core;
using Shortcut.Core.Exceptions;
using Shortcut.Core.Models;
using Shortcut.Core.Request;
using Shortcut.Core.Response;
using Shortcut.Errors;
using Shortcut.Models;
using Shortcut.Requests.Files;

namespace Shortcut.Api;

public sealed class Files
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Files(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete File
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteFileError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete File deletes a previously uploaded file.
    /// </remarks>
    public Task DeleteFile(DeleteFileRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/files/{file-public-id}"),
            [new TemplateParam("file-public-id", request.FilePublicId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteFileError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get File
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UploadedFile"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetFileError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get File returns information about the selected UploadedFile.
    /// </remarks>
    public Task<UploadedFile> GetFile(GetFileRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/files/{file-public-id}"),
            [new TemplateParam("file-public-id", request.FilePublicId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<UploadedFile>(),
            GetFileError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Files
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="UploadedFile"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListFilesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List Files returns a list of all UploadedFiles in the workspace.
    /// </remarks>
    public Task<IReadOnlyList<UploadedFile>> ListFiles(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/files"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<UploadedFile>>(),
            ListFilesError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update File
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UploadedFile"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateFileError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update File updates the properties of an UploadedFile (but not its content).
    /// </remarks>
    public Task<UploadedFile> UpdateFile(UpdateFileRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/files/{file-public-id}"),
            [new TemplateParam("file-public-id", request.FilePublicId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<UploadedFile>(),
            UpdateFileError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Upload Files
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="UploadedFile"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadFilesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upload Files uploads one or many files and optionally associates them with a story.
    /// Use the multipart/form-data content-type to upload.
    /// Each <c>file</c> key should contain a separate file.
    /// Each UploadedFile's name comes from the Content-Disposition header "filename" directive for that field.
    /// </remarks>
    public Task<IReadOnlyList<UploadedFile>> UploadFiles(UploadFilesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/files"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormRequest.Create(
                new MultipartParam("file0", request.File0),
                new MultipartParam("story_id", request.StoryId),
                new MultipartParam("file1", request.File1),
                new MultipartParam("file2", request.File2),
                new MultipartParam("file3", request.File3)),
            JsonResponse.Create<IReadOnlyList<UploadedFile>>(),
            UploadFilesError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);
}
