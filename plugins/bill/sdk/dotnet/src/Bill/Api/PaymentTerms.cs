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
using Bill.Requests.PaymentTerms;

namespace Bill.Api;

public sealed class PaymentTerms
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal PaymentTerms(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create a payment term
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentTermResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreatePaymentTermError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new payment term for the organization. Use payment terms to set the number of days the customer has to pay a vendor. You can set <c>paymentTermId</c> in bills and invoices.
    /// </remarks>
    public Task<PaymentTermResponseDto> CreatePaymentTerm(CreatePaymentTermRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/organizations/{organizationId}/payment-terms"),
            [new TemplateParam("organizationId", request.OrganizationId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PaymentTermResponseDto>(),
            CreatePaymentTermError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get payment term details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentTermResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPaymentTermError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing payment term.
    /// </remarks>
    public Task<PaymentTermResponseDto> GetPaymentTerm(GetPaymentTermRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/organizations/{organizationId}/payment-terms/{paymentTermId}"),
            [
                new TemplateParam("organizationId", request.OrganizationId),
                new TemplateParam("paymentTermId", request.PaymentTermId),
            ],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaymentTermResponseDto>(),
            GetPaymentTermError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of payment terms
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListResponseDtoPaymentTermResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPaymentTermsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of payment terms for the organization. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// <para>
    /// See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.
    /// </para>
    /// </remarks>
    public Task<ListResponseDtoPaymentTermResponseDto> ListPaymentTerms(ListPaymentTermsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/organizations/{organizationId}/payment-terms"),
            [new TemplateParam("organizationId", request.OrganizationId)],
            [new Param("max", request.Max), new Param("sort", request.Sort), new Param("filters", request.Filters)],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListResponseDtoPaymentTermResponseDto>(),
            ListPaymentTermsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a payment term
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentTermResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdatePaymentTermError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about an existing payment term.
    /// </remarks>
    public Task<PaymentTermResponseDto> UpdatePaymentTerm(UpdatePaymentTermRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/organizations/{organizationId}/payment-terms/{paymentTermId}"),
            [
                new TemplateParam("organizationId", request.OrganizationId),
                new TemplateParam("paymentTermId", request.PaymentTermId),
            ],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PaymentTermResponseDto>(),
            UpdatePaymentTermError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
