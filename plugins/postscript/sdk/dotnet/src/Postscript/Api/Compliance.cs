using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Postscript.Core;
using Postscript.Core.Exceptions;
using Postscript.Core.Models;
using Postscript.Core.Request;
using Postscript.Core.Response;
using Postscript.Errors;
using Postscript.Models;
using Postscript.Requests.Compliance;

namespace Postscript.Api;

/// <summary>
/// TCPA compliance operations — unsubscribe and redact a subscriber.
/// </summary>
public sealed class Compliance
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Compliance(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Redact
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV2ComplianceRedactResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RedactError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Note: When passed an email, phone number, Shopify customer ID, or Postscript subscriber ID, this endpoint will also unsubscribe the subscriber if they have an active subscription
    /// </remarks>
    public Task<ApiV2ComplianceRedactResponse> Redact(RedactRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/compliance/redact"),
            [],
            [],
            [
                new HeaderParam("X-Postscript-Shop-Token", request.XPostscriptShopToken),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV2ComplianceRedactResponse>(),
            RedactError.Response,
            _auth.Sec0,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Unsubscribe
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV2ComplianceUnsubscribeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UnsubscribeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Opt outs subscribers from Postscript messaging.
    /// </remarks>
    public Task<ApiV2ComplianceUnsubscribeResponse> Unsubscribe(UnsubscribeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/compliance/unsubscribe"),
            [],
            [],
            [
                new HeaderParam("X-Postscript-Shop-Token", request.XPostscriptShopToken),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV2ComplianceUnsubscribeResponse>(),
            UnsubscribeError.Response,
            _auth.Sec0,
            requestOptions,
            cancellationToken);
}
