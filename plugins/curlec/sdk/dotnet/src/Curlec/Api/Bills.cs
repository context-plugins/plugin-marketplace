using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Curlec.Core;
using Curlec.Core.Exceptions;
using Curlec.Core.Models;
using Curlec.Core.Request;
using Curlec.Core.Response;
using Curlec.Errors;
using Curlec.Models;
using Curlec.Requests.Bills;

namespace Curlec.Api;

/// <summary>
/// Razorpay Billme digital receipts and bills for retail, food &amp; beverage, events, and ecommerce.
/// </summary>
public sealed class Bills
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Bills(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a bill
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Bill"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateBillError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a digital bill/receipt for a customer. Supports retail, food &amp; beverage, events, and ecommerce use cases. Used for Razorpay Billme digital receipts.
    /// </remarks>
    public Task<Bill> CreateBill(CreateBillRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bills"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Bill>(),
            CreateBillError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a bill
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteBillError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a digital bill/receipt.
    /// </remarks>
    public Task<object> DeleteBill(DeleteBillRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bills/{bill_id}"),
            [new TemplateParam("bill_id", request.BillId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DeleteBillError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a bill
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Bill"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateBillError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update an existing digital bill. Can update customer details, line items, receipt summary, and other fields.
    /// </remarks>
    public Task<Bill> UpdateBill(UpdateBillRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bills/{bill_id}"),
            [new TemplateParam("bill_id", request.BillId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Bill>(),
            UpdateBillError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
