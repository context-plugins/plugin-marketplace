using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Semrush.Core;
using Semrush.Core.Authentication;
using Semrush.Core.Exceptions;
using Semrush.Core.Models;
using Semrush.Core.Request;
using Semrush.Core.Response;
using Semrush.Errors;
using Semrush.Models;
using Semrush.Requests.JwtIssuer;

namespace Semrush.Api;

public sealed class JwtIssuer
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal JwtIssuer(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Semrush Request API access token
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IssuerJwtResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostAppCenterApiV2JwtTokenError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves JWT for accessing Semrush API.
    /// Documentation
    /// </remarks>
    public Task<IssuerJwtResponse> PostAppCenterApiV2JwtToken(PostAppCenterApiV2JwtTokenRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/app-center-api/v2/jwt-token/"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IssuerJwtResponse>(),
            PostAppCenterApiV2JwtTokenError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
