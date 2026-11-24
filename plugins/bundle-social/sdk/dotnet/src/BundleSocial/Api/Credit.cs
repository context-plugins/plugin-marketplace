using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using BundleSocial.Core;
using BundleSocial.Core.Exceptions;
using BundleSocial.Core.Models;
using BundleSocial.Core.Request;
using BundleSocial.Core.Response;
using BundleSocial.Errors;
using BundleSocial.Models;
using BundleSocial.Requests.Credit;

namespace BundleSocial.Api;

public sealed class Credit
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Credit(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get credit balance
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1BillingCreditsBalanceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreditGetCreditBalanceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve your organization's prepaid credit balance: settled funds, in-flight holds, and the available amount metered X actions draw from.
    /// </remarks>
    public Task<ApiV1BillingCreditsBalanceResponse> CreditGetCreditBalance(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/billing/credits/balance"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1BillingCreditsBalanceResponse>(),
            CreditGetCreditBalanceError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Quote a metered X action
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1BillingBillableUsageQuoteResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreditQuoteBillableUsageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Estimate the credit cost of a metered X action (post publishing, analytics reads, imports) before running it, and see whether your current balance covers it.
    /// </remarks>
    public Task<ApiV1BillingBillableUsageQuoteResponse> CreditQuoteBillableUsage(CreditQuoteBillableUsageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/billing/billable-usage/quote"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1BillingBillableUsageQuoteResponse>(),
            CreditQuoteBillableUsageError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
