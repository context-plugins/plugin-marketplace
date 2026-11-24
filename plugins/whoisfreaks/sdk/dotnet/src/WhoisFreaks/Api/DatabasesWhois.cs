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
using WhoisFreaks.Requests.DatabasesWhois;

namespace WhoisFreaks.Api;

/// <summary>
/// WHOIS database snapshots
/// </summary>
public sealed class DatabasesWhois
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal DatabasesWhois(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// WHOIS Database Daily
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DbWhoisDailyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// WHOIS Database Daily. Returns the file/snapshot described by this operation.
    /// </remarks>
    public Task<BinaryContent> DbWhoisDaily(DbWhoisDailyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3.3/download/dbupdate/daily/domains/whois"),
            [],
            [new Param("date", request.Date?.ToDate())],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            DbWhoisDailyError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// WHOIS Database Monthly
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DbWhoisMonthlyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// WHOIS Database Monthly. Returns the file/snapshot described by this operation.
    /// </remarks>
    public Task<BinaryContent> DbWhoisMonthly(DbWhoisMonthlyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3.3/download/dbupdate/monthly/domains/whois"),
            [],
            [new Param("date", request.Date?.ToDate())],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            DbWhoisMonthlyError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// WHOIS Database Weekly
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DbWhoisWeeklyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// WHOIS Database Weekly. Returns the file/snapshot described by this operation.
    /// </remarks>
    public Task<BinaryContent> DbWhoisWeekly(DbWhoisWeeklyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3.3/download/dbupdate/weekly/domains/whois"),
            [],
            [new Param("date", request.Date?.ToDate())],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            DbWhoisWeeklyError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
