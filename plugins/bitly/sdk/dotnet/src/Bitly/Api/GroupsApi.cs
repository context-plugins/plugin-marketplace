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
using Bitly.Models.AnyOf;
using Bitly.Requests.GroupsApi;

namespace Bitly.Api;

/// <summary>
/// Groups are subdivisions within organizations. Every user will be in at least one group, and every shortened link will be in one group. Most actions on our API will be on behalf of a group. For example, when you shorten a link, it will be on behalf of a user and a group.
/// </summary>
public sealed class GroupsApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal GroupsApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Click Metrics for a Group by Referrer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClickMetricsBitlyCustomBitlinksApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGroupMetricsByReferrerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns metrics by referrer for the specified group's links.
    /// </remarks>
    public Task<ClickMetricsBitlyCustomBitlinksApi> GetGroupMetricsByReferrer(GetGroupMetricsByReferrerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/groups/{group_guid}/referrers"),
            [new TemplateParam("group_guid", request.GroupGuid)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("size", request.Size),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ClickMetricsBitlyCustomBitlinksApi>(),
            GetGroupMetricsByReferrerError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Click Metrics for a Group by Referring Networks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClickMetricsBitlyCustomBitlinksApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGroupMetricsByReferringNetworksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns metrics by referring networks for the specified group's links.
    /// </remarks>
    public Task<ClickMetricsBitlyCustomBitlinksApi> GetGroupMetricsByReferringNetworks(GetGroupMetricsByReferringNetworksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/groups/{group_guid}/referring_networks"),
            [new TemplateParam("group_guid", request.GroupGuid)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("size", request.Size),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ClickMetricsBitlyCustomBitlinksApi>(),
            GetGroupMetricsByReferringNetworksError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve a Group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Group"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns details for a group.
    /// </remarks>
    public Task<Group> GetGroup(GetGroupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/groups/{group_guid}"),
            [new TemplateParam("group_guid", request.GroupGuid)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Group>(),
            GetGroupError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get clicks by group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GroupClicks"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGroupClicksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// get number of clicks on bitlinks in a group
    /// </remarks>
    public Task<GroupClicks> GetGroupClicks(GetGroupClicksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/groups/{group_guid}/clicks"),
            [new TemplateParam("group_guid", request.GroupGuid)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GroupClicks>(),
            GetGroupClicksError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Scan Metrics for a Group by City
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CityMetricsBitlyGroupsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGroupCodeScansByCityError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get QR code scan metrics for a group broken down by city.
    /// </remarks>
    public Task<CityMetricsBitlyGroupsApi> GetGroupCodeScansByCity(GetGroupCodeScansByCityRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/groups/{group_guid}/codes/scans/cities"),
            [new TemplateParam("group_guid", request.GroupGuid)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CityMetricsBitlyGroupsApi>(),
            GetGroupCodeScansByCityError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Scan Metrics for a Group by Country
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClickMetricsBitlyCustomBitlinksApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGroupCodeScansByCountryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get QR code scan metrics for a group broken down by country.
    /// </remarks>
    public Task<ClickMetricsBitlyCustomBitlinksApi> GetGroupCodeScansByCountry(GetGroupCodeScansByCountryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/groups/{group_guid}/codes/scans/countries"),
            [new TemplateParam("group_guid", request.GroupGuid)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ClickMetricsBitlyCustomBitlinksApi>(),
            GetGroupCodeScansByCountryError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Scan Metrics for a Group Over Time
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GroupClicks"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGroupCodeScansOverTimeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get QR code scan metrics over time for a group.
    /// </remarks>
    public Task<GroupClicks> GetGroupCodeScansOverTime(GetGroupCodeScansOverTimeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/groups/{group_guid}/codes/scans/over_time"),
            [new TemplateParam("group_guid", request.GroupGuid)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GroupClicks>(),
            GetGroupCodeScansOverTimeError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get limit usage for a group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GroupFeatureUsage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGroupFeatureUsageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a group's current feature limit usage, optionally provide limit name(s) for usage on specific limit(s)
    /// </remarks>
    public Task<GroupFeatureUsage> GetGroupFeatureUsage(GetGroupFeatureUsageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/groups/{group_guid}/feature_usage"),
            [new TemplateParam("group_guid", request.GroupGuid)],
            [new Param("name", request.Name)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GroupFeatureUsage>(),
            GetGroupFeatureUsageError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get historical usage for a group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GroupHistoricalUsage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGroupHistoricalUsageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a group's historical usage for specific limit(s) and date range. Refer to GET /v4/groups/{group_guid}/feature_usage endpoint response for available limit names.
    /// </remarks>
    public Task<GroupHistoricalUsage> GetGroupHistoricalUsage(GetGroupHistoricalUsageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/groups/{group_guid}/historical_usage"),
            [new TemplateParam("group_guid", request.GroupGuid)],
            [
                new Param("name", request.Name),
                new Param("start_date", request.StartDate),
                new Param("end_date", request.EndDate),
                new Param("unit", request.Unit),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GroupHistoricalUsage>(),
            GetGroupHistoricalUsageError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Group Link Clicks by City
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CityMetricsBitlyGroupsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGroupLinkClicksByCityError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get link clicks by city for all links in a group.
    /// </remarks>
    public Task<CityMetricsBitlyGroupsApi> GetGroupLinkClicksByCity(GetGroupLinkClicksByCityRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/groups/{group_guid}/links/clicks/cities"),
            [new TemplateParam("group_guid", request.GroupGuid)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("size", request.Size),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CityMetricsBitlyGroupsApi>(),
            GetGroupLinkClicksByCityError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Group Link Clicks by Country
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClickMetricsBitlyCustomBitlinksApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGroupLinkClicksByCountryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get link clicks by country for all links in a group.
    /// </remarks>
    public Task<ClickMetricsBitlyCustomBitlinksApi> GetGroupLinkClicksByCountry(GetGroupLinkClicksByCountryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/groups/{group_guid}/links/clicks/countries"),
            [new TemplateParam("group_guid", request.GroupGuid)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("size", request.Size),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ClickMetricsBitlyCustomBitlinksApi>(),
            GetGroupLinkClicksByCountryError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Group Link Clicks by Device
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GroupsLinksClicksDevicesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGroupLinkClicksByDeviceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get link clicks by device for all links in a group.
    /// </remarks>
    public Task<GroupsLinksClicksDevicesResponse> GetGroupLinkClicksByDevice(GetGroupLinkClicksByDeviceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/groups/{group_guid}/links/clicks/devices"),
            [new TemplateParam("group_guid", request.GroupGuid)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("size", request.Size),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GroupsLinksClicksDevicesResponse>(),
            GetGroupLinkClicksByDeviceError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Group Link Clicks by Referrer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClickMetricsBitlyCustomBitlinksApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGroupLinkClicksByReferrerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get link clicks by referrer for all links in a group.
    /// </remarks>
    public Task<ClickMetricsBitlyCustomBitlinksApi> GetGroupLinkClicksByReferrer(GetGroupLinkClicksByReferrerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/groups/{group_guid}/links/clicks/referrers"),
            [new TemplateParam("group_guid", request.GroupGuid)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("size", request.Size),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ClickMetricsBitlyCustomBitlinksApi>(),
            GetGroupLinkClicksByReferrerError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Group Link Clicks Over Time
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GroupClicks"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGroupLinkClicksOverTimeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get link clicks over time for all links in a group.
    /// </remarks>
    public Task<GroupClicks> GetGroupLinkClicksOverTime(GetGroupLinkClicksOverTimeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/groups/{group_guid}/links/clicks/over_time"),
            [new TemplateParam("group_guid", request.GroupGuid)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GroupClicks>(),
            GetGroupLinkClicksOverTimeError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Click Metrics for a Group by City
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CityMetricsBitlyGroupsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGroupMetricsByCitiesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the geographic origins of click traffic by city for the specified group.
    /// </remarks>
    public Task<CityMetricsBitlyGroupsApi> GetGroupMetricsByCities(GetGroupMetricsByCitiesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/groups/{group_guid}/cities"),
            [new TemplateParam("group_guid", request.GroupGuid)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("size", request.Size),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CityMetricsBitlyGroupsApi>(),
            GetGroupMetricsByCitiesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Click Metrics for a Group by Country
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClickMetricsBitlyCustomBitlinksApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGroupMetricsByCountriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the geographic origins of click traffic by country for the specified group.
    /// </remarks>
    public Task<ClickMetricsBitlyCustomBitlinksApi> GetGroupMetricsByCountries(GetGroupMetricsByCountriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/groups/{group_guid}/countries"),
            [new TemplateParam("group_guid", request.GroupGuid)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("size", request.Size),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ClickMetricsBitlyCustomBitlinksApi>(),
            GetGroupMetricsByCountriesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Click Metrics for a Group by Device Type
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DeviceMetricsBitlyGroupsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGroupMetricsByDevicesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the device types generating click traffic to the specified group's links.
    /// </remarks>
    public Task<DeviceMetricsBitlyGroupsApi> GetGroupMetricsByDevices(GetGroupMetricsByDevicesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/groups/{group_guid}/devices"),
            [new TemplateParam("group_guid", request.GroupGuid)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("size", request.Size),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DeviceMetricsBitlyGroupsApi>(),
            GetGroupMetricsByDevicesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Group Metrics Over Time
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GroupClicks"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGroupMetricsOverTimeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get group engagement metrics over time for all links in a group.
    /// </remarks>
    public Task<GroupClicks> GetGroupMetricsOverTime(GetGroupMetricsOverTimeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/groups/{group_guid}/engagements/over_time"),
            [new TemplateParam("group_guid", request.GroupGuid)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GroupClicks>(),
            GetGroupMetricsOverTimeError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve Group Preferences
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GroupPreferences"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGroupPreferencesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns preferences for the specified group.
    /// </remarks>
    public Task<GroupPreferences> GetGroupPreferences(GetGroupPreferencesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/groups/{group_guid}/preferences"),
            [new TemplateParam("group_guid", request.GroupGuid)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GroupPreferences>(),
            GetGroupPreferencesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve Group Shorten Counts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Metrics"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGroupShortenCountsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns all the shorten counts for a group.
    /// </remarks>
    public Task<Metrics> GetGroupShortenCounts(GetGroupShortenCountsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/groups/{group_guid}/shorten_counts"),
            [new TemplateParam("group_guid", request.GroupGuid)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Metrics>(),
            GetGroupShortenCountsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve Tags by Group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Tags"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGroupTagsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the tags currently used in the specified group. Maximum 1000.
    /// </remarks>
    public Task<Tags> GetGroupTags(GetGroupTagsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/groups/{group_guid}/tags"),
            [new TemplateParam("group_guid", request.GroupGuid)],
            [new Param("type", request.Type)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Tags>(),
            GetGroupTagsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Top Performing QR Codes for a Group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GroupsCodesScansTopResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGroupTopCodeScansError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get top performing QR codes by scan count for all codes in a group.
    /// </remarks>
    public Task<GroupsCodesScansTopResponse> GetGroupTopCodeScans(GetGroupTopCodeScansRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/groups/{group_guid}/codes/scans/top"),
            [new TemplateParam("group_guid", request.GroupGuid)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("unit_reference", request.UnitReference),
                new Param("decoupled", request.Decoupled),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GroupsCodesScansTopResponse>(),
            GetGroupTopCodeScansError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Group Top Performing Links by Click
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SortedLinks"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGroupTopLinkClicksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get top performing links by click for all links in a group.
    /// </remarks>
    public Task<SortedLinks> GetGroupTopLinkClicks(GetGroupTopLinkClicksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/groups/{group_guid}/links/clicks/top"),
            [new TemplateParam("group_guid", request.GroupGuid)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("size", request.Size),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SortedLinks>(),
            GetGroupTopLinkClicksError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Group Top Performing Links by Engagement
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SortedLinks"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGroupTopMetricsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get top performing links by engagement for all links in a group.
    /// </remarks>
    public Task<SortedLinks> GetGroupTopMetrics(GetGroupTopMetricsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/groups/{group_guid}/engagements/top"),
            [new TemplateParam("group_guid", request.GroupGuid)],
            [
                new Param("unit", request.Unit),
                new Param("units", request.Units),
                new Param("size", request.Size),
                new Param("unit_reference", request.UnitReference),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SortedLinks>(),
            GetGroupTopMetricsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve Groups
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Groups"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGroupsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of groups in the organization.
    /// </remarks>
    public Task<Groups> GetGroups(GetGroupsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/groups"),
            [],
            [new Param("organization_guid", request.OrganizationGuid)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Groups>(),
            GetGroupsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create an inline CSV export for a group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GroupExportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostCreateGroupExportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Build a CSV export synchronously and return it inline as a base64 data URI plus metadata.
    /// The export_type field selects the CSV shape: link_engagements_batch (engagement metrics for
    /// explicit bitlinks or a filter), links_list (link metadata roster), or qr_codes_list (QR code
    /// metadata roster). Row caps apply per request: 200 rows when metrics are included
    /// (link_engagements_batch, or include_metrics on a list export); 1000 rows for metadata-only
    /// list exports. When the match set exceeds the cap, truncated is true and only the first
    /// cap rows are returned; row_count reports how many data rows are in the CSV.
    /// </remarks>
    public Task<GroupExportResponse> PostCreateGroupExport(PostCreateGroupExportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/groups/{group_guid}/exports"),
            [new TemplateParam("group_guid", request.GroupGuid)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GroupExportResponse>(),
            PostCreateGroupExportError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a Group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Group"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the details of a group.
    /// </remarks>
    public Task<Group> UpdateGroup(UpdateGroupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/groups/{group_guid}"),
            [new TemplateParam("group_guid", request.GroupGuid)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Group>(),
            UpdateGroupError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Group Preferences
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GroupPreferences"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateGroupPreferencesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates preferences for a group.
    /// </remarks>
    public Task<GroupPreferences> UpdateGroupPreferences(UpdateGroupPreferencesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/groups/{group_guid}/preferences"),
            [new TemplateParam("group_guid", request.GroupGuid)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GroupPreferences>(),
            UpdateGroupPreferencesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
