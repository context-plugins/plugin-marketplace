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
using WhoisFreaks.Requests.DatabasesIpSecurity;

namespace WhoisFreaks.Api;

/// <summary>
/// IP security database snapshots
/// </summary>
public sealed class DatabasesIpSecurity
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal DatabasesIpSecurity(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// IP Security Snapshot
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DbIpSecurityError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// IP Security Snapshot. Returns the file/snapshot described by this operation.
    /// </remarks>
    public Task<BinaryContent> DbIpSecurity(DbIpSecurityRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3.3/download/snapshot/ip/security"),
            [],
            [new Param("date", request.Date.ToDate())],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            DbIpSecurityError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// IP Security Snapshot Status
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SnapshotStatus"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DbIpSecurityStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// IP Security Snapshot Status. Returns the file/snapshot described by this operation.
    /// </remarks>
    public Task<SnapshotStatus> DbIpSecurityStatus(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3.3/status/snapshot/ip/security"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SnapshotStatus>(),
            DbIpSecurityStatusError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
