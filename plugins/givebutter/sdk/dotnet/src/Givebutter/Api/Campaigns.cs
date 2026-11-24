using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Givebutter.Core;
using Givebutter.Core.ErrorResponse;
using Givebutter.Core.Exceptions;
using Givebutter.Core.Models;
using Givebutter.Core.Request;
using Givebutter.Core.Response;
using Givebutter.Errors;
using Givebutter.Models;
using Givebutter.Requests.Campaigns;

namespace Givebutter.Api;

public sealed class Campaigns
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Campaigns(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete a campaign
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CampaignsDestroyError"/> when the server returns an error response.</exception>
    public Task CampaignsDestroy(CampaignsDestroyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/campaigns/{campaign}"),
            [new TemplateParam("campaign", request.Campaign)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CampaignsDestroyError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List all campaigns
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CampaignsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<V1CampaignsResponse> CampaignsIndex(CampaignsIndexRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/campaigns"),
            [],
            [new Param("scope", request.Scope)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CampaignsResponse>(),
            RawErrorResponse.Instance,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a campaign
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CampaignResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CampaignsShowError"/> when the server returns an error response.</exception>
    public Task<CampaignResource> CampaignsShow(CampaignsShowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/campaigns/{campaign}"),
            [new TemplateParam("campaign", request.Campaign)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CampaignResource>(),
            CampaignsShowError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a campaign
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CampaignResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CampaignsStoreError"/> when the server returns an error response.</exception>
    public Task<CampaignResource> CampaignsStore(CampaignsStoreRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/campaigns"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CampaignResource>(),
            CampaignsStoreError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a campaign
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CampaignResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CampaignsUpdateError"/> when the server returns an error response.</exception>
    public Task<CampaignResource> CampaignsUpdate(CampaignsUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/campaigns/{campaign}"),
            [new TemplateParam("campaign", request.Campaign)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CampaignResource>(),
            CampaignsUpdateError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);
}
