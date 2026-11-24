using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Hightouch.Core;
using Hightouch.Core.Exceptions;
using Hightouch.Core.Models;
using Hightouch.Core.Request;
using Hightouch.Core.Response;
using Hightouch.Errors;
using Hightouch.Models;
using Hightouch.Models.AnyOf;
using Hightouch.Requests.Campaigns;

namespace Hightouch.Api;

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
    /// Get send delivery statuses
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BatchSendStatusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSendStatusesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the delivery status of up to 100 sends in a single request, using the
    /// <c>sendId</c> values returned from the start endpoint. Prefer this over polling
    /// the single-send endpoint once per <c>sendId</c>.
    /// </remarks>
    public Task<BatchSendStatusResponse> GetSendStatuses(GetSendStatusesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/campaigns/{campaignId}/sends/batch-get"),
            [new TemplateParam("campaignId", request.CampaignId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BatchSendStatusResponse>(),
            GetSendStatusesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Trigger an API campaign send
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CampaignsTriggerResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TriggerCampaignError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Start an API-triggered campaign: send to the given recipients.
    /// </remarks>
    public Task<CampaignsTriggerResponse> TriggerCampaign(TriggerCampaignRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/campaigns/{campaignId}/trigger"),
            [new TemplateParam("campaignId", request.CampaignId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CampaignsTriggerResponse>(),
            TriggerCampaignError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
