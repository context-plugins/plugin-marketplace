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
using DoiT.Requests.PerfectScaleForCommitmentsAws;

namespace DoiT.Api;

/// <summary>
/// Evaluate current AWS commitments, plan and automate purchases, and optimize cloud costs with PerfectScale for Commitments.
/// </summary>
public sealed class PerfectScaleForCommitmentsAws
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal PerfectScaleForCommitmentsAws(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get a member account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AwsMemberAccountDetail"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAwsMemberAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a single member AWS account with the same list-item fields as List member accounts, plus the Overview time series. Use this when you need a single members Console Overview in one call (identity and onboarding status, 30-day ESR and savings, YTD/lifetime totals, monthly potential savings, and the data behind Cost Summary and Commitment Coverage charts) without fetching every member account.
    /// <para>
    /// Fields that drive the Overview tab in the DoiT console:
    /// - <c>stats30d</c>: last 30 days ESR and realized savings per SP type (ESR and Savings cards).
    /// - <c>monthlyStats</c>: last 6 calendar months of ESR, on-demand cost, and cost with savings per SP type (Cost Summary chart, and month-over-month card trends).
    /// - <c>dailyCoverage</c>: last 30 days of commitment coverage breakdown per SP type (Commitment Coverage chart).
    /// - <c>savingsTotals</c>: year-to-date and lifetime realized savings per SP type (shown under the Savings card). Lifetime is bounded by the parent organization's PerfectScale for Commitments onboarding start.
    /// - <c>monthlyPotentialSavings</c>: estimated monthly additional savings per SP type from the latest purchase projection.
    /// </para>
    /// </remarks>
    public Task<AwsMemberAccountDetail> GetAwsMemberAccount(GetAwsMemberAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/ps4commitments/v1/aws/organizations/{managementAccountId}/member-accounts/{memberAccountId}"),
            [
                new TemplateParam("managementAccountId", request.ManagementAccountId),
                new TemplateParam("memberAccountId", request.MemberAccountId),
            ],
            [],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AwsMemberAccountDetail>(),
            GetAwsMemberAccountError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get an AWS organization
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AwsOrganizationDetail"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAwsOrganizationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a single AWS organization with the same list-item fields as List AWS Organizations, plus the Overview time series. Use this when you need a single organization's Console Overview in one call (identity and onboarding status, 30-day ESR and savings, YTD/lifetime totals, monthly potential savings, and the data behind Cost Summary and Commitment Coverage charts) without fetching every organization.
    /// <para>
    /// Fields that drive the Overview tab in the DoiT console:
    /// - <c>stats30d</c>: last 30 days ESR and realized savings per SP type (ESR and Savings cards).
    /// - <c>monthlyStats</c>: last 6 calendar months of ESR, on-demand cost, and cost with savings per SP type (Cost Summary chart, and month-over-month card trends).
    /// - <c>dailyCoverage</c>: last 30 days of commitment coverage breakdown per SP type (Commitment Coverage chart).
    /// - <c>savingsTotals</c>: year-to-date and lifetime realized savings per SP type (shown under the Savings card). Lifetime is bounded by PerfectScale for Commitments onboarding start.
    /// - <c>monthlyPotentialSavings</c>: estimated monthly additional savings per SP type from the latest purchase projection.
    /// </para>
    /// </remarks>
    public Task<AwsOrganizationDetail> GetAwsOrganization(GetAwsOrganizationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ps4commitments/v1/aws/organizations/{managementAccountId}"),
            [new TemplateParam("managementAccountId", request.ManagementAccountId)],
            [],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AwsOrganizationDetail>(),
            GetAwsOrganizationError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get an AWS recommendation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AwsRecommendationWithEligibleSpend"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAwsRecommendationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the recommendation for one commitment type (<c>serviceId</c>) on the AWS organization, including analysis metrics and time-bucketed eligible spend. Use <c>granularity</c> to choose the eligible-spend bucket size (defaults to <c>day</c>).
    /// </remarks>
    public Task<AwsRecommendationWithEligibleSpend> GetAwsRecommendation(GetAwsRecommendationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ps4commitments/v1/aws/organizations/{managementAccountId}/recommendations/{serviceId}"),
            [
                new TemplateParam("managementAccountId", request.ManagementAccountId),
                new TemplateParam("serviceId", request.ServiceId),
            ],
            [new Param("granularity", request.Granularity)],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AwsRecommendationWithEligibleSpend>(),
            GetAwsRecommendationError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List member accounts under an AWS organization
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAwsMemberAccountsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns all member AWS accounts under the specified AWS organization that have active or historical commitment coverage. Includes 30-day statistics and estimated monthly potential savings (<c>monthlyPotentialSavings</c>) per Savings Plan (SP) type.
    /// </remarks>
    public Task<Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse> ListAwsMemberAccounts(ListAwsMemberAccountsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ps4commitments/v1/aws/organizations/{managementAccountId}/member-accounts"),
            [new TemplateParam("managementAccountId", request.ManagementAccountId)],
            [new Param("pageToken", request.PageToken), new Param("maxResults", request.MaxResults)],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse>(),
            ListAwsMemberAccountsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List AWS organizations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Ps4CommitmentsV1AwsOrganizationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAwsOrganizationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns all AWS organizations (accounts) accessible to the authenticated tenant. Use as the entry point to discover AWS organization account IDs, and organization-level onboarding status of the available commitment types and savings metrics.
    /// <para>
    /// Each item includes metadata, trailing 30-day aggregate statistics, precomputed YTD/lifetime savings totals per Savings Plan (SP) type, and estimated monthly potential savings (<c>monthlyPotentialSavings</c>) per SP type from the latest projection. Sum across items for customer-level totals.
    /// </para>
    /// </remarks>
    public Task<Ps4CommitmentsV1AwsOrganizationsResponse> ListAwsOrganizations(ListAwsOrganizationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ps4commitments/v1/aws/organizations"),
            [],
            [new Param("pageToken", request.PageToken), new Param("maxResults", request.MaxResults)],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Ps4CommitmentsV1AwsOrganizationsResponse>(),
            ListAwsOrganizationsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List account and commitment settings per AWS organization
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Ps4CommitmentsV1AwsSettingsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAwsOrganizationsSettingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns one item per onboarded AWS organization. Each item includes that AWS organization's commitments purchasing account (<c>purchaseAccountId</c>) and commitment settings for each commitment type activated on that AWS organization (<c>compute</c>, <c>database</c>).
    /// <para>
    /// Commitment settings cover recommendation and automation preferences (policy, term, payment option, automation mode, commitment limits, and related fields). They are stored independently for each AWS organization and commitment type. Each item includes that organization's <c>purchaseAccountId</c> and activated commitment types.
    /// </para>
    /// <para>
    /// In the DoiT Console, commitment settings are edited on an account's Settings tab and apply only to that AWS organization and commitment type; the purchasing account is set per AWS organization on Accounts Settings.
    /// </para>
    /// </remarks>
    public Task<Ps4CommitmentsV1AwsSettingsResponse> ListAwsOrganizationsSettings(ListAwsOrganizationsSettingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ps4commitments/v1/aws/settings"),
            [],
            [new Param("pageToken", request.PageToken), new Param("maxResults", request.MaxResults)],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Ps4CommitmentsV1AwsSettingsResponse>(),
            ListAwsOrganizationsSettingsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List AWS planned purchases
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAwsPlannedPurchasesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns planned purchases (laddering projections) for the AWS organization. One item per commitment type that has a projection available (typically <c>compute</c> and/or <c>database</c>; up to four commitment types as PerfectScale for Commitments expands).
    /// <para>
    /// With no filters, returns all available planned-purchase items for the AWS organization in stable commitment-type order (<c>compute</c>, then <c>database</c>, then any future commitment types in enum order). When a filtered commitment type has no planned purchases, the response is an empty <c>items</c> array (not <c>404</c>). Partial items return only the fields available at response time.
    /// </para>
    /// <para>
    /// <c>404</c> is returned only when the AWS organization does not exist or the caller cannot access it. An AWS organization that is not onboarded for PerfectScale for Commitments still returns <c>200</c> with an empty <c>items</c> array when no planned purchases exist — use <c>GET /ps4commitments/v1/aws/organizations</c> (or get-by-id) for <c>onboardingStatus</c>.
    /// </para>
    /// <para>
    /// <b>Pagination</b>: results are returned in stable commitment-type order (<c>compute</c>, then <c>database</c>, then any future commitment types in enum order). Use <c>maxResults</c> to limit page size (default 50, max 500). When more items remain, the response includes a non-null <c>pageToken</c>; pass it unchanged on the next request with the same query parameters (<c>service</c>, <c>maxResults</c>). <c>rowCount</c> is the number of items in this page. An invalid <c>pageToken</c> returns <c>400</c> with code <c>pagination_token_invalid</c>; an expired token returns <c>400</c> with code <c>pagination_token_expired</c>.
    /// </para>
    /// </remarks>
    public Task<Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse> ListAwsPlannedPurchases(ListAwsPlannedPurchasesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ps4commitments/v1/aws/organizations/{managementAccountId}/planned-purchases"),
            [new TemplateParam("managementAccountId", request.ManagementAccountId)],
            [
                new Param("service", request.Service),
                new Param("pageToken", request.PageToken),
                new Param("maxResults", request.MaxResults),
            ],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse>(),
            ListAwsPlannedPurchasesError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List AWS recommendations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AwsRecommendations"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAwsRecommendationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns commitment purchase recommendations for the AWS organization, keyed by commitment type (<c>compute</c>, <c>database</c>). A commitment type is present only when it is onboarded and a recommendation is available.
    /// </remarks>
    public Task<AwsRecommendations> ListAwsRecommendations(ListAwsRecommendationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ps4commitments/v1/aws/organizations/{managementAccountId}/recommendations"),
            [new TemplateParam("managementAccountId", request.ManagementAccountId)],
            [],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AwsRecommendations>(),
            ListAwsRecommendationsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List AWS Reserved Instances
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAwsReservedInstancesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of Reserved Instances (RIs) for the specified AWS organization. Optionally filter by state, instance type, instance family, region, and offering class. Omit filters to return all RIs for the AWS organization.
    /// </remarks>
    public Task<Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse> ListAwsReservedInstances(ListAwsReservedInstancesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ps4commitments/v1/aws/organizations/{managementAccountId}/reserved-instances"),
            [new TemplateParam("managementAccountId", request.ManagementAccountId)],
            [
                new Param("status", request.Status),
                new Param("instanceType", request.InstanceType),
                new Param("instanceFamily", request.InstanceFamily),
                new Param("region", request.Region),
                new Param("offeringClass", request.OfferingClass),
                new Param("pageToken", request.PageToken),
                new Param("maxResults", request.MaxResults),
            ],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse>(),
            ListAwsReservedInstancesError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List AWS Savings Plans
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAwsSavingsPlansError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of Savings Plans for the specified AWS organization. Optionally filter by plan type (<c>type</c>) and state (<c>status</c>). Omit both filters to return all plans for the AWS organization.
    /// </remarks>
    public Task<Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse> ListAwsSavingsPlans(ListAwsSavingsPlansRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ps4commitments/v1/aws/organizations/{managementAccountId}/savings-plans"),
            [new TemplateParam("managementAccountId", request.ManagementAccountId)],
            [
                new Param("type", request.Type),
                new Param("status", request.Status),
                new Param("pageToken", request.PageToken),
                new Param("maxResults", request.MaxResults),
            ],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse>(),
            ListAwsSavingsPlansError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
