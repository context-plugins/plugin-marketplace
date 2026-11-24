using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Buildkite.Core;
using Buildkite.Core.ErrorResponse;
using Buildkite.Core.Exceptions;
using Buildkite.Core.Models;
using Buildkite.Core.Request;
using Buildkite.Core.Response;
using Buildkite.Requests.AgentTokens;

namespace Buildkite.Api;

public sealed class AgentTokens
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AgentTokens(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List Agent Tokens For A Cluster
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task ListAgentTokens(ListAgentTokensRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/organizations/{org}/clusters/{cluster}/tokens"),
            [new TemplateParam("org", request.Org), new TemplateParam("cluster", request.Cluster)],
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
