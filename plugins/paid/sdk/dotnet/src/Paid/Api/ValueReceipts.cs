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
using Paid.Requests.ValueReceipts;

namespace Paid.Api;

public sealed class ValueReceipts
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal ValueReceipts(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Archive a value receipt
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ArchiveValueReceiptError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Soft-archive a value receipt. Archived VRs are hidden from list by default.
    /// </remarks>
    public Task<SuccessResponse> ArchiveValueReceipt(ArchiveValueReceiptRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/value-receipts/{id}/archive"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SuccessResponse>(),
            ArchiveValueReceiptError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get value receipt
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ValueReceiptDetail"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetValueReceiptByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a value receipt by ID, including its publish/share state.
    /// </remarks>
    public Task<ValueReceiptDetail> GetValueReceiptById(GetValueReceiptByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/value-receipts/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ValueReceiptDetail>(),
            GetValueReceiptByIdError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List value receipts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ValueReceiptListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListValueReceiptsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List value receipts for the organization
    /// </remarks>
    public Task<ValueReceiptListResponse> ListValueReceipts(ListValueReceiptsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/value-receipts/"),
            [],
            [
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("customerId", request.CustomerId),
                new Param("externalCustomerId", request.ExternalCustomerId),
                new Param("orderId", request.OrderId),
                new Param("productId", request.ProductId),
                new Param("archived", request.Archived),
            ],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ValueReceiptListResponse>(),
            ListValueReceiptsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Publish a value receipt
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ValueReceiptDetail"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PublishValueReceiptError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Make a value receipt publicly accessible via URL.
    /// </remarks>
    public Task<ValueReceiptDetail> PublishValueReceipt(PublishValueReceiptRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/value-receipts/{id}/publish"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ValueReceiptDetail>(),
            PublishValueReceiptError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Refresh a value receipt
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ValueReceiptSyncResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RefreshValueReceiptError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Re-populate an existing draft value receipt with current data inline. Returns the slim sync response. Sealed VRs cannot be refreshed.
    /// </remarks>
    public Task<ValueReceiptSyncResponse> RefreshValueReceipt(RefreshValueReceiptRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/value-receipts/{id}/refresh"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ValueReceiptSyncResponse>(),
            RefreshValueReceiptError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Seal a value receipt
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SealValueReceiptError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Transition a draft value receipt to sealed (posted) status. Sealed VRs are immutable — they cannot be updated or re-populated.
    /// </remarks>
    public Task<SuccessResponse> SealValueReceipt(SealValueReceiptRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/value-receipts/{id}/seal"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SuccessResponse>(),
            SealValueReceiptError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Sync a value receipt
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ValueReceiptSyncResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SyncValueReceiptError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Find or create a value receipt by natural key (customer + product/order + dates), then populate it with current data inline. Returns the ID, status, and public URL. Posted (sealed) VRs are returned as-is without re-populating.
    /// </remarks>
    public Task<ValueReceiptSyncResponse> SyncValueReceipt(SyncValueReceiptOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/value-receipts/sync"),
            [],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ValueReceiptSyncResponse>(),
            SyncValueReceiptError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Unarchive a value receipt
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UnarchiveValueReceiptError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Restore an archived value receipt.
    /// </remarks>
    public Task<SuccessResponse> UnarchiveValueReceipt(UnarchiveValueReceiptRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/value-receipts/{id}/unarchive"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SuccessResponse>(),
            UnarchiveValueReceiptError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Unpublish a value receipt
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ValueReceiptDetail"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UnpublishValueReceiptError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Revoke public access to a value receipt.
    /// </remarks>
    public Task<ValueReceiptDetail> UnpublishValueReceipt(UnpublishValueReceiptRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/value-receipts/{id}/unpublish"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ValueReceiptDetail>(),
            UnpublishValueReceiptError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
