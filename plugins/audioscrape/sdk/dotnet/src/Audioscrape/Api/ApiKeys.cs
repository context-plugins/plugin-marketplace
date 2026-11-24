using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Audioscrape.Core;
using Audioscrape.Core.Exceptions;
using Audioscrape.Core.Models;
using Audioscrape.Core.Request;
using Audioscrape.Core.Response;
using Audioscrape.Errors;
using Audioscrape.Models;
using Audioscrape.Requests.ApiKeys;

namespace Audioscrape.Api;

/// <summary>
/// Create and manage API keys for programmatic access
/// </summary>
public sealed class ApiKeys
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ApiKeys(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get a key's recent usage
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiKeyUsage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApiKeyUsageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns how many requests authenticated with this key over the trailing 30 days. Pair with <c>last_used</c> / <c>last_used_ip</c> from the list endpoint to audit a credential before revoking or rotating it.
    /// <para>
    /// Accepts either a session cookie or an existing API key as auth.
    /// </para>
    /// </remarks>
    public Task<ApiKeyUsage> ApiKeyUsage(ApiKeyUsageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/keys/{id}/usage"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiKeyUsage>(),
            ApiKeyUsageError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a new API key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiKeyModel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateApiKeyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generates a new workspace-scoped API key. The full <c>key_value</c> is returned <b>only</b> in this response — Audioscrape stores a SHA-256 hash and the prefix only, so save the raw key immediately on the client side. If you lose it, rotate the key.
    /// <para>
    /// Accepts either a session cookie or an existing API key as auth.
    /// </para>
    /// </remarks>
    public Task<ApiKeyModel> CreateApiKey(CreateApiKeyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/keys"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiKeyModel>(),
            CreateApiKeyError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete an API key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteApiKeyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Revokes the key immediately. Any in-flight requests using the revoked key will fail with 401 on their next call.
    /// <para>
    /// Accepts either a session cookie or an existing API key as auth.
    /// </para>
    /// </remarks>
    public Task DeleteApiKey(DeleteApiKeyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/keys/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteApiKeyError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List your API keys
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="ApiKeyModel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListApiKeysError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns all API keys belonging to the calling user. <c>key_value</c> is <c>null</c> on every entry — only the display <c>key_prefix</c> is recoverable after creation. To get a fresh raw value for a key, rotate it: <c>POST /api/keys/{id}/rotate</c>.
    /// <para>
    /// Accepts either a session cookie or an existing API key as auth.
    /// </para>
    /// </remarks>
    public Task<IReadOnlyList<ApiKeyModel>> ListApiKeys(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/keys"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<ApiKeyModel>>(),
            ListApiKeysError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Rotate an API key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiKeyModel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RotateApiKeyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Atomically replaces the key's secret (GH#485): the key keeps its id, name, workspace pin and expiry; the old secret stops authenticating the moment this call returns; the new secret is in <c>key_value</c> — shown only in this response. Prefer this over delete-and-recreate: the key's identity survives and there is no window with zero valid credentials. <c>last_used</c> resets to <c>null</c> because the new secret has never been used.
    /// <para>
    /// Accepts either a session cookie or an existing API key as auth. A key can rotate itself.
    /// </para>
    /// </remarks>
    public Task<ApiKeyModel> RotateApiKey(RotateApiKeyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/keys/{id}/rotate"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ApiKeyModel>(),
            RotateApiKeyError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
