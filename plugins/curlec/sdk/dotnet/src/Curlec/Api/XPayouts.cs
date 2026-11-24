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
using Curlec.Requests.XPayouts;

namespace Curlec.Api;

/// <summary>
/// Disbursements via NEFT, RTGS, IMPS, UPI, card — includes composite and approval flows
/// </summary>
public sealed class XPayouts
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal XPayouts(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Approve a payout (workflow enabled)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Payout"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApprovePayoutError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Requires Payouts Approval workflow enabled and Technology Partner status with OAuth.
    /// </remarks>
    public Task<Payout> ApprovePayout(ApprovePayoutRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payouts/{payout_id}/approve"),
            [new TemplateParam("payout_id", request.PayoutId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Payout>(),
            ApprovePayoutError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Cancel a queued payout
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Payout"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelPayoutError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Only payouts in 'queued' status can be cancelled.
    /// </remarks>
    public Task<Payout> CancelPayout(CancelPayoutRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payouts/{payout_id}/cancel"),
            [new TemplateParam("payout_id", request.PayoutId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<Payout>(),
            CancelPayoutError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a payout
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Payout"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreatePayoutError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Disburse funds via NEFT, RTGS, IMPS, UPI, or card. Supports standard payouts (fund_account_id), composite payouts (contact + fund account inline), card payouts (PCI DSS required), and mobile number payouts (resolved via NPCI mapper). Idempotency header X-Payout-Idempotency (UUID v4, 4–36 chars) is mandatory since March 15, 2025. Never generate a new idempotency key while a payout is in 'processing' state.
    /// </remarks>
    public Task<Payout> CreatePayout(CreatePayoutRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payouts"),
            [],
            [],
            [
                new HeaderParam("X-Payout-Idempotency", request.XPayoutIdempotency),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Payout>(),
            CreatePayoutError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch a payout
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Payout"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchPayoutError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetch details of a specific payout by its ID.
    /// </remarks>
    public Task<Payout> FetchPayout(FetchPayoutRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payouts/{payout_id}"),
            [new TemplateParam("payout_id", request.PayoutId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Payout>(),
            FetchPayoutError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List payouts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PayoutsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPayoutsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List payouts for a given RazorpayX account. Filter by contact, fund account, date range, or status.
    /// </remarks>
    public Task<PayoutsResponse> ListPayouts(ListPayoutsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payouts"),
            [],
            [
                new Param("account_number", request.AccountNumber),
                new Param("contact_id", request.ContactId),
                new Param("fund_account_id", request.FundAccountId),
                new Param("from", request.From),
                new Param("to", request.To),
                new Param("count", request.Count),
                new Param("skip", request.Skip),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PayoutsResponse>(),
            ListPayoutsError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Reject a payout (workflow enabled)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Payout"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RejectPayoutError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Requires Payouts Approval workflow enabled and Technology Partner status with OAuth.
    /// </remarks>
    public Task<Payout> RejectPayout(RejectPayoutRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payouts/{payout_id}/reject"),
            [new TemplateParam("payout_id", request.PayoutId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Payout>(),
            RejectPayoutError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);
}
