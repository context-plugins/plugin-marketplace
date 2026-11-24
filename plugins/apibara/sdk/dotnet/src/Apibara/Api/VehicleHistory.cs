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
using Apibara.Requests.VehicleHistory;

namespace Apibara.Api;

/// <summary>
/// VIN and lot auction history.
/// </summary>
public sealed class VehicleHistory
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal VehicleHistory(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get vehicle auction history
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VehicleHistoryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetVehicleHistoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get auction history records for a vehicle by VIN or lot number.
    /// </remarks>
    public Task<VehicleHistoryResponse> GetVehicleHistory(GetVehicleHistoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/vehicles/{slugVin}/history"),
            [new TemplateParam("slugVin", request.SlugVin)],
            [new Param("per_page", request.PerPage), new Param("cursor", request.Cursor)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<VehicleHistoryResponse>(),
            GetVehicleHistoryError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
