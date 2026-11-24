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
using Apibara.Requests.Filters;

namespace Apibara.Api;

/// <summary>
/// Available filters metadata.
/// </summary>
public sealed class Filters
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Filters(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get vehicle filters metadata
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FiltersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetVehicleFiltersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get available filters metadata. With make, returns series/model-family options. With make plus optional series and/or model, returns dependent generation options.
    /// </remarks>
    public Task<FiltersResponse> GetVehicleFilters(GetVehicleFiltersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/vehicles/filters"),
            [],
            [new Param("make", request.Make), new Param("series", request.Series), new Param("model", request.Model)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<FiltersResponse>(),
            GetVehicleFiltersError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
