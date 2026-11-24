using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Statable.Core;
using Statable.Core.Exceptions;
using Statable.Core.Models;
using Statable.Core.Request;
using Statable.Core.Response;
using Statable.Errors;
using Statable.Models;
using Statable.Requests.Keys;

namespace Statable.Api;

/// <summary>
/// Manage API keys (write surface). Requires the <c>keys:manage</c> scope and the server-side <c>API_WRITE_ENABLED</c> flag; while the flag is off every route here answers 404 <c>write_disabled</c>. See docs/api-v1-write-surface.md.
/// </summary>
public sealed class Keys
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Keys(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create an API key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreatedApiKey"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateApiKeyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Mints a key and returns its raw token EXACTLY ONCE. The requested scopes must be a subset of the authenticating key's scopes (else 403 <c>scope_escalation</c>), and a single-site key may only create keys locked to its own site (else 403 <c>key_not_scoped</c>). <c>expires_in_days</c> defaults to 90 and is capped at 365 — unlike the dashboard, the API cannot mint a key that never expires. Max 10 active keys per account.
    /// </remarks>
    public Task<CreatedApiKey> CreateApiKey(CreateApiKeyOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/keys"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreatedApiKey>(),
            CreateApiKeyError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// The key's lifecycle audit trail
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiKeyEventList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListApiKeyEventsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the key's create / rotate / revoke events, newest first (revoked keys keep their trail). <c>actor_key_id</c> names the API key that performed the action, or null when it was done from the dashboard.
    /// </remarks>
    public Task<ApiKeyEventList> ListApiKeyEvents(ListApiKeyEventsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/keys/{id}/events"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiKeyEventList>(),
            ListApiKeyEventsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List the account's active API keys
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiKeyList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListApiKeysError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the owner's active (non-revoked) keys, newest first. No token or hash is ever returned here — the raw token exists only in the create and rotate responses.
    /// </remarks>
    public Task<ApiKeyList> ListApiKeys(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/keys"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiKeyList>(),
            ListApiKeysError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Revoke an API key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RevokeApiKeyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Revokes the key; its token stops authenticating immediately. A key cannot revoke itself (409 <c>self_modification</c>).
    /// </remarks>
    public Task RevokeApiKey(RevokeApiKeyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/keys/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RevokeApiKeyError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Issue a fresh secret for an API key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreatedApiKey"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RotateApiKeyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Replaces the key's secret in place — same id, name, site scope, scopes and expiry — and invalidates the old token immediately. The new token is returned exactly once. No request body. A key cannot rotate itself (409 <c>self_modification</c>).
    /// </remarks>
    public Task<CreatedApiKey> RotateApiKey(RotateApiKeyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/keys/{id}/rotate"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<CreatedApiKey>(),
            RotateApiKeyError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
