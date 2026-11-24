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
using ApiVerve.Requests.DataGeneration;

namespace ApiVerve.Api;

public sealed class DataGeneration
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal DataGeneration(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Acronym Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1AcronymgeneratorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AcronymgeneratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate an acronym from a phrase by extracting the first letter of each word
    /// </remarks>
    public Task<V1AcronymgeneratorResponse> Acronymgenerator(AcronymgeneratorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/acronymgenerator"),
            [],
            [new Param("text", request.Text)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1AcronymgeneratorResponse>(),
            AcronymgeneratorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Baby Name Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1BabynamegeneratorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BabynamegeneratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate a baby's first and middle name, based on the provided gender
    /// </remarks>
    public Task<V1BabynamegeneratorResponse> Babynamegenerator(BabynamegeneratorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/babynamegenerator"),
            [],
            [
                new Param("gender", request.Gender),
                new Param("count", request.Count),
                new Param("includeAvatar", request.IncludeAvatar),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1BabynamegeneratorResponse>(),
            BabynamegeneratorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Barcode Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1BarcodegeneratorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BarcodegeneratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Barcode Generator is a simple tool for generating barcodes from data. It returns a URL to the generated image of the barcode.
    /// </remarks>
    public Task<V1BarcodegeneratorResponse> Barcodegenerator(BarcodegeneratorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/barcodegenerator"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1BarcodegeneratorResponse>(),
            BarcodegeneratorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Bingo Card Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1BingocardgeneratorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BingocardgeneratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate random bingo card with HTML and image
    /// </remarks>
    public Task<V1BingocardgeneratorResponse> Bingocardgenerator(BingocardgeneratorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/bingocardgenerator"),
            [],
            [
                new Param("size", request.Size),
                new Param("freeSpace", request.FreeSpace),
                new Param("image", request.Image),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1BingocardgeneratorResponse>(),
            BingocardgeneratorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Boggle Board Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1BoggleboardgeneratorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BoggleboardgeneratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate random Boggle board with HTML and image
    /// </remarks>
    public Task<V1BoggleboardgeneratorResponse> Boggleboardgenerator(BoggleboardgeneratorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/boggleboardgenerator"),
            [],
            [new Param("size", request.Size), new Param("image", request.Image)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1BoggleboardgeneratorResponse>(),
            BoggleboardgeneratorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Captcha Generator
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CaptchageneratorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CaptchageneratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Captcha Generator is a simple tool for generating captchas. It returns a random string of characters that can be used as a captcha.
    /// </remarks>
    public Task<V1CaptchageneratorResponse> Captchagenerator(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/captchagenerator"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CaptchageneratorResponse>(),
            CaptchageneratorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Test Card Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CardgeneratorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CardgeneratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate a list of test card numbers
    /// </remarks>
    public Task<V1CardgeneratorResponse> Cardgenerator(CardgeneratorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/cardgenerator"),
            [],
            [
                new Param("brand", request.Brand),
                new Param("count", request.Count),
                new Param("includeAvatar", request.IncludeAvatar),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CardgeneratorResponse>(),
            CardgeneratorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Chart Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ChartgeneratorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ChartgeneratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate a chart with minimal configuration. Just provide type, labels, and datasets with name/values. Colors are auto-assigned.
    /// </remarks>
    public Task<V1ChartgeneratorResponse> Chartgenerator(ChartgeneratorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/chartgenerator"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1ChartgeneratorResponse>(),
            ChartgeneratorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Color Palette Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ColorpaletteResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ColorpaletteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate a color palette from a single color
    /// </remarks>
    public Task<V1ColorpaletteResponse> Colorpalette(ColorpaletteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/colorpalette"),
            [],
            [
                new Param("color", request.Color),
                new Param("scheme", request.Scheme),
                new Param("variation", request.Variation),
                new Param("count", request.Count),
                new Param("distance", request.Distance),
                new Param("addComplement", request.AddComplement),
                new Param("webSafe", request.WebSafe),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1ColorpaletteResponse>(),
            ColorpaletteError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Comment Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CommentgeneratorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CommentgeneratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate comments for text-based social media posts
    /// </remarks>
    public Task<V1CommentgeneratorResponse> Commentgenerator(CommentgeneratorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/commentgenerator"),
            [],
            [
                new Param("mode", request.Mode),
                new Param("tone", request.Tone),
                new Param("count", request.Count),
                new Param("emojis", request.Emojis),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CommentgeneratorResponse>(),
            CommentgeneratorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Company Name Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CompanynamegeneratorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CompanynamegeneratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate company names based on the specified criteria
    /// </remarks>
    public Task<V1CompanynamegeneratorResponse> Companynamegenerator(CompanynamegeneratorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/companynamegenerator"),
            [],
            [new Param("keyword", request.Keyword), new Param("count", request.Count)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CompanynamegeneratorResponse>(),
            CompanynamegeneratorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Cron Expression Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CrongeneratorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CrongeneratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate cron expressions from natural language schedule descriptions
    /// </remarks>
    public Task<V1CrongeneratorResponse> Crongenerator(CrongeneratorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/crongenerator"),
            [],
            [new Param("schedule", request.Schedule)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CrongeneratorResponse>(),
            CrongeneratorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Cuid Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CuidgeneratorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CuidgeneratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate one or more collision-resistant unique identifiers
    /// </remarks>
    public Task<V1CuidgeneratorResponse> Cuidgenerator(CuidgeneratorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/cuidgenerator"),
            [],
            [new Param("count", request.Count)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CuidgeneratorResponse>(),
            CuidgeneratorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// GUID Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1GuidgeneratorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GuidgeneratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate one or more GUIDs with formatting options
    /// </remarks>
    public Task<V1GuidgeneratorResponse> Guidgenerator(GuidgeneratorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/guidgenerator"),
            [],
            [new Param("count", request.Count), new Param("format", request.Format)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1GuidgeneratorResponse>(),
            GuidgeneratorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Hashtag Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1HashtaggeneratorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="HashtaggeneratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate hashtags from text
    /// </remarks>
    public Task<V1HashtaggeneratorResponse> Hashtaggenerator(HashtaggeneratorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/hashtaggenerator"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1HashtaggeneratorResponse>(),
            HashtaggeneratorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// IMEI Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ImeigeneratorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ImeigeneratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate valid IMEI numbers
    /// </remarks>
    public Task<V1ImeigeneratorResponse> Imeigenerator(ImeigeneratorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/imeigenerator"),
            [],
            [new Param("brand", request.Brand), new Param("count", request.Count)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1ImeigeneratorResponse>(),
            ImeigeneratorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Initialism Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1InitialismgeneratorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="InitialismgeneratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate initialism from phrase
    /// </remarks>
    public Task<V1InitialismgeneratorResponse> Initialismgenerator(InitialismgeneratorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/initialismgenerator"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1InitialismgeneratorResponse>(),
            InitialismgeneratorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// JSON Schema Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1JsonschemageneratorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="JsonschemageneratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate a JSON schema from sample JSON data
    /// </remarks>
    public Task<V1JsonschemageneratorResponse> Jsonschemagenerator(JsonschemageneratorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/jsonschemagenerator"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1JsonschemageneratorResponse>(),
            JsonschemageneratorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Lorem Ipsum Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1LoremipsumgeneratorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="LoremipsumgeneratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate lorem ipsum text with a specified number of sentences or words
    /// </remarks>
    public Task<V1LoremipsumgeneratorResponse> Loremipsumgenerator(LoremipsumgeneratorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/loremipsumgenerator"),
            [],
            [
                new Param("paragraphs", request.Paragraphs),
                new Param("startwithlorem", request.Startwithlorem),
                new Param("maxlength", request.Maxlength),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1LoremipsumgeneratorResponse>(),
            LoremipsumgeneratorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Password Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1PasswordgeneratorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PasswordgeneratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate passwords with a specified length and complexity
    /// </remarks>
    public Task<V1PasswordgeneratorResponse> Passwordgenerator(PasswordgeneratorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/passwordgenerator"),
            [],
            [
                new Param("count", request.Count),
                new Param("length", request.Length),
                new Param("complexity", request.Complexity),
                new Param("type", request.Type),
                new Param("includeNumbers", request.IncludeNumbers),
                new Param("includeSymbols", request.IncludeSymbols),
                new Param("includeUppercase", request.IncludeUppercase),
                new Param("includeLowercase", request.IncludeLowercase),
                new Param("excludeSimilar", request.ExcludeSimilar),
                new Param("excludeAmbiguous", request.ExcludeAmbiguous),
                new Param("mixedCase", request.MixedCase),
                new Param("strict", request.Strict),
                new Param("wordCount", request.WordCount),
                new Param("separator", request.Separator),
                new Param("capitalize", request.Capitalize),
                new Param("analyze", request.Analyze),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1PasswordgeneratorResponse>(),
            PasswordgeneratorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// QR Code Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1QrcodegeneratorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="QrcodegeneratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate a styled QR code with custom colors, logo, and design options
    /// </remarks>
    public Task<V1QrcodegeneratorResponse> Qrcodegenerator(QrcodegeneratorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/qrcodegenerator"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1QrcodegeneratorResponse>(),
            QrcodegeneratorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Random Data Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1RandomgeneratorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RandomgeneratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate random data of various types
    /// </remarks>
    public Task<V1RandomgeneratorResponse> Randomgenerator(RandomgeneratorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/randomgenerator"),
            [],
            [
                new Param("type", request.Type),
                new Param("count", request.Count),
                new Param("includeAvatar", request.IncludeAvatar),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1RandomgeneratorResponse>(),
            RandomgeneratorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Random Identity Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1RandomidentitygeneratorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RandomidentitygeneratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate a random identity with a name, address, and more
    /// </remarks>
    public Task<V1RandomidentitygeneratorResponse> Randomidentitygenerator(RandomidentitygeneratorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/randomidentitygenerator"),
            [],
            [new Param("count", request.Count), new Param("includeAvatar", request.IncludeAvatar)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1RandomidentitygeneratorResponse>(),
            RandomidentitygeneratorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Random User Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1RandomusergeneratorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RandomusergeneratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate random user data
    /// </remarks>
    public Task<V1RandomusergeneratorResponse> Randomusergenerator(RandomusergeneratorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/randomusergenerator"),
            [],
            [new Param("count", request.Count), new Param("includeAvatar", request.IncludeAvatar)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1RandomusergeneratorResponse>(),
            RandomusergeneratorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Random Word
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1RandomwordsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RandomwordsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a random word, including its definition and pronunciation
    /// </remarks>
    public Task<V1RandomwordsResponse> Randomwords(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/randomwords"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1RandomwordsResponse>(),
            RandomwordsError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Short Code Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ShortcodegeneratorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ShortcodegeneratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate short alphanumeric codes with customizable options
    /// </remarks>
    public Task<V1ShortcodegeneratorResponse> Shortcodegenerator(ShortcodegeneratorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/shortcodegenerator"),
            [],
            [
                new Param("count", request.Count),
                new Param("length", request.Length),
                new Param("charset", request.Charset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1ShortcodegeneratorResponse>(),
            ShortcodegeneratorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Sitemap Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1SitemapgeneratorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SitemapgeneratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate an XML sitemap from URLs
    /// </remarks>
    public Task<V1SitemapgeneratorResponse> Sitemapgenerator(SitemapgeneratorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/sitemapgenerator"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1SitemapgeneratorResponse>(),
            SitemapgeneratorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// TOTP Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1TotpgeneratorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TotpgeneratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate time-based one-time password
    /// </remarks>
    public Task<V1TotpgeneratorResponse> Totpgenerator(TotpgeneratorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/totpgenerator"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1TotpgeneratorResponse>(),
            TotpgeneratorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// ULID Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1UlidgeneratorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UlidgeneratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate one or more ULIDs
    /// </remarks>
    public Task<V1UlidgeneratorResponse> Ulidgenerator(UlidgeneratorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/ulidgenerator"),
            [],
            [new Param("count", request.Count), new Param("timestamp", request.Timestamp)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1UlidgeneratorResponse>(),
            UlidgeneratorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// User Agent Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1UseragentgeneratorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UseragentgeneratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate a random user agent string
    /// </remarks>
    public Task<V1UseragentgeneratorResponse> Useragentgenerator(UseragentgeneratorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/useragentgenerator"),
            [],
            [new Param("device", request.Device)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1UseragentgeneratorResponse>(),
            UseragentgeneratorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Username Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1UsernamegeneratorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UsernamegeneratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate usernames based on the specified criteria
    /// </remarks>
    public Task<V1UsernamegeneratorResponse> Usernamegenerator(UsernamegeneratorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/usernamegenerator"),
            [],
            [new Param("email", request.Email), new Param("count", request.Count)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1UsernamegeneratorResponse>(),
            UsernamegeneratorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UUID Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1UuidgeneratorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UuidgeneratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate one or more RFC 4122 version 4 UUIDs
    /// </remarks>
    public Task<V1UuidgeneratorResponse> Uuidgenerator(UuidgeneratorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/uuidgenerator"),
            [],
            [
                new Param("count", request.Count),
                new Param("version", request.Version),
                new Param("format", request.Format),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1UuidgeneratorResponse>(),
            UuidgeneratorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
