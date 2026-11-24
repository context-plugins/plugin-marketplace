using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AppstoreSpy.Core;
using AppstoreSpy.Core.Exceptions;
using AppstoreSpy.Core.Extensions;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Core.Request;
using AppstoreSpy.Core.Response;
using AppstoreSpy.Errors;
using AppstoreSpy.Models;
using AppstoreSpy.Requests.GooglePlay;

namespace AppstoreSpy.Api;

/// <summary>
/// Google Play apps and developers: lookup, search, reviews, rankings, similar apps, daily installs, download and revenue estimates, live store listings and reference data.
/// </summary>
public sealed class GooglePlay
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal GooglePlay(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Search Google Play developers by structured filter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PlayDevListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DevFilterSearchPlayDevelopersQueryPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Searches Google Play developers by a structured JSON filter, with paging and sorting. <c>GET /play/developers</c> covers the free-text equivalent.
    /// </remarks>
    public Task<PlayDevListResponse> DevFilterSearchPlayDevelopersQueryPost(DevFilterSearchPlayDevelopersQueryPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/play/developers/query"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PlayDevListResponse>(),
            DevFilterSearchPlayDevelopersQueryPostError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search Google Play developers by query
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="PlayDev"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DevSearchPlayDevelopersGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Free-text search across Google Play developers using a <c>field:value</c> query such as <c>hq_country:US</c>. To filter on structured criteria, use <c>POST /play/developers/query</c>.
    /// </remarks>
    public Task<IReadOnlyList<PlayDev>> DevSearchPlayDevelopersGet(DevSearchPlayDevelopersGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/play/developers"),
            [],
            [
                new Param("q", request.Q),
                new Param("fields", request.Fields),
                new Param("sort", request.Sort),
                new Param("limit", request.Limit),
                new Param("page", request.Page),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<PlayDev>>(),
            DevSearchPlayDevelopersGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Google Play app by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PlayApp"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAppDetailsPlayAppsIdGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the full Google Play listing for a single app, looked up by its bundle id. Use <c>country</c> to select the storefront and <c>language</c> for the metadata language; <c>fields</c> limits the response to the columns you need.
    /// </remarks>
    public Task<PlayApp> GetAppDetailsPlayAppsIdGet(GetAppDetailsPlayAppsIdGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/play/apps/{id}"),
            [new TemplateParam("id", request.Id)],
            [
                new Param("fields", request.Fields),
                new Param("country", request.Country),
                new Param("language", request.Language),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PlayApp>(),
            GetAppDetailsPlayAppsIdGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search Google Play apps by query
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="PlayApp"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAppSearchPlayAppsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Free-text search across Google Play listings, returning a ranked list of matching apps. To filter on structured criteria such as revenue, installs or category, use <c>POST /play/apps/query</c>.
    /// </remarks>
    public Task<IReadOnlyList<PlayApp>> GetAppSearchPlayAppsGet(GetAppSearchPlayAppsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/play/apps"),
            [],
            [
                new Param("q", request.Q),
                new Param("published", request.Published),
                new Param("country", request.Country),
                new Param("language", request.Language),
                new Param("fields", request.Fields),
                new Param("sort", request.Sort),
                new Param("limit", request.Limit),
                new Param("page", request.Page),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<PlayApp>>(),
            GetAppSearchPlayAppsGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Apps Estimates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="DevAppsEstimates"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAppsEstimatesPlayDevelopersIdEstimatesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Google Play apps estimates
    /// </remarks>
    public Task<IReadOnlyList<DevAppsEstimates>> GetAppsEstimatesPlayDevelopersIdEstimatesGet(GetAppsEstimatesPlayDevelopersIdEstimatesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/play/developers/{id}/estimates"),
            [new TemplateParam("id", request.Id)],
            [
                new Param("start", request.Start?.ToDate()),
                new Param("end", request.End?.ToDate()),
                new Param("fill_gaps", request.FillGaps),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<DevAppsEstimates>>(),
            GetAppsEstimatesPlayDevelopersIdEstimatesGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Apps Estimates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="AppsEstimates"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAppsEstimatesPlayEstimatesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Google Play apps estimates
    /// </remarks>
    public Task<IReadOnlyList<AppsEstimates>> GetAppsEstimatesPlayEstimatesGet(GetAppsEstimatesPlayEstimatesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/play/estimates"),
            [],
            [
                new Param("id", request.Id),
                new Param("start", request.Start?.ToDate()),
                new Param("end", request.End?.ToDate()),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<AppsEstimates>>(),
            GetAppsEstimatesPlayEstimatesGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Apps Installs Daily
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="AppsDailyInstalls"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAppsInstallsDailyPlayAppsIdInstallsDailyGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Google Play apps daily installs.
    /// <para>
    /// <c>ipd</c> is derived from the cumulative install total: each increase is spread evenly across the elapsed days since the total last changed, so collection gaps and lagging reports are amortised rather than reported as a single-day spike. Values are raw and never negative.
    /// </para>
    /// <para>
    /// By default these are unsmoothed figures. AppstoreSpy's Daily Installs chart additionally applies a moving average for readability. Pass <c>smooth=true</c> to get that series: a centered, triangular-weighted 9-day moving average of <c>ipd</c> (weights 1,2,3,4,5,4,3,2,1; days without data are skipped and the weights renormalised). Neighbouring days outside <c>start</c>/<c>end</c> are included in the window, so the first and last days are smoothed the same way as the rest.
    /// </para>
    /// </remarks>
    public Task<IReadOnlyList<AppsDailyInstalls>> GetAppsInstallsDailyPlayAppsIdInstallsDailyGet(GetAppsInstallsDailyPlayAppsIdInstallsDailyGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/play/apps/{id}/installs_daily"),
            [new TemplateParam("id", request.Id)],
            [
                new Param("start", request.Start?.ToDate()),
                new Param("end", request.End?.ToDate()),
                new Param("smooth", request.Smooth),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<AppsDailyInstalls>>(),
            GetAppsInstallsDailyPlayAppsIdInstallsDailyGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Aggregate Google Play developers by HQ country
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DevCountryAggregatesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCountryAggregatesPlayAggregatesCountriesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Per-country totals over all Google Play developers: developer count, published apps, and sums of monthly downloads/revenue estimates. The category_type split assigns each developer's totals to their dominant category type. Sorted by downloads descending.
    /// </remarks>
    public Task<DevCountryAggregatesResponse> GetCountryAggregatesPlayAggregatesCountriesGet(GetCountryAggregatesPlayAggregatesCountriesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/play/aggregates/countries"),
            [],
            [new Param("category_type", request.CategoryType)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DevCountryAggregatesResponse>(),
            GetCountryAggregatesPlayAggregatesCountriesGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Google Play developer by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PlayDev"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetDeveloperPlayDevelopersIdGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the Google Play developer record for a single developer id, including the developer's publisher identifiers and headquarters country.
    /// </remarks>
    public Task<PlayDev> GetDeveloperPlayDevelopersIdGet(GetDeveloperPlayDevelopersIdGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/play/developers/{id}"),
            [new TemplateParam("id", request.Id)],
            [new Param("fields", request.Fields)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PlayDev>(),
            GetDeveloperPlayDevelopersIdGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Google Play LiveOps events for an app
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="Event"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetEventsPlayLiveopsGet2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the LiveOps events (sales, tournaments, updates, new content) Google Play shows for one app in one country. Responds 202 while a fresh crawl is in progress.
    /// </remarks>
    public Task<IReadOnlyList<Event>> GetEventsPlayLiveopsGet2(GetEventsPlayLiveopsGet2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/play/liveops"),
            [],
            [
                new Param("app", request.App),
                new Param("country", request.Country),
                new Param("freshness", request.Freshness),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<Event>>(),
            GetEventsPlayLiveopsGet2Error.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Filter Search
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PlayAppListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetFilterSearchPlayAppsQueryPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// |<b>Fields</b>||||
    /// |---|---|---|---|
    /// |<b>Name</b> |<b>Type</b> |<b>Sort</b>|<b>Description</b>|
    /// |name |string |- |Name|
    /// |bundle |string |- |Bundle|
    /// |description_full |string |- |Description|
    /// |published |boolean |- |Published|
    /// |listing_visible |boolean |- |Published in request country|
    /// |category |string |- |Category|
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
    /// |feature_graphic |string |- |Feature graphic|
    /// |removal_date |date ISO8601|+ |Removal date|
    /// |version |string |- |Version|
    /// |size |float |- |Size|
    /// |downloads_daily |integer |+ |Daily Installs|
    /// |downloads_exact |integer |+ |Total Installs|
    /// |downloads_mark |integer |+ |Installs|
    /// |rating_count |integer |+ |Ratings|
    /// |rating_value |float |+ |Rating in request country|
    /// |review_count |integer |+ |Reviews|
    /// |rating_avg |float |+ |Rating|
    /// |iap |boolean |- |Inapp|
    /// |editorial |boolean |- |Editor's choise|
    /// |hosts |[]string |- |Hosts|
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
    /// |editorial|boolean|Editor's choise|
    /// |iap|boolean|Inapp|
    /// |active_countries|[]string|["US", "DE", "FR"] - List of countries where app is available (At least one country)|
    /// |category|string|Google Play category: "GAME_ARCADE", "SOCIAL", "ART_AND_DESIGN", "LIFESTYLE" etc|
    /// |downloads_mark|integer|100, 500, 1000, 5000, 10000 etc|
    /// |downloads_daily|ValueRange|{"gte": 1000, "lte": 5000}|
    /// |downloads_exact|ValueRange|{"gte": 1000, "lte": 5000}|
    /// |review_count|ValueRange|{"gte": 1000, "lte": 5000}|
    /// |similar_apps|string|"com.twitter.android" - Twitter similar apps|
    /// |reverse_similar_apps|string|"com.twitter.android" - Apps with Twitter in similar's list|
    /// |rating_avg|ValueRange|{"gte": 3.5, "lte": 5.0}|
    /// |hosts|string||
    /// |with_ads|boolean|With Ads|
    /// |advertised|boolean|Advertised|
    /// </para>
    /// </remarks>
    public Task<PlayAppListResponse> GetFilterSearchPlayAppsQueryPost(GetFilterSearchPlayAppsQueryPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/play/apps/query"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PlayAppListResponse>(),
            GetFilterSearchPlayAppsQueryPostError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get the Google Play listing of an app in any language
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PlayListing"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetListingPlayAppsIdListingGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the store listing of one app for a country and language exactly as Google Play serves it: title, short and full description, what's new, icon, feature graphic, trailer and screenshots. Any language Google Play Console accepts can be requested. The listing is crawled on demand and kept; <c>freshness</c> sets how old a kept listing may be before it is crawled again. A call waits for a running crawl for up to about 30 seconds and answers 202 with the crawl state if it is still running; repeat the same request to get the listing. Pass <c>wait=false</c> to get the 202 immediately. Repeated requests for the same listing share one crawl. <c>translated</c> tells whether Google Play machine-translated the texts instead of showing a translation the developer supplied. The call that queues a crawl costs the crawl price, even when it answers 202; a call served from a kept listing, including a kept not-found, costs the read price; a 202 to a call that found the crawl already running costs nothing, and so do a 400, a 422, a 429 and any 5xx, a failed crawl (502) included.
    /// </remarks>
    public Task<PlayListing> GetListingPlayAppsIdListingGet(GetListingPlayAppsIdListingGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/play/apps/{id}/listing"),
            [new TemplateParam("id", request.Id)],
            [
                new Param("country", request.Country),
                new Param("language", request.Language),
                new Param("freshness", request.Freshness),
                new Param("wait", request.Wait),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PlayListing>(),
            GetListingPlayAppsIdListingGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Google Play app available countries
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StoreCountries"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPlayAppCountriesPlayInfoCountriesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This query returns the list of Google Play app available countries.
    /// </remarks>
    public Task<StoreCountries> GetPlayAppCountriesPlayInfoCountriesGet(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/play/info/countries"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<StoreCountries>(),
            GetPlayAppCountriesPlayInfoCountriesGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Google Play app available languages
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StoreLanguages"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPlayAppLanguagesPlayInfoLanguagesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This query returns the list of Google Play app available languages.
    /// </remarks>
    public Task<StoreLanguages> GetPlayAppLanguagesPlayInfoLanguagesGet(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/play/info/languages"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<StoreLanguages>(),
            GetPlayAppLanguagesPlayInfoLanguagesGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Google Play rankings data
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiResponseListModelsResponsesResponsePlayRankingItem"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPlayRankingsPlayRankingsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns Google Play chart positions over a date range, filtered by country, category and collection. One row per app per chart per day.
    /// </remarks>
    public Task<ApiResponseListModelsResponsesResponsePlayRankingItem> GetPlayRankingsPlayRankingsGet(GetPlayRankingsPlayRankingsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/play/rankings"),
            [],
            [
                new Param("date_start", request.DateStart?.ToDate()),
                new Param("date_end", request.DateEnd?.ToDate()),
                new Param("app", request.App),
                new Param("country", request.Country),
                new Param("category", request.Category),
                new Param("collection", request.Collection),
                new Param("rank_start", request.RankStart),
                new Param("rank_end", request.RankEnd),
                new Param("limit", request.Limit),
                new Param("page", request.Page),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiResponseListModelsResponsesResponsePlayRankingItem>(),
            GetPlayRankingsPlayRankingsGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Queue a recrawl of a Google Play app
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRecrawlPlayAppsIdRecrawlGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Queues a fresh crawl of one Google Play app for the given country and language. Returns 200 once the job is accepted; the updated data appears on the app endpoints after the crawl completes.
    /// </remarks>
    public Task GetRecrawlPlayAppsIdRecrawlGet(GetRecrawlPlayAppsIdRecrawlGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/play/apps/{id}/recrawl"),
            [new TemplateParam("id", request.Id)],
            [new Param("country", request.Country), new Param("language", request.Language)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetRecrawlPlayAppsIdRecrawlGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Google Play app reviews by app ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="PlayReview"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetReviewsPlayAppsIdReviewsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns user reviews for a single Google Play app. Reviews are country- and language-specific, so <c>country</c> and <c>language</c> change which set is returned.
    /// </remarks>
    public Task<IReadOnlyList<PlayReview>> GetReviewsPlayAppsIdReviewsGet(GetReviewsPlayAppsIdReviewsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/play/apps/{id}/reviews"),
            [new TemplateParam("id", request.Id)],
            [
                new Param("language", request.Language),
                new Param("country", request.Country),
                new Param("limit", request.Limit),
                new Param("sort", request.Sort),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<PlayReview>>(),
            GetReviewsPlayAppsIdReviewsGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get similar Google Play apps
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PlayAppListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSimilarPlayAppsSimilarPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the apps Google Play lists as similar to the given app. Set <c>link</c> to the reverse direction to get the apps that list the given app as similar to them instead.
    /// </remarks>
    public Task<PlayAppListResponse> GetSimilarPlayAppsSimilarPost(GetSimilarPlayAppsSimilarPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/play/apps/similar"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PlayAppListResponse>(),
            GetSimilarPlayAppsSimilarPostError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Google Play keyword suggestions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Suggest"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSuggestsPlaySuggestionsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns Google Play search autocomplete suggestions for a term in one country and language. Responds 202 with a partial result while a fresh crawl is in progress; <c>freshness</c> sets how old a cached result may be before it is recrawled.
    /// </remarks>
    public Task<Suggest> GetSuggestsPlaySuggestionsGet(GetSuggestsPlaySuggestionsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/play/suggestions"),
            [],
            [
                new Param("q", request.Q),
                new Param("country", request.Country),
                new Param("lang", request.Lang),
                new Param("freshness", request.Freshness),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Suggest>(),
            GetSuggestsPlaySuggestionsGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Summarise Google Play apps matching a filter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SummaryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSummaryPlayAppsSummaryPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns aggregate totals for the set of Google Play apps matching a structured filter, without returning the apps themselves. Takes the same filter body as <c>POST /play/apps/query</c>.
    /// </remarks>
    public Task<SummaryResponse> GetSummaryPlayAppsSummaryPost(GetSummaryPlayAppsSummaryPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/play/apps/summary"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SummaryResponse>(),
            GetSummaryPlayAppsSummaryPostError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);
}
