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
using WhoisFreaks.Requests.DatabasesSubdomains;

namespace WhoisFreaks.Api;

/// <summary>
/// Subdomain database snapshots
/// </summary>
public sealed class DatabasesSubdomains
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal DatabasesSubdomains(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Subdomains Daily
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DbSubdomainsDailyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Subdomains Daily. Returns the file/snapshot described by this operation.
    /// </remarks>
    public Task<BinaryContent> DbSubdomainsDaily(DbSubdomainsDailyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3.2/download/dbupdate/daily/subdomains"),
            [],
            [new Param("date", request.Date?.ToDate())],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            DbSubdomainsDailyError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Subdomains Monthly
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DbSubdomainsMonthlyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Subdomains Monthly. Returns the file/snapshot described by this operation.
    /// </remarks>
    public Task<BinaryContent> DbSubdomainsMonthly(DbSubdomainsMonthlyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3.2/download/dbupdate/monthly/subdomains"),
            [],
            [new Param("date", request.Date?.ToDate())],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            DbSubdomainsMonthlyError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Subdomains Weekly
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DbSubdomainsWeeklyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Subdomains Weekly. Returns the file/snapshot described by this operation.
    /// </remarks>
    public Task<BinaryContent> DbSubdomainsWeekly(DbSubdomainsWeeklyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3.2/download/dbupdate/weekly/subdomains"),
            [],
            [new Param("date", request.Date?.ToDate())],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            DbSubdomainsWeeklyError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
