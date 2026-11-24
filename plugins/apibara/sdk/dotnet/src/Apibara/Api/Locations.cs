using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Apibara.Core;
using Apibara.Core.Exceptions;
using Apibara.Core.Models;
using Apibara.Core.Request;
using Apibara.Core.Response;
using Apibara.Errors;
using Apibara.Models;
using Apibara.Requests.Locations;

namespace Apibara.Api;

/// <summary>
/// Auction facility and location search.
/// </summary>
public sealed class Locations
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Locations(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List auction locations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="LocationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAuctionLocationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search Copart and IAAI auction locations by platform, state, facility ID, text query, ZIP, and radius.
    /// </remarks>
    public Task<LocationsResponse> ListAuctionLocations(ListAuctionLocationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/locations"),
            [],
            [
                new Param("platform", request.Platform),
                new Param("state", request.State),
                new Param("facility_id", request.FacilityId),
                new Param("q", request.Q),
                new Param("zip", request.Zip),
                new Param("radius", request.Radius),
                new Param("units", request.Units),
                new Param("per_page", request.PerPage),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<LocationsResponse>(),
            ListAuctionLocationsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
