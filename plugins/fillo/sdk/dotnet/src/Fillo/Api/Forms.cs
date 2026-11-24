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
using Fillo.Requests.Forms;

namespace Fillo.Api;

public sealed class Forms
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Forms(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Discard staged changes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageFormsDiscardResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DiscardFormDraftError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Drop a published form's staged changes and return the editor to what is live. The live form is untouched, so this is routine (Tier A). <c>changed: false</c> means nothing was staged. Scope: forms:write.
    /// </remarks>
    public Task<ApiV1ManageFormsDiscardResponse> DiscardFormDraft(DiscardFormDraftRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/forms/{form}/discard"),
            [new TemplateParam("form", request.Form)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ManageFormsDiscardResponse>(),
            DiscardFormDraftError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Duplicate a form
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageFormsDuplicateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DuplicateFormError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Copy a form into the same project as a fresh draft. The copy collects nothing until it is published, which keeps this routine (Tier A). A form whose deletion has already started is 410 here and on the CLI twin — one check, inside the shared core. Scope: forms:write.
    /// </remarks>
    public Task<ApiV1ManageFormsDuplicateResponse> DuplicateForm(DuplicateFormRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/forms/{form}/duplicate"),
            [new TemplateParam("form", request.Form)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ManageFormsDuplicateResponse>(),
            DuplicateFormError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a form
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FormDetail"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetFormError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The published contract for one form (id or slug): its published schema and settings, plus a hasDraft flag. <c>?include=draft</c> adds the staged revision (<c>draftSchema</c>, <c>draftTheme</c>) and the push handle, storage destination, and purpose — everything <c>fillo pull</c> needs — and additionally requires forms:write. Without it the draft schema is never exposed. Scope: forms:read.
    /// </remarks>
    public Task<FormDetail> GetForm(GetFormRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/forms/{form}"),
            [new TemplateParam("form", request.Form)],
            [new Param("include", request.Include)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<FormDetail>(),
            GetFormError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List a form's schema versions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageFormsVersionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListFormVersionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The form's stored schema versions, newest first. Scope: forms:read.
    /// </remarks>
    public Task<ApiV1ManageFormsVersionsResponse> ListFormVersions(ListFormVersionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/forms/{form}/versions"),
            [new TemplateParam("form", request.Form)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ManageFormsVersionsResponse>(),
            ListFormVersionsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List forms
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageFormsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListFormsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Keyset list of the project's forms, newest first. Scope: forms:read.
    /// </remarks>
    public Task<ApiV1ManageFormsResponse> ListForms(ListFormsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/forms"),
            [],
            [new Param("cursor", request.Cursor), new Param("limit", request.Limit)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ManageFormsResponse>(),
            ListFormsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Rename a form
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageFormsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RenameFormError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Rename a form and re-derive its slug. Old links keep working and no id changes, which is why this is routine (Tier A). Scope: forms:write.
    /// </remarks>
    public Task<ApiV1ManageFormsResponse1> RenameForm(RenameFormRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/forms/{form}"),
            [new TemplateParam("form", request.Form)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ManageFormsResponse1>(),
            RenameFormError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Unpublish a form
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageFormsUnpublishResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UnpublishFormError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Take a live form offline: the hosted page and every embed stop accepting responses immediately. Existing responses and files are kept, and publishing again brings the form back. Outward-facing (Tier B) — the key holder chose forms:write at mint. Idempotent: an already-offline form answers <c>changed: false</c>. Scope: forms:write.
    /// </remarks>
    public Task<ApiV1ManageFormsUnpublishResponse> UnpublishForm(UnpublishFormRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/forms/{form}/unpublish"),
            [new TemplateParam("form", request.Form)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ManageFormsUnpublishResponse>(),
            UnpublishFormError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
