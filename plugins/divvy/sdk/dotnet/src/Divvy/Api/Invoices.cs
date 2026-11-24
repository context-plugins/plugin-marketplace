using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Divvy.Core;
using Divvy.Core.Authentication;
using Divvy.Core.Exceptions;
using Divvy.Core.Models;
using Divvy.Core.Request;
using Divvy.Core.Response;
using Divvy.Errors;
using Divvy.Models;
using Divvy.Requests.Invoices;

namespace Divvy.Api;

public sealed class Invoices
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Invoices(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Archive an invoice
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="InvoiceResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ArchiveInvoiceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archive an existing invoice. In the response, the <c>archived</c> field is set as <c>true</c>.
    /// <para>
    /// You can restore an archived invoice with <c>POST /v3/invoices/{invoiceId}/restore</c>. There is no change when you archive an archived invoice.
    /// </para>
    /// </remarks>
    public Task<InvoiceResponseDto> ArchiveInvoice(ArchiveInvoiceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/invoices/{invoiceId}/archive"),
            [new TemplateParam("invoiceId", request.InvoiceId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<InvoiceResponseDto>(),
            ArchiveInvoiceError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create an invoice
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="InvoiceResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateInvoiceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new invoice.
    /// <para>
    /// See Invoices in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<InvoiceResponseDto> CreateInvoice(CreateInvoiceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/invoices"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<InvoiceResponseDto>(),
            CreateInvoiceError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get invoice details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="InvoiceResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetInvoiceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing invoice.
    /// </remarks>
    public Task<InvoiceResponseDto> GetInvoice(GetInvoiceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/invoices/{invoiceId}"),
            [new TemplateParam("invoiceId", request.InvoiceId)],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<InvoiceResponseDto>(),
            GetInvoiceError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get invoice payment link
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="InvoicePaymentLinkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPaymentLinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get an invoice payment link. In the response, BILL sends you a payment link based on the provided invoice and customer information.
    /// <para>
    /// You can send the invoice payment link to your customer for getting paid by the customer. With this link, the customer can complete the invoice payment without the need to set up a BILL account.
    /// </para>
    /// <para>
    /// When a customer payment is made with the invoice payment link, BILL sends a payment receipt to the provided email address.
    /// </para>
    /// <para>
    /// <b>Note</b>: You get valid invoice payment links only for customers that are NOT connected with your organization in the BILL network.
    /// </para>
    /// <para>
    /// See Invoices in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<InvoicePaymentLinkResponseDto> GetPaymentLink(GetPaymentLinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/invoices/{invoiceId}/payment-link"),
            [new TemplateParam("invoiceId", request.InvoiceId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<InvoicePaymentLinkResponseDto>(),
            GetPaymentLinkError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of invoices
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListInvoiceResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListInvoicesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of invoice objects. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// <para>
    /// See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.
    /// </para>
    /// </remarks>
    public Task<ListInvoiceResponseDto> ListInvoices(ListInvoicesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/invoices"),
            [],
            [
                new Param("max", request.Max),
                new Param("sort", request.Sort),
                new Param("filters", request.Filters),
                new Param("page", request.Page),
            ],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListInvoiceResponseDto>(),
            ListInvoicesError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Record AR payment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RecordInvoiceResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RecordInvoiceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Record an offline AR payment received from a customer.
    /// <para>
    /// An offline payment is a payment that you receive outside the BILL system. BILL simply applies the recorded payment amount to one or more invoices for the customer. Any recorded unapplied amount is an overpayment and is available as a customer credit in the BILL system.
    /// </para>
    /// <para>
    /// See Recording an AR payment in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<RecordInvoiceResponseDto> RecordInvoice(RecordInvoiceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/invoices/record-payment"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RecordInvoiceResponseDto>(),
            RecordInvoiceError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Replace an invoice
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="InvoiceResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ReplaceInvoiceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the number of line items in an invoice. You can also update other invoice details.
    /// <para>
    /// You can use the PUT operation to add, remove, or replace the number of line items in an invoice. A set of rules apply with the PUT operation.
    /// * When you add a new line item, a new line item <c>id</c> is generated in the invoice.
    /// * When you omit an existing line item <c>id</c>, the line item is removed from the invoice.
    /// </para>
    /// </remarks>
    public Task<InvoiceResponseDto> ReplaceInvoice(ReplaceInvoiceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/invoices/{invoiceId}"),
            [new TemplateParam("invoiceId", request.InvoiceId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<InvoiceResponseDto>(),
            ReplaceInvoiceError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Restore an archived invoice
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="InvoiceResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RestoreInvoiceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Restore an archived invoice. In the response, the <c>archived</c> field is set as <c>false</c>.
    /// <para>
    /// You can perform any valid BILL operation on restored invoices. There is no change when you restore a restored invoice.
    /// </para>
    /// </remarks>
    public Task<InvoiceResponseDto> RestoreInvoice(RestoreInvoiceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/invoices/{invoiceId}/restore"),
            [new TemplateParam("invoiceId", request.InvoiceId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<InvoiceResponseDto>(),
            RestoreInvoiceError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Send an invoice
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SendInvoiceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Send an invoice to a customer email address. You can send the invoice to multiple email addresses.
    /// <para>
    /// See Invoices in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task SendInvoice(SendInvoiceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/invoices/{invoiceId}/email"),
            [new TemplateParam("invoiceId", request.InvoiceId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            SendInvoiceError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an invoice
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="InvoiceResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateInvoiceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about an invoice line item. You can also update other invoice details.
    /// <para>
    /// You can use the PATCH operation to modify line item details, such as <c>amount</c>, <c>quantity</c>, and <c>description</c>. The invoice line item <c>id</c> does not change with a PATCH operation.
    /// </para>
    /// </remarks>
    public Task<InvoiceResponseDto> UpdateInvoice(UpdateInvoiceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/invoices/{invoiceId}"),
            [new TemplateParam("invoiceId", request.InvoiceId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<InvoiceResponseDto>(),
            UpdateInvoiceError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
