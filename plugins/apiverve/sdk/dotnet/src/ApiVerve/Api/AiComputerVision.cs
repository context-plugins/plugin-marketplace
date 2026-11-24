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
using ApiVerve.Requests.AiComputerVision;

namespace ApiVerve.Api;

public sealed class AiComputerVision
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AiComputerVision(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Article Ideas Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ArticleideasResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ArticleideasError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate article ideas based on a topic using Artificial Intelligence
    /// </remarks>
    public Task<V1ArticleideasResponse> Articleideas(ArticleideasRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/articleideas"),
            [],
            [new Param("topic", request.Topic)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1ArticleideasResponse>(),
            ArticleideasError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Code Detector
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CodedetectorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CodedetectorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Code Detector is a simple tool for detecting the language of code in text. It returns details such as extension, language, family, and more.
    /// </remarks>
    public Task<V1CodedetectorResponse> Codedetector(CodedetectorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/codedetector"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1CodedetectorResponse>(),
            CodedetectorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Image Caption
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ImagecaptionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ImagecaptionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Image Caption is an AI-powered tool that generates descriptive captions for images. Simply upload an image and receive a natural language description of its contents.
    /// </remarks>
    public Task<V1ImagecaptionResponse> Imagecaption(ImagecaptionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/imagecaption"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormRequest.Create(new MultipartParam("image", request.Image)),
            JsonResponse.Create<V1ImagecaptionResponse>(),
            ImagecaptionError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Image to Text
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ImagetotextResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ImagetotextError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Extract text from an uploaded image using OCR
    /// </remarks>
    public Task<V1ImagetotextResponse> Imagetotext(ImagetotextRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/imagetotext"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormRequest.Create(new MultipartParam("image", request.Image)),
            JsonResponse.Create<V1ImagetotextResponse>(),
            ImagetotextError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Language Detector
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1LanguagedetectorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="LanguagedetectorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Detect the language of a body of text
    /// </remarks>
    public Task<V1LanguagedetectorResponse> Languagedetector(LanguagedetectorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/languagedetector"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1LanguagedetectorResponse>(),
            LanguagedetectorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Sentiment Analysis
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1SentimentanalysisResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SentimentanalysisError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Analyze the sentiment of a body of text
    /// </remarks>
    public Task<V1SentimentanalysisResponse> Sentimentanalysis(SentimentanalysisRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/sentimentanalysis"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1SentimentanalysisResponse>(),
            SentimentanalysisError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
