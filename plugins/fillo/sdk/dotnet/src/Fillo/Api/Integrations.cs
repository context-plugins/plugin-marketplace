using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Fillo.Core;
using Fillo.Core.Exceptions;
using Fillo.Core.Models;
using Fillo.Core.Request;
using Fillo.Core.Response;
using Fillo.Errors;
using Fillo.Models;
using Fillo.Requests.Integrations;

namespace Fillo.Api;

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
    /// Detach a project's selected account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageIntegrationsConnectionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DetachIntegrationConnectionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Detach the key's project from its selected account for one provider: every form in the project that sends to it stops delivering immediately. The workspace-level account survives for sibling projects — only the destinations pinned to that exact account in this project are removed. Outward-facing (Tier B): the key holder chose integrations:manage at mint. Scope: integrations:manage.
    /// </remarks>
    public Task<ApiV1ManageIntegrationsConnectionsResponse> DetachIntegrationConnection(DetachIntegrationConnectionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/integrations/connections/{provider}"),
            [new TemplateParam("provider", request.Provider)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ManageIntegrationsConnectionsResponse>(),
            DetachIntegrationConnectionError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Stop a form's destination
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FormIntegration"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DisableFormIntegrationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Stop sending this form's responses to the provider. Records already created stay where they are, and the workspace connection is untouched, which keeps this routine (Tier A). Scope: integrations:manage.
    /// </remarks>
    public Task<FormIntegration> DisableFormIntegration(DisableFormIntegrationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/forms/{form}/integrations/{provider}"),
            [new TemplateParam("form", request.Form), new TemplateParam("provider", request.Provider)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<FormIntegration>(),
            DisableFormIntegrationError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Disconnect a Discord server
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageIntegrationsDiscordServersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DisconnectDiscordServerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Disconnect one Discord server. Its guild connection and every channel webhook Fillo holds there go together, and their pinned form destinations cascade away across every project, so this is destructive (Tier C): <c>confirm</c> must equal the server id. Scopes: integrations:manage AND workspace:manage; the key acts as the human who minted it and is refused (403) once that person is no longer an owner or admin.
    /// </remarks>
    public Task<ApiV1ManageIntegrationsDiscordServersResponse> DisconnectDiscordServer(DisconnectDiscordServerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/integrations/discord/servers/{guildId}"),
            [new TemplateParam("guildId", request.GuildId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ManageIntegrationsDiscordServersResponse>(),
            DisconnectDiscordServerError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a form's destination
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FormIntegration"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetFormIntegrationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Whether this form sends responses to the provider, and with what configuration. Scope: integrations:manage.
    /// </remarks>
    public Task<FormIntegration> GetFormIntegration(GetFormIntegrationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/forms/{form}/integrations/{provider}"),
            [new TemplateParam("form", request.Form), new TemplateParam("provider", request.Provider)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<FormIntegration>(),
            GetFormIntegrationError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List HubSpot Deal pipelines
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageIntegrationsHubspotPipelinesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListHubspotPipelinesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Live Deal pipelines and their stages — the two ids a HubSpot Deal workflow needs. Archived pipelines and stages are omitted. Scope: integrations:manage.
    /// </remarks>
    public Task<ApiV1ManageIntegrationsHubspotPipelinesResponse> ListHubspotPipelines(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/integrations/hubspot/pipelines"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ManageIntegrationsHubspotPipelinesResponse>(),
            ListHubspotPipelinesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List HubSpot Contact properties
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageIntegrationsHubspotPropertiesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListHubspotPropertiesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The connected account's writable Contact properties, so a mapping can be built without guessing internal names. <c>email</c> is handled separately and is not listed. Scope: integrations:manage.
    /// </remarks>
    public Task<ApiV1ManageIntegrationsHubspotPropertiesResponse> ListHubspotProperties(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/integrations/hubspot/properties"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ManageIntegrationsHubspotPropertiesResponse>(),
            ListHubspotPropertiesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List integration accounts
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IntegrationConnections"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListIntegrationConnectionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The workspace's connected provider accounts, which one the key's project uses for each provider, and the connected Discord servers. <c>label</c> is also the exact string an account removal must confirm with. Scope: integrations:manage.
    /// </remarks>
    public Task<IntegrationConnections> ListIntegrationConnections(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/integrations/connections"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IntegrationConnections>(),
            ListIntegrationConnectionsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove a connected account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageIntegrationsAccountsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemoveIntegrationAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently remove one reusable provider account from the key's workspace. Its stored credential is revoked and every project selection and form destination pinned to it cascades away — across every project — so this is destructive (Tier C): <c>confirm</c> must equal the account's exact <c>label</c> from the connections listing. Scopes: integrations:manage AND workspace:manage; the key acts as the human who minted it and is refused (403) once that person is no longer an owner or admin.
    /// </remarks>
    public Task<ApiV1ManageIntegrationsAccountsResponse> RemoveIntegrationAccount(RemoveIntegrationAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/integrations/accounts/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ManageIntegrationsAccountsResponse>(),
            RemoveIntegrationAccountError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Rename a connected Discord channel
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageIntegrationsDiscordAccountsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RenameDiscordChannelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Name, or with an empty value un-name, one connected Discord channel. Member-visible copy only — nothing re-delivers, so this is routine (Tier A). Scope: integrations:manage.
    /// </remarks>
    public Task<ApiV1ManageIntegrationsDiscordAccountsResponse> RenameDiscordChannel(RenameDiscordChannelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/integrations/discord/accounts/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ManageIntegrationsDiscordAccountsResponse>(),
            RenameDiscordChannelError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Select the account a project uses
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IntegrationConnections"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SelectIntegrationConnectionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Point the key's project at one of the workspace's provider accounts. Accounts belong to the workspace and are selected per project, so one install can serve several projects. Scope: integrations:manage.
    /// </remarks>
    public Task<IntegrationConnections> SelectIntegrationConnection(SelectIntegrationConnectionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/integrations/connections/{provider}"),
            [new TemplateParam("provider", request.Provider)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IntegrationConnections>(),
            SelectIntegrationConnectionError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Enable or reconfigure a form's destination
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FormIntegration"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SetFormIntegrationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Start sending this form's responses to the provider, or change how. Respondent answers leave Fillo and land in that account, so this is outward-facing (Tier B). Writable keys per provider: google_sheets <c>spreadsheetId</c> and <c>sheetTabId</c> (omit both to create a new spreadsheet); notion <c>titleFieldId</c>; slack <c>slackChannelId</c> and <c>slackIncludeFieldIds</c>; hubspot <c>hubspotEmailFieldId</c> (required), <c>hubspotMappings</c>, <c>hubspotCreateMarketableContact</c>, <c>hubspotCompany</c>, and <c>hubspotDeal</c> — HubSpot is saved whole, so a workflow you stop naming is dropped. An unknown key is a 400. Scope: integrations:manage.
    /// </remarks>
    public Task<FormIntegration> SetFormIntegration(SetFormIntegrationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/forms/{form}/integrations/{provider}"),
            [new TemplateParam("form", request.Form), new TemplateParam("provider", request.Provider)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<FormIntegration>(),
            SetFormIntegrationError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
