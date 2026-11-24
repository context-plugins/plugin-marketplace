using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using ApiVerve.Core;
using ApiVerve.Core.Exceptions;
using ApiVerve.Core.Models;
using ApiVerve.Core.Request;
using ApiVerve.Core.Response;
using ApiVerve.Errors;
using ApiVerve.Models;
using ApiVerve.Requests.Images;

namespace ApiVerve.Api;

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
    /// Face Detector
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1FacedetectResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FacedetectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Detect all faces in an uploaded image and return their bounding box coordinates
    /// </remarks>
    public Task<V1FacedetectResponse> Facedetect(FacedetectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/facedetect"),
            [],
            [new Param("confidence", request.Confidence)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormRequest.Create(new MultipartParam("image", request.Image)),
            JsonResponse.Create<V1FacedetectResponse>(),
            FacedetectError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// HEIC Converter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1HeicconverterResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="HeicconverterError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert a HEIC/HEIF image to another format. Upload an image file to convert.
    /// </remarks>
    public Task<V1HeicconverterResponse> Heicconverter(HeicconverterRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/heicconverter"),
            [],
            [
                new Param("outputFormat", request.OutputFormat),
                new Param("quality", request.Quality),
                new Param("maxWidth", request.MaxWidth),
                new Param("maxHeight", request.MaxHeight),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormRequest.Create(new MultipartParam("image", request.Image)),
            JsonResponse.Create<V1HeicconverterResponse>(),
            HeicconverterError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Image Converter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ImageconverterResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ImageconverterError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert an image from one format to another. Upload an image file to convert.
    /// </remarks>
    public Task<V1ImageconverterResponse> Imageconverter(ImageconverterRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/imageconverter"),
            [],
            [
                new Param("outputFormat", request.OutputFormat),
                new Param("quality", request.Quality),
                new Param("maxWidth", request.MaxWidth),
                new Param("maxHeight", request.MaxHeight),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormRequest.Create(new MultipartParam("image", request.Image)),
            JsonResponse.Create<V1ImageconverterResponse>(),
            ImageconverterError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// NSFW Image Detector
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1NsfwimagedetectorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="NsfwimagedetectorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// NSFW Detector is a simple tool for detecting NSFW content. It returns a boolean
    /// </remarks>
    public Task<V1NsfwimagedetectorResponse> Nsfwimagedetector(NsfwimagedetectorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/nsfwimagedetector"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormRequest.Create(new MultipartParam("image", request.Image)),
            JsonResponse.Create<V1NsfwimagedetectorResponse>(),
            NsfwimagedetectorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// QR Code Reader
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1QrcodereaderResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="QrcodereaderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// QR Code Reader is a powerful tool that extracts text and data from QR codes in images. Simply provide an image URL or upload an image containing a QR code to decode its contents.
    /// </remarks>
    public Task<V1QrcodereaderResponse> Qrcodereader(QrcodereaderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/qrcodereader"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormRequest.Create(new MultipartParam("image", request.Image)),
            JsonResponse.Create<V1QrcodereaderResponse>(),
            QrcodereaderError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// SVG Converter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1SvgconverterResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SvgconverterError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert an SVG vector image to a raster format. Upload an SVG file to convert.
    /// </remarks>
    public Task<V1SvgconverterResponse> Svgconverter(SvgconverterRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/svgconverter"),
            [],
            [
                new Param("outputFormat", request.OutputFormat),
                new Param("quality", request.Quality),
                new Param("maxWidth", request.MaxWidth),
                new Param("maxHeight", request.MaxHeight),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormRequest.Create(new MultipartParam("image", request.Image)),
            JsonResponse.Create<V1SvgconverterResponse>(),
            SvgconverterError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// WebP Converter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1WebpconverterResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WebpconverterError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert a WebP image to another format, or convert other formats to WebP. Upload an image file to convert.
    /// </remarks>
    public Task<V1WebpconverterResponse> Webpconverter(WebpconverterRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/webpconverter"),
            [],
            [
                new Param("outputFormat", request.OutputFormat),
                new Param("quality", request.Quality),
                new Param("maxWidth", request.MaxWidth),
                new Param("maxHeight", request.MaxHeight),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormRequest.Create(new MultipartParam("image", request.Image)),
            JsonResponse.Create<V1WebpconverterResponse>(),
            WebpconverterError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
