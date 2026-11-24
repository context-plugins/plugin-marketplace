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
using FacebookBusinessManager.Requests.AdCreatives;

namespace FacebookBusinessManager.Api;

/// <summary>
/// Manage ad creative content including images, videos, copy, and call-to-action configurations.
/// </summary>
public sealed class AdCreatives
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AdCreatives(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Facebook Business Manager Create an ad creative
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateAdCreativeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new ad creative with image, video, copy, and call-to-action configurations for use in ads.
    /// </remarks>
    public Task<CreateResponse> CreateAdCreative(CreateAdCreativeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/act_{ad_account_id}/adcreatives"),
            [new TemplateParam("ad_account_id", request.AdAccountId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateResponse>(),
            CreateAdCreativeError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Facebook Business Manager List ad creatives
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AdCreativeList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAdCreativesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all ad creatives for the specified ad account.
    /// </remarks>
    public Task<AdCreativeList> ListAdCreatives(ListAdCreativesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/act_{ad_account_id}/adcreatives"),
            [new TemplateParam("ad_account_id", request.AdAccountId)],
            [new Param("fields", request.Fields), new Param("limit", request.Limit), new Param("after", request.After)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AdCreativeList>(),
            ListAdCreativesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
