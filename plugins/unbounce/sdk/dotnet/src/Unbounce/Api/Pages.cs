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
using Unbounce.Requests.Pages;

namespace Unbounce.Api;

/// <summary>
/// Landing pages and form fields
/// </summary>
public sealed class Pages
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Pages(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Retrieve a page
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Page"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Page> GetPage(GetPageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/pages/{page_id}"),
            [new TemplateParam("page_id", request.PageId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Page>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List pages for an account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PageCollection"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<PageCollection> ListAccountPages(ListAccountPagesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/accounts/{account_id}/pages"),
            [new TemplateParam("account_id", request.AccountId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PageCollection>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve form fields for a page
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PagesFormFieldsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<PagesFormFieldsResponse> ListFormFields(ListFormFieldsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/pages/{page_id}/form_fields"),
            [new TemplateParam("page_id", request.PageId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PagesFormFieldsResponse>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List all accessible pages
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PageCollection"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<PageCollection> ListPages(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/pages"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PageCollection>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List pages on a domain
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PageCollection"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<PageCollection> ListPagesForDomain(ListPagesForDomainRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/domains/{domain_id}/pages"),
            [new TemplateParam("domain_id", request.DomainId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PageCollection>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List pages for a sub-account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PageCollection"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<PageCollection> ListSubAccountPages(ListSubAccountPagesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sub_accounts/{sub_account_id}/pages"),
            [new TemplateParam("sub_account_id", request.SubAccountId)],
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
