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
using Divvy.Requests.VendorCredits;

namespace Divvy.Api;

public sealed class VendorCredits
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal VendorCredits(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Archive a vendor credit
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VendorCreditResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ArchiveVendorCreditError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archive an existing vendor credit. In the response, the <c>archived</c> field is set as <c>true</c>. An archived vendor credit cannot be restored.
    /// </remarks>
    public Task<VendorCreditResponseDto> ArchiveVendorCredit(ArchiveVendorCreditRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/vendor-credits/{vendorCreditId}/archive"),
            [new TemplateParam("vendorCreditId", request.VendorCreditId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<VendorCreditResponseDto>(),
            ArchiveVendorCreditError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Archive multiple vendor credits
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VendorCreditBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkArchiveVendorCreditError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archive multiple vendor credits with one API request. In the response, the <c>archived</c> field for each object is set as <c>true</c>. An archived vendor credit cannot be restored.
    /// </remarks>
    public Task<VendorCreditBulkResponseDto> BulkArchiveVendorCredit(BulkArchiveVendorCreditRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/vendor-credits/bulk/archive"),
            [],
            [new Param("ids", request.Ids)],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<VendorCreditBulkResponseDto>(),
            BulkArchiveVendorCreditError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create multiple vendor credits
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VendorCreditBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkCreateVendorCreditError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create multiple vendor credits with one API request. You can create up to 50 vendor credits with one <c>POST /v3/vendor-credits/bulk</c> request.
    /// </remarks>
    public Task<VendorCreditBulkResponseDto> BulkCreateVendorCredit(BulkCreateVendorCreditRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/vendor-credits/bulk"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<VendorCreditBulkResponseDto>(),
            BulkCreateVendorCreditError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Replace multiple vendor credits
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VendorCreditBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkReplaceVendorCreditError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the number of line items in multiple vendor credits with one API request. You can also update other details for each vendor credit.
    /// <para>
    /// You can use the PUT operation to add, remove, or replace the number of line items in a vendor credit. A set of rules apply with the PUT operation.
    /// * When you add a new line item, a new line item <c>id</c> is generated in the vendor credit.
    /// * When you omit an existing line item <c>id</c>, the line item is removed from the vendor credit.
    /// </para>
    /// </remarks>
    public Task<VendorCreditBulkResponseDto> BulkReplaceVendorCredit(BulkReplaceVendorCreditRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/vendor-credits/bulk"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<VendorCreditBulkResponseDto>(),
            BulkReplaceVendorCreditError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update multiple vendor credits
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VendorCreditBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkUpdateVendorCreditError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about line items in multiple vendor credits with one API request. You can also update other vendor credit details.
    /// <para>
    /// You can use the PATCH operation to modify line item details, such as <c>amount</c>, <c>quantity</c>, and <c>description</c>. The vendor credit line item <c>id</c> does not change with a PATCH operation.
    /// </para>
    /// </remarks>
    public Task<VendorCreditBulkResponseDto> BulkUpdateVendorCredit(BulkUpdateVendorCreditRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/vendor-credits/bulk"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<VendorCreditBulkResponseDto>(),
            BulkUpdateVendorCreditError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a vendor credit
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VendorCreditResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateVendorCreditError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a vendor credit.
    /// <para>
    /// With a vendor credit, you can adjust the amount that you owe a vendor.
    /// </para>
    /// <para>
    /// See Vendor credits in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<VendorCreditResponseDto> CreateVendorCredit(CreateVendorCreditRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/vendor-credits"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<VendorCreditResponseDto>(),
            CreateVendorCreditError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get vendor credit details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VendorCreditWithUsageResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetVendorCreditError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing vendor credit.
    /// </remarks>
    public Task<VendorCreditWithUsageResponseDto> GetVendorCredit(GetVendorCreditRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/vendor-credits/{vendorCreditId}"),
            [new TemplateParam("vendorCreditId", request.VendorCreditId)],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<VendorCreditWithUsageResponseDto>(),
            GetVendorCreditError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of vendor credits
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListResponseDtoVendorCreditWithUsageResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListVendorCreditsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of vendor credit objects. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// <para>
    /// See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.
    /// </para>
    /// </remarks>
    public Task<ListResponseDtoVendorCreditWithUsageResponseDto> ListVendorCredits(ListVendorCreditsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/vendor-credits"),
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
            JsonResponse.Create<ListResponseDtoVendorCreditWithUsageResponseDto>(),
            ListVendorCreditsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Replace a vendor credit
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VendorCreditResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ReplaceVendorCreditError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the number of line items in a vendor credit. You can also update other vendor credit details.
    /// <para>
    /// You can use the PUT operation to add, remove, or replace the number of line items in a vendor credit. A set of rules apply with the PUT operation.
    /// * When you add a new line item, a new line item <c>id</c> is generated in the vendor credit.
    /// * When you omit an existing line item <c>id</c>, the line item is removed from the vendor credit.
    /// </para>
    /// </remarks>
    public Task<VendorCreditResponseDto> ReplaceVendorCredit(ReplaceVendorCreditRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/vendor-credits/{vendorCreditId}"),
            [new TemplateParam("vendorCreditId", request.VendorCreditId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<VendorCreditResponseDto>(),
            ReplaceVendorCreditError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a vendor credit
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VendorCreditResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateVendorCreditError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about a vendor credit line item. You can also update other vendor credit line item details.
    /// <para>
    /// You can use the PATCH operation to modify line item details, such as <c>amount</c>, <c>quantity</c>, and <c>description</c>. The vendor credit line item <c>id</c> does not change with a PATCH operation.
    /// </para>
    /// </remarks>
    public Task<VendorCreditResponseDto> UpdateVendorCredit(UpdateVendorCreditRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/vendor-credits/{vendorCreditId}"),
            [new TemplateParam("vendorCreditId", request.VendorCreditId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<VendorCreditResponseDto>(),
            UpdateVendorCreditError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
