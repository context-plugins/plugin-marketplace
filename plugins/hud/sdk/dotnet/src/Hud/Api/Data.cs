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
using Hud.Requests.Data;

namespace Hud.Api;

public sealed class Data
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Data(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Complete Data File
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DataFileResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CompleteDataFileV2DataFileIdCompletePostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Publish an uploaded data file, recording its stored size and type.
    /// </remarks>
    public Task<DataFileResponse> CompleteDataFileV2DataFileIdCompletePost(CompleteDataFileV2DataFileIdCompletePostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/data/{file_id}/complete"),
            [new TemplateParam("file_id", request.FileId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<DataFileResponse>(),
            CompleteDataFileV2DataFileIdCompletePostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Data File
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DataFileUploadResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateDataFileV2DataPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Reserve a data file and return a presigned PUT to upload its bytes.
    /// </remarks>
    public Task<DataFileUploadResponse> CreateDataFileV2DataPost(CreateDataFileV2DataPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/data"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DataFileUploadResponse>(),
            CreateDataFileV2DataPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Data File
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteDataFileV2DataFileIdDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a data file and its stored object.
    /// </remarks>
    public Task DeleteDataFileV2DataFileIdDelete(DeleteDataFileV2DataFileIdDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/data/{file_id}"),
            [new TemplateParam("file_id", request.FileId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteDataFileV2DataFileIdDeleteError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Data Files
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteDataFilesV2DataDeletePostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete data files and their stored objects. Fails if any id is unreadable or unwritable.
    /// </remarks>
    public Task DeleteDataFilesV2DataDeletePost(DeleteDataFilesV2DataDeletePostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/data/delete"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            DeleteDataFilesV2DataDeletePostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Download Data File
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DataFileDownloadResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DownloadDataFileV2DataFileIdDownloadGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Presign an inline and an attachment link for a ready data file.
    /// </remarks>
    public Task<DataFileDownloadResponse> DownloadDataFileV2DataFileIdDownloadGet(DownloadDataFileV2DataFileIdDownloadGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/data/{file_id}/download"),
            [new TemplateParam("file_id", request.FileId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DataFileDownloadResponse>(),
            DownloadDataFileV2DataFileIdDownloadGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Data File Storage Usage
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DataFileStorageUsageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetDataFileStorageUsageV2DataUsageGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Return current data-file storage use and the team's effective limits.
    /// </remarks>
    public Task<DataFileStorageUsageResponse> GetDataFileStorageUsageV2DataUsageGet(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/data/usage"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DataFileStorageUsageResponse>(),
            GetDataFileStorageUsageV2DataUsageGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Data File
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DataFileResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetDataFileV2DataFileIdGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetch one data file's metadata.
    /// </remarks>
    public Task<DataFileResponse> GetDataFileV2DataFileIdGet(GetDataFileV2DataFileIdGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/data/{file_id}"),
            [new TemplateParam("file_id", request.FileId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DataFileResponse>(),
            GetDataFileV2DataFileIdGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Data File Groups
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DataFileGroupListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListDataFileGroupsV2DataGroupsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Summarise the readable folders so a browser can load their files on demand.
    /// </remarks>
    public Task<DataFileGroupListResponse> ListDataFileGroupsV2DataGroupsGet(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/data/groups"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DataFileGroupListResponse>(),
            ListDataFileGroupsV2DataGroupsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Data Files
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DataFileListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListDataFilesV2DataGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the data files the caller can read, optionally narrowed to one folder.
    /// </remarks>
    public Task<DataFileListResponse> ListDataFilesV2DataGet(ListDataFilesV2DataGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/data"),
            [],
            [
                new Param("scope", request.Scope),
                new Param("membership_id", request.MembershipId),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DataFileListResponse>(),
            ListDataFilesV2DataGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Data File
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DataFileResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateDataFileV2DataFileIdPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Rename a data file.
    /// </remarks>
    public Task<DataFileResponse> UpdateDataFileV2DataFileIdPatch(UpdateDataFileV2DataFileIdPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/data/{file_id}"),
            [new TemplateParam("file_id", request.FileId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DataFileResponse>(),
            UpdateDataFileV2DataFileIdPatchError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
