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
using Apibara.Requests.VehicleAuction;

namespace Apibara.Api;

public sealed class VehicleAuction
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal VehicleAuction(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Read observed seller reserve signals for a vehicle
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VehiclesReserveResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetVehicleSellerReserveError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns source-backed reserve price only when explicitly disclosed, otherwise null; observed bid threshold bounds are shown separately and only when confirmed by bid-crossing evidence. Reserve Off may mean the reserve was removed. Include_events=1 adds recent observation history. This endpoint consumes one standard API request.
    /// </remarks>
    public Task<VehiclesReserveResponse> GetVehicleSellerReserve(GetVehicleSellerReserveRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/vehicles/{slugVin}/reserve"),
            [new TemplateParam("slugVin", request.SlugVin)],
            [new Param("include_events", request.IncludeEvents), new Param("limit", request.Limit)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<VehiclesReserveResponse>(),
            GetVehicleSellerReserveError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
