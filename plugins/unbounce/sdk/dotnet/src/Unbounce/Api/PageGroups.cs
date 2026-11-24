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
using Unbounce.Requests.PageGroups;

namespace Unbounce.Api;

/// <summary>
/// Logical page groupings
/// </summary>
public sealed class PageGroups
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal PageGroups(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List page groups for a sub-account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SubAccountsPageGroupsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<SubAccountsPageGroupsResponse> ListPageGroupsForSubAccount(ListPageGroupsForSubAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sub_accounts/{sub_account_id}/page_groups"),
            [new TemplateParam("sub_account_id", request.SubAccountId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SubAccountsPageGroupsResponse>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List pages in a page group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PageCollection"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<PageCollection> ListPagesForPageGroup(ListPagesForPageGroupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/page_groups/{page_group_id}/pages"),
            [new TemplateParam("page_group_id", request.PageGroupId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PageCollection>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
