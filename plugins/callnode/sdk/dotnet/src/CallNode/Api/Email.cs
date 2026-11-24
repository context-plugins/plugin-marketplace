using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CallNode.Core;
using CallNode.Core.Authentication;
using CallNode.Core.Exceptions;
using CallNode.Core.Models;
using CallNode.Core.Request;
using CallNode.Core.Response;
using CallNode.Errors;
using CallNode.Models;
using CallNode.Requests.Email;

namespace CallNode.Api;

/// <summary>
/// Programmable email: verify a sending domain you control, send transactional
/// email from any address on it, list messages, and receive delivery events
/// (delivered, delayed, bounced, complained, failed) signed to your webhook.
/// Billed per recipient accepted for delivery; message bodies are not stored.
/// </summary>
public sealed class Email
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Email(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Add a sending domain
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EmailDomain"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateEmailDomainError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Registers a domain you control and answers 201 with the DNS records to publish
    /// (DKIM TXT, SPF TXT, return-path CNAME). Adding a domain the account already holds
    /// replays it (200). Requires business verification and the Email API priced on your plan.
    /// </remarks>
    public Task<EmailDomain> CreateEmailDomain(CreateEmailDomainRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/email/domains"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EmailDomain>(),
            CreateEmailDomainError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove a sending domain
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteEmailDomainError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Messages already sent keep their history.
    /// </remarks>
    public Task DeleteEmailDomain(DeleteEmailDomainRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/email/domains/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteEmailDomainError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve a sending domain
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EmailDomain"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetEmailDomainError"/> when the server returns an error response.</exception>
    public Task<EmailDomain> GetEmailDomain(GetEmailDomainRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/email/domains/{id}"),
            [new TemplateParam("id", request.Id)],
            [new Param("refresh", request.Refresh)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EmailDomain>(),
            GetEmailDomainError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve a message with its events
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EmailMessage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetEmailMessageError"/> when the server returns an error response.</exception>
    public Task<EmailMessage> GetEmailMessage(GetEmailMessageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/email/messages/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EmailMessage>(),
            GetEmailMessageError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List sending domains
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1EmailDomainsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListEmailDomainsError"/> when the server returns an error response.</exception>
    public Task<ApiV1EmailDomainsResponse> ListEmailDomains(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/email/domains"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1EmailDomainsResponse>(),
            ListEmailDomainsError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List messages
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1EmailMessagesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListEmailMessagesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Newest first, keyset-paginated. Test keys list test messages only.
    /// </remarks>
    public Task<ApiV1EmailMessagesResponse> ListEmailMessages(ListEmailMessagesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/email/messages"),
            [],
            [
                new Param("status", request.Status),
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1EmailMessagesResponse>(),
            ListEmailMessagesError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Send an email
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EmailMessage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SendEmailError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Send one message to up to 50 recipients (to + cc + bcc) from an address on one
    /// of your active sending domains. Gates run in order: field validation, business
    /// verification, the From domain's status, idempotency, a per-recipient rate on
    /// your plan, and a balance of at least <c>recipients × rate</c>. The message is handed
    /// to the sending infrastructure and answered 202 as <c>sent</c>; the charge happens on
    /// acceptance. A <c>cn_test_</c> key runs every gate and then simulates. Bodies are not
    /// stored after the handoff.
    /// </remarks>
    public Task<EmailMessage> SendEmail(SendEmailOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/email/messages"),
            [],
            [],
            [
                new HeaderParam("X-Idempotency-Key", request.XIdempotencyKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EmailMessage>(),
            SendEmailError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Check the DNS records now
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EmailDomain"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="VerifyEmailDomainError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// A real lookup against public DNS. Answers the domain with its new status; a failed check carries <c>verificationError</c>.
    /// </remarks>
    public Task<EmailDomain> VerifyEmailDomain(VerifyEmailDomainRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/email/domains/{id}/verify"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<EmailDomain>(),
            VerifyEmailDomainError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);
}
