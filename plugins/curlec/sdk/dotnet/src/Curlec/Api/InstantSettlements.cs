using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Curlec.Core;
using Curlec.Core.Authentication;
using Curlec.Core.Exceptions;
using Curlec.Core.Models;
using Curlec.Core.Request;
using Curlec.Core.Response;
using Curlec.Errors;
using Curlec.Models;
using Curlec.Requests.InstantSettlements;

namespace Curlec.Api;

/// <summary>
/// On-demand settlements let you transfer your available Razorpay balance to your bank account immediately, outside the normal settlement cycle. Fees apply. Requires Instant Settlements to be enabled on your account.
/// </summary>
public sealed class InstantSettlements
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal InstantSettlements(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create an instant settlement
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="InstantSettlement"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateInstantSettlementError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Request an on-demand (instant) settlement of your available Razorpay balance to your bank account. Fees apply. Use settle_full_balance=true to settle everything available, or specify an amount.
    /// </remarks>
    public Task<InstantSettlement> CreateInstantSettlement(CreateInstantSettlementRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/settlements/ondemand"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<InstantSettlement>(),
            CreateInstantSettlementError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch all instant settlements
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SettlementsOndemandResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchAllInstantSettlementsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of all on-demand instant settlements. Use expand[]=ondemand_payouts to include individual payout records inline.
    /// </remarks>
    public Task<SettlementsOndemandResponse> FetchAllInstantSettlements(FetchAllInstantSettlementsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/settlements/ondemand"),
            [],
            [
                new Param("from", request.From),
                new Param("to", request.To),
                new Param("count", request.Count),
                new Param("skip", request.Skip),
                new Param("expand[]", request.Expand),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SettlementsOndemandResponse>(),
            FetchAllInstantSettlementsError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch instant settlement by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="InstantSettlement"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchInstantSettlementError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve details of a specific on-demand instant settlement. Use expand[]=ondemand_payouts to include payout records.
    /// </remarks>
    public Task<InstantSettlement> FetchInstantSettlement(FetchInstantSettlementRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/settlements/ondemand/{id}"),
            [new TemplateParam("id", request.Id)],
            [new Param("expand[]", request.Expand)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<InstantSettlement>(),
            FetchInstantSettlementError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);
}
