using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CompSniper.Core;
using CompSniper.Core.Exceptions;
using CompSniper.Core.Models;
using CompSniper.Core.Request;
using CompSniper.Core.Response;
using CompSniper.Errors;
using CompSniper.Models;
using CompSniper.Requests.ShippingRates;

namespace CompSniper.Api;

public sealed class ShippingRates
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ShippingRates(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Shipping Rates usage
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ShippingRateUsageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetShippingRateUsageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the authenticated account's separate Shipping Rates plan, quota, usage, rate limit, and billing period.
    /// </remarks>
    public Task<ShippingRateUsageResponse> GetShippingRateUsage(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/shipping/usage"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ShippingRateUsageResponse>(),
            GetShippingRateUsageError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get eBay shipping-rate estimates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ShippingRateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetShippingRatesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns quote-only shipping estimates for a US origin ZIP, US destination ZIP, package weight, and dimensions. Applicable services are returned in rates. Carrier-packaging and content-restricted services are returned in conditionalRates unless the caller explicitly confirms the requirement. Preserves retail and eBay discounted prices when available. Requires a separate Shipping Rates subscription and consumes one shipping request only when usable applicable rates are returned.
    /// </remarks>
    public Task<ShippingRateResponse> GetShippingRates(GetShippingRatesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/shipping/rates"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", request.IdempotencyKey)],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ShippingRateResponse>(),
            GetShippingRatesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
