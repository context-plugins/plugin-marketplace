using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AppstoreSpy.Core;
using AppstoreSpy.Core.Exceptions;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Core.Request;
using AppstoreSpy.Core.Response;
using AppstoreSpy.Errors;
using AppstoreSpy.Models;
using AppstoreSpy.Requests.SearchFilterV2;

namespace AppstoreSpy.Api;

/// <summary>
/// Structured filter search: a JSON filter body with field selection, paging and sorting.
/// </summary>
public sealed class SearchFilterV2
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal SearchFilterV2(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Filter Search
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IosAppListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetFilterSearchIosAppsQueryPost2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// |<b>Fields</b>||||
    /// |---|---|---|---|
    /// |<b>Name</b> |<b>Type</b> |<b>Sort</b>|<b>Description</b>|
    /// |name |string |- |Name|
    /// |bundle |string |- |Bundle|
    /// |description_full |string |- |Full Description|
    /// |published |boolean |- |Published|
    /// |listing_visible |boolean |- |Published in request country|
    /// |category |string |- |Сategory|
    /// |category_type |string |- |Type|
    /// |revenue_month |integer |+ |Monthly Revenue|
    /// |revenue_lifetime |integer |- |Lifetime Revenue|
    /// |downloads_month |integer |+ |Monthly Downloads|
    /// |downloads_lifetime|integer |- |Lifetime Downloads|
    /// |update_date |date ISO8601|+ |Last Updated|
    /// |release_date |date ISO8601|+ |Release date|
    /// |developer_name |string |- |Developer name|
    /// |description_short|string |- |Short description|
    /// |whatsnew |string |- |Whatsnew|
    /// |icon |string |- |Image|
    /// |video |string |- |Trailer|
    /// |screenshots |[]string |- |Screenshots|
    /// |screenshots_duo_inner|[]string|- |iPhone Duo inner display screenshots|
    /// |screenshots_duo_outer|[]string|- |iPhone Duo outer display screenshots|
    /// |removal_date |date ISO8601|+ |Removal date|
    /// |version |string |- |Version|
    /// |size |float |- |Size|
    /// |rating_count |integer |+ |Ratings|
    /// |rating_value |float |+ |Rating in request country|
    /// |review_count |integer |+ |Reviews|
    /// |rating_avg |float |+ |Rating|
    /// |iap |boolean |- |Inapp|
    /// |copyright |string |- |Copyright|
    /// |seller |string |- |Seller|
    /// |chart_info |object |+ |App's chart info: category, collection, country, position for today|
    /// <para>
    /// |<b>Filters</b>|||
    /// |---|---|---|
    /// |<b>Name</b>|<b>Type</b>|<b>Description</b>|
    /// |name|string|Name|
    /// |published|boolean|Published|
    /// |category_type|string|APP or GAME|
    /// |revenue_month|ValueRange|{"gte": 100, "lte": 500} (In this field you need write values in thousands: 100 = 100000, 500 = 500000)|
    /// |downloads_month|ValueRange|{"gte": 100, "lte": 500} (In this field you need write values in thousands: 100 = 100000, 500 = 500000)|
    /// |update_date|DateRange|{"gte": "2021-01-01", "lte": "2022-01-01"}|
    /// |release_date|DateRange|{"gte": "2021-01-01", "lte": "2022-01-01"}|
    /// |rating_count|ValueRange|{"gte": 1000, "lte": 5000}|
    /// |developer|string|Developer name|
    /// |developer_id|string|Developer id|
    /// |active_countries|[]string|["US", "DE", "FR"] - List of countries where app is available (At least one country)|
    /// |category|string|App Store category: "TRAVEL", "EDUCATION", "GAMES_STRATEGY", "LIFESTYLE" etc|
    /// |review_count|ValueRange|{"gte": 1000, "lte": 5000}|
    /// |rating_avg|ValueRange|{"gte": 3.5, "lte": 5.0}|
    /// |with_ads|boolean|With Ads|
    /// |advertised|boolean|Advertised|
    /// </para>
    /// </remarks>
    public Task<IosAppListResponse> GetFilterSearchIosAppsQueryPost2(GetFilterSearchIosAppsQueryPost2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ios/apps/query"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IosAppListResponse>(),
            GetFilterSearchIosAppsQueryPost2Error.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);
}
