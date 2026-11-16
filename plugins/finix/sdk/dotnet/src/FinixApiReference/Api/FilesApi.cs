using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using FinixApiReference.Core;
using FinixApiReference.Core.Exceptions;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;
using FinixApiReference.Core.Request;
using FinixApiReference.Core.Response;
using FinixApiReference.Errors;
using FinixApiReference.Models;
using FinixApiReference.Requests.FilesApi;

namespace FinixApiReference.Api;

/// <summary>
/// Use Finix's File API to upload and manage files for your merchants.
/// <para>
/// <b>Related Guides:</b>
/// - <see href="/guides/platform-payments/onboarding-sellers/seller-onboarding-uploading-files.md">File Uploads</see>
/// - <see href="/guides/platform-payments/onboarding-sellers/seller-onboarding-update-requests.md">Update Requests</see>
/// </para>
/// </summary>
public sealed class FilesApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal FilesApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create an External Link
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ExternalLink"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateExternalLinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create an <c>External Link</c> to share with users so they can upload files directly from their browser. For more info, see <see href="/guides/platform-payments/onboarding-sellers/seller-onboarding-uploading-files/">Uploading files to Finix</see>.
    /// </remarks>
    public Task<ExternalLink> CreateExternalLink(CreateExternalLinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/files/{file_id}/external_links"),
            [new TemplateParam("file_id", request.FileId)],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ExternalLink>(),
            CreateExternalLinkError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a File
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="File"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateFileError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Before uploading a file, you must create a <c>File</c> resource.
    /// <para>
    /// Once created, you can <see href="/guides/platform-payments/onboarding-sellers/seller-onboarding-uploading-files/">upload</see> your file to the new <c>File</c> resource.
    /// </para>
    /// </remarks>
    public Task<File> CreateFile(CreateFileRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/files"),
            [],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<File>(),
            CreateFileError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Download a File
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DownloadFileFileThatWasUploadedToAFileResourceError"/> when the server returns an error response.</exception>
    public Task<BinaryContent> DownloadFileFileThatWasUploadedToAFileResource(DownloadFileFileThatWasUploadedToAFileResourceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/files/{file_id}/download"),
            [new TemplateParam("file_id", request.FileId)],
            [new Param("stream", request.Stream)],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            DownloadFileFileThatWasUploadedToAFileResourceError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch an External Link
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ExternalLink"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetExternalLinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetch a previously created <c>External Link</c> resource.
    /// </remarks>
    public Task<ExternalLink> GetExternalLink(GetExternalLinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/files/{file_id}/external_links/{external_link_id}"),
            [
                new TemplateParam("file_id", request.FileId),
                new TemplateParam("external_link_id", request.ExternalLinkId),
            ],
            [],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ExternalLink>(),
            GetExternalLinkError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch a File
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="File"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetFileError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the details of an existing <c>File</c>.
    /// </remarks>
    public Task<File> GetFile(GetFileRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/files/{file_id}"),
            [new TemplateParam("file_id", request.FileId)],
            [],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<File>(),
            GetFileError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List External Links
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListExternalLinks"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListExternalLinksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the previously created <c>External Link</c> resources for a <c>File</c>.
    /// </remarks>
    public Task<ListExternalLinks> ListExternalLinks(ListExternalLinksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/files/{file_id}/external_links"),
            [new TemplateParam("file_id", request.FileId)],
            [
                new Param("after_cursor", request.AfterCursor),
                new Param("before_cursor", request.BeforeCursor),
                new Param("created_at.gte", request.CreatedAtGte?.ToIso8601()),
                new Param("created_at.lte", request.CreatedAtLte?.ToIso8601()),
                new Param("id", request.Id),
                new Param("limit", request.Limit),
                new Param("updated_at.gte", request.UpdatedAtGte?.ToIso8601()),
                new Param("updated_at.lte", request.UpdatedAtLte?.ToIso8601()),
            ],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListExternalLinks>(),
            ListExternalLinksError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Files
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListFiles"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListFilesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of <c>File</c> resources.
    /// </remarks>
    public Task<ListFiles> ListFiles(ListFilesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/files"),
            [],
            [
                new Param("after_cursor", request.AfterCursor),
                new Param("before_cursor", request.BeforeCursor),
                new Param("created_at.gte", request.CreatedAtGte?.ToIso8601()),
                new Param("created_at.lte", request.CreatedAtLte?.ToIso8601()),
                new Param("limit", request.Limit),
                new Param("tags.key", request.TagsKey),
                new Param("tags.value", request.TagsValue),
                new Param("updated_at.gte", request.UpdatedAtGte?.ToIso8601()),
                new Param("updated_at.lte", request.UpdatedAtLte?.ToIso8601()),
            ],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListFiles>(),
            ListFilesError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Upload a File
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="File"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadFileError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upload files directly with a <c>multipart/form-data</c> request.
    /// </remarks>
    public Task<File> UploadFile(UploadFileRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/files/{file_id}/upload"),
            [new TemplateParam("file_id", request.FileId)],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            FormRequest.Create(new MultipartParam("file", request.File)),
            JsonResponse.Create<File>(),
            UploadFileError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
