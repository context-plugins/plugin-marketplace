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
using Curlec.Requests.PartnerAccounts;

namespace Curlec.Api;

/// <summary>
/// Sub-merchant account lifecycle management via Partners API (Aggregator/Platform model). Uses OAuth access_token authentication.
/// </summary>
public sealed class PartnerAccounts
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal PartnerAccounts(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete (suspend) a sub-merchant account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V2AccountsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeletePartnerAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Suspend a sub-merchant account created via Partners API. Sets account status to 'suspended' and returns suspended_at timestamp. Authentication: OAuth access_token as username with empty password.
    /// </remarks>
    public Task<V2AccountsResponse> DeletePartnerAccount(DeletePartnerAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/accounts/{account_id}"),
            [new TemplateParam("account_id", request.AccountId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<V2AccountsResponse>(),
            DeletePartnerAccountError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch a Linked Account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="LinkedAccount"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchLinkedAccount2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the details of a Linked Account by its ID. Also used in Partners API to fetch sub-merchant account details (authentication: OAuth access_token).
    /// </remarks>
    public Task<LinkedAccount> FetchLinkedAccount2(FetchLinkedAccount2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/accounts/{account_id}"),
            [new TemplateParam("account_id", request.AccountId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<LinkedAccount>(),
            FetchLinkedAccount2Error.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a Linked Account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="LinkedAccount"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateLinkedAccount2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update mutable fields of a Linked Account. email and business_type cannot be changed after creation.
    /// </remarks>
    public Task<LinkedAccount> UpdateLinkedAccount2(UpdateLinkedAccount2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/accounts/{account_id}"),
            [new TemplateParam("account_id", request.AccountId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<LinkedAccount>(),
            UpdateLinkedAccount2Error.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);
}
