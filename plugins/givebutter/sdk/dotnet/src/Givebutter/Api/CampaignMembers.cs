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
using Givebutter.Models.AnyOf;
using Givebutter.Requests.CampaignMembers;

namespace Givebutter.Api;

public sealed class CampaignMembers
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal CampaignMembers(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete a campaign member
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CampaignsMembersDestroyError"/> when the server returns an error response.</exception>
    public Task<object> CampaignsMembersDestroy(CampaignsMembersDestroyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/campaigns/{campaign}/members/{member}"),
            [new TemplateParam("campaign", request.Campaign), new TemplateParam("member", request.Member)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            CampaignsMembersDestroyError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List all campaign members
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CampaignsMembersResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CampaignsMembersIndexError"/> when the server returns an error response.</exception>
    public Task<V1CampaignsMembersResponse1> CampaignsMembersIndex(CampaignsMembersIndexRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/campaigns/{campaign}/members"),
            [new TemplateParam("campaign", request.Campaign)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CampaignsMembersResponse1>(),
            CampaignsMembersIndexError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a campaign member
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CampaignsMembersResponse11"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CampaignsMembersShowError"/> when the server returns an error response.</exception>
    public Task<V1CampaignsMembersResponse11> CampaignsMembersShow(CampaignsMembersShowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/campaigns/{campaign}/members/{member}"),
            [new TemplateParam("campaign", request.Campaign), new TemplateParam("member", request.Member)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CampaignsMembersResponse11>(),
            CampaignsMembersShowError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);
}
