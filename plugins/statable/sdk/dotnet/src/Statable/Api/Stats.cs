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
using Statable.Requests.Stats;

namespace Statable.Api;

/// <summary>
/// Read analytics data.
/// </summary>
public sealed class Stats
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Stats(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Live count of visitors active in the last 5 minutes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CurrentVisitorsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CurrentVisitorsError"/> when the server returns an error response.</exception>
    public Task<CurrentVisitorsResponse> CurrentVisitors(CurrentVisitorsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/current-visitors"),
            [],
            [new Param("site_id", request.SiteId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CurrentVisitorsResponse>(),
            CurrentVisitorsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// The account's subscription state
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SubscriptionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSubscriptionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The subscription of the key's owner, in one line's worth of fields: enough to say "Trial — N days left", not a billing page. Hobby-only accounts have no subscription and answer <c>status: "none"</c> with <c>only_hobby: true</c>.
    /// </remarks>
    public Task<SubscriptionResponse> GetSubscription(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/subscription"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SubscriptionResponse>(),
            GetSubscriptionError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List a site's configured conversion funnels
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FunnelsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListFunnelsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the site's saved funnel definitions (managed in the dashboard). Use a funnel <c>id</c> with POST /funnels/{id}/report. Funnels are read-only over the API — this endpoint does not create or edit them.
    /// </remarks>
    public Task<FunnelsResponse> ListFunnels(ListFunnelsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/funnels"),
            [],
            [new Param("site_id", request.SiteId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<FunnelsResponse>(),
            ListFunnelsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List a site's custom-property keys
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PropsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPropKeysError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The custom-property keys a site has recorded (each paired with the event it was sent with) — discovery for the event:props: breakdown. Returns the full set (no pagination) for the window.
    /// </remarks>
    public Task<PropsResponse> ListPropKeys(ListPropKeysRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/props"),
            [],
            [new Param("site_id", request.SiteId), new Param("date_range", request.DateRange)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PropsResponse>(),
            ListPropKeysError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List the sites this key can read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SitesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSitesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the sites the authenticating key may read — useful for discovering <c>site_id</c> values and token introspection. An all-sites key returns every accessible site (sorted by name); a single-site key returns just its one site (or an empty list if access was removed).
    /// </remarks>
    public Task<SitesResponse> ListSites(ListSitesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sites"),
            [],
            [new Param("date_range", request.DateRange)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SitesResponse>(),
            ListSitesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Run one analytics query
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="QueryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="QueryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// One query returns a list of result rows. With no <c>dimensions</c> it is an aggregate (one row); with one time dimension (<c>time[:hour|day|week|month]</c>) it is a time series; with one breakdown dimension it is a top-N list plus a <c>meta</c> pagination block. The response always echoes the resolved request in <c>query</c> (most usefully <c>date_range</c> normalized to concrete <c>[from,to]</c> dates). At most one dimension per query.
    /// </remarks>
    public Task<QueryResponse> Query(QueryOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/query"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<QueryResponse>(),
            QueryError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Run a saved funnel and return per-step conversions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FunnelReportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RunFunnelReportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Runs a saved funnel over a date range (+ optional segment filters) and returns an ORDERED per-step result with top-level scalars — a bespoke, non-tabular shape (funnel output is not rows). <c>steps</c> must not be sorted; <c>conversion_rate</c> is cumulative versus the first step (<c>entering</c>), not step-to-step. The intra-conversion window is a fixed 1 day, independent of <c>date_range</c> (which only bounds the sessions scanned).
    /// </remarks>
    public Task<FunnelReportResponse> RunFunnelReport(RunFunnelReportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/funnels/{id}/report"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<FunnelReportResponse>(),
            RunFunnelReportError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
