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
using CarsXe.Requests.PlateDecoder;

namespace CarsXe.Api;

/// <summary>
/// Decode license plates into vehicle data
/// </summary>
public sealed class PlateDecoder
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal PlateDecoder(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// License Plate Decoder (v1)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PlatedecoderResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DecodePlateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Decode a license plate into vehicle data. Internally proxies to the v2
    /// plate decoder. The <c>state</c> parameter accepts a two-letter US state
    /// code, Australian state, or one of the legacy country codes <c>BR</c>, <c>UK</c>,
    /// <c>IR</c>, <c>IT</c>, <c>ES</c>, <c>IND</c>, <c>MX</c>, <c>NZ</c>.
    /// </remarks>
    public Task<PlatedecoderResponse> DecodePlate(DecodePlateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/platedecoder"),
            [],
            [
                new Param("plate", request.Plate),
                new Param("state", request.State),
                new Param("country", request.Country),
                new Param("format", request.Format),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PlatedecoderResponse>(),
            DecodePlateError.Response,
            AuthScheme.Any(_auth.ApiKeyQuery, _auth.X402Payment).OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// License Plate Decoder (v2)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V2PlatedecoderResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DecodePlateV2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Decode a license plate into vehicle data across 60+ supported
    /// countries. <c>country</c> is an ISO 3166-1 alpha-2 code (optional for <c>US</c>).
    /// <c>state</c> is required for <c>US</c>, <c>AU</c> and <c>CA</c>. For Pakistan (<c>PK</c>) a
    /// <c>district</c> is also required for the Khyber-Pakhtunkhwa province.
    /// <para>
    /// For Spain (<c>ES</c>), set <c>require_vin=true</c> to always include a VIN.
    /// Additional charges apply: when <c>require_vin=true</c>, the request is
    /// billed 2x and usage counts 2x.
    /// </para>
    /// </remarks>
    public Task<V2PlatedecoderResponse> DecodePlateV2(DecodePlateV2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/platedecoder"),
            [],
            [
                new Param("plate", request.Plate),
                new Param("country", request.Country),
                new Param("state", request.State),
                new Param("district", request.District),
                new Param("require_vin", request.RequireVin),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V2PlatedecoderResponse>(),
            DecodePlateV2Error.Response,
            AuthScheme.Any(_auth.ApiKeyQuery, _auth.X402Payment).OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// US Vehicle Plate Decoder
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1UsPlatedecoderResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DecodeUsPlateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Look up a US vehicle by license plate number and state. Returns the
    /// VIN, year, make, model, trim, engine, body style, transmission, drive
    /// type, fuel type and exterior color. Optionally decodes the VIN to
    /// include the full vehicle specifications object. Accepts plates from all
    /// 50 US states, the District of Columbia (DC) and Puerto Rico (PR).
    /// <para>
    /// This endpoint is <b>not</b> available on the free Sandbox tier.
    /// </para>
    /// </remarks>
    public Task<V1UsPlatedecoderResponse> DecodeUsPlate(DecodeUsPlateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/us-platedecoder"),
            [],
            [
                new Param("plate", request.Plate),
                new Param("state", request.State),
                new Param("decodeVIN", request.DecodeVin),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1UsPlatedecoderResponse>(),
            DecodeUsPlateError.Response,
            AuthScheme.Any(_auth.ApiKeyQuery, _auth.X402Payment).OrAnonymous(),
            requestOptions,
            cancellationToken);
}
