using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Celestia.Core;
using Celestia.Core.Authentication;
using Celestia.Core.ErrorResponse;
using Celestia.Core.Exceptions;
using Celestia.Core.Models;
using Celestia.Core.Request;
using Celestia.Core.Response;
using Celestia.Errors;
using Celestia.Models;

namespace Celestia.Api;

public sealed class HealthApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal HealthApi(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Check website liveness
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Health"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWebsiteHealthError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Confirms that the Next.js runtime can answer requests. Does not check external services. No authentication required.
    /// </remarks>
    public Task<Health> GetWebsiteHealth(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCelestiaWebsiteContactApi("/api/health/"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Health>(),
            GetWebsiteHealthError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Check website liveness without a body
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The same runtime liveness signal as GET, with an empty response body.
    /// </remarks>
    public Task HeadWebsiteHealth(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCelestiaWebsiteContactApi("/api/health/"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Head,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
