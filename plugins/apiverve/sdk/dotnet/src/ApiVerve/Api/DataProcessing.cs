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
using ApiVerve.Requests.DataProcessing;

namespace ApiVerve.Api;

public sealed class DataProcessing
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal DataProcessing(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Cloud Counter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CounterResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CounterError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the current value of the counter
    /// </remarks>
    public Task<V1CounterResponse> Counter(CounterRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/counter"),
            [],
            [new Param("id", request.Id)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CounterResponse>(),
            CounterError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// HTML to Text
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1HtmltotextResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="HtmltotextError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert HTML to text
    /// </remarks>
    public Task<V1HtmltotextResponse> Htmltotext(HtmltotextRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/htmltotext"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1HtmltotextResponse>(),
            HtmltotextError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Metadata Extractor
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1MetadataextractorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetadataextractorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Extract metadata from a web page
    /// </remarks>
    public Task<V1MetadataextractorResponse> Metadataextractor(MetadataextractorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/metadataextractor"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1MetadataextractorResponse>(),
            MetadataextractorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Morse Code
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1MorsecodeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MorsecodeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Morse Code is a simple tool for encoding and decoding Morse code. It returns the encoded or decoded Morse code.
    /// </remarks>
    public Task<V1MorsecodeResponse> Morsecode(MorsecodeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/morsecode"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1MorsecodeResponse>(),
            MorsecodeError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// MurmurHash
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1MurmurhashResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MurmurhashError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate a MurmurHash3 hash
    /// </remarks>
    public Task<V1MurmurhashResponse> Murmurhash(MurmurhashRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/murmurhash"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1MurmurhashResponse>(),
            MurmurhashError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// SQL Explainer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1SqlexplainerResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SqlexplainerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a plain English explanation of a SQL query
    /// </remarks>
    public Task<V1SqlexplainerResponse> Sqlexplainer(SqlexplainerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/sqlexplainer"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1SqlexplainerResponse>(),
            SqlexplainerError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
