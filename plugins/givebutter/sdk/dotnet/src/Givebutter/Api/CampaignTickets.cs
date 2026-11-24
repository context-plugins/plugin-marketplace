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
using Givebutter.Requests.CampaignTickets;

namespace Givebutter.Api;

public sealed class CampaignTickets
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal CampaignTickets(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List all campaign tickets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CampaignsItemsTicketsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CampaignsItemsTicketsIndexError"/> when the server returns an error response.</exception>
    public Task<V1CampaignsItemsTicketsResponse> CampaignsItemsTicketsIndex(CampaignsItemsTicketsIndexRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/campaigns/{campaign}/items/tickets"),
            [new TemplateParam("campaign", request.Campaign)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CampaignsItemsTicketsResponse>(),
            CampaignsItemsTicketsIndexError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a campaign ticket
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CampaignItemTicketResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CampaignsItemsTicketsShowError"/> when the server returns an error response.</exception>
    public Task<CampaignItemTicketResource> CampaignsItemsTicketsShow(CampaignsItemsTicketsShowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/campaigns/{campaign}/items/tickets/{ticketId}"),
            [new TemplateParam("campaign", request.Campaign), new TemplateParam("ticketId", request.TicketId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CampaignItemTicketResource>(),
            CampaignsItemsTicketsShowError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a campaign ticket
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CampaignItemTicketResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CampaignsItemsTicketsStoreError"/> when the server returns an error response.</exception>
    public Task<CampaignItemTicketResource> CampaignsItemsTicketsStore(CampaignsItemsTicketsStoreRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/campaigns/{campaign}/items/tickets"),
            [new TemplateParam("campaign", request.Campaign)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CampaignItemTicketResource>(),
            CampaignsItemsTicketsStoreError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);
}
