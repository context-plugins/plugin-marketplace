using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Paid.Core;
using Paid.Core.Authentication;
using Paid.Core.Exceptions;
using Paid.Core.Models;
using Paid.Core.Request;
using Paid.Core.Response;
using Paid.Errors;
using Paid.Models;
using Paid.Requests.CustomViewsExperimental;

namespace Paid.Api;

public sealed class CustomViewsExperimental
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal CustomViewsExperimental(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create a custom view (experimental)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomView"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCustomViewError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// ⚠️ <b>Experimental</b> — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.
    /// <para>
    /// ⚠️ Only call this when the user has EXPLICITLY asked to save or create the view. After generating or previewing a dashboard, do NOT automatically save a draft — show it to the user and wait for them to ask you to save it. Creating saves a DRAFT only; it is NOT permission to publish — never chain a publish onto a create. After saving, hand the user the previewUrl and wait for their feedback before doing anything else. Saves named analytics queries + a self-contained HTML render bundle as a DRAFT custom view. <b>Call getCustomViewAuthoringGuide (GET /experimental/views/authoring-guide) first</b> — it returns the full guide and a copy-paste interactive template. Key rules: (1) Do NOT add a customer filter to the SQL — the database scopes every query to the viewing customer at embed time. (2) Each query's SQL must be SELECT-only; return clearly-named columns. Compute metric VALUES in SQL (e.g. (count()*2)/5 AS custom_metric) — derive a number in the render bundle only when it depends on user interaction (toggle/filter/hover) or is pure formatting of a value a query already returns. (3) The render bundle must be SELF-CONTAINED — inline all CSS/JS/charting, NO external loads or fetch (the sandbox has connect-src 'none'); it must listen for the <c>paid:data</c> message (data keyed by query id) and re-render on each one. (4) Make it INTERACTIVE — mousemove hover tooltips and at least one addEventListener-wired control that re-renders (a static chart feels broken). (5) The render bundle is the single source of truth — BEFORE saving, preview the EXACT bundle in the user's current client (call getCustomViewPreviewHarness with your bundle + sample data and render the HTML it returns) and show it to the user; that preview in the current client is how the user first sees the dashboard. Do NOT save a draft just to preview it in Paid — creating writes to the user's real account and is never a preview step. Do NOT build a separate chart, and only show numbers that come from a declared query. (6) A view is a FULL dashboard — include as many charts/KPIs as the analysis has. Keep every element derived from the single viewing customer (KPIs, trends, type mix); drop only cross-customer comparisons (rankings, share-of-total, 'N customers'). Don't simplify to one chart. (7) To make the date range adjustable (e.g. the user says 'last month'), write the date boundary as <c>{period_start:DateTime}</c> / <c>{period_end:DateTime}</c> placeholders in the SQL and pass a default <c>period</c> (relative like {kind:'relative',unit:'month',amount:1}, or absolute start/end). The org user can then change it in Paid without re-authoring. A query using the placeholders REQUIRES a period. Do NOT add your own date-range picker to the render bundle — Paid owns the timeframe and the bundle receives already-filtered data; a second in-bundle picker cannot re-run the SQL. (8) Check your draft with validateCustomView (POST /experimental/views/validate) BEFORE asking the user to save — it runs these same gates without persisting and reports every problem at once. The response returns a <c>previewUrl</c> — give it to the user so they can open the new view in Paid.
    /// </para>
    /// </remarks>
    public Task<CustomView> CreateCustomView(CreateCustomViewOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/experimental/views/"),
            [],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CustomView>(),
            CreateCustomViewError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a custom view's metadata + render bundle (experimental)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomViewDetail"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCustomViewError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// ⚠️ <b>Experimental</b> — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.
    /// <para>
    /// Returns the view's name, status, query ids, and the author render bundle for the owning organization (DRAFT or PUBLISHED). Used by the trusted preview/embed frame to render the sandbox; the per-customer data is fetched separately via /:displayId/data.
    /// </para>
    /// </remarks>
    public Task<CustomViewDetail> GetCustomView(GetCustomViewRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/experimental/views/{displayId}"),
            [new TemplateParam("displayId", request.DisplayId)],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CustomViewDetail>(),
            GetCustomViewError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch a custom view's data, scoped to a customer or the organization…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ViewDataResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCustomViewDataError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// ⚠️ <b>Experimental</b> — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.
    /// <para>
    /// Runs every stored query of the view on the read-only analytics database and returns the result sets keyed by query id. For a customer-scoped view (the default), the query is scoped to the caller's organization AND the given <c>customerId</c> (both enforced as ClickHouse row filters) — <c>customerId</c> is required. For an organization-scoped view, the data is org-wide (scoped only to the caller's organization) and <c>customerId</c> is ignored. The scope is enforced by the database — it cannot be widened by the stored SQL.
    /// </para>
    /// </remarks>
    public Task<ViewDataResponse> GetCustomViewData(GetCustomViewDataRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/experimental/views/{displayId}/data"),
            [new TemplateParam("displayId", request.DisplayId)],
            [
                new Param("customerId", request.CustomerId),
                new Param("periodKind", request.PeriodKind),
                new Param("periodUnit", request.PeriodUnit),
                new Param("periodAmount", request.PeriodAmount),
                new Param("periodStart", request.PeriodStart),
                new Param("periodEnd", request.PeriodEnd),
            ],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ViewDataResponse>(),
            GetCustomViewDataError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get an embed token for a custom view
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomViewEmbedTokenResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCustomViewEmbedTokenError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// ⚠️ <b>Experimental</b> — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.
    /// <para>
    /// Mints a short-lived, customer-scoped token for embedding a published custom view. Call this from your server with your API key, then pass the returned token to the embed SDK. Organization-scoped views cannot be embedded per-customer — this returns a 400 (<c>ORG_SCOPED_VIEW_NOT_EMBEDDABLE</c>) for one.
    /// </para>
    /// </remarks>
    public Task<CustomViewEmbedTokenResponse> GetCustomViewEmbedToken(GetCustomViewEmbedTokenRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/experimental/views/{displayId}/embed-token"),
            [new TemplateParam("displayId", request.DisplayId)],
            [new Param("customerId", request.CustomerId), new Param("ttlSeconds", request.TtlSeconds)],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CustomViewEmbedTokenResponse>(),
            GetCustomViewEmbedTokenError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List custom views (experimental)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomViewListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCustomViewsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// ⚠️ <b>Experimental</b> — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.
    /// <para>
    /// Lists the organization's custom views (newest first) with lightweight summary info — name, status, query count, default date range, created date. Does not return the SQL or render bundle; fetch a single view via getCustomView for those.
    /// </para>
    /// </remarks>
    public Task<CustomViewListResponse> ListCustomViews(ListCustomViewsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/experimental/views/"),
            [],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CustomViewListResponse>(),
            ListCustomViewsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Publish a custom view (experimental)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomView"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PublishCustomViewError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// ⚠️ <b>Experimental</b> — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.
    /// <para>
    /// ⚠️ Never publish as an automatic follow-up to creating or generating a view. Only call this after you have shown the user the built/previewed view and they have EXPLICITLY approved publishing — building and publishing are separate user decisions, and answering an earlier question (e.g. the view's scope) is NOT publish approval. Flips the view from DRAFT to PUBLISHED. Only PUBLISHED views are served on the embed data path — this is the gate that stops an unreviewed view reaching end-customers. Idempotent: publishing an already-published view is a no-op success. The response returns a <c>previewUrl</c> — give it to the user so they can open the view in Paid.
    /// </para>
    /// </remarks>
    public Task<CustomView> PublishCustomView(PublishCustomViewRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/experimental/views/{displayId}/publish"),
            [new TemplateParam("displayId", request.DisplayId)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CustomView>(),
            PublishCustomViewError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a custom view (experimental)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomView"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateCustomViewError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// ⚠️ <b>Experimental</b> — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.
    /// <para>
    /// Partially updates a view. Omitted fields are left unchanged. For REVISIONS, prefer the incremental fields — <c>bundleEdits</c> (exact search-and-replace on the stored render bundle) and <c>queryUpserts</c>/<c>queryRemovals</c> (per-query changes) — so you transmit only what changed instead of re-sending the whole payload. The full-replacement fields remain for rewrites: <c>renderBundle</c>, and <c>queries</c> (a FULL replacement of the query list — never drop queries the user didn't ask to remove). Replacement and incremental forms of the same aspect cannot be combined. The resulting SQL and bundle pass the same validation as createCustomView (SELECT-only, size cap, self-contained, paid:data listener). Works on DRAFT or PUBLISHED views — published embeds pick the change up on their next load.
    /// </para>
    /// </remarks>
    public Task<CustomView> UpdateCustomView(UpdateCustomViewOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/experimental/views/{displayId}"),
            [new TemplateParam("displayId", request.DisplayId)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CustomView>(),
            UpdateCustomViewError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Change a custom view's date range (experimental)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomView"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateCustomViewPeriodError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// ⚠️ <b>Experimental</b> — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.
    /// <para>
    /// Updates the view's default date range (the period applied to queries that use the <c>{period_start:DateTime}</c> / <c>{period_end:DateTime}</c> placeholders). Accepts a relative rolling window (e.g. last 30 days) or a fixed start/end range. Lets the period be changed after deployment without re-authoring the SQL. Applies to DRAFT or PUBLISHED views.
    /// </para>
    /// </remarks>
    public Task<CustomView> UpdateCustomViewPeriod(UpdateCustomViewPeriodOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/experimental/views/{displayId}/period"),
            [new TemplateParam("displayId", request.DisplayId)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CustomView>(),
            UpdateCustomViewPeriodError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
