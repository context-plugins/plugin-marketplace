using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using BrowserStack.Core;
using BrowserStack.Core.ErrorResponse;
using BrowserStack.Core.Exceptions;
using BrowserStack.Core.Request;
using BrowserStack.Core.Response;
using BrowserStack.Models;

namespace BrowserStack.Api;

/// <summary>
/// Operations describing the current Automate subscription plan and capacity.
/// </summary>
public sealed class PlanApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal PlanApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get plan details
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Plan"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns details of the current Automate subscription plan including parallel session capacity and current usage.
    /// </remarks>
    public Task<Plan> GetPlan(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/automate/plan.json"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Plan>(),
            RawErrorResponse.Instance,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
