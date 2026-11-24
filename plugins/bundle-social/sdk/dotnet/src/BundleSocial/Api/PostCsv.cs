using System;
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
using BundleSocial.Requests.PostCsv;

namespace BundleSocial.Api;

public sealed class PostCsv
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal PostCsv(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create post CSV import
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1PostCsvImportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostCsvCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upload CSV for async bulk post import.
    /// </remarks>
    public Task<ApiV1PostCsvImportResponse> PostCsvCreate(PostCsvCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/post-csv-import/"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormRequest.Create(new MultipartParam("file", request.File)),
            JsonResponse.Create<ApiV1PostCsvImportResponse>(),
            PostCsvCreateError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get post CSV import details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1PostCsvImportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostCsvGetByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a single CSV import with its summary counts and configuration.
    /// </remarks>
    public Task<ApiV1PostCsvImportResponse> PostCsvGetById(PostCsvGetByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/post-csv-import/{importId}"),
            [new TemplateParam("importId", request.ImportId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1PostCsvImportResponse>(),
            PostCsvGetByIdError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get post CSV import history
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1PostCsvImportResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostCsvGetListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List your team's bulk CSV post imports with pagination, so you can see what was uploaded and when.
    /// </remarks>
    public Task<ApiV1PostCsvImportResponse1> PostCsvGetList(PostCsvGetListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/post-csv-import/"),
            [],
            [new Param("offset", request.Offset), new Param("limit", request.Limit)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1PostCsvImportResponse1>(),
            PostCsvGetListError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get post CSV import row results
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1PostCsvImportRowsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostCsvGetRowsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the per-row outcome of a CSV import with pagination, showing which rows created posts and which failed validation and why. Use it to report errors back to the person who uploaded the file.
    /// </remarks>
    public Task<ApiV1PostCsvImportRowsResponse> PostCsvGetRows(PostCsvGetRowsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/post-csv-import/{importId}/rows"),
            [new TemplateParam("importId", request.ImportId)],
            [
                new Param("status", request.Status),
                new Param("offset", request.Offset),
                new Param("limit", request.Limit),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1PostCsvImportRowsResponse>(),
            PostCsvGetRowsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get post CSV import processing status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1PostCsvImportStatusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostCsvGetStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Poll the progress of a bulk CSV post import, including how many rows are processed, succeeded, and failed.
    /// </remarks>
    public Task<ApiV1PostCsvImportStatusResponse> PostCsvGetStatus(PostCsvGetStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/post-csv-import/{importId}/status"),
            [new TemplateParam("importId", request.ImportId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1PostCsvImportStatusResponse>(),
            PostCsvGetStatusError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
