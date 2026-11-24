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
using Paid.Requests.PricingApi;

namespace Paid.Api;

public sealed class PricingApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal PricingApi(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Get pricing for a product attribute
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PricingResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPricingError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns pricing and credit benefits for a single product attribute.
    /// </remarks>
    public Task<PricingResponse> GetPricing(GetPricingRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/pricing/{productAttributeId}"),
            [new TemplateParam("productAttributeId", request.ProductAttributeId)],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PricingResponse>(),
            GetPricingError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List pricing for a product
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PricingListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPricingError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns pricing for all product attributes of a product. Each entry includes the attribute's pricing configuration and credit benefits.
    /// </remarks>
    public Task<PricingListResponse> ListPricing(ListPricingRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/pricing/"),
            [],
            [new Param("productId", request.ProductId)],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PricingListResponse>(),
            ListPricingError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update pricing for a product attribute
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PricingResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdatePricingError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates pricing on an existing product attribute. If creditBenefits is provided, it fully replaces existing benefits. If omitted, existing benefits are preserved.
    /// </remarks>
    public Task<PricingResponse> UpdatePricing(UpdatePricingOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/pricing/{productAttributeId}"),
            [new TemplateParam("productAttributeId", request.ProductAttributeId)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PricingResponse>(),
            UpdatePricingError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
