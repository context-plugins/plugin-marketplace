using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using BundleSocial.Core;
using BundleSocial.Core.Exceptions;
using BundleSocial.Core.Models;
using BundleSocial.Core.Request;
using BundleSocial.Core.Response;
using BundleSocial.Errors;
using BundleSocial.Models;
using BundleSocial.Requests.UploadApi;

namespace BundleSocial.Api;

public sealed class UploadApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal UploadApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Abort multipart upload
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1UploadMultipartAbortResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadAbortMultipartUploadError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Discard an unfinished multipart upload and its parts. Call this when you give up on an upload — abandoned parts stay in storage and count against your usage.
    /// </remarks>
    public Task<ApiV1UploadMultipartAbortResponse> UploadAbortMultipartUpload(UploadAbortMultipartUploadRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/upload/multipart/abort"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1UploadMultipartAbortResponse>(),
            UploadAbortMultipartUploadError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Complete multipart upload
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1UploadMultipartCompleteResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadCompleteMultipartUploadError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Assemble the uploaded parts into the final object and add it to your media library. Send every part with the ETag returned by its PUT. A 500 is always retryable — whatever we have (your parts, or the assembled object) is kept, so retry this call rather than re-uploading. A 400 is final: either the part list was wrong, or the file itself was rejected (empty, wrong type, too large, no readable preview) and its bytes have been deleted. A 403 means quota or permissions and is raised before assembly, so your parts are still open — call abort yourself. Calling this again after it already succeeded returns the same upload instead of charging you twice.
    /// </remarks>
    public Task<ApiV1UploadMultipartCompleteResponse> UploadCompleteMultipartUpload(UploadCompleteMultipartUploadRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/upload/multipart/complete"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1UploadMultipartCompleteResponse>(),
            UploadCompleteMultipartUploadError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create upload
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1UploadResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upload a file. This is the only endpoint that uses multipart/form-data.
    /// </remarks>
    public Task<ApiV1UploadResponse1> UploadCreate(UploadCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/upload/"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormRequest.Create(new MultipartParam("teamId", request.TeamId), new MultipartParam("file", request.File)),
            JsonResponse.Create<ApiV1UploadResponse1>(),
            UploadCreateError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create upload from URL
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1UploadFromUrlResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadCreateFromUrlError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Add an image or video to your media library by giving bundle.social a public URL to fetch, instead of uploading the bytes yourself. Useful when your media already lives in a CDN or S3 bucket.
    /// </remarks>
    public Task<ApiV1UploadFromUrlResponse> UploadCreateFromUrl(UploadCreateFromUrlRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/upload/from-url"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1UploadFromUrlResponse>(),
            UploadCreateFromUrlError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete upload
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1UploadResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently delete a single media file from your library. Files still attached to scheduled posts should be replaced first.
    /// </remarks>
    public Task<ApiV1UploadResponse1> UploadDelete(UploadDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/upload/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1UploadResponse1>(),
            UploadDeleteError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete many uploads
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="ApiV1UploadResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadDeleteManyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently delete several media files in one request. Use it to clean up your library in bulk instead of calling delete per file.
    /// </remarks>
    public Task<IReadOnlyList<ApiV1UploadResponse1>> UploadDeleteMany(UploadDeleteManyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/upload/"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyList<ApiV1UploadResponse1>>(),
            UploadDeleteManyError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Finalize large upload
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1UploadFinalizeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadFinalizeLargeUploadError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Finalize large upload.
    /// </remarks>
    public Task<ApiV1UploadFinalizeResponse> UploadFinalizeLargeUpload(UploadFinalizeLargeUploadRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/upload/finalize"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1UploadFinalizeResponse>(),
            UploadFinalizeLargeUploadError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get upload
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1UploadResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a single media file with its processing status, dimensions, duration, and the posts it is attached to.
    /// </remarks>
    public Task<ApiV1UploadResponse> UploadGet(UploadGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/upload/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1UploadResponse>(),
            UploadGetError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get upload list
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="ApiV1UploadResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadGetListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the media files in your team's library, newest first. Each file carries <c>posts</c>, the links to the posts using it — pass <c>includePosts=false</c> to leave them out. Page with <c>limit</c> and <c>offset</c>. To check whether specific files already exist, filter by <c>ids</c> or <c>urls</c> instead of listing everything.
    /// </remarks>
    public Task<IReadOnlyList<ApiV1UploadResponse>> UploadGetList(UploadGetListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/upload/"),
            [],
            [
                new Param("teamId", request.TeamId),
                new Param("type", request.Type),
                new Param("types", request.Types),
                new Param("status", request.Status),
                new Param("ids", request.Ids),
                new Param("urls", request.Urls),
                new Param("limit", request.Limit),
                new Param("includePosts", request.IncludePosts),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<ApiV1UploadResponse>>(),
            UploadGetListError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Initialize large upload
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1UploadInitResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadInitLargeUploadError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Initialize large upload, you need to initialize a large upload if your file is larger than 90 MB.
    /// </remarks>
    public Task<ApiV1UploadInitResponse> UploadInitLargeUpload(UploadInitLargeUploadRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/upload/init"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1UploadInitResponse>(),
            UploadInitLargeUploadError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Initialize multipart upload
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1UploadMultipartInitResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadInitMultipartUploadError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Start a multipart upload. Required above the 5 GiB single-request storage limit that /upload/init is bound by, and allowed for any smaller file too. Returns an uploadId plus one presigned URL per part; PUT each part, keep the ETag response header, then call complete with the full part list. Parts are 64 MiB each except the last, up to 10000 parts.
    /// </remarks>
    public Task<ApiV1UploadMultipartInitResponse> UploadInitMultipartUpload(UploadInitMultipartUploadRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/upload/multipart/init"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1UploadMultipartInitResponse>(),
            UploadInitMultipartUploadError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Re-sign multipart upload parts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1UploadMultipartSignResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadSignMultipartPartsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Issue fresh presigned URLs for parts whose original URLs expired mid-upload. Parts already uploaded keep their ETags — only re-upload the ones that failed.
    /// </remarks>
    public Task<ApiV1UploadMultipartSignResponse> UploadSignMultipartParts(UploadSignMultipartPartsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/upload/multipart/sign"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1UploadMultipartSignResponse>(),
            UploadSignMultipartPartsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
