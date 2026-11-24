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
using Fillo.Requests.Credentials;

namespace Fillo.Api;

public sealed class Credentials
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Credentials(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Mint a form sync token
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageSyncTokensResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSyncTokenError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Mint a stage-only deployment credential. It can stage code-defined schema changes and nothing else: it can never publish, read responses, or manage the workspace. The plaintext is returned EXACTLY ONCE. The token is bound to the human who minted the key; if that account was removed or demoted, minting is refused with 403. Scope: workspace:manage.
    /// </remarks>
    public Task<ApiV1ManageSyncTokensResponse1> CreateSyncToken(CreateSyncTokenRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/sync-tokens"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ManageSyncTokensResponse1>(),
            CreateSyncTokenError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List connector tokens
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageTokensResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListConnectorTokensError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Every <c>fcli_</c> credential bound to the key's project — CLI logins, Zapier and n8n connectors, and agent handoffs — as metadata only. Bearers are stored as hashes and can never be listed. Tier A. Scope: workspace:manage.
    /// </remarks>
    public Task<ApiV1ManageTokensResponse> ListConnectorTokens(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/tokens"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ManageTokensResponse>(),
            ListConnectorTokensError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List form sync tokens
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageSyncTokensResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSyncTokensError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The project's <c>fsync_</c> deployment credentials, as metadata only — a sync token's plaintext is never persisted. Scope: workspace:manage.
    /// </remarks>
    public Task<ApiV1ManageSyncTokensResponse> ListSyncTokens(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/sync-tokens"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ManageSyncTokensResponse>(),
            ListSyncTokensError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Revoke a connector token
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageTokensResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RevokeConnectorTokenError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Revoke one connector token. Anything using it stops working immediately, so this is destructive (Tier C): <c>confirm</c> must equal the token id. An id outside the key's project 404s. Scope: workspace:manage.
    /// </remarks>
    public Task<ApiV1ManageTokensResponse1> RevokeConnectorToken(RevokeConnectorTokenRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/tokens/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ManageTokensResponse1>(),
            RevokeConnectorTokenError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Revoke a form sync token
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageSyncTokensResponse2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RevokeSyncTokenError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Revoke one sync token; deployments using it stop staging. Destructive (Tier C): <c>confirm</c> must equal the token id. The delete holds the project's code-sync lock, so an in-flight sync either completes or the revocation wins before it can revalidate its bearer. Scope: workspace:manage.
    /// </remarks>
    public Task<ApiV1ManageSyncTokensResponse2> RevokeSyncToken(RevokeSyncTokenRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/sync-tokens/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ManageSyncTokensResponse2>(),
            RevokeSyncTokenError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
