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
using WhoisFreaks.Models;
using WhoisFreaks.Requests.DatabasesIpGeolocation;

namespace WhoisFreaks.Api;

/// <summary>
/// IP geolocation database snapshots
/// </summary>
public sealed class DatabasesIpGeolocation
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal DatabasesIpGeolocation(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// IP to City Snapshot
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DbIpCityError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// IP to City Snapshot. Returns the file/snapshot described by this operation.
    /// </remarks>
    public Task<BinaryContent> DbIpCity(DbIpCityRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3.3/download/snapshot/ip/city"),
            [],
            [new Param("date", request.Date.ToDate())],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            DbIpCityError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// IP to City Snapshot Status
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SnapshotStatus"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DbIpCityStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// IP to City Snapshot Status. Returns the file/snapshot described by this operation.
    /// </remarks>
    public Task<SnapshotStatus> DbIpCityStatus(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3.3/status/snapshot/ip/city"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SnapshotStatus>(),
            DbIpCityStatusError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// IP to Country Snapshot
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DbIpCountryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// IP to Country Snapshot. Returns the file/snapshot described by this operation.
    /// </remarks>
    public Task<BinaryContent> DbIpCountry(DbIpCountryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3.3/download/snapshot/ip/country"),
            [],
            [new Param("date", request.Date.ToDate())],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            DbIpCountryError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// IP to Country Snapshot Status
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SnapshotStatus"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DbIpCountryStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// IP to Country Snapshot Status. Returns the file/snapshot described by this operation.
    /// </remarks>
    public Task<SnapshotStatus> DbIpCountryStatus(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3.3/status/snapshot/ip/country"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SnapshotStatus>(),
            DbIpCountryStatusError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
