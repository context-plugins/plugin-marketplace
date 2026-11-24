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
using Apibara.Requests.UrlTools;

namespace Apibara.Api;

/// <summary>
/// Resolve vehicle details from auction URLs.
/// </summary>
public sealed class UrlTools
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal UrlTools(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get vehicle details from auction URL
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VehicleDetailsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetVehicleDetailsFromUrlError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Resolve vehicle auction details from a Copart or IAAI vehicle URL.
    /// </remarks>
    public Task<VehicleDetailsResponse> GetVehicleDetailsFromUrl(GetVehicleDetailsFromUrlRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/vehicles/urltodetails"),
            [],
            [new Param("url", request.Url)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<VehicleDetailsResponse>(),
            GetVehicleDetailsFromUrlError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
