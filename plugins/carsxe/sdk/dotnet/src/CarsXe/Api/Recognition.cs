using System;
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
using CarsXe.Requests.Recognition;

namespace CarsXe.Api;

/// <summary>
/// Plate and VIN recognition from images
/// </summary>
public sealed class Recognition
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Recognition(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Plate Image Recognition
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PlaterecognitionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RecognizePlateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Extract a license plate number from an image of a vehicle. Send a JSON body containing an <c>image_url</c> field with a URL to the image.
    /// </remarks>
    public Task<PlaterecognitionResponse> RecognizePlate(RecognizePlateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/platerecognition"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PlaterecognitionResponse>(),
            RecognizePlateError.Response,
            AuthScheme.Any(_auth.ApiKeyQuery, _auth.X402Payment).OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// VIN OCR
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1VinocrResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="VinOcrError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Extract a VIN from a photo. Send a JSON body containing an <c>image_url</c> field with either a URL to an image or a base64-encoded image string.
    /// </remarks>
    public Task<V1VinocrResponse> VinOcr(VinOcrRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/vinocr"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1VinocrResponse>(),
            VinOcrError.Response,
            AuthScheme.Any(_auth.ApiKeyQuery, _auth.X402Payment).OrAnonymous(),
            requestOptions,
            cancellationToken);
}
