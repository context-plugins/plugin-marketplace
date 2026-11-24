using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Basiq.Core;
using Basiq.Core.Exceptions;
using Basiq.Core.Models;
using Basiq.Core.Request;
using Basiq.Core.Response;
using Basiq.Errors;
using Basiq.Models;
using Basiq.Requests.AuthenticationApi;

namespace Basiq.Api;

public sealed class AuthenticationApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AuthenticationApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Generate an auth token
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TokenResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostTokenError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this endpoint to retrieve a token that will be passed as authorization header for Basiq API
    /// </remarks>
    public Task<TokenResponse> PostToken(PostTokenRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/token"),
            [],
            [],
            [
                new HeaderParam("basiq-version", request.BasiqVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            FormUrlEncodedRequest.Create(new Param("scope", request.Scope), new Param("userId", request.UserId)),
            JsonResponse.Create<TokenResponse>(),
            PostTokenError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
