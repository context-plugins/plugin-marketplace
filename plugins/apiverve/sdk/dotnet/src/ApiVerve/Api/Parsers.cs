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
using ApiVerve.Requests.Parsers;

namespace ApiVerve.Api;

public sealed class Parsers
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Parsers(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Human Name Parser
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1HumannameparserResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="HumannameparserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Parse a human name into its components
    /// </remarks>
    public Task<V1HumannameparserResponse> Humannameparser(HumannameparserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/humannameparser"),
            [],
            [new Param("name", request.Name)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1HumannameparserResponse>(),
            HumannameparserError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// RSS to JSON
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1RsstojsonResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RsstojsonError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// RSS to JSON is a simple tool for converting RSS feeds into JSON format. It returns the RSS feed in JSON format.
    /// </remarks>
    public Task<V1RsstojsonResponse> Rsstojson(RsstojsonRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/rsstojson"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1RsstojsonResponse>(),
            RsstojsonError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Street Address Parser
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1StreetaddressparserResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StreetaddressparserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Parse the components of a street address
    /// </remarks>
    public Task<V1StreetaddressparserResponse> Streetaddressparser(StreetaddressparserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/streetaddressparser"),
            [],
            [new Param("address", request.Address)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1StreetaddressparserResponse>(),
            StreetaddressparserError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// User Agent Parser
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1UseragentparserResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UseragentparserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Parse the user agent string to get browser, OS, and more
    /// </remarks>
    public Task<V1UseragentparserResponse> Useragentparser(UseragentparserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/useragentparser"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1UseragentparserResponse>(),
            UseragentparserError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
