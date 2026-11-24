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
using Curlec.Requests.Disputes;

namespace Curlec.Api;

/// <summary>
/// Disputes (chargebacks) are raised by customers via their bank. You can accept (lose) or contest (challenge with evidence) each dispute. Monitor respond_by timestamp — missing the deadline forfeits the dispute.
/// </summary>
public sealed class Disputes
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Disputes(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Accept a dispute
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Dispute"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AcceptDisputeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Accept a dispute, acknowledging it as lost. This is irreversible — the dispute status changes to 'lost' and the disputed amount is deducted from your balance. Only accept if you do not wish to contest.
    /// </remarks>
    public Task<Dispute> AcceptDispute(AcceptDisputeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/disputes/{id}/accept"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<Dispute>(),
            AcceptDisputeError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Contest a dispute
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Dispute"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ContestDisputeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Submit evidence to challenge a dispute. Use action=draft to save without submitting, or action=submit to send for bank review (triggers payment.dispute.under_review webhook). At least one evidence document is required when submitting. You can contest partial amounts by specifying amount.
    /// </remarks>
    public Task<Dispute> ContestDispute(ContestDisputeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/disputes/{id}/contest"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Dispute>(),
            ContestDisputeError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch all disputes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DisputesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchAllDisputesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of all payment disputes. Use expand[]=payment or expand[]=transaction.settlement for additional context.
    /// </remarks>
    public Task<DisputesResponse> FetchAllDisputes(FetchAllDisputesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/disputes"),
            [],
            [new Param("count", request.Count), new Param("skip", request.Skip), new Param("expand[]", request.Expand)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DisputesResponse>(),
            FetchAllDisputesError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch dispute by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Dispute"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchDisputeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve full details of a specific dispute including submitted evidence.
    /// </remarks>
    public Task<Dispute> FetchDispute(FetchDisputeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/disputes/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Dispute>(),
            FetchDisputeError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);
}
