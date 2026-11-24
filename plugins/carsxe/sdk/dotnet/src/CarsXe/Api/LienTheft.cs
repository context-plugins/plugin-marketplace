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
using CarsXe.Requests.LienTheft;

namespace CarsXe.Api;

/// <summary>
/// Lien and theft records by VIN
/// </summary>
public sealed class LienTheft
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal LienTheft(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Lien &amp; Theft records
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1LienTheftResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetLienTheftError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check a VIN for active lien and theft records (US).
    /// </remarks>
    public Task<V1LienTheftResponse> GetLienTheft(GetLienTheftRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/lien-theft"),
            [],
            [new Param("vin", request.Vin)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1LienTheftResponse>(),
            GetLienTheftError.Response,
            AuthScheme.Any(_auth.ApiKeyQuery, _auth.X402Payment).OrAnonymous(),
            requestOptions,
            cancellationToken);
}
