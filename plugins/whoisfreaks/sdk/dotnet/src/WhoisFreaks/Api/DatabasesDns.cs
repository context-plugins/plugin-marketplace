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
using WhoisFreaks.Requests.DatabasesDns;

namespace WhoisFreaks.Api;

/// <summary>
/// DNS database snapshots
/// </summary>
public sealed class DatabasesDns
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal DatabasesDns(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// DNS Database Daily
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DbDnsDailyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// DNS Database Daily. Returns the file/snapshot described by this operation.
    /// </remarks>
    public Task<BinaryContent> DbDnsDaily(DbDnsDailyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3.2/download/dbupdate/daily/dns"),
            [],
            [new Param("date", request.Date?.ToDate())],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            DbDnsDailyError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// DNS Database Monthly
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DbDnsMonthlyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// DNS Database Monthly. Returns the file/snapshot described by this operation.
    /// </remarks>
    public Task<BinaryContent> DbDnsMonthly(DbDnsMonthlyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3.2/download/dbupdate/monthly/dns"),
            [],
            [new Param("date", request.Date?.ToDate())],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            DbDnsMonthlyError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// DNS Database Weekly
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DbDnsWeeklyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// DNS Database Weekly. Returns the file/snapshot described by this operation.
    /// </remarks>
    public Task<BinaryContent> DbDnsWeekly(DbDnsWeeklyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3.2/download/dbupdate/weekly/dns"),
            [],
            [new Param("date", request.Date?.ToDate())],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            DbDnsWeeklyError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
