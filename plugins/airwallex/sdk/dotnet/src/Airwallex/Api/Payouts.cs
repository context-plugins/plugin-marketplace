using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Airwallex.Core;
using Airwallex.Core.Authentication;
using Airwallex.Core.ErrorResponse;
using Airwallex.Core.Exceptions;
using Airwallex.Core.Models;
using Airwallex.Core.Request;
using Airwallex.Core.Response;
using Airwallex.Requests.Payouts;

namespace Airwallex.Api;

public sealed class Payouts
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Payouts(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create payout
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task CreatePayout(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/payouts/create"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.BearerAuth, AuthScheme.All(_auth.ClientIdHeader, _auth.ApiKeyHeader)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve payout
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task GetPayout(GetPayoutRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/payouts/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.BearerAuth, AuthScheme.All(_auth.ClientIdHeader, _auth.ApiKeyHeader)),
            requestOptions,
            cancellationToken);
}
