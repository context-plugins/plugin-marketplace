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
using CarsXe.Requests.Images;

namespace CarsXe.Api;

/// <summary>
/// Vehicle images by make/model
/// </summary>
public sealed class Images
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Images(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Vehicle Images
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ImagesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetVehicleImagesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve images of a vehicle by make, model and other filters.
    /// </remarks>
    public Task<ImagesResponse> GetVehicleImages(GetVehicleImagesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/images"),
            [],
            [
                new Param("make", request.Make),
                new Param("model", request.Model),
                new Param("year", request.Year),
                new Param("trim", request.Trim),
                new Param("color", request.Color),
                new Param("transparent", request.Transparent),
                new Param("angle", request.Angle),
                new Param("photoType", request.PhotoType),
                new Param("size", request.Size),
                new Param("license", request.License),
                new Param("format", request.Format),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ImagesResponse>(),
            GetVehicleImagesError.Response,
            AuthScheme.Any(_auth.ApiKeyQuery, _auth.X402Payment).OrAnonymous(),
            requestOptions,
            cancellationToken);
}
