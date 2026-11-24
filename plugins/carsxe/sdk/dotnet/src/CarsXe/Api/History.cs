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
using CarsXe.Requests.History;

namespace CarsXe.Api;

/// <summary>
/// Vehicle history reports
/// </summary>
public sealed class History
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal History(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Vehicle History
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="HistoryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetVehicleHistoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a vehicle history report by VIN, including title, brand, junk/salvage and insurance records.
    /// </remarks>
    public Task<HistoryResponse> GetVehicleHistory(GetVehicleHistoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/history"),
            [],
            [new Param("vin", request.Vin), new Param("format", request.Format)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<HistoryResponse>(),
            GetVehicleHistoryError.Response,
            AuthScheme.Any(_auth.ApiKeyQuery, _auth.X402Payment).OrAnonymous(),
            requestOptions,
            cancellationToken);
}
