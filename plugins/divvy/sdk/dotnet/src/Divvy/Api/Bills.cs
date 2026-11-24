using System;
using System.Collections.Generic;
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
using Divvy.Requests.Bills;

namespace Divvy.Api;

public sealed class Bills
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Bills(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Archive a bill
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BillWithoutApproversResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ArchiveBillError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archive an existing bill. In the response, the <c>archived</c> field is set as <c>true</c>.
    /// <para>
    /// You can restore an archived bill with <c>POST /v3/bills/{billId}/restore</c>. There is no change when you archive an archived bill.
    /// </para>
    /// </remarks>
    public Task<BillWithoutApproversResponseDto> ArchiveBill(ArchiveBillRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/bills/{billId}/archive"),
            [new TemplateParam("billId", request.BillId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<BillWithoutApproversResponseDto>(),
            ArchiveBillError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a bill
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BillResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateBillError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new bill.
    /// <para>
    /// See Bills in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<BillResponseDto> CreateBill(CreateBillRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/bills"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BillResponseDto>(),
            CreateBillError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create multiple bills
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="BillWithoutApproversResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateBulkBillsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create multiple bills with one API request. You can create up to 100 bills with one <c>POST /v3/bills/bulk</c> request.
    /// <para>
    /// Bulk bill creation at BILL follow a set of rules.
    /// * <b>Successful response</b>: In your bulk bill creation request, all your bills must be successfully created for a successful response. If any bill creation is not successful, the entire request fails and none of the bills in the request are created.
    /// * <b>You can create bills for multiple vendors</b>: You can create bills for one vendor or for multiple vendors with one <c>POST /v3/bills/bulk</c> request.
    /// </para>
    /// <para>
    /// See Bills in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<IReadOnlyList<BillWithoutApproversResponseDto>> CreateBulkBills(CreateBulkBillsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/bills/bulk"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyList<BillWithoutApproversResponseDto>>(),
            CreateBulkBillsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get bill details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BillReadResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBillError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing bill.
    /// </remarks>
    public Task<BillReadResponseDto> GetBill(GetBillRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/bills/{billId}"),
            [new TemplateParam("billId", request.BillId)],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BillReadResponseDto>(),
            GetBillError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of bills
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListBillResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBillsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of bill objects. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// <para>
    /// See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.
    /// </para>
    /// </remarks>
    public Task<ListBillResponseDto> ListBills(ListBillsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/bills"),
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
            JsonResponse.Create<ListBillResponseDto>(),
            ListBillsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Record AP payment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RecordPaymentResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RecordPaymentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Record an offline AP payment made to a vendor.
    /// <para>
    /// An offline payment is a payment made outside the BILL system. BILL simply applies the recorded payment amount to one or more bills for the vendor. BILL does not process the payment or transfer funds to the vendor when you record an AP payment with this endpoint.
    /// </para>
    /// <para>
    /// Use <c>POST /v3/payments</c> to create a payment with the BILL system. When you pay with <c>POST /v3/payments</c>, BILL processes the payment and transfers funds from your BILL organization funding account to the vendor.
    /// </para>
    /// </remarks>
    public Task<RecordPaymentResponseDto> RecordPayment(RecordPaymentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/bills/record-payment"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RecordPaymentResponseDto>(),
            RecordPaymentError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Replace a bill
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BillResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ReplaceBillError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the number of line items in a bill. You can also update other bill details.
    /// <para>
    /// You can use the PUT operation to add, remove, or replace the number of line items in a bill. A set of rules apply with the PUT operation.
    /// * When you add a new line item, a new line item <c>id</c> is generated in the bill.
    /// * When you omit an existing line item <c>id</c>, the line item is removed from the bill.
    /// </para>
    /// </remarks>
    public Task<BillResponseDto> ReplaceBill(ReplaceBillRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/bills/{billId}"),
            [new TemplateParam("billId", request.BillId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BillResponseDto>(),
            ReplaceBillError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Restore an archived bill
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BillWithoutApproversResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RestoreBillError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Restore an archived bill. In the response, the <c>archived</c> field is set as <c>false</c>.
    /// <para>
    /// You can perform any valid BILL operation on restored bills. There is no change when you restore a restored bill.
    /// </para>
    /// </remarks>
    public Task<BillWithoutApproversResponseDto> RestoreBill(RestoreBillRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/bills/{billId}/restore"),
            [new TemplateParam("billId", request.BillId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<BillWithoutApproversResponseDto>(),
            RestoreBillError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a bill
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BillResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateBillError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about a bill line item. You can also update other bill details.
    /// <para>
    /// You can use the PATCH operation to modify line item details, such as <c>amount</c> and <c>description</c>. The bill line item <c>id</c> does not change with a PATCH operation.
    /// </para>
    /// </remarks>
    public Task<BillResponseDto> UpdateBill(UpdateBillRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/bills/{billId}"),
            [new TemplateParam("billId", request.BillId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BillResponseDto>(),
            UpdateBillError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
