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
using Divvy.Requests.Transactions;

namespace Divvy.Api;

public sealed class Transactions
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Transactions(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Add a transaction receipt
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="ReceiptImage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddTransactionReceiptError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Add a receipt to an existing transaction.
    /// <para>
    /// In the request, use the same upload <c>url</c> that you used to upload the receipt image. See Create a transaction upload URL to learn about creating a transaction image upload URL.
    /// </para>
    /// </remarks>
    public Task<IReadOnlyList<ReceiptImage>> AddTransactionReceipt(AddTransactionReceiptRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/transactions/{transactionId}/receipts"),
            [new TemplateParam("transactionId", request.TransactionId)],
            [],
            [new HeaderParam("apiToken", request.ApiToken), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyList<ReceiptImage>>(),
            AddTransactionReceiptError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a transaction upload URL
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ReimbursementImageUploadUrlResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateReceiptUploadUrlError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a transaction image upload URL.
    /// <para>
    /// From the response, use the upload <c>url</c> to upload a receipt image for the transaction. For example, to upload a JPEG image, use the following <c>curl</c> command. To upload a PNG image, set the content type as <c>image/png</c>.
    /// </para>
    /// <code>
    /// curl '{upload_url}'
    /// -H 'Content-Type: image/jpeg'
    /// --upload-file {file_name_with_extension}
    /// </code>
    /// <para>
    /// <b>Note</b>: BILL supports JPG and PNG file formats for transaction images.
    /// </para>
    /// <para>
    /// See Transactions in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<ReimbursementImageUploadUrlResponseDto> CreateReceiptUploadUrl(CreateReceiptUploadUrlRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/transactions/receipt-upload-url"),
            [],
            [],
            [new HeaderParam("apiToken", request.ApiToken), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ReimbursementImageUploadUrlResponseDto>(),
            CreateReceiptUploadUrlError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a transaction receipt
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteTransactionReceiptError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a receipt from an existing transaction. A deleted receipt cannot be restored. The deleted receipt is not available in the transaction details.
    /// </remarks>
    public Task DeleteTransactionReceipt(DeleteTransactionReceiptRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/transactions/{transactionId}/receipts/{receiptId}"),
            [
                new TemplateParam("transactionId", request.TransactionId),
                new TemplateParam("receiptId", request.ReceiptId),
            ],
            [],
            [new HeaderParam("apiToken", request.ApiToken), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteTransactionReceiptError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get transaction details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TransactionResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTransactionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing transaction.
    /// <para>
    /// In the response, you get information about transactions, reversals, and refunds.
    /// * <b>Transaction</b>: For a standard transaction, the <c>transactionType</c> is set as <c>AUTHORIZATION</c> or <c>DECLINE</c>. The status is updated to <c>CLEAR</c> once BILL moves the money from the funding account. The <c>CLEAR</c> transactions receive a new ID and reference to the original <c>AUTHORIZATION</c> transaction via the <c>originalAuthTransactionUuid</c> field.
    /// * <b>Reversal</b>: For a reversal (a cancellation before funds are settled), the <c>transactionType</c> remains <c>AUTHORIZATION</c>, but the <c>amount</c> is typically a negative value.
    /// * <b>Refund</b>: For a refund (a cancellation after funds are settled), the <c>transactionType</c> is set to <c>CLEAR</c> and the <c>amount</c> is a negative value.
    /// </para>
    /// </remarks>
    public Task<TransactionResponseDto> GetTransaction(GetTransactionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/transactions/{transactionId}"),
            [new TemplateParam("transactionId", request.TransactionId)],
            [new Param("showCustomFieldIds", request.ShowCustomFieldIds)],
            [new HeaderParam("apiToken", request.ApiToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TransactionResponseDto>(),
            GetTransactionError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of transaction custom field values
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginationResponseDtoCustomFieldValueDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTransactionCustomFieldValuesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of custom field value objects applied to an existing transaction. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// </remarks>
    public Task<PaginationResponseDtoCustomFieldValueDto> ListTransactionCustomFieldValues(ListTransactionCustomFieldValuesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/transactions/{transactionId}/custom-fields/{customFieldId}/values"),
            [
                new TemplateParam("transactionId", request.TransactionId),
                new TemplateParam("customFieldId", request.CustomFieldId),
            ],
            [
                new Param("max", request.Max),
                new Param("nextPage", request.NextPage),
                new Param("prevPage", request.PrevPage),
            ],
            [new HeaderParam("apiToken", request.ApiToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginationResponseDtoCustomFieldValueDto>(),
            ListTransactionCustomFieldValuesError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of transaction custom fields
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListTransactionCustomFieldResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTransactionCustomFieldsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of custom field objects applied to an existing transaction.
    /// </remarks>
    public Task<ListTransactionCustomFieldResponseDto> ListTransactionCustomFields(ListTransactionCustomFieldsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/transactions/{transactionId}/custom-fields"),
            [new TemplateParam("transactionId", request.TransactionId)],
            [new Param("filters", request.Filters)],
            [new HeaderParam("apiToken", request.ApiToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListTransactionCustomFieldResponseDto>(),
            ListTransactionCustomFieldsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of transactions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginationResponseDtoTransactionResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTransactionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of transaction objects. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 50 results on one page.
    /// <para>
    /// In the response, you get information about transactions, reversals, and refunds.
    /// * <b>Transaction</b>: For a standard transaction, the <c>transactionType</c> is set as <c>AUTHORIZATION</c> or <c>DECLINE</c>. The status is updated to <c>CLEAR</c> once BILL moves the money from the funding account. The <c>CLEAR</c> transactions receive a new ID and reference to the original <c>AUTHORIZATION</c> transaction via the <c>originalAuthTransactionUuid</c> field.
    /// * <b>Reversal</b>: For a reversal (a cancellation before funds are settled), the <c>transactionType</c> remains <c>AUTHORIZATION</c>, but the <c>amount</c> is typically a negative value.
    /// * <b>Refund</b>: For a refund (a cancellation after funds are settled), the <c>transactionType</c> is set to <c>CLEAR</c> and the <c>amount</c> is a negative value.
    /// </para>
    /// <para>
    /// <b>Note</b>: Only parent transactions are available in the response.
    /// </para>
    /// </remarks>
    public Task<PaginationResponseDtoTransactionResponseDto> ListTransactions(ListTransactionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/transactions"),
            [],
            [
                new Param("max", request.Max),
                new Param("nextPage", request.NextPage),
                new Param("prevPage", request.PrevPage),
                new Param("sort", request.Sort),
                new Param("filters", request.Filters),
                new Param("showCustomFieldIds", request.ShowCustomFieldIds),
                new Param("includeReceipts", request.IncludeReceipts),
            ],
            [new HeaderParam("apiToken", request.ApiToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginationResponseDtoTransactionResponseDto>(),
            ListTransactionsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Accept or reject a transaction
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ThreeDsResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ThreeDsChallengeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Accept or reject a transaction 3D Secure (3DS) challenge.
    /// <para>
    /// When a transaction is created, a 3DS challenge may trigger to verify the identity of the cardholder. Use this endpoint to approve or deny the transaction. The Spend &amp; Expense user must have the <c>ADMIN</c> user role to perform this operation.
    /// </para>
    /// <para>
    /// Subscribe to the <c>spend.three-ds-challenge.created</c> event to get a webhook notification when a 3DS challenge is triggered for a transaction. See Spend &amp; Expense 3DS challenge notification payload for more information.
    /// </para>
    /// <para>
    /// See 3-D Secure - BILL Spend &amp; Expense in the BILL Help Center to learn more about 3D Secure at BILL.
    /// </para>
    /// </remarks>
    public Task<ThreeDsResponseDto> ThreeDsChallenge(ThreeDsChallengeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/transactions/{acsTransactionId}/3ds-challenge"),
            [new TemplateParam("acsTransactionId", request.AcsTransactionId)],
            [],
            [new HeaderParam("apiToken", request.ApiToken), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ThreeDsResponseDto>(),
            ThreeDsChallengeError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a transaction
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TransactionResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateTransactionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the budget for an existing transaction.
    /// </remarks>
    public Task<TransactionResponseDto> UpdateTransaction(UpdateTransactionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/transactions/{transactionId}"),
            [new TemplateParam("transactionId", request.TransactionId)],
            [],
            [new HeaderParam("apiToken", request.ApiToken), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TransactionResponseDto>(),
            UpdateTransactionError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update transaction custom fields
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SpendStatusDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateTransactionCustomFieldsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about custom fields and their values applied to an existing transaction.
    /// <para>
    /// You cannot update custom fields in a locked transaction. When a transaction is locked, <c>isLocked</c> is set as <c>true</c>. You can get information about your transactions with <c>GET /v3/spend/transactions</c> or `GET /v3/spend/transactions/{transactionId}.
    /// </para>
    /// <para>
    /// See Lock or unlock custom fields for a transaction in the BILL Help Center for more information.
    /// </para>
    /// </remarks>
    public Task<SpendStatusDto> UpdateTransactionCustomFields(UpdateTransactionCustomFieldsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/transactions/{transactionId}/custom-fields"),
            [new TemplateParam("transactionId", request.TransactionId)],
            [],
            [new HeaderParam("apiToken", request.ApiToken), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SpendStatusDto>(),
            UpdateTransactionCustomFieldsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
