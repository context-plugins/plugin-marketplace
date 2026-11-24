using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CarsXe.Core;
using CarsXe.Core.Authentication;
using CarsXe.Core.Exceptions;
using CarsXe.Core.Models;
using CarsXe.Core.Request;
using CarsXe.Core.Response;
using CarsXe.Errors;
using CarsXe.Models;
using CarsXe.Requests.MarketValue;

namespace CarsXe.Api;

/// <summary>
/// Vehicle market value by VIN
/// </summary>
public sealed class MarketValue
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal MarketValue(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Vehicle Market Value (v1)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MarketvalueResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMarketValueError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the market value of a vehicle by VIN, including retail, trade-in and auction values.
    /// </remarks>
    public Task<MarketvalueResponse> GetMarketValue(GetMarketValueRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/marketvalue"),
            [],
            [new Param("vin", request.Vin), new Param("format", request.Format)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<MarketvalueResponse>(),
            GetMarketValueError.Response,
            AuthScheme.Any(_auth.ApiKeyQuery, _auth.X402Payment).OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Vehicle Market Value (v2)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V2MarketvalueResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMarketValueV2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get detailed market values for a VIN, including wholesale, retail and trade-in values across condition tiers, with optional adjustments for US state, mileage and condition.
    /// </remarks>
    public Task<V2MarketvalueResponse> GetMarketValueV2(GetMarketValueV2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/marketvalue"),
            [],
            [
                new Param("vin", request.Vin),
                new Param("state", request.State),
                new Param("mileage", request.Mileage),
                new Param("condition", request.Condition),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V2MarketvalueResponse>(),
            GetMarketValueV2Error.Response,
            AuthScheme.Any(_auth.ApiKeyQuery, _auth.X402Payment).OrAnonymous(),
            requestOptions,
            cancellationToken);
}
