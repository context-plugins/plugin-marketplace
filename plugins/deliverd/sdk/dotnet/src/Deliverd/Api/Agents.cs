using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Deliverd.Core;
using Deliverd.Core.ErrorResponse;
using Deliverd.Core.Exceptions;
using Deliverd.Core.Models;
using Deliverd.Core.Request;
using Deliverd.Core.Response;
using Deliverd.Models;
using Deliverd.Requests.Agents;

namespace Deliverd.Api;

public sealed class Agents
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Agents(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List agents
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AgentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The organisation's agents and the platforms they run on. Registering one is an administrator's act in the app.
    /// </remarks>
    public Task<ApiV1AgentsResponse> GetApiV1Agents(GetApiV1AgentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/agents"),
            [],
            [new Param("limit", request.Limit), new Param("cursor", request.Cursor)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AgentsResponse>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// One agent, with its recent gates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AgentsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<ApiV1AgentsResponse1> GetApiV1AgentsById(GetApiV1AgentsByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/agents/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AgentsResponse1>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
