using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Airwallex.Core;
using Airwallex.Core.Authentication;
using Airwallex.Core.ErrorResponse;
using Airwallex.Core.Exceptions;
using Airwallex.Core.Models;
using Airwallex.Core.Request;
using Airwallex.Core.Response;

namespace Airwallex.Api;

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
    /// Obtain access token
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Exchange the client_id and api_key (sent as <c>x-client-id</c> and <c>x-api-key</c>
    /// headers) for a short-lived bearer access token used in subsequent calls.
    /// </remarks>
    public Task Login(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/authentication/login"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.BearerAuth, AuthScheme.All(_auth.ClientIdHeader, _auth.ApiKeyHeader)),
            requestOptions,
            cancellationToken);
}
