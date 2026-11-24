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
using Curlec.Requests.XPayoutLinks;

namespace Curlec.Api;

/// <summary>
/// Payout links for recipients without saved fund accounts
/// </summary>
public sealed class XPayoutLinks
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal XPayoutLinks(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Cancel a payout link
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PayoutLink"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelPayoutLinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cancel a payout link that is in <c>issued</c> or <c>pending</c> state.
    /// </remarks>
    public Task<PayoutLink> CancelPayoutLink(CancelPayoutLinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payout-links/{payout_link_id}/cancel"),
            [new TemplateParam("payout_link_id", request.PayoutLinkId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<PayoutLink>(),
            CancelPayoutLinkError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a payout link
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PayoutLink"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreatePayoutLinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Send a payout link to a contact when fund account details are unavailable. expire_by must be at least 15 minutes in the future.
    /// </remarks>
    public Task<PayoutLink> CreatePayoutLink(CreatePayoutLinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payout-links"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PayoutLink>(),
            CreatePayoutLinkError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch a payout link
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PayoutLink"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchPayoutLinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetch details of a specific payout link by its ID.
    /// </remarks>
    public Task<PayoutLink> FetchPayoutLink(FetchPayoutLinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payout-links/{payout_link_id}"),
            [new TemplateParam("payout_link_id", request.PayoutLinkId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PayoutLink>(),
            FetchPayoutLinkError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List payout links
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PayoutLinksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPayoutLinksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List all payout links. Filter by contact ID, status, or date range.
    /// </remarks>
    public Task<PayoutLinksResponse> ListPayoutLinks(ListPayoutLinksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payout-links"),
            [],
            [
                new Param("contact_id", request.ContactId),
                new Param("from", request.From),
                new Param("to", request.To),
                new Param("count", request.Count),
                new Param("skip", request.Skip),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PayoutLinksResponse>(),
            ListPayoutLinksError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);
}
