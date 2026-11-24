using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using JuriSign.Core;
using JuriSign.Core.Exceptions;
using JuriSign.Core.Models;
using JuriSign.Core.Request;
using JuriSign.Core.Response;
using JuriSign.Errors;
using JuriSign.Models;
using JuriSign.Requests.PublicForms;

namespace JuriSign.Api;

/// <summary>
/// Shareable links: each respondent signs their own generated request, no account needed
/// </summary>
public sealed class PublicForms
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal PublicForms(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Public Form
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicFormsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreatePublicFormError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Publish a shareable link backed by one of your sign request templates. Anyone opening the link fills in their details and becomes the signer of their own signature request, generated on the fly. The template MUST have exactly one signer and its own copy of the PDF.
    /// </remarks>
    public Task<PublicFormsResponse1> CreatePublicForm(CreatePublicFormRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/public-forms"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PublicFormsResponse1>(),
            CreatePublicFormError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Public Form
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MessageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeletePublicFormError"/> when the server returns an error response.</exception>
    public Task<MessageResponse> DeletePublicForm(DeletePublicFormRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/public-forms/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<MessageResponse>(),
            DeletePublicFormError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Public Form
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicFormsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPublicFormError"/> when the server returns an error response.</exception>
    public Task<PublicFormsResponse1> GetPublicForm(GetPublicFormRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/public-forms/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicFormsResponse1>(),
            GetPublicFormError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Public Forms
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicFormsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPublicFormsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the shareable public forms (PowerForms) of your organization.
    /// </remarks>
    public Task<PublicFormsResponse> ListPublicForms(ListPublicFormsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/public-forms"),
            [],
            [new Param("per_page", request.PerPage)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicFormsResponse>(),
            ListPublicFormsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Rotate Public Form Token
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicFormsRotateTokenResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RotatePublicFormTokenError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate a new public token. The previous link stops working immediately — use this if a link leaked or was shared too widely.
    /// </remarks>
    public Task<PublicFormsRotateTokenResponse> RotatePublicFormToken(RotatePublicFormTokenRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/public-forms/{id}/rotate-token"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<PublicFormsRotateTokenResponse>(),
            RotatePublicFormTokenError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Public Form
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicFormsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdatePublicFormError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Rename, pause/reactivate, change the expiry or the daily cap.
    /// </remarks>
    public Task<PublicFormsResponse1> UpdatePublicForm(UpdatePublicFormRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/public-forms/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PublicFormsResponse1>(),
            UpdatePublicFormError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
