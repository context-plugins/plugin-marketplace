using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using FinixApiReference.Core;
using FinixApiReference.Core.Exceptions;
using FinixApiReference.Core.Models;
using FinixApiReference.Core.Request;
using FinixApiReference.Core.Response;
using FinixApiReference.Errors;
using FinixApiReference.Models;
using FinixApiReference.Requests.Receipts;

namespace FinixApiReference.Api;

/// <summary>
/// The <c>Receipt</c> resource generates a receipt for <see href="#Transfers">Transfers</see> or <see href="#Authorizations">Authorizations</see>. You can then send the <c>Receipt</c> via Email, SMS, or use the information from the <c>Receipt</c> to send it yourself.
/// <para>
/// <b>Related Guides:</b>
/// - <see href="/guides/online-payments/payment-features/sending-receipts">Receipts for Online Payments</see>
/// </para>
/// </summary>
public sealed class Receipts
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Receipts(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a Receipt
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Receipt"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateReceiptError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a <c>Receipt</c> resource to generate a receipt for a
    /// <see href="#Transfers">Transfer</see> or <see href="#Authorizations">Authorization</see>. Receipts are
    /// supported for <c>DEBIT</c> and <c>REVERSAL</c> transfers, as well as <c>CREDIT</c> transfers
    /// from <see href="/guides/after-the-payment/refunds#unreferenced-refunds">unreferenced refunds</see>.
    /// <para>
    /// Include basic details such as total amount, buyer billing information, merchant
    /// name, and contact info.
    /// </para>
    /// <para>
    /// Optionally, provide:
    /// </para>
    /// <list type="bullet">
    ///   <item><description>an <c>amount_breakdown</c> of charges like subtotal, shipping, and surcharges</description></item>
    ///   <item><description>an <c>items</c> list with product name, description, price, and quantity</description></item>
    ///   <item><description><c>customization_details</c> for structured data in the receipt header (<c>subheader_attributes</c>) and free-form text arrays above or below the receipt line items (<c>summary_sections</c> and <c>footer_sections</c>).</description></item>
    ///   <item><description><c>additional_details</c> as an array of key-value pairs to capture extra metadata, such as "Invoice Number" or "Service Date". <c>additional_details</c> is mutually exclusive with <c>customization_details.subheader_attributes</c>.</description></item>
    /// </list>
    /// </remarks>
    public Task<Receipt> CreateReceipt(CreateReceiptRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/receipts"),
            [],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Receipt>(),
            CreateReceiptError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a Delivery Attempt
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateReceiptDeliveryAttemptError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a <c>Delivery Attempt</c> on an existing <c>Receipt</c> resource.
    /// </remarks>
    public Task CreateReceiptDeliveryAttempt(CreateReceiptDeliveryAttemptRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/receipts/{receipt_id}/delivery_attempts"),
            [new TemplateParam("receipt_id", request.ReceiptId)],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            CreateReceiptDeliveryAttemptError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch a Receipt
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Receipt"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetReceiptError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the details of an existing <c>Receipt</c>.
    /// </remarks>
    public Task<Receipt> GetReceipt(GetReceiptRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/receipts/{receipt_id}"),
            [new TemplateParam("receipt_id", request.ReceiptId)],
            [],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Receipt>(),
            GetReceiptError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Receipt Delivery Attempts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListReceiptDeliveryAttempts"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListReceiptDeliveryAttemptsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List Delivery Attempts for a Receipt resource.
    /// </remarks>
    public Task<ListReceiptDeliveryAttempts> ListReceiptDeliveryAttempts(ListReceiptDeliveryAttemptsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/receipts/{receipt_id}/delivery_attempts"),
            [new TemplateParam("receipt_id", request.ReceiptId)],
            [
                new Param("after_cursor", request.AfterCursor),
                new Param("before_cursor", request.BeforeCursor),
                new Param("limit", request.Limit),
            ],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListReceiptDeliveryAttempts>(),
            ListReceiptDeliveryAttemptsError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
