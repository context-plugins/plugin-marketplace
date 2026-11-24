using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Perigon.Core;
using Perigon.Core.Exceptions;
using Perigon.Core.Models;
using Perigon.Core.Request;
using Perigon.Core.Response;
using Perigon.Errors;
using Perigon.Models;
using Perigon.Requests.Utilities;

namespace Perigon.Api;

public sealed class Utilities
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Utilities(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Limits
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="LimitsResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetLimitsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the authenticated account's current API usage and the limits that apply to it: the number of requests made in the current tracking period, the request limit, the per-second rate limit, and when the counter resets.
    /// <para>
    /// Optionally, pass one or more API keys via the <c>apiKeys</c> parameter to check their status. For each supplied key the response reports whether it is <c>valid</c> (exists and belongs to your account), <c>enabled</c> (a disabled key is 'off'), and whether its <c>subscription</c> is active.
    /// </para>
    /// <para>
    /// This endpoint is authenticated with your API key but is quota-exempt: calling it does <b>not</b> count against your monthly request quota and is not subject to rate limiting. It is intended for liveness/health probes and external dashboards that need to check whether an API key and subscription are active without consuming usage.
    /// </para>
    /// </remarks>
    public Task<LimitsResult> GetLimits(GetLimitsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/limits"),
            [],
            [new Param("apiKeys", request.ApiKeys)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<LimitsResult>(),
            GetLimitsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
