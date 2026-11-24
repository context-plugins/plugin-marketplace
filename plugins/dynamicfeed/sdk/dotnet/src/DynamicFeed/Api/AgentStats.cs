using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DynamicFeed.Core;
using DynamicFeed.Core.Authentication;
using DynamicFeed.Core.ErrorResponse;
using DynamicFeed.Core.Exceptions;
using DynamicFeed.Core.Request;
using DynamicFeed.Core.Response;

namespace DynamicFeed.Api;

public sealed class AgentStats
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal AgentStats(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Agent Stats
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Public, no-PII view of the agent/machine traffic Dynamic Feed serves: tool calls
    /// (today / 7d / 30d / all-time) and the distinct agent client types seen (Claude, ChatGPT,
    /// Cursor, LangChain, MCP clients, ...). Counts only — no IPs, no identities. Powers the public
    /// 'agents tapping us' counter on /agents. The response itself is Ed25519-signed.
    /// </remarks>
    public Task<object> AgentStatsV1AgentStatsGet(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/agent-stats"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
