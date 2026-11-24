using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Givebutter.Core;
using Givebutter.Core.Exceptions;
using Givebutter.Core.Models;
using Givebutter.Core.Request;
using Givebutter.Core.Response;
using Givebutter.Errors;
using Givebutter.Models;
using Givebutter.Requests.CampaignDiscountCodes;

namespace Givebutter.Api;

public sealed class CampaignDiscountCodes
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal CampaignDiscountCodes(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete a discount code
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CampaignsDiscountCodesDestroyError"/> when the server returns an error response.</exception>
    public Task CampaignsDiscountCodesDestroy(CampaignsDiscountCodesDestroyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/campaigns/{campaign}/discount-codes/{discountCode}"),
            [new TemplateParam("campaign", request.Campaign), new TemplateParam("discountCode", request.DiscountCode)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CampaignsDiscountCodesDestroyError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List all discount codes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CampaignsDiscountCodesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CampaignsDiscountCodesIndexError"/> when the server returns an error response.</exception>
    public Task<V1CampaignsDiscountCodesResponse> CampaignsDiscountCodesIndex(CampaignsDiscountCodesIndexRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/campaigns/{campaign}/discount-codes"),
            [new TemplateParam("campaign", request.Campaign)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CampaignsDiscountCodesResponse>(),
            CampaignsDiscountCodesIndexError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a discount code
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CampaignDiscountCodeResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CampaignsDiscountCodesShowError"/> when the server returns an error response.</exception>
    public Task<CampaignDiscountCodeResource> CampaignsDiscountCodesShow(CampaignsDiscountCodesShowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/campaigns/{campaign}/discount-codes/{discountCode}"),
            [new TemplateParam("campaign", request.Campaign), new TemplateParam("discountCode", request.DiscountCode)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CampaignDiscountCodeResource>(),
            CampaignsDiscountCodesShowError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a discount code
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CampaignDiscountCodeResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CampaignsDiscountCodesStoreError"/> when the server returns an error response.</exception>
    public Task<CampaignDiscountCodeResource> CampaignsDiscountCodesStore(CampaignsDiscountCodesStoreRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/campaigns/{campaign}/discount-codes"),
            [new TemplateParam("campaign", request.Campaign)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CampaignDiscountCodeResource>(),
            CampaignsDiscountCodesStoreError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a discount code
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CampaignDiscountCodeResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CampaignsDiscountCodesUpdateError"/> when the server returns an error response.</exception>
    public Task<CampaignDiscountCodeResource> CampaignsDiscountCodesUpdate(CampaignsDiscountCodesUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/campaigns/{campaign}/discount-codes/{discountCode}"),
            [new TemplateParam("campaign", request.Campaign), new TemplateParam("discountCode", request.DiscountCode)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CampaignDiscountCodeResource>(),
            CampaignsDiscountCodesUpdateError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);
}
