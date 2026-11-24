using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using MrScraper.Core;
using MrScraper.Core.Authentication;
using MrScraper.Core.ErrorResponse;
using MrScraper.Core.Exceptions;
using MrScraper.Core.Models;
using MrScraper.Core.Request;
using MrScraper.Core.Response;
using MrScraper.Requests.Gateway;

namespace MrScraper.Api;

public sealed class Gateway
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Gateway(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<object> GetRoot(GetRootRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultScraperServiceGatewayAuthApi("/"),
            [],
            [
                new Param("url", request.Url),
                new Param("token", request.Token),
                new Param("async", request.Async),
                new Param("beta", request.Beta),
                new Param("detectedJson", request.DetectedJson),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.ApiKey, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<object> PostRoot(PostRootRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultScraperServiceGatewayAuthApi("/"),
            [],
            [new Param("async", request.Async), new Param("beta", request.Beta)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.ApiKey, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
