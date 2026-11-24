using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using FacebookBusinessManager.Core;
using FacebookBusinessManager.Core.Exceptions;
using FacebookBusinessManager.Core.Models;
using FacebookBusinessManager.Core.Request;
using FacebookBusinessManager.Core.Response;
using FacebookBusinessManager.Errors;
using FacebookBusinessManager.Models;
using FacebookBusinessManager.Requests.Campaigns;

namespace FacebookBusinessManager.Api;

/// <summary>
/// Manage advertising campaigns including creation, updating, and status management.
/// </summary>
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
    /// Facebook Business Manager Create a campaign
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCampaignError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new advertising campaign in the specified ad account. Requires at minimum a name, objective, and status.
    /// </remarks>
    public Task<CreateResponse> CreateCampaign(CreateCampaignRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/act_{ad_account_id}/campaigns"),
            [new TemplateParam("ad_account_id", request.AdAccountId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateResponse>(),
            CreateCampaignError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Facebook Business Manager Delete a campaign
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteCampaignError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an advertising campaign. This sets the campaign status to DELETED and it will no longer serve ads.
    /// </remarks>
    public Task<SuccessResponse> DeleteCampaign(DeleteCampaignRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{campaign_id}"),
            [new TemplateParam("campaign_id", request.CampaignId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<SuccessResponse>(),
            DeleteCampaignError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Facebook Business Manager Get a campaign
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Campaign"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCampaignError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the details of a specific campaign by its ID, including configuration, status, and objective.
    /// </remarks>
    public Task<Campaign> GetCampaign(GetCampaignRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{campaign_id}"),
            [new TemplateParam("campaign_id", request.CampaignId)],
            [new Param("fields", request.Fields)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Campaign>(),
            GetCampaignError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Facebook Business Manager List campaigns
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CampaignList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCampaignsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all campaigns for the specified ad account. Returns a paginated list of campaign objects with their configurations and status information.
    /// </remarks>
    public Task<CampaignList> ListCampaigns(ListCampaignsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/act_{ad_account_id}/campaigns"),
            [new TemplateParam("ad_account_id", request.AdAccountId)],
            [
                new Param("fields", request.Fields),
                new Param("limit", request.Limit),
                new Param("after", request.After),
                new Param("filtering", request.Filtering),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CampaignList>(),
            ListCampaignsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Facebook Business Manager Update a campaign
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateCampaignError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an existing campaign. Supports modifying name, status, budget, and other campaign-level settings.
    /// </remarks>
    public Task<SuccessResponse> UpdateCampaign(UpdateCampaignRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{campaign_id}"),
            [new TemplateParam("campaign_id", request.CampaignId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SuccessResponse>(),
            UpdateCampaignError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
