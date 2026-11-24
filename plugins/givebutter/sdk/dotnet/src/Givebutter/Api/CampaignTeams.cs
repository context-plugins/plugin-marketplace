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
using Givebutter.Requests.CampaignTeams;

namespace Givebutter.Api;

public sealed class CampaignTeams
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal CampaignTeams(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete a campaign team
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CampaignsTeamsDestroyError"/> when the server returns an error response.</exception>
    public Task CampaignsTeamsDestroy(CampaignsTeamsDestroyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/campaigns/{campaign}/teams/{team}"),
            [new TemplateParam("campaign", request.Campaign), new TemplateParam("team", request.Team)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CampaignsTeamsDestroyError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List all campaign teams
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CampaignsTeamsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CampaignsTeamsIndexError"/> when the server returns an error response.</exception>
    public Task<V1CampaignsTeamsResponse> CampaignsTeamsIndex(CampaignsTeamsIndexRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/campaigns/{campaign}/teams"),
            [new TemplateParam("campaign", request.Campaign)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CampaignsTeamsResponse>(),
            CampaignsTeamsIndexError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a campaign team
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CampaignTeamResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CampaignsTeamsShowError"/> when the server returns an error response.</exception>
    public Task<CampaignTeamResource> CampaignsTeamsShow(CampaignsTeamsShowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/campaigns/{campaign}/teams/{team}"),
            [new TemplateParam("campaign", request.Campaign), new TemplateParam("team", request.Team)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CampaignTeamResource>(),
            CampaignsTeamsShowError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);
}
