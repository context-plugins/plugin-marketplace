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
using Apibara.Requests.Shipping;

namespace Apibara.Api;

/// <summary>
/// Auction-to-port delivery prices.
/// </summary>
public sealed class Shipping
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Shipping(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get auction-to-port shipping prices
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ShippingResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAuctionToPortShippingError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get delivery prices from auction location to one or more destination ports by VIN or lot number.
    /// </remarks>
    public Task<ShippingResponse> GetAuctionToPortShipping(GetAuctionToPortShippingRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/shipping/auction-to-port"),
            [],
            [
                new Param("vin", request.Vin),
                new Param("lot_number", request.LotNumber),
                new Param("ports", request.Ports),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ShippingResponse>(),
            GetAuctionToPortShippingError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get shipping prices for a vehicle
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ShippingResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetVehicleShippingError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get auction-to-port shipping prices for a vehicle by VIN or lot number.
    /// </remarks>
    public Task<ShippingResponse> GetVehicleShipping(GetVehicleShippingRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/vehicles/{slugVin}/shipping"),
            [new TemplateParam("slugVin", request.SlugVin)],
            [new Param("ports", request.Ports)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ShippingResponse>(),
            GetVehicleShippingError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
