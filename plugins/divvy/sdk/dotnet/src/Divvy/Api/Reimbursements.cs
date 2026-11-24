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
using Divvy.Requests.Reimbursements;

namespace Divvy.Api;

public sealed class Reimbursements
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Reimbursements(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Add a reimbursement receipt
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="ReceiptImage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddReimbursementReceiptError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Add a receipt to an existing reimbursement.
    /// In the request, use the same upload url that you used to upload the receipt image. See Create a reimbursement upload URL to learn about creating a reimbursement image upload URL.
    /// </remarks>
    public Task<IReadOnlyList<ReceiptImage>> AddReimbursementReceipt(AddReimbursementReceiptRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/reimbursements/{reimbursementId}/receipts"),
            [new TemplateParam("reimbursementId", request.ReimbursementId)],
            [],
            [new HeaderParam("apiToken", request.ApiToken), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyList<ReceiptImage>>(),
            AddReimbursementReceiptError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Approve or deny a reimbursement
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ReimbursementResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApproveOrDenyReimbursementError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Approve or deny a reimbursement request.
    /// <para>
    /// See Reimbursements in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<ReimbursementResponseDto> ApproveOrDenyReimbursement(ApproveOrDenyReimbursementRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/reimbursements/{reimbursementId}/action"),
            [new TemplateParam("reimbursementId", request.ReimbursementId)],
            [],
            [new HeaderParam("apiToken", request.ApiToken), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ReimbursementResponseDto>(),
            ApproveOrDenyReimbursementError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a reimbursement upload URL
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ReimbursementImageUploadUrlResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateImageUploadUrlError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a reimbursement image upload URL.
    /// <para>
    /// From the response, use the upload <c>url</c> to upload a receipt image for the reimbursement. For example, to upload a JPEG image, use the following <c>curl</c> command. To upload a PNG image, set the content type as <c>image/png</c>.
    /// </para>
    /// <code>
    /// curl '{upload_url}'
    /// -H 'Content-Type: image/jpeg'
    /// --upload-file {file_name_with_extension}
    /// </code>
    /// <para>
    /// <b>Note</b>: BILL supports JPG and PNG file formats for reimbursement images.
    /// </para>
    /// <para>
    /// See Reimbursements in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<ReimbursementImageUploadUrlResponseDto> CreateImageUploadUrl(CreateImageUploadUrlRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/reimbursements/image-upload-url"),
            [],
            [],
            [new HeaderParam("apiToken", request.ApiToken), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ReimbursementImageUploadUrlResponseDto>(),
            CreateImageUploadUrlError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a reimbursement
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ReimbursementResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateReimbursementError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new reimbursement.
    /// <para>
    /// See Reimbursements in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<ReimbursementResponseDto> CreateReimbursement(CreateReimbursementRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/reimbursements"),
            [],
            [],
            [new HeaderParam("apiToken", request.ApiToken), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ReimbursementResponseDto>(),
            CreateReimbursementError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a reimbursement
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteReimbursementError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete an existing reimbursement. A deleted reimbursement cannot be restored. The deleted reimbursement is not available in the list of reimbursements.
    /// </remarks>
    public Task DeleteReimbursement(DeleteReimbursementRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/reimbursements/{reimbursementId}"),
            [new TemplateParam("reimbursementId", request.ReimbursementId)],
            [],
            [new HeaderParam("apiToken", request.ApiToken), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteReimbursementError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a reimbursement receipt
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteReimbursementReceiptError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a receipt from an existing reimbursement. A deleted receipt cannot be restored. The deleted receipt is not available in the reimbursement details.
    /// </remarks>
    public Task DeleteReimbursementReceipt(DeleteReimbursementReceiptRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/reimbursements/{reimbursementId}/receipts/{receiptId}"),
            [
                new TemplateParam("reimbursementId", request.ReimbursementId),
                new TemplateParam("receiptId", request.ReceiptId),
            ],
            [],
            [new HeaderParam("apiToken", request.ApiToken), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteReimbursementReceiptError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get reimbursement details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ReimbursementResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetReimbursementError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing reimbursement.
    /// </remarks>
    public Task<ReimbursementResponseDto> GetReimbursement(GetReimbursementRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/reimbursements/{reimbursementId}"),
            [new TemplateParam("reimbursementId", request.ReimbursementId)],
            [],
            [new HeaderParam("apiToken", request.ApiToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ReimbursementResponseDto>(),
            GetReimbursementError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of reimbursements
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginationResponseDtoReimbursementResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListReimbursementsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of reimbursement objects. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// </remarks>
    public Task<PaginationResponseDtoReimbursementResponseDto> ListReimbursements(ListReimbursementsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/reimbursements"),
            [],
            [
                new Param("nextPage", request.NextPage),
                new Param("prevPage", request.PrevPage),
                new Param("max", request.Max),
                new Param("sort", request.Sort),
                new Param("filters", request.Filters),
            ],
            [new HeaderParam("apiToken", request.ApiToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginationResponseDtoReimbursementResponseDto>(),
            ListReimbursementsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a reimbursement
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ReimbursementResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateReimbursementError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about an existing reimbursement.
    /// </remarks>
    public Task<ReimbursementResponseDto> UpdateReimbursement(UpdateReimbursementRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/reimbursements/{reimbursementId}"),
            [new TemplateParam("reimbursementId", request.ReimbursementId)],
            [],
            [new HeaderParam("apiToken", request.ApiToken), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ReimbursementResponseDto>(),
            UpdateReimbursementError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
