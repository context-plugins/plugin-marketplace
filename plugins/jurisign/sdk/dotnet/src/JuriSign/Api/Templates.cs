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
using JuriSign.Requests.Templates;

namespace JuriSign.Api;

/// <summary>
/// Reusable sign request templates
/// </summary>
public sealed class Templates
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Templates(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Sign Request From Template
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TemplatesSignRequestsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSignRequestFromTemplateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a signature request from a template, reusing its signers, signature zones, and (if present) its own copy of the document. Subject, message, expiry and redirect_url can be overridden. If the template has no document of its own, <c>document_id</c> is required.
    /// </remarks>
    public Task<TemplatesSignRequestsResponse> CreateSignRequestFromTemplate(CreateSignRequestFromTemplateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/templates/{id}/sign-requests"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TemplatesSignRequestsResponse>(),
            CreateSignRequestFromTemplateError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Template
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MessageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteTemplateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a template and its own copy of the PDF, if any.
    /// </remarks>
    public Task<MessageResponse> DeleteTemplate(DeleteTemplateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/templates/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<MessageResponse>(),
            DeleteTemplateError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Template
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TemplatesResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTemplateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve full details of a template, including signers and signature zones.
    /// </remarks>
    public Task<TemplatesResponse1> GetTemplate(GetTemplateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/templates/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TemplatesResponse1>(),
            GetTemplateError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Sign Request Templates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TemplatesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTemplatesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve reusable sign request templates for your organization.
    /// </remarks>
    public Task<TemplatesResponse> ListTemplates(ListTemplatesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/templates"),
            [],
            [new Param("per_page", request.PerPage), new Param("page", request.Page)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TemplatesResponse>(),
            ListTemplatesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
