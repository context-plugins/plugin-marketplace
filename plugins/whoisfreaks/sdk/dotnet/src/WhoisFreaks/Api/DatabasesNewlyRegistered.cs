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
using WhoisFreaks.Requests.DatabasesNewlyRegistered;

namespace WhoisFreaks.Api;

/// <summary>
/// Newly registered domain downloads
/// </summary>
public sealed class DatabasesNewlyRegistered
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal DatabasesNewlyRegistered(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Newly Registered ccTLD (CSV)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DbNewlyCctldError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Newly Registered ccTLD (CSV). Returns the file/snapshot described by this operation.
    /// </remarks>
    public Task<BinaryContent> DbNewlyCctld(DbNewlyCctldRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3.1/download/domainer/cctld"),
            [],
            [
                new Param("whois", request.Whois),
                new Param("date", request.Date?.ToDate()),
                new Param("tlds", request.Tlds),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            DbNewlyCctldError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Newly Registered ccTLD Cleaned WHOIS (CSV)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DbNewlyCctldCleanedError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Newly Registered ccTLD Cleaned WHOIS (CSV). Returns the file/snapshot described by this operation.
    /// </remarks>
    public Task<BinaryContent> DbNewlyCctldCleaned(DbNewlyCctldCleanedRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3.1/download/domainer/cctld/cleaned"),
            [],
            [new Param("date", request.Date?.ToDate())],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            DbNewlyCctldCleanedError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Newly Registered ccTLD (JSON)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DbNewlyCctldJsonError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Newly Registered ccTLD (JSON). Returns the file/snapshot described by this operation.
    /// </remarks>
    public Task<IReadOnlyList<string>> DbNewlyCctldJson(DbNewlyCctldJsonRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3.1/domains/newly/cctld"),
            [],
            [new Param("date", request.Date?.ToDate()), new Param("tlds", request.Tlds)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<string>>(),
            DbNewlyCctldJsonError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Newly Registered With DNS
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DbNewlyDnsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Newly Registered With DNS. Returns the file/snapshot described by this operation.
    /// </remarks>
    public Task<BinaryContent> DbNewlyDns(DbNewlyDnsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3.1/download/domainer/newly/dns"),
            [],
            [new Param("date", request.Date?.ToDate())],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            DbNewlyDnsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Newly Registered gTLD (CSV)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DbNewlyGtldError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Newly Registered gTLD (CSV). Returns the file/snapshot described by this operation.
    /// </remarks>
    public Task<BinaryContent> DbNewlyGtld(DbNewlyGtldRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3.1/download/domainer/gtld"),
            [],
            [
                new Param("whois", request.Whois),
                new Param("date", request.Date?.ToDate()),
                new Param("tlds", request.Tlds),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            DbNewlyGtldError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Newly Registered gTLD Cleaned WHOIS (CSV)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DbNewlyGtldCleanedError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Newly Registered gTLD Cleaned WHOIS (CSV). Returns the file/snapshot described by this operation.
    /// </remarks>
    public Task<BinaryContent> DbNewlyGtldCleaned(DbNewlyGtldCleanedRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3.1/download/domainer/gtld/cleaned"),
            [],
            [new Param("date", request.Date?.ToDate())],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            DbNewlyGtldCleanedError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Newly Registered gTLD (JSON)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DbNewlyGtldJsonError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Newly Registered gTLD (JSON). Returns the file/snapshot described by this operation.
    /// </remarks>
    public Task<IReadOnlyList<string>> DbNewlyGtldJson(DbNewlyGtldJsonRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3.1/domains/newly/gtld"),
            [],
            [new Param("date", request.Date?.ToDate()), new Param("tlds", request.Tlds)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<string>>(),
            DbNewlyGtldJsonError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
