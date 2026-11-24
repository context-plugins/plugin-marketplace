using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Zillapi.Core;
using Zillapi.Core.ErrorResponse;
using Zillapi.Core.Exceptions;
using Zillapi.Core.Models;
using Zillapi.Core.Request;
using Zillapi.Core.Response;
using Zillapi.Models;
using Zillapi.Requests.Buildings;

namespace Zillapi.Api;

public sealed class Buildings
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Buildings(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get all units in a building
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1BuildingsByUrlResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Extract all unit listings from a Zillow building, apartments, or community URL (/b/, /apartments/, or /community/). Runs synchronously by default; set sync=false for large buildings to receive a job_id. Billed at 1 credit per unit returned; failed calls are free.
    /// </remarks>
    public Task<V1BuildingsByUrlResponse> GetBuildingByUrl(GetBuildingByUrlRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/buildings/by-url"),
            [],
            [
                new Param("url", request.Url),
                new Param("include_units", request.IncludeUnits),
                new Param("sync", request.Sync),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1BuildingsByUrlResponse>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
