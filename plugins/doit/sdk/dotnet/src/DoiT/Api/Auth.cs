using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DoiT.Core;
using DoiT.Core.Authentication;
using DoiT.Core.Exceptions;
using DoiT.Core.Request;
using DoiT.Core.Response;
using DoiT.Errors;
using DoiT.Models;

namespace DoiT.Api;

/// <summary>
/// User authentication.
/// </summary>
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
    /// Validate a user
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ValidateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ValidateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the domain, email, and effective permissions of the current API user. Callable by any authenticated token, regardless of its own permissions.
    /// </remarks>
    public Task<ValidateResponse> Validate(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/auth/v1/validate"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ValidateResponse>(),
            ValidateError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
