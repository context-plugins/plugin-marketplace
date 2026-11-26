using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Justtrack.Core;
using Justtrack.Core.Exceptions;
using Justtrack.Core.Models;
using Justtrack.Core.Request;
using Justtrack.Core.Response;
using Justtrack.Errors;
using Justtrack.Models;
using Justtrack.Requests.Campaigns;

namespace Justtrack.Api;

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
    /// Create campaign
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CampaignOutput"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostManagementV1CampaignError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Typically, we automatically track campaigns in justtrack when we receive the first click or impression. However, you can also use this API to create a campaign manually.
    /// </remarks>
    public Task<CampaignOutput> PostManagementV1Campaign(PostManagementV1CampaignRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultManagementAppPartnerConnectionApi("/management/v1/campaign"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CampaignOutput>(),
            PostManagementV1CampaignError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List campaigns
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CampaignOutput"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostManagementV1CampaignsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a paginated list of campaigns for your organization.
    /// </remarks>
    public Task<CampaignOutput> PostManagementV1Campaigns(PostManagementV1CampaignsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultManagementAppPartnerConnectionApi("/management/v1/campaigns"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CampaignOutput>(),
            PostManagementV1CampaignsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
