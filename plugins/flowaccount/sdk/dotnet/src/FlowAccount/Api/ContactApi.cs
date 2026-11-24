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
using FlowAccount.Requests.ContactApi;

namespace FlowAccount.Api;

public sealed class ContactApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ContactApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Contact create
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<BinaryContent> ContactCreate(ContactCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/{culture}/contacts"),
            [new TemplateParam("culture", request.Culture)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            BinaryResponse.Instance,
            RawErrorResponse.Instance,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Contact get contact list
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<BinaryContent> ContactGetContactList(ContactGetContactListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/{culture}/contacts"),
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
    /// Contact get contact list2
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<BinaryContent> ContactGetContactList2(ContactGetContactList2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/{culture}/contacts/{id}"),
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
    /// Contact remove contact
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<BinaryContent> ContactRemoveContact(ContactRemoveContactRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/{culture}/contacts/{id}"),
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
    /// Contact search
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<BinaryContent> ContactSearch(ContactSearchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/{culture}/contacts/search"),
            [new TemplateParam("culture", request.Culture)],
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
    /// Contact update
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<BinaryContent> ContactUpdate(ContactUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/{culture}/contacts/{id}"),
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
    /// Contact upload contact QR code
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<BinaryContent> ContactUploadContactQrCode(ContactUploadContactQrCodeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/{culture}/contacts/{contactId}/update-contact-qrcode"),
            [new TemplateParam("contactId", request.ContactId), new TemplateParam("culture", request.Culture)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            RawErrorResponse.Instance,
            _auth.Bearer,
            requestOptions,
            cancellationToken);
}
