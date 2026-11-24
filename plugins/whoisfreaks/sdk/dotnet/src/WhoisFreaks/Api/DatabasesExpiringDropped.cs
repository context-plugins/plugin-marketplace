using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using WhoisFreaks.Core;
using WhoisFreaks.Core.Exceptions;
using WhoisFreaks.Core.Extensions;
using WhoisFreaks.Core.Models;
using WhoisFreaks.Core.Request;
using WhoisFreaks.Core.Response;
using WhoisFreaks.Errors;
using WhoisFreaks.Requests.DatabasesExpiringDropped;

namespace WhoisFreaks.Api;

/// <summary>
/// Expiring and dropped domain downloads
/// </summary>
public sealed class DatabasesExpiringDropped
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal DatabasesExpiringDropped(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Dropped Domains
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DbDroppedError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Dropped Domains. Returns the file/snapshot described by this operation.
    /// </remarks>
    public Task<BinaryContent> DbDropped(DbDroppedRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3.1/download/domainer/dropped"),
            [],
            [new Param("whois", request.Whois), new Param("date", request.Date?.ToDate())],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            DbDroppedError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Dropped With Backlinks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DbDroppedBacklinksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Dropped With Backlinks. Returns the file/snapshot described by this operation.
    /// </remarks>
    public Task<BinaryContent> DbDroppedBacklinks(DbDroppedBacklinksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3.3/download/domainer/dropped/backlinks"),
            [],
            [new Param("whois", request.Whois), new Param("date", request.Date?.ToDate())],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            DbDroppedBacklinksError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Dropped Domains (JSON)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DbDroppedJsonError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Dropped Domains (JSON). Returns the file/snapshot described by this operation.
    /// </remarks>
    public Task<IReadOnlyList<string>> DbDroppedJson(DbDroppedJsonRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3.1/domains/dropped"),
            [],
            [new Param("date", request.Date?.ToDate()), new Param("tlds", request.Tlds)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<string>>(),
            DbDroppedJsonError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Expiring Domains
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DbExpiredError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Expiring Domains. Returns the file/snapshot described by this operation.
    /// </remarks>
    public Task<BinaryContent> DbExpired(DbExpiredRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3.1/download/domainer/expired"),
            [],
            [new Param("whois", request.Whois), new Param("date", request.Date?.ToDate())],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            DbExpiredError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Expiring Cleaned WHOIS
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DbExpiredCleanedError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Expiring Cleaned WHOIS. Returns the file/snapshot described by this operation.
    /// </remarks>
    public Task<BinaryContent> DbExpiredCleaned(DbExpiredCleanedRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3.1/download/domainer/expired/cleaned"),
            [],
            [new Param("date", request.Date?.ToDate())],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            DbExpiredCleanedError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
