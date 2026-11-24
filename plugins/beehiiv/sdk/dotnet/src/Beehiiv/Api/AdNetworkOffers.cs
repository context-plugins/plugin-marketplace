using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Beehiiv.Core;
using Beehiiv.Core.Authentication;
using Beehiiv.Core.Exceptions;
using Beehiiv.Core.Models;
using Beehiiv.Core.Request;
using Beehiiv.Core.Response;
using Beehiiv.Errors;
using Beehiiv.Models;
using Beehiiv.Requests.AdNetworkOffers;

namespace Beehiiv.Api;

public sealed class AdNetworkOffers
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal AdNetworkOffers(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Get ad offer advertisements OAuth Scope: posts:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AdOfferAdvertisementsGetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AdvertisementsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This feature is currently in beta and the API is subject to change.
    /// <para>
    /// Retrieve the active text advertisement creatives available for an ad offer.
    /// </para>
    /// </remarks>
    public Task<AdOfferAdvertisementsGetResponse> Advertisements(AdvertisementsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/ad_network/offers/{offerId}/advertisements"),
            [new TemplateParam("publicationId", request.PublicationId), new TemplateParam("offerId", request.OfferId)],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AdOfferAdvertisementsGetResponse>(),
            AdvertisementsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Accept ad offer OAuth Scope: posts:write
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AdOfferCreateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This feature is currently in beta and the API is subject to change.
    /// <para>
    /// Draft and accept an ad offer, then insert the resulting advertisement opportunity into a post.
    /// </para>
    /// </remarks>
    public Task<AdOfferCreateResponse> Create(CreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/ad_network/offers"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AdOfferCreateResponse>(),
            CreateError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get ad offers OAuth Scope: posts:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AdOffersGetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="IndexError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This feature is currently in beta and the API is subject to change.
    /// <para>
    /// Retrieve a list of ad offers available for the publication.
    /// </para>
    /// </remarks>
    public Task<AdOffersGetResponse> Index(IndexRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/ad_network/offers"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [new Param("requested_from", request.RequestedFrom)],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AdOffersGetResponse>(),
            IndexError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
