using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AgentReady.Core;
using AgentReady.Core.Authentication;
using AgentReady.Core.Exceptions;
using AgentReady.Core.Models;
using AgentReady.Core.Request;
using AgentReady.Core.Response;
using AgentReady.Errors;
using AgentReady.Models;
using AgentReady.Requests.Mcp;

namespace AgentReady.Api;

public sealed class Mcp
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Mcp(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Scan a live MCP server
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="McpScanResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ScanMcpError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Connects to a remote MCP endpoint over Streamable HTTP, runs the handshake, and grades the tools, resources, and prompts it advertises against MCP best practices. Returns a weighted mcpScore (0–100) with per-check findings. Synchronous (no polling). Public — no API key required. Remote http(s) endpoints only; stdio servers aren't reachable. This is a standalone tool: its score is independent of the site agent-readability score.
    /// </remarks>
    public Task<McpScanResponse> ScanMcp(ScanMcpRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/scan/mcp"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<McpScanResponse>(),
            ScanMcpError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
