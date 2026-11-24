using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using BrowserUse.Core;
using BrowserUse.Core.Exceptions;
using BrowserUse.Core.Request;
using BrowserUse.Core.Response;
using BrowserUse.Errors;
using BrowserUse.Models;

namespace BrowserUse.Api;

public sealed class Wallets
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Wallets(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Stripe Link Status
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StripeLinkStatusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetStripeLinkStatusStripeLinkGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The project's active Stripe Link wallet connection, if any.
    /// <para>
    /// Read-only: connecting happens in the cloud UI. A run opts into paying with
    /// it by passing <c>connection_id</c> as RunCreateRequest.stripe_link_connection_id,
    /// which is validated again there against this same project.
    /// </para>
    /// </remarks>
    public Task<StripeLinkStatusResponse> GetStripeLinkStatusStripeLinkGet(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/stripe-link"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<StripeLinkStatusResponse>(),
            GetStripeLinkStatusStripeLinkGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Agentcard Wallets
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AgentCardWalletListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAgentcardWalletsAgentcardWalletsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The project's active AgentCard wallets, newest first.
    /// <para>
    /// Read-only: funding is admin-only during the beta. The UI uses this to offer
    /// a wallet on the composer, which is how a run opts into spending — the id
    /// then rides RunCreateRequest.agentcard_wallet_id and is validated again there
    /// against this same project.
    /// </para>
    /// </remarks>
    public Task<AgentCardWalletListResponse> ListAgentcardWalletsAgentcardWalletsGet(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/agentcard/wallets"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AgentCardWalletListResponse>(),
            ListAgentcardWalletsAgentcardWalletsGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);
}
