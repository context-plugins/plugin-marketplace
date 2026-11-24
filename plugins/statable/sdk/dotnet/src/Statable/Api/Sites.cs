using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Statable.Core;
using Statable.Core.Exceptions;
using Statable.Core.Models;
using Statable.Core.Request;
using Statable.Core.Response;
using Statable.Errors;
using Statable.Models;
using Statable.Requests.Sites;

namespace Statable.Api;

/// <summary>
/// Create, change and delete sites (write surface). Requires the <c>sites:write</c> scope and the server-side <c>API_WRITE_ENABLED</c> flag; the snippet route needs only <c>read</c>. See docs/api-v1-write-surface.md §5.
/// </summary>
public sealed class Sites
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Sites(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a funnel
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FunnelDefinition"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateFunnelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Owner or admin only. A step pointing at a goal this site does not have is 400, naming the step. A duplicate name is 409 <c>funnel_exists</c>. Listing and running funnels lives on the read surface (GET /funnels, POST /funnels/{id}/report).
    /// </remarks>
    public Task<FunnelDefinition> CreateFunnel(CreateFunnelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sites/{id}/funnels"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<FunnelDefinition>(),
            CreateFunnelError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a goal
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Goal"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateGoalError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Owner or admin only. A duplicate name is 409 <c>goal_exists</c>.
    /// </remarks>
    public Task<Goal> CreateGoal(CreateGoalRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sites/{id}/goals"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Goal>(),
            CreateGoalError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a site and get its install snippet
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SiteDetail"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSiteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a site and returns everything needed to install tracking, so provisioning is one round-trip. Requires an ALL-SITES key: a single-site key gets 403 <c>key_not_scoped</c>, since the new site would be outside its own scope. A duplicate url is 409 <c>site_exists</c> — unlike the dashboard, which permits it: for an agent a duplicate is nearly always a retry that lost its response. The first non-hobby site starts the trial subscription exactly as the dashboard does. Send an <c>Idempotency-Key</c> to make retries safe.
    /// </remarks>
    public Task<SiteDetail> CreateSite(CreateSiteOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sites"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", request.IdempotencyKey)],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SiteDetail>(),
            CreateSiteError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a funnel
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteFunnelError"/> when the server returns an error response.</exception>
    public Task DeleteFunnel(DeleteFunnelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sites/{id}/funnels/{funnelId}"),
            [new TemplateParam("id", request.Id), new TemplateParam("funnelId", request.FunnelId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteFunnelError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a goal
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteGoalError"/> when the server returns an error response.</exception>
    public Task DeleteGoal(DeleteGoalRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sites/{id}/goals/{goalId}"),
            [new TemplateParam("id", request.Id), new TemplateParam("goalId", request.GoalId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteGoalError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a site
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteSiteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Owner only — an admin may edit the site but not delete it — and it really deletes: the site plus its goals, hostnames, blocklists and import jobs, with its ClickHouse data removed asynchronously. An admin or a member gets 403 <c>not_site_owner</c> — there is no API equivalent of the dashboard's "remove my access".
    /// </remarks>
    public Task DeleteSite(DeleteSiteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sites/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteSiteError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// IP blocklist
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SitesSettingsBlockedIpsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBlockedIPsError"/> when the server returns an error response.</exception>
    public Task<SitesSettingsBlockedIpsResponse> GetBlockedIPs(GetBlockedIPsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sites/{id}/settings/blocked-ips"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SitesSettingsBlockedIpsResponse>(),
            GetBlockedIPsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Country allow/block list
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CountryList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCountrySettingsError"/> when the server returns an error response.</exception>
    public Task<CountryList> GetCountrySettings(GetCountrySettingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sites/{id}/settings/countries"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CountryList>(),
            GetCountrySettingsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Hostname allow/block list
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="HostnameList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetHostnameSettingsError"/> when the server returns an error response.</exception>
    public Task<HostnameList> GetHostnameSettings(GetHostnameSettingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sites/{id}/settings/hostnames"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<HostnameList>(),
            GetHostnameSettingsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Whether the site's stats are world-readable
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicDashboard"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPublicDashboardError"/> when the server returns an error response.</exception>
    public Task<PublicDashboard> GetPublicDashboard(GetPublicDashboardRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sites/{id}/settings/public-dashboard"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicDashboard>(),
            GetPublicDashboardError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// The install tag for a site
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SiteSnippet"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSiteSnippetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the script URL and the ready-to-paste tag. Scope <c>read</c>, not <c>sites:write</c>: the snippet is public information (it ends up in the page source), and shared users may install tracking too. <c>type</c> selects a widget instead of the tracker: a hobby site gets the bundled <c>/t/</c> build, which counts as well as draws, a paid site the widget-only build — its counting is the tracker tag it installs separately.
    /// </remarks>
    public Task<SiteSnippet> GetSiteSnippet(GetSiteSnippetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sites/{id}/snippet"),
            [new TemplateParam("id", request.Id)],
            [new Param("type", request.Type)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SiteSnippet>(),
            GetSiteSnippetError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// What the installed script collects
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TrackingSettings"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTrackingSettingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the site's effective feature selection plus the full catalogue — each entry's state, its dependencies and its marginal brotli cost — so a caller can trade capability against script weight without a second call. Owner or admin only.
    /// </remarks>
    public Task<TrackingSettings> GetTrackingSettings(GetTrackingSettingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sites/{id}/settings/tracking"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TrackingSettings>(),
            GetTrackingSettingsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// The site's goals
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SitesGoalsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSiteGoalsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Goal definitions with their ids, for the write calls below.
    /// </remarks>
    public Task<SitesGoalsResponse> ListSiteGoals(ListSiteGoalsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sites/{id}/goals"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SitesGoalsResponse>(),
            ListSiteGoalsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Replace the IP blocklist
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SettingsCount"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SetBlockedIPsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Owner or admin only; replaces the whole list. Unlike the dashboard equivalent this answers 400/500 on a bad body or a failed write instead of 200 with success:false — a status-checking client must not read a failure as done.
    /// </remarks>
    public Task<SettingsCount> SetBlockedIPs(SetBlockedIPsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sites/{id}/settings/blocked-ips"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SettingsCount>(),
            SetBlockedIPsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Replace the country lists
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SettingsCount"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SetCountrySettingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Owner or admin only; replaces the whole list. Unlike the dashboard equivalent this answers 400/500 on a bad body or a failed write instead of 200 with success:false — a status-checking client must not read a failure as done.
    /// </remarks>
    public Task<SettingsCount> SetCountrySettings(SetCountrySettingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sites/{id}/settings/countries"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SettingsCount>(),
            SetCountrySettingsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Replace the hostname lists
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SettingsCount"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SetHostnameSettingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Owner or admin only; replaces the whole list. Unlike the dashboard equivalent this answers 400/500 on a bad body or a failed write instead of 200 with success:false — a status-checking client must not read a failure as done.
    /// </remarks>
    public Task<SettingsCount> SetHostnameSettings(SetHostnameSettingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sites/{id}/settings/hostnames"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SettingsCount>(),
            SetHostnameSettingsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Publish or unpublish the site's stats
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicDashboard"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SetPublicDashboardError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Owner or admin only. <c>enabled</c> must be sent explicitly — this is the one setting that changes who can SEE the data, so an absent field must not read as "turn it off".
    /// <para>
    /// A hobby site on a free account is always public and answers <c>409 hobby_always_public</c> to <c>enabled: false</c>. Its stats are the widget it ships, and the hash that addresses them is already in the page's markup; <c>enabled: true</c> on one succeeds as a no-op. An owner with a paid subscription (<c>active</c>, or <c>past_due</c> during a retried renewal) may turn it off.
    /// </para>
    /// </remarks>
    public Task<PublicDashboard> SetPublicDashboard(SetPublicDashboardRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sites/{id}/settings/public-dashboard"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PublicDashboard>(),
            SetPublicDashboardError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set the tracking feature list
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TrackingSettings"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SetTrackingSettingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Replaces the selection wholesale. <c>features</c> is REQUIRED — an omitted key would be indistinguishable from <c>[]</c>, which disables everything optional. Locked features stay enabled whether or not they are sent, and a feature whose <c>requires</c> are unmet is rejected. Applying repoints the served bundle, then stores the selection, then purges the CDN — the same order the dashboard uses. Owner or admin only.
    /// </remarks>
    public Task<TrackingSettings> SetTrackingSettings(SetTrackingSettingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sites/{id}/settings/tracking"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TrackingSettings>(),
            SetTrackingSettingsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Replace a funnel
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FunnelDefinition"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateFunnelError"/> when the server returns an error response.</exception>
    public Task<FunnelDefinition> UpdateFunnel(UpdateFunnelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sites/{id}/funnels/{funnelId}"),
            [new TemplateParam("id", request.Id), new TemplateParam("funnelId", request.FunnelId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<FunnelDefinition>(),
            UpdateFunnelError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Replace a goal
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Goal"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateGoalError"/> when the server returns an error response.</exception>
    public Task<Goal> UpdateGoal(UpdateGoalRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sites/{id}/goals/{goalId}"),
            [new TemplateParam("id", request.Id), new TemplateParam("goalId", request.GoalId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Goal>(),
            UpdateGoalError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Change a site's url, timezone or week start
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SiteDetail"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateSiteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Owner or admin only — a member gets 403 <c>not_site_owner</c>. Omitted fields are left alone. Unlike the read surface there is no tracking-active gate: a lapsed account must still be able to fix and clean up its sites. Another account's id answers 404 <c>unknown_site</c>, exactly as a nonexistent one.
    /// </remarks>
    public Task<SiteDetail> UpdateSite(UpdateSiteOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sites/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SiteDetail>(),
            UpdateSiteError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
