using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Fillo.Core;
using Fillo.Core.Exceptions;
using Fillo.Core.Models;
using Fillo.Core.Request;
using Fillo.Core.Response;
using Fillo.Errors;
using Fillo.Models;
using Fillo.Requests.Agents;

namespace Fillo.Api;

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
    /// List connected MCP clients
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageAgentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAgentGrantsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The MCP clients currently authorized against the key's project, with the same ids Settings → Agents shows and each grant's approval policy. Never returns key material. Tier A. Scope: workspace:manage.
    /// </remarks>
    public Task<ApiV1ManageAgentsResponse> ListAgentGrants(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/agents"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ManageAgentsResponse>(),
            ListAgentGrantsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Disconnect an MCP client
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageAgentsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RevokeAgentGrantError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Disconnect one MCP client. Its bearer stops working immediately and the human has to authorize it again from their agent, so this is destructive (Tier C): <c>confirm</c> must equal the grant id. An id outside the key's project 404s. Scope: workspace:manage.
    /// </remarks>
    public Task<ApiV1ManageAgentsResponse1> RevokeAgentGrant(RevokeAgentGrantRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/agents/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ManageAgentsResponse1>(),
            RevokeAgentGrantError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
