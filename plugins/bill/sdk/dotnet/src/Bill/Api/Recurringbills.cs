using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Bill.Core;
using Bill.Core.Authentication;
using Bill.Core.Exceptions;
using Bill.Core.Models;
using Bill.Core.Request;
using Bill.Core.Response;
using Bill.Errors;
using Bill.Models;
using Bill.Requests.Recurringbills;

namespace Bill.Api;

public sealed class Recurringbills
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Recurringbills(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Archive a recurring bill
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RecurringBillResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ArchiveRecurringBillError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archive a recurring bill. In the response, the <c>archived</c> field is set as <c>true</c>.
    /// <para>
    /// You can restore an archived recurring bill with <c>POST /v3/recurringbills/{recurringbillId}/restore</c>. There is no change when you archive an archived recurring bill.
    /// </para>
    /// <para>
    /// When a recurring bill is modified, all future bills are automatically changed.
    /// </para>
    /// </remarks>
    public Task<RecurringBillResponseDto> ArchiveRecurringBill(ArchiveRecurringBillRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/recurringbills/{recurringBillId}/archive"),
            [new TemplateParam("recurringBillId", request.RecurringBillId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<RecurringBillResponseDto>(),
            ArchiveRecurringBillError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a recurring bill
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RecurringBillResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateRecurringBillError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a recurring bill.
    /// <para>
    /// See Recurring bills in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<RecurringBillResponseDto> CreateRecurringBill(CreateRecurringBillRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/recurringbills"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RecurringBillResponseDto>(),
            CreateRecurringBillError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get recurring bill details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RecurringBillReadResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRecurringBillError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing recurring bill.
    /// </remarks>
    public Task<RecurringBillReadResponseDto> GetRecurringBill(GetRecurringBillRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/recurringbills/{recurringBillId}"),
            [new TemplateParam("recurringBillId", request.RecurringBillId)],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RecurringBillReadResponseDto>(),
            GetRecurringBillError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of recurring bills
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListRecurringBillResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListRecurringBillsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of recurring bill objects. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// <para>
    /// See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.
    /// </para>
    /// </remarks>
    public Task<ListRecurringBillResponseDto> ListRecurringBills(ListRecurringBillsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/recurringbills"),
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
            JsonResponse.Create<ListRecurringBillResponseDto>(),
            ListRecurringBillsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Replace a recurring bill
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RecurringBillResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ReplaceRecurringBillError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the number of line items in a recurring bill. You can also update other recurring bill details.
    /// <para>
    /// You can use the PUT operation to add, remove, or replace the number of line items in a recurring bill. A set of rules apply with the PUT operation.
    /// * When you add a new line item, a new line item <c>id</c> is generated in the bill.
    /// * When you omit an existing line item <c>id</c>, the line item is removed from the bill.
    /// </para>
    /// <para>
    /// When a recurring bill is modified, all future bills are automatically changed.
    /// </para>
    /// </remarks>
    public Task<RecurringBillResponseDto> ReplaceRecurringBill(ReplaceRecurringBillRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/recurringbills/{recurringBillId}"),
            [new TemplateParam("recurringBillId", request.RecurringBillId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RecurringBillResponseDto>(),
            ReplaceRecurringBillError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Restore an archived recurring bill
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RecurringBillResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RestoreRecurringBillError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Restore an archived recurring bill. In the response, the <c>archived</c> field is set as <c>false</c>.
    /// <para>
    /// You can perform any valid BILL operation on restored recurring bills. There is no change when you restore a restored recurring bill.
    /// </para>
    /// <para>
    /// When a recurring bill is modified, all future bills are automatically changed.
    /// </para>
    /// </remarks>
    public Task<RecurringBillResponseDto> RestoreRecurringBill(RestoreRecurringBillRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/recurringbills/{recurringBillId}/restore"),
            [new TemplateParam("recurringBillId", request.RecurringBillId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<RecurringBillResponseDto>(),
            RestoreRecurringBillError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a recurring bill
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RecurringBillResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateRecurringBillError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about a recurring bill line item. You can also update other recurring bill details.
    /// <para>
    /// You can use the PATCH operation to modify line item details, such as amount and description. The recurring bill line item <c>id</c> does not change with a PATCH operation.
    /// </para>
    /// <para>
    /// When a recurring bill is modified, all future bills are automatically changed.
    /// </para>
    /// </remarks>
    public Task<RecurringBillResponseDto> UpdateRecurringBill(UpdateRecurringBillRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/recurringbills/{recurringBillId}"),
            [new TemplateParam("recurringBillId", request.RecurringBillId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RecurringBillResponseDto>(),
            UpdateRecurringBillError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
