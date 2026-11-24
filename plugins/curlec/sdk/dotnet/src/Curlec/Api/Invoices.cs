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
using Curlec.Requests.Invoices;

namespace Curlec.Api;

/// <summary>
/// Invoices and payment pages for one-time or partial-payment collection. Create in draft, issue to the customer, and track payment status. Cannot be used for GST invoices (use the Dashboard for those). Maximum 50 line items per invoice.
/// </summary>
public sealed class Invoices
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Invoices(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Cancel an invoice
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Invoice"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelInvoiceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cancel a draft or issued invoice. Cancelled invoices cannot be paid and cannot be reinstated.
    /// </remarks>
    public Task<Invoice> CancelInvoice(CancelInvoiceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/invoices/{id}/cancel"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<Invoice>(),
            CancelInvoiceError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create an invoice
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Invoice"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateInvoiceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create an invoice or payment page. Set type='invoice' for a formal invoice or type='link' for a simple payment page. The invoice is created in draft state; call POST /invoices/{id}/issue to send it to the customer. Cannot be used to create GST invoices (use the Dashboard for those). Maximum 50 line items per invoice.
    /// </remarks>
    public Task<Invoice> CreateInvoice(CreateInvoiceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/invoices"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Invoice>(),
            CreateInvoiceError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a draft invoice
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteInvoiceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently delete a draft invoice. Only invoices in draft status can be deleted.
    /// </remarks>
    public Task<object> DeleteInvoice(DeleteInvoiceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/invoices/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DeleteInvoiceError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch an invoice
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Invoice"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchInvoiceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get full details of a specific invoice including status, line items, and payment information.
    /// </remarks>
    public Task<Invoice> FetchInvoice(FetchInvoiceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/invoices/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Invoice>(),
            FetchInvoiceError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Issue an invoice
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Invoice"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="IssueInvoiceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Transition a draft invoice to issued status, sending a notification to the customer with the payment link. Once issued, line items cannot be changed.
    /// </remarks>
    public Task<Invoice> IssueInvoice(IssueInvoiceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/invoices/{id}/issue"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<Invoice>(),
            IssueInvoiceError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List all invoices
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="InvoicesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListInvoicesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of invoices. Filter by type, status, customer, payment, or subscription. Returns up to 100 per call.
    /// </remarks>
    public Task<InvoicesResponse> ListInvoices(ListInvoicesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/invoices"),
            [],
            [
                new Param("type", request.Type),
                new Param("payment_id", request.PaymentId),
                new Param("customer_id", request.CustomerId),
                new Param("subscription_id", request.SubscriptionId),
                new Param("from", request.From),
                new Param("to", request.To),
                new Param("count", request.Count),
                new Param("skip", request.Skip),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<InvoicesResponse>(),
            ListInvoicesError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Send invoice notification
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="InvoicesNotifyByResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SendInvoiceNotificationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Send or resend the invoice payment link to the customer via SMS or email.
    /// </remarks>
    public Task<InvoicesNotifyByResponse> SendInvoiceNotification(SendInvoiceNotificationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/invoices/{id}/notify_by/{medium}"),
            [new TemplateParam("id", request.Id), new TemplateParam("medium", request.Medium)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<InvoicesNotifyByResponse>(),
            SendInvoiceNotificationError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an invoice
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Invoice"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateInvoiceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update invoice fields. Updatable fields depend on current status: draft=all fields; issued=partial_payment, receipt, comment, terms, notes, expire_by; paid/cancelled/expired=notes only.
    /// </remarks>
    public Task<Invoice> UpdateInvoice(UpdateInvoiceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/invoices/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Invoice>(),
            UpdateInvoiceError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);
}
