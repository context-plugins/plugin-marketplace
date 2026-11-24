using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Contentstack.Core;
using Contentstack.Core.Authentication;
using Contentstack.Core.Exceptions;
using Contentstack.Core.Models;
using Contentstack.Core.Request;
using Contentstack.Core.Response;
using Contentstack.Errors;
using Contentstack.Models;
using Contentstack.Requests.Geolocation;

namespace Contentstack.Api;

/// <summary>
/// Geolocation endpoints provide geographic datasets including regions, countries, and cities for location-based audience targeting.
/// </summary>
public sealed class Geolocation
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Geolocation(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get geolocation cities
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GeoList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGeoCitiesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the list of cities available for location-based audience targeting rules.
    /// </remarks>
    public Task<GeoList> GetGeoCities(GetGeoCitiesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackPersonalizeManagementAttributesApi("/geolocation/cities"),
            [],
            [],
            [new HeaderParam("x-project-uid", request.XProjectUid)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GeoList>(),
            GetGeoCitiesError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get geolocation countries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GeoList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGeoCountriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the list of countries available for location-based audience targeting rules.
    /// </remarks>
    public Task<GeoList> GetGeoCountries(GetGeoCountriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackPersonalizeManagementAttributesApi("/geolocation/countries"),
            [],
            [],
            [new HeaderParam("x-project-uid", request.XProjectUid)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GeoList>(),
            GetGeoCountriesError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get geolocation regions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GeoList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGeoRegionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the list of geographic regions available for location-based audience targeting rules.
    /// </remarks>
    public Task<GeoList> GetGeoRegions(GetGeoRegionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackPersonalizeManagementAttributesApi("/geolocation/regions"),
            [],
            [],
            [new HeaderParam("x-project-uid", request.XProjectUid)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GeoList>(),
            GetGeoRegionsError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);
}
