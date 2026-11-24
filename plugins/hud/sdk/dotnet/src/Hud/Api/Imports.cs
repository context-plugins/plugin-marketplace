using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Hud.Core;
using Hud.Core.Authentication;
using Hud.Core.Exceptions;
using Hud.Core.Models;
using Hud.Core.Request;
using Hud.Core.Response;
using Hud.Errors;
using Hud.Models;
using Hud.Requests.Imports;

namespace Hud.Api;

public sealed class Imports
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Imports(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Cancel Import
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ImportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelImportV2ImportsImportIdCancelPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Request cancellation of a live import; one that has ended is returned unchanged.
    /// </remarks>
    public Task<ImportResponse> CancelImportV2ImportsImportIdCancelPost(CancelImportV2ImportsImportIdCancelPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/imports/{import_id}/cancel"),
            [new TemplateParam("import_id", request.ImportId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ImportResponse>(),
            CancelImportV2ImportsImportIdCancelPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Import Upload
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DataFileUploadResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateImportUploadV2ImportsUploadsPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Reserve a data file for a bundle and return a presigned PUT to upload its bytes.
    /// </remarks>
    public Task<DataFileUploadResponse> CreateImportUploadV2ImportsUploadsPost(CreateImportUploadV2ImportsUploadsPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/imports/uploads"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DataFileUploadResponse>(),
            CreateImportUploadV2ImportsUploadsPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Estimate Import
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ImportEstimateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EstimateImportV2ImportsEstimateGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Estimate an import of a bundle; fails when the bundle cannot be imported.
    /// </remarks>
    public Task<ImportEstimateResponse> EstimateImportV2ImportsEstimateGet(EstimateImportV2ImportsEstimateGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/imports/estimate"),
            [],
            [new Param("format", request.Format), new Param("file_id", request.FileId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ImportEstimateResponse>(),
            EstimateImportV2ImportsEstimateGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Import Report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetImportReportV2ImportsImportIdReportGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Return the report a completed or stopped import published, in its format's schema.
    /// </remarks>
    public Task<object> GetImportReportV2ImportsImportIdReportGet(GetImportReportV2ImportsImportIdReportGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/imports/{import_id}/report"),
            [new TemplateParam("import_id", request.ImportId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetImportReportV2ImportsImportIdReportGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Import
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ImportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetImportV2ImportsImportIdGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetch one import.
    /// </remarks>
    public Task<ImportResponse> GetImportV2ImportsImportIdGet(GetImportV2ImportsImportIdGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/imports/{import_id}"),
            [new TemplateParam("import_id", request.ImportId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ImportResponse>(),
            GetImportV2ImportsImportIdGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Import Formats
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ImportFormatListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListImportFormatsV2ImportsFormatsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the bundle formats available to import.
    /// </remarks>
    public Task<ImportFormatListResponse> ListImportFormatsV2ImportsFormatsGet(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/imports/formats"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ImportFormatListResponse>(),
            ListImportFormatsV2ImportsFormatsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Imports
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ImportListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListImportsV2ImportsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the imports the caller can read, newest first.
    /// <para>
    /// Team admins see every import on the team; other members see their own.
    /// </para>
    /// </remarks>
    public Task<ImportListResponse> ListImportsV2ImportsGet(ListImportsV2ImportsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/imports"),
            [],
            [
                new Param("format", request.Format),
                new Param("taskset_id", request.TasksetId),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ImportListResponse>(),
            ListImportsV2ImportsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Import
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ImportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartImportV2ImportsPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Import an uploaded bundle into a taskset.
    /// </remarks>
    public Task<ImportResponse> StartImportV2ImportsPost(StartImportV2ImportsPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/imports"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ImportResponse>(),
            StartImportV2ImportsPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
