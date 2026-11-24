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
using CarsXe.Requests.Specifications;

namespace CarsXe.Api;

/// <summary>
/// VIN decoding and vehicle specifications
/// </summary>
public sealed class Specifications
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Specifications(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// International VIN Decoder
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1InternationalVinDecoderResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetInternationalVinDecoderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Decode a non-US (international) VIN into vehicle attributes.
    /// </remarks>
    public Task<V1InternationalVinDecoderResponse> GetInternationalVinDecoder(GetInternationalVinDecoderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/international-vin-decoder"),
            [],
            [new Param("vin", request.Vin)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1InternationalVinDecoderResponse>(),
            GetInternationalVinDecoderError.Response,
            AuthScheme.Any(_auth.ApiKeyQuery, _auth.X402Payment).OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Vehicle Specifications (VIN decoder)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SpecsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetVehicleSpecsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Decode a 17-character VIN and return detailed vehicle specifications,
    /// including attributes, colors, equipment and warranties. If the VIN
    /// cannot be decoded, an International VIN decoding check is run as a
    /// fallback unless <c>disableIntVINDecoding=1</c> is set.
    /// </remarks>
    public Task<SpecsResponse> GetVehicleSpecs(GetVehicleSpecsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/specs"),
            [],
            [
                new Param("vin", request.Vin),
                new Param("format", request.Format),
                new Param("deepdata", request.Deepdata),
                new Param("disableIntVINDecoding", request.DisableIntVinDecoding),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SpecsResponse>(),
            GetVehicleSpecsError.Response,
            AuthScheme.Any(_auth.ApiKeyQuery, _auth.X402Payment).OrAnonymous(),
            requestOptions,
            cancellationToken);
}
