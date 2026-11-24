using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CarsXe.Core;
using CarsXe.Core.ErrorResponse;
using CarsXe.Core.Exceptions;
using CarsXe.Core.Models;
using CarsXe.Core.Request;
using CarsXe.Core.Response;
using CarsXe.Requests.Auth;

namespace CarsXe.Api;

public sealed class Auth
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Auth(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Validate the API key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<object> ValidateKey(ValidateKeyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/auth/validate"),
            [],
            [new Param("key", request.Key)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            _auth.ApiKeyQuery,
            requestOptions,
            cancellationToken);
}
