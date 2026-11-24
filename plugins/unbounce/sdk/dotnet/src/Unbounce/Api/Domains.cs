using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Unbounce.Core;
using Unbounce.Core.Authentication;
using Unbounce.Core.ErrorResponse;
using Unbounce.Core.Exceptions;
using Unbounce.Core.Models;
using Unbounce.Core.Request;
using Unbounce.Core.Response;
using Unbounce.Models;
using Unbounce.Requests.Domains;

namespace Unbounce.Api;

/// <summary>
/// Domains attached to sub-accounts
/// </summary>
public sealed class Domains
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Domains(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Retrieve a domain
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Domain"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Domain> GetDomain(GetDomainRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/domains/{domain_id}"),
            [new TemplateParam("domain_id", request.DomainId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Domain>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List domains for a sub-account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SubAccountsDomainsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<SubAccountsDomainsResponse> ListDomainsForSubAccount(ListDomainsForSubAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sub_accounts/{sub_account_id}/domains"),
            [new TemplateParam("sub_account_id", request.SubAccountId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SubAccountsDomainsResponse>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
