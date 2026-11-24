using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Bitly.Core;
using Bitly.Core.Exceptions;
using Bitly.Core.Models;
using Bitly.Core.Request;
using Bitly.Core.Response;
using Bitly.Errors;
using Bitly.Models;
using Bitly.Requests.CampaignsApi;

namespace Bitly.Api;

/// <summary>
/// Bitly Campaigns are used to build and organize links and metrics for marketing campaigns.
/// </summary>
public sealed class CampaignsApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal CampaignsApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Campaign
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Campaign"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCampaignError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new campaign.
    /// </remarks>
    public Task<Campaign> CreateCampaign(CreateCampaignRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/campaigns"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Campaign>(),
            CreateCampaignError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Channel
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Channel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateChannelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new channel.
    /// </remarks>
    public Task<Channel> CreateChannel(CreateChannelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/channels"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Channel>(),
            CreateChannelError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve a Campaign
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Campaign"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCampaignError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns details for a campaign.
    /// </remarks>
    public Task<Campaign> GetCampaign(GetCampaignRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/campaigns/{campaign_guid}"),
            [new TemplateParam("campaign_guid", request.CampaignGuid)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Campaign>(),
            GetCampaignError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve Campaigns
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Campaigns"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCampaignsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the campaigns for the current authenticated user.
    /// </remarks>
    public Task<Campaigns> GetCampaigns(GetCampaignsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/campaigns"),
            [],
            [new Param("group_guid", request.GroupGuid)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Campaigns>(),
            GetCampaignsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a Channel
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Channel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetChannelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a channel's details.
    /// </remarks>
    public Task<Channel> GetChannel(GetChannelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/channels/{channel_guid}"),
            [new TemplateParam("channel_guid", request.ChannelGuid)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Channel>(),
            GetChannelError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve Channels
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Channels"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetChannelsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the channels available to a user.
    /// </remarks>
    public Task<Channels> GetChannels(GetChannelsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/channels"),
            [],
            [new Param("group_guid", request.GroupGuid), new Param("campaign_guid", request.CampaignGuid)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Channels>(),
            GetChannelsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Campaign
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Campaign"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateCampaignError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a campaign's details.
    /// </remarks>
    public Task<Campaign> UpdateCampaign(UpdateCampaignRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/campaigns/{campaign_guid}"),
            [new TemplateParam("campaign_guid", request.CampaignGuid)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Campaign>(),
            UpdateCampaignError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a Channel
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Channel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateChannelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an existing channel.
    /// </remarks>
    public Task<Channel> UpdateChannel(UpdateChannelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/channels/{channel_guid}"),
            [new TemplateParam("channel_guid", request.ChannelGuid)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Channel>(),
            UpdateChannelError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
