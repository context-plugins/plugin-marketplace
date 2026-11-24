using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DoiT.Core;
using DoiT.Core.Authentication;
using DoiT.Core.Exceptions;
using DoiT.Core.Models;
using DoiT.Core.Request;
using DoiT.Core.Response;
using DoiT.Errors;
using DoiT.Models;
using DoiT.Requests.PerfectScaleForCommitmentsGcp;

namespace DoiT.Api;

/// <summary>
/// Evaluate current GCP commitments, plan and automate purchases, and optimize cloud costs with PerfectScale for Commitments.
/// </summary>
public sealed class PerfectScaleForCommitmentsGcp
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal PerfectScaleForCommitmentsGcp(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get a GCP billing account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GcpBillingAccountDetail"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGcpBillingAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a single GCP Billing Account with the same list-item fields as List GCP Billing Accounts, plus the Overview time series. Use this when you need a single billing account's Console Overview in one call (identity and onboarding status, 30-day ESR and savings, YTD/lifetime totals, CUD export health, and the data behind Cost Summary and CUD Coverage charts) without fetching every billing account.
    /// <para>
    /// Fields that drive the Overview tab in the DoiT console — each is an array with one entry per product line (<c>service</c> of <c>compute</c> or <c>cloud_sql</c>):
    /// - <c>stats30d</c>: last 30 days ESR and realized savings per product line (ESR and Savings cards).
    /// - <c>monthlyStats</c>: last 6 calendar months of ESR, on-demand cost, and cost with savings per product line (Cost Summary chart, and month-over-month card trends).
    /// - <c>dailyCoverage</c>: last 30 days of CUD coverage breakdown per product line (CUD Coverage chart).
    /// - <c>savingsTotals</c>: year-to-date and lifetime realized savings per product line (shown under the Savings card). Lifetime is bounded by PerfectScale for Commitments onboarding start.
    /// </para>
    /// </remarks>
    public Task<GcpBillingAccountDetail> GetGcpBillingAccount(GetGcpBillingAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ps4commitments/v1/gcp/billing-accounts/{billingAccountId}"),
            [new TemplateParam("billingAccountId", request.BillingAccountId)],
            [],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GcpBillingAccountDetail>(),
            GetGcpBillingAccountError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a GCP recommendation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GcpRecommendationWithEligibleSpend"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGcpRecommendationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the recommendation for one product line (<c>gcp_service</c>) and region scope on the GCP
    /// billing account, including analysis metrics and time-bucketed eligible spend. Use
    /// <c>granularity</c> to choose the eligible-spend bucket size (defaults to <c>day</c>).
    /// <para>
    /// <b><c>region</c></b>: optional for <c>compute</c>, defaulting to <c>global</c> (its only scope). Required
    /// for <c>cloud_sql</c> — omitting it returns <c>400</c> with code <c>validation_failed</c>, as does a
    /// malformed region or one incompatible with <c>gcp_service</c> (<c>cloud_sql</c> never uses <c>global</c>).
    /// A well-formed region the billing account has never had eligible spend in returns <c>404</c>
    /// with code <c>not_found</c> — the scope does not exist, same as an unknown billing account.
    /// When the scope exists but no stored recommendation matches, the response is <c>200</c> with
    /// <c>recommendation</c> omitted and <c>estimatedEquivalentRecommendedCommitment</c> of <c>0</c>.
    /// </para>
    /// </remarks>
    public Task<GcpRecommendationWithEligibleSpend> GetGcpRecommendation(GetGcpRecommendationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ps4commitments/v1/gcp/billing-accounts/{billingAccountId}/recommendations/{gcp_service}"),
            [
                new TemplateParam("billingAccountId", request.BillingAccountId),
                new TemplateParam("gcp_service", request.GcpService),
            ],
            [new Param("region", request.Region), new Param("granularity", request.Granularity)],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GcpRecommendationWithEligibleSpend>(),
            GetGcpRecommendationError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List GCP billing accounts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Ps4CommitmentsV1GcpBillingAccountsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListGcpBillingAccountsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns all GCP Billing Accounts accessible to the authenticated tenant. Use as the entry point to discover GCP billing account IDs, and billing-account-level onboarding status of the available product lines and savings metrics.
    /// <para>
    /// Each item includes metadata, CUD export health, trailing 30-day aggregate statistics, and precomputed YTD/lifetime savings totals per product line. Sum across items for customer-level totals.
    /// </para>
    /// </remarks>
    public Task<Ps4CommitmentsV1GcpBillingAccountsResponse> ListGcpBillingAccounts(ListGcpBillingAccountsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ps4commitments/v1/gcp/billing-accounts"),
            [],
            [new Param("pageToken", request.PageToken), new Param("maxResults", request.MaxResults)],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Ps4CommitmentsV1GcpBillingAccountsResponse>(),
            ListGcpBillingAccountsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List billing account engine settings
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Ps4CommitmentsV1GcpSettingsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListGcpBillingAccountsSettingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns one item per onboarded GCP Billing Account. Each item includes that billing
    /// account's recommendation and automation engine settings for each product line activated
    /// on it, per region scope: one <c>global</c> entry for <c>compute</c>, and one entry per known region
    /// for <c>cloud_sql</c>.
    /// <para>
    /// Cloud SQL regions come from the billing account's persisted settings: a region is added
    /// when eligible spend is first seen there and is never removed, so its settings entry
    /// remains listed even if spend later drops to zero. Items are sorted by
    /// <c>billingAccountId</c>; within an item, <c>services</c> lists <c>compute</c> before <c>cloud_sql</c>, with
    /// <c>cloud_sql</c> regions sorted alphabetically.
    /// </para>
    /// <para>
    /// Settings are stored independently on each billing account. Existing customer-level
    /// settings are copied lazily when an account is first read or initialized; if no valid
    /// legacy value exists, the complete backend defaults are materialized once on the account.
    /// Only product lines that are activated/onboarded for a given billing account are returned.
    /// </para>
    /// <para>
    /// In the DoiT Console, these settings are edited on an account's Settings tab.
    /// </para>
    /// </remarks>
    public Task<Ps4CommitmentsV1GcpSettingsResponse> ListGcpBillingAccountsSettings(ListGcpBillingAccountsSettingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ps4commitments/v1/gcp/settings"),
            [],
            [new Param("pageToken", request.PageToken), new Param("maxResults", request.MaxResults)],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Ps4CommitmentsV1GcpSettingsResponse>(),
            ListGcpBillingAccountsSettingsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List GCP planned purchases
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListGcpPlannedPurchasesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the laddering projections for the billing account, grouped by PS4C product line
    /// (<c>service</c>) and region. Each service group lists one entry per available
    /// <c>gcp-purchases-projection</c> document for that scope (<c>compute</c> scopes are <c>global</c>;
    /// <c>cloud_sql</c> scopes are per-region).
    /// <para>
    /// With no filters, returns all existing projection documents in stable order: service groups
    /// ordered <c>compute</c> first, then <c>cloud_sql</c>; within each group, regions sorted with <c>global</c>
    /// first, then remaining regions alphabetically. Services with no projection documents are omitted
    /// (not returned as empty groups). When a filter matches no documents, the response is an
    /// empty <c>items</c> array (not <c>404</c>). Partial projection documents return only the fields
    /// available in storage.
    /// </para>
    /// <para>
    /// <b><c>gcp_service</c> and <c>region</c> filters</b>: omit both to return all available services and
    /// their regions; supply <c>gcp_service</c> alone to return all regions for that service; supply
    /// both to return a single service/region scope. <c>region</c> requires <c>gcp_service</c> — a request
    /// with <c>region</c> but no <c>gcp_service</c> returns <c>400</c> with code <c>gcp_service_required</c>. Invalid
    /// <c>gcp_service</c> or <c>region</c> values return <c>400</c> with code <c>validation_failed</c>.
    /// </para>
    /// <para>
    /// <c>404</c> is returned only when the billing account does not exist or the caller cannot access
    /// it. A billing account that is not onboarded for PS4C still returns <c>200</c> with an empty
    /// <c>items</c> array when no projection documents exist — use
    /// <c>GET /ps4commitments/v1/gcp/billing-accounts</c> (or get-by-id) for onboarding status.
    /// </para>
    /// <para>
    /// <b>Pagination</b>: results are paginated by <b>service group</b> (a whole group is never split
    /// across pages). Groups keep the stable service order above. Use <c>maxResults</c> to limit
    /// page size (default 50, max 500). When more groups remain, the response includes a
    /// non-null <c>pageToken</c>; pass it unchanged on the next request with the same query parameters
    /// (<c>gcp_service</c>, <c>region</c>, <c>maxResults</c>). <c>rowCount</c> is the number of service groups in
    /// this page. An invalid <c>pageToken</c> returns <c>400</c> with code <c>pagination_token_invalid</c>; an
    /// expired token returns <c>400</c> with code <c>pagination_token_expired</c>.
    /// </para>
    /// </remarks>
    public Task<Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse> ListGcpPlannedPurchases(ListGcpPlannedPurchasesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ps4commitments/v1/gcp/billing-accounts/{billingAccountId}/planned-purchases"),
            [new TemplateParam("billingAccountId", request.BillingAccountId)],
            [
                new Param("gcp_service", request.GcpService),
                new Param("region", request.Region),
                new Param("pageToken", request.PageToken),
                new Param("maxResults", request.MaxResults),
            ],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse>(),
            ListGcpPlannedPurchasesError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List GCP recommendations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListGcpRecommendationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns commitment purchase recommendations for the billing account, filtered to the
    /// term preferred in each product line's settings (<c>preferredCommitmentPeriod</c>).
    /// <para>
    /// <b><c>gcp_service</c> and <c>region</c> filters</b>: omit both to return recommendations for all
    /// product lines (<c>compute</c>, <c>cloud_sql</c>) across all their regions. Supply <c>gcp_service</c>
    /// alone to return all regions for that service; supply both to return a single
    /// service/region scope. <c>region</c> requires <c>gcp_service</c> — a request with <c>region</c> but no
    /// <c>gcp_service</c> returns <c>400</c> with code <c>gcp_service_required</c>. A <c>region</c> that is malformed
    /// or incompatible with <c>gcp_service</c> (<c>compute</c> is <c>global</c>-only, <c>cloud_sql</c> is
    /// regional-only) returns <c>400</c> with code <c>validation_failed</c>; a well-formed, compatible
    /// region with no data returns <c>200</c> with an empty <c>items</c> array.
    /// </para>
    /// <para>
    /// <c>404</c> is returned only when the billing account does not exist or the caller cannot access
    /// it. A billing account with no matching recommendation documents returns <c>200</c> with an empty
    /// <c>items</c> array.
    /// </para>
    /// </remarks>
    public Task<Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse> ListGcpRecommendations(ListGcpRecommendationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ps4commitments/v1/gcp/billing-accounts/{billingAccountId}/recommendations"),
            [new TemplateParam("billingAccountId", request.BillingAccountId)],
            [new Param("gcp_service", request.GcpService), new Param("region", request.Region)],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse>(),
            ListGcpRecommendationsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List GCP resource-based Committed Use Discounts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListGcpResourceCudsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of resource-based (vCPU / memory) CUDs for the billing account. Optionally filter by CUD state (<c>status</c>). Omit to return CUDs in all states.
    /// </remarks>
    public Task<Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse> ListGcpResourceCuds(ListGcpResourceCudsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ps4commitments/v1/gcp/billing-accounts/{billingAccountId}/resource-based"),
            [new TemplateParam("billingAccountId", request.BillingAccountId)],
            [
                new Param("status", request.Status),
                new Param("pageToken", request.PageToken),
                new Param("maxResults", request.MaxResults),
            ],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse>(),
            ListGcpResourceCudsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List GCP spend-based Committed Use Discounts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListGcpSpendCudsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of spend-based CUDs for the billing account. Optionally filter by
    /// CUD state (<c>status</c>); omit to return CUDs in all states.
    /// <para>
    /// <b><c>gcp_service</c> and <c>region</c> filters</b>: <c>gcp_service</c> narrows results to one product
    /// line's coverage sub-type (<c>compute</c> or <c>cloud_sql</c>); <c>region</c> additionally narrows to one
    /// region scope and requires <c>gcp_service</c> — a request with <c>region</c> but no <c>gcp_service</c>
    /// returns <c>400</c> with code <c>gcp_service_required</c>. A <c>region</c> that is malformed or
    /// incompatible with <c>gcp_service</c> (<c>compute</c> is <c>global</c>-only, <c>cloud_sql</c> is regional-only)
    /// returns <c>400</c> with code <c>validation_failed</c>; a well-formed, compatible region with no
    /// matching CUDs returns <c>200</c> with an empty <c>items</c> array. Note the <c>region</c> query parameter
    /// uses the <c>lower_snake_case</c> wire form (<c>us_central1</c>), while each item's <c>region</c> field
    /// echoes the raw provider value (<c>us-central1</c>).
    /// </para>
    /// </remarks>
    public Task<Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse> ListGcpSpendCuds(ListGcpSpendCudsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ps4commitments/v1/gcp/billing-accounts/{billingAccountId}/spend-based"),
            [new TemplateParam("billingAccountId", request.BillingAccountId)],
            [
                new Param("status", request.Status),
                new Param("gcp_service", request.GcpService),
                new Param("region", request.Region),
                new Param("pageToken", request.PageToken),
                new Param("maxResults", request.MaxResults),
            ],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse>(),
            ListGcpSpendCudsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
