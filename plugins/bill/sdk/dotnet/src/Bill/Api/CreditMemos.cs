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
using Bill.Requests.CreditMemos;

namespace Bill.Api;

public sealed class CreditMemos
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal CreditMemos(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Archive a credit memo
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreditMemoResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ArchiveCreditMemoError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archive an existing credit memo. In the response, the <c>archived</c> field is set as <c>true</c>.
    /// <para>
    /// You can restore an archived credit memo with
    /// <c>POST /v3/credit-memos/{creditMemoId}/restore</c>. There is no change when you archive an archived credit memo.
    /// </para>
    /// </remarks>
    public Task<CreditMemoResponseDto> ArchiveCreditMemo(ArchiveCreditMemoRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/credit-memos/{creditMemoId}/archive"),
            [new TemplateParam("creditMemoId", request.CreditMemoId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<CreditMemoResponseDto>(),
            ArchiveCreditMemoError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Archive multiple credit memos
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreditMemoBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkArchiveCreditMemoError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archive multiple credit memos with one API request. In the response, the <c>archived</c> field for each object is set as <c>true</c>.
    /// </remarks>
    public Task<CreditMemoBulkResponseDto> BulkArchiveCreditMemo(BulkArchiveCreditMemoRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/credit-memos/bulk/archive"),
            [],
            [new Param("ids", request.Ids)],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<CreditMemoBulkResponseDto>(),
            BulkArchiveCreditMemoError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create multiple credit memos
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreditMemoBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkCreateCreditMemoError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create multiple credit memos with one API request. You can create up to 50 credit memos with one <c>POST /v3/credit-memos/bulk</c> request.
    /// </remarks>
    public Task<CreditMemoBulkResponseDto> BulkCreateCreditMemo(BulkCreateCreditMemoRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/credit-memos/bulk"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreditMemoBulkResponseDto>(),
            BulkCreateCreditMemoError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Replace multiple credit memos
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreditMemoBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkReplaceCreditMemoError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the number of line items in multiple credit memos with one API request. You can also update other details for each credit memo.
    /// <para>
    /// You can use the PUT operation to add, remove, or replace the number of line items in a credit memo. A set of rules apply with the PUT operation.
    /// * When you add a new line item, a new line item <c>id</c> is generated in the credit memo.
    /// * When you omit an existing line item <c>id</c>, the line item is removed from the credit memo.
    /// </para>
    /// </remarks>
    public Task<CreditMemoBulkResponseDto> BulkReplaceCreditMemo(BulkReplaceCreditMemoRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/credit-memos/bulk"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreditMemoBulkResponseDto>(),
            BulkReplaceCreditMemoError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Restore multiple credit memos
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreditMemoBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkRestoreCreditMemoError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Restore multiple credit memos with one API request. In the response, the <c>archived</c> field for each object is set as <c>false</c>.
    /// </remarks>
    public Task<CreditMemoBulkResponseDto> BulkRestoreCreditMemo(BulkRestoreCreditMemoRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/credit-memos/bulk/restore"),
            [],
            [new Param("ids", request.Ids)],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<CreditMemoBulkResponseDto>(),
            BulkRestoreCreditMemoError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update multiple credit memos
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreditMemoBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkUpdateCreditMemoError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about line items in multiple credit memos with one API request. You can also update other credit memo details.
    /// <para>
    /// You can use the PATCH operation to modify line item details, such as <c>amount</c>, <c>quantity</c>, and <c>description</c>. The credit memo line item <c>id</c> does not change with a PATCH operation.
    /// </para>
    /// </remarks>
    public Task<CreditMemoBulkResponseDto> BulkUpdateCreditMemo(BulkUpdateCreditMemoRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/credit-memos/bulk"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreditMemoBulkResponseDto>(),
            BulkUpdateCreditMemoError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a credit memo
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreditMemoResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCreditMemoError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new credit memo.
    /// <para>
    /// With a credit memo, you can adjust the invoice amount owed by a customer.
    /// </para>
    /// <para>
    /// See Credit memos in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<CreditMemoResponseDto> CreateCreditMemo(CreateCreditMemoRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/credit-memos"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreditMemoResponseDto>(),
            CreateCreditMemoError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get credit memo details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreditMemoWithUsageResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCreditMemoError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing credit memo.
    /// </remarks>
    public Task<CreditMemoWithUsageResponseDto> GetCreditMemo(GetCreditMemoRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/credit-memos/{creditMemoId}"),
            [new TemplateParam("creditMemoId", request.CreditMemoId)],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CreditMemoWithUsageResponseDto>(),
            GetCreditMemoError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of credit memos
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListResponseDtoCreditMemoWithUsageResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCreditMemosError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of credit memo objects. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// <para>
    /// See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.
    /// </para>
    /// </remarks>
    public Task<ListResponseDtoCreditMemoWithUsageResponseDto> ListCreditMemos(ListCreditMemosRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/credit-memos"),
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
            JsonResponse.Create<ListResponseDtoCreditMemoWithUsageResponseDto>(),
            ListCreditMemosError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Replace a credit memo
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreditMemoResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ReplaceCreditMemoError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the number of line items in a credit memo. You can also update other credit memo details.
    /// <para>
    /// You can use the PUT operation to add, remove, or replace the number of line items in a credit memo. A set of rules apply with the PUT operation.
    /// * When you add a new line item, a new line item <c>id</c> is generated in the credit memo.
    /// * When you omit an existing line item <c>id</c>, the line item is removed from the credit memo.
    /// </para>
    /// </remarks>
    public Task<CreditMemoResponseDto> ReplaceCreditMemo(ReplaceCreditMemoRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/credit-memos/{creditMemoId}"),
            [new TemplateParam("creditMemoId", request.CreditMemoId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreditMemoResponseDto>(),
            ReplaceCreditMemoError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Restore a credit memo
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreditMemoResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RestoreCreditMemoError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Restore an archived credit memo. In the response, the <c>archived</c> field is set as <c>false</c>.
    /// <para>
    /// You can perform any valid BILL operation on restored credit memos. There is no change when you restore a restored credit memo.
    /// </para>
    /// </remarks>
    public Task<CreditMemoResponseDto> RestoreCreditMemo(RestoreCreditMemoRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/credit-memos/{creditMemoId}/restore"),
            [new TemplateParam("creditMemoId", request.CreditMemoId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<CreditMemoResponseDto>(),
            RestoreCreditMemoError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a credit memo
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreditMemoResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateCreditMemoError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about a credit memo line item. You can also update other credit memo line item details.
    /// <para>
    /// You can use the PATCH operation to modify line item details, such as <c>amount</c>, <c>quantity</c>, and <c>description</c>. The credit memo line item <c>id</c> does not change with a PATCH operation.
    /// </para>
    /// </remarks>
    public Task<CreditMemoResponseDto> UpdateCreditMemo(UpdateCreditMemoRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/credit-memos/{creditMemoId}"),
            [new TemplateParam("creditMemoId", request.CreditMemoId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreditMemoResponseDto>(),
            UpdateCreditMemoError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
