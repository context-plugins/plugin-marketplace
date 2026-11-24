using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DynamicFeed.Core;
using DynamicFeed.Core.Authentication;
using DynamicFeed.Core.ErrorResponse;
using DynamicFeed.Core.Exceptions;
using DynamicFeed.Core.Models;
using DynamicFeed.Core.Request;
using DynamicFeed.Core.Response;
using DynamicFeed.Errors;
using DynamicFeed.Requests.Billing;

namespace DynamicFeed.Api;

public sealed class Billing
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Billing(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Billing Success
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<object> BillingSuccessBillingSuccessGet(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/billing/success"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Billing Webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BillingWebhookBillingWebhookPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Stripe calls this to confirm payments. Upgrades/downgrades the key.
    /// </remarks>
    public Task<object> BillingWebhookBillingWebhookPost(BillingWebhookBillingWebhookPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/billing/webhook"),
            [],
            [],
            [
                new HeaderParam("stripe-signature", request.StripeSignature),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            BillingWebhookBillingWebhookPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Checkout
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CheckoutBillingCheckoutPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Start a Stripe Checkout for a paid plan. Returns a payment URL.
    /// </remarks>
    public Task<object> CheckoutBillingCheckoutPost(CheckoutBillingCheckoutPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/billing/checkout"),
            [],
            [
                new Param("api_key", request.ApiKey),
                new Param("tier", request.Tier),
                new Param("interval", request.Interval),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            CheckoutBillingCheckoutPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
