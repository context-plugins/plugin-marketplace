using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using PrismaReviews.Core;
using PrismaReviews.Core.Exceptions;
using PrismaReviews.Core.Models;
using PrismaReviews.Core.Request;
using PrismaReviews.Core.Response;
using PrismaReviews.Errors;
using PrismaReviews.Models;
using PrismaReviews.Requests.LocationsApi;

namespace PrismaReviews.Api;

/// <summary>
/// The places, apps, shops and listings that receive reviews.
/// </summary>
public sealed class LocationsApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal LocationsApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get a location
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Location"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetLocationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// One location by ID, disconnected ones included until their data is deleted.
    /// </remarks>
    public Task<Location> GetLocation(GetLocationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/locations/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Location>(),
            GetLocationError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List locations
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="LocationList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListLocationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Every location of your workspace in the mode of your key, oldest first, without disconnected ones. Not paginated: <c>next_cursor</c> is always <c>null</c>.
    /// </remarks>
    public Task<LocationList> ListLocations(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/locations"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<LocationList>(),
            ListLocationsError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Refresh a location
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="LocationRefresh"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RefreshLocationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Checks one location for new reviews now instead of waiting for its next scheduled check ("Refresh now"). From the Beam plan; at most once every 15 minutes per location. New reviews arrive as usual, in <c>GET /v1/reviews</c> and as <c>review.created</c> webhooks.
    /// </remarks>
    public Task<LocationRefresh> RefreshLocation(RefreshLocationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/locations/{id}/refresh"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<LocationRefresh>(),
            RefreshLocationError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
