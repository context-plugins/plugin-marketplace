using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Curlec.Core;
using Curlec.Core.Authentication;
using Curlec.Core.Exceptions;
using Curlec.Core.Models;
using Curlec.Core.Request;
using Curlec.Core.Response;
using Curlec.Errors;
using Curlec.Models;
using Curlec.Requests.PaymentLinks;

namespace Curlec.Api;

/// <summary>
/// Payment Links are shareable URLs to collect payments without a website. Share via SMS, email, or any channel. Supports partial payments, expiry, reminders, UPI-only mode, offers, and transfers to linked accounts.
/// </summary>
public sealed class PaymentLinks
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal PaymentLinks(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Cancel a payment link
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentLink"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelPaymentLinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cancel a payment link. Only links in 'created' status can be cancelled. Paid, partially paid, and already expired links cannot be cancelled.
    /// </remarks>
    public Task<PaymentLink> CancelPaymentLink(CancelPaymentLinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payment_links/{id}/cancel"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<PaymentLink>(),
            CancelPaymentLinkError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a payment link
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentLink"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreatePaymentLinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a shareable payment link to collect payments via SMS and email. Supports standard links (all payment methods) and UPI-only links (set upi_link=true). UPI links are not available in test mode. Partial payments are not supported for UPI links. Links expire after 6 months by default.
    /// </remarks>
    public Task<PaymentLink> CreatePaymentLink(CreatePaymentLinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payment_links"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PaymentLink>(),
            CreatePaymentLinkError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch all payment links
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentLinksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchAllPaymentLinksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve all payment links. Filter by payment_id or reference_id to narrow results.
    /// </remarks>
    public Task<PaymentLinksResponse> FetchAllPaymentLinks(FetchAllPaymentLinksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payment_links"),
            [],
            [new Param("payment_id", request.PaymentId), new Param("reference_id", request.ReferenceId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaymentLinksResponse>(),
            FetchAllPaymentLinksError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch payment link by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentLink"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchPaymentLinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve full details of a specific payment link.
    /// </remarks>
    public Task<PaymentLink> FetchPaymentLink(FetchPaymentLinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payment_links/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaymentLink>(),
            FetchPaymentLinkError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Send or resend payment link notification
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentLinksNotifyByResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ResendPaymentLinkNotificationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Send or resend a payment link notification to the customer via SMS or email.
    /// </remarks>
    public Task<PaymentLinksNotifyByResponse> ResendPaymentLinkNotification(ResendPaymentLinkNotificationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payment_links/{id}/notify_by/{medium}"),
            [new TemplateParam("id", request.Id), new TemplateParam("medium", request.Medium)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<PaymentLinksNotifyByResponse>(),
            ResendPaymentLinkNotificationError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a payment link
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentLink"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdatePaymentLinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update an existing payment link. Updates are only allowed when the link is in 'created' or 'partially_paid' status.
    /// </remarks>
    public Task<PaymentLink> UpdatePaymentLink(UpdatePaymentLinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payment_links/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PaymentLink>(),
            UpdatePaymentLinkError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);
}
