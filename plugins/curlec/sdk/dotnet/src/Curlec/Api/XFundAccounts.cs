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
using Curlec.Requests.XFundAccounts;

namespace Curlec.Api;

/// <summary>
/// Payout destination accounts (bank, VPA, card) linked to contacts
/// </summary>
public sealed class XFundAccounts
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal XFundAccounts(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Activate or deactivate a fund account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FundAccountRazorpayXFundAccountsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ActivateDeactivateFundAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Activate or deactivate a fund account. Fund account details are immutable — only the <c>active</c> status can be changed.
    /// </remarks>
    public Task<FundAccountRazorpayXFundAccountsApi> ActivateDeactivateFundAccount(ActivateDeactivateFundAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/fund_accounts/{fund_account_id}"),
            [new TemplateParam("fund_account_id", request.FundAccountId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<FundAccountRazorpayXFundAccountsApi>(),
            ActivateDeactivateFundAccountError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a fund account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FundAccountRazorpayXFundAccountsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateFundAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a bank account, VPA, card, or wallet (Amazon Pay) fund account linked to a contact. Fund accounts are immutable after creation. Returns existing record if contact_id + account details all match.
    /// </remarks>
    public Task<FundAccountRazorpayXFundAccountsApi> CreateFundAccount(CreateFundAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/fund_accounts"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<FundAccountRazorpayXFundAccountsApi>(),
            CreateFundAccountError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch a fund account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FundAccountRazorpayXFundAccountsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchFundAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetch details of a specific fund account by its ID.
    /// </remarks>
    public Task<FundAccountRazorpayXFundAccountsApi> FetchFundAccount(FetchFundAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/fund_accounts/{fund_account_id}"),
            [new TemplateParam("fund_account_id", request.FundAccountId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<FundAccountRazorpayXFundAccountsApi>(),
            FetchFundAccountError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List fund accounts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FundAccountsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListFundAccountsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List fund accounts linked to contacts. Filter by contact ID and/or account type.
    /// </remarks>
    public Task<FundAccountsResponse> ListFundAccounts(ListFundAccountsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/fund_accounts"),
            [],
            [
                new Param("contact_id", request.ContactId),
                new Param("account_type", request.AccountType),
                new Param("count", request.Count),
                new Param("skip", request.Skip),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<FundAccountsResponse>(),
            ListFundAccountsError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);
}
