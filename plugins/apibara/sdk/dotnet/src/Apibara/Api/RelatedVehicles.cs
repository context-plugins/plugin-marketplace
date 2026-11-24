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
using Apibara.Requests.RelatedVehicles;

namespace Apibara.Api;

/// <summary>
/// Related and similar auction vehicles.
/// </summary>
public sealed class RelatedVehicles
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal RelatedVehicles(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get related vehicles
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VehicleListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRelatedVehiclesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get related or similar auction vehicles by VIN or lot number.
    /// </remarks>
    public Task<VehicleListResponse> GetRelatedVehicles(GetRelatedVehiclesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/vehicles/{slugVin}/related"),
            [new TemplateParam("slugVin", request.SlugVin)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<VehicleListResponse>(),
            GetRelatedVehiclesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
