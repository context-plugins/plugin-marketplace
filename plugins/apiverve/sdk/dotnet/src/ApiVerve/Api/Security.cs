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
using ApiVerve.Requests.Security;

namespace ApiVerve.Api;

public sealed class Security
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Security(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// CSR Parser
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CsrparserResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CsrparserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Parse a Certificate Signing Request and extract information
    /// </remarks>
    public Task<V1CsrparserResponse> Csrparser(CsrparserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/csrparser"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1CsrparserResponse>(),
            CsrparserError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// DANE Record Validator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1DanevalidatorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DanevalidatorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Validate a DANE/TLSA DNS record
    /// </remarks>
    public Task<V1DanevalidatorResponse> Danevalidator(DanevalidatorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/danevalidator"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1DanevalidatorResponse>(),
            DanevalidatorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Hash Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1HashgeneratorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="HashgeneratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate cryptographic hashes using multiple algorithms
    /// </remarks>
    public Task<V1HashgeneratorResponse> Hashgenerator(HashgeneratorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/hashgenerator"),
            [],
            [new Param("text", request.Text), new Param("algorithms", request.Algorithms)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1HashgeneratorResponse>(),
            HashgeneratorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// HMAC Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1HmacResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="HmacError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate an HMAC signature for a message
    /// </remarks>
    public Task<V1HmacResponse> Hmac(HmacRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/hmac"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1HmacResponse>(),
            HmacError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
