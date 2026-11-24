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
using Airwallex.Requests.Refunds;

namespace Airwallex.Api;

public sealed class Refunds
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Refunds(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create refund
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task CreateRefund(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/pa/refunds/create"),
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
    /// Retrieve refund
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task GetRefund(GetRefundRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/pa/refunds/{id}"),
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
