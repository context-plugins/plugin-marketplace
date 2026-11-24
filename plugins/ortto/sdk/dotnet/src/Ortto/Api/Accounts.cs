using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Ortto.Core;
using Ortto.Core.Exceptions;
using Ortto.Core.Models;
using Ortto.Core.Request;
using Ortto.Core.Response;
using Ortto.Errors;
using Ortto.Requests.Accounts;

namespace Ortto.Api;

/// <summary>
/// Create, update, retrieve, and manage accounts (organizations).
/// </summary>
public sealed class Accounts
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Accounts(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create or update one or more accounts (merge)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MergeAccountsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates or updates accounts (previously called organizations) using the same merge semantics as people.
    /// </remarks>
    public Task MergeAccounts(MergeAccountsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/accounts/merge"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            MergeAccountsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
