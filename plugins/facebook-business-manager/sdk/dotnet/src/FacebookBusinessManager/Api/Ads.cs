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
using FacebookBusinessManager.Requests.Ads;

namespace FacebookBusinessManager.Api;

/// <summary>
/// Manage individual ads within ad sets, including creative associations and status.
/// </summary>
public sealed class Ads
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Ads(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Facebook Business Manager Create an ad
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateAdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new ad within an ad set. Associates an ad creative with targeting and delivery settings defined at the ad set level.
    /// </remarks>
    public Task<CreateResponse> CreateAd(CreateAdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/act_{ad_account_id}/ads"),
            [new TemplateParam("ad_account_id", request.AdAccountId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateResponse>(),
            CreateAdError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Facebook Business Manager Get an ad
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Ad"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the details of a specific ad including its creative, status, and configuration.
    /// </remarks>
    public Task<Ad> GetAd(GetAdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{ad_id}"),
            [new TemplateParam("ad_id", request.AdId)],
            [new Param("fields", request.Fields)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Ad>(),
            GetAdError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Facebook Business Manager List ads
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AdList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAdsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all ads for the specified ad account. Returns ad configurations including creative associations and status.
    /// </remarks>
    public Task<AdList> ListAds(ListAdsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/act_{ad_account_id}/ads"),
            [new TemplateParam("ad_account_id", request.AdAccountId)],
            [new Param("fields", request.Fields), new Param("limit", request.Limit), new Param("after", request.After)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AdList>(),
            ListAdsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
