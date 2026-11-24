using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using BrowserUse.Core;
using BrowserUse.Core.Exceptions;
using BrowserUse.Core.Models;
using BrowserUse.Core.Request;
using BrowserUse.Core.Response;
using BrowserUse.Errors;
using BrowserUse.Models;
using BrowserUse.Requests.Integrations;

namespace BrowserUse.Api;

public sealed class Integrations
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Integrations(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Authorize Integration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AuthorizeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AuthorizeIntegrationIntegrationsProviderAuthorizePostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the OAuth redirect URL for connecting an integration.
    /// <para>
    /// The client opens the returned URL in a web auth session and polls
    /// <c>/integrations/{provider}/status</c> once the flow lands back on the callback
    /// path. The URL is Composio-hosted; no redirect URI is registered per client.
    /// </para>
    /// </remarks>
    public Task<AuthorizeResponse> AuthorizeIntegrationIntegrationsProviderAuthorizePost(AuthorizeIntegrationIntegrationsProviderAuthorizePostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/integrations/{provider}/authorize"),
            [new TemplateParam("provider", request.Provider)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<AuthorizeResponse>(),
            AuthorizeIntegrationIntegrationsProviderAuthorizePostError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Disconnect Integration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DisconnectResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DisconnectIntegrationIntegrationsProviderDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Disconnect an integration for this project.
    /// <para>
    /// Deliberately NOT gated like <c>authorize</c> above: a restricted project must
    /// still be able to tear down a connection it already has.
    /// </para>
    /// </remarks>
    public Task<DisconnectResponse> DisconnectIntegrationIntegrationsProviderDelete(DisconnectIntegrationIntegrationsProviderDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/integrations/{provider}"),
            [new TemplateParam("provider", request.Provider)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<DisconnectResponse>(),
            DisconnectIntegrationIntegrationsProviderDeleteError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Connection Status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ConnectionStatusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetConnectionStatusIntegrationsProviderStatusGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check whether this project has connected a specific provider.
    /// <para>
    /// Poll this after opening the authorize URL to learn when OAuth completed.
    /// </para>
    /// </remarks>
    public Task<ConnectionStatusResponse> GetConnectionStatusIntegrationsProviderStatusGet(GetConnectionStatusIntegrationsProviderStatusGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/integrations/{provider}/status"),
            [new TemplateParam("provider", request.Provider)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ConnectionStatusResponse>(),
            GetConnectionStatusIntegrationsProviderStatusGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Categories
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IntegrationCategoryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCategoriesIntegrationsCategoriesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get all integration categories, for filtering the list above.
    /// </remarks>
    public Task<IntegrationCategoryResponse> ListCategoriesIntegrationsCategoriesGet(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/integrations/categories"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IntegrationCategoryResponse>(),
            ListCategoriesIntegrationsCategoriesGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Integrations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IntegrationListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListIntegrationsIntegrationsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List available integrations with this project's connection status.
    /// <para>
    /// <c>is_connected</c> is resolved per integration, so a client can render the whole
    /// catalogue and the connected subset from this one call. <c>connected_only</c> is
    /// what a "my integrations" view reads — including on a restricted project,
    /// which cannot connect anything but can still remove what it already has.
    /// </para>
    /// </remarks>
    public Task<IntegrationListResponse> ListIntegrationsIntegrationsGet(ListIntegrationsIntegrationsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/integrations"),
            [],
            [
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("search", request.Search),
                new Param("popular_only", request.PopularOnly),
                new Param("connected_only", request.ConnectedOnly),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IntegrationListResponse>(),
            ListIntegrationsIntegrationsGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);
}
