using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using FlowAccount.Core;
using FlowAccount.Core.ErrorResponse;
using FlowAccount.Core.Exceptions;
using FlowAccount.Core.Models;
using FlowAccount.Core.Request;
using FlowAccount.Core.Response;
using FlowAccount.Models;
using FlowAccount.Requests.DebitNote;

namespace FlowAccount.Api;

public sealed class DebitNote
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal DebitNote(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// To change status by the document id and key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<BinaryContent> DebitNoteChangeStatusByKey(DebitNoteChangeStatusByKeyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{culture}/debit-notes/{documentId}/status-key/{statusKey}"),
            [
                new TemplateParam("documentId", request.DocumentId),
                new TemplateParam("statusKey", request.StatusKey),
                new TemplateParam("culture", request.Culture),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            RawErrorResponse.Instance,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// To Create a document with SimpleDocument as the parameter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MessageSent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<MessageSent> DebitNoteCreate(DebitNoteCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{culture}/debit-notes/simple-document"),
            [new TemplateParam("culture", request.Culture)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<MessageSent>(),
            RawErrorResponse.Instance,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// To Create a document with InlineDocument as the parameter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MessageSent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<MessageSent> DebitNoteCreate2(DebitNoteCreate2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{culture}/debit-notes/inline-document"),
            [new TemplateParam("culture", request.Culture)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<MessageSent>(),
            RawErrorResponse.Instance,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// To delete the document given a list of documentids
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<BinaryContent> DebitNoteDelete(DebitNoteDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{culture}/debit-notes/{id}"),
            [new TemplateParam("id", request.Id), new TemplateParam("culture", request.Culture)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            RawErrorResponse.Instance,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// To get details of a document
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<BinaryContent> DebitNoteDetails(DebitNoteDetailsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{culture}/debit-notes/{id}"),
            [new TemplateParam("id", request.Id), new TemplateParam("culture", request.Culture)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            RawErrorResponse.Instance,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// To Update a document with simpleDocument as the parameter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<BinaryContent> DebitNoteEdit(DebitNoteEditRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{culture}/debit-notes/simple-document/{id}"),
            [new TemplateParam("id", request.Id), new TemplateParam("culture", request.Culture)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            BinaryResponse.Instance,
            RawErrorResponse.Instance,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// To Update a document with inlineDocument as the parameter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<BinaryContent> DebitNoteEdit2(DebitNoteEdit2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{culture}/debit-notes/inline-document/{id}"),
            [new TemplateParam("id", request.Id), new TemplateParam("culture", request.Culture)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            BinaryResponse.Instance,
            RawErrorResponse.Instance,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Debit note get cumulative document reference list
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<BinaryContent> DebitNoteGetCumulativeDocumentReferenceList(DebitNoteGetCumulativeDocumentReferenceListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{culture}/debit-notes/cumulative-references"),
            [new TemplateParam("culture", request.Culture)],
            [new Param("ids", request.Ids)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            RawErrorResponse.Instance,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// To query for documents
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<BinaryContent> DebitNoteIndex(DebitNoteIndexRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{culture}/debit-notes"),
            [new TemplateParam("culture", request.Culture)],
            [
                new Param("SortBy", request.SortBy),
                new Param("CurrentPage", request.CurrentPage),
                new Param("PageSize", request.PageSize),
                new Param("Filter", request.Filter),
                new Param("SearchString", request.SearchString),
                new Param("CustomDocumentModels", request.CustomDocumentModels),
                new Param("Range", request.Range),
                new Param("Month", request.Month),
                new Param("Year", request.Year),
                new Param("StartDate", request.StartDate),
                new Param("EndDate", request.EndDate),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            RawErrorResponse.Instance,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// To Accept payment with the paymentModel
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<BinaryContent> DebitNoteReceivePayment(DebitNoteReceivePaymentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{culture}/debit-notes/{id}/payments"),
            [new TemplateParam("id", request.Id), new TemplateParam("culture", request.Culture)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            BinaryResponse.Instance,
            RawErrorResponse.Instance,
            _auth.Bearer,
            requestOptions,
            cancellationToken);
}
