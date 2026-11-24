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
using ApiVerve.Requests.DataConversion;

namespace ApiVerve.Api;

public sealed class DataConversion
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal DataConversion(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// ASCII85 Encoder
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1Ascii85EncoderResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Ascii85EncoderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Encode text using ASCII85 (Base85) encoding
    /// </remarks>
    public Task<V1Ascii85EncoderResponse> Ascii85Encoder(Ascii85EncoderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/ascii85encoder"),
            [],
            [new Param("text", request.Text), new Param("action", request.Action), new Param("format", request.Format)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1Ascii85EncoderResponse>(),
            Ascii85EncoderError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Base64 Encoder/Decoder
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1Base64Response"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Base64Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Encode text to Base64 format
    /// </remarks>
    public Task<V1Base64Response> Base64(Base64Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/base64"),
            [],
            [new Param("text", request.Text), new Param("action", request.Action)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1Base64Response>(),
            Base64Error.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Color Converter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ColorconverterResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ColorconverterError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert a color to a different format
    /// </remarks>
    public Task<V1ColorconverterResponse> Colorconverter(ColorconverterRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/colorconverter"),
            [],
            [new Param("hex", request.Hex)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1ColorconverterResponse>(),
            ColorconverterError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// CSV to JSON Converter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CsvtojsonResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CsvtojsonError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert CSV data to JSON format with custom delimiter support
    /// </remarks>
    public Task<V1CsvtojsonResponse> Csvtojson(CsvtojsonRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/csvtojson"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1CsvtojsonResponse>(),
            CsvtojsonError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// File Size Formatter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1FilesizeformatterResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FilesizeformatterError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert bytes to human-readable file size
    /// </remarks>
    public Task<V1FilesizeformatterResponse> Filesizeformatter(FilesizeformatterRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/filesizeformatter"),
            [],
            [
                new Param("bytes", request.Bytes),
                new Param("unit", request.Unit),
                new Param("precision", request.Precision),
                new Param("standard", request.Standard),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1FilesizeformatterResponse>(),
            FilesizeformatterError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// HTML Entities Encoder/Decoder
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1HtmlentitiesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="HtmlentitiesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Encode HTML special characters to entities for XSS prevention
    /// </remarks>
    public Task<V1HtmlentitiesResponse> Htmlentities(HtmlentitiesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/htmlentities"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1HtmlentitiesResponse>(),
            HtmlentitiesError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// HTML to Image
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1HtmltoimageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="HtmltoimageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert HTML code to image with customizable dimensions
    /// </remarks>
    public Task<V1HtmltoimageResponse> Htmltoimage(HtmltoimageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/htmltoimage"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1HtmltoimageResponse>(),
            HtmltoimageError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// JSON to CSV Converter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1JsontocsvResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="JsontocsvError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert JSON array data to CSV format
    /// </remarks>
    public Task<V1JsontocsvResponse> Jsontocsv(JsontocsvRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/jsontocsv"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1JsontocsvResponse>(),
            JsontocsvError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// JSON to JSONP
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1JsontojsonpResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="JsontojsonpError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// JSON to JSONP is a simple tool for converting JSON data into JSONP format. It returns the converted JSONP data.
    /// </remarks>
    public Task<V1JsontojsonpResponse> Jsontojsonp(JsontojsonpRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/jsontojsonp"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1JsontojsonpResponse>(),
            JsontojsonpError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// JWT Decoder
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1JwtdecoderResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="JwtdecoderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Decode JWT token without verification
    /// </remarks>
    public Task<V1JwtdecoderResponse> Jwtdecoder(JwtdecoderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/jwtdecoder"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1JwtdecoderResponse>(),
            JwtdecoderError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Markdown Table Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1MarkdowntableResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MarkdowntableError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert data to a formatted markdown table
    /// </remarks>
    public Task<V1MarkdowntableResponse> Markdowntable(MarkdowntableRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/markdowntable"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1MarkdowntableResponse>(),
            MarkdowntableError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Markdown to HTML
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1MarkdowntohtmlResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MarkdowntohtmlError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert markdown text to HTML
    /// </remarks>
    public Task<V1MarkdowntohtmlResponse> Markdowntohtml(MarkdowntohtmlRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/markdowntohtml"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1MarkdowntohtmlResponse>(),
            MarkdowntohtmlError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Markdown to Image
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1MarkdowntoimageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MarkdowntoimageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert markdown text to image file
    /// </remarks>
    public Task<V1MarkdowntoimageResponse> Markdowntoimage(MarkdowntoimageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/markdowntoimage"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1MarkdowntoimageResponse>(),
            MarkdowntoimageError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Markdown to PDF
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1MarkdowntopdfResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MarkdowntopdfError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert markdown text to PDF document
    /// </remarks>
    public Task<V1MarkdowntopdfResponse> Markdowntopdf(MarkdowntopdfRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/markdowntopdf"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1MarkdowntopdfResponse>(),
            MarkdowntopdfError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Math Calculator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1MathResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MathError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Perform basic math operations: add, subtract, multiply, divide, power, modulo
    /// </remarks>
    public Task<V1MathResponse> Math(MathRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/math"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1MathResponse>(),
            MathError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Meeting Time Converter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1MeetingtimeconverterResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MeetingtimeconverterError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert meeting time between timezones
    /// </remarks>
    public Task<V1MeetingtimeconverterResponse> Meetingtimeconverter(MeetingtimeconverterRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/meetingtimeconverter"),
            [],
            [
                new Param("time", request.Time),
                new Param("fromTimezone", request.FromTimezone),
                new Param("toTimezone", request.ToTimezone),
                new Param("date", request.Date),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1MeetingtimeconverterResponse>(),
            MeetingtimeconverterError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Number Base Converter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1NumberbaseconverterResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="NumberbaseconverterError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert a number from one base to another
    /// </remarks>
    public Task<V1NumberbaseconverterResponse> Numberbaseconverter(NumberbaseconverterRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/numberbaseconverter"),
            [],
            [new Param("value", request.Value), new Param("from", request.From), new Param("to", request.To)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1NumberbaseconverterResponse>(),
            NumberbaseconverterError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Number to Words
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1NumbertowordsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="NumbertowordsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert a number to words, including each word and the orginal equivalent
    /// </remarks>
    public Task<V1NumbertowordsResponse> Numbertowords(NumbertowordsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/numbertowords"),
            [],
            [new Param("number", request.Number)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1NumbertowordsResponse>(),
            NumbertowordsError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Placeholder Text Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1PlaceholdertextResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PlaceholdertextError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate placeholder text in various styles
    /// </remarks>
    public Task<V1PlaceholdertextResponse> Placeholdertext(PlaceholdertextRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/placeholdertext"),
            [],
            [
                new Param("style", request.Style),
                new Param("paragraphs", request.Paragraphs),
                new Param("sentences", request.Sentences),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1PlaceholdertextResponse>(),
            PlaceholdertextError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Punycode Converter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1PunycodeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PunycodeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Encode Unicode text to Punycode (ASCII-compatible encoding)
    /// </remarks>
    public Task<V1PunycodeResponse> Punycode(PunycodeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/punycode"),
            [],
            [new Param("text", request.Text), new Param("mode", request.Mode)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1PunycodeResponse>(),
            PunycodeError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Query String Builder
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1QuerystringbuilderResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="QuerystringbuilderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Build URL query string from JSON parameters
    /// </remarks>
    public Task<V1QuerystringbuilderResponse> Querystringbuilder(QuerystringbuilderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/querystringbuilder"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1QuerystringbuilderResponse>(),
            QuerystringbuilderError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Relative Time Formatter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1RelativetimeformatterResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RelativetimeformatterError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert Unix timestamp to relative time format
    /// </remarks>
    public Task<V1RelativetimeformatterResponse> Relativetimeformatter(RelativetimeformatterRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/relativetimeformatter"),
            [],
            [
                new Param("timestamp", request.Timestamp),
                new Param("reference", request.Reference),
                new Param("style", request.Style),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1RelativetimeformatterResponse>(),
            RelativetimeformatterError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Roman Numeral Converter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1RomanconverterResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RomanconverterError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert a number to Roman numerals
    /// </remarks>
    public Task<V1RomanconverterResponse> Romanconverter(RomanconverterRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/romanconverter"),
            [],
            [new Param("number", request.Number)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1RomanconverterResponse>(),
            RomanconverterError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Text to Color
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1TexttocolorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TexttocolorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate a color from text
    /// </remarks>
    public Task<V1TexttocolorResponse> Texttocolor(TexttocolorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/texttocolor"),
            [],
            [new Param("color", request.Color)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1TexttocolorResponse>(),
            TexttocolorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Unicode Escape/Unescape
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1UnicodeescapeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UnicodeescapeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert characters to Unicode escape sequences (\uXXXX format)
    /// </remarks>
    public Task<V1UnicodeescapeResponse> Unicodeescape(UnicodeescapeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/unicodeescape"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1UnicodeescapeResponse>(),
            UnicodeescapeError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Unit Converter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1UnitconverterResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UnitconverterError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert units from one to another
    /// </remarks>
    public Task<V1UnitconverterResponse> Unitconverter(UnitconverterRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/unitconverter"),
            [],
            [new Param("value", request.Value), new Param("from", request.From), new Param("to", request.To)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1UnitconverterResponse>(),
            UnitconverterError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Unix Timestamp Converter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1UnixtimestampResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UnixtimestampError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert Unix timestamp to human-readable date
    /// </remarks>
    public Task<V1UnixtimestampResponse> Unixtimestamp(UnixtimestampRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/unixtimestamp"),
            [],
            [new Param("timestamp", request.Timestamp), new Param("format", request.Format)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1UnixtimestampResponse>(),
            UnixtimestampError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// URL Encoder/Decoder
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1UrlencodeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UrlencodeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Encode text to URL-safe format (percent-encoding)
    /// </remarks>
    public Task<V1UrlencodeResponse> Urlencode(UrlencodeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/urlencode"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1UrlencodeResponse>(),
            UrlencodeError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// URL to Markdown
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1UrltomarkdownResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UrltomarkdownError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert a webpage URL to Markdown format
    /// </remarks>
    public Task<V1UrltomarkdownResponse> Urltomarkdown(UrltomarkdownRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/urltomarkdown"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1UrltomarkdownResponse>(),
            UrltomarkdownError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Variable Name Converter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1VariablenameconverterResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="VariablenameconverterError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert variable names between naming conventions
    /// </remarks>
    public Task<V1VariablenameconverterResponse> Variablenameconverter(VariablenameconverterRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/variablenameconverter"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1VariablenameconverterResponse>(),
            VariablenameconverterError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Website to Text
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1WebsitetotextResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WebsitetotextError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert a given webiste content to simple text
    /// </remarks>
    public Task<V1WebsitetotextResponse> Websitetotext(WebsitetotextRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/websitetotext"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1WebsitetotextResponse>(),
            WebsitetotextError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Words to Numbers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1WordstonumbersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WordstonumbersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert words to numbers, including each word and the orginal equivalent
    /// </remarks>
    public Task<V1WordstonumbersResponse> Wordstonumbers(WordstonumbersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/wordstonumbers"),
            [],
            [new Param("words", request.Words)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1WordstonumbersResponse>(),
            WordstonumbersError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// XML to JSON
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1XmltojsonResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="XmltojsonError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert XML to JSON
    /// </remarks>
    public Task<V1XmltojsonResponse> Xmltojson(XmltojsonRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/xmltojson"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1XmltojsonResponse>(),
            XmltojsonError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
