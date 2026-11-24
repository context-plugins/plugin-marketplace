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
using WhoisFreaks.Requests.DatabasesAsnWhois;

namespace WhoisFreaks.Api;

/// <summary>
/// ASN WHOIS database snapshots
/// </summary>
public sealed class DatabasesAsnWhois
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal DatabasesAsnWhois(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// ASN WHOIS Snapshot
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DbAsnWhoisError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// ASN WHOIS Snapshot. Returns the file/snapshot described by this operation.
    /// </remarks>
    public Task<BinaryContent> DbAsnWhois(DbAsnWhoisRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3.3/download/snapshot/asn/whois"),
            [],
            [new Param("date", request.Date.ToDate())],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            DbAsnWhoisError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// ASN WHOIS Snapshot Status
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SnapshotStatus"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DbAsnWhoisStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// ASN WHOIS Snapshot Status. Returns the file/snapshot described by this operation.
    /// </remarks>
    public Task<SnapshotStatus> DbAsnWhoisStatus(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3.3/status/snapshot/asn/whois"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SnapshotStatus>(),
            DbAsnWhoisStatusError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
