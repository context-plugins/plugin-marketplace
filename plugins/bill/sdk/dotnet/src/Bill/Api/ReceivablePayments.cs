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
using Bill.Requests.ReceivablePayments;

namespace Bill.Api;

public sealed class ReceivablePayments
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal ReceivablePayments(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Charge a customer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ReceivablePaymentResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ChargeCustomerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Charge a customer for one or more invoices.
    /// <para>
    /// Charging a customer follows a set of rules.
    /// * <b>Customer authorization</b>: The customer <c>authorizedToCharge</c> field must be set as <c>true</c> for you to charge the customer for invoices. Set charge customer authorization with <c>POST /v3/customers/{customerId}/charge-authorization</c>.
    /// * <b>Customer bank account</b>: A customer bank account is required for you to charge a customer. Create a customer bank account with <c>POST /v3/customers/{customerId}/bank-accounts</c>.
    /// </para>
    /// </remarks>
    public Task<ReceivablePaymentResponseDto> ChargeCustomer(ChargeCustomerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/receivable-payments"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ReceivablePaymentResponseDto>(),
            ChargeCustomerError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get received payment details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ReceivablePaymentResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetReceivablePaymentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing received payment.
    /// </remarks>
    public Task<ReceivablePaymentResponseDto> GetReceivablePayment(GetReceivablePaymentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/receivable-payments/{receivedPaymentId}"),
            [new TemplateParam("receivedPaymentId", request.ReceivedPaymentId)],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ReceivablePaymentResponseDto>(),
            GetReceivablePaymentError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of received payments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListResponseDtoReceivablePaymentResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListReceivablePaymentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of received payment objects. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// <para>
    /// See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.
    /// </para>
    /// </remarks>
    public Task<ListResponseDtoReceivablePaymentResponseDto> ListReceivablePayments(ListReceivablePaymentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/receivable-payments"),
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
            JsonResponse.Create<ListResponseDtoReceivablePaymentResponseDto>(),
            ListReceivablePaymentsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
