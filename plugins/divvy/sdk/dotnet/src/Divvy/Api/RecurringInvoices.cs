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
using Divvy.Requests.RecurringInvoices;

namespace Divvy.Api;

public sealed class RecurringInvoices
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal RecurringInvoices(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Archive a recurring invoice
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RecurringInvoiceResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ArchiveRecurringInvoiceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archive a recurring invoice. In the response, the <c>archived</c> field is set as <c>true</c>.
    /// <para>
    /// You can restore an archived recurring invoice with <c>POST /v3/recurring-invoices/{recurringinvoiceId}/restore</c>. There is no change when you archive an archived recurring invoice.
    /// </para>
    /// <para>
    /// When a recurring invoice is modified, all future invoices are automatically changed.
    /// </para>
    /// </remarks>
    public Task<RecurringInvoiceResponseDto> ArchiveRecurringInvoice(ArchiveRecurringInvoiceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/recurring-invoices/{recurringInvoiceId}/archive"),
            [new TemplateParam("recurringInvoiceId", request.RecurringInvoiceId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<RecurringInvoiceResponseDto>(),
            ArchiveRecurringInvoiceError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a recurring invoice
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RecurringInvoiceResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateRecurringInvoiceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a recurring invoice.
    /// <para>
    /// See Recurring invoices in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<RecurringInvoiceResponseDto> CreateRecurringInvoice(CreateRecurringInvoiceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/recurring-invoices"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RecurringInvoiceResponseDto>(),
            CreateRecurringInvoiceError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get recurring invoice details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RecurringInvoiceResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRecurringInvoiceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing recurring invoice.
    /// </remarks>
    public Task<RecurringInvoiceResponseDto> GetRecurringInvoice(GetRecurringInvoiceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/recurring-invoices/{recurringInvoiceId}"),
            [new TemplateParam("recurringInvoiceId", request.RecurringInvoiceId)],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RecurringInvoiceResponseDto>(),
            GetRecurringInvoiceError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of recurring invoices
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListResponseDtoRecurringInvoiceResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListRecurringInvoicesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of recurring invoice objects. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// <para>
    /// See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.
    /// </para>
    /// </remarks>
    public Task<ListResponseDtoRecurringInvoiceResponseDto> ListRecurringInvoices(ListRecurringInvoicesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/recurring-invoices"),
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
            JsonResponse.Create<ListResponseDtoRecurringInvoiceResponseDto>(),
            ListRecurringInvoicesError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Replace a recurring invoice
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RecurringInvoiceResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ReplaceRecurringInvoiceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the number of line items in a recurring invoice. You can also update other recurring invoice details.
    /// <para>
    /// You can use the PUT operation to add, remove, or replace the number of line items in a recurring invoice. A set of rules apply with the PUT operation.
    /// * When you add a new line item, a new line item <c>id</c> is generated in the invoice.
    /// * When you omit an existing line item <c>id</c>, the line item is removed from the invoice.
    /// </para>
    /// <para>
    /// When a recurring invoice is modified, all future invoices are automatically changed.
    /// </para>
    /// </remarks>
    public Task<RecurringInvoiceResponseDto> ReplaceRecurringInvoice(ReplaceRecurringInvoiceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/recurring-invoices/{recurringInvoiceId}"),
            [new TemplateParam("recurringInvoiceId", request.RecurringInvoiceId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RecurringInvoiceResponseDto>(),
            ReplaceRecurringInvoiceError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Restore a recurring invoice
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RecurringInvoiceResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RestoreRecurringInvoiceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Restore an archived recurring invoice. In the response, the <c>archived</c> field is set as <c>false</c>.
    /// <para>
    /// You can perform any valid BILL operation on restored recurring invoices. There is no change when you restore a restored recurring invoice.
    /// </para>
    /// <para>
    /// When a recurring invoice is modified, all future invoices are automatically changed.
    /// </para>
    /// </remarks>
    public Task<RecurringInvoiceResponseDto> RestoreRecurringInvoice(RestoreRecurringInvoiceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/recurring-invoices/{recurringInvoiceId}/restore"),
            [new TemplateParam("recurringInvoiceId", request.RecurringInvoiceId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<RecurringInvoiceResponseDto>(),
            RestoreRecurringInvoiceError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a recurring invoice
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RecurringInvoiceResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateRecurringInvoiceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about a recurring invoice line item. You can also update other recurring invoice details.
    /// <para>
    /// You can use the PATCH operation to modify line item details, such as amount and description. The recurring invoice line item <c>id</c> does not change with a PATCH operation.
    /// </para>
    /// <para>
    /// When a recurring invoice is modified, all future invoices are automatically changed.
    /// </para>
    /// </remarks>
    public Task<RecurringInvoiceResponseDto> UpdateRecurringInvoice(UpdateRecurringInvoiceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/recurring-invoices/{recurringInvoiceId}"),
            [new TemplateParam("recurringInvoiceId", request.RecurringInvoiceId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RecurringInvoiceResponseDto>(),
            UpdateRecurringInvoiceError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
