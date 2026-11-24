using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Paid.Core;
using Paid.Core.Authentication;
using Paid.Core.Exceptions;
using Paid.Core.Models;
using Paid.Core.Request;
using Paid.Core.Response;
using Paid.Errors;
using Paid.Models;
using Paid.Requests.Invoices;

namespace Paid.Api;

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
    /// Get invoice
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Invoice"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetInvoiceByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get an invoice by ID
    /// </remarks>
    public Task<Invoice> GetInvoiceById(GetInvoiceByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/invoices/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Invoice>(),
            GetInvoiceByIdError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get invoice lines
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="InvoiceLinesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetInvoiceLinesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the invoice lines for an invoice by ID
    /// </remarks>
    public Task<InvoiceLinesResponse> GetInvoiceLines(GetInvoiceLinesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/invoices/{id}/lines"),
            [new TemplateParam("id", request.Id)],
            [new Param("limit", request.Limit), new Param("offset", request.Offset)],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<InvoiceLinesResponse>(),
            GetInvoiceLinesError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List invoices
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="InvoiceListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListInvoicesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of invoices for the organization
    /// </remarks>
    public Task<InvoiceListResponse> ListInvoices(ListInvoicesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/invoices/"),
            [],
            [
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("customerId", request.CustomerId),
                new Param("externalCustomerId", request.ExternalCustomerId),
                new Param("orderId", request.OrderId),
                new Param("status", request.Status),
                new Param("paymentStatus", request.PaymentStatus),
                new Param("issueDateFrom", request.IssueDateFrom),
                new Param("issueDateTo", request.IssueDateTo),
                new Param("dueDateFrom", request.DueDateFrom),
                new Param("dueDateTo", request.DueDateTo),
                new Param("displayNumber", request.DisplayNumber),
                new Param("purchaseOrderReference", request.PurchaseOrderReference),
                new Param("currency", request.Currency),
            ],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<InvoiceListResponse>(),
            ListInvoicesError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update invoice
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Invoice"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateInvoiceByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update an invoice by ID
    /// </remarks>
    public Task<Invoice> UpdateInvoiceById(UpdateInvoiceByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/invoices/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Invoice>(),
            UpdateInvoiceByIdError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
