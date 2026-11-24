using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Bitly.Core;
using Bitly.Core.Exceptions;
using Bitly.Core.Models;
using Bitly.Core.Request;
using Bitly.Core.Response;
using Bitly.Errors;
using Bitly.Models;
using Bitly.Requests.BitlinksApi;

namespace Bitly.Api;

/// <summary>
/// Bitlinks are shortened links. They could begin with the bit.ly domain or your own custom branded short domain (BSD).
/// <para>
/// <b>Related Operations:</b>
/// - POST /bitlinks - Create a new bitlink or add a custom keyword to an existing bitlink
/// - PATCH /bitlinks/{bitlink} - Redirect an existing bitlink
/// </para>
/// </summary>
public sealed class BitlinksApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal BitlinksApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Shorten a Link
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ShortenBitlinkBody"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateBitlinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Converts a long url to a Bitlink. You may see errors returned from this endpoint - "BRANDED_LINK_MONTHLY_LIMIT_EXCEEDED" occurs if you have shortened more links than your account is configured for for the month, and "DNS_CONFIGURATION_ERROR" occurs if you are attempting to shorten links against a custom domain which doesn't have DNS properly configured.
    /// </remarks>
    public Task<ShortenBitlinkBody> CreateBitlink(CreateBitlinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/shorten"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ShortenBitlinkBody>(),
            CreateBitlinkError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a Bitlink
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BitlinkBody"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateFullBitlinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Converts a long url to a Bitlink and sets additional parameters. You may see errors returned from this endpoint - "BRANDED_LINK_MONTHLY_LIMIT_EXCEEDED" occurs if you have shortened more links than your account is configured for for the month, and "DNS_CONFIGURATION_ERROR" occurs if you are attempting to shorten links against a custom domain which doesn't have DNS properly configured.
    /// </remarks>
    public Task<BitlinkBody> CreateFullBitlink(CreateFullBitlinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bitlinks"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BitlinkBody>(),
            CreateFullBitlinkError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a Bitlink
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="LinkDeletionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteBitlinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete an unedited hash Bitlink.
    /// </remarks>
    public Task<LinkDeletionResponse> DeleteBitlink(DeleteBitlinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bitlinks/{bitlink}"),
            [new TemplateParam("bitlink", request.Bitlink)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<LinkDeletionResponse>(),
            DeleteBitlinkError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Expand a Bitlink
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ExpandedBitlink"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ExpandBitlinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the short link and long URL for the specified link.
    /// </remarks>
    public Task<ExpandedBitlink> ExpandBitlink(ExpandBitlinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/expand"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ExpandedBitlink>(),
            ExpandBitlinkError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve a Bitlink
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BitlinkBody"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBitlinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns information for the specified link.
    /// </remarks>
    public Task<BitlinkBody> GetBitlink(GetBitlinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bitlinks/{bitlink}"),
            [new TemplateParam("bitlink", request.Bitlink)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BitlinkBody>(),
            GetBitlinkError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve Bitlinks by Group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Bitlinks"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBitlinksByGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated collection of Bitlinks for a group. The list of custom bitlinks has newest entries first.
    /// </remarks>
    public Task<Bitlinks> GetBitlinksByGroup(GetBitlinksByGroupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/groups/{group_guid}/bitlinks"),
            [new TemplateParam("group_guid", request.GroupGuid)],
            [
                new Param("size", request.Size),
                new Param("search_after", request.SearchAfter),
                new Param("query", request.Query),
                new Param("hostname_path_query", request.HostnamePathQuery),
                new Param("created_before", request.CreatedBefore),
                new Param("created_after", request.CreatedAfter),
                new Param("archived", request.Archived),
                new Param("deeplinks", request.Deeplinks),
                new Param("domain_deeplinks", request.DomainDeeplinks),
                new Param("campaign_guid", request.CampaignGuid),
                new Param("channel_guid", request.ChannelGuid),
                new Param("custom_bitlink", request.CustomBitlink),
                new Param("has_qr_codes", request.HasQrCodes),
                new Param("is_expired", request.IsExpired),
                new Param("has_expiration", request.HasExpiration),
                new Param("has_dynamic_routing", request.HasDynamicRouting),
                new Param("tags", request.Tags),
                new Param("launchpad_ids", request.LaunchpadIds),
                new Param("encoding_login", request.EncodingLogin),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Bitlinks>(),
            GetBitlinksByGroupError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Clicks for a Bitlink
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Clicks"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetClicksForBitlinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the click counts for the specified link in an array based on a date.
    /// </remarks>
    public Task<Clicks> GetClicksForBitlink(GetClicksForBitlinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bitlinks/{bitlink}/clicks"),
            [new TemplateParam("bitlink", request.Bitlink)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Clicks>(),
            GetClicksForBitlinkError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a Clicks Summary for a Bitlink
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClicksSummary"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetClicksSummaryForBitlinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the click counts for the specified link rolled up into a single field.
    /// </remarks>
    public Task<ClicksSummary> GetClicksSummaryForBitlink(GetClicksSummaryForBitlinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bitlinks/{bitlink}/clicks/summary"),
            [new TemplateParam("bitlink", request.Bitlink)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ClicksSummary>(),
            GetClicksSummaryForBitlinkError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Engagement Counts for a Bitlink
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TotalEngagements"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetEngagementsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns an array of engagement counts for the specified link. The array is comprised of button click, click and scan counts for each time window, where the window is based on the provided unit.
    /// </remarks>
    public Task<TotalEngagements> GetEngagements(GetEngagementsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bitlinks/{bitlink}/engagements"),
            [new TemplateParam("bitlink", request.Bitlink)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TotalEngagements>(),
            GetEngagementsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get an Engagement Count Summary for a Bitlink
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TotalEngagementsSummary"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetEngagementsSummaryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the engagement counts for the specified link rolled up into a single field.
    /// </remarks>
    public Task<TotalEngagementsSummary> GetEngagementsSummary(GetEngagementsSummaryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bitlinks/{bitlink}/engagements/summary"),
            [new TemplateParam("bitlink", request.Bitlink)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TotalEngagementsSummary>(),
            GetEngagementsSummaryError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Metrics for a Bitlink by City
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CityMetrics"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMetricsForBitlinkByCitiesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the city origins of click traffic for the specified link.
    /// </remarks>
    public Task<CityMetrics> GetMetricsForBitlinkByCities(GetMetricsForBitlinkByCitiesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bitlinks/{bitlink}/cities"),
            [new TemplateParam("bitlink", request.Bitlink)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("size", request.Size),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CityMetrics>(),
            GetMetricsForBitlinkByCitiesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Metrics for a Bitlink by Country
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClickMetrics"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMetricsForBitlinkByCountriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the country origins of click traffic for the specified link.
    /// </remarks>
    public Task<ClickMetrics> GetMetricsForBitlinkByCountries(GetMetricsForBitlinkByCountriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bitlinks/{bitlink}/countries"),
            [new TemplateParam("bitlink", request.Bitlink)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("size", request.Size),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ClickMetrics>(),
            GetMetricsForBitlinkByCountriesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Metrics for a Bitlink by Device Type
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DeviceMetrics"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMetricsForBitlinkByDevicesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the device types generating click traffic to the specified link.
    /// </remarks>
    public Task<DeviceMetrics> GetMetricsForBitlinkByDevices(GetMetricsForBitlinkByDevicesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bitlinks/{bitlink}/devices"),
            [new TemplateParam("bitlink", request.Bitlink)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("size", request.Size),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DeviceMetrics>(),
            GetMetricsForBitlinkByDevicesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Metrics for a Bitlink by Referrer Name
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClickMetrics"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMetricsForBitlinkByReferrerNameError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns referrer click counts for the specified link.
    /// </remarks>
    public Task<ClickMetrics> GetMetricsForBitlinkByReferrerName(GetMetricsForBitlinkByReferrerNameRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bitlinks/{bitlink}/referrer_name"),
            [new TemplateParam("bitlink", request.Bitlink)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("size", request.Size),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ClickMetrics>(),
            GetMetricsForBitlinkByReferrerNameError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Metrics for a Bitlink by Referrers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClickMetrics"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMetricsForBitlinkByReferrersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns referrer click counts for the specified link.
    /// </remarks>
    public Task<ClickMetrics> GetMetricsForBitlinkByReferrers(GetMetricsForBitlinkByReferrersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bitlinks/{bitlink}/referrers"),
            [new TemplateParam("bitlink", request.Bitlink)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("size", request.Size),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ClickMetrics>(),
            GetMetricsForBitlinkByReferrersError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Metrics for a Bitlink by Referrers by Domain
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ReferrersByDomains"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMetricsForBitlinkByReferrersByDomainsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns click metrics grouped by referrers for the specified link.
    /// </remarks>
    public Task<ReferrersByDomains> GetMetricsForBitlinkByReferrersByDomains(GetMetricsForBitlinkByReferrersByDomainsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bitlinks/{bitlink}/referrers_by_domains"),
            [new TemplateParam("bitlink", request.Bitlink)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("size", request.Size),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ReferrersByDomains>(),
            GetMetricsForBitlinkByReferrersByDomainsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Metrics for a Bitlink by Referring Domains
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClickMetrics"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMetricsForBitlinkByReferringDomainsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the referring domain click counts for the specified link.
    /// </remarks>
    public Task<ClickMetrics> GetMetricsForBitlinkByReferringDomains(GetMetricsForBitlinkByReferringDomainsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bitlinks/{bitlink}/referring_domains"),
            [new TemplateParam("bitlink", request.Bitlink)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("size", request.Size),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ClickMetrics>(),
            GetMetricsForBitlinkByReferringDomainsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve Sorted Bitlinks for Group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SortedLinks"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSortedBitlinksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of Bitlinks sorted by group. The list of custom bitlinks has newest entries first.
    /// </remarks>
    public Task<SortedLinks> GetSortedBitlinks(GetSortedBitlinksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/groups/{group_guid}/bitlinks/{sort}"),
            [new TemplateParam("group_guid", request.GroupGuid), new TemplateParam("sort", request.Sort)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("unit_reference", request.UnitReference),
                new Param("size", request.Size),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SortedLinks>(),
            GetSortedBitlinksError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve Top Links and Decoupled QR Codes by Engagements
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TopLinksAndQrCodes"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTopLinksAndQrCodesByEngagementsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the bitlinks and decoupled QR codes in a group with the most engagements over the requested time window, ranked together in descending order by engagement count. Bitlinks and decoupled QR codes are returned in separate lists; <c>sorted_links</c> preserves the unified descending-by-count ordering across both, with each entry's id referencing either a bitlink or a QR code guid.
    /// </remarks>
    public Task<TopLinksAndQrCodes> GetTopLinksAndQrCodesByEngagements(GetTopLinksAndQrCodesByEngagementsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/groups/{group_guid}/engagements/sorted/top"),
            [new TemplateParam("group_guid", request.GroupGuid)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("unit_reference", request.UnitReference),
                new Param("size", request.Size),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TopLinksAndQrCodes>(),
            GetTopLinksAndQrCodesByEngagementsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a Bitlink
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BitlinkBody"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateBitlinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates fields in the specified link. To redirect the link (i.e. to update the Long URL), use the long_url parameter. This will always charge an encode limit.
    /// </remarks>
    public Task<BitlinkBody> UpdateBitlink(UpdateBitlinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bitlinks/{bitlink}"),
            [new TemplateParam("bitlink", request.Bitlink)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BitlinkBody>(),
            UpdateBitlinkError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Bulk update bitlinks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BulkUpdate"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateBitlinksByGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Bulk update can add or remove tags or archive up to 100 links at a time; The response includes a list of bitlink ids that were updated.
    /// </remarks>
    public Task<BulkUpdate> UpdateBitlinksByGroup(UpdateBitlinksByGroupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/groups/{group_guid}/bitlinks"),
            [new TemplateParam("group_guid", request.GroupGuid)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BulkUpdate>(),
            UpdateBitlinksByGroupError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
