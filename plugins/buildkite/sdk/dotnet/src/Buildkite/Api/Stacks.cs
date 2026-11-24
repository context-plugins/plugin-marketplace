using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Buildkite.Core;
using Buildkite.Core.ErrorResponse;
using Buildkite.Core.Exceptions;
using Buildkite.Core.Request;
using Buildkite.Core.Response;

namespace Buildkite.Api;

public sealed class Stacks
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Stacks(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Stack Configuration For Self-Hosted Queues
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the desired stack configuration for a self-hosted queue's controller process. The controller watches the queue for jobs and runs agents on demand.
    /// </remarks>
    public Task GetStacks(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBuildkiteAgentMetricsApi("/stacks"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
