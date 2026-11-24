using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using BrowserStack.Core;
using BrowserStack.Core.ErrorResponse;
using BrowserStack.Core.Exceptions;
using BrowserStack.Core.Models;
using BrowserStack.Core.Request;
using BrowserStack.Core.Response;
using BrowserStack.Models;

namespace BrowserStack.Api;

/// <summary>
/// Operations on Automate access keys.
/// </summary>
public sealed class AccessKey
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AccessKey(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Recycle access key
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AutomateRecycleKeyJsonResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generates a new access key, invalidating the old one.
    /// </remarks>
    public Task<AutomateRecycleKeyJsonResponse> RecycleAccessKey(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/automate/recycle_key.json"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            JsonResponse.Create<AutomateRecycleKeyJsonResponse>(),
            RawErrorResponse.Instance,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
