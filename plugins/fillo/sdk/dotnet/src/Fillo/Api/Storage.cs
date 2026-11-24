using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Fillo.Core;
using Fillo.Core.Exceptions;
using Fillo.Core.Models;
using Fillo.Core.Request;
using Fillo.Core.Response;
using Fillo.Errors;
using Fillo.Models;
using Fillo.Requests.Storage;

namespace Fillo.Api;

public sealed class Storage
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Storage(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get a form's upload destination
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FormStorage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetFormStorageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Where this form's uploads land: the destination pinned on the form, the stored record, and what an upload would <c>resolve</c> to right now (including Fillo's short-lived transit staging). Scope: storage:manage.
    /// </remarks>
    public Task<FormStorage> GetFormStorage(GetFormStorageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/forms/{form}/storage"),
            [new TemplateParam("form", request.Form)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<FormStorage>(),
            GetFormStorageError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Google Drive upload folders
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DriveFolderListing"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListFormStorageFoldersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The Drive folder this form's uploads land in, plus the connected account's writable My Drive folders so an agent can choose without guessing an id. Shared drives are not offered. Scope: storage:manage.
    /// </remarks>
    public Task<DriveFolderListing> ListFormStorageFolders(ListFormStorageFoldersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/forms/{form}/storage/folder"),
            [new TemplateParam("form", request.Form)],
            [new Param("q", request.Q)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DriveFolderListing>(),
            ListFormStorageFoldersError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Reset the Google Drive upload folder
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageFormsStorageFolderResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ResetFormStorageFolderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Return the form to its automatic per-form Drive folder. Files already uploaded stay where they are. Scope: storage:manage.
    /// </remarks>
    public Task<ApiV1ManageFormsStorageFolderResponse> ResetFormStorageFolder(ResetFormStorageFolderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/forms/{form}/storage/folder"),
            [new TemplateParam("form", request.Form)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ManageFormsStorageFolderResponse>(),
            ResetFormStorageFolderError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set a form's upload destination
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FormStorage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SetFormStorageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Pin where this form's uploads land. <c>transit</c> and <c>none</c> clear the per-form choice so the form follows the workspace default. A destination whose provider is not connected is a 409, as is clearing storage on a live form that collects files. Scope: storage:manage.
    /// </remarks>
    public Task<FormStorage> SetFormStorage(SetFormStorageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/forms/{form}/storage"),
            [new TemplateParam("form", request.Form)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<FormStorage>(),
            SetFormStorageError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Select a Google Drive upload folder
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageFormsStorageFolderResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SetFormStorageFolderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Send this form's new uploads to a folder on the connected Google account. Existing files stay where they are. A folder the connected account cannot write to, or one owned by a different account, is a 409. Scope: storage:manage.
    /// </remarks>
    public Task<ApiV1ManageFormsStorageFolderResponse> SetFormStorageFolder(SetFormStorageFolderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/forms/{form}/storage/folder"),
            [new TemplateParam("form", request.Form)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ManageFormsStorageFolderResponse>(),
            SetFormStorageFolderError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
